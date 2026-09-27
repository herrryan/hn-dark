/**
 * Hacker News Dark Mode - Content Script
 * Runs at document_start to apply dark theme settings instantaneously without FOUC.
 */

(() => {
  'use strict';

  // Default configuration
  const DEFAULT_SETTINGS = {
    enabled: true,
    theme: 'charcoal',      // charcoal, oled, nord, warm
    accent: 'orange',       // orange, cyan, emerald, purple, monochrome
    font: 'modern',         // modern, classic
    maxWidth: 'comfortable',// comfortable, full
    commentGuides: true,    // boolean
    headerStyle: 'dark',    // dark, classic
    dimVisited: true        // boolean
  };

  /**
   * Applies dark mode preferences directly to <html> element dataset/attributes.
   * Modifies only documentElement attributes so CSS rules instantly take effect.
   */
  function applySettings(settings) {
    const docEl = document.documentElement;
    if (!docEl) return;

    if (settings.enabled === false) {
      docEl.setAttribute('data-hn-dark', 'disabled');
    } else {
      docEl.removeAttribute('data-hn-dark');
    }

    docEl.setAttribute('data-hn-theme', settings.theme || DEFAULT_SETTINGS.theme);
    docEl.setAttribute('data-hn-accent', settings.accent || DEFAULT_SETTINGS.accent);
    docEl.setAttribute('data-hn-font', settings.font || DEFAULT_SETTINGS.font);
    docEl.setAttribute('data-hn-width', settings.maxWidth || DEFAULT_SETTINGS.maxWidth);
    docEl.setAttribute('data-hn-guides', settings.commentGuides === false ? 'false' : 'true');
    docEl.setAttribute('data-hn-header', settings.headerStyle || DEFAULT_SETTINGS.headerStyle);
    docEl.setAttribute('data-hn-dim-visited', settings.dimVisited === false ? 'false' : 'true');
  }

  /**
   * Retrieves user preferences from chrome.storage.sync with fallback to local.
   */
  async function loadSettings() {
    try {
      const storageArea = chrome.storage.sync || chrome.storage.local;
      const stored = await storageArea.get(DEFAULT_SETTINGS);
      return { ...DEFAULT_SETTINGS, ...stored };
    } catch (err) {
      console.warn('[HN Dark Mode] Could not load settings, using defaults:', err);
      return DEFAULT_SETTINGS;
    }
  }

  /**
   * Initialize theme configuration immediately at document_start.
   */
  async function init() {
    const settings = await loadSettings();
    applySettings(settings);
  }

  // Execute initialization immediately
  init();

  /**
   * Listen for real-time changes from the extension popup or background worker.
   */
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName !== 'sync' && areaName !== 'local') return;

    (async () => {
      try {
        const currentSettings = await loadSettings();
        applySettings(currentSettings);
      } catch (err) {
        console.error('[HN Dark Mode] Error updating settings:', err);
      }
    })();
  });

  /**
   * Listen for direct runtime messages (e.g., status query or instant toggle).
   */
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'GET_THEME_STATUS') {
      const isDark = !document.documentElement.hasAttribute('data-hn-dark');
      sendResponse({ success: true, active: isDark });
      return false;
    }

    if (message.type === 'APPLY_SETTINGS') {
      applySettings(message.settings);
      sendResponse({ success: true });
      return false;
    }

    return false;
  });
})();

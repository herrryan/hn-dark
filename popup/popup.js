/**
 * Hacker News Dark Mode - Popup Script
 * Handles real-time customization, state persistence via chrome.storage.
 */

(() => {
  'use strict';

  const DEFAULT_SETTINGS = {
    enabled: true,
    theme: 'charcoal',
    accent: 'orange',
    font: 'modern',
    maxWidth: 'comfortable',
    commentGuides: true,
    headerStyle: 'dark',
    dimVisited: true
  };

  const ACCENT_COLORS = {
    orange: '#ff6600',
    cyan: '#38bdf8',
    emerald: '#10b981',
    purple: '#a855f7',
    monochrome: '#e4e4e7'
  };

  // DOM Elements
  const toggleEnabled = document.getElementById('toggle-enabled');
  const settingsGroup = document.getElementById('settings-group');
  const themeButtons = document.querySelectorAll('.theme-btn');
  const accentButtons = document.querySelectorAll('.accent-btn');
  const toggleGuides = document.getElementById('toggle-guides');
  const toggleDimVisited = document.getElementById('toggle-dim-visited');
  const toggleFont = document.getElementById('toggle-font');
  const toggleWidth = document.getElementById('toggle-width');
  const toggleHeader = document.getElementById('toggle-header');
  const openHnLink = document.getElementById('open-hn');

  /**
   * Helper to get storage area
   */
  function getStorage() {
    return chrome.storage.sync || chrome.storage.local;
  }

  /**
   * Update active accent visual highlight inside popup
   */
  function updatePopupAccentColor(accent) {
    const color = ACCENT_COLORS[accent] || ACCENT_COLORS.orange;
    document.documentElement.style.setProperty('--accent-orange', color);
  }

  /**
   * Render UI elements from settings object
   */
  function renderSettings(settings) {
    // Master Switch
    toggleEnabled.checked = settings.enabled !== false;
    if (toggleEnabled.checked) {
      settingsGroup.classList.remove('disabled');
    } else {
      settingsGroup.classList.add('disabled');
    }

    // Active Theme
    const currentTheme = settings.theme || DEFAULT_SETTINGS.theme;
    themeButtons.forEach((btn) => {
      if (btn.dataset.theme === currentTheme) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Active Accent
    const currentAccent = settings.accent || DEFAULT_SETTINGS.accent;
    accentButtons.forEach((btn) => {
      if (btn.dataset.accent === currentAccent) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    updatePopupAccentColor(currentAccent);

    // Option Toggles
    toggleGuides.checked = settings.commentGuides !== false;
    toggleDimVisited.checked = settings.dimVisited !== false;
    toggleFont.checked = (settings.font || DEFAULT_SETTINGS.font) === 'modern';
    toggleWidth.checked = (settings.maxWidth || DEFAULT_SETTINGS.maxWidth) === 'comfortable';
    toggleHeader.checked = (settings.headerStyle || DEFAULT_SETTINGS.headerStyle) === 'dark';
  }

  /**
   * Persist changes to chrome.storage
   */
  async function saveSetting(delta) {
    try {
      await getStorage().set(delta);
    } catch (err) {
      console.error('[HN Dark Mode] Failed to save setting:', err);
    }
  }

  /**
   * Wire up event handlers
   */
  function setupListeners() {
    // Master Toggle
    toggleEnabled.addEventListener('change', async () => {
      const isEnabled = toggleEnabled.checked;
      if (isEnabled) {
        settingsGroup.classList.remove('disabled');
      } else {
        settingsGroup.classList.add('disabled');
      }
      await saveSetting({ enabled: isEnabled });
    });

    // Theme Buttons
    themeButtons.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const theme = btn.dataset.theme;
        themeButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        await saveSetting({ theme });
      });
    });

    // Accent Buttons
    accentButtons.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const accent = btn.dataset.accent;
        accentButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        updatePopupAccentColor(accent);
        await saveSetting({ accent });
      });
    });

    // Thread Guides
    toggleGuides.addEventListener('change', async () => {
      await saveSetting({ commentGuides: toggleGuides.checked });
    });

    // Dim Visited
    toggleDimVisited.addEventListener('change', async () => {
      await saveSetting({ dimVisited: toggleDimVisited.checked });
    });

    // Modern Typography
    toggleFont.addEventListener('change', async () => {
      const font = toggleFont.checked ? 'modern' : 'classic';
      await saveSetting({ font });
    });

    // Comfortable Max-Width
    toggleWidth.addEventListener('change', async () => {
      const maxWidth = toggleWidth.checked ? 'comfortable' : 'full';
      await saveSetting({ maxWidth });
    });

    // Header Style
    toggleHeader.addEventListener('change', async () => {
      const headerStyle = toggleHeader.checked ? 'dark' : 'classic';
      await saveSetting({ headerStyle });
    });
  }

  /**
   * Detect current active tab
   */
  async function checkActiveTab() {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab?.url && tab.url.includes('news.ycombinator.com')) {
        openHnLink.textContent = 'Active on Tab';
        openHnLink.style.pointerEvents = 'none';
        openHnLink.style.opacity = '0.75';
      }
    } catch {
      // Ignore if tab URL is not accessible
    }
  }

  /**
   * Initialize popup UI
   */
  async function init() {
    setupListeners();

    try {
      const stored = await getStorage().get(DEFAULT_SETTINGS);
      const settings = { ...DEFAULT_SETTINGS, ...stored };
      renderSettings(settings);
    } catch (err) {
      console.error('[HN Dark Mode] Could not load settings in popup:', err);
      renderSettings(DEFAULT_SETTINGS);
    }

    await checkActiveTab();
  }

  document.addEventListener('DOMContentLoaded', init);
})();

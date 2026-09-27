/**
 * Hacker News Dark Mode - Service Worker (Manifest V3)
 * Manages extension lifecycle, shortcut commands, and action badges.
 * Follows strict ephemeral state rules (no global in-memory state).
 */

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

/**
 * Updates extension action badge text according to active state.
 */
async function updateActionBadge(enabled) {
  try {
    if (!enabled) {
      await chrome.action.setBadgeText({ text: 'OFF' });
      await chrome.action.setBadgeBackgroundColor({ color: '#6b7280' });
    } else {
      await chrome.action.setBadgeText({ text: '' });
    }
  } catch (err) {
    console.error('[HN Dark Mode] Failed to set badge:', err);
  }
}

/**
 * Handle initial installation / update.
 */
chrome.runtime.onInstalled.addListener(async (details) => {
  try {
    const storageArea = chrome.storage.sync || chrome.storage.local;
    const existing = await storageArea.get(null);

    // Populate missing defaults without overwriting existing user choices
    const toSet = {};
    for (const [key, value] of Object.entries(DEFAULT_SETTINGS)) {
      if (existing[key] === undefined) {
        toSet[key] = value;
      }
    }

    if (Object.keys(toSet).length > 0) {
      await storageArea.set(toSet);
    }

    const isEnabled = existing.enabled !== undefined ? existing.enabled : true;
    await updateActionBadge(isEnabled);
  } catch (err) {
    console.error('[HN Dark Mode] Setup onInstalled error:', err);
  }
});

/**
 * Restore badge on browser startup.
 */
chrome.runtime.onStartup.addListener(async () => {
  try {
    const storageArea = chrome.storage.sync || chrome.storage.local;
    const { enabled = true } = await storageArea.get('enabled');
    await updateActionBadge(enabled);
  } catch (err) {
    console.error('[HN Dark Mode] onStartup error:', err);
  }
});

/**
 * Keep action badge in sync whenever storage changes.
 */
chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName !== 'sync' && areaName !== 'local') return;

  if (changes.enabled) {
    (async () => {
      await updateActionBadge(changes.enabled.newValue);
    })();
  }
});

/**
 * Handle keyboard shortcuts (e.g., Alt+Shift+D).
 */
chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'toggle_theme') {
    try {
      const storageArea = chrome.storage.sync || chrome.storage.local;
      const { enabled = true } = await storageArea.get('enabled');
      const nextState = !enabled;
      await storageArea.set({ enabled: nextState });
      await updateActionBadge(nextState);
    } catch (err) {
      console.error('[HN Dark Mode] Failed to toggle via shortcut:', err);
    }
  }
});

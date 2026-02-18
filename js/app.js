/**
 * BoardKey — Main Application Controller
 *
 * Wires together all modules: keyboard rendering, layout data,
 * shortcut capture, URL sharing, and the shortcuts browser.
 */

import { physicalLayouts, layoutMappings, layoutList, getPhysicalLayout } from './layouts.js';
import { appShortcuts } from './shortcuts.js';
import { detectPlatform, detectLayout, getModifierLabels, getModifierKeyLabel } from './detector.js';
import { renderKeyboard, highlightKeys, clearHighlights } from './keyboard-renderer.js';
import { formatShortcut, getHighlightCodes, translateShortcut, getKeyLabel, isMouseCode } from './mapping-engine.js';
import { buildShareURL, readShortcutFromURL, updateURL, clearURL, decodeShortcut } from './sharing.js';

// ── State ──────────────────────────────────────────────────
const state = {
  platform: 'windows',
  layoutId: 'en-us',
  appId: '',
  currentShortcut: null, // { mods: [], code: '', layout: '', platform: '' }
  keyElements: new Map(),
  theme: 'dark',
  pressedMods: new Set(),
  mode: 'real', // 'real' = simultaneous hold required, 'soft' = click-to-toggle
};

// ── DOM References ─────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const dom = {};

function cacheDom() {
  dom.keyboard = $('#keyboard');
  dom.selectLayout = $('#select-layout');
  dom.platformToggle = $('#platform-toggle');
  dom.platformBtns = document.querySelectorAll('.platform-btn');
  dom.selectApp = $('#select-app');
  dom.shortcutText = $('#shortcut-text');
  dom.shortcutAction = $('#shortcut-action');
  dom.sharePanel = $('#share-panel');
  dom.shareUrl = $('#share-url');
  dom.btnCopyUrl = $('#btn-copy-url');
  dom.copyFeedback = $('#copy-feedback');
  dom.translationsGrid = $('#translations-grid');
  dom.shortcutsGrid = $('#shortcuts-grid');
  dom.shortcutsEmpty = $('#shortcuts-empty');
  dom.shortcutsSearch = $('#shortcuts-search');
  dom.shortcutsBrowserTitle = $('#shortcuts-browser-title');
  dom.sharedBanner = $('#shared-banner');
  dom.sharedBannerDetail = $('#shared-banner-detail');
  dom.btnDismissBanner = $('#btn-dismiss-banner');
  dom.btnTheme = $('#btn-theme');
  dom.btnHelp = $('#btn-help');
  dom.helpModal = $('#help-modal');
  // Mode toggle, reset, mouse
  dom.btnMode = $('#btn-mode');
  dom.modeLabel = $('#mode-label');
  dom.modeDot = $('#mode-dot');
  dom.btnReset = $('#btn-reset');
  dom.mouseArea = $('#mouse-area');
  dom.mouseLeft = $('#mouse-left');
  dom.mouseRight = $('#mouse-right');
  dom.mouseMiddle = $('#mouse-middle');
  dom.mouseActiveLabel = $('#mouse-active-label');
}

// ── Initialization ─────────────────────────────────────────
function init() {
  cacheDom();

  // Detect platform & layout
  state.platform = detectPlatform();
  state.layoutId = detectLayout();

  // Load theme preference
  const savedTheme = localStorage.getItem('boardkey-theme');
  if (savedTheme) {
    state.theme = savedTheme;
  } else {
    // Default to dark
    state.theme = 'dark';
  }
  applyTheme();

  // Populate selects
  populateLayoutSelect();
  populateAppSelect();

  // Set initial select/toggle values
  setActivePlatformBtn(state.platform);
  dom.selectLayout.value = state.layoutId;

  // Render keyboard
  renderCurrentKeyboard();

  // Check URL for shared shortcut
  const shared = readShortcutFromURL();
  if (shared) {
    handleSharedShortcut(shared);
  }

  // Bind events
  bindEvents();

  // Show initial shortcuts browser state
  updateShortcutsBrowser();
}

// ── Keyboard Rendering ─────────────────────────────────────
function renderCurrentKeyboard() {
  const layoutMeta = layoutList.find(l => l.id === state.layoutId);
  const physicalType = layoutMeta ? layoutMeta.physical : 'ansi';
  const physical = getPhysicalLayout(physicalType, state.platform);
  const mapping = layoutMappings[state.layoutId] || layoutMappings['en-us'];

  state.keyElements = renderKeyboard(dom.keyboard, physical, mapping, state.platform);

  // Re-highlight if there's a current shortcut
  if (state.currentShortcut) {
    const sourceMapping = layoutMappings[state.currentShortcut.layout] || layoutMappings['en-us'];
    const translated = translateShortcut(
      state.currentShortcut,
      state.platform,
      layoutMappings[state.layoutId],
      sourceMapping
    );
    const codes = getHighlightCodes(translated.mods, translated.code);
    highlightKeys(state.keyElements, codes);
  }
}

// ── Populate Selects ───────────────────────────────────────
function populateLayoutSelect() {
  dom.selectLayout.innerHTML = '';
  for (const layout of layoutList) {
    const opt = document.createElement('option');
    opt.value = layout.id;
    opt.textContent = `${layout.name} (${layout.region})`;
    dom.selectLayout.appendChild(opt);
  }
}

function populateAppSelect() {
  // Keep the "General" option
  dom.selectApp.innerHTML = '<option value="">General</option>';
  for (const app of appShortcuts) {
    const opt = document.createElement('option');
    opt.value = app.id;
    opt.textContent = `${app.icon} ${app.name}`;
    dom.selectApp.appendChild(opt);
  }
}

// ── Event Binding ──────────────────────────────────────────
function bindEvents() {
  // Keyboard capture
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);

  // Prevent default for captured shortcuts
  document.addEventListener('keydown', (e) => {
    // Don't prevent default when typing in inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
      return;
    }
    // Prevent browser shortcuts from firing when capturing
    if (e.metaKey || e.ctrlKey || e.altKey) {
      e.preventDefault();
    }
  });

  // Select changes
  dom.selectLayout.addEventListener('change', () => {
    state.layoutId = dom.selectLayout.value;
    renderCurrentKeyboard();
    if (state.currentShortcut) {
      updateShortcutDisplay();
      updateSharePanel();
    }
    updateShortcutsBrowser();
  });

  dom.platformBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.platform = btn.dataset.platform;
      setActivePlatformBtn(state.platform);
      renderCurrentKeyboard();
      if (state.currentShortcut) {
        updateShortcutDisplay();
        updateSharePanel();
      }
      updateShortcutsBrowser();
    });
  });

  dom.selectApp.addEventListener('change', () => {
    state.appId = dom.selectApp.value;
    if (state.currentShortcut) {
      state.currentShortcut.app = state.appId || null;
      // Re-check if the shortcut matches a known action in the new app
      const matchedAction = findMatchingAction(state.currentShortcut.mods, state.currentShortcut.code);
      state.currentShortcut.action = matchedAction || null;
      updateShortcutDisplay();
      updateSharePanel();
      updateURL(state.currentShortcut);
    }
    updateShortcutsBrowser();
  });

  // Copy URL
  dom.btnCopyUrl.addEventListener('click', copyShareURL);

  // Copy as text for specific platform
  document.querySelectorAll('.btn-copy-platform').forEach(btn => {
    btn.addEventListener('click', () => copyShortcutAsText(btn.dataset.copyPlatform));
  });

  // Dismiss shared banner
  dom.btnDismissBanner.addEventListener('click', () => {
    dom.sharedBanner.classList.add('hidden');
  });

  // Theme toggle
  dom.btnTheme.addEventListener('click', toggleTheme);

  // Help modal
  dom.btnHelp.addEventListener('click', () => {
    dom.helpModal.classList.remove('hidden');
  });

  dom.helpModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop') || e.target.classList.contains('modal-close')) {
      dom.helpModal.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dom.helpModal.classList.add('hidden');
    }
  });

  // Shortcuts search
  dom.shortcutsSearch.addEventListener('input', () => {
    updateShortcutsBrowser();
  });

  // Keyboard click events (bubbled from key elements)
  dom.keyboard.addEventListener('keyclick', (e) => {
    const { code, modifier } = e.detail;

    if (state.mode === 'soft') {
      // Soft mode: click modifiers to toggle, then click a key to capture
      if (modifier) {
        const modName = codeToModName(code);
        if (modName) {
          if (state.pressedMods.has(modName)) {
            state.pressedMods.delete(modName);
          } else {
            state.pressedMods.add(modName);
          }
          const el = state.keyElements.get(code);
          if (el) el.classList.toggle('active', state.pressedMods.has(modName));
        }
      } else {
        // Toggle off if clicking the same key that's already active
        if (isCurrentShortcutKey(code, [...state.pressedMods])) {
          resetShortcut();
        } else {
          captureShortcut([...state.pressedMods], code);
        }
        state.pressedMods.clear();
      }
    } else {
      // Real mode: clicking a key on the virtual keyboard captures it immediately
      if (!modifier) {
        // Toggle off if clicking the same key
        if (isCurrentShortcutKey(code, [])) {
          resetShortcut();
        } else {
          captureShortcut([], code);
        }
      }
    }
  });

  // Hash change (e.g., user navigates back/forward)
  window.addEventListener('hashchange', () => {
    const shared = readShortcutFromURL();
    if (shared) {
      handleSharedShortcut(shared);
    }
  });

  // ── Mode Toggle ──────────────────────────────────────────
  dom.btnMode.addEventListener('click', () => {
    state.mode = state.mode === 'real' ? 'soft' : 'real';
    dom.modeLabel.textContent = state.mode === 'real' ? 'Real' : 'Soft';
    dom.modeDot.classList.toggle('soft', state.mode === 'soft');
    // Clear any toggled virtual mods when switching to real
    if (state.mode === 'real') {
      state.pressedMods.clear();
      if (!state.currentShortcut) {
        clearHighlights(state.keyElements);
      } else {
        highlightCurrentShortcut();
      }
    }
  });

  // ── Reset Button ─────────────────────────────────────────
  dom.btnReset.addEventListener('click', resetShortcut);

  // ── Mouse Event Capture ──────────────────────────────────
  function handleMouseCapture(e) {
    e.preventDefault();
    e.stopPropagation();
    let mouseCode;
    switch (e.button) {
      case 0: mouseCode = 'MouseLeft'; break;
      case 1: mouseCode = 'MouseMiddle'; break;
      case 2: mouseCode = 'MouseRight'; break;
      default: return;
    }

    const mods = getEventMods(e);
    if (isCurrentShortcutKey(mouseCode, mods)) {
      resetShortcut();
    } else {
      captureShortcut(mods, mouseCode);
      highlightMouseButton(mouseCode);
    }
  }

  // Listen on the whole mouse area AND each individual SVG button
  dom.mouseArea.addEventListener('mousedown', handleMouseCapture);
  [dom.mouseLeft, dom.mouseRight, dom.mouseMiddle].forEach(el => {
    if (el) el.addEventListener('mousedown', handleMouseCapture);
  });

  dom.mouseArea.addEventListener('contextmenu', (e) => e.preventDefault());

  dom.mouseArea.addEventListener('wheel', (e) => {
    e.preventDefault();
    const mouseCode = e.deltaY < 0 ? 'ScrollUp' : 'ScrollDown';
    const mods = getEventMods(e);
    if (isCurrentShortcutKey(mouseCode, mods)) {
      resetShortcut();
    } else {
      captureShortcut(mods, mouseCode);
      highlightMouseButton(mouseCode);
    }
  }, { passive: false });

  // ── Nudge: pulse mouse box when user clicks/scrolls outside it ──
  function nudgeMouseArea() {
    dom.mouseArea.classList.remove('attention');
    // Force reflow so re-adding the class restarts the animation
    void dom.mouseArea.offsetWidth;
    dom.mouseArea.classList.add('attention');
  }

  dom.mouseArea.addEventListener('animationend', () => {
    dom.mouseArea.classList.remove('attention');
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('#mouse-area') || e.target.closest('.keyboard') || e.target.closest('button') || e.target.closest('select') || e.target.closest('input') || e.target.closest('a') || e.target.closest('.modal')) return;
    nudgeMouseArea();
  });

  document.addEventListener('wheel', (e) => {
    if (e.target.closest('#mouse-area')) return;
    nudgeMouseArea();
  }, { passive: true });
}

// ── Key Capture ────────────────────────────────────────────
function handleKeyDown(e) {
  // Ignore when focused on inputs
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
    return;
  }

  // Don't capture Tab (for accessibility)
  if (e.key === 'Tab') return;

  const mods = [];
  if (e.metaKey) mods.push('meta');
  if (e.ctrlKey) mods.push('ctrl');
  if (e.altKey) mods.push('alt');
  if (e.shiftKey) mods.push('shift');

  const code = e.code;

  // Skip if it's only a modifier key by itself (wait for the full combo)
  if (isModifierOnlyCode(code)) {
    // Highlight the modifier key visually
    const el = state.keyElements.get(code);
    if (el) el.classList.add('active');
    return;
  }

  e.preventDefault();
  captureShortcut(mods, code);
}

function handleKeyUp(e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
    return;
  }

  // If releasing a modifier with no non-modifier key pressed,
  // and no shortcut was captured, just clear the highlight
  if (isModifierOnlyCode(e.code)) {
    // If we don't have a current shortcut, clear highlights
    if (!state.currentShortcut) {
      const el = state.keyElements.get(e.code);
      if (el) el.classList.remove('active');
    }
  }
}

function captureShortcut(mods, code) {
  state.currentShortcut = {
    mods,
    code,
    layout: state.layoutId,
    platform: state.platform,
    app: state.appId || null,
  };

  // Check if this matches a known app shortcut
  const matchedAction = findMatchingAction(mods, code);
  if (matchedAction) {
    state.currentShortcut.action = matchedAction;
  }

  updateShortcutDisplay();
  updateSharePanel();
  highlightCurrentShortcut();
  updateURL(state.currentShortcut);
}

// ── Display Updates ────────────────────────────────────────
function updateShortcutDisplay() {
  const sc = state.currentShortcut;
  if (!sc) return;

  const targetMapping = layoutMappings[state.layoutId] || layoutMappings['en-us'];
  const sourceMapping = layoutMappings[sc.layout] || layoutMappings['en-us'];
  const translated = translateShortcut(sc, state.platform, targetMapping, sourceMapping);
  const display = translated.displayString;

  // Build HTML with styled key chips
  const parts = display.split(' + ');
  dom.shortcutText.innerHTML = parts.map(p =>
    `<span class="shortcut-key">${escapeHtml(p)}</span>`
  ).join('<span class="shortcut-plus">+</span>');

  // Show action if matched
  if (sc.action) {
    dom.shortcutAction.textContent = `${sc.action}${sc.app ? ` in ${getAppName(sc.app)}` : ''}`;
    dom.shortcutAction.classList.remove('hidden');
  } else {
    dom.shortcutAction.classList.add('hidden');
  }
}

function highlightCurrentShortcut() {
  const sc = state.currentShortcut;
  if (!sc) {
    clearHighlights(state.keyElements);
    clearMouseHighlights();
    return;
  }

  // Translate to current layout/platform
  const sourceMapping = layoutMappings[sc.layout] || layoutMappings['en-us'];
  const translated = translateShortcut(sc, state.platform, layoutMappings[state.layoutId], sourceMapping);

  if (isMouseCode(translated.code)) {
    // For mouse codes: highlight modifier keys on keyboard, mouse button on mouse SVG
    const modKeyCodes = modsToCodes(translated.mods);
    highlightKeys(state.keyElements, modKeyCodes);
    highlightMouseButton(translated.code);
  } else {
    clearMouseHighlights();
    const codes = getHighlightCodes(translated.mods, translated.code);
    highlightKeys(state.keyElements, codes);
  }
}

function updateSharePanel() {
  const sc = state.currentShortcut;
  if (!sc) {
    dom.sharePanel.classList.add('hidden');
    return;
  }

  dom.sharePanel.classList.remove('hidden');

  const url = buildShareURL(sc);
  dom.shareUrl.value = url;

  // Build translation previews
  updateTranslations();
}

function updateTranslations() {
  const sc = state.currentShortcut;
  if (!sc) return;

  dom.translationsGrid.innerHTML = '';

  // Show translations for a selection of different layout/platform combos
  const combos = getTranslationCombos();

  const sourceMapping = layoutMappings[sc.layout] || layoutMappings['en-us'];

  for (const combo of combos) {
    const mapping = layoutMappings[combo.layoutId] || layoutMappings['en-us'];
    const translated = translateShortcut(sc, combo.platform, mapping, sourceMapping);

    const card = document.createElement('div');
    card.className = 'translation-card';
    card.innerHTML = `
      <span class="translation-card-layout">${combo.layoutName}</span>
      <span class="translation-card-shortcut">${escapeHtml(translated.displayString)}</span>
      <span class="translation-card-platform">${combo.platformLabel}</span>
    `;

    // Click to switch to that layout/platform
    card.addEventListener('click', () => {
      state.layoutId = combo.layoutId;
      state.platform = combo.platform;
      dom.selectLayout.value = combo.layoutId;
      setActivePlatformBtn(combo.platform);
      renderCurrentKeyboard();
      updateShortcutDisplay();
      updateSharePanel();
      updateShortcutsBrowser();
    });

    dom.translationsGrid.appendChild(card);
  }
}

function getTranslationCombos() {
  // Show a curated set of translations that would be interesting
  const combos = [];
  const current = `${state.layoutId}-${state.platform}`;

  const interesting = [
    { layoutId: 'en-us', platform: 'mac', layoutName: 'US English', platformLabel: 'macOS' },
    { layoutId: 'en-us', platform: 'windows', layoutName: 'US English', platformLabel: 'Windows' },
    { layoutId: 'de-de', platform: 'windows', layoutName: 'German QWERTZ', platformLabel: 'Windows' },
    { layoutId: 'de-de', platform: 'mac', layoutName: 'German QWERTZ', platformLabel: 'macOS' },
    { layoutId: 'fr-fr', platform: 'windows', layoutName: 'French AZERTY', platformLabel: 'Windows' },
    { layoutId: 'fr-fr', platform: 'mac', layoutName: 'French AZERTY', platformLabel: 'macOS' },
    { layoutId: 'en-gb', platform: 'windows', layoutName: 'UK English', platformLabel: 'Windows' },
    { layoutId: 'ru-ru', platform: 'windows', layoutName: 'Russian', platformLabel: 'Windows' },
    { layoutId: 'ja-jp', platform: 'mac', layoutName: 'Japanese', platformLabel: 'macOS' },
    { layoutId: 'es-es', platform: 'windows', layoutName: 'Spanish', platformLabel: 'Windows' },
    { layoutId: 'sv-se', platform: 'windows', layoutName: 'Swedish', platformLabel: 'Windows' },
    { layoutId: 'pt-br', platform: 'windows', layoutName: 'Portuguese (BR)', platformLabel: 'Windows' },
  ];

  for (const item of interesting) {
    const key = `${item.layoutId}-${item.platform}`;
    if (key !== current) {
      combos.push(item);
    }
    if (combos.length >= 6) break;
  }

  return combos;
}

// ── Shared Shortcut Handling ───────────────────────────────
function handleSharedShortcut(shared) {
  // Set the shortcut as current
  state.currentShortcut = {
    mods: shared.mods,
    code: shared.code,
    layout: shared.layout,
    platform: shared.platform,
    app: shared.app,
    action: shared.action,
  };

  // If we have app context, select it
  if (shared.app) {
    state.appId = shared.app;
    dom.selectApp.value = shared.app;
  }

  // Show the banner
  const sourceLayout = layoutList.find(l => l.id === shared.layout);
  const sourcePlatformLabel = shared.platform === 'mac' ? 'macOS' : shared.platform === 'windows' ? 'Windows' : 'Linux';
  const sourceMapping = layoutMappings[shared.layout] || layoutMappings['en-us'];
  const sourceDisplay = formatShortcut(shared.mods, shared.code, shared.platform, sourceMapping);

  let detail = `Originally: ${sourceDisplay}`;
  if (sourceLayout) {
    detail += ` on ${sourceLayout.name} (${sourcePlatformLabel})`;
  }
  if (shared.action) {
    detail += ` — ${shared.action}`;
  }

  dom.sharedBannerDetail.textContent = detail;
  dom.sharedBanner.classList.remove('hidden');

  // Update display for the RECIPIENT's layout/platform
  updateShortcutDisplay();
  updateSharePanel();
  highlightCurrentShortcut();
  updateShortcutsBrowser();
}

// ── Shortcuts Browser ──────────────────────────────────────
function updateShortcutsBrowser() {
  const searchTerm = dom.shortcutsSearch.value.trim().toLowerCase();

  if (!state.appId && !searchTerm) {
    dom.shortcutsGrid.classList.add('hidden');
    dom.shortcutsEmpty.classList.remove('hidden');
    dom.shortcutsBrowserTitle.textContent = 'Keyboard Shortcuts';
    return;
  }

  dom.shortcutsGrid.classList.remove('hidden');
  dom.shortcutsEmpty.classList.add('hidden');
  dom.shortcutsGrid.innerHTML = '';

  let apps = appShortcuts;
  if (state.appId) {
    apps = apps.filter(a => a.id === state.appId);
    const app = apps[0];
    if (app) {
      dom.shortcutsBrowserTitle.textContent = `${app.icon} ${app.name} Shortcuts`;
    }
  } else {
    dom.shortcutsBrowserTitle.textContent = searchTerm ? 'Search Results' : 'Keyboard Shortcuts';
  }

  const mapping = layoutMappings[state.layoutId] || layoutMappings['en-us'];

  for (const appData of apps) {
    for (const category of appData.categories) {
      const matchingShortcuts = category.shortcuts.filter(sc => {
        if (!searchTerm) return true;
        return sc.action.toLowerCase().includes(searchTerm);
      });

      if (matchingShortcuts.length === 0) continue;

      // Category header
      const categoryHeader = document.createElement('div');
      categoryHeader.className = 'shortcuts-category';
      categoryHeader.textContent = apps.length > 1
        ? `${appData.icon} ${appData.name} — ${category.name}`
        : category.name;
      dom.shortcutsGrid.appendChild(categoryHeader);

      for (const sc of matchingShortcuts) {
        const platformKey = state.platform === 'mac' ? 'mac' : state.platform === 'linux' ? 'linux' : 'win';
        const platformShortcut = sc[platformKey] || sc.win || sc.mac;
        if (!platformShortcut) continue;

        const display = formatShortcut(
          platformShortcut.mods,
          platformShortcut.code,
          state.platform,
          mapping
        );

        const card = document.createElement('div');
        card.className = 'shortcut-card';

        const actionSpan = document.createElement('span');
        actionSpan.className = 'shortcut-card-action';
        actionSpan.textContent = sc.action;

        const keysSpan = document.createElement('span');
        keysSpan.className = 'shortcut-card-keys';

        const parts = display.split(' + ');
        parts.forEach((part, i) => {
          if (i > 0) {
            const plus = document.createElement('span');
            plus.className = 'key-chip-plus';
            plus.textContent = '+';
            keysSpan.appendChild(plus);
          }
          const chip = document.createElement('span');
          chip.className = 'key-chip';
          chip.textContent = part;
          keysSpan.appendChild(chip);
        });

        card.appendChild(actionSpan);
        card.appendChild(keysSpan);

        // Click to highlight this shortcut on the keyboard
        card.addEventListener('click', () => {
          captureShortcut(platformShortcut.mods, platformShortcut.code);
          state.currentShortcut.action = sc.action;
          state.currentShortcut.app = appData.id;
          updateShortcutDisplay();
          updateSharePanel();
          updateURL(state.currentShortcut);

          // Scroll keyboard into view
          dom.keyboard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        dom.shortcutsGrid.appendChild(card);
      }
    }
  }

  // If no results
  if (dom.shortcutsGrid.children.length === 0) {
    dom.shortcutsGrid.innerHTML = '<div class="shortcuts-empty"><p>No shortcuts match your search.</p></div>';
  }
}

// ── Copy URL ───────────────────────────────────────────────
async function copyShareURL() {
  const url = dom.shareUrl.value;
  try {
    await navigator.clipboard.writeText(url);
    dom.copyFeedback.classList.remove('hidden');
    dom.copyFeedback.textContent = 'Copied!';
    setTimeout(() => dom.copyFeedback.classList.add('hidden'), 1500);
  } catch {
    // Fallback
    dom.shareUrl.select();
    document.execCommand('copy');
    dom.copyFeedback.classList.remove('hidden');
    dom.copyFeedback.textContent = 'Copied!';
    setTimeout(() => dom.copyFeedback.classList.add('hidden'), 1500);
  }
}

// ── Copy Shortcut as Text ───────────────────────────────────
async function copyShortcutAsText(platform) {
  const sc = state.currentShortcut;
  if (!sc) return;

  const targetMapping = layoutMappings[state.layoutId] || layoutMappings['en-us'];
  const sourceMapping = layoutMappings[sc.layout] || layoutMappings['en-us'];
  const translated = translateShortcut(sc, platform, targetMapping, sourceMapping);
  const text = translated.displayString;

  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Fallback: temporary textarea
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }

  dom.copyFeedback.textContent = `Copied: ${text}`;
  dom.copyFeedback.classList.remove('hidden');
  setTimeout(() => dom.copyFeedback.classList.add('hidden'), 1500);
}

// ── Theme ──────────────────────────────────────────────────
function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  localStorage.setItem('boardkey-theme', state.theme);
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
}

// ── Reset ──────────────────────────────────────────────────
function resetShortcut() {
  state.currentShortcut = null;
  state.pressedMods.clear();
  clearHighlights(state.keyElements);
  clearMouseHighlights();
  clearURL();
  dom.sharePanel.classList.add('hidden');
  dom.shortcutAction.classList.add('hidden');
  dom.shortcutText.innerHTML = '<span class="shortcut-placeholder">Press a shortcut...</span>';
}

// ── Mouse Highlight ────────────────────────────────────────
function highlightMouseButton(code) {
  clearMouseHighlights();
  const elMap = {
    'MouseLeft': dom.mouseLeft,
    'MouseRight': dom.mouseRight,
    'MouseMiddle': dom.mouseMiddle,
  };
  const el = elMap[code];
  if (el) el.classList.add('active');

  // Show scroll arrow flash
  if (code === 'ScrollUp') {
    const arrow = document.getElementById('scroll-up-arrow');
    if (arrow) { arrow.classList.add('active'); setTimeout(() => arrow.classList.remove('active'), 400); }
  } else if (code === 'ScrollDown') {
    const arrow = document.getElementById('scroll-down-arrow');
    if (arrow) { arrow.classList.add('active'); setTimeout(() => arrow.classList.remove('active'), 400); }
  }

  // Show label
  const labels = {
    'MouseLeft': 'Left Click',
    'MouseRight': 'Right Click',
    'MouseMiddle': 'Middle Click',
    'ScrollUp': 'Scroll Up',
    'ScrollDown': 'Scroll Down',
  };
  dom.mouseActiveLabel.textContent = labels[code] || '';
  dom.mouseActiveLabel.classList.add('visible');
  setTimeout(() => dom.mouseActiveLabel.classList.remove('visible'), 1200);
}

function clearMouseHighlights() {
  [dom.mouseLeft, dom.mouseRight, dom.mouseMiddle].forEach(el => {
    if (el) el.classList.remove('active');
  });
}

// ── Utilities ──────────────────────────────────────────────
function isModifierOnlyCode(code) {
  return [
    'ShiftLeft', 'ShiftRight',
    'ControlLeft', 'ControlRight',
    'AltLeft', 'AltRight',
    'MetaLeft', 'MetaRight',
  ].includes(code);
}

function isCurrentShortcutKey(code, mods) {
  if (!state.currentShortcut) return false;
  return state.currentShortcut.code === code &&
    state.currentShortcut.mods.length === mods.length &&
    state.currentShortcut.mods.every(m => mods.includes(m));
}

function setActivePlatformBtn(platform) {
  dom.platformBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.platform === platform);
  });
}

function getEventMods(e) {
  const mods = [];
  if (e.metaKey) mods.push('meta');
  if (e.ctrlKey) mods.push('ctrl');
  if (e.altKey) mods.push('alt');
  if (e.shiftKey) mods.push('shift');
  if (state.mode === 'soft') {
    for (const m of state.pressedMods) {
      if (!mods.includes(m)) mods.push(m);
    }
    state.pressedMods.clear();
  }
  return mods;
}

function modsToCodes(mods) {
  const map = { 'meta': 'MetaLeft', 'ctrl': 'ControlLeft', 'alt': 'AltLeft', 'shift': 'ShiftLeft' };
  return mods.map(m => map[m]).filter(Boolean);
}

function codeToModName(code) {
  const map = {
    'ShiftLeft': 'shift', 'ShiftRight': 'shift',
    'ControlLeft': 'ctrl', 'ControlRight': 'ctrl',
    'AltLeft': 'alt', 'AltRight': 'alt',
    'MetaLeft': 'meta', 'MetaRight': 'meta',
  };
  return map[code] || null;
}

function findMatchingAction(mods, code) {
  if (!state.appId) return null;

  const app = appShortcuts.find(a => a.id === state.appId);
  if (!app) return null;

  const platformKey = state.platform === 'mac' ? 'mac' : state.platform === 'linux' ? 'linux' : 'win';

  for (const category of app.categories) {
    for (const sc of category.shortcuts) {
      const def = sc[platformKey];
      if (!def) continue;

      if (def.code === code &&
          def.mods.length === mods.length &&
          def.mods.every(m => mods.includes(m))) {
        return sc.action;
      }
    }
  }

  return null;
}

function getAppName(appId) {
  const app = appShortcuts.find(a => a.id === appId);
  return app ? app.name : appId;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ── Boot ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);

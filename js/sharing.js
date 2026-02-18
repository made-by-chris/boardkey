/**
 * URL sharing — encode/decode shortcut state in the URL hash.
 *
 * URL format:
 *   #s=meta+shift+KeyZ&l=en-us&p=mac&app=vscode&a=Redo
 *
 * Parameters:
 *   s   - shortcut string: modifier names + key code joined by '+'
 *   l   - source layout id (e.g. 'en-us', 'de-de')
 *   p   - source platform ('mac', 'windows', 'linux')
 *   app - (optional) application id
 *   a   - (optional) action name
 */

/**
 * Encode a shortcut into a URL hash string.
 * @param {Object} shortcut
 * @param {string[]} shortcut.mods - modifier names ('meta','ctrl','alt','shift')
 * @param {string} shortcut.code - KeyboardEvent.code
 * @param {string} shortcut.layout - source layout id
 * @param {string} shortcut.platform - source platform
 * @param {string} [shortcut.app] - application id
 * @param {string} [shortcut.action] - action name
 * @returns {string} hash string (without leading #)
 */
export function encodeShortcut(shortcut) {
  const parts = [...shortcut.mods, shortcut.code];
  const params = new URLSearchParams();
  params.set('s', parts.join('+'));
  params.set('l', shortcut.layout);
  params.set('p', shortcut.platform);
  if (shortcut.app) params.set('app', shortcut.app);
  if (shortcut.action) params.set('a', shortcut.action);
  return params.toString();
}

/**
 * Decode a shortcut from a URL hash string.
 * @param {string} hash - hash string (with or without leading #)
 * @returns {Object|null} decoded shortcut or null if invalid
 */
export function decodeShortcut(hash) {
  if (!hash) return null;
  const str = hash.startsWith('#') ? hash.slice(1) : hash;
  if (!str) return null;

  try {
    const params = new URLSearchParams(str);
    const s = params.get('s');
    const l = params.get('l');
    const p = params.get('p');

    if (!s || !l || !p) return null;

    const parts = s.split('+');
    if (parts.length === 0) return null;

    const modNames = new Set(['meta', 'ctrl', 'alt', 'shift']);
    const mods = [];
    let code = null;

    for (const part of parts) {
      if (modNames.has(part)) {
        mods.push(part);
      } else {
        code = part;
      }
    }

    if (!code) return null;

    return {
      mods,
      code,
      layout: l,
      platform: p,
      app: params.get('app') || null,
      action: params.get('a') || null,
    };
  } catch {
    return null;
  }
}

/**
 * Build a full shareable URL from the current page location and a shortcut.
 * @param {Object} shortcut - see encodeShortcut
 * @returns {string} full URL
 */
export function buildShareURL(shortcut) {
  const base = window.location.origin + window.location.pathname;
  return base + '#' + encodeShortcut(shortcut);
}

/**
 * Read the current URL hash and decode any shortcut.
 * @returns {Object|null}
 */
export function readShortcutFromURL() {
  return decodeShortcut(window.location.hash);
}

/**
 * Update the URL hash without triggering navigation.
 * @param {Object} shortcut
 */
export function updateURL(shortcut) {
  const hash = '#' + encodeShortcut(shortcut);
  history.replaceState(null, '', hash);
}

/**
 * Clear the URL hash.
 */
export function clearURL() {
  history.replaceState(null, '', window.location.pathname);
}

/**
 * Platform and keyboard layout auto-detection.
 */

/**
 * Detect the user's operating system/platform.
 * @returns {'mac'|'windows'|'linux'}
 */
export function detectPlatform() {
  const ua = navigator.userAgent.toLowerCase();
  const platform = (navigator.platform || '').toLowerCase();

  if (platform.startsWith('mac') || ua.includes('macintosh') || ua.includes('mac os')) {
    return 'mac';
  }
  if (platform.startsWith('win') || ua.includes('windows')) {
    return 'windows';
  }
  return 'linux';
}

/**
 * Guess the user's keyboard layout based on browser language / locale.
 * This is a best-effort heuristic — users can always override.
 * @returns {string} layout id (e.g. 'en-us', 'de-de')
 */
export function detectLayout() {
  // navigator.keyboard API (Chromium only, behind flag)
  // Not widely available yet, so we fall back to language heuristic.

  const lang = (navigator.language || navigator.userLanguage || 'en-US').toLowerCase();

  const mapping = {
    'en-us': 'en-us',
    'en-gb': 'en-gb',
    'en-au': 'en-gb',
    'en-nz': 'en-gb',
    'en-ie': 'en-gb',
    'en-za': 'en-gb',
    'en-in': 'en-us',
    'en': 'en-us',
    'de-de': 'de-de',
    'de-at': 'de-de',
    'de-ch': 'de-de',
    'de': 'de-de',
    'fr-fr': 'fr-fr',
    'fr-be': 'fr-fr',
    'fr-ca': 'en-us',  // Canadian French typically uses US physical layout
    'fr-ch': 'fr-fr',
    'fr': 'fr-fr',
    'es-es': 'es-es',
    'es-mx': 'es-es',
    'es-ar': 'es-es',
    'es': 'es-es',
    'it-it': 'it-it',
    'it': 'it-it',
    'pt-br': 'pt-br',
    'pt-pt': 'pt-br',
    'pt': 'pt-br',
    'ru-ru': 'ru-ru',
    'ru': 'ru-ru',
    'ja-jp': 'ja-jp',
    'ja': 'ja-jp',
    'ko-kr': 'ko-kr',
    'ko': 'ko-kr',
    'sv-se': 'sv-se',
    'sv': 'sv-se',
    'nb-no': 'nb-no',
    'nn-no': 'nb-no',
    'no': 'nb-no',
    'da-dk': 'da-dk',
    'da': 'da-dk',
    'nl-nl': 'nl-nl',
    'nl-be': 'nl-nl',
    'nl': 'nl-nl',
    'pl-pl': 'pl-pl',
    'pl': 'pl-pl',
    'cs-cz': 'cs-cz',
    'cs': 'cs-cz',
    'tr-tr': 'tr-tr',
    'tr': 'tr-tr',
    'ar-sa': 'ar-sa',
    'ar': 'ar-sa',
    'he-il': 'he-il',
    'he': 'he-il',
    'zh-tw': 'zh-tw',
    'zh-hant': 'zh-tw',
    'zh-cn': 'en-us',  // Simplified Chinese typically uses US layout
    'zh-hans': 'en-us',
    'zh': 'en-us',
  };

  // Try exact match, then language-only match
  if (mapping[lang]) return mapping[lang];

  const langOnly = lang.split('-')[0];
  if (mapping[langOnly]) return mapping[langOnly];

  return 'en-us';
}

/**
 * Get modifier key labels based on platform.
 */
export function getModifierLabels(platform) {
  if (platform === 'mac') {
    return {
      meta: '⌘',
      ctrl: '⌃',
      alt: '⌥',
      shift: '⇧',
      metaName: 'Cmd',
      ctrlName: 'Control',
      altName: 'Option',
      shiftName: 'Shift',
    };
  }
  return {
    meta: 'Win',
    ctrl: 'Ctrl',
    alt: 'Alt',
    shift: 'Shift',
    metaName: 'Win',
    ctrlName: 'Ctrl',
    altName: 'Alt',
    shiftName: 'Shift',
  };
}

/**
 * Get the modifier label text for a keyboard key element based on platform.
 */
export function getModifierKeyLabel(code, platform) {
  const labels = {
    mac: {
      'ControlLeft': '⌃ Control',
      'ControlRight': '⌃ Control',
      'MetaLeft': '⌘ Cmd',
      'MetaRight': '⌘ Cmd',
      'AltLeft': '⌥ Option',
      'AltRight': '⌥ Option',
      'ShiftLeft': '⇧ Shift',
      'ShiftRight': '⇧ Shift',
    },
    windows: {
      'ControlLeft': 'Ctrl',
      'ControlRight': 'Ctrl',
      'MetaLeft': '⊞ Win',
      'MetaRight': '⊞ Win',
      'AltLeft': 'Alt',
      'AltRight': 'Alt',
      'ShiftLeft': 'Shift',
      'ShiftRight': 'Shift',
    },
    linux: {
      'ControlLeft': 'Ctrl',
      'ControlRight': 'Ctrl',
      'MetaLeft': 'Super',
      'MetaRight': 'Super',
      'AltLeft': 'Alt',
      'AltRight': 'Alt',
      'ShiftLeft': 'Shift',
      'ShiftRight': 'Shift',
    },
  };

  return (labels[platform] || labels.windows)[code] || code;
}

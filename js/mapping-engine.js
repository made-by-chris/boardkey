/**
 * Mapping engine — translates keyboard shortcuts between layouts and platforms.
 *
 * Translation strategy:
 *   - Letter keys (KeyA–KeyZ) and digit keys: translate by PHYSICAL position
 *   - Symbol/punctuation keys (+, -, [, etc.): translate by CHARACTER intent
 *   - Modifiers: Cmd ↔ Ctrl across Mac/PC, Shift adjusted if character
 *     moves between shifted/unshifted positions across layouts
 */

import { getModifierLabels } from './detector.js';

/**
 * Translate modifiers from one platform to another.
 */
export function translateModifiers(mods, fromPlatform, toPlatform) {
  if (fromPlatform === toPlatform) return [...mods];

  const result = [];

  for (const mod of mods) {
    if (fromPlatform === 'mac' && toPlatform !== 'mac') {
      if (mod === 'meta') {
        result.push('ctrl');
      } else if (mod === 'ctrl') {
        result.push('ctrl');
      } else {
        result.push(mod);
      }
    } else if (fromPlatform !== 'mac' && toPlatform === 'mac') {
      if (mod === 'ctrl') {
        result.push('meta');
      } else {
        result.push(mod);
      }
    } else {
      result.push(mod);
    }
  }

  return [...new Set(result)];
}

/**
 * Check if a key code should use character-based translation.
 * Letters and digits stay physical; symbol/punctuation keys translate by character.
 */
function shouldTranslateByCharacter(code) {
  if (code.startsWith('Key')) return false;
  if (code.startsWith('Digit')) return false;
  if (code.startsWith('Numpad')) return false;
  if (code.startsWith('F') && !isNaN(code.slice(1))) return false;
  if (isMouseCode(code)) return false;

  const physical = [
    'Space', 'Enter', 'Tab', 'Backspace', 'Delete', 'Escape', 'CapsLock',
    'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
    'Home', 'End', 'PageUp', 'PageDown', 'Insert',
    'PrintScreen', 'ScrollLock', 'Pause', 'ContextMenu', 'NumLock',
    'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight',
    'AltLeft', 'AltRight', 'MetaLeft', 'MetaRight',
    'Fn',
  ];
  if (physical.includes(code)) return false;

  return true;
}

/**
 * Translate a key code from source layout to target layout by character.
 * Returns { code, shiftDelta } where shiftDelta is:
 *   0  = no shift change needed
 *   1  = need to ADD shift on target
 *  -1  = need to REMOVE shift on target
 */
function translateKeyByCharacter(code, hasShift, sourceMapping, targetMapping) {
  const sourceChars = sourceMapping[code];
  if (!sourceChars) return null;

  const sourceChar = hasShift ? (sourceChars[1] || sourceChars[0]) : sourceChars[0];
  if (!sourceChar) return null;

  // Search target layout for the same character
  for (const [targetCode, targetChars] of Object.entries(targetMapping)) {
    if (targetChars[0] === sourceChar) {
      // Found unshifted on target
      if (hasShift && sourceChars[0] !== sourceChar) {
        // Source needed shift to get this char, target doesn't → remove shift
        return { code: targetCode, shiftDelta: -1 };
      }
      return { code: targetCode, shiftDelta: 0 };
    }
    if (targetChars[1] === sourceChar && targetChars[0] !== sourceChar) {
      // Found shifted on target (and it's different from unshifted)
      if (!hasShift) {
        // Source didn't need shift, target does → add shift
        return { code: targetCode, shiftDelta: 1 };
      }
      return { code: targetCode, shiftDelta: 0 };
    }
  }

  // Character not found on target layout → fall back to physical position
  return null;
}

/**
 * Get the display label for a key code on a given layout.
 */
export function getKeyLabel(code, layoutMapping, shifted = false) {
  if (!layoutMapping) return codeToFallbackLabel(code);

  const mapping = layoutMapping[code];
  if (mapping) {
    const label = shifted ? (mapping[1] || mapping[0]) : mapping[0];
    return label || codeToFallbackLabel(code);
  }

  return codeToFallbackLabel(code);
}

/**
 * Fallback label for key codes that don't have a character mapping.
 */
function codeToFallbackLabel(code) {
  const fallbacks = {
    'Backspace': '⌫',
    'Tab': 'Tab',
    'Enter': 'Enter',
    'CapsLock': 'Caps Lock',
    'Escape': 'Esc',
    'Space': 'Space',
    'Delete': 'Del',
    'Insert': 'Ins',
    'Home': 'Home',
    'End': 'End',
    'PageUp': 'PgUp',
    'PageDown': 'PgDn',
    'ArrowUp': '↑',
    'ArrowDown': '↓',
    'ArrowLeft': '←',
    'ArrowRight': '→',
    'ShiftLeft': 'Shift',
    'ShiftRight': 'Shift',
    'ControlLeft': 'Ctrl',
    'ControlRight': 'Ctrl',
    'AltLeft': 'Alt',
    'AltRight': 'Alt',
    'MetaLeft': 'Meta',
    'MetaRight': 'Meta',
    'ContextMenu': 'Menu',
    'NumLock': 'Num',
    'ScrollLock': 'Scroll',
    'PrintScreen': 'PrtSc',
    'Pause': 'Pause',
    'MouseLeft': 'Left Click',
    'MouseRight': 'Right Click',
    'MouseMiddle': 'Middle Click',
    'ScrollUp': 'Scroll Up',
    'ScrollDown': 'Scroll Down',
  };

  if (fallbacks[code]) return fallbacks[code];
  if (code.startsWith('F') && !isNaN(code.slice(1))) return code;
  if (code.startsWith('Digit')) return code.slice(5);
  if (code.startsWith('Key')) return code.slice(3).toLowerCase();

  return code;
}

/**
 * Format a shortcut as a human-readable string.
 */
export function formatShortcut(mods, code, platform, layoutMapping) {
  const modLabels = getModifierLabels(platform);
  const parts = [];

  const modOrder = ['ctrl', 'meta', 'alt', 'shift'];
  for (const mod of modOrder) {
    if (mods.includes(mod)) {
      parts.push(modLabels[mod]);
    }
  }

  const keyLabel = getKeyLabel(code, layoutMapping, false);
  parts.push(keyLabel.length === 1 ? keyLabel.toUpperCase() : keyLabel);

  return parts.join(' + ');
}

/**
 * Translate a full shortcut from one layout/platform to another.
 *
 * @param {Object} shortcut - { mods, code, layout, platform }
 * @param {string} targetPlatform
 * @param {Object} targetLayoutMapping
 * @param {Object} [sourceLayoutMapping] - if provided, enables character-based translation
 * @returns {Object} { mods, code, displayString, keyLabel }
 */
export function translateShortcut(shortcut, targetPlatform, targetLayoutMapping, sourceLayoutMapping) {
  let mods = translateModifiers(shortcut.mods, shortcut.platform, targetPlatform);
  let code = shortcut.code;

  // Character-based translation for symbol keys
  if (sourceLayoutMapping && targetLayoutMapping && shouldTranslateByCharacter(code)) {
    const hasShift = mods.includes('shift');
    const result = translateKeyByCharacter(code, hasShift, sourceLayoutMapping, targetLayoutMapping);
    if (result) {
      code = result.code;
      if (result.shiftDelta === 1 && !hasShift) {
        mods = [...mods, 'shift'];
      } else if (result.shiftDelta === -1 && hasShift) {
        mods = mods.filter(m => m !== 'shift');
      }
    }
  }

  const keyLabel = getKeyLabel(code, targetLayoutMapping, false);
  const displayString = formatShortcut(mods, code, targetPlatform, targetLayoutMapping);

  return {
    mods,
    code,
    displayString,
    keyLabel,
  };
}

/**
 * Check if a code is a mouse pseudo-code.
 */
export function isMouseCode(code) {
  return ['MouseLeft', 'MouseRight', 'MouseMiddle', 'ScrollUp', 'ScrollDown'].includes(code);
}

/**
 * Get the physical key codes that should be highlighted for a shortcut.
 */
export function getHighlightCodes(mods, code) {
  const codes = [];

  for (const mod of mods) {
    switch (mod) {
      case 'meta': codes.push('MetaLeft'); break;
      case 'ctrl': codes.push('ControlLeft'); break;
      case 'alt': codes.push('AltLeft'); break;
      case 'shift': codes.push('ShiftLeft'); break;
    }
  }

  codes.push(code);
  return codes;
}

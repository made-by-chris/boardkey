/**
 * Keyboard renderer — builds and updates the visual keyboard in the DOM.
 */

import { getModifierKeyLabel } from './detector.js';
import { getKeyLabel } from './mapping-engine.js';

/**
 * Render a full keyboard into the container element.
 *
 * @param {HTMLElement} container - the #keyboard element
 * @param {Array} physicalLayout - array of rows from physicalLayouts
 * @param {Object} layoutMapping - character mapping for the current layout
 * @param {string} platform - 'mac', 'windows', 'linux'
 * @returns {Map<string, HTMLElement>} map of code → key DOM element
 */
export function renderKeyboard(container, physicalLayout, layoutMapping, platform) {
  container.innerHTML = '';
  const keyElements = new Map();

  physicalLayout.forEach((row, rowIndex) => {
    const rowEl = document.createElement('div');
    rowEl.className = 'keyboard-row';
    if (rowIndex === 0) rowEl.classList.add('fn-row');

    for (const item of row) {
      if (item.spacer !== undefined) {
        const spacer = document.createElement('div');
        spacer.className = 'key-spacer';
        spacer.style.width = `${item.spacer * 54}px`; // key-unit = 54px base
        rowEl.appendChild(spacer);
        continue;
      }

      const keyEl = createKeyElement(item, layoutMapping, platform);
      rowEl.appendChild(keyEl);

      if (item.code) {
        keyElements.set(item.code, keyEl);
      }
    }

    container.appendChild(rowEl);
  });

  return keyElements;
}

/**
 * Create a single key DOM element.
 */
function createKeyElement(keyDef, layoutMapping, platform) {
  const el = document.createElement('div');
  el.className = 'key';
  el.dataset.code = keyDef.code;

  // Width class (use CSS class for common widths, inline style for others)
  const widthClass = getWidthClass(keyDef.width);
  if (widthClass) {
    el.classList.add(widthClass);
  } else if (keyDef.width && keyDef.width !== 1) {
    // Fallback: inline style for uncommon widths
    // key-unit=54px, key-gap=4px (CSS defaults)
    el.style.width = `calc(var(--key-unit) * ${keyDef.width} + var(--key-gap) * ${keyDef.width - 1})`;
  }

  // Modifier styling
  if (keyDef.modifier || isModifierCode(keyDef.code) || keyDef.code.startsWith('Fn')) {
    el.classList.add('modifier');
  }

  // Determine label
  const label = getDisplayLabel(keyDef, layoutMapping, platform);

  // Secondary label (shift character for printable keys)
  const mapping = layoutMapping ? layoutMapping[keyDef.code] : null;

  if (mapping && mapping.length >= 2 && mapping[0] !== mapping[1] && !keyDef.modifier) {
    // Show shift label in top-left, normal label centered
    const secondaryEl = document.createElement('span');
    secondaryEl.className = 'key-label-secondary';
    secondaryEl.textContent = mapping[1];
    el.appendChild(secondaryEl);

    const mainEl = document.createElement('span');
    mainEl.className = 'key-label';
    mainEl.textContent = mapping[0];
    el.appendChild(mainEl);

    // AltGr label in bottom-right if available
    if (mapping.length >= 3 && mapping[2]) {
      const tertiaryEl = document.createElement('span');
      tertiaryEl.className = 'key-label-tertiary';
      tertiaryEl.textContent = mapping[2];
      el.appendChild(tertiaryEl);
    }
  } else {
    const mainEl = document.createElement('span');
    mainEl.className = 'key-label';
    mainEl.textContent = label;
    el.appendChild(mainEl);
  }

  // Click handler — emit custom event
  el.addEventListener('click', () => {
    el.dispatchEvent(new CustomEvent('keyclick', {
      bubbles: true,
      detail: { code: keyDef.code, modifier: keyDef.modifier || isModifierCode(keyDef.code) },
    }));
  });

  return el;
}

/**
 * Get the display label for a key definition.
 */
function getDisplayLabel(keyDef, layoutMapping, platform) {
  // If it's a modifier, use platform-aware label
  if (keyDef.modifier || isModifierCode(keyDef.code)) {
    return getModifierKeyLabel(keyDef.code, platform);
  }

  // If the key definition has a fixed label (Esc, Tab, etc.), use it
  if (keyDef.label !== undefined) {
    return keyDef.label;
  }

  // Look up from layout mapping
  return getKeyLabel(keyDef.code, layoutMapping, false);
}

/**
 * Map key width to CSS class.
 */
function getWidthClass(width) {
  const map = {
    1: 'key-1u',
    1.25: 'key-1-25u',
    1.5: 'key-1-5u',
    1.75: 'key-1-75u',
    2: 'key-2u',
    2.25: 'key-2-25u',
    2.75: 'key-2-75u',
    3.25: 'key-3-25u',
    6: 'key-6u',
    6.25: 'key-6-25u',
  };
  return map[width] || null;
}

/**
 * Check if a key code is a modifier.
 */
function isModifierCode(code) {
  return [
    'ShiftLeft', 'ShiftRight',
    'ControlLeft', 'ControlRight',
    'AltLeft', 'AltRight',
    'MetaLeft', 'MetaRight',
  ].includes(code);
}

/**
 * Highlight specific keys on the keyboard.
 *
 * @param {Map<string, HTMLElement>} keyElements
 * @param {string[]} codes - key codes to highlight
 */
export function highlightKeys(keyElements, codes) {
  // Clear all highlights first
  for (const el of keyElements.values()) {
    el.classList.remove('active');
  }

  // Highlight specified codes
  for (const code of codes) {
    const el = keyElements.get(code);
    if (el) {
      el.classList.add('active');
    }
  }
}

/**
 * Clear all key highlights.
 * @param {Map<string, HTMLElement>} keyElements
 */
export function clearHighlights(keyElements) {
  for (const el of keyElements.values()) {
    el.classList.remove('active');
  }
}

/**
 * Update key labels when layout or platform changes (without full re-render).
 * Full re-render is simpler and fast enough, so this is just an alias.
 */
export function updateLabels(container, physicalLayout, layoutMapping, platform) {
  return renderKeyboard(container, physicalLayout, layoutMapping, platform);
}

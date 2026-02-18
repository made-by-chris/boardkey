export const appShortcuts = [
  {
    id: 'chrome',
    name: 'Google Chrome',
    icon: '🌐',
    categories: [
      {
        name: 'Navigation',
        shortcuts: [
          {
            action: 'Reload',
            mac: { mods: ['meta'], code: 'KeyR' },
            win: { mods: ['ctrl'], code: 'KeyR' },
            linux: { mods: ['ctrl'], code: 'KeyR' },
          },
          {
            action: 'Hard Reload',
            mac: { mods: ['meta', 'shift'], code: 'KeyR' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyR' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyR' },
          },
          {
            action: 'Find',
            mac: { mods: ['meta'], code: 'KeyF' },
            win: { mods: ['ctrl'], code: 'KeyF' },
            linux: { mods: ['ctrl'], code: 'KeyF' },
          },
          {
            action: 'Address Bar',
            mac: { mods: ['meta'], code: 'KeyL' },
            win: { mods: ['ctrl'], code: 'KeyL' },
            linux: { mods: ['ctrl'], code: 'KeyL' },
          },
          {
            action: 'Back',
            mac: { mods: ['meta'], code: 'BracketLeft' },
            win: { mods: ['alt'], code: 'ArrowLeft' },
            linux: { mods: ['alt'], code: 'ArrowLeft' },
          },
          {
            action: 'Forward',
            mac: { mods: ['meta'], code: 'BracketRight' },
            win: { mods: ['alt'], code: 'ArrowRight' },
            linux: { mods: ['alt'], code: 'ArrowRight' },
          },
          {
            action: 'Bookmark',
            mac: { mods: ['meta'], code: 'KeyD' },
            win: { mods: ['ctrl'], code: 'KeyD' },
            linux: { mods: ['ctrl'], code: 'KeyD' },
          },
          {
            action: 'Downloads',
            mac: { mods: ['meta', 'shift'], code: 'KeyJ' },
            win: { mods: ['ctrl'], code: 'KeyJ' },
            linux: { mods: ['ctrl'], code: 'KeyJ' },
          },
          {
            action: 'History',
            mac: { mods: ['meta'], code: 'KeyY' },
            win: { mods: ['ctrl'], code: 'KeyH' },
            linux: { mods: ['ctrl'], code: 'KeyH' },
          },
          {
            action: 'Zoom In',
            mac: { mods: ['meta'], code: 'Equal' },
            win: { mods: ['ctrl'], code: 'Equal' },
            linux: { mods: ['ctrl'], code: 'Equal' },
          },
          {
            action: 'Zoom Out',
            mac: { mods: ['meta'], code: 'Minus' },
            win: { mods: ['ctrl'], code: 'Minus' },
            linux: { mods: ['ctrl'], code: 'Minus' },
          },
        ]
      },
      {
        name: 'Tabs',
        shortcuts: [
          {
            action: 'New Tab',
            mac: { mods: ['meta'], code: 'KeyT' },
            win: { mods: ['ctrl'], code: 'KeyT' },
            linux: { mods: ['ctrl'], code: 'KeyT' },
          },
          {
            action: 'Close Tab',
            mac: { mods: ['meta'], code: 'KeyW' },
            win: { mods: ['ctrl'], code: 'KeyW' },
            linux: { mods: ['ctrl'], code: 'KeyW' },
          },
          {
            action: 'Reopen Closed Tab',
            mac: { mods: ['meta', 'shift'], code: 'KeyT' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyT' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyT' },
          },
          {
            action: 'New Window',
            mac: { mods: ['meta'], code: 'KeyN' },
            win: { mods: ['ctrl'], code: 'KeyN' },
            linux: { mods: ['ctrl'], code: 'KeyN' },
          },
          {
            action: 'Incognito Window',
            mac: { mods: ['meta', 'shift'], code: 'KeyN' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyN' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyN' },
          },
          {
            action: 'Next Tab',
            mac: { mods: ['meta', 'alt'], code: 'ArrowRight' },
            win: { mods: ['ctrl'], code: 'Tab' },
            linux: { mods: ['ctrl'], code: 'Tab' },
          },
          {
            action: 'Previous Tab',
            mac: { mods: ['meta', 'alt'], code: 'ArrowLeft' },
            win: { mods: ['ctrl', 'shift'], code: 'Tab' },
            linux: { mods: ['ctrl', 'shift'], code: 'Tab' },
          },
        ]
      },
      {
        name: 'Developer Tools',
        shortcuts: [
          {
            action: 'Open Dev Tools',
            mac: { mods: ['meta', 'alt'], code: 'KeyI' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyI' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyI' },
          },
          {
            action: 'View Source',
            mac: { mods: ['meta', 'alt'], code: 'KeyU' },
            win: { mods: ['ctrl'], code: 'KeyU' },
            linux: { mods: ['ctrl'], code: 'KeyU' },
          },
        ]
      },
    ]
  },
  {
    id: 'vscode',
    name: 'VS Code',
    icon: '💻',
    categories: [
      {
        name: 'General',
        shortcuts: [
          {
            action: 'Command Palette',
            mac: { mods: ['meta', 'shift'], code: 'KeyP' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyP' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyP' },
          },
          {
            action: 'Quick Open',
            mac: { mods: ['meta'], code: 'KeyP' },
            win: { mods: ['ctrl'], code: 'KeyP' },
            linux: { mods: ['ctrl'], code: 'KeyP' },
          },
          {
            action: 'New File',
            mac: { mods: ['meta'], code: 'KeyN' },
            win: { mods: ['ctrl'], code: 'KeyN' },
            linux: { mods: ['ctrl'], code: 'KeyN' },
          },
          {
            action: 'Save',
            mac: { mods: ['meta'], code: 'KeyS' },
            win: { mods: ['ctrl'], code: 'KeyS' },
            linux: { mods: ['ctrl'], code: 'KeyS' },
          },
          {
            action: 'Save All',
            mac: { mods: ['meta', 'alt'], code: 'KeyS' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyS' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyS' },
          },
          {
            action: 'Close Editor',
            mac: { mods: ['meta'], code: 'KeyW' },
            win: { mods: ['ctrl'], code: 'KeyW' },
            linux: { mods: ['ctrl'], code: 'KeyW' },
          },
          {
            action: 'Toggle Sidebar',
            mac: { mods: ['meta'], code: 'KeyB' },
            win: { mods: ['ctrl'], code: 'KeyB' },
            linux: { mods: ['ctrl'], code: 'KeyB' },
          },
          {
            action: 'Split Editor',
            mac: { mods: ['meta'], code: 'Backslash' },
            win: { mods: ['ctrl'], code: 'Backslash' },
            linux: { mods: ['ctrl'], code: 'Backslash' },
          },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          {
            action: 'Undo',
            mac: { mods: ['meta'], code: 'KeyZ' },
            win: { mods: ['ctrl'], code: 'KeyZ' },
            linux: { mods: ['ctrl'], code: 'KeyZ' },
          },
          {
            action: 'Redo',
            mac: { mods: ['meta', 'shift'], code: 'KeyZ' },
            win: { mods: ['ctrl'], code: 'KeyY' },
            linux: { mods: ['ctrl'], code: 'KeyY' },
          },
          {
            action: 'Cut Line',
            mac: { mods: ['meta'], code: 'KeyX' },
            win: { mods: ['ctrl'], code: 'KeyX' },
            linux: { mods: ['ctrl'], code: 'KeyX' },
          },
          {
            action: 'Copy Line',
            mac: { mods: ['meta'], code: 'KeyC' },
            win: { mods: ['ctrl'], code: 'KeyC' },
            linux: { mods: ['ctrl'], code: 'KeyC' },
          },
          {
            action: 'Move Line Up',
            mac: { mods: ['alt'], code: 'ArrowUp' },
            win: { mods: ['alt'], code: 'ArrowUp' },
            linux: { mods: ['alt'], code: 'ArrowUp' },
          },
          {
            action: 'Move Line Down',
            mac: { mods: ['alt'], code: 'ArrowDown' },
            win: { mods: ['alt'], code: 'ArrowDown' },
            linux: { mods: ['alt'], code: 'ArrowDown' },
          },
          {
            action: 'Toggle Comment',
            mac: { mods: ['meta'], code: 'Slash' },
            win: { mods: ['ctrl'], code: 'Slash' },
            linux: { mods: ['ctrl'], code: 'Slash' },
          },
        ]
      },
      {
        name: 'Navigation',
        shortcuts: [
          {
            action: 'Find',
            mac: { mods: ['meta'], code: 'KeyF' },
            win: { mods: ['ctrl'], code: 'KeyF' },
            linux: { mods: ['ctrl'], code: 'KeyF' },
          },
          {
            action: 'Replace',
            mac: { mods: ['meta', 'alt'], code: 'KeyF' },
            win: { mods: ['ctrl'], code: 'KeyH' },
            linux: { mods: ['ctrl'], code: 'KeyH' },
          },
          {
            action: 'Go to Line',
            mac: { mods: ['ctrl'], code: 'KeyG' },
            win: { mods: ['ctrl'], code: 'KeyG' },
            linux: { mods: ['ctrl'], code: 'KeyG' },
          },
        ]
      },
      {
        name: 'Terminal',
        shortcuts: [
          {
            action: 'Toggle Terminal',
            mac: { mods: ['ctrl'], code: 'Backquote' },
            win: { mods: ['ctrl'], code: 'Backquote' },
            linux: { mods: ['ctrl'], code: 'Backquote' },
          },
        ]
      },
    ]
  },
  {
    id: 'word',
    name: 'Microsoft Word',
    icon: '📝',
    categories: [
      {
        name: 'File',
        shortcuts: [
          {
            action: 'New Document',
            mac: { mods: ['meta'], code: 'KeyN' },
            win: { mods: ['ctrl'], code: 'KeyN' },
            linux: { mods: ['ctrl'], code: 'KeyN' },
          },
          {
            action: 'Open',
            mac: { mods: ['meta'], code: 'KeyO' },
            win: { mods: ['ctrl'], code: 'KeyO' },
            linux: { mods: ['ctrl'], code: 'KeyO' },
          },
          {
            action: 'Save',
            mac: { mods: ['meta'], code: 'KeyS' },
            win: { mods: ['ctrl'], code: 'KeyS' },
            linux: { mods: ['ctrl'], code: 'KeyS' },
          },
          {
            action: 'Save As',
            mac: { mods: ['meta', 'shift'], code: 'KeyS' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyS' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyS' },
          },
          {
            action: 'Print',
            mac: { mods: ['meta'], code: 'KeyP' },
            win: { mods: ['ctrl'], code: 'KeyP' },
            linux: { mods: ['ctrl'], code: 'KeyP' },
          },
          {
            action: 'Close',
            mac: { mods: ['meta'], code: 'KeyW' },
            win: { mods: ['ctrl'], code: 'KeyW' },
            linux: { mods: ['ctrl'], code: 'KeyW' },
          },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          {
            action: 'Undo',
            mac: { mods: ['meta'], code: 'KeyZ' },
            win: { mods: ['ctrl'], code: 'KeyZ' },
            linux: { mods: ['ctrl'], code: 'KeyZ' },
          },
          {
            action: 'Redo',
            mac: { mods: ['meta'], code: 'KeyY' },
            win: { mods: ['ctrl'], code: 'KeyY' },
            linux: { mods: ['ctrl'], code: 'KeyY' },
          },
          {
            action: 'Cut',
            mac: { mods: ['meta'], code: 'KeyX' },
            win: { mods: ['ctrl'], code: 'KeyX' },
            linux: { mods: ['ctrl'], code: 'KeyX' },
          },
          {
            action: 'Copy',
            mac: { mods: ['meta'], code: 'KeyC' },
            win: { mods: ['ctrl'], code: 'KeyC' },
            linux: { mods: ['ctrl'], code: 'KeyC' },
          },
          {
            action: 'Paste',
            mac: { mods: ['meta'], code: 'KeyV' },
            win: { mods: ['ctrl'], code: 'KeyV' },
            linux: { mods: ['ctrl'], code: 'KeyV' },
          },
          {
            action: 'Select All',
            mac: { mods: ['meta'], code: 'KeyA' },
            win: { mods: ['ctrl'], code: 'KeyA' },
            linux: { mods: ['ctrl'], code: 'KeyA' },
          },
          {
            action: 'Find',
            mac: { mods: ['meta'], code: 'KeyF' },
            win: { mods: ['ctrl'], code: 'KeyF' },
            linux: { mods: ['ctrl'], code: 'KeyF' },
          },
          {
            action: 'Replace',
            mac: { mods: ['meta'], code: 'KeyH' },
            win: { mods: ['ctrl'], code: 'KeyH' },
            linux: { mods: ['ctrl'], code: 'KeyH' },
          },
        ]
      },
      {
        name: 'Formatting',
        shortcuts: [
          {
            action: 'Bold',
            mac: { mods: ['meta'], code: 'KeyB' },
            win: { mods: ['ctrl'], code: 'KeyB' },
            linux: { mods: ['ctrl'], code: 'KeyB' },
          },
          {
            action: 'Italic',
            mac: { mods: ['meta'], code: 'KeyI' },
            win: { mods: ['ctrl'], code: 'KeyI' },
            linux: { mods: ['ctrl'], code: 'KeyI' },
          },
          {
            action: 'Underline',
            mac: { mods: ['meta'], code: 'KeyU' },
            win: { mods: ['ctrl'], code: 'KeyU' },
            linux: { mods: ['ctrl'], code: 'KeyU' },
          },
          {
            action: 'Align Left',
            mac: { mods: ['meta'], code: 'KeyL' },
            win: { mods: ['ctrl'], code: 'KeyL' },
            linux: { mods: ['ctrl'], code: 'KeyL' },
          },
          {
            action: 'Align Center',
            mac: { mods: ['meta'], code: 'KeyE' },
            win: { mods: ['ctrl'], code: 'KeyE' },
            linux: { mods: ['ctrl'], code: 'KeyE' },
          },
          {
            action: 'Align Right',
            mac: { mods: ['meta'], code: 'KeyR' },
            win: { mods: ['ctrl'], code: 'KeyR' },
            linux: { mods: ['ctrl'], code: 'KeyR' },
          },
        ]
      },
    ]
  },
  {
    id: 'excel',
    name: 'Microsoft Excel',
    icon: '📊',
    categories: [
      {
        name: 'Navigation',
        shortcuts: [
          {
            action: 'Go to Cell',
            mac: { mods: ['meta'], code: 'KeyG' },
            win: { mods: [], code: 'F5' },
            linux: { mods: [], code: 'F5' },
          },
          {
            action: 'Move to Beginning',
            mac: { mods: ['meta'], code: 'Home' },
            win: { mods: ['ctrl'], code: 'Home' },
            linux: { mods: ['ctrl'], code: 'Home' },
          },
          {
            action: 'Move to Last Cell',
            mac: { mods: ['meta'], code: 'End' },
            win: { mods: ['ctrl'], code: 'End' },
            linux: { mods: ['ctrl'], code: 'End' },
          },
          {
            action: 'Next Sheet',
            mac: { mods: ['meta', 'shift'], code: 'BracketRight' },
            win: { mods: ['ctrl'], code: 'PageDown' },
            linux: { mods: ['ctrl'], code: 'PageDown' },
          },
          {
            action: 'Previous Sheet',
            mac: { mods: ['meta', 'shift'], code: 'BracketLeft' },
            win: { mods: ['ctrl'], code: 'PageUp' },
            linux: { mods: ['ctrl'], code: 'PageUp' },
          },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          {
            action: 'New Workbook',
            mac: { mods: ['meta'], code: 'KeyN' },
            win: { mods: ['ctrl'], code: 'KeyN' },
            linux: { mods: ['ctrl'], code: 'KeyN' },
          },
          {
            action: 'Save',
            mac: { mods: ['meta'], code: 'KeyS' },
            win: { mods: ['ctrl'], code: 'KeyS' },
            linux: { mods: ['ctrl'], code: 'KeyS' },
          },
          {
            action: 'Undo',
            mac: { mods: ['meta'], code: 'KeyZ' },
            win: { mods: ['ctrl'], code: 'KeyZ' },
            linux: { mods: ['ctrl'], code: 'KeyZ' },
          },
          {
            action: 'Cut',
            mac: { mods: ['meta'], code: 'KeyX' },
            win: { mods: ['ctrl'], code: 'KeyX' },
            linux: { mods: ['ctrl'], code: 'KeyX' },
          },
          {
            action: 'Copy',
            mac: { mods: ['meta'], code: 'KeyC' },
            win: { mods: ['ctrl'], code: 'KeyC' },
            linux: { mods: ['ctrl'], code: 'KeyC' },
          },
          {
            action: 'Paste',
            mac: { mods: ['meta'], code: 'KeyV' },
            win: { mods: ['ctrl'], code: 'KeyV' },
            linux: { mods: ['ctrl'], code: 'KeyV' },
          },
          {
            action: 'Find',
            mac: { mods: ['meta'], code: 'KeyF' },
            win: { mods: ['ctrl'], code: 'KeyF' },
            linux: { mods: ['ctrl'], code: 'KeyF' },
          },
          {
            action: 'Insert Row',
            mac: { mods: ['ctrl', 'shift'], code: 'Equal' },
            win: { mods: ['ctrl', 'shift'], code: 'Equal' },
            linux: { mods: ['ctrl', 'shift'], code: 'Equal' },
          },
          {
            action: 'Delete Row',
            mac: { mods: ['meta'], code: 'Minus' },
            win: { mods: ['ctrl'], code: 'Minus' },
            linux: { mods: ['ctrl'], code: 'Minus' },
          },
          {
            action: 'AutoSum',
            mac: { mods: ['meta', 'shift'], code: 'KeyT' },
            win: { mods: ['alt'], code: 'Equal' },
            linux: { mods: ['alt'], code: 'Equal' },
          },
          {
            action: 'Fill Down',
            mac: { mods: ['meta'], code: 'KeyD' },
            win: { mods: ['ctrl'], code: 'KeyD' },
            linux: { mods: ['ctrl'], code: 'KeyD' },
          },
          {
            action: 'Insert Function',
            mac: { mods: ['shift'], code: 'F3' },
            win: { mods: ['shift'], code: 'F3' },
            linux: { mods: ['shift'], code: 'F3' },
          },
        ]
      },
      {
        name: 'Formatting',
        shortcuts: [
          {
            action: 'Bold',
            mac: { mods: ['meta'], code: 'KeyB' },
            win: { mods: ['ctrl'], code: 'KeyB' },
            linux: { mods: ['ctrl'], code: 'KeyB' },
          },
          {
            action: 'Format Cells',
            mac: { mods: ['meta'], code: 'Digit1' },
            win: { mods: ['ctrl'], code: 'Digit1' },
            linux: { mods: ['ctrl'], code: 'Digit1' },
          },
          {
            action: 'Currency Format',
            mac: { mods: ['ctrl', 'shift'], code: 'Digit4' },
            win: { mods: ['ctrl', 'shift'], code: 'Digit4' },
            linux: { mods: ['ctrl', 'shift'], code: 'Digit4' },
          },
        ]
      },
    ]
  },
  {
    id: 'powerpoint',
    name: 'Microsoft PowerPoint',
    icon: '📽️',
    categories: [
      {
        name: 'General',
        shortcuts: [
          {
            action: 'New Presentation',
            mac: { mods: ['meta'], code: 'KeyN' },
            win: { mods: ['ctrl'], code: 'KeyN' },
            linux: { mods: ['ctrl'], code: 'KeyN' },
          },
          {
            action: 'Open',
            mac: { mods: ['meta'], code: 'KeyO' },
            win: { mods: ['ctrl'], code: 'KeyO' },
            linux: { mods: ['ctrl'], code: 'KeyO' },
          },
          {
            action: 'Save',
            mac: { mods: ['meta'], code: 'KeyS' },
            win: { mods: ['ctrl'], code: 'KeyS' },
            linux: { mods: ['ctrl'], code: 'KeyS' },
          },
          {
            action: 'Print',
            mac: { mods: ['meta'], code: 'KeyP' },
            win: { mods: ['ctrl'], code: 'KeyP' },
            linux: { mods: ['ctrl'], code: 'KeyP' },
          },
          {
            action: 'Undo',
            mac: { mods: ['meta'], code: 'KeyZ' },
            win: { mods: ['ctrl'], code: 'KeyZ' },
            linux: { mods: ['ctrl'], code: 'KeyZ' },
          },
          {
            action: 'Redo',
            mac: { mods: ['meta'], code: 'KeyY' },
            win: { mods: ['ctrl'], code: 'KeyY' },
            linux: { mods: ['ctrl'], code: 'KeyY' },
          },
          {
            action: 'Cut',
            mac: { mods: ['meta'], code: 'KeyX' },
            win: { mods: ['ctrl'], code: 'KeyX' },
            linux: { mods: ['ctrl'], code: 'KeyX' },
          },
          {
            action: 'Copy',
            mac: { mods: ['meta'], code: 'KeyC' },
            win: { mods: ['ctrl'], code: 'KeyC' },
            linux: { mods: ['ctrl'], code: 'KeyC' },
          },
          {
            action: 'Paste',
            mac: { mods: ['meta'], code: 'KeyV' },
            win: { mods: ['ctrl'], code: 'KeyV' },
            linux: { mods: ['ctrl'], code: 'KeyV' },
          },
        ]
      },
      {
        name: 'Slideshow',
        shortcuts: [
          {
            action: 'Start from Beginning',
            mac: { mods: ['meta', 'shift'], code: 'Enter' },
            win: { mods: [], code: 'F5' },
            linux: { mods: [], code: 'F5' },
          },
          {
            action: 'Start from Current',
            mac: { mods: ['meta'], code: 'Enter' },
            win: { mods: ['shift'], code: 'F5' },
            linux: { mods: ['shift'], code: 'F5' },
          },
          {
            action: 'End Slideshow',
            mac: { mods: [], code: 'Escape' },
            win: { mods: [], code: 'Escape' },
            linux: { mods: [], code: 'Escape' },
          },
          {
            action: 'Black Screen',
            mac: { mods: [], code: 'KeyB' },
            win: { mods: [], code: 'KeyB' },
            linux: { mods: [], code: 'KeyB' },
          },
          {
            action: 'White Screen',
            mac: { mods: [], code: 'KeyW' },
            win: { mods: [], code: 'KeyW' },
            linux: { mods: [], code: 'KeyW' },
          },
        ]
      },
      {
        name: 'Formatting',
        shortcuts: [
          {
            action: 'Bold',
            mac: { mods: ['meta'], code: 'KeyB' },
            win: { mods: ['ctrl'], code: 'KeyB' },
            linux: { mods: ['ctrl'], code: 'KeyB' },
          },
          {
            action: 'Italic',
            mac: { mods: ['meta'], code: 'KeyI' },
            win: { mods: ['ctrl'], code: 'KeyI' },
            linux: { mods: ['ctrl'], code: 'KeyI' },
          },
          {
            action: 'Underline',
            mac: { mods: ['meta'], code: 'KeyU' },
            win: { mods: ['ctrl'], code: 'KeyU' },
            linux: { mods: ['ctrl'], code: 'KeyU' },
          },
          {
            action: 'Align Center',
            mac: { mods: ['meta'], code: 'KeyE' },
            win: { mods: ['ctrl'], code: 'KeyE' },
            linux: { mods: ['ctrl'], code: 'KeyE' },
          },
          {
            action: 'Group',
            mac: { mods: ['meta'], code: 'KeyG' },
            win: { mods: ['ctrl'], code: 'KeyG' },
            linux: { mods: ['ctrl'], code: 'KeyG' },
          },
          {
            action: 'Ungroup',
            mac: { mods: ['meta', 'shift'], code: 'KeyG' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyG' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyG' },
          },
        ]
      },
    ]
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    icon: '🎨',
    categories: [
      {
        name: 'Tools',
        shortcuts: [
          {
            action: 'Brush Tool',
            mac: { mods: [], code: 'KeyB' },
            win: { mods: [], code: 'KeyB' },
            linux: { mods: [], code: 'KeyB' },
          },
          {
            action: 'Eraser Tool',
            mac: { mods: [], code: 'KeyE' },
            win: { mods: [], code: 'KeyE' },
            linux: { mods: [], code: 'KeyE' },
          },
          {
            action: 'Move Tool',
            mac: { mods: [], code: 'KeyV' },
            win: { mods: [], code: 'KeyV' },
            linux: { mods: [], code: 'KeyV' },
          },
          {
            action: 'Marquee Tool',
            mac: { mods: [], code: 'KeyM' },
            win: { mods: [], code: 'KeyM' },
            linux: { mods: [], code: 'KeyM' },
          },
          {
            action: 'Lasso Tool',
            mac: { mods: [], code: 'KeyL' },
            win: { mods: [], code: 'KeyL' },
            linux: { mods: [], code: 'KeyL' },
          },
          {
            action: 'Crop Tool',
            mac: { mods: [], code: 'KeyC' },
            win: { mods: [], code: 'KeyC' },
            linux: { mods: [], code: 'KeyC' },
          },
          {
            action: 'Brush Size Up',
            mac: { mods: [], code: 'BracketRight' },
            win: { mods: [], code: 'BracketRight' },
            linux: { mods: [], code: 'BracketRight' },
          },
          {
            action: 'Brush Size Down',
            mac: { mods: [], code: 'BracketLeft' },
            win: { mods: [], code: 'BracketLeft' },
            linux: { mods: [], code: 'BracketLeft' },
          },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          {
            action: 'Undo',
            mac: { mods: ['meta'], code: 'KeyZ' },
            win: { mods: ['ctrl'], code: 'KeyZ' },
            linux: { mods: ['ctrl'], code: 'KeyZ' },
          },
          {
            action: 'Step Backward',
            mac: { mods: ['meta', 'alt'], code: 'KeyZ' },
            win: { mods: ['ctrl', 'alt'], code: 'KeyZ' },
            linux: { mods: ['ctrl', 'alt'], code: 'KeyZ' },
          },
          {
            action: 'Free Transform',
            mac: { mods: ['meta'], code: 'KeyT' },
            win: { mods: ['ctrl'], code: 'KeyT' },
            linux: { mods: ['ctrl'], code: 'KeyT' },
          },
          {
            action: 'Deselect',
            mac: { mods: ['meta'], code: 'KeyD' },
            win: { mods: ['ctrl'], code: 'KeyD' },
            linux: { mods: ['ctrl'], code: 'KeyD' },
          },
          {
            action: 'Invert Selection',
            mac: { mods: ['meta', 'shift'], code: 'KeyI' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyI' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyI' },
          },
          {
            action: 'New Layer',
            mac: { mods: ['meta', 'shift'], code: 'KeyN' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyN' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyN' },
          },
          {
            action: 'Merge Layers',
            mac: { mods: ['meta'], code: 'KeyE' },
            win: { mods: ['ctrl'], code: 'KeyE' },
            linux: { mods: ['ctrl'], code: 'KeyE' },
          },
          {
            action: 'Duplicate Layer',
            mac: { mods: ['meta'], code: 'KeyJ' },
            win: { mods: ['ctrl'], code: 'KeyJ' },
            linux: { mods: ['ctrl'], code: 'KeyJ' },
          },
          {
            action: 'Fill',
            mac: { mods: ['shift'], code: 'F5' },
            win: { mods: ['shift'], code: 'F5' },
            linux: { mods: ['shift'], code: 'F5' },
          },
          {
            action: 'Save for Web',
            mac: { mods: ['meta', 'alt', 'shift'], code: 'KeyS' },
            win: { mods: ['ctrl', 'alt', 'shift'], code: 'KeyS' },
            linux: { mods: ['ctrl', 'alt', 'shift'], code: 'KeyS' },
          },
        ]
      },
      {
        name: 'View',
        shortcuts: [
          {
            action: 'Zoom In',
            mac: { mods: ['meta'], code: 'Equal' },
            win: { mods: ['ctrl'], code: 'Equal' },
            linux: { mods: ['ctrl'], code: 'Equal' },
          },
          {
            action: 'Zoom Out',
            mac: { mods: ['meta'], code: 'Minus' },
            win: { mods: ['ctrl'], code: 'Minus' },
            linux: { mods: ['ctrl'], code: 'Minus' },
          },
          {
            action: 'Fit on Screen',
            mac: { mods: ['meta'], code: 'Digit0' },
            win: { mods: ['ctrl'], code: 'Digit0' },
            linux: { mods: ['ctrl'], code: 'Digit0' },
          },
          {
            action: 'Actual Pixels',
            mac: { mods: ['meta'], code: 'Digit1' },
            win: { mods: ['ctrl'], code: 'Digit1' },
            linux: { mods: ['ctrl'], code: 'Digit1' },
          },
          {
            action: 'Toggle Rulers',
            mac: { mods: ['meta'], code: 'KeyR' },
            win: { mods: ['ctrl'], code: 'KeyR' },
            linux: { mods: ['ctrl'], code: 'KeyR' },
          },
        ]
      },
    ]
  },
  {
    id: 'figma',
    name: 'Figma',
    icon: '🎯',
    categories: [
      {
        name: 'Tools',
        shortcuts: [
          {
            action: 'Move Tool',
            mac: { mods: [], code: 'KeyV' },
            win: { mods: [], code: 'KeyV' },
            linux: { mods: [], code: 'KeyV' },
          },
          {
            action: 'Frame Tool',
            mac: { mods: [], code: 'KeyF' },
            win: { mods: [], code: 'KeyF' },
            linux: { mods: [], code: 'KeyF' },
          },
          {
            action: 'Rectangle',
            mac: { mods: [], code: 'KeyR' },
            win: { mods: [], code: 'KeyR' },
            linux: { mods: [], code: 'KeyR' },
          },
          {
            action: 'Ellipse',
            mac: { mods: [], code: 'KeyO' },
            win: { mods: [], code: 'KeyO' },
            linux: { mods: [], code: 'KeyO' },
          },
          {
            action: 'Line',
            mac: { mods: [], code: 'KeyL' },
            win: { mods: [], code: 'KeyL' },
            linux: { mods: [], code: 'KeyL' },
          },
          {
            action: 'Pen Tool',
            mac: { mods: [], code: 'KeyP' },
            win: { mods: [], code: 'KeyP' },
            linux: { mods: [], code: 'KeyP' },
          },
          {
            action: 'Text Tool',
            mac: { mods: [], code: 'KeyT' },
            win: { mods: [], code: 'KeyT' },
            linux: { mods: [], code: 'KeyT' },
          },
          {
            action: 'Hand Tool',
            mac: { mods: [], code: 'KeyH' },
            win: { mods: [], code: 'KeyH' },
            linux: { mods: [], code: 'KeyH' },
          },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          {
            action: 'Copy',
            mac: { mods: ['meta'], code: 'KeyC' },
            win: { mods: ['ctrl'], code: 'KeyC' },
            linux: { mods: ['ctrl'], code: 'KeyC' },
          },
          {
            action: 'Paste',
            mac: { mods: ['meta'], code: 'KeyV' },
            win: { mods: ['ctrl'], code: 'KeyV' },
            linux: { mods: ['ctrl'], code: 'KeyV' },
          },
          {
            action: 'Duplicate',
            mac: { mods: ['meta'], code: 'KeyD' },
            win: { mods: ['ctrl'], code: 'KeyD' },
            linux: { mods: ['ctrl'], code: 'KeyD' },
          },
          {
            action: 'Group',
            mac: { mods: ['meta'], code: 'KeyG' },
            win: { mods: ['ctrl'], code: 'KeyG' },
            linux: { mods: ['ctrl'], code: 'KeyG' },
          },
          {
            action: 'Ungroup',
            mac: { mods: ['meta', 'shift'], code: 'KeyG' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyG' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyG' },
          },
          {
            action: 'Boolean Union',
            mac: { mods: ['meta', 'alt'], code: 'KeyU' },
            win: { mods: ['ctrl', 'alt'], code: 'KeyU' },
            linux: { mods: ['ctrl', 'alt'], code: 'KeyU' },
          },
          {
            action: 'Flatten',
            mac: { mods: ['meta'], code: 'KeyE' },
            win: { mods: ['ctrl'], code: 'KeyE' },
            linux: { mods: ['ctrl'], code: 'KeyE' },
          },
        ]
      },
      {
        name: 'View',
        shortcuts: [
          {
            action: 'Zoom In',
            mac: { mods: ['meta'], code: 'Equal' },
            win: { mods: ['ctrl'], code: 'Equal' },
            linux: { mods: ['ctrl'], code: 'Equal' },
          },
          {
            action: 'Zoom Out',
            mac: { mods: ['meta'], code: 'Minus' },
            win: { mods: ['ctrl'], code: 'Minus' },
            linux: { mods: ['ctrl'], code: 'Minus' },
          },
          {
            action: 'Zoom to Fit',
            mac: { mods: ['shift'], code: 'Digit1' },
            win: { mods: ['shift'], code: 'Digit1' },
            linux: { mods: ['shift'], code: 'Digit1' },
          },
          {
            action: 'Zoom to Selection',
            mac: { mods: ['shift'], code: 'Digit2' },
            win: { mods: ['shift'], code: 'Digit2' },
            linux: { mods: ['shift'], code: 'Digit2' },
          },
          {
            action: 'Toggle Grid',
            mac: { mods: ['ctrl'], code: 'KeyG' },
            win: { mods: ['ctrl'], code: 'Quote' },
            linux: { mods: ['ctrl'], code: 'Quote' },
          },
          {
            action: 'Toggle Layers Panel',
            mac: { mods: ['meta'], code: 'Digit1' },
            win: { mods: ['ctrl'], code: 'Digit1' },
            linux: { mods: ['ctrl'], code: 'Digit1' },
          },
        ]
      },
    ]
  },
  {
    id: 'slack',
    name: 'Slack',
    icon: '💬',
    categories: [
      {
        name: 'Navigation',
        shortcuts: [
          {
            action: 'Quick Switcher',
            mac: { mods: ['meta'], code: 'KeyK' },
            win: { mods: ['ctrl'], code: 'KeyK' },
            linux: { mods: ['ctrl'], code: 'KeyK' },
          },
          {
            action: 'Search',
            mac: { mods: ['meta'], code: 'KeyF' },
            win: { mods: ['ctrl'], code: 'KeyF' },
            linux: { mods: ['ctrl'], code: 'KeyF' },
          },
          {
            action: 'Next Channel',
            mac: { mods: ['alt'], code: 'ArrowDown' },
            win: { mods: ['alt'], code: 'ArrowDown' },
            linux: { mods: ['alt'], code: 'ArrowDown' },
          },
          {
            action: 'Previous Channel',
            mac: { mods: ['alt'], code: 'ArrowUp' },
            win: { mods: ['alt'], code: 'ArrowUp' },
            linux: { mods: ['alt'], code: 'ArrowUp' },
          },
          {
            action: 'Next Unread',
            mac: { mods: ['alt', 'shift'], code: 'ArrowDown' },
            win: { mods: ['alt', 'shift'], code: 'ArrowDown' },
            linux: { mods: ['alt', 'shift'], code: 'ArrowDown' },
          },
          {
            action: 'Previous Unread',
            mac: { mods: ['alt', 'shift'], code: 'ArrowUp' },
            win: { mods: ['alt', 'shift'], code: 'ArrowUp' },
            linux: { mods: ['alt', 'shift'], code: 'ArrowUp' },
          },
          {
            action: 'Open DMs',
            mac: { mods: ['meta', 'shift'], code: 'KeyK' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyK' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyK' },
          },
          {
            action: 'Threads',
            mac: { mods: ['meta', 'shift'], code: 'KeyT' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyT' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyT' },
          },
        ]
      },
      {
        name: 'Messaging',
        shortcuts: [
          {
            action: 'Edit Last Message',
            mac: { mods: [], code: 'ArrowUp' },
            win: { mods: [], code: 'ArrowUp' },
            linux: { mods: [], code: 'ArrowUp' },
          },
          {
            action: 'New Line in Message',
            mac: { mods: ['shift'], code: 'Enter' },
            win: { mods: ['shift'], code: 'Enter' },
            linux: { mods: ['shift'], code: 'Enter' },
          },
          {
            action: 'Bold',
            mac: { mods: ['meta'], code: 'KeyB' },
            win: { mods: ['ctrl'], code: 'KeyB' },
            linux: { mods: ['ctrl'], code: 'KeyB' },
          },
          {
            action: 'Italic',
            mac: { mods: ['meta'], code: 'KeyI' },
            win: { mods: ['ctrl'], code: 'KeyI' },
            linux: { mods: ['ctrl'], code: 'KeyI' },
          },
          {
            action: 'Strikethrough',
            mac: { mods: ['meta', 'shift'], code: 'KeyX' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyX' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyX' },
          },
          {
            action: 'Add Emoji Reaction',
            mac: { mods: ['meta', 'shift'], code: 'Backslash' },
            win: { mods: ['ctrl', 'shift'], code: 'Backslash' },
            linux: { mods: ['ctrl', 'shift'], code: 'Backslash' },
          },
          {
            action: 'Upload File',
            mac: { mods: ['meta'], code: 'KeyU' },
            win: { mods: ['ctrl'], code: 'KeyU' },
            linux: { mods: ['ctrl'], code: 'KeyU' },
          },
          {
            action: 'Create Snippet',
            mac: { mods: ['meta', 'shift'], code: 'Enter' },
            win: { mods: ['ctrl', 'shift'], code: 'Enter' },
            linux: { mods: ['ctrl', 'shift'], code: 'Enter' },
          },
        ]
      },
    ]
  },
  {
    id: 'discord',
    name: 'Discord',
    icon: '🎮',
    categories: [
      {
        name: 'Navigation',
        shortcuts: [
          {
            action: 'Quick Switcher',
            mac: { mods: ['meta'], code: 'KeyK' },
            win: { mods: ['ctrl'], code: 'KeyK' },
            linux: { mods: ['ctrl'], code: 'KeyK' },
          },
          {
            action: 'Search',
            mac: { mods: ['meta'], code: 'KeyF' },
            win: { mods: ['ctrl'], code: 'KeyF' },
            linux: { mods: ['ctrl'], code: 'KeyF' },
          },
          {
            action: 'Next Server',
            mac: { mods: ['alt'], code: 'ArrowDown' },
            win: { mods: ['alt'], code: 'ArrowDown' },
            linux: { mods: ['alt'], code: 'ArrowDown' },
          },
          {
            action: 'Previous Server',
            mac: { mods: ['alt'], code: 'ArrowUp' },
            win: { mods: ['alt'], code: 'ArrowUp' },
            linux: { mods: ['alt'], code: 'ArrowUp' },
          },
          {
            action: 'Next Channel',
            mac: { mods: ['alt', 'shift'], code: 'ArrowDown' },
            win: { mods: ['alt', 'shift'], code: 'ArrowDown' },
            linux: { mods: ['alt', 'shift'], code: 'ArrowDown' },
          },
          {
            action: 'Previous Channel',
            mac: { mods: ['alt', 'shift'], code: 'ArrowUp' },
            win: { mods: ['alt', 'shift'], code: 'ArrowUp' },
            linux: { mods: ['alt', 'shift'], code: 'ArrowUp' },
          },
          {
            action: 'Navigate Back',
            mac: { mods: ['meta'], code: 'BracketLeft' },
            win: { mods: ['alt'], code: 'ArrowLeft' },
            linux: { mods: ['alt'], code: 'ArrowLeft' },
          },
          {
            action: 'Navigate Forward',
            mac: { mods: ['meta'], code: 'BracketRight' },
            win: { mods: ['alt'], code: 'ArrowRight' },
            linux: { mods: ['alt'], code: 'ArrowRight' },
          },
        ]
      },
      {
        name: 'Chat',
        shortcuts: [
          {
            action: 'Edit Last Message',
            mac: { mods: [], code: 'ArrowUp' },
            win: { mods: [], code: 'ArrowUp' },
            linux: { mods: [], code: 'ArrowUp' },
          },
          {
            action: 'Upload File',
            mac: { mods: ['meta'], code: 'KeyU' },
            win: { mods: ['ctrl'], code: 'KeyU' },
            linux: { mods: ['ctrl'], code: 'KeyU' },
          },
          {
            action: 'Toggle Mute',
            mac: { mods: ['meta', 'shift'], code: 'KeyM' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyM' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyM' },
          },
          {
            action: 'Toggle Deafen',
            mac: { mods: ['meta', 'shift'], code: 'KeyD' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyD' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyD' },
          },
          {
            action: 'Pin Messages',
            mac: { mods: ['meta'], code: 'KeyP' },
            win: { mods: ['ctrl'], code: 'KeyP' },
            linux: { mods: ['ctrl'], code: 'KeyP' },
          },
          {
            action: 'Member List',
            mac: { mods: ['meta'], code: 'KeyM' },
            win: { mods: ['ctrl'], code: 'KeyM' },
            linux: { mods: ['ctrl'], code: 'KeyM' },
          },
          {
            action: 'Create DM Group',
            mac: { mods: ['meta', 'shift'], code: 'KeyN' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyN' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyN' },
          },
          {
            action: 'Emoji Picker',
            mac: { mods: ['meta'], code: 'KeyE' },
            win: { mods: ['ctrl'], code: 'KeyE' },
            linux: { mods: ['ctrl'], code: 'KeyE' },
          },
        ]
      },
    ]
  },
  {
    id: 'notion',
    name: 'Notion',
    icon: '📓',
    categories: [
      {
        name: 'Editing',
        shortcuts: [
          {
            action: 'Bold',
            mac: { mods: ['meta'], code: 'KeyB' },
            win: { mods: ['ctrl'], code: 'KeyB' },
            linux: { mods: ['ctrl'], code: 'KeyB' },
          },
          {
            action: 'Italic',
            mac: { mods: ['meta'], code: 'KeyI' },
            win: { mods: ['ctrl'], code: 'KeyI' },
            linux: { mods: ['ctrl'], code: 'KeyI' },
          },
          {
            action: 'Underline',
            mac: { mods: ['meta'], code: 'KeyU' },
            win: { mods: ['ctrl'], code: 'KeyU' },
            linux: { mods: ['ctrl'], code: 'KeyU' },
          },
          {
            action: 'Strikethrough',
            mac: { mods: ['meta', 'shift'], code: 'KeyX' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyX' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyX' },
          },
          {
            action: 'Code Inline',
            mac: { mods: ['meta'], code: 'KeyE' },
            win: { mods: ['ctrl'], code: 'KeyE' },
            linux: { mods: ['ctrl'], code: 'KeyE' },
          },
          {
            action: 'Create Link',
            mac: { mods: ['meta'], code: 'KeyK' },
            win: { mods: ['ctrl'], code: 'KeyK' },
            linux: { mods: ['ctrl'], code: 'KeyK' },
          },
          {
            action: 'Undo',
            mac: { mods: ['meta'], code: 'KeyZ' },
            win: { mods: ['ctrl'], code: 'KeyZ' },
            linux: { mods: ['ctrl'], code: 'KeyZ' },
          },
          {
            action: 'Redo',
            mac: { mods: ['meta', 'shift'], code: 'KeyZ' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyZ' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyZ' },
          },
          {
            action: 'Toggle To-Do',
            mac: { mods: ['meta', 'shift'], code: 'Enter' },
            win: { mods: ['ctrl', 'shift'], code: 'Enter' },
            linux: { mods: ['ctrl', 'shift'], code: 'Enter' },
          },
          {
            action: 'Indent',
            mac: { mods: [], code: 'Tab' },
            win: { mods: [], code: 'Tab' },
            linux: { mods: [], code: 'Tab' },
          },
          {
            action: 'Outdent',
            mac: { mods: ['shift'], code: 'Tab' },
            win: { mods: ['shift'], code: 'Tab' },
            linux: { mods: ['shift'], code: 'Tab' },
          },
        ]
      },
      {
        name: 'Navigation',
        shortcuts: [
          {
            action: 'Search',
            mac: { mods: ['meta'], code: 'KeyP' },
            win: { mods: ['ctrl'], code: 'KeyP' },
            linux: { mods: ['ctrl'], code: 'KeyP' },
          },
          {
            action: 'Go Back',
            mac: { mods: ['meta'], code: 'BracketLeft' },
            win: { mods: ['alt'], code: 'ArrowLeft' },
            linux: { mods: ['alt'], code: 'ArrowLeft' },
          },
          {
            action: 'Go Forward',
            mac: { mods: ['meta'], code: 'BracketRight' },
            win: { mods: ['alt'], code: 'ArrowRight' },
            linux: { mods: ['alt'], code: 'ArrowRight' },
          },
          {
            action: 'New Page',
            mac: { mods: ['meta'], code: 'KeyN' },
            win: { mods: ['ctrl'], code: 'KeyN' },
            linux: { mods: ['ctrl'], code: 'KeyN' },
          },
          {
            action: 'Toggle Sidebar',
            mac: { mods: ['meta'], code: 'Backslash' },
            win: { mods: ['ctrl'], code: 'Backslash' },
            linux: { mods: ['ctrl'], code: 'Backslash' },
          },
          {
            action: 'Open as Page',
            mac: { mods: [], code: 'Enter' },
            win: { mods: [], code: 'Enter' },
            linux: { mods: [], code: 'Enter' },
          },
          {
            action: 'Toggle Dark Mode',
            mac: { mods: ['meta', 'shift'], code: 'KeyL' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyL' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyL' },
          },
          {
            action: 'Slash Command',
            mac: { mods: [], code: 'Slash' },
            win: { mods: [], code: 'Slash' },
            linux: { mods: [], code: 'Slash' },
          },
        ]
      },
    ]
  },
  {
    id: 'terminal',
    name: 'Terminal / Command Line',
    icon: '⬛',
    categories: [
      {
        name: 'Navigation',
        shortcuts: [
          {
            action: 'Clear Screen',
            mac: { mods: ['meta'], code: 'KeyK' },
            win: { mods: ['ctrl'], code: 'KeyL' },
            linux: { mods: ['ctrl'], code: 'KeyL' },
          },
          {
            action: 'Cancel Command',
            mac: { mods: ['ctrl'], code: 'KeyC' },
            win: { mods: ['ctrl'], code: 'KeyC' },
            linux: { mods: ['ctrl'], code: 'KeyC' },
          },
          {
            action: 'New Tab',
            mac: { mods: ['meta'], code: 'KeyT' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyT' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyT' },
          },
          {
            action: 'Close Tab',
            mac: { mods: ['meta'], code: 'KeyW' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyW' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyW' },
          },
          {
            action: 'Previous Command',
            mac: { mods: [], code: 'ArrowUp' },
            win: { mods: [], code: 'ArrowUp' },
            linux: { mods: [], code: 'ArrowUp' },
          },
          {
            action: 'Search History',
            mac: { mods: ['ctrl'], code: 'KeyR' },
            win: { mods: ['ctrl'], code: 'KeyR' },
            linux: { mods: ['ctrl'], code: 'KeyR' },
          },
          {
            action: 'End of File (EOF)',
            mac: { mods: ['ctrl'], code: 'KeyD' },
            win: { mods: ['ctrl'], code: 'KeyD' },
            linux: { mods: ['ctrl'], code: 'KeyD' },
          },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          {
            action: 'Move to Line Start',
            mac: { mods: ['ctrl'], code: 'KeyA' },
            win: { mods: ['ctrl'], code: 'KeyA' },
            linux: { mods: ['ctrl'], code: 'KeyA' },
          },
          {
            action: 'Move to Line End',
            mac: { mods: ['ctrl'], code: 'KeyE' },
            win: { mods: ['ctrl'], code: 'KeyE' },
            linux: { mods: ['ctrl'], code: 'KeyE' },
          },
          {
            action: 'Delete Word Before',
            mac: { mods: ['alt'], code: 'Backspace' },
            win: { mods: ['ctrl'], code: 'KeyW' },
            linux: { mods: ['ctrl'], code: 'KeyW' },
          },
          {
            action: 'Clear Line',
            mac: { mods: ['ctrl'], code: 'KeyU' },
            win: { mods: ['ctrl'], code: 'KeyU' },
            linux: { mods: ['ctrl'], code: 'KeyU' },
          },
          {
            action: 'Delete Word After',
            mac: { mods: ['alt'], code: 'KeyD' },
            win: { mods: ['alt'], code: 'KeyD' },
            linux: { mods: ['alt'], code: 'KeyD' },
          },
          {
            action: 'Transpose Characters',
            mac: { mods: ['ctrl'], code: 'KeyT' },
            win: { mods: ['ctrl'], code: 'KeyT' },
            linux: { mods: ['ctrl'], code: 'KeyT' },
          },
          {
            action: 'Clear to End',
            mac: { mods: ['ctrl'], code: 'KeyK' },
            win: { mods: ['ctrl'], code: 'KeyK' },
            linux: { mods: ['ctrl'], code: 'KeyK' },
          },
          {
            action: 'Suspend Process',
            mac: { mods: ['ctrl'], code: 'KeyZ' },
            win: { mods: ['ctrl'], code: 'KeyZ' },
            linux: { mods: ['ctrl'], code: 'KeyZ' },
          },
        ]
      },
    ]
  },
  {
    id: 'finder',
    name: 'Finder / File Explorer',
    icon: '📁',
    categories: [
      {
        name: 'Navigation',
        shortcuts: [
          {
            action: 'New Window',
            mac: { mods: ['meta'], code: 'KeyN' },
            win: { mods: ['ctrl'], code: 'KeyN' },
            linux: { mods: ['ctrl'], code: 'KeyN' },
          },
          {
            action: 'Go Up',
            mac: { mods: ['meta'], code: 'ArrowUp' },
            win: { mods: ['alt'], code: 'ArrowUp' },
            linux: { mods: ['alt'], code: 'ArrowUp' },
          },
          {
            action: 'Go Back',
            mac: { mods: ['meta'], code: 'BracketLeft' },
            win: { mods: ['alt'], code: 'ArrowLeft' },
            linux: { mods: ['alt'], code: 'ArrowLeft' },
          },
          {
            action: 'Go Forward',
            mac: { mods: ['meta'], code: 'BracketRight' },
            win: { mods: ['alt'], code: 'ArrowRight' },
            linux: { mods: ['alt'], code: 'ArrowRight' },
          },
          {
            action: 'Go to Home',
            mac: { mods: ['meta', 'shift'], code: 'KeyH' },
            win: { mods: [], code: '' },
            linux: { mods: ['alt'], code: 'Home' },
          },
          {
            action: 'Search',
            mac: { mods: ['meta'], code: 'KeyF' },
            win: { mods: ['ctrl'], code: 'KeyF' },
            linux: { mods: ['ctrl'], code: 'KeyF' },
          },
          {
            action: 'Address Bar',
            mac: { mods: ['meta', 'shift'], code: 'KeyG' },
            win: { mods: ['ctrl'], code: 'KeyL' },
            linux: { mods: ['ctrl'], code: 'KeyL' },
          },
          {
            action: 'Open Item',
            mac: { mods: ['meta'], code: 'KeyO' },
            win: { mods: [], code: 'Enter' },
            linux: { mods: [], code: 'Enter' },
          },
        ]
      },
      {
        name: 'File Operations',
        shortcuts: [
          {
            action: 'New Folder',
            mac: { mods: ['meta', 'shift'], code: 'KeyN' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyN' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyN' },
          },
          {
            action: 'Rename',
            mac: { mods: [], code: 'Enter' },
            win: { mods: [], code: 'F2' },
            linux: { mods: [], code: 'F2' },
          },
          {
            action: 'Delete',
            mac: { mods: ['meta'], code: 'Backspace' },
            win: { mods: [], code: 'Delete' },
            linux: { mods: [], code: 'Delete' },
          },
          {
            action: 'Copy',
            mac: { mods: ['meta'], code: 'KeyC' },
            win: { mods: ['ctrl'], code: 'KeyC' },
            linux: { mods: ['ctrl'], code: 'KeyC' },
          },
          {
            action: 'Paste',
            mac: { mods: ['meta'], code: 'KeyV' },
            win: { mods: ['ctrl'], code: 'KeyV' },
            linux: { mods: ['ctrl'], code: 'KeyV' },
          },
          {
            action: 'Move (Cut)',
            mac: { mods: ['meta', 'alt'], code: 'KeyV' },
            win: { mods: ['ctrl'], code: 'KeyX' },
            linux: { mods: ['ctrl'], code: 'KeyX' },
          },
          {
            action: 'Select All',
            mac: { mods: ['meta'], code: 'KeyA' },
            win: { mods: ['ctrl'], code: 'KeyA' },
            linux: { mods: ['ctrl'], code: 'KeyA' },
          },
          {
            action: 'Get Info / Properties',
            mac: { mods: ['meta'], code: 'KeyI' },
            win: { mods: ['alt'], code: 'Enter' },
            linux: { mods: ['alt'], code: 'Enter' },
          },
          {
            action: 'Toggle Hidden Files',
            mac: { mods: ['meta', 'shift'], code: 'Period' },
            win: { mods: ['ctrl'], code: 'KeyH' },
            linux: { mods: ['ctrl'], code: 'KeyH' },
          },
        ]
      },
    ]
  },
  {
    id: 'spotify',
    name: 'Spotify',
    icon: '🎵',
    categories: [
      {
        name: 'Playback',
        shortcuts: [
          {
            action: 'Play / Pause',
            mac: { mods: [], code: 'Space' },
            win: { mods: [], code: 'Space' },
            linux: { mods: [], code: 'Space' },
          },
          {
            action: 'Next Track',
            mac: { mods: ['meta'], code: 'ArrowRight' },
            win: { mods: ['ctrl'], code: 'ArrowRight' },
            linux: { mods: ['ctrl'], code: 'ArrowRight' },
          },
          {
            action: 'Previous Track',
            mac: { mods: ['meta'], code: 'ArrowLeft' },
            win: { mods: ['ctrl'], code: 'ArrowLeft' },
            linux: { mods: ['ctrl'], code: 'ArrowLeft' },
          },
          {
            action: 'Volume Up',
            mac: { mods: ['meta'], code: 'ArrowUp' },
            win: { mods: ['ctrl'], code: 'ArrowUp' },
            linux: { mods: ['ctrl'], code: 'ArrowUp' },
          },
          {
            action: 'Volume Down',
            mac: { mods: ['meta'], code: 'ArrowDown' },
            win: { mods: ['ctrl'], code: 'ArrowDown' },
            linux: { mods: ['ctrl'], code: 'ArrowDown' },
          },
          {
            action: 'Shuffle',
            mac: { mods: ['meta'], code: 'KeyS' },
            win: { mods: ['ctrl'], code: 'KeyS' },
            linux: { mods: ['ctrl'], code: 'KeyS' },
          },
          {
            action: 'Repeat',
            mac: { mods: ['meta'], code: 'KeyR' },
            win: { mods: ['ctrl'], code: 'KeyR' },
            linux: { mods: ['ctrl'], code: 'KeyR' },
          },
          {
            action: 'Seek Forward',
            mac: { mods: ['meta', 'shift'], code: 'ArrowRight' },
            win: { mods: ['ctrl', 'shift'], code: 'ArrowRight' },
            linux: { mods: ['ctrl', 'shift'], code: 'ArrowRight' },
          },
          {
            action: 'Seek Backward',
            mac: { mods: ['meta', 'shift'], code: 'ArrowLeft' },
            win: { mods: ['ctrl', 'shift'], code: 'ArrowLeft' },
            linux: { mods: ['ctrl', 'shift'], code: 'ArrowLeft' },
          },
        ]
      },
      {
        name: 'Navigation',
        shortcuts: [
          {
            action: 'Search',
            mac: { mods: ['meta'], code: 'KeyL' },
            win: { mods: ['ctrl'], code: 'KeyL' },
            linux: { mods: ['ctrl'], code: 'KeyL' },
          },
          {
            action: 'Filter',
            mac: { mods: ['meta'], code: 'KeyF' },
            win: { mods: ['ctrl'], code: 'KeyF' },
            linux: { mods: ['ctrl'], code: 'KeyF' },
          },
          {
            action: 'Go Back',
            mac: { mods: ['meta'], code: 'BracketLeft' },
            win: { mods: ['alt'], code: 'ArrowLeft' },
            linux: { mods: ['alt'], code: 'ArrowLeft' },
          },
          {
            action: 'Go Forward',
            mac: { mods: ['meta'], code: 'BracketRight' },
            win: { mods: ['alt'], code: 'ArrowRight' },
            linux: { mods: ['alt'], code: 'ArrowRight' },
          },
          {
            action: 'Home',
            mac: { mods: ['alt', 'shift'], code: 'KeyH' },
            win: { mods: ['alt', 'shift'], code: 'KeyH' },
            linux: { mods: ['alt', 'shift'], code: 'KeyH' },
          },
          {
            action: 'Like Song',
            mac: { mods: ['alt', 'shift'], code: 'KeyB' },
            win: { mods: ['alt', 'shift'], code: 'KeyB' },
            linux: { mods: ['alt', 'shift'], code: 'KeyB' },
          },
          {
            action: 'Create New Playlist',
            mac: { mods: ['meta'], code: 'KeyN' },
            win: { mods: ['ctrl'], code: 'KeyN' },
            linux: { mods: ['ctrl'], code: 'KeyN' },
          },
        ]
      },
    ]
  },
  {
    id: 'zoom',
    name: 'Zoom',
    icon: '📹',
    categories: [
      {
        name: 'Meeting',
        shortcuts: [
          {
            action: 'Start Meeting',
            mac: { mods: ['meta'], code: 'KeyJ' },
            win: { mods: ['alt'], code: 'KeyJ' },
            linux: { mods: ['alt'], code: 'KeyJ' },
          },
          {
            action: 'Schedule Meeting',
            mac: { mods: ['meta'], code: 'KeyI' },
            win: { mods: ['alt'], code: 'KeyI' },
            linux: { mods: ['alt'], code: 'KeyI' },
          },
          {
            action: 'End Meeting',
            mac: { mods: ['meta'], code: 'KeyW' },
            win: { mods: ['alt'], code: 'KeyQ' },
            linux: { mods: ['alt'], code: 'KeyQ' },
          },
          {
            action: 'Invite',
            mac: { mods: ['meta'], code: 'KeyI' },
            win: { mods: ['alt'], code: 'KeyI' },
            linux: { mods: ['alt'], code: 'KeyI' },
          },
          {
            action: 'Raise Hand',
            mac: { mods: ['alt'], code: 'KeyY' },
            win: { mods: ['alt'], code: 'KeyY' },
            linux: { mods: ['alt'], code: 'KeyY' },
          },
          {
            action: 'Share Screen',
            mac: { mods: ['meta', 'shift'], code: 'KeyS' },
            win: { mods: ['alt'], code: 'KeyS' },
            linux: { mods: ['alt'], code: 'KeyS' },
          },
          {
            action: 'Pause Share',
            mac: { mods: ['meta', 'shift'], code: 'KeyT' },
            win: { mods: ['alt'], code: 'KeyT' },
            linux: { mods: ['alt'], code: 'KeyT' },
          },
          {
            action: 'Chat',
            mac: { mods: ['meta', 'shift'], code: 'KeyH' },
            win: { mods: ['alt'], code: 'KeyH' },
            linux: { mods: ['alt'], code: 'KeyH' },
          },
        ]
      },
      {
        name: 'Video / Audio',
        shortcuts: [
          {
            action: 'Mute / Unmute Audio',
            mac: { mods: ['meta', 'shift'], code: 'KeyA' },
            win: { mods: ['alt'], code: 'KeyA' },
            linux: { mods: ['alt'], code: 'KeyA' },
          },
          {
            action: 'Start / Stop Video',
            mac: { mods: ['meta', 'shift'], code: 'KeyV' },
            win: { mods: ['alt'], code: 'KeyV' },
            linux: { mods: ['alt'], code: 'KeyV' },
          },
          {
            action: 'Switch Camera',
            mac: { mods: ['meta', 'shift'], code: 'KeyN' },
            win: { mods: ['alt'], code: 'KeyN' },
            linux: { mods: ['alt'], code: 'KeyN' },
          },
          {
            action: 'Toggle Fullscreen',
            mac: { mods: ['meta', 'shift'], code: 'KeyF' },
            win: { mods: ['alt'], code: 'KeyF' },
            linux: { mods: ['alt'], code: 'KeyF' },
          },
          {
            action: 'Gallery View',
            mac: { mods: ['meta', 'shift'], code: 'KeyW' },
            win: { mods: ['alt'], code: 'F2' },
            linux: { mods: ['alt'], code: 'F2' },
          },
          {
            action: 'Speaker View',
            mac: { mods: ['meta', 'shift'], code: 'KeyW' },
            win: { mods: ['alt'], code: 'F1' },
            linux: { mods: ['alt'], code: 'F1' },
          },
          {
            action: 'Start Recording',
            mac: { mods: ['meta', 'shift'], code: 'KeyR' },
            win: { mods: ['alt'], code: 'KeyR' },
            linux: { mods: ['alt'], code: 'KeyR' },
          },
          {
            action: 'Pause Recording',
            mac: { mods: ['meta', 'shift'], code: 'KeyP' },
            win: { mods: ['alt'], code: 'KeyP' },
            linux: { mods: ['alt'], code: 'KeyP' },
          },
        ]
      },
    ]
  },
  {
    id: 'outlook',
    name: 'Outlook / Mail',
    icon: '📧',
    categories: [
      {
        name: 'Navigation',
        shortcuts: [
          {
            action: 'Search',
            mac: { mods: ['meta'], code: 'KeyF' },
            win: { mods: ['ctrl'], code: 'KeyE' },
            linux: { mods: ['ctrl'], code: 'KeyE' },
          },
          {
            action: 'Go to Mail',
            mac: { mods: ['meta'], code: 'Digit1' },
            win: { mods: ['ctrl'], code: 'Digit1' },
            linux: { mods: ['ctrl'], code: 'Digit1' },
          },
          {
            action: 'Go to Calendar',
            mac: { mods: ['meta'], code: 'Digit2' },
            win: { mods: ['ctrl'], code: 'Digit2' },
            linux: { mods: ['ctrl'], code: 'Digit2' },
          },
          {
            action: 'Go to Contacts',
            mac: { mods: ['meta'], code: 'Digit3' },
            win: { mods: ['ctrl'], code: 'Digit3' },
            linux: { mods: ['ctrl'], code: 'Digit3' },
          },
          {
            action: 'Next Message',
            mac: { mods: ['ctrl'], code: 'BracketRight' },
            win: { mods: ['ctrl'], code: 'Period' },
            linux: { mods: ['ctrl'], code: 'Period' },
          },
          {
            action: 'Previous Message',
            mac: { mods: ['ctrl'], code: 'BracketLeft' },
            win: { mods: ['ctrl'], code: 'Comma' },
            linux: { mods: ['ctrl'], code: 'Comma' },
          },
          {
            action: 'Refresh',
            mac: { mods: ['meta', 'shift'], code: 'KeyK' },
            win: { mods: [], code: 'F9' },
            linux: { mods: [], code: 'F9' },
          },
        ]
      },
      {
        name: 'Composing',
        shortcuts: [
          {
            action: 'New Message',
            mac: { mods: ['meta'], code: 'KeyN' },
            win: { mods: ['ctrl'], code: 'KeyN' },
            linux: { mods: ['ctrl'], code: 'KeyN' },
          },
          {
            action: 'Reply',
            mac: { mods: ['meta'], code: 'KeyR' },
            win: { mods: ['ctrl'], code: 'KeyR' },
            linux: { mods: ['ctrl'], code: 'KeyR' },
          },
          {
            action: 'Reply All',
            mac: { mods: ['meta', 'shift'], code: 'KeyR' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyR' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyR' },
          },
          {
            action: 'Forward',
            mac: { mods: ['meta'], code: 'KeyJ' },
            win: { mods: ['ctrl'], code: 'KeyF' },
            linux: { mods: ['ctrl'], code: 'KeyF' },
          },
          {
            action: 'Send',
            mac: { mods: ['meta'], code: 'Enter' },
            win: { mods: ['ctrl'], code: 'Enter' },
            linux: { mods: ['ctrl'], code: 'Enter' },
          },
          {
            action: 'Attach File',
            mac: { mods: ['meta'], code: 'KeyE' },
            win: { mods: ['alt'], code: 'KeyI' },
            linux: { mods: ['alt'], code: 'KeyI' },
          },
          {
            action: 'Mark as Read',
            mac: { mods: ['meta'], code: 'KeyT' },
            win: { mods: ['ctrl'], code: 'KeyQ' },
            linux: { mods: ['ctrl'], code: 'KeyQ' },
          },
          {
            action: 'Flag Message',
            mac: { mods: ['meta', 'shift'], code: 'KeyL' },
            win: { mods: [], code: 'Insert' },
            linux: { mods: [], code: 'Insert' },
          },
        ]
      },
    ]
  },
  {
    id: 'intellij',
    name: 'IntelliJ IDEA',
    icon: '🔧',
    categories: [
      {
        name: 'Navigation',
        shortcuts: [
          {
            action: 'Search Everywhere',
            mac: { mods: ['shift'], code: 'Shift' },
            win: { mods: ['shift'], code: 'Shift' },
            linux: { mods: ['shift'], code: 'Shift' },
          },
          {
            action: 'Go to File',
            mac: { mods: ['meta', 'shift'], code: 'KeyO' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyN' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyN' },
          },
          {
            action: 'Go to Class',
            mac: { mods: ['meta'], code: 'KeyO' },
            win: { mods: ['ctrl'], code: 'KeyN' },
            linux: { mods: ['ctrl'], code: 'KeyN' },
          },
          {
            action: 'Go to Symbol',
            mac: { mods: ['meta', 'alt'], code: 'KeyO' },
            win: { mods: ['ctrl', 'alt', 'shift'], code: 'KeyN' },
            linux: { mods: ['ctrl', 'alt', 'shift'], code: 'KeyN' },
          },
          {
            action: 'Go to Line',
            mac: { mods: ['meta'], code: 'KeyL' },
            win: { mods: ['ctrl'], code: 'KeyG' },
            linux: { mods: ['ctrl'], code: 'KeyG' },
          },
          {
            action: 'Recent Files',
            mac: { mods: ['meta'], code: 'KeyE' },
            win: { mods: ['ctrl'], code: 'KeyE' },
            linux: { mods: ['ctrl'], code: 'KeyE' },
          },
          {
            action: 'Go to Declaration',
            mac: { mods: ['meta'], code: 'KeyB' },
            win: { mods: ['ctrl'], code: 'KeyB' },
            linux: { mods: ['ctrl'], code: 'KeyB' },
          },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          {
            action: 'Find',
            mac: { mods: ['meta'], code: 'KeyF' },
            win: { mods: ['ctrl'], code: 'KeyF' },
            linux: { mods: ['ctrl'], code: 'KeyF' },
          },
          {
            action: 'Replace',
            mac: { mods: ['meta'], code: 'KeyR' },
            win: { mods: ['ctrl'], code: 'KeyH' },
            linux: { mods: ['ctrl'], code: 'KeyH' },
          },
          {
            action: 'Find in Path',
            mac: { mods: ['meta', 'shift'], code: 'KeyF' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyF' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyF' },
          },
          {
            action: 'Duplicate Line',
            mac: { mods: ['meta'], code: 'KeyD' },
            win: { mods: ['ctrl'], code: 'KeyD' },
            linux: { mods: ['ctrl'], code: 'KeyD' },
          },
          {
            action: 'Delete Line',
            mac: { mods: ['meta'], code: 'Backspace' },
            win: { mods: ['ctrl'], code: 'KeyY' },
            linux: { mods: ['ctrl'], code: 'KeyY' },
          },
          {
            action: 'Toggle Comment',
            mac: { mods: ['meta'], code: 'Slash' },
            win: { mods: ['ctrl'], code: 'Slash' },
            linux: { mods: ['ctrl'], code: 'Slash' },
          },
          {
            action: 'Code Completion',
            mac: { mods: ['ctrl'], code: 'Space' },
            win: { mods: ['ctrl'], code: 'Space' },
            linux: { mods: ['ctrl'], code: 'Space' },
          },
        ]
      },
      {
        name: 'Refactoring',
        shortcuts: [
          {
            action: 'Rename',
            mac: { mods: ['shift'], code: 'F6' },
            win: { mods: ['shift'], code: 'F6' },
            linux: { mods: ['shift'], code: 'F6' },
          },
          {
            action: 'Extract Method',
            mac: { mods: ['meta', 'alt'], code: 'KeyM' },
            win: { mods: ['ctrl', 'alt'], code: 'KeyM' },
            linux: { mods: ['ctrl', 'alt'], code: 'KeyM' },
          },
          {
            action: 'Extract Variable',
            mac: { mods: ['meta', 'alt'], code: 'KeyV' },
            win: { mods: ['ctrl', 'alt'], code: 'KeyV' },
            linux: { mods: ['ctrl', 'alt'], code: 'KeyV' },
          },
          {
            action: 'Inline',
            mac: { mods: ['meta', 'alt'], code: 'KeyN' },
            win: { mods: ['ctrl', 'alt'], code: 'KeyN' },
            linux: { mods: ['ctrl', 'alt'], code: 'KeyN' },
          },
          {
            action: 'Reformat Code',
            mac: { mods: ['meta', 'alt'], code: 'KeyL' },
            win: { mods: ['ctrl', 'alt'], code: 'KeyL' },
            linux: { mods: ['ctrl', 'alt'], code: 'KeyL' },
          },
          {
            action: 'Optimize Imports',
            mac: { mods: ['ctrl', 'alt'], code: 'KeyO' },
            win: { mods: ['ctrl', 'alt'], code: 'KeyO' },
            linux: { mods: ['ctrl', 'alt'], code: 'KeyO' },
          },
        ]
      },
    ]
  },
  {
    id: 'sublime',
    name: 'Sublime Text',
    icon: '✏️',
    categories: [
      {
        name: 'General',
        shortcuts: [
          {
            action: 'Command Palette',
            mac: { mods: ['meta', 'shift'], code: 'KeyP' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyP' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyP' },
          },
          {
            action: 'Go to File',
            mac: { mods: ['meta'], code: 'KeyP' },
            win: { mods: ['ctrl'], code: 'KeyP' },
            linux: { mods: ['ctrl'], code: 'KeyP' },
          },
          {
            action: 'Go to Symbol',
            mac: { mods: ['meta'], code: 'KeyR' },
            win: { mods: ['ctrl'], code: 'KeyR' },
            linux: { mods: ['ctrl'], code: 'KeyR' },
          },
          {
            action: 'Go to Line',
            mac: { mods: ['ctrl'], code: 'KeyG' },
            win: { mods: ['ctrl'], code: 'KeyG' },
            linux: { mods: ['ctrl'], code: 'KeyG' },
          },
          {
            action: 'New File',
            mac: { mods: ['meta'], code: 'KeyN' },
            win: { mods: ['ctrl'], code: 'KeyN' },
            linux: { mods: ['ctrl'], code: 'KeyN' },
          },
          {
            action: 'Save',
            mac: { mods: ['meta'], code: 'KeyS' },
            win: { mods: ['ctrl'], code: 'KeyS' },
            linux: { mods: ['ctrl'], code: 'KeyS' },
          },
          {
            action: 'Close File',
            mac: { mods: ['meta'], code: 'KeyW' },
            win: { mods: ['ctrl'], code: 'KeyW' },
            linux: { mods: ['ctrl'], code: 'KeyW' },
          },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          {
            action: 'Toggle Comment',
            mac: { mods: ['meta'], code: 'Slash' },
            win: { mods: ['ctrl'], code: 'Slash' },
            linux: { mods: ['ctrl'], code: 'Slash' },
          },
          {
            action: 'Duplicate Line',
            mac: { mods: ['meta', 'shift'], code: 'KeyD' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyD' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyD' },
          },
          {
            action: 'Delete Line',
            mac: { mods: ['ctrl', 'shift'], code: 'KeyK' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyK' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyK' },
          },
          {
            action: 'Move Line Up',
            mac: { mods: ['meta', 'ctrl'], code: 'ArrowUp' },
            win: { mods: ['ctrl', 'shift'], code: 'ArrowUp' },
            linux: { mods: ['ctrl', 'shift'], code: 'ArrowUp' },
          },
          {
            action: 'Move Line Down',
            mac: { mods: ['meta', 'ctrl'], code: 'ArrowDown' },
            win: { mods: ['ctrl', 'shift'], code: 'ArrowDown' },
            linux: { mods: ['ctrl', 'shift'], code: 'ArrowDown' },
          },
          {
            action: 'Join Lines',
            mac: { mods: ['meta'], code: 'KeyJ' },
            win: { mods: ['ctrl'], code: 'KeyJ' },
            linux: { mods: ['ctrl'], code: 'KeyJ' },
          },
          {
            action: 'Indent',
            mac: { mods: ['meta'], code: 'BracketRight' },
            win: { mods: ['ctrl'], code: 'BracketRight' },
            linux: { mods: ['ctrl'], code: 'BracketRight' },
          },
          {
            action: 'Unindent',
            mac: { mods: ['meta'], code: 'BracketLeft' },
            win: { mods: ['ctrl'], code: 'BracketLeft' },
            linux: { mods: ['ctrl'], code: 'BracketLeft' },
          },
        ]
      },
      {
        name: 'Selection',
        shortcuts: [
          {
            action: 'Select Word',
            mac: { mods: ['meta'], code: 'KeyD' },
            win: { mods: ['ctrl'], code: 'KeyD' },
            linux: { mods: ['ctrl'], code: 'KeyD' },
          },
          {
            action: 'Select Line',
            mac: { mods: ['meta'], code: 'KeyL' },
            win: { mods: ['ctrl'], code: 'KeyL' },
            linux: { mods: ['ctrl'], code: 'KeyL' },
          },
          {
            action: 'Select All Occurrences',
            mac: { mods: ['meta', 'ctrl'], code: 'KeyG' },
            win: { mods: ['alt'], code: 'F3' },
            linux: { mods: ['alt'], code: 'F3' },
          },
          {
            action: 'Split Selection into Lines',
            mac: { mods: ['meta', 'shift'], code: 'KeyL' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyL' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyL' },
          },
          {
            action: 'Add Cursor Up',
            mac: { mods: ['ctrl', 'shift'], code: 'ArrowUp' },
            win: { mods: ['ctrl', 'alt'], code: 'ArrowUp' },
            linux: { mods: ['ctrl', 'alt'], code: 'ArrowUp' },
          },
          {
            action: 'Add Cursor Down',
            mac: { mods: ['ctrl', 'shift'], code: 'ArrowDown' },
            win: { mods: ['ctrl', 'alt'], code: 'ArrowDown' },
            linux: { mods: ['ctrl', 'alt'], code: 'ArrowDown' },
          },
        ]
      },
    ]
  },
  {
    id: 'premiere',
    name: 'Adobe Premiere Pro',
    icon: '🎬',
    categories: [
      {
        name: 'Timeline',
        shortcuts: [
          {
            action: 'Zoom In Timeline',
            mac: { mods: [], code: 'Equal' },
            win: { mods: [], code: 'Equal' },
            linux: { mods: [], code: 'Equal' },
          },
          {
            action: 'Zoom Out Timeline',
            mac: { mods: [], code: 'Minus' },
            win: { mods: [], code: 'Minus' },
            linux: { mods: [], code: 'Minus' },
          },
          {
            action: 'Snap to Timeline',
            mac: { mods: [], code: 'KeyS' },
            win: { mods: [], code: 'KeyS' },
            linux: { mods: [], code: 'KeyS' },
          },
          {
            action: 'Add Marker',
            mac: { mods: [], code: 'KeyM' },
            win: { mods: [], code: 'KeyM' },
            linux: { mods: [], code: 'KeyM' },
          },
          {
            action: 'Set In Point',
            mac: { mods: [], code: 'KeyI' },
            win: { mods: [], code: 'KeyI' },
            linux: { mods: [], code: 'KeyI' },
          },
          {
            action: 'Set Out Point',
            mac: { mods: [], code: 'KeyO' },
            win: { mods: [], code: 'KeyO' },
            linux: { mods: [], code: 'KeyO' },
          },
          {
            action: 'Go to In Point',
            mac: { mods: ['shift'], code: 'KeyI' },
            win: { mods: ['shift'], code: 'KeyI' },
            linux: { mods: ['shift'], code: 'KeyI' },
          },
          {
            action: 'Go to Out Point',
            mac: { mods: ['shift'], code: 'KeyO' },
            win: { mods: ['shift'], code: 'KeyO' },
            linux: { mods: ['shift'], code: 'KeyO' },
          },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          {
            action: 'Razor Tool',
            mac: { mods: [], code: 'KeyC' },
            win: { mods: [], code: 'KeyC' },
            linux: { mods: [], code: 'KeyC' },
          },
          {
            action: 'Selection Tool',
            mac: { mods: [], code: 'KeyV' },
            win: { mods: [], code: 'KeyV' },
            linux: { mods: [], code: 'KeyV' },
          },
          {
            action: 'Ripple Delete',
            mac: { mods: ['shift'], code: 'Delete' },
            win: { mods: ['shift'], code: 'Delete' },
            linux: { mods: ['shift'], code: 'Delete' },
          },
          {
            action: 'Undo',
            mac: { mods: ['meta'], code: 'KeyZ' },
            win: { mods: ['ctrl'], code: 'KeyZ' },
            linux: { mods: ['ctrl'], code: 'KeyZ' },
          },
          {
            action: 'Redo',
            mac: { mods: ['meta', 'shift'], code: 'KeyZ' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyZ' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyZ' },
          },
          {
            action: 'Cut',
            mac: { mods: ['meta'], code: 'KeyX' },
            win: { mods: ['ctrl'], code: 'KeyX' },
            linux: { mods: ['ctrl'], code: 'KeyX' },
          },
          {
            action: 'Copy',
            mac: { mods: ['meta'], code: 'KeyC' },
            win: { mods: ['ctrl'], code: 'KeyC' },
            linux: { mods: ['ctrl'], code: 'KeyC' },
          },
          {
            action: 'Paste',
            mac: { mods: ['meta'], code: 'KeyV' },
            win: { mods: ['ctrl'], code: 'KeyV' },
            linux: { mods: ['ctrl'], code: 'KeyV' },
          },
        ]
      },
      {
        name: 'Playback',
        shortcuts: [
          {
            action: 'Play / Pause',
            mac: { mods: [], code: 'Space' },
            win: { mods: [], code: 'Space' },
            linux: { mods: [], code: 'Space' },
          },
          {
            action: 'Step Forward',
            mac: { mods: [], code: 'ArrowRight' },
            win: { mods: [], code: 'ArrowRight' },
            linux: { mods: [], code: 'ArrowRight' },
          },
          {
            action: 'Step Backward',
            mac: { mods: [], code: 'ArrowLeft' },
            win: { mods: [], code: 'ArrowLeft' },
            linux: { mods: [], code: 'ArrowLeft' },
          },
          {
            action: 'Shuttle Right',
            mac: { mods: [], code: 'KeyL' },
            win: { mods: [], code: 'KeyL' },
            linux: { mods: [], code: 'KeyL' },
          },
          {
            action: 'Shuttle Left',
            mac: { mods: [], code: 'KeyJ' },
            win: { mods: [], code: 'KeyJ' },
            linux: { mods: [], code: 'KeyJ' },
          },
          {
            action: 'Stop',
            mac: { mods: [], code: 'KeyK' },
            win: { mods: [], code: 'KeyK' },
            linux: { mods: [], code: 'KeyK' },
          },
          {
            action: 'Go to Beginning',
            mac: { mods: [], code: 'Home' },
            win: { mods: [], code: 'Home' },
            linux: { mods: [], code: 'Home' },
          },
          {
            action: 'Go to End',
            mac: { mods: [], code: 'End' },
            win: { mods: [], code: 'End' },
            linux: { mods: [], code: 'End' },
          },
        ]
      },
    ]
  },
  {
    id: 'blender',
    name: 'Blender',
    icon: '🎲',
    categories: [
      {
        name: 'General',
        shortcuts: [
          {
            action: 'Undo',
            mac: { mods: ['meta'], code: 'KeyZ' },
            win: { mods: ['ctrl'], code: 'KeyZ' },
            linux: { mods: ['ctrl'], code: 'KeyZ' },
          },
          {
            action: 'Redo',
            mac: { mods: ['meta', 'shift'], code: 'KeyZ' },
            win: { mods: ['ctrl', 'shift'], code: 'KeyZ' },
            linux: { mods: ['ctrl', 'shift'], code: 'KeyZ' },
          },
          {
            action: 'Save',
            mac: { mods: ['meta'], code: 'KeyS' },
            win: { mods: ['ctrl'], code: 'KeyS' },
            linux: { mods: ['ctrl'], code: 'KeyS' },
          },
          {
            action: 'Open',
            mac: { mods: ['meta'], code: 'KeyO' },
            win: { mods: ['ctrl'], code: 'KeyO' },
            linux: { mods: ['ctrl'], code: 'KeyO' },
          },
          {
            action: 'Search Menu',
            mac: { mods: [], code: 'F3' },
            win: { mods: [], code: 'F3' },
            linux: { mods: [], code: 'F3' },
          },
          {
            action: 'Render Image',
            mac: { mods: [], code: 'F12' },
            win: { mods: [], code: 'F12' },
            linux: { mods: [], code: 'F12' },
          },
          {
            action: 'Render Animation',
            mac: { mods: ['meta'], code: 'F12' },
            win: { mods: ['ctrl'], code: 'F12' },
            linux: { mods: ['ctrl'], code: 'F12' },
          },
        ]
      },
      {
        name: '3D View',
        shortcuts: [
          {
            action: 'Toggle Wireframe',
            mac: { mods: ['shift'], code: 'KeyZ' },
            win: { mods: ['shift'], code: 'KeyZ' },
            linux: { mods: ['shift'], code: 'KeyZ' },
          },
          {
            action: 'Numpad Front View',
            mac: { mods: [], code: 'Numpad1' },
            win: { mods: [], code: 'Numpad1' },
            linux: { mods: [], code: 'Numpad1' },
          },
          {
            action: 'Numpad Side View',
            mac: { mods: [], code: 'Numpad3' },
            win: { mods: [], code: 'Numpad3' },
            linux: { mods: [], code: 'Numpad3' },
          },
          {
            action: 'Numpad Top View',
            mac: { mods: [], code: 'Numpad7' },
            win: { mods: [], code: 'Numpad7' },
            linux: { mods: [], code: 'Numpad7' },
          },
          {
            action: 'Toggle Perspective',
            mac: { mods: [], code: 'Numpad5' },
            win: { mods: [], code: 'Numpad5' },
            linux: { mods: [], code: 'Numpad5' },
          },
          {
            action: 'Focus Selected',
            mac: { mods: [], code: 'NumpadDecimal' },
            win: { mods: [], code: 'NumpadDecimal' },
            linux: { mods: [], code: 'NumpadDecimal' },
          },
          {
            action: 'Toggle Local View',
            mac: { mods: [], code: 'Slash' },
            win: { mods: [], code: 'Slash' },
            linux: { mods: [], code: 'Slash' },
          },
          {
            action: 'Camera View',
            mac: { mods: [], code: 'Numpad0' },
            win: { mods: [], code: 'Numpad0' },
            linux: { mods: [], code: 'Numpad0' },
          },
        ]
      },
      {
        name: 'Editing',
        shortcuts: [
          {
            action: 'Grab / Move',
            mac: { mods: [], code: 'KeyG' },
            win: { mods: [], code: 'KeyG' },
            linux: { mods: [], code: 'KeyG' },
          },
          {
            action: 'Rotate',
            mac: { mods: [], code: 'KeyR' },
            win: { mods: [], code: 'KeyR' },
            linux: { mods: [], code: 'KeyR' },
          },
          {
            action: 'Scale',
            mac: { mods: [], code: 'KeyS' },
            win: { mods: [], code: 'KeyS' },
            linux: { mods: [], code: 'KeyS' },
          },
          {
            action: 'Extrude',
            mac: { mods: [], code: 'KeyE' },
            win: { mods: [], code: 'KeyE' },
            linux: { mods: [], code: 'KeyE' },
          },
          {
            action: 'Toggle Edit Mode',
            mac: { mods: [], code: 'Tab' },
            win: { mods: [], code: 'Tab' },
            linux: { mods: [], code: 'Tab' },
          },
          {
            action: 'Select All / Deselect',
            mac: { mods: [], code: 'KeyA' },
            win: { mods: [], code: 'KeyA' },
            linux: { mods: [], code: 'KeyA' },
          },
          {
            action: 'Delete',
            mac: { mods: [], code: 'KeyX' },
            win: { mods: [], code: 'KeyX' },
            linux: { mods: [], code: 'KeyX' },
          },
          {
            action: 'Duplicate',
            mac: { mods: ['shift'], code: 'KeyD' },
            win: { mods: ['shift'], code: 'KeyD' },
            linux: { mods: ['shift'], code: 'KeyD' },
          },
          {
            action: 'Hide Selected',
            mac: { mods: [], code: 'KeyH' },
            win: { mods: [], code: 'KeyH' },
            linux: { mods: [], code: 'KeyH' },
          },
          {
            action: 'Unhide All',
            mac: { mods: ['alt'], code: 'KeyH' },
            win: { mods: ['alt'], code: 'KeyH' },
            linux: { mods: ['alt'], code: 'KeyH' },
          },
        ]
      },
    ]
  },
  {
    id: 'system',
    name: 'System',
    icon: '⚙️',
    categories: [
      {
        name: 'Window Management',
        shortcuts: [
          {
            action: 'Switch Application',
            mac: { mods: ['meta'], code: 'Tab' },
            win: { mods: ['alt'], code: 'Tab' },
            linux: { mods: ['alt'], code: 'Tab' },
          },
          {
            action: 'Close Window',
            mac: { mods: ['meta'], code: 'KeyW' },
            win: { mods: ['alt'], code: 'F4' },
            linux: { mods: ['alt'], code: 'F4' },
          },
          {
            action: 'Minimize Window',
            mac: { mods: ['meta'], code: 'KeyM' },
            win: { mods: ['meta'], code: 'ArrowDown' },
            linux: { mods: ['meta'], code: 'KeyH' },
          },
          {
            action: 'Maximize Window',
            mac: { mods: ['meta', 'ctrl'], code: 'KeyF' },
            win: { mods: ['meta'], code: 'ArrowUp' },
            linux: { mods: ['meta'], code: 'ArrowUp' },
          },
          {
            action: 'Snap Left',
            mac: { mods: ['meta', 'ctrl'], code: 'ArrowLeft' },
            win: { mods: ['meta'], code: 'ArrowLeft' },
            linux: { mods: ['meta'], code: 'ArrowLeft' },
          },
          {
            action: 'Snap Right',
            mac: { mods: ['meta', 'ctrl'], code: 'ArrowRight' },
            win: { mods: ['meta'], code: 'ArrowRight' },
            linux: { mods: ['meta'], code: 'ArrowRight' },
          },
          {
            action: 'Mission Control / Task View',
            mac: { mods: ['ctrl'], code: 'ArrowUp' },
            win: { mods: ['meta'], code: 'Tab' },
            linux: { mods: ['meta'], code: 'Tab' },
          },
          {
            action: 'Show Desktop',
            mac: { mods: [], code: 'F11' },
            win: { mods: ['meta'], code: 'KeyD' },
            linux: { mods: ['meta'], code: 'KeyD' },
          },
        ]
      },
      {
        name: 'System',
        shortcuts: [
          {
            action: 'Screenshot (Full)',
            mac: { mods: ['meta', 'shift'], code: 'Digit3' },
            win: { mods: ['meta', 'shift'], code: 'KeyS' },
            linux: { mods: [], code: 'PrintScreen' },
          },
          {
            action: 'Screenshot (Region)',
            mac: { mods: ['meta', 'shift'], code: 'Digit4' },
            win: { mods: ['meta', 'shift'], code: 'KeyS' },
            linux: { mods: ['shift'], code: 'PrintScreen' },
          },
          {
            action: 'Lock Screen',
            mac: { mods: ['meta', 'ctrl'], code: 'KeyQ' },
            win: { mods: ['meta'], code: 'KeyL' },
            linux: { mods: ['meta'], code: 'KeyL' },
          },
          {
            action: 'Task Manager / Force Quit',
            mac: { mods: ['meta', 'alt'], code: 'Escape' },
            win: { mods: ['ctrl', 'shift'], code: 'Escape' },
            linux: { mods: ['ctrl', 'shift'], code: 'Escape' },
          },
          {
            action: 'Spotlight / Search',
            mac: { mods: ['meta'], code: 'Space' },
            win: { mods: ['meta'], code: 'KeyS' },
            linux: { mods: ['meta'], code: 'KeyS' },
          },
          {
            action: 'Emoji Picker',
            mac: { mods: ['meta', 'ctrl'], code: 'Space' },
            win: { mods: ['meta'], code: 'Period' },
            linux: { mods: ['meta'], code: 'Period' },
          },
          {
            action: 'Settings',
            mac: { mods: ['meta'], code: 'Comma' },
            win: { mods: ['meta'], code: 'KeyI' },
            linux: { mods: ['meta'], code: 'KeyI' },
          },
          {
            action: 'File Manager',
            mac: { mods: ['meta', 'shift'], code: 'KeyF' },
            win: { mods: ['meta'], code: 'KeyE' },
            linux: { mods: ['meta'], code: 'KeyE' },
          },
        ]
      },
    ]
  },
];

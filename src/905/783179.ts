import { KeyCodes, ModifierKeyCodes } from '../905/63728'
import { throwTypeError } from '../figma_app/465776'
import { BrowserInfo } from '../figma_app/778880'

/**
 * Maps a modifier key code to its corresponding display symbol or string.
 * @param keyCode - The modifier key code to map.
 * @returns The display symbol or string for the modifier key.
 * @throws {TypeError} If the key code is not recognized.
 */
function mapModifierKey(keyCode: ModifierKeyCodes): string {
  switch (keyCode) {
    case ModifierKeyCodes.CONTROL:
      return BrowserInfo.mac ? '\u2303' : 'Ctrl'
    case ModifierKeyCodes.ALT:
      return BrowserInfo.mac ? '\u2325' : 'Alt'
    case ModifierKeyCodes.SHIFT:
      return '\u21E7'
    case ModifierKeyCodes.META:
      return BrowserInfo.mac ? '\u2318' : 'Ctrl'
    default:
      throwTypeError(keyCode)
  }
}

/**
 * Maps a key code to its corresponding display symbol or string.
 * @param keyCode - The key code to map.
 * @returns The display symbol or string for the key.
 * @throws {TypeError} If the key code is not recognized.
 */
function mapKeyCode(keyCode: KeyCodes): string {
  switch (keyCode) {
    case KeyCodes.BACKSPACE:
      return '\u232B'
    case KeyCodes.TAB:
      return 'Tab'
    case KeyCodes.ENTER:
      return '\u23CE'
    case KeyCodes.ESCAPE:
      return 'Esc'
    case KeyCodes.SPACE:
      return 'Space'
    case KeyCodes.LEFT_ARROW:
      return '\u2190'
    case KeyCodes.UP_ARROW:
      return '\u2191'
    case KeyCodes.RIGHT_ARROW:
      return '\u2192'
    case KeyCodes.DOWN_ARROW:
      return '\u2193'
    case KeyCodes.DELETE:
      return 'Delete'
    case KeyCodes.PERIOD:
      return '.'
    case KeyCodes.KEY_0:
    case KeyCodes.NUMPAD_0:
      return '0'
    case KeyCodes.KEY_1:
    case KeyCodes.NUMPAD_1:
      return '1'
    case KeyCodes.KEY_2:
    case KeyCodes.NUMPAD_2:
      return '2'
    case KeyCodes.KEY_3:
    case KeyCodes.NUMPAD_3:
      return '3'
    case KeyCodes.KEY_4:
    case KeyCodes.NUMPAD_4:
      return '4'
    case KeyCodes.KEY_5:
    case KeyCodes.NUMPAD_5:
      return '5'
    case KeyCodes.KEY_6:
    case KeyCodes.NUMPAD_6:
      return '6'
    case KeyCodes.KEY_7:
    case KeyCodes.NUMPAD_7:
      return '7'
    case KeyCodes.KEY_8:
    case KeyCodes.NUMPAD_8:
      return '8'
    case KeyCodes.KEY_9:
    case KeyCodes.NUMPAD_9:
      return '9'
    case KeyCodes.A:
      return 'A'
    case KeyCodes.B:
      return 'B'
    case KeyCodes.C:
      return 'C'
    case KeyCodes.D:
      return 'D'
    case KeyCodes.E:
      return 'E'
    case KeyCodes.F:
      return 'F'
    case KeyCodes.G:
      return 'G'
    case KeyCodes.H:
      return 'H'
    case KeyCodes.I:
      return 'I'
    case KeyCodes.J:
      return 'J'
    case KeyCodes.K:
      return 'K'
    case KeyCodes.L:
      return 'L'
    case KeyCodes.M:
      return 'M'
    case KeyCodes.N:
      return 'N'
    case KeyCodes.O:
      return 'O'
    case KeyCodes.P:
      return 'P'
    case KeyCodes.Q:
      return 'Q'
    case KeyCodes.R:
      return 'R'
    case KeyCodes.S:
      return 'S'
    case KeyCodes.T:
      return 'T'
    case KeyCodes.U:
      return 'U'
    case KeyCodes.V:
      return 'V'
    case KeyCodes.W:
      return 'W'
    case KeyCodes.X:
      return 'X'
    case KeyCodes.Y:
      return 'Y'
    case KeyCodes.Z:
      return 'Z'
    default:
      throwTypeError(keyCode)
  }
}

/**
 * Formats a keyboard shortcut into a human-readable string.
 * @param shortcut - An object containing modifier keys and a main key.
 * @returns A formatted string representing the keyboard shortcut.
 */
export function formatKeyboardShortcut(shortcut: { modifier?: ModifierKeyCodes[], key: KeyCodes }): string {
  const { modifier, key } = shortcut
  const modifierStr = modifier?.map(mapModifierKey).join('+') ?? ''
  const keyStr = mapKeyCode(key)
  return `${modifierStr}${keyStr}`
}

/**
 * Formats multiple keyboard shortcuts into a human-readable string.
 * @param shortcuts - An array of keyboard shortcut objects.
 * @returns A formatted string representing all keyboard shortcuts joined by ' or '.
 */
export function formatKeyboardShortcuts(shortcuts: Array<{ modifier?: ModifierKeyCodes[], key: KeyCodes }>): string {
  return shortcuts.map(formatKeyboardShortcut).join(' or ')
}

export const OZ = formatKeyboardShortcut
export const f7 = formatKeyboardShortcuts

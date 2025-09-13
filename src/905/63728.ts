import { BrowserInfo } from '../figma_app/778880'

/**
 * ModifierKeyCodes - Enum for modifier key codes.
 */
export enum ModifierKeyCodes {
  ALT = 256,
  META = 512,
  SHIFT = 1024,
  CONTROL = 2048,
}

/**
 * KeyCodes - Enum for various key codes.
 */
export enum KeyCodes {
  BACKSPACE = 8,
  TAB = 9,
  ENTER = 13,
  SHIFT = 16,
  CTRL = 17,
  ALT = 18,
  PAUSE = 19,
  CAPS_LOCK = 20,
  ESCAPE = 27,
  SPACE = 32,
  PAGE_UP = 33,
  PAGE_DOWN = 34,
  END = 35,
  HOME = 36,
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  RIGHT_ARROW = 39,
  DOWN_ARROW = 40,
  INSERT = 45,
  DELETE = 46,
  KEY_0 = 48,
  KEY_1 = 49,
  KEY_2 = 50,
  KEY_3 = 51,
  KEY_4 = 52,
  KEY_5 = 53,
  KEY_6 = 54,
  KEY_7 = 55,
  KEY_8 = 56,
  KEY_9 = 57,
  A = 65,
  B = 66,
  C = 67,
  D = 68,
  E = 69,
  F = 70,
  G = 71,
  H = 72,
  I = 73,
  J = 74,
  K = 75,
  L = 76,
  M = 77,
  N = 78,
  O = 79,
  P = 80,
  Q = 81,
  R = 82,
  S = 83,
  T = 84,
  U = 85,
  V = 86,
  W = 87,
  X = 88,
  Y = 89,
  Z = 90,
  SELECT = 93,
  NUMPAD_0 = 96,
  NUMPAD_1 = 97,
  NUMPAD_2 = 98,
  NUMPAD_3 = 99,
  NUMPAD_4 = 100,
  NUMPAD_5 = 101,
  NUMPAD_6 = 102,
  NUMPAD_7 = 103,
  NUMPAD_8 = 104,
  NUMPAD_9 = 105,
  NUMPAD_DELETE = 1000,
  MULTIPLY = 106,
  ADD = 107,
  SUBTRACT = 109,
  DECIMAL = 110,
  DIVIDE = 111,
  SEMICOLON = 186,
  EQUALS = 187,
  COMMA = 188,
  DASH = 189,
  PERIOD = 190,
  FORWARD_SLASH = 191,
  GRAVE_ACCENT = 192,
  BACK_SLASH = 220,
  BRACKET_LEFT = 219,
  BRACKET_RIGHT = 221,
  F1 = 112,
  F2 = 113,
  F3 = 114,
  F4 = 115,
  F5 = 116,
  F6 = 117,
  F7 = 118,
  F8 = 119,
  F9 = 120,
  F10 = 121,
  F11 = 122,
  F12 = 123,
}

/**
 * Checks if the key code is an arrow key.
 * @param keyCode - The key code to check.
 * @returns True if arrow key, false otherwise.
 * (Original: $$o9)
 */
export function isArrowKey(keyCode: number): boolean {
  return keyCode >= KeyCodes.LEFT_ARROW && keyCode <= KeyCodes.DOWN_ARROW
}

/**
 * Checks if the key code is a navigation key (Page Up, Page Down, End, Home).
 * @param keyCode - The key code to check.
 * @returns True if navigation key, false otherwise.
 * (Original: $$l4)
 */
export function isNavigationKey(keyCode: number): boolean {
  return keyCode >= KeyCodes.PAGE_UP && keyCode <= KeyCodes.HOME
}

/**
 * Checks if the event is a command event (Cmd on Mac, Ctrl otherwise).
 * @param e - The keyboard event.
 * @returns True if command event, false otherwise.
 * (Original: $$d0)
 */
export function isCommandEvent(e: KeyboardEvent): boolean {
  return BrowserInfo.mac ? e.metaKey : e.ctrlKey
}

/**
 * Checks if the event matches the command modifier.
 * @param e - The keyboard event.
 * @returns True if matches command modifier, false otherwise.
 * (Original: $$c2)
 */
export function isCommandModifier(e: KeyboardEvent): boolean {
  return isExactModifier(e, BrowserInfo.mac ? ModifierKeyCodes.META : ModifierKeyCodes.CONTROL)
}

/**
 * Returns the modifier bitmask for the event.
 * @param e - The keyboard event.
 * @returns Modifier bitmask.
 * (Original: $$u7)
 */
export function getModifierBitmask(e: KeyboardEvent): number {
  return (e.altKey ? ModifierKeyCodes.ALT : 0)
    | (e.metaKey ? ModifierKeyCodes.META : 0)
    | (e.shiftKey ? ModifierKeyCodes.SHIFT : 0)
    | (e.ctrlKey ? ModifierKeyCodes.CONTROL : 0)
}

/**
 * Checks if the event's modifier bitmask matches the given mask.
 * @param e - The keyboard event.
 * @param mask - The modifier mask to check.
 * @returns True if matches, false otherwise.
 * (Original: $$p6)
 */
export function isModifierMatch(e: KeyboardEvent, mask: number): boolean {
  const bitmask = getModifierBitmask(e)
  return bitmask === 0 || (bitmask & ~mask) === 0
}

/**
 * Checks if the event's modifier bitmask exactly matches the given mask.
 * @param e - The keyboard event.
 * @param mask - The modifier mask to check.
 * @returns True if exact match, false otherwise.
 * (Original: $$m8)
 */
export function isExactModifier(e: KeyboardEvent, mask: number): boolean {
  return getModifierBitmask(e) === mask
}

/**
 * Checks if the event is a command or shift event.
 * @param e - The keyboard event.
 * @returns True if command or shift event, false otherwise.
 * (Original: $$h5)
 */
export function isCommandOrShift(e: KeyboardEvent): boolean {
  return !!e && (
    (e.metaKey && BrowserInfo.mac)
    || (e.ctrlKey && !BrowserInfo.mac)
    || e.shiftKey
  )
}

/**
 * Higher-order function that calls handler only if not command/shift event.
 * @param handler - The event handler.
 * @returns Wrapped event handler.
 * (Original: $$g1)
 */
export function ignoreCommandOrShift(handler: (e: KeyboardEvent) => void): (e: KeyboardEvent) => void {
  return (e: KeyboardEvent) => {
    if (!isCommandOrShift(e)) {
      handler(e)
    }
  }
}

// Export refactored names for imports
export const Fo = isCommandEvent
export const Gc = ignoreCommandOrShift
export const Te = isCommandModifier
export const Uz = KeyCodes
export const b5 = isNavigationKey
export const oJ = isCommandOrShift
export const sC = isModifierMatch
export const sN = getModifierBitmask
export const vN = isExactModifier
export const wQ = isArrowKey
export const xH = ModifierKeyCodes

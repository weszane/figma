import { browserCapabilities } from "../905/409121"
import { GAMEPAD_BUTTON_AXIS_OFFSET } from "../905/550169"

/**
 * Formats a keyboard event into a human-readable string representation
 * @param event - The keyboard event to format
 * @returns A string representation of the keyboard shortcut
 */
export function formatKeyboardShortcut(event: KeyboardEvent): string {
  const parts: string[] = []
  const isApplePlatform = browserCapabilities.isApple()

  // Handle modifier keys
  if (isApplePlatform && event.metaKey) {
    parts.push("\u2318") // ⌘
  }
  if (!isApplePlatform && event.metaKey) {
    parts.push(event.ctrlKey ? "\u2318" : "Ctrl")
  }
  if (event.ctrlKey) {
    parts.push(isApplePlatform ? "\u2303" : "Ctrl") // ⌃
  }
  if (event.shiftKey) {
    parts.push(isApplePlatform ? "\u21E7" : "Shift") // ⇧
  }
  if (event.altKey) {
    parts.push(isApplePlatform ? "\u2325" : "Alt") // ⌥
  }

  // Handle main key
  const keyLabel = KEY_CODE_MAP[event.keyCode] || String.fromCharCode(event.keyCode)
  parts.push(keyLabel)

  return parts.join(isApplePlatform ? "" : "+")
}

/**
 * Parses an array of key codes into a keyboard event-like object
 * @param keyCodes - Array of key codes to parse
 * @returns An object representing the keyboard state, or null if invalid
 */
export function parseKeyCodes(keyCodes: number[]): KeyboardEventState | null {
  if (!keyCodes || keyCodes.length === 0) {
    return null
  }

  const state: KeyboardEventState = {
    metaKey: false,
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    keyCode: 0,
  }

  for (const code of keyCodes) {
    switch (code) {
      case 16:
        state.shiftKey = true
        break
      case 17:
        state.ctrlKey = true
        break
      case 18:
        state.altKey = true
        break
      case 91:
      case 92:
      case 93:
      case 224:
        state.metaKey = true
        break
      default:
        state.keyCode = code
    }
  }

  return state.keyCode ? state : null
}

/**
 * Converts a keyboard event to an array of key codes
 * @param event - The keyboard event to convert
 * @returns An array of key codes representing the event
 */
export function keyboardEventToKeyCodes(event: KeyboardEventState): number[] {
  return [
    event.keyCode,
    event.shiftKey ? 16 : 0,
    event.ctrlKey ? 17 : 0,
    event.altKey ? 18 : 0,
    event.metaKey ? 91 : 0,
  ].filter(Boolean)
}

/**
 * Gets the label for a gamepad button or axis
 * @param input - The input configuration
 * @param includeGamepadSuffix - Whether to include "(Gamepad)" suffix for short labels
 * @returns The label for the gamepad input, or null if not applicable
 */
export function getGamepadInputLabel(
  input: GamepadInput | null,
  includeGamepadSuffix: boolean = false,
): string | null {
  if (!input || input?.triggerDevice === "KEYBOARD") {
    return null
  }

  const deviceMap = GAMEPAD_BUTTON_MAP.get(input?.triggerDevice as GamepadType)
  const keyCode = input?.keyCodes?.[0] ?? 0

  let label = deviceMap?.get(keyCode) ?? getGenericGamepadLabel(keyCode)

  // Add gamepad suffix for short labels
  if (label.length <= 1 && !includeGamepadSuffix) {
    label += " (Gamepad)"
  }

  return label
}

/**
 * Generates a generic label for gamepad buttons or axes
 * @param keyCode - The key code to generate a label for
 * @returns A generic label for the gamepad input
 */
function getGenericGamepadLabel(keyCode: number): string {
  if (keyCode >= GAMEPAD_BUTTON_AXIS_OFFSET) {
    const axisIndex = Math.floor((keyCode - GAMEPAD_BUTTON_AXIS_OFFSET) / 2)
    return `Axis ${axisIndex} ${keyCode % 2 === 0 ? "-" : "+"}`
  }
  return `Button ${keyCode}`
}

// Set of modifier key codes
const MODIFIER_KEY_CODES = new Set([16, 17, 18, 91, 92, 93, 224])

// Map of key codes to human-readable names
const KEY_CODE_MAP: Record<number, string> = {
  3: "Break",
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Ctrl",
  18: "Alt",
  19: "Pause",
  20: "Caps Lock",
  27: "Esc",
  32: "Space",
  33: "Page Up",
  34: "Page Down",
  35: "End",
  36: "Home",
  37: "\u2190", // ←
  38: "\u2191", // ↑
  39: "\u2192", // →
  40: "\u2193", // ↓
  41: "Select",
  42: "Print",
  43: "Execute",
  44: "Print Screen",
  45: "Ins",
  46: "Del",
  47: "Help",
  48: "0",
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",
  58: ":",
  59: "=",
  60: "<",
  61: "=",
  63: "\xDF",
  64: "@",
  65: "A",
  66: "B",
  67: "C",
  68: "D",
  69: "E",
  70: "F",
  71: "G",
  72: "H",
  73: "I",
  74: "J",
  75: "K",
  76: "L",
  77: "M",
  78: "N",
  79: "O",
  80: "P",
  81: "Q",
  82: "R",
  83: "S",
  84: "T",
  85: "U",
  86: "V",
  87: "W",
  88: "X",
  89: "Y",
  90: "Z",
  95: "Sleep",
  96: "Numpad 0",
  97: "Numpad 1",
  98: "Numpad 2",
  99: "Numpad 3",
  100: "Numpad 4",
  101: "Numpad 5",
  102: "Numpad 6",
  103: "Numpad 7",
  104: "Numpad 8",
  105: "Numpad 9",
  106: "*",
  107: "+",
  108: ".",
  109: "-",
  110: ".",
  111: "/",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  124: "F13",
  125: "F14",
  126: "F15",
  127: "F16",
  128: "F17",
  129: "F18",
  130: "F19",
  131: "F20",
  132: "F21",
  133: "F22",
  134: "F23",
  135: "F24",
  144: "Num Lock",
  145: "Scroll Lock",
  151: "Airplane Mode",
  160: "^",
  161: "!",
  163: "#",
  164: "$",
  166: "Page Backward",
  167: "Page Forward",
  168: "Refresh",
  170: "*",
  172: "Home",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  193: "?",
  194: ".",
  219: "[",
  220: "\\",
  221: "]",
  222: "'",
  223: "`",
}

// Map of gamepad button mappings for different platforms
const GAMEPAD_BUTTON_MAP = new Map<GamepadType, Map<number, string>>([
  ["SWITCH_PRO", new Map([
    [0, "B"],
    [1, "A"],
    [2, "Y"],
    [3, "X"],
    [4, "L"],
    [5, "R"],
    [6, "ZL"],
    [7, "ZR"],
    [8, "-"],
    [9, "+"],
    [10, "LStick Press"],
    [11, "RStick Press"],
    [12, "DPad Up"],
    [13, "DPad Down"],
    [14, "DPad Left"],
    [15, "DPad Right"],
    [16, "Home"],
    [17, "Capture"],
    [1000, "LStick Left"],
    [1001, "LStick Right"],
    [1002, "LStick Up"],
    [1003, "LStick Down"],
    [1004, "RStick Left"],
    [1005, "RStick Right"],
    [1006, "RStick Up"],
    [1007, "RStick Down"],
  ])],
  ["PS4", new Map([
    [0, "X"],
    [1, "\u25CB"],
    [2, "\u25A1"],
    [3, "\u25B3"],
    [4, "L1"],
    [5, "R1"],
    [6, "L2"],
    [7, "R2"],
    [8, "Share"],
    [9, "Options"],
    [10, "LStick Press"],
    [11, "RStick Press"],
    [12, "DPad Up"],
    [13, "DPad Down"],
    [14, "DPad Left"],
    [15, "DPad Right"],
    [16, "Home"],
    [17, "Touch Pad"],
    [1000, "LStick Left"],
    [1001, "LStick Right"],
    [1002, "LStick Up"],
    [1003, "LStick Down"],
    [1004, "RStick Left"],
    [1005, "RStick Right"],
    [1006, "RStick Up"],
    [1007, "RStick Down"],
  ])],
  ["XBOX_ONE", new Map([
    [0, "A"],
    [1, "B"],
    [2, "X"],
    [3, "Y"],
    [4, "LB"],
    [5, "RB"],
    [6, "LT"],
    [7, "RT"],
    [8, "View"],
    [9, "Menu"],
    [10, "LStick Press"],
    [11, "RStick Press"],
    [12, "DPad Up"],
    [13, "DPad Down"],
    [14, "DPad Left"],
    [15, "DPad Right"],
    [16, "Xbox Button"],
    [1000, "LStick Left"],
    [1001, "LStick Right"],
    [1002, "LStick Up"],
    [1003, "LStick Down"],
    [1004, "RStick Left"],
    [1005, "RStick Right"],
    [1006, "RStick Up"],
    [1007, "RStick Down"],
  ])],
])

// Type definitions
export type GamepadType = "SWITCH_PRO" | "PS4" | "XBOX_ONE"

export interface KeyboardEventState {
  metaKey: boolean
  ctrlKey: boolean
  shiftKey: boolean
  altKey: boolean
  keyCode: number
}

interface GamepadInput {
  triggerDevice: string | null
  keyCodes?: number[]
}

// Export aliases for backward compatibility
export const E8 = getGamepadInputLabel
export const RI = MODIFIER_KEY_CODES
export const U8 = formatKeyboardShortcut
export const _i = parseKeyCodes
export const pu = KEY_CODE_MAP
export const wb = keyboardEventToKeyCodes



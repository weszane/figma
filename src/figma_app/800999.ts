import { GAMEPAD_BUTTON_AXIS_OFFSET } from "../905/550169";
import { browserCapabilities } from "../905/409121";
export function $$a2(e) {
  let t = [];
  let r = browserCapabilities.isApple();
  r && e.metaKey && t.push("\u2318");
  !r && e.metaKey && t.push(e.ctrlKey ? "\u2318" : "Ctrl");
  e.ctrlKey && t.push(r ? "\u2303" : "Ctrl");
  e.shiftKey && t.push(r ? "\u21E7" : "Shift");
  e.altKey && t.push(r ? "\u2325" : "Alt");
  t.push($$c4[e.keyCode] || String.fromCharCode(e.keyCode));
  return t.join(r ? "" : "+");
}
export function $$s3(e) {
  if (!e) return null;
  let t = {
    metaKey: !1,
    ctrlKey: !1,
    shiftKey: !1,
    altKey: !1,
    keyCode: 0
  };
  for (let r of e) switch (r) {
    case 16:
      t.shiftKey = !0;
      break;
    case 17:
      t.ctrlKey = !0;
      break;
    case 18:
      t.altKey = !0;
      break;
    case 91:
    case 92:
    case 93:
    case 224:
      t.metaKey = !0;
      break;
    default:
      t.keyCode = r;
  }
  return t.keyCode ? t : null;
}
export function $$o5(e) {
  return [e.keyCode, e.shiftKey ? 16 : 0, e.ctrlKey ? 17 : 0, e.altKey ? 18 : 0, e.metaKey ? 91 : 0].filter(Boolean);
}
export function $$l0(e, t = !1) {
  if (!e || e?.triggerDevice === "KEYBOARD") return null;
  let r = u.get(e?.triggerDevice);
  let i = e?.keyCodes?.[0] ?? 0;
  let a = r?.get(i) ?? function (e) {
    if (e >= GAMEPAD_BUTTON_AXIS_OFFSET) {
      let t = Math.floor((e - GAMEPAD_BUTTON_AXIS_OFFSET) / 2);
      return `Axis ${t} ${e % 2 == 0 ? "-" : "+"}`;
    }
    return `Button ${e}`;
  }(i);
  a.length <= 1 && !t && (a += " (Gamepad)");
  return a;
}
let $$d1 = new Set([16, 17, 18, 91, 92, 93, 224]);
let $$c4 = {
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
  37: "\u2190",
  38: "\u2191",
  39: "\u2192",
  40: "\u2193",
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
  63: "\xdf",
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
  223: "`"
};
let u = new Map([["SWITCH_PRO", new Map([[0, "B"], [1, "A"], [2, "Y"], [3, "X"], [4, "L"], [5, "R"], [6, "ZL"], [7, "ZR"], [8, "-"], [9, "+"], [10, "LStick Press"], [11, "RStick Press"], [12, "DPad Up"], [13, "DPad Down"], [14, "DPad Left"], [15, "DPad Right"], [16, "Home"], [17, "Capture"], [1e3, "LStick Left"], [1001, "LStick Right"], [1002, "LStick Up"], [1003, "LStick Down"], [1004, "RStick Left"], [1005, "RStick Right"], [1006, "RStick Up"], [1007, "RStick Down"]])], ["PS4", new Map([[0, "X"], [1, "\u25CB"], [2, "\u25A1"], [3, "\u25B3"], [4, "L1"], [5, "R1"], [6, "L2"], [7, "R2"], [8, "Share"], [9, "Options"], [10, "LStick Press"], [11, "RStick Press"], [12, "DPad Up"], [13, "DPad Down"], [14, "DPad Left"], [15, "DPad Right"], [16, "Home"], [17, "Touch Pad"], [1e3, "LStick Left"], [1001, "LStick Right"], [1002, "LStick Up"], [1003, "LStick Down"], [1004, "RStick Left"], [1005, "RStick Right"], [1006, "RStick Up"], [1007, "RStick Down"]])], ["XBOX_ONE", new Map([[0, "A"], [1, "B"], [2, "X"], [3, "Y"], [4, "LB"], [5, "RB"], [6, "LT"], [7, "RT"], [8, "View"], [9, "Menu"], [10, "LStick Press"], [11, "RStick Press"], [12, "DPad Up"], [13, "DPad Down"], [14, "DPad Left"], [15, "DPad Right"], [16, "Xbox Button"], [1e3, "LStick Left"], [1001, "LStick Right"], [1002, "LStick Up"], [1003, "LStick Down"], [1004, "RStick Left"], [1005, "RStick Right"], [1006, "RStick Up"], [1007, "RStick Down"]])]]);
export const E8 = $$l0;
export const RI = $$d1;
export const U8 = $$a2;
export const _i = $$s3;
export const pu = $$c4;
export const wb = $$o5;
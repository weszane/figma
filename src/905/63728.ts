import { IL, No, pP, xC } from '../905/392533';
import { BrowserInfo } from '../figma_app/778880';
var $$a10 = (e => (e[e.ALT = xC] = 'ALT', e[e.META = No] = 'META', e[e.SHIFT = IL] = 'SHIFT', e[e.CONTROL = pP] = 'CONTROL', e))($$a10 || {});
var $$s3 = (e => (e[e.BACKSPACE = 8] = 'BACKSPACE', e[e.TAB = 9] = 'TAB', e[e.ENTER = 13] = 'ENTER', e[e.SHIFT = 16] = 'SHIFT', e[e.CTRL = 17] = 'CTRL', e[e.ALT = 18] = 'ALT', e[e.PAUSE = 19] = 'PAUSE', e[e.CAPS_LOCK = 20] = 'CAPS_LOCK', e[e.ESCAPE = 27] = 'ESCAPE', e[e.SPACE = 32] = 'SPACE', e[e.PAGE_UP = 33] = 'PAGE_UP', e[e.PAGE_DOWN = 34] = 'PAGE_DOWN', e[e.END = 35] = 'END', e[e.HOME = 36] = 'HOME', e[e.LEFT_ARROW = 37] = 'LEFT_ARROW', e[e.UP_ARROW = 38] = 'UP_ARROW', e[e.RIGHT_ARROW = 39] = 'RIGHT_ARROW', e[e.DOWN_ARROW = 40] = 'DOWN_ARROW', e[e.INSERT = 45] = 'INSERT', e[e.DELETE = 46] = 'DELETE', e[e.KEY_0 = 48] = 'KEY_0', e[e.KEY_1 = 49] = 'KEY_1', e[e.KEY_2 = 50] = 'KEY_2', e[e.KEY_3 = 51] = 'KEY_3', e[e.KEY_4 = 52] = 'KEY_4', e[e.KEY_5 = 53] = 'KEY_5', e[e.KEY_6 = 54] = 'KEY_6', e[e.KEY_7 = 55] = 'KEY_7', e[e.KEY_8 = 56] = 'KEY_8', e[e.KEY_9 = 57] = 'KEY_9', e[e.A = 65] = 'A', e[e.B = 66] = 'B', e[e.C = 67] = 'C', e[e.D = 68] = 'D', e[e.E = 69] = 'E', e[e.F = 70] = 'F', e[e.G = 71] = 'G', e[e.H = 72] = 'H', e[e.I = 73] = 'I', e[e.J = 74] = 'J', e[e.K = 75] = 'K', e[e.L = 76] = 'L', e[e.M = 77] = 'M', e[e.N = 78] = 'N', e[e.O = 79] = 'O', e[e.P = 80] = 'P', e[e.Q = 81] = 'Q', e[e.R = 82] = 'R', e[e.S = 83] = 'S', e[e.T = 84] = 'T', e[e.U = 85] = 'U', e[e.V = 86] = 'V', e[e.W = 87] = 'W', e[e.X = 88] = 'X', e[e.Y = 89] = 'Y', e[e.Z = 90] = 'Z', e[e.SELECT = 93] = 'SELECT', e[e.NUMPAD_0 = 96] = 'NUMPAD_0', e[e.NUMPAD_1 = 97] = 'NUMPAD_1', e[e.NUMPAD_2 = 98] = 'NUMPAD_2', e[e.NUMPAD_3 = 99] = 'NUMPAD_3', e[e.NUMPAD_4 = 100] = 'NUMPAD_4', e[e.NUMPAD_5 = 101] = 'NUMPAD_5', e[e.NUMPAD_6 = 102] = 'NUMPAD_6', e[e.NUMPAD_7 = 103] = 'NUMPAD_7', e[e.NUMPAD_8 = 104] = 'NUMPAD_8', e[e.NUMPAD_9 = 105] = 'NUMPAD_9', e[e.NUMPAD_DELETE = 1e3] = 'NUMPAD_DELETE', e[e.MULTIPLY = 106] = 'MULTIPLY', e[e.ADD = 107] = 'ADD', e[e.SUBTRACT = 109] = 'SUBTRACT', e[e.DECIMAL = 110] = 'DECIMAL', e[e.DIVIDE = 111] = 'DIVIDE', e[e.SEMICOLON = 186] = 'SEMICOLON', e[e.EQUALS = 187] = 'EQUALS', e[e.COMMA = 188] = 'COMMA', e[e.DASH = 189] = 'DASH', e[e.PERIOD = 190] = 'PERIOD', e[e.FORWARD_SLASH = 191] = 'FORWARD_SLASH', e[e.GRAVE_ACCENT = 192] = 'GRAVE_ACCENT', e[e.BACK_SLASH = 220] = 'BACK_SLASH', e[e.BRACKET_LEFT = 219] = 'BRACKET_LEFT', e[e.BRACKET_RIGHT = 221] = 'BRACKET_RIGHT', e[e.F1 = 112] = 'F1', e[e.F2 = 113] = 'F2', e[e.F3 = 114] = 'F3', e[e.F4 = 115] = 'F4', e[e.F5 = 116] = 'F5', e[e.F6 = 117] = 'F6', e[e.F7 = 118] = 'F7', e[e.F8 = 119] = 'F8', e[e.F9 = 120] = 'F9', e[e.F10 = 121] = 'F10', e[e.F11 = 122] = 'F11', e[e.F12 = 123] = 'F12', e))($$s3 || {});
export function $$o9(e) {
  return e >= 37 && e <= 40;
}
export function $$l4(e) {
  return e >= 33 && e <= 36;
}
export function $$d0(e) {
  return BrowserInfo.mac ? e.metaKey : e.ctrlKey;
}
export function $$c2(e) {
  return $$m8(e, BrowserInfo.mac ? $$a10.META : $$a10.CONTROL);
}
export function $$u7(e) {
  return (e.altKey ? $$a10.ALT : 0) | (e.metaKey ? $$a10.META : 0) | (e.shiftKey ? $$a10.SHIFT : 0) | (e.ctrlKey ? $$a10.CONTROL : 0);
}
export function $$p6(e, t) {
  let i = $$u7(e);
  return i === 0 || (i & ~t) == 0;
}
export function $$m8(e, t) {
  return $$u7(e) === t;
}
export function $$h5(e) {
  return !!e && (e.metaKey && BrowserInfo.mac || e.ctrlKey && !BrowserInfo.mac || e.shiftKey);
}
export let $$g1 = e => t => {
  $$h5(t) || e(t);
};
export const Fo = $$d0;
export const Gc = $$g1;
export const Te = $$c2;
export const Uz = $$s3;
export const b5 = $$l4;
export const oJ = $$h5;
export const sC = $$p6;
export const sN = $$u7;
export const vN = $$m8;
export const wQ = $$o9;
export const xH = $$a10;

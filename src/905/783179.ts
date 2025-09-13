import { throwTypeError } from "../figma_app/465776";
import { ModifierKeyCodes, KeyCodes } from "../905/63728";
import { BrowserInfo } from "../figma_app/778880";
function s(e) {
  switch (e) {
    case ModifierKeyCodes.CONTROL:
      return BrowserInfo.mac ? "\u2303" : "Ctrl";
    case ModifierKeyCodes.ALT:
      return BrowserInfo.mac ? "\u2325" : "Alt";
    case ModifierKeyCodes.SHIFT:
      return "\u21E7";
    case ModifierKeyCodes.META:
      return BrowserInfo.mac ? "\u2318" : "Ctrl";
    default:
      throwTypeError(e);
  }
}
export function $$o0(e) {
  let {
    modifier,
    key
  } = e;
  let a = modifier?.map(s).join() ?? "";
  let o = function (e) {
    switch (e) {
      case KeyCodes.BACKSPACE:
        return "\u232B";
      case KeyCodes.TAB:
        return "Tab";
      case KeyCodes.ENTER:
        return "\u23CE";
      case KeyCodes.ESCAPE:
        return "Esc";
      case KeyCodes.SPACE:
        return "Space";
      case KeyCodes.LEFT_ARROW:
        return "\u2190";
      case KeyCodes.UP_ARROW:
        return "\u2191";
      case KeyCodes.RIGHT_ARROW:
        return "\u2192";
      case KeyCodes.DOWN_ARROW:
        return "\u2193";
      case KeyCodes.DELETE:
        return "Delete";
      case KeyCodes.PERIOD:
        return ".";
      case KeyCodes.KEY_0:
        return "0";
      case KeyCodes.KEY_1:
        return "1";
      case KeyCodes.KEY_2:
        return "2";
      case KeyCodes.KEY_3:
        return "3";
      case KeyCodes.KEY_4:
        return "4";
      case KeyCodes.KEY_5:
        return "5";
      case KeyCodes.KEY_6:
        return "6";
      case KeyCodes.KEY_7:
        return "7";
      case KeyCodes.KEY_8:
        return "8";
      case KeyCodes.KEY_9:
        return "9";
      case KeyCodes.A:
        return "A";
      case KeyCodes.B:
        return "B";
      case KeyCodes.C:
        return "C";
      case KeyCodes.D:
        return "D";
      case KeyCodes.E:
        return "E";
      case KeyCodes.F:
        return "F";
      case KeyCodes.G:
        return "G";
      case KeyCodes.H:
        return "H";
      case KeyCodes.I:
        return "I";
      case KeyCodes.J:
        return "J";
      case KeyCodes.K:
        return "K";
      case KeyCodes.L:
        return "L";
      case KeyCodes.M:
        return "M";
      case KeyCodes.N:
        return "N";
      case KeyCodes.O:
        return "O";
      case KeyCodes.P:
        return "P";
      case KeyCodes.Q:
        return "Q";
      case KeyCodes.R:
        return "R";
      case KeyCodes.S:
        return "S";
      case KeyCodes.T:
        return "T";
      case KeyCodes.U:
        return "U";
      case KeyCodes.V:
        return "V";
      case KeyCodes.W:
        return "W";
      case KeyCodes.X:
        return "X";
      case KeyCodes.Y:
        return "Y";
      case KeyCodes.Z:
        return "Z";
      case KeyCodes.NUMPAD_0:
        return "0";
      case KeyCodes.NUMPAD_1:
        return "1";
      case KeyCodes.NUMPAD_2:
        return "2";
      case KeyCodes.NUMPAD_3:
        return "3";
      case KeyCodes.NUMPAD_4:
        return "4";
      case KeyCodes.NUMPAD_5:
        return "5";
      case KeyCodes.NUMPAD_6:
        return "6";
      case KeyCodes.NUMPAD_7:
        return "7";
      case KeyCodes.NUMPAD_8:
        return "8";
      case KeyCodes.NUMPAD_9:
        return "9";
      default:
        throwTypeError(e);
    }
  }(key);
  return `${a}${o}`;
}
export function $$l1(e) {
  return e.map($$o0).join(" or ");
}
export const OZ = $$o0;
export const f7 = $$l1;
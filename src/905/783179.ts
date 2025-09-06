import { throwTypeError } from "../figma_app/465776";
import { xH, Uz } from "../905/63728";
import { BrowserInfo } from "../figma_app/778880";
function s(e) {
  switch (e) {
    case xH.CONTROL:
      return BrowserInfo.mac ? "\u2303" : "Ctrl";
    case xH.ALT:
      return BrowserInfo.mac ? "\u2325" : "Alt";
    case xH.SHIFT:
      return "\u21E7";
    case xH.META:
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
      case Uz.BACKSPACE:
        return "\u232B";
      case Uz.TAB:
        return "Tab";
      case Uz.ENTER:
        return "\u23CE";
      case Uz.ESCAPE:
        return "Esc";
      case Uz.SPACE:
        return "Space";
      case Uz.LEFT_ARROW:
        return "\u2190";
      case Uz.UP_ARROW:
        return "\u2191";
      case Uz.RIGHT_ARROW:
        return "\u2192";
      case Uz.DOWN_ARROW:
        return "\u2193";
      case Uz.DELETE:
        return "Delete";
      case Uz.PERIOD:
        return ".";
      case Uz.KEY_0:
        return "0";
      case Uz.KEY_1:
        return "1";
      case Uz.KEY_2:
        return "2";
      case Uz.KEY_3:
        return "3";
      case Uz.KEY_4:
        return "4";
      case Uz.KEY_5:
        return "5";
      case Uz.KEY_6:
        return "6";
      case Uz.KEY_7:
        return "7";
      case Uz.KEY_8:
        return "8";
      case Uz.KEY_9:
        return "9";
      case Uz.A:
        return "A";
      case Uz.B:
        return "B";
      case Uz.C:
        return "C";
      case Uz.D:
        return "D";
      case Uz.E:
        return "E";
      case Uz.F:
        return "F";
      case Uz.G:
        return "G";
      case Uz.H:
        return "H";
      case Uz.I:
        return "I";
      case Uz.J:
        return "J";
      case Uz.K:
        return "K";
      case Uz.L:
        return "L";
      case Uz.M:
        return "M";
      case Uz.N:
        return "N";
      case Uz.O:
        return "O";
      case Uz.P:
        return "P";
      case Uz.Q:
        return "Q";
      case Uz.R:
        return "R";
      case Uz.S:
        return "S";
      case Uz.T:
        return "T";
      case Uz.U:
        return "U";
      case Uz.V:
        return "V";
      case Uz.W:
        return "W";
      case Uz.X:
        return "X";
      case Uz.Y:
        return "Y";
      case Uz.Z:
        return "Z";
      case Uz.NUMPAD_0:
        return "0";
      case Uz.NUMPAD_1:
        return "1";
      case Uz.NUMPAD_2:
        return "2";
      case Uz.NUMPAD_3:
        return "3";
      case Uz.NUMPAD_4:
        return "4";
      case Uz.NUMPAD_5:
        return "5";
      case Uz.NUMPAD_6:
        return "6";
      case Uz.NUMPAD_7:
        return "7";
      case Uz.NUMPAD_8:
        return "8";
      case Uz.NUMPAD_9:
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
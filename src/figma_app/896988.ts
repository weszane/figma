import { noop } from 'lodash-es';
import { EventTypeEnum, KeyboardLayout, Fullscreen } from "../figma_app/763686";
import { isCommandEvent, KeyCodes, isModifierMatch, ModifierKeyCodes, isArrowKey, getModifierBitmask } from "../905/63728";
import { v7 } from "../figma_app/475303";
import { BrowserInfo } from "../figma_app/778880";
import { setButtonBaseKeyDownCallback } from "../figma_app/637027";
import { n as _$$n } from "../905/91142";
import { fullscreenValue } from "../figma_app/455680";
var $$u3 = (e => (e[e.YES = 0] = "YES", e[e.NO = 1] = "NO", e))($$u3 || {});
var $$p2 = (e => (e[e.YES = 0] = "YES", e[e.NO = 1] = "NO", e))($$p2 || {});
let _ = noop;
export function $$h6(e) {
  _ = e;
}
export function $$m5(e, t = 0, r = 1) {
  return !!$$g1(e, t, r) && $$E4(e);
}
export function $$g1(e, t = 0, r = 1) {
  return !!(fullscreenValue && fullscreenValue.isRootElementVisible()) && !$$f0(e, t, r);
}
export function $$f0(e, t = 1, r = 1) {
  let n = e.keyCode;
  let i = isCommandEvent(e);
  if (n === KeyCodes.TAB && isModifierMatch(e, ModifierKeyCodes.SHIFT)) ;else if (isArrowKey(e.keyCode)) ;else if (BrowserInfo.mac && e.ctrlKey && (n === KeyCodes.A || n === KeyCodes.B || n === KeyCodes.D || n === KeyCodes.E || n === KeyCodes.F || n === KeyCodes.H || n === KeyCodes.K || n === KeyCodes.L || n === KeyCodes.N || n === KeyCodes.O || n === KeyCodes.P || n === KeyCodes.T || n === KeyCodes.V)) ;else if (n === KeyCodes.DELETE || n === KeyCodes.BACKSPACE || n === KeyCodes.NUMPAD_DELETE || n === KeyCodes.SPACE || n === KeyCodes.ENTER || n === KeyCodes.HOME || n === KeyCodes.END || n === KeyCodes.PAGE_UP || n === KeyCodes.PAGE_DOWN || n === KeyCodes.A && 1 === r) ;else if (i && n === KeyCodes.Z && 1 === t) ;else if (i || e.ctrlKey) return !1;else if (n === KeyCodes.F6) return !1;
  return !0;
}
export function $$E4(e) {
  let t;
  if ("keydown" === e.type) {
    t = EventTypeEnum.KEY_PRESS;
    _();
  } else {
    if ("keyup" !== e.type) {
      console.error("Invalid event passed to forwardKeyboardEvent");
      return !1;
    }
    t = EventTypeEnum.KEY_RELEASE;
  }
  let r = v7();
  let n = {
    type: t,
    which: e.which,
    modifierKeys: getModifierBitmask(e),
    isRepeat: e.repeat,
    code: e.code ?? e.nativeEvent?.code,
    shouldUseLayoutAndCode: r !== KeyboardLayout.UNKNOWN,
    layout: r
  };
  let o = !!Fullscreen && Fullscreen.handleKeyboardShortcut(n);
  o && e.preventDefault();
  return o;
}
setButtonBaseKeyDownCallback($$m5);
_$$n($$m5);
export const BI = $$f0;
export const U5 = $$g1;
export const VA = $$p2;
export const W0 = $$u3;
export const f7 = $$E4;
export const jr = $$m5;
export const nB = $$h6;

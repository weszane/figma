import { lQ } from "../905/934246";
import { Bx4, aTn, glU } from "../figma_app/763686";
import { Fo, Uz, sC, xH, wQ, sN } from "../905/63728";
import { v7 } from "../figma_app/475303";
import { Ay } from "../figma_app/778880";
import { ny } from "../figma_app/637027";
import { n as _$$n } from "../905/91142";
import { Y5 } from "../figma_app/455680";
var $$u3 = (e => (e[e.YES = 0] = "YES", e[e.NO = 1] = "NO", e))($$u3 || {});
var $$p2 = (e => (e[e.YES = 0] = "YES", e[e.NO = 1] = "NO", e))($$p2 || {});
let _ = lQ;
export function $$h6(e) {
  _ = e;
}
export function $$m5(e, t = 0, r = 1) {
  return !!$$g1(e, t, r) && $$E4(e);
}
export function $$g1(e, t = 0, r = 1) {
  return !!(Y5 && Y5.isRootElementVisible()) && !$$f0(e, t, r);
}
export function $$f0(e, t = 1, r = 1) {
  let n = e.keyCode;
  let i = Fo(e);
  if (n === Uz.TAB && sC(e, xH.SHIFT)) ;else if (wQ(e.keyCode)) ;else if (Ay.mac && e.ctrlKey && (n === Uz.A || n === Uz.B || n === Uz.D || n === Uz.E || n === Uz.F || n === Uz.H || n === Uz.K || n === Uz.L || n === Uz.N || n === Uz.O || n === Uz.P || n === Uz.T || n === Uz.V)) ;else if (n === Uz.DELETE || n === Uz.BACKSPACE || n === Uz.NUMPAD_DELETE || n === Uz.SPACE || n === Uz.ENTER || n === Uz.HOME || n === Uz.END || n === Uz.PAGE_UP || n === Uz.PAGE_DOWN || n === Uz.A && 1 === r) ;else if (i && n === Uz.Z && 1 === t) ;else if (i || e.ctrlKey) return !1;else if (n === Uz.F6) return !1;
  return !0;
}
export function $$E4(e) {
  let t;
  if ("keydown" === e.type) {
    t = Bx4.KEY_PRESS;
    _();
  } else {
    if ("keyup" !== e.type) {
      console.error("Invalid event passed to forwardKeyboardEvent");
      return !1;
    }
    t = Bx4.KEY_RELEASE;
  }
  let r = v7();
  let n = {
    type: t,
    which: e.which,
    modifierKeys: sN(e),
    isRepeat: e.repeat,
    code: e.code ?? e.nativeEvent?.code,
    shouldUseLayoutAndCode: r !== aTn.UNKNOWN,
    layout: r
  };
  let o = !!glU && glU.handleKeyboardShortcut(n);
  o && e.preventDefault();
  return o;
}
ny($$m5);
_$$n($$m5);
export const BI = $$f0;
export const U5 = $$g1;
export const VA = $$p2;
export const W0 = $$u3;
export const f7 = $$E4;
export const jr = $$m5;
export const nB = $$h6;
import { useMemo } from "react";
import { DesignGraphElements } from "../figma_app/763686";
import { atom } from "../figma_app/27355";
import { Kh, $v, lW, O_ } from "../figma_app/370763";
import { y } from "../figma_app/873852";
import { L } from "../figma_app/634288";
import { $o } from "../9410/595754";
import { vE } from "../9410/28761";
import { zK } from "../9410/307066";
let p = atom(e => e(Kh), (e, t, i) => {
  if (i === DesignGraphElements.STAMP) {
    t(vE);
    return;
  }
  let r = $$m2(i);
  $v(r);
});
export function $$h1() {
  return useMemo(() => ({
    ...lW,
    activeToolIdAtom: p
  }), []);
}
export function $$m2(e) {
  switch (e) {
    case $o:
      return "set-tool-default-figjam";
    case zK.INSERTS_MENU:
      return "browse-all-resources-modal";
    case y:
      return "toggle-menu";
    default:
      return O_(e);
  }
}
let $$f3 = atom(e => {
  let t = e(Kh);
  return t && L(t) ? t : null;
});
let $$g0 = atom(e => e(Kh) === DesignGraphElements.DROPPER_COLOR);
let $$_4 = atom(e => e(Kh) === DesignGraphElements.STICKY);
export const BB = $$g0;
export const GC = $$h1;
export const Jn = $$m2;
export const XS = $$f3;
export const nU = $$_4;
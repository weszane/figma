import { localStorageRef } from "../905/657224";
import { m } from "../905/717445";
import { nT } from "../figma_app/53721";
let s = "last-used-design-editor-type";
export function $$o2() {
  return function (e) {
    switch (e) {
      case "dev_handoff":
        return nT.DevHandoff;
      case "draw":
        return nT.Illustration;
      default:
        return nT.Design;
    }
  }(localStorageRef?.getItem(s));
}
export function $$l0(e) {
  switch (e) {
    case nT.Design:
    case nT.DevHandoff:
      return !0;
    case nT.Illustration:
      return !!m().ce_il_root;
    default:
      return !1;
  }
}
export function $$d1(e) {
  if (!$$l0(e)) return;
  let t = function (e) {
    switch (e) {
      case nT.DevHandoff:
        return "dev_handoff";
      case nT.Illustration:
        return "draw";
      default:
        return "design";
    }
  }(e);
  localStorageRef?.setItem(s, t);
}
export const Hy = $$l0;
export const V6 = $$d1;
export const b1 = $$o2;
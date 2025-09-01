import { Ez5 } from "../figma_app/763686";
import { AD } from "../905/871411";
import { UN } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { BT } from "../905/618447";
import { to, Oe } from "../figma_app/828186";
import { ut, xB } from "../figma_app/84367";
import { Bk } from "../figma_app/357367";
export function $$p5() {
  return !ut(Ez5?.cooperFocusView().isInFocusedNodeView, !1);
}
export function $$_6() {
  let e = to();
  let t = ut(Ez5?.cooperFocusView().isInFocusedNodeView, !0);
  return e && t;
}
export function $$h4() {
  let e = $$p5();
  let t = Oe();
  let r = Bk();
  if (!e || t || !r) return !1;
  let c = zl.get(BT);
  if (!c.length || 1 === c.length) return !1;
  for (let e = 0; e < c.length; e++) {
    let t = Ez5?.canvasGrid().isRowSelected(e);
    let r = Ez5?.canvasGrid().getRowGUID(e) ?? AD;
    if (t && UN().get(r)?.isCanvasGridStateGroupRow && getFeatureFlags().buzz_template_sets) return !0;
  }
  return !1;
}
export function $$m2() {
  return Ez5 ? Ez5.cooperFocusView().focusNodeInFocusedNodeView : (e, t) => {};
}
export function $$g3() {
  return ut(Ez5?.cooperFocusView().focusedNodeId, "");
}
export function $$f1() {
  return xB(Ez5?.cooperFocusView().focusedNodeId, "");
}
export function $$E0() {
  let e = to();
  let t = $$p5();
  let r = Oe();
  return e && r && !t;
}
export const CA = $$E0;
export const Ci = $$f1;
export const Hf = $$m2;
export const LU = $$g3;
export const W5 = $$h4;
export const jw = $$p5;
export const kG = $$_6;
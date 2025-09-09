import { getFeatureFlags } from "../905/601108";
import { selectCurrentFile } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { Fk } from "../figma_app/167249";
import { tS, pN, A8 } from "../figma_app/29089";
function l() {
  let e = selectCurrentFile();
  return !!(e?.editorType === FFileType.COOPER && getFeatureFlags().buzz_template_sets);
}
export function $$d1() {
  let e = l();
  let t = c();
  let r = $$_0();
  let n = !!Fk(e => {
    let t = 1 === e.getDirectlySelectedNodes().length ? e.getDirectlySelectedNodes()[0] : void 0;
    return !!t && t.isCanvasGridChild && "SYMBOL" === t.type && !t.isState;
  });
  return e ? t ? [tS] : r ? [pN] : n ? [A8] : [] : [];
}
function c() {
  return !!Fk(e => {
    let t = e.getDirectlySelectedNodes();
    return 1 === t.length && t[0]?.isCanvasGridRowNodeType;
  });
}
export function $$u2() {
  let e = l();
  let t = c();
  return e && !!t;
}
export function $$p3() {
  let e = l();
  let t = Fk(e => e.getDirectlySelectedNodes().every(e => e.isCanvasGridChild));
  return e && !!t;
}
export function $$_0() {
  let e = l();
  let t = Fk(e => e.getDirectlySelectedNodes().every(e => e.isCanvasGridChild));
  let r = Fk(e => e.getDirectlySelectedNodes().every(e => "FRAME" === e.type || e.isInstance));
  return e && !!t && r;
}
export const Ez = $$_0;
export const a3 = $$d1;
export const or = $$u2;
export const ue = $$p3;
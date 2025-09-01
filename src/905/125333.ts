import { glU, NLJ, qq } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { hR, hW, x6 } from "../905/508457";
import { rA } from "../figma_app/463678";
import { GJ, XQ, qB, zQ, Dq, E$, n6, ns, T7, LX } from "../figma_app/285009";
import { g5 } from "../905/888175";
let $$d3 = hR(null, {
  changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
});
let $$c1 = hR({
  total: 0
}, {
  changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE,
  equalityFn: Object.is
});
let $$u0 = hR(null, {
  changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
});
let $$p9 = hR(new Map(), {
  changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
});
let $$m15 = hR(new Set(), {
  changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
});
let $$h13 = hR(new Set(), {
  changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
});
let $$g19 = hR({
  ...rA
}, {
  changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
});
let $$f12 = hR({
  styles: []
}, {
  changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
});
function _() {
  return "dark" === (document.body.getAttribute("data-preferred-theme") || "light") ? GJ : XQ;
}
let $$A2 = x6({
  paints: _(),
  strokeWeight: qB,
  strokeOpacity: zQ
}, e => {
  glU?.updateDrawingStyle(e, NLJ.VECTOR_PENCIL);
}, {
  changeFileBehavior: hW.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$y7 = x6({
  paints: _(),
  strokeWeight: qB,
  strokeOpacity: zQ
}, e => {
  glU?.updateDrawingStyle(e, NLJ.BRUSH);
}, {
  changeFileBehavior: hW.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$b10 = x6({
  paints: _(),
  strokeWeight: qB,
  strokeOpacity: zQ
}, e => {
  glU?.updateDrawingStyle(e, NLJ.VECTOR_PEN);
}, {
  changeFileBehavior: hW.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$v4 = x6({
  paints: Dq,
  strokeWeight: g5
}, e => glU?.updateHighlighterStyle(e), {
  changeFileBehavior: hW.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$I16 = x6(E$(), e => glU?.updateToolStyles({
  stickyColor: e
}), {
  changeFileBehavior: hW.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$E11 = x6(n6, e => glU?.updateToolStyles({
  shapeColor: e
}), {
  changeFileBehavior: hW.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$x14 = x6(ns, e => {
  getFeatureFlags().figjam_track_stroke_color && glU?.updateToolStyles({
    strokeColor: e
  });
}, {
  changeFileBehavior: hW.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$S6 = x6(T7, e => glU?.updateToolStyles({
  shapeStrokeStyleType: e
}), {
  changeFileBehavior: hW.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$w17 = x6(LX, e => glU?.updateToolStyles({
  connectorToolColor: e
}), {
  changeFileBehavior: hW.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$C5 = x6({
  shapeWithTextType: "ELLIPSE",
  connectorToolLineStyle: "ELBOWED",
  connectorToolEndCap: "ARROW_LINES"
}, e => glU?.updateToolStyles(e), {
  changeFileBehavior: hW.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$T18 = hR(null, {
  changeFileBehavior: hW.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$k8 = x6(qq.NONE, e => {
  glU?.setCurrentToolSetSource(e);
}, {
  changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
});
export const Ch = $$u0;
export const Fk = $$c1;
export const GI = $$A2;
export const HV = $$d3;
export const IZ = $$v4;
export const SK = $$C5;
export const U9 = $$S6;
export const Vi = $$y7;
export const W6 = $$k8;
export const Wy = $$p9;
export const _o = $$b10;
export const ez = $$E11;
export const gq = $$f12;
export const hw = $$h13;
export const lC = $$x14;
export const ml = $$m15;
export const qL = $$I16;
export const wp = $$w17;
export const yE = $$T18;
export const yo = $$g19;
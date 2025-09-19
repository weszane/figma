import { Fullscreen, DesignGraphElements, ShapeSidebarMode } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { createFileBehaviorAtom, FileChangeBehaviorEnum, createWritableFileBehaviorAtom } from "../905/508457";
import { rA } from "../figma_app/463678";
import { GJ, XQ, qB, zQ, Dq, E$, n6, ns, T7, LX } from "../figma_app/285009";
import { g5 } from "../905/888175";
let $$d3 = createFileBehaviorAtom(null, {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE
});
let $$c1 = createFileBehaviorAtom({
  total: 0
}, {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE,
  equalityFn: Object.is
});
let $$u0 = createFileBehaviorAtom(null, {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE
});
let $$p9 = createFileBehaviorAtom(new Map(), {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE
});
let $$m15 = createFileBehaviorAtom(new Set(), {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE
});
let $$h13 = createFileBehaviorAtom(new Set(), {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE
});
let $$g19 = createFileBehaviorAtom({
  ...rA
}, {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE
});
let $$f12 = createFileBehaviorAtom({
  styles: []
}, {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE
});
function _() {
  return "dark" === (document.body.getAttribute("data-preferred-theme") || "light") ? GJ : XQ;
}
let $$A2 = createWritableFileBehaviorAtom({
  paints: _(),
  strokeWeight: qB,
  strokeOpacity: zQ
}, e => {
  Fullscreen?.updateDrawingStyle(e, DesignGraphElements.VECTOR_PENCIL);
}, {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$y7 = createWritableFileBehaviorAtom({
  paints: _(),
  strokeWeight: qB,
  strokeOpacity: zQ
}, e => {
  Fullscreen?.updateDrawingStyle(e, DesignGraphElements.BRUSH);
}, {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$b10 = createWritableFileBehaviorAtom({
  paints: _(),
  strokeWeight: qB,
  strokeOpacity: zQ
}, e => {
  Fullscreen?.updateDrawingStyle(e, DesignGraphElements.VECTOR_PEN);
}, {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$v4 = createWritableFileBehaviorAtom({
  paints: Dq,
  strokeWeight: g5
}, e => Fullscreen?.updateHighlighterStyle(e), {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$I16 = createWritableFileBehaviorAtom(E$(), e => Fullscreen?.updateToolStyles({
  stickyColor: e
}), {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$E11 = createWritableFileBehaviorAtom(n6, e => Fullscreen?.updateToolStyles({
  shapeColor: e
}), {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$x14 = createWritableFileBehaviorAtom(ns, e => {
  getFeatureFlags().figjam_track_stroke_color && Fullscreen?.updateToolStyles({
    strokeColor: e
  });
}, {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$S6 = createWritableFileBehaviorAtom(T7, e => Fullscreen?.updateToolStyles({
  shapeStrokeStyleType: e
}), {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$w17 = createWritableFileBehaviorAtom(LX, e => Fullscreen?.updateToolStyles({
  connectorToolColor: e
}), {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$C5 = createWritableFileBehaviorAtom({
  shapeWithTextType: "ELLIPSE",
  connectorToolLineStyle: "ELBOWED",
  connectorToolEndCap: "ARROW_LINES"
}, e => Fullscreen?.updateToolStyles(e), {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$T18 = createFileBehaviorAtom(null, {
  changeFileBehavior: FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES
});
let $$k8 = createWritableFileBehaviorAtom(ShapeSidebarMode.NONE, e => {
  Fullscreen?.setCurrentToolSetSource(e);
}, {
  changeFileBehavior: FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE
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
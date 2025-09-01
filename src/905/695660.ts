import { hV } from "../figma_app/387100";
export function $$r0(e, t) {
  e && hV(e, t);
}
export function $$a4(e) {
  var t;
  return !e.isAlive || !e.visible || 0 === e.opacity || "TEXT" === e.type && e.parentNode?.type !== "FRAME" || "STICKY" === (t = e).type || "TABLE" === t.type || "SHAPE_WITH_TEXT" === t.type || "CONNECTOR" === t.type || "STAMP" === t.type || "WIDGET" === t.type || "WASHI_TAPE" === t.type;
}
export function $$s3(e) {
  return "SECTION" === e.type;
}
export function $$o2(e) {
  return "BOOLEAN_OPERATION" === e.type;
}
export function $$l1(e) {
  let t = e.fills?.some(e => !!e.visible && !!e.opacity && e.opacity > 0);
  let i = e.strokePaints?.data?.some(e => !!e.visible && !!e.opacity && e.opacity > 0);
  return !t && !i;
}
export const eA = $$r0;
export const c_ = $$l1;
export const fQ = $$o2;
export const gZ = $$s3;
export const YS = $$a4;
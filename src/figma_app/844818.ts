import { parsePxInt } from "../figma_app/783094";
import { kLt, M$q } from "../figma_app/27776";
let a = !1;
export function $$s2(e) {
  a = e;
}
export function $$o3() {
  let e = window.FigmaMobile;
  return a || (e?.shouldAllowSimulatedRightClick ?? !0);
}
export function $$l1() {
  return 0;
}
export function $$d0() {
  return parsePxInt(kLt) + parsePxInt(M$q);
}
export const VA = $$d0;
export const j5 = $$l1;
export const o5 = $$s2;
export const ty = $$o3;
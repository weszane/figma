import { nb, Tf } from "../figma_app/543100";
import { dq } from "../905/845253";
import { _6 } from "../figma_app/386952";
export function $$s0(e) {
  let t = _6();
  return $$o2(e, dq()) && $$l1(t);
}
export function $$o2(e, t) {
  return e.type !== nb.OFFLINE_FILE && Tf.getOrgId(e) === t;
}
export function $$l1(e) {
  return "deletedFiles" !== e.view;
}
export const Xg = $$s0;
export const mM = $$l1;
export const qf = $$o2;
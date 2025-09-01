import { Lv9 } from "../figma_app/763686";
let i = new Set();
export function $$a3(e) {
  Lv9.watchBoundsForNodes(e);
}
export function $$s0(e) {
  Lv9.watchBoundsForStablePaths(e);
}
export function $$o1(e) {
  i.add(e);
}
export function $$l4(e) {
  i.$$delete(e);
}
class d {
  nodeBoundsChanged() {
    for (let e of i) e();
  }
}
let c = null;
export function $$u2() {
  c || (c = new d());
  return c;
}
export const $r = $$s0;
export const B_ = $$o1;
export const Iu = $$u2;
export const PN = $$a3;
export const mo = $$l4;
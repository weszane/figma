import { PW } from "../905/497152";
import { oz, nV } from "../905/808701";
let a = "full-page-block";
export function $$s1(e) {
  return l(oz(PW.RESPONSIVE_SET, e));
}
export function $$o2(e) {
  return l(nV(PW.RESPONSIVE_SET, e));
}
function l(e) {
  return e ? $$d3(e.name) ? {
    ...e,
    fullPage: !0
  } : e : null;
}
export function $$d3(e) {
  return e.includes(a);
}
export function $$c0(e) {
  return e.replace(a, "").replace(/-+/g, " ").trim().replace(/\b\w/g, e => e.toUpperCase());
}
export const NR = $$c0;
export const X1 = $$s1;
export const _t = $$o2;
export const dl = $$d3;
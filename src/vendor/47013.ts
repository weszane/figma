import { J } from "../vendor/38229";
export function $$s0({
  when: e,
  delay: r,
  delayChildren: n,
  staggerChildren: i,
  staggerDirection: s,
  repeat: o,
  repeatType: a,
  repeatDelay: h,
  from: d,
  elapsed: p,
  ...g
}) {
  return !!Object.keys(g).length;
}
export function $$o2(e) {
  return 0 === e || "string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ");
}
export function $$a1(e) {
  return "number" == typeof e ? 0 : J("", e);
}
export function $$h3(e, r) {
  return e[r] || e.$$default || e;
}
export const D2 = $$s0;
export const RL = $$a1;
export const be = $$o2;
export const rU = $$h3;
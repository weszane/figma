import { isNotNullish } from "../figma_app/95419";
import { N_ } from "../905/332483";
import { vr } from "../figma_app/514043";
export function $$s1(e, t) {
  let r = 0;
  N_.forEach(i => {
    isNotNullish(t[i]) && (r += Math.round((e[i] || 0) * t[i]));
  });
  return r;
}
export function $$o2(e, t, r) {
  let a = 0;
  N_.forEach(i => {
    isNotNullish(t[i]) && (a += Math.round((e[i] || 0) * t[i] * (.01 * r)));
  });
  return a;
}
export function $$l0(e, t, r) {
  return $$s1(e, t) + $$o2(e, t, r);
}
export function $$d3(e, t, r) {
  return new vr(t).formatMoney(e, r);
}
export const N9 = $$l0;
export const Vh = $$s1;
export const kV = $$o2;
export const up = $$d3;
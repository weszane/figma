import { isNullish } from "../figma_app/95419";
import { UL } from "../figma_app/361035";
import { f8, WQ } from "../c5e2cae0/705272";
import { dA } from "../905/513035";
if (443 == require.j) {}
export function $$s1(e, t) {
  for (let t of Object.values(e)) if (isNullish(t) || !dA(t)) return !1;
  for (let i of Object.keys(e)) if (!t.includes(i)) return !1;
  return !0;
}
export function $$l0(e, t) {
  return UL(e) >= d[t];
}
let d = {
  pro: f8,
  org: WQ,
  enterprise: 1 / 0
};
export const A = $$l0;
export const H = $$s1;
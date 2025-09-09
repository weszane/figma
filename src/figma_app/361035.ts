import { isNotNullish } from "../figma_app/95419";
import { Vh, kV, N9 } from "../figma_app/692987";
import { ViewAccessTypeEnum } from "../905/513035";
import { N_ } from "../905/332483";
import { AG } from "../figma_app/217457";
export function $$l7(e) {
  return N_.dict(t => e[t]?.amount ?? 0);
}
export function $$d8(e) {
  return Object.values(e).map(e => e.key);
}
export function $$c6(e) {
  let t = N_.dict(() => 0);
  Object.values(e).filter(e => isNotNullish(e)).forEach(e => {
    "view" !== e && (t[e] = (t[e] || 0) + 1);
  });
  return t;
}
export function $$u1(e, t) {
  let r = $$c6(e);
  Object.entries(t).forEach(([e, t]) => {
    N_.has(e) && (r[e] ||= 0, r[e] += t);
  });
  return r;
}
export function $$p2(e) {
  return Object.entries(e).filter(([e, t]) => e !== ViewAccessTypeEnum.VIEW).map(([e, t]) => t).reduce((e, t) => e + t, 0);
}
export function $$_3(e) {
  return e.filter(e => e !== ViewAccessTypeEnum.VIEW).sort((e, t) => AG(e, t))[0] ?? ViewAccessTypeEnum.VIEW;
}
export function $$h4(e) {
  let t = {};
  Object.entries(e).forEach(([e, r]) => {
    isNotNullish(r) && r !== ViewAccessTypeEnum.VIEW && (t[e] = r);
  });
  return t;
}
export function $$m5({
  countBySeatType: e,
  applicablePrices: t,
  taxPercent: r
}) {
  let n = Vh(e, t);
  let a = kV(e, t, r);
  let s = N9(e, t, r);
  return {
    subtotal: n,
    taxPercent: r,
    taxTotal: a,
    total: s
  };
}
export function $$g0({
  subtotal: e,
  taxTotal: t,
  total: r
}) {
  return {
    subtotal: e,
    tax_total: t,
    total: r
  };
}
export const GL = $$g0;
export const O$ = $$u1;
export const UL = $$p2;
export const Up = $$_3;
export const VB = $$h4;
export const ZY = $$m5;
export const iB = $$c6;
export const s$ = $$l7;
export const vm = $$d8;
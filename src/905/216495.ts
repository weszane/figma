let $$n12 = {
  __mixed__: !0
};
let $$r5 = {
  __auto__: !0
};
export function $$a4() {
  let e = [];
  e.__mixed_values__ = !0;
  return e;
}
export function $$s9(e) {
  return Array.isArray(e) && e.__mixed_values__;
}
export function $$o10(e) {
  return !$$d11(e);
}
export function $$l6(e) {
  return e === $$r5;
}
export function $$d11(e) {
  return e !== $$n12 && !$$s9(e);
}
export function $$c2(e) {
  return e === $$n12 || null == e ? null : e;
}
export function $$u3(e) {
  return e === $$n12 || null == e || $$s9(e) ? null : e;
}
export function $$p8(e, t) {
  return e === $$n12 || null == e || e === $$r5 ? t : e;
}
export function $$m1(e) {
  return $$s9(e) ? e : e === $$n12 || null == e ? [] : [e];
}
export function $$h13(...e) {
  for (let t = 1; t < e.length; ++t) if (e[t] !== e[0]) return $$n12;
  return e[0];
}
export function $$g0(e) {
  return $$h13(...$$m1(e));
}
export function $$f7(e) {
  return e.some($$o10) ? $$n12 : e;
}
export const BI = $$g0;
export const C8 = $$m1;
export const E7 = $$c2;
export const HE = $$u3;
export const Mv = $$a4;
export const Q8 = $$r5;
export const SX = $$l6;
export const ZX = $$f7;
export const _W = $$p8;
export const bU = $$s9;
export const gl = $$o10;
export const hS = $$d11;
export const oV = $$n12;
export const q = $$h13;
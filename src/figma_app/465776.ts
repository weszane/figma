import { isNullish } from "../figma_app/95419";
export function $$i5(e, t = "") {
  if (!e) throw Error(`Assertion failure${t ? `: ${t}` : ""}`);
}
export function $$a0(e, t) {
  if (isNullish(e)) throw Error(t ?? "Expected value not to be nullish");
}
export function $$s7(e, t) {
  throw Error(t ?? `Uncaught type ${JSON.stringify(e)}`);
}
export function $$o4(e) {}
export function $$l6(e) {
  throw Error(e);
}
export function $$d1(e, t, ...r) {}
export function $$c2(e, t, r) {
  return t;
}
export function $$u3(e) {}
export const B1 = $$a0;
export const KF = $$d1;
export const S9 = $$c2;
export const d_ = $$u3;
export const j = $$o4;
export const vA = $$i5;
export const wc = $$l6;
export const xb = $$s7;
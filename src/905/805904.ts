import { sD } from "../figma_app/243058";
export function $$r3(e) {
  let t = sD.fromString(e);
  return t ? sD.toKiwi(t) : null;
}
export function $$a2(e) {
  let t = sD.fromString(e);
  return !!t && sD.isValid(t);
}
export function $$s4(e) {
  return {
    guid: e
  };
}
export function $$o1(e) {
  let t = sD.fromKiwi(e);
  return t ? sD.toString(t) : "(invalid variable id)";
}
export function $$l5(e) {
  return $$o1($$s4(e));
}
export function $$d0(e, t) {
  return sD.toString(sD.fromRef({
    key: e,
    version: t
  }));
}
export const Hc = $$d0;
export const dI = $$o1;
export const fn = $$a2;
export const sH = $$r3;
export const w1 = $$s4;
export const wL = $$l5;
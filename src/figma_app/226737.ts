import { isValidValue } from "../905/216495";
import { lJ } from "../905/275640";
import { Fk } from "../figma_app/167249";
export function $$s0() {
  return Fk(e => e.getRoot().slideThemeId);
}
export function $$o2() {
  let [e] = lJ("themeId");
  return e;
}
export function $$l1() {
  let e = $$o2();
  let t = $$s0();
  return e && isValidValue(e) ? e : t;
}
export const el = $$s0;
export const s1 = $$l1;
export const sW = $$o2;
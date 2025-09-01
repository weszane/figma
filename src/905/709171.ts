import { isNullish } from "../figma_app/95419";
import { $ } from "../905/383708";
export function $$a1(e, t) {
  return !(isNullish(e) || isNullish(t)) && e.library_key === t.library_key;
}
export function $$s4(e, t) {
  return !(isNullish(e) || isNullish(t)) && e.library_key === t.libraryKey;
}
export function $$o2(e, t) {
  return !(isNullish(e) || isNullish(t)) && $$l3(e, $(t));
}
export function $$l3(e, t) {
  return !(isNullish(e) || isNullish(t)) && e.library_key === t;
}
export function $$d0(e, t) {
  return !(isNullish(e) || isNullish(t)) && e.library_key === t.library_key;
}
export const EF = $$d0;
export const N2 = $$a1;
export const Oo = $$o2;
export const Ui = $$l3;
export const eE = $$s4;
import n from "../vendor/197638";
var r = n;
let a = /[\u202A-\u202E\u2060-\u206F]/g;
export function $$s0(e) {
  return e ? e.replace(a, "").normalize() : e;
}
export function $$o1(e) {
  return r().sanitize(e);
}
export const F = $$s0;
export const p = $$o1;
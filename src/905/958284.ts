import { g } from "../905/880308";
export function $$r0(e) {
  return `${e}__${g()}`;
}
let a = /__[0-9A-Za-z\-]+$/;
export function $$s1(e) {
  return e.replace(a, "");
}
export const t = $$r0;
export const y = $$s1;
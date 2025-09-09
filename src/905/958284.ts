import { generateUUIDv4 } from "../905/871474";
export function $$r0(e) {
  return `${e}__${generateUUIDv4()}`;
}
let a = /__[0-9A-Za-z\-]+$/;
export function $$s1(e) {
  return e.replace(a, "");
}
export const t = $$r0;
export const y = $$s1;
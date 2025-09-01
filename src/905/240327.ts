import { jXp } from "../figma_app/763686";
import { Lg } from "../figma_app/257275";
let a = new Set();
export function $$s1(e) {
  "string" == typeof e && Lg() ? a.add(e) : "object" == typeof e && e.source === jXp.GOOGLE && a.add(e.family);
}
export function $$o0(e) {
  return a.has(e);
}
export const H = $$o0;
export const n = $$s1;
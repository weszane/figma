import { Yx } from "../figma_app/930338";
import { Hn } from "../figma_app/765689";
import { VG, sC } from "../905/389382";
export function $$s1(e, t) {
  return t?.hideBeta ? VG(e) : sC(e);
}
export function $$o0(e, t = "conjunction") {
  return Yx([...e].sort(Hn).map(e => $$s1(e)), t);
}
export const a = $$o0;
export const o = $$s1;
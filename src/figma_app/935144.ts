import { hV } from "../figma_app/387100";
export let $$i1 = 4e4;
export function $$a2(e) {
  return Math.round(250 * e / 4);
}
export function $$s0(e) {
  let t = 0;
  hV(e, () => {
    t++;
  });
  return t;
}
export const $w = $$s0;
export const E4 = $$i1;
export const Z = $$a2;
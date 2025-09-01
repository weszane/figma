import { iZ } from "../905/372672";
import { nT } from "../figma_app/53721";
import { my } from "../figma_app/976749";
export function $$s1() {
  let e = !iZ();
  let t = my();
  let r = t === nT.Design;
  let s = t === nT.Slides;
  let o = t === nT.Sites;
  let l = t === nT.Cooper;
  let d = t === nT.Figmake;
  return e && (r || s || o || l || d);
}
export function $$o0() {
  let e = !iZ();
  let t = my() === nT.Design;
  return e && t;
}
export const F = $$o0;
export const k = $$s1;
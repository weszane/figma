import { iZ } from "../905/372672";
import { FEditorType } from "../figma_app/53721";
import { my } from "../figma_app/976749";
export function $$s1() {
  let e = !iZ();
  let t = my();
  let r = t === FEditorType.Design;
  let s = t === FEditorType.Slides;
  let o = t === FEditorType.Sites;
  let l = t === FEditorType.Cooper;
  let d = t === FEditorType.Figmake;
  return e && (r || s || o || l || d);
}
export function $$o0() {
  let e = !iZ();
  let t = my() === FEditorType.Design;
  return e && t;
}
export const F = $$o0;
export const k = $$s1;
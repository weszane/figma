import { getFeatureFlags } from "../905/601108";
import { useAppModelProperty } from "../figma_app/722362";
import { selectCurrentFile } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
export function $$s2() {
  let e = useAppModelProperty("pagesList");
  return e.some(t => t.pageType !== e[0].pageType);
}
export function $$l0() {
  let e = selectCurrentFile();
  return e?.editorType === FFileType.DESIGN;
}
export function $$d1() {
  let e = $$l0();
  let t = $$s2();
  return e && (t || getFeatureFlags().interop_pages);
}
export const Te = $$l0;
export const V6 = $$d1;
export const ew = $$s2;
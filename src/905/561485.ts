import { useSelector } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { FEditorType } from "../figma_app/53721";
export function $$s2() {
  return !!getFeatureFlags().sites;
}
export function $$o0(e) {
  return !!$$s2() && "fullscreen" === e.view && e.editorType === FEditorType.Sites;
}
export function $$l1() {
  return useSelector(e => $$o0(e.selectedView));
}
export const Vj = $$o0;
export const cJ = $$l1;
export const oz = $$s2;

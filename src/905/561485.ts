import { d4 } from "../vendor/514228";
import { getFeatureFlags } from "../905/601108";
import { nT } from "../figma_app/53721";
export function $$s2() {
  return !!getFeatureFlags().sites;
}
export function $$o0(e) {
  return !!$$s2() && "fullscreen" === e.view && e.editorType === nT.Sites;
}
export function $$l1() {
  return d4(e => $$o0(e.selectedView));
}
export const Vj = $$o0;
export const cJ = $$l1;
export const oz = $$s2;
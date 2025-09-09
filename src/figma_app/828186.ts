import { useSelector } from "react-redux";
import { AppStateTsApi, SelfDesignType } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { getObservableValue } from "../figma_app/84367";
import { FEditorType } from "../figma_app/53721";
export function $$l2(e) {
  return e?.view === "fullscreen" && e?.editorType === FEditorType.Cooper;
}
export function $$d3(e) {
  return $$l2(e.selectedView);
}
export function $$c4() {
  return useSelector($$d3);
}
export function $$u0() {
  return !!getFeatureFlags().cooper;
}
export function $$p1() {
  let e = $$c4();
  return getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF) === SelfDesignType.DESIGN && e;
}
export const HH = $$u0;
export const Oe = $$p1;
export const eM = $$l2;
export const im = $$d3;
export const to = $$c4;

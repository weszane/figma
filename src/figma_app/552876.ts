import { useMemo, useCallback } from "react";
import { useSelector } from "../vendor/514228";
import { glU } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { debugState } from "../905/407919";
import { FEditorType } from "../figma_app/53721";
import { f0 } from "../figma_app/707808";
import { oz } from "../905/561485";
export function $$u4() {
  return oz() && !!getFeatureFlags().bake;
}
export function $$p1(e) {
  return !!$$u4() && "fullscreen" === e.view && e.editorType === FEditorType.Figmake;
}
export function $$_3() {
  let e = debugState.getState().selectedView;
  return !!e && $$p1(e);
}
export function $$h2() {
  return useSelector(e => $$p1(e.selectedView));
}
export function $$m0(e) {
  let t = $$h2();
  return useMemo(() => t && "fullscreen" === e.view && e.figmakeView === f0.FULLSCREEN_PREVIEW, [t, e]);
}
export function $$g5() {
  return useCallback(() => {
    glU?.triggerAction("debug-toggle-figmake-mode", {});
  }, []);
}
export const B5 = $$m0;
export const Jh = $$p1;
export const Oc = $$h2;
export const YE = $$_3;
export const aI = $$u4;
export const iG = $$g5;
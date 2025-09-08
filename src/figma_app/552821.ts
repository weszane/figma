import { nearlyEqual } from "../figma_app/492908";
import { AppStateTsApi, SelfDesignType, Fullscreen } from "../figma_app/763686";
import { fullscreenValue } from "../figma_app/455680";
function s() {
  let e = AppStateTsApi?.interopToolMode().getCopy() === SelfDesignType.DESIGN;
  if (!AppStateTsApi?.cooperFocusView().isInFocusedNodeView.getCopy() || e) {
    AppStateTsApi?.cooperFocusView().shouldStayZoomedToFit.set(!1);
    return;
  }
  let t = AppStateTsApi?.cooperFocusView().minScale();
  if (!t) {
    AppStateTsApi?.cooperFocusView().shouldStayZoomedToFit.set(!1);
    return;
  }
  let r = fullscreenValue.getViewportInfo();
  let s = nearlyEqual(r.zoomScale, t);
  let o = r.zoomScale <= t;
  let l = AppStateTsApi?.cooperFocusView().selectedNodeIsEntirelyInViewport();
  AppStateTsApi?.cooperFocusView().shouldStayZoomedToFit.set(l || s || o);
}
export function $$o2() {
  s();
  Fullscreen?.triggerAction("toggle-buzz-tool-mode", {});
}
export function $$l4() {
  s();
  Fullscreen?.triggerAction("enter-buzz-design-mode", {});
}
export function $$d3(e) {
  s();
  AppStateTsApi?.uiState().cooperLeftSideOfRightPanel.set(e);
}
export function $$c5() {
  s();
  AppStateTsApi?.uiState().showPropertiesPanel.set(!1);
}
export function $$u0() {
  s();
  AppStateTsApi?.uiState().showPropertiesPanel.set(!0);
}
export function $$p1(e) {
  s();
  AppStateTsApi?.uiState().leftPanelCollapsedUI3.set(e);
}
export const DN = $$u0;
export const I$ = $$p1;
export const _o = $$o2;
export const kB = $$d3;
export const kH = $$l4;
export const u4 = $$c5;
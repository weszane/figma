import { xN } from "../figma_app/492908";
import { Ez5, nQ7, glU } from "../figma_app/763686";
import { Y5 } from "../figma_app/455680";
function s() {
  let e = Ez5?.interopToolMode().getCopy() === nQ7.DESIGN;
  if (!Ez5?.cooperFocusView().isInFocusedNodeView.getCopy() || e) {
    Ez5?.cooperFocusView().shouldStayZoomedToFit.set(!1);
    return;
  }
  let t = Ez5?.cooperFocusView().minScale();
  if (!t) {
    Ez5?.cooperFocusView().shouldStayZoomedToFit.set(!1);
    return;
  }
  let r = Y5.getViewportInfo();
  let s = xN(r.zoomScale, t);
  let o = r.zoomScale <= t;
  let l = Ez5?.cooperFocusView().selectedNodeIsEntirelyInViewport();
  Ez5?.cooperFocusView().shouldStayZoomedToFit.set(l || s || o);
}
export function $$o2() {
  s();
  glU?.triggerAction("toggle-buzz-tool-mode", {});
}
export function $$l4() {
  s();
  glU?.triggerAction("enter-buzz-design-mode", {});
}
export function $$d3(e) {
  s();
  Ez5?.uiState().cooperLeftSideOfRightPanel.set(e);
}
export function $$c5() {
  s();
  Ez5?.uiState().showPropertiesPanel.set(!1);
}
export function $$u0() {
  s();
  Ez5?.uiState().showPropertiesPanel.set(!0);
}
export function $$p1(e) {
  s();
  Ez5?.uiState().leftPanelCollapsedUI3.set(e);
}
export const DN = $$u0;
export const I$ = $$p1;
export const _o = $$o2;
export const kB = $$d3;
export const kH = $$l4;
export const u4 = $$c5;
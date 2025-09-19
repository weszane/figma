import { documentStateTsApi, Fullscreen, SlideHelpersCppBindings, AppStateTsApi, SceneGraphHelpers } from "../figma_app/763686";
import { isValidSessionLocalID, parseSessionLocalID } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { canvasGridAtom } from "../905/618447";
import { fullscreenValue } from "../figma_app/455680";
export function $$d2(e, t, r, a = !0) {
  let c = documentStateTsApi?.getMutableActiveDocument();
  if (!c) {
    console.error("slide deck utils", "No active document");
    return null;
  }
  let u = atomStoreManager.get(canvasGridAtom);
  let p = u[e]?.[t - 1] || u[e - 1]?.[(u[e - 1]?.length || 0) - 1] || u[e + 1]?.[0] || u[e]?.[0] || u[0]?.[0];
  if (!Fullscreen || !SlideHelpersCppBindings) return null;
  let _ = p && isValidSessionLocalID(parseSessionLocalID(p)) ? Fullscreen.duplicateAsBlankSlide(c, p, e, t, r) : SlideHelpersCppBindings.createSlideAtCoord(c, e, t, r);
  a && fullscreenValue.commit();
  setTimeout(() => {
    AppStateTsApi && !AppStateTsApi.singleSlideView().isFocusedNodeViewEnabled() && AppStateTsApi.singleSlideView().panToNodeIfOutsideViewport(_, .6);
  }, 0);
  return _;
}
export function $$c0(e) {
  let t = e.containingSlideId;
  if (e.parentGuid === t) return e;
  for (; e.parentGuid !== t;) {
    let t = e.parentNode;
    if (!t) break;
    e = t;
  }
  return e;
}
export function $$u1() {
  let e = getSingletonSceneGraph().getCurrentPage();
  return !e || 0 === e.directlySelectedNodes.length || e.directlySelectedNodes.every(e => e.isSlide);
}
export function $$p3(e) {
  SceneGraphHelpers && AppStateTsApi && (SceneGraphHelpers.replaceSelection([e], !0), AppStateTsApi.singleSlideView().isFocusedNodeViewEnabled() ? AppStateTsApi.singleSlideView().focusNodeInFocusedNodeView(e, !0) : setTimeout(() => {
    AppStateTsApi && !AppStateTsApi.singleSlideView().isFocusedNodeViewEnabled() && AppStateTsApi.singleSlideView().panToNodeIfOutsideViewport(e, .6);
  }, 0));
}
export const F7 = $$c0;
export const N8 = $$u1;
export const Sz = $$d2;
export const fL = $$p3;
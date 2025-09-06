import { AlE, glU, eLE, Ez5, Egt } from "../figma_app/763686";
import { fn, sH } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { BT } from "../905/618447";
import { Y5 } from "../figma_app/455680";
export function $$d2(e, t, r, a = !0) {
  let c = AlE?.getMutableActiveDocument();
  if (!c) {
    console.error("slide deck utils", "No active document");
    return null;
  }
  let u = atomStoreManager.get(BT);
  let p = u[e]?.[t - 1] || u[e - 1]?.[(u[e - 1]?.length || 0) - 1] || u[e + 1]?.[0] || u[e]?.[0] || u[0]?.[0];
  if (!glU || !eLE) return null;
  let _ = p && fn(sH(p)) ? glU.duplicateAsBlankSlide(c, p, e, t, r) : eLE.createSlideAtCoord(c, e, t, r);
  a && Y5.commit();
  setTimeout(() => {
    Ez5 && !Ez5.singleSlideView().isFocusedNodeViewEnabled() && Ez5.singleSlideView().panToNodeIfOutsideViewport(_, .6);
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
  Egt && Ez5 && (Egt.replaceSelection([e], !0), Ez5.singleSlideView().isFocusedNodeViewEnabled() ? Ez5.singleSlideView().focusNodeInFocusedNodeView(e, !0) : setTimeout(() => {
    Ez5 && !Ez5.singleSlideView().isFocusedNodeViewEnabled() && Ez5.singleSlideView().panToNodeIfOutsideViewport(e, .6);
  }, 0));
}
export const F7 = $$c0;
export const N8 = $$u1;
export const Sz = $$d2;
export const fL = $$p3;
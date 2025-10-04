import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { HandoffBindingsCpp, Fullscreen } from "../figma_app/763686";
import { trackFileEventWithStore } from "../figma_app/901889";
import { selectViewAction } from "../905/929976";
import { getSelectedView } from "../figma_app/386952";
import { FEditorType } from "../figma_app/53721";
import { n0 } from "../figma_app/32128";
import { VS } from "../1250/506456";
import { handleFullscreenViewTransition, closeDevModeComponentBrowser } from "../figma_app/379850";
export function $$m0(e, t) {
  let n = getSelectedView();
  return "fullscreen" === n.view ? {
    ...n,
    editorType: e ?? n.editorType,
    focusViewBackNavigation: void 0,
    devModeFocusId: void 0,
    showOverview: !1,
    overviewBackButtonTargetNodeId: void 0,
    ...(t ? {
      nodeId: t
    } : {})
  } : n;
}
export function $$p2(e, t) {
  let n = getSelectedView();
  return "fullscreen" === n.view ? {
    ...n,
    editorType: FEditorType.DevHandoff,
    focusViewBackNavigation: {
      toEditorType: n.editorType,
      toOverview: !0
    },
    showOverview: !1,
    devModeFocusId: e,
    ...(t ? {
      nodeId: t
    } : {})
  } : n;
}
export function $$g3() {
  let e = useDispatch();
  let t = getSelectedView();
  return useCallback(n => {
    handleFullscreenViewTransition(e, t, n);
  }, [e, t]);
}
export function $$f4() {
  let e = useDispatch();
  let t = getSelectedView();
  return useCallback(() => {
    closeDevModeComponentBrowser(e, t);
  }, [e, t]);
}
export function $$h1(e) {
  let t = $$m0(e);
  let n = useDispatch();
  let a = trackFileEventWithStore();
  let l = n0();
  let u = VS({
    pagesList: l,
    isComparingChanges: !1
  });
  return async (e, r, o) => {
    o && (await u(o));
    n(selectViewAction(t));
    let l = "unknown";
    "fullscreen" === t.view && (HandoffBindingsCpp.addToSelectionNoAnimation([r]), Fullscreen.panToNode(r, !1), l = t.editorType === FEditorType.Design ? "design_canvas" : "dev_mode_canvas");
    a(e, {
      target: l,
      nodeId: r
    });
  };
}
export const TP = $$m0;
export const TQ = $$h1;
export const VW = $$p2;
export const ZJ = $$g3;
export const bh = $$f4;
import { useCallback } from "react";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { lQ } from "../905/934246";
import { EditorPreferencesApi } from "../figma_app/740163";
import { wt, At, Je } from "../figma_app/74043";
export function $$l0({
  shouldDeferCanvasUpdateOnPanelResize: e
}) {
  let t = useAtomWithSubscription(wt);
  let r = useAtomWithSubscription(At);
  let [l, d] = useAtomValueAndSetter(Je);
  let c = useCallback(() => {
    let e = EditorPreferencesApi().renderRulers.getCopy();
    d(e);
    e && EditorPreferencesApi().renderRulers.set(!1);
  }, [d]);
  let u = useCallback(() => {
    l && EditorPreferencesApi().renderRulers.set(!0);
  }, [l]);
  return e ? {
    setRulerVisibilityOnInitialSizeChange: c,
    setRulerVisibilityOnDragEnd: u,
    shouldShowGhostRulers: (t || r) && l
  } : {
    setRulerVisibilityOnInitialSizeChange: lQ,
    setRulerVisibilityOnDragEnd: lQ,
    shouldShowGhostRulers: !1
  };
}
export const M = $$l0;
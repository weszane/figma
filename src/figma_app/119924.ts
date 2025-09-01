import { useCallback } from "react";
import { md, fp } from "../figma_app/27355";
import { lQ } from "../905/934246";
import { UK } from "../figma_app/740163";
import { wt, At, Je } from "../figma_app/74043";
export function $$l0({
  shouldDeferCanvasUpdateOnPanelResize: e
}) {
  let t = md(wt);
  let r = md(At);
  let [l, d] = fp(Je);
  let c = useCallback(() => {
    let e = UK().renderRulers.getCopy();
    d(e);
    e && UK().renderRulers.set(!1);
  }, [d]);
  let u = useCallback(() => {
    l && UK().renderRulers.set(!0);
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
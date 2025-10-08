import { useState, useEffect } from "react";
import { useLatestRef } from "../figma_app/922077";
import { Point } from "../905/736624";
import { fullscreenValue } from "../figma_app/455680";
import { useNavigateToViewport } from "../905/104740";
import { applyOffsetToViewport } from "../figma_app/62612";
export function $$d2(e) {
  let t = fullscreenValue.getViewportInfo();
  let r = e ? e.subtract(t) : new Point(t.width / 2, t.height / 2);
  let n = applyOffsetToViewport(t, r);
  return new Point(n.x, n.y);
}
export let $$c1 = 5;
export function $$u0(e, t, r) {
  let l = useLatestRef(e?.isDraggingOverCanvas);
  let d = useNavigateToViewport();
  let [c, u] = useState(null);
  useEffect(() => {
    if (!l && e?.isDraggingOverCanvas && t && r) {
      let t = function (e, t) {
        if (void 0 === e || void 0 === t) return null;
        let {
          width,
          height
        } = fullscreenValue.getViewportInfo();
        return Math.min(width / e * .5, height / t * .5);
      }(...r);
      if (null !== t) {
        let {
          zoomScale,
          offsetX,
          offsetY
        } = fullscreenValue.getViewportInfo();
        t < zoomScale && (u(new Point(...r).scale(t)), setTimeout(() => {
          d({
            centerX: offsetX,
            centerY: offsetY,
            scale: t
          })?.then(() => {
            u(null);
          });
          e.grabbedPointerPercentageOffset = new Point(.5, .5);
        }, 0));
      }
    }
  }, [e, d, r, t, l]);
  return c;
}
export const M5 = $$u0;
export const Nq = $$c1;
export const zR = $$d2;
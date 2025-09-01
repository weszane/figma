import { useState, useEffect } from "react";
import { ZC } from "../figma_app/39751";
import { Point } from "../905/736624";
import { Y5 } from "../figma_app/455680";
import { Z } from "../905/104740";
import { $$ } from "../figma_app/62612";
export function $$d2(e) {
  let t = Y5.getViewportInfo();
  let r = e ? e.subtract(t) : new Point(t.width / 2, t.height / 2);
  let n = $$(t, r);
  return new Point(n.x, n.y);
}
export let $$c1 = 5;
export function $$u0(e, t, r) {
  let l = ZC(e?.isDraggingOverCanvas);
  let d = Z();
  let [c, u] = useState(null);
  useEffect(() => {
    if (!l && e?.isDraggingOverCanvas && t && r) {
      let t = function (e, t) {
        if (void 0 === e || void 0 === t) return null;
        let {
          width,
          height
        } = Y5.getViewportInfo();
        return Math.min(width / e * .5, height / t * .5);
      }(...r);
      if (null !== t) {
        let {
          zoomScale,
          offsetX,
          offsetY
        } = Y5.getViewportInfo();
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
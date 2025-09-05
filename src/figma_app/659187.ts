import { useCallback, useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { w3z } from "../figma_app/763686";
import { sx } from "../905/449184";
import { sn } from "../905/542194";
import { ty, HD } from "../figma_app/191804";
import { DP } from "../905/640017";
import { NY } from "../figma_app/646357";
import { FZ } from "../figma_app/803787";
import { c5 } from "../figma_app/645694";
import { PW } from "../figma_app/633080";
import { jY } from "../figma_app/151869";
export function $$m1(e, t) {
  let r = function (e) {
    let t = jY();
    let r = useSelector(FZ);
    let n = useSelector(c5);
    return NY(e, t, r, n);
  }(e);
  let m = DP();
  let g = r?.containing_frame?.backgroundColor ?? "";
  r?.type === PW.STATE_GROUP && r.fill_color && (g = r.fill_color);
  return useCallback(() => {
    let r = m && ("light" === m || "dark" === m) ? m : "dark";
    if (!e) return g && !ty(g) ? HD(g) ? "dark" : "light" : r;
    sn.start("dev_mode_calculate_component_color");
    let n = t ? w3z.getApproximatePlaygroundNodeColor() : w3z.getApproximateNodeColor(e);
    let i = sn.stop("dev_mode_calculate_component_color");
    i && sx("dev_mode_calculate_component_color", {
      elapsedMs: i
    }, {
      forwardToDatadog: !0
    });
    return HD(n) ? "light" : "dark";
  }, [g, e, t, m]);
}
export function $$g2(e) {
  let t = $$m1(e);
  return $$y0(useMemo(t, [t]));
}
let f = {
  background: "#383838"
};
let E = {
  background: "#f5f5f5"
};
export function $$y0(e) {
  return "dark" === e ? f : E;
}
export const CU = $$y0;
export const IO = $$m1;
export const c6 = $$g2;
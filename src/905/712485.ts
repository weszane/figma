import { zl } from "../figma_app/27355";
import { FR } from "../figma_app/827216";
import { g } from "../905/880308";
import { Y5 } from "../figma_app/455680";
import { Vg } from "../figma_app/407414";
import { pR, Dg, _M } from "../figma_app/99772";
export function $$d0({
  source: e
}) {
  zl.set(Vg, g());
  zl.set(pR, e);
  zl.set(Dg, !1);
  Y5.triggerAction("detect-violations", {
    source: e
  });
  zl.set(_M, FR.LANDING_PAGE_WELCOME);
}
export const u = $$d0;
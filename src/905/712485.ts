import { atomStoreManager } from "../figma_app/27355";
import { FR } from "../figma_app/827216";
import { g } from "../905/880308";
import { Y5 } from "../figma_app/455680";
import { Vg } from "../figma_app/407414";
import { pR, Dg, _M } from "../figma_app/99772";
export function $$d0({
  source: e
}) {
  atomStoreManager.set(Vg, g());
  atomStoreManager.set(pR, e);
  atomStoreManager.set(Dg, !1);
  Y5.triggerAction("detect-violations", {
    source: e
  });
  atomStoreManager.set(_M, FR.LANDING_PAGE_WELCOME);
}
export const u = $$d0;
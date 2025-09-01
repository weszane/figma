import { getFeatureFlags } from "../905/601108";
import { x } from "../905/868466";
import { L } from "../905/453756";
import { mI } from "../figma_app/751648";
export function $$$$o0() {
  let e = x() ?? 0;
  let t = L();
  let i = mI();
  return Math.max(e, getFeatureFlags().figjam_quick_actions_v2 && !t && i ? Math.min(i, 500) : 0, 396);
}
export const o = $$$$o0;
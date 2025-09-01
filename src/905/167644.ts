import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { Jt } from "../905/509613";
import { qM, qz } from "../figma_app/297822";
export function $$o0(e, t, i, o, l) {
  getFeatureFlags().sprig_uses_ai_collection && e("track", "uses_ai_collection", {
    action: i.action,
    product_type: i.product_type,
    status: o,
    reason: l,
    eligibility_seconds: zl.get(Jt)
  });
  let d = qM(t);
  getFeatureFlags().sprig_num_of_ai_actions && d && e("setAttribute", "num_of_ai_actions_used", zl.get(qz).size);
}
export const k = $$o0;
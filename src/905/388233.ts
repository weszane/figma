import { I7 } from "../figma_app/594947";
import { FPlanNameType } from "../figma_app/191312";
import { zQ } from "../figma_app/465071";
export function $$s0(e) {
  let {
    getConfig
  } = I7("exp_fc_onboarding_pro");
  let {
    getConfig: _getConfig
  } = I7("exp_fc_onboarding_org");
  return !(!e || [FPlanNameType.STARTER, FPlanNameType.STUDENT].includes(e)) && !!(zQ({
    tier: e
  }) ? _getConfig : getConfig)().getValue("enabled", !1);
}
export const b = $$s0;
import { selectExperimentConfigHook } from "../figma_app/594947";
import { FPlanNameType } from "../figma_app/191312";
import { isOrgOrEnterprisePlan } from "../figma_app/465071";
export function $$s0(e) {
  let {
    getConfig
  } = selectExperimentConfigHook("exp_fc_onboarding_pro");
  let {
    getConfig: _getConfig
  } = selectExperimentConfigHook("exp_fc_onboarding_org");
  return !(!e || [FPlanNameType.STARTER, FPlanNameType.STUDENT].includes(e)) && !!(isOrgOrEnterprisePlan({
    tier: e
  }) ? _getConfig : getConfig)().getValue("enabled", !1);
}
export const b = $$s0;
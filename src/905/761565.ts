import { getFeatureFlags } from "../905/601108";
import { FPlanNameType } from "../figma_app/191312";
import { useCurrentPublicPlan } from "../figma_app/465071";
import { isSitesFeatureEnabled } from "../905/561485";
export function $$o0(e) {
  return !!isSitesFeatureEnabled() && (e === FPlanNameType.STARTER || (e === FPlanNameType.STUDENT ? !!getFeatureFlags().sts_student_enabled : e === FPlanNameType.PRO || e === FPlanNameType.ORG || e === FPlanNameType.ENTERPRISE));
}
export function $$l1(e) {
  let t = useCurrentPublicPlan("useShouldShowSitesInPlan").unwrapOr(null);
  return $$o0(e ?? t?.tier);
}
export const V = $$o0;
export const s = $$l1;
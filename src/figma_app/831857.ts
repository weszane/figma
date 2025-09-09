import { getFeatureFlags } from "../905/601108";
import { FProductAccessType, FPlanNameType, FPermissionDenialReason } from "../figma_app/191312";
import { useCurrentPlanUser, useCurrentPrivilegedPlan } from "../figma_app/465071";
import { isFigmakeSitesEnabled } from "../figma_app/552876";
export function $$o0() {
  let e = useCurrentPlanUser("useShouldShowFigmakeForPlanUser_UNSAFE");
  let t = e.data?.seatTypeLicenseTypes;
  let r = useCurrentPrivilegedPlan("useShouldShowFigmakeForPlanUser_UNSAFE").unwrapOr(null);
  return !!isFigmakeSitesEnabled() && (!!(t?.includes(FProductAccessType.DESIGN) || getFeatureFlags().product_trials_lg && getFeatureFlags().product_trials_figmake && r?.activeTrialLicenseTypes?.includes(FProductAccessType.FIGMAKE)) || r?.tier === FPlanNameType.STARTER && !!getFeatureFlags().bake_starter_limit || !!getFeatureFlags().bake_monetization_plan);
}
export function $$l1(e) {
  return !!isFigmakeSitesEnabled() && !function (e) {
    if (!e) return !0;
    let t = function () {
      let e = new Set([FPermissionDenialReason.FOLDER_CREATE_FIGMAKE_FILE_DENY_K12_ORG, FPermissionDenialReason.FOLDER_CREATE_FIGMAKE_FILE_DENY_STARTER_TEAM, FPermissionDenialReason.FOLDER_CREATE_FIGMAKE_FILE_DENY_STUDENT_TEAM, FPermissionDenialReason.FOLDER_CREATE_FIGMAKE_FILE_DENY_PLAN_NOT_ENABLED]);
      getFeatureFlags().bake_monetization_plan || e.add(FPermissionDenialReason.FOLDER_CREATE_FILE_DENY_UNLICENSED_USERS);
      return e;
    }();
    return e.publicDenyReasons.some(e => t.has(e));
  }(e);
}
export const e = $$o0;
export const k = $$l1;
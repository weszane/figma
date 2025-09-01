import { getFeatureFlags } from "../905/601108";
import { FProductAccessType, FPlanNameType, FPermissionDenialReason } from "../figma_app/191312";
import { D6, T5 } from "../figma_app/465071";
import { aI } from "../figma_app/552876";
export function $$o0() {
  let e = D6("useShouldShowFigmakeForPlanUser_UNSAFE");
  let t = e.data?.seatTypeLicenseTypes;
  let r = T5("useShouldShowFigmakeForPlanUser_UNSAFE").unwrapOr(null);
  return !!aI() && (!!(t?.includes(FProductAccessType.DESIGN) || getFeatureFlags().product_trials_lg && getFeatureFlags().product_trials_figmake && r?.activeTrialLicenseTypes?.includes(FProductAccessType.FIGMAKE)) || r?.tier === FPlanNameType.STARTER && !!getFeatureFlags().bake_starter_limit || !!getFeatureFlags().bake_monetization_plan);
}
export function $$l1(e) {
  return !!aI() && !function (e) {
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
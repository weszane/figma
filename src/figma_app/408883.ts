import { getFeatureFlags } from "../905/601108";
import { Mq } from "../figma_app/991591";
import { selectCurrentFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { FPlanNameType, FProductAccessType } from "../figma_app/191312";
import { useTeamPlanPublicInfo } from "../figma_app/465071";
import { useEffect, useCallback } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { reportError } from "../905/11";
import { DeepLinkType } from "../905/15667";
import { wH } from "../figma_app/680166";
import { q } from "../905/202542";
import { JT } from "../figma_app/632248";
import { Ig } from "../figma_app/350332";
import { uQ } from "../figma_app/251115";
import { useIsSelectedFigmakeFullscreen } from "../figma_app/552876";
import { e as _$$e2 } from "../figma_app/831857";
import { useIsFullscreenSitesView } from "../905/561485";
var $$T0 = (e => (e.DISABLE_WITHOUT_TOAST = "disable_without_toast", e.UNAVAILABLE_ON_EDU_PLANS = "unavailable_on_edu_plans", e.MAKE_UNAVAILABLE_ON_PLAN = "make_unavailable_on_plan", e.MAKE_UNAVAILABLE_ON_SEAT = "make_unavailable_on_seat", e.INTERIM_VIEW_ONLY_COMING_SOON = "interim_view_only_coming_soon", e.VIEW_ONLY_ASK_TO_EDIT = "view_only_ask_to_edit", e.METER_LIMIT = "meter_limit", e.METER_LIMIT_UPGRADE_PLAN = "meter_limit_upgrade_plan", e.METER_LIMIT_UPGRADE_SEAT = "meter_limit_upgrade_seat", e.PLAN_AI_DISABLED = "plan_ai_disabled", e.DISABLE_CATCH_ALL = "disable_catch_all", e))($$T0 || {});
export function $$I2() {
  let e = selectCurrentFile();
  return e?.canView && !e.canEdit;
}
export function $$S1() {
  let e = selectCurrentUser();
  let t = selectCurrentFile();
  let r = $$I2();
  let T = useTeamPlanPublicInfo();
  let S = T.unwrapOr(null)?.tier || null;
  let v = useIsSelectedFigmakeFullscreen();
  let A = useIsFullscreenSitesView();
  let x = _$$e2();
  let N = v ? JT.FIGMAKE : JT.LIVING_DESIGNS;
  let {
    withinMeter
  } = Ig(N);
  let w = uQ();
  let O = Mq();
  let R = getFeatureFlags().make_ai_allowlist_for_atlassian;
  let L = S === FPlanNameType.STARTER && v;
  let P = S === FPlanNameType.STARTER && A;
  let {
    getIsUpgradeHandlerLoading,
    getUpgradeEligibility
  } = function (e) {
    let {
      getUpgradeEligibility: _getUpgradeEligibility,
      getIsUpgradeHandlerLoading: _getIsUpgradeHandlerLoading
    } = wH({
      entryPoint: DeepLinkType.CODE_CHAT_LIMIT,
      folderId: null
    });
    let n = function (e) {
      switch (e) {
        case JT.FIGMAKE:
          return FProductAccessType.FIGMAKE;
        case JT.LIVING_DESIGNS:
          return FProductAccessType.SITES;
        default:
          return null;
      }
    }(e);
    useEffect(() => {
      n || reportError(_$$e.MONETIZATION_EXPANSION, Error(`Upgrade license type not found for AI Action '${e}'`));
    }, [e, n]);
    return {
      getIsUpgradeHandlerLoading: _getIsUpgradeHandlerLoading,
      getUpgradeEligibility: useCallback(() => n ? _getUpgradeEligibility(n) : q.CANNOT_UPGRADE, [_getUpgradeEligibility, n])
    };
  }(N);
  let M = v && !getIsUpgradeHandlerLoading() && getUpgradeEligibility() === q.CAN_UPGRADE;
  return t && S && e ? S === FPlanNameType.STUDENT ? "unavailable_on_edu_plans" : L && !getFeatureFlags().bake_starter_limit ? getFeatureFlags().bake_starter_rollout ? "interim_view_only_coming_soon" : "make_unavailable_on_plan" : O || R ? S !== FPlanNameType.STARTER && v && !x ? "interim_view_only_coming_soon" : r ? "view_only_ask_to_edit" : w ? withinMeter ? null : P && getFeatureFlags().sts_starter_enabled || L && getFeatureFlags().bake_starter_limit ? "meter_limit_upgrade_plan" : M && getFeatureFlags().bake_monetization_plan ? "meter_limit_upgrade_seat" : "meter_limit" : v ? "make_unavailable_on_plan" : "disable_catch_all" : "plan_ai_disabled" : "disable_without_toast";
}
export function $$v3() {
  let e = $$S1();
  return !!($$I2() || e);
}
export const ee = $$T0;
export const Tk = $$S1;
export const _H = $$I2;
export const ry = $$v3;
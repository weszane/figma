import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useAtomWithSubscription } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { logError } from "../905/714362";
import { getI18nString } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { consumptionPaywallUtils } from "../905/224";
import { t as _$$t2 } from "../figma_app/579169";
import { openFileTeamAtom } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { UpsellModalType } from "../905/165519";
import { FeatureFlag } from "../905/652992";
import { fileActionEnum } from "../figma_app/630077";
import { Y } from "../905/513161";
import { ConsumptionPaywallModalPlansPricing } from "../905/739964";
import { SubscriptionTier, currentTierAtom, getMaxVariables, hasExtendedCollections } from "../905/850476";
function b(e) {
  switch (e) {
    case SubscriptionTier.STARTER:
      return consumptionPaywallUtils.Plan.STARTER;
    case SubscriptionTier.PRO:
      return consumptionPaywallUtils.Plan.PRO;
    case SubscriptionTier.ORG:
      return consumptionPaywallUtils.Plan.ORG;
    case SubscriptionTier.ENTERPRISE:
      return consumptionPaywallUtils.Plan.ENTERPRISE;
  }
}
export function $$v1(e) {
  let t = useAtomWithSubscription(currentTierAtom);
  let i = getMaxVariables(t);
  let s = function (e, t) {
    let i = useDispatch();
    let s = useAtomWithSubscription(openFileTeamAtom);
    return useCallback(() => {
      if (e === SubscriptionTier.ENTERPRISE) {
        logError("designSystems", "attempting to show modes upsell modal to enterprise user");
        return;
      }
      let n = {
        [SubscriptionTier.STARTER]: SubscriptionTier.PRO,
        [SubscriptionTier.ORG]: SubscriptionTier.ENTERPRISE,
        [SubscriptionTier.PRO]: SubscriptionTier.ENTERPRISE
      }[e];
      i(showModalHandler({
        type: ConsumptionPaywallModalPlansPricing,
        data: {
          team: s,
          resource: FeatureFlag.VARIABLES_MODES,
          action: "authoring" === t ? fileActionEnum.CREATE_MORE_VARIABLE_MODES : fileActionEnum.PUBLISH_MORE_VARIABLE_MODES,
          editorType: FFileType.DESIGN,
          currentPlan: b(e),
          upsellPlan: b(n),
          upsellSource: UpsellModalType.ADD_VARIABLE_MODES
        }
      }));
    }, [i, s, e, t]);
  }(t, e);
  let c = function () {
    let e = useDispatch();
    return useCallback(() => {
      e(showModalHandler({
        type: Y,
        data: {
          titleText: getI18nString("upsell.move_file_modes.upsell_title"),
          bodyText: getI18nString("upsell.move_file_modes.upsell_subtitle")
        }
      }));
    }, [e]);
  }();
  let v = useAtomWithSubscription(_$$t2).data ?? !1;
  return {
    modeLimit: i,
    canShowCTA: useCallback(e => t !== SubscriptionTier.ENTERPRISE && e < getMaxVariables(SubscriptionTier.ENTERPRISE), [t]),
    showCTA: t !== SubscriptionTier.STARTER || v || "authoring" !== e ? s : c,
    allowExtendedSets: hasExtendedCollections()
  };
}
export function $$I0() {
  let e = useAtomWithSubscription(currentTierAtom);
  let t = useAtomWithSubscription(_$$t2).data ?? !1;
  let i = function () {
    let e = useDispatch();
    return useCallback(() => {
      e(showModalHandler({
        type: Y,
        data: {
          titleText: getI18nString("upsell.move_file_prototyping.upsell_title"),
          bodyText: getI18nString("upsell.move_file_prototyping.upsell_subtitle")
        }
      }));
      trackEventAnalytics("prototype.move_to_folder_modal_shown");
    }, [e]);
  }();
  return {
    canUseAdvancedPrototyping: e !== SubscriptionTier.STARTER,
    canMoveFileToProPlus: !t,
    showMoveToProTeam: i
  };
}
export const R = $$I0;
export const z = $$v1;
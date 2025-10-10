import { useMemo } from "react";
import { getFeatureFlags } from "../905/601108";
import { createRemovableAtomFamily, atom, useAtomWithSubscription } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { Xf } from "../figma_app/153916";
import { dayjs } from "../905/920142";
import { getResourceDataOrFallback, createLoadingState, createLoadedState } from "../905/723791";
import { isDateBeforeAnalyzeDataFlowV2Until } from "../figma_app/307841";
import { useSeatBillingTermsExperiment } from "../figma_app/297957";
import { n as _$$n } from "../1577/959155";
import { FBillingModelType } from "../figma_app/191312";
import { OrgProductTermsEligibleInfo } from "../figma_app/43951";
let m = createRemovableAtomFamily(({
  orgId: e
}) => atom(l => e ? l(OrgProductTermsEligibleInfo.Query({
  orgId: e
})).transform(({
  org: e
}) => {
  let l = !!getResourceDataOrFallback(e?.isSalesAssistedPlanProperty)?.value;
  let i = !!getResourceDataOrFallback(e?.subscriptionShouldNotAutoRenewPlanProperty);
  return {
    isSalesAssisted: l,
    noTosAcceptanceKey: getResourceDataOrFallback(e?.plan?.termsOfServiceAcceptanceByTermsKey)?.termsKey !== FBillingModelType.SEATS_MODEL_BILLING_2025,
    shouldNotAutoRenew: i
  };
}) : resourceUtils.disabled()));
export function $$f0(e) {
  let l = e?.id ?? null;
  let i = !useSeatBillingTermsExperiment();
  let {
    warningStatus,
    renewalDate,
    warningType
  } = function (e) {
    let l = Xf(e);
    let i = l.data?.analyze_data_contract_v2_start;
    let t = i ? dayjs(i) : null;
    let a = dayjs();
    function r(e, l, i) {
      return {
        warningType: e,
        renewalDate: l,
        warningStatus: i
      };
    }
    return t && a.isBefore(t) ? r(30 >= t.diff(a, "day") ? "error" : 90 >= t.diff(a, "day") ? "warning" : null, t, "loaded") : r(null, t, l.status);
  }(l);
  let f = !!getFeatureFlags().order_form_billing_terms_banner;
  let g = _$$n();
  let v = useAtomWithSubscription(useMemo(() => m({
    orgId: l
  }), [l]));
  let b = getResourceDataOrFallback(v.data);
  let x = function ({
    orgCreatedAt: e,
    isSalesAssisted: l,
    noTosAcceptanceKey: i,
    shouldNotAutoRenew: t,
    onExclusionList: a,
    isAdminView: r,
    isTermsOfServiceUpdateOn: s
  }) {
    return !!(e && isDateBeforeAnalyzeDataFlowV2Until({
      date: new Date(e)
    }) && l && i && (t || a) && (r || s));
  }({
    orgCreatedAt: e?.created_at,
    isSalesAssisted: !!b?.isSalesAssisted,
    noTosAcceptanceKey: !!b?.noTosAcceptanceKey,
    shouldNotAutoRenew: !!b?.shouldNotAutoRenew,
    onExclusionList: i,
    isAdminView: g,
    isTermsOfServiceUpdateOn: function (e) {
      let l = !!getFeatureFlags().terms_of_service_may_2025_update;
      let i = dayjs();
      let t = !!e && i.isBefore(e) && 30 >= e.diff(i, "day");
      return l && t;
    }(renewalDate)
  });
  let y = useMemo(() => "loaded" === v.status && !!x, [v.status, x]);
  return "loading" === v.status || "loading" === warningStatus ? createLoadingState() : createLoadedState({
    isEligible: f && y,
    renewalDate,
    warningType
  });
}
export const Az = $$f0;
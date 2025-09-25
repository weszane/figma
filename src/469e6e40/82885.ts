import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { ServiceCategories } from "../905/165054";
import { BannerInset } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { getFeatureFlags } from "../905/601108";
import { Xf } from "../figma_app/153916";
import { dayjs } from "../905/920142";
import { getInitialOptions } from "../figma_app/169182";
import { reportError } from "../905/11";
import { pW } from "../905/160095";
import { getI18nString, renderI18nText } from "../905/303541";
import { isProrationBillingEnabledForCurrentPlan } from "../figma_app/618031";
import { TrackingProvider } from "../figma_app/831799";
import { G6, Yh, wd, j2, hs } from "../figma_app/84966";
import { FOrganizationLevelType } from "../figma_app/191312";
if (443 == require.j) {}
if (443 == require.j) {}
function v({
  nextContractStart: e,
  teamName: t,
  exceptionInfo: a,
  planType: s,
  canReviewRenewal: d,
  ignoreErrorLog: g = !1
}) {
  let x = getFeatureFlags().team_admin_billing_cost_banner;
  let b = dayjs(e);
  if (!x) return null;
  if (!e || !b.isValid()) {
    g || reportError(ServiceCategories.MONETIZATION_UPGRADES, Error(`Contract Start have invalid date: ${e}`), {
      extra: a
    });
    return null;
  }
  let v = getInitialOptions().analyze_data_flow_v2_until;
  let f = v ? dayjs(v) : null;
  let j = getFeatureFlags().contract_start_banner_renewal_copy && f && f.add(30, "days").isAfter(b) && d;
  let y = j ? getI18nString("admin_settings.contract_start_banner.renewal_close_to_ga.title", {
    planName: t,
    nextContractStartDate: b.toDate()
  }) : getI18nString("admin_settings.contract_start_banner.banner_title_new");
  let w = j ? getI18nString(`admin_settings.contract_start_banner.renewal_close_to_ga.subtitle.${s}`, {
    billingRemodelGaDate: f.toDate()
  }) : getI18nString("admin_settings.contract_start_banner.banner_subtitle", {
    planName: t,
    nextContractStartDate: b.toDate()
  });
  return jsx(TrackingProvider, {
    name: "contract_start_banner",
    children: jsxs(BannerInset, {
      "data-testid": "contract-start-banner",
      variant: "brand",
      children: [jsx(BannerMessage, {
        title: y,
        children: w
      }), jsx(pW, {
        href: "https://help.figma.com/hc/articles/27468498501527",
        variant: "secondary",
        trusted: !0,
        newTab: !0,
        children: renderI18nText("general.learn_more")
      })]
    })
  });
}
export function $$f0({
  team: e,
  billingSummary: t
}) {
  let a = G6(e.id).unwrapOr({
    show: !1
  });
  let i = isProrationBillingEnabledForCurrentPlan();
  let r = useMemo(() => !!Yh(t), [t]);
  let l = useMemo(() => wd(t), [t]);
  return a.show || i ? null : jsx(v, {
    nextContractStart: t.analyze_data_contract_v2_start,
    teamName: e.name,
    exceptionInfo: {
      teamId: e.id
    },
    planType: FOrganizationLevelType.TEAM,
    canReviewRenewal: r && j2({
      shouldAutoRenew: !0,
      onTrial: l,
      hasNonAdjustableRenewalSeats: !1
    }),
    ignoreErrorLog: !!e.grace_period_type
  });
}
export function $$j1({
  org: e
}) {
  let t = Xf(e.id);
  let a = hs(e);
  let s = isProrationBillingEnabledForCurrentPlan();
  return a.data?.show || s || t?.data?.scheduled_cancellation?.cancel_at_period_end ? null : jsx(v, {
    teamName: e.name,
    nextContractStart: t.data?.analyze_data_contract_v2_start,
    exceptionInfo: {
      orgId: e.id
    },
    planType: FOrganizationLevelType.ORG,
    canReviewRenewal: j2({
      shouldAutoRenew: e.should_auto_renew,
      onTrial: !1,
      hasNonAdjustableRenewalSeats: !!t?.data?.non_adjustable_renewal_seats
    }),
    ignoreErrorLog: !t.data?.invoices.length
  });
}
export const E = $$f0;
export const L = $$j1;
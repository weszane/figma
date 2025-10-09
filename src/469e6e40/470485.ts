import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { T } from "../7021/675372";
import l from "classnames";
import { Wi } from "../figma_app/162641";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { WithTrackedPopupButtonPrimitive } from "../figma_app/617427";
import { TrackedLinkPrimitive } from "../905/160095";
import { getI18nString, renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { startOrgUpgradeFlowThunk } from "../figma_app/482142";
import { useSeatManagementWidgetExperiment } from "../figma_app/297957";
import { UpgradeAction } from "../905/370443";
import { FBillingPeriodType, FPlanNameType, FOrganizationLevelType } from "../figma_app/191312";
import { useTeamPlanFeatures, useTeamPlanUser } from "../figma_app/465071";
import { UpsellModalType } from "../905/165519";
var o = l;
export function $$j0(e) {
  let t;
  let a = useDispatch<AppDispatch>();
  let l = useTeamPlanFeatures().unwrapOr(null);
  let j = useTeamPlanUser().unwrapOr(null);
  let y = useSeatManagementWidgetExperiment();
  let w = useSelector(e => e.teamBilling.summary.annual_subscription ? FBillingPeriodType.YEAR : e.teamBilling.summary.monthly_subscription ? FBillingPeriodType.MONTH : null);
  let k = useCallback(() => {
    a(startOrgUpgradeFlowThunk({
      openInNewTab: !0,
      upsellSource: UpsellModalType.BILLING_PLAN_TIER
    }));
  }, [a]);
  if (!l || l?.tier === FPlanNameType.STARTER || l?.tier === FPlanNameType.STUDENT || y()) return null;
  let E = o()(cssBuilderInstance.colorTextBrand.cursorPointer.$, "billing_plan_tier--focusVisibleOutline--rv9Xk");
  let C = {
    userId: j?.userId,
    orgId: l.type === FOrganizationLevelType.ORG ? l.key.parentId : void 0,
    teamId: l.type === FOrganizationLevelType.TEAM ? l.key.parentId : void 0,
    planTier: l?.tier
  };
  let S = jsx(TrackedLinkPrimitive, {
    href: "https://help.figma.com/hc/articles/360040328273",
    trusted: !0,
    newTab: !0,
    className: E,
    trackingProperties: {
      ...C,
      trackingDescriptor: UpgradeAction.LEARN_MORE
    },
    children: getI18nString("admin_settings.billing_plan_tier.learn_more_label")
  });
  let N = {
    ...C,
    trackingDescriptor: UpgradeAction.UPGRADE
  };
  l.tier === FPlanNameType.PRO ? t = jsx(WithTrackedPopupButtonPrimitive, {
    onClick: k,
    className: E,
    trackingProperties: N,
    children: getI18nString("admin_settings.billing_plan_tier.upgrade_label")
  }) : l.tier === FPlanNameType.ORG ? t = jsx(TrackedLinkPrimitive, {
    href: "https://www.figma.com/enterprise/",
    trusted: !0,
    newTab: !0,
    className: E,
    trackingProperties: N,
    children: getI18nString("admin_settings.billing_plan_tier.upgrade_label")
  }) : (l.tier, t = null);
  let I = jsx("span", {
    className: cssBuilderInstance.textBodyMediumStrong.$,
    children: l.tier === FPlanNameType.PRO && w ? getI18nString(`admin_settings.billing_plan_tier.${l.tier}.${w}`) : getI18nString(`admin_settings.billing_plan_tier.${l.tier}`)
  });
  return e.isLoading ? jsx(Wi, {
    dataTestId: "billing-plan-tier-loading",
    style: styleBuilderInstance.pl36.h16.my4.add({
      width: "16rem"
    }).$
  }) : jsxs("div", {
    className: cssBuilderInstance.textBodyMedium.colorTextSecondary.flex.pl36.$,
    children: [jsx("div", {
      className: cssBuilderInstance.flex.$,
      "aria-hidden": !0,
      children: jsx(T, {})
    }), jsx("div", {
      className: "billing_plan_tier--copy--4qKxA",
      children: t ? renderI18nText("admin_settings.billing_plan_tier.copy", {
        planTier: I,
        learnMore: S,
        upgrade: t
      }) : renderI18nText("admin_settings.billing_plan_tier.copy_no_upgrade", {
        planTier: I,
        learnMore: S
      })
    })]
  });
}
export const p = $$j0;

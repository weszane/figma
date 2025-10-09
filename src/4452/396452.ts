import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { props } from "@stylexjs/stylex";
import { Xf } from "../figma_app/153916";
import { LoadingSpinner } from "../figma_app/858013";
import { WithTrackedButton } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { qf } from "../4452/780544";
import { getRumLoggingConfig } from "../905/16237";
import { S as _$$S, d as _$$d } from "../4452/304860";
import { TeamOrg } from "../figma_app/845611";
import { selectViewAction } from "../905/929976";
import { UpgradeAction } from "../905/370443";
import { getSelectedViewType } from "../figma_app/386952";
import { FVisibilityType } from "../figma_app/191312";
import { RenewalTermEnum } from "../905/712921";
import { DashboardSection } from "../figma_app/650409";
if (443 == require.j) {}
if (443 == require.j) {}
export function $$b2() {
  let e = useDispatch<AppDispatch>();
  let t = getSelectedViewType();
  return "orgAdminSettings" !== t && "seatRequests" !== t ? jsx(Fragment, {}) : jsx(WithTrackedButton, {
    variant: "secondary",
    onClick: () => {
      e(selectViewAction({
        view: "orgAdminSettings",
        orgAdminSettingsViewTab: DashboardSection.ACTIVITY,
        activityTabInitialEventOptionId: "activity_log.filter.upgrade_requests_and_activity"
      }));
    },
    htmlAttributes: {
      "data-testid": "admin-dashboard-view-history-button"
    },
    trackingProperties: {
      trackingDescriptor: UpgradeAction.VIEW_HISTORY
    },
    children: getI18nString("admin_dashboard.requests.view_history")
  });
}
export function $$y0({
  planId: e,
  planType: t,
  configuredUpgradeRequestSetting: a
}) {
  return t === TeamOrg.TEAM ? jsx(j, {}) : jsx(I, {
    orgId: e,
    configuredUpgradeRequestSetting: a
  });
}
function j() {
  let e = useDispatch<AppDispatch>();
  let t = useSelector(e => e.teamBilling);
  let a = t.summary.currency;
  let r = t.summary.monthly_subscription ? RenewalTermEnum.MONTH : RenewalTermEnum.YEAR;
  let i = getRumLoggingConfig();
  return jsx(WithTrackedButton, {
    htmlAttributes: {
      "data-testid": "admin-dashboard-approval-settings-button",
      "data-onboarding-key": qf
    },
    onClick: _$$S({
      dispatch: e,
      currency: a,
      renewalTerm: r
    }),
    variant: "secondary",
    trackingProperties: {
      trackingDescriptor: UpgradeAction.APPROVAL_SETTINGS
    },
    trackingOptions: i,
    children: renderI18nText("admin_dashboard.requests.approval_settings")
  });
}
function I({
  orgId: e,
  configuredUpgradeRequestSetting: t
}) {
  let a = useDispatch<AppDispatch>();
  let r = Xf(e);
  let l = r.data?.currency;
  let _ = t === FVisibilityType.ALL_USERS ? _$$d({
    dispatch: a
  }) : _$$S({
    dispatch: a,
    currency: l,
    renewalTerm: RenewalTermEnum.YEAR,
    isCurfEnabledForMembers: t === FVisibilityType.MEMBERS
  });
  let p = getRumLoggingConfig();
  return jsx(WithTrackedButton, {
    htmlAttributes: {
      "data-testid": "admin-dashboard-approval-settings-button",
      "data-onboarding-key": qf
    },
    onClick: _,
    variant: "secondary",
    trackingProperties: {
      trackingDescriptor: UpgradeAction.APPROVAL_SETTINGS
    },
    trackingOptions: p,
    children: renderI18nText("admin_dashboard.requests.approval_settings")
  });
}
export function $$E1({
  text: e,
  showSpinner: t
}) {
  return jsxs("div", {
    className: "x78zum5 x6s0dn4 xl56j7k",
    children: [jsx("div", {
      ...props(S.text, t && S.invisibleText),
      children: e
    }), t && jsx(LoadingSpinner, {
      shouldMatchTextColor: !0,
      size: "small",
      className: "x10l6tqk"
    })]
  });
}
let S = {
  text: {
    margin: "x1bpp3o7",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    $$css: !0
  },
  invisibleText: {
    visibility: "xlshs6z",
    $$css: !0
  }
};
export const Rj = $$y0;
export const Zu = $$E1;
export const eS = $$b2;

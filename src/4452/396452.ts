import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from "../vendor/514228";
import { xk } from "@stylexjs/stylex";
import { Xf } from "../figma_app/153916";
import { kt } from "../figma_app/858013";
import { $z } from "../figma_app/617427";
import { t as _$$t, tx } from "../905/303541";
import { qf } from "../4452/780544";
import { u as _$$u } from "../905/16237";
import { S as _$$S, d as _$$d } from "../4452/304860";
import { ps } from "../figma_app/845611";
import { sf } from "../905/929976";
import { c as _$$c } from "../905/370443";
import { z3 } from "../figma_app/386952";
import { FVisibilityType } from "../figma_app/191312";
import { IX } from "../905/712921";
import { J7 } from "../figma_app/650409";
if (443 == require.j) {}
if (443 == require.j) {}
export function $$b2() {
  let e = useDispatch();
  let t = z3();
  return "orgAdminSettings" !== t && "seatRequests" !== t ? jsx(Fragment, {}) : jsx($z, {
    variant: "secondary",
    onClick: () => {
      e(sf({
        view: "orgAdminSettings",
        orgAdminSettingsViewTab: J7.ACTIVITY,
        activityTabInitialEventOptionId: "activity_log.filter.upgrade_requests_and_activity"
      }));
    },
    htmlAttributes: {
      "data-testid": "admin-dashboard-view-history-button"
    },
    trackingProperties: {
      trackingDescriptor: _$$c.VIEW_HISTORY
    },
    children: _$$t("admin_dashboard.requests.view_history")
  });
}
export function $$y0({
  planId: e,
  planType: t,
  configuredUpgradeRequestSetting: a
}) {
  return t === ps.TEAM ? jsx(j, {}) : jsx(I, {
    orgId: e,
    configuredUpgradeRequestSetting: a
  });
}
function j() {
  let e = useDispatch();
  let t = useSelector(e => e.teamBilling);
  let a = t.summary.currency;
  let r = t.summary.monthly_subscription ? IX.MONTH : IX.YEAR;
  let i = _$$u();
  return jsx($z, {
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
      trackingDescriptor: _$$c.APPROVAL_SETTINGS
    },
    trackingOptions: i,
    children: tx("admin_dashboard.requests.approval_settings")
  });
}
function I({
  orgId: e,
  configuredUpgradeRequestSetting: t
}) {
  let a = useDispatch();
  let r = Xf(e);
  let l = r.data?.currency;
  let _ = t === FVisibilityType.ALL_USERS ? _$$d({
    dispatch: a
  }) : _$$S({
    dispatch: a,
    currency: l,
    renewalTerm: IX.YEAR,
    isCurfEnabledForMembers: t === FVisibilityType.MEMBERS
  });
  let p = _$$u();
  return jsx($z, {
    htmlAttributes: {
      "data-testid": "admin-dashboard-approval-settings-button",
      "data-onboarding-key": qf
    },
    onClick: _,
    variant: "secondary",
    trackingProperties: {
      trackingDescriptor: _$$c.APPROVAL_SETTINGS
    },
    trackingOptions: p,
    children: tx("admin_dashboard.requests.approval_settings")
  });
}
export function $$E1({
  text: e,
  showSpinner: t
}) {
  return jsxs("div", {
    className: "x78zum5 x6s0dn4 xl56j7k",
    children: [jsx("div", {
      ...xk(S.text, t && S.invisibleText),
      children: e
    }), t && jsx(kt, {
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
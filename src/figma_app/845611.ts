import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { H } from "../905/507464";
import { j } from "../905/206476";
import { P } from "../905/697522";
import { Rs } from "../figma_app/288654";
import { tT } from "../905/723791";
import { I7 } from "../figma_app/594947";
import { kt } from "../figma_app/858013";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { Y } from "../905/830372";
import { Te } from "../figma_app/765689";
import { FuG } from "../figma_app/43951";
let $$f7 = "UPGRADE_REQUESTS_PRODUCT_DROPDOWN";
let $$E4 = "UPGRADE_REQUESTS_BILLING_GROUP_DROPDOWN";
let $$y10 = "UPGRADE_REQUESTS_SORT_DROPDOWN";
let $$b1 = "UPGRADE_REQUESTS_USER_TYPE_DROPDOWN";
let $$T12 = "request";
let $$I2 = "\u2013";
let $$S3 = 50;
var $$v15 = (e => (e.TEAM = "Team", e.ORG = "Org", e))($$v15 || {});
var $$A5 = (e => (e.ALL_UNASSIGNED_REQUESTS = "all_unassigned_requests", e.ALL_MANAGED_REQUESTS = "all_managed_requests", e.ALL_ORG_REQUESTS = "all_org_requests", e.INDIVIDUAL_BILLING_GROUP_REQUESTS = "individual_billing_group_requests", e))($$A5 || {});
var $$x16 = (e => (e.MEMBERS = "members", e.GUESTS = "guests", e))($$x16 || {});
var $$N6 = (e => (e.APPROVE_ALL = "APPROVE_ALL", e.BULK_SELECT = "BULK_SELECT", e.SINGLE = "SINGLE", e.EMAIL = "EMAIL", e.DEEPLINK = "DEEPLINK", e))($$N6 || {});
let $$C17 = "admin_requests_dashboard";
let $$w14 = "billing_group_admin_requests_dashboard";
export var $$O11 = (e => (e.NEWEST_FIRST = "NEWEST_FIRST", e.OLDEST_FIRST = "OLDEST_FIRST", e))($$O11 || {});
let $$R13 = {
  NEWEST_FIRST: () => getI18nString("admin_dashboard.requests.sort.newest_first"),
  OLDEST_FIRST: () => getI18nString("admin_dashboard.requests.sort.oldest_first")
};
let L = {
  [Te.DESIGN]: {
    name: () => getI18nString("admin_dashboard.requests.design_seat"),
    icon: jsx(H, {})
  },
  [Te.WHITEBOARD]: {
    name: () => getI18nString("admin_dashboard.requests.figjam_seat"),
    icon: jsx(j, {})
  },
  [Te.DEV_MODE]: {
    name: () => getI18nString("admin_dashboard.requests.devmode_seat"),
    icon: jsx(P, {})
  }
};
export function $$P18({
  licenseType: e
}) {
  let t = L[e];
  return jsxs(Y, {
    spacing: 8,
    children: [t.icon, jsx("div", {
      children: t.name()
    })]
  });
}
export function $$D0(e) {
  return e.trim().slice(0, $$S3);
}
export function $$k9({
  text: e,
  showSpinner: t
}) {
  return jsxs("div", {
    className: _$$s.flex.itemsCenter.justifyCenter.$,
    children: [jsx("span", {
      className: t ? _$$s.invisible.$ : "",
      children: e
    }), t && jsx(kt, {
      className: _$$s.absolute.$,
      shouldMatchTextColor: !0,
      size: "small"
    })]
  });
}
export function $$M19({
  planType: e,
  planId: t,
  filterParams: r,
  processedRequestIds: n
}) {
  let a = Rs(FuG, {
    planType: e,
    planId: t,
    filterParams: r
  });
  return useMemo(() => {
    let e = "loaded" === a.status && a.data?.adminDashboardRequestIds?.status === tT.Loaded ? a.data?.adminDashboardRequestIds?.data?.map(e => e.id) ?? [] : null;
    return null !== e ? e.filter(e => !n.has(e)) : null;
  }, [a, n]);
}
export function $$F8({
  isIntendedAudience: e
}) {
  let t = I7("exp_billing_group_admin_request_dash");
  return void 0 !== e && e && t.getConfig().get("enabled", !1);
}
export const Bk = $$D0;
export const L8 = $$b1;
export const Lv = $$I2;
export const MI = $$S3;
export const OL = $$E4;
export const V7 = $$A5;
export const Xv = $$N6;
export const YC = $$f7;
export const ZY = $$F8;
export const Zm = $$k9;
export const dC = $$y10;
export const i5 = $$O11;
export const k_ = $$T12;
export const lJ = $$R13;
export const oc = $$w14;
export const ps = $$v15;
export const r1 = $$x16;
export const uH = $$C17;
export const yz = $$P18;
export const z7 = $$M19;
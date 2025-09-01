import { isNotNullish } from "../figma_app/95419";
import { getFeatureFlags } from "../905/601108";
import { eU } from "../figma_app/27355";
import { t as _$$t } from "../905/303541";
import { tI } from "../figma_app/847597";
import { i5 } from "../figma_app/845611";
import { Ib } from "../905/129884";
if (443 == require.j) {}
var $$c2 = (e => (e.AVAILABLE_SEAT = "available_seat", e.PRORATION_NOT_ENABLED = "proration_not_enabled", e.MISSING_CURRENCY = "missing_currency", e.MISSING_PRICE = "missing_price", e.COST_MESSAGING_DISABLED = "cost_messaging_disabled", e))($$c2 || {});
let $$u9 = "admin_requests_dashboard";
let $$m8 = "admin_seat_requests_page";
let $$_0 = "admin_request_flyout";
let $$p7 = eU(!1);
let $$g4 = eU(new Set());
export function $$h10(e, t, a) {
  return !!getFeatureFlags().ff_async_upgrade_request_approvals || (e || t.length > 5) && a;
}
let x = e => e.reduce((e, t) => {
  let a = t.billableProductKey;
  e[a] = (e[a] ?? 0) + 1;
  return e;
}, {});
export function $$f6(e, t) {
  let a = x(e);
  return Object.keys(a).some(e => isNotNullish(t[e]) && t[e] < a[e]);
}
export var $$v1 = (e => (e.REQUESTED = "request", e))($$v1 || {});
export function $$b5(e) {
  return e ? {
    columnName: "request",
    isReversed: e === i5.OLDEST_FIRST
  } : {
    columnName: "",
    isReversed: !1
  };
}
export function $$y3(e, t, a, s) {
  return a || void 0 === t || "cost_messaging_disabled" === t.reason ? {
    "data-tooltip": void 0,
    "data-tooltip-type": void 0
  } : {
    "data-tooltip": null === t.price && "available_seat" === t.reason ? s ? _$$t("admin_dashboard.requests.approve.no_cost_associated") : _$$t("admin_dashboard.requests.approve.seat_paid_for") : t.price && s ? _$$t("admin_dashboard.requests.approve.cost_associated", {
      seatType: tI(e),
      seatCost: t.price
    }) : _$$t("admin_dashboard.requests.approve.adds_paid_seat", {
      seatType: tI(e)
    }),
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip-show-above": !0,
    "data-tooltip-show-immediately": !0,
    "data-tooltip-hide-immediately": !0
  };
}
export const A$ = $$_0;
export const BC = $$v1;
export const D3 = $$c2;
export const Td = $$y3;
export const V4 = $$g4;
export const W4 = $$b5;
export const Z4 = $$f6;
export const aN = $$p7;
export const kl = $$m8;
export const uH = $$u9;
export const x9 = $$h10;
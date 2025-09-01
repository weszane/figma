import { b } from "../905/165519";
var $$i10 = (e => (e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.ANNUAL = 1] = "ANNUAL", e[e.MONTHLY = 2] = "MONTHLY", e[e.STUDENT = 3] = "STUDENT", e))($$i10 || {});
var $$a6 = (e => (e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.PLAN_COMPARISON_MODAL = 1] = "PLAN_COMPARISON_MODAL", e[e.NUX = 2] = "NUX", e[e.CONSUMPTION_MODAL = 3] = "CONSUMPTION_MODAL", e[e.PRICING_PAGE = 4] = "PRICING_PAGE", e[e.DEV_MODE_MODAL = 5] = "DEV_MODE_MODAL", e[e.SITES_MODAL = 6] = "SITES_MODAL", e[e.RESOURCE_HUB = 7] = "RESOURCE_HUB", e[e.FIGMAKE_MODAL = 8] = "FIGMAKE_MODAL", e[e.MCP_MODAL = 9] = "MCP_MODAL", e[e.PAGE_TRACKER_UPSELL = 10] = "PAGE_TRACKER_UPSELL", e[e.CODE_CHAT_LIBRARY_IMPORT = 11] = "CODE_CHAT_LIBRARY_IMPORT", e[e.FIGMAKE_METER_LIMIT_TOAST = 12] = "FIGMAKE_METER_LIMIT_TOAST", e[e.FIGMAKE_PUBLISH_SITE = 13] = "FIGMAKE_PUBLISH_SITE", e[e.CREATE_NEW_FILE = 14] = "CREATE_NEW_FILE", e[e.CREATE_NEW_PAGE = 15] = "CREATE_NEW_PAGE", e))($$a6 || {});
export function $$s9({
  upsellSource: e,
  fallbackEntryPoint: t = 0
}) {
  if (!e) return t;
  switch (e) {
    case b.CREATE_NEW_PAGE:
      return 15;
    case b.CREATE_NEW_FILE:
      return 14;
    case b.FIGMAKE_PUBLISH_SITE:
      return 13;
    case b.FIGMAKE_METER_LIMIT_TOAST:
      return 12;
    case b.CODE_CHAT_LIBRARY_IMPORT:
      return 11;
    case b.PAGE_TRACKER_UPSELL:
      return 10;
    case b.MCP_MODAL:
      return 9;
    default:
      return t;
  }
}
export var $$o4 = (e => (e.MONTH = "month", e.YEAR = "year", e))($$o4 || {});
export let $$l11 = {
  UPGRADE_NEW_TEAM: "upgrade_new_team",
  PLAN_COMPARISON: "plan_comparison",
  CREATE_TEAM: "create_team",
  ADD_COLLABORATORS: "add_collaborators",
  CHOOSE_PLAN: "choose_plan",
  PAYMENT_AND_ADDRESS: "payment_and_address",
  CONFIRM_PAY: "confirm_pay"
};
export var $$d5 = (e => (e.MONTHLY = "monthly", e.ANNUAL = "annual", e))($$d5 || {});
let $$c1 = "US";
let $$u7 = "JP";
let $$p2 = e => ({
  line1: "",
  line2: "",
  country: e || $$c1,
  city: "",
  region: "",
  postal_code: ""
});
export function $$_0(e) {
  return "" === e.line1 && "" === e.line2 && "" === e.city && "" === e.region && "" === e.postal_code;
}
var h = (e => (e.PRODUCT_PRO_DESIGN_ANNUAL = "prod_BTrZbmnROhwnmX", e.PRODUCT_PRO_DESIGN_MONTHLY = "prod_BUXN0CamqLCsuF", e.PRODUCT_PRO_FIGJAM_ANNUAL = "figjam_annual_usd_36", e.PRODUCT_PRO_FIGJAM_MONTHLY = "figjam_monthly_usd_5", e))(h || {});
let $$m8 = ["prod_BTrZbmnROhwnmX", "prod_BUXN0CamqLCsuF"];
let $$g3 = ["figjam_annual_usd_36", "figjam_monthly_usd_5"];
export const $V = $$_0;
export const CO = $$c1;
export const EB = $$p2;
export const MC = $$g3;
export const NW = $$o4;
export const R$ = $$d5;
export const TN = $$a6;
export const UW = $$u7;
export const Ye = $$m8;
export const oO = $$s9;
export const tY = $$i10;
export const tn = $$l11;
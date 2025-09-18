import n from "../vendor/923386";
import { FOrganizationLevelType } from "../figma_app/191312";
import { tl, ss } from "../figma_app/614170";
import { ProductAccessTypeEnum } from "../905/513035";
import { collaboratorSet, designSet } from "../905/332483";
import { zU, fx, tB, dp } from "../figma_app/934005";
var s = n;
export function $$c1(e) {
  return e.plan_parent_type === FOrganizationLevelType.ORG && zU(e) ? e.org_invoice_details?.is_locked ? fx.LOCKED : e.org_invoice_details?.is_skipped_trueup ? null : tl(tB(e)) ? fx.REVIEW : null : null;
}
export function $$_4(e, t) {
  return ss(tB(e), t);
}
export function $$u7(e) {
  return dp(e) ? collaboratorSet : e.plan_parent_type === FOrganizationLevelType.TEAM ? designSet.exclude([ProductAccessTypeEnum.DEV_MODE]) : designSet;
}
export function $$m8(e) {
  let t = [];
  Object.keys(e.seats_breakdown).forEach(e => {
    (designSet.has(e) || collaboratorSet.has(e)) && t.push(e);
  });
  return t;
}
function p(e, t) {
  return s()($$m8(e), a => e.seats_breakdown[a]?.[t] ?? 0);
}
export function $$g2(e) {
  return p(e, "adjustments_quantity");
}
export function $$h3(e) {
  return p(e, "adjustments_amount");
}
export function $$x6(e) {
  return p(e, "charges_amount");
}
export function $$b0(e) {
  return p(e, "credits_amount");
}
export function $$v9(e) {
  return p(e, "seats_amount");
}
export function $$f5(e) {
  return s()($$m8(e), t => e.seats_breakdown[t]?.seats_quantity ?? 0);
}
export const Bf = $$b0;
export const Dc = $$c1;
export const GK = $$g2;
export const Hx = $$h3;
export const TV = $$_4;
export const e5 = $$f5;
export const iy = $$x6;
export const o0 = $$u7;
export const rK = $$m8;
export const x$ = $$v9;
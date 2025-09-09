import { getResourceDataOrFallback } from "../905/663269";
import { A } from "../905/920142";
import { useCurrentPrivilegedPlan } from "../figma_app/465071";
export function $$s0(e) {
  let t = getResourceDataOrFallback(e?.prorationBillingEnabledAt);
  return !!t && A().utc(!0).isSameOrAfter(A(t).utc(!0));
}
export function $$o1() {
  return $$s0(useCurrentPrivilegedPlan("useProrationEnabledForCurrentPlan").unwrapOr(null));
}
export const g = $$s0;
export const k = $$o1;
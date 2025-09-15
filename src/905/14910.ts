import { A } from "../905/920142";
import { getInitialDynamicConfig } from "../figma_app/594947";
export function $$a0({
  emailValidatedAt: e,
  jobTitle: t
}) {
  return !!t || function (e) {
    if (!e) return !1;
    let t = getInitialDynamicConfig("days_allowed_to_see_nux").get("days", 2);
    return A(e).add(t, "day").isBefore(A());
  }(e);
}
export const d = $$a0;
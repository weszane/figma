import { useMemo } from "react";
import { useSubscription } from "../figma_app/288654";
import { createLoadedState } from "../905/723791";
import { MX, EQ } from "../figma_app/684446";
import { LicenseGroupCountView } from "../figma_app/43951";
import { useCurrentPlanUser, useIsOrgAdminUser } from "../figma_app/465071";
export function $$d0(e, t) {
  let a = useSubscription(LicenseGroupCountView, {
    id: e
  }, t);
  return useMemo(() => "loaded" === a.status ? createLoadedState(a.data.licenseGroup?.licenseGroupMemberCounts) : a, [a]);
}
export function $$c1() {
  let e = MX();
  let t = useCurrentPlanUser("useLicenseGroupsSplit");
  let a = useIsOrgAdminUser(t).unwrapOr(!1);
  let s = t.unwrapOr(null)?.userId;
  return useMemo(() => EQ(e, s ?? "", !a), [a, e, s]);
}
export const _ = $$d0;
export const x = $$c1;
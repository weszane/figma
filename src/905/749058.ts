import { useCallback } from "react";
import { useSprigWithSampling } from "../905/99656";
import { useCurrentPlanUser, useCurrentPublicPlan, useIsOrgAdminUser, getParentOrgIdIfOrgLevel } from "../figma_app/465071";
export function $$s0(e, t) {
  let {
    Sprig
  } = useSprigWithSampling();
  let s = useCurrentPlanUser("useSprigOrgAdmin");
  let o = useCurrentPublicPlan("useSprigOrgAdmin").unwrapOr(null);
  let l = useIsOrgAdminUser(s).unwrapOr(!1);
  let d = getParentOrgIdIfOrgLevel(o);
  let c = s.unwrapOr(null)?.userId ?? void 0;
  return useCallback(() => {
    t && l && Sprig("track", e, {
      orgId: d,
      userId: c
    });
  }, [t, l, Sprig, e, d, c]);
}
export const q = $$s0;
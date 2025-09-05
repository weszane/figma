import { useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { resourceUtils } from "../905/989992";
import { Xf } from "../figma_app/153916";
import { Be } from "../figma_app/920435";
import { FOrganizationLevelType, FPlanNameType } from "../figma_app/191312";
import { VP, GH } from "../905/18797";
export function $$c0(e) {
  let t = e.key.type === FOrganizationLevelType.ORG;
  let i = Xf(t ? e.key.parentId : null, t);
  let c = useSelector(e => e.loadingState);
  let u = useSelector(e => {
    let t = e.teamBilling.summary;
    return !!t.annual_subscription || !!t.monthly_subscription;
  });
  let p = useMemo(() => resourceUtils.loading(), []);
  let m = useMemo(() => resourceUtils.loaded(!0), []);
  let h = useMemo(() => resourceUtils.loaded(!1), []);
  switch (e.tier) {
    case FPlanNameType.ENTERPRISE:
    case FPlanNameType.ORG:
      if ("loading" === i.status) return p;
      if ("loaded" === i.status && !i.data) break;
      return m;
    case FPlanNameType.PRO:
      {
        if (!e.key.parentId) return m;
        let t = Be.loadingKeyForPayload({
          teamId: e.key.parentId
        });
        if (VP(c, t)) return p;
        if (GH(c, t) && !u) return h;
        return m;
      }
    case FPlanNameType.STARTER:
    case FPlanNameType.STUDENT:
      break;
    default:
      e.tier;
  }
  return h;
}
export const I = $$c0;
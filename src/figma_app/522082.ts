import { Rs } from "../figma_app/288654";
import { FPlanNameType, FTeamStatusType } from "../figma_app/191312";
import { TeamCanAdmin } from "../figma_app/43951";
import { T5 } from "../figma_app/465071";
export function $$o1() {
  let e = T5("useIsCurrentTeamProLocked").unwrapOr(null);
  return !!(e && e.tier === FPlanNameType.PRO && e?.planSubscription?.status === FTeamStatusType.SUSPENDED);
}
export function $$l0(e) {
  let t = T5("useIsEligbileForProTeamLockedRevampUI").unwrapOr(null);
  let r = function (e) {
    let t = Rs(TeamCanAdmin, {
      id: e || ""
    }, {
      enabled: !!e
    });
    return !!t.unwrapOr({
      team: {
        hasPermission: !1
      }
    })?.team?.hasPermission;
  }(e || t?.key.parentId);
  if (e && t?.key.parentId !== e || !t || t.tier !== FPlanNameType.PRO) return !1;
  let o = r ? [FTeamStatusType.UNPAID, FTeamStatusType.SUSPENDED] : [FTeamStatusType.SUSPENDED];
  let l = t?.planSubscription?.status;
  return !!l && !!o.includes(l);
}
export const R = $$l0;
export const jn = $$o1;
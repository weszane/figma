import { useSelector } from "react-redux";
import { FOrganizationLevelType, FStudentTeamStatusType } from "../figma_app/191312";
import { isTeamLocked, hasTeamStatePaidAccess } from "../figma_app/345997";
import { useCurrentPrivilegedPlan, useIsProOrStudentPlan } from "../figma_app/465071";
import { cD } from "../figma_app/598018";
export function $$l1(e) {
  let t = useCurrentPrivilegedPlan("useIsTeamLockedDueToStarterLimits");
  let r = t.unwrapOr(null);
  let l = r?.key.type === FOrganizationLevelType.TEAM ? r?.key.parentId : void 0;
  let d = cD();
  let c = useSelector(e => !!d && isTeamLocked(d, e));
  let u = useIsProOrStudentPlan(t).unwrapOr(!1);
  let p = r?.studentTeamState === FStudentTeamStatusType.STUDENT_TEAM_CURRENT || r?.studentTeamState === FStudentTeamStatusType.STUDENT_TEAM_EXPIRED;
  return !!l && (!l || l === e) && !!c && !u && !p;
}
export function $$d0(e) {
  if (!e) return !1;
  let t = !!hasTeamStatePaidAccess(e);
  let r = e.studentTeamState === FStudentTeamStatusType.STUDENT_TEAM_CURRENT || e.studentTeamState === FStudentTeamStatusType.STUDENT_TEAM_EXPIRED;
  return t || r;
}
export const iG = $$d0;
export const vt = $$l1;
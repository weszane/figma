import { FAccessLevelType } from "../figma_app/191312";
import { hasViewerRoleAccessOnTeam, canManageNonSecretOrgTeam, canViewTeam } from "../figma_app/642025";
import { AccessLevelEnum } from "../905/557142";
import { c } from "../figma_app/52714";
var $$o1 = (e => (e[e.CLICK_LEAVE = 0] = "CLICK_LEAVE", e[e.CLICK_WITHDRAW = 1] = "CLICK_WITHDRAW", e[e.CLICK_JOIN = 2] = "CLICK_JOIN", e[e.CLICK_REQUEST = 3] = "CLICK_REQUEST", e[e.BYPASS_REQUEST = 4] = "BYPASS_REQUEST", e[e.CLICK_JOIN_AS_ADMIN = 5] = "CLICK_JOIN_AS_ADMIN", e))($$o1 || {});
export function $$l0(e, t, r, o) {
  let l = hasViewerRoleAccessOnTeam(e.id, r);
  let d = function (e, t) {
    if (!e.org_id) return !1;
    let r = t.orgTeams?.teams.find(t => t.id === e.id);
    if (r) return !!r.orphaned;
    let n = t.roles.byTeamId[e.id];
    return !n || Object.values(n).every(e => e.level < AccessLevelEnum.ADMIN && !e.pending);
  }(e, r);
  if (l) return 0;
  if (t && t.status === c.PENDING) return 1;
  if (e.org_access === FAccessLevelType.PRIVATE && d && o || e.org_access === FAccessLevelType.SECRET && d && o) return 4;
  if (canManageNonSecretOrgTeam(e, r, r.user?.id)) return 5;
  if (e.org_access === FAccessLevelType.PUBLIC) return 2;
  if (e.org_access === FAccessLevelType.PRIVATE) return 3;
  return null;
}
export function $$d3(e, t) {
  return !!(e.org_access !== FAccessLevelType.SECRET || canViewTeam(e.id, t));
}
let $$c4 = e => `JOINING_ORG_TEAM_${e}`;
let $$u2 = e => `JOINING_${e.length}_BATCH_ORG_TEAMS_${e[0]}`;
export const YP = $$l0;
export const gO = $$o1;
export const n1 = $$u2;
export const ox = $$d3;
export const p9 = $$c4;
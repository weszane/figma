import { useSelector } from "react-redux";
import { resolveTeamId } from "../905/515860";
import { selectOpenFile } from "../figma_app/516028";
import { getOrgByCurrentUserId } from "../905/845253";
import { getCurrentUserOrgUser } from "../figma_app/951233";
import { isBigmaEnabledSimple } from "../figma_app/336853";
import { hasTeamPaidAccess } from "../figma_app/345997";
import { getCurrentTeamUserInfo } from "../figma_app/598018";
export function $$u0() {
  return useSelector(p);
}
function p(e) {
  let t = selectOpenFile(e);
  let i = getCurrentUserOrgUser(e);
  let n = getCurrentTeamUserInfo(e);
  let u = e.teams[resolveTeamId(e)] || null;
  let p = hasTeamPaidAccess(u) && !u?.org_id;
  let m = getOrgByCurrentUserId(e.currentUserOrgId, e.orgById);
  if (!t || null === t) return "unknown";
  if (t.parentOrgId) {
    let e = isBigmaEnabledSimple(m) ? "ent" : "org";
    return i && i.org_id === t.parentOrgId ? e : "non_member_" + e;
  }
  return p ? n && n.team_id === t.teamId ? "pro" : "non_member_pro" : "starter";
}
export const O = $$u0;
import { useSelector } from "react-redux";
import { resolveTeamId } from "../905/515860";
import { selectOpenFile } from "../figma_app/516028";
import { td } from "../905/845253";
import { xw } from "../figma_app/951233";
import { kA } from "../figma_app/336853";
import { w5 } from "../figma_app/345997";
import { UQ } from "../figma_app/598018";
export function $$u0() {
  return useSelector(p);
}
function p(e) {
  let t = selectOpenFile(e);
  let i = xw(e);
  let n = UQ(e);
  let u = e.teams[resolveTeamId(e)] || null;
  let p = w5(u) && !u?.org_id;
  let m = td(e.currentUserOrgId, e.orgById);
  if (!t || null === t) return "unknown";
  if (t.parentOrgId) {
    let e = kA(m) ? "ent" : "org";
    return i && i.org_id === t.parentOrgId ? e : "non_member_" + e;
  }
  return p ? n && n.team_id === t.teamId ? "pro" : "non_member_pro" : "starter";
}
export const O = $$u0;
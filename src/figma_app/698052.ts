import { qe } from "../figma_app/416935";
import { b } from "../905/985254";
import { w } from "../905/863010";
import { hasValidSubscription, isTeamInGracePeriod } from "../figma_app/345997";
import { canAdminTeam } from "../figma_app/642025";
import { hasOrgUsersForUser } from "../figma_app/951233";
let d = {
  FIRST_TIME: "dismissed_org_upsell_first_time",
  SECOND_TIME: "dismissed_org_upsell_second_time",
  PERMANENT: "dismissed_org_upsell_permanently"
};
var $$c2 = (e => (e[e.NONE = 0] = "NONE", e[e.SINGLE_TEAM = 1] = "SINGLE_TEAM", e[e.MULTIPLE_TEAMS = 2] = "MULTIPLE_TEAMS", e))($$c2 || {});
var u = (e => (e[e.NEVER = 0] = "NEVER", e[e.ONCE = 1] = "ONCE", e[e.TWICE = 2] = "TWICE", e[e.PERMANENTLY = 3] = "PERMANENTLY", e))(u || {});
function p(e) {
  return e[d.PERMANENT] ? 3 : e[d.SECOND_TIME] ? 2 : e[d.FIRST_TIME] ? 1 : 0;
}
function _(e, t, r = 7776e6) {
  let n = e[t];
  if (!n) return !1;
  let i = n.updatedAt.getTime();
  return Date.now() - i < r;
}
export function $$h4(e) {
  switch (p(e)) {
    case 0:
      return !1;
    case 1:
      return _(e, d.FIRST_TIME);
    case 2:
      return _(e, d.SECOND_TIME);
    default:
      return !0;
  }
}
export function $$m0(e) {
  switch (p(e)) {
    case 0:
      return b({
        dismissed_org_upsell_first_time: !0
      });
    case 1:
      return b({
        dismissed_org_upsell_second_time: !0
      });
    default:
      return b({
        dismissed_org_upsell_permanently: !0
      });
  }
}
export function $$g3(e, t, r) {
  if (hasOrgUsersForUser(e) || e.userFlags.completed_org_cart_flow) return 0;
  let i = e.user?.email;
  let d = !!e.user?.email_validated_at;
  if (!i || qe(i) || !d || function (e, t = 2592e6) {
    return _(e.userFlags, "completed_pro_cart_flow", t);
  }(e) || r && (!hasValidSubscription(r) || isTeamInGracePeriod(w.toSinatra(r)) || r.isStudentTeam || r.deletedAt || r.orgId || !r.canAdmin)) return 0;
  let c = Object.values(e.teams).filter(e => hasValidSubscription(e) && !isTeamInGracePeriod(e) && !e.student_team && !e.deleted_at && !e.org_id && canAdminTeam(e.id, t)).length;
  return c > 1 ? 2 : 1 === c ? 1 : 0;
}
export function $$f1(e) {
  return !!e && !qe(e.email);
}
export const CJ = $$m0;
export const Hw = $$f1;
export const VY = $$c2;
export const hF = $$g3;
export const j = $$h4;
import { FUserRoleType } from "../figma_app/191312";
import { getCurrentUserOrgUser } from "../figma_app/951233";
var a = (e => (e[e.NONE = 0] = "NONE", e[e.PENDING = 1] = "PENDING", e[e.ACCEPTED = 2] = "ACCEPTED", e[e.ADMIN = 3] = "ADMIN", e))(a || {});
export function $$s0(e, t) {
  let {
    user
  } = e;
  let {
    plugin_publishers
  } = t;
  if (!plugin_publishers || !user) return 0;
  let {
    accepted,
    pending
  } = plugin_publishers;
  if (accepted.some(e => e.id === user.id)) return 2;
  if (pending && pending.some(e => e.id === user.id)) return 1;
  let l = getCurrentUserOrgUser(e);
  return l && l.permission === FUserRoleType.ADMIN && l.org_id === t.org_id ? 3 : 0;
}
export function $$o2(e) {
  return 1 === e;
}
export function $$l1(e) {
  return 2 === e || 3 === e;
}
export const A = $$s0;
export const E3 = $$l1;
export const jT = $$o2;
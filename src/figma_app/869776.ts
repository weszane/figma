import { sendWithRetry } from "../905/910117";
import { QL } from "../905/609392";
import { getPermissionLevelRoleName } from "../figma_app/12796";
export function $$s4(e, t) {
  return sendWithRetry.put("/api/team_join_link", {
    team_id: e,
    level: t
  }).then(({
    data: e
  }) => e.meta).catch(e => {
    throw e;
  });
}
export function $$o3(e) {
  return `${window.location.origin}/team_invite/redeem/${e.token}`;
}
let $$l0 = e => `RETRIEVING_TEAM_JOIN_LINK_${e}`;
let $$d2 = e => `RESETTING_TEAM_JOIN_LINK_${e}`;
export function $$c1() {
  let e = QL("team_role_redemption");
  let t = !!e && parseInt(e);
  let r = t && getPermissionLevelRoleName(t);
  let n = QL("team_name");
  return n && r ? QL("skipped") ? `You're already ${"owner" === r ? "the" : "a"} team ${r} of ${n}` : `You're now a team ${r} of ${n}` : void 0;
}
export const OL = $$l0;
export const VE = $$c1;
export const _M = $$d2;
export const jx = $$o3;
export const wZ = $$s4;

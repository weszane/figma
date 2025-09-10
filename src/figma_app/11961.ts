import { o1 } from "../figma_app/10554";
export function $$i0(e) {
  return !!(e && (e.entity_type === o1.ORG || e.entity_type === o1.TEAM));
}
export function $$a1(e, t) {
  return t ? t.public_at ? `@${t.profile_handle}` || null : t.primary_user_id ? e.authedUsers.byId[t.primary_user_id]?.email || null : t.org_id ? e.orgById[t.org_id].name || null : t.team_id && e.teams[t.team_id].name || null : null;
}
export const c = $$i0;
export const m = $$a1;

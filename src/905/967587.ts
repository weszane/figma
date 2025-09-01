import { xx } from "../figma_app/815945";
import { Lo } from "../905/714362";
import { t as _$$t } from "../905/303541";
export function $$s0(e, t, i) {
  return e ? {
    userId: e.id,
    orgId: t,
    teamId: i
  } : null;
}
export function $$o2(e, t) {
  let i = $$s0(e.user, e.currentUserOrgId, e.currentTeamId);
  return !!i && i.userId === t.userId && (!!i.orgId && i.orgId === t.orgId || !!i.teamId && i.teamId === t.teamId);
}
export function $$l1(e, t, i, n) {
  let s = _$$t("navbar.workspaces.default_workspace_name");
  if (!t) return s;
  if (t.orgId) {
    let n = i?.[t.orgId] || e.orgById[t.orgId];
    return n?.name || _$$t("navbar.workspaces.default_org_workspace_name");
  }
  if (t.teamId) {
    let i = n?.[t.teamId] || e.teams[t.teamId];
    return i?.name || _$$t("navbar.workspaces.default_team_workspace_name");
  }
  e.user?.id !== "-1" && Lo("planSpaces", "User with Plan Spaces enabled saw External Teams.");
  return _$$t("navbar.profile_switcher.your_teams");
}
xx($$s0);
export const vp = $$s0;
export const HE = $$l1;
export const O_ = $$o2;
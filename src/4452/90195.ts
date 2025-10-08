import { setupAtomWithMount, atom, createRemovableAtomFamily } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { fetchOrganizationTeams, resetOrgTeams } from "../figma_app/330108";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { canViewTeamByAccessLevel } from "../figma_app/88768";
import { getPermissionsStateMemoized } from "../figma_app/642025";
import { ZM } from "../figma_app/329496";
let c = createReduxSubscriptionAtomWithState(e => {
  if ("loaded" !== e.orgTeams.status) return resourceUtils.loading();
  let t = e.orgTeams.teams.filter(t => t.org_id === e.currentUserOrgId);
  return resourceUtils.loaded(t);
});
let $$u3 = setupAtomWithMount(c, ({
  target: e
}) => {
  let t = e.getStore();
  t.getState().orgTeams.status || t.dispatch(fetchOrganizationTeams({}));
  return () => {
    t.dispatch(resetOrgTeams());
  };
});
let m = createReduxSubscriptionAtomWithState(e => getPermissionsStateMemoized(e));
let _ = atom(e => {
  let t = e($$u3);
  let a = e(m);
  return t.transform(e => e.filter(e => canViewTeamByAccessLevel(e, a)));
});
let p = atom(e => e(_).transform(e => ZM(e)));
let $$g2 = createRemovableAtomFamily(e => atom(t => t(p).transform(t => t[e] ?? 0)));
let $$h1 = atom(e => e(_).transform(e => e.filter(e => null === e.workspace_id || void 0 === e.workspace_id)));
let $$x0 = setupAtomWithMount(c, ({
  target: e
}) => {
  let t = e.getStore();
  t.getState().orgTeams.status || t.dispatch(fetchOrganizationTeams({
    includeMemberCount: !0,
    includeProjectCount: !0,
    includeTopMembers: !1
  }));
  return () => {
    t.dispatch(resetOrgTeams());
  };
});
export const EK = $$x0;
export const Fd = $$h1;
export const aN = $$g2;
export const wT = $$u3;
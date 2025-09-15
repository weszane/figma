import { createRemovableAtomFamily } from "../figma_app/27355";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { FUserRoleType } from "../figma_app/191312";
import { UserForRcs, OrgHasWorkspacesView } from "../figma_app/43951";
import { N } from "../905/482239";
import { transformAtom, mapAndAggregateResources } from "../905/401885";
let $$d5 = transformAtom(UserForRcs.Query({}), e => e.currentUser.orgUsers);
let $$c0 = transformAtom($$d5, e => {
  let t = e?.map(e => e.org);
  if (void 0 === t) return {};
  let r = {};
  for (let e of t) null != e && (r[e.id] = {
    ...e,
    bigmaEnabled: !!e.bigmaEnabledAt,
    voiceEnabled: !e.voiceDisabledAt,
    widgetsWhitelistEnforced: !!e.widgetsWhitelistEnforced
  });
  return r;
});
let $$u3 = createReduxSubscriptionAtomWithState(e => e.currentUserOrgId);
let $$p2 = mapAndAggregateResources([$$c0], ([e], t) => {
  let r = t($$u3);
  return null != r ? e[r] : null;
});
let $$_1 = createRemovableAtomFamily(e => transformAtom(OrgHasWorkspacesView.Query({
  orgId: e
}), e => !!e.org?.workspaces?.length && !!e.org?.bigmaEnabledAt));
let h = createReduxSubscriptionAtomWithState(e => e.orgById);
let $$m6 = mapAndAggregateResources([$$p2, $$d5, N], ([e, t, r], n) => {
  if (!e) return !1;
  let i = n(h)[e.id];
  if (!i.bigma_enabled || !i.workspaces_nux_active_at) return !1;
  let s = t?.find(t => t.orgId === e.id && t.userId === r);
  return !!s && s.permission !== FUserRoleType.GUEST;
});
mapAndAggregateResources([UserForRcs.Query({}), $$p2], ([e, t]) => {
  let {
    orgUsers
  } = e.currentUser;
  if (null != t) {
    let e = orgUsers?.find(e => e.orgId === t.id);
    if (e) return "full" === e.designPaidStatus ? "design" : "full" === e.devModePaidStatus ? "dev mode" : "none";
  }
  return null;
});
export let $$g4 = transformAtom($$c0, e => !!Object.values(e).find(e => e.k12GoogleOrg));
export const KI = $$c0;
export const UC = $$_1;
export const ZS = $$p2;
export const _s = $$u3;
export const eS = $$g4;
export const rg = $$d5;
export const uA = $$m6;
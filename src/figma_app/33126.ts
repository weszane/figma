import { createRemovableAtomFamily } from "../figma_app/27355";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { FUserRoleType } from "../figma_app/191312";
import { UserForRcs, OrgHasWorkspacesView } from "../figma_app/43951";
import { N } from "../905/482239";
import { Z1, J9 } from "../905/401885";
let $$d5 = Z1(UserForRcs.Query({}), e => e.currentUser.orgUsers);
let $$c0 = Z1($$d5, e => {
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
let $$p2 = J9([$$c0], ([e], t) => {
  let r = t($$u3);
  return null != r ? e[r] : null;
});
let $$_1 = createRemovableAtomFamily(e => Z1(OrgHasWorkspacesView.Query({
  orgId: e
}), e => !!e.org?.workspaces?.length && !!e.org?.bigmaEnabledAt));
let h = createReduxSubscriptionAtomWithState(e => e.orgById);
let $$m6 = J9([$$p2, $$d5, N], ([e, t, r], n) => {
  if (!e) return !1;
  let i = n(h)[e.id];
  if (!i.bigma_enabled || !i.workspaces_nux_active_at) return !1;
  let s = t?.find(t => t.orgId === e.id && t.userId === r);
  return !!s && s.permission !== FUserRoleType.GUEST;
});
J9([UserForRcs.Query({}), $$p2], ([e, t]) => {
  let {
    orgUsers
  } = e.currentUser;
  if (null != t) {
    let e = orgUsers?.find(e => e.orgId === t.id);
    if (e) return "full" === e.designPaidStatus ? "design" : "full" === e.devModePaidStatus ? "dev mode" : "none";
  }
  return null;
});
export let $$g4 = Z1($$c0, e => !!Object.values(e).find(e => e.k12GoogleOrg));
export const KI = $$c0;
export const UC = $$_1;
export const ZS = $$p2;
export const _s = $$u3;
export const eS = $$g4;
export const rg = $$d5;
export const uA = $$m6;
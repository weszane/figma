import { useMemo } from "react";
import { l as _$$l } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import { atom, createRemovableAtomFamily, useAtomWithSubscription } from "../figma_app/27355";
import { oA } from "../905/663269";
import { gB } from "../905/723791";
import { JB } from "../figma_app/657017";
import { M } from "../figma_app/155411";
import { h0 } from "../905/845253";
import { DQ } from "../905/872904";
import { FPlanNameType } from "../figma_app/191312";
import { LibraryPresetSubscriptionsV2, LibraryOrgSubscriptions, WorkspaceSubscribedLibrariesForTeam, LibrarySubscriptionsForTeam, LibraryTeamSubscriptions, LibraryUserSubscriptions } from "../figma_app/43951";
import { zl } from "../905/276025";
import { Me, jv } from "../figma_app/598018";
let _ = atom(e => {
  let t = e(DQ);
  let i = M();
  let n = e(zl(!0)).data?.tier !== FPlanNameType.STARTER;
  let {
    data
  } = null != i ? e(LibraryPresetSubscriptionsV2.Query({
    group: i
  })) : gB({
    libraryPresetSubscriptionsV2: []
  });
  return data && data.libraryPresetSubscriptionsV2 ? t || n ? [] : data?.libraryPresetSubscriptionsV2?.filter(e => "loaded" !== e.default_subscribed.status || e.default_subscribed.data) : void 0;
});
let $$A0 = atom(e => {
  let t = e(DQ);
  let i = t ? e(LibraryOrgSubscriptions.Query({
    orgId: t
  })) : gB({
    orgLibrarySubscriptions: []
  });
  let n = e(JB);
  if ("loaded" !== i.status) return i;
  let r = i.data.orgLibrarySubscriptions;
  if (!r) return gB({});
  let a = S(r, {
    ignoreCommunitySubs: !n
  });
  return gB(a);
});
let $$y4 = createRemovableAtomFamily(e => atom(t => {
  let i = t(h0);
  let n = !!e && !!i;
  let r = t(JB);
  let a = n ? t(WorkspaceSubscribedLibrariesForTeam.Query({
    teamId: e
  })) : gB({
    team: null
  });
  if ("loaded" !== a.status) return a;
  let s = a.data.team?.workspace?.librarySubscriptions;
  if (!s) return gB({});
  let o = S(s, {
    ignoreCommunitySubs: !r
  });
  return gB(o);
}));
let $$b1 = createRemovableAtomFamily(e => atom(t => {
  let i;
  if (getFeatureFlags().dse_library_subscriptions_for_team) {
    if (!e) return gB({});
    let n = t(LibrarySubscriptionsForTeam.Query({
      teamId: e
    }));
    if ("loaded" !== n.status) return n;
    i = n.data.team?.libraryTeamSubscriptionOverrides;
  } else {
    let n = t(LibraryTeamSubscriptions.Query({}));
    if ("loaded" !== n.status) return n;
    i = n.data.allTeamRoles?.find(t => t?.team?.id === e)?.team?.libraryTeamSubscriptionOverrides;
  }
  if (!i) return gB({});
  let n = S(i, {
    ignoreCommunitySubs: !t(JB)
  });
  return gB(n);
}));
let v = atom(e => {
  let t = e(LibraryTeamSubscriptions.Query({}));
  let i = e(JB);
  let n = e(DQ);
  let r = e(Me);
  let a = jv(r?.id) ? r?.id : "";
  if ("loaded" !== t.status) return t;
  let s = t.data.allTeamRoles?.filter(e => e.team && !e.team.deletedAt && (e.team.orgId === n || e.team.id === a)).map(e => e.team);
  let o = {};
  s.forEach(e => {
    o[e.id] = S(e.libraryTeamSubscriptionOverrides, {
      ignoreCommunitySubs: !i
    });
  });
  return gB(o);
});
let $$I3 = atom(e => {
  let t = e(v);
  if ("loaded" !== t.status) return t;
  let i = t.data;
  let n = {};
  for (let e of Object.values(i)) for (let [t, i] of Object.entries(e)) n[t] ? n[t] = {
    design: n[t].design || i.design,
    figjam: n[t].figjam || i.figjam,
    slides: n[t].slides || i.slides,
    buzz: n[t].buzz || i.buzz
  } : n[t] = {
    design: i.design,
    figjam: i.figjam,
    slides: i.slides,
    buzz: i.buzz
  };
  return gB(n);
});
let $$E6 = atom(e => {
  let t = e(LibraryUserSubscriptions.Query({}));
  let i = e(JB);
  if ("loaded" !== t.status) return t;
  let n = t.data.currentUser.libraryUserSubscriptions;
  if (!n) return gB({});
  let r = S(n, {
    ignoreCommunitySubs: !i
  });
  return gB(r);
});
export function $$x2() {
  let e = useAtomWithSubscription(_);
  return useMemo(() => {
    if (!e) return;
    let t = {};
    for (let i of e) {
      let e = oA(i.libraryKey);
      e && (t[_$$l(e)] = {
        design: !0,
        figjam: !1,
        slides: !1,
        buzz: !1,
        subscriptionId: i.id
      });
    }
    return t;
  }, [e]);
}
function S(e, t) {
  let i = t?.ignoreCommunitySubs ?? !1;
  e = e.filter(e => e.library || e.communityLibrary);
  let n = {};
  for (let t of e) t.communityLibrary && i || !t.libraryKey || (n[_$$l(t.libraryKey)] = {
    design: !!t.isSubscribed,
    figjam: !!t.figJamSubscribed,
    slides: !!t.slidesSubscribed,
    buzz: t.buzzSubscribed?.status === "loaded" && !!t.buzzSubscribed?.data,
    subscriptionId: t.id
  });
  return n;
}
export function $$w5(e) {
  return Object.keys(e).map(t => {
    let i = _$$l(t);
    return {
      id: e[i]?.subscriptionId,
      communityLibrary: {},
      libraryKey: i,
      library: null,
      isSubscribed: !0
    };
  });
}
export const GO = $$A0;
export const Lr = $$b1;
export const Nn = $$x2;
export const XM = $$I3;
export const pD = $$y4;
export const sj = $$w5;
export const zK = $$E6;
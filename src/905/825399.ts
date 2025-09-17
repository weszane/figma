import { useMemo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { isNotNullish } from "../figma_app/95419";
import { l as _$$l } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import { Xr } from "../figma_app/27355";
import { useSubscription } from "../figma_app/288654";
import { gB, Xm, e1 } from "../905/723791";
import { setupResourceAtomHandler, handleStatusChangeEffect } from "../figma_app/566371";
import { fI } from "../figma_app/229259";
import { batchPutFileAction } from "../figma_app/78808";
import { Yb, wV } from "../figma_app/933328";
import { yy } from "../figma_app/543529";
import { n1 } from "../figma_app/657017";
import { selectCurrentFile } from "../figma_app/516028";
import { E as _$$E } from "../905/128063";
import { qU, bj } from "../905/420347";
import { LH } from "../905/872904";
import { SharingGroupsByResourceConnection } from "../figma_app/43951";
import { liveStoreInstance } from "../905/713695";
import { hasTeamPaidAccess } from "../figma_app/345997";
import { je } from "../figma_app/155728";
import { getCurrentTeam } from "../figma_app/598018";
import { isTeamLibrary, isPublishedLibraryWithAssets } from "../figma_app/633080";
import { n as _$$n } from "../905/347702";
import { c as _$$c } from "../905/606579";
export function $$k10() {
  let e = getCurrentTeam();
  let t = yy();
  return {
    hasProAccess: hasTeamPaidAccess(e) || !!t,
    hasOrgAccess: !!t,
    hasEntAccess: !!t && !!t.bigma_enabled
  };
}
let R = liveStoreInstance.Query({
  fetch: e => liveStoreInstance.fetch(Yb(e)),
  output: e => ({
    libraryStats: e.data,
    publishedLibraries: e.data.files.map(e => _$$E(e)) ?? []
  })
});
let $$N5 = _$$n(({
  includeLocalLibrary: e,
  enabled: t = !0
} = {}) => {
  let i = LH();
  let a = selectCurrentFile();
  let s = useDispatch();
  let [d] = setupResourceAtomHandler(R({
    currentOrgId: i,
    subscriptionFileKey: a?.key,
    includeThumbnails: !0
  }), {
    enabled: t && !getFeatureFlags().dse_lk_libraries_endpoint_v2
  });
  let [c] = setupResourceAtomHandler(wV({
    orgId: i,
    subscriptionFileKey: a?.key
  }), {
    enabled: t && !!getFeatureFlags().dse_lk_libraries_endpoint_v2
  });
  let p = getFeatureFlags().dse_lk_libraries_endpoint_v2 ? c : d;
  let g = Xr(qU);
  handleStatusChangeEffect(d, e => {
    let t = e.libraryStats.files.map(e => e.file);
    t.length > 0 && s(batchPutFileAction({
      files: t,
      subscribeToRealtime: !1
    }));
    g(e.publishedLibraries);
  });
  handleStatusChangeEffect(c, e => {
    g(e);
  });
  let f = useMemo(() => getFeatureFlags().dse_lk_libraries_endpoint_v2 ? c.data : d.data?.publishedLibraries ?? [], [d, c]);
  let A = useMemo(() => f ? e ? f : f.filter(e => e.library_key !== a?.libraryKey) : [], [e, a?.libraryKey, f]);
  return useMemo(() => ({
    result: A,
    status: p.status
  }), [A, p]);
});
let $$P11 = _$$n(() => {
  let e = n1();
  let [t] = setupResourceAtomHandler(fI(void 0), {
    enabled: e
  });
  let i = Xr(qU);
  handleStatusChangeEffect(t, e => {
    i(e.map(e => _$$E(e)));
  });
  return {
    result: useMemo(() => t.data?.map(e => _$$E(e)) ?? [], [t]),
    status: t.status
  };
});
export function $$O4(e) {
  let t = je();
  return useMemo(() => t.data?.some(t => t.libraryKey === e.library_key), [e, t.data]);
}
export function $$D8() {
  let e = je();
  return useCallback(t => e.data?.some(e => e.libraryKey === t), [e.data]);
}
export function $$L3(e) {
  return useMemo(() => function (e) {
    let t = e.find(isTeamLibrary);
    if (t && t.workspace_id && t.workspace_name) return {
      name: t?.workspace_name,
      id: t?.workspace_id
    };
  }(e), [e]);
}
export function $$F12(e = 0) {
  let [t, i] = useState(e > 0);
  return {
    isScrolled: t,
    handleScroll: useCallback(e => {
      e > 0 ? i(!0) : i(!1);
    }, [])
  };
}
export function $$M7(e, t) {
  let i = useMemo(() => Array.from(e), [e]);
  let r = bj(i);
  return useMemo(() => getFeatureFlags().dse_library_modal_recommended_perf ? "loaded" === r.status ? gB(r.data.filter(isPublishedLibraryWithAssets)) : Xm() : "loading" === t.status ? Xm() : "loaded" !== t.status ? e1([]) : gB($$j2(e, t.result)), [r, e, t]);
}
export function $$j2(e, t) {
  return Array.from(e).map(e => t.find(t => t.library_key === e)).filter(isNotNullish);
}
export function $$U6(e, t) {
  let i = n1();
  let r = useMemo(() => e.filter(e => !1 !== e.isSubscribed).map(e => {
    let t = e.communityLibrary;
    if (!i && t) return;
    let n = t?.hubFile?.libraryKey ?? e.library?.file?.libraryKey;
    return n ? _$$l(n) : void 0;
  }).filter(isNotNullish), [e, i]);
  let l = bj(r);
  return useMemo(() => getFeatureFlags().dse_library_modal_recommended_perf ? "loaded" === l.status ? gB(l.data.filter(isPublishedLibraryWithAssets)) : Xm() : "loaded" !== t.status ? t : gB($$B1(e, t.data, i)), [l, e, t, i]);
}
export function $$B1(e, t, i) {
  return e.filter(e => !1 !== e.isSubscribed).map(e => {
    let n = e.communityLibrary;
    if (!i && n) return;
    let r = n?.hubFile?.libraryKey ?? e.library?.file?.libraryKey;
    return t.find(e => e.library_key === r);
  }).filter(isNotNullish);
}
let $$V9 = _$$n(e => {
  let t = _$$c();
  let i = useSubscription(SharingGroupsByResourceConnection, {
    resourceConnectionId: t?.id ?? ""
  }, {
    enabled: !!t
  });
  let r = useMemo(() => (i.data?.resourceConnectionSharingGroups ?? []).map(e => e.libraryKey ? _$$l(e.libraryKey) : null).filter(isNotNullish), [i]);
  let l = bj(r);
  return useMemo(() => {
    if (getFeatureFlags().dse_library_modal_recommended_perf) return "loaded" === l.status ? gB(l.data.filter(isPublishedLibraryWithAssets)) : Xm();
    let t = i.data?.resourceConnectionSharingGroups;
    return gB(e.filter(e => t?.some(t => t.libraryKey === e.library_key)));
  }, [e, i, l]);
});
let $$G0 = _$$n(e => {
  let t = _$$c();
  let i = useSubscription(SharingGroupsByResourceConnection, {
    resourceConnectionId: t?.id ?? ""
  }, {
    enabled: !!t
  });
  return useMemo(() => {
    let t = i.data?.resourceConnectionSharingGroups;
    return e.filter(e => t?.some(t => t.libraryKey === e.library_key));
  }, [e, i]);
});
export const Ei = $$G0;
export const LI = $$B1;
export const PW = $$j2;
export const Pq = $$L3;
export const Px = $$O4;
export const Qj = $$N5;
export const W = $$U6;
export const _5 = $$M7;
export const b1 = $$D8;
export const eS = $$V9;
export const mG = $$k10;
export const ry = $$P11;
export const yc = $$F12;
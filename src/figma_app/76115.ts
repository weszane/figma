import { useMemo, useCallback } from "react";
import { wA } from "../vendor/514228";
import { sortByPropertyWithOptions, sortByWithOptions } from "../figma_app/656233";
import { af } from "../905/934246";
import { l as _$$l } from "../905/716947";
import { zl } from "../figma_app/27355";
import { sx } from "../905/449184";
import { x1 } from "../905/714362";
import { am } from "../figma_app/430563";
import { Jl, y3, UB } from "../figma_app/80990";
import { qp } from "../905/977779";
import { q5 } from "../figma_app/516028";
import { dx, ZX, nJ, Hb, fc, t$ } from "../figma_app/646357";
import { QB } from "../905/921418";
import { T } from "../905/486858";
import { E8, PW, Yu, Do } from "../figma_app/633080";
import { n as _$$n } from "../905/347702";
import { M } from "../905/540025";
let $$T9 = "assets-panel";
let I = [];
export function $$S6(e) {
  if (!e.length) return !0;
  let t = e.find(e => dx(e) && e.containing_frame)?.containing_frame;
  for (let r of e) if (dx(r)) {
    let e = ZX(t, r.containing_frame);
    let n = nJ(t, r.containing_frame);
    if (!e || !n) return !1;
  }
  return !0;
}
let $$v2 = () => ({
  subscribedFiles: [],
  fileKeyToSubscribedItems: {}
});
let $$A5 = _$$n((e, t) => {
  let r = $$x3(Jl(e));
  let n = $$x3(t, e);
  return {
    allItems: [].concat(r.allItems, n.allItems),
    publishedItems: [].concat(r.publishedItems, n.publishedItems),
    privateItems: [].concat(r.privateItems, n.privateItems),
    erroneousItems: [].concat(r.erroneousItems, n.erroneousItems),
    numUpdates: r.numUpdates + n.numUpdates,
    numPublished: r.numPublished + n.numPublished
  };
});
export function $$x3(e, t, r) {
  let n = y3(e);
  let i = [];
  let a = [];
  let s = [];
  let o = r ? Object.values(r) : [];
  let l = 0;
  let d = 0;
  let c = new Set();
  if (t) for (let e of Object.keys(t)) {
    let r = t[e];
    let n = r.containing_frame?.containingStateGroup?.nodeId;
    n && r.old_key && c.add(n);
  }
  for (let e of n) if (e.deletedFromSceneGraph || (i.push(e), e.status === E8.NOT_STAGED || e.status === E8.DELETED ? s.push(e) : a.push(e)), UB(e.status) && d++, e.status !== E8.CURRENT && e.status !== E8.NOT_STAGED || (e.type === PW.COMPONENT || e.type === PW.STATE_GROUP) && Hb(e.status) && e.old_key || e.type === PW.STATE_GROUP && Hb(e.status) && c.has(e.node_id)) {
    l++;
    continue;
  }
  return {
    allItems: i,
    publishedItems: a,
    privateItems: s,
    erroneousItems: o,
    numUpdates: l,
    numPublished: d
  };
}
export function $$N0({
  library: e,
  fileDataByLibraryKey: t
}) {
  let r = O({
    itemsByTeamId: e.publishedByLibraryKey.stateGroups,
    fileDataByLibraryKey: t
  });
  let i = function ({
    library: e,
    fileDataByLibraryKey: t
  }) {
    return O({
      itemsByTeamId: e.publishedByLibraryKey.components,
      fileDataByLibraryKey: t,
      predicate: C
    });
  }({
    library: e,
    fileDataByLibraryKey: t
  });
  return useMemo(() => {
    let e = {};
    let t = {};
    for (let r of i.subscribedFiles) {
      if (!r.library_key) continue;
      let n = _$$l(r.library_key);
      e[n] = r;
      t[n] = (t[n] || []).concat(i.libraryKeyToSubscribedItems[n] ?? []);
    }
    for (let n of r.subscribedFiles) {
      if (!n.library_key) continue;
      let i = _$$l(n.library_key);
      e[i] = n;
      t[i] = (t[i] || []).concat(r.libraryKeyToSubscribedItems[i] ?? []);
    }
    return {
      subscribedFiles: Object.values(e),
      libraryKeyToSubscribedItems: t
    };
  }, [i, r]);
}
let C = e => e.containing_frame?.containingStateGroup == null;
export function $$w11(e) {
  let t = zl.get(qp);
  return O({
    itemsByTeamId: useMemo(() => function (e) {
      let t = {};
      for (let r of [...new Set([...Object.keys(e.componentsByLibraryKey), ...Object.keys(e.stateGroupsByLibraryKey)]).values()]) {
        let n = _$$l(r);
        let i = e.componentsByLibraryKey[n] || {};
        let a = e.stateGroupsByLibraryKey[n] || {};
        let s = Object.values(i)[0];
        let l = Object.values(a)[0];
        let d = s?.team_id ?? l?.team_id ?? Yu;
        t[d] ??= {};
        t[d][n] = {
          ...i,
          ...a
        };
      }
      return t;
    }(e), [e]),
    fileDataByLibraryKey: t,
    predicate: C
  });
}
function O({
  itemsByTeamId: e,
  fileDataByLibraryKey: t,
  predicate: r = af
}) {
  let i = fc();
  return useMemo(() => {
    let n = Object.create(null);
    for (let a in e) {
      let s = e[a];
      for (let e in s) {
        let a = _$$l(e);
        let l = t[a];
        if (!l || !i(_$$l(l.library_key))) continue;
        let d = [];
        let c = s[a];
        for (let e in c) {
          let t = c[e];
          t && r(t) && d.push(t);
        }
        d.length > 0 && (n[a] = d);
      }
    }
    let s = [];
    Object.keys(n).forEach(e => {
      let r = t[_$$l(e)];
      r && s.push(r);
    });
    sortByPropertyWithOptions(s, "name");
    return {
      libraryKeyToSubscribedItems: n,
      subscribedFiles: s
    };
  }, [e, t, r, i]);
}
export function $$R10({
  library: e,
  hubFilesByLibraryKey: t,
  visualAssetLibraryKeys: r = I
}) {
  let i = L({
    itemsByTeamId: e.publishedByLibraryKey.stateGroups,
    hubFilesByLibraryKey: t,
    visualAssetLibraryKeys: r
  });
  let a = L({
    itemsByTeamId: e.publishedByLibraryKey.components,
    hubFilesByLibraryKey: t,
    visualAssetLibraryKeys: r
  });
  return useMemo(() => {
    let e = {};
    let t = {};
    for (let r of [a, i]) for (let n of r.subscribedHubFiles) {
      if (!n.library_key) {
        x1("library key", "Hub file unexpectedly has no library key", {
          hubFileId: n.id
        });
        continue;
      }
      let i = _$$l(n.library_key);
      e[i] = n;
      t[i] = (t[i] || []).concat(r.libraryKeyToSubscribedItems[i] ?? []);
    }
    return {
      subscribedHubFiles: Object.values(e),
      libraryKeyToSubscribedItems: t
    };
  }, [i, a]);
}
function L({
  itemsByTeamId: e,
  hubFilesByLibraryKey: t,
  visualAssetLibraryKeys: r = I
}) {
  let i = fc();
  return useMemo(() => {
    let n = {};
    for (let a in e) {
      let s = e[a];
      for (let e in s) {
        let a = _$$l(e);
        let l = t[a];
        let d = r.includes(a);
        if (!l || !i(_$$l(l.library_key)) && !d) continue;
        let c = [];
        let u = s[a];
        for (let e in u) {
          let t = u[e];
          t && !(t?.type === PW.COMPONENT && t?.containing_frame?.containingStateGroup) && c.push(t);
        }
        c.length > 0 && (n[a] = c);
      }
    }
    let s = Object.keys(n).map(e => t[e]);
    sortByWithOptions(s, e => e.versions[e.current_hub_file_version_id]?.name);
    return {
      libraryKeyToSubscribedItems: n,
      subscribedHubFiles: s
    };
  }, [e, t, r, i]);
}
export var $$P1 = (e => (e[e.Grid = 0] = "Grid", e[e.List = 1] = "List", e))($$P1 || {});
export let $$D4 = e => 0 === e ? "grid" : "list";
export function $$k7(e, t) {
  let r = wA();
  let a = q5();
  let s = M();
  let o = t$(e);
  let l = T();
  return useCallback(n => {
    a && (r(am({
      libraryFileSubscription: {
        file_key: a.key,
        library_key: e,
        is_subscribed: n,
        id: o
      },
      userInitiated: !0,
      fileSubscribedLibraryKeys: l
    })), n ? sx("Library File Enabled", {
      fileKey: a.key,
      fileTeamId: a.teamId,
      fileOrgId: a.parentOrgId,
      libraryKey: e,
      entryPoint: t
    }, {
      forwardToDatadog: !0
    }) : sx("Library File Disabled", {
      fileKey: a.key,
      fileTeamId: a.teamId,
      fileOrgId: a.parentOrgId,
      libraryKey: e,
      entryPoint: t
    }, {
      forwardToDatadog: !0
    }), r(QB({
      ignoreLoadingState: s
    })));
  }, [a, r, e, o, l, s, t]);
}
export function $$M8(e) {
  return !!e && (!!Do(e) || e.type === PW.MODULE || e.type === PW.COMPONENT || e.type === PW.STATE_GROUP);
}
export const $1 = $$N0;
export const Bk = $$P1;
export const Mt = $$v2;
export const ND = $$x3;
export const RN = $$D4;
export const Sg = $$A5;
export const TY = $$S6;
export const _9 = $$k7;
export const cx = $$M8;
export const mZ = $$T9;
export const oV = $$R10;
export const yz = $$w11;
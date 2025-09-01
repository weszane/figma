import { PK } from "../figma_app/243058";
import { Xf, sg, ey, yG } from "../905/859698";
import { glU } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { eU, Iz, mg, p6 } from "../figma_app/27355";
import l from "../vendor/983401";
import { Mz } from "../vendor/925040";
import { conditionalFeatureFlag } from "../figma_app/169182";
import { P8 } from "../905/270781";
import { xi } from "../905/714362";
import { f as _$$f } from "../905/412913";
import { d1 } from "../905/766303";
import { dp } from "../905/760074";
import { z } from "../905/915227";
import { E7 } from "../905/216495";
import { U as _$$U } from "../905/722080";
import { bt } from "../905/270322";
import { aD, X7 } from "../figma_app/646357";
import { i as _$$i } from "../905/315328";
import { PW } from "../figma_app/633080";
import { aR, BE, uB, tp, J8 } from "../905/128313";
import { Ls, m3, ZA, a3, gJ } from "../figma_app/645694";
import { O1, T_, tX, dK, BA } from "../figma_app/889655";
import { _Q, m0, v3, jU, Du, tY, S_, aD as _$$aD } from "../figma_app/141508";
import { PX, wi } from "../905/55146";
var d = l;
function w(e) {
  return `${e.version}:${e.userFacingVersion}`;
}
function O(e, t, r, n, a) {
  let s = Object.create(null);
  for (let {
    key,
    version,
    userFacingVersion
  } of e) if (key) {
    if (key in r) {
      let e = key;
      t = r[key];
      n = a?.[e]?.version === version ? version : "FAKE_VERSION_FOR_MOVED_ITEM";
      i = a?.[e]?.userFacingVersion === userFacingVersion ? userFacingVersion : "FAKE_USER_FACING_VERSION_FOR_MOVED_ITEM";
    }
    s[key] = s[key] || new _$$U(w);
    s[key].add({
      version,
      userFacingVersion
    });
  }
  for (let e of t) if (e in n) {
    let t = n[e];
    s[t] = s[t] || new _$$U(w);
    s[t].add({
      version: Xf("FAKE_VERSION_FOR_MOVED_ITEM"),
      userFacingVersion: Xf("FAKE_VERSION_FOR_MOVED_ITEM")
    });
  }
  return s;
}
let R = Mz([PX, e => e.library.used__LIVEGRAPH.destinationStyleKeyToLegacySourceStyle], (e, t) => Object.values(e).reduce((e, r) => {
  if ("loaded" !== r.status || !t[r.data.key]) return e;
  let {
    key,
    version,
    userFacingVersion
  } = t[r.data.key];
  e[key] = {
    version,
    userFacingVersion
  };
  return e;
}, Object.create(null)));
let L = Mz([_Q, O1, aR, BE, R], O);
let P = Mz([m0, T_, aR, BE], O);
let D = Mz([v3], e => Object.values(e).reduce((e, t) => {
  let r = e.get(t.key);
  r || (r = new Set(), e.set(t.key, r));
  t.pageIds.forEach(e => r.add(e));
  return e;
}, new Map()));
let k = Mz([v3], e => e.reduce((e, t) => (e.has(t.key) || e.set(t.key, new Set()), e.get(t.key)?.add(t), e), new Map()));
let M = Mz([jU], e => e.reduce((e, t) => {
  let r = e.get(t.key);
  r || (r = new Set(), e.set(t.key, r));
  t.pageIds.forEach(e => r.add(e));
  return e;
}, new Map()));
let F = Mz([Du], e => Object.values(e).reduce((e, t) => (e.has(t.key) || e.set(t.key, new Set()), e.get(t.key)?.add(t), e), new Map()));
function j(e, t, r) {
  if (0 === e.size) return !1;
  if (1 === e.size) {
    let n = e.values()[0];
    let i = r(t);
    let a = i?.version?.toLowerCase();
    let o = n?.version?.toLowerCase();
    if (void 0 === a && xi("library_updates_selectors", "Unexpectedly missing published version from asset", {
      publishedAsset: t
    }, {
      reportAsSentryError: !0
    }), void 0 === o && xi("library_updates_selectors", "Unexpectedly missing current version from asset", {
      publishedAsset: t
    }, {
      reportAsSentryError: !0
    }), getFeatureFlags().ds_user_facing_version_publishing) {
      let e = i?.userFacingVersion?.toLowerCase();
      let r = n?.userFacingVersion?.toLowerCase();
      r !== e && a === e && xi("library_updates_selectors", "Published UFV is different than published version while also matching the subscribed version", {
        publishedVersionValue: a,
        currentVersionValue: o,
        publishedUserFacingVersionValue: e,
        subscribedUserFacingVersionValue: r,
        publishedAsset: t
      }, {
        reportAsSentryError: !0
      });
      return a !== o && e !== r;
    }
    return a !== o;
  }
  return !0;
}
let U = _$$f();
function B({
  publishedAssetsByKey: e,
  usedVersionsByAssetKey: t,
  editingFile: r,
  getVersion: n,
  getUpdateAsset: a
}) {
  let s = [];
  for (let o of Object.keys(t)) {
    let l = e[sg(o)];
    !(!l || r && dp(r, U(l))) && j(t[sg(o)], l, n) && s.push(a(l));
  }
  return s;
}
let G = Mz([wi, L, d1, uB, tp, J8, tY, tX], (e, t, r, n, i, a, s, o) => {
  let l = !1;
  let d = [];
  let c = !1;
  return {
    styleUpdatesForAllPages: B({
      publishedAssetsByKey: e,
      usedVersionsByAssetKey: t,
      editingFile: r,
      getVersion: e => e.content_hash ? {
        version: e.content_hash,
        userFacingVersion: e.userFacingVersion
      } : void 0,
      getUpdateAsset: e => {
        let t = {
          ...e,
          oldSubscribedKeysToUpdate: [],
          localIdsToUpdate: []
        };
        if (e.key in n && (t.oldSubscribedKeysToUpdate = Array.from(n[e.key]), !a[e.key])) for (let e of (l = !0, t.oldSubscribedKeysToUpdate)) s.has(e) && (c = !0);
        if (e.key in i) {
          for (let r of (t.localIdsToUpdate = Array.from(i[e.key]), a[e.key] || (l = !0), t.localIdsToUpdate)) if (o.has(r)) {
            c = !0;
            break;
          }
        }
        (s.has(e.key) || t.oldSubscribedKeysToUpdate.some(e => s.has(e)) || t.localIdsToUpdate.some(e => o.has(e))) && d.push(t);
        return t;
      }
    }),
    styleUpdatesForCurrentPage: d,
    includesMoveUpdatesOnAnyPage: l,
    includesMoveUpdatesOnCurrentPage: c
  };
});
let V = P8([Ls, P], (e, t) => {
  let r = Object.keys(t);
  let n = Object.keys(e);
  return d()(r, n);
});
let $$H14 = Mz([V, m3, S_, dK], (e, t, r, n) => {
  let i = new Map();
  for (let a of e) {
    let e = r[a];
    if (!e) continue;
    let s = n.get(e.nodeId);
    let o = s?.parentNode;
    if (s && o && s.isState && o?.stateGroupKey) {
      let e = t[o.stateGroupKey];
      e && i.set(a, e);
    }
  }
  return i;
});
let $$z10 = Mz([Ls, ZA, P, d1, uB, tp, _$$aD, BA], (e, t, r, n, i, a, s, o) => {
  let l = !1;
  let d = !1;
  let c = new Set(s.map(e => e.key));
  let p = B({
    publishedAssetsByKey: e,
    usedVersionsByAssetKey: r,
    editingFile: n,
    getVersion: e => ({
      version: e.content_hash,
      userFacingVersion: e.userFacingVersion
    }),
    getUpdateAsset: e => {
      let t = {
        ...e,
        oldSubscribedKeysToUpdate: [],
        localIdsToUpdate: []
      };
      let r = e.component_key;
      if (r in i) for (let e of (t.oldSubscribedKeysToUpdate = Array.from(i[r]), l = !0, t.oldSubscribedKeysToUpdate)) c.has(e) && (d = !0);
      if (r in a) {
        for (let e of (t.localIdsToUpdate = Array.from(a[r]), l = !0, t.localIdsToUpdate)) if (o.has(e)) {
          d = !0;
          break;
        }
      }
      return t;
    }
  });
  let _ = [];
  let h = [];
  let m = [];
  let g = [];
  let f = new Set();
  for (let e of p) {
    let r = s.some(t => {
      let r = conditionalFeatureFlag("ds_user_facing_version_publishing", t.userFacingVersion !== e.userFacingVersion && t.version !== e.content_hash, t.version !== e.content_hash);
      return t.key === e.component_key && r;
    });
    let n = e.containing_frame?.containingStateGroup?.nodeId;
    if (n) {
      let i = t[e.library_key]?.[n];
      if (i) {
        let t = m.find(e => e.key === i.key);
        if (null == t && (t = {
          ...i,
          newStateKeyToOutdatedItems: {}
        }, m.push(t)), e.component_key) {
          let n = e.component_key;
          t.newStateKeyToOutdatedItems[n] = {
            oldSubscribedKeysToUpdate: e.oldSubscribedKeysToUpdate,
            localIdsToUpdate: e.localIdsToUpdate
          };
          (r || e.oldSubscribedKeysToUpdate.some(e => c.has(e)) || e.localIdsToUpdate.some(e => o.has(e))) && !f.has(i.key) && (g.push(t), f.add(i.key));
        }
      }
    } else {
      _.push(e);
      (r || e.oldSubscribedKeysToUpdate.some(e => c.has(e)) || e.localIdsToUpdate.some(e => o.has(e))) && h.push(e);
    }
  }
  return {
    componentUpdatesForAllPages: _,
    stateGroupUpdatesForAllPages: m,
    includesMoveUpdatesOnAnyPage: l,
    componentUpdatesForCurrentPage: h,
    stateGroupUpdatesForCurrentPage: g,
    includesMoveUpdatesOnCurrentPage: d
  };
});
let W = _$$f();
let K = P8([a3, gJ, d1, M, D, F, k, e => e.mirror.appModel.currentPage], (e, t, r, n, o, l, d, c) => {
  let u = {};
  let p = new Set();
  let _ = glU?.getInternalCanvasNodeId();
  for (let a of o.keys()) {
    let l = e[ey(a)];
    if (!l || r && dp(r, W(l))) continue;
    let h = t[yG(l.variableCollectionKey)];
    if (!h) continue;
    let m = u[yG(l.variableCollectionKey)] || {
      ...h,
      libraryVariableIdsForUpdate: []
    };
    let f = e => ({
      version: e.version,
      userFacingVersion: e.userFacingVersion
    });
    let E = O(Array.from(d.get(l.key) ?? []).filter(e => e.pageIds.includes(c) || !!_ && e.pageIds?.includes(_)), [], {}, {})[l.key];
    if (E && j(E, l, f) && m.libraryVariableIdsForUpdate.push(l.node_id), m.libraryVariableIdsForUpdate.length > 0 && (u[yG(h.key)] = m, getFeatureFlags().ds_extended_collections_page_updates_fix && o.has(l.key) || !getFeatureFlags().ds_extended_collections_page_updates_fix && n.has(h.key))) {
      let e = getFeatureFlags().ds_extended_collections_page_updates_fix ? o.get(l.key) : n.get(h.key);
      (e?.has(c) || _ && e?.has(_)) && p.add(h.key);
    }
  }
  if (getFeatureFlags().ds_extended_collections) for (let e of n.keys()) {
    let r = yG(e);
    let a = t[r];
    if (!a) continue;
    let s = n.get(r);
    let o = Array.from(l.get(a.key) ?? []);
    let d = O(o.filter(e => e.pageIds.includes(c) || !!_ && e.pageIds?.includes(_)), [], {}, {})[a.key];
    let h = new Set(o.filter(e => e.pageIds?.includes(c)).map(e => ({
      version: e.version,
      userFacingVersion: e.userFacingVersion
    })));
    let m = e => ({
      version: e.version,
      userFacingVersion: e.userFacingVersion
    });
    d && h && j(d, a, m) && (_ && s?.has(_) || s?.has(c)) && (p.add(r), u[r] || (u[r] = {
      ...a,
      libraryVariableIdsForUpdate: []
    }));
  }
  let h = Object.values(u);
  let m = h.filter(e => p.has(e.key));
  return {
    variableSetUpdatesForAllPages: h,
    variableSetUpdatesForCurrentPage: m
  };
});
let Y = bt($$z10);
let $ = bt(G);
let X = bt(K);
let q = eU(e => {
  let t = [];
  let r = new Set();
  for (let n of Object.values(e(en))) for (let e of n) if (e.type === PW.CODE_COMPONENT) {
    if (r.has(e.key)) continue;
    r.add(e.key);
    t.push(e);
  }
  return t;
});
let J = eU(e => {
  let t = e(z);
  return e(en)[t] ?? [];
});
let $$Z7 = Iz(e => eU(t => {
  let {
    componentUpdatesForAllPages,
    componentUpdatesForCurrentPage
  } = t(Y);
  return e === aD.ALL ? componentUpdatesForAllPages : componentUpdatesForCurrentPage;
}));
let $$Q0 = Iz(e => eU(t => {
  let {
    stateGroupUpdatesForAllPages,
    stateGroupUpdatesForCurrentPage
  } = t(Y);
  return e === aD.ALL ? stateGroupUpdatesForAllPages : stateGroupUpdatesForCurrentPage;
}));
let $$ee15 = Iz(e => eU(t => {
  let {
    styleUpdatesForAllPages,
    styleUpdatesForCurrentPage
  } = t($);
  return e === aD.ALL ? styleUpdatesForAllPages : styleUpdatesForCurrentPage;
}));
let $$et11 = mg($, e => e.styleUpdatesForAllPages);
let $$er12 = Iz(e => eU(t => {
  let {
    variableSetUpdatesForAllPages,
    variableSetUpdatesForCurrentPage
  } = t(X);
  return e === aD.ALL ? variableSetUpdatesForAllPages : variableSetUpdatesForCurrentPage;
}));
let en = eU(e => {
  let t = {};
  for (let r of Object.values(_$$i)) for (let [n, i] of Object.entries(e(r))) {
    t[n] = t[n] || [];
    t[n].push(...i);
  }
  return t;
});
let $$ei13 = Iz(e => eU(t => {
  switch (e) {
    case aD.ALL:
      return t(q);
    case aD.CURRENT:
      return t(J);
  }
}));
let $$ea4 = eU(e => {
  let {
    componentUpdatesForAllPages,
    stateGroupUpdatesForAllPages,
    includesMoveUpdatesOnAnyPage
  } = e(Y);
  let {
    styleUpdatesForAllPages,
    includesMoveUpdatesOnAnyPage: _includesMoveUpdatesOnAnyPage
  } = e($);
  let {
    variableSetUpdatesForAllPages
  } = e(X);
  return {
    componentUpdatesForAllPages,
    stateGroupUpdatesForAllPages,
    styleUpdatesForAllPages,
    variableSetUpdatesForAllPages,
    libraryAssetUpdatesForAllPages: e(q),
    includesMoveStyleUpdatesOnAnyPage: _includesMoveUpdatesOnAnyPage,
    includesMoveComponentUpdatesOnAnyPage: includesMoveUpdatesOnAnyPage
  };
});
let $$es3 = eU(e => {
  let {
    componentUpdatesForCurrentPage,
    stateGroupUpdatesForCurrentPage,
    includesMoveUpdatesOnCurrentPage
  } = e(Y);
  let {
    styleUpdatesForCurrentPage,
    includesMoveUpdatesOnCurrentPage: _includesMoveUpdatesOnCurrentPage
  } = e($);
  let {
    variableSetUpdatesForCurrentPage
  } = e(X);
  return {
    componentUpdatesForCurrentPage,
    stateGroupUpdatesForCurrentPage,
    styleUpdatesForCurrentPage,
    variableSetUpdatesForCurrentPage,
    libraryAssetUpdatesForCurrentPage: e(J),
    includesMoveStyleUpdatesOnCurrentPage: _includesMoveUpdatesOnCurrentPage,
    includesMoveComponentUpdatesOnCurrentPage: includesMoveUpdatesOnCurrentPage
  };
});
let $$eo8 = Iz(e => eU(t => {
  let {
    componentUpdatesForAllPages,
    stateGroupUpdatesForAllPages,
    styleUpdatesForAllPages,
    variableSetUpdatesForAllPages,
    libraryAssetUpdatesForAllPages
  } = t($$ea4);
  let {
    componentUpdatesForCurrentPage,
    stateGroupUpdatesForCurrentPage,
    styleUpdatesForCurrentPage,
    variableSetUpdatesForCurrentPage,
    libraryAssetUpdatesForCurrentPage
  } = t($$es3);
  return e === aD.ALL ? {
    scopedComponentUpdates: componentUpdatesForAllPages,
    scopedStateGroupUpdates: stateGroupUpdatesForAllPages,
    scopedStyleUpdates: styleUpdatesForAllPages,
    scopedVariableSetUpdates: variableSetUpdatesForAllPages,
    scopedLibraryAssetUpdates: libraryAssetUpdatesForAllPages
  } : {
    scopedComponentUpdates: componentUpdatesForCurrentPage,
    scopedStateGroupUpdates: stateGroupUpdatesForCurrentPage,
    scopedStyleUpdates: styleUpdatesForCurrentPage,
    scopedVariableSetUpdates: variableSetUpdatesForCurrentPage,
    scopedLibraryAssetUpdates: libraryAssetUpdatesForCurrentPage
  };
}));
let el = mg($$ea4, ({
  componentUpdatesForAllPages: e,
  stateGroupUpdatesForAllPages: t,
  styleUpdatesForAllPages: r,
  variableSetUpdatesForAllPages: n,
  libraryAssetUpdatesForAllPages: i,
  includesMoveStyleUpdatesOnAnyPage: a,
  includesMoveComponentUpdatesOnAnyPage: s
}) => {
  let o = e.length + t.length + r.length + n.length + i.length;
  return {
    updateCount: o,
    hasUpdates: o > 0,
    includesMoveStyleUpdatesOnAnyPage: a,
    includesMoveComponentUpdatesOnAnyPage: s
  };
});
let $$ed6 = mg($$es3, ({
  componentUpdatesForCurrentPage: e,
  stateGroupUpdatesForCurrentPage: t,
  styleUpdatesForCurrentPage: r,
  variableSetUpdatesForCurrentPage: n,
  libraryAssetUpdatesForCurrentPage: i,
  includesMoveStyleUpdatesOnCurrentPage: a,
  includesMoveComponentUpdatesOnCurrentPage: s
}) => {
  let o = e.length + t.length + r.length + i.length + n.length;
  return {
    updateCount: o,
    hasUpdates: o > 0,
    includesMoveStyleUpdatesOnCurrentPage: a,
    includesMoveComponentUpdatesOnCurrentPage: s
  };
});
let $$ec1 = mg(el, ({
  hasUpdates: e
}) => e);
let $$eu2 = mg($$ed6, ({
  hasUpdates: e
}) => e);
let $$ep17 = Iz(e => eU(t => t(e === aD.ALL ? el : $$ed6).hasUpdates));
let $$e_9 = mg(el, ({
  updateCount: e
}) => e);
mg($$ed6, ({
  updateCount: e
}) => e);
let $$eh18 = p6([$$ea4], ({
  componentUpdatesForAllPages: e,
  stateGroupUpdatesForAllPages: t,
  styleUpdatesForAllPages: r,
  variableSetUpdatesForAllPages: n,
  libraryAssetUpdatesForAllPages: i
}) => ({
  componentUpdateKeys: X7(e),
  stateGroupUpdateKeys: X7(t),
  styleUpdateKeys: X7(r),
  variableSetKeys: X7(n),
  libraryAssetKeys: X7(i)
}));
let $$em5 = bt(e => e.library.libraryUpdatesBannerDismissed);
export function $$eg16(e, t) {
  let r = dK(e);
  let i = E7(t);
  let a = i ? PK.fromKiwi(i) : null;
  let s = a ? r.getStyleNode(a) : null;
  if (!s) return null;
  let o = s.guid;
  let l = s.styleKeyForPublish;
  let d = s.styleVersionHash;
  return l && d ? {
    GUID: o,
    key: l,
    version: d,
    isLocalStyle: s.isLocalStyle
  } : null;
}
export let $$ef19 = eU(!1);
export const Bw = $$Q0;
export const I7 = $$ec1;
export const Lc = $$eu2;
export const P1 = $$es3;
export const S9 = $$ea4;
export const WE = $$em5;
export const WJ = $$ed6;
export const Yy = $$Z7;
export const bA = $$eo8;
export const cb = $$e_9;
export const ij = $$z10;
export const j_ = $$et11;
export const jk = $$er12;
export const kK = $$ei13;
export const lm = $$H14;
export const mO = $$ee15;
export const nm = $$eg16;
export const pk = $$ep17;
export const t_ = $$eh18;
export const wy = $$ef19;
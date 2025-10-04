import { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { deepEqual } from "../905/382883";
import { l as _$$l } from "../905/716947";
import { createRemovableAtomFamily, atom, setupDebounceAtoms, useAtomWithSubscription, atomStoreManager, Xr, useAtomValueAndSetter } from "../figma_app/27355";
import { selectAtom, loadable } from "../vendor/812047";
import c from "../vendor/946678";
import { analyticsEventManager, trackEventAnalytics } from "../905/449184";
import { $ as _$$$ } from "../905/455748";
import { asyncExecutorSubscription } from "../905/888985";
import { WebLoggerTimer } from "../905/485103";
import { equals } from "../figma_app/476572";
import { getExperimentConfigAsync } from "../figma_app/594947";
import { getEditorTypeFromView } from "../figma_app/976749";
import { mapFileToProductType } from "../figma_app/314264";
import { compareLibraryKeyWithString } from "../905/709171";
import { getAssetKeyForSubscription } from "../figma_app/473391";
import { filesByLibraryKeyAtom, assetKeysSetAtom } from "../905/977779";
import { resolveTeamId } from "../905/515860";
import { openFileAtom, openFileLibraryKeyAtom } from "../figma_app/516028";
import { selectedViewAtom } from "../figma_app/386952";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { getNonDeletedAssets, filterAssetsWithContainingStateGroup, addStateNamesToAssets } from "../figma_app/646357";
import { getPlanPublicInfoAtomFamily } from "../905/276025";
import { WorkerFuseSearch } from "../905/81982";
import { fileVersionSelector } from "../905/91038";
import { FEditorType } from "../figma_app/53721";
import { generateSessionId } from "../905/574958";
import { getUUID } from "../figma_app/517115";
import { getLibrarySubscriptionAtom, subscribedLibrariesAtom } from "../figma_app/825489";
import { I as _$$I } from "../figma_app/130633";
import { lj } from "../905/991973";
import { Ci } from "../figma_app/318590";
import { isFullscreenSitesView } from "../905/561485";
import { Z as _$$Z2 } from "../905/387928";
import { vz, dO } from "../905/921418";
import { Sv, eB, B0, PS } from "../figma_app/807786";
import { f$, K4, lR, AG, dm, Cc, d5, KK as _$$KK } from "../figma_app/707943";
var u = c;
var $$z0 = (e => (e[e.AssetsPanel = 0] = "AssetsPanel", e[e.InstanceSwapper = 1] = "InstanceSwapper", e[e.QuickActions = 2] = "QuickActions", e[e.FigJam = 3] = "FigJam", e))($$z0 || {});
let H = {
  0: 200
};
let W = {
  0: "asset_panel",
  1: "instance_swap",
  2: "actions_assets_tab",
  3: "figjam_tool_bar"
};
let $$K2 = W;
let Y = createRemovableAtomFamily(e => atom(t => (t(Z(e).debouncedValueAtom), t(ee(e)), generateSessionId())));
function q(e, t) {
  return t(et(e)).queryId ?? t(Y(e));
}
let $ = {};
let Z = e => {
  if (!$[e]) {
    if (H[e]) $[e] = setupDebounceAtoms("", H[e]);else {
      let t = atom("");
      $[e] = {
        currentValueAtom: t,
        debouncedValueAtom: t,
        isDebouncingAtom: atom(!1)
      };
    }
  }
  return $[e];
};
export function $$X3() {
  let {
    debouncedValueAtom
  } = Z(0);
  let t = useAtomWithSubscription(debouncedValueAtom);
  let [i, a] = useState(!1);
  let s = useSelector(e => e.library.assetsPanelSearch.query);
  useEffect(() => {
    _$$Z2().then(e => {
      a(!!e);
    });
  }, [a]);
  return i ? t : s;
}
let Q = createRemovableAtomFamily(e => atom(t => q(e, t)));
export function $$J1(e) {
  return useAtomWithSubscription(Q(e.includes("figjam") ? 3 : 0));
}
let ee = createRemovableAtomFamily((e, t) => atom(t ?? void 0), (e, t) => e === t);
let et = createRemovableAtomFamily(e => atom({}));
let ei = createReduxSubscriptionAtomWithState(fileVersionSelector);
let en = atom(e => e(lj).length > 0);
let er = {
  normalizedSearchResults: [],
  unsubscribedSearchResults: []
};
let ea = createReduxSubscriptionAtomWithState(e => {
  let {
    componentsByLibraryKey,
    stateGroupsByLibraryKey
  } = e.library.defaultPublished;
  return {
    defaultPublishedComponents: componentsByLibraryKey,
    defaultPublishedStateGroups: stateGroupsByLibraryKey
  };
});
let es = createReduxSubscriptionAtomWithState(e => {
  let {
    components,
    stateGroups
  } = e.library.local;
  return {
    components,
    stateGroups
  };
});
let eo = createReduxSubscriptionAtomWithState(e => e.library.assetsPanelSearch.shouldSearchDefaultLibraries);
let el = createReduxSubscriptionAtomWithState(e => e.search.sessionId);
let ed = selectAtom(selectedViewAtom, e => getEditorTypeFromView(e) === FEditorType.Design);
let ec = selectAtom(openFileAtom, f$, deepEqual);
let eu = createRemovableAtomFamily(e => atom(void 0));
let ep = createRemovableAtomFamily(e => atom(t => {
  let {
    libraryKeyBackingSelectedItems
  } = t(et(e));
  let n = t(getLibrarySubscriptionAtom("libraryKey"));
  return libraryKeyBackingSelectedItems ? new Set([...n, libraryKeyBackingSelectedItems]) : n;
}));
let em = selectAtom(filesByLibraryKeyAtom, e => new Set(Object.keys(e)), equals);
var eh = (e => (e[e.None = 0] = "None", e[e.All = 1] = "All", e[e.File = 2] = "File", e[e.Local = 3] = "Local", e))(eh || {});
let eg = createRemovableAtomFamily(e => atom(async t => {
  let i = t(Z(e).debouncedValueAtom);
  let n = t(ee(e));
  if (!i || !(await _$$Z2())) return 0;
  switch (n?.type) {
    case _$$I.LOCAL:
      return 3;
    case _$$I.FILE:
      return 2;
    case _$$I.RECENT:
    case void 0:
    case _$$I.ALL:
      return 1;
    case _$$I.SITE_KIT:
      return 0;
    default:
      return throwTypeError(n, "unknown search type");
  }
}));
let ef = atom(e => {
  let {
    components,
    stateGroups
  } = e(es);
  let {
    defaultPublishedComponents,
    defaultPublishedStateGroups
  } = e(ea);
  let a = [];
  let s = new Set();
  let o = e => {
    for (let t of e) {
      let e = getAssetKeyForSubscription(t);
      e && s.has(e) || (e && s.add(e), a.push({
        ...t
      }));
    }
  };
  o(getNonDeletedAssets(components));
  e(eo) && [defaultPublishedComponents, defaultPublishedStateGroups].forEach(e => {
    for (let t of Object.values(e)) o(Object.values(t));
  });
  let l = Object.values(filterAssetsWithContainingStateGroup(components));
  let d = Object.values(stateGroups);
  o(addStateNamesToAssets(d, l));
  return a;
});
let e_ = selectAtom(ef, e => e, (e, t) => {
  let i = new Set(e.map(e => getAssetKeyForSubscription(e)));
  let n = new Set(t.map(e => getAssetKeyForSubscription(e)));
  return i.size === n.size && [...i].every(e => n.has(e));
});
let eA = atom(e => {
  let t = new WorkerFuseSearch({
    keys: vz,
    ...dO
  });
  let i = e(e_);
  t.set(i);
  return t;
});
let ey = createRemovableAtomFamily(e => atom(async t => {
  let i;
  let n = await t(eg(e));
  if (0 === n) return er;
  let r = function (e, t) {
    let {
      sessionId
    } = e(et(t));
    let n = sessionId ?? atomStoreManager.get(el);
    let r = e(openFileLibraryKeyAtom);
    let a = atomStoreManager.get(selectedViewAtom);
    let s = e(Z(t).debouncedValueAtom);
    let d = e(ed);
    let c = e(ec);
    let m = e(eN);
    let h = c?.parentOrgId;
    let g = e(ee(t));
    let f = atomStoreManager.get(eP);
    let A = e(getLibrarySubscriptionAtom("libraryKey"));
    let b = e(eu(t));
    let v = q(t, e);
    return async (i, I, E) => {
      analyticsEventManager.trackDefinedEvent("assets_panel.component_search", {
        query: s,
        inDesignEditor: d,
        searchSessionId: n ?? "",
        assetsPanelVersion: b,
        fileKey: c?.key,
        fileTeamId: m ?? void 0,
        fileOrgId: h ?? void 0,
        queryId: v
      });
      null === n && trackEventAnalytics("asset_search.missing_session_id", {
        previousSessionId: f.sessionId,
        entryPoint: W[t]
      }, {
        forwardToDatadog: !0
      });
      let x = await Ci(!0);
      let S = {
        aiResultsEnabled: x,
        query: s,
        queryId: v,
        assetsPanelVersion: b,
        entryPoint: W[t],
        fileKey: c?.key,
        fileOrgId: h ?? void 0,
        fileTeamId: m ?? void 0,
        selectedViewFileKey: "fullscreen" === a.view && a.fileKey ? a.fileKey : void 0,
        totalShownResults: i.normalizedSearchResults.length,
        searchType: g?.type ?? _$$I.ALL,
        searchSessionId: n ?? "",
        sessionId: n ?? "",
        ...I,
        tier: e(getPlanPublicInfoAtomFamily(!0)).data?.tier
      };
      if (g?.type === _$$I.LOCAL) S.localSearchResultCount = i.normalizedSearchResults.length;else {
        let [e, t] = u()(i.normalizedSearchResults, e => e.library_key && e.library_key === r);
        S.localSearchResultCount = e.length;
        S.subscribedSearchResultCount = t.length;
        S.unsubscribedSearchResultsCount = i.unsubscribedSearchResults.length;
      }
      if (isFullscreenSitesView(a) && g?.type && [_$$I.ALL, _$$I.SITE_KIT].includes(g.type)) {
        let e = atomStoreManager.get(Sv);
        S.siteKitSearchResultsCount = e;
        S.totalShownResults = S.totalShownResults + e;
      }
      getExperimentConfigAsync("exp_asset_search_refactor");
      analyticsEventManager.trackDefinedEvent("assets_panel.search_time", S);
      analyticsEventManager.trackDefinedEvent("asset_search.query_result", {
        ...S,
        componentSuggestionSessionId: getUUID(),
        didNetworkFetch: E
      });
      await eB({
        results: i.normalizedSearchResults,
        subscribedLibraryKeys: A,
        sessionId: n ?? "",
        queryId: v,
        entryPoint: W[t],
        queryType: "text",
        aiResultsEnabled: x,
        fileKey: c?.key,
        libraryKey: _$$l(c?.libraryKey ?? ""),
        query: s,
        searchType: g?.type ?? _$$I.ALL,
        productType: mapFileToProductType({
          editorType: c?.editorType
        })
      });
    };
  }(t, e);
  await eC(e, t);
  let s = B0();
  let d = !1;
  switch (n) {
    case 3:
      i = await eb(e, t);
      break;
    case 2:
      let c = await eI(e, t);
      i = c.results;
      d = c.didNetworkFetch;
      break;
    case 1:
      let m = await ev(e, t);
      i = m.results;
      d = m.didNetworkFetch;
      break;
    default:
      return throwTypeError(n, "unknown search operation");
  }
  r(i, s(), d);
  return i;
}));
let eb = async (e, t) => {
  let i = t(ec);
  return {
    normalizedSearchResults: (await t(eE(e))).filter(e => compareLibraryKeyWithString(e, _$$l(i?.libraryKey ?? ""))),
    unsubscribedSearchResults: []
  };
};
let ev = async (e, t) => {
  let {
    debouncedValueAtom
  } = Z(e);
  let n = t(debouncedValueAtom);
  let r = q(e, t);
  let a = t(ec);
  let s = t(em);
  let o = t(ep(e));
  let l = t(assetKeysSetAtom);
  let d = await eD(() => Ci(!0), "asset_search.latency_segment.permission_check", e, t);
  let {
    preferLocal
  } = t(et(e));
  let [{
    results: u,
    lastQueryId: p
  }, {
    results: m,
    lastQueryId: h
  }, f] = await Promise.all([t(ex(e)), t(eS(e)), t(eE(e))]);
  let _ = new WebLoggerTimer();
  let A = K4(u, a, s, o, l);
  let y = lR(m, o, l);
  let b = PS(f, A.subscribedSearchResults, A.unsubscribedSearchResults, y.communitySearchResults, y.unsubscribedCommunitySearchResults, n, preferLocal ?? !1, d);
  eO("asset_search.latency_segment.filter_normalize_results", _, e, t);
  return {
    results: b,
    didNetworkFetch: r === p || r === h
  };
};
let eI = async (e, t) => {
  let i = await eD(() => Ci(!0), "asset_search.latency_segment.permission_check", e, t);
  let n = q(e, t);
  let {
    results,
    lastQueryId
  } = await t(ew(e));
  let s = new WebLoggerTimer();
  let o = {
    normalizedSearchResults: AG([], results, _$$I.FILE, i),
    unsubscribedSearchResults: []
  };
  eO("asset_search.latency_segment.filter_normalize_results", s, e, t);
  return {
    results: o,
    didNetworkFetch: n === lastQueryId
  };
};
let eE = createRemovableAtomFamily(e => atom(async t => {
  if (![3, 1].includes(await t(eg(e)))) return [];
  let i = new WebLoggerTimer();
  let n = t(Z(e).debouncedValueAtom);
  let r = t(eA);
  let a = await dm(r, n);
  eO("asset_search.latency_segment.local_fuse", i, e, t);
  return a;
}));
let ex = createRemovableAtomFamily(e => atom(async t => {
  if ((await t(eg(e))) !== 1) return {
    results: [],
    lastQueryId: ""
  };
  let i = new WebLoggerTimer();
  let n = t(Z(e).debouncedValueAtom);
  let r = t(ei);
  let a = t(ec);
  let s = atomStoreManager.get(selectedViewAtom);
  let o = t(ep(e));
  let {
    sessionId,
    selectedItems
  } = t(et(e));
  let u = sessionId ?? atomStoreManager.get(el);
  let p = q(e, t);
  let m = await Cc(n, r, a?.parentOrgId ?? null, a, s, o, u ?? "", p, $$K2[e], selectedItems);
  eO("asset_search.latency_segment.all_server_results_fetch", i, e, t);
  return {
    results: m,
    lastQueryId: p
  };
}));
let eS = createRemovableAtomFamily(e => atom(async t => {
  if ((await t(eg(e))) !== 1) return {
    results: [],
    lastQueryId: ""
  };
  let i = new WebLoggerTimer();
  let n = t(Z(e).debouncedValueAtom);
  let r = t(ed);
  let a = t(en);
  let s = q(e, t);
  let o = await d5(n, r, a);
  eO("asset_search.latency_segment.all_community_results_fetch", i, e, t);
  return {
    results: o,
    lastQueryId: s
  };
}));
let ew = createRemovableAtomFamily(e => atom(async t => {
  if ((await t(eg(e))) !== 2) return {
    results: [],
    lastQueryId: ""
  };
  let i = new WebLoggerTimer();
  let n = t(Z(e).debouncedValueAtom);
  let r = t(ee(e));
  let a = r?.type === _$$I.FILE ? r.libraryKey : _$$l("");
  let s = t(ec);
  let {
    sessionId,
    selectedItems
  } = t(et(e));
  let u = sessionId ?? atomStoreManager.get(el);
  let p = q(e, t);
  let m = await _$$KK(n, a, s?.key ?? "", u ?? "", s?.editorType?.toString(), p, $$K2[e], selectedItems);
  eO("asset_search.latency_segment.file_results_fetch", i, e, t);
  return {
    results: m,
    lastQueryId: p
  };
}));
async function eC(e, t) {
  let i = new WebLoggerTimer();
  1 === (await t(eg(e))) && (await asyncExecutorSubscription(subscribedLibrariesAtom, e => {
    let t = atomStoreManager.get(subscribedLibrariesAtom);
    "loaded" === t.status && e(t);
  }));
  eO("asset_search.latency_segment.wait_for_dependencies", i, e, t);
}
export function $$eT4(e) {
  let {
    currentValueAtom,
    debouncedValueAtom,
    isDebouncingAtom
  } = Z(e);
  let a = useAtomWithSubscription(currentValueAtom);
  let o = useAtomWithSubscription(isDebouncingAtom);
  let c = Xr(debouncedValueAtom);
  let [u, p] = useAtomValueAndSetter(ee(e));
  let h = useCallback((e, t) => {
    c(e);
    t && p(t);
  }, [c, p]);
  let g = function (e) {
    let t = useAtomWithSubscription(loadable(ey(e)));
    let i = useAtomWithSubscription(Z(e).debouncedValueAtom);
    let r = useAtomWithSubscription(ee(e));
    let [a, o] = useAtomValueAndSetter(eR(e));
    let c = _$$$(t);
    useEffect(() => {
      c && "hasData" === t.state && o({
        results: t.data,
        assetSearchFilter: r,
        query: i
      });
    }, [i, e, c, t, r, o]);
    return useMemo(() => "loading" === t.state && a && a.query === i && deepEqual(a.assetSearchFilter, r) ? {
      state: "hasData",
      data: a.results
    } : t, [i, a, t, r]);
  }(e);
  let f = "loading" === g.state || o;
  let _ = "hasData" === g.state ? g.data : er;
  let A = Xr(eu(e));
  useEffect(() => {
    A(3);
  }, [A]);
  return {
    query: a,
    setQuery: h,
    searchOption: u,
    setSearchOption: p,
    results: _,
    isLoading: f
  };
}
export async function $$ek5(e, t, i, n = {}) {
  atomStoreManager.set(Z(i).debouncedValueAtom, e);
  atomStoreManager.set(ee(i), t);
  atomStoreManager.set(et(i), n);
  return await atomStoreManager.get(ey(i));
}
let eR = createRemovableAtomFamily(e => atom(null));
let eN = createReduxSubscriptionAtomWithState(resolveTeamId);
let eP = createReduxSubscriptionAtomWithState(e => e.search.lastLoadedQuery);
function eO(e, t, i, n) {
  let {
    sessionId
  } = n(et(i));
  let a = sessionId ?? atomStoreManager.get(el);
  let s = q(i, n);
  t.stop(i => {
    analyticsEventManager.trackDefinedEvent(e, {
      elapsedTime: i,
      backgrounded: t.backgrounded || t.offlined,
      sessionId: a ?? void 0,
      queryId: s
    });
  });
}
async function eD(e, t, i, n) {
  let r = new WebLoggerTimer();
  let a = await e();
  eO(t, r, i, n);
  return a;
}
export const Cn = $$z0;
export const Rn = $$J1;
export const g_ = $$K2;
export const oA = $$X3;
export const qi = $$eT4;
export const tq = $$ek5;
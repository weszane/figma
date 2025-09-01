import { useState, useEffect, useCallback, useMemo } from "react";
import { d4 } from "../vendor/514228";
import { xb } from "../figma_app/465776";
import { c2 } from "../905/382883";
import { l as _$$l } from "../905/716947";
import { Iz, eU, Zb, md, zl, Xr, fp } from "../figma_app/27355";
import { selectAtom, loadable } from "../vendor/812047";
import c from "../vendor/946678";
import { az, sx } from "../905/449184";
import { $ as _$$$ } from "../905/455748";
import { QO } from "../905/888985";
import { rw } from "../905/485103";
import { yZ } from "../figma_app/476572";
import { hW } from "../figma_app/594947";
import { XE } from "../figma_app/976749";
import { pi } from "../figma_app/314264";
import { Ui } from "../905/709171";
import { V as _$$V } from "../figma_app/473391";
import { qp, hN } from "../905/977779";
import { Z as _$$Z } from "../905/515860";
import { yV, _S } from "../figma_app/516028";
import { OC } from "../figma_app/386952";
import { bt } from "../905/270322";
import { X0, WV, Gg } from "../figma_app/646357";
import { KK } from "../905/276025";
import { KH } from "../905/81982";
import { vx } from "../905/91038";
import { nT } from "../figma_app/53721";
import { Ei } from "../905/574958";
import { r6 } from "../figma_app/517115";
import { cY, I1 } from "../figma_app/825489";
import { I as _$$I } from "../figma_app/130633";
import { lj } from "../905/991973";
import { Ci } from "../figma_app/318590";
import { Vj } from "../905/561485";
import { Z as _$$Z2 } from "../905/387928";
import { vz, dO } from "../905/921418";
import { Sv, eB, B0, PS } from "../figma_app/807786";
import { f$, K4, lR, AG, dm, Cc, d5, KK as _$$KK } from "../figma_app/707943";
var u = c;
var $$z0 = ((e) => (e[e.AssetsPanel = 0] = "AssetsPanel", e[e.InstanceSwapper = 1] = "InstanceSwapper", e[e.QuickActions = 2] = "QuickActions", e[e.FigJam = 3] = "FigJam", e))($$z0 || {});
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
let Y = Iz((e) => eU((t) => (t(Z(e).debouncedValueAtom), t(ee(e)), Ei())));
function q(e, t) {
  return t(et(e)).queryId ?? t(Y(e));
}
let $ = {};
let Z = (e) => {
  if (!$[e]) {
    if (H[e]) $[e] = Zb("", H[e]);else {
      let t = eU("");
      $[e] = {
        currentValueAtom: t,
        debouncedValueAtom: t,
        isDebouncingAtom: eU(!1)
      };
    }
  }
  return $[e];
};
export function $$X3() {
  let {
    debouncedValueAtom
  } = Z(0);
  let t = md(debouncedValueAtom);
  let [i, a] = useState(!1);
  let s = d4((e) => e.library.assetsPanelSearch.query);
  useEffect(() => {
    _$$Z2().then((e) => {
      a(!!e);
    });
  }, [a]);
  return i ? t : s;
}
let Q = Iz((e) => eU((t) => q(e, t)));
export function $$J1(e) {
  return md(Q(e.includes("figjam") ? 3 : 0));
}
let ee = Iz((e, t) => eU(t ?? void 0), (e, t) => e === t);
let et = Iz((e) => eU({}));
let ei = bt(vx);
let en = eU((e) => e(lj).length > 0);
let er = {
  normalizedSearchResults: [],
  unsubscribedSearchResults: []
};
let ea = bt((e) => {
  let {
    componentsByLibraryKey,
    stateGroupsByLibraryKey
  } = e.library.defaultPublished;
  return {
    defaultPublishedComponents: componentsByLibraryKey,
    defaultPublishedStateGroups: stateGroupsByLibraryKey
  };
});
let es = bt((e) => {
  let {
    components,
    stateGroups
  } = e.library.local;
  return {
    components,
    stateGroups
  };
});
let eo = bt((e) => e.library.assetsPanelSearch.shouldSearchDefaultLibraries);
let el = bt((e) => e.search.sessionId);
let ed = selectAtom(OC, (e) => XE(e) === nT.Design);
let ec = selectAtom(yV, f$, c2);
let eu = Iz((e) => eU(void 0));
let ep = Iz((e) => eU((t) => {
  let {
    libraryKeyBackingSelectedItems
  } = t(et(e));
  let n = t(cY("libraryKey"));
  return libraryKeyBackingSelectedItems ? new Set([...n, libraryKeyBackingSelectedItems]) : n;
}));
let em = selectAtom(qp, (e) => new Set(Object.keys(e)), yZ);
var eh = ((e) => (e[e.None = 0] = "None", e[e.All = 1] = "All", e[e.File = 2] = "File", e[e.Local = 3] = "Local", e))(eh || {});
let eg = Iz((e) => eU(async (t) => {
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
      return xb(n, "unknown search type");
  }
}));
let ef = eU((e) => {
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
  let o = (e) => {
    for (let t of e) {
      let e = _$$V(t);
      e && s.has(e) || (e && s.add(e), a.push({
        ...t
      }));
    }
  };
  o(X0(components));
  e(eo) && [defaultPublishedComponents, defaultPublishedStateGroups].forEach((e) => {
    for (let t of Object.values(e)) o(Object.values(t));
  });
  let l = Object.values(WV(components));
  let d = Object.values(stateGroups);
  o(Gg(d, l));
  return a;
});
let e_ = selectAtom(ef, (e) => e, (e, t) => {
  let i = new Set(e.map((e) => _$$V(e)));
  let n = new Set(t.map((e) => _$$V(e)));
  return i.size === n.size && [...i].every((e) => n.has(e));
});
let eA = eU((e) => {
  let t = new KH({
    keys: vz,
    ...dO
  });
  let i = e(e_);
  t.set(i);
  return t;
});
let ey = Iz((e) => eU(async (t) => {
  let i;
  let n = await t(eg(e));
  if (0 === n) return er;
  let r = function (e, t) {
    let {
      sessionId
    } = e(et(t));
    let n = sessionId ?? zl.get(el);
    let r = e(_S);
    let a = zl.get(OC);
    let s = e(Z(t).debouncedValueAtom);
    let d = e(ed);
    let c = e(ec);
    let m = e(eN);
    let h = c?.parentOrgId;
    let g = e(ee(t));
    let f = zl.get(eP);
    let A = e(cY("libraryKey"));
    let b = e(eu(t));
    let v = q(t, e);
    return async (i, I, E) => {
      az.trackDefinedEvent("assets_panel.component_search", {
        query: s,
        inDesignEditor: d,
        searchSessionId: n ?? "",
        assetsPanelVersion: b,
        fileKey: c?.key,
        fileTeamId: m ?? void 0,
        fileOrgId: h ?? void 0,
        queryId: v
      });
      null === n && sx("asset_search.missing_session_id", {
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
        tier: e(KK(!0)).data?.tier
      };
      if (g?.type === _$$I.LOCAL) S.localSearchResultCount = i.normalizedSearchResults.length;else {
        let [e, t] = u()(i.normalizedSearchResults, (e) => e.library_key && e.library_key === r);
        S.localSearchResultCount = e.length;
        S.subscribedSearchResultCount = t.length;
        S.unsubscribedSearchResultsCount = i.unsubscribedSearchResults.length;
      }
      if (Vj(a) && g?.type && [_$$I.ALL, _$$I.SITE_KIT].includes(g.type)) {
        let e = zl.get(Sv);
        S.siteKitSearchResultsCount = e;
        S.totalShownResults = S.totalShownResults + e;
      }
      hW("exp_asset_search_refactor");
      az.trackDefinedEvent("assets_panel.search_time", S);
      az.trackDefinedEvent("asset_search.query_result", {
        ...S,
        componentSuggestionSessionId: r6(),
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
        productType: pi({
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
      return xb(n, "unknown search operation");
  }
  r(i, s(), d);
  return i;
}));
let eb = async (e, t) => {
  let i = t(ec);
  return {
    normalizedSearchResults: (await t(eE(e))).filter((e) => Ui(e, _$$l(i?.libraryKey ?? ""))),
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
  let l = t(hN);
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
  let _ = new rw();
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
  let s = new rw();
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
let eE = Iz((e) => eU(async (t) => {
  if (![3, 1].includes(await t(eg(e)))) return [];
  let i = new rw();
  let n = t(Z(e).debouncedValueAtom);
  let r = t(eA);
  let a = await dm(r, n);
  eO("asset_search.latency_segment.local_fuse", i, e, t);
  return a;
}));
let ex = Iz((e) => eU(async (t) => {
  if ((await t(eg(e))) !== 1) return {
    results: [],
    lastQueryId: ""
  };
  let i = new rw();
  let n = t(Z(e).debouncedValueAtom);
  let r = t(ei);
  let a = t(ec);
  let s = zl.get(OC);
  let o = t(ep(e));
  let {
    sessionId,
    selectedItems
  } = t(et(e));
  let u = sessionId ?? zl.get(el);
  let p = q(e, t);
  let m = await Cc(n, r, a?.parentOrgId ?? null, a, s, o, u ?? "", p, $$K2[e], selectedItems);
  eO("asset_search.latency_segment.all_server_results_fetch", i, e, t);
  return {
    results: m,
    lastQueryId: p
  };
}));
let eS = Iz((e) => eU(async (t) => {
  if ((await t(eg(e))) !== 1) return {
    results: [],
    lastQueryId: ""
  };
  let i = new rw();
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
let ew = Iz((e) => eU(async (t) => {
  if ((await t(eg(e))) !== 2) return {
    results: [],
    lastQueryId: ""
  };
  let i = new rw();
  let n = t(Z(e).debouncedValueAtom);
  let r = t(ee(e));
  let a = r?.type === _$$I.FILE ? r.libraryKey : _$$l("");
  let s = t(ec);
  let {
    sessionId,
    selectedItems
  } = t(et(e));
  let u = sessionId ?? zl.get(el);
  let p = q(e, t);
  let m = await _$$KK(n, a, s?.key ?? "", u ?? "", s?.editorType?.toString(), p, $$K2[e], selectedItems);
  eO("asset_search.latency_segment.file_results_fetch", i, e, t);
  return {
    results: m,
    lastQueryId: p
  };
}));
async function eC(e, t) {
  let i = new rw();
  1 === (await t(eg(e))) && (await QO(I1, (e) => {
    let t = zl.get(I1);
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
  let a = md(currentValueAtom);
  let o = md(isDebouncingAtom);
  let c = Xr(debouncedValueAtom);
  let [u, p] = fp(ee(e));
  let h = useCallback((e, t) => {
    c(e);
    t && p(t);
  }, [c, p]);
  let g = function (e) {
    let t = md(loadable(ey(e)));
    let i = md(Z(e).debouncedValueAtom);
    let r = md(ee(e));
    let [a, o] = fp(eR(e));
    let c = _$$$(t);
    useEffect(() => {
      c && "hasData" === t.state && o({
        results: t.data,
        assetSearchFilter: r,
        query: i
      });
    }, [i, e, c, t, r, o]);
    return useMemo(() => "loading" === t.state && a && a.query === i && c2(a.assetSearchFilter, r) ? {
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
  zl.set(Z(i).debouncedValueAtom, e);
  zl.set(ee(i), t);
  zl.set(et(i), n);
  return await zl.get(ey(i));
}
let eR = Iz((e) => eU(null));
let eN = bt(_$$Z);
let eP = bt((e) => e.search.lastLoadedQuery);
function eO(e, t, i, n) {
  let {
    sessionId
  } = n(et(i));
  let a = sessionId ?? zl.get(el);
  let s = q(i, n);
  t.stop((i) => {
    az.trackDefinedEvent(e, {
      elapsedTime: i,
      backgrounded: t.backgrounded || t.offlined,
      sessionId: a ?? void 0,
      queryId: s
    });
  });
}
async function eD(e, t, i, n) {
  let r = new rw();
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
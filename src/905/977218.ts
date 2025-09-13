import { debounce } from "../905/915765";
import { deepEqual } from "../905/382883";
import { getFeatureFlags } from "../905/601108";
import { createActionCreator } from "../905/73481";
import { PerfTimer } from "../905/609396";
import { XHR, XHRError } from "../905/910117";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { W0 as _$$W, Dy as _$$Dy, ky as _$$ky, NR as _$$NR, Pj as _$$Pj, r0 as _$$r, Je as _$$Je, pY as _$$pY } from "../figma_app/925970";
import { createOptimistThunk } from "../905/350402";
import { trackFileBrowserPlanFilterSelected } from "../figma_app/314264";
import { zU } from "../figma_app/740025";
import { N } from "../905/696711";
import { Or, Lk, Lr, uH, j9, Rr, Rx } from "../figma_app/162807";
import { vj as _$$vj, Ei } from "../905/574958";
import { $W } from "../905/144933";
let $$y28 = createOptimistThunk(async (e, t) => {
  let {
    orgId,
    searchQuery,
    previousSearches
  } = t;
  if (!e.getState().user?.id) return;
  let a = previousSearches.filter(e => e.query !== searchQuery);
  await XHR.put("/api/recent_search", {
    org_id: orgId,
    searches: a
  }).catch(e => {
    console.error("Failed to add search history with error: " + e.data.message);
  });
});
let $$b22 = createOptimistThunk(async (e, t) => {
  let {
    searchQuery,
    previousSearches
  } = t;
  let r = e.getState();
  let a = r.user?.id;
  let s = r.currentUserOrgId;
  let o = zU(r.selectedView);
  if (!a || o) return;
  let d = previousSearches.filter(e => e.query !== searchQuery);
  let c = {
    query: searchQuery,
    timestamp: new Date().getTime().toString()
  };
  d.push(c);
  d.sort((e, t) => parseInt(t.timestamp) - parseInt(e.timestamp));
  let u = {
    org_id: s,
    searches: d = d.slice(0, Or)
  };
  await XHR.put("/api/recent_search", u).catch(e => {
    console.error("Failed to add search history with error: " + e.message);
  });
});
let $$v8 = createOptimistThunk((e, t) => {
  let i = e.getState().search.parameters;
  let n = t.searchTypeBehavior;
  delete t.searchTypeBehavior;
  e.dispatch($$en13({
    ...t
  }));
  let a = e.getState();
  let s = a.search.parameters;
  s.query === i.query && (s.searchModelType !== i.searchModelType || s.searchScope !== i.searchScope) && _$$vj.Session.trackModelOrScopeChange(t.searchModelType, t.searchScope);
  a.search.responses && null !== a.search.responses[s.searchModelType] || deepEqual(i, s) || e.dispatch($$L0({
    precacheInactiveTypes: !0,
    searchTypeBehavior: n
  }));
});
let $$I30 = createOptimistThunk((e, t) => {
  let i = e.getState();
  _$$vj.Session.trackLicenseGroupFilterDropdownClick(i.search, t.clickType);
});
let $$E27 = createOptimistThunk(e => {
  null !== e.getState().search.parameters.planFilter && e.dispatch($$L0({
    parameters: {
      planFilter: null,
      workspaceFilter: null
    },
    precacheInactiveTypes: !0
  }));
});
let $$x17 = createOptimistThunk((e, t) => {
  e.getState().search.parameters.planFilter !== t.planFilter && (trackFileBrowserPlanFilterSelected(t.planFilter, "search", void 0), e.dispatch($$L0({
    parameters: {
      ...t,
      workspaceFilter: null
    },
    precacheInactiveTypes: !0
  })));
});
let $$S29 = createActionCreator("SEARCH_RESET_FILE_TYPE_FILTER");
let $$w3 = createOptimistThunk(e => {
  let t = e.getState();
  null !== t.search.parameters.workspaceFilter && (_$$vj.Session.trackWorkspaceFilterChange(t.search, null), e.dispatch($$L0({
    parameters: {
      workspaceFilter: null
    },
    precacheInactiveTypes: !0
  })));
});
let $$C6 = createOptimistThunk((e, t) => {
  let i = e.getState();
  i.search.parameters.workspaceFilter !== t.workspaceFilter && (_$$vj.Session.trackWorkspaceFilterChange(i.search, t.workspaceFilter), e.dispatch($$L0({
    parameters: {
      ...t
    },
    precacheInactiveTypes: !0
  })));
});
let $$T25 = createOptimistThunk((e, t) => {
  let i = e.getState();
  let n = i.search.parameters.sortState;
  if (n && JSON.stringify(n) !== JSON.stringify(t.sortState)) {
    if (R(n, t.sortState)) {
      k(t.sortState, i);
      e.dispatch($$en13(t));
      e.dispatch($$ei2(t.sortState));
      return;
    }
    e.dispatch($$L0({
      parameters: {
        ...t
      },
      precacheInactiveTypes: !1
    }));
  }
});
let k = (e, t) => {
  let i = t.search.responses.files?.results;
  i && (i.sort((e, t) => e.model.owner?.handle.localeCompare(t.model.owner?.handle ?? "") ?? 0), e.files.sortDesc && i.reverse());
};
let R = (e, t) => t.files.sortKey === Lk.OWNER && (e.files.sortKey !== t.files.sortKey || e.files.sortDesc !== t.files.sortDesc);
let $$N9 = createOptimistThunk((e, t) => {
  let i = e.getState();
  let n = () => {
    let n = e => e.trim().split(/\s+/);
    let a = n(i.search.parameters.query);
    let s = n(t.query);
    let o = i.search.parameters.facetFilters;
    let l = t.facetFilters ?? null;
    let d = D(i.selectedView.view) || !!t.overrideIsFullResultsView;
    let c = d || t.query.length < 500;
    if ((d || t.query.length < 500) && JSON.stringify(a) === JSON.stringify(s) && !t.forceRefreshSearchResults && deepEqual(o, l)) {
      e.dispatch($$v8({
        searchModelType: t.searchModelType,
        searchScope: t.searchScope,
        searchTypeBehavior: t.searchTypeBehavior
      }));
      return;
    }
    if (!c) {
      e.dispatch($$en13({
        ...t
      }));
      return;
    }
    e.getState().search.sessionId || (e.dispatch($$M1({
      entryPoint: "unattributed"
    })), console.error("No search session when changing query"));
    e.dispatch($$L0({
      parameters: {
        ...t
      },
      precacheInactiveTypes: t.precacheInactiveTypes ?? !0,
      searchTypeBehavior: t.searchTypeBehavior,
      overrideIsFullResultsView: t.overrideIsFullResultsView
    }));
  };
  t.debounce ? es(n) : n();
});
let P = (e, t, i, n, r, s) => {
  e || console.error("We shouldn't be searching without setting a sessionId");
  let c = new PerfTimer("search.timer.unified_search", {});
  c.start();
  let u = ea(t, i.sortState);
  return new Promise((o, p) => {
    var m;
    let h = Lr(i.facetFilters);
    (m = {
      query: i.query,
      ...u,
      ...er(n, !0),
      queryId: s,
      sessionId: e || "",
      ...h,
      searchModelType: t
    }, $W.getFullResults(m)).then(e => {
      e.data || p(getI18nString("search.invalid_search_endpoint_result"));
      let n = r.getState().search.parameters.facetFilters?.searchModelType ?? uH.FILES;
      if (n === t && (r.dispatch($$X12({
        parameters: {
          ...i
        },
        response: {
          ...e.data.meta,
          search_model_type: t,
          metrics: {
            roundTripTime: c.getElapsedTime()
          }
        },
        queryId: s
      })), _$$vj.Session.trackTimeToLoad(r.getState().search), o(), getFeatureFlags().scrub_file_browser_search_results && n === uH.FILES)) {
        let t = {};
        e.data.meta.results.forEach(e => {
          let i = e.model;
          t[i.name] = i.preview_thumbnail_urls;
        });
        console.log("[Search FB Fragments Debug] Preview thumbnail URLs:", t);
      }
    }, e => {
      e instanceof XHRError && e.data && e.data.i18n || console.error(e);
      p(e);
    }).$$finally(() => {
      c.stop();
    });
  });
};
let O = (e, t, i, n, r, a) => {
  e || console.error("We shouldn't be searching without setting a sessionId");
  let s = new PerfTimer("search.timer.unified_search", {});
  s.start();
  return new Promise((o, c) => {
    var u;
    let p = Lr(t.facetFilters);
    (u = {
      query: t.query,
      sort: j9.RELEVANCY,
      desc: !0,
      ...er(n, !0),
      queryId: a,
      sessionId: e || "",
      ...p
    }, $W.getPreviewResults(u)).then(e => {
      e.data || c(getI18nString("search.invalid_search_endpoint_result"));
      r.dispatch($$Z32({
        parameters: {
          ...t
        },
        responses: e.data.meta,
        queryId: a,
        reset: i,
        roundTripTime: s.getElapsedTime()
      }));
      _$$vj.Session.trackTimeToLoad(r.getState().search);
      o();
    }, e => {
      e instanceof XHRError && e.data && e.data.i18n || console.error(e);
      c(e);
    }).$$finally(() => {
      s.stop();
    });
  });
};
let D = e => "search" === e;
let $$L0 = createOptimistThunk((e, t) => {
  void 0 !== t.parameters && e.dispatch($$en13({
    ...t.parameters
  }));
  e.dispatch($$H20({
    searchTypeBehavior: t.searchTypeBehavior ?? Rr.ONE_TYPE
  }));
  let i = e.getState();
  let n = i.search.parameters;
  let {
    sessionId
  } = i.search;
  let {
    query,
    searchScope,
    workspaceFilter = null,
    planFilter = null,
    facetFilters
  } = n;
  let u = D(i.selectedView.view) || !!t.overrideIsFullResultsView;
  let p = {
    searchScope,
    currentOrgId: i.currentUserOrgId,
    workspaceId: workspaceFilter,
    planId: planFilter
  };
  if ((!query || "" === query.trim()) && !facetFilters) {
    e.dispatch($$ee16({
      keepFocus: !0
    }));
    return;
  }
  let m = Ei();
  let h = e => {
    if (e.data && e.data.i18n) return resolveMessage(e);
  };
  if (u) {
    let t = P(sessionId, n.facetFilters && n.facetFilters.searchModelType ? n.facetFilters.searchModelType : uH.FILES, n, p, e, m);
    let i = $$L0.loadingKeyForPayload({
      parameters: n
    });
    N(t, e, i, h);
  } else {
    let t = O(sessionId, n, !1, p, e, m);
    let i = $$L0.loadingKeyForPayload({
      parameters: n
    });
    N(t, e, i, h);
  }
}, ({
  parameters: e
}) => `SEARCH_${e?.query}_${e?.facetFilters ? JSON.stringify(e.facetFilters) : ""}_${e ? JSON.stringify(e.sortState) : ""}`);
let $$F14 = _$$W;
let $$M1 = _$$Dy;
let $$j21 = _$$ky;
let $$U7 = _$$NR;
let $$B11 = _$$Pj;
let $$V26 = _$$r;
let $$G4 = _$$Je;
let $$z23 = _$$pY;
let $$H20 = createActionCreator("SEARCH_SET_SEARCH_TYPE_BEHAVIOR");
let $$W10 = createActionCreator("SEARCH_SET_SCROLL_TOP");
let $$K19 = createActionCreator("SEARCH_SET_LAST_ACKED_QUERY_ID");
let $$Y31 = createActionCreator("SEARCH_SET_LAST_LOADED_QUERY");
let $$q18 = createActionCreator("SEARCH_SET_QUERY_ID");
let $ = e => {
  let t = createActionCreator(e);
  let i = e => t(e);
  i.matches = t.matches;
  return i;
};
let $$Z32 = (e => {
  let t = createActionCreator(e);
  let i = e => t(e);
  i.matches = t.matches;
  return i;
})("SEARCH_SET_RESPONSES");
let $$X12 = $("SEARCH_SET_FULL_RESULTS_SEARCH_RESPONSE");
let $$Q5 = $("SEARCH_SET_RESPONSE");
let $$J15 = createActionCreator("SEARCH_SET_FOCUS");
let $$ee16 = createActionCreator("SEARCH_CLEAR_QUERY");
let $$et24 = createActionCreator("SEARCH_CLEAR_RESPONSES");
let $$ei2 = createActionCreator("SEARCH_SET_RESPONSE_SORT_STATE");
let $$en13 = createActionCreator("SEARCH_SET_PARAMETERS");
let er = (e, t, i) => e.searchScope !== Rx.ORG && e.searchScope !== Rx.ORG_GUEST ? {
  currentOrgId: e.currentOrgId,
  isGlobal: t,
  planId: "NON_ORG_TEAMS" === e.planId ? null : e.planId,
  planType: "NON_ORG_TEAMS" === e.planId ? "team" : "org"
} : i && i === uH.PRIVATE_WIDGETS ? {
  orgSearch: !0,
  currentOrgId: e.currentOrgId,
  isGlobal: t
} : {
  workspaceId: e.workspaceId,
  orgId: e.currentOrgId,
  currentOrgId: e.currentOrgId,
  planId: "NON_ORG_TEAMS" === e.planId ? null : e.planId,
  planType: "NON_ORG_TEAMS" === e.planId ? "team" : "org",
  isGlobal: t
};
let ea = (e, t) => {
  let i = t[e];
  if (!i) return {
    sort: void 0,
    desc: void 0
  };
  let n = {
    sortKey: void 0,
    sortDesc: void 0,
    ...i
  };
  return n.sortKey || n.sortDesc ? {
    sort: n.sortKey,
    desc: n.sortDesc
  } : {
    sort: void 0,
    desc: void 0
  };
};
let es = debounce(e => {
  e();
}, 400);
export const $P = $$L0;
export const Dy = $$M1;
export const H7 = $$ei2;
export const HI = $$w3;
export const Je = $$G4;
export const KQ = $$Q5;
export const MB = $$C6;
export const NR = $$U7;
export const Ns = $$v8;
export const PI = $$N9;
export const PP = $$W10;
export const Pj = $$B11;
export const R7 = $$X12;
export const Rz = $$en13;
export const W0 = $$F14;
export const Z6 = $$J15;
export const _z = $$ee16;
export const c3 = $$x17;
export const eK = $$q18;
export const ej = $$K19;
export const hS = $$H20;
export const ky = $$j21;
export const nG = $$b22;
export const pY = $$z23;
export const qr = $$et24;
export const qv = $$T25;
export const r0 = $$V26;
export const tw = $$E27;
export const uL = $$y28;
export const vK = $$S29;
export const vj = $$I30;
export const w2 = $$Y31;
export const zy = $$Z32;
import { throwTypeError } from "../figma_app/465776";
import { l as _$$l } from "../905/716947";
import { atomStoreManager } from "../figma_app/27355";
import s from "../vendor/946678";
import { analyticsEventManager, trackEventAnalytics } from "../905/449184";
import { debugState } from "../905/407919";
import { hW } from "../figma_app/594947";
import { isInteractionOrEvalMode } from "../figma_app/897289";
import { Dy, pY } from "../figma_app/925970";
import { createOptimistThunk } from "../905/350402";
import { xI, Y1 } from "../905/879323";
import { eK, w2 } from "../905/977218";
import { XE } from "../figma_app/976749";
import { mapFileToProductType } from "../figma_app/314264";
import { getSelectedFile } from "../905/766303";
import { compareWithGeneratedKey } from "../905/709171";
import { memoizedProcessLocalComponents, processLocalComponents } from "../figma_app/80990";
import { V as _$$V } from "../figma_app/473391";
import { qp } from "../905/977779";
import { X0, A0, WV, Gg, ET } from "../figma_app/646357";
import { D2 } from "../905/18797";
import { KH } from "../905/81982";
import { FEditorType } from "../figma_app/53721";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { Ei } from "../905/574958";
import { r6 } from "../figma_app/517115";
import { I as _$$I } from "../figma_app/130633";
import { lj } from "../905/991973";
import { yD } from "../905/92359";
import { Ci } from "../figma_app/318590";
import { n as _$$n } from "../905/347702";
import { B0, Og, BG, eB, eu, Sv } from "../figma_app/807786";
import { debounce } from "../905/915765";
import { dm, Al } from "../figma_app/707943";
var o = s;
class M {
  constructor() {
    this.dirtySources = !1;
    this.subscribedLibraryKeys = new Set();
    this.queryDidChange = e => {
      this.debouncedComputeResults(e);
    };
    this.searchOptionsDidChange = e => {
      this.debouncedComputeResults(e);
    };
    this.subscriptionsDidChange = (e, t, i) => {
      this.subscribedLibraryKeys = i;
      this.debouncedComputeResults(e);
    };
    this.refreshSourcesIfNeeded = e => {
      this.dirtySources && (this.initSources(e), this.dirtySources = !1);
    };
    this.runComputeResultWithSourceChange = e => {
      this.initSources(e);
      this.dirtySources = !1;
      this.debouncedComputeResults(e);
    };
    this.debouncedComputeResults = debounce(e => {
      this.refreshSourcesIfNeeded(e);
      "" === e.getState().library.assetsPanelSearch.query || e.getState().search.sessionId || e.dispatch(Dy({
        entryPoint: "editor:assets_panel"
      }));
      this.computeResultsRedux(e);
    }, 200);
    this.initSources = e => {};
    this.computeResultsRedux = e => {};
  }
  sourcesDidChange() {
    this.dirtySources = !0;
  }
}
let $$U4 = [{
  name: "name",
  weight: 0.6
}, {
  name: "stateNames",
  weight: 0.4
}, {
  name: "containing_frame.name",
  weight: 0.1
}, {
  name: "containing_frame.pageName",
  weight: 0.1
}, {
  name: "description",
  weight: 0.05
}];
let $$B2 = {
  threshold: 0.3,
  tokenize: !0,
  shouldSort: !0
};
let V = new KH({
  keys: $$U4,
  ...$$B2
});
let $$G0 = new class extends M {
  constructor() {
    super(...arguments);
    this.lastUpdatedQuery = isInteractionOrEvalMode() ? 0 : Date.now();
    this.expSearchUnpublishedAssetsEnabled = void 0;
    this.initSources = e => {
      let t = e.getState();
      let i = getSelectedFile(t);
      i && ((e, n) => {
        let r = [];
        let a = new Set();
        let s = e => {
          for (let t of e) {
            let e = _$$V(t);
            e && a.has(e) || (e && a.add(e), r.push({
              ...t
            }));
          }
        };
        s(X0(n));
        t.library.assetsPanelSearch.shouldSearchDefaultLibraries && (s(A0(t.library, memoizedProcessLocalComponents(t.library.defaultPublished.componentsByLibraryKey), i, this.subscribedLibraryKeys)), s(A0(t.library, t.library.defaultPublished.stateGroupsByLibraryKey, i, this.subscribedLibraryKeys)));
        let o = Object.values(WV(t.library.local.components));
        let l = Object.values(t.library.local.stateGroups);
        s(Gg(l, o));
        e.set(r);
      })(V, processLocalComponents(t.library.local.components));
    };
    this.computeLocalResultsPromise = async (e, t, i) => {
      let n = B0();
      let r = dm(V, e);
      let a = (await r).filter(e => compareWithGeneratedKey(e, t));
      let {
        elapsedTime,
        backgrounded
      } = n();
      analyticsEventManager.trackDefinedEvent("asset_search.compute_local_results_time", {
        elapsedTime,
        searchSessionId: i ?? "",
        backgrounded
      });
      return {
        normalizedSearchResults: a,
        unsubscribedSearchResults: []
      };
    };
    this.computeFileResultsPromise = async (e, t, i, n, r, a, s, o) => await Og(e, t, i, n, r, a, s, o);
    this.computeAllResultsPromise = async (e, t, i, n, r, a, s, o, l, d, c, u, p, m = !1, h) => await BG(e, t, i, n, r, a, s, o, l, V, this.subscribedLibraryKeys, d, c, u, p, m, h);
    this.computeResultsReduxSearchTypeHelper = async (e, t, i, s, o, c, u, p, m, h) => {
      let g;
      let f = B0();
      let A = debugState.getState();
      let y = ET(A, debugState.dispatch);
      let {
        elapsedTime: _elapsedTime,
        backgrounded: _backgrounded
      } = f();
      analyticsEventManager.trackDefinedEvent("asset_search.compute_results_redux.get_used_product_component_keys_time", {
        elapsedTime: _elapsedTime,
        backgrounded: _backgrounded,
        searchSessionId: o ?? ""
      });
      let I = atomStoreManager.get(lj).length > 0;
      switch (t?.type) {
        case _$$I.LOCAL:
          return this.computeLocalResultsPromise(e, A.openFile?.key, o);
        case _$$I.FILE:
          g = this.computeFileResultsPromise(e, t.libraryKey, A.selectedView?.view === "fullscreen" && A.selectedView?.fileKey || A.openFile?.key, o, A.openFile?.editorType?.toString(), u, c, h);
          break;
        case _$$I.RECENT:
        case void 0:
        case _$$I.ALL:
          g = this.computeAllResultsPromise(e, i, A.fileVersion, A.openFile?.parentOrgId ?? null, A.openFile, A.selectedView, s, o, y, u, c, p, m, I, h);
          break;
        case _$$I.SITE_KIT:
          return Promise.resolve({
            normalizedSearchResults: [],
            unsubscribedSearchResults: []
          });
        default:
          return throwTypeError(t, "unknown search type");
      }
      let x = await Ci(!0);
      let S = await g;
      let w = B0();
      await eB({
        results: S.normalizedSearchResults,
        subscribedLibraryKeys: this.subscribedLibraryKeys,
        sessionId: o ?? "",
        queryId: u ?? "",
        entryPoint: c ?? "",
        queryType: "text",
        aiResultsEnabled: x,
        productType: mapFileToProductType({
          editorType: A.openFile?.editorType
        }),
        libraryKey: _$$l(A.openFile?.libraryKey ?? ""),
        fileKey: A.openFile?.key,
        query: e,
        searchType: t?.type ?? _$$I.ALL
      });
      let {
        elapsedTime,
        backgrounded
      } = w();
      analyticsEventManager.trackDefinedEvent("asset_search.compute_results_redux.track_top_k_results_time", {
        elapsedTime,
        backgrounded,
        searchSessionId: o ?? ""
      });
      return g;
    };
    this.computeResultsRedux = async e => {
      let t = B0();
      let i = e.getState();
      let n = Ei();
      let r = atomStoreManager.get(qp);
      let s = i.library.assetsPanelSearch.query;
      let d = i.openFile?.key;
      let u = i.openFile?.teamId;
      let m = i.openFile?.parentOrgId;
      if (!s || !d) {
        e.dispatch(xI());
        e.dispatch(eK({
          queryId: null
        }));
        return;
      }
      e.dispatch(eK({
        queryId: n
      }));
      let _ = i.library.assetsPanelSearch.searchOptions;
      if (_ && !eu(_)) {
        e.dispatch(xI());
        e.dispatch(eK({
          queryId: null
        }));
        return;
      }
      let A = await Ci(!0);
      let b = XE(i.selectedView) === FEditorType.Design;
      analyticsEventManager.trackDefinedEvent("assets_panel.component_search", {
        query: s,
        inDesignEditor: b,
        searchSessionId: i.search.sessionId ?? "",
        assetsPanelVersion: i.library.assetsPanelSearch.versionForTracking,
        fileKey: d,
        fileTeamId: u ?? void 0,
        fileOrgId: m ?? void 0,
        queryId: n
      });
      i.search.sessionId && e.dispatch(pY());
      let v = Date.now();
      if (v <= this.lastUpdatedQuery) return;
      let E = await this.computeResultsReduxSearchTypeHelper(s, _, b, r, i.search.sessionId, i.library.assetsPanelSearch.entryPoint, n);
      let x = {
        aiResultsEnabled: A,
        query: s,
        queryId: n,
        assetsPanelVersion: i.library.assetsPanelSearch.versionForTracking,
        entryPoint: i.library.assetsPanelSearch.entryPoint,
        fileKey: d,
        fileOrgId: m ?? void 0,
        fileTeamId: u ?? void 0,
        selectedViewFileKey: "fullscreen" === i.selectedView.view && i.selectedView.fileKey ? i.selectedView.fileKey : void 0,
        totalShownResults: E.normalizedSearchResults.length,
        tier: Al()
      };
      if (_?.type === _$$I.LOCAL) {
        e.dispatch(Y1(E));
        e.dispatch(w2({
          sessionId: i.search.sessionId,
          query: s,
          queryId: n
        }));
        null === i.search.sessionId && trackEventAnalytics("asset_search.missing_session_id", {
          previousSessionId: i.search.lastLoadedQuery.sessionId,
          entryPoint: i.library.assetsPanelSearch.entryPoint
        }, {
          forwardToDatadog: !0
        });
        let {
          elapsedTime,
          backgrounded
        } = t();
        let o = {
          elapsedTime,
          backgrounded,
          localSearchResultCount: E.normalizedSearchResults.length,
          searchType: _?.type
        };
        await hW("exp_asset_search_refactor");
        analyticsEventManager.trackDefinedEvent("assets_panel.search_time", {
          ...x,
          ...o,
          searchSessionId: i.search.sessionId ?? ""
        });
        analyticsEventManager.trackDefinedEvent("asset_search.query_result", {
          ...x,
          ...o,
          sessionId: i.search.sessionId ?? "",
          componentSuggestionSessionId: r6()
        });
        this.lastUpdatedQuery = v;
        return;
      }
      if (s !== e.getState().library.assetsPanelSearch.query) return;
      e.dispatch(Y1(E));
      e.dispatch(w2({
        sessionId: i.search.sessionId,
        query: s,
        queryId: i.search.queryId
      }));
      let [S, C] = o()(E.normalizedSearchResults, e => compareWithGeneratedKey(e, d));
      null === i.search.sessionId && trackEventAnalytics("asset_search.missing_session_id", {
        previousSessionId: i.search.lastLoadedQuery.sessionId,
        entryPoint: i.library.assetsPanelSearch.entryPoint
      }, {
        forwardToDatadog: !0
      });
      let {
        elapsedTime,
        backgrounded
      } = t();
      let D = {
        elapsedTime,
        backgrounded,
        localSearchResultCount: S.length,
        subscribedSearchResultCount: C.length,
        unsubscribedSearchResultsCount: E.unsubscribedSearchResults.length,
        searchType: _?.type ?? _$$I.ALL
      };
      let F = {};
      let M = i.selectedView;
      if ("fullscreen" === M.view && (M.editorType === FEditorType.Sites || M.editorType === FEditorType.Figmake) && _?.type && [_$$I.ALL, _$$I.SITE_KIT].includes(_?.type)) {
        let e = atomStoreManager.get(Sv);
        F = {
          siteKitSearchResultsCount: e,
          totalShownResults: x.totalShownResults + e
        };
      }
      await hW("exp_asset_search_refactor");
      analyticsEventManager.trackDefinedEvent("assets_panel.search_time", {
        ...x,
        ...D,
        ...F,
        searchSessionId: i.search.sessionId ?? ""
      });
      analyticsEventManager.trackDefinedEvent("asset_search.query_result", {
        ...x,
        ...D,
        ...F,
        sessionId: i.search.sessionId ?? "",
        componentSuggestionSessionId: r6()
      });
      this.lastUpdatedQuery = v;
    };
  }
}();
let $$z3 = createOptimistThunk((e, {
  ignoreLoadingState: t = !1
} = {}) => {
  e.getState().search.sessionId || e.dispatch(Dy({
    entryPoint: "editor:assets_panel"
  }));
  $$H5(e.getState(), {
    ignoreLoadingState: t
  }) && $$G0.runComputeResultWithSourceChange(e);
});
let $$H5 = _$$n((e, {
  ignoreLoadingState: t = !1
} = {}) => t ? !!(e.openFile && e.fileVersion) : !!(e.openFile && e.fileVersion && D2(e.loadingState, yD(e.openFile.key))));
let W = e => e.type === PrimaryWorkflowEnum.COMPONENT;
let K = e => e.type === PrimaryWorkflowEnum.STATE_GROUP;
export function $$Y1(e) {
  return e.filter(e => W(e) || K(e));
}
export const YG = $$G0;
export const Ow = $$Y1;
export const dO = $$B2;
export const QB = $$z3;
export const vz = $$U4;
export const Wg = $$H5;
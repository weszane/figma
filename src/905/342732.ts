import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { selectExperimentConfigHook } from "../figma_app/594947";
import { setAssetsSearchQuery, setAssetsSearchOptions } from "../905/879323";
import { qp } from "../905/977779";
import { openFileAtom } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { tq, g_, qi } from "../905/225265";
import { Z } from "../905/387928";
import { YG } from "../905/921418";
import { UQ } from "../figma_app/807786";
export async function $$f1(e, t, i, n = {}) {
  return (await Z()) ? await tq(e, t, i, n) : await YG.computeResultsReduxSearchTypeHelper(e, t, atomStoreManager.get(openFileAtom)?.editorType === FFileType.DESIGN, atomStoreManager.get(qp), n.sessionId ?? null, g_[i], n.queryId, n.preferLocal, n.libraryKeyBackingSelectedItems, n.selectedItems);
}
export function $$_0(e) {
  let t = useSelector(UQ);
  let i = useDispatch();
  let s = g_[e];
  let d = useCallback((e, t) => i(setAssetsSearchQuery({
    query: e,
    searchOptions: t,
    versionForTracking: 3,
    entryPoint: s
  })), [i, s]);
  let c = useCallback(e => i(setAssetsSearchOptions({
    searchOptions: e
  })), [i]);
  let u = qi(e);
  let {
    getConfig
  } = selectExperimentConfigHook("exp_asset_search_refactor", void 0, !0);
  return useMemo(() => {
    if (!getFeatureFlags().dse_refactor_asset_search_debug_only && !getConfig().getValue("use_refactor", !1)) {
      let {
        normalizedSearchResults,
        unsubscribedSearchResults
      } = t;
      let n = {
        normalizedSearchResults,
        unsubscribedSearchResults
      };
      return {
        query: t.query,
        setQuery: d,
        searchResults: n,
        searchOption: t.searchOptions,
        setSearchOption: c,
        isLoading: t.isLoading,
        results: n
      };
    }
    return u;
  }, [t, u, d, c, getConfig]);
}
export const I = $$_0;
export const V = $$f1;
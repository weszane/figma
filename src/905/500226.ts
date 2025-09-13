import { useMemo, useCallback } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { mapFileToProductType } from "../figma_app/314264";
import { o as _$$o } from "../figma_app/915774";
import { X } from "../905/853613";
import { Hu, GZ } from "../figma_app/361662";
import { u as _$$u } from "../905/290607";
import { selectCurrentFile } from "../figma_app/516028";
import { u2 } from "../figma_app/807786";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { $z } from "../figma_app/297733";
import { CK } from "../figma_app/517115";
import { TG } from "../905/72677";
import { XG } from "../figma_app/98578";
import { Nv } from "../figma_app/318590";
import { WP } from "../905/198599";
import { cq } from "../905/794154";
import { eg } from "../figma_app/297822";
import { Jc } from "../905/946805";
import { dd } from "../figma_app/604494";
import { useIsSelectedFigmakeFullscreen } from "../figma_app/552876";
import { xA } from "../905/742325";
export let $$w0 = "Quick Actions Component Search";
export function $$C1({
  asset: e,
  assetTypeDropdownSelection: t,
  sectionPosition: i,
  openFileKey: C,
  assetInsertionCallback: T
}) {
  let {
    currentSearch
  } = useAtomWithSubscription(WP);
  let R = useAtomWithSubscription(TG);
  let N = "visual-search";
  currentSearch?.input.type === "input-text" && (N = currentSearch.input.query);
  let P = Hu(e.library_key);
  let O = GZ(e.library_key, P);
  let D = useAtomWithSubscription(dd);
  let L = Nv(currentSearch?.input.type === "input-text");
  let F = useIsSelectedFigmakeFullscreen();
  let M = F ? "figmake" : "actions_assets_tab";
  let j = selectCurrentFile();
  let U = CK();
  let B = useMemo(() => ({
    assetKey: u2(e),
    assetLibraryKey: e.library_key,
    sectionPosition: i,
    assetTypeDropdownSelection: t,
    libraryType: P,
    viewMode: "GRID",
    searchQuery: N,
    searchSessionId: D ?? "",
    source: $$w0,
    sourceSection: $$w0,
    type: e.type === PrimaryWorkflowEnum.COMPONENT ? "component" : "state_group",
    subscriptionLevel: O,
    isExample: _$$o(e, R),
    partnerType: X(e.library_key),
    productType: mapFileToProductType({
      editorType: j?.editorType
    })
  }), [e, t, P, j?.editorType, R, N, D, i, O]);
  let {
    close
  } = cq();
  return {
    afterSuccessfulInsert: useCallback(() => {
      let t = {
        aiResultsEnabled: L,
        assetKey: B.assetKey,
        assetType: B.type,
        query: N,
        queryId: currentSearch ? currentSearch.queryId : "",
        scoreAi: e.ai_score ?? void 0,
        scoreLexical: e.lexical_score ?? void 0,
        sessionId: D ?? void 0,
        productType: B.productType,
        entryPoint: M
      };
      trackEventAnalytics("actions_assets_tab.insert", {
        ...t,
        sectionPosition: i
      });
      analyticsEventManager.trackDefinedEvent("asset_search.result_inserted", {
        ...t,
        libraryType: B.libraryType,
        position: i,
        reciprocalRank: 1 / (1 + i),
        componentSuggestionSessionId: U
      });
      F || XG({
        moduleFilters: xA.COMPONENTS,
        action: "insert-asset-component-search",
        searchPosition: i,
        numSearchResults: null,
        rankingAlgorithm: eg(Jc.ASSETS)
      });
      $z();
      close();
    }, [L, B.assetKey, B.type, B.productType, B.libraryType, N, currentSearch, e.ai_score, e.lexical_score, D, M, i, U, F, close]),
    componentInsertSwapCallback: _$$u({
      canSwap: !0,
      openFileKey: C,
      sourceForTracking: $$w0,
      insertLogArgsOverride: B,
      insertionCallback: T
    })
  };
}
export const B = $$w0;
export const H = $$C1;
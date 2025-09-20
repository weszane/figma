import { useCallback } from "react";
import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { l as _$$l } from "../905/716947";
import { atom, Xr, atomStoreManager } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { useDebouncedCallback } from "use-debounce";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { getExperimentConfigAsync } from "../figma_app/594947";
import { generateUUIDv4 } from "../905/871474";
import { Point } from "../905/736624";
import { yt, m1, SW, T1 } from "../figma_app/545293";
import { getEditorTypeFromView } from "../figma_app/976749";
import { mapFileToProductType } from "../figma_app/314264";
import { qp } from "../905/977779";
import { selectOpenFile } from "../figma_app/516028";
import { resolveFileParentOrgId, getSubscribedAssetKeys } from "../figma_app/646357";
import { V } from "../905/342732";
import { Cn, g_ } from "../905/225265";
import { Z } from "../905/387928";
import { Wg, YG, Ow } from "../905/921418";
import { B0, eB } from "../figma_app/807786";
import { UR, cu, Al } from "../figma_app/707943";
import { getPlanPublicInfoAtomFamily } from "../905/276025";
import { h as _$$h } from "../figma_app/198885";
import { vx, t_ } from "../905/91038";
import { FEditorType } from "../figma_app/53721";
import { searchAPIHandler } from "../905/144933";
import { r6 } from "../figma_app/517115";
import { cY, I1 } from "../figma_app/825489";
import { I as _$$I } from "../figma_app/130633";
import { lj } from "../905/991973";
import { Ci } from "../figma_app/318590";
import { dd } from "../figma_app/604494";
import { s as _$$s } from "../905/234042";
import { isFigmakeFullscreenView } from "../figma_app/552876";
let $$V3 = atom({
  currentSearch: null
});
let $$G0 = atom({
  type: _$$I.ALL
});
export function $$z2({
  debounceWait: e = 300,
  onSearchSuccess: t
}) {
  let i = _$$s();
  let r = Xr($$V3);
  let a = useDebouncedCallback($$H1, e);
  let s = useCallback(() => {
    a.cancel();
    r(() => ({
      currentSearch: null
    }));
  }, [a, r]);
  return {
    debouncedAssetSearch: useCallback((e, n) => {
      e ? a({
        type: "input-text",
        query: e,
        assetTypeOption: n,
        isKnownLibrary: i
      }, t) : s();
    }, [a, s, i, t]),
    clearAssetSearchAndCancelDebounce: s,
    cancelDebouncedAssetSearch: a.cancel,
    flushDebouncedAssetSearch: a.flush
  };
}
export async function $$H1(e, t) {
  let i = debugState.getState();
  let n = selectOpenFile(i);
  let d = vx(i);
  let g = B0();
  let f = await Ci("input-text" === e.type);
  let C = atomStoreManager.get(cY("fileKey"));
  let P = atomStoreManager.get(cY("libraryKey"));
  let L = isFigmakeFullscreenView(i.selectedView) ? "figmake" : "input-text" === e.type ? "actions_assets_tab" : "actions_visual_search";
  if (!n || null == d) return;
  let U = generateUUIDv4();
  let G = atomStoreManager.get(dd);
  atomStoreManager.set($$V3, () => ({
    currentSearch: {
      queryId: U,
      input: e,
      result: resourceUtils.loading()
    }
  }));
  try {
    let a;
    let p = 1;
    for (; !Wg(debugState.getState()) && p <= 50;) {
      await new Promise(e => setTimeout(e, 200 * p));
      p++;
    }
    if (!Wg(debugState.getState())) throw Error("Failed to initialize assets");
    i = debugState.getState();
    let h = {
      ...e,
      openFile: selectOpenFile(i),
      selectedView: _$$h(i),
      inDesignEditor: getEditorTypeFromView(_$$h(i)) === FEditorType.Design,
      fileVersion: d,
      currentOrgId: resolveFileParentOrgId(i),
      fileByKey: t_(i),
      libraryByLibraryKey: atomStoreManager.get(qp),
      includeVisualAssets: atomStoreManager.get(lj).length > 0,
      usedAssetKeys: getSubscribedAssetKeys(i, debugState.dispatch)
    };
    let M = {
      sessionId: G ?? "",
      queryId: U,
      entryPoint: L,
      queryType: h.type.replace("input-", ""),
      aiResultsEnabled: f,
      productType: mapFileToProductType({
        editorType: n?.editorType
      }),
      libraryKey: _$$l(i.openFile?.libraryKey ?? ""),
      fileKey: n?.key,
      subscribedLibraryFileKeys: C,
      subscribedLibraryKeys: P
    };
    switch (h.type) {
      case "input-text":
        {
          YG.refreshSourcesIfNeeded(debugState);
          let {
            query,
            assetTypeOption
          } = h;
          let i = (await V(query, assetTypeOption, Cn.QuickActions, {
            sessionId: G ?? void 0,
            queryId: U
          })).normalizedSearchResults;
          i = i.filter(e => h.isKnownLibrary(e));
          a = Ow(i);
          break;
        }
      case "input-image":
        a = await K(h, G, U);
        await eB({
          results: a,
          ...M
        });
        break;
      case "input-selection":
        a = await Y(h, G, U);
        await eB({
          results: a,
          ...M
        });
        break;
      default:
        throwTypeError(h);
    }
    if (atomStoreManager.get($$V3).currentSearch?.queryId !== U) return;
    null === G && trackEventAnalytics("asset_search.missing_session_id", {
      previousSessionId: i.search.lastLoadedQuery.sessionId,
      entryPoint: g_[Cn.QuickActions]
    }, {
      forwardToDatadog: !0
    });
    let {
      elapsedTime,
      backgrounded
    } = g();
    if (!("input-text" === h.type && (await Z()))) {
      let e = {
        aiResultsEnabled: f,
        elapsedTime,
        backgrounded,
        query: "input-text" === h.type ? h.query : void 0,
        queryId: U,
        subscribedSearchResultCount: a.length,
        entryPoint: L,
        fileKey: n?.key,
        numSubscribedLibraries: atomStoreManager.get(I1).data?.length ?? 0,
        queryType: h.type.replace("input-", ""),
        selectedViewFileKey: "fullscreen" === i.selectedView.view && i.selectedView.fileKey ? i.selectedView.fileKey : void 0,
        totalShownResults: a.length,
        tier: atomStoreManager.get(getPlanPublicInfoAtomFamily(!0)).data?.tier
      };
      await getExperimentConfigAsync("exp_asset_search_refactor");
      analyticsEventManager.trackDefinedEvent("assets_panel.search_time", {
        ...e,
        searchSessionId: G ?? ""
      });
      analyticsEventManager.trackDefinedEvent("asset_search.query_result", {
        ...e,
        sessionId: G ?? "",
        componentSuggestionSessionId: r6()
      });
    }
    atomStoreManager.set($$V3, () => ({
      currentSearch: {
        queryId: U,
        input: e,
        result: resourceUtils.loaded(a)
      }
    }));
    t && t();
  } catch (t) {
    if (reportError(_$$e.SEARCH_AI, t), atomStoreManager.get($$V3).currentSearch?.queryId !== U) return;
    atomStoreManager.set($$V3, () => ({
      currentSearch: {
        queryId: U,
        input: e,
        result: resourceUtils.error(t)
      }
    }));
  }
}
function W(e, t, i) {
  let n;
  e.assetTypeOption.type === _$$I.FILE ? n = [e.assetTypeOption.libraryKey] : i && (YG.subscribedLibraryKeys.size < UR ? n = Array.from(YG.subscribedLibraryKeys) : trackEventAnalytics("actions_visual_search.maximum_subscribed_libraries_reached", {
    searchSessionId: t,
    fileKey: e.openFile?.key,
    fileVersion: e.fileVersion,
    currentOrgId: e.currentOrgId,
    numSubscribedLibraryKeys: Array.from(YG.subscribedLibraryKeys).length
  }));
  return n;
}
async function K(e, t, i) {
  let {
    usedProductComponentsOnPage,
    usedProductComponentsFromUnsubscribedLibrary
  } = await cu(debugState.getState(), YG.subscribedLibraryKeys, e.openFile?.libraryKey ? _$$l(e.openFile.libraryKey) : _$$l(""));
  let a = await yt(e.imageFile);
  let o = m1(new Point(a.width, a.height));
  let l = await SW(a, o, e.imageFile);
  return (await searchAPIHandler.postComponentsFromImage(l, {
    openFileKey: e.openFile?.key || "",
    searchSessionId: t || "",
    queryId: i,
    subscribedLibraryKeys: W(e, t, await Ci(!1)),
    usedProductComponents: usedProductComponentsOnPage,
    usedProductComponentsFromUnsubscribedLibrary,
    productType: e.openFile?.editorType?.toString(),
    tier: Al()
  })).data.meta;
}
async function Y(e, t, i) {
  let n = T1(e.node);
  if (!n) throw Error("Failed to export thumbnail");
  let {
    usedProductComponentsOnPage,
    usedProductComponentsFromUnsubscribedLibrary
  } = await cu(debugState.getState(), YG.subscribedLibraryKeys, e.openFile?.libraryKey ? _$$l(e.openFile.libraryKey) : _$$l(""));
  return (await searchAPIHandler.postComponentsFromImage({
    type: "image",
    value: n
  }, {
    openFileKey: e.openFile?.key || "",
    searchSessionId: t || "",
    queryId: i,
    subscribedLibraryKeys: W(e, t, await Ci(!1)),
    usedProductComponents: usedProductComponentsOnPage,
    usedProductComponentsFromUnsubscribedLibrary,
    productType: e.openFile?.editorType?.toString(),
    tier: Al()
  })).data.meta;
}
export function $$q4(e) {
  let {
    currentSearch
  } = atomStoreManager.get($$V3);
  return null === currentSearch || "input-text" !== currentSearch.input.type ? e.length > 0 : currentSearch.input.query !== e;
}
export const B1 = $$G0;
export const ES = $$H1;
export const TC = $$z2;
export const WP = $$V3;
export const kN = $$q4;
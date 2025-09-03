import { useCallback } from "react";
import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { l as _$$l } from "../905/716947";
import { eU, Xr, zl } from "../figma_app/27355";
import { Qw } from "../905/989992";
import { A as _$$A } from "../vendor/90566";
import { sx, az } from "../905/449184";
import { debugState } from "../905/407919";
import { $D } from "../905/11";
import { hW } from "../figma_app/594947";
import { g as _$$g } from "../905/880308";
import { Point } from "../905/736624";
import { yt, m1, SW, T1 } from "../figma_app/545293";
import { XE } from "../figma_app/976749";
import { pi } from "../figma_app/314264";
import { qp } from "../905/977779";
import { tB } from "../figma_app/516028";
import { eD, ET } from "../figma_app/646357";
import { V } from "../905/342732";
import { Cn, g_ } from "../905/225265";
import { Z } from "../905/387928";
import { Wg, YG, Ow } from "../905/921418";
import { B0, eB } from "../figma_app/807786";
import { UR, cu, Al } from "../figma_app/707943";
import { KK } from "../905/276025";
import { h as _$$h } from "../figma_app/198885";
import { vx, t_ } from "../905/91038";
import { nT } from "../figma_app/53721";
import { $W } from "../905/144933";
import { r6 } from "../figma_app/517115";
import { cY, I1 } from "../figma_app/825489";
import { I as _$$I } from "../figma_app/130633";
import { lj } from "../905/991973";
import { Ci } from "../figma_app/318590";
import { dd } from "../figma_app/604494";
import { s as _$$s } from "../905/234042";
import { Jh } from "../figma_app/552876";
let $$V3 = eU({
  currentSearch: null
});
let $$G0 = eU({
  type: _$$I.ALL
});
export function $$z2({
  debounceWait: e = 300,
  onSearchSuccess: t
}) {
  let i = _$$s();
  let r = Xr($$V3);
  let a = _$$A($$H1, e);
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
  let n = tB(i);
  let d = vx(i);
  let g = B0();
  let f = await Ci("input-text" === e.type);
  let C = zl.get(cY("fileKey"));
  let P = zl.get(cY("libraryKey"));
  let L = Jh(i.selectedView) ? "figmake" : "input-text" === e.type ? "actions_assets_tab" : "actions_visual_search";
  if (!n || null == d) return;
  let U = _$$g();
  let G = zl.get(dd);
  zl.set($$V3, () => ({
    currentSearch: {
      queryId: U,
      input: e,
      result: Qw.loading()
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
      openFile: tB(i),
      selectedView: _$$h(i),
      inDesignEditor: XE(_$$h(i)) === nT.Design,
      fileVersion: d,
      currentOrgId: eD(i),
      fileByKey: t_(i),
      libraryByLibraryKey: zl.get(qp),
      includeVisualAssets: zl.get(lj).length > 0,
      usedAssetKeys: ET(i, debugState.dispatch)
    };
    let M = {
      sessionId: G ?? "",
      queryId: U,
      entryPoint: L,
      queryType: h.type.replace("input-", ""),
      aiResultsEnabled: f,
      productType: pi({
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
    if (zl.get($$V3).currentSearch?.queryId !== U) return;
    null === G && sx("asset_search.missing_session_id", {
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
        numSubscribedLibraries: zl.get(I1).data?.length ?? 0,
        queryType: h.type.replace("input-", ""),
        selectedViewFileKey: "fullscreen" === i.selectedView.view && i.selectedView.fileKey ? i.selectedView.fileKey : void 0,
        totalShownResults: a.length,
        tier: zl.get(KK(!0)).data?.tier
      };
      await hW("exp_asset_search_refactor");
      az.trackDefinedEvent("assets_panel.search_time", {
        ...e,
        searchSessionId: G ?? ""
      });
      az.trackDefinedEvent("asset_search.query_result", {
        ...e,
        sessionId: G ?? "",
        componentSuggestionSessionId: r6()
      });
    }
    zl.set($$V3, () => ({
      currentSearch: {
        queryId: U,
        input: e,
        result: Qw.loaded(a)
      }
    }));
    t && t();
  } catch (t) {
    if ($D(_$$e.SEARCH_AI, t), zl.get($$V3).currentSearch?.queryId !== U) return;
    zl.set($$V3, () => ({
      currentSearch: {
        queryId: U,
        input: e,
        result: Qw.error(t)
      }
    }));
  }
}
function W(e, t, i) {
  let n;
  e.assetTypeOption.type === _$$I.FILE ? n = [e.assetTypeOption.libraryKey] : i && (YG.subscribedLibraryKeys.size < UR ? n = Array.from(YG.subscribedLibraryKeys) : sx("actions_visual_search.maximum_subscribed_libraries_reached", {
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
  return (await $W.postComponentsFromImage(l, {
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
  return (await $W.postComponentsFromImage({
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
  } = zl.get($$V3);
  return null === currentSearch || "input-text" !== currentSearch.input.type ? e.length > 0 : currentSearch.input.query !== e;
}
export const B1 = $$G0;
export const ES = $$H1;
export const TC = $$z2;
export const WP = $$V3;
export const kN = $$q4;
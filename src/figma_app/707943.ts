import { l as _$$l } from "../905/716947";
import { atomStoreManager } from "../figma_app/27355";
import a from "../vendor/946678";
import o from "../vendor/241899";
import { analyticsEventManager } from "../905/449184";
import { debugState } from "../905/407919";
import { WebLoggerTimer } from "../905/485103";
import { fetchDynamicConfig } from "../figma_app/594947";
import { figmaLibrariesEnabledAtom } from "../figma_app/657017";
import { compareWithGeneratedKey } from "../905/709171";
import { isBranchAlt } from "../905/760074";
import { getAssetKey, getComponentAssetsMap, getComponentLibraryKey, getStateGroupLibraryKey } from "../figma_app/646357";
import { withParsedMeta } from "../905/405710";
import { FFileType } from "../figma_app/191312";
import { liveStoreInstance } from "../905/713695";
import { getPlanPublicInfoAtomFamily } from "../905/276025";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { searchAPIHandler, mapStateToVariant } from "../905/144933";
import { I as _$$I } from "../figma_app/130633";
import { Z } from "../905/387928";
var s = a;
var l = o;
export let $$A5 = 40;
export async function $$x12(e, t, r, n, i, a, s, o, l, c, p, _) {
  let h = new WebLoggerTimer();
  let m = $$C3(await $$N2(e, t, r, n, i, s, o, c, p, _), n, new Set(Object.keys(a)), s, l);
  h.stop(e => {
    analyticsEventManager.trackDefinedEvent("asset_search.fetch_all_server_side_search_results_time", {
      elapsedTime: e,
      searchSessionId: o,
      backgrounded: h.backgrounded || h.offlined
    });
  });
  return m;
}
export async function $$N2(e, t, r, i, a, s, o, l, u, p) {
  try {
    let d = i?.editorType === FFileType.WHITEBOARD;
    let _ = s.size < $$A5;
    let h = a?.view === "fullscreen" && a?.fileKey || i?.key || "";
    let m = i?.libraryKey ? _$$l(i?.libraryKey) : null;
    let g = new Set(s);
    let {
      usedProductComponentsOnPage,
      usedProductComponentsFromUnsubscribedLibrary
    } = await $$L7(debugState.getState(), s, m);
    let b = {
      query: e,
      openFileKey: h,
      fv: t || 0,
      orgId: r || void 0,
      excludeAIResults: d,
      subscribedLibraryKeys: _ ? Array.from(g) : void 0,
      searchSessionId: o,
      isUi3: !0,
      productType: i?.editorType?.toString(),
      queryId: l,
      selectedItems: p,
      usedProductComponents: usedProductComponentsOnPage,
      usedProductComponentsFromUnsubscribedLibrary,
      entryPoint: u,
      tier: $$G1()
    };
    return (await searchAPIHandler.postComponents(b)).data.meta;
  } catch (t) {
    analyticsEventManager.trackDefinedEvent("assets_panel.server_search_for_all_components_failure", {
      query: e
    });
    return [];
  }
}
export function $$C3(e, t, r, n, i) {
  let a = t && (isBranchAlt(t) ? t.sourceFileKey : "");
  let o = e.filter(e => !compareWithGeneratedKey(e, a) && r.has(e.library_key)).map(e => ({
    ...e,
    server_score: e.score
  }));
  let [l, d] = s()(o, e => n.has(e.library_key) || t?.libraryKey === e.library_key || i.has(getAssetKey(e)));
  return {
    subscribedSearchResults: l,
    unsubscribedSearchResults: d
  };
}
function w(e, t, r) {
  let n = e / 2;
  let i = Math.min(t.length, n);
  let a = Math.min(r.length, n);
  return [...t.slice(0, i), ...r.slice(0, a), ...t.slice(i), ...r.slice(a)].slice(0, e);
}
function O(e) {
  let t = e.mirror.sceneGraph;
  return {
    components: e.library.subscribedSymbolsOnCurrentPage.filter(e => {
      let r = t.get(e.nodeId);
      return !r?.containingStateGroupId;
    }).map(e => ({
      key: e.key,
      type: PrimaryWorkflowEnum.COMPONENT
    })),
    stateGroups: e.library.subscribedStateGroupsOnCurrentPage.map(e => ({
      key: e.key,
      type: PrimaryWorkflowEnum.STATE_GROUP
    }))
  };
}
function R(e, t) {
  let r = e => new Set(e.map(e => e.key));
  let n = (e, t) => e.filter(e => !t.has(e.key));
  let i = r(e);
  let a = t.filter(e => i.has(e.key));
  let s = r(a);
  return {
    itemsOverlapping: a,
    itemsOnPageFromSubscribedLib: n(e, s),
    itemsNotOnPageFromUnsubscribedLib: n(t, s)
  };
}
export async function $$L7(e, t, r) {
  let {
    components,
    stateGroups
  } = O(e);
  let {
    components: _components,
    stateGroups: _stateGroups
  } = function (e, t, r) {
    let n = getComponentAssetsMap(r.library.publishedByLibraryKey.components);
    let i = getComponentAssetsMap(r.library.publishedByLibraryKey.stateGroups);
    let a = r.mirror.sceneGraph;
    return {
      components: r.library.subscribedSymbolsFromLoadedPages.filter(r => {
        let i = a.get(r.nodeId);
        let s = getComponentLibraryKey(r.key, n);
        return !i?.containingStateGroupId && s && !e.has(s) && s !== t;
      }).map(e => ({
        key: e.key,
        type: PrimaryWorkflowEnum.COMPONENT
      })),
      stateGroups: r.library.subscribedStateGroupsFromLoadedPages.map(e => ({
        key: e.key,
        type: PrimaryWorkflowEnum.STATE_GROUP
      })).filter(r => {
        let n = getStateGroupLibraryKey(r.key, i);
        return n && !e.has(n) && n !== t;
      })
    };
  }(t, r, e);
  let {
    itemsOverlapping,
    itemsOnPageFromSubscribedLib,
    itemsNotOnPageFromUnsubscribedLib
  } = R(components, _components);
  let {
    itemsOverlapping: _itemsOverlapping,
    itemsOnPageFromSubscribedLib: _itemsOnPageFromSubscribedLib,
    itemsNotOnPageFromUnsubscribedLib: _itemsNotOnPageFromUnsubscribedLib
  } = R(stateGroups, _stateGroups);
  let h = (await fetchDynamicConfig("max_product_components_to_log")).get("count", 1e3);
  let m = (await fetchDynamicConfig("percent_used_product_components_on_page")).get("percent", .5);
  let f = w(h, itemsOverlapping, _itemsOverlapping);
  let E = h - f.length;
  let y = w(Math.max(Math.floor(m * E), E - itemsNotOnPageFromUnsubscribedLib.length - _itemsNotOnPageFromUnsubscribedLib.length), itemsOnPageFromSubscribedLib, _itemsOnPageFromSubscribedLib);
  let b = w(h - (f = f.concat(y)).length, itemsNotOnPageFromUnsubscribedLib, _itemsNotOnPageFromUnsubscribedLib);
  return {
    usedProductComponentsOnPage: f,
    usedProductComponentsFromUnsubscribedLibrary: b
  };
}
export async function $$P11(e, t, r, n, i = !1, a) {
  let s = new WebLoggerTimer();
  let o = $$k13(await $$D8(e, r, i), t, n);
  s.stop(e => {
    analyticsEventManager.trackDefinedEvent("asset_search.fetch_community_component_search_results_time", {
      elapsedTime: e,
      backgrounded: s.backgrounded || s.offlined,
      searchSessionId: a
    });
  });
  return o;
}
export async function $$D8(e, t, r = !1) {
  if (!t) return [];
  try {
    if (!atomStoreManager.get(figmaLibrariesEnabledAtom)) return [];
    let {
      results
    } = (await searchAPIHandler.getAssetsFromCommunityLibraries({
      query: e,
      assetTypes: mapStateToVariant([PrimaryWorkflowEnum.COMPONENT, PrimaryWorkflowEnum.STATE_GROUP]).join(","),
      includeVisualAssets: !!r || void 0
    })).data.meta;
    return results;
  } catch (t) {
    analyticsEventManager.trackDefinedEvent("assets_panel.search_for_components_from_community_libraries_error", {
      query: e
    });
    return [];
  }
}
export function $$k13(e, t, r) {
  let [n, i] = s()(e, function (e) {
    return !!r.has(getAssetKey(e)) || t.has(e.library_key);
  });
  return {
    communitySearchResults: n,
    unsubscribedCommunitySearchResults: i
  };
}
export let $$M14 = liveStoreInstance.Query({
  fetch: async ({
    query: e,
    libraryId: t,
    assetTypes: r
  }) => {
    let {
      results
    } = (await searchAPIHandler.getAssetsFromCommunityLibraries({
      query: e,
      assetTypes: mapStateToVariant(r).join(","),
      hubFileIds: [t]
    }).catch(() => ({
      data: {
        meta: {
          results: []
        }
      }
    }))).data.meta;
    return results;
  },
  output: ({
    data: e
  }) => e.map(withParsedMeta),
  enabled: ({
    query: e
  }) => null != e && e.trim().length > 0
});
export function $$F9(e, t) {
  let r = new WebLoggerTimer();
  return Promise.all([Z(), e.search(t)]).then(([e, t]) => (r.stop(t => {
    e || analyticsEventManager.trackDefinedEvent("asset_search.fuse_search_results_time", {
      elapsedTime: t,
      backgrounded: r.backgrounded || r.offlined
    });
  }), t.map(e => ({
    ...e.item,
    score: e.score,
    fuse_score: e.score
  }))));
}
export function $$j6(e, ...t) {
  let r = {};
  t.forEach(e => {
    e.forEach(e => {
      r[getAssetKey(e)] = e;
    });
  });
  let n = [];
  e.forEach(e => {
    let t = getAssetKey(e);
    t in r ? (e.ai_score && (r[t].ai_score = e.ai_score), e.lexical_score && (r[t].lexical_score = e.lexical_score), e.server_score && (r[t].server_score = e.server_score), e.fuse_score && (r[t].fuse_score = e.fuse_score)) : n.push(e);
  });
  return n;
}
export function $$U0(e, t, r, n) {
  return 0 === t.length ? e : r !== _$$I.FILE || n ? [...e.map(e => {
    let t = e.server_score || 1 - e.fuse_score;
    return {
      ...e,
      score: t
    };
  }), ...t].sort((e, t) => t.score - e.score) : t;
}
export async function $$B4(e, t, r, n, i, a, s, o) {
  try {
    let {
      components,
      stateGroups
    } = O(debugState.getState());
    let u = (await fetchDynamicConfig("max_product_components_to_log")).get("count", 1e3);
    let _ = {
      query: e,
      libraryKey: t,
      openFileKey: r,
      searchSessionId: n,
      isUi3: !0,
      productType: i,
      queryId: a,
      selectedItems: o,
      usedProductComponents: w(u, components, stateGroups),
      entryPoint: s,
      tier: $$G1()
    };
    return (await searchAPIHandler.postComponentsFromFile(_)).data.meta;
  } catch (r) {
    analyticsEventManager.trackDefinedEvent("assets_panel.server_search_for_file_failure", {
      query: e,
      libraryKey: t
    });
    return [];
  }
}
export function $$G1() {
  let e = atomStoreManager.get(getPlanPublicInfoAtomFamily(!0));
  return e.data?.tier;
}
var V = (e => (e.OPEN_FILE = "OPEN_FILE", e.FILE_VERSION = "FILE_VERSION", e.LOADING_STATE = "LOADING_STATE", e))(V || {});
export function $$H10(e) {
  return e ? l()(e, ["key", "libraryKey", "fileRepoId", "sourceFileKey", "editorType", "name", "_name", "parentOrgId"]) : null;
}
export const AG = $$U0;
export const Al = $$G1;
export const Cc = $$N2;
export const K4 = $$C3;
export const KK = $$B4;
export const UR = $$A5;
export const Yl = $$j6;
export const cu = $$L7;
export const d5 = $$D8;
export const dm = $$F9;
export const f$ = $$H10;
export const hH = $$P11;
export const ik = $$x12;
export const lR = $$k13;
export const nh = $$M14;
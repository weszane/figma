import { Ed } from "../figma_app/562352";
import { glU } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import s from "../vendor/116389";
import { x1, Lo } from "../905/714362";
import { Av } from "../figma_app/646357";
import { g as _$$g } from "../905/880308";
import { XHR } from "../905/910117";
import { r6 } from "../figma_app/517115";
import { u as _$$u } from "../905/203573";
import { MX, H2, GG } from "../figma_app/257779";
import { w3, ZU, e_, mA, AP, Ag, Pt, iG, n1, Sg } from "../figma_app/407767";
var o = s;
async function p(e, t) {
  let {
    node,
    file_key
  } = e;
  let r = {
    session_id: null,
    search_id: _$$g(),
    node_id: node.guid
  };
  try {
    return {
      fragments: (await XHR.post("/api/auto_suggest/asset_suggestions", {
        input: {
          type: "image",
          value: t
        },
        file_key,
        tracking_metadata: r
      })).data.meta.results.map(e => ({
        ...e,
        type: "fig-file-fragment"
      }))
    };
  } catch (e) {
    return;
  }
}
export async function $$_0(e) {
  let {
    targetNode,
    topLevelNode,
    logger
  } = e;
  if (!glU) return Promise.resolve({
    suggestions: []
  });
  let s = getSingletonSceneGraph();
  let o = topLevelNode;
  if (o || (o = s.get(targetNode.findContainingFragmentOrSelf()) ?? void 0), !o) return Promise.resolve({
    suggestions: []
  });
  let l = w3({
    scene: s,
    topLevelNode: o
  });
  logger?.logTimer(MX.SOURCE_FRAGMENT, H2.EXTRACT_CONTEXT);
  logger?.logDebugInfo("contextComponentUsage", l);
  let d = ZU(targetNode).thumbnail;
  let c = targetNode.guid === o.guid ? d : ZU(o).thumbnail;
  return d && c ? await $$A({
    ...e,
    preComputedThumbnails: {
      targetNode: d,
      topLevelNode: c
    },
    topLevelNode: o,
    contextComponentUsage: l
  }) : Promise.resolve({
    suggestions: []
  });
}
async function $$A({
  targetNode: e,
  topLevelNode: t,
  openFileKey: i,
  subscribedLibraryKeys: n,
  autoSuggestSession: r,
  logger: a,
  config: s,
  preComputedThumbnails: o,
  contextComponentUsage: c
}) {
  let u = [];
  a?.logFunnelEvent(GG.START);
  a?.logDebugInfo("start", {
    targetNodeGuid: e.guid,
    topLevelNodeGuid: t.guid,
    openFileKey: i,
    subscribedLibraryKeys: Array.from(n),
    config: s,
    preComputedThumbnails: o
  });
  let p = t?.guid === e.guid;
  let _ = e_(e, t);
  try {
    let l;
    let m;
    if (["targeted", "all"].includes(s.searchByNodeType) && (l = y({
      node: e,
      openFileKey: i,
      config: s,
      configForNodeType: s.targetNodeConfig,
      contextComponentUsage: c,
      targetNodePositionInfo: _,
      subscribedLibraryKeys: n,
      autoSuggestSession: r,
      logger: a,
      timerContext: MX.TARGET_NODE_RESULTS,
      preComputedThumbnail: o?.targetNode
    })), ("topLevel" === s.searchByNodeType || "all" === s.searchByNodeType && !p) && t && (m = y({
      node: t,
      openFileKey: i,
      config: s,
      configForNodeType: s.topLevelNodeConfig,
      contextComponentUsage: c,
      targetNodePositionInfo: _,
      subscribedLibraryKeys: n,
      autoSuggestSession: r,
      logger: a,
      timerContext: MX.TL_NODE_RESULTS,
      preComputedThumbnail: o?.topLevelNode
    })), l && (u = await l), (!s.numResults || u.length < s.numResults) && m) {
      let e = await m;
      u = [...u, ...e];
    }
    u = u.filter((e, t, i) => i.findIndex(t => Av(t) === Av(e)) === t);
  } catch (e) {
    e instanceof _$$u || x1("auto_suggest", "Error getting suggestions", {
      error: e
    });
  }
  a?.logTimer(MX.SOURCE_FRAGMENT, H2.TOTAL, 0);
  Lo("auto_suggest", "Auto Suggest Results", {
    suggestions: u || "no_results",
    debugInfo: a?.debugInfo,
    sessionId: r6(),
    entryPoint: a?.entryPoint
  });
  return {
    suggestions: u
  };
}
async function y({
  node: e,
  openFileKey: t,
  config: i,
  configForNodeType: r,
  contextComponentUsage: a,
  targetNodePositionInfo: s,
  subscribedLibraryKeys: d,
  autoSuggestSession: c,
  logger: u,
  timerContext: m,
  preComputedThumbnail: _
}) {
  let A = u?.logTimer(m, H2.SEARCH_SUGGESTIONS_START);
  if (mA(e) < r.skipLowVolumeNodes) {
    u?.logFunnelEvent(GG.SKIP_LOW_VOLUME_NODE);
    return Promise.resolve([]);
  }
  if (0 === d.size) {
    u?.logFunnelEvent(GG.SKIP_NO_SUBSCRIBED_LIBRARIES);
    return Promise.resolve([]);
  }
  let y = r.filteringConfig;
  u?.logFunnelEvent(GG.INITIATING_FRAGMENT_SEARCH);
  let b = await p({
    type: "input-selection",
    node: e,
    file_key: t,
    name: e.name
  }, _);
  if (A = u?.logTimer(m, H2.FRAGMENT_SEARCH, A), !b || 0 === b.fragments.length) {
    u?.logFunnelEvent(GG.NO_RESULTS);
    return Promise.resolve([]);
  }
  let v = e.findContainingFragmentOrSelf();
  let I = Array.from(new Map(b.fragments.map(e => [`${e.file_key}_${e.node_id}`, e])).values()).filter(i => !(i.score < y.fragmentsBelowScore) && (i.file_key !== t || i.node_id !== e.guid && (!v || i.node_id !== v))).slice(0, 10);
  if (0 === I.length) {
    u?.logFunnelEvent(GG.NO_RESULTS);
    return Promise.resolve([]);
  }
  u?.logDebugInfo(m + ".fragments", I);
  let E = o()(o()(await Ed(I.map(e => async () => {
    try {
      if (e.component_usages) return e.component_usages.map(t => AP({
        usage: t,
        filteringConfig: y,
        subscribedLibraryKeys: d,
        fragment: e,
        targetNodePositionInfo: s
      })).filter(e => null != e);
      if (c) {
        let t = await c.getFragmentScene(e);
        let i = Ag({
          scene: t,
          root: t.getRoot(),
          fragment: e,
          targetNodePositionInfo: s,
          filteringConfig: y,
          subscribedLibraryKeys: d,
          includeComponentProps: !1
        });
        c.unloadFragment(e);
        return i;
      }
      throw Error("No component usage information or session provided");
    } catch (t) {
      if (t instanceof _$$u) throw t;
      x1("auto_suggest", "Error loading fragment", {
        error: t,
        fragment: e
      });
      return null;
    }
  }), i.numConcurrentFragmentLoads)).map(e => "resolve" === e.type ? e.resolve : null).filter(e => null != e).flat());
  A = u?.logTimer(m, H2.EXTRACT_CONTEXT, A);
  u?.logDebugInfo(m + ".fragmentComponentInfo", E);
  let {
    updatedComponentInfo,
    debugData
  } = Pt(E);
  A = u?.logTimer(m, H2.ASSET_LOOKUP, A);
  u?.logDebugInfo(m + ".updatedComponentInfoDebugData", debugData);
  let w = iG(updatedComponentInfo);
  A = u?.logTimer(m, H2.SUMMARIZE_CONTEXT, A);
  u?.logDebugInfo(m + ".componentUsage", w);
  n1({
    componentUsage: w,
    contextComponentUsage: a
  });
  let C = Sg({
    componentUsage: w,
    rankingConfig: r.rankingConfig
  });
  u?.logTimer(m, H2.FILTERING_RANKING, A);
  u?.logDebugInfo(m + ".weightedAssets", C);
  let T = C.map(e => e.asset).filter(e => !!e);
  i.numResults && (T = T.slice(0, i.numResults));
  u?.logDebugInfo(m + ".results", T);
  0 === T.length && u?.logFunnelEvent(GG.NO_RESULTS);
  return Promise.resolve(T);
}
export async function $$b1(e) {
  let t = new TaskController({
    priority: "background"
  });
  let i = new Promise(i => {
    scheduler.postTask(async () => {
      i(await $$A(e));
    }, {
      signal: t.signal
    });
  });
  return await i;
}
export const A = $$_0;
export const z = $$b1;
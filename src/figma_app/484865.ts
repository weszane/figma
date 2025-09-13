import { A$ } from "../figma_app/728005";
import { ServiceCategories as _$$e } from "../905/165054";
import { atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { subscribeAndAwaitData } from "../905/553831";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { reportError } from "../905/11";
import { A } from "../905/963262";
import { qZ } from "../figma_app/451396";
import { XP } from "../figma_app/655139";
import { mapPlatformToFramework } from "../905/359509";
import { r as _$$r } from "../figma_app/821179";
import { trackDefinedFileEvent } from "../figma_app/314264";
import { selectOpenFileKey, selectOpenFileLibraryKey, useCurrentFileKey } from "../figma_app/516028";
import { Q } from "../905/618914";
import { PreloadCodeConnectLk, FileCanAccessFullCodeConnect } from "../figma_app/43951";
import { getPlanFeaturesTeamAtomFamily } from "../905/276025";
import { $W } from "../905/144933";
import { HX, ad, Xe, kN } from "../figma_app/97042";
import { tz, Lw, rx, DR } from "../figma_app/342355";
import { w6 } from "../905/372596";
function v(e, t, r, n = new Set()) {
  let i = selectOpenFileKey(t);
  let a = t.mirror.sceneGraph;
  let s = selectOpenFileLibraryKey(t);
  if (!e) throw Error("No node provided");
  if (!a) throw Error("No sceneGraph provided");
  if (!i) throw Error("No fileKey provided");
  if (!s) throw Error("No openLibraryKey provided");
  let o = _$$r(e, [], n);
  let l = new Map();
  !function (e, t, r, n, i, a) {
    for (let s of t) try {
      let {
        backingNodeId,
        backingLibraryKey,
        backingComponentKey,
        backingStateGroupKey
      } = HX(s.guid, r, i);
      let d = ad(s.guid, r, n, !1, i);
      if (!backingLibraryKey || !backingNodeId) continue;
      let c = {
        nodeToFetch: s,
        backingNodeId,
        backingComponentKey,
        backingStateGroupKey,
        instanceList: d
      };
      e.has(backingLibraryKey) || e.set(backingLibraryKey, []);
      e.get(backingLibraryKey).push(c);
    } catch (e) {
      console.error(`Error while preparing Code Connect mapping for node ${s.guid}:`, e instanceof Error ? e.message : String(e));
      a[s.guid] = `${e instanceof Error ? e.message : String(e)}`;
    }
  }(l, o, a, i, s, r);
  return {
    fileKey: i,
    openLibraryKey: s,
    nodesByLibraryKey: l,
    sceneGraph: a
  };
}
export async function $$A2(e, t) {
  if (!(t === A$ || atomStoreManager.get(tz))) return [[{}, {}], [{}, {}]];
  try {
    let r = performance.now();
    let [n, i] = await x(e);
    if (w6("code_connect_mapping", performance.now() - r, t), Lw()) {
      let t = new Set(n?.[0] ? Object.keys(n[0]) : []);
      let [r, a] = await N(e, t);
      return [[n, i], [r, a]];
    }
    return [[n, i], [{}, {}]];
  } catch (e) {
    reportError(_$$e.DEVELOPER_TOOLS, e, {
      extra: {
        toolName: t
      }
    });
    return [[{}, {}], [{}, {}]];
  }
}
async function x(e) {
  let t = atomStoreManager.get(rx);
  if (t) return [t, {}];
  let r = {};
  let n = {};
  let i = debugState.getState();
  let l = i.mirror.appModel.devHandoffCodeLanguage;
  let d = XP(l);
  let c = mapPlatformToFramework(d.id);
  let {
    fileKey,
    nodesByLibraryKey,
    openLibraryKey,
    sceneGraph
  } = v(e, i, n);
  for (let [e, t] of nodesByLibraryKey) for (let i = 0; i < t.length; i += 20) {
    let a = t.slice(i, i + 20);
    try {
      let t = await subscribeAndAwaitData(PreloadCodeConnectLk, {
        nodes: Array.from(new Set(a.map(t => `${e},${t.backingNodeId}`).concat(a.map(e => e.instanceList).flat()))),
        openFileKey: fileKey
      });
      await O({
        batch: a,
        result: t,
        libraryKey: e,
        fileKey,
        openLibraryKey,
        sceneGraph,
        label: c,
        nodeIdToCodeConnectContent: r,
        nodeIdToErrors: n
      });
    } catch (e) {
      for (let t of a) {
        console.error(`Error while fetching batch for node ${t.nodeToFetch.guid}:`, e instanceof Error ? e.message : String(e));
        n[t.nodeToFetch.guid] = `${e instanceof Error ? e.message : String(e)}`;
      }
    }
  }
  return [r, n];
}
async function N(e, t) {
  let r = atomStoreManager.get(DR);
  if (r) return [r, {}];
  let n = {};
  let i = {};
  let o = debugState.getState();
  let l = await Q(getPlanFeaturesTeamAtomFamily(!0));
  let {
    nodesByLibraryKey
  } = v(e, o, i, t);
  let c = new Map();
  for (let [e, t] of nodesByLibraryKey.entries()) for (let r of t) {
    let t;
    (t = r.backingStateGroupKey ? {
      type: "state_group",
      key: r.backingStateGroupKey
    } : r.backingComponentKey ? {
      type: "component",
      key: r.backingComponentKey
    } : null) && (c.has(t.key) || c.set(t.key, {
      type: t.type,
      libraryKey: e,
      nodes: []
    }), c.get(t.key).nodes.push(r.nodeToFetch));
  }
  let u = Array.from(c.entries());
  for (let t = 0; t < u.length; t += 20) {
    let r = u.slice(t, t + 20);
    if (0 === r.length) continue;
    let a = {
      assets: r.map(([e, {
        type: t,
        libraryKey: r
      }]) => ({
        key: e,
        type: t,
        library_key: r
      })),
      planParentType: l.key.type,
      planParentId: l.key.parentId ?? "",
      numResultsPerAsset: 3
    };
    try {
      let e = await $W.getCodeSuggestionsBulk(a);
      Object.entries(e.data.meta.results ?? {}).forEach(([e, t]) => {
        let r = c.get(e);
        if (!r) return;
        let i = t.map(e => ({
          componentName: e.name,
          source: e.src_path ?? ""
        }));
        r.nodes.forEach(e => {
          n[e.guid] = i;
        });
      });
    } catch (t) {
      console.error(`Error while fetching codebase suggestions for node ${e.guid}:`, t instanceof Error ? t.message : String(t));
      i[e.guid] = `${t instanceof Error ? t.message : String(t)}`;
    }
  }
  return [n, i];
}
export function $$C0() {
  let e = useCurrentFileKey();
  let [t] = setupResourceAtomHandler(FileCanAccessFullCodeConnect({
    key: e ?? ""
  }));
  return "loaded" === t.status && "loaded" === t.data.file.status && t.data.file.data?.hasPermission === !0;
}
export async function $$w1(e) {
  let t = await subscribeAndAwaitData(FileCanAccessFullCodeConnect, {
    key: e
  });
  return "loaded" === t.file.status && t.file.data?.hasPermission === !0;
}
async function O({
  batch: e,
  result: t,
  libraryKey: r,
  fileKey: n,
  openLibraryKey: a,
  sceneGraph: o,
  label: l,
  nodeIdToCodeConnectContent: c,
  nodeIdToErrors: u
}) {
  if (!t.file?.preload_code_connect_lk) {
    console.error(`No preload_code_connect_lk data found for library key: ${r}`);
    return;
  }
  for (let p of e) try {
    let e = t.file.preload_code_connect_lk;
    if (!e || !e.docsById) continue;
    let u = e.docsById?.[`key-${r},${p.backingNodeId}`];
    if (!u) continue;
    let _ = JSON.parse(u);
    let h = function (e, t) {
      let r = "unknown";
      if (Array.isArray(e) && t) {
        let n = e.find(e => e.label === t);
        r = n?.type || r;
      }
      return r;
    }(_, l);
    let g = Xe(_, l);
    let f = {};
    let E = p.instanceList;
    try {
      for (let t of E) {
        let r = e.docsById?.[`key-${t}`];
        if (!r) continue;
        let n = Xe(JSON.parse(r), l);
        n && (f[`key-${t}`] = JSON.parse(n.figmadoc));
      }
    } catch (e) {
      console.error("Error processing instance Code Connect:", e);
      reportError(_$$e.DEVELOPER_TOOLS, e, {
        extra: {
          instances: E,
          codeConnectDocRaw: u
        }
      });
    }
    let y = [];
    try {
      y = JSON.parse(g.figmadoc);
    } catch (e) {
      console.error("Error parsing Code Connect:", e);
      reportError(_$$e.DEVELOPER_TOOLS, e, {
        extra: {
          figmadoc: g.figmadoc
        }
      });
      continue;
    }
    if (Array.isArray(y) && (y = kN(y, p.nodeToFetch)), !y) continue;
    y.source || y.templateData.imports?.length || trackDefinedFileEvent("mcp.get_code_connect_mapping.missing_data", n, debugState.getState(), {
      componentName: y.component || "",
      source: y.source || ""
    });
    c[p.nodeToFetch.guid] = {
      componentName: y.component,
      source: y.source,
      snippet: await R({
        node: p.nodeToFetch,
        fileKey: n,
        openLibraryKey: a,
        sceneGraph: o,
        figmadocResult: y,
        instanceFigmadocs: f || {}
      }),
      snippetImports: y.templateData.imports,
      version: h,
      label: y.label
    };
  } catch (e) {
    console.error(`Error while processing Code Connect mapping for node ${p.nodeToFetch.guid}:`, e instanceof Error ? e.message : String(e));
    u[p.nodeToFetch.guid] = `${e instanceof Error ? e.message : String(e)}`;
  }
}
async function R({
  node: e,
  fileKey: t,
  openLibraryKey: r,
  sceneGraph: n,
  figmadocResult: i,
  instanceFigmadocs: a
}) {
  let s = await qZ({
    node: e,
    instanceFigmadocs: a,
    scene: n,
    template: i.template,
    openLibraryKey: r,
    fileKey: t
  });
  return s && "SUCCESS" === s.result ? A({
    output: s,
    sceneGraph: n,
    includeInstancePills: !1,
    unrenderableInstanceMessage: "{/* Code Connect Logic Instance */}"
  }).code : null;
}
export const Fc = $$C0;
export const Kk = $$w1;
export const nP = $$A2;
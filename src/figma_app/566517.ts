import { getComponentInfoById, getTypeInfoCached } from "../figma_app/664063";
import { G1, Iu } from "../figma_app/691470";
import { ServiceCategories as _$$e } from "../905/165054";
import { XJn, NfO, mKm, AZ4, Egt, oVz, juq } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getSingletonSceneGraph, ReduxSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { logWarning, logDebug } from "../905/714362";
import { XHR } from "../905/910117";
import { Eo } from "../figma_app/80990";
import { Ay as _$$Ay } from "../figma_app/432652";
import { QZ } from "../figma_app/62612";
import { _S } from "../figma_app/516028";
import { U2 } from "../figma_app/193867";
import { Gh } from "../figma_app/707567";
import { n as _$$n } from "../905/347702";
import { __ } from "../figma_app/257655";
import { B as _$$B } from "../905/94678";
import { _F, uN, vR, C, Uk } from "../figma_app/193952";
import { mF } from "../figma_app/109758";
async function x(e) {
  await new Promise(t => setTimeout(t, e));
}
async function N({
  fromVal: e,
  toVal: t,
  duration: r,
  mutateFn: n
}) {
  let i = Math.floor(r / 16);
  let a = t - e;
  if (0.2 > Math.abs(a)) return;
  let s = 0;
  for (; s++ < i;) {
    n(e + a * (1 - Math.pow(1 - s / i, 4)));
    await x(16);
  }
}
export async function $$C12(e, t) {
  let r = getSingletonSceneGraph();
  let n = t.createNewSitesWebpage ? {
    x: 0,
    y: 0
  } : XJn.getInsertionLocation(e.size.x);
  l7.ai("first-draft-position-node", () => {
    e.relativeTransform = {
      ...e.relativeTransform,
      m02: n.x,
      m12: n.y
    };
  });
  e.removeLocalOpacity();
  let i = NfO.getViewportZoomScale();
  let a = await QZ({
    nodeId: e.guid,
    alwaysPan: !0,
    maxScale: 1
  });
  if (a && ("inline" !== t.insertBehavior && (t.skipSelection || l7.ai("first-draft-select-node", () => {
    let t = r.getCurrentPage();
    t && (t.directlySelectedNodes = [e]);
  }), NfO.setViewportCenter({
    x: a.centerX,
    y: a.centerY
  })), t.insertBehavior?.endsWith("-ease"))) {
    let e = a.scale || 1;
    await N({
      fromVal: i,
      toVal: e,
      duration: 300,
      mutateFn: e => {
        NfO.setViewportZoomScale(e);
      }
    });
  }
}
export function $$w11(e) {
  let t = getSingletonSceneGraph().get(e);
  if (t && ("FRAME" === t.type && "VStack" !== t.getSharedPluginData("jsx", "type") && 1 === t.childCount && "VStack" === t.childrenNodes[0].getSharedPluginData("jsx", "type") && (t = t.childrenNodes[0]), "FRAME" === t.type && "VStack" === t.getSharedPluginData("jsx", "type") && t.stackVerticalLayoutSize === mKm.HUG_CONTENT)) {
    let e = t.childrenNodes.find(e => "true" === e.getSharedPluginData("jsx", "fillContainerHeight"));
    if (!e) return;
    l7.ai("first-draft-fill-main-content-container", () => {
      t.stackVerticalLayoutSize = mKm.FIXED;
      e.stackChildAlignSelf = "STRETCH";
      e.stackVerticalLayoutSize = mKm.FILL_CONTAINER;
      t.update();
      e.minHeight = e.size.y;
      t.stackVerticalLayoutSize = mKm.HUG_CONTENT;
      e.stackVerticalLayoutSize = mKm.HUG_CONTENT;
    });
  }
}
function O(e) {
  return "TEXT" === e.type && !0 === e.visible && ("HEIGHT" === e.textAutoResize || e.stackHorizontalLayoutSize === mKm.FILL_CONTAINER);
}
function R(e) {
  if (e.stackLeftPadding > 0 && e.stackRightPadding > 0) return !0;
  let t = Math.max(e.cornerRadius, e.rectangleBottomLeftCornerRadius, e.rectangleBottomRightCornerRadius, e.rectangleTopLeftCornerRadius, e.rectangleTopRightCornerRadius);
  let r = e.strokePaints.data.length > 0;
  return !(t > 0) && !r;
}
export function $$L14(e, t, r) {
  let n;
  let i = _F(e, ["FRAME", "INSTANCE"]);
  n = "LOCAL" === t.type ? {
    type: AZ4.LOCAL,
    key: XJn.getKitKey(t.pageId) || ""
  } : {
    type: AZ4.LIBRARY,
    key: t.key
  };
  l7.ai("first-draft-set-native-field", () => {
    for (let e of i) e.firstDraftData = {
      generationId: r ?? "",
      kit: n
    };
  });
}
function P(e) {
  return "true" === e.getSharedPluginData("jsx", "isDone");
}
function D(e) {
  let t = e.parentNode;
  for (; t;) {
    if (P(t)) return !0;
    t = t.parentNode;
  }
  return !1;
}
export function $$k7(e) {
  return P(e) || D(e);
}
function M(e) {
  let t = new Set();
  let r = getSingletonSceneGraph().get(e);
  if (r) {
    for (let e of _F(r, ["FRAME"], {
      sharedPluginData: {
        namespace: "jsx",
        keys: ["isDone"]
      }
    })) P(e) && t.add(e.guid);
    for (let e of _F(r, ["INSTANCE"])) $$k7(e) && t.add(e.guid);
  }
  return Array.from(t);
}
export function $$F13(e) {
  let t = _F(e, ["TEXT"]);
  l7.ai("first-draft-rename-text-nodes-to-characters", () => {
    for (let e of t) e.name = e.characters;
  });
}
async function j({
  nodeId: e,
  shouldContinueStream: t,
  imagesTrace: r,
  jsxJSON: n,
  initialUserPrompt: s,
  clientLifecycleId: o,
  containingNodeId: c,
  instrumentationRef: u
}) {
  let _ = getSingletonSceneGraph().get(e);
  if (_?.type === "INSTANCE") await U({
    node: _,
    shouldContinueStream: t,
    imagesTrace: r,
    jsxJSON: n,
    initialUserPrompt: s,
    clientLifecycleId: o,
    containingNodeId: c,
    instrumentationRef: u
  });else if (_?.type === "FRAME") {
    if (getFeatureFlags().first_draft_disable_images) {
      u?.current.logImageLoadBlocked();
      return;
    }
    let e = async () => {
      await mF({
        id: "1",
        desc: "",
        initialUserPrompt: s,
        jsxJSON: n,
        prompt: "",
        node: _,
        background: "normal",
        imagesTrace: r,
        clientLifecycleId: o,
        shouldContinueStream: t,
        containingNodeId: c,
        endpoint: _$$Ay.design.firstDraftCreateImage
      });
    };
    let l = u ? u.current.logImageLoad(e) : e();
    try {
      await l;
    } catch (e) {
      if (e instanceof G1 && 500 > Iu(e)) return;
      reportError(_$$e.AI_GENERATION, e);
    }
  }
}
async function U({
  node: e,
  shouldContinueStream: t,
  imagesTrace: r,
  jsxJSON: s,
  initialUserPrompt: o,
  clientLifecycleId: c,
  containingNodeId: u,
  instrumentationRef: h
}) {
  if (!e || !e.symbolId) return;
  let m = getSingletonSceneGraph();
  let f = m.get(e.symbolId ?? "");
  if (!f) return;
  let E = getComponentInfoById(f.guid, {
    enableTsArrays: !!getFeatureFlags().first_draft_ts_arrays
  });
  if (!E) return;
  let y = [];
  for (let n of E.parsedDefs) if ("IMAGE" === n.def.type) {
    let i = n.def.guidByParentComponentId[f.guid];
    if (!i) {
      logWarning("first-draft", "Could not find an image guid on the main component", {
        instanceNodeId: e.guid,
        mainComponentId: f.guid,
        guidByParentComponentId: n.def.guidByParentComponentId
      });
      continue;
    }
    let a = i === f.guid ? e.guid : uN(e.guid, i);
    if (!a) {
      logWarning("first-draft", "No image sublayer found for", {
        guid: e.guid
      });
      continue;
    }
    let l = m.get(a);
    if (!l) {
      logWarning("first-draft", "No image node found for", {
        imageNodeId: a
      });
      continue;
    }
    let p = n.rawProp;
    let E = e.getSharedPluginData("jsx", p) ?? "";
    if (!E) {
      logWarning("first-draft", "No description found for image", {
        rawProp: p
      });
      continue;
    }
    let b = n.def.tagsByParentComponentId[f.guid];
    if (logDebug("first-draft", "Adding image for node in instance", {
      guid: l.guid,
      description: E,
      tags: b
    }, {
      createSentryBreadcrumb: !1
    }), getFeatureFlags().first_draft_disable_images) {
      h?.current.logImageLoadBlocked();
      continue;
    }
    let T = async () => {
      await mF({
        ...(isNaN(Number(E)) ? {
          description: E
        } : {
          id: E,
          initialUserPrompt: o,
          jsxJSON: s,
          desc: b?.desc ?? ""
        }),
        prompt: b?.prompt ?? "",
        node: l,
        background: b?.background || "normal",
        imagesTrace: r,
        clientLifecycleId: c,
        shouldContinueStream: t,
        containingNodeId: u,
        endpoint: _$$Ay.design.firstDraftCreateImage
      });
    };
    let I = h ? h.current.logImageLoad(T) : T();
    y.push(I);
  }
  (await Promise.allSettled(y)).forEach(e => {
    "rejected" !== e.status || e.reason instanceof G1 && 500 > Iu(e.reason) || reportError(_$$e.AI_GENERATION, e.reason);
  });
}
function B(e) {
  let t = getSingletonSceneGraph();
  let r = M(e);
  let i = [];
  for (let e of r) {
    let r = t.get(e);
    if (r?.type !== "INSTANCE") continue;
    let a = r.componentPropertyReferences();
    if (!a?.mainComponent || !r.symbolId) continue;
    let o = t.get(r.symbolId);
    if (!o) {
      logWarning("first_draft", "Could not find component for instance", {
        nodeId: e
      });
      continue;
    }
    if (o) {
      if (!Egt.getAssetKeyForPublish(o.guid)) {
        let e = getComponentInfoById(o?.guid ?? "", {
          enableTsArrays: !!getFeatureFlags().first_draft_ts_arrays
        });
        if (!e || vR(e) !== C) continue;
      }
      D(r) && i.push(r.guid);
    }
  }
  return i;
}
async function G(e) {
  if (!e.options.dsKitKey) {
    reportError(_$$e.AI_GENERATION, Error("Need to supply a design system kit to replace icons from"), {
      extra: {
        nodeIds: e.nodeIds,
        dsKit: e.options.dsKitKey
      }
    });
    return;
  }
  let t = getSingletonSceneGraph();
  let r = atomStoreManager.get(_S);
  for (let n of e.nodeIds) {
    let i = t.get(n);
    if (!i || "INSTANCE" !== i.type) continue;
    let a = i.componentPropertyReferences();
    let s = a?.mainComponent;
    if (!s) continue;
    let o = i.parentNode;
    for (; o && "INSTANCE" !== o.type;) o = o.parentNode;
    if (!o || !o.componentProperties()[s]) continue;
    let l = o.componentProperties()[s];
    if (!l || "INSTANCE_SWAP" !== l.type) continue;
    let d = t.get(l?.value);
    let c = d?.sourceLibraryKey;
    let u = o.getSharedPluginData("jsx", s);
    if (!u) continue;
    let p = e.options.dsKitKey;
    if (c !== r) {
      let t = (await Gh.getFirstDraftKitKeyFromLibraryKey({
        libraryKey: c ?? ""
      })).data.meta.kit_key;
      if (!t) continue;
      p = {
        key: t,
        type: "1P_LIBRARY" === e.options.dsKitKey.type ? "1P_LIBRARY" : "USER_LIBRARY"
      };
    }
    "LOCAL" === p.type ? await H({
      dsKit: p,
      instanceNode: i,
      iconDescription: u,
      clientLifecycleId: e.options.clientLifecycleId
    }) : await V({
      dsKit: p,
      instanceNode: i,
      iconDescription: u,
      clientLifecycleId: e.options.clientLifecycleId
    });
  }
}
let V = _$$n(async function ({
  dsKit: e,
  instanceNode: t,
  iconDescription: r,
  clientLifecycleId: n
}) {
  let i;
  if (!t.symbolId) return;
  let d = getSingletonSceneGraph();
  let c = d.get(t.symbolId);
  if (!c) return;
  let {
    key,
    version
  } = (await Gh.getFirstDraftMatchGroup({
    kit_key: e.key,
    is_local: !1,
    group_name: C,
    description: r
  })).data.meta;
  if (!key) {
    reportError(_$$e.AI_GENERATION, Error("first-draft: Grouped components: Could not find component for grouped component"), {
      extra: {
        dsKit: e,
        iconDescription: r,
        mainComponentId: c.guid
      }
    });
    return;
  }
  let h = version ? `/component/${key}/canvas?ver=${version}` : `/component/${key}/canvas`;
  if (!(i = await Eo.getCanvas({
    canvas_url: h
  }))) return;
  let g = NfO.deserializeProductComponentFromBuffer(key, i);
  let f = d.get(g);
  f && "SYMBOL" === f.type && l7.ai("first-draft-swap-grouped-component", () => {
    t.swapComponent(f);
    $$L14(t, e, n);
  });
});
async function H({
  dsKit: e,
  instanceNode: t,
  iconDescription: r,
  clientLifecycleId: i
}) {
  let {
    key,
    version = null
  } = (await Gh.getFirstDraftMatchGroup({
    kit_key: XJn.getKitKey(e.pageId) ?? "",
    is_local: !0,
    group_name: C,
    description: r
  })).data.meta;
  if (!key) return;
  let _ = function (e, t, r) {
    let i = __(r);
    for (let r of _$$B([...i], {
      followInstances: !1
    })) if (e === Egt.getAssetKeyForPublish(r.guid) && !t || t === Uk(r)) try {
      return getTypeInfoCached(r, {
        enableTsArrays: !!getFeatureFlags().first_draft_ts_arrays
      });
    } catch (e) {
      reportError(_$$e.AI_GENERATION, e, {
        extra: {
          nodeId: r.guid
        }
      });
      break;
    }
    return null;
  }(key, version, {
    rootNodes: {
      dsKitKey: e,
      useAllPages: getFeatureFlags().first_draft_publish_all_components
    }
  });
  if (_) {
    let r = getSingletonSceneGraph().get(_.defaultNodeId);
    r && "SYMBOL" === r.type && l7.ai("first-draft-swap-grouped-component", () => {
      t.swapComponent(r);
      $$L14(t, e, i);
    });
  }
}
export async function $$z5({
  containingNodeId: e,
  batchSize: t,
  options: r
}) {
  let n = B(e);
  for (let e = 0; e < n.length; e += t) {
    let i = n.slice(e, e + t);
    if (0 === i.length) return;
    try {
      await G({
        nodeIds: i,
        options: r
      });
    } catch (e) {
      logWarning("first-draft", "Failed to insert icons", {
        e
      });
    }
  }
}
export async function $$W1({
  containingNodeArgs: e,
  batchSize: t,
  imagesTrace: r,
  clientLifecycleId: n
}) {
  let i = e.flatMap(({
    id: e,
    userPrompt: t,
    jsxJSON: i
  }) => (r[e] = r[e] || {}, M(e).map(a => ({
    nodeId: a,
    imagesTrace: r[e],
    initialUserPrompt: t,
    jsxJSON: i,
    clientLifecycleId: n,
    containingNodeId: e,
    instrumentationRef: null
  }))));
  for (let e = 0; e < i.length; e += t) {
    let r = i.slice(e, e + t);
    if (0 === r.length) return;
    try {
      await Promise.all(r.map(j));
    } catch (e) {
      logWarning("first-draft", "Failed to insert images", {
        e
      });
    }
  }
}
export function $$K4(e, t, r) {
  if (!getSingletonSceneGraph().get(e)) {
    reportError(_$$e.AI_GENERATION, Error("first-draft: Icons: Could not find containing node with id=containingNodeId"), {
      extra: {
        containingNodeId: e,
        ...r
      }
    });
    return;
  }
  let n = B(e).filter(e => !t[`icon-${e}`]);
  if (0 === n.length) return;
  let i = G({
    nodeIds: n,
    options: r
  });
  for (let e of n) t[`icon-${e}`] = i;
}
export function $$Y0({
  containingNodeId: e,
  queuedEffects: t,
  shouldContinueStream: r,
  imagesTrace: n,
  jsxJSON: i,
  initialUserPrompt: s,
  clientLifecycleId: o,
  instrumentationRef: d
}) {
  if (!getSingletonSceneGraph().get(e)) {
    reportError(_$$e.AI_GENERATION, Error("First Draft: Add Images: Could not find containing node with id=containingNodeId"), {
      extra: {
        containingNodeId: e
      }
    });
    return;
  }
  let c = M(e).filter(e => !t[`image-${e}`]);
  if (0 !== c.length) for (let a of c) t[`image-${a}`] = j({
    nodeId: a,
    shouldContinueStream: r,
    imagesTrace: n,
    jsxJSON: i,
    initialUserPrompt: s,
    clientLifecycleId: o,
    containingNodeId: e,
    instrumentationRef: d
  });
}
export function $$$6({
  containingNodeId: e
}) {
  let t = getSingletonSceneGraph();
  if (!t.get(e)) {
    reportError(_$$e.AI_GENERATION, Error("First Draft: Hide Empty Grid Rows: Could not find containing node with id=containingNodeId"), {
      extra: {
        containingNodeId: e
      }
    });
    return;
  }
  let r = M(e);
  let n = new Set();
  for (let e of r) {
    let r = t.get(e);
    if (r) for (let e of _F(r, ["FRAME"]).filter(e => "NONE" !== e.stackMode)) {
      let t = e.childrenNodes;
      t && t.length > 0 && t.every(e => !e.visible) && n.add(e.guid);
    }
  }
  l7.ai("first-draft-hide-empty-grid-rows", () => {
    for (let e of n) {
      let r = t.get(e);
      r && (r.visible = !1);
    }
  });
}
let X = _$$n(async function (e, t) {
  let r = U2(debugState?.getState().selectedView);
  let n = await XHR.post(`/api/first_draft/kit_contents/${e.key}/detach_info`, {
    keys: t,
    file_key: r
  });
  return n.data?.meta?.should_detach ?? [];
});
export async function $$q10(e, t, r, n) {
  if ("LOCAL" === e.type || "USER_LIBRARY" === e.type || !t) return;
  let i = r === oVz.CURRENT ? getSingletonSceneGraph() : new ReduxSceneGraph(juq.FIRST_DRAFT);
  let c = i.get(t);
  if (c) {
    if (getFeatureFlags().first_draft_partial_detach) {
      let n = _F(c, ["INSTANCE"], void 0, i);
      let l = new Set();
      for (let e of n) {
        let t = e.symbolId ? i.get(e.symbolId) : null;
        if (t) {
          if (r === oVz.FIRST_DRAFT) {
            let e = t.isState ? t.parentNode?.stateGroupKey : t.componentKey;
            if (e) {
              l.add(e);
              continue;
            }
          } else {
            let e = t.isState ? t.parentGuid : t.guid;
            if (!e) continue;
            let r = Egt.getAssetKeyForPublish(e);
            if (!r) continue;
            l.add(r);
          }
        }
      }
      if (0 === l.size) return;
      try {
        let n = await X(e, Array.from(l));
        l7.ai("first-draft-detach-generation", () => {
          XJn.detachGeneratedDesignPartial(t, n, r);
        });
      } catch (e) {
        reportError(_$$e.AI_GENERATION, e);
      }
    } else l7.ai("first-draft-detach-generation", () => {
      XJn.detachGeneratedDesign(t, r);
    });
    n.detachVariables && l7.ai("first-draft-detach-variables", () => {
      XJn.detachVariablesInGeneration(t, r);
    });
  }
}
export function $$J8(e) {
  let t = getSingletonSceneGraph().get(e);
  t && l7.ai("first-draft-lock-node", () => {
    t.locked = !0;
  });
}
export function $$Z15(e) {
  if (!e) return;
  let t = getSingletonSceneGraph().get(e);
  t && l7.ai("first-draft-unlock-node", () => {
    t.locked = !1;
  });
}
export function $$Q2(e) {
  "FRAME" === e.type && (e.strokePaints = {
    data: [{
      type: "SOLID",
      color: {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      },
      visible: !0,
      opacity: 1,
      blendMode: "NORMAL"
    }],
    blobs: []
  }, e.strokeWeight = 2, e.borderStrokeWeightsIndependent = !1, e.borderBottomWeight = 2, e.borderTopWeight = 2, e.borderLeftWeight = 2, e.borderRightWeight = 2);
}
export const Ms = $$Y0;
export const nY = $$W1;
export const _Y = $$Q2;
export const WY = function e(t) {
  l7.ai("first-draft-optimize-auto-layout", () => {
    if (t.childCount > 0 && "NONE" !== t.stackMode) {
      "FRAME" === t.type && t.parentNode && "CANVAS" !== t.parentNode.type && (t.frameMaskDisabled = !0);
      t.update();
      let r = t.stackHorizontalLayoutSize;
      let n = function (e) {
        if (!e.childrenNodes[0] || e.childCount < 2) return null;
        let t = [];
        let r = null;
        for (let n of e.childrenNodes) if ("INSTANCE" === n.type && n.symbolId && "NONE" !== n.stackMode) {
          if (t.includes(n.symbolId)) {
            t.push(n.symbolId);
            continue;
          }
          let e = getSingletonSceneGraph().get(n.symbolId);
          if (0 === t.length) {
            t.push(n.symbolId);
            e?.isState && (r = e.parentGuid);
            continue;
          }
          if (r && e?.isState && e?.parentGuid && e.parentGuid === r) {
            t.push(n.symbolId);
            continue;
          }
          if (t.length > 1) break;
          t = [n.symbolId];
          r = e?.isState ? e.parentGuid : null;
        } else {
          if (t.length > 1) break;
          t.length > 0 && (t = [], r = null);
        }
        return t.length < 2 ? null : {
          symbolIds: new Set(t),
          includesAllChildren: t.length === e.childCount
        };
      }(t);
      if (n) {
        let {
          symbolIds,
          includesAllChildren
        } = n;
        let i = t.stackLeftPadding + t.stackRightPadding + t.stackSpacing * (t.childCount - 1) + t.childrenNodes.reduce((e, t) => t.stackHorizontalLayoutSize !== mKm.FILL_CONTAINER ? e + t.size.x : e, 0);
        "HORIZONTAL" === t.stackMode && i >= 0.5 * t.size.x && (i <= t.size.x || t.childrenNodes.every(e => e.minWidth)) && t.childrenNodes.forEach(t => {
          (includesAllChildren || "INSTANCE" === t.type && t.symbolId && symbolIds.has(t.symbolId)) && (t.stackHorizontalLayoutSize = mKm.FILL_CONTAINER);
        });
      }
      t.childrenNodes.forEach(n => {
        switch (r) {
          case mKm.FILL_CONTAINER:
          case mKm.FIXED:
            switch (n.type) {
              case "FRAME":
                n.stackHorizontalLayoutSize !== mKm.FILL_CONTAINER && (R(n) || n.childrenNodes.some(O)) && (n.stackHorizontalLayoutSize = mKm.FILL_CONTAINER);
                e(n);
                break;
              case "INSTANCE":
                if (n.minWidth && n.minWidth + t.stackLeftPadding + t.stackRightPadding > t.size.x) {
                  let e = n;
                  for (; e.parentNode && "CANVAS" !== e.parentNode.type;) {
                    let t = (e = e.parentNode).stackHorizontalLayoutSize;
                    if (e.stackHorizontalLayoutSize = mKm.HUG_CONTENT, t === mKm.FIXED) break;
                  }
                } else "VERTICAL" === t.stackMode && R(n) && "NONE" !== n.stackMode && n.size.x > 0.5 * t.size.x && ("MIN" === t.stackCounterAlignItems || "MAX" === t.stackCounterAlignItems || n.size.x > t.size.x) ? n.stackHorizontalLayoutSize = mKm.FILL_CONTAINER : n.childCount > 0 && n.childrenNodes.every(O) && (n.stackHorizontalLayoutSize = mKm.FILL_CONTAINER);
            }
            break;
          case mKm.HUG_CONTENT:
            "TEXT" !== n.type && "NONE" === n.stackMode || "FRAME" === n.type && n.stackHorizontalLayoutSize === mKm.FIXED || (n.stackHorizontalLayoutSize = mKm.HUG_CONTENT);
            "INSTANCE" !== n.type && e(n);
        }
      });
    }
  });
};
export const D9 = $$K4;
export const qV = $$z5;
export const fE = $$$6;
export const us = $$k7;
export const OJ = $$J8;
export const tG = function e(t, r) {
  if (r?.isRecursiveCall || l7.ai("first-draft-auto-fill-parent", () => {
    let e = t.parentNode;
    if (e?.getSharedPluginData("jsx", "type") === "VStack") try {
      e.stackReverseZIndex = !0;
      t.stackChildAlignSelf = "STRETCH";
      t.stackHorizontalLayoutSize = mKm.FILL_CONTAINER;
    } catch (e) {
      reportError(_$$e.AI_GENERATION, e);
    }
    if (e?.getSharedPluginData("jsx", "type") === "HStack") try {
      t.stackChildAlignSelf = "STRETCH";
      t.stackVerticalLayoutSize = mKm.FILL_CONTAINER;
    } catch (e) {
      reportError(_$$e.AI_GENERATION, e);
    }
  }), "FRAME" === t.type) for (let r of (l7.ai("first-draft-auto-fill-parent", () => {
    if ("VStack" === t.getSharedPluginData("jsx", "type")) {
      t.stackReverseZIndex = !0;
      let e = t.childrenNodes[0];
      let r = e?.type === "INSTANCE" && e.symbolId ? getSingletonSceneGraph().get(e.symbolId) : null;
      let n = r?.size.x || null;
      if (n) try {
        if (e) for (let e of (t.stackHorizontalLayoutSize === mKm.HUG_CONTENT && (t.minWidth = n), t.childrenNodes)) try {
          if (e.getSharedPluginData("jsx", "type").startsWith("Component") && "VERTICAL" === e.stackMode) {
            let t = e.size.x;
            for (let r of e.childrenNodes) r.size.x === t && "ABSOLUTE" !== r.stackPositioning && (r.stackChildAlignSelf = "STRETCH", r.stackHorizontalLayoutSize = mKm.FILL_CONTAINER);
          }
          e.stackChildAlignSelf = "STRETCH";
          e.stackHorizontalLayoutSize = mKm.FILL_CONTAINER;
        } catch (e) {
          reportError(_$$e.AI_GENERATION, e);
        }
      } catch (e) {
        reportError(_$$e.AI_GENERATION, e);
      }
    }
    if ("HStack" === t.getSharedPluginData("jsx", "type")) {
      t.stackReverseZIndex = !0;
      let e = t.childrenNodes[0];
      let r = e?.type === "INSTANCE" && e.symbolId ? getSingletonSceneGraph().get(e.symbolId) : null;
      let n = r?.size.y || null;
      if (n) try {
        if (e) for (let e of (t.stackVerticalLayoutSize === mKm.HUG_CONTENT && (t.minHeight = n), t.childrenNodes)) try {
          e.stackChildAlignSelf = "STRETCH";
          e.stackVerticalLayoutSize = mKm.FILL_CONTAINER;
        } catch (e) {
          reportError(_$$e.AI_GENERATION, e);
        }
      } catch (e) {
        reportError(_$$e.AI_GENERATION, e);
      }
    }
  }), t.childrenNodes)) e(r, {
    isRecursiveCall: !0
  });
};
export const oT = $$q10;
export const xF = $$w11;
export const U_ = $$C12;
export const Zu = $$F13;
export const jZ = $$L14;
export const RY = $$Z15;
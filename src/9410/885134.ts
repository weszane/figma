import { _1, JF, RP } from "../figma_app/257655";
import { XJn, zuo } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { hV } from "../figma_app/387100";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { tK } from "../figma_app/191804";
import { m as _$$m } from "../figma_app/964367";
import { logError } from "../905/714362";
import { SV } from "../9410/483857";
import { _E } from "../905/788069";
import { D as _$$D } from "../905/629114";
import { xF, _Y, jZ, WY, tG, Zu, U_, us } from "../figma_app/566517";
import { l9 } from "../9410/234038";
import { P as _$$P, t as _$$t } from "../9410/636108";
import { Dk, lH } from "../figma_app/18582";
import { Jv, oR, gU } from "../figma_app/234690";
import { uW } from "../905/426868";
import { analyticsEventManager } from "../905/449184";
import { _F } from "../figma_app/193952";
import { o$, nV, UO } from "../figma_app/857146";
import { V5 } from "../figma_app/612859";
import { Vx } from "../9410/141954";
import { tm } from "../905/261789";
import { uP, rO, jR, k5 } from "../figma_app/541950";
function j(e, t, i) {
  let r = XJn.getCustomizableVariableName(i.guid, e);
  if (!r) return;
  let a = tm(r);
  if (a) return t[a];
}
let I = {
  bottomLeftRadius: "rectangleBottomLeftCornerRadius",
  bottomRightRadius: "rectangleBottomRightCornerRadius",
  topLeftRadius: "rectangleTopLeftCornerRadius",
  topRightRadius: "rectangleTopRightCornerRadius"
};
function k(e, t) {
  l7.ai("first-draft-override-radius", () => {
    e.setBoundVariable(t, null);
  });
}
let N = {
  itemSpacing: "stackSpacing",
  paddingTop: "stackTopPadding",
  paddingBottom: "stackBottomPadding",
  paddingLeft: "stackLeftPadding",
  paddingRight: "stackRightPadding"
};
function A(e, t) {
  l7.ai("first-draft-override-spacing", () => {
    e.setBoundVariable(t, null);
  });
}
function O(e) {
  l7.ai("first-draft-set-font-name", () => {
    e.setRangeBoundVariable(0, e.characters.length, "fontFamily", null);
    e.setRangeBoundVariable(0, e.characters.length, "fontStyle", null);
    e.setRangeBoundVariable(0, e.characters.length, "fontWeight", null);
  });
}
async function L(e, t, i) {
  let r = XJn.inheritedTextStyleGuid(e.guid);
  if (null === r) {
    O(e);
    return;
  }
  let s = getSingletonSceneGraph().get(r);
  if (!s || !i || !i.variableMaps?.fontVariableMap) {
    O(e);
    return;
  }
  if (!("fontFamily" in s.boundVariablesForStyle)) return;
  let l = s.boundVariablesForStyle.fontFamily;
  let d = function (e, t, i) {
    let r = XJn.getCustomizableVariableName(t.guid, e);
    if (!r) return null;
    let a = tm(r);
    return a ? i[a] ?? null : null;
  }(l.id, e, i.variableMaps.fontVariableMap);
  if (!d) {
    O(e);
    return;
  }
  try {
    await uW(d.fontName);
    l7.ai("first-draft-set-font-name", () => {
      e.fontName = d.fontName;
      d.letterSpacing && (e.letterSpacing = d.letterSpacing);
    });
    t[l.id] = d.fontName.family;
  } catch (i) {
    O(e);
    let t = void 0 === i ? "undefined" : i instanceof Error ? i.message : JSON.stringify(i);
    analyticsEventManager.trackDefinedEvent("ai_generation.first_draft_font_error", {
      error: t,
      family: d.fontName.family,
      style: d.fontName.style,
      location: "override-variables"
    });
  }
}
async function R(e) {
  await Promise.all(e.node.childrenNodes.map(t => D({
    ...e,
    node: t
  })));
  V5(e.node);
}
async function D(e) {
  var t;
  let {
    node,
    variableOverrideMap,
    theme,
    colorOptions
  } = e;
  !function (e, t) {
    if ("HORIZONTAL" === e.stackMode || "VERTICAL" === e.stackMode) for (let [i, r] of Object.entries(N)) {
      let n = e.boundVariables && e.boundVariables[i];
      if (!n) continue;
      if (!t || !t.variableMaps) {
        A(e, i);
        continue;
      }
      let s = j(n.id, t.variableMaps.numberVariableMap, e) ?? void 0;
      if (void 0 === s) {
        A(e, i);
        continue;
      }
      l7.ai("first-draft-override-spacing", () => {
        let t = e[r];
        let i = o$(t);
        e[r] = nV({
          value: t,
          rangeSize: i
        }, s, 1);
      });
    }
  }(node, theme);
  (function (e, t, i) {
    if (e.boundVariables) for (let [r, n] of Object.entries(I)) {
      let s = e.boundVariables && e.boundVariables[r];
      if (!s) continue;
      if (!i || !i.variableMaps) {
        k(e, r);
        continue;
      }
      let o = j(s.id, i.variableMaps.numberVariableMap, e) ?? void 0;
      if (void 0 === o) {
        k(e, r);
        continue;
      }
      l7.ai("first-draft-override-radius", () => {
        let i = UO(e, e[n], o, 1);
        e[n] = i;
        t[s.id] = i;
      });
    }
  })(node, variableOverrideMap, theme);
  "TEXT" === node.type && (await L(node, variableOverrideMap, theme));
  let l = node.fills.some(e => "IMAGE" === e.type);
  let d = !l && colorOptions.modeChanged;
  if (t = {
    node,
    getNewColor: (e, t) => {
      let r = t.varId && theme ? function (e, t, i) {
        if (!t.variableMaps) return;
        let r = XJn.getCustomizableVariableName(i.guid, e);
        if (!r) return;
        let a = tm(r);
        if (a) return t.variableMaps.colorVariableMap[a];
      }(t.varId, theme, node) : void 0;
      return Jv(e, {
        ...t,
        brandColor: r
      });
    },
    variableOverrideMap,
    options: {
      ...colorOptions,
      modeChanged: d,
      role: Dk(node)
    }
  }, l7.ai("first-draft-override-paints", () => {
    oR(t);
  }), node.childCount) {
    let e = gU(node.fills, l ? void 0 : colorOptions.parentFillColor);
    await R({
      node,
      variableOverrideMap,
      theme,
      colorOptions: {
        ...colorOptions,
        modeChanged: d,
        parentFillColor: e
      }
    });
  }
}
async function M(e, t, i) {
  await D({
    node: e,
    variableOverrideMap: t,
    theme: i,
    colorOptions: {
      mode: i && i.darkMode ? lH.DARK : lH.LIGHT,
      modeChanged: !!i?.darkMode
    }
  });
}
async function P(e) {
  for (let t of _F(e, ["INSTANCE", "FRAME"], {
    sharedPluginData: {
      namespace: "jsx",
      keys: ["theme"]
    }
  })) {
    xF(t.guid);
    let e = t.getSharedPluginData("jsx", "theme");
    if (e) try {
      let i = JSON.parse(e);
      let r = Vx(i);
      await M(t, {}, r);
    } catch (t) {
      logError("First Draft theming", "Failed to parse theme", {
        themeStr: e,
        e: t
      });
    }
  }
}
async function B(e, t, i) {
  let n = _$$D({
    enableNativeJsx: !0
  });
  n.skipInvisibleInstanceChildren = !0;
  let a = getSingletonSceneGraph();
  let s = null;
  if (getFeatureFlags().first_draft_share_jsx) {
    let n = await _1(e, i, {
      showUnhandled: !!getFeatureFlags().first_draft_debug,
      headless: !1
    });
    if (!(s = n.node)) throw Error("Could not find new node");
    t && (t.trackComponentLookupSuccess(n.stats?.componentLookupSuccesses ?? 0), t.trackComponentLookupFailure(n.stats?.componentLookupFailures ?? 0));
  } else {
    let t = await n.createNodeFromJSXAsync(e);
    s = a.get(t.id);
  }
  s.localOpacity = 0;
  return s;
}
async function U(e, t, i) {
  let r = uP(e, {
    ignoreOpacity: !0
  });
  let n = rO(e, r);
  l7.ai("first-draft-override-paints", () => {
    let i = t.darkMode ? lH.DARK : lH.LIGHT;
    i !== _$$P(e) && _$$t(e, i);
    let r = tK(t.brandColor);
    if (r) {
      let t = gU(e.fills);
      t && e.childrenNodes.forEach(e => {
        l9(e, r, i, {}, "", t);
      });
    }
  });
  l7.ai("first-draft-remove-fill", () => {
    e.fills = [];
  });
  await jR(e, k5({
    fontFamilies: n.fontFamilies
  }, {
    fontFamilies: t.fontFamilies
  }), i);
}
async function G(e, t, i) {
  let r = {};
  for (let n of e) {
    if (l7.ai("first-draft-set-plugin-data", () => {
      if (i.frameName && n.name !== i.frameName && (n.name = i.frameName), t && n.setSharedPluginData(SV, "jsx", t), i.theme && n.setSharedPluginData(SV, "theme", JSON.stringify(i.theme)), i.sharedPluginData) for (let [e, t] of Object.entries(i.sharedPluginData)) n.setSharedPluginData(SV, e, t);
    }), i.addWireframeBorder && l7.ai("first-draft-set-wireframe-border", () => {
      _Y(n);
    }), jZ(n, i.dsKitKey, i.clientLifecycleId), i.directGeneration && getFeatureFlags().first_draft_direct_gen_layout_heuristics ? WY(n) : i.autoFillParent && n && tG(n), await M(n, r, i.theme), i.themeProperties) {
      if (!i.deviceType) throw Error("deviceType must be provided if themeProperties is provided");
      await U(n, i.themeProperties, i.deviceType);
    }
    i.isEval && (await P(n));
    Zu(n);
  }
  return {
    themeOverrideMap: r
  };
}
export async function $$K0({
  jsxStr: e,
  jsxElement: t,
  prevExpandedJsx: i,
  customJsxElementRegistry: d,
  options: p
}, g) {
  let _ = getSingletonSceneGraph();
  let x = _$$D({
    enableNativeJsx: !0
  });
  if (x.skipInvisibleInstanceChildren = !0, !p.prevNodeId) {
    let i = await B(t, g, d.getShareJsxComponentInfoByJSXName());
    if (!i) throw Error("Could not find new node");
    l7.ai("first-draft-insert-jsx", () => {
      if (p.parentNodeId) {
        let e = _.get(p.parentNodeId);
        if (!e) {
          logError("first-draft", "Could not find parent node with parentNodeId", {
            parentNodeId: p.parentNodeId
          });
          return Error("Could not find parent node with parentNodeId");
        }
        let t = [i];
        for (let i of (t.reverse(), t)) p.insertAtIndex ? p.insertAtIndex === e.childCount ? e.appendChild(i) : e.insertChild(i, p.insertAtIndex) : e.appendChild(i);
      }
    });
    i.materializeDescendants();
    let r = await G([i], e, p);
    await U_(i, p);
    i.removeLocalOpacity();
    return {
      insertNodeIds: [i.guid],
      customizationResult: r
    };
  }
  let y = _.get(p.prevNodeId);
  if (!y) {
    logError("first-draft", "Could not find node with prevNodeId", {
      prevNodeId: p.prevNodeId
    });
    return Error("Could not find node with prevNodeId");
  }
  let b = JF(i);
  let C = null;
  if (getFeatureFlags().first_draft_share_jsx) {
    let e = await _$$m({
      node: y,
      jsxElement: t,
      oldJSXElement: b,
      options: {
        ...RP,
        transformUnhandledNodes: !!getFeatureFlags().first_draft_debug,
        componentInfoByJSXName: d.getShareJsxComponentInfoByJSXName()
      }
    });
    C = e.node;
    g && (g.trackComponentLookupSuccess(e.stats?.componentLookupSuccesses ?? 0), g.trackComponentLookupFailure(e.stats?.componentLookupFailures ?? 0));
  } else {
    let e = await x.reconcileNodeFromJSXAsync({
      id: y.guid
    }, b, t);
    C = _.get(e.id);
  }
  if (!C) throw Error("Could not find updated node");
  C.materializeDescendants();
  let v = await G([C], e, p);
  p.shouldAnimateLoading && p.doneTextLayerIds && function (e, t, i) {
    let r = [];
    for (let e of (hV(t, e => {
      "TEXT" === e.type && r.push(e);
    }), r)) i.has(e.guid) || (us(e) ? (zuo.cancelAllAnimationsForNode(e.guid), i.add(e.guid)) : zuo.isAnimating(e.guid) || e.setOpacityWithAnimation(1, _E.forOpacityOscillation(45, .25, .8, 60), "first-draft-text-layer-opacity"));
  }(0, C, p.doneTextLayerIds);
  C.guid !== p.prevNodeId && (await U_(C, p));
  return {
    insertNodeIds: [C.guid],
    customizationResult: v
  };
}
export const f = $$K0;
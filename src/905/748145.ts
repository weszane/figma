import { mHF, ZiZ, rXF, Egt, Z_n } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { g as _$$g } from "../905/871474";
import { jq } from "../figma_app/761118";
import { C as _$$C } from "../905/887158";
import { n3 } from "../905/859698";
import { debugState } from "../905/407919";
import { AV, Oe } from "../figma_app/933328";
import { W9, gU, Hf, ne } from "../figma_app/407414";
import { Bw, pg, kl, xR, jd, Hu } from "../figma_app/327683";
import { Nd } from "../figma_app/512532";
import { sD } from "../figma_app/243058";
import { TW, sB, d$ } from "../905/958097";
import { g as _$$g2 } from "../905/880308";
import { nw } from "../figma_app/194671";
import { l7 } from "../905/189185";
import { rO } from "../figma_app/409807";
import { getSingletonSceneGraph } from "../905/700578";
import { c_ } from "../905/695660";
import { qN } from "../figma_app/273493";
import { xv, f3 } from "../905/936278";
import { J3, JJ, Zf, Ef } from "../905/107436";
import { L$ } from "../905/989106";
function m(e) {
  let t;
  if ("mixed" !== e.fontNameOrMixed) return e.fontNameOrMixed.family;
  if (!e.textData) return;
  let {
    characters
  } = e.textData;
  if (!characters) return;
  let n = {};
  for (let t = 0; t < characters.length; t++) {
    let i = e.getRangeFontName(t, t + 1);
    if ("mixed" === i) continue;
    let r = i.family;
    n[r] = (n[r] ?? 0) + 1;
  }
  let r = 0;
  for (let [e, i] of Object.entries(n)) i > r && (t = e, r = i);
  return t;
}
function h(e, t) {
  let i = [];
  for (let n of t) {
    let t = "TEXT" === n.style_type && n.meta?.style_thumbnail ? n.meta.style_thumbnail : null;
    if (!t) continue;
    let {
      fontSize,
      lineHeight
    } = t.metrics;
    e.fontSize === fontSize && e.lineHeight === lineHeight?.value && i.push(n);
  }
  return i;
}
function $$g({
  guid: e,
  style: t,
  ruleId: i,
  suggestionId: r,
  forFixPreview: a = !1,
  shouldLogFix: s = !1
}) {
  let o = debugState.dispatch;
  return new Promise(a ? (i, r) => {
    if (t.isLocal) {
      let e = mHF?.copyLocalStyleToLinterScene(t.node_id);
      if (!e) {
        r(Error("Failed to copy local style to linter scene"));
        return;
      }
      t = {
        ...t,
        node_id: e
      };
    }
    o(AV({
      targetGuids: [e],
      style: t,
      inheritStyleKeyField: "inheritTextStyleKey",
      fromSearch: !1,
      onSuccess: () => {
        i(!0);
      },
      onError: () => {
        r(Error("Failed to apply style for preview"));
      },
      targetUpsertScene: ZiZ.LINTER_SCENE,
      omitFullscreenCommit: !0
    }));
  } : (n, a) => {
    o(AV({
      targetGuids: [e],
      style: t,
      inheritStyleKeyField: "inheritTextStyleKey",
      fromSearch: !1,
      onSuccess: () => {
        s && W9(r, t.key.toString(), i);
        n(!0);
      },
      onError: () => {
        a(Error("Failed to apply style"));
      },
      omitFullscreenCommit: !0
    }));
  });
}
function v(e, t, i, r) {
  var a;
  var s;
  let o = function ({
    localVariables: e,
    libraryVariableSetIdToSet: t,
    libraryVariables: i,
    allowedScopes: r,
    node: a
  }) {
    let s = TW({
      node: a,
      resolvedType: rXF.FLOAT,
      localVariables: e,
      libraryVariableSetIdToSet: t,
      libraryVariables: i
    });
    return sB({
      variablesMap: s,
      allowedScopes: r
    });
  }({
    node: e,
    allowedScopes: d$({
      ruleId: r
    }),
    localVariables: i.localVariables,
    libraryVariables: i.libraryVariables,
    libraryVariableSetIdToSet: i.libraryVariableSetIdToSet
  });
  let l = [...Object.values(o.localVariables), ...Object.values(o.libraryVariables)];
  if (0 === l.length) return null;
  a = l.filter(e => void 0 !== e.resolvedValue && e.variable.resolvedType === rXF.FLOAT);
  s = t.numericValue;
  let d = [...a.filter(e => e?.resolvedValue !== "MIXED" && "number" == typeof e?.resolvedValue?.value && e?.resolvedValue?.value > 0)].sort((e, t) => Math.abs(Number(e.resolvedValue.value) - s) - Math.abs(Number(t.resolvedValue.value) - s)).slice(0, 1);
  if (0 === d.length) return null;
  let c = [];
  for (let e of d) c.push({
    variableId: e.variable.node_id,
    resolvedValue: e.resolvedValue
  });
  let u = {
    fixes: c,
    suggestionId: _$$g2()
  };
  let m = c.map(e => {
    let t = i.availableVariables[e.variableId];
    return t ? "LIBRARY" === t.subscriptionStatus ? t.key.toString() : t.keyForPublish.toString() : null;
  }).filter(e => null !== e);
  gU(u.suggestionId, void 0, m, "HEURISTIC", r);
  return u;
}
function I(e) {
  switch (e) {
    case "RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS":
      return _$$C.REQUIRE_BOTTOM_LEFT_CORNER_RADIUS_VARIABLES;
    case "RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS":
      return _$$C.REQUIRE_BOTTOM_RIGHT_CORNER_RADIUS_VARIABLES;
    case "RECTANGLE_TOP_LEFT_CORNER_RADIUS":
      return _$$C.REQUIRE_TOP_LEFT_CORNER_RADIUS_VARIABLES;
    case "RECTANGLE_TOP_RIGHT_CORNER_RADIUS":
      return _$$C.REQUIRE_TOP_RIGHT_CORNER_RADIUS_VARIABLES;
    case "STACK_SPACING_HORIZONTAL":
      return _$$C.REQUIRE_HORIZONTAL_SPACING_VARIABLES;
    case "STACK_SPACING_VERTICAL":
      return _$$C.REQUIRE_VERTICAL_SPACING_VARIABLES;
    case "STACK_PADDING_TOP":
      return _$$C.REQUIRE_TOP_PADDING_VARIABLES;
    case "STACK_PADDING_BOTTOM":
      return _$$C.REQUIRE_BOTTOM_PADDING_VARIABLES;
    case "STACK_PADDING_LEFT":
      return _$$C.REQUIRE_LEFT_PADDING_VARIABLES;
    case "STACK_PADDING_RIGHT":
      return _$$C.REQUIRE_RIGHT_PADDING_VARIABLES;
    default:
      return null;
  }
}
function w(e, t) {
  let i = e.getVariableConsumptionMap().STACK_SPACING;
  let n = e.stackSpacing;
  let r = e.stackMode === t;
  let a = rO(e.stackPrimaryAlignItems);
  let s = e.childrenNodes.filter(e => !!e.visible).length;
  return n > 0 && r && s >= 2 && !a && !i ? n : null;
}
function C(e, t) {
  if ("GRID" !== e.stackMode) return null;
  let i = e.getVariableConsumptionMap();
  let n = "ROW" === t ? i.GRID_ROW_GAP : i.GRID_COLUMN_GAP;
  let r = "ROW" === t ? e.gridRowGap : e.gridColumnGap;
  return r > 0 && !n ? r : null;
}
async function T(e, t, i, n, r, a) {
  let {
    fixes,
    suggestionId
  } = t;
  if (!fixes || 0 === fixes.length) return !1;
  let l = fixes[0];
  if (!l) return !1;
  let {
    variableId,
    resolvedValue
  } = l;
  if (!variableId) return !1;
  let h = i.availableVariables[variableId];
  if (!h?.node_id) return !1;
  let g = debugState.dispatch;
  let f = await g(Oe(h));
  if (!f) return Promise.resolve(!1);
  if (r) {
    e.stackSpacing = resolvedValue.value;
    return !0;
  }
  try {
    if (l7.user("design-linter-apply-spacing-variable", () => {
      e.setBoundVariable("itemSpacing", f);
    }), a) {
      let e = h.variableSetId;
      let t = "LIBRARY" === h.subscriptionStatus ? h.key.toString() : h.keyForPublish.toString();
      Hf({
        suggestionId,
        variableKey: t,
        subscriptionStatus: h.subscriptionStatus,
        variableSetId: e,
        ruleId: n
      });
    }
    return !0;
  } catch (e) {
    console.error("Design linting error setting bound variable: ", e);
    return !1;
  }
}
async function k({
  sourceNode: e,
  gapType: t,
  fixContext: i,
  fixMetadata: n,
  ruleId: r,
  forFixPreview: a,
  shouldLogFix: s
}) {
  let {
    fixes,
    suggestionId
  } = i;
  if (!fixes || 0 === fixes.length) return !1;
  let d = fixes[0];
  if (!d) return !1;
  let {
    variableId,
    resolvedValue
  } = d;
  if (!variableId) return !1;
  let g = n.availableVariables[variableId];
  if (!g?.node_id) return !1;
  let f = debugState.dispatch;
  let _ = await f(Oe(g));
  if (!_) return Promise.resolve(!1);
  if (a) {
    "ROW" === t ? e.gridRowGap = resolvedValue.value : e.gridColumnGap = resolvedValue.value;
    return !0;
  }
  try {
    if (l7.user("design-linter-apply-spacing-variable", () => {
      "ROW" === t ? e.setBoundVariable("gridRowGap", _) : e.setBoundVariable("gridColumnGap", _);
    }), s) {
      let e = g.variableSetId;
      let t = "LIBRARY" === g.subscriptionStatus ? g.key.toString() : g.keyForPublish.toString();
      Hf({
        suggestionId,
        variableKey: t,
        subscriptionStatus: g.subscriptionStatus,
        variableSetId: e,
        ruleId: r
      });
    }
    return !0;
  } catch (e) {
    console.error("Design linting error setting bound variable: ", e);
    return !1;
  }
}
async function N(e, t, i) {
  let r = {
    ruleId: _$$C.REQUIRE_ASSETS_FROM_SELECTED_LIBRARIES,
    guid: e.guid,
    valid: !1
  };
  try {
    let u = t.assetType;
    if ("COMPONENT" === u) return Promise.resolve(r);
    let p = t.assetId;
    let g = i.availableVariables[p];
    if ("FILL" === u || "STROKE" === u) {
      if (g?.resolvedType !== rXF.COLOR) return Promise.resolve(r);
      let t = e.resolveVariable(p);
      let a = await Bw({
        sourceNode: e,
        color: t.value,
        opacity: t.value.a,
        fixMetadata: i,
        ruleId: _$$C.REQUIRE_ASSETS_FROM_SELECTED_LIBRARIES,
        propToApply: u
      });
      if (a) {
        let e = {
          suggestionId: a.suggestionId,
          fixes: a
        };
        r.valid = !0;
        r.fixContext = e;
      }
    } else if ("TEXT_STYLE" === u) {
      let i = zl.get(jq);
      let n = function (e, t) {
        let i = debugState.getState().library.used__LIVEGRAPH.styles[n3(t)];
        if (!i || i?.data === null) return null;
        let {
          data
        } = i;
        let r = data.meta?.style_thumbnail ? data.meta.style_thumbnail : null;
        return r ? {
          fontFamily: m(e) ?? "",
          fontSize: r.metrics.fontSize ?? 0,
          lineHeight: r.metrics.lineHeight?.value ?? 0
        } : null;
      }(e, t.assetId);
      if (!n) return Promise.resolve(r);
      let l = h(n, i.allStyles);
      let u = l.map(e => e.key.toString()).length > 0 ? _$$g() : "";
      l.length > 0 && (r.valid = !0, r.fixContext = {
        suggestionId: u,
        fixes: {
          suggestionId: u,
          fixes: l
        }
      });
    } else {
      let t = I(u);
      if (!t || g?.resolvedType !== rXF.FLOAT) return Promise.resolve(r);
      let a = e.resolveVariable(p);
      let s = v(e, {
        numericValue: a.value
      }, i, t);
      if (s) {
        let e = {
          suggestionId: s.suggestionId,
          fixes: s
        };
        r.valid = !0;
        r.fixContext = e;
      }
    }
    return Promise.resolve(r);
  } catch (e) {
    console.error("Design linting error getting library mismatch fix: ", e);
    return Promise.resolve(r);
  }
}
async function P({
  node: e,
  detectionContext: t,
  fixContext: i,
  fixMetadata: n,
  forFixPreview: r = !1,
  shouldLogFix: a
}) {
  try {
    let {
      assetType
    } = t;
    if ("COMPONENT" === assetType) return !1;
    if ("TEXT_STYLE" === assetType) {
      let t = i.fixes.fixes[0];
      if (!t) return !1;
      let n = e.guid;
      return $$g({
        guid: n,
        style: t,
        ruleId: _$$C.REQUIRE_ASSETS_FROM_SELECTED_LIBRARIES,
        suggestionId: i.suggestionId,
        forFixPreview: r,
        shouldLogFix: a
      });
    }
    if ("FILL" !== assetType && "STROKE" !== assetType) {
      let t = I(assetType);
      if (!t) return !1;
      switch (assetType) {
        case "RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS":
        case "RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS":
        case "RECTANGLE_TOP_LEFT_CORNER_RADIUS":
        case "RECTANGLE_TOP_RIGHT_CORNER_RADIUS":
          return await Nd(e, i.fixes, n, t, r, a);
        case "STACK_SPACING_HORIZONTAL":
        case "STACK_SPACING_VERTICAL":
          return await T(e, i.fixes, n, t, r, a);
        case "STACK_PADDING_TOP":
        case "STACK_PADDING_BOTTOM":
        case "STACK_PADDING_LEFT":
        case "STACK_PADDING_RIGHT":
          return await nw(e, i.fixes, n, t, r, a);
        default:
          return !1;
      }
    }
    return await pg(e, i.fixes, n, _$$C.REQUIRE_ASSETS_FROM_SELECTED_LIBRARIES, r, a, assetType);
  } catch (e) {
    console.error("Design linting error swapping variables: ", e);
    return e;
  }
}
let O = {
  id: _$$C.REQUIRE_ASSETS_FROM_SELECTED_LIBRARIES,
  description: "Detects assets that are not from the selected libraries.",
  enabled: () => !!getFeatureFlags().aip_flower_garden_library_match,
  detect: function ({
    node: e,
    detectionMetadata: t
  }) {
    let i = {
      failedGuidToContext: {}
    };
    let r = [];
    let {
      availableVariables,
      availableLibraryKeys,
      selectedLibraryKeys
    } = t;
    if (e.isInstanceSublayer) {
      i.didSkipNode = !0;
      return Promise.resolve(i);
    }
    if ("SYMBOL" === e.type || "INSTANCE" === e.type || e.isStateGroup) {
      let t = function (e, t, i) {
        let r = e.symbolId;
        let a = getSingletonSceneGraph().get(r ?? "");
        let s = a?.sourceLibraryKey ?? "";
        a?.type === "SYMBOL" && a?.parentNode?.isStateGroup && (r = a.parentNode.guid, s = a.parentNode.sourceLibraryKey ?? "");
        let o = Egt?.getAssetKey(r ?? "");
        return o && s && t.has(s) && !i.has(s) ? {
          assetId: o.toString(),
          libraryKey: s
        } : null;
      }(e, availableLibraryKeys, selectedLibraryKeys);
      if (t) {
        let {
          assetId,
          libraryKey
        } = t;
        r.push({
          assetId,
          libraryKey,
          assetType: "COMPONENT"
        });
      }
    }
    let {
      paint
    } = kl(e.fills);
    let d = xR(paint, availableVariables, selectedLibraryKeys);
    if (d) {
      let {
        variableId,
        libraryKey
      } = d;
      let i = availableVariables[variableId];
      i && "library_key" in i && r.push({
        assetId: variableId,
        libraryKey,
        assetType: "FILL"
      });
    }
    let {
      paint: _paint
    } = kl(e.strokePaints.data);
    let p = xR(_paint, availableVariables, selectedLibraryKeys);
    if (p) {
      let {
        variableId,
        libraryKey
      } = p;
      let i = availableVariables[variableId];
      i && "library_key" in i && r.push({
        assetId: variableId,
        libraryKey,
        assetType: "STROKE"
      });
    }
    let m = function ({
      node: e,
      allVariables: t,
      selectedLibraryKeys: i
    }) {
      let r = [];
      let a = ["RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS", "RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS", "RECTANGLE_TOP_LEFT_CORNER_RADIUS", "RECTANGLE_TOP_RIGHT_CORNER_RADIUS", "STACK_SPACING", "STACK_PADDING_TOP", "STACK_PADDING_BOTTOM", "STACK_PADDING_LEFT", "STACK_PADDING_RIGHT"];
      for (let [s, o] of Object.entries(e.getVariableConsumptionMap())) {
        if (!a.includes(s) || !o || !("type" in o) || o.type !== Z_n.ALIAS) continue;
        let l = sD.fromString(o.value) ?? "";
        let d = t[l];
        if (!(!d || !("library_key" in d) || i.has(d.library_key))) {
          if ("STACK_SPACING" === s) {
            let t = e.stackMode;
            r.push({
              variableId: l,
              libraryKey: d.library_key,
              assetType: `${s}_${t}`
            });
            continue;
          }
          r.push({
            variableId: l,
            libraryKey: d.library_key,
            assetType: s
          });
        }
      }
      return r;
    }({
      node: e,
      allVariables: availableVariables,
      selectedLibraryKeys
    });
    m.length > 0 && r.push(...m.map(({
      variableId: e,
      libraryKey: t,
      assetType: i
    }) => ({
      assetId: e,
      libraryKey: t,
      assetType: i
    })));
    let h = function ({
      node: e,
      availableLibraryKeys: t,
      selectedLibraryKeys: i
    }) {
      if ("TEXT" !== e.type || null === e.inheritedTextStyle) return null;
      let n = e.inheritedTextStyle;
      let r = debugState.getState().library.used__LIVEGRAPH.styles[n.key];
      if (!r || r?.data === null) return null;
      let {
        library_key
      } = r.data;
      return library_key && t.has(library_key) && !i.has(library_key) ? {
        variableId: n.key,
        libraryKey: library_key,
        assetType: "TEXT_STYLE"
      } : null;
    }({
      node: e,
      availableLibraryKeys,
      selectedLibraryKeys
    });
    if (h) {
      let {
        variableId,
        libraryKey
      } = h;
      r.push({
        assetId: variableId,
        libraryKey,
        assetType: "TEXT_STYLE"
      });
    }
    r.length > 0 && (i.failedGuidToContext[e.guid] = r);
    return Promise.resolve(i);
  },
  getFix: N,
  fix: P
};
let D = {
  id: _$$C.EXTENSIBILITY_RULE,
  description: "This is a temporary extensibility rule for testing and future implementation. Based on the explorations, we can iterate on UI and grouping, such as creating clusters of issues based on a new enum returned by the plugin code.",
  enabled: () => !!getFeatureFlags().aip_flower_garden_ext_rule,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {}
    };
    "FRAME" === e.type ? t.failedGuidToContext[e.guid] = [{
      explanation: "Temporary extensibility rule detection: This is a frame node",
      subtype: "No Frames Allowed"
    }] : "TEXT" === e.type && (t.failedGuidToContext[e.guid] = [{
      explanation: "Temporary extensibility rule detection: This is a text node",
      subtype: "Text node alert \u{1F6A8}"
    }]);
    return Promise.resolve(t);
  },
  getFix: function (e, t, i) {
    return Promise.resolve({
      ruleId: _$$C.EXTENSIBILITY_RULE,
      guid: e.guid,
      valid: !0,
      fixContext: {}
    });
  },
  fix: function ({
    node: e,
    fixContext: t,
    forFixPreview: i
  }) {
    return i ? Promise.resolve(!1) : (console.warn("ExtensibilityRule: Applying fix for node:", e.guid, "with context:", t), Promise.resolve(!0));
  }
};
let F = {
  id: _$$C.REQUIRE_TEXT_STYLES,
  description: "Detects missing text styles for text nodes.",
  enabled: () => !!getFeatureFlags().aip_flower_garden_ts,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {},
      didSkipNode: !0
    };
    if (e.isInstanceSublayer || e.isInstance) {
      t.didSkipNode = !0;
      return Promise.resolve(t);
    }
    if (c_(e) || "TEXT" !== e.type || null !== e.inheritedTextStyle) return Promise.resolve(t);
    t.didSkipNode = !1;
    let i = m(e);
    let n = function (e) {
      if ("mixed" !== e.fontSizeOrMixed || !e.textData) return e.fontSize;
      let {
        characters,
        characterStyleIDs,
        styleOverrideTable
      } = e.textData;
      if (!characters || !characterStyleIDs || !styleOverrideTable) return -1;
      let r = {
        [e.fontSize]: characters.length
      };
      for (let t of characterStyleIDs) {
        if (0 === t) continue;
        let i = styleOverrideTable.find(e => e.styleID === t);
        i && i.fontSize && (r[e.fontSize] = (r[e.fontSize] ?? 0) - 1, r[i.fontSize] = (r[i.fontSize] ?? 0) + 1);
      }
      let a = -1;
      let s = 0;
      for (let [e, t] of Object.entries(r)) t > s && (a = parseInt(e), s = t);
      return a;
    }(e);
    let r = function (e) {
      if ("mixed" !== e.lineHeightOrMixed) return e.lineHeightOrMixed.value;
      if (!e.textData) return -1;
      let {
        characters
      } = e.textData;
      if (!characters) return -1;
      let i = {};
      for (let n = 0; n < characters.length; n++) {
        let t = e.getRangeLineHeight(n, n + 1);
        if ("mixed" === t) continue;
        let r = t.value;
        i[r] = (i[r] ?? 0) + 1;
      }
      let n = -1;
      let r = 0;
      for (let [e, t] of Object.entries(i)) t > r && (n = parseInt(e), r = t);
      return n;
    }(e);
    !i || n <= 0 || r <= 0 || (t.failedGuidToContext[e.guid] = [{
      fontFamily: i,
      fontSize: n,
      lineHeight: r
    }]);
    return Promise.resolve(t);
  },
  getFix: function (e, t, i) {
    let n = {
      ruleId: _$$C.REQUIRE_TEXT_STYLES,
      guid: e.guid,
      valid: !0
    };
    try {
      let e = zl.get(jq);
      let i = h(t, e.allStyles);
      let r = i.map(e => e.key.toString());
      let d = r.length > 0 ? _$$g() : "";
      ne(d, r, _$$C.REQUIRE_TEXT_STYLES);
      return Promise.resolve({
        ...n,
        valid: i.length > 0,
        fixContext: {
          suggestionId: d,
          fixes: i
        }
      });
    } catch (e) {
      console.error("Error getting fix for text styles:", e);
      n.valid = !1;
      return Promise.resolve(n);
    }
  },
  fix: function ({
    node: e,
    fixContext: t,
    forFixPreview: i,
    shouldLogFix: n
  }) {
    let r = t.fixes[0];
    return r ? $$g({
      guid: e.guid,
      style: r,
      ruleId: _$$C.REQUIRE_TEXT_STYLES,
      suggestionId: t.suggestionId,
      forFixPreview: i,
      shouldLogFix: n
    }) : Promise.resolve(!1);
  }
};
async function M(e, t, i) {
  let n = {
    ruleId: _$$C.REQUIRE_FILL_COLOR_VARIABLES,
    guid: e.guid,
    valid: !1
  };
  try {
    let r = await Bw({
      sourceNode: e,
      color: t.color,
      opacity: t.opacity,
      fixMetadata: i,
      ruleId: _$$C.REQUIRE_FILL_COLOR_VARIABLES
    });
    r && (n.valid = !0, n.fixContext = r);
    return Promise.resolve(n);
  } catch (e) {
    console.error("Design linting error getting fill variable fix: ", e);
    return Promise.resolve(n);
  }
}
async function j({
  node: e,
  fixContext: t,
  fixMetadata: i,
  forFixPreview: n,
  shouldLogFix: r
}) {
  try {
    return await pg(e, t, i, _$$C.REQUIRE_FILL_COLOR_VARIABLES, n, r);
  } catch (e) {
    console.error("Design linting error fixing fills variables: ", e);
    return e;
  }
}
let U = {
  id: _$$C.REQUIRE_FILL_COLOR_VARIABLES,
  description: "Detects missing color variables for Fill prop, and applies a fix to use the most appropriate variable.",
  enabled: () => !0,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {}
    };
    if (e.isInstanceSublayer || e.isInstance) {
      t.didSkipNode = !0;
      return Promise.resolve(t);
    }
    let {
      paint
    } = kl(e.fills);
    if (!paint) return Promise.resolve(t);
    let n = jd(paint);
    n && (t.failedGuidToContext[e.guid] = [{
      opacity: n.opacity,
      color: n.color
    }]);
    return Promise.resolve(t);
  },
  getFix: M,
  fix: j
};
async function B(e, t, i) {
  let n = {
    ruleId: _$$C.REQUIRE_STROKE_COLOR_VARIABLES,
    guid: e.guid,
    valid: !1
  };
  try {
    let r = await Bw({
      sourceNode: e,
      color: t.color,
      opacity: t.opacity,
      fixMetadata: i,
      ruleId: _$$C.REQUIRE_STROKE_COLOR_VARIABLES
    });
    r && (n.valid = !0, n.fixContext = r);
    return Promise.resolve(n);
  } catch (e) {
    console.error("Design linting error getting stroke variable fix: ", e);
    return Promise.resolve(n);
  }
}
async function V({
  node: e,
  fixContext: t,
  fixMetadata: i,
  forFixPreview: n,
  shouldLogFix: r
}) {
  try {
    return await pg(e, t, i, _$$C.REQUIRE_STROKE_COLOR_VARIABLES, n, r);
  } catch (e) {
    console.error("Design linting error fixing stroke variables: ", e);
    return e;
  }
}
let G = {
  id: _$$C.REQUIRE_STROKE_COLOR_VARIABLES,
  description: "Detects missing missing color variable for stroke props, and applies a fix to use the most appropriate variable.",
  enabled: () => !0,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {}
    };
    if (e.isInstanceSublayer || e.isInstance) {
      t.didSkipNode = !0;
      return Promise.resolve(t);
    }
    let {
      paint
    } = kl(e.strokePaints.data);
    if (!paint) return Promise.resolve(t);
    let n = jd(paint);
    n && (t.failedGuidToContext[e.guid] = [{
      opacity: n.opacity,
      color: n.color
    }]);
    return Promise.resolve(t);
  },
  getFix: B,
  fix: V
};
async function z({
  node: e,
  fixContext: t,
  fixMetadata: i,
  forFixPreview: n = !1,
  shouldLogFix: r
}) {
  try {
    return await Nd(e, t, i, _$$C.REQUIRE_BOTTOM_LEFT_CORNER_RADIUS_VARIABLES, n, r);
  } catch (e) {
    console.error("Design linting error fixing corner radius variables: ", e);
    return e;
  }
}
let H = {
  id: _$$C.REQUIRE_BOTTOM_LEFT_CORNER_RADIUS_VARIABLES,
  description: "Detects missing number variables for bottom left corner radius fields, and applies a fix to use the most appropriate variable.",
  enabled: () => !!getFeatureFlags().aip_flower_garden_corners,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {},
      didSkipNode: !0
    };
    if (e.isInstanceSublayer || e.isInstance) {
      t.didSkipNode = !0;
      return Promise.resolve(t);
    }
    if (c_(e)) return Promise.resolve(t);
    t.didSkipNode = !1;
    let i = e.getVariableConsumptionMap().RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS;
    let n = e.rectangleBottomLeftCornerRadius;
    n > 0 && !i && (t.failedGuidToContext[e.guid] = [{
      numericValue: n
    }]);
    return Promise.resolve(t);
  },
  getFix: function (e, t, i) {
    let n = {
      ruleId: _$$C.REQUIRE_BOTTOM_LEFT_CORNER_RADIUS_VARIABLES,
      guid: e.guid,
      valid: !1
    };
    try {
      let r = v(e, t, i, _$$C.REQUIRE_BOTTOM_LEFT_CORNER_RADIUS_VARIABLES);
      r && (n.valid = !0, n.fixContext = r);
      return Promise.resolve(n);
    } catch (e) {
      console.error("Design linting error getting corner radius variable fix: ", e);
      return Promise.resolve(n);
    }
  },
  fix: z
};
async function W({
  node: e,
  fixContext: t,
  fixMetadata: i,
  forFixPreview: n = !1,
  shouldLogFix: r
}) {
  try {
    return await Nd(e, t, i, _$$C.REQUIRE_BOTTOM_RIGHT_CORNER_RADIUS_VARIABLES, n, r);
  } catch (e) {
    console.error("Design linting error fixing corner radius variables: ", e);
    return e;
  }
}
let K = {
  id: _$$C.REQUIRE_BOTTOM_RIGHT_CORNER_RADIUS_VARIABLES,
  description: "Detects missing number variables for bottom right corner radius fields, and applies a fix to use the most appropriate variable.",
  enabled: () => !!getFeatureFlags().aip_flower_garden_corners,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {},
      didSkipNode: !0
    };
    if (e.isInstanceSublayer || e.isInstance) {
      t.didSkipNode = !0;
      return Promise.resolve(t);
    }
    if (c_(e)) return Promise.resolve(t);
    t.didSkipNode = !1;
    let i = e.getVariableConsumptionMap().RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS;
    let n = e.rectangleBottomRightCornerRadius;
    n > 0 && !i && (t.failedGuidToContext[e.guid] = [{
      numericValue: n
    }]);
    return Promise.resolve(t);
  },
  getFix: function (e, t, i) {
    let n = {
      ruleId: _$$C.REQUIRE_BOTTOM_RIGHT_CORNER_RADIUS_VARIABLES,
      guid: e.guid,
      valid: !1
    };
    try {
      let r = v(e, t, i, _$$C.REQUIRE_BOTTOM_RIGHT_CORNER_RADIUS_VARIABLES);
      r && (n.valid = !0, n.fixContext = r);
      return Promise.resolve(n);
    } catch (e) {
      console.error("Design linting error getting corner radius variable fix: ", e);
      return Promise.resolve(n);
    }
  },
  fix: W
};
async function Y({
  node: e,
  fixContext: t,
  fixMetadata: i,
  forFixPreview: n = !1,
  shouldLogFix: r
}) {
  try {
    return await Nd(e, t, i, _$$C.REQUIRE_TOP_LEFT_CORNER_RADIUS_VARIABLES, n, r);
  } catch (e) {
    console.error("Design linting error fixing corner radius variables: ", e);
    return e;
  }
}
let q = {
  id: _$$C.REQUIRE_TOP_LEFT_CORNER_RADIUS_VARIABLES,
  description: "Detects missing number variables for top left corner radius fields, and applies a fix to use the most appropriate variable.",
  enabled: () => !!getFeatureFlags().aip_flower_garden_corners,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {},
      didSkipNode: !0
    };
    if (e.isInstanceSublayer || e.isInstance) {
      t.didSkipNode = !0;
      return Promise.resolve(t);
    }
    if (c_(e)) return Promise.resolve(t);
    t.didSkipNode = !1;
    let i = e.getVariableConsumptionMap().RECTANGLE_TOP_LEFT_CORNER_RADIUS;
    let n = e.rectangleTopLeftCornerRadius;
    n > 0 && !i && (t.failedGuidToContext[e.guid] = [{
      numericValue: n
    }]);
    return Promise.resolve(t);
  },
  getFix: function (e, t, i) {
    let n = {
      ruleId: _$$C.REQUIRE_TOP_LEFT_CORNER_RADIUS_VARIABLES,
      guid: e.guid,
      valid: !1
    };
    try {
      let r = v(e, t, i, _$$C.REQUIRE_TOP_LEFT_CORNER_RADIUS_VARIABLES);
      r && (n.valid = !0, n.fixContext = r);
      return Promise.resolve(n);
    } catch (e) {
      console.error("Design linting error getting corner radius variable fix: ", e);
      return Promise.resolve(n);
    }
  },
  fix: Y
};
async function $({
  node: e,
  fixContext: t,
  fixMetadata: i,
  forFixPreview: n = !1,
  shouldLogFix: r
}) {
  try {
    return await Nd(e, t, i, _$$C.REQUIRE_TOP_RIGHT_CORNER_RADIUS_VARIABLES, n, r);
  } catch (e) {
    console.error("Design linting error fixing corner radius variables: ", e);
    return e;
  }
}
let Z = {
  id: _$$C.REQUIRE_TOP_RIGHT_CORNER_RADIUS_VARIABLES,
  description: "Detects missing number variables for top right corner radius fields, and applies a fix to use the most appropriate variable.",
  enabled: () => !!getFeatureFlags().aip_flower_garden_corners,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {},
      didSkipNode: !0
    };
    if (e.isInstanceSublayer || e.isInstance) {
      t.didSkipNode = !0;
      return Promise.resolve(t);
    }
    if (c_(e)) return Promise.resolve(t);
    t.didSkipNode = !1;
    let i = e.getVariableConsumptionMap().RECTANGLE_TOP_RIGHT_CORNER_RADIUS;
    let n = e.rectangleTopRightCornerRadius;
    n > 0 && !i && (t.failedGuidToContext[e.guid] = [{
      numericValue: n
    }]);
    return Promise.resolve(t);
  },
  getFix: function (e, t, i) {
    let n = {
      ruleId: _$$C.REQUIRE_TOP_RIGHT_CORNER_RADIUS_VARIABLES,
      guid: e.guid,
      valid: !1
    };
    try {
      let r = v(e, t, i, _$$C.REQUIRE_TOP_RIGHT_CORNER_RADIUS_VARIABLES);
      r && (n.valid = !0, n.fixContext = r);
      return Promise.resolve(n);
    } catch (e) {
      console.error("Design linting error getting corner radius variable fix: ", e);
      return Promise.resolve(n);
    }
  },
  fix: $
};
async function X({
  node: e,
  fixContext: t,
  fixMetadata: i,
  forFixPreview: n = !1,
  shouldLogFix: r
}) {
  try {
    return await k({
      sourceNode: e,
      gapType: "COLUMN",
      fixContext: t,
      fixMetadata: i,
      ruleId: _$$C.REQUIRE_GRID_COLUMN_GAP_VARIABLES,
      forFixPreview: n,
      shouldLogFix: r
    });
  } catch (e) {
    console.error("Design linting error fixing spacing variables: ", e);
    return e;
  }
}
let Q = {
  id: _$$C.REQUIRE_GRID_COLUMN_GAP_VARIABLES,
  description: "Detects missing number variables for grid column gap fields, and applies a fix to use the most appropriate variable.",
  enabled: () => !!getFeatureFlags().aip_flower_garden_grids,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {}
    };
    if (e.isInstanceSublayer || e.isInstance) {
      t.didSkipNode = !0;
      return Promise.resolve(t);
    }
    let i = C(e, "COLUMN");
    i && (t.failedGuidToContext[e.guid] = [{
      numericValue: i
    }]);
    return Promise.resolve(t);
  },
  getFix: function (e, t, i) {
    let n = {
      ruleId: _$$C.REQUIRE_GRID_COLUMN_GAP_VARIABLES,
      guid: e.guid,
      valid: !1
    };
    try {
      let r = v(e, t, i, _$$C.REQUIRE_GRID_COLUMN_GAP_VARIABLES);
      r && (n.valid = !0, n.fixContext = r);
      return Promise.resolve(n);
    } catch (e) {
      console.error("Design linting error getting spacing variable fix: ", e);
      return Promise.resolve(n);
    }
  },
  fix: X
};
async function J({
  node: e,
  fixContext: t,
  fixMetadata: i,
  forFixPreview: n = !1,
  shouldLogFix: r
}) {
  try {
    return await k({
      sourceNode: e,
      gapType: "ROW",
      fixContext: t,
      fixMetadata: i,
      ruleId: _$$C.REQUIRE_GRID_ROW_GAP_VARIABLES,
      forFixPreview: n,
      shouldLogFix: r
    });
  } catch (e) {
    console.error("Design linting error fixing spacing variables: ", e);
    return e;
  }
}
let ee = {
  id: _$$C.REQUIRE_GRID_ROW_GAP_VARIABLES,
  description: "Detects missing number variables for grid row gap fields, and applies a fix to use the most appropriate variable.",
  enabled: () => !!getFeatureFlags().aip_flower_garden_grids,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {}
    };
    if (e.isInstanceSublayer || e.isInstance) {
      t.didSkipNode = !0;
      return Promise.resolve(t);
    }
    let i = C(e, "ROW");
    i && (t.failedGuidToContext[e.guid] = [{
      numericValue: i
    }]);
    return Promise.resolve(t);
  },
  getFix: function (e, t, i) {
    let n = {
      ruleId: _$$C.REQUIRE_GRID_ROW_GAP_VARIABLES,
      guid: e.guid,
      valid: !1
    };
    try {
      let r = v(e, t, i, _$$C.REQUIRE_GRID_ROW_GAP_VARIABLES);
      r && (n.valid = !0, n.fixContext = r);
      return Promise.resolve(n);
    } catch (e) {
      console.error("Design linting error getting spacing variable fix: ", e);
      return Promise.resolve(n);
    }
  },
  fix: J
};
async function et({
  node: e,
  fixContext: t,
  fixMetadata: i,
  forFixPreview: n = !1,
  shouldLogFix: r
}) {
  try {
    return await nw(e, t, i, _$$C.REQUIRE_BOTTOM_PADDING_VARIABLES, n, r);
  } catch (e) {
    console.error("Design linting error fixing padding variables: ", e);
    return e;
  }
}
let ei = {
  id: _$$C.REQUIRE_BOTTOM_PADDING_VARIABLES,
  description: "Detects missing number variables for bottom stack padding fields, and applies a fix to use the most appropriate variable.",
  enabled: () => !!getFeatureFlags().aip_flower_garden_padding,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {}
    };
    if (e.isInstanceSublayer || e.isInstance) {
      t.didSkipNode = !0;
      return Promise.resolve(t);
    }
    let i = e.getVariableConsumptionMap().STACK_PADDING_BOTTOM;
    let n = e.childrenNodes.some(e => !!e.visible);
    let r = e.stackBottomPadding;
    r > 0 && !i && n && (t.failedGuidToContext[e.guid] = [{
      numericValue: r
    }]);
    return Promise.resolve(t);
  },
  getFix: function (e, t, i) {
    let n = {
      ruleId: _$$C.REQUIRE_BOTTOM_PADDING_VARIABLES,
      guid: e.guid,
      valid: !1
    };
    try {
      let r = v(e, t, i, _$$C.REQUIRE_BOTTOM_PADDING_VARIABLES);
      r && (n.valid = !0, n.fixContext = r);
      return Promise.resolve(n);
    } catch (e) {
      console.error("Design linting error getting padding variable fix: ", e);
      return Promise.resolve(n);
    }
  },
  fix: et
};
async function en({
  node: e,
  fixContext: t,
  fixMetadata: i,
  forFixPreview: n = !1,
  shouldLogFix: r
}) {
  try {
    return await nw(e, t, i, _$$C.REQUIRE_LEFT_PADDING_VARIABLES, n, r);
  } catch (e) {
    console.error("Design linting error fixing padding variables: ", e);
    return e;
  }
}
let er = {
  id: _$$C.REQUIRE_LEFT_PADDING_VARIABLES,
  description: "Detects missing number variables for left stack padding fields, and applies a fix to use the most appropriate variable.",
  enabled: () => !!getFeatureFlags().aip_flower_garden_padding,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {}
    };
    if (e.isInstanceSublayer || e.isInstance) {
      t.didSkipNode = !0;
      return Promise.resolve(t);
    }
    let i = e.getVariableConsumptionMap().STACK_PADDING_LEFT;
    let n = e.childrenNodes.some(e => !!e.visible);
    let r = e.stackLeftPadding;
    r > 0 && !i && n && (t.failedGuidToContext[e.guid] = [{
      numericValue: r
    }]);
    return Promise.resolve(t);
  },
  getFix: function (e, t, i) {
    let n = {
      ruleId: _$$C.REQUIRE_LEFT_PADDING_VARIABLES,
      guid: e.guid,
      valid: !1
    };
    try {
      let r = v(e, t, i, _$$C.REQUIRE_LEFT_PADDING_VARIABLES);
      r && (n.valid = !0, n.fixContext = r);
      return Promise.resolve(n);
    } catch (e) {
      console.error("Design linting error getting padding variable fix: ", e);
      return Promise.resolve(n);
    }
  },
  fix: en
};
async function ea({
  node: e,
  fixContext: t,
  fixMetadata: i,
  forFixPreview: n = !1,
  shouldLogFix: r
}) {
  try {
    return await nw(e, t, i, _$$C.REQUIRE_RIGHT_PADDING_VARIABLES, n, r);
  } catch (e) {
    console.error("Design linting error fixing padding variables: ", e);
    return e;
  }
}
let es = {
  id: _$$C.REQUIRE_RIGHT_PADDING_VARIABLES,
  description: "Detects missing number variables for right stack padding fields, and applies a fix to use the most appropriate variable.",
  enabled: () => !!getFeatureFlags().aip_flower_garden_padding,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {}
    };
    if (e.isInstanceSublayer || e.isInstance) {
      t.didSkipNode = !0;
      return Promise.resolve(t);
    }
    let i = e.getVariableConsumptionMap().STACK_PADDING_RIGHT;
    let n = e.childrenNodes.some(e => !!e.visible);
    let r = e.stackRightPadding;
    r > 0 && !i && n && (t.failedGuidToContext[e.guid] = [{
      numericValue: r
    }]);
    return Promise.resolve(t);
  },
  getFix: function (e, t, i) {
    let n = {
      ruleId: _$$C.REQUIRE_RIGHT_PADDING_VARIABLES,
      guid: e.guid,
      valid: !1
    };
    try {
      let r = v(e, t, i, _$$C.REQUIRE_RIGHT_PADDING_VARIABLES);
      r && (n.valid = !0, n.fixContext = r);
      return Promise.resolve(n);
    } catch (e) {
      console.error("Design linting error getting padding variable fix: ", e);
      return Promise.resolve(n);
    }
  },
  fix: ea
};
async function eo({
  node: e,
  fixContext: t,
  fixMetadata: i,
  forFixPreview: n = !1,
  shouldLogFix: r
}) {
  try {
    return await nw(e, t, i, _$$C.REQUIRE_TOP_PADDING_VARIABLES, n, r);
  } catch (e) {
    console.error("Design linting error fixing padding variables: ", e);
    return e;
  }
}
let el = {
  id: _$$C.REQUIRE_TOP_PADDING_VARIABLES,
  description: "Detects missing number variables for top stack padding fields, and applies a fix to use the most appropriate variable.",
  enabled: () => !!getFeatureFlags().aip_flower_garden_padding,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {}
    };
    if (e.isInstanceSublayer || e.isInstance) {
      t.didSkipNode = !0;
      return Promise.resolve(t);
    }
    let i = e.getVariableConsumptionMap().STACK_PADDING_TOP;
    let n = e.childrenNodes.some(e => !!e.visible);
    let r = e.stackTopPadding;
    r > 0 && !i && n && (t.failedGuidToContext[e.guid] = [{
      numericValue: r
    }]);
    return Promise.resolve(t);
  },
  getFix: function (e, t, i) {
    let n = {
      ruleId: _$$C.REQUIRE_TOP_PADDING_VARIABLES,
      guid: e.guid,
      valid: !1
    };
    try {
      let r = v(e, t, i, _$$C.REQUIRE_TOP_PADDING_VARIABLES);
      r && (n.valid = !0, n.fixContext = r);
      return Promise.resolve(n);
    } catch (e) {
      console.error("Design linting error getting padding variable fix: ", e);
      return Promise.resolve(n);
    }
  },
  fix: eo
};
async function ed({
  node: e,
  fixContext: t,
  fixMetadata: i,
  forFixPreview: n = !1,
  shouldLogFix: r
}) {
  try {
    return await T(e, t, i, _$$C.REQUIRE_HORIZONTAL_SPACING_VARIABLES, n, r);
  } catch (e) {
    console.error("Design linting error fixing spacing variables: ", e);
    return e;
  }
}
let ec = {
  id: _$$C.REQUIRE_HORIZONTAL_SPACING_VARIABLES,
  description: "Detects missing number variables for horizontal stack spacing fields, and applies a fix to use the most appropriate variable.",
  enabled: () => !!getFeatureFlags().aip_flower_garden_spacing,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {}
    };
    if (e.isInstanceSublayer || e.isInstance) {
      t.didSkipNode = !0;
      return Promise.resolve(t);
    }
    let i = w(e, "HORIZONTAL");
    i && (t.failedGuidToContext[e.guid] = [{
      numericValue: i
    }]);
    return Promise.resolve(t);
  },
  getFix: function (e, t, i) {
    let n = {
      ruleId: _$$C.REQUIRE_HORIZONTAL_SPACING_VARIABLES,
      guid: e.guid,
      valid: !1
    };
    try {
      let r = v(e, t, i, _$$C.REQUIRE_HORIZONTAL_SPACING_VARIABLES);
      r && (n.valid = !0, n.fixContext = r);
      return Promise.resolve(n);
    } catch (e) {
      console.error("Design linting error getting spacing variable fix: ", e);
      return Promise.resolve(n);
    }
  },
  fix: ed
};
async function eu({
  node: e,
  fixContext: t,
  fixMetadata: i,
  forFixPreview: n = !1,
  shouldLogFix: r
}) {
  try {
    return await T(e, t, i, _$$C.REQUIRE_VERTICAL_SPACING_VARIABLES, n, r);
  } catch (e) {
    console.error("Design linting error fixing spacing variables: ", e);
    return e;
  }
}
let ep = {
  id: _$$C.REQUIRE_VERTICAL_SPACING_VARIABLES,
  description: "Detects missing number variables for vertical stack spacing fields, and applies a fix to use the most appropriate variable.",
  enabled: () => !!getFeatureFlags().aip_flower_garden_spacing,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {}
    };
    if (e.isInstanceSublayer || e.isInstance) {
      t.didSkipNode = !0;
      return Promise.resolve(t);
    }
    let i = w(e, "VERTICAL");
    i && (t.failedGuidToContext[e.guid] = [{
      numericValue: i
    }]);
    return Promise.resolve(t);
  },
  getFix: function (e, t, i) {
    let n = {
      ruleId: _$$C.REQUIRE_VERTICAL_SPACING_VARIABLES,
      guid: e.guid,
      valid: !1
    };
    try {
      let r = v(e, t, i, _$$C.REQUIRE_VERTICAL_SPACING_VARIABLES);
      r && (n.valid = !0, n.fixContext = r);
      return Promise.resolve(n);
    } catch (e) {
      console.error("Design linting error getting spacing variable fix: ", e);
      return Promise.resolve(n);
    }
  },
  fix: eu
};
async function e_(e, t, i) {
  let n = {
    ruleId: _$$C.TEXT_BACKGROUND_CONTRAST_AA,
    guid: e.guid,
    valid: !1
  };
  try {
    if (!t.contrastRatios?.AA || void 0 === t.fillOpacity) return Promise.resolve(n);
    let r = qN(t.fillColor);
    let a = L$({
      fgColor: t.fillColor,
      bgColor: t.backgroundColor,
      contrastRatio: t.contrastRatios.AA,
      fgAlpha: t.fillOpacity,
      fgHue: r.h
    });
    if (!a) return Promise.resolve(n);
    let s = await Bw({
      sourceNode: e,
      color: a,
      opacity: a.a,
      fixMetadata: i,
      ruleId: _$$C.TEXT_BACKGROUND_CONTRAST_AA,
      contrastData: {
        backgroundColor: t.backgroundColor,
        contrastRatios: t.contrastRatios
      }
    });
    s && (n.valid = !0, n.fixContext = s);
    return Promise.resolve(n);
  } catch (e) {
    console.error("Design linting error getting text contrast fix: ", e);
    return Promise.resolve(n);
  }
}
async function eA({
  node: e,
  fixContext: t,
  fixMetadata: i,
  forFixPreview: n,
  shouldLogFix: r
}) {
  try {
    return await pg(e, t, i, _$$C.TEXT_BACKGROUND_CONTRAST_AA, n, r);
  } catch (e) {
    console.error("Design linting error fixing fills variables: ", e);
    return e;
  }
}
let ey = {
  id: _$$C.TEXT_BACKGROUND_CONTRAST_AA,
  description: "Text background contrast AA",
  enabled: () => !!getFeatureFlags().aip_flower_garden_text_bg_aa,
  detect: function ({
    node: e
  }) {
    let t = {
      failedGuidToContext: {},
      didSkipNode: !1
    };
    if (e.isInstanceSublayer || e.isInstance) {
      t.didSkipNode = !0;
      return Promise.resolve(t);
    }
    if ("TEXT" !== e.type) return Promise.resolve(t);
    let {
      paint
    } = kl(e.fills);
    if (!paint || !paint.colorVar?.value || paint.colorVar?.dataType !== "ALIAS") return Promise.resolve(t);
    let n = function (e) {
      let t = e.sceneGraph.getCurrentPage();
      let i = t?.guid;
      if (!i) return;
      let n = xv(i, e.absoluteBoundingBox, e.guid).filter(e => !["SECTION", "CANVAS"].includes(e.type));
      let {
        blendedBackground
      } = f3(n);
      return Hu(blendedBackground);
    }(e);
    let r = Hu(paint.color);
    if (!n || !r) return Promise.resolve(t);
    let a = e.getStyledTextSegments(["fontSize", "fontWeight"]);
    let s = J3("TEXT", a);
    let o = JJ(Zf.auto, new Set([s]));
    let {
      contrast,
      aaPass
    } = Ef(r, n, o?.AA, o?.AAA);
    aaPass || !contrast || contrast < 0 || (t.failedGuidToContext[e.guid] = [{
      contrast,
      fillColor: r,
      fillOpacity: paint.opacity,
      backgroundColor: n,
      contrastRatios: o
    }], t.didSkipNode = !1);
    return Promise.resolve(t);
  },
  getFix: e_,
  fix: eA
};
let eb = Object.values({
  [_$$C.REQUIRE_FILL_COLOR_VARIABLES]: U,
  [_$$C.REQUIRE_STROKE_COLOR_VARIABLES]: G,
  [_$$C.REQUIRE_ASSETS_FROM_SELECTED_LIBRARIES]: O,
  [_$$C.REQUIRE_TEXT_STYLES]: F,
  [_$$C.REQUIRE_BOTTOM_LEFT_CORNER_RADIUS_VARIABLES]: H,
  [_$$C.REQUIRE_BOTTOM_RIGHT_CORNER_RADIUS_VARIABLES]: K,
  [_$$C.REQUIRE_TOP_LEFT_CORNER_RADIUS_VARIABLES]: q,
  [_$$C.REQUIRE_TOP_RIGHT_CORNER_RADIUS_VARIABLES]: Z,
  [_$$C.REQUIRE_HORIZONTAL_SPACING_VARIABLES]: ec,
  [_$$C.REQUIRE_VERTICAL_SPACING_VARIABLES]: ep,
  [_$$C.REQUIRE_TOP_PADDING_VARIABLES]: el,
  [_$$C.REQUIRE_BOTTOM_PADDING_VARIABLES]: ei,
  [_$$C.REQUIRE_LEFT_PADDING_VARIABLES]: er,
  [_$$C.REQUIRE_RIGHT_PADDING_VARIABLES]: es,
  [_$$C.REQUIRE_GRID_COLUMN_GAP_VARIABLES]: Q,
  [_$$C.REQUIRE_GRID_ROW_GAP_VARIABLES]: ee,
  [_$$C.TEXT_BACKGROUND_CONTRAST_AA]: ey,
  [_$$C.EXTENSIBILITY_RULE]: D
});
export class $$ev0 {
  constructor() {
    this.ruleIdToEnabledRule = {};
    this.refreshEnabledRules();
  }
  refreshEnabledRules() {
    this.ruleIdToEnabledRule = Object.fromEntries(eb.filter(e => e.enabled()).map(e => [e.id, e]));
  }
  getRuleIdToEnabledRule() {
    return this.ruleIdToEnabledRule;
  }
  getEnabledRules() {
    return Object.values(this.getRuleIdToEnabledRule());
  }
  getRuleById(e) {
    return this.getRuleIdToEnabledRule()[e] || null;
  }
}
export const g = $$ev0;
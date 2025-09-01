import { rXF, j0r } from "../figma_app/763686";
import { sD } from "../figma_app/243058";
import { l7 } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { colorToHex } from "../905/436288";
import { _W } from "../figma_app/191804";
import { l as _$$l, i as _$$i } from "../905/283360";
import { C } from "../905/887158";
import { TW, sB, d$ } from "../905/958097";
import { debugState } from "../905/407919";
import { w0 } from "../figma_app/594947";
import { g as _$$g } from "../905/880308";
import { Oe } from "../figma_app/933328";
import { Vg, gU, Hf } from "../figma_app/407414";
import { Ef } from "../905/107436";
import { kA } from "../figma_app/726579";
import { MH } from "../figma_app/394327";
let $$T8 = "aip_flower_garden_color_variable_config";
let $$I6 = "rerankerMaxPopularCandidates";
let $$S2 = 50;
function v(e, t) {
  let r = 0;
  let n = e.length;
  for (; r < n;) {
    let i = Math.floor((r + n) / 2);
    t.distance < e[i].distance ? n = i : r = i + 1;
  }
  e.splice(r, 0, t);
}
function A({
  localVariables: e,
  libraryVariableSetIdToSet: t,
  libraryVariables: r,
  node: i,
  opacity: a,
  paintColor: s,
  maxColorDistance: o,
  allowedScopes: c,
  contrastData: u
}) {
  let _ = TW({
    node: i,
    resolvedType: rXF.COLOR,
    localVariables: e,
    libraryVariableSetIdToSet: t,
    libraryVariables: r
  });
  let h = function ({
    localVariables: e,
    libraryVariables: t
  }) {
    return [...Object.values(e), ...Object.values(t)].reduce((e, {
      variable: t,
      resolvedValue: r
    }) => {
      if (r) {
        if (!r) return e;
        let n = colorToHex(r.value, r.value.a);
        e[n] || (e[n] = []);
        e[n].push({
          variable: t,
          resolvedValue: r,
          variableId: t.node_id,
          variableSetId: t.variableSetId
        });
      }
      return e;
    }, {});
  }(sB({
    variablesMap: _,
    allowedScopes: c
  }));
  let m = {
    ...s,
    a: a ?? 1
  };
  let g = h[colorToHex(m, a)] ?? [];
  g.length > 0 || Object.keys(h).forEach(e => {
    let t = h[e] ?? [];
    let r = t?.[0];
    if (!r) return;
    let n = r.resolvedValue.value;
    let i = _W(n, m);
    if (!(i > o)) {
      if (u) {
        let {
          aaPass
        } = Ef(n, u.backgroundColor, u.contrastRatios.AA, u.contrastRatios.AAA);
        if (!aaPass) return;
      }
      for (let e of t) v(g, {
        variable: e.variable,
        resolvedValue: e.resolvedValue,
        variableId: e.variableId,
        variableSetId: e.variableSetId,
        distance: i
      });
    }
  });
  return g;
}
function x(e) {
  if (e === C.REQUIRE_FILL_COLOR_VARIABLES || e === C.TEXT_BACKGROUND_CONTRAST_AA) return "FILL";
  if (e === C.REQUIRE_STROKE_COLOR_VARIABLES) return "STROKE";
  throw Error(`Unknown ruleId: ${e}`);
}
export function $$N4(e) {
  let t = e.filter(e => !!e.visible && !!e.opacity && e.opacity > 0);
  let r = t[t.length - 1];
  return {
    index: e.findIndex(e => r === e),
    paint: r
  };
}
export function $$C3(e) {
  return "SOLID" === e.type && e.color && (!e.colorVar || "ALIAS" !== e.colorVar.dataType) ? {
    opacity: e.opacity,
    color: e.color
  } : null;
}
async function w({
  sourceNode: e,
  color: t,
  opacity: r,
  fixMetadata: n,
  prop: i,
  allowedScopes: a,
  contrastData: s
}) {
  let o = await w0($$T8);
  let l = o.get("llmMaxCandidates", 20);
  let d = o.get("llmMaxColorDistance", 40);
  let u = {
    node: e,
    paintColor: t,
    opacity: r,
    localVariables: n.localVariables,
    libraryVariables: n.libraryVariables,
    libraryVariableSetIdToSet: n.libraryVariableSetIdToSet,
    maxColorDistance: d,
    allowedScopes: a,
    contrastData: s
  };
  let p = A(u).slice(0, l);
  if (0 === p.length && (u.maxColorDistance = 2 * d, 0 === (p = A(u)).length)) return null;
  let _ = _$$g();
  if (1 === p.length) return {
    fixes: p.map(e => ({
      variableId: e.variable.node_id,
      resolvedValue: e.resolvedValue
    })),
    suggestionId: _
  };
  let g = await _$$l(e, p, i);
  let f = p.find(({
    variable: e
  }) => e.name === g);
  if (!f) {
    let t = p.slice(0, p.length / 2);
    if (t.length > 1 && (g = await _$$l(e, t, i), f = p.find(({
      variable: e
    }) => e.name === g)), !f && !(f = p[0])) return null;
  }
  return {
    fixes: [{
      variableId: f.variable.node_id,
      resolvedValue: f.resolvedValue
    }],
    suggestionId: _
  };
}
async function O({
  sourceNode: e,
  color: t,
  opacity: r,
  fixMetadata: i,
  prop: a,
  allowedScopes: s,
  contrastData: l
}) {
  let u = await w0($$T8);
  let _ = u.get("rerankerMaxSimilarCandidates", 50);
  let g = u.get("rerankerMaxColorDistance", 40);
  let b = u.get($$I6, $$S2);
  let A = [...i.libraryKeys].map(e => e.toString());
  let x = await kA({
    library_keys: A,
    entity_type: "VARIABLE",
    entity_value_type: "COLOR",
    max_results_per_library: b
  });
  let {
    popularVariables,
    similarVariables
  } = function ({
    localVariables: e,
    libraryVariableSetIdToSet: t,
    libraryVariables: r,
    node: i,
    opacity: a,
    paintColor: s,
    maxColorDistance: o,
    topKVariables: l,
    allowedScopes: c,
    contrastData: u
  }) {
    let _ = TW({
      node: i,
      resolvedType: rXF.COLOR,
      localVariables: e,
      libraryVariableSetIdToSet: t,
      libraryVariables: r
    });
    let h = sB({
      variablesMap: _,
      allowedScopes: c
    });
    let m = new Map();
    for (let [e, t] of l) m.set(e, new Set(t));
    let g = {
      ...s,
      a: a ?? 1
    };
    let f = [];
    let y = [];
    let b = h.localVariables;
    [...Object.values(h.libraryVariables), ...Object.values(b)].forEach(e => {
      let t = e.variable;
      let r = e.resolvedValue;
      if (t.resolvedType !== rXF.COLOR || !r || "MIXED" === r || r.resolvedType !== rXF.COLOR) return;
      if (u) {
        let {
          aaPass
        } = Ef($$P1(r.value), u.backgroundColor, u.contrastRatios.AA, u.contrastRatios.AAA);
        if (!aaPass) return;
      }
      let i = {
        variable: t,
        resolvedValue: r,
        variableId: t.node_id,
        variableSetId: t.variableSetId,
        distance: void 0
      };
      let a = "LIBRARY" === t.subscriptionStatus ? t.library_key.toString() : "";
      let s = m.get(a);
      s && s.has(a) && f.push(i);
      i.distance = _W(r.value, g);
      i.distance > o || v(y, i);
    });
    return {
      popularVariables: f,
      similarVariables: y
    };
  }({
    node: e,
    paintColor: t,
    opacity: r,
    localVariables: i.localVariables,
    libraryVariables: i.libraryVariables,
    libraryVariableSetIdToSet: i.libraryVariableSetIdToSet,
    maxColorDistance: g,
    topKVariables: x,
    allowedScopes: s,
    contrastData: l
  });
  let w = [...popularVariables, ...similarVariables.slice(0, _)];
  let O = _$$g();
  let R = zl.get(Vg) ?? "";
  let L = await _$$i(e, w, t, O, R, Array.from(i.libraryKeys), a);
  return L && 0 !== L.length ? {
    fixContext: {
      fixes: L.map(e => {
        let t = w.find(({
          variable: t
        }) => t.node_id === e);
        return t ? {
          variableId: e,
          resolvedValue: t.resolvedValue
        } : null;
      }).filter(e => null !== e),
      suggestionId: _$$g()
    },
    queryId: O
  } : null;
}
export async function $$R0({
  sourceNode: e,
  color: t,
  opacity: r,
  fixMetadata: i,
  ruleId: a,
  contrastData: o,
  propToApply: l
}) {
  let d;
  let c = null;
  let u = "LLM";
  let _ = l ?? x(a);
  if (!_) return null;
  let h = [...d$({
    ruleId: a,
    nodeType: e.type
  }), j0r.ALL_SCOPES];
  if (getFeatureFlags().aip_flower_garden_rerank) {
    u = "RERANKER";
    let n = await O({
      sourceNode: e,
      color: t,
      opacity: r,
      fixMetadata: i,
      prop: _,
      allowedScopes: h,
      contrastData: o
    });
    n && (c = n.fixContext, d = n.queryId);
  } else c = await w({
    sourceNode: e,
    opacity: r,
    color: t,
    fixMetadata: i,
    prop: _,
    allowedScopes: h,
    contrastData: o
  });
  if (!c) return null;
  let m = c.fixes.map(e => {
    let t = i.availableVariables[e.variableId];
    return t ? "LIBRARY" === t.subscriptionStatus ? t.key.toString() : t.keyForPublish.toString() : null;
  }).filter(e => null !== e);
  gU(c.suggestionId, d, m, u, a);
  return c;
}
export async function $$L5(e, t, r, n, s, o, l) {
  let d;
  let c = l ?? x(n);
  if (!c) return !1;
  let {
    fixes,
    suggestionId
  } = t;
  if (!fixes || 0 === fixes.length) return !1;
  let h = fixes[0];
  if (!h) return !1;
  let {
    variableId,
    resolvedValue
  } = h;
  if (!variableId) return !1;
  let y = r.availableVariables[variableId];
  if (!y?.node_id) return !1;
  let b = sD.fromString(y.node_id);
  if (!b) return !1;
  let T = debugState.dispatch;
  if (!(await T(Oe(y)))) return Promise.resolve(!1);
  let I = sD.toKiwi(b);
  let {
    index,
    paint
  } = $$N4("FILL" === c ? e.fills : "STROKE" === c ? e.strokePaints.data : []);
  if (!paint || -1 === index) return Promise.resolve(!1);
  if (s) {
    let e = resolvedValue.value;
    d = {
      type: "SOLID",
      color: e,
      opacity: e.a
    };
  } else d = {
    ...paint,
    colorVar: {
      resolvedDataType: "COLOR",
      dataType: "ALIAS",
      value: {
        alias: I
      }
    }
  };
  l7.user("design-linter-fix-color-tokens", () => {
    if ("FILL" === c ? e.fills = [...e.fills.slice(0, index), d, ...e.fills.slice(index + 1)] : "STROKE" === c && (e.strokePaints = {
      data: [...e.strokePaints.data.slice(0, index), d, ...e.strokePaints.data.slice(index + 1)],
      blobs: e.strokePaints.blobs
    }), !s && o) {
      let e = y.variableSetId;
      let t = "LIBRARY" === y.subscriptionStatus ? y.key.toString() : y.keyForPublish.toString();
      Hf({
        suggestionId,
        variableKey: t,
        subscriptionStatus: y.subscriptionStatus,
        variableSetId: e,
        ruleId: n
      });
    }
  });
  return !0;
}
export function $$P1(e) {
  let {
    r: _r,
    g,
    b,
    a
  } = e ?? {};
  if (void 0 !== _r && void 0 !== g && void 0 !== b && void 0 !== a) return {
    r: Math.round(255 * _r) / 255,
    g: Math.round(255 * g) / 255,
    b: Math.round(255 * b) / 255,
    a: Math.round(255 * a) / 255
  };
}
export function $$D7(e, t, r) {
  if (!e || !e.colorVar || "ALIAS" !== e.colorVar.dataType) return null;
  let n = sD.fromString(MH(e.colorVar) ?? "") ?? "";
  let a = t[n];
  return !a || !("library_key" in a) || r.has(a.library_key) ? null : {
    variableId: n.toString(),
    libraryKey: a.library_key
  };
}
export const Bw = $$R0;
export const Hu = $$P1;
export const Iv = $$S2;
export const jd = $$C3;
export const kl = $$N4;
export const pg = $$L5;
export const tS = $$I6;
export const xR = $$D7;
export const yA = $$T8;
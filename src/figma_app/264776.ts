import { createContext } from "react";
import { StateGroupErrorType, Fullscreen, StateHierarchy } from "../figma_app/763686";
import { l as _$$l } from "../905/716947";
import { Mz } from "../vendor/925040";
import { trackEventAnalytics } from "../905/449184";
import { im } from "../figma_app/828186";
import { fullscreenValue } from "../figma_app/455680";
import { renameNode } from "../figma_app/741237";
import { MIXED_MARKER } from "../905/216495";
import { sS, XJ } from "../figma_app/516028";
import { i_ } from "../figma_app/646357";
export let $$h14 = "\u2014";
export function $$m16(e, t) {
  return Object.keys(e).sort((e, r) => t.indexOf(e) - t.indexOf(r)).map(t => `${t}=${e[t]}`).join(", ");
}
export function $$g10(e, t, r) {
  let n = {};
  for (let i of e) {
    if (void 0 !== i.actionIndexPath && void 0 !== r && i.actionIndexPath.some((e, t) => e !== r[t])) continue;
    let {
      propertyValues
    } = i.stateInfo;
    if (propertyValues) for (let r of t) r in n && n[r] !== propertyValues[r] ? n[r] = n[r] && propertyValues[r] ? MIXED_MARKER : "" : n[r] = propertyValues[r] || "";
  }
  return n;
}
export function $$f0(e) {
  let t = StateGroupErrorType.NONE;
  for (let r of e) r.stateInfo.stateError && r.stateInfo.stateError > t && (t = r.stateInfo.stateError);
  return t;
}
export function $$E11(e, t) {
  return e.filter(e => e.stateInfo.stateError === t);
}
export function $$y1(e, t, r) {
  let n = [];
  let i = 0;
  for (let e of r) {
    let r = e.propertyValues;
    if (!r) continue;
    let a = 0;
    for (let e of t) {
      if (e.value !== r[e.property]) break;
      a++;
    }
    a > i ? (i = a, n = [e]) : a === i && n.push(e);
  }
  if (0 === i) return null;
  let a = null;
  let s = 1 / 0;
  for (let t of n) {
    let r = function (e, t) {
      let r = 0;
      for (let n in e) e[n] !== MIXED_MARKER && e[n] !== t[n] && r++;
      return r;
    }(e, t.propertyValues);
    r < s && (s = r, a = t);
  }
  return a;
}
export function $$b9(e, t, r) {
  let n = [];
  let i = 0;
  for (let e of r) {
    let r = e.stateInfo.propertyValues;
    if (!r) continue;
    let a = 0;
    for (let e of t) {
      if (e.value !== r[e.property]) break;
      a++;
    }
    a > i ? (i = a, n = [e]) : a === i && n.push(e);
  }
  if (0 === i) return null;
  let a = null;
  let s = 1 / 0;
  for (let t of n) {
    let r = function (e, t) {
      let r = 0;
      for (let n in e) e[n] !== MIXED_MARKER && e[n] !== t[n] && r++;
      return r;
    }(e, t.stateInfo.propertyValues);
    r < s && (s = r, a = t);
  }
  return a;
}
export function $$T5(e) {
  return e.replace(/[,=]/g, "").trim();
}
export function $$I15(e, t, r) {
  let n = Fullscreen.getStateGroupAnalyticsInfo(t);
  trackEventAnalytics(e, {
    ...n,
    ...(r || {})
  });
}
export function $$S4(e, t) {
  t.setDeferVariantPropDefBackfill(!0);
  try {
    e();
  } finally {
    t.setDeferVariantPropDefBackfill(!1);
  }
}
export function $$v12(e, t, r, n) {
  if ("" === (t = $$T5(t)) || e === t || -1 === n.indexOf(e) || !Fullscreen) return;
  let a = [...n];
  a[a.indexOf(e)] = t;
  $$S4(() => r.forEach(r => {
    let n = r.stateInfo.propertyValues;
    n && (n = {
      ...n
    })[e] && (n[t] = n[e], delete n[e], renameNode(r.symbol.node_id, $$m16(n, a)));
  }), Fullscreen);
  fullscreenValue.commit();
}
export function $$$$A6(e, t, r, n) {
  Fullscreen && ($$I15("Deleting Property from Variant Component", n), $$S4(() => t.forEach(t => {
    let n = t.stateInfo.propertyValues;
    if (!n) return;
    for (let t of (n = {
      ...n
    }, e)) n[t] && delete n[t];
    let i = $$m16(n, r);
    "" === i && (i = "Property 1=Default");
    renameNode(t.symbol.node_id, i);
  }), Fullscreen), fullscreenValue.commit());
}
export function $$x8(e, t, r, n) {
  return {
    stateInfo: e.stateInfo,
    symbol: i_(null, null, e.symbol, t || "", r || _$$l(""), n),
    actionIndexPath: function (e) {
      if (!e) return [];
      let t = e.match(/\{(.*?)\}/);
      return !t || t.length < 2 ? [] : t[1].trim().split(",").map(e => parseFloat(e.trim()));
    }(e.actionIndexPath)
  };
}
export function $$N7(e, t, r, n, a) {
  if (!e) return null;
  let s = e.mode;
  if (s === StateHierarchy.NONE) return null;
  if (s === StateHierarchy.NON_STATE_COMPONENTS) return {
    mode: s,
    numSelectedNonStateComponents: e.numSelectedNonStateComponents
  };
  let o = e.stateGroup;
  let l = e.stateGroupModel;
  let d = l?.propertySortOrder?.length === 1;
  let c = e.allStates.map(e => $$x8(e, t, r, n));
  if (s === StateHierarchy.STATE_GROUP) return {
    mode: s,
    stateGroup: o,
    stateGroupModel: l,
    allStates: c,
    modelIsOneDimensional: d
  };
  let u = e.selectedStates.map(e => $$x8(e, t, r, n));
  let p = $$g10(u, l.propertySortOrder || [], a);
  StateHierarchy.STATE;
  return {
    mode: s,
    stateGroup: o,
    stateGroupModel: l,
    allStates: c,
    modelIsOneDimensional: d,
    selectedStates: u,
    selectedStatesPropertyValues: p
  };
}
createContext(null);
let $$C13 = Mz([e => e.mirror.selectionProperties.stateGroupSelectionInfo, sS, XJ, im], $$N7);
let $$w2 = [["yes", "no"], ["true", "false"], ["on", "off"]];
let $$O3 = $$w2.reduce((e, t) => e.concat(t), []);
export const A = $$f0;
export const Jj = $$y1;
export const NE = $$w2;
export const O4 = $$O3;
export const Po = $$S4;
export const QV = $$T5;
export const bk = $$$$A6;
export const cP = $$N7;
export const dq = $$x8;
export const kz = $$b9;
export const m4 = $$g10;
export const pg = $$E11;
export const q1 = $$v12;
export const uL = $$C13;
export const xJ = $$h14;
export const zb = $$I15;
export const zh = $$m16;
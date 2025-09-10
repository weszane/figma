import { atom } from "../figma_app/27355";
import { Iy, m7, VA, Og, VG } from "../figma_app/761118";
import { C } from "../905/887158";
import { FR } from "../figma_app/827216";
import { setupRemovableAtomFamily } from "../figma_app/615482";
import { ac, rO } from "../figma_app/210234";
let $$d12 = setupRemovableAtomFamily(() => atom(FR.LANDING_PAGE_WELCOME));
let $$c15 = setupRemovableAtomFamily(() => atom(null));
let $$u6 = setupRemovableAtomFamily(() => atom(!0));
let $$p5 = setupRemovableAtomFamily(() => atom(!1));
let $$_1 = atom(null);
let $$h16 = atom(null);
let $$m10 = atom(null);
let $$g7 = setupRemovableAtomFamily(() => atom(e => {
  let t = e($$m10);
  let r = e(Iy);
  return t ? r.get(t) : null;
}));
let $$f17 = setupRemovableAtomFamily(() => atom(e => {
  let t = e($$g7);
  return Array.from(t?.rootNodeIdToViolatingNodeIdSet.keys() ?? []);
}));
let $$$$E9 = setupRemovableAtomFamily(() => atom(e => {
  let t = e($$g7);
  let r = e(m7);
  let n = Array.from(t?.violatingNodeIdToRootNodeId.keys() ?? []);
  let a = e(VA);
  let s = e(Og);
  return n.reduce((e, t) => {
    for (let n of Array.from(r.get(t)?.values() ?? [])) for (let t of n) a.has(t.violationId) && !s.includes(t.violationId) && e.push(t);
    return e;
  }, []);
}));
let $$y4 = setupRemovableAtomFamily(() => atom(e => {
  let t = e($$$$E9);
  let r = {};
  for (let e of t) {
    let t = e.groupKey;
    let n = e.ruleId;
    n === C.REQUIRE_STROKE_COLOR_VARIABLES && (n = C.REQUIRE_FILL_COLOR_VARIABLES);
    r[n] || (r[n] = {});
    r[n][t] || (r[n][t] = []);
    r[n][t].push(e);
  }
  return r;
}));
let $$b2 = setupRemovableAtomFamily(() => atom(e => Array.from(e(Iy).values()).sort((e, t) => {
  if (e.type !== t.type) return "SIMILARITY" === e.type ? -1 : 1;
  let r = e.violatingNodeIdToRootNodeId.size;
  let n = t.violatingNodeIdToRootNodeId.size;
  return "SIMILARITY" === e.type ? n - r : r - n;
})));
let $$T3 = setupRemovableAtomFamily(() => atom(e => {
  let t = e($$g7);
  if (t) return ac(t);
}));
let I = setupRemovableAtomFamily(() => atom(e => {
  let t = e($$T3);
  let r = e($$g7);
  let n = e(m7);
  if (!t || !r) return {};
  let a = r.rootNodeIdToViolatingNodeIdSet.get(t);
  let s = {};
  Array.from(a ?? []).forEach(e => {
    let t = n.get(e);
    let r = rO(Array.from(t?.values() ?? []).flat());
    r && (s[r.groupKey] = r);
  });
  return s;
}));
let $$S8 = setupRemovableAtomFamily(() => atom(e => {
  let t = e($$y4);
  let r = e(I);
  let n = Object.values(t).flatMap(e => Object.keys(e));
  let i = {};
  n.forEach(e => {
    let n = r[e];
    if (!n) {
      let r = Object.values(t).flatMap(t => t[e] ?? []);
      n = rO(r);
    }
    n && (i[e] = n);
  });
  return i;
}));
let v = setupRemovableAtomFamily(() => atom(null));
let $$A13 = atom(null, (e, t) => {
  t(v, null);
});
let $$x11 = atom(e => e(v), (e, t, r) => {
  let {
    groupKey,
    selectedFixItem
  } = r;
  let a = new Map(e(v) ?? new Map());
  a.set(groupKey, selectedFixItem);
  t(v, a);
});
let $$N0 = atom(e => {
  let t = e(v);
  let r = e($$S8);
  let n = e(VG);
  let a = t ?? new Map();
  let s = Object.keys(r);
  let o = new Map();
  for (let e of s) {
    let t = a.get(e);
    if (t) {
      o.set(e, t);
      continue;
    }
    let r = n.get(e);
    if (r) {
      o.set(e, r);
      continue;
    }
    o.set(e, {
      fix: null,
      status: "loading"
    });
  }
  return o;
});
let $$C14 = atom(e => {
  let t = e($$N0);
  let r = !1;
  for (let e of t.values()) {
    if ("loading" === e.status) return !1;
    null !== e.fix && (r = !0);
  }
  return r;
});
export const $C = $$N0;
export const $H = $$_1;
export const Bd = $$b2;
export const Bp = $$T3;
export const DJ = $$y4;
export const Dg = $$p5;
export const E = $$u6;
export const E$ = $$g7;
export const E7 = $$S8;
export const IZ = $$$$E9;
export const NM = $$m10;
export const Sg = $$x11;
export const _M = $$d12;
export const d7 = $$A13;
export const mE = $$C14;
export const pR = $$c15;
export const r4 = $$h16;
export const vu = $$f17;
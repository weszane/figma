import { getFeatureFlags } from "../905/601108";
import { eU } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { XE } from "../figma_app/976749";
import { ze } from "../figma_app/516028";
import { Wh } from "../figma_app/615482";
import { nT } from "../figma_app/53721";
import { uk, qy } from "../figma_app/216057";
import { td } from "../figma_app/827216";
export function $$p17() {
  if (!getFeatureFlags().aip_flower_garden) return !1;
  let e = debugState?.getState()?.selectedView;
  return "fullscreen" === e.view && XE(e) === nT.Design;
}
let $$_6 = Wh(() => eU(new Map()));
let $$h13 = Wh(() => eU(new Map(new Map())));
let $$m2 = Wh(() => eU(e => e($$g5).size));
let $$g5 = Wh(() => eU(new Set()));
let $$f0 = Wh(() => eU(new Set()));
let $$E8 = Wh(() => eU(new Set()));
let $$y9 = Wh(() => eU(null));
let $$b1 = Wh(() => eU(new Map()));
let $$T21 = Wh(() => eU({
  libraryVariables: [],
  libraryVariableSetIdToSet: {},
  status: "uninitialized",
  libraryKeys: new Set()
}));
let $$I15 = Wh(() => eU(e => {
  let t = e(uk);
  let r = e($$T21);
  let n = e($$O18);
  let i = {};
  n && t.forEach(e => {
    i[e.node_id] = e;
  });
  r.libraryVariables.forEach(e => {
    i[e.node_id] = e;
  });
  return i;
}));
let $$S14 = Wh(() => eU(e => {
  let t = e($$O18);
  let r = e(qy);
  return {
    localVariableSets: t ? r : {},
    libraryVariableSets: e($$T21).libraryVariableSetIdToSet
  };
}));
let $$v12 = Wh(() => eU({
  status: "loading",
  subscribedStylesByFileKey: {},
  allStyles: [],
  localStyles: null
}));
let $$A19 = eU(td.UNINITIALIZED);
let $$x11 = eU([]);
let $$N16 = Wh(() => eU(new Map()));
let $$C10 = Wh(() => eU(new Map()));
let $$w4 = Wh(() => eU(void 0));
let $$O18 = Wh(() => eU(e => {
  let t = e($$w4);
  let r = e(ze);
  return t?.has(r) ?? !1;
}));
let $$R7 = Wh(() => eU(new Set()));
let $$L20 = Wh(() => eU(null));
let $$P3 = Wh(() => eU([]));
export const F9 = $$f0;
export const Iy = $$b1;
export const Kk = $$m2;
export const Og = $$P3;
export const Ut = $$w4;
export const VA = $$g5;
export const VG = $$_6;
export const W0 = $$R7;
export const XC = $$E8;
export const fY = $$y9;
export const g7 = $$C10;
export const hx = $$x11;
export const jq = $$v12;
export const m7 = $$h13;
export const mn = $$S14;
export const nE = $$I15;
export const qL = $$N16;
export const qZ = $$p17;
export const qp = $$O18;
export const u2 = $$A19;
export const ui = $$L20;
export const v4 = $$T21;
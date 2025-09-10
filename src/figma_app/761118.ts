import { atom } from 'jotai';
import { debugState } from '../905/407919';
import { getFeatureFlags } from '../905/601108';
import { FEditorType } from '../figma_app/53721';
import { qy, uk } from '../figma_app/216057';
import { openFileKeyAtom } from '../figma_app/516028';
import { setupRemovableAtomFamily } from '../figma_app/615482';
import { td } from '../figma_app/827216';
import { XE } from '../figma_app/976749';
export function $$p17() {
  if (!getFeatureFlags().aip_flower_garden) return !1;
  let e = debugState?.getState()?.selectedView;
  return e.view === 'fullscreen' && XE(e) === FEditorType.Design;
}
let $$_6 = setupRemovableAtomFamily(() => atom(new Map()));
let $$h13 = setupRemovableAtomFamily(() => atom(new Map(new Map())));
let $$m2 = setupRemovableAtomFamily(() => atom(e => e($$g5).size));
let $$g5 = setupRemovableAtomFamily(() => atom(new Set()));
let $$f0 = setupRemovableAtomFamily(() => atom(new Set()));
let $$E8 = setupRemovableAtomFamily(() => atom(new Set()));
let $$y9 = setupRemovableAtomFamily(() => atom(null));
let $$b1 = setupRemovableAtomFamily(() => atom(new Map()));
let $$T21 = setupRemovableAtomFamily(() => atom({
  libraryVariables: [],
  libraryVariableSetIdToSet: {},
  status: 'uninitialized',
  libraryKeys: new Set()
}));
let $$I15 = setupRemovableAtomFamily(() => atom(e => {
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
let $$S14 = setupRemovableAtomFamily(() => atom(e => {
  let t = e($$O18);
  let r = e(qy);
  return {
    localVariableSets: t ? r : {},
    libraryVariableSets: e($$T21).libraryVariableSetIdToSet
  };
}));
let $$v12 = setupRemovableAtomFamily(() => atom({
  status: 'loading',
  subscribedStylesByFileKey: {},
  allStyles: [],
  localStyles: null
}));
let $$A19 = atom(td.UNINITIALIZED);
let $$x11 = atom([]);
let $$N16 = setupRemovableAtomFamily(() => atom(new Map()));
let $$C10 = setupRemovableAtomFamily(() => atom(new Map()));
let $$w4 = setupRemovableAtomFamily(() => atom(void 0));
let $$O18 = setupRemovableAtomFamily(() => atom(e => {
  let t = e($$w4);
  let r = e(openFileKeyAtom);
  return t?.has(r) ?? !1;
}));
let $$R7 = setupRemovableAtomFamily(() => atom(new Set()));
let $$L20 = setupRemovableAtomFamily(() => atom(null));
let $$P3 = setupRemovableAtomFamily(() => atom([]));
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
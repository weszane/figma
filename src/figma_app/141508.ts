import n from "../vendor/239910";
import a from "../vendor/626715";
import { Mz } from "../vendor/925040";
import { Vh, P8 } from "../905/270781";
import { bt } from "../905/270322";
var i = n;
var s = a;
function c(e) {
  return Vh(e => e.library, e);
}
let $$u15 = c(e => e.subscribedSymbolsFromLoadedPages);
let $$p11 = c(e => e.subscribedSymbolsOnCurrentPage);
let $$_19 = P8([e => e.library.subscribedVariablesByIdFromLoadedPages], e => Object.values(e));
let $$h2 = e => e.library.subscribedVariableSetsByIdFromLoadedPages;
let $$m12 = P8([$$h2], e => Object.values(e));
let $$g9 = Mz([$$u15], e => i()(e, e => e.key));
let $$f7 = c(e => e.subscribedStateGroupsFromLoadedPages);
let E = c(e => e.subscribedStateGroupsOnCurrentPage);
let $$y10 = c(e => e.directlySubscribedStylesFromLoadedPages);
let b = c(e => e.directlySubscribedStylesOnCurrentPage);
let T = c(e => e.indirectlySubscribedStylesFromLoadedPages);
let $$I1 = Mz([T], e => e.length > 0);
let S = Mz([$$y10, T], (e, t) => [...e, ...t]);
function v(e) {
  return e.map(e => e.nodeId);
}
function A(e) {
  return s()(e.map(e => e.key));
}
let $$x0 = Mz([$$u15], v);
let $$N4 = Mz([$$p11], v);
let $$C13 = Mz([$$f7], v);
let $$w3 = Mz([E], v);
let $$O14 = Mz([$$y10], v);
Mz([b], v);
let $$R6 = Mz([S], v);
let $$L8 = Mz([$$u15], A);
Mz([$$p11], e => new Set(e.map(e => e.key)));
let $$P5 = Mz([$$f7], A);
let D = Mz([$$y10], A);
let $$k18 = Mz([b], e => new Set(e.map(e => e.key)));
let $$M17 = bt(D);
let $$F16 = Mz([S], A);
export const C9 = $$x0;
export const Co = $$I1;
export const Du = $$h2;
export const EY = $$w3;
export const J5 = $$N4;
export const LL = $$P5;
export const MH = $$R6;
export const No = $$f7;
export const OQ = $$L8;
export const S_ = $$g9;
export const _Q = $$y10;
export const aD = $$p11;
export const jU = $$m12;
export const jf = $$C13;
export const kc = $$O14;
export const m0 = $$u15;
export const qC = $$F16;
export const sm = $$M17;
export const tY = $$k18;
export const v3 = $$_19;
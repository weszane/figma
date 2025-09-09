import { isNotNullish } from "../figma_app/95419";
import { getResourceDataOrFallback } from "../905/663269";
import a from "../vendor/149674";
import { Mz } from "../vendor/925040";
import { v2, ah, vu, ad } from "../figma_app/646357";
import { Zt, GA, cE } from "../figma_app/349248";
var s = a;
let c = e => e.library.publishedByLibraryKey.components;
let u = e => e.library.publishedByLibraryKey.stateGroups;
let $$p8 = Mz([c], v2);
let $$_3 = Mz([u], v2);
let $$h0 = Mz([c], ah);
let $$m7 = Mz([u], ah);
let $$g1 = Mz([c], vu);
let $$f2 = Mz([u], vu);
let E = Mz([$$h0], e => s()(e, e => !ad(e)));
let $$y5 = Mz([$$m7, E], (e, t) => ({
  ...e,
  ...t
}));
export function $$b4(e) {
  return Object.fromEntries(Object.entries(e.library.knownUsedLibraryVariablesByKey).filter(([e, t]) => "loaded" === t.status && (t.data?.variable?.file || t.data?.variable?.hubFile.status === "loaded" && t.data.variable.hubFile.data)).map(([e, t]) => {
    let r = t.data.variable;
    let n = r.file;
    let a = null != r.hubFile ? getResourceDataOrFallback(r.hubFile) : void 0;
    let s = Zt(n, a);
    if (s) return [e, GA(r, s, !1)];
  }).filter(isNotNullish));
}
export let $$T6 = Mz([e => e.library.knownUsedLibraryVariableSetsByKey], e => Object.fromEntries(Object.entries(e).filter(([e, t]) => "loaded" === t.status && (t.data?.variableCollection?.file || t.data?.variableCollection?.hubFile.status === "loaded" && t.data.variableCollection.hubFile.data)).map(([e, t]) => {
  let r = t.data.variableCollection;
  let n = r.file;
  let a = null != r.hubFile ? getResourceDataOrFallback(r.hubFile) : void 0;
  let s = Zt(n, a);
  if (s) return [e, cE(r, s, !1)];
}).filter(isNotNullish)));
export const Ls = $$h0;
export const Th = $$g1;
export const WH = $$f2;
export const ZA = $$_3;
export const a3 = $$b4;
export const c5 = $$y5;
export const gJ = $$T6;
export const m3 = $$m7;
export const qV = $$p8;
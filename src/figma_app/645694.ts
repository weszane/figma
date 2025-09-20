import { isNotNullish } from "../figma_app/95419";
import { getResourceDataOrFallback } from "../905/663269";
import a from "../vendor/149674";
import { createSelector } from "../vendor/925040";
import { flattenNestedAssets, getComponentAssetsMap, getAllAssets, hasContainingStateGroup } from "../figma_app/646357";
import { mapHubOrTeamFile, mapVariableProperties, mapVariableSetProperties } from "../figma_app/349248";
var s = a;
let c = e => e.library.publishedByLibraryKey.components;
let u = e => e.library.publishedByLibraryKey.stateGroups;
let $$p8 = createSelector([c], flattenNestedAssets);
let $$_3 = createSelector([u], flattenNestedAssets);
let $$h0 = createSelector([c], getComponentAssetsMap);
let $$m7 = createSelector([u], getComponentAssetsMap);
let $$g1 = createSelector([c], getAllAssets);
let $$f2 = createSelector([u], getAllAssets);
let E = createSelector([$$h0], e => s()(e, e => !hasContainingStateGroup(e)));
let $$y5 = createSelector([$$m7, E], (e, t) => ({
  ...e,
  ...t
}));
export function $$b4(e) {
  return Object.fromEntries(Object.entries(e.library.knownUsedLibraryVariablesByKey).filter(([e, t]) => "loaded" === t.status && (t.data?.variable?.file || t.data?.variable?.hubFile.status === "loaded" && t.data.variable.hubFile.data)).map(([e, t]) => {
    let r = t.data.variable;
    let n = r.file;
    let a = null != r.hubFile ? getResourceDataOrFallback(r.hubFile) : void 0;
    let s = mapHubOrTeamFile(n, a);
    if (s) return [e, mapVariableProperties(r, s, !1)];
  }).filter(isNotNullish));
}
export let $$T6 = createSelector([e => e.library.knownUsedLibraryVariableSetsByKey], e => Object.fromEntries(Object.entries(e).filter(([e, t]) => "loaded" === t.status && (t.data?.variableCollection?.file || t.data?.variableCollection?.hubFile.status === "loaded" && t.data.variableCollection.hubFile.data)).map(([e, t]) => {
  let r = t.data.variableCollection;
  let n = r.file;
  let a = null != r.hubFile ? getResourceDataOrFallback(r.hubFile) : void 0;
  let s = mapHubOrTeamFile(n, a);
  if (s) return [e, mapVariableSetProperties(r, s, !1)];
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
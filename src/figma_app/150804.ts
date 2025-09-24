import { StateHierarchy } from "../figma_app/763686";
import { memoizeWithDeepEquality, createDeepEqualSelector } from "../905/270781";
import { isSelectedViewFullscreenCooper } from "../figma_app/828186";
import { selectOpenFileKey, selectOpenFileLibraryKey } from "../figma_app/516028";
import { createStateVariant, aggregatePropertyValues } from "../figma_app/264776";
function l(e) {
  return e.mirror.selectionProperties.stateGroupSelectionInfo;
}
export function $$d4(e) {
  let t = l(e);
  return t?.mode === StateHierarchy.NON_STATE_COMPONENTS ? t?.numSelectedNonStateComponents : 0;
}
export function $$c6(e) {
  return l(e)?.mode;
}
function u(e) {
  let t = l(e);
  return t && t.mode !== StateHierarchy.NONE && t.mode !== StateHierarchy.NON_STATE_COMPONENTS ? t.stateGroupModel : null;
}
export let $$p1 = memoizeWithDeepEquality(function (e) {
  return u(e)?.stateGroupError;
});
export function $$_2(e) {
  let t = l(e);
  return t && t.mode !== StateHierarchy.NONE && t.mode !== StateHierarchy.NON_STATE_COMPONENTS ? t.stateGroup : null;
}
let $$h3 = memoizeWithDeepEquality(function (e) {
  return u(e)?.propertySortOrder;
});
let $$m7 = createDeepEqualSelector([l, selectOpenFileKey, selectOpenFileLibraryKey, isSelectedViewFullscreenCooper], (e, t, r, i) => e && e.mode !== StateHierarchy.NONE && e.mode !== StateHierarchy.NON_STATE_COMPONENTS ? e.allStates.map(e => createStateVariant(e, t, r, i)) : null);
let $$g5 = createDeepEqualSelector([l, selectOpenFileKey, selectOpenFileLibraryKey, isSelectedViewFullscreenCooper], (e, t, r, i) => e && (e.mode === StateHierarchy.STATE || e.mode === StateHierarchy.STATE_INSTANCE || e.mode === StateHierarchy.STATE_OR_STATE_INSTANCE_SUBLAYER) ? e.selectedStates.map(e => createStateVariant(e, t, r, i)) : null);
let $$f0 = createDeepEqualSelector([$$g5, $$c6, u], (e, t, r) => e && r && (t === StateHierarchy.STATE || t === StateHierarchy.STATE_INSTANCE || t === StateHierarchy.STATE_OR_STATE_INSTANCE_SUBLAYER) ? aggregatePropertyValues(e, r.propertySortOrder || []) : null);
export const D1 = $$f0;
export const Hf = $$p1;
export const NA = $$_2;
export const OC = $$h3;
export const _7 = $$d4;
export const _f = $$g5;
export const i$ = $$c6;
export const ow = $$m7;
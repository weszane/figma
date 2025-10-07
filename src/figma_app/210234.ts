import { atomStoreManager } from "../figma_app/27355";
import { nE, W0, Ut, v4, qp } from "../figma_app/761118";
import { FR } from "../figma_app/827216";
import { debugState } from "../905/407919";
import { VisualBellActions } from "../905/302958";
import { sortedLocalVariablesAtom } from "../figma_app/216057";
export function $$d2({
  button: e,
  message: t,
  icon: r,
  type: n,
  timeUntilDequeueMs: i = 3e3,
  onDequeue: a = () => {}
}) {
  debugState.dispatch(VisualBellActions.enqueue({
    button: e,
    message: t,
    type: n,
    icon: r,
    timeoutOverride: i,
    onDismiss: () => {},
    onDequeue: a
  }));
}
export function $$c3(e) {
  let t = Array.from(e.rootNodeIdToViolatingNodeIdSet.entries()).sort(([e, t], [r, n]) => n.size - t.size)[0];
  if (t?.length) return t[0];
}
export function $$u5(e) {
  return [...e].sort((e, t) => e.guid.localeCompare(t.guid))[0];
}
export function $$p1() {
  return {
    availableVariables: atomStoreManager.get(nE),
    availableLibraryKeys: atomStoreManager.get(W0),
    selectedLibraryKeys: atomStoreManager.get(Ut) ?? new Set()
  };
}
export function $$_4() {
  return function () {
    let e = atomStoreManager.get(v4);
    let t = atomStoreManager.get(qp);
    return {
      availableVariables: atomStoreManager.get(nE),
      localVariables: t ? atomStoreManager.get(sortedLocalVariablesAtom) : [],
      libraryVariables: e.libraryVariables,
      libraryVariableSetIdToSet: e.libraryVariableSetIdToSet,
      libraryKeys: e.libraryKeys
    };
  }();
}
export function $$h6(e) {
  return e?.lastEditedAt ?? -1;
}
export function $$m7(e) {
  return e === FR.LIBRARY_SELECTOR_INITIAL || e === FR.LIBRARY_SELECTOR_FROM_ALL_GROUPS_VIEW || e === FR.LIBRARY_SELECTOR_FROM_SELECTED_GROUP_VIEW;
}
export function $$g0() {
  let e = atomStoreManager.get(Ut);
  let t = {};
  e?.forEach(e => {
    t[e] = !0;
  });
  return t;
}
export const Bx = $$g0;
export const Fh = $$p1;
export const Lt = $$d2;
export const ac = $$c3;
export const hf = $$_4;
export const rO = $$u5;
export const wg = $$h6;
export const y4 = $$m7;
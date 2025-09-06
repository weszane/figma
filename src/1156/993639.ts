import { useState, useCallback, useMemo, useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { Xr, useAtomWithSubscription, atomStoreManager, atom, useAtomValueAndSetter } from "../figma_app/27355";
import { f3, JL } from "../figma_app/690664";
import { $5, Rg } from "../figma_app/504321";
export function $$o0(e) {
  let [t, n] = useState(!1);
  let i = Xr(e.hasPopoverOpenAtom);
  let a = useCallback(e => n(() => (i(e), e)), [i]);
  return useMemo(() => [t, a], [t, a]);
}
export function $$c4(e, t) {
  let n = useAtomWithSubscription(e.editingSnippetAtom);
  if (!n || !n.snippet || !$5(n.snippet) || !getFeatureFlags().click_to_inspect_reset_styles) return !1;
  let r = n.snippet;
  if ("static" !== r.editingInfo.classNameAttribute.type) return !1;
  let a = r.editingInfo.classNameAttribute.value;
  return Rg({
    classNames: a,
    classToStyles: e.selectedElementsClassToStyles,
    propertiesToReset: t
  });
}
export function $$d2(e) {
  return atomStoreManager.get(e.hasPopoverOpenAtom);
}
let u = atom(() => null);
let x = atom(() => ({
  snippet: null,
  isLoading: !1
}));
export function $$m1() {
  let e = useAtomWithSubscription(f3);
  return {
    selectedElement: useAtomWithSubscription(e?.directManipulationEditor.selectedElementInfoAtom ?? u),
    selectedElementCodeSnippet: useAtomWithSubscription(e?.directManipulationEditor.editingSnippetAtom ?? x).snippet
  };
}
export function $$h3(e) {
  let [t, n] = useAtomValueAndSetter(JL);
  useEffect(() => {
    t && !t.switchedToCodeTab && (n({
      ...t,
      switchedToCodeTab: !0
    }), e());
  }, [t, n, e]);
}
export const XH = $$o0;
export const fl = $$m1;
export const pn = $$d2;
export const sl = $$h3;
export const zV = $$c4;
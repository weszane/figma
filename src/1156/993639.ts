import { useState, useCallback, useMemo, useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { Xr, md, zl, eU, fp } from "../figma_app/27355";
import { f3, JL } from "../figma_app/690664";
import { $5, Rg } from "../figma_app/504321";
export function $$o0(e) {
  let [t, n] = useState(!1);
  let i = Xr(e.hasPopoverOpenAtom);
  let a = useCallback(e => n(() => (i(e), e)), [i]);
  return useMemo(() => [t, a], [t, a]);
}
export function $$c4(e, t) {
  let n = md(e.editingSnippetAtom);
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
  return zl.get(e.hasPopoverOpenAtom);
}
let u = eU(() => null);
let x = eU(() => ({
  snippet: null,
  isLoading: !1
}));
export function $$m1() {
  let e = md(f3);
  return {
    selectedElement: md(e?.directManipulationEditor.selectedElementInfoAtom ?? u),
    selectedElementCodeSnippet: md(e?.directManipulationEditor.editingSnippetAtom ?? x).snippet
  };
}
export function $$h3(e) {
  let [t, n] = fp(JL);
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
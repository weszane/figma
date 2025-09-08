import { useMemo } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { RB } from "../figma_app/69680";
import { my, m0 } from "../figma_app/976749";
import { filterEntriesByEditorType, filterArrayByEditorType, isDevModeWithCodegen } from "../figma_app/300692";
export function $$l2(e, t) {
  let r = my();
  return useMemo(() => filterEntriesByEditorType(r, e, t), [r, t, e]);
}
export function $$d0(e) {
  let t = my();
  return useMemo(() => filterArrayByEditorType(t, e), [t, e]);
}
export function $$c1(e) {
  let t = m0();
  let r = useAtomWithSubscription(RB) && t;
  return useMemo(() => r ? e.filter(e => isDevModeWithCodegen(e)) : e, [r, e]);
}
export const Ol = $$d0;
export const bT = $$c1;
export const xy = $$l2;
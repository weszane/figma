import { useCallback, useMemo } from "react";
import { atom, useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { VU } from "../905/625959";
let s = atom(null);
export function $$o0() {
  let [e, t] = useAtomValueAndSetter(s);
  let r = useCallback(() => {
    t(null);
    (function (e) {
      VU.get(e, "toolbar")();
    })("leave-edit-mode");
  }, [t]);
  return useMemo(() => ({
    activeSecondaryToolbeltId: e,
    setActiveSecondaryToolbeltId: t,
    closeSecondaryToolbelt: r
  }), [e, t, r]);
}
export let $$l1 = atom(null);
export function $$d2() {
  let e = useAtomWithSubscription(s);
  let t = useAtomWithSubscription($$l1);
  return null !== e && null !== t;
}
export const LH = $$o0;
export const dN = $$l1;
export const zm = $$d2;
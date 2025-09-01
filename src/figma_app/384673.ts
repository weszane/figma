import { useCallback, useMemo } from "react";
import { eU, fp, md } from "../figma_app/27355";
import { VU } from "../905/625959";
let s = eU(null);
export function $$o0() {
  let [e, t] = fp(s);
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
export let $$l1 = eU(null);
export function $$d2() {
  let e = md(s);
  let t = md($$l1);
  return null !== e && null !== t;
}
export const LH = $$o0;
export const dN = $$l1;
export const zm = $$d2;
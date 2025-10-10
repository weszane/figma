import { useEffect } from "react";
import { atom, useSetAtom } from "../figma_app/27355";
export let $$a1 = atom(null);
export function $$s0(e) {
  let t = useSetAtom($$a1);
  return useEffect(() => (e?.current && t(e), () => {
    t(null);
  }), [t, e]);
}
export const I = $$s0;
export const c = $$a1;
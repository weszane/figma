import { useLayoutEffect } from "react";
import { atom, Xr, useAtomWithSubscription } from "../figma_app/27355";
let i = atom(0);
let n = atom(e => e(i) > 0);
export function $$l0({
  isVisible: e
}) {
  let t = Xr(i);
  useLayoutEffect(() => {
    if (e) {
      t(e => e + 1);
      return () => t(e => Math.max(0, e - 1));
    }
  }, [e, t]);
}
export function $$r1() {
  return useAtomWithSubscription(n);
}
export const N = $$l0;
export const S = $$r1;
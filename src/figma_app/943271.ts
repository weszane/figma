import { useEffect } from "react";
import { atom, Xr, useAtomWithSubscription, atomStoreManager } from "../figma_app/27355";
import { ft } from "../figma_app/753501";
let s = atom(null);
let o = atom(null);
let l = 0;
export function $$d0({
  subscribeToUpdates_EXPENSIVE: e
}) {
  let t = ft(!0) ? "pointermove" : "mousemove";
  let r = Xr(s);
  useAtomWithSubscription(e ? s : o);
  useEffect(() => {
    let e = ({
      clientX: e,
      clientY: t
    }) => {
      r({
        x: e,
        y: t
      });
    };
    1 == ++l && document.addEventListener(t, e);
    return () => {
      0 == --l && document.removeEventListener(t, e);
    };
  }, [t, r]);
  return atomStoreManager.get(s);
}
export const x = $$d0;
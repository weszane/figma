import { useEffect } from "react";
import { eU, Xr, md, zl } from "../figma_app/27355";
import { ft } from "../figma_app/753501";
let s = eU(null);
let o = eU(null);
let l = 0;
export function $$d0({
  subscribeToUpdates_EXPENSIVE: e
}) {
  let t = ft(!0) ? "pointermove" : "mousemove";
  let r = Xr(s);
  md(e ? s : o);
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
  return zl.get(s);
}
export const x = $$d0;
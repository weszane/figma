import { useEffect } from "react";
export function $$i0(e, t = !0) {
  useEffect(() => {
    if (!t) return;
    let r = !0;
    let n = performance.now();
    let i = t => {
      if (!r) return;
      let a = t - n;
      n = t;
      e(a);
      requestAnimationFrame(i);
    };
    requestAnimationFrame(i);
    return () => {
      r = !1;
    };
  }, [t, e]);
}
export const N = $$i0;
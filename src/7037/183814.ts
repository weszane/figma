import { useLayoutEffect } from "react";
export function $$i0(e, t, n) {
  useLayoutEffect(() => {
    if (!e || !e.current) return;
    let o = new IntersectionObserver(n => {
      for (let o of n) e.current === o.target && t?.(o);
    }, n);
    o.observe(e.current);
    return () => o.disconnect();
  }, [e, t, n]);
}
export const g = $$i0;
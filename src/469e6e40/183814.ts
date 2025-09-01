import { useLayoutEffect } from "react";
export function $$s0(e, t, a) {
  useLayoutEffect(() => {
    if (!e || !e.current) return;
    let n = new IntersectionObserver(a => {
      for (let n of a) e.current === n.target && t?.(n);
    }, a);
    n.observe(e.current);
    return () => n.disconnect();
  }, [e, t, a]);
}
export const g = $$s0;
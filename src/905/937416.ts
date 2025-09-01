import { useRef, useLayoutEffect } from "react";
export function $$r0(e, t, i = !0) {
  let a = useRef(t);
  a.current = t;
  let s = Array.isArray(e) ? e : [e];
  useLayoutEffect(() => {
    if (!i) return;
    let e = new ResizeObserver(a.current);
    for (let t of s) t.current && e.observe(t.current);
    return () => e.disconnect();
  }, [...s, i]);
}
export const w = $$r0;
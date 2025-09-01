import { useState, useLayoutEffect } from "react";
export function $$n0(e, t) {
  let [i, n] = useState(null);
  useLayoutEffect(() => {
    if (!e || !e.current || !t) return;
    n(e.current.getBoundingClientRect().width);
    let i = new ResizeObserver(e => {
      e.forEach(e => {
        let t = e.borderBoxSize?.[0];
        n(t ? t.inlineSize : e.contentRect.width);
      });
    });
    i.observe(e.current);
    return () => i.disconnect();
  }, [e, t]);
  return i;
}
export const E = $$n0;
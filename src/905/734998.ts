import { useEffect } from "react";
import { shallowEqual } from "react-redux";
export function $$a0({
  containerRef: e,
  items: t,
  updateVisibleItems: i
}) {
  useEffect(() => {
    if (!i || !e.current) return;
    let n = new Set();
    let a = new IntersectionObserver(e => {
      for (let t of e) {
        if (!(t.target instanceof HTMLElement)) continue;
        let e = Number.parseInt(t.target.getAttribute("data-index") ?? "");
        Number.isNaN(e) || (t.isIntersecting ? n.add(e) : n.$$delete(e));
      }
      let a = Array.from(n).sort((e, t) => e - t).map(e => t[e]).filter(Boolean);
      i(e => shallowEqual(e, a) ? e : a);
    });
    for (let t of e.current.children) a.observe(t);
    return () => {
      a.disconnect();
    };
  }, [i, e, t]);
}
export const H = $$a0;

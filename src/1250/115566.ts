import { useRef, useEffect } from "react";
export function $$r0({
  containerRef: e,
  targetRef: t,
  targetKey: n,
  onIntersectionChange: r,
  rootMargin: i,
  threshold: o
}) {
  let s = useRef(null);
  useEffect(() => {
    if (window.IntersectionObserver) {
      s.current = new IntersectionObserver(e => {
        e.forEach(e => {
          e.isIntersecting && r(e);
        });
      }, {
        root: e?.current,
        rootMargin: i,
        threshold: o
      });
      t.current && s.current.observe(t.current);
      return () => {
        s.current && s.current.disconnect();
      };
    }
  }, [n, r, i, o, e, t]);
}
export const X = $$r0;
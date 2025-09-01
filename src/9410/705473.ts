import { useState, useEffect } from "react";
export function $$n0(e, t = "0px") {
  let i = "IntersectionObserver" in window;
  let [a, s] = useState(!i);
  useEffect(() => {
    if (!i || !e.current) return;
    let r = e.current;
    let n = new IntersectionObserver(([e]) => {
      s(e.isIntersecting);
    }, {
      rootMargin: t
    });
    n.observe(r);
    return () => {
      n.unobserve(r);
    };
  }, [e, t, i]);
  return a;
}
export const x = $$n0;
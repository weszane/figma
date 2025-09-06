import { useState, useEffect, createRef } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { reportError } from "../905/11";
export function $$s0(e, t, i) {
  let {
    root,
    rootMargin,
    threshold
  } = i ?? {};
  let [d, c] = useState(null);
  let [u] = useState(() => new Map());
  let [p] = useState(() => new Map());
  let [m, h] = useState(0);
  useEffect(() => {
    var e;
    e = () => {
      try {
        let e = new IntersectionObserver(e => {
          e.forEach(e => {
            let i = p.get(e.target);
            null != i && t(e, i);
          });
        }, {
          root,
          rootMargin,
          threshold
        });
        c(e);
      } catch (e) {
        reportError(_$$e.UNOWNED, Error(`Failed to initialize IntersectionObserver ${e}`));
      }
    };
    setTimeout(function () {
      requestAnimationFrame(e);
    });
  }, [t, p, root, rootMargin, threshold]);
  useEffect(() => () => {
    d?.disconnect();
    p.clear();
  }, [p, d]);
  useEffect(() => {
    let t = !1;
    e.forEach(e => {
      let i = u.get(e);
      null == i && (i = createRef(), u.set(e, i), t = !0);
      i?.current && !p.has(i.current) && (d?.observe(i.current), p.set(i.current, e));
    });
    t && h(e => e + 1);
  }, [d, e, p, u]);
  return u;
}
export const B = $$s0;
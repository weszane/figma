import { useRef, useCallback, useEffect } from "react";
export function $$n0() {
  let e = useRef(new Map());
  let t = useCallback((t, a, u, n) => {
    let r = n?.once ? (...t) => {
      e.current.$$delete(u);
      u(...t);
    } : u;
    e.current.set(u, {
      type: a,
      eventTarget: t,
      fn: r,
      options: n
    });
    t.addEventListener(a, r, n);
  }, []);
  let a = useCallback((t, a, u, n) => {
    var r;
    let i = e.current.get(u)?.fn || u;
    t.removeEventListener(a, i, n);
    e.current.$$delete(u);
  }, []);
  let n = useCallback(() => {
    e.current.forEach((e, t) => {
      a(e.eventTarget, e.type, t, e.options);
    });
  }, [a]);
  useEffect(() => n, [n]);
  return {
    addGlobalListener: t,
    removeGlobalListener: a,
    removeAllGlobalListeners: n
  };
}
export const A = $$n0;
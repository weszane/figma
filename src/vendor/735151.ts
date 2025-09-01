import { useState, useRef, useEffect, useCallback } from "react";
export function $$n0(e, t, a) {
  let [n, r] = useState(e || t);
  let i = useRef(void 0 !== e);
  let o = void 0 !== e;
  useEffect(() => {
    i.current;
    i.current = o;
  }, [o]);
  let l = o ? e : n;
  let s = useCallback((e, ...t) => {
    let u = (e, ...t) => {
      a && !Object.is(l, e) && a(e, ...t);
      o || (l = e);
    };
    "function" == typeof e ? r((a, ...n) => {
      let r = e(o ? l : a, ...n);
      return (u(r, ...t), o) ? a : r;
    }) : (o || r(e), u(e, ...t));
  }, [o, l, a]);
  return [l, s];
}
export const P = $$n0;
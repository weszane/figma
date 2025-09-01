import { useMemo } from "react";
export function $$r0({
  items: e,
  pageSize: t,
  randomSeed: n,
  enabled: r = !0
}) {
  return useMemo(() => {
    if (!e || !r) return [];
    let l = e => {
      if (!e?.length) return [];
      let t = [...e];
      for (let e = t.length - 1; e > 0; e--) {
        let l = Math.floor(n * (e + 1) % (e + 1));
        let r = t[e];
        t[e] = t[l];
        t[l] = r;
      }
      return t;
    };
    let i = Math.ceil(e.length / t);
    let o = [];
    for (let n = 0; n < i; n++) {
      let r = n * t;
      let i = Math.min(r + t, e.length);
      let a = e.slice(r, i);
      o.push(...l(a));
    }
    return o;
  }, [e, n, r, t]);
}
export const z = $$r0;
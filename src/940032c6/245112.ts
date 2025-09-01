import { useMemo } from "react";
export function $$l0({
  items: e,
  pageSize: t,
  randomSeed: i,
  enabled: l = !0
}) {
  return useMemo(() => {
    if (!e || !l) return [];
    let n = e => {
      if (!e?.length) return [];
      let t = [...e];
      for (let e = t.length - 1; e > 0; e--) {
        let n = Math.floor(i * (e + 1) % (e + 1));
        let l = t[e];
        t[e] = t[n];
        t[n] = l;
      }
      return t;
    };
    let a = Math.ceil(e.length / t);
    let s = [];
    for (let i = 0; i < a; i++) {
      let l = i * t;
      let a = Math.min(l + t, e.length);
      let r = e.slice(l, a);
      s.push(...n(r));
    }
    return s;
  }, [e, i, l, t]);
}
export const z = $$l0;
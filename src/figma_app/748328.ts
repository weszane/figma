import { useState, useMemo, useEffect, useCallback } from "react";
export let $$i1 = 50;
function a(e, t) {
  if (!t) return e;
  let r = new Set(t.map(e => e.id));
  let n = e.filter(e => !r.has(e));
  return n.length === e.length ? e : n;
}
export function $$s0(e, t = $$i1) {
  let [r, o] = useState([]);
  let l = useMemo(() => a(r, e), [e, r]);
  useEffect(() => {
    o(l);
  }, [l]);
  return {
    optimisticIds: l,
    addOptimisticIds: useCallback(e => o(r => {
      let n = [...r, ...e];
      return n.length > t ? n.slice(n.length - t) : n;
    }), [t]),
    setServerData: useCallback(e => {
      o(t => a(t, e));
    }, [])
  };
}
export const K = $$s0;
export const O = $$i1;
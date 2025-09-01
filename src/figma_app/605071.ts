import { jsx } from "react/jsx-runtime";
import { createContext, useRef, useCallback, useMemo, useContext, useState, useEffect } from "react";
export let $$a0 = createContext(null);
export function $$s1({
  children: e
}) {
  let t = useRef(0);
  let r = useRef({}).current;
  let s = useRef(new Set());
  let o = useRef(new Set()).current;
  let l = useCallback(() => t.current, []);
  let d = useCallback(() => {
    for (let e of o) e(t.current);
  }, [o]);
  let c = useCallback(() => {
    let e = [];
    s.current.forEach(t => {
      let n = r[t];
      void 0 !== n && e.push(n);
    });
    let n = Math.max(...e, 0);
    n !== t.current && (t.current = n, d());
  }, [r, s, d]);
  let u = useCallback((e, t) => {
    r[e] !== t && (r[e] = t, c());
  }, [r, c]);
  let p = useCallback(e => {
    s.current = new Set(e);
    c();
  }, [s, c]);
  let _ = useCallback(e => {
    o.add(e);
  }, [o]);
  let h = useCallback(e => {
    o.$$delete(e);
  }, [o]);
  let m = useMemo(() => ({
    getWidth: l,
    registerGuids: p,
    registerWidth: u,
    rowWidthsCache: r,
    subscribe: _,
    unsubscribe: h
  }), [l, p, u, r, _, h]);
  return jsx($$a0.Provider, {
    value: m,
    children: e
  });
}
export let $$o3 = () => {
  let e = useContext($$a0);
  if (!e) throw Error("useRowWidthsContext must be used within a RowWidthsProvider");
  return e;
};
export function $$l2() {
  let {
    subscribe,
    unsubscribe,
    getWidth
  } = $$o3();
  let [n, a] = useState(getWidth());
  let s = useRef(!0);
  useEffect(() => {
    s.current && (s.current = !1, a(getWidth()));
    let n = e => {
      a(e);
    };
    subscribe(n);
    return () => {
      unsubscribe(n);
    };
  }, [subscribe, unsubscribe, getWidth]);
  return n;
}
export const $V = $$a0;
export const Rp = $$s1;
export const el = $$l2;
export const gz = $$o3;
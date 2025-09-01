import { createContext, useContext, useRef, createElement, use, useReducer, useEffect, useDebugValue, useCallback } from "react";
import { getDefaultStore, createStore } from "jotai";
let r = createContext(void 0);
let $$a1 = e => {
  let n = useContext(r);
  return e?.store || n || getDefaultStore();
};
let $$o0 = ({
  children: e,
  store: n
}) => {
  let i = useRef();
  n || i.current || (i.current = createStore());
  return createElement(r.Provider, {
    value: n || i.current
  }, e);
};
let u = e => "function" == typeof e?.then;
let l = use || (e => {
  if ("pending" === e.status) throw e;
  if ("fulfilled" === e.status) return e.value;
  if ("rejected" === e.status) throw e.reason;
  e.status = "pending";
  e.then(n => {
    e.status = "fulfilled";
    e.value = n;
  }, n => {
    e.status = "rejected";
    e.reason = n;
  });
  return e;
});
export function $$d3(e, n) {
  let i = $$a1(n);
  let [[f, r, o], d] = useReducer(n => {
    let t = i.get(e);
    return Object.is(n[0], t) && n[1] === i && n[2] === e ? n : [t, i, e];
  }, void 0, () => [i.get(e), i, e]);
  let s = f;
  (r !== i || o !== e) && (d(), s = i.get(e));
  let c = n?.delay;
  useEffect(() => {
    let n = i.sub(e, () => {
      if ("number" == typeof c) {
        setTimeout(d, c);
        return;
      }
      d();
    });
    d();
    return n;
  }, [i, e, c]);
  useDebugValue(s);
  return u(s) ? l(s) : s;
}
export function $$s2(e, n) {
  let i = $$a1(n);
  return useCallback((...n) => {
    if (!("write" in e)) throw Error("not writable atom");
    return i.set(e, ...n);
  }, [i, e]);
}
export const Kq = $$o0;
export const Pj = $$a1;
export const Xr = $$s2;
export const md = $$d3;

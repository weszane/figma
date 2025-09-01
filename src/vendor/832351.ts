import { N } from "../vendor/791199";
import { J } from "../vendor/578159";
import { useState, useRef, useEffect, useCallback } from "react";
import { Cc } from "../vendor/556527";
let u;
let l = !!("undefined" != typeof window && window.document && window.document.createElement);
let s = new Map();
export function $$d1(e) {
  let [t, a] = useState(e);
  let r = useRef(null);
  let d = Cc(t);
  let c = useRef(null);
  if (u && u.register(c, d), l) {
    let e = s.get(d);
    e && !e.includes(r) ? e.push(r) : s.set(d, [r]);
  }
  N(() => () => {
    u && u.unregister(c);
    s.$$delete(d);
  }, [d]);
  useEffect(() => {
    let e = r.current;
    e && a(e);
    return () => {
      e && (r.current = null);
    };
  });
  return d;
}
export function $$c0(e, t) {
  if (e === t) return e;
  let a = s.get(e);
  if (a) {
    a.forEach(e => e.current = t);
    return t;
  }
  let u = s.get(t);
  return u ? (u.forEach(t => t.current = e), e) : t;
}
export function $$m2(e = []) {
  let t = $$d1();
  let [a, u] = function (e) {
    let [t, a] = useState(e);
    let u = useRef(null);
    let o = J(() => {
      if (!u.current) return;
      let e = u.current.next();
      if (e.done) {
        u.current = null;
        return;
      }
      t === e.value ? o() : a(e.value);
    });
    N(() => {
      u.current && o();
    });
    let l = J(e => {
      u.current = e(t);
      o();
    });
    return [t, l];
  }(t);
  let o = useCallback(() => {
    u(function* () {
      yield t;
      yield document.getElementById(t) ? t : void 0;
    });
  }, [t, u]);
  N(o, [t, o, ...e]);
  return a;
}
"undefined" != typeof FinalizationRegistry && (u = new FinalizationRegistry(e => {
  s.$$delete(e);
}));
export const Tw = $$c0;
export const Bi = $$d1;
export const X1 = $$m2;
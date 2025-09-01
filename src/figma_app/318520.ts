import { useState, useEffect } from "react";
export function $$i2(e, t) {
  let [r, i] = useState(null);
  let [a, s] = useState(!1);
  return (useEffect(() => {
    if (t && !a) {
      let r = function (t) {
        i(t[e] || null);
      };
      t.volumeLevelsStore.subscribe(r);
      s(!0);
      return () => {
        t.volumeLevelsStore.unsubscribe(r);
        s(!1);
      };
    }
  }, [t]), t) ? r : null;
}
export function $$a0(e, t, r) {
  let n = t => {
    r(t[e] || null);
  };
  t && t.volumeLevelsStore.subscribe(n);
  return {
    unsubscribe: () => t?.volumeLevelsStore.unsubscribe(n)
  };
}
export function $$s1(e, t) {
  let [r, i] = useState();
  let [a, s] = useState(!1);
  if (useEffect(() => {
    if (t && !a) {
      let r = function (t) {
        i(t[e]?.isMuted);
      };
      t.volumeLevelsStore.subscribe(r);
      s(!0);
      return () => {
        t.volumeLevelsStore.unsubscribe(r);
        s(!1);
      };
    }
  }, [t]), t) return r;
}
export function $$o3(e) {
  let [t, r] = useState(null);
  let [i, a] = useState(!1);
  useEffect(() => {
    if (e && !i) {
      let t = function (e) {
        r(e);
      };
      e.recentlySpokeIdStore.subscribe(t);
      a(!0);
      return () => {
        e.recentlySpokeIdStore.unsubscribe(t);
        a(!1);
      };
    }
  }, [e]);
  return t;
}
export const Em = $$a0;
export const TI = $$s1;
export const Wl = $$i2;
export const mt = $$o3;
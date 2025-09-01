import { useState, useMemo, useEffect } from "react";
import { debounce } from "../905/915765";
let $$a0 = null;
let $$s8 = null;
try {
  $$a0 = window.sessionStorage;
} catch (e) {}
try {
  $$s8 = window.localStorage;
} catch (e) {}
export function $$o4() {
  return $$s8;
}
export function $$l3() {
  return $$a0;
}
export function $$d2(e, t) {
  for (let i of (t += "=", e.split(";"))) {
    let e = /^\s*(.*)$/.exec(i);
    if (e && (i = e[1]).slice(0, t.length) === t) return decodeURIComponent(i.slice(t.length));
  }
  return null;
}
let c = class {
  get(e) {
    if (null == $$s8) return null;
    let t = window.localStorage.getItem(e);
    return null === t ? null : JSON.parse(t);
  }
  set(e, t) {
    null != $$s8 && window.localStorage.setItem(e, JSON.stringify(t));
  }
  delete(e) {
    null != $$s8 && window.localStorage.removeItem(e);
  }
};
let u = new Map();
export function $$p1() {
  return $$s8 ? new c() : u;
}
function m(e) {
  try {
    return JSON.parse(e);
  } catch {
    return;
  }
}
function h(e, t, i, {
  debounceTime: a,
  stringify: s = JSON.stringify,
  parse: o = m
} = {}) {
  let [l, d] = useState(() => {
    if (t) {
      let i = t.getItem(e);
      if (null != i) {
        let e = o(i);
        if (void 0 !== e) return e;
      }
    }
    return "function" == typeof i ? i() : i;
  });
  let c = useMemo(() => {
    let i = (i) => {
      t && t.setItem(e, s(i));
    };
    return null == a ? i : debounce(i, a);
  }, [a, t, s, e]);
  let u = useMemo(() => () => {
    t && t.removeItem(e);
  }, [t, e]);
  useEffect(() => {
    c(l);
  }, [c, l]);
  return [l, d, u];
}
export function $$g5(e, t, i = {}) {
  return h(e, $$s8, t, i);
}
export function $$f6(e, t, i = {}) {
  return h(e, $$a0, t, i);
}
export function $$_7({
  onSync: e,
  shouldSyncValue: t
}) {
  useEffect(() => {
    function i(i) {
      t(i) && e(i.newValue);
    }
    window.addEventListener("storage", i);
    return () => {
      window.removeEventListener("storage", i);
    };
  }, [e, t]);
}
export const Co = $$a0;
export const DN = $$p1;
export const OS = $$d2;
export const Q_ = $$l3;
export const TQ = $$o4;
export const Vc = $$g5;
export const Wz = $$f6;
export const tl = $$_7;
export const x4 = $$s8;
import { createContext, useId, useState, useContext, useRef, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, useSyncExternalStore } from "react";
let n = {
  prefix: String(Math.round(1e10 * Math.random())),
  current: 0
};
let r = createContext(n);
let i = createContext(!1);
"undefined" != typeof window && window.document && window.document.createElement;
let o = new WeakMap();
let $$l0 = "function" == typeof useId ? function (e) {
  let t = useId();
  let [a] = useState($$m1());
  let r = a ? "react-aria" : `react-aria${n.prefix}`;
  return e || `${r}-${t}`;
} : function (e) {
  let t = useContext(r);
  let a = function (e = !1) {
    let t = useContext(r);
    let a = useRef(null);
    if (null === a.current && !e) {
      var n;
      var i;
      let e = __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED || i.ReactCurrentOwner?.current;
      if (e) {
        let a = o.get(e);
        null == a ? o.set(e, {
          id: t.current,
          state: e.memoizedState
        }) : e.memoizedState !== a.state && (t.current = a.id, o.$$delete(e));
      }
      a.current = ++t.current;
    }
    return a.current;
  }(!!e);
  let n = `react-aria${t.prefix}`;
  return e || `${n}-${a}`;
};
function s() {
  return !1;
}
function d() {
  return !0;
}
function c(e) {
  return () => {};
}
export function $$m1() {
  return "function" == typeof useSyncExternalStore ? useSyncExternalStore(c, s, d) : useContext(i);
}
export const Cc = $$l0;
export const wR = $$m1;
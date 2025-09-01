import { createContext, useContext, useRef, useMemo, createElement } from "react";
import { L } from "../vendor/204524";
import { C } from "../vendor/378253";
let $$o = createContext(null);
let h = e => !e.isLayoutDirty && e.willUpdate(!1);
function d() {
  let e = new Set();
  let r = new WeakMap();
  let n = () => e.forEach(h);
  return {
    add: i => {
      e.add(i);
      r.set(i, i.addEventListener("willUpdate", n));
    },
    remove: i => {
      var s;
      e.$$delete(i);
      r.get(i)?.();
      r.$$delete(i);
      n();
    },
    dirty: n
  };
}
let p = e => !0 === e;
let g = e => p(!0 === e) || "id" === e;
let $$m0 = ({
  children: e,
  id: r,
  inheritId: n,
  inherit: h = !0
}) => {
  void 0 !== n && (h = n);
  let m = useContext(L);
  let v = useContext($$o);
  let [y, b] = C();
  let O = useRef(null);
  let x = m.id || v;
  null === O.current && (g(h) && x && (r = r ? x + "-" + r : x), O.current = {
    id: r,
    group: p(h) && m.group || d()
  });
  let w = useMemo(() => ({
    ...O.current,
    forceRender: y
  }), [b]);
  return createElement(L.Provider, {
    value: w
  }, e);
};
export const o = $$m0;
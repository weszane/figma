import { jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo, useId, useLayoutEffect, useState, forwardRef } from "react";
var n;
let s = {
  description: "aria-describedby",
  label: "aria-labelledby",
  htmlFor: "htmlFor"
};
let o = createContext(null);
n = e => Object.entries(e).reduce((e, [t, i]) => (i.length && (e[s[t]] = i.join(" ")), e), {});
let $$l1 = function (e) {
  let t = useContext(o);
  let i = t?.connections;
  return useMemo(() => i ? n(e.reduce((e, t) => (e[t] = [...i[t]], e), {})) : {}, [i, e]);
};
let $$d2 = function (e, t = {}) {
  let i = useContext(o);
  let n = t.enabled ?? !0;
  let r = useId();
  let s = t.providedId ?? r;
  let l = null !== i && n;
  let d = i?.setConnection;
  useLayoutEffect(() => {
    function t() {
      d && d(t => {
        let i = new Set(t[e]);
        i.$$delete(s);
        return {
          ...t,
          [e]: i
        };
      });
    }
    return n ? (d && d(t => {
      let i = new Set(t[e]);
      i.add(s);
      return {
        ...t,
        [e]: i
      };
    }), () => t()) : t();
  }, [n, s, d, e]);
  return useMemo(() => ({
    id: s,
    isRegistered: l
  }), [s, l]);
};
let $$c0 = function (e, t, i) {
  function n({
    children: i
  }) {
    let [n, s] = useState(() => t.reduce((e, t) => (e[t] = new Set(), e), {}));
    let o = useMemo(() => ({
      connections: n,
      setConnection: s
    }), [n]);
    return jsx(e.Provider, {
      value: o,
      children: i
    });
  }
  n.displayName = i;
  return n;
}(o, ["description", "label", "htmlFor"], "A11yConnector");
export function $$u3(e) {
  return forwardRef((t, i) => jsx($$c0, {
    children: jsx(e, {
      ...t,
      ref: i
    })
  }));
}
export const C4 = $$c0;
export const iM = $$l1;
export const VM = $$d2;
export const If = $$u3;
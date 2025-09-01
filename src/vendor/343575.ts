import { rD, UE as _$$UE, cY as _$$cY, BN as _$$BN, UU as _$$UU, Ej as _$$Ej } from "../vendor/542280";
import { useLayoutEffect, useEffect, useRef, useState, useCallback, useMemo } from "react";
import { flushSync } from "../vendor/944059";
var o = "undefined" != typeof document ? useLayoutEffect : useEffect;
function s(e, t) {
  let n;
  let r;
  let i;
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if ("function" == typeof e && e.toString() === t.toString()) return !0;
  if (e && t && "object" == typeof e) {
    if (Array.isArray(e)) {
      if ((n = e.length) !== t.length) return !1;
      for (r = n; 0 != r--;) if (!s(e[r], t[r])) return !1;
      return !0;
    }
    if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length) return !1;
    for (r = n; 0 != r--;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; 0 != r--;) {
      let n = i[r];
      if (("_owner" !== n || !e.$$typeof) && !s(e[n], t[n])) return !1;
    }
    return !0;
  }
  return e != e && t != t;
}
function a(e) {
  return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function l(e, t) {
  let n = a(e);
  return Math.round(t * n) / n;
}
function u(e) {
  let t = useRef(e);
  o(() => {
    t.current = e;
  });
  return t;
}
export function $$g5(e) {
  void 0 === e && (e = {});
  let {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform,
    elements: {
      reference: f,
      floating: d
    } = {},
    transform = !0,
    whileElementsMounted,
    open
  } = e;
  let [I, E] = useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: !1
  });
  let [B, m] = useState(middleware);
  s(B, middleware) || m(middleware);
  let [y, _] = useState(null);
  let [Q, D] = useState(null);
  let w = useCallback(e => {
    e !== x.current && (x.current = e, _(e));
  }, []);
  let b = useCallback(e => {
    e !== S.current && (S.current = e, D(e));
  }, []);
  let v = f || y;
  let k = d || Q;
  let x = useRef(null);
  let S = useRef(null);
  let F = useRef(I);
  let N = null != whileElementsMounted;
  let T = u(whileElementsMounted);
  let L = u(platform);
  let R = u(open);
  let M = useCallback(() => {
    if (!x.current || !S.current) return;
    let e = {
      placement,
      strategy,
      middleware: B
    };
    L.current && (e.platform = L.current);
    rD(x.current, S.current, e).then(e => {
      let t = {
        ...e,
        isPositioned: !1 !== R.current
      };
      O.current && !s(F.current, t) && (F.current = t, flushSync(() => {
        E(t);
      }));
    });
  }, [B, placement, strategy, L, R]);
  o(() => {
    !1 === open && F.current.isPositioned && (F.current.isPositioned = !1, E(e => ({
      ...e,
      isPositioned: !1
    })));
  }, [open]);
  let O = useRef(!1);
  o(() => (O.current = !0, () => {
    O.current = !1;
  }), []);
  o(() => {
    if (v && (x.current = v), k && (S.current = k), v && k) {
      if (T.current) return T.current(v, k, M);
      M();
    }
  }, [v, k, M, T, N]);
  let G = useMemo(() => ({
    reference: x,
    floating: S,
    setReference: w,
    setFloating: b
  }), [w, b]);
  let P = useMemo(() => ({
    reference: v,
    floating: k
  }), [v, k]);
  let U = useMemo(() => {
    let e = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!P.floating) return e;
    let t = l(P.floating, I.x);
    let r = l(P.floating, I.y);
    return transform ? {
      ...e,
      transform: "translate(" + t + "px, " + r + "px)",
      ...(a(P.floating) >= 1.5 && {
        willChange: "transform"
      })
    } : {
      position: strategy,
      left: t,
      top: r
    };
  }, [strategy, transform, P.floating, I.x, I.y]);
  return useMemo(() => ({
    ...I,
    update: M,
    refs: G,
    elements: P,
    floatingStyles: U
  }), [I, M, G, P, U]);
}
let c = e => ({
  name: "arrow",
  options: e,
  fn(t) {
    let {
      element,
      padding
    } = "function" == typeof e ? e(t) : e;
    return element && {}.hasOwnProperty.call(element, "current") ? null != element.current ? _$$UE({
      element: element.current,
      padding
    }).fn(t) : {} : element ? _$$UE({
      element,
      padding
    }).fn(t) : {};
  }
});
let $$f4 = (e, t) => ({
  ..._$$cY(e),
  options: [e, t]
});
let $$d0 = (e, t) => ({
  ..._$$BN(e),
  options: [e, t]
});
let $$h3 = (e, t) => ({
  ..._$$UU(e),
  options: [e, t]
});
let $$p1 = (e, t) => ({
  ..._$$Ej(e),
  options: [e, t]
});
let $$C2 = (e, t) => ({
  ...c(e),
  options: [e, t]
});
export const BN = $$d0;
export const Ej = $$p1;
export const UE = $$C2;
export const UU = $$h3;
export const cY = $$f4;
export const we = $$g5;
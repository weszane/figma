import { Component, useId, useRef, useInsertionEffect, createElement, cloneElement, useMemo, useEffect, Children, isValidElement, useContext, Fragment } from "react";
import { C as _$$C } from "../vendor/378253";
import { a as _$$a } from "../vendor/349175";
import { t } from "../vendor/987444";
import { M } from "../vendor/644572";
import { L } from "../vendor/204524";
import { E as _$$E } from "../vendor/476615";
import { l } from "../vendor/177458";
class d extends Component {
  getSnapshotBeforeUpdate(e) {
    let r = this.props.childRef.current;
    if (r && e.isPresent && !this.props.isPresent) {
      let e = this.props.sizeRef.current;
      e.height = r.offsetHeight || 0;
      e.width = r.offsetWidth || 0;
      e.top = r.offsetTop;
      e.left = r.offsetLeft;
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function p({
  children: e,
  isPresent: r
}) {
  let n = useId();
  let s = useRef(null);
  let o = useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  useInsertionEffect(() => {
    let {
      width,
      height,
      top,
      left
    } = o.current;
    if (r || !s.current || !width || !height) return;
    s.current.dataset.motionPopId = n;
    let d = document.createElement("style");
    document.head.appendChild(d);
    d.sheet && d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
    return () => {
      document.head.removeChild(d);
    };
  }, [r]);
  return createElement(d, {
    isPresent: r,
    childRef: s,
    sizeRef: o
  }, cloneElement(e, {
    ref: s
  }));
}
let g = ({
  children: e,
  initial: r,
  isPresent: n,
  onExitComplete: s,
  custom: o,
  presenceAffectsLayout: d,
  mode: g
}) => {
  let v = M(m);
  let y = useId();
  let b = useMemo(() => ({
    id: y,
    initial: r,
    isPresent: n,
    custom: o,
    onExitComplete: e => {
      for (let r of (v.set(e, !0), v.values())) if (!r) return;
      s && s();
    },
    register: e => (v.set(e, !1), () => v.$$delete(e))
  }), d ? void 0 : [n]);
  useMemo(() => {
    v.forEach((e, r) => v.set(r, !1));
  }, [n]);
  useEffect(() => {
    n || v.size || !s || s();
  }, [n]);
  "popLayout" === g && (e = createElement(p, {
    isPresent: n
  }, e));
  return createElement(t.Provider, {
    value: b
  }, e);
};
function m() {
  return new Map();
}
let O = e => e.key || "";
function x(e, r) {
  e.forEach(e => {
    let n = O(e);
    r.set(n, e);
  });
}
function w(e) {
  let r = [];
  Children.forEach(e, e => {
    isValidElement(e) && r.push(e);
  });
  return r;
}
export let $$k0 = ({
  children: e,
  custom: r,
  initial: n = !0,
  onExitComplete: a,
  exitBeforeEnter: h,
  presenceAffectsLayout: d = !0,
  mode: p = "sync"
}) => {
  h && (p = "wait");
  let [m] = _$$C();
  let k = useContext(L).forceRender;
  k && (m = k);
  let _ = _$$a();
  let S = w(e);
  let E = S;
  let A = new Set();
  let C = useRef(E);
  let T = useRef(new Map()).current;
  let I = useRef(!0);
  if (_$$E(() => {
    I.current = !1;
    x(S, T);
    C.current = E;
  }), l(() => {
    I.current = !0;
    T.clear();
    A.clear();
  }), I.current) return createElement(Fragment, null, E.map(e => createElement(g, {
    key: O(e),
    isPresent: !0,
    initial: !!n && void 0,
    presenceAffectsLayout: d,
    mode: p
  }, e)));
  E = [...E];
  let P = C.current.map(O);
  let R = S.map(O);
  let M = P.length;
  for (let e = 0; e < M; e++) {
    let r = P[e];
    -1 === R.indexOf(r) && A.add(r);
  }
  "wait" === p && A.size && (E = []);
  A.forEach(e => {
    if (-1 !== R.indexOf(e)) return;
    let n = T.get(e);
    if (!n) return;
    let s = P.indexOf(e);
    let o = () => {
      T.$$delete(e);
      A.$$delete(e);
      let r = C.current.findIndex(r => r.key === e);
      if (C.current.splice(r, 1), !A.size) {
        if (C.current = S, !1 === _.current) return;
        m();
        a && a();
      }
    };
    E.splice(s, 0, createElement(g, {
      key: O(n),
      isPresent: !1,
      onExitComplete: o,
      custom: r,
      presenceAffectsLayout: d,
      mode: p
    }, n));
  });
  E = E.map(e => {
    let r = e.key;
    return A.has(r) ? e : createElement(g, {
      key: O(e),
      isPresent: !0,
      presenceAffectsLayout: d,
      mode: p
    }, e);
  });
  return createElement(Fragment, null, A.size ? E : E.map(e => cloneElement(e)));
};
export const N = $$k0;
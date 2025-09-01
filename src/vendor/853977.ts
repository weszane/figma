import { V } from "../vendor/524215";
import { createContext, useRef, useEffect, createElement, forwardRef, useContext } from "react";
import { P } from "../vendor/348225";
import { M } from "../vendor/644572";
import { Pe } from "../vendor/224885";
import { j } from "../vendor/150960";
import { d as _$$d } from "../vendor/456530";
import { G } from "../vendor/697048";
import { S } from "../vendor/777323";
let o = createContext(null);
function g(e, r, n, i) {
  if (!i) return e;
  let s = e.findIndex(e => e.value === r);
  if (-1 === s) return e;
  let o = i > 0 ? 1 : -1;
  let a = e[s + o];
  if (!a) return e;
  let h = e[s];
  let g = a.layout;
  let m = j(g.min, g.max, .5);
  return 1 === o && h.layout.max + n > m || -1 === o && h.layout.min + n < m ? Pe(e, s, s + o) : e;
}
function m({
  children: e,
  as: r = "ul",
  axis: n = "y",
  onReorder: d,
  values: p,
  ...m
}, v) {
  let O = M(() => P(r));
  let x = [];
  let w = useRef(!1);
  V(!!p, "Reorder.Group must be provided a values prop");
  let k = {
    axis: n,
    registerItem: (e, r) => {
      r && -1 === x.findIndex(r => e === r.value) && (x.push({
        value: e,
        layout: r[n]
      }), x.sort(b));
    },
    updateOrder: (e, r, n) => {
      if (w.current) return;
      let i = g(x, e, r, n);
      x !== i && (w.current = !0, d(i.map(y).filter(e => -1 !== p.indexOf(e))));
    }
  };
  useEffect(() => {
    w.current = !1;
  });
  return createElement(O, {
    ...m,
    ref: v
  }, createElement(o.Provider, {
    value: k
  }, e));
}
let v = forwardRef(m);
function y(e) {
  return e.value;
}
function b(e, r) {
  return e.layout.min - r.layout.min;
}
function k(e, r = 0) {
  return S(e) ? e : _$$d(r);
}
function $$_({
  children: e,
  style: r = {},
  value: n,
  as: d = "li",
  onDrag: p,
  layout: g = !0,
  ...m
}, v) {
  let y = M(() => P(d));
  let b = useContext(o);
  let O = {
    x: k(r.x),
    y: k(r.y)
  };
  let w = G([O.x, O.y], ([e, r]) => e || r ? 1 : "unset");
  let _ = useRef(null);
  V(!!b, "Reorder.Item must be a child of Reorder.Group");
  let {
    axis,
    registerItem,
    updateOrder
  } = b;
  useEffect(() => {
    registerItem(n, _.current);
  }, [b]);
  return createElement(y, {
    drag: axis,
    ...m,
    dragSnapToOrigin: !0,
    style: {
      ...r,
      x: O.x,
      y: O.y,
      zIndex: w
    },
    layout: g,
    onDrag: (e, r) => {
      let {
        velocity
      } = r;
      velocity[axis] && updateOrder(n, O[axis].get(), velocity[axis]);
      p && p(e, r);
    },
    onLayoutMeasure: e => {
      _.current = e;
    },
    ref: v
  }, e);
}
export let $$S0 = {
  Group: v,
  Item: forwardRef($$_)
};
export const _ = $$S0;
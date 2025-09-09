import { jsx } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect, useLayoutEffect } from "react";
import { useMemoStable } from "../905/19536";
import s from "classnames";
import { wY, cU } from "../figma_app/708845";
import { $ } from "../905/455748";
import { Dm, Uu } from "../figma_app/8833";
import { Y } from "../905/1768";
var o = s;
export function $$p1({
  targetRect: e,
  targetRef: t,
  children: r,
  onClose: i,
  onMeasure: s,
  onMouseEnter: l,
  onMouseLeave: d,
  pointerEvents: u = "none",
  zIndex: p,
  style: h,
  offset: m = 4,
  positionX: g = $$_4,
  positionY: f = $$E2,
  positionXY: y,
  onPosition: b,
  frozen: I,
  setSizeChanged: S
}) {
  let v = useMemoStable(() => e, [e]);
  let A = {
    pointerEvents: u,
    zIndex: p
  };
  p && (A.zIndex = p);
  return jsx("div", {
    className: o()("window_positioner--positionerRoot--nDb0j", Dm, Uu),
    style: A,
    children: jsx($$T0, {
      frozen: I,
      offset: m,
      onClose: i,
      onMeasure: s,
      onMouseEnter: l,
      onMouseLeave: d,
      onPosition: b,
      positionX: g,
      positionXY: y,
      positionY: f,
      setSizeChanged: S,
      style: h,
      targetRect: v,
      targetRef: t,
      children: r
    })
  });
}
let $$_4 = (e, t) => e.x + e.width / 2 - t.width / 2;
let $$h7 = (e, t) => e.x;
let $$m9 = (e, t) => e.x + e.width - t.width;
let $$g6 = (e, t, r) => e.x - t.width - r;
let $$f8 = (e, t) => e.x + e.width + t;
let $$E2 = (e, t, r) => e.y - t.height - r;
let $$y3 = (e, t, r) => e.height + e.y + r;
let $$b5 = (e, t) => e.y + e.height / 2 - t.height / 2;
export function $$T0({
  targetRect: e,
  targetRef: t,
  children: r,
  onClose: a,
  onMeasure: s,
  onMouseEnter: o,
  onMouseLeave: c,
  style: p,
  offset: h = 4,
  positionX: m = $$_4,
  positionY: g = $$E2,
  positionXY: f,
  childRef: y,
  onPosition: b,
  frozen: T,
  setSizeChanged: I,
  closeOnEsc: S = !1,
  useDropdownZIndex: v = !1
}) {
  let [A, x] = useState({
    x: 0,
    y: 0
  });
  let [N, C] = useState(!1);
  let w = useRef(null);
  let O = useCallback(e => {
    let t = 0 !== e.width || 0 !== e.height;
    C(t);
    s && s(e);
    t || x({
      x: 0,
      y: 0
    });
  }, [s]);
  let R = wY(w, O) ?? cU;
  Y(a, {
    ignore: [t?.current, w.current],
    closeOnEsc: S
  });
  let L = $(N) && N;
  let P = $(R);
  useEffect(() => I && I(P), [I, P]);
  useLayoutEffect(() => {
    (L || N && !T) && R && x(t => {
      let r;
      let n;
      let i = 0 !== t.x || 0 !== t.y ? [t.x, t.y] : void 0;
      f ? [r, n] = f(e, R, h, i) : (r = m(e, R, h), n = g(e, R, h));
      return {
        x: r,
        y: n
      };
    });
  }, [T, h, m, f, g, R, N, e, L]);
  let {
    x: _x,
    y: _y
  } = A;
  useEffect(() => {
    N && b && b(_x, _y, R, h);
  }, [_x, _y, R, b, h, N]);
  return jsx("div", {
    style: {
      position: "absolute",
      width: "fit-content",
      height: "fit-content",
      transform: `translate3d(${_x}px, ${_y}px, 0)`,
      ...p,
      ...(N ? {} : {
        opacity: 0
      }),
      ...(v ? {
        zIndex: 14
      } : {})
    },
    onMouseEnter: o,
    onMouseLeave: c,
    ref: e => {
      w.current = e;
      y && y(e);
    },
    children: r
  });
}
export const Mj = $$T0;
export const lM = $$p1;
export const T1 = $$E2;
export const DH = $$y3;
export const Al = $$_4;
export const tJ = $$b5;
export const Dl = $$g6;
export const Gu = $$h7;
export const Yh = $$f8;
export const nm = $$m9;
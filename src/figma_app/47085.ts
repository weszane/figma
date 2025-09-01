import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import a from "classnames";
import { D8 } from "../905/511649";
import { Kg, u9, rH } from "../figma_app/811257";
import { $f, Vp, ON, qv, q1, wH, jz, eK, H_, cN, xx } from "../905/235035";
var s = a;
let $$c0 = forwardRef(function ({
  leftLabel: e,
  leftInput: t,
  rightLabel: r,
  rightInput: i,
  appendedClassName: a,
  icon: c,
  ...u
}, p) {
  return jsxs(D8, {
    className: s()($f, a),
    forwardedRef: p,
    ...u,
    "data-non-interactive": !0,
    children: [null != e ? jsx(Kg, {
      children: e
    }) : null, jsx("div", {
      className: Vp,
      "data-non-interactive": !0,
      children: t
    }), null != r ? jsx(u9, {
      children: r
    }) : null, jsx("div", {
      className: ON,
      "data-non-interactive": !0,
      children: i
    }), jsx(rH, {
      children: c
    })]
  });
});
let $$u2 = forwardRef(function ({
  input: e,
  children: t,
  appendedClassName: r,
  onMouseDown: i,
  onClick: a,
  dataOnboardingKey: l
}, c) {
  let u = s()(qv, r);
  return jsxs(D8, {
    onClick: a,
    dataOnboardingKey: l,
    className: u,
    forwardedRef: c,
    onMouseDown: i,
    "data-non-interactive": !0,
    children: [jsx("div", {
      className: q1,
      "data-non-interactive": !0,
      children: e
    }), jsx("div", {
      className: wH,
      children: t
    })]
  });
});
forwardRef(function ({
  input: e,
  leftIcon: t,
  rightIcon: r,
  appendedClassName: i,
  onFocus: a,
  onMouseDown: l,
  onMouseMove: c,
  onMouseUp: u,
  recordingKey: p
}, _) {
  let h = s()(jz, i);
  return jsxs(D8, {
    className: h,
    forwardedRef: _,
    onFocus: a,
    onMouseDown: l,
    onMouseMove: c,
    onMouseUp: u,
    recordingKey: p,
    "data-non-interactive": !0,
    children: [jsxs("div", {
      className: q1,
      "data-non-interactive": !0,
      children: [" ", e, " "]
    }), jsxs("div", {
      className: eK,
      "data-non-interactive": !0,
      children: [" ", t, " "]
    }), jsxs("div", {
      className: H_,
      "data-non-interactive": !0,
      children: [" ", r, " "]
    })]
  });
});
let $$p1 = forwardRef(function ({
  input: e,
  label: t,
  appendedClassName: r,
  alwaysShowLabel: i,
  onFocus: a,
  onBlur: c,
  dataTestId: u
}, p) {
  return jsxs(D8, {
    className: s()(cN, r),
    forwardedRef: p,
    onFocus: a,
    onBlur: c,
    "data-non-interactive": !0,
    "data-testid": u,
    children: [t ? jsx(Kg, {
      alwaysShowLabel: i,
      children: t
    }) : null, jsx("div", {
      className: Vp,
      "data-non-interactive": !0,
      children: e
    })]
  });
});
let $$_3 = forwardRef(function ({
  label: e,
  input: t,
  icon: r,
  dataTestId: i,
  recordingKey: a,
  onContextMenu: c,
  onClick: u,
  onMouseDown: p,
  appendedClassName: _
}, h) {
  let m = s()(xx, _);
  return jsxs(D8, {
    className: m,
    forwardedRef: h,
    onContextMenu: c,
    onClick: u,
    onMouseDown: p,
    recordingKey: a,
    "data-testid": i,
    "data-non-interactive": !0,
    children: [null != e ? jsx(Kg, {
      children: e
    }) : null, jsx("div", {
      className: Vp,
      "data-non-interactive": !0,
      children: t
    }), jsx(rH, {
      children: r
    })]
  });
});
export const Hm = $$c0;
export const Kk = $$p1;
export const SP = $$u2;
export const pG = $$_3;
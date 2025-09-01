import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { forwardRef } from "react";
import a from "classnames";
import { D8 } from "../905/511649";
import { Kg, u9, my } from "../figma_app/811257";
import { ZD, Vp, ON, dk, pK, Xv, H$, Os, KP, uf, kW, qv, eK, q1, wH } from "../905/235035";
var s = a;
let $$c2 = forwardRef(function ({
  leftInput: e,
  rightInput: t,
  leftLabel: r,
  rightLabel: i,
  leftIcon: a,
  rightIcon: c,
  appendedClassName: u,
  ...p
}, _) {
  let h = s()(ZD, u);
  return jsxs(D8, {
    className: h,
    forwardedRef: _,
    ...p,
    "data-non-interactive": !0,
    children: [null != r ? jsx(Kg, {
      children: r
    }) : null, jsx("div", {
      className: Vp,
      "data-non-interactive": !0,
      children: e
    }), null != i ? jsx(u9, {
      children: i
    }) : null, jsx("div", {
      className: ON,
      "data-non-interactive": !0,
      children: t
    }), jsx("div", {
      className: dk,
      "data-non-interactive": !0,
      children: a
    }), jsx("div", {
      className: pK,
      "data-non-interactive": !0,
      children: c
    })]
  });
});
let $$u1 = forwardRef(function ({
  leftLabel: e,
  rightLabel: t,
  topIcon: r,
  bottomIcon: i,
  appendedClassName: a,
  collapsedLeftInput: c,
  collapsedRightInput: u,
  expandedTopLeftInput: p,
  expandedTopRightInput: _,
  expandedBottomLeftInput: h,
  expandedBottomRightInput: m,
  singleInput: g,
  showAllPaddingControls: f,
  showSinglePaddingControl: E,
  ...y
}, b) {
  let T = jsx("div", {
    className: Xv,
    children: g
  });
  let I = jsxs(Fragment, {
    children: [jsx("div", {
      className: Vp,
      children: c
    }), jsx("div", {
      className: H$,
      children: u
    })]
  });
  let S = jsxs(Fragment, {
    children: [jsx("div", {
      className: Vp,
      children: p
    }), jsx("div", {
      className: ON,
      children: h
    }), jsx("div", {
      className: H$,
      children: _
    }), jsx("div", {
      className: Os,
      children: m
    })]
  });
  let v = !E && f ? KP : uf;
  return jsxs(D8, {
    className: s()(v, a),
    forwardedRef: b,
    ...y,
    "data-non-interactive": !0,
    children: [jsx(Kg, {
      children: e
    }), jsx(u9, {
      children: t
    }), jsx(my, {}), E ? T : f ? S : I, jsx("div", {
      className: dk,
      children: r
    }), f && i && jsx("div", {
      className: pK,
      children: i
    })]
  });
});
let $$p3 = forwardRef(function ({
  leftLabel: e,
  rightLabel: t,
  topIcon: r,
  bottomIcon: i,
  appendedClassName: a,
  topLeftInput: c,
  bottomLeftInput: u,
  topRightInput: p,
  bottomRightInput: _,
  leftInput: h,
  rightInput: m,
  ...g
}, f) {
  let E = s()(KP, a);
  return jsxs(D8, {
    className: E,
    forwardedRef: f,
    ...g,
    "data-non-interactive": !0,
    children: [jsx(Kg, {
      children: e
    }), jsx(u9, {
      children: t
    }), jsx(my, {}), null != h ? jsx("div", {
      className: kW,
      children: h
    }) : jsxs(Fragment, {
      children: [jsx("div", {
        className: Vp,
        children: c
      }), jsx("div", {
        className: ON,
        children: u
      })]
    }), null != m ? jsx("div", {
      className: kW,
      children: m
    }) : jsxs(Fragment, {
      children: [jsx("div", {
        className: H$,
        children: p
      }), jsx("div", {
        className: Os,
        children: _
      })]
    }), jsx("div", {
      className: dk,
      children: r
    }), jsx("div", {
      className: pK,
      children: i
    })]
  });
});
let $$_0 = forwardRef(function ({
  leftIcon: e,
  input: t,
  children: r,
  appendedClassName: i,
  dataOnboardingKey: a
}, o) {
  let l = s()(qv, i);
  return jsxs("div", {
    className: l,
    ref: o,
    "data-onboarding-key": a,
    children: [jsx("div", {
      className: eK,
      children: e
    }), jsx("div", {
      className: q1,
      children: t
    }), jsx("div", {
      className: wH,
      children: r
    })]
  });
});
export const MF = $$_0;
export const W7 = $$u1;
export const dL = $$c2;
export const iZ = $$p3;
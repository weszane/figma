import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import a from "classnames";
import { RF, kb, pG, Pv, Od, hF, H5, Y7, ig, by, Pf } from "../figma_app/483189";
var s = a;
let $$l4 = forwardRef(function ({
  left: e,
  right: t,
  appendedClassName: r
}, i) {
  let a = s()(RF, r);
  return jsxs("div", {
    className: a,
    ref: i,
    children: [e ? jsx("div", {
      className: kb,
      children: e
    }) : null, t ? jsx("div", {
      className: pG,
      children: t
    }) : null]
  });
});
let $$d1 = forwardRef(function ({
  children: e,
  appendedClassName: t
}, r) {
  let i = s()(Pv, t);
  return jsx("div", {
    className: i,
    ref: r,
    children: e
  });
});
let $$c3 = forwardRef(function ({
  labelId: e,
  label: t,
  input: r,
  appendedClassName: i
}, a) {
  let l = s()(Od, i);
  return jsxs("div", {
    className: l,
    ref: a,
    children: [null != t ? jsx(_, {
      id: e,
      children: t
    }) : null, jsx("div", {
      className: hF,
      children: r
    })]
  });
});
let $$u2 = forwardRef(function ({
  label: e,
  input: t,
  appendedClassName: r
}, i) {
  let a = s()(H5, r);
  return jsxs("div", {
    className: a,
    ref: i,
    children: [null != e ? jsx(_, {
      children: e
    }) : null, jsx("div", {
      className: hF,
      children: t
    })]
  });
});
let $$p0 = forwardRef(function ({
  label: e,
  leftInput: t,
  rightInput: r,
  appendedClassName: i
}, a) {
  let l = s()(Y7, i);
  return jsxs("div", {
    className: l,
    ref: a,
    children: [jsx(_, {
      children: e
    }), jsx("div", {
      className: ig,
      children: t
    }), jsx("div", {
      className: by,
      children: r
    })]
  });
});
function _(e) {
  return jsx("span", {
    id: e.id,
    "aria-hidden": "true",
    className: Pf,
    "data-non-interactive": !0,
    children: e.children
  });
}
export const Cm = $$p0;
export const TN = $$d1;
export const Zo = $$u2;
export const cS = $$c3;
export const dx = $$l4;
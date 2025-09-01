import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import a from "classnames";
import { r2 } from "../figma_app/479313";
import { Ad, Mw, DE, oO } from "../figma_app/811257";
import { En, yf, ry, VJ, e4, Dn, Ix, Ii, DD, hF } from "../905/42379";
var s = a;
let $$c1 = forwardRef(function ({
  titleTx: e,
  faded: t,
  isEmpty: r,
  appendedClassName: i
}, a) {
  return jsx(Ad, {
    ref: a,
    appendedClassName: s()(En, {
      [yf]: t,
      [ry]: r
    }, i),
    input: jsx(Mw, {
      children: e
    }),
    label: null
  });
});
let $$u3 = forwardRef(function ({
  titleTx: e,
  icon: t,
  faded: r,
  isEmpty: i,
  appendedClassName: a
}, o) {
  return jsx(DE, {
    ref: o,
    appendedClassName: s()(En, VJ, {
      [yf]: r,
      [ry]: i
    }, a),
    input: jsx(Mw, {
      children: e
    }),
    label: null,
    icon: t
  });
});
let $$p2 = forwardRef(function ({
  titleTx: e,
  input: t,
  faded: r,
  isEmpty: i,
  isPanelBodyCollapsedAtom: a,
  appendedClassName: c,
  dataTestId: u
}, p) {
  let _ = s()(e4, {
    [yf]: r,
    [ry]: i
  }, c);
  return jsxs("div", {
    className: _,
    ref: p,
    "data-testid": u,
    "data-non-interactive": !0,
    children: [jsxs("div", {
      className: Dn,
      children: [jsx(r2, {
        isPanelBodyCollapsedAtom: a || null
      }), jsx(Mw, {
        children: e
      })]
    }), jsx("div", {
      className: Ix,
      "data-non-interactive": !0,
      children: t
    })]
  });
});
let $$_0 = forwardRef(function ({
  titleTx: e,
  faded: t,
  isEmpty: r,
  children: i
}, a) {
  return jsx(oO, {
    ref: a,
    appendedClassName: s()(En, {
      [yf]: t,
      [ry]: r
    }),
    input: jsx(Mw, {
      children: e
    }),
    children: i
  });
});
let $$h4 = forwardRef(function ({
  titleTx: e,
  input: t
}, r) {
  return jsxs("div", {
    className: Ii,
    ref: r,
    "data-non-interactive": !0,
    children: [jsx("div", {
      className: DD,
      children: jsx(Mw, {
        children: e
      })
    }), jsx("div", {
      className: hF,
      "data-non-interactive": !0,
      children: t
    })]
  });
});
export const Wv = $$_0;
export const iE = $$c1;
export const mS = $$p2;
export const r = $$u3;
export const s9 = $$h4;
import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import i from "classnames";
import { Mw } from "../figma_app/811257";
import { pG, SP } from "../figma_app/47085";
import { En, VJ, yf, ry } from "../905/42379";
var l = i;
let $$c1 = forwardRef(function ({
  titleTx: e,
  icon: t,
  faded: s,
  isEmpty: n,
  appendedClassName: i,
  onClick: c,
  onMouseDown: u
}, p) {
  return jsx(pG, {
    ref: p,
    onClick: c,
    onMouseDown: u,
    appendedClassName: l()(En, VJ, {
      [yf]: s,
      [ry]: n
    }, i),
    input: jsx(Mw, {
      children: e
    }),
    label: null,
    icon: t
  });
});
let $$u0 = forwardRef(function ({
  titleTx: e,
  faded: t,
  isEmpty: s,
  children: n,
  ...i
}, c) {
  return jsx(SP, {
    dataOnboardingKey: i.dataOnboardingKey,
    onClick: i.onClick,
    ref: c,
    appendedClassName: l()(En, {
      [yf]: t,
      [ry]: s
    }),
    input: jsx(Mw, {
      children: e
    }),
    children: n
  });
});
export const I = $$u0;
export const n = $$c1;
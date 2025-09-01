import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useCallback } from "react";
import { lQ } from "../905/934246";
import s from "classnames";
import { Uz } from "../905/63728";
import { rf } from "../figma_app/806412";
import { j } from "../905/91142";
import { In } from "../905/672640";
import { E as _$$E } from "../905/984674";
import { tf } from "../figma_app/831799";
var o = s;
export let $$h0 = forwardRef(function ({
  variant: e = "secondary",
  disabled: t,
  onClick: i,
  onMouseDown: s,
  onKeyDown: m,
  icon: h,
  recordingKey: g,
  children: f,
  onFocus: _,
  onBlur: A,
  width: y = "hug-contents",
  "data-tooltip": b,
  "data-tooltip-type": v,
  "data-onboarding-key": I,
  "data-tooltip-show-above": E,
  "data-tooltip-max-width": x,
  dataTestId: S,
  ariaLabel: w
}, C) {
  let T = rf(g, "click", i || lQ);
  let k = g ? T : i;
  let R = rf(g, "mousedown", s || lQ);
  let N = g ? R : s;
  let P = useCallback(e => {
    j?.(e) || (m?.(e), e.keyCode === Uz.ESCAPE && e.currentTarget.blur());
  }, [m]);
  return jsxs("button", {
    ref: C,
    "aria-label": w,
    className: function ({
      variant: e,
      width: t,
      children: i
    }) {
      let n = ["button--buttonBase---72nl"];
      switch (e) {
        case "primary":
          n.push("button--buttonPrimary--aSV3W");
          break;
        case "destructive":
          n.push("button--buttonDestructive--Ag192");
          break;
        case "destructive-secondary":
          n.push("button--buttonDestructiveSecondary--nCZkp");
          break;
        case "success":
          n.push("button--buttonSuccess--1znF7");
          break;
        case "inverse":
          n.push("button--buttonInverse--b8YTG");
          break;
        case "text":
          n.push("button--buttonText--Mia-x");
          break;
        case "toolbar-secondary":
          n.push("button--buttonToolbarSecondary--mgdBQ");
          break;
        case "brand-secondary":
          n.push("button--buttonBrandSecondary--UU8iZ");
          break;
        case "link-onbrand":
          n.push("button--buttonLinkOnbrand--YX8iS");
          break;
        case "primary-onbrand":
          n.push("button--buttonPrimaryOnbrand--6QUwl");
          break;
        default:
          n.push("button--buttonSecondary--mWMny");
      }
      switch (i || n.push("button--withNoChildren--F44Yb"), t) {
        case "hug-contents":
          n.push("button--buttonHugContents--utQBt");
          break;
        case "fill-parent":
          n.push("button--buttonFillParent--p-W8Y");
      }
      return o()(n);
    }({
      variant: e,
      width: y,
      children: f
    }),
    "data-onboarding-key": I,
    "data-testid": S,
    "data-tooltip": b,
    "data-tooltip-max-width": x,
    "data-tooltip-show-above": E,
    "data-tooltip-type": v,
    disabled: t,
    onBlur: A,
    onClick: k,
    onFocus: _,
    onKeyDown: P,
    onMouseDown: N,
    children: [h && jsx("div", {
      className: "button--iconContainer--2AGfA",
      children: jsx(In, {
        icon: h
      })
    }), f && jsx(_$$E, {
      fontSize: 11,
      fontWeight: function (e, t) {
        switch (e) {
          case "primary":
          case "destructive":
          case "inverse":
          case "success":
          case "link-onbrand":
          case "primary-onbrand":
            return t ? void 0 : "medium";
          default:
            return "regular";
        }
      }(e, !0),
      truncate: !0,
      children: f
    })]
  });
});
$$h0.displayName = "Button";
export let $$g1 = tf(e => jsx($$h0, {
  ...e
}));
export const $n = $$h0;
export const $z = $$g1;
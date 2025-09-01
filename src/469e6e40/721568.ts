import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useId } from "react";
import { h as _$$h } from "../905/270045";
import { l9 } from "../905/408073";
import { k } from "../905/44647";
import { r as _$$r } from "../905/571562";
import d from "classnames";
import { s as _$$s } from "../cssbuilder/589278";
import { e6 } from "../figma_app/617427";
import { M } from "../905/830372";
import { E } from "../905/984674";
var c = d;
let g = "highlight--container--2-8sY";
let h = "highlight--background--1B0mj";
export function $$x0(e) {
  return jsxs(e6, {
    className: g,
    disabled: e.disabled,
    onClick: e.onClick,
    "aria-label": e["aria-label"],
    innerText: e.innerText,
    trackingProperties: e.trackingProperties,
    children: [e.children, jsx("div", {
      className: h
    }), !e.hideChevron && jsxs(Fragment, {
      children: [jsx(M, {}), jsx(k, {
        className: c()("highlight--chevron--vUd7C", _$$s.ml8.$)
      })]
    })]
  });
}
export function $$b1(e) {
  let t = useId();
  return jsxs(Fragment, {
    children: [jsx(_$$h, {
      htmlFor: t,
      children: e.ariaLabel
    }), jsxs(l9, {
      id: t,
      className: g,
      disabled: e.disabled,
      children: [jsx(E, {
        truncate: !0,
        children: e.children
      }), jsx("div", {
        className: h
      }), jsx(_$$r, {})]
    })]
  });
}
export const n = $$x0;
export const X = $$b1;
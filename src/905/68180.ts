import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "../vendor/723372";
import { r as _$$r } from "../905/577641";
var o = "selection__selectionToggle__wuups";
forwardRef(({
  children: e,
  className: t,
  htmlAttributes: i,
  selected: r = !1,
  style: l,
  variant: d = "bg-selected"
}, c) => jsx("div", {
  ..._$$r,
  ...i,
  style: l,
  className: A({
    selection__selectionHover__NDXuf: "bg-selected" === d,
    [o]: "bg-selected" === d
  }, t),
  "data-fpl-selected": r,
  ref: c,
  children: e
})).displayName = "SelectionHover";
export let $$l0 = forwardRef(({
  children: e,
  className: t,
  htmlAttributes: i,
  selected: r = !1,
  style: l,
  variant: d = "bg-selected",
  ...c
}, u) => jsx("div", {
  ..._$$r,
  ...i,
  ...c,
  style: l,
  className: A({
    [o]: "bg-selected" === d
  }, t),
  "data-fpl-selected": !1 === r ? void 0 : r,
  ref: u,
  children: e
}));
$$l0.displayName = "SelectionToggle";
export const T = $$l0;
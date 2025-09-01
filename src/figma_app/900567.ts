import { jsx } from "react/jsx-runtime";
import i from "classnames";
import { F0, FK, Bx, ll, dj, M, lv, nI } from "../figma_app/731560";
var a = i;
export function $$o0({
  className: e,
  disabled: t,
  isDragging: r,
  children: i,
  "aria-hidden": o
}) {
  return jsx("div", {
    "aria-disabled": t,
    "aria-hidden": o,
    className: a()(F0, {
      [e || ""]: !!e,
      [FK]: t,
      [Bx]: r,
      [ll]: t
    }),
    "data-fullscreen-intercept": !0,
    children: i
  });
}
export function $$l1({
  className: e,
  isHovering: t,
  isSelected: r,
  disabled: i,
  children: o,
  "aria-hidden": l
}) {
  return jsx("div", {
    "aria-disabled": i,
    "aria-hidden": l,
    className: a()({
      [e || ""]: !!e,
      [dj]: !0,
      [M]: t,
      [lv]: r,
      [nI]: i
    }),
    "data-fullscreen-intercept": !0,
    children: o
  });
}
export const J = $$o0;
export const Z = $$l1;
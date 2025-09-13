import { jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { Ay } from "../figma_app/272902";
import s from "classnames";
import { NG } from "../figma_app/709893";
import { s as _$$s } from "../cssbuilder/589278";
import { KindEnum } from "../905/129884";
var o = s;
export function $$u1({
  children: e,
  tooltipText: t
}) {
  let r = useRef(null);
  let a = NG({
    text: t ?? "",
    textRef: r,
    disabled: !t
  });
  return jsx("div", {
    className: _$$s.truncate.$,
    ref: r,
    "data-tooltip-type": t && a && KindEnum.TEXT,
    "data-tooltip": t,
    "data-tooltip-show-immediately": !0,
    children: e
  });
}
export function $$p0({
  as: e,
  text: t,
  className: r,
  elementRef: s,
  ...u
}) {
  let p = useRef(null);
  let _ = Ay(s, p);
  let h = NG({
    text: t,
    textRef: p,
    disabled: !t
  });
  return jsx(e || "div", {
    ...u,
    className: o()(_$$s.truncate.$, r),
    "data-tooltip-type": t && h && KindEnum.TEXT,
    "data-tooltip": t,
    "data-tooltip-show-immediately": !0,
    ref: _,
    children: t
  });
}
export const h = $$p0;
export const q = $$u1;
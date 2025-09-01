import { jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { _ } from "../figma_app/496441";
import s from "classnames";
import { NG } from "../figma_app/709893";
import { s as _$$s } from "../cssbuilder/589278";
import { Ib } from "../905/129884";
var o = s;
export function $$u0({
  href: e,
  children: t,
  tooltipText: i,
  newTab: s
}) {
  let u = useRef(null);
  let p = NG({
    text: i ?? "",
    textRef: u,
    disabled: !i
  });
  return jsx(_, {
    className: o()(_$$s.truncate.$, "library_breadcrumb_link--link--ZmjG0"),
    ref: u,
    href: e,
    htmlAttributes: {
      "data-tooltip-type": i && p && Ib.TEXT,
      "data-tooltip": i,
      "data-tooltip-show-immediately": !0
    },
    newTab: s,
    children: t
  });
}
export const X = $$u0;
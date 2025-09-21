import { jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { LinkPrimitive } from "../figma_app/496441";
import s from "classnames";
import { NG } from "../figma_app/709893";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { KindEnum } from "../905/129884";
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
  return jsx(LinkPrimitive, {
    className: o()(cssBuilderInstance.truncate.$, "library_breadcrumb_link--link--ZmjG0"),
    ref: u,
    href: e,
    htmlAttributes: {
      "data-tooltip-type": i && p && KindEnum.TEXT,
      "data-tooltip": i,
      "data-tooltip-show-immediately": !0
    },
    newTab: s,
    children: t
  });
}
export const X = $$u0;
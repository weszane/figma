import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "../vendor/723372";
import { E } from "../905/632989";
let o = {
  ghost: "icon-button__ghost__1ok6j",
  secondary: "icon-button__secondary__-jfOG",
  primaryCircle: "icon-button__primaryCircle__lapkn"
};
let $$l0 = forwardRef(({
  children: e,
  variant: t = "ghost",
  htmlAttributes: i = {},
  size: r = "md",
  ...l
}, d) => {
  let c = l["aria-label"];
  "data-tooltip" in l ? c = l["data-tooltip"] : "data-tooltip" in i && (c = i["data-tooltip"]);
  let u = l["data-tooltip-type"] || i["data-tooltip-type"] || "text";
  return jsx(E, {
    ...l,
    ref: d,
    htmlAttributes: {
      ...i,
      "data-tooltip": c,
      "data-tooltip-type": u
    },
    className: A("icon-button__iconButton__CTj-- base-icon-button__baseIconButton__TXKzr", o[t], {
      "icon-button__largeSize__jKNM1": "lg" === r
    }),
    children: jsx("span", {
      "aria-hidden": !0,
      className: "icon-button__icon__r6zr3 base-icon-button__icon__FIIFq",
      children: e
    })
  });
});
$$l0.displayName = "IconButton";
export const K = $$l0;

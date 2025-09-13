import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { sx } from "../905/941192";
import { getTextColor, getBackgroundColor } from "../905/499018";
import { KindEnum } from "../905/129884";
import { z } from "../905/916678";
export let $$d0 = forwardRef(function (e, t) {
  let r = e.size;
  return jsx("div", {
    ref: t,
    className: `${z} ${e.className || ""}`,
    "data-tooltip-type": e.hoverText ? KindEnum.TEXT : void 0,
    "data-tooltip": e.hoverText,
    style: sx.$$if(e.size, {
      width: `${r}px`,
      height: `${r}px`,
      lineHeight: `${r}px`
    }).$$if(e.textColor, {
      color: getTextColor(e.textColor)
    }).$$if(e.backgroundColor, {
      backgroundColor: getBackgroundColor(e.backgroundColor)
    }).$,
    children: e.text
  });
});
export const f = $$d0;
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, Suspense } from "react";
import { k } from "../905/443820";
import { usePopoverPrimitive, PopoverPrimitiveContainer } from "../905/691059";
import { ButtonPrimitive } from "../905/632989";
import { sx } from "../905/941192";
let d = "184px";
function c() {
  return jsx("div", {
    style: sx.flex.itemsCenter.justifyCenter.add({
      width: d,
      height: "100px"
    }).$,
    children: jsx(k, {
      size: "sm"
    })
  });
}
export function $$u0({
  setToMaxWidth: e,
  popoverText: t,
  popoverContent: r,
  text: a,
  type: u = "dialog"
}) {
  let [p, _] = useState(!1);
  let {
    getTriggerProps,
    getContainerProps
  } = usePopoverPrimitive({
    isOpen: p,
    onOpenChange: _,
    type: u,
    openOnHover: !0,
    placement: "bottom",
    softDismiss: !0
  });
  return jsxs("div", {
    style: sx.inlineBlock.$,
    children: [jsx(ButtonPrimitive, {
      className: "text_with_popover--textWithPopoverButton--JjWpS",
      style: sx.radiusMedium.$,
      ...getTriggerProps(),
      children: jsx("span", {
        style: sx.underline.add({
          lineHeight: "24px",
          padding: "0px 0.25rem",
          textDecorationColor: "var(--color-text-secondary, var(--fallback-color-text-secondary))",
          textDecorationStyle: "dashed",
          textUnderlineOffset: "4px"
        }).$,
        children: a
      })
    }), jsx(PopoverPrimitiveContainer, {
      "data-preferred-theme": "dark",
      ...getContainerProps({
        style: sx.colorTextOnbrand.colorBgTooltip.fontMedium.radiusMedium.add({
          boxShadow: "var(--elevation-300-tooltip)",
          letterSpacing: "0.055px",
          lineHeight: "var(--body-medium-lineHeight, 16px)",
          maxWidth: d
        }).$$if(e, {
          minWidth: d
        }).$$if(t, {
          padding: "var(--spacer-1, 0.3rem) var(--spacer-2, 0.5rem)"
        }, {
          padding: "var(--spacer-2, 0.5rem)"
        }).$
      }),
      children: jsxs(Suspense, {
        fallback: jsx(c, {}),
        children: [t, r]
      })
    })]
  });
}
export const b = $$u0;
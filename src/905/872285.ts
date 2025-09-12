import { jsx, jsxs } from "react/jsx-runtime";
import { useState, forwardRef } from "react";
import { J } from "../905/614223";
import { A } from "../vendor/723372";
import { E } from "../905/632989";
import { usePopoverPrimitive, PopoverPrimitiveContainer, PopoverPrimitiveArrow } from "../905/691059";
import { defaultComponentAttribute } from "../905/577641";
export function $$c3(e) {
  let [t, i] = useState(!1);
  let {
    getArrowProps,
    getContainerProps,
    getTriggerProps
  } = usePopoverPrimitive({
    ...e,
    isOpen: t,
    onOpenChange: i,
    type: "tooltip",
    arrowPadding: 5,
    openOnHover: !1
  });
  return {
    isOpen: t,
    toggle: () => i(e => !e),
    getTriggerProps,
    getArrowProps,
    getContainerProps
  };
}
export let $$u2 = forwardRef(({
  htmlAttributes: e,
  children: t,
  ...i
}, r) => jsx(E, {
  ...i,
  ref: r,
  htmlAttributes: e,
  className: "toggle-tip__iconTriggerButton__IQcG0",
  children: jsx("span", {
    "aria-hidden": !0,
    className: "toggle-tip__icon__z9TWq",
    children: t
  })
}));
$$u2.displayName = "ToggleTip.IconTrigger";
export let $$p0 = forwardRef(({
  manager: e,
  children: t,
  htmlAttributes: i,
  ...r
}, s) => jsx(J, {
  mode: "dark",
  children: jsxs(PopoverPrimitiveContainer, {
    ...defaultComponentAttribute,
    ...i,
    ...r,
    ref: s,
    ...e.getContainerProps(),
    className: "toggle-tip__container__IjXj-",
    children: [jsx(PopoverPrimitiveArrow, {
      ...e.getArrowProps(),
      width: 14,
      height: 7,
      className: "toggle-tip__arrow__Ve94t"
    }), t]
  })
}));
$$p0.displayName = "ToggleTip.Container";
export let $$m1 = forwardRef(({
  children: e,
  iconLead: t,
  htmlAttributes: i,
  ...r
}, o) => jsx(J, {
  mode: "dark",
  children: jsxs("div", {
    ...defaultComponentAttribute,
    ...i,
    ...r,
    ref: o,
    className: A("toggle-tip__content__M80HZ", {
      "toggle-tip__hasIconLead__d-j37": !!t
    }),
    style: {
      maxWidth: r.maxWidth ?? "180px"
    },
    children: [t && jsx("span", {
      className: "toggle-tip__iconLead__mQE-L",
      children: t
    }), jsx("span", {
      className: "toggle-tip__text__Lo6VS",
      children: e
    })]
  })
}));
$$m1.displayName = "ToggleTip.Content";
forwardRef(({
  htmlAttributes: e,
  children: t,
  ...i
}, r) => jsx(J, {
  mode: "dark",
  children: jsx("span", {
    ...i,
    ...defaultComponentAttribute,
    ...e,
    ref: r,
    className: "toggle-tip__shortcutText__M7FjA",
    children: t
  })
})).displayName = "ToggleTip.Shortcut";
forwardRef(({
  htmlAttributes: e,
  children: t,
  ...i
}, r) => jsx(J, {
  mode: "dark",
  children: jsx("div", {
    ...i,
    ...defaultComponentAttribute,
    ...e,
    ref: r,
    className: "toggle-tip__trail__sdb9G",
    children: t
  })
})).displayName = "ToggleTip.Trail";
export const mc = $$p0;
export const UC = $$m1;
export const Uj = $$u2;
export const iv = $$c3;
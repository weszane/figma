import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { ButtonPrimitive } from "../905/632989";
import { r as _$$r } from "../905/571562";
import { getThemeContextOrDefault } from "../905/158740";
function l() {
  return jsx("svg", {
    width: "8",
    height: "8",
    viewBox: "0 0 8 8",
    children: jsx("path", {
      d: "M.646 3.354l.708-.708L4 5.293l2.646-2.647.708.708L4 6.707.646 3.354z",
      fillRule: "nonzero",
      fillOpacity: "1",
      fill: "var(--select-icon)",
      stroke: "none"
    })
  });
}
export let $$d0 = forwardRef(({
  children: e,
  lead: t,
  ...i
}, r) => {
  let {
    version
  } = getThemeContextOrDefault();
  return jsxs(ButtonPrimitive, {
    className: "fake-select--fakeSelect--ocszf",
    ref: r,
    ...i,
    children: [t && jsx("span", {
      children: t
    }), jsx("span", {
      className: "fake-select--content--1qWmi",
      children: e
    }), jsx("span", {
      "aria-hidden": !0,
      children: "ui3" === version ? jsx(_$$r, {}) : jsx(l, {})
    })]
  });
});
export const e = $$d0;
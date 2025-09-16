import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useMemo } from "react";
import { A as _$$A } from "../vendor/723372";
import { IconButton } from "../905/443068";
import { L } from "../905/704296";
import { useFplStrings } from "../figma_app/415899";
import { defaultComponentAttribute } from "../905/577641";
import { sW, GS, L4 } from "../905/417626";
import { y as _$$y } from "../905/842987";
import { zr, zc, Qs, YE } from "../905/193774";
export let $$m0 = forwardRef(({
  children: e,
  onDismiss: t,
  icon: i,
  type: m,
  variant: h = "default",
  htmlAttributes: g,
  ...f
}, _) => {
  let A = useFplStrings("dismiss");
  let y = useMemo(() => ({
    variant: h
  }), [h]);
  let b = sW(h, m);
  return jsxs("div", {
    ref: _,
    className: _$$A(zr, GS[h], L4[m]),
    ...defaultComponentAttribute,
    ...g,
    ...f,
    children: [null === i ? null : jsx("div", {
      className: zc,
      children: void 0 === i ? jsx(b, {}) : i
    }), jsx(_$$y.Provider, {
      value: y,
      children: jsx("div", {
        className: Qs,
        children: e
      })
    }), t && jsx("div", {
      className: YE,
      children: jsx(IconButton, {
        "aria-label": A,
        onClick: t,
        children: jsx(L, {})
      })
    })]
  });
});
$$m0.displayName = "Banner.Root";
export const b = $$m0;
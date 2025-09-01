import { jsx, jsxs } from "react/jsx-runtime";
import { createContext, useMemo, forwardRef } from "react";
import { J } from "../905/614223";
import { A } from "../vendor/723372";
import { M } from "../905/749786";
import { fP, mc, i3 } from "../905/691059";
import { hO, qr, PM } from "../905/453984";
let c = createContext("primary");
export function $$u1(e) {
  let {
    getArrowProps,
    getContainerProps,
    getTriggerProps
  } = fP({
    type: "tutorial",
    softDismiss: !1,
    placement: "bottom-end",
    arrowPadding: 5,
    ...e
  });
  return useMemo(() => ({
    manager: {
      getArrowProps,
      getContainerProps,
      isOpen: e.isOpen,
      setOpen: e.onOpenChange
    },
    getTriggerProps
  }), [getArrowProps, getContainerProps, getTriggerProps, e.isOpen, e.onOpenChange]);
}
export function $$p0({
  children: e,
  manager: t,
  variant: r = "primary"
}) {
  let {
    getArrowProps,
    getContainerProps,
    setOpen
  } = t;
  return jsx(c.Provider, {
    value: r,
    children: jsx(mc, {
      ...getContainerProps(),
      children: jsx(J, {
        mode: void 0,
        children: jsxs("div", {
          className: A({
            [hO]: "strong" === r
          }),
          children: [jsx(i3, {
            ...getArrowProps()
          }), jsx(M.Provider, {
            value: {
              close: () => setOpen(!1)
            },
            children: e
          })]
        })
      })
    })
  });
}
export function $$_2({
  children: e
}) {
  return jsx("div", {
    className: qr,
    children: e
  });
}
$$p0.displayName = "Callout.Root";
$$_2.displayName = "Callout.Footer";
forwardRef(({
  children: e
}, t) => jsx("div", {
  ref: t,
  className: PM,
  children: e
})).displayName = "Callout.Step";
export const bL = $$p0;
export const gR = $$u1;
export const wi = $$_2;
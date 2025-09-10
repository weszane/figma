import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "../vendor/723372";
import { u } from "../905/65923";
import { lg, dialogTriggerButton, i as _$$i, icon } from "../905/820710";
let l = {
  md: void 0,
  lg: lg
};
let $$$$d0 = forwardRef(({
  children: e,
  size: t = "md",
  variant: i = "ghost",
  htmlAttributes: r,
  ...d
}, c) => jsx(u, {
  ...d,
  ref: c,
  htmlAttributes: {
    ...r,
    "data-tooltip": r?.["data-tooltip"] ?? d["aria-label"],
    "data-tooltip-type": r?.["data-tooltip-type"] ?? "text"
  },
  "aria-haspopup": "aria-haspopup" in d ? d["aria-haspopup"] : "dialog",
  className: A(dialogTriggerButton, _$$i, l[t]),
  children: jsx("span", {
    className: icon,
    "aria-hidden": !0,
    children: e
  })
}));
$$$$d0.displayName = "DialogTriggerButton";
export const d = $$$$d0;

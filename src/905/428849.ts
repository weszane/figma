import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "../vendor/723372";
import { rN, Jo } from "../905/872033";
import { r as _$$r } from "../905/571562";
import { PopupButtonPrimitive } from "../905/65923";
import { dialogTriggerButton, icon } from "../905/820710";
let c = forwardRef(({
  variant: e,
  fill: t,
  ...i
}, r) => jsx(rN, {
  ...i,
  ref: r,
  className: A("button-group__buttonGroup__p1E0s", {
    "button-group__buttonGroupSecondary__H-NHy": "secondary" === e,
    "button-group__fill__G77-z": t
  })
}));
c.displayName = "ButtonGroup";
let u = forwardRef(({
  children: e,
  onClick: t,
  variant: i,
  htmlAttributes: r,
  size: c = "md",
  ...u
}, p) => jsx(PopupButtonPrimitive, {
  ...u,
  ref: Jo(p),
  onClick: t,
  "aria-haspopup": u["aria-haspopup"] ?? "menu",
  htmlAttributes: {
    ...r,
    "data-tooltip": r?.["data-tooltip"] ?? u["aria-label"],
    "data-tooltip-type": r?.["data-tooltip-type"] ?? "text"
  },
  className: A("button-group__triggerButton__bxStO", dialogTriggerButton, d[i ?? "ghost"], {
    "button-group__largeSize__tou-J": "lg" === c
  }),
  children: jsx("span", {
    className: A("button-group__triggerButtonIcon__UZhip", icon),
    "aria-hidden": !0,
    children: e ?? jsx(_$$r, {})
  })
}));
u.displayName = "SplitButton.Trigger";
export let $$p0 = Object.assign(c, {
  Trigger: u
});
export const e = $$p0;
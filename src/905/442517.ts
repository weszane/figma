import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "../vendor/723372";
import { F } from "../905/549791";
import { r as _$$r } from "../905/577641";
export let $$l0 = forwardRef(({
  className: e,
  htmlAttributes: t,
  ...i
}, r) => jsxs("span", {
  ..._$$r,
  className: A("manually-labeled-switch__root__sp5fN", e),
  "data-disabled": !!i.disabled || void 0,
  children: [jsx(F, {
    ...i,
    ref: r,
    htmlAttributes: t,
    className: "manually-labeled-switch__checkbox__-pgR9"
  }), jsx("span", {
    className: "manually-labeled-switch__visuals__g13eB"
  })]
}));
$$l0.displayName = "ManuallyLabeledSwitch";
export const v = $$l0;
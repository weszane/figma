import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "../vendor/723372";
import { F } from "../905/549791";
import { l as _$$l } from "../905/479687";
import { w } from "../905/442596";
import { r as _$$r } from "../905/577641";
export let $$c0 = forwardRef(({
  muted: e,
  variant: t,
  ...i
}, r) => jsxs("span", {
  ..._$$r,
  className: "manually-labeled-checkbox__root__Mo9F-",
  "data-disabled": !!i.disabled || void 0,
  children: [jsx(F, {
    ref: r,
    ...i,
    className: A("manually-labeled-checkbox__checkbox__qNblJ", {
      "manually-labeled-checkbox__muted__kzSni": e || "muted" === t
    })
  }), jsxs("span", {
    className: "manually-labeled-checkbox__visuals__Be3AE",
    children: [jsx(w, {
      className: "manually-labeled-checkbox__iconMixed__B-Yp4"
    }), jsx(_$$l, {
      className: "manually-labeled-checkbox__iconCheck__tUMFi"
    })]
  })]
}));
$$c0.displayName = "ManuallyLabeledCheckbox";
export const W = $$c0;
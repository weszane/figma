import { jsx } from "react/jsx-runtime";
import { forwardRef, useId, useMemo } from "react";
import { W } from "../905/458642";
import { r as _$$r } from "../905/577641";
import { r as _$$r2 } from "../905/5729";
export let $$l0 = forwardRef(function ({
  autofocus: e = !1,
  htmlAttributes: t,
  onChange: i,
  recordingKey: l,
  readonly: d,
  ...c
}, u) {
  let p = useId();
  let {
    onChange
  } = W({
    disabled: d,
    onChange: i,
    recordingKey: l,
    readonly: d,
    ...c
  });
  let {
    value
  } = c;
  let g = useMemo(() => ({
    name: p,
    value: value ?? "",
    onChange,
    readonlyGroup: d,
    autofocus: e
  }), [p, onChange, value, d, e]);
  return jsx("fieldset", {
    ...t,
    ...c,
    ..._$$r,
    ref: u,
    role: "radiogroup",
    "aria-readonly": d || void 0,
    "aria-disabled": d || void 0,
    "aria-labelledby": c["aria-labelledby"] ?? void 0,
    className: c.className,
    children: jsx(_$$r2.Provider, {
      value: g,
      children: c.children
    })
  });
});
$$l0.displayName = "RadioPrimitive.Root";
export const b = $$l0;
import { jsx } from "react/jsx-runtime";
import { forwardRef, useContext, useCallback, useLayoutEffect } from "react";
import { M } from "../905/581092";
import { r as _$$r } from "../905/5729";
export let $$o0 = forwardRef(function ({
  htmlAttributes: e,
  id: t,
  value: i,
  className: o,
  readonly: l,
  ...d
}, c) {
  let u = M(c);
  let {
    name,
    value,
    onChange,
    readonlyGroup,
    autofocus
  } = useContext(_$$r);
  let _ = readonlyGroup || l || void 0;
  let A = useCallback(e => {
    _ || onChange(e.target.value, {
      event: e
    });
  }, [_, onChange]);
  let y = value === i;
  useLayoutEffect(() => {
    u.current.autofocus = y && autofocus;
  }, [u, y, autofocus]);
  return jsx("input", {
    ...e,
    ref: u,
    "aria-readonly": _,
    "aria-disabled": _,
    checked: value === i,
    onKeyDown: e => {
      "Escape" === e.key && e.currentTarget.blur();
    },
    className: o,
    id: t,
    name,
    onChange: A,
    type: "radio",
    value: i,
    ...d
  });
});
$$o0.displayName = "RadioPrimitive.Option";
export const c = $$o0;
import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "../vendor/723372";
import { Z } from "../905/751750";
import { Ay, q9 } from "../905/865071";
import { e as _$$e } from "../905/786321";
import { label, i as _$$i } from "../905/620622";
export let $$c0 = forwardRef(({
  className: e,
  htmlFor: t,
  variant: i = "primary",
  ...r
}, c) => {
  let u = Z();
  let p = t ?? _$$e(u);
  return jsx(Ay, {
    ...r,
    ref: c,
    className: A(label, _$$i, e),
    htmlFor: p
  });
});
$$c0.displayName = "Label";
export let $$u1 = forwardRef(({
  htmlFor: e,
  ...t
}, i) => {
  let r = Z();
  let a = e ?? _$$e(r);
  return jsx(q9, {
    ...t,
    ref: i,
    htmlFor: a
  });
});
$$u1.displayName = "HiddenLabel";
export const J = $$c0;
export const h = $$u1;
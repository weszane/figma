import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { V } from "../905/21985";
import { e as _$$e, u as _$$u } from "../905/786321";
import { q } from "../905/751750";
import { b as _$$b, c as _$$c } from "../905/618904";
import { UX, zr, h_ } from "../905/434007";
export let $$c0 = forwardRef(function ({
  legend: e,
  children: t,
  ...i
}, r) {
  return jsxs(_$$b, {
    ref: r,
    ...i,
    children: [e, jsx("div", {
      className: UX,
      children: t
    })]
  });
});
$$c0.displayName = "RadioInput.Root";
export let $$u1 = forwardRef(function ({
  label: e,
  children: t,
  htmlAttributes: i,
  ...r
}, c) {
  let u = !!t;
  let [p, m] = q();
  let h = _$$e(p);
  let g = u ? _$$u(p) : void 0;
  return jsx(m, {
    value: p,
    children: jsxs("div", {
      className: zr,
      children: [jsx(_$$c, {
        id: h,
        ...r,
        htmlAttributes: i,
        "aria-describedby": g,
        ref: c
      }), e, u && jsx(V, {
        className: h_,
        children: t
      })]
    })
  });
});
$$u1.displayName = "RadioInput.Option";
export const b = $$c0;
export const c = $$u1;
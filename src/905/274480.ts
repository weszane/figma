import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "../vendor/723372";
import { V } from "../905/21985";
import { e as _$$e, u as _$$u } from "../905/786321";
import { q } from "../905/751750";
import { W } from "../905/909715";
export let $$c0 = forwardRef(({
  label: e,
  className: t,
  children: i,
  htmlAttributes: r,
  ...c
}, u) => {
  let p = !!i;
  let [m, h] = q();
  let g = _$$e(m);
  let f = p ? _$$u(m) : void 0;
  return jsx(h, {
    value: m,
    children: jsxs("div", {
      className: A("checkbox__root__L-PwP", t),
      children: [jsx(W, {
        ...c,
        id: g,
        ref: u,
        htmlAttributes: r,
        "aria-describedby": f
      }), e, p && jsx(V, {
        className: "checkbox__description__kr0Zj",
        children: i
      })]
    })
  });
});
$$c0.displayName = "Checkbox";
export const S = $$c0;
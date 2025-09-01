import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { V } from "../905/21985";
import { e as _$$e, u as _$$u } from "../905/786321";
import { q } from "../905/751750";
import { v } from "../905/442517";
export let $$$$d0 = forwardRef(({
  label: e,
  children: t,
  htmlAttributes: i,
  ...r
}, d) => {
  let c = !!t;
  let [u, p] = q();
  let m = _$$e(u);
  let h = c ? _$$u(u) : void 0;
  return jsx(p, {
    value: u,
    children: jsxs("div", {
      className: "switch__root__K7xJr",
      children: [jsx(v, {
        ...r,
        id: m,
        htmlAttributes: i,
        ref: d,
        "aria-describedby": h
      }), e, c && jsx(V, {
        className: "switch__description__I3Yn2",
        children: t
      })]
    })
  });
});
$$$$d0.displayName = "Switch";
export const d = $$$$d0;
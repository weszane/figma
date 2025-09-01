import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "../vendor/723372";
import { _ } from "../figma_app/496441";
import { regularSize, wideSize, largeSize, largeWideSize, button, r as _$$r, hasIcon, buttonText, buttonContent, icon } from "../905/608793";
import { n as _$$n } from "../905/198890";
let l = forwardRef(({
  children: e,
  htmlAttributes: t,
  iconPrefix: i,
  variant: r = "primary",
  size: l = "md",
  width: c = "hug",
  ...u
}, p) => {
  let m = "md" === l ? "hug" === c ? regularSize : wideSize : "hug" === c ? largeSize : largeWideSize;
  return jsx(_, {
    htmlAttributes: t,
    ...u,
    ref: p,
    "data-show-focus": !0,
    className: A("link-button__link__zeZSY", button, _$$r, m, {
      [hasIcon]: !!i
    }),
    children: jsxs("span", {
      className: buttonText,
      children: [i && jsx(d, {
        children: i
      }), jsx("span", {
        className: buttonContent,
        children: e
      })]
    })
  });
});
function d({
  children: e
}) {
  return jsx("span", {
    "aria-hidden": !0,
    className: icon,
    children: e
  });
}
l.displayName = "LinkButton";
export let $$u0 = Object.assign(forwardRef((e, t) => jsx(_, {
  ...e,
  ref: t,
  className: _$$n
})), {
  Button: l
});
$$u0.displayName = "Link";
export const N = $$u0;
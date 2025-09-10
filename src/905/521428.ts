import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "src/vendor/723372";
import { E } from "src/905/632989";
import { n as _$$n } from "src/905/198890";
import { icon, shortcut, button, t as _$$t, r as _$$r, buttonText, hasIcon, buttonContent } from "src/905/608793";
function d({
  children: e
}) {
  return jsx("span", {
    "aria-hidden": !0,
    className: icon,
    children: e
  });
}
function c(e) {
  return jsx("span", {
    className: shortcut,
    ...e
  });
}
d.displayName = "Button.Icon";
c.displayName = "Button.Shortcut";
let u = forwardRef(function ({
  className: e,
  ...t
}, i) {
  return jsx(E, {
    ref: i,
    className: A(_$$n, e),
    ...t
  });
});
function p(e, t) {
  let i = forwardRef(function ({
    children: e,
    iconPrefix: i,
    variant: r = "primary",
    ...o
  }, c) {
    return jsx(E, {
      className: A(button, _$$t, _$$r),
      ...o,
      ref: c,
      children: jsxs("span", {
        className: A(buttonText, !!i && hasIcon),
        children: [i && jsx(d, {
          children: i
        }), jsx("span", {
          className: buttonContent,
          children: e
        })]
      })
    });
  });
  i.displayName = e;
  return i;
}
u.displayName = "Button.Link";
let $$m0 = Object.assign(p("Button", "regularSize"), {
  Icon: d,
  Shortcut: c,
  Link: u
});
let $$h3 = Object.assign(p("ButtonLarge", "largeSize"), {
  Icon: d
});
let $$g1 = Object.assign(p("ButtonWide", "wideSize"), {
  Icon: d
});
let $$f2 = Object.assign(p("ButtonLargeWide", "largeWideSize"), {
  Icon: d
});
export const $n = $$m0;
export const IK = $$g1;
export const Pw = $$f2;
export const WW = $$h3;

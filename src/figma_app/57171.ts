import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "../vendor/723372";
import { bL as _$$bL, bN, JU as _$$JU, X0 as _$$X, UC as _$$UC, YJ as _$$YJ } from "../figma_app/322555";
import { $ } from "../905/61417";
import { O } from "../905/969533";
import { k } from "../905/44647";
import { r as _$$r } from "../905/577641";
import { sQ, dH, Xk, Jt, tU, G0, SO, DW, WO, Z4, Ci, xS, P8, Mm, rY, lm } from "../905/81200";
export let $$p5 = forwardRef((e, t) => jsx(_$$bL, {
  ...e,
  className: A(sQ, {
    [dH]: "fill" === e.height
  }),
  ref: t
}));
$$p5.displayName = "Collapse.Root";
export let $$_3 = forwardRef(({
  size: e = "md",
  width: t = "fill",
  variant: r = "default",
  htmlAttributes: i,
  ...s
}, o) => jsx("div", {
  className: A(Xk, {
    [Jt]: "md" === e,
    [tU]: "lg" === e,
    [G0]: "fit" === t,
    [SO]: "fill" === t,
    [DW]: "leftPanel" === r
  }),
  ref: o,
  ..._$$r,
  ...i,
  ...s
}));
$$_3.displayName = "Collapse.Header";
export let $$h0 = forwardRef(({
  children: e,
  size: t = "md",
  ...r
}, i) => {
  let p = $(bN, "CollapseContext", "Collapse.Root");
  return jsxs(_$$JU, {
    ..._$$r,
    ...r,
    ref: i,
    className: WO,
    children: [jsx("span", {
      className: Z4,
      children: p.isOpen ? jsx(O, {
        "aria-hidden": !0
      }) : jsx(k, {
        "aria-hidden": !0
      })
    }), jsx("span", {
      className: A(Ci, {
        [xS]: "md" === t,
        [P8]: "lg" === t
      }),
      children: e
    })]
  });
});
$$h0.displayName = "Collapse.Label";
export let $$m2 = forwardRef((e, t) => jsx(_$$X, {
  className: Mm,
  ...e,
  ref: t,
  ..._$$r
}));
$$m2.displayName = "Collapse.Trail";
export let $$g1 = forwardRef((e, t) => jsx(_$$UC, {
  className: rY,
  ref: t,
  ..._$$r,
  ...e
}));
$$g1.displayName = "Collapse.Content";
export let $$f4 = forwardRef((e, t) => jsx(_$$YJ, {
  className: lm,
  ref: t,
  ..._$$r,
  ...e
}));
$$f4.displayName = "Collapse.Group";
export const JU = $$h0;
export const UC = $$g1;
export const X0 = $$m2;
export const Y9 = $$_3;
export const YJ = $$f4;
export const bL = $$p5;
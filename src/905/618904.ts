import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useContext } from "react";
import { DP } from "../905/158740";
import { r as _$$r } from "../905/5729";
import { b as _$$b } from "../905/22449";
import { c as _$$c } from "../905/34525";
import { G8, wO, hO, xS } from "../905/434007";
let $$c = {
  ui2: {
    viewbox: "0 0 32 32",
    center: "16",
    outerRadius: "6",
    innerRadius: "3"
  },
  ui3: {
    viewbox: "0 0 24 24",
    center: "12",
    outerRadius: "8",
    innerRadius: "4"
  }
};
let $$u0 = forwardRef(({
  htmlAttributes: e,
  "aria-labelledby": t,
  ...i
}, r) => jsx(_$$b, {
  className: G8,
  ref: r,
  htmlAttributes: {
    ...e
  },
  ...i,
  "aria-labelledby": t
}));
$$u0.displayName = "ManuallyLabeledRadio.Root";
export let $$p1 = forwardRef((e, t) => {
  let {
    readonlyGroup
  } = useContext(_$$r);
  let a = readonlyGroup || e.readonly;
  return jsxs("span", {
    className: wO,
    "data-disabled": a || void 0,
    children: [jsx(_$$c, {
      className: hO,
      ref: t,
      ...e
    }), jsx(m, {})]
  });
});
function m() {
  let {
    version
  } = DP();
  let {
    outerRadius,
    innerRadius,
    viewbox,
    center
  } = $$c[version];
  return jsxs("svg", {
    className: xS,
    viewBox: viewbox,
    fill: "none",
    "aria-hidden": !0,
    children: [jsx("circle", {
      r: outerRadius,
      cx: center,
      cy: center,
      stroke: "var(--radio-stroke-color)",
      strokeWidth: "var(--radio-stroke-width)"
    }), jsx("circle", {
      r: innerRadius,
      cx: center,
      cy: center,
      fill: "var(--radio-fill)"
    })]
  });
}
$$p1.displayName = "ManuallyLabeledRadioOption.Option";
m.displayName = "RadioInput.RadioIcon";
export const b = $$u0;
export const c = $$p1;
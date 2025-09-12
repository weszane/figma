import { jsx, jsxs } from "react/jsx-runtime";
import { memo, forwardRef } from "react";
import { getThemeContextOrDefault } from "../905/158740";
import { A as _$$A } from "../vendor/723372";
import { T } from "../905/745591";
import { x } from "../905/404412";
import { useFplStrings } from "../figma_app/415899";
import { s as _$$s } from "../905/536340";
var n = {};
require.d(n, {
  lg: () => f,
  md: () => g,
  root: () => _,
  rotate: () => A,
  sm: () => h,
  spinner: () => y
});
let d = memo(function (e) {
  return jsx("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M10.778 3.842a5 5 0 0 0-2.279-.817A.54.54 0 0 1 8 2.5a.47.47 0 0 1 .5-.48A6 6 0 1 1 2.02 8.5.47.47 0 0 1 2.5 8c.276 0 .497.224.525.499a5 5 0 1 0 7.753-4.657",
      clipRule: "evenodd"
    })
  });
});
let c = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M16.445 5.348A8 8 0 0 0 12.5 4.016.525.525 0 0 1 12 3.5a.48.48 0 0 1 .5-.486A9 9 0 1 1 3.014 12.5.48.48 0 0 1 3.5 12c.276 0 .498.224.516.5a8 8 0 1 0 12.429-7.152",
      clipRule: "evenodd"
    })
  });
});
var h = "loading-spinner__sm__zIhMd";
var g = "loading-spinner__md__Es0gp";
var f = "loading-spinner__lg__0eM5K";
var _ = "loading-spinner__root__r3CAO";
var A = "loading-spinner__rotate__fG7El";
var y = "loading-spinner__spinner__-BOPO";
export let $$b0 = forwardRef(({
  loadingText: e,
  size: t = "md",
  htmlAttributes: i,
  ...a
}, d) => {
  let c = useFplStrings("loading");
  let {
    version
  } = getThemeContextOrDefault();
  let h = v[t];
  return jsxs(T, {
    className: _$$A(_, n[t]),
    ref: d,
    htmlAttributes: i,
    ...a,
    children: [jsx("div", {
      className: _$$s,
      children: e ?? c
    }), "ui3" === version ? jsx(h, {
      className: y,
      "aria-hidden": !0
    }) : jsx(I, {
      className: y,
      "aria-hidden": !0
    })]
  });
});
$$b0.displayName = "LoadingSpinner";
let v = {
  sm: d,
  md: x,
  lg: c
};
function I(e) {
  return jsx("svg", {
    ...e,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    children: jsx("path", {
      d: "M8 1c-1.384 0-2.738.41-3.889 1.18-1.151.769-2.048 1.862-2.578 3.141-.53 1.28-.669 2.687-.398 4.045.27 1.357.936 2.605 1.915 3.584.98.979 2.227 1.645 3.584 1.916 1.358.27 2.766.131 4.045-.399 1.279-.53 2.372-1.427 3.141-2.578C14.59 10.738 15 9.384 15 8h1c0 1.582-.47 3.129-1.348 4.445-.88 1.315-2.129 2.34-3.59 2.946-1.462.606-3.07.764-4.623.455-1.552-.308-2.977-1.07-4.096-2.19-1.119-1.118-1.88-2.543-2.19-4.095C-.154 8.009.004 6.4.61 4.939c.605-1.462 1.63-2.712 2.946-3.59C4.871.468 6.418 0 8 0v1z",
      fillRule: "evenodd",
      fillOpacity: "1",
      fill: "var(--color-icon)",
      stroke: "none"
    })
  });
}
export const k = $$b0;
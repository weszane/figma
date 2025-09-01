import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { getFeatureFlags } from "../905/601108";
export function $$a0({
  children: e
}) {
  return getFeatureFlags().ds_extended_collections ? jsxs("div", {
    className: "x1n2onr6 x1quhyk7 x1ghs5zp xmkeg23 x1y0btm7 xaqgqki x1sxf85j x1e41zw8",
    children: [e, jsx($$s1, {})]
  }) : jsx(Fragment, {
    children: e
  });
}
export function $$s1() {
  return jsxs("div", {
    className: "x10l6tqk xapn4pl xzkiiv0 x13vifvy x3m8u43 x47corl",
    children: [jsx("div", {
      className: "x1i1rx1s x1prlgsr x1nj7uno x10l6tqk x1whwws9 xu96u03 xxnzxcr"
    }), jsx("div", {
      className: "x1fsd2vl x170jfvy xzuxmkn x10l6tqk xu96u03 x1ey2m1c xmkeg23 x1y0btm7 x15ahk01 xzg0hy3 x1v8p93f xhe5wa1"
    }), jsx("div", {
      className: "x1and0y0 xjm9jq1 x1nj7uno x10l6tqk x114m4xm x1ey2m1c xxnzxcr"
    })]
  });
}
export const G = $$a0;
export const m = $$s1;
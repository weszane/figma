import { jsxs, jsx } from "react/jsx-runtime";
import { y1 } from "../figma_app/492908";
import { xk } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { N } from "../figma_app/469468";
import { s as _$$s } from "../cssbuilder/589278";
import { m as _$$m } from "../5430/656485";
import { Qp, JR, Wi } from "../figma_app/162641";
import { dxy } from "../figma_app/27776";
function u() {
  return jsxs("div", {
    className: "resource_loading_row--loadingRow--o1YwH",
    "data-testid": "resource-loading-row",
    children: [jsx(Qp, {
      className: "resource_loading_row--loadingRowImage--KGDsz",
      animationType: JR.NO_SHIMMER
    }), jsxs("div", {
      className: "resource_loading_row--loadingRowMeta--T19Be",
      children: [jsx(Wi, {
        className: "resource_loading_row--loadingTitleText--qN-3G",
        animationType: JR.NO_SHIMMER
      }), jsx(Wi, {
        className: "resource_loading_row--loadingSubTitleText--26zTk",
        animationType: JR.NO_SHIMMER
      })]
    })]
  });
}
let _ = {
  twoColumn: {
    display: "xrvj5dj",
    gridTemplateColumns: "xnby9oq",
    columnGap: "xjbmbcv",
    rowGap: "x3pnbk8",
    $$css: !0
  },
  oneColumn: {
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    gap: "x167g77z",
    rowGap: null,
    columnGap: null,
    $$css: !0
  }
};
export function $$p0({
  plugins: e,
  onIntersectionChange: t,
  isOrgTeamBrowsing: r,
  isLoading: d,
  loadingRowCount: p = 10,
  layoutV1: h = "oneColumn"
}) {
  let x = !!getFeatureFlags().cmty_release_plugin_row_v2;
  let f = N(`(max-width: ${dxy})`);
  let y = x ? f ? "oneColumn" : "twoColumn" : h;
  return jsx("div", {
    className: _$$s.wFull.$,
    "data-testid": "plugin-list",
    children: jsx("div", {
      ...xk("twoColumn" === y ? _.twoColumn : x ? _.oneColumn : void 0),
      children: d ? y1(p).map(e => jsx(u, {}, e)) : e.map((e, i) => jsx(_$$m, {
        resource: e,
        onIntersectionChange: r => t(e, r.isIntersecting),
        isOrgTeamBrowsing: r,
        index: i,
        layout: y
      }, `plugin-row-${e.id}`))
    })
  });
}
export const M = $$p0;
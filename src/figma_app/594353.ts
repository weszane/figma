import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import a from "classnames";
import { UK } from "../figma_app/740163";
import { J2 } from "../figma_app/84367";
import { my } from "../figma_app/811257";
var s = a;
export let $$c0 = forwardRef(function ({
  leftLabel: e,
  leftInput: t,
  rightLabel: r,
  rightInput: i,
  appendedClassName: a,
  ...o
}, l) {
  return jsxs("div", {
    className: s()("ui3_slides_rows--ui3SlidesTwoInputRow--z1gLz ui3_rows--_row--DnZFk ui3_rows--_grid--cP2Wu", a),
    ref: l,
    ...o,
    "data-non-interactive": !0,
    children: [null != e ? jsx(u, {
      children: e
    }) : null, jsx("div", {
      className: "ui3_slides_rows--ui3SlidesRowInput1--w4RUc",
      "data-non-interactive": !0,
      children: t
    }), null != r ? jsx(p, {
      children: r
    }) : null, jsx("div", {
      className: "ui3_slides_rows--ui3SlidesRowInput2--YL2N7",
      "data-non-interactive": !0,
      children: i
    })]
  });
});
function u({
  children: e,
  alwaysShowLabel: t
}) {
  return J2(UK().showPropertyLabels) || t ? jsx("span", {
    "aria-hidden": "true",
    className: "ui3_slides_rows--ui3SlidesRowLabelFirst--XzGgY ui3_rows--_ui3OrderedRowLabel--zh7nh ui3_rows--_ui3RowLabelBase--wNPq0",
    "data-non-interactive": !0,
    children: e
  }) : jsx(my, {});
}
function p({
  children: e
}) {
  return J2(UK().showPropertyLabels) ? jsx("span", {
    "aria-hidden": "true",
    className: "ui3_slides_rows--ui3SlidesRowLabelSecond--AtE-a ui3_rows--_ui3OrderedRowLabel--zh7nh ui3_rows--_ui3RowLabelBase--wNPq0",
    "data-non-interactive": !0,
    children: e
  }) : jsx(my, {});
}
export const g = $$c0;
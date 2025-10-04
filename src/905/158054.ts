import { jsx, jsxs } from "react/jsx-runtime";
import { Label } from "../905/270045";
import { LabelPrimitive } from "../905/865071";
import { getFeatureFlags } from "../905/601108";
import o from "classnames";
import { RecordableDiv } from "../905/511649";
import { UZ, JU } from "../figma_app/626177";
import { wh, fR } from "../figma_app/973219";
var l = o;
let p = "simple_row--simpleRow--yTqly raw_components--singleRowHeight--dKM4t";
export function $$m0({
  label: e,
  labelId: t,
  children: i,
  disabled: o,
  labelInactive: m,
  labelAriaHidden: h,
  ...g
}) {
  if (getFeatureFlags().ce_tv_fpl_select) {
    let s = l()({
      [wh]: m,
      [fR]: o
    });
    let c = jsx(Label, {
      htmlFor: t,
      variant: "secondary",
      children: e
    });
    h ? c = jsx("p", {
      className: s,
      "aria-hidden": !0,
      children: e
    }) : (m || o) && (c = jsx(LabelPrimitive, {
      htmlFor: t,
      className: s,
      children: e
    }));
    return jsxs(RecordableDiv, {
      className: p,
      ...g,
      children: [c, i]
    });
  }
  return jsxs(RecordableDiv, {
    className: p,
    ...g,
    children: [m ? jsx(UZ, {
      id: t,
      children: e
    }) : jsx(JU, {
      id: t,
      disabled: o,
      children: e
    }), i]
  });
}
export const L = $$m0;
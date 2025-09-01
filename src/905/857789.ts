import { jsxs, jsx } from "react/jsx-runtime";
import r from "classnames";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
var a = r;
export function $$l0({
  children: e,
  iconSrc: t
}) {
  return jsxs("div", {
    className: a()(_$$s.flex.itemsStart.lh16.colorTextSecondary.gap4.$, {
      "publish_modal_helper_text--textWithIcon--tDurL": !!t
    }),
    children: [t && jsx(B, {
      className: _$$s.w16.h16.flex.itemsCenter.justifyCenter.flexNone.colorIconSecondary.$,
      svg: t
    }), e]
  });
}
export const A = $$l0;
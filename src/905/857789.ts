import { jsxs, jsx } from "react/jsx-runtime";
import r from "classnames";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
var a = r;
export function $$l0({
  children: e,
  iconSrc: t
}) {
  return jsxs("div", {
    className: a()(cssBuilderInstance.flex.itemsStart.lh16.colorTextSecondary.gap4.$, {
      "publish_modal_helper_text--textWithIcon--tDurL": !!t
    }),
    children: [t && jsx(SvgComponent, {
      className: cssBuilderInstance.w16.h16.flex.itemsCenter.justifyCenter.flexNone.colorIconSecondary.$,
      svg: t
    }), e]
  });
}
export const A = $$l0;
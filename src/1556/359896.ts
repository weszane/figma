import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import o from "classnames";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { A } from "../6828/364616";
var s = o;
export let $$d0 = forwardRef((e, t) => {
  let n = cssBuilderInstance.h16.w16.ml1.flex.justifyCenter.itemsCenter.$$with({
    colorIconOnbrand: e.isOnBrandColor,
    colorIcon: !e.isOnBrandColor
  }).$;
  return jsxs("button", {
    className: s()("dropdown_button--button--BR3bZ", e.buttonClassName, {
      "dropdown_button--active--ZkglI": e.isShowingDropdown
    }),
    onClick: e.onClick,
    ref: t,
    "data-testid": e.dataTestId,
    "aria-label": e["aria-label"],
    children: [e.children, jsx(SvgComponent, {
      svg: A,
      className: n
    })]
  });
});
export const g = $$d0;
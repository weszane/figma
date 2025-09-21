import { jsxs, jsx } from "react/jsx-runtime";
import { k } from "../905/443820";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { TextWithTruncation } from "../905/984674";
export function $$o0({
  children: e
}) {
  return jsxs("div", {
    className: cssBuilderInstance.flex.justifyCenter.itemsCenter.h24.gap4.$,
    "data-testid": "actions-loading-component",
    children: [jsx("div", {
      className: cssBuilderInstance.h24.w24.flex.justifyCenter.itemsCenter.$,
      children: jsx(k, {})
    }), jsx("div", {
      className: cssBuilderInstance.overflowHidden.noWrap.ellipsis.$,
      children: jsx(TextWithTruncation, {
        fontSize: 11,
        fontWeight: "medium",
        children: e
      })
    })]
  });
}
export const R = $$o0;
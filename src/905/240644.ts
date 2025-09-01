import { jsxs, jsx } from "react/jsx-runtime";
import { k } from "../905/443820";
import { s as _$$s } from "../cssbuilder/589278";
import { E } from "../905/984674";
export function $$o0({
  children: e
}) {
  return jsxs("div", {
    className: _$$s.flex.justifyCenter.itemsCenter.h24.gap4.$,
    "data-testid": "actions-loading-component",
    children: [jsx("div", {
      className: _$$s.h24.w24.flex.justifyCenter.itemsCenter.$,
      children: jsx(k, {})
    }), jsx("div", {
      className: _$$s.overflowHidden.noWrap.ellipsis.$,
      children: jsx(E, {
        fontSize: 11,
        fontWeight: "medium",
        children: e
      })
    })]
  });
}
export const R = $$o0;
import { jsxs, jsx } from "react/jsx-runtime";
import { w } from "../905/770105";
import { R } from "../905/621802";
import { s as _$$s } from "../cssbuilder/589278";
import { rm } from "../905/989969";
export function $$l0(e) {
  return jsxs("button", {
    className: rm,
    onClick: e.onSelect,
    children: [jsx(w, {
      className: _$$s.p8.mr4.colorIcon.$
    }), jsxs("div", {
      className: _$$s.alignLeft.flex.flexGrow1.itemsCenter.justifyBetween.$,
      children: [jsx("div", {
        className: _$$s.ellipsis.noWrap.overflowHidden.w300.$,
        children: e.teamName
      }), jsx(R, {})]
    })]
  });
}
export const P = $$l0;
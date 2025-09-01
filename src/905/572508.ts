import { jsxs, jsx } from "react/jsx-runtime";
import { JR, Qp, Wi } from "../figma_app/162641";
import { H } from "../905/348433";
import { hv, wx, m_ } from "../905/835035";
import { Z } from "../905/920418";
let l = {
  opacity: 50,
  animationType: JR.SHIMMER
};
export function $$d0() {
  let {
    listItemButtonWidth
  } = H();
  return jsxs("div", {
    className: hv,
    children: [jsx(Qp, {
      className: Z,
      ...l
    }), jsxs("div", {
      className: "library_list_item_loading_shimmer--infoWrapper--FyhlV",
      children: [jsx("span", {
        className: wx,
        children: jsx(Wi, {
          ...l,
          dataTestId: "library-list-item-loading-shimmer"
        })
      }), jsx("span", {
        className: m_,
        children: jsx(Wi, {
          ...l
        })
      })]
    }), jsx("div", {
      style: {
        width: listItemButtonWidth
      },
      children: jsx(Wi, {
        ...l
      })
    })]
  });
}
export const Q = $$d0;
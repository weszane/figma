import { jsx, jsxs } from "react/jsx-runtime";
import { Qp, JR, Wi } from "../figma_app/162641";
export function $$a0({
  numRows: e,
  showSideElement: t
}) {
  return jsx("div", {
    "data-testid": "facetedSearchLoadingState",
    children: Array.from(Array(e)).map((e, i) => jsxs("div", {
      className: "faceted_search_loading_state--loadingStateItem--R8-nS",
      children: [jsx(Qp, {
        className: "faceted_search_loading_state--loadingStateImage--EcyC1",
        animationType: JR.LIGHT_SHIMMER,
        opacity: 50
      }), jsx(Wi, {
        className: i % 2 == 0 ? "faceted_search_loading_state--loadingStateTextShort--osKE3" : "faceted_search_loading_state--loadingStateTextLong--RD-SN",
        animationType: JR.LIGHT_SHIMMER,
        opacity: 50
      }), t && jsx(Qp, {
        className: "faceted_search_loading_state--loadingStateSideImage--wlME4",
        animationType: JR.LIGHT_SHIMMER,
        opacity: 50
      })]
    }, i))
  });
}
export const e = $$a0;
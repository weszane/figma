import { jsx } from "react/jsx-runtime";
import { tM } from "../figma_app/637027";
import { renderI18nText } from "../905/303541";
import { y$ } from "../figma_app/835219";
let a = "load_more_pagination_button--loadMoreButtonWrapper--lGPgI";
export function $$l0({
  onClick: e,
  isLoading: t,
  isMoreToFetch: r
}) {
  return t ? jsx("div", {
    className: a,
    children: jsx(y$, {})
  }) : r ? jsx("div", {
    className: a,
    children: jsx(tM, {
      onClick: e,
      children: renderI18nText("community.landing_page.load_more")
    })
  }) : null;
}
export const A = $$l0;
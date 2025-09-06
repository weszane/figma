import { jsx } from "react/jsx-runtime";
import { renderI18nText } from "../905/303541";
export function $$a0({
  isSearchLoading: e,
  searchQuery: t
}) {
  return jsx("div", {
    className: "library_search_text--searchText--Dd5Xk",
    children: e ? renderI18nText("design_systems.libraries_modal.searching") : renderI18nText("design_systems.libraries_modal.no_results_for", {
      query: t
    })
  });
}
export const h = $$a0;
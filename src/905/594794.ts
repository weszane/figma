import { jsx } from "react/jsx-runtime";
import { tx } from "../905/303541";
export function $$a0({
  isSearchLoading: e,
  searchQuery: t
}) {
  return jsx("div", {
    className: "library_search_text--searchText--Dd5Xk",
    children: e ? tx("design_systems.libraries_modal.searching") : tx("design_systems.libraries_modal.no_results_for", {
      query: t
    })
  });
}
export const h = $$a0;
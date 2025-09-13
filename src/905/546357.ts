import { jsx } from "react/jsx-runtime";
import { renderI18nText } from "../905/303541";
import { Cv } from "../figma_app/795938";
import { SimpleSortField } from "../figma_app/162807";
import { ViewMode } from "../figma_app/756995";
export function $$l1(e) {
  let {
    searchResult
  } = e;
  return jsx(Cv, {
    resource: searchResult.model
  }, `hub_file-${searchResult.model.id}`);
}
let d = [SimpleSortField.POPULARITY, SimpleSortField.RECENCY];
let $$c2 = {
  viewId: "search-hub_files",
  sortKeys: d,
  listSortKeys: d,
  tabletListSortKeys: d,
  mobileListSortKeys: d,
  sortKeyDescriptions: {
    [ViewMode.GRID]: {
      [SimpleSortField.POPULARITY]: renderI18nText("tile.sort_filter.trending"),
      [SimpleSortField.RECENCY]: renderI18nText("tile.sort_filter.recent")
    },
    [ViewMode.LIST]: {
      [SimpleSortField.POPULARITY]: renderI18nText("tile.sort_filter.trending"),
      [SimpleSortField.RECENCY]: renderI18nText("tile.sort_filter.recent")
    }
  },
  defaultOptions: {
    viewMode: ViewMode.GRID,
    sortMode: {
      sortKey: SimpleSortField.POPULARITY,
      sortDesc: !1
    }
  },
  includeSortDirection: e => !1
};
export function $$u0(e) {
  return {
    viewMode: $$c2.defaultOptions.viewMode,
    sortMode: {
      sortKey: e.sortState.hub_files.sortKey,
      sortDesc: $$c2.defaultOptions.sortMode.sortDesc
    }
  };
}
export const eB = $$u0;
export const q0 = $$l1;
export const xH = $$c2;
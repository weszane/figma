import { jsx } from "react/jsx-runtime";
import { tx } from "../905/303541";
import { Cv } from "../figma_app/795938";
import { gw } from "../figma_app/162807";
import { XU } from "../figma_app/756995";
export function $$l1(e) {
  let {
    searchResult
  } = e;
  return jsx(Cv, {
    resource: searchResult.model
  }, `hub_file-${searchResult.model.id}`);
}
let d = [gw.POPULARITY, gw.RECENCY];
let $$c2 = {
  viewId: "search-hub_files",
  sortKeys: d,
  listSortKeys: d,
  tabletListSortKeys: d,
  mobileListSortKeys: d,
  sortKeyDescriptions: {
    [XU.GRID]: {
      [gw.POPULARITY]: tx("tile.sort_filter.trending"),
      [gw.RECENCY]: tx("tile.sort_filter.recent")
    },
    [XU.LIST]: {
      [gw.POPULARITY]: tx("tile.sort_filter.trending"),
      [gw.RECENCY]: tx("tile.sort_filter.recent")
    }
  },
  defaultOptions: {
    viewMode: XU.GRID,
    sortMode: {
      sortKey: gw.POPULARITY,
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
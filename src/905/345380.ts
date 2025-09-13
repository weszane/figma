import { jsx } from "react/jsx-runtime";
import { BrowserInfo } from "../figma_app/778880";
import { renderI18nText } from "../905/303541";
import { ViewMode } from "../figma_app/756995";
import { TL } from "../figma_app/878651";
var $$n0;
(e => {
  e.SearchResult = t => e.renderSearchResult(t.searchResult, ViewMode.LIST);
  (e.SortKeys || (e.SortKeys = {})).NAME = "name";
  e.viewBarConfig = {
    viewId: "search-public_profiles",
    sortKeys: ["name"],
    listSortKeys: ["name"],
    mobileListSortKeys: ["name"],
    tabletListSortKeys: ["name"],
    sortKeyDescriptions: {
      [ViewMode.GRID]: {
        name: renderI18nText("search.sort_option.name")
      },
      [ViewMode.LIST]: {
        name: renderI18nText("search.sort_option.name")
      }
    },
    defaultOptions: {
      viewMode: ViewMode.LIST,
      sortMode: {
        sortKey: "name",
        sortDesc: !1
      }
    },
    includeSortDirection: e => !1,
    settingsSpacer: BrowserInfo.tablet || BrowserInfo.mobile
  };
  e.renderSearchResult = function (e, t) {
    return jsx(TL, {
      publicProfile: e.model,
      resources: e.resources,
      notTabletSidebarOptimized: !0
    }, e.model.id);
  };
  e.getValidOptions = function () {
    return e.viewBarConfig.defaultOptions;
  };
})($$n0 || ($$n0 = {}));
export const g = $$n0;
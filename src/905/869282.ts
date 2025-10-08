import { BrowserInfo } from "../figma_app/778880";
import { renderI18nText } from "../905/303541";
import { PluginSortField } from "../figma_app/162807";
import { ViewMode } from "../figma_app/756995";
import { getValueWithFallback } from "../905/776312";
import { p_ } from "../905/573610";
let $$d1 = {
  viewId: "search-public_plugins",
  sortKeys: [PluginSortField.NAME, PluginSortField.AUTHOR_NAME, PluginSortField.UPDATED_AT, PluginSortField.RUN_COUNT, PluginSortField.RELEVANCY],
  listSortKeys: [PluginSortField.NAME, PluginSortField.AUTHOR_NAME, PluginSortField.UPDATED_AT, PluginSortField.RUN_COUNT],
  tabletListSortKeys: [PluginSortField.NAME, PluginSortField.RUN_COUNT],
  mobileListSortKeys: [PluginSortField.NAME, PluginSortField.RUN_COUNT],
  sortKeyDescriptions: {
    [ViewMode.GRID]: {
      [PluginSortField.NAME]: renderI18nText("search.sort_option.name"),
      [PluginSortField.AUTHOR_NAME]: renderI18nText("search.sort_option.creator"),
      [PluginSortField.UPDATED_AT]: renderI18nText("search.sort_option.last_updated"),
      [PluginSortField.INSTALL_COUNT]: renderI18nText("search.sort_option.saves"),
      [PluginSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [PluginSortField.RUN_COUNT]: renderI18nText("search.sort_option.used_by")
    },
    [ViewMode.LIST]: {
      [PluginSortField.NAME]: renderI18nText("search.sort_option.name"),
      [PluginSortField.AUTHOR_NAME]: renderI18nText("search.sort_option.creator"),
      [PluginSortField.UPDATED_AT]: renderI18nText("search.sort_option.last_updated"),
      [PluginSortField.INSTALL_COUNT]: renderI18nText("search.sort_option.saves"),
      [PluginSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [PluginSortField.RUN_COUNT]: renderI18nText("search.sort_option.used_by")
    }
  },
  defaultOptions: {
    viewMode: ViewMode.LIST,
    sortMode: {
      sortKey: PluginSortField.RELEVANCY,
      sortDesc: !1
    }
  },
  includeSortDirection: e => -1 === [PluginSortField.INSTALL_COUNT, PluginSortField.RUN_COUNT, PluginSortField.RELEVANCY].indexOf(e),
  settingsSpacer: BrowserInfo.tablet || BrowserInfo.mobile
};
let $$c0 = p_;
export function $$u2(e, t) {
  return {
    sortMode: e.sortState.public_plugins,
    viewMode: getValueWithFallback($$d1.viewId, t, $$d1.defaultOptions.viewMode),
    shouldShowPlanFilter: !1
  };
}
export const Of = $$c0;
export const xH = $$d1;
export const zQ = $$u2;
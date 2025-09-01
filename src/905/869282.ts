import { Ay } from "../figma_app/778880";
import { tx } from "../905/303541";
import { XW } from "../figma_app/162807";
import { XU } from "../figma_app/756995";
import { y2 } from "../905/776312";
import { p_ } from "../905/573610";
let $$d1 = {
  viewId: "search-public_plugins",
  sortKeys: [XW.NAME, XW.AUTHOR_NAME, XW.UPDATED_AT, XW.RUN_COUNT, XW.RELEVANCY],
  listSortKeys: [XW.NAME, XW.AUTHOR_NAME, XW.UPDATED_AT, XW.RUN_COUNT],
  tabletListSortKeys: [XW.NAME, XW.RUN_COUNT],
  mobileListSortKeys: [XW.NAME, XW.RUN_COUNT],
  sortKeyDescriptions: {
    [XU.GRID]: {
      [XW.NAME]: tx("search.sort_option.name"),
      [XW.AUTHOR_NAME]: tx("search.sort_option.creator"),
      [XW.UPDATED_AT]: tx("search.sort_option.last_updated"),
      [XW.INSTALL_COUNT]: tx("search.sort_option.saves"),
      [XW.RELEVANCY]: tx("search.sort_option.relevance"),
      [XW.RUN_COUNT]: tx("search.sort_option.used_by")
    },
    [XU.LIST]: {
      [XW.NAME]: tx("search.sort_option.name"),
      [XW.AUTHOR_NAME]: tx("search.sort_option.creator"),
      [XW.UPDATED_AT]: tx("search.sort_option.last_updated"),
      [XW.INSTALL_COUNT]: tx("search.sort_option.saves"),
      [XW.RELEVANCY]: tx("search.sort_option.relevance"),
      [XW.RUN_COUNT]: tx("search.sort_option.used_by")
    }
  },
  defaultOptions: {
    viewMode: XU.LIST,
    sortMode: {
      sortKey: XW.RELEVANCY,
      sortDesc: !1
    }
  },
  includeSortDirection: e => -1 === [XW.INSTALL_COUNT, XW.RUN_COUNT, XW.RELEVANCY].indexOf(e),
  settingsSpacer: Ay.tablet || Ay.mobile
};
let $$c0 = p_;
export function $$u2(e, t) {
  return {
    sortMode: e.sortState.public_plugins,
    viewMode: y2($$d1.viewId, t, $$d1.defaultOptions.viewMode),
    shouldShowPlanFilter: !1
  };
}
export const Of = $$c0;
export const xH = $$d1;
export const zQ = $$u2;
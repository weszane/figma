import { BrowserInfo } from "../figma_app/778880";
import { renderI18nText } from "../905/303541";
import { Lk, ProjectSortField, OrgSortField, UserSortField } from "../figma_app/162807";
import { ViewMode } from "../figma_app/756995";
import { s as _$$s } from "../905/77553";
let $$l0 = {
  viewId: "search-files",
  sortKeys: [Lk.RELEVANCY, Lk.NAME, Lk.TOUCHED_AT, Lk.CREATED_AT],
  listSortKeys: [Lk.NAME, Lk.TOUCHED_AT, Lk.CREATED_AT, Lk.OWNER],
  tabletListSortKeys: [Lk.NAME, Lk.TOUCHED_AT],
  mobileListSortKeys: [Lk.NAME],
  sortKeyDescriptions: {
    [ViewMode.GRID]: {
      [Lk.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [Lk.NAME]: renderI18nText("search.sort_option.name"),
      [Lk.TOUCHED_AT]: renderI18nText("search.sort_option.touched_at"),
      [Lk.CREATED_AT]: renderI18nText("search.sort_option.created_at"),
      [Lk.OWNER]: renderI18nText("search.sort_option.owner")
    },
    [ViewMode.LIST]: {
      [Lk.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [Lk.NAME]: renderI18nText("search.sort_option.name"),
      [Lk.TOUCHED_AT]: renderI18nText("search.sort_option.touched_at"),
      [Lk.CREATED_AT]: renderI18nText("search.sort_option.created_at"),
      [Lk.OWNER]: renderI18nText("search.sort_option.owner")
    }
  },
  defaultOptions: {
    viewMode: ViewMode.GRID,
    sortMode: {
      sortKey: Lk.RELEVANCY,
      sortDesc: !1
    }
  },
  listHeaderClassName: "search_results--row--yQX3r search_results--rowTemplate--z9hsq search_list_row--row--xo6wT text--fontPos13--xW8hS text--_fontBase--QdLsd",
  includeSortDirection: e => -1 === [Lk.RELEVANCY].indexOf(e),
  settingsSpacer: BrowserInfo.tablet || BrowserInfo.mobile
};
let $$d1 = {
  viewId: "search-projects",
  sortKeys: [ProjectSortField.RELEVANCY, ProjectSortField.NAME, ProjectSortField.CREATED_AT],
  listSortKeys: [ProjectSortField.NAME, ProjectSortField.CREATED_AT],
  tabletListSortKeys: [ProjectSortField.NAME],
  mobileListSortKeys: [ProjectSortField.NAME],
  sortKeyDescriptions: {
    [ViewMode.GRID]: {
      [ProjectSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [ProjectSortField.NAME]: renderI18nText("search.sort_option.name"),
      [ProjectSortField.CREATED_AT]: renderI18nText("search.sort_option.created_at")
    },
    [ViewMode.LIST]: {
      [ProjectSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [ProjectSortField.NAME]: renderI18nText("search.sort_option.name"),
      [ProjectSortField.CREATED_AT]: renderI18nText("search.sort_option.created_at")
    }
  },
  defaultOptions: {
    viewMode: ViewMode.GRID,
    sortMode: {
      sortKey: ProjectSortField.RELEVANCY,
      sortDesc: !1
    }
  },
  includeSortDirection: e => -1 === [ProjectSortField.RELEVANCY].indexOf(e)
};
let $$c2 = {
  viewId: "search-teams",
  sortKeys: [OrgSortField.RELEVANCY, OrgSortField.NAME, OrgSortField.FILES_LAST_TOUCHED_AT, OrgSortField.CREATED_AT, OrgSortField.MEMBER_COUNT],
  listSortKeys: [OrgSortField.NAME, OrgSortField.FILES_LAST_TOUCHED_AT, OrgSortField.CREATED_AT, OrgSortField.MEMBER_COUNT, _$$s.SPACER],
  tabletListSortKeys: [OrgSortField.NAME, OrgSortField.FILES_LAST_TOUCHED_AT, OrgSortField.MEMBER_COUNT, _$$s.SPACER],
  mobileListSortKeys: [OrgSortField.NAME],
  sortKeyDescriptions: {
    [ViewMode.GRID]: {
      [OrgSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [OrgSortField.NAME]: renderI18nText("search.sort_option.name"),
      [OrgSortField.FILES_LAST_TOUCHED_AT]: renderI18nText("search.sort_option.last_updated"),
      [OrgSortField.CREATED_AT]: renderI18nText("search.sort_option.created_at"),
      [OrgSortField.MEMBER_COUNT]: renderI18nText("search.sort_option.members")
    },
    [ViewMode.LIST]: {
      [OrgSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [OrgSortField.NAME]: renderI18nText("search.sort_option.name"),
      [OrgSortField.FILES_LAST_TOUCHED_AT]: renderI18nText("search.sort_option.last_updated"),
      [OrgSortField.CREATED_AT]: renderI18nText("search.sort_option.created_at"),
      [OrgSortField.MEMBER_COUNT]: renderI18nText("search.sort_option.members")
    }
  },
  defaultOptions: {
    viewMode: ViewMode.GRID,
    sortMode: {
      sortKey: OrgSortField.RELEVANCY,
      sortDesc: !1
    }
  },
  includeSortDirection: e => -1 === [OrgSortField.RELEVANCY].indexOf(e),
  settingsSpacer: BrowserInfo.tablet || BrowserInfo.mobile
};
let $$u3 = {
  viewId: "search-users",
  sortKeys: [UserSortField.RELEVANCY, UserSortField.NAME, UserSortField.EMAIL],
  listSortKeys: [UserSortField.NAME, UserSortField.EMAIL],
  tabletListSortKeys: [UserSortField.NAME, UserSortField.EMAIL],
  mobileListSortKeys: [UserSortField.NAME],
  sortKeyDescriptions: {
    [ViewMode.GRID]: {
      [UserSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [UserSortField.NAME]: renderI18nText("search.sort_option.name"),
      [UserSortField.EMAIL]: renderI18nText("search.sort_option.email")
    },
    [ViewMode.LIST]: {
      [UserSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [UserSortField.NAME]: renderI18nText("search.sort_option.name"),
      [UserSortField.EMAIL]: renderI18nText("search.sort_option.email")
    }
  },
  defaultOptions: {
    viewMode: ViewMode.GRID,
    sortMode: {
      sortKey: UserSortField.RELEVANCY,
      sortDesc: !1
    }
  },
  includeSortDirection: e => -1 === [UserSortField.RELEVANCY].indexOf(e),
  settingsSpacer: BrowserInfo.tablet || BrowserInfo.mobile
};
export const KJ = $$l0;
export const $T = $$d1;
export const Vx = $$c2;
export const V0 = $$u3;
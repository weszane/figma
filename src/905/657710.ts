// Refactored search configuration objects with improved naming, type safety, and organization
// Original code names preserved in comments: $$l0, $$d1, $$c2, $$u3

import { SPACING_CONSTANTS } from "../905/77553"
import { renderI18nText } from "../905/303541"
import { OrgSortField, ProjectSortField, TeamSortField, UserSortField } from "../figma_app/162807"
import { ViewMode } from "../figma_app/756995"
import { BrowserInfo } from "../figma_app/778880"

interface SortConfiguration {
  viewId: string
  sortKeys: Array<TeamSortField | ProjectSortField | OrgSortField | UserSortField>
  listSortKeys: Array<TeamSortField | ProjectSortField | OrgSortField | UserSortField | string>
  tabletListSortKeys: Array<TeamSortField | ProjectSortField | OrgSortField | UserSortField | string>
  mobileListSortKeys: Array<TeamSortField | ProjectSortField | OrgSortField | UserSortField>
  sortKeyDescriptions: {
    [key in ViewMode]: {
      [sortKey: string]: any
    }
  }
  defaultOptions: {
    viewMode: ViewMode
    sortMode: {
      sortKey: TeamSortField | ProjectSortField | OrgSortField | UserSortField
      sortDesc: boolean
    }
  }
  listHeaderClassName?: string
  includeSortDirection: (sortKey: any) => boolean
  settingsSpacer?: boolean
}

export const fileSearchConfig: SortConfiguration = {
  viewId: "search-files",
  sortKeys: [TeamSortField.RELEVANCY, TeamSortField.NAME, TeamSortField.TOUCHED_AT, TeamSortField.CREATED_AT],
  listSortKeys: [TeamSortField.NAME, TeamSortField.TOUCHED_AT, TeamSortField.CREATED_AT, TeamSortField.OWNER],
  tabletListSortKeys: [TeamSortField.NAME, TeamSortField.TOUCHED_AT],
  mobileListSortKeys: [TeamSortField.NAME],
  sortKeyDescriptions: {
    [ViewMode.GRID]: {
      [TeamSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [TeamSortField.NAME]: renderI18nText("search.sort_option.name"),
      [TeamSortField.TOUCHED_AT]: renderI18nText("search.sort_option.touched_at"),
      [TeamSortField.CREATED_AT]: renderI18nText("search.sort_option.created_at"),
      [TeamSortField.OWNER]: renderI18nText("search.sort_option.owner"),
    },
    [ViewMode.LIST]: {
      [TeamSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [TeamSortField.NAME]: renderI18nText("search.sort_option.name"),
      [TeamSortField.TOUCHED_AT]: renderI18nText("search.sort_option.touched_at"),
      [TeamSortField.CREATED_AT]: renderI18nText("search.sort_option.created_at"),
      [TeamSortField.OWNER]: renderI18nText("search.sort_option.owner"),
    },
  },
  defaultOptions: {
    viewMode: ViewMode.GRID,
    sortMode: {
      sortKey: TeamSortField.RELEVANCY,
      sortDesc: false,
    },
  },
  listHeaderClassName: "search_results--row--yQX3r search_results--rowTemplate--z9hsq search_list_row--row--xo6wT text--fontPos13--xW8hS text--_fontBase--QdLsd",
  includeSortDirection: sortKey => ![TeamSortField.RELEVANCY].includes(sortKey),
  settingsSpacer: BrowserInfo.tablet || BrowserInfo.mobile,
}

export const projectSearchConfig: SortConfiguration = {
  viewId: "search-projects",
  sortKeys: [ProjectSortField.RELEVANCY, ProjectSortField.NAME, ProjectSortField.CREATED_AT],
  listSortKeys: [ProjectSortField.NAME, ProjectSortField.CREATED_AT],
  tabletListSortKeys: [ProjectSortField.NAME],
  mobileListSortKeys: [ProjectSortField.NAME],
  sortKeyDescriptions: {
    [ViewMode.GRID]: {
      [ProjectSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [ProjectSortField.NAME]: renderI18nText("search.sort_option.name"),
      [ProjectSortField.CREATED_AT]: renderI18nText("search.sort_option.created_at"),
    },
    [ViewMode.LIST]: {
      [ProjectSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [ProjectSortField.NAME]: renderI18nText("search.sort_option.name"),
      [ProjectSortField.CREATED_AT]: renderI18nText("search.sort_option.created_at"),
    },
  },
  defaultOptions: {
    viewMode: ViewMode.GRID,
    sortMode: {
      sortKey: ProjectSortField.RELEVANCY,
      sortDesc: false,
    },
  },
  includeSortDirection: (sortKey: any) => ![ProjectSortField.RELEVANCY].includes(sortKey),
}

export const teamSearchConfig: SortConfiguration = {
  viewId: "search-teams",
  sortKeys: [OrgSortField.RELEVANCY, OrgSortField.NAME, OrgSortField.FILES_LAST_TOUCHED_AT, OrgSortField.CREATED_AT, OrgSortField.MEMBER_COUNT],
  listSortKeys: [OrgSortField.NAME, OrgSortField.FILES_LAST_TOUCHED_AT, OrgSortField.CREATED_AT, OrgSortField.MEMBER_COUNT, SPACING_CONSTANTS.SPACER],
  tabletListSortKeys: [OrgSortField.NAME, OrgSortField.FILES_LAST_TOUCHED_AT, OrgSortField.MEMBER_COUNT, SPACING_CONSTANTS.SPACER],
  mobileListSortKeys: [OrgSortField.NAME],
  sortKeyDescriptions: {
    [ViewMode.GRID]: {
      [OrgSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [OrgSortField.NAME]: renderI18nText("search.sort_option.name"),
      [OrgSortField.FILES_LAST_TOUCHED_AT]: renderI18nText("search.sort_option.last_updated"),
      [OrgSortField.CREATED_AT]: renderI18nText("search.sort_option.created_at"),
      [OrgSortField.MEMBER_COUNT]: renderI18nText("search.sort_option.members"),
    },
    [ViewMode.LIST]: {
      [OrgSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [OrgSortField.NAME]: renderI18nText("search.sort_option.name"),
      [OrgSortField.FILES_LAST_TOUCHED_AT]: renderI18nText("search.sort_option.last_updated"),
      [OrgSortField.CREATED_AT]: renderI18nText("search.sort_option.created_at"),
      [OrgSortField.MEMBER_COUNT]: renderI18nText("search.sort_option.members"),
    },
  },
  defaultOptions: {
    viewMode: ViewMode.GRID,
    sortMode: {
      sortKey: OrgSortField.RELEVANCY,
      sortDesc: false,
    },
  },
  includeSortDirection: sortKey => ![OrgSortField.RELEVANCY].includes(sortKey),
  settingsSpacer: BrowserInfo.tablet || BrowserInfo.mobile,
}

export const userSearchConfig: SortConfiguration = {
  viewId: "search-users",
  sortKeys: [UserSortField.RELEVANCY, UserSortField.NAME, UserSortField.EMAIL],
  listSortKeys: [UserSortField.NAME, UserSortField.EMAIL],
  tabletListSortKeys: [UserSortField.NAME, UserSortField.EMAIL],
  mobileListSortKeys: [UserSortField.NAME],
  sortKeyDescriptions: {
    [ViewMode.GRID]: {
      [UserSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [UserSortField.NAME]: renderI18nText("search.sort_option.name"),
      [UserSortField.EMAIL]: renderI18nText("search.sort_option.email"),
    },
    [ViewMode.LIST]: {
      [UserSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
      [UserSortField.NAME]: renderI18nText("search.sort_option.name"),
      [UserSortField.EMAIL]: renderI18nText("search.sort_option.email"),
    },
  },
  defaultOptions: {
    viewMode: ViewMode.GRID,
    sortMode: {
      sortKey: UserSortField.RELEVANCY,
      sortDesc: false,
    },
  },
  includeSortDirection: (sortKey: any) => ![UserSortField.RELEVANCY].includes(sortKey),
  settingsSpacer: BrowserInfo.tablet || BrowserInfo.mobile,
}

export const KJ = fileSearchConfig // Originally $$l0
export const $T = projectSearchConfig // Originally $$d1
export const Vx = teamSearchConfig // Originally $$c2
export const V0 = userSearchConfig // Originally $$u3

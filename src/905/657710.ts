import { Ay } from "../figma_app/778880";
import { tx } from "../905/303541";
import { Lk, mp, qm, a7 } from "../figma_app/162807";
import { XU } from "../figma_app/756995";
import { s as _$$s } from "../905/77553";
let $$l0 = {
  viewId: "search-files",
  sortKeys: [Lk.RELEVANCY, Lk.NAME, Lk.TOUCHED_AT, Lk.CREATED_AT],
  listSortKeys: [Lk.NAME, Lk.TOUCHED_AT, Lk.CREATED_AT, Lk.OWNER],
  tabletListSortKeys: [Lk.NAME, Lk.TOUCHED_AT],
  mobileListSortKeys: [Lk.NAME],
  sortKeyDescriptions: {
    [XU.GRID]: {
      [Lk.RELEVANCY]: tx("search.sort_option.relevance"),
      [Lk.NAME]: tx("search.sort_option.name"),
      [Lk.TOUCHED_AT]: tx("search.sort_option.touched_at"),
      [Lk.CREATED_AT]: tx("search.sort_option.created_at"),
      [Lk.OWNER]: tx("search.sort_option.owner")
    },
    [XU.LIST]: {
      [Lk.RELEVANCY]: tx("search.sort_option.relevance"),
      [Lk.NAME]: tx("search.sort_option.name"),
      [Lk.TOUCHED_AT]: tx("search.sort_option.touched_at"),
      [Lk.CREATED_AT]: tx("search.sort_option.created_at"),
      [Lk.OWNER]: tx("search.sort_option.owner")
    }
  },
  defaultOptions: {
    viewMode: XU.GRID,
    sortMode: {
      sortKey: Lk.RELEVANCY,
      sortDesc: !1
    }
  },
  listHeaderClassName: "search_results--row--yQX3r search_results--rowTemplate--z9hsq search_list_row--row--xo6wT text--fontPos13--xW8hS text--_fontBase--QdLsd",
  includeSortDirection: e => -1 === [Lk.RELEVANCY].indexOf(e),
  settingsSpacer: Ay.tablet || Ay.mobile
};
let $$d1 = {
  viewId: "search-projects",
  sortKeys: [mp.RELEVANCY, mp.NAME, mp.CREATED_AT],
  listSortKeys: [mp.NAME, mp.CREATED_AT],
  tabletListSortKeys: [mp.NAME],
  mobileListSortKeys: [mp.NAME],
  sortKeyDescriptions: {
    [XU.GRID]: {
      [mp.RELEVANCY]: tx("search.sort_option.relevance"),
      [mp.NAME]: tx("search.sort_option.name"),
      [mp.CREATED_AT]: tx("search.sort_option.created_at")
    },
    [XU.LIST]: {
      [mp.RELEVANCY]: tx("search.sort_option.relevance"),
      [mp.NAME]: tx("search.sort_option.name"),
      [mp.CREATED_AT]: tx("search.sort_option.created_at")
    }
  },
  defaultOptions: {
    viewMode: XU.GRID,
    sortMode: {
      sortKey: mp.RELEVANCY,
      sortDesc: !1
    }
  },
  includeSortDirection: e => -1 === [mp.RELEVANCY].indexOf(e)
};
let $$c2 = {
  viewId: "search-teams",
  sortKeys: [qm.RELEVANCY, qm.NAME, qm.FILES_LAST_TOUCHED_AT, qm.CREATED_AT, qm.MEMBER_COUNT],
  listSortKeys: [qm.NAME, qm.FILES_LAST_TOUCHED_AT, qm.CREATED_AT, qm.MEMBER_COUNT, _$$s.SPACER],
  tabletListSortKeys: [qm.NAME, qm.FILES_LAST_TOUCHED_AT, qm.MEMBER_COUNT, _$$s.SPACER],
  mobileListSortKeys: [qm.NAME],
  sortKeyDescriptions: {
    [XU.GRID]: {
      [qm.RELEVANCY]: tx("search.sort_option.relevance"),
      [qm.NAME]: tx("search.sort_option.name"),
      [qm.FILES_LAST_TOUCHED_AT]: tx("search.sort_option.last_updated"),
      [qm.CREATED_AT]: tx("search.sort_option.created_at"),
      [qm.MEMBER_COUNT]: tx("search.sort_option.members")
    },
    [XU.LIST]: {
      [qm.RELEVANCY]: tx("search.sort_option.relevance"),
      [qm.NAME]: tx("search.sort_option.name"),
      [qm.FILES_LAST_TOUCHED_AT]: tx("search.sort_option.last_updated"),
      [qm.CREATED_AT]: tx("search.sort_option.created_at"),
      [qm.MEMBER_COUNT]: tx("search.sort_option.members")
    }
  },
  defaultOptions: {
    viewMode: XU.GRID,
    sortMode: {
      sortKey: qm.RELEVANCY,
      sortDesc: !1
    }
  },
  includeSortDirection: e => -1 === [qm.RELEVANCY].indexOf(e),
  settingsSpacer: Ay.tablet || Ay.mobile
};
let $$u3 = {
  viewId: "search-users",
  sortKeys: [a7.RELEVANCY, a7.NAME, a7.EMAIL],
  listSortKeys: [a7.NAME, a7.EMAIL],
  tabletListSortKeys: [a7.NAME, a7.EMAIL],
  mobileListSortKeys: [a7.NAME],
  sortKeyDescriptions: {
    [XU.GRID]: {
      [a7.RELEVANCY]: tx("search.sort_option.relevance"),
      [a7.NAME]: tx("search.sort_option.name"),
      [a7.EMAIL]: tx("search.sort_option.email")
    },
    [XU.LIST]: {
      [a7.RELEVANCY]: tx("search.sort_option.relevance"),
      [a7.NAME]: tx("search.sort_option.name"),
      [a7.EMAIL]: tx("search.sort_option.email")
    }
  },
  defaultOptions: {
    viewMode: XU.GRID,
    sortMode: {
      sortKey: a7.RELEVANCY,
      sortDesc: !1
    }
  },
  includeSortDirection: e => -1 === [a7.RELEVANCY].indexOf(e),
  settingsSpacer: Ay.tablet || Ay.mobile
};
export const KJ = $$l0;
export const $T = $$d1;
export const Vx = $$c2;
export const V0 = $$u3;
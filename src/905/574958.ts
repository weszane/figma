import { ServiceCategories as _$$e } from "../905/165054";
import { localStorageRef } from "../905/657224";
import { trackEventAnalytics } from "../905/449184";
import { reportError } from "../905/11";
import { MZ } from "../figma_app/925970";
import { qB } from "../905/124270";
import { trackFileBrowserFileClicked } from "../figma_app/314264";
import { OrganizationType } from "../905/833838";
import { L0, PublicModelType, SearchFieldType, SearchTypeMode } from "../figma_app/162807";
var $$n1;
let $$m0 = "!capture";
let $$h4 = MZ;
let g = e => !!e.view;
let f = "search-session";
export function $$_3() {
  let e = localStorageRef?.getItem(f);
  if (!e) return null;
  try {
    let t = JSON.parse(e);
    if (!t || !t.id || new Date(t.expires).getTime() < Date.now()) return null;
    return t;
  } catch (e) {
    reportError(_$$e.SEARCH, e);
    return null;
  }
}
function A(e, t) {
  let i = {
    id: e,
    entryPoint: t,
    expires: Date.now() + 6e4
  };
  localStorageRef?.setItem(f, JSON.stringify(i));
}
function y() {
  localStorageRef?.removeItem(f);
}
function b(e) {
  let t = MZ();
  let i = !1;
  let n = $$_3();
  n && (n.entryPoint !== e ? y() : (t = n.id, i = !0));
  A(t, e);
  return {
    sessionId: t,
    isRetained: i
  };
}
export function $$v2(e) {
  if (!g(e)) return e;
  switch (e.view) {
    case "allProjects":
    case "deletedFiles":
    case "search":
    case "orgSelfServe":
    case "folder":
    case "orgAdminSettings":
    case "licenseGroup":
    case "resourceUnavailable":
    case "user":
    case "team":
    case "teamCreation":
    case "teamUpgrade":
    case "addCollaborators":
    case "promoReview":
    case "eduReview":
    case "feed":
    case "modalInIFrame":
    case "teamFeed":
    case "teamAdminConsole":
    case "recentsAndSharing":
    case "trashedFolders":
      return "file_browser";
    case "communityHub":
      return "community";
    case "desktopNewTab":
      return "desktop_new_tab";
    default:
      return "unattributed";
  }
}
function I(e, t) {
  return "file_browser" !== t ? L0.OUTSIDE_FILE_BROWSER : "search" === e.view ? L0.FULL_PAGE : L0.PREVIEW;
}
(e => {
  e.Analytics = class {
    constructor(e, t, i) {
      this.state = e;
      this.info = t;
      this.context = i;
    }
    categorySpecificTrackClick(e, t) {
      if (e === PublicModelType.FILES) {
        let e = this.info.result.model;
        trackEventAnalytics("Open File Click", {
          fileKey: e.key,
          fileRepoId: e.file_repo_id,
          uiSelectedView: "search"
        });
        trackFileBrowserFileClicked(e.key, {
          selectedViewName: "search"
        });
      }
    }
    update(e, t, i) {
      this.state = e;
      this.info = t;
      this.context = i;
    }
    click(e, t, n, r) {
      let a;
      let o = this.state.responses ? this.state.responses[e] : null;
      if (!o) {
        console.error("Cannot record click event on null response");
        return;
      }
      let l = $$v2(t);
      let c = I(t, l);
      let {
        position,
        resource_id,
        resource_type,
        matched_queries,
        result
      } = this.info;
      let A = qB();
      if (e === PublicModelType.FILES && this.context?.plan) {
        let {
          plan
        } = this.context;
        let t = result.model;
        a = plan.plan_type === OrganizationType.ORG ? t.parent_org_id === plan.plan_id : t.team_id === plan.plan_id;
      }
      let y = e === PublicModelType.FILES && "preview_thumbnail_urls" in result.model ? result.model.preview_thumbnail_urls ?? [] : [];
      trackEventAnalytics("search_result_clicked", {
        session_id: this.state.lastLoadedQuery.sessionId,
        query_id: this.state.lastLoadedQuery.queryId,
        position: position + 1,
        entry_point: $$v2(t),
        file_browser_entry_point: c,
        plan_filter_id: r,
        plan_filter_type: "NON_ORG_TEAMS" === r ? "team" : "org",
        version: 3,
        query: this.state.lastLoadedQuery.query,
        scope: this.state.parameters.searchScope || null,
        ...i(o, e),
        resource_id,
        resource_type,
        matched_queries: matched_queries || [],
        action: "click",
        ...n,
        ...A,
        file_in_current_plan: a,
        num_fragments: y.length
      });
      this.categorySpecificTrackClick(e, n);
    }
  };
  let t = (e, t) => {
    let i = e?.responseSortState;
    let n = i && t in i ? i[t] : {};
    return {
      query: e.parameters.query,
      sortKey: n.sortKey || null,
      sortDesc: n.sortDesc || null,
      scope: e.parameters.searchScope || null,
      workspaceId: e.parameters.workspaceFilter
    };
  };
  let i = (e, t) => {
    let i = null;
    for (let t = 0; t < e.results.length; t++) {
      let n = e.results[t];
      if (n.matched_queries?.includes(SearchFieldType.DEEP_SEARCH_TEXT)) {
        i = t;
        break;
      }
    }
    return {
      category: t,
      time: e.metrics?.roundTripTime || null,
      count: e.results.length,
      deep_search_start_position: i ? i + 1 : i
    };
  };
  (e => {
    (e => {
      e.CLICK = "click";
      e.CONTEXT_CLICK = "context-click";
      e.ENTER = "enter-key";
    })(e.ClickAction || (e.ClickAction = {}));
  })(e.Query || (e.Query = {}));
  (e => {
    function i(e) {
      let t;
      let i = e.parameters.searchModelType;
      let n = e.responses;
      switch (e.searchTypeBehavior) {
        case SearchTypeMode.ALL_TYPES_BLOCKING:
          for (let e in t = 0, n) {
            let r = n[e]?.metrics.roundTripTime;
            r && r > t && (t = r, i = e);
          }
          break;
        case SearchTypeMode.ONE_TYPE:
        case SearchTypeMode.ALL_TYPES_STREAMING:
          t = n[e.parameters.searchModelType]?.metrics.roundTripTime;
      }
      void 0 !== t && trackEventAnalytics("search_time_to_load", {
        sessionId: e.sessionId,
        queryId: e.queryId,
        searchModelType: i,
        elapsedTime: t,
        searchTypeBehavior: e.searchTypeBehavior
      });
    }
    e.select = function (e, t) {
      if (e.sessionId) return e;
      let {
        sessionId,
        isRetained
      } = b(t.entryPoint);
      trackEventAnalytics("search_selected", {
        session_id: sessionId,
        entry_point: t.entryPoint
      });
      let r = isRetained ? e.queryCount : 0;
      return {
        ...e,
        sessionId,
        queryCount: r
      };
    };
    e.start = function (e, t) {
      if (e.sessionId) return e;
      let {
        sessionId,
        isRetained
      } = b(t.entryPoint);
      trackEventAnalytics("search_start", {
        session_id: sessionId,
        entry_point: t.entryPoint,
        plan_filter_id: e.parameters.planFilter,
        plan_filter_type: "NON_ORG_TEAMS" === e.parameters.planFilter ? "team" : "org"
      });
      let r = isRetained ? e.queryCount : 0;
      return {
        ...e,
        sessionId,
        queryCount: r
      };
    };
    e.incrementQueryCount = function (e) {
      return {
        ...e,
        queryCount: e.queryCount + 1
      };
    };
    e.enterSearchView = function (e, t) {
      trackEventAnalytics("search_enter_search_view", {
        session_id: e.sessionId,
        entry_point: t
      });
    };
    e.enterSearchViewViaEnter = function (e, t) {
      trackEventAnalytics("search_enter_search_view_via_enter", {
        session_id: e.sessionId,
        entry_point: t
      });
    };
    e.searchModalExit = function (e) {
      trackEventAnalytics("search_modal_exit", {
        session_id: e
      });
    };
    e.trackSearchQueryTyped = function (e, t, i) {
      let n = $$v2(t);
      let r = I(t, n);
      trackEventAnalytics("search_query_typed", {
        session_id: e,
        query: i,
        entry_point: n,
        file_browser_entry_point: r
      });
    };
    e.trackModelOrScopeChange = function (e, t) {
      let i = {};
      e && (i.search_model_type = e);
      t && (i.search_scope = t);
      trackEventAnalytics("search_model_or_scope_change", i);
    };
    e.trackWorkspaceFilterChange = function (e, t) {
      trackEventAnalytics("search_workspace_filter_change", {
        workspace_filter: t,
        session_id: e.sessionId
      });
    };
    e.trackLicenseGroupFilterDropdownClick = function (e, t) {
      trackEventAnalytics("search_license_group_dropdown_click", {
        session_id: e.sessionId,
        click_type: t
      });
    };
    e.trackTimeToLoad = i;
    e.trackResult = function (e) {
      if (!e.sessionId) {
        console.error("Cannot log query results w/o a sessionId");
        return;
      }
      if (!e.responses) {
        console.error("Cannot log query results without responses");
        return;
      }
      let t = e.parameters.searchModelType;
      if (!(e.responses ? e.responses[t] : null)) {
        console.error("Cannot log query results w/o a response", t);
        return;
      }
      i(e);
    };
    e.trackClientResult = function (e, i) {
      let n = $$v2(i);
      let r = I(i, n);
      let a = e.parameters.searchModelType;
      let o = e.responses ? e.responses[a] : null;
      let l = Object.values(e.responseCounts).reduce((e, t) => (e ?? 0) + (t ?? 0), 0);
      let c = {};
      for (let [t, i] of Object.entries(e.responseCounts)) c[t] = i ?? 0;
      let u = o ? o.results.length : -1;
      let m = qB();
      let h = {
        session_id: e.sessionId,
        query_id: e.queryId,
        entry_point: n,
        file_browser_entry_point: r,
        plan_filter_id: e.parameters.planFilter,
        category: r === L0.PREVIEW ? "preview" : a,
        count: r === L0.PREVIEW ? l : u,
        version: 2,
        plan_filter_type: "NON_ORG_TEAMS" === e.parameters.planFilter ? "team" : "org",
        ...t(e, a),
        ...c,
        ...m
      };
      o || trackEventAnalytics("search_tracking_error", {
        event_name: "search_query_result",
        entry_point: r,
        incomplete_field: "response"
      });
      e.sessionId || trackEventAnalytics("search_tracking_error", {
        event_name: "search_query_result",
        entry_point: r,
        incomplete_field: "sessionId"
      });
      e.queryId || trackEventAnalytics("search_tracking_error", {
        event_name: "search_query_result",
        entry_point: r,
        incomplete_field: "queryId"
      });
      trackEventAnalytics("search_query_result", h);
    };
    e.trackSeeMore = function (e, t) {
      if (!e.sessionId) {
        console.error("Cannot log query results w/o a sessionId");
        return;
      }
      trackEventAnalytics("search_see_more", {
        session_id: e.sessionId,
        query_id: e.queryId,
        category: t ?? "all"
      });
    };
    e.trackEnd = function (e) {
      return e.sessionId ? (trackEventAnalytics("search_end", {
        session_id: e.sessionId,
        queryCount: e.queryCount
      }), function (e) {
        let t = $$_3();
        t && (t.id === e ? A(e, t.entryPoint) : y());
      }(e.sessionId), {
        ...e,
        sessionId: null
      }) : e;
    };
  })(e.Session || (e.Session = {}));
  (e => {
    e[e.SEARCH = 0] = "SEARCH";
    e[e.FILE = 1] = "FILE";
  })(e.RecentType || (e.RecentType = {}));
  (e.Recents || (e.Recents = {})).trackRecentsClick = function (e, t, i, n) {
    1 === n ? trackEventAnalytics("search_recent_file_clicked", {
      session_id: e,
      position: t + 1,
      key: i
    }) : 0 === n && trackEventAnalytics("search_recent_search_clicked", {
      session_id: e,
      position: t + 1
    });
  };
})($$n1 || ($$n1 = {}));
export const jr = $$m0;
export const vj = $$n1;
export const zQ = $$v2;
export const lM = $$_3;
export const Ei = $$h4;
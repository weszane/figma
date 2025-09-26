import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo, Fragment as _$$Fragment } from "react";
import { deepEqual } from "../905/382883";
import { useAtomWithSubscription } from "../figma_app/27355";
import { APILoadingStatus } from "../905/520829";
import { renderI18nText, getI18nString } from "../905/303541";
import { jM, CZ, L8 } from "../905/124270";
import { isLongText } from "../905/171315";
import { y as _$$y } from "../905/713563";
import { useDispatch, useSelector } from "react-redux";
import { loadSearchResultsThunk, searchSetLastAckedQueryIdAction, searchSetLastLoadedQueryAction } from "../905/977218";
import { SearchAnalytics } from "../905/574958";
import { searchInputAtom, searchQueryAtom, facetFiltersAtom, searchPreviewOrderAtom, searchResponsesAtom, searchScopeAtom } from "../905/61477";
import { Q0, kq } from "../905/994947";
import { convertSearchModelTypeToModelType, PublicModelType, getModelTypeEmptyStateI18n, getModelTypeHeaderI18n } from "../figma_app/162807";
import { e as _$$e } from "../905/404280";
import { H } from "../905/315077";
import { customHistory } from "../905/612521";
import { useSubscription } from "../figma_app/288654";
import { SvgComponent } from "../905/714743";
import { W } from "../905/95038";
import { G as _$$G } from "../905/720066";
import { uF, NE, Xx, e_, hl, KL } from "../905/182534";
import { hideModalHandler } from "../905/156213";
import { FolderSearchResult } from "../figma_app/43951";
import { cr, yY, CO } from "../905/703676";
import { a as _$$a } from "../905/682573";
import { A as _$$A } from "../1617/110063";
import { TeamAvatar, AvatarSize, UserAvatar } from "../905/590952";
import { h1 } from "../905/986103";
import { H as _$$H } from "../905/209153";
import { In } from "../905/672640";
import { A as _$$A2 } from "../svg/635182";
function N({
  folderResult: e,
  id: t,
  path: i,
  position: a,
  onContextMenuCallback: o
}) {
  let l = useDispatch();
  let d = useAtomWithSubscription(searchInputAtom);
  let c = uF(e.model);
  let u = _$$G(c, a, e);
  let m = useCallback(t => {
    t.preventDefault();
    t.metaKey || 1 === t.button ? customHistory.redirect(c, "_blank") : (l(hideModalHandler()), NE(l, e.model));
  }, [c, l, e]);
  let h = useCallback(t => {
    t.preventDefault();
    l(hideModalHandler());
    NE(l, e.model);
  }, [l, e]);
  let f = useCallback(t => {
    o({
      index: 0,
      data: e
    }, t);
  }, [e, o]);
  return jsx(cr, {
    breadcrumbElement: jsx(P, {
      folderResult: e
    }),
    elementBesideName: e.model.is_connected_project ? jsx(W, {}) : void 0,
    icon: jsx(SvgComponent, {
      className: "faceted_search_preview_folder_row--icon--TnWhg",
      svg: _$$A
    }),
    id: t,
    onClickCallback: m,
    onContextMenuCallback: f,
    onKeyEnterCallback: h,
    path: i,
    text: e.model.name,
    textToHighlight: d,
    trackInteraction: u
  });
}
function P({
  folderResult: e
}) {
  let {
    data
  } = useSubscription(FolderSearchResult, {
    teamId: e.model.team_id ?? ""
  }, {
    enabled: !!e.model.team_id
  });
  let i = data?.team?.name || "";
  let r = i ? renderI18nText("search.preview_item.in_team", {
    teamName: i
  }) : null;
  let a = renderI18nText("search.preview_item.num_files_in_project", {
    fileCount: e.file_count
  });
  return jsx(_$$a, {
    leftElement: r,
    rightElement: a
  });
}
function D({
  teamResult: e,
  id: t,
  path: i,
  position: a,
  onContextMenuCallback: o
}) {
  let l = useDispatch();
  let d = useAtomWithSubscription(searchQueryAtom);
  let c = Xx(e.model);
  let u = _$$G(c, a, e);
  let m = useCallback(t => {
    t.preventDefault();
    t.metaKey || 1 === t.button ? customHistory.redirect(c, "_blank") : (l(hideModalHandler()), e_(l, e.model));
  }, [c, l, e]);
  let h = useCallback(t => {
    t.preventDefault();
    l(hideModalHandler());
    e_(l, e.model);
  }, [l, e]);
  let f = useCallback(t => {
    o({
      index: 0,
      data: e
    }, t);
  }, [o, e]);
  return jsx(cr, {
    breadcrumbElement: jsx(L, {
      teamResult: e
    }),
    icon: jsx(TeamAvatar, {
      team: e.model,
      size: AvatarSize.MEDIUM
    }),
    id: t,
    onClickCallback: m,
    onContextMenuCallback: f,
    onKeyEnterCallback: h,
    path: i,
    text: e.model.name,
    textToHighlight: d,
    trackInteraction: u
  });
}
function L({
  teamResult: e
}) {
  let t = useSelector(t => t.teams[e.model.id]);
  let i = renderI18nText("search.preview_item.num_members_in_team", {
    memberCount: e.member_count
  });
  let r = t ? renderI18nText("search.preview_item.num_projects_in_team", {
    projectCount: t.projects ?? 0
  }) : null;
  return jsx(_$$a, {
    leftElement: i,
    rightElement: r
  });
}
function $$j({
  id: e,
  path: t,
  position: i,
  userResult: a,
  onContextMenuCallback: o
}) {
  let d = useDispatch();
  let c = useAtomWithSubscription(searchQueryAtom);
  let u = useSelector(e => e.currentUserOrgId || void 0);
  let m = useSelector(e => e.orgById);
  let h = hl(a.model, u);
  let f = _$$G(h, i, a);
  let _ = useCallback(e => {
    e.preventDefault();
    e.metaKey || 1 === e.button ? customHistory.redirect(h, "_blank") : (d(hideModalHandler()), KL(d, a.model));
  }, [h, d, a]);
  let A = useCallback(e => {
    e.preventDefault();
    d(hideModalHandler());
    KL(d, a.model);
  }, [d, a]);
  let y = useCallback(e => {
    o({
      index: 0,
      data: a
    }, e);
  }, [o, a]);
  let v = a.model.org_id && m[a.model.org_id] || null;
  let I = jsxs("div", {
    className: "faceted_search_preview_user_row--iconContainer--d-n6O",
    children: [jsx(UserAvatar, {
      user: a.model,
      size: AvatarSize.MEDIUM
    }), v && jsx("div", {
      className: "faceted_search_preview_user_row--planIcon--bXPm0",
      children: jsx(_$$H, {
        entityId: v.id,
        entityName: v.name,
        imgUrl: v.img_url,
        size: 10
      })
    })]
  });
  return jsx(cr, {
    breadcrumbElement: a.last_active_at ? renderI18nText("search.preview_item.active_from_now", {
      relativeTimeString: jsx(h1, {
        date: a.last_active_at,
        style: "narrow"
      })
    }) : void 0,
    icon: I,
    id: e,
    onClickCallback: _,
    onContextMenuCallback: y,
    onKeyEnterCallback: A,
    path: t,
    text: a.model.name || a.model.handle,
    textToHighlight: c,
    trackInteraction: f
  });
}
function V({
  onSearch: e,
  id: t,
  path: i,
  showResultsForModelType: a
}) {
  let o = useAtomWithSubscription(searchInputAtom);
  let c = useAtomWithSubscription(jM);
  let u = a && c ? convertSearchModelTypeToModelType(c) : null;
  let p = useCallback(t => {
    t.preventDefault();
    t.metaKey || e(o, !1, !0, !0);
  }, [o, e]);
  let m = useMemo(() => {
    switch (u) {
      case PublicModelType.FILES:
        return jsx(In, {
          icon: "page-16",
          fill: "brand"
        });
      case PublicModelType.PROJECTS:
        return jsx(In, {
          icon: "folder-16",
          fill: "brand"
        });
      case PublicModelType.TEAMS:
        return jsx(In, {
          icon: "team-16",
          fill: "brand"
        });
      case PublicModelType.USERS:
        return jsx(SvgComponent, {
          svg: _$$A2,
          className: "faceted_search_see_all_results--icon--XAyF3"
        });
      default:
        return jsx(In, {
          icon: "search-32",
          fill: "brand"
        });
    }
  }, [u]);
  let h = useMemo(() => {
    switch (u) {
      case PublicModelType.FILES:
        return getI18nString("search.facet_preview_section.see_more_files");
      case PublicModelType.PROJECTS:
        return getI18nString("search.facet_preview_section.see_more_projects");
      case PublicModelType.TEAMS:
        return getI18nString("search.facet_preview_section.see_more_teams");
      case PublicModelType.USERS:
        return getI18nString("search.facet_preview_section.see_more_users");
      default:
        return getI18nString("search.preview_section.see_all_results");
    }
  }, [u]);
  return jsx("div", {
    className: "faceted_search_see_all_results--container--FbF-L",
    onContextMenu: e => e.preventDefault(),
    children: jsx(cr, {
      href: "",
      icon: m,
      id: t,
      onClickCallback: p,
      path: i,
      rowStyle: yY.BRAND_HOVER,
      rowHeight: CO.SHORT,
      text: h
    })
  });
}
let G = "faceted_search_preview_results--emptyState--MCu1y";
export function $$z0({
  id: e,
  path: t
}) {
  let i = useAtomWithSubscription(jM);
  let b = useAtomWithSubscription(facetFiltersAtom);
  let v = useAtomWithSubscription(CZ);
  let I = useAtomWithSubscription(searchPreviewOrderAtom);
  let E = useAtomWithSubscription(searchResponsesAtom);
  let x = useAtomWithSubscription(searchQueryAtom);
  let S = convertSearchModelTypeToModelType(i);
  let w = function () {
    let e = useDispatch();
    let t = useSelector(e => e.search);
    let i = useSelector(e => e.selectedView);
    let n = useSelector(e => e.search.parameters);
    let r = loadSearchResultsThunk.loadingKeyForPayload({
      parameters: n
    });
    let a = useSelector(e => e.loadingState[r]);
    let l = useAtomWithSubscription(L8);
    a === APILoadingStatus.SUCCESS && t.queryId !== t.lastAckedQueryId && (t.parameters.query.length > 0 || l.length > 0) && (e(searchSetLastAckedQueryIdAction({
      lastAckedQueryId: t.queryId
    })), e(searchSetLastLoadedQueryAction({
      sessionId: t.sessionId,
      query: t.parameters.query,
      queryId: t.queryId
    })), SearchAnalytics.Session.trackClientResult(t, i));
    return a;
  }();
  let C = useAtomWithSubscription(searchScopeAtom);
  let T = _$$y("file_browser", C, !0);
  let k = useMemo(() => !w || w === APILoadingStatus.LOADING || !deepEqual(b, v), [v, w, b]);
  let R = useMemo(() => {
    if (!E) return !1;
    for (let e of I) {
      let t = E[e]?.results;
      if (t && t.length > 0) return !1;
    }
    return !0;
  }, [I, E]);
  return isLongText(x) ? jsx("div", {
    className: G,
    children: renderI18nText("search.error.max_query_length_exceeded")
  }) : k ? jsx(_$$e, {
    numRows: 7
  }) : R ? jsxs(Fragment, {
    children: [jsx("div", {
      className: G,
      "data-testid": "facetedSearchNoResults",
      children: x ? S ? jsxs(Fragment, {
        children: [getModelTypeEmptyStateI18n(S), "\xa0", jsx("span", {
          children: x
        })]
      }) : renderI18nText("search.empty_state.no_file_project_team_or_people_results", {
        searchQuery: x
      }) : renderI18nText("search.zero_state.empty_state")
    }), jsx(V, {
      id: e,
      path: t,
      onSearch: T
    })]
  }) : jsx(Q0, {
    isDropdown: !0,
    children: jsx(kq.Consumer, {
      children: i => jsxs(Fragment, {
        children: [I.map((a, s) => {
          let o = E[a]?.results;
          return o && 0 !== o.length ? jsxs(_$$Fragment, {
            children: [I.length > 1 && jsx("div", {
              className: "faceted_search_preview_results--header--0RvlC faceted_search_preview_recents--header--JjcIl",
              children: getModelTypeHeaderI18n(a)
            }), o.map((r, a) => {
              if (r.search_model_type === PublicModelType.FILES) {
                let o = `${e}-file-${a}`;
                return jsx(H, {
                  fileResult: r,
                  id: o,
                  path: [...t, 0, s, a],
                  position: a,
                  onContextMenuCallback: i.onContextMenuClick
                }, o);
              }
              if (r.search_model_type === PublicModelType.PROJECTS) {
                let o = `${e}-folder-${a}`;
                return jsx(N, {
                  folderResult: r,
                  id: o,
                  path: [...t, 0, s, a],
                  position: a,
                  onContextMenuCallback: i.onContextMenuClick
                }, o);
              }
              if (r.search_model_type === PublicModelType.TEAMS) {
                let o = `${e}-team-${a}`;
                return jsx(D, {
                  teamResult: r,
                  id: o,
                  path: [...t, 0, s, a],
                  position: a,
                  onContextMenuCallback: i.onContextMenuClick
                }, o);
              }
              if (r.search_model_type === PublicModelType.USERS) {
                let o = `${e}-user-${a}`;
                return jsx($$j, {
                  userResult: r,
                  id: o,
                  path: [...t, 0, s, a],
                  position: a,
                  onContextMenuCallback: i.onContextMenuClick
                }, o);
              }
            })]
          }, s) : null;
        }), jsx(V, {
          id: `${e}-see-all`,
          path: [...t, 1],
          onSearch: T,
          showResultsForModelType: !0
        })]
      })
    })
  });
}
export const j = $$z0;
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo, Fragment as _$$Fragment } from "react";
import { deepEqual } from "../905/382883";
import { useAtomWithSubscription } from "../figma_app/27355";
import { r as _$$r } from "../905/520829";
import { renderI18nText, getI18nString } from "../905/303541";
import { jM, CZ, L8 } from "../905/124270";
import { GX } from "../905/171315";
import { y as _$$y } from "../905/713563";
import { useDispatch, useSelector } from "react-redux";
import { $P, ej, w2 } from "../905/977218";
import { vj } from "../905/574958";
import { Q8, Q, ih, Yj, ic, sC } from "../905/61477";
import { Q0, kq } from "../905/994947";
import { Xr, uH, hf, q6 } from "../figma_app/162807";
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
import { nl, Pf, H8 } from "../905/590952";
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
  let d = useAtomWithSubscription(Q8);
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
  let d = useAtomWithSubscription(Q);
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
    icon: jsx(nl, {
      team: e.model,
      size: Pf.MEDIUM
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
  let c = useAtomWithSubscription(Q);
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
    children: [jsx(H8, {
      user: a.model,
      size: Pf.MEDIUM
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
  let o = useAtomWithSubscription(Q8);
  let c = useAtomWithSubscription(jM);
  let u = a && c ? Xr(c) : null;
  let p = useCallback(t => {
    t.preventDefault();
    t.metaKey || e(o, !1, !0, !0);
  }, [o, e]);
  let m = useMemo(() => {
    switch (u) {
      case uH.FILES:
        return jsx(In, {
          icon: "page-16",
          fill: "brand"
        });
      case uH.PROJECTS:
        return jsx(In, {
          icon: "folder-16",
          fill: "brand"
        });
      case uH.TEAMS:
        return jsx(In, {
          icon: "team-16",
          fill: "brand"
        });
      case uH.USERS:
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
      case uH.FILES:
        return getI18nString("search.facet_preview_section.see_more_files");
      case uH.PROJECTS:
        return getI18nString("search.facet_preview_section.see_more_projects");
      case uH.TEAMS:
        return getI18nString("search.facet_preview_section.see_more_teams");
      case uH.USERS:
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
  let b = useAtomWithSubscription(ih);
  let v = useAtomWithSubscription(CZ);
  let I = useAtomWithSubscription(Yj);
  let E = useAtomWithSubscription(ic);
  let x = useAtomWithSubscription(Q);
  let S = Xr(i);
  let w = function () {
    let e = useDispatch();
    let t = useSelector(e => e.search);
    let i = useSelector(e => e.selectedView);
    let n = useSelector(e => e.search.parameters);
    let r = $P.loadingKeyForPayload({
      parameters: n
    });
    let a = useSelector(e => e.loadingState[r]);
    let l = useAtomWithSubscription(L8);
    a === _$$r.SUCCESS && t.queryId !== t.lastAckedQueryId && (t.parameters.query.length > 0 || l.length > 0) && (e(ej({
      lastAckedQueryId: t.queryId
    })), e(w2({
      sessionId: t.sessionId,
      query: t.parameters.query,
      queryId: t.queryId
    })), vj.Session.trackClientResult(t, i));
    return a;
  }();
  let C = useAtomWithSubscription(sC);
  let T = _$$y("file_browser", C, !0);
  let k = useMemo(() => !w || w === _$$r.LOADING || !deepEqual(b, v), [v, w, b]);
  let R = useMemo(() => {
    if (!E) return !1;
    for (let e of I) {
      let t = E[e]?.results;
      if (t && t.length > 0) return !1;
    }
    return !0;
  }, [I, E]);
  return GX(x) ? jsx("div", {
    className: G,
    children: renderI18nText("search.error.max_query_length_exceeded")
  }) : k ? jsx(_$$e, {
    numRows: 7
  }) : R ? jsxs(Fragment, {
    children: [jsx("div", {
      className: G,
      "data-testid": "facetedSearchNoResults",
      children: x ? S ? jsxs(Fragment, {
        children: [hf(S), "\xa0", jsx("span", {
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
              children: q6(a)
            }), o.map((r, a) => {
              if (r.search_model_type === uH.FILES) {
                let o = `${e}-file-${a}`;
                return jsx(H, {
                  fileResult: r,
                  id: o,
                  path: [...t, 0, s, a],
                  position: a,
                  onContextMenuCallback: i.onContextMenuClick
                }, o);
              }
              if (r.search_model_type === uH.PROJECTS) {
                let o = `${e}-folder-${a}`;
                return jsx(N, {
                  folderResult: r,
                  id: o,
                  path: [...t, 0, s, a],
                  position: a,
                  onContextMenuCallback: i.onContextMenuClick
                }, o);
              }
              if (r.search_model_type === uH.TEAMS) {
                let o = `${e}-team-${a}`;
                return jsx(D, {
                  teamResult: r,
                  id: o,
                  path: [...t, 0, s, a],
                  position: a,
                  onContextMenuCallback: i.onContextMenuClick
                }, o);
              }
              if (r.search_model_type === uH.USERS) {
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
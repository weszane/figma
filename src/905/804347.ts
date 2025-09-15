import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useMemo, createElement, useState, Component, memo, useCallback, useId, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { analyticsEventManager } from "../905/449184";
import { getInitialOptions } from "../figma_app/169182";
import { useSubscription, useMultiSubscription } from "../figma_app/288654";
import { BrowserInfo } from "../figma_app/778880";
import { j as _$$j } from "../905/35621";
import { G as _$$G } from "../905/186289";
import { resourceUtils } from "../905/989992";
import { aQ } from "../figma_app/672951";
import { L as _$$L } from "../905/406205";
import { ProjectTilePermissions, TeamTilePermissions, TeamOrphanedStatus } from "../figma_app/43951";
import { x as _$$x } from "../905/695363";
import { ViewMode, SortField, SortOrder } from "../figma_app/756995";
import { h as _$$h } from "../905/971482";
import { GR, hZ } from "../figma_app/330108";
import { cD } from "../figma_app/598018";
import { Lk, PublicModelType, ProjectSortField } from "../figma_app/162807";
import { jn } from "../figma_app/522082";
import { vt } from "../figma_app/231614";
import { kq, ro } from "../905/994947";
import { N as _$$N } from "../905/438674";
import { ignoreCommandOrShift, isCommandOrShift } from "../905/63728";
import { h1 } from "../905/986103";
import { C as _$$C } from "../905/196436";
import { NU } from "../figma_app/204891";
import { y as _$$y } from "../905/171275";
import { UN, dm } from "../figma_app/976345";
import { sf } from "../905/929976";
import { filePutAction } from "../figma_app/78808";
import { useCurrentUserOrgId } from "../905/845253";
import { getDesignFileUrlWithOptions } from "../905/612685";
import { mapFileTypeToEditorType } from "../figma_app/53721";
import { InterProfileType } from "../905/895626";
import { az as _$$az, rE } from "../figma_app/805373";
import { H as _$$H } from "../905/209153";
import { lJ, GQ } from "../905/50159";
import { q0 } from "../905/546357";
import { g8 } from "../905/378567";
import { g as _$$g } from "../905/345380";
import { bUL } from "../figma_app/822011";
import { LinkPrimitive } from "../figma_app/496441";
import { ci } from "../figma_app/643789";
import { W as _$$W } from "../905/307631";
import { h2, $b } from "../905/820960";
import { showModalHandler } from "../905/156213";
import { trackTeamEvent } from "../figma_app/314264";
import { FC } from "../figma_app/212807";
import { _6 } from "../figma_app/386952";
import { selectCurrentUser, getUserId } from "../905/372672";
import { VP } from "../905/18797";
import { p9 } from "../figma_app/88768";
import { hasViewerRoleAccessOnTeam, canMemberOrg } from "../figma_app/642025";
import { ViewTypeEnum } from "../figma_app/471068";
import { p as _$$p2 } from "../905/195198";
import { Ru } from "../905/572991";
import { debug } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { Cm } from "../905/174697";
import { d as _$$d } from "../905/720066";
import { v as _$$v } from "../905/939922";
import { L as _$$L2 } from "../905/13390";
import { i as _$$i } from "../905/610691";
import { d as _$$d2 } from "../905/958822";
import { b0 } from "../905/763690";
import { qv } from "../905/977218";
import { TrackingProvider } from "../figma_app/831799";
import { nb, fA } from "../figma_app/543100";
import { fileEntityDataMapper } from "../905/943101";
import { vj } from "../905/574958";
import { e0 as _$$e } from "../905/696396";
import { p as _$$p3 } from "../figma_app/353099";
import { y as _$$y2 } from "../figma_app/887997";
import { m as _$$m } from "../905/52659";
import { Dq } from "../905/316062";
import { w as _$$w } from "../905/191841";
import { lQ } from "../905/934246";
import eq from "classnames";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { H8, Pf } from "../905/590952";
import { customHistory } from "../905/612521";
import { A as _$$A } from "../905/351112";
import { S as _$$S } from "../figma_app/11182";
import { BK } from "../905/848862";
import { w as _$$w2 } from "../figma_app/883622";
import { noop } from "../905/834956";
import { N as _$$N2 } from "../figma_app/609500";
function y(e) {
  let {
    searchResult
  } = e;
  let i = e.searchResult.model.team_id;
  let n = _$$x();
  let s = useSelector(e => (i && (e.teams[i]?.name || n[i]?.name)) ?? null);
  let o = searchResult.files_last_touched_at ? new Date(searchResult.files_last_touched_at) : null;
  let l = useMemo(() => resourceUtils.loaded(searchResult.recent_files), [searchResult.recent_files]);
  return createElement(_$$L, {
    ...e,
    key: searchResult.model.id,
    folder: searchResult.model,
    folderFilesResult: l,
    folderLastUpdated: o,
    folderName: searchResult.model.name,
    folderOwnerName: null,
    folderSharedAt: null,
    folderTeamName: s,
    inItemsView: !1,
    useLGPerms: e.useLGPerms
  });
}
let b = _$$h({
  [ViewMode.GRID]: function (e) {
    let t = e.searchResult.model;
    let i = t.id;
    let r = useSubscription(ProjectTilePermissions, {
      projectId: i
    });
    if ("loaded" === r.status && r.data.project) {
      let e = aQ(r.data.project);
      t.folderPerms = e;
    }
    return jsx(y, {
      ...e,
      useLGPerms: !0
    });
  },
  [ViewMode.LIST]: () => jsx(Fragment, {})
});
function z(e, t) {
  let i = useDispatch();
  return useMemo(() => ({
    onClick: () => {
      i(UN({
        fileKey: e.key,
        entrypoint: "search",
        viewMode: 0 === t ? "list" : "grid"
      }));
      i(filePutAction({
        file: e
      }));
      i(sf({
        view: "fullscreen",
        fileKey: e.key,
        editorType: mapFileTypeToEditorType(e.editor_type)
      }));
    },
    onClickOwner: () => {
      i(sf({
        view: "user",
        userId: e.creator_id,
        userViewTab: InterProfileType.INTERNAL_PROFILE
      }));
    }
  }), [i, e, t]);
}
let H = _$$h({
  [ViewMode.GRID]: function (e) {
    let [t, i] = useState(!1);
    let a = getDesignFileUrlWithOptions(e.searchResult.model);
    let {
      onClick
    } = z(e.searchResult.model, e.viewMode);
    return jsx("div", {
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: jsx(K, {
        ...e,
        href: a,
        isHover: t,
        viewMode: e.viewMode,
        onClick
      })
    });
  },
  [ViewMode.LIST]: function (e) {
    let t = getDesignFileUrlWithOptions(e.searchResult.model);
    let {
      onClick,
      onClickOwner
    } = z(e.searchResult.model, e.viewMode);
    let a = function (e) {
      let t = useCurrentUserOrgId();
      return t ? `/files/${t}/user/${e}` : `/files/user/${e}`;
    }(e.searchResult.model.owner?.id);
    return jsx(W, {
      ...e,
      href: t,
      onClick,
      onClickOwner,
      linkToOwnerProfile: a
    });
  }
});
class W extends Component {
  constructor() {
    super(...arguments);
    this.onClick = ignoreCommandOrShift(e => {
      e.preventDefault();
      this.props.onClick();
    });
    this.onClickOwner = ignoreCommandOrShift(e => {
      e.preventDefault();
      e.stopPropagation();
      this.props.onClickOwner();
    });
  }
  render() {
    let {
      searchResult,
      linkToOwnerProfile
    } = this.props;
    return jsx(_$$N, {
      onClick: this.onClick,
      href: this.props.href,
      htmlAttributes: {
        tabIndex: 0
      },
      children: jsxs("div", {
        className: "files--rowFourColumn--w9noL files--rowTemplateFourColumn--bysBg files--rowTemplate--v0BCr search_list_row--row--xo6wT text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: [jsxs("div", {
          className: "files--name--ZpirS search_list_row--name--WpBVa search_list_row--_name--5gTc0 ellipsis--ellipsis--Tjyfa",
          children: [jsx("div", {
            className: "files--icon--lo26Y",
            children: jsx(NU, {
              file: searchResult.model,
              size: _$$y.SMALL,
              noBorder: !0
            })
          }), jsx("div", {
            className: "files--ellipsis--7Wlgk ellipsis--ellipsis--Tjyfa",
            children: searchResult.model.name
          })]
        }), jsx("div", {
          className: "files--touchedAt--PnuDP",
          children: jsx(h1, {
            date: searchResult.model.touched_at
          })
        }), jsx("div", {
          className: "files--createdAt--srXc5",
          children: jsx(h1, {
            date: searchResult.model.created_at
          })
        }), searchResult.model.owner && jsx(_$$N, {
          href: linkToOwnerProfile,
          children: jsx("div", {
            className: "files--owner--VD1o-",
            children: jsx(_$$az, {
              entity: searchResult.model.owner,
              size: 24,
              showIsMe: !1,
              onClick: this.onClickOwner
            }, searchResult.model.owner.id)
          })
        }), jsx(_$$C, {
          ...this.props
        })]
      })
    });
  }
}
function K(e) {
  let t = e.searchResult.model;
  let i = useSelector(e => e.orgById);
  let r = _$$x();
  let s = t.parent_org_id && i[t.parent_org_id] || t.team_id && r[t.team_id];
  let o = jsx(Fragment, {
    children: jsx(lJ, {
      left: s && jsx(_$$H, {
        entityId: s.id,
        entityName: s.name,
        imgUrl: s.img_url
      }),
      file: t
    })
  });
  return jsx(GQ, {
    ...e,
    onClick: e.onClick,
    href: e.href,
    file: e.searchResult.model,
    subtitle: o,
    activeFileUsers: [],
    currentUser: null,
    isHover: e.isHover,
    viewMode: e.viewMode
  });
}
function eu(e) {
  let {
    href,
    onClickWithDefaults,
    children
  } = e;
  return jsxs(Fragment, {
    children: [href && jsx(LinkPrimitive, {
      onClick: onClickWithDefaults,
      href,
      children
    }), !href && children]
  });
}
let ep = memo(function (e) {
  let {
    searchResult
  } = e;
  let i = searchResult.files_last_touched_at;
  let r = searchResult.model;
  let a = searchResult.model.created_at;
  let {
    onClick,
    onJoin,
    onLeave
  } = em(r.id, e.canUserViewTeam);
  let d = FC();
  let c = _6();
  let u = ignoreCommandOrShift(t => {
    t.preventDefault();
    trackTeamEvent("file_browser_team_click", e.searchResult.model.id, d, {
      selectedView: "recentsAndSharing" === c.view ? c.tab || ViewTypeEnum.RECENTLY_VIEWED : c.view,
      viewMode: "list"
    });
    onClick();
  });
  return jsx(eu, {
    onClickWithDefaults: u,
    href: e.canUserViewTeam ? `/files/team/${r.id}` : void 0,
    children: jsxs("div", {
      className: "teams--row--Jrp4F teams--rowTemplate--G068V search_list_row--row--xo6wT text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: [jsx("div", {
        className: e.canUserViewTeam ? "teams--name--E9r5y search_list_row--name--WpBVa search_list_row--_name--5gTc0 ellipsis--ellipsis--Tjyfa" : "teams--nameDisabled--gGY6t search_list_row--nameDisabled---iIdo search_list_row--_name--5gTc0 ellipsis--ellipsis--Tjyfa",
        children: jsx(rE, {
          entity: r,
          size: 10,
          hideFallbackInitial: !0,
          onClick: void 0
        }, r.id)
      }), jsx("div", {
        className: "teams--touchedAt--nRyn6",
        children: i ? jsx(h1, {
          date: i
        }) : "\u2013"
      }), jsx("div", {
        className: "teams--createdAt--3hbJC",
        children: jsx(h1, {
          date: a
        })
      }), jsx("div", {
        className: "teams--memberCount--8dPEi",
        children: searchResult.member_count
      }), jsx("div", {
        className: "teams--join--KCnXg",
        children: jsx(_$$W, {
          team: r,
          isCurrentUserInTeam: e.isCurrentUserInTeam,
          isLoading: e.isLoading,
          onOpenTeam: u,
          onJoin,
          onLeave,
          spinnerClassName: "teams--joinSpinner--t8AWc",
          isCardActive: !1
        })
      }), jsx(_$$C, {
        ...e
      })]
    })
  });
});
function em(e, t) {
  let i = useDispatch();
  return useMemo(() => ({
    onClick: t ? () => {
      i(dm(e));
    } : () => {},
    onJoin: GR(i, e),
    onLeave: () => {
      i(showModalHandler({
        type: _$$p2,
        data: {
          teamId: e
        }
      }));
    }
  }), [i, e, t]);
}
let eh = _$$h({
  [ViewMode.GRID]: function (e) {
    let t = e.searchResult.model;
    let {
      canUserViewTeam,
      isCurrentUserInTeam,
      isLoading
    } = function (e) {
      let t = e.id;
      let i = useSelector(e => e.loadingState);
      let n = useMemo(() => VP(i, p9(t)), [i, t]);
      let s = FC();
      let o = hasViewerRoleAccessOnTeam(e.id, s);
      return {
        canUserViewTeam: canMemberOrg(e.org_id, s) && e.org_access === bUL.PUBLIC || o,
        isCurrentUserInTeam: o,
        isLoading: n
      };
    }(e.searchResult.model);
    let l = useSelector(e => e.currentUserOrgId);
    let d = t.org_id === l ? h2 : $b;
    let {
      onJoin,
      onLeave
    } = em(t.id, canUserViewTeam);
    let p = selectCurrentUser();
    return jsx("div", {
      children: jsx(d, {
        ...e,
        currentUser: p,
        inItemsView: !1,
        isCurrentUserInTeam,
        isLoading,
        memberCount: e.searchResult.member_count,
        onJoin,
        onLeave,
        selectedTeamId: e.selectedSearchResultId,
        setSelectedTeamId: e.setSelectedSearchResultId,
        team: e.searchResult.model,
        useLGPerms: !0
      })
    });
  },
  [ViewMode.LIST]: function (e) {
    let t = e.searchResult.model;
    let i = useSubscription(TeamTilePermissions, {
      teamId: t.id
    });
    let r = !1;
    let a = !1;
    if ("loaded" === i.status && i.data?.team) {
      let e = ci(i.data.team);
      r = e.canView;
      a = e.isInTeam;
    }
    return jsx(ep, {
      ...e,
      canUserViewTeam: r,
      isCurrentUserInTeam: a
    });
  }
});
function eg(e) {
  let t = e.searchResult.model;
  let i = function (e, t) {
    let i = useDispatch();
    return ignoreCommandOrShift(n => {
      n.preventDefault();
      i(sf({
        view: "user",
        userId: e,
        orgId: t || null,
        userViewTab: InterProfileType.INTERNAL_PROFILE
      }));
    });
  }(e.searchResult.model.id, e.searchResult.model.org_id);
  let r = ef(e.searchResult.model.id, e.searchResult.model.org_id);
  return jsxs(LinkPrimitive, {
    className: "users--row--va2mE search_list_row--row--xo6wT text--fontPos13--xW8hS text--_fontBase--QdLsd users--rowTemplate--bVQ-8",
    href: r,
    onClick: i,
    children: [jsx("div", {
      className: "users--listName--uYte0 search_list_row--name--WpBVa search_list_row--_name--5gTc0 ellipsis--ellipsis--Tjyfa",
      children: jsx(_$$az, {
        entity: t,
        size: 24
      }, t.id)
    }), jsx("div", {
      className: "users--rowEmail--S-HCQ ellipsis--ellipsis--Tjyfa",
      children: t.email
    }), jsx(_$$C, {
      className: e.className,
      showSettingsIcon: e.showSettingsIcon
    })]
  });
}
function ef(e, t) {
  return useMemo(() => t ? `/files/${t}/user/${e}` : `/files/user/${e}`, [t, e]);
}
let eD = {
  showInFolder: !0,
  open: !0,
  openNewTab: !0,
  restoreFromVersion: !0,
  rename: !0,
  share: !0,
  copyLink: !0,
  duplicateToDrafts: !0,
  delete: !0,
  createBranch: !0,
  publishOrgTemplate: !0,
  moveFile: !0
};
let eL = e => {
  switch (e) {
    case SortField.NAME:
      return Lk.NAME;
    case SortField.CREATED_AT:
      return Lk.CREATED_AT;
    case SortField.TOUCHED_AT:
      return Lk.TOUCHED_AT;
    case SortField.OWNER:
      return Lk.OWNER;
    case SortField.SEARCH_RELEVANCE:
      return Lk.RELEVANCY;
    default:
      debug(!0, "Should not try to sort by any other key in search list view");
      return Lk.NAME;
  }
};
let eF = e => {
  switch (e) {
    case Lk.NAME:
      return SortField.NAME;
    case Lk.CREATED_AT:
      return SortField.CREATED_AT;
    case Lk.TOUCHED_AT:
      return SortField.TOUCHED_AT;
    case Lk.OWNER:
      return SortField.OWNER;
    case Lk.RELEVANCY:
      return SortField.SEARCH_RELEVANCE;
  }
};
function eM(e) {
  let t = useDispatch();
  let i = useSelector(e => e.search.parameters.sortState);
  let s = _$$d();
  let [o, l] = useState([]);
  Cm(o);
  let {
    showing,
    show,
    data
  } = _$$L2();
  let p = useCallback((i, n, r) => {
    i.type === nb.FILE && (t(filePutAction({
      file: fileEntityDataMapper.toSinatra(i.file)
    })), s(r, "key" in n && "Enter" === n.key ? vj.Query.ClickAction.ENTER : vj.Query.ClickAction.CLICK, e.results.find(e => e.model.key === i.file.key)));
  }, [t, e.results, s]);
  let m = useCallback(e => {
    let n = eL(e);
    if (!n) return;
    let r = {
      ...i,
      [PublicModelType.FILES]: {
        sortKey: n,
        sortDesc: i.files.sortKey !== n || !i.files.sortDesc
      }
    };
    t(qv({
      sortState: r
    }));
  }, [t, i]);
  let h = useMemo(() => e.results.map(({
    model: e
  }) => fA(e)), [e.results]);
  let g = useCallback((e, t, i) => {
    show({
      data: {
        tile: e,
        targetRect: {
          top: t.clientY,
          right: t.clientX,
          bottom: t.clientY,
          left: t.clientX,
          width: 1,
          height: 1
        },
        index: i
      }
    });
  }, [show]);
  let f = _$$v();
  return jsxs(Fragment, {
    children: [jsx(_$$d2, {
      checksForViewOnlyLabels: e.checksForViewOnlyLabels,
      doNotFocusOnLoad: !0,
      handleOpenDropdown: g,
      handleOpenTile: p,
      interactiveThumbnailsEnabled: !!getFeatureFlags().scrub_file_browser_search_results,
      items: h,
      sortBy: m,
      sortConfig: {
        key: eF(i.files.sortKey),
        dir: i.files.sortDesc ? SortOrder.DESC : SortOrder.ASC
      },
      updateRenderedItems: l,
      viewType: e.viewMode
    }), jsx(_$$p3, {
      featureFlag: "scrub_file_browser_search_results",
      children: jsx(b0, {})
    }), (() => {
      let e = data?.tile ?? null;
      let t = e ? [e] : [];
      return jsx(TrackingProvider, {
        name: _$$e.TILES_VIEW_DROP_DOWN,
        enabled: showing,
        properties: {
          tileType: e?.type,
          tileFileId: e?.type === nb.FILE ? e?.file.key : void 0
        },
        children: jsx(_$$i, {
          tileActions: eD,
          tile: e,
          selectedTiles: t,
          openTile: t => {
            e && f(e, t);
          },
          dropdownVisible: showing
        })
      });
    })()]
  });
}
function eU(e) {
  let t = useSelector(e => e.publishedPlugins);
  let i = useMemo(() => e.results.map(e => t[e.model.id] ?? e.model), [e.results, t]);
  return jsx(_$$y2, {
    plugins: i
  });
}
let eG = e => {
  switch (e) {
    case Dq.NAME:
      return ProjectSortField.NAME;
    case Dq.CREATED_AT:
      return ProjectSortField.CREATED_AT;
    default:
      debug(!0, "Should not try to sort by any other key in search list view");
      return ProjectSortField.NAME;
  }
};
let ez = e => {
  switch (e) {
    case ProjectSortField.NAME:
      return Dq.NAME;
    case ProjectSortField.CREATED_AT:
      return Dq.CREATED_AT;
    default:
      debug(!0, "Should not try to sort by any other key in search project list view");
      return Dq.NAME;
  }
};
function eH(e) {
  let t = useDispatch();
  let i = useSelector(e => e.search.parameters.sortState);
  let r = e => {
    let n = eG(e.sortKey);
    if (!n) return;
    let r = {
      ...i,
      [PublicModelType.PROJECTS]: {
        sortKey: n,
        sortDesc: i.projects.sortKey !== n || !i.projects.sortDesc
      }
    };
    t(qv({
      sortState: r
    }));
  };
  let s = e.results.map(e => ({
    ...e.model,
    files_last_touched_at: e.files_last_touched_at
  }));
  return jsx(kq.Consumer, {
    children: t => jsx(_$$m, {
      searchResults: !0,
      folderList: s,
      onContextMenuOverride: e.viewMode === ViewMode.GRID ? void 0 : (i, n, r) => {
        t.onContextMenuClick({
          data: e.results[r],
          index: r
        }, n);
      },
      currentSortOverride: {
        field: ez(i.projects.sortKey),
        isDescending: i.projects.sortDesc
      },
      onChangeSortOptions: r,
      checksForViewOnlyLabels: e.checksForViewOnlyLabels,
      viewType: e.viewMode
    })
  });
}
function eK(e) {
  let t = useMemo(() => e.results.map(e => ({
    ...e.model,
    team_last_touched_at: e.files_last_touched_at,
    member_count: e.member_count
  })), [e.results]);
  return jsx(_$$w, {
    orgTeams: t
  });
}
var e$ = eq;
function e0() {
  let e = useDispatch();
  let t = getUserId();
  let i = getUserId();
  return useCallback((n, r) => {
    if (isCommandOrShift(r)) {
      r?.stopPropagation();
      let e = n.id;
      if (e === t) {
        customHistory.redirect(`/files/${i}/user/${e}`, "_blank");
        return;
      }
      let a = n.org_id;
      let s = a ? `/files/${a}/user/${e}` : `/files/user/${e}`;
      customHistory.redirect(s, "_blank");
      return;
    }
    r?.preventDefault();
    e(sf({
      view: "user",
      userId: n.id,
      orgId: n.org_id || null,
      userViewTab: InterProfileType.INTERNAL_PROFILE
    }));
  }, [t, i, e]);
}
function e6(e) {
  let {
    user,
    targetRect
  } = e.dropdownData;
  let r = useDispatch();
  let s = e0();
  let o = ef(user.id);
  if (!targetRect) return null;
  let l = [];
  l.push({
    displayText: getI18nString("general.open"),
    callback: (e, i, n, r) => s(user, r)
  });
  l.push({
    displayText: getI18nString("file_browser.open_in_new_tab"),
    callback: (e, t, i, n) => customHistory.redirect(`${location.origin}` + o, "_blank")
  });
  l.push(_$$w2);
  l.push({
    displayText: getI18nString("file_browser.copy_link"),
    callback: () => {
      r(_$$S({
        url: `${location.origin}` + o
      }));
    }
  });
  return jsx(noop, {
    dispatch: r,
    parentRect: targetRect,
    rootAndSubmenuMinWidth: 120,
    rootAndSubmenuMaxWidth: 190,
    items: l,
    onSelectItem: (e, t) => e.callback?.("", {}, r, t),
    shouldUsePortal: !0,
    showPoint: !1
  });
}
function e7(e) {
  let t = useMemo(() => e.results.map(e => ({
    ...e.model,
    last_active_at: e.last_active_at
  })), [e.results]);
  let i = BrowserInfo.mobile || BrowserInfo.tablet;
  let s = useSelector(e => e.orgById);
  let o = e0();
  let {
    showing,
    show,
    data
  } = function () {
    let e = useId();
    return BK(`USER_DROPDOWN_${e}`);
  }();
  let p = useCallback((e, t, i) => {
    1 === e.length && show({
      data: {
        user: e[0],
        targetRect: {
          top: t.clientY,
          right: t.clientX,
          bottom: t.clientY,
          left: t.clientX,
          width: 1,
          height: 1
        },
        index: i
      }
    });
  }, [show]);
  let m = useCallback(e => {
    let t = e.org_id && s[e.org_id];
    return jsxs("div", {
      className: "search_results_users_items_view--tileContainer--QZxVL",
      children: [jsx("div", {
        className: e$()(_$$s.flex.justifyEnd.pt12.pr12.minW32.minH32.$, "search_results_users_items_view--settingsButton--UFVFe"),
        children: jsx(_$$C, {
          showSettingsIcon: i
        })
      }), jsxs("div", {
        className: e$()(_$$s.flex.flexColumn.cursorDefault.selectNone.itemsCenter.$, "search_results_users_items_view--tileContent--YoM64"),
        children: [jsx(H8, {
          user: e,
          size: Pf.XLARGE
        }), jsx("div", {
          className: e$()(_$$s.mt16.font13.$, "search_results_users_items_view--tileName--ffWxq search_results_users_items_view--gridEllipsis--ROrDw ellipsis--ellipsis--Tjyfa"),
          children: e.name || e.handle
        }), jsx("div", {
          className: e$()(_$$s.minH16.$, "search_results_users_items_view--email--KxUch search_results_users_items_view--gridEllipsis--ROrDw ellipsis--ellipsis--Tjyfa"),
          children: e.email
        }), jsxs("div", {
          className: e$()(_$$s.h36.py36.$, "search_results_users_items_view--lastActiveAt--DbBT1"),
          children: [t && jsxs("div", {
            className: _$$s.flex.flexRow.itemsCenter.justifyCenter.mb4.$,
            children: [jsx(_$$H, {
              entityId: t.id,
              entityName: t.name,
              imgUrl: t.img_url,
              hideTooltip: !0
            }), t.name]
          }), e.last_active_at ? renderI18nText("search.user_view.last_active", {
            relativeTimeString: jsx(h1, {
              date: e.last_active_at
            })
          }) : renderI18nText("search.user_view.not_active_yet")]
        })]
      })]
    });
  }, [s, i]);
  return jsxs("div", {
    className: _$$s.mb32.mx32.$,
    children: [jsx(_$$A, {
      viewType: ViewMode.GRID,
      getAriaLabel: e => e.handle,
      items: t,
      isDraggable: !1,
      multiselectDisabled: !0,
      handleContextMenu: p,
      updateRenderedItems: lQ,
      handleOpenItem: o,
      gridViewProps: {
        tileBorderRadius: 4,
        renderTile: m
      }
    }), showing && data && jsx(e6, {
      dropdownData: data
    })]
  });
}
function e9(e) {
  let t = useMemo(() => e.results.map(e => ({
    ...e.model
  })), [e.results]);
  return jsx(_$$N2, {
    widgets: t
  });
}
function te(e) {
  useEffect(() => {
    analyticsEventManager.trackDefinedEvent("search_experience.dead_code", {
      userId: getInitialOptions().user_data?.id,
      codeLocation: `SearchResult - type: ${e.searchResult.search_model_type} ${e.viewMode}`
    });
  }, [e.searchResult.search_model_type, e.viewMode]);
  let t = {
    showSettingsIcon: !1
  };
  switch ((BrowserInfo.mobile || BrowserInfo.tablet) && (t = {
    showSettingsIcon: !0,
    onFileSettingsClick: _$$j
  }), e.searchResult.search_model_type) {
    case PublicModelType.FILES:
      return jsx(H, {
        searchResult: e.searchResult,
        viewMode: e.viewMode,
        isFavorited: !!e.searchResult.model.is_favorited,
        ...t
      });
    case PublicModelType.PROJECTS:
      return jsx(b, {
        searchResult: e.searchResult,
        viewMode: e.viewMode,
        checksForViewOnlyLabels: e.checksForViewOnlyLabels,
        ...t
      });
    case PublicModelType.TEAMS:
      return jsx(eh, {
        searchResult: e.searchResult,
        viewMode: e.viewMode,
        setSelectedSearchResultId: e.setSelectedSearchResultId,
        selectedSearchResultId: e.selectedSearchResultId,
        ...t
      });
    case PublicModelType.USERS:
      return jsx(eg, {
        searchResult: e.searchResult,
        viewMode: e.viewMode,
        ...t
      });
    case PublicModelType.HUB_FILES:
      return jsx(q0, {
        searchResult: e.searchResult
      });
    case PublicModelType.PUBLIC_PLUGINS:
    case PublicModelType.PRIVATE_PLUGINS:
      return jsx(g8.SearchResult, {
        searchResult: e.searchResult,
        viewMode: e.viewMode
      });
    case PublicModelType.PUBLIC_PROFILES:
      return jsx(_$$g.SearchResult, {
        searchResult: e.searchResult,
        viewMode: e.viewMode
      });
    case PublicModelType.PUBLIC_WIDGETS:
    case PublicModelType.PRIVATE_WIDGETS:
      return jsx(Ru.SearchResult, {
        searchResult: e.searchResult,
        viewMode: e.viewMode
      });
  }
}
export function $$tt0(e) {
  let t = e.searchResults;
  let [i, s] = useState(void 0);
  let o = cD();
  let d = vt(o);
  let c = jn();
  let p = useMemo(() => e.searchModelType === PublicModelType.TEAMS ? t.map(e => ({
    teamId: e.model.id
  })) : [], [e.searchModelType, t]);
  let m = useMultiSubscription(TeamOrphanedStatus, p, {
    enabled: e.searchModelType === PublicModelType.TEAMS
  });
  let h = useDispatch();
  useEffect(() => {
    if (e.searchModelType === PublicModelType.TEAMS) {
      let e = {};
      m.forEach(t => {
        e[t.args.teamId] = t.result.data?.team.status === "loaded" && !!t.result.data.team.data?.isOrphaned;
      });
      let i = t.map(t => ({
        ...t.model,
        orphaned: e[t.model.id]
      }));
      h(hZ({
        teams: i
      }));
    }
  }, [h, t, m, e.searchModelType]);
  let f = o ? {
    teamId: o,
    isLockedTeam: d || c
  } : void 0;
  return e.searchModelType === PublicModelType.FILES ? jsx(eM, {
    results: t,
    viewMode: e.viewMode,
    checksForViewOnlyLabels: f
  }) : e.searchModelType === PublicModelType.PROJECTS ? jsx(eH, {
    results: t,
    checksForViewOnlyLabels: f,
    viewMode: e.viewMode
  }) : e.viewMode === ViewMode.GRID && e.searchModelType === PublicModelType.TEAMS ? jsx(eK, {
    results: t
  }) : e.viewMode === ViewMode.GRID && e.searchModelType === PublicModelType.USERS ? jsx(e7, {
    results: t
  }) : e.searchModelType === PublicModelType.PUBLIC_PLUGINS || e.searchModelType === PublicModelType.PRIVATE_PLUGINS ? jsx(eU, {
    results: t
  }) : e.searchModelType === PublicModelType.PUBLIC_WIDGETS || e.searchModelType === PublicModelType.PRIVATE_WIDGETS ? jsx(e9, {
    results: t
  }) : jsx(Fragment, {
    children: t.map((t, r) => {
      let a = "key" in t.model ? t.model.key : t.model.id;
      return jsx(_$$G, {
        category: e.searchModelType,
        searchResult: t,
        index: r,
        planFilter: e.planFilter,
        children: jsx(ro, {
          data: t,
          index: r,
          children: jsx(te, {
            searchResult: t,
            viewMode: e.viewMode,
            selectedSearchResultId: i,
            setSelectedSearchResultId: s,
            checksForViewOnlyLabels: f
          }, a)
        })
      }, a);
    })
  });
}
export const L = $$tt0;
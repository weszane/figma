import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useMemo, useRef, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { throwTypeError, debug } from "../figma_app/465776";
import { xk } from "@stylexjs/stylex";
import { useAtomWithSubscription, Xr } from "../figma_app/27355";
import { m8 } from "../905/864644";
import { gX } from "../figma_app/448654";
import { xD } from "../905/174697";
import { e as _$$e } from "../905/457828";
import { FlashActions } from "../905/573154";
import { renderI18nText, getI18nString } from "../905/303541";
import { v as _$$v } from "../905/939922";
import { A as _$$A } from "../905/351112";
import { Fh, Mw, U1 } from "../905/191601";
import { an, y$ } from "../905/81009";
import { Tf, nb, hi, c_, Y6, YC } from "../figma_app/543100";
import { useCurrentUserOrgId } from "../905/845253";
import { getSelectedView } from "../figma_app/386952";
import { fileEntityDataMapper } from "../905/943101";
import { isRecentsAndSharingView } from "../figma_app/193867";
import { yH } from "../figma_app/722141";
import { ViewTypeEnum } from "../figma_app/471068";
import { SortOrder } from "../figma_app/756995";
import { Xg, qf, mM } from "../905/375175";
import { SizeOption } from "../905/171275";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { TextWithTruncation } from "../905/984674";
import { E as _$$E2 } from "../905/53857";
import { z as _$$z } from "../905/947624";
import { r as _$$r } from "../905/571838";
import { setupThemeContext } from "../905/614223";
import { getFeatureFlags } from "../905/601108";
import { w4 } from "../905/445814";
import { C as _$$C } from "../905/226458";
import { K as _$$K2 } from "../905/833668";
import { K as _$$K3 } from "../905/226178";
import { V as _$$V } from "../905/453937";
import { e as _$$e2 } from "../905/311297";
import { H as _$$H } from "../905/209153";
import { ButtonPrimitive } from "../905/632989";
import { E as _$$E4 } from "../905/391888";
import { p as _$$p } from "../905/767868";
import { M as _$$M } from "../905/269719";
import { getUserId, selectUser } from "../905/372672";
import { A as _$$A2 } from "../905/100919";
import { KindEnum } from "../905/129884";
import { trackEventAnalytics } from "../905/449184";
import { L as _$$L } from "../905/477111";
import { O as _$$O } from "../905/969533";
import { j as _$$j, l as _$$l } from "../905/618243";
import { getRepoById, findBranchById, filterBranches } from "../905/760074";
import { ac } from "../905/930279";
import { liveStoreInstance } from "../905/713695";
import { e0 } from "../905/696396";
import { generateUUIDv4 } from "../905/871474";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { noop } from "../905/834956";
import { kE } from "../905/466026";
import { i as _$$i } from "../905/977961";
import { TF, l1, X_, TM } from "../905/811749";
function N(e) {
  return jsxs("div", {
    className: cssBuilderInstance.gap8.h40.flex.flexRow.itemsCenter.$,
    children: [jsx("div", {
      className: "tile_drag_image--thumbnailContainer--1rhVM",
      children: jsx(_$$e, {
        tile: e.tile,
        size: SizeOption.SMALL,
        borderRadius: 4,
        hideUntilLoaded: !1
      })
    }), jsx(TextWithTruncation, {
      fontSize: 13,
      truncate: !0,
      fontWeight: "medium",
      children: Tf.getName(e.tile)
    })]
  });
}
function H(e) {
  let t = useSelector(e => e.orgById);
  let i = Tf.getOrgId(e.tile);
  if (!i) return jsx(Fragment, {});
  let r = t[i];
  return r ? jsx(_$$H, {
    entityId: i,
    entityName: r.name,
    imgUrl: r.img_url,
    size: e.size
  }) : jsx(Fragment, {});
}
function $(e) {
  switch (e.tile.type) {
    case nb.FILE:
    case nb.REPO:
    case nb.PINNED_FILE:
    case nb.OFFLINE_FILE:
      return renderI18nText(e.shorter ? "tile.file_tile.password_protected_shorter" : "tile.file_tile.password_protected");
    case nb.PROTOTYPE:
      return renderI18nText(e.shorter ? "tile.file_tile.password_protected_shorter" : "tile.file_tile.password_protected_prototype");
    default:
      throwTypeError(e.tile);
  }
}
function X(e) {
  let t = getUserId();
  let i = Tf.getTrashedUserId(e.tile);
  let r = jsx(_$$M, {
    tile: e.tile,
    getDateFromGenericTile: Tf.getTrashedAt
  });
  return i && i === t ? renderI18nText("tile.file_tile.trashed_by_you", {
    time: r
  }) : renderI18nText("tile.file_tile.trashed_generic", {
    time: r
  });
}
function Q({
  tile: e,
  selectedView: t,
  hideBranchIndicator: i
}) {
  return jsxs(Fragment, {
    children: [jsx(J, {
      tile: e,
      hideBranchIndicator: i
    }), jsx(ee, {
      tile: e,
      selectedView: t
    })]
  });
}
function J(e) {
  let t = e.tile.type === nb.REPO && e.tile.branches.filter(e => !e.trashed_at).length || 0;
  return !e.hideBranchIndicator && t > 1 ? jsxs(Fragment, {
    children: [renderI18nText("tile.file_tile.branch_count", {
      branchCount: t
    }), "\xa0\xb7\xa0"]
  }) : jsx(et, {
    tile: e.tile
  });
}
function ee(e) {
  let t = useAtomWithSubscription(hi(e.tile));
  let i = renderI18nText("tile.file_tile.edited_time", {
    time: jsx(_$$M, {
      tile: e.tile,
      getDateFromGenericTile: Tf.getTouchedAt
    })
  });
  return "deletedFiles" === e.selectedView.view ? jsx(X, {
    tile: e.tile
  }) : "recentsAndSharing" === e.selectedView.view && e.selectedView.tab === ViewTypeEnum.SHARED_FILES ? Tf.getSharedBy(e.tile) ? renderI18nText("team_tile.shared_by", {
    shared_by_text: Tf.getSharedByName(e.tile)
  }) : renderI18nText("swy_tile.shared_date", {
    shared_date: jsx(_$$M, {
      tile: e.tile,
      getDateFromGenericTile: Tf.getSharedAt
    })
  }) : "user" === e.selectedView.view ? renderI18nText("tile.file_tile.last_activity_time", {
    time: jsx(_$$M, {
      tile: e.tile,
      getDateFromGenericTile: Tf.getTouchedAt
    })
  }) : e.tile.type === nb.FILE && e.tile.file.trackTags?.source === "import" && new Date(e.tile.file.touchedAt) <= e.tile.file.createdAt ? renderI18nText("tile.file_tile.imported_time", {
    time: jsx(_$$M, {
      tile: e.tile,
      getDateFromGenericTile: Tf.getCreatedAt
    })
  }) : Tf.getIsPasswordProtected(e.tile) ? "loading" === t.status ? null : t.data ? jsxs(Fragment, {
    children: [jsx($, {
      tile: e.tile,
      shorter: !0
    }), " \xb7 ", i]
  }) : jsx($, {
    tile: e.tile
  }) : i;
}
function et(e) {
  let t = Tf.getFolderId(e.tile);
  let i = _$$p(t);
  let r = i.data?.folderName || null;
  let a = i.data?.isTrashed || !1;
  let s = _$$E4();
  return "loaded" === i.status && r && t ? a ? jsxs(Fragment, {
    children: [r, "\xa0", getI18nString("file_browser.folder.trashed_folder"), "\xa0\xb7\xa0"]
  }) : jsxs("span", {
    children: [jsx(ButtonPrimitive, {
      onClick: e => {
        e.stopPropagation();
        s(t, e);
      },
      className: "x1n0bwc9 xt0b8zv x1kuswnt",
      children: r
    }), "\xa0\xb7\xa0"]
  }) : null;
}
function eg(e) {
  let {
    menuItems,
    children,
    dropdownId,
    showPoint,
    propogateOnClick
  } = e;
  let l = useDispatch();
  let d = e => {
    e.callback && e.callback("", null, l);
  };
  return jsx(ef, {
    dropdownId,
    renderDropdown: e => jsx(noop, {
      items: menuItems,
      parentRect: e,
      dispatch: l,
      showPoint: showPoint || !1,
      onSelectItem: d,
      shouldUsePortal: !0
    }),
    propogateOnClick,
    children
  });
}
function ef(e) {
  let t = useDispatch();
  let i = useMemo(() => e.dropdownId || generateUUIDv4(), [e.dropdownId]);
  let s = useSelector(e => e.dropdownShown?.type === i);
  let o = () => {
    s ? t(hideDropdownAction()) : t(showDropdownThunk({
      type: i
    }));
  };
  let l = useRef(null);
  let d = l.current?.getBoundingClientRect() || null;
  return jsxs(Fragment, {
    children: [jsx("div", {
      style: {
        width: "fit-content",
        maxWidth: "100%",
        height: "fit-content"
      },
      className: cssBuilderInstance.$$if(e.hideOverflow, cssBuilderInstance.overflowHidden).$,
      onClick: t => {
        e.propogateOnClick || t.stopPropagation();
        o();
      },
      ref: l,
      children: e.children
    }), s && d && e.renderDropdown(d)]
  });
}
let e_ = (e, t, i, n, r, a) => {
  let o = [];
  let l = e => ({
    displayText: e.name,
    isChecked: e.key === t,
    callback: () => n(e.key)
  });
  let d = e.find(e => e.isMain);
  d && o.push(l(d));
  o.push(...e.filter(e => !e.isMain && e.ownedByUser).map(e => l(e)));
  let c = [...e.filter(e => !e.isMain && !e.ownedByUser).map(e => l(e))];
  if ("hidden" !== r.status && c.length > 0 && o.push({
    separator: !0,
    displayText: ""
  }, {
    displayText: getI18nString("tile.branching.see_all_branches"),
    children: c
  }), "hidden" !== r.status && i) {
    let e;
    let t = e0.FILE_BROWSER;
    switch (r.status) {
      case "upsell-org":
        e = () => a(_$$j({
          trackingContextName: t
        }));
        break;
      case "enabled":
        e = () => a(_$$l({
          trackingContextName: t,
          sourceFileKey: i,
          dispatchedFromEditor: !1
        }));
        break;
      case "disabled":
        break;
      default:
        throwTypeError(r.status);
    }
    o.push({
      separator: !0,
      displayText: ""
    }, {
      displayText: getI18nString("tile.branching.create_new_branch"),
      disabled: "disabled" === r.status,
      callback: e
    });
  }
  return o;
};
function eA(e) {
  let t = liveStoreInstance.useFile(e.fileKey).data;
  let i = useSelector(e => e.repos);
  let r = t ? getRepoById(t, i) : null;
  let s = liveStoreInstance.File.useValue(r?.default_file_key).data;
  let o = ac(s ? fileEntityDataMapper.toLiveGraph(s) : null);
  let l = useDispatch();
  if ("loaded" !== o.status) return null;
  {
    let t = `branch-indicator-${e.fileKey}`;
    let i = e_(e.branches, e.selectedBranchKey, s?.key, e.onSelectBranch, o.data, l);
    let a = e.branches.find(t => t.key === (e.selectedBranchKey ?? r?.default_file_key));
    let d = jsxs(ButtonPrimitive, {
      className: "x78zum5 x6s0dn4 xfawy5m x1jnr06f xon4yw5 x1sxf85j xh8yej3",
      "data-testid": "branch-indicator-dropdown",
      "aria-label": getI18nString("tile.branching.change_default_branch"),
      children: [jsx(_$$L, {
        style: {
          "--color-icon": "var(--color-icon-menu)",
          flexShrink: 0
        }
      }), jsx(TextWithTruncation, {
        truncate: !0,
        color: "menu",
        children: a?.name
      }), jsx(_$$O, {
        style: {
          "--color-icon": "var(--color-icon-menu)",
          flexShrink: 0
        }
      })]
    });
    return jsx("div", {
      className: "xs83m0k xb3r6kr xeuugli",
      children: jsx(eg, {
        menuItems: i,
        dropdownId: t,
        propogateOnClick: !0,
        children: d
      })
    });
  }
}
function eb({
  repoTile: e,
  buttonThemeVersion: t
}) {
  let i = useDispatch();
  let s = useSelector(e => e.roles.byFileKey);
  let o = selectUser();
  let l = useSelector(e => e.selectedBranchKeyByRepoId);
  let d = e.branches.filter(e => !e.trashed_at);
  let c = findBranchById(e.repo, e.branches, l);
  let u = useMemo(() => filterBranches(e.repo, d, s, o.id), [e, d, s, o]);
  return d.length <= 1 ? jsx(Fragment, {}) : jsx(eA, {
    fileKey: e.repo.default_file_key,
    branches: u,
    selectedBranchKey: c.key,
    onSelectBranch: t => {
      trackEventAnalytics("Branch Tile Drop Down Clicked Through", {
        fileRepoId: e.repo.id,
        selectedFileKey: t,
        previousFileKey: c?.key
      });
      i(kE({
        repoId: e.repo.id,
        branchKey: t
      }));
    },
    buttonThemeVersion: t
  });
}
function eI({
  tile: e,
  isHovered: t,
  isSelected: i,
  showPlanIcon: a,
  hideBranchIndicator: s,
  checksForViewOnlyLabels: o,
  interactiveThumbnailsEnabled: l,
  onChildFocusChange: d
}) {
  let c = t || i;
  let [u, m] = useState(!1);
  let g = _$$C(e);
  let f = getSelectedView();
  let _ = Tf.getTeamId(e);
  let A = Tf.getOrgId(e);
  let b = c_(e).unwrapOr(!1);
  return jsx(_$$i, {
    thumbnail: jsx(_$$e, {
      tile: e,
      noBorder: !0,
      interactiveThumbnailsEnabled: l
    }),
    topLeftContent: jsx(eE, {
      tile: e,
      isHoveredOrSelected: c,
      showPlanIcon: a,
      hideBranchIndicator: s
    }),
    topRightContent: jsx(ex, {
      tile: e,
      isFocused: u,
      isHoveredOrSelected: c
    }),
    bottomLeftIcon: b ? jsx(_$$K3, {}) : jsx(w4, {
      size: 16,
      type: g
    }),
    title: jsx(_$$A2, {
      tile: e,
      checksForViewOnlyLabels: o
    }),
    subtitle: jsx(Q, {
      tile: e,
      hideBranchIndicator: s,
      selectedView: f
    }),
    bottomRightContent: e.type === nb.OFFLINE_FILE ? jsx(_$$z, {
      "data-tooltip": getI18nString("tile.offline_file_tile.offline_upload_tooltip"),
      "data-tooltip-type": KindEnum.TEXT
    }) : !getFeatureFlags().dtm_deprecation_pre_migration_onboarding || _ || A ? jsx(_$$V, {
      tile: e
    }) : jsx(_$$r, {
      style: {
        "--color-icon": "var(--color-icon-secondary)"
      },
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("tile.dtm_onboarding.dtm_files_will_be_relocated_soon"),
      "data-tooltip-timeout-delay": 50,
      "data-tooltip-align": "center"
    }),
    onFocus: () => {
      m(!0);
      d?.();
    },
    onBlur: () => {
      m(!1);
      d?.();
    }
  });
}
function eE({
  tile: e,
  isHoveredOrSelected: t,
  showPlanIcon: i,
  hideBranchIndicator: r
}) {
  let a = (() => {
    if (t && i) return jsx(H, {
      tile: e,
      size: 24
    });
    let r = Tf.getEditorType(e);
    return e.type === nb.FILE && e.file.isPublishedSite && r ? jsx(setupThemeContext, {
      brand: _$$K2(r),
      children: jsx(_$$E2, {
        variant: "brandFilled",
        children: getI18nString("file_browser.file_grid_view.published")
      })
    }) : null;
  })();
  return jsxs("div", {
    className: "x78zum5 x6s0dn4 x1v2ro7d",
    children: [a, t && e.type === nb.REPO && !r && jsx(eb, {
      repoTile: e,
      buttonThemeVersion: "ui3"
    })]
  });
}
function ex({
  tile: e,
  isFocused: t,
  isHoveredOrSelected: i
}) {
  if (!Xg(e)) return null;
  let r = Tf.getIsFavorited(e);
  return jsx("div", {
    ...xk(i || t || r ? eS.topRightContentShown : eS.topRightContentHidden),
    children: jsx(_$$e2, {
      tile: e,
      entrypoint: "file_tile",
      containerClassName: "tile_grid_cell--favoriteStarButtonContainer--mlscx"
    })
  });
}
let eS = {
  topRightContentShown: {
    display: "x78zum5",
    $$css: !0
  },
  topRightContentHidden: {
    display: "x1s85apg",
    $$css: !0
  }
};
let eC = e => {
  let t = [];
  let i = [];
  let n = [];
  let r = [];
  e.forEach(e => {
    switch (e.type) {
      case nb.FILE:
        i.push(e);
        break;
      case nb.PROTOTYPE:
        n.push(e);
        break;
      case nb.REPO:
        t.push(e);
        break;
      case nb.PINNED_FILE:
        debug(!0, "Do not expect to be rendering project or pinned tiles here");
        break;
      case nb.OFFLINE_FILE:
        r.push(e);
        break;
      default:
        throwTypeError(e);
    }
  });
  return {
    repoTiles: t,
    fileTiles: i,
    prototypeTiles: n,
    offlineFileTiles: r
  };
};
export function $$eT0({
  handleOpenDropdown: e,
  handleOpenTile: t,
  items: i,
  updateRenderedItems: s,
  updateVisibleItems: o,
  sortConfig: T,
  doNotFocusOnLoad: k,
  checksForViewOnlyLabels: R,
  interactiveThumbnailsEnabled: P,
  gridContainerStyle: O,
  viewType: D,
  sortBy: L
}) {
  let F = useDispatch();
  let M = getSelectedView();
  let j = useCurrentUserOrgId();
  let U = Xr(yH);
  let B = _$$v();
  let V = useAtomWithSubscription(Y6);
  let G = useCallback(e => {
    F(an());
    let {
      fileTiles,
      offlineFileTiles,
      repoTiles,
      prototypeTiles
    } = eC(e);
    fileTiles.length > 0 && F(y$({
      type: YC[nb.FILE],
      tiles: fileTiles
    }));
    offlineFileTiles.length > 0 && F(y$({
      type: YC[nb.OFFLINE_FILE],
      tiles: offlineFileTiles
    }));
    repoTiles.length > 0 && F(y$({
      type: YC[nb.REPO],
      tiles: repoTiles
    }));
    prototypeTiles.length > 0 && F(y$({
      type: YC[nb.PROTOTYPE],
      tiles: prototypeTiles
    }));
    U([...new Set(e.map(e => Tf.getFolderId(e)).filter(e => null !== e))]);
  }, [F, U]);
  let {
    gutterColumn,
    columns
  } = function (e, t) {
    switch (e.view) {
      case "recentsAndSharing":
        return e.tab === ViewTypeEnum.SHARED_FILES ? TF : l1(t);
      case "search":
        return X_(t);
      case "deletedFiles":
        return TM(t);
      default:
        return l1(t);
    }
  }(M, R);
  let {
    filePermissions,
    repoPermissions
  } = xD();
  let Y = useCallback(e => e.every(e => qf(e, j) && !Tf.isRenaming(e, V)), [V, j]);
  let q = {
    containerStyle: O ?? ek.gridContainerDefault,
    renderTileDragImage: e => jsx(_$$e, {
      tile: e,
      noBorder: !0,
      hideUntilLoaded: !1
    })
  };
  let $ = "deletedFiles" === M.view;
  let Z = {
    ...q,
    renderTile: (e, t, {
      isHovered: i,
      isSelected: r
    }) => jsx(eI, {
      tile: e,
      hideBranchIndicator: $,
      isHovered: i,
      isSelected: r,
      showPlanIcon: isRecentsAndSharingView(M) || "search" === M.view,
      checksForViewOnlyLabels: R,
      interactiveThumbnailsEnabled: P,
      onChildFocusChange: t
    }),
    tileBorderRadius: "large"
  };
  return jsx(_$$A, {
    canSelectedItemsBeDragged: Y,
    doNotFocusOnLoad: k,
    getAriaLabel: Tf.getName,
    gridViewProps: Z,
    handleContextMenu: (t, n, r) => {
      let a = i[r];
      a && e(a, n, r);
    },
    handleDeleteKey: e => {
      let {
        fileTiles,
        repoTiles,
        offlineFileTiles
      } = eC(e);
      if ("deletedFiles" === M.view) {
        let e = fileTiles.map(e => e.file.key);
        let n = repoTiles.map(e => e.repo.id);
        let r = e.length + n.length;
        if (!r || "loaded" !== filePermissions.status || "loaded" !== repoPermissions.status) return;
        let a = m8(e, filePermissions.data);
        let s = gX(n, repoPermissions.data);
        if (a.length + s.length < r) {
          F(FlashActions.error(getI18nString("flash.dont_have_permission_permanently_delete_files")));
          return;
        }
        F(Fh({
          fileKeys: a,
          repoIds: s
        }));
      } else {
        if (fileTiles.length + repoTiles.length + offlineFileTiles.length === 0 || "loaded" !== filePermissions.status || "loaded" !== repoPermissions.status) return;
        let {
          filesByKey,
          reposById,
          offlineFilesByKey,
          allDrafts,
          deletableCount,
          selectedCount
        } = Mw(e, filePermissions.data, repoPermissions.data);
        if (deletableCount < selectedCount) {
          F(FlashActions.error(getI18nString("tile.error.permission_error_trash_file", {
            selectedCount: e.length
          })));
          return;
        }
        F(U1({
          filesByKey,
          reposById,
          offlineFilesByKey,
          allDrafts
        }));
      }
    },
    handleDragDataTransfer: (e, t) => {
      let {
        fileTiles,
        repoTiles,
        prototypeTiles
      } = eC(e);
      let a = fileTiles.map(e => fileEntityDataMapper.toSinatra(e.file));
      let s = repoTiles.map(e => e.repo);
      let o = prototypeTiles.map(e => e.prototype);
      !a.length || s.length || o.length ? a.length || !s.length || o.length ? a.length || s.length || !o.length ? t.setTilesData(a, s, o) : t.setPrototypesData(o) : t.setReposData(s, []) : t.setFigFilesData(a);
    },
    handleOpenItem: "deletedFiles" !== M.view ? (e, i, n) => {
      t(e, i, n);
      B(e, i);
    } : void 0,
    isDraggable: mM(M),
    items: i,
    listViewProps: {
      gutterColumn,
      columns,
      currentSort: {
        field: T.key,
        isDescending: T.dir === SortOrder.DESC
      },
      handleSortBy: L,
      renderItemDragImage: e => jsx(N, {
        tile: e
      })
    },
    onSelection: G,
    updateRenderedItems: s,
    updateVisibleItems: o,
    viewType: D
  });
}
let ek = {
  gridContainerDefault: {
    paddingLeft: "x1tudf5h",
    paddingRight: "x1m2p0i2",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    paddingBottom: "x1gan7if",
    $$css: !0
  }
};
export const d = $$eT0;
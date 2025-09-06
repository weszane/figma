import { ex } from "../905/524523";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { lQ } from "../905/934246";
import { _ as _$$_ } from "../figma_app/496441";
import { resourceUtils } from "../905/989992";
import d from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { N7, QV } from "../905/508367";
import { IT } from "../905/864644";
import { YO } from "../figma_app/672951";
import { desktopAPIInstance } from "../figma_app/876459";
import { oJ } from "../905/63728";
import { Rs } from "../figma_app/288654";
import { BrowserInfo } from "../figma_app/778880";
import { Ex, zE } from "../figma_app/919079";
import { tH, H4 } from "../905/751457";
import { Qp, JR, Wi } from "../figma_app/162641";
import { x as _$$x } from "../figma_app/475340";
import { C as _$$C } from "../905/196436";
import { B as _$$B } from "../905/714743";
import { NU } from "../figma_app/204891";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { E as _$$E } from "../905/984674";
import { kg, UN } from "../figma_app/976345";
import { R as _$$R } from "../905/731725";
import { W as _$$W } from "../905/95038";
import { E as _$$E2 } from "../905/391888";
import { t as _$$t2 } from "../905/53773";
import { B as _$$B2 } from "../905/799228";
import { n as _$$n } from "../905/502036";
import { Z as _$$Z } from "../905/622097";
import { i as _$$i } from "../905/610691";
import { L as _$$L } from "../905/13390";
import { sf, j7 } from "../905/929976";
import { zE as _$$zE } from "../905/738636";
import { p4 } from "../905/93909";
import { an, y$ } from "../905/81009";
import { xr } from "../figma_app/314264";
import { eU } from "../figma_app/863319";
import { Tf, fA } from "../figma_app/543100";
import { Um } from "../905/848862";
import { x as _$$x2 } from "../905/98916";
import { FC } from "../figma_app/212807";
import { _6 } from "../figma_app/386952";
import { B as _$$B3 } from "../905/524020";
import { TA } from "../905/372672";
import { FEntityType, FFileType } from "../figma_app/191312";
import { qjT } from "../figma_app/43951";
import { Bp } from "../figma_app/349248";
import { mapFileTypeToEditorType } from "../figma_app/53721";
import { f6, ai } from "../figma_app/915202";
import { G as _$$G } from "../figma_app/471068";
import { F as _$$F } from "../905/915030";
import { Ib } from "../905/129884";
import { P as _$$P } from "../905/200237";
import { X as _$$X } from "../905/718513";
import { A as _$$A } from "../5724/361376";
import { A as _$$A2 } from "../5724/663128";
var c = d;
let eo = ex("team_folder_rename", function (e) {
  let {
    folderId
  } = e;
  return jsxs("div", {
    className: _$$s.cursorDefault.colorTextTooltip.pl8.pr8.$,
    children: [jsx("span", {
      children: renderI18nText("team_view.folder_list_card.team_root_folder_info")
    }), jsx("div", {
      className: _$$s.bl1.hFull.inline.bSolid.colorBorderMenu.ml8.mr8.$
    }), jsx(_$$_, {
      href: `/files/project/${folderId}?renameProject=true`,
      className: _$$s.cursorPointer.noUnderline.fontBold.colorTextTooltip.$,
      children: renderI18nText("team_view.folder_list_card.team_root_folder_rename")
    })]
  });
}, e => ({
  folderId: e.getAttribute("data-tooltip-folder-id"),
  unconstrainWidth: !0
}));
function ed() {
  return jsx(_$$X, {
    FileThumbnailComponent: ec
  });
}
function ec() {
  return jsx(Qp, {
    animationType: JR.LIGHT_SHIMMER,
    className: c()(_$$s.wFull.hFull.$)
  });
}
function em(e) {
  let t = useDispatch();
  let i = FC();
  let o = _6();
  let d = useSelector(e => e.currentUserOrgId);
  let u = useSelector(e => e.currentTeamId);
  let g = TA();
  let f = "recentsAndSharing" === o.view && "shared-projects" === o.tab ? e.folder.parent_org?.id ?? null : d;
  let y = "recentsAndSharing" === o.view && "shared-projects" === o.tab ? e.folder.parent_team?.id ?? null : u;
  let b = Um();
  let v = Rs(qjT, {
    resourceId: e.folder.id,
    resourceType: FEntityType.FOLDER,
    orgId: f,
    teamId: f ? null : y
  });
  let E = resourceUtils.useTransform(v, e => void 0 !== eU(e, FEntityType.FOLDER)).unwrapOr(!!e.folder.is_favorited);
  let x = YO(e.folder.id);
  let S = _$$E2();
  let w = n => {
    "trashedFolders" !== o.view && (t(kg({
      clickedResourceType: "team",
      resourceIdOrKey: e.folder.id
    })), xr("file_browser_folder_click", e.folder.id, e.folder.team_id, i, {
      selectedView: "recentsAndSharing" === o.view ? o.tab || _$$G.RECENTLY_VIEWED : o.view,
      planFilterId: e.currentPlanFilter?.planId || null,
      planFilterType: e.currentPlanFilter?.planType || null,
      viewMode: "grid"
    }), S(e.folder.id, n));
  };
  let C = "loaded" === x.status && !!x.data?.canEdit;
  let T = useCallback(e => {
    if ("trashedFolders" === o.view) return;
    t(UN({
      fileKey: e.key,
      entrypoint: "folder list card"
    }));
    t(p4({
      planId: d || _$$P
    }));
    let n = "recentsAndSharing" === o.view || "folder" === o.view ? o : void 0;
    N7(d, e.parent_org_id, u, e.team_id) ? QV({
      file: {
        key: e.key,
        editorType: e.editor_type || void 0
      }
    }, {
      user: i.user,
      teamId: u,
      orgId: d,
      selectedView: o
    }) : t(sf({
      view: "fullscreen",
      fileKey: e.key,
      editorType: mapFileTypeToEditorType(e.editor_type),
      prevSelectedView: n
    }));
  }, [d, u, t, i.user, o]);
  let R = "loaded" === x.status && !!x.data?.canCreateDesignFileWithReasons.result;
  let N = resourceUtils.useTransform(e.folderFilesResult, useCallback(e => e.sort((e, t) => e.touched_at === t.touched_at ? 0 : e.touched_at < t.touched_at ? 1 : -1).slice(0, 15), []));
  let O = resourceUtils.useTransform(N, useCallback(t => {
    let i = t.slice(0, 4).map(t => jsx(ey, {
      file: t,
      teamId: e.folder.team_id,
      onFileClick: T,
      selectedView: o
    }, t.key));
    for (; i.length < 4;) i.push(jsx(eb, {
      folder: e.folder,
      canCreateFile: R
    }, `${i.length}`));
    return i;
  }, [R, T, e.folder, o]));
  let F = useMemo(() => (N.data || []).slice(0, 15).map(e => e.key), [N]);
  IT(F);
  return jsx("div", {
    className: e.inItemsView ? "folder_list_card--folderCardInItemsView--9JpPY" : "folder_list_card--folderCard--f45e1",
    onClick: e.inItemsView ? lQ : e => {
      e.preventDefault();
      e.stopPropagation();
      (2 === e.detail || BrowserInfo.mobile || BrowserInfo.tablet) && w(e);
    },
    onContextMenu: e.inItemsView ? lQ : i => {
      i.stopPropagation();
      i.preventDefault();
      let n = {
        top: i.clientY,
        right: i.clientX,
        bottom: i.clientY,
        left: i.clientX,
        width: 1,
        height: 1
      };
      t(j7({
        type: _$$B2,
        data: {
          folder: {
            ...Bp(e.folder),
            folderPerms: e.folder.folderPerms,
            description: e.folder.description,
            isSubscribed: E
          },
          useLGPerms: e.useLGPerms,
          targetRect: n
        }
      }));
    },
    "data-onboarding-key": e.dataOnboardingKey,
    tabIndex: 0,
    children: jsxs("div", {
      className: "folder_list_card--folderCardContent--znHVA",
      children: [jsx(_$$x, {
        loaded: "loaded" === O.status,
        loadingSkeletonElement: jsx(ed, {}),
        children: jsx("div", {
          className: "folder_list_card--folderTiles--q3GHS",
          onFocus: e.onChildFocusChange,
          onBlur: e.onChildFocusChange,
          children: O.data
        })
      }), jsxs(Fragment, {
        children: ["trashedFolders" === o.view ? jsx(Fragment, {}) : jsx("div", {
          className: c()("folder_list_card--topRightControls--1iU9d", {
            "folder_list_card--topRightControlsVisible--HrquF": b?.data?.resourceId === e.folder.id || E
          }),
          children: jsx(_$$n, {
            folder: {
              ...e.folder,
              is_subscribed: E
            }
          })
        }), jsx("div", {
          className: "folder_list_card--folderCardFooter--1WvIF",
          children: jsx(e_, {
            ...e,
            canEdit: C,
            currentUserId: g,
            folder: e.folder,
            folderLastUpdated: e.folderLastUpdated,
            folderName: e.folderName,
            folderOwnerName: e.folderOwnerName,
            folderTeamName: e.folderTeamName,
            isSharerInfoIncluded: e.isSharerInfoIncluded,
            showFavoriteStar: !1
          })
        })]
      })]
    })
  });
}
export function $$eh1(e) {
  return jsx(tH, {
    boundaryKey: "FolderListCard",
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    children: jsx(em, {
      ...e
    })
  });
}
export function $$eg0(e) {
  let t = useSelector(t => _$$Z(t, e.folder));
  let i = _6();
  let r = _$$R({
    folderId: e.folder.id,
    shouldShowOnlyTrashedFiles: "trashedFolders" === i.view
  });
  return jsx($$eh1, {
    ...e,
    ...t,
    folderFilesResult: r
  });
}
let ef = {
  open: !0,
  openNewTab: !0,
  share: !0,
  copyLink: !0,
  delete: !0,
  moveFile: !0
};
function e_(e) {
  let t = e.folder;
  let i = e.folderTeamName;
  let r = !!e.checksForViewOnlyLabels && e.checksForViewOnlyLabels.teamId === e.folder.team_id && e.checksForViewOnlyLabels.isLockedTeam;
  return jsxs("div", {
    className: "folder_list_card--folderInfoTile---uGGi",
    children: [jsxs("div", {
      className: "folder_list_card--folderUpperRow--c-qXp",
      children: [jsxs("div", {
        className: "folder_list_card--folderName--fsdBf text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: [jsx(_$$E, {
          fontSize: 13,
          fontWeight: "medium",
          truncate: !0,
          showTooltipWhenTruncated: !1,
          children: e.folderName
        }), r && jsx(Ex, {
          color: zE.WARNING_TERTIARY,
          text: getI18nString("locked_team.label.view_only"),
          dataTooltip: getI18nString("locked_team.label.tooltip"),
          dataTooltipType: Ib.TEXT,
          className: "folder_list_card--viewOnlyLabel--in8ZA"
        }), !r && t.is_connected_project && jsx("div", {
          className: _$$s.pl4.$,
          children: jsx(_$$W, {
            hostPlanName: t.resource_connection?.hostPlanName,
            connectedPlanName: t.resource_connection?.connectedPlanName
          })
        }), e.canEdit && e.folder.settings?.legacy_team_root_folder && "Untitled project" === e.folder.path ? jsx(_$$B, {
          className: "folder_list_card--infoIcon--lKQ7I",
          svg: _$$A2,
          "data-tooltip-type": Ib.SPECIAL,
          "data-tooltip-interactive": !0,
          "data-tooltip": eo,
          "data-tooltip-show-immediately": !0,
          "data-tooltip-show-above": !0,
          "data-tooltip-folder-id": e.folder.id
        }) : null]
      }), jsx(_$$C, {
        ...e
      })]
    }), jsx("div", {
      children: jsx("div", {
        className: "folder_list_card--folderInfoFooter--BGb-d",
        children: jsx("div", {
          className: "folder_list_card--folderActivity--DGpNx",
          children: jsx(eA, {
            folder: t,
            folderTeamName: i
          })
        })
      })
    })]
  });
}
function eA({
  folder: e,
  folderTeamName: t
}) {
  let i = "trashedFolders" === _6().view;
  let r = _$$x2(e.id, i);
  if ("loaded" !== r.status) return jsx(Wi, {
    className: _$$s.h16.w150.$,
    animationType: JR.NO_SHIMMER
  });
  let a = getI18nString("file_browser.folder.number_of_files", {
    numFiles: r.data,
    formattedNumFiles: _$$t2(r.data)
  });
  return jsxs("div", {
    className: _$$s.flex.flexRow.itemsCenter.justifyStart.$,
    children: [jsx(_$$E, {
      fontSize: 11,
      children: t
    }), null !== t && "" !== t && jsx("div", {
      children: "\xa0\xb7\xa0"
    }), jsx(_$$E, {
      fontSize: 11,
      truncate: !0,
      children: a
    })]
  });
}
function ey(e) {
  let t = useDispatch();
  let i = _6();
  let {
    showing,
    show,
    data
  } = _$$L();
  let d = !!data?.tile && Tf.getId(data.tile) === e.file.key;
  let p = t => {
    t.preventDefault();
    t.stopPropagation();
    desktopAPIInstance && trackEventAnalytics("Open File Click", {
      fileKey: e.file.key,
      uiSelectedView: JSON.stringify({
        teamId: e.teamId
      })
    });
    e.onFileClick(e.file);
  };
  let m = e.file;
  let h = useMemo(() => fA(m), [m]);
  return jsxs("button", {
    className: c()("folder_list_card--fileTile--tAGh3", {
      "folder_list_card--selected--om9Zo": d
    }),
    onClick: e => {
      e.stopPropagation();
      2 === e.detail && p(e);
    },
    draggable: !1,
    tabIndex: 0,
    onContextMenu: e => {
      e.preventDefault();
      e.stopPropagation();
      "trashedFolders" !== i.view && (show({
        data: {
          tile: h,
          targetRect: {
            top: e.clientY,
            right: e.clientX,
            bottom: e.clientY,
            left: e.clientX,
            width: 1,
            height: 1
          }
        }
      }), t(an()), t(y$({
        type: _$$F.FILES,
        tiles: [h]
      })));
    },
    children: [jsx(NU, {
      file: m,
      borderRadius: 8,
      noBorder: !0
    }), jsx("div", {
      className: "folder_list_card--fileTileOverlay--fzqr8",
      children: jsx("div", {
        className: "folder_list_card--fileTileOverlayText--fLH8K",
        children: m.name
      })
    }), jsx(_$$i, {
      tileActions: ef,
      tile: h,
      selectedTiles: [h],
      openTile: p,
      dropdownVisible: showing
    })]
  });
}
function eb(e) {
  let t = useDispatch();
  let i = _$$B3();
  let r = useSelector(t => e.folder.team_id ? t.teams[e.folder.team_id] : void 0);
  return jsx(_$$_, {
    href: "#",
    htmlAttributes: {
      onContextMenu: e => {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    "aria-label": getI18nString("team_view.empty_file_tile.label"),
    className: "folder_list_card--emptyFileTile--nywuu",
    onClick: n => {
      n.preventDefault();
      n.stopPropagation();
      e.canCreateFile && t(_$$zE({
        state: i,
        editorType: FFileType.DESIGN,
        folderId: e.folder.id,
        team: r,
        from: f6.FILE_BROWSER_FOLDER_EMPTY_TILE,
        openNewFileIn: oJ(n) ? ai.NEW_TAB : ai.SAME_TAB
      }));
    },
    trusted: !0,
    children: e.canCreateFile && jsx(_$$B, {
      svg: _$$A
    })
  });
}
export const Z = $$eg0;
export const L = $$eh1;
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useCallback, useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { g as _$$g } from "../figma_app/638694";
import { isSelectedViewMissingOrgAdminResources } from "../figma_app/422062";
import { r as _$$r } from "../905/398386";
import { selectViewAction } from "../905/929976";
import { getSelectedView } from "../figma_app/386952";
import { getPermissionsStateMemoized } from "../figma_app/642025";
import { useTeamPlanUser, useIsOrgAdminUser } from "../figma_app/465071";
import { vS } from "../figma_app/846003";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { useSubscription } from "../figma_app/288654";
import { Badge, BadgeColor } from "../figma_app/919079";
import { h1 } from "../905/986103";
import { y2 } from "../figma_app/563413";
import { lv } from "../figma_app/204891";
import { V as _$$V } from "../figma_app/385855";
import { y as _$$y } from "../905/171275";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { AutoLayout, Spacer } from "../905/470281";
import { p as _$$p } from "../905/597320";
import { openUrlInContext } from "../figma_app/976345";
import { K as _$$K } from "../905/628118";
import { TrackingProvider } from "../figma_app/831799";
import { PaginatedAbandonedDraftFilesView, ProjectNameById } from "../figma_app/43951";
import { DashboardSection, WorkspaceTab } from "../figma_app/650409";
import { OrganizationType } from "../905/833838";
import { DashboardSections } from "../905/548208";
import { e0 } from "../905/696396";
import { Cj } from "../905/270084";
import { zx, VU } from "../4452/650793";
import { MenuSeparator } from "../figma_app/860955";
import { p as _$$p2 } from "../469e6e40/348454";
import { O as _$$O2 } from "../905/142086";
import { Fh } from "../905/191601";
import { W6, b4 } from "../figma_app/937413";
import { IU } from "../figma_app/421401";
import { b as _$$b } from "../469e6e40/978552";
import { oi } from "../figma_app/527041";
function G(e) {
  return {
    key: e.key,
    name: e.name,
    folder_id: e.folderId,
    team_id: e.teamId,
    is_team_template: e.isTeamTemplate,
    editor_type: e.editorType,
    parent_org_id: e.parentOrgId,
    description: e.description,
    client_meta: e.checkpointClientMeta,
    deleted_at: e.deletedAt?.toDateString() || null,
    trashed_at: e.trashedAt?.toDateString() || null,
    created_at: e.createdAt.toDateString(),
    trashed_user_id: e.trashedUserId,
    edit_url: e.editUrl,
    creator_id: e.creatorId,
    license: e.license,
    link_access: e.linkAccess,
    has_file_link_password: e.hasFileLinkPassword,
    has_proto_link_password: e.hasProtoLinkPassword,
    touched_at: e.touchedAt,
    proto_link_access: e.protoLinkAccess,
    updated_at: e.updatedAt.toDateString(),
    thumbnail_url: e.signedThumbnailUrl,
    url: e.url,
    prototype_url: e.prototypeUrl,
    file_repo_id: e.fileRepoId,
    source_file_key: e.sourceFileKey,
    is_try_file: e.isTryFile
  };
}
function z(e) {
  return {
    id: e.id,
    folder_id: e.folderId,
    team_id: e.teamId,
    parent_org_id: e.parentOrgId,
    name: e.name,
    created_at: e.createdAt.toDateString(),
    updated_at: e.updatedAt.toDateString(),
    deleted_at: e.deletedAt?.toDateString() || null,
    trashed_at: e.trashedAt?.toDateString() || null,
    has_file_link_password: e.hasFileLinkPassword,
    has_proto_link_password: e.hasProtoLinkPassword,
    link_access: e.linkAccess,
    proto_link_access: e.protoLinkAccess,
    org_browsable: e.orgBrowsable,
    org_audience: e.orgAudience,
    default_file_key: e.defaultFileKey,
    has_active_branches: e.hasActiveBranches
  };
}
function V(e) {
  let t = e.abandonedDraftFile;
  let a = useDispatch();
  let r = G(t);
  let l = t.repo;
  let o = l ? z(l) : null;
  let d = !!t.trashedAt;
  let c = useCallback(() => {
    a(openUrlInContext({
      url: t.url
    }));
  }, [t.url, a]);
  let _ = useCallback(() => {
    o ? _$$O2([], [o], a) : _$$O2([r], [], a);
  }, [o, r, a]);
  let u = useCallback(() => {
    o ? a(Fh({
      fileKeys: [],
      repoIds: [o.id]
    })) : a(Fh({
      fileKeys: [r.key],
      repoIds: []
    }));
  }, [o, r, a]);
  let m = useCallback(() => {
    a(W6({
      file: t
    }));
  }, [t, a]);
  let p = useCallback(() => {
    o ? a(b4({
      fileKeys: [],
      repoIds: [o.id]
    })) : a(b4({
      fileKeys: [r.key],
      repoIds: []
    }));
  }, [o, r, a]);
  return jsxs(zx, {
    children: [d ? jsxs(Fragment, {
      children: [jsx(_$$p2, {
        onClick: m,
        children: getI18nString("abandoned_drafts_table.copy_to_drafts")
      }), jsx(_$$p2, {
        onClick: p,
        children: getI18nString("abandoned_drafts_table.restore")
      })]
    }) : jsxs(Fragment, {
      children: [jsx(_$$p2, {
        onClick: c,
        children: getI18nString("abandoned_drafts_table.open")
      }), jsx(_$$p2, {
        onClick: _,
        children: getI18nString("abandoned_drafts_table.move")
      })]
    }), jsx(MenuSeparator, {}), jsx(_$$p2, {
      onClick: u,
      children: getI18nString("project_menu.permanently_delete")
    })]
  });
}
function H({
  files: e
}) {
  let t = useDispatch();
  if (0 === e.length) return null;
  let a = e.some(e => !!e.trashedAt);
  let s = e.every(e => !!e.trashedAt);
  return jsxs(Fragment, {
    children: [jsx(IU, {
      onClick: () => {
        t(openUrlInContext({
          url: e[0].url
        }));
      },
      disabled: 1 !== e.length || a,
      label: getI18nString("abandoned_drafts_table.open")
    }), jsx(IU, {
      onClick: () => {
        let a = e.filter(e => !e.repo).map(e => G(e));
        let n = e.filter(e => !!e.repo).map(e => z(e.repo));
        _$$O2(a, n, t);
      },
      disabled: a,
      label: getI18nString("abandoned_drafts_table.move")
    }), a && jsxs(Fragment, {
      children: [jsx(IU, {
        onClick: () => {
          t(W6({
            file: e[0]
          }));
        },
        disabled: 1 !== e.length || !s,
        label: getI18nString("abandoned_drafts_table.copy_to_drafts")
      }), jsx(IU, {
        onClick: () => {
          let a = e.filter(e => !e.repo).map(e => e.key);
          let n = e.filter(e => !!e.repo).map(e => e.repo.id);
          t(b4({
            fileKeys: a,
            repoIds: n
          }));
        },
        disabled: !s,
        label: getI18nString("abandoned_drafts_table.restore")
      })]
    }), jsx(IU, {
      onClick: () => {
        let a = e.filter(e => !e.repo).map(e => e.key);
        let n = e.filter(e => !!e.repo).map(e => e.repo.id);
        t(Fh({
          fileKeys: a,
          repoIds: n
        }));
      },
      label: getI18nString("project_menu.permanently_delete")
    })]
  });
}
let K = "name";
let X = "fig_file_checkpoints.updated_at";
let Q = "created_at";
let Z = [X, Q];
function ee(e) {
  let t = useDispatch();
  let [a, r] = useState({
    columnName: K,
    isReversed: !1
  });
  let [l, o] = useState("");
  let [d, _] = useState(!1);
  let u = (e, t) => e.columnName === t ? !e.isReversed : Z.includes(t);
  let m = useCallback(e => {
    r(t => ({
      columnName: e,
      isReversed: u(t, e)
    }));
  }, [r]);
  let p = useSubscription(PaginatedAbandonedDraftFilesView, {
    firstPageSize: 20,
    sortOrder: a.isReversed ? "desc" : "asc",
    cursorColumn: a.columnName,
    folderId: e.abandonedDraftFolderId,
    queryString: l,
    showTrashed: d
  });
  let U = useSubscription(ProjectNameById, {
    projectId: e.abandonedDraftFolderId
  });
  ("errors" === p.status || "errors" === U.status) && (e.planType === OrganizationType.TEAM ? t(selectViewAction({
    view: "teamAdminConsole",
    teamId: e.planId,
    teamAdminConsoleViewTab: DashboardSections.DRAFTS
  })) : t(selectViewAction({
    view: "orgAdminSettings",
    orgAdminSettingsViewTab: DashboardSection.CONTENT,
    orgAdminSettingsViewSecondaryTab: WorkspaceTab.ABANDONED_DRAFTS
  })));
  let F = useMemo(() => U.data?.project, [U]);
  let q = "loaded" === U.status ? _$$b(F) : "";
  let $ = useMemo(() => Array.from(new Set(p.data?.abandonedDraftFiles.filter(t => !!t.file && t.file.folderId === e.abandonedDraftFolderId && (d || !t.file.trashedAt) && !t.file.deletedAt && !t.file.sourceFileKey).map(e => e.file))) ?? [], [p, e.abandonedDraftFolderId, d]);
  let B = "loaded" === p.status && p.data.abandonedDraftFiles.hasNextPage() ? () => p.data?.abandonedDraftFiles.loadNext(20) : void 0;
  let G = useCallback(e => !e.trashedAt, []);
  let z = useCallback(e => {
    t(openUrlInContext({
      url: e.url
    }));
  }, [t]);
  return jsxs(TrackingProvider, {
    name: e0.ABANDONED_DRAFT_FILES_TABLE,
    properties: {
      folderId: e.abandonedDraftFolderId,
      teamId: F?.teamId,
      orgId: F?.orgId
    },
    children: [jsx(_$$K, {
      title: q
    }), jsx(Cj, {
      actionBar: e => jsx(H, {
        files: e
      }),
      columns: [{
        name: getI18nString("abandoned_drafts_table.file_name"),
        className: "abandoned_draft_files_table--fileNameColumn--wRvXv abandoned_draft_files_table--column--DMRf- table--column--974RA",
        sorting_key: K,
        getSortValue: e => e.name,
        cellComponent: e => jsxs("div", {
          className: _$$s.flex.itemsCenter.gap12.overflowHidden.h48.wFull.$,
          children: [jsx("div", {
            className: _$$s.relative.flexShrink0.hFull.$,
            children: jsx(_$$V, {
              thumbnailUrl: e.signedThumbnailUrl,
              thumbnailType: lv(e.editorType, !1),
              size: _$$y.SMALL,
              borderRadius: 4
            })
          }), jsx("span", {
            children: e.name
          }), e.trashedAt && jsx(Badge, {
            color: BadgeColor.DEFAULT,
            text: getI18nString("abandoned_drafts_table.trashed")
          })]
        })
      }, {
        name: getI18nString("abandoned_drafts_table.modified_at"),
        className: "abandoned_draft_files_table--modifiedAtColumn--GOXML abandoned_draft_files_table--column--DMRf- table--column--974RA",
        sorting_key: X,
        getSortValue: e => e.touchedAt,
        cellComponent: e => jsx(h1, {
          date: e.touchedAt
        })
      }, {
        name: getI18nString("abandoned_drafts_table.created_at"),
        className: "abandoned_draft_files_table--createdAtColumn--z6vBs abandoned_draft_files_table--column--DMRf- table--column--974RA",
        sorting_key: Q,
        getSortValue: e => e.createdAt.toDateString(),
        cellComponent: e => jsx(h1, {
          date: e.createdAt
        })
      }],
      emptyContent: jsx(_$$p, {
        children: jsx(AutoLayout, {
          direction: "vertical",
          horizontalAlignItems: "center",
          verticalAlignItems: "center",
          children: jsx("div", {
            className: "abandoned_draft_files_table--emptyTextHeader--m6pOW",
            children: renderI18nText("abandoned_drafts_table.no_drafts")
          })
        })
      }),
      getItemKey: e => e.key || "",
      hasNewScrollContext: !0,
      isBannerHeightDynamic: !0,
      isLoading: "loaded" !== p.status,
      isRowClickable: G,
      itemTypeContext: {
        itemType: "file",
        getSelectedCountString: e => getI18nString("multi_select_list.selected_count_file", {
          numSelected: e
        })
      },
      items: $,
      onFetchMore: B,
      onRowClick: z,
      onSetSortState: m,
      rightActionColumns: [{
        name: "menu-cell",
        className: oi,
        cellComponent: e => jsx(V, {
          abandonedDraftFile: e
        })
      }, VU],
      rowHeightOverride: 64,
      selectAllDisabled: !0,
      sortState: a,
      stickyContent: jsxs(AutoLayout, {
        strokeColor: "default",
        strokeWidth: {
          bottom: 1
        },
        padding: {
          vertical: 8
        },
        children: [jsx(y2, {
          onChange: o,
          query: l,
          clearSearch: () => o(""),
          placeholder: getI18nString("abandoned_drafts_table.files.search.placeholder")
        }), jsx(Spacer, {}), jsx(Checkbox, {
          checked: d,
          onChange: () => {
            _(!d);
          },
          label: jsx(Label, {
            children: renderI18nText("abandoned_drafts_table.files.show_trashed_files")
          })
        })]
      }),
      styleOverrideClassNames: {
        row: "abandoned_draft_files_table--folderRow--RJxRH"
      }
    })]
  });
}
export function $$et0(e) {
  let t = useDispatch();
  let a = getSelectedView();
  let g = useSelector(e => getPermissionsStateMemoized(e));
  let h = useSelector(e => e.teams);
  let x = useTeamPlanUser();
  let b = useIsOrgAdminUser(x);
  let v = "loaded" === b.status && isSelectedViewMissingOrgAdminResources({
    isAdminOrg: b.data,
    permissions: g,
    teams: h,
    view: a
  });
  let f = vS(a);
  return (useEffect(() => {
    v && t(selectViewAction({
      view: "resourceUnavailable",
      resourceType: f
    }));
  }, [t, f, v]), "loaded" !== b.status) ? null : jsx(_$$r, {
    containerClass: "abandoned_draft_files_page_view--fileBrowserContentContainer--7-FYC",
    scrollableContainerClass: "abandoned_draft_files_page_view--fileBrowserScrollableContainer--ko-IP",
    toolbar: jsx(_$$g, {}),
    content: jsx(ee, {
      abandonedDraftFolderId: e.abandonedDraftFolderId,
      planType: e.planType,
      planId: e.planId
    }),
    errorBoundaryConfig: {
      figmaTeam: _$$e.SCALE,
      boundaryKeySuffix: "AbandonedDraftFilesPageView"
    }
  });
}
export const AbandonedDraftFilesPageView = $$et0;
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { BannerInset } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { N as _$$N } from "../905/572042";
import { getFeatureFlags } from "../905/601108";
import { useSubscription } from "../figma_app/288654";
import { RelativeTimeDisplay } from "../905/986103";
import { y2 } from "../figma_app/563413";
import { getI18nString, renderI18nText } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { p as _$$p } from "../905/597320";
import { b as _$$b } from "../905/168239";
import { K } from "../905/628118";
import { FolderPreview } from "../905/16143";
import { selectViewAction } from "../905/929976";
import { TrackingProvider } from "../figma_app/831799";
import { PaginatedAbandonedDraftsView } from "../figma_app/43951";
import { getOrgAdminTabMessage } from "../figma_app/809387";
import { DashboardSection, WorkspaceTab } from "../figma_app/650409";
import { OrganizationType } from "../905/833838";
import { e0 } from "../905/696396";
import { Cj } from "../905/270084";
import { zx, VU } from "../4452/650793";
import { p as _$$p2 } from "../469e6e40/348454";
import { K as _$$K } from "../469e6e40/132057";
import { J } from "../905/844906";
import { showModalHandler } from "../905/156213";
import { IU } from "../figma_app/421401";
import { b as _$$b2 } from "../469e6e40/978552";
import { oi } from "../figma_app/527041";
function R(e) {
  let t = e.abandonedDraftFolder;
  let a = useDispatch();
  let r = useCallback(() => {
    a(selectViewAction({
      view: "abandonedDraftFiles",
      abandonedDraftFolderId: t.id,
      planId: e.planId,
      adminPlanType: e.planType
    }));
  }, [a, t, e.planId, e.planType]);
  let l = useCallback(() => {
    a(showModalHandler({
      type: _$$K(),
      data: {
        folders: [t]
      }
    }));
  }, [a, t]);
  let o = useCallback(() => {
    a(showModalHandler({
      type: J,
      data: {
        folderId: t.id
      }
    }));
  }, [a, t]);
  return jsxs(zx, {
    children: [jsx(_$$p2, {
      onClick: r,
      children: getI18nString("abandoned_drafts_table.open")
    }), e.planType === OrganizationType.ORG && jsx(_$$p2, {
      onClick: o,
      children: getI18nString("abandoned_drafts_table.move")
    }), jsx(_$$p2, {
      onClick: l,
      children: getI18nString("project_menu.permanently_delete")
    })]
  });
}
function L({
  folders: e,
  planType: t,
  planId: a
}) {
  let s = useDispatch();
  return 0 === e.length ? null : jsxs(Fragment, {
    children: [jsx(IU, {
      onClick: () => {
        s(selectViewAction({
          view: "abandonedDraftFiles",
          abandonedDraftFolderId: e[0].id,
          adminPlanType: t,
          planId: a
        }));
      },
      disabled: 1 !== e.length,
      label: getI18nString("abandoned_drafts_table.open")
    }), t === OrganizationType.ORG && jsx(IU, {
      onClick: () => {
        s(showModalHandler({
          type: J,
          data: {
            folderId: e[0].id
          }
        }));
      },
      disabled: 1 !== e.length,
      label: getI18nString("abandoned_drafts_table.move")
    }), jsx(IU, {
      onClick: () => {
        s(showModalHandler({
          type: _$$K(),
          data: {
            folders: e
          }
        }));
      },
      label: getI18nString("project_menu.permanently_delete")
    })]
  });
}
let P = "abandoned_draft_user_removed_at";
export function $$U0(e) {
  let t = useDispatch();
  let [a, N] = useState({
    columnName: P,
    isReversed: !0
  });
  let I = e.planType === OrganizationType.TEAM ? e.team.id : e.org.id;
  let [T, A] = useState("");
  let O = (e, t) => e.columnName === t ? !e.isReversed : t === P;
  let U = useCallback(e => {
    N(t => ({
      columnName: e,
      isReversed: O(t, e)
    }));
  }, [N]);
  let F = useSubscription(PaginatedAbandonedDraftsView, {
    firstPageSize: 30,
    sortOrder: a.isReversed ? "desc" : "asc",
    cursorColumn: a.columnName,
    planId: e.planType === OrganizationType.TEAM ? e.team.id : e.org.id,
    planType: e.planType === OrganizationType.TEAM ? "team" : "org",
    queryString: T
  });
  let q = useMemo(() => new Map(F.data?.abandonedDraftFolders.map(e => [e.projectId, e.fileCount])), [F]);
  let $ = useMemo(() => Array.from(new Set(F.data?.abandonedDraftFolders.filter(e => !!e.project).map(e => {
    let t = _$$b2(e.project);
    return {
      ...e.project,
      path: t
    };
  }))) ?? [], [F]);
  let B = "loaded" === F.status && F.data.abandonedDraftFolders.hasNextPage() ? () => F.data?.abandonedDraftFolders.loadNext(30) : void 0;
  let G = useCallback(a => {
    t(selectViewAction({
      view: "abandonedDraftFiles",
      abandonedDraftFolderId: a.id,
      planId: I,
      adminPlanType: e.planType
    }));
  }, [t, I, e.planType]);
  return jsxs(TrackingProvider, {
    name: e0.ABANDONED_DRAFTS_TABLE,
    properties: {
      orgId: e.planType === OrganizationType.ORG ? e.org.id : null,
      teamId: e.planType === OrganizationType.TEAM ? e.team.id : null
    },
    children: [e.planType === OrganizationType.ORG && !getFeatureFlags().ff_a11y_page_tab_fix && jsxs(Fragment, {
      children: [jsx(K, {
        title: getOrgAdminTabMessage(DashboardSection.CONTENT)
      }), jsx(_$$b, {
        tab: DashboardSection.CONTENT,
        selectedSecondaryTab: WorkspaceTab.ABANDONED_DRAFTS
      })]
    }), jsx(Cj, {
      actionBar: t => jsx(L, {
        folders: t,
        planType: e.planType,
        planId: I
      }),
      columns: [{
        name: getI18nString("abandoned_drafts_table.folder_name"),
        className: "abandoned_drafts_table--folderNameColumn--I7WIR abandoned_drafts_table--column--ZtlI6 table--column--974RA",
        cellComponent: e => jsx(FolderPreview, {
          folder: e,
          fontSize: 11
        }),
        sorting_key: e.planType === OrganizationType.ORG ? "path" : "abandoned_draft_user_email",
        getSortValue: e => e.path
      }, {
        name: getI18nString("abandoned_drafts_table.files"),
        className: "abandoned_drafts_table--fileColumn--uLmQC abandoned_drafts_table--column--ZtlI6 table--column--974RA",
        cellComponent: e => renderI18nText("abandoned_drafts_table.file_count", {
          numFiles: q.get(e.id) ?? 0
        })
      }, {
        name: getI18nString("abandoned_drafts_table.removed_at"),
        className: "abandoned_drafts_table--removeAtColumn--2yIZc abandoned_drafts_table--column--ZtlI6 table--column--974RA",
        cellComponent: e => e.abandonedDraftUserRemovedAt ? jsx(RelativeTimeDisplay, {
          date: e.abandonedDraftUserRemovedAt
        }) : jsx(Fragment, {
          children: "\u2013"
        }),
        sorting_key: P,
        getSortValue: e => (e.abandonedDraftUserRemovedAt || e.createdAt).toDateString()
      }],
      emptyContent: jsx(_$$p, {
        children: jsx(AutoLayout, {
          direction: "vertical",
          horizontalAlignItems: "center",
          verticalAlignItems: "center",
          children: jsx("div", {
            className: "abandoned_drafts_table--emptyTextHeader--OheqK",
            children: renderI18nText("abandoned_drafts_table.no_drafts")
          })
        })
      }),
      getItemKey: e => e.id || "",
      hasNewScrollContext: !0,
      isBannerHeightDynamic: !0,
      isLoading: "loaded" !== F.status,
      itemTypeContext: {
        itemType: "folder",
        getSelectedCountString: e => getI18nString("multi_select_list.selected_count_folder", {
          numSelected: e
        })
      },
      items: $,
      onFetchMore: B,
      onRowClick: G,
      onSetSortState: U,
      rightActionColumns: [{
        name: "menu-cell",
        className: oi,
        cellComponent: t => jsx(R, {
          abandonedDraftFolder: t,
          planType: e.planType,
          planId: I
        })
      }, VU],
      rowHeightOverride: 64,
      selectAllDisabled: !0,
      sortState: a,
      stickyContent: jsxs("div", {
        children: [jsx(AutoLayout, {
          strokeColor: "default",
          strokeWidth: {
            top: 1,
            bottom: 1
          },
          padding: {
            vertical: 8
          },
          children: jsx(y2, {
            onChange: A,
            query: T,
            clearSearch: () => A(""),
            placeholder: getI18nString("abandoned_drafts_table.search.placeholder")
          })
        }), (() => {
          let t = e.planType === OrganizationType.ORG ? renderI18nText("abandoned_drafts_table.banner_header", {
            orgName: e.org.name
          }) : renderI18nText("abandoned_drafts_table.banner_header_teams", {
            teamName: e.team.name
          });
          let a = e.planType === OrganizationType.ORG ? renderI18nText("abandoned_drafts_table.banner_message") : renderI18nText("abandoned_drafts_table.banner_message_teams");
          let s = getFeatureFlags().delete_empty_abandoned_draft_folders ? renderI18nText("abandoned_drafts_table.banner_message_on_cleanup") : null;
          return jsx(AutoLayout, {
            padding: {
              top: 8
            },
            children: jsxs(BannerInset, {
              variant: "brand",
              children: [jsxs(BannerMessage, {
                title: t,
                children: [a, " ", s]
              }), jsx(_$$N, {
                trusted: !0,
                newTab: !0,
                href: "https://help.figma.com/hc/articles/4420549259799",
                children: renderI18nText("general.learn_more")
              })]
            })
          });
        })()]
      }),
      styleOverrideClassNames: {
        row: "abandoned_drafts_table--folderRow--lBT37"
      }
    })]
  });
}
export const M = $$U0;
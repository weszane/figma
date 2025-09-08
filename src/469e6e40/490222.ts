import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, useState, useMemo } from "react";
import { useDispatch } from "../vendor/514228";
import { Yy } from "../figma_app/59509";
import { Q } from "../905/363675";
import { N as _$$N } from "../905/572042";
import { getFeatureFlags } from "../905/601108";
import { Rs } from "../figma_app/288654";
import { h1 } from "../905/986103";
import { y2 } from "../figma_app/563413";
import { getI18nString, renderI18nText } from "../905/303541";
import { Y } from "../905/830372";
import { p as _$$p } from "../905/597320";
import { b as _$$b } from "../905/168239";
import { K } from "../905/628118";
import { L as _$$L } from "../905/16143";
import { sf } from "../905/929976";
import { fu } from "../figma_app/831799";
import { t6F } from "../figma_app/43951";
import { O as _$$O } from "../figma_app/809387";
import { J7, SN } from "../figma_app/650409";
import { O as _$$O2 } from "../905/833838";
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
    a(sf({
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
    }), e.planType === _$$O2.ORG && jsx(_$$p2, {
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
        s(sf({
          view: "abandonedDraftFiles",
          abandonedDraftFolderId: e[0].id,
          adminPlanType: t,
          planId: a
        }));
      },
      disabled: 1 !== e.length,
      label: getI18nString("abandoned_drafts_table.open")
    }), t === _$$O2.ORG && jsx(IU, {
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
  let I = e.planType === _$$O2.TEAM ? e.team.id : e.org.id;
  let [T, A] = useState("");
  let O = (e, t) => e.columnName === t ? !e.isReversed : t === P;
  let U = useCallback(e => {
    N(t => ({
      columnName: e,
      isReversed: O(t, e)
    }));
  }, [N]);
  let F = Rs(t6F, {
    firstPageSize: 30,
    sortOrder: a.isReversed ? "desc" : "asc",
    cursorColumn: a.columnName,
    planId: e.planType === _$$O2.TEAM ? e.team.id : e.org.id,
    planType: e.planType === _$$O2.TEAM ? "team" : "org",
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
    t(sf({
      view: "abandonedDraftFiles",
      abandonedDraftFolderId: a.id,
      planId: I,
      adminPlanType: e.planType
    }));
  }, [t, I, e.planType]);
  return jsxs(fu, {
    name: e0.ABANDONED_DRAFTS_TABLE,
    properties: {
      orgId: e.planType === _$$O2.ORG ? e.org.id : null,
      teamId: e.planType === _$$O2.TEAM ? e.team.id : null
    },
    children: [e.planType === _$$O2.ORG && !getFeatureFlags().ff_a11y_page_tab_fix && jsxs(Fragment, {
      children: [jsx(K, {
        title: _$$O(J7.CONTENT)
      }), jsx(_$$b, {
        tab: J7.CONTENT,
        selectedSecondaryTab: SN.ABANDONED_DRAFTS
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
        cellComponent: e => jsx(_$$L, {
          folder: e,
          fontSize: 11
        }),
        sorting_key: e.planType === _$$O2.ORG ? "path" : "abandoned_draft_user_email",
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
        cellComponent: e => e.abandonedDraftUserRemovedAt ? jsx(h1, {
          date: e.abandonedDraftUserRemovedAt
        }) : jsx(Fragment, {
          children: "\u2013"
        }),
        sorting_key: P,
        getSortValue: e => (e.abandonedDraftUserRemovedAt || e.createdAt).toDateString()
      }],
      emptyContent: jsx(_$$p, {
        children: jsx(Y, {
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
        children: [jsx(Y, {
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
          let t = e.planType === _$$O2.ORG ? renderI18nText("abandoned_drafts_table.banner_header", {
            orgName: e.org.name
          }) : renderI18nText("abandoned_drafts_table.banner_header_teams", {
            teamName: e.team.name
          });
          let a = e.planType === _$$O2.ORG ? renderI18nText("abandoned_drafts_table.banner_message") : renderI18nText("abandoned_drafts_table.banner_message_teams");
          let s = getFeatureFlags().delete_empty_abandoned_draft_folders ? renderI18nText("abandoned_drafts_table.banner_message_on_cleanup") : null;
          return jsx(Y, {
            padding: {
              top: 8
            },
            children: jsxs(Yy, {
              variant: "brand",
              children: [jsxs(Q, {
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
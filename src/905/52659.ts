import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { wA, d4 } from "../vendor/514228";
import { Ay } from "@stylexjs/stylex";
import { sx } from "../905/449184";
import { MD } from "../figma_app/672951";
import { gY } from "../figma_app/566371";
import { s as _$$s } from "../905/573154";
import { t as _$$t, tx } from "../905/303541";
import { kg } from "../figma_app/976345";
import { U as _$$U } from "../905/926550";
import { V as _$$V } from "../905/633585";
import { E as _$$E } from "../905/391888";
import { B as _$$B } from "../905/799228";
import { Z as _$$Z } from "../905/406205";
import { A as _$$A } from "../905/351112";
import { j7 } from "../905/929976";
import { to } from "../905/156213";
import { Ct } from "../figma_app/199513";
import { _6 } from "../figma_app/386952";
import { Bp } from "../figma_app/349248";
import { Mz } from "../vendor/925040";
import { Dq } from "../905/316062";
import { C0, ue } from "../figma_app/756995";
import { h as _$$h } from "../figma_app/198885";
import { h1 } from "../905/986103";
import { s as _$$s2 } from "../cssbuilder/589278";
import { E as _$$E2 } from "../905/984674";
import { L as _$$L } from "../905/16143";
import { n as _$$n } from "../905/502036";
import { BV } from "../905/811749";
import { g as _$$g } from "../905/687265";
import { Wi, JR } from "../figma_app/162641";
import { t as _$$t2 } from "../905/53773";
import { x as _$$x } from "../905/98916";
import { H8, Pf } from "../905/590952";
import { wW } from "../figma_app/656450";
let T = Mz(_$$h, e => "team" === e.view ? `${e.view}-${e.teamId}` : e.view);
let k = Mz(_$$h, T, e => e.viewBarSortOptionsByView, e => e.tileSortFilterStateByView, (e, t, i, n) => {
  if ("team" === e.view) {
    let e = n.team;
    return {
      sortKey: e.sort.key === C0.NAME ? Dq.NAME : Dq.LAST_MODIFIED,
      sortDesc: e.sort.dir === ue.DESC
    };
  }
  return i[t];
});
function B({
  folderId: e
}) {
  let t = "trashedFolders" === _6().view;
  let i = _$$x(e, t);
  return "loaded" !== i.status ? jsx(Wi, {
    className: _$$s2.w48.$,
    animationType: JR.NO_SHIMMER
  }) : jsx(_$$E2, {
    truncate: !0,
    children: jsx("span", {
      ...Ay.props(_$$g.textBodyMedium),
      children: _$$t("file_browser.folder.number_of_files", {
        formattedNumFiles: _$$t2(i.data),
        numFiles: i.data
      })
    })
  });
}
function V(e) {
  let t = e.folder.shared_at;
  return t ? jsx(h1, {
    date: t
  }) : jsx(_$$E2, {
    truncate: !0,
    children: "--"
  });
}
function H(e) {
  let t = e.folder.shared_by_user?.name;
  let i = e.folder.shared_by ?? null;
  let r = wW(i).user;
  return i ? jsxs("div", {
    className: _$$s2.flex.itemsCenter.gap8.$,
    children: [r && jsx(H8, {
      user: r,
      size: Pf.MEDIUM
    }), jsx(_$$E2, {
      truncate: !0,
      children: t
    })]
  }) : jsx(_$$E2, {
    truncate: !0,
    children: "--"
  });
}
function W(e) {
  let t = e.folder.trashed_at;
  return t ? jsx(h1, {
    date: t
  }) : jsx(_$$E2, {
    truncate: !0,
    children: "--"
  });
}
let K = {
  renderRowCell: e => jsx(_$$n, {
    folder: e
  })
};
let Y = (e, t, i) => ({
  headerCellClassName: _$$s2.wHalf.$,
  field: Dq.NAME,
  renderHeaderCell: () => jsx(_$$E2, {
    truncate: !0,
    children: tx("file_browser.folder_list_view.header_name_column")
  }),
  renderRowCell: (r, {
    itemIndex: a
  }) => {
    let s = !!i && r.team_id === i.teamId && i.isLockedTeam;
    return jsx(_$$L, {
      folder: r,
      dataOnboardingKey: a === t ? e : "",
      showViewOnlyLabel: s
    });
  }
});
let q = {
  renderHeaderCell: () => jsx(_$$E2, {
    truncate: !0,
    children: tx("file_browser.folder_list_view.header_files_column")
  }),
  renderRowCell: e => jsx(B, {
    folderId: e.id
  })
};
let $ = {
  field: Dq.LAST_MODIFIED,
  renderHeaderCell: () => jsx(_$$E2, {
    truncate: !0,
    children: tx("file_browser.folder_list_view.header_updated_column")
  }),
  renderRowCell: e => jsx(BV, {
    children: jsx(h1, {
      date: e.folderLastUpdated ?? e.updated_at
    })
  })
};
let Z = {
  renderHeaderCell: () => jsx(_$$E2, {
    truncate: !0,
    children: tx("file_browser.folder_list_view.header_updated_column")
  }),
  renderRowCell: e => jsx(BV, {
    children: jsx(h1, {
      date: e.files_last_touched_at ?? e.updated_at
    })
  })
};
let X = {
  field: Dq.CREATED_AT,
  renderHeaderCell: () => jsx(_$$E2, {
    truncate: !0,
    children: tx("file_browser.folder_list_view.header_created_column")
  }),
  renderRowCell: e => jsx(BV, {
    children: jsx(h1, {
      date: e.created_at
    })
  })
};
let Q = {
  field: Dq.SHARED_AT,
  renderHeaderCell: () => jsx(_$$E2, {
    truncate: !0,
    children: tx("file_browser.folder_list_view.header_shared_at_column")
  }),
  renderRowCell: e => jsx(BV, {
    children: jsx(V, {
      folder: e
    })
  })
};
let J = {
  renderHeaderCell: () => jsx(_$$E2, {
    truncate: !0,
    children: tx("file_browser.folder_list_view.header_shared_by_column")
  }),
  renderRowCell: e => jsx(BV, {
    children: jsx(H, {
      folder: e
    })
  })
};
let ee = {
  renderHeaderCell: () => jsx(_$$E2, {
    truncate: !0,
    children: tx("file_browser.folder_list_view.header_trashed_at_column")
  }),
  renderRowCell: e => jsx(BV, {
    children: jsx(W, {
      folder: e
    })
  })
};
let et = e => ({
  gutterColumn: K,
  columns: [Y(e.dataOnboardingKey, e.dataOnboardingKeyIndex, e.checksForViewOnlyLabels), q, $]
});
let ei = e => ({
  gutterColumn: K,
  columns: [Y(e.dataOnboardingKey, e.dataOnboardingKeyIndex), q, J, Q]
});
let en = e => ({
  gutterColumn: void 0,
  columns: [Y(e.dataOnboardingKey, e.dataOnboardingKeyIndex), q, ee]
});
let er = (e, t, i, n) => {
  switch (e.view) {
    case "recentsAndSharing":
      return ei({
        dataOnboardingKeyIndex: i,
        dataOnboardingKey: t
      });
    case "search":
      return {
        gutterColumn: void 0,
        columns: [Y(void 0, void 0, n), q, Z, X]
      };
    case "trashedFolders":
      return en({});
    default:
      return et({
        dataOnboardingKeyIndex: i,
        dataOnboardingKey: t,
        checksForViewOnlyLabels: n
      });
  }
};
export function $$ea0(e) {
  let [t, i] = useState([]);
  let s = wA();
  let x = d4(k);
  let S = _6();
  let w = gY(Ct);
  let C = MD(t);
  let T = d4(e => e.teams);
  let {
    columns,
    gutterColumn
  } = er(S, e.dataOnboardingKey, e.dataOnboardingKeyIndex, e.checksForViewOnlyLabels);
  let P = _$$E();
  let O = useCallback((e, t) => {
    sx("Folder Permanently Delete Click", {
      folderId: e.id,
      teamId: e.team_id,
      orgId: t
    });
    "loaded" === C.projects.status && C.projects.data[e.id].canPermanentlyDelete && s(to({
      type: _$$U(),
      data: {
        folder: e,
        folderOrgId: t
      }
    }));
  }, [s, C]);
  let D = useCallback((e, t) => {
    sx("Folder Trash Click", {
      folderId: e.id,
      teamId: e.team_id,
      orgId: t
    });
    e.folderPerms?.canSkipDeletionConfirmation ? w({
      folderId: e.id
    }).catch(() => {
      s(_$$s.error(_$$t("file_browser.api_folder.error_when_moving_to_trash")));
    }) : "loaded" === C.projects.status && C.projects.data[e.id].canTrash && s(to({
      type: _$$V(),
      data: {
        folder: e
      }
    }));
  }, [s, C, w]);
  let L = useCallback(e => {
    if (1 !== e.length) return;
    let t = e[0];
    let i = t.team_id;
    let n = t && i ? T[i] : void 0;
    let r = n ? n.org_id : t.org_id;
    void 0 === r && (r = null);
    "trashedFolders" === S.view ? O(t, r) : D(t, r);
  }, [D, O, S.view, T]);
  return jsx(_$$A, {
    getAriaLabel: e => e.name,
    gridViewProps: {
      containerStyle: es.gridPadding,
      tileBorderRadius: 16,
      nestedFocus: !0,
      trailingGridElements: e.trailingGridElements,
      renderTile: (t, i) => {
        let r = e.dataOnboardingKeyIndex && e.folderList[e.dataOnboardingKeyIndex]?.id === t.id ? "project-card" : "";
        return jsx(_$$Z, {
          folder: t,
          dataOnboardingKey: r,
          isSharerInfoIncluded: e.isSharerInfoIncluded,
          currentPlanFilter: e.currentPlanFilter,
          checksForViewOnlyLabels: e.checksForViewOnlyLabels,
          inItemsView: !0,
          onChildFocusChange: i
        }, t.id);
      }
    },
    handleContextMenu: e.onContextMenuOverride ? e.onContextMenuOverride : (e, t) => {
      t.stopPropagation();
      t.preventDefault();
      let i = e[0];
      if (!i) return;
      let n = {
        top: t.clientY,
        right: t.clientX,
        bottom: t.clientY,
        left: t.clientX,
        width: 1,
        height: 1
      };
      s(j7({
        type: _$$B,
        data: {
          folder: {
            ...Bp(i),
            isSubscribed: i.is_favorited
          },
          targetRect: n
        }
      }));
    },
    handleDeleteKey: L,
    handleOpenItem: (e, t) => {
      "trashedFolders" !== S.view && (s(kg({
        clickedResourceType: "team",
        resourceIdOrKey: e.id
      })), P(e.id, t));
    },
    items: e.folderList,
    listViewProps: {
      columns,
      gutterColumn,
      currentSort: e.currentSortOverride ? e.currentSortOverride : {
        field: x?.sortKey,
        isDescending: !!x?.sortDesc
      },
      handleSortBy: t => {
        e.onChangeSortOptions({
          sortKey: t,
          sortDesc: t !== x?.sortKey || !x.sortDesc
        });
      }
    },
    multiselectDisabled: !0,
    updateRenderedItems: i,
    viewType: e.viewType
  });
}
let es = {
  gridPadding: {
    paddingLeft: "x1tudf5h",
    paddingRight: "x1m2p0i2",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  }
};
export const m = $$ea0; 

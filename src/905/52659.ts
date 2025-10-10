import { stylex } from '@stylexjs/stylex';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jsx, jsxs } from 'react/jsx-runtime';
import { FolderPreview } from '../905/16143';
import { t as _$$t2 } from '../905/53773';
import { x as _$$x } from '../905/98916';
import { showModalHandler } from '../905/156213';
import { getI18nString, renderI18nText } from '../905/303541';
import { FolderSortKey } from '../905/316062';
import { A as _$$A } from '../905/351112';
import { E as _$$E } from '../905/391888';
import { Z as _$$Z } from '../905/406205';
import { trackEventAnalytics } from '../905/449184';
import { n as _$$n } from '../905/502036';
import { FlashActions } from '../905/573154';
import { AvatarSize, UserAvatar } from '../905/590952';
import { V as _$$V } from '../905/633585';
import { textDisplayConfig } from '../905/687265';
import { B as _$$B } from '../905/799228';
import { BV } from '../905/811749';
import { U as _$$U } from '../905/926550';
import { showDropdownThunk } from '../905/929976';
import { TextWithTruncation } from '../905/984674';
import { RelativeTimeDisplay } from '../905/986103';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { JR, Wi } from '../figma_app/162641';
import { getSelectedViewSelector } from '../figma_app/198885';
import { trashFolderMutation } from '../figma_app/199513';
import { mapProjectProperties } from '../figma_app/349248';
import { getSelectedView } from '../figma_app/386952';
import { getAtomMutate } from '../figma_app/566371';
import { wW } from '../figma_app/656450';
import { MD } from '../figma_app/672951';
import { SortField, SortOrder } from '../figma_app/756995';
import { trackNavTreeClicked } from '../figma_app/976345';
import { createSelector } from '../vendor/925040';
let T = createSelector(getSelectedViewSelector, e => e.view === 'team' ? `${e.view}-${e.teamId}` : e.view);
let k = createSelector(getSelectedViewSelector, T, e => e.viewBarSortOptionsByView, e => e.tileSortFilterStateByView, (e, t, i, n) => {
  if (e.view === 'team') {
    let e = n.team;
    return {
      sortKey: e.sort.key === SortField.NAME ? FolderSortKey.NAME : FolderSortKey.LAST_MODIFIED,
      sortDesc: e.sort.dir === SortOrder.DESC
    };
  }
  return i[t];
});
function B({
  folderId: e
}) {
  let t = getSelectedView().view === 'trashedFolders';
  let i = _$$x(e, t);
  return i.status !== 'loaded' ? jsx(Wi, {
    className: cssBuilderInstance.w48.$,
    animationType: JR.NO_SHIMMER
  }) : jsx(TextWithTruncation, {
    truncate: !0,
    children: jsx('span', {
      ...stylex.props(textDisplayConfig.textBodyMedium),
      children: getI18nString('file_browser.folder.number_of_files', {
        formattedNumFiles: _$$t2(i.data),
        numFiles: i.data
      })
    })
  });
}
function V(e) {
  let t = e.folder.shared_at;
  return t ? jsx(RelativeTimeDisplay, {
    date: t
  }) : jsx(TextWithTruncation, {
    truncate: !0,
    children: '--'
  });
}
function H(e) {
  let t = e.folder.shared_by_user?.name;
  let i = e.folder.shared_by ?? null;
  let r = wW(i).user;
  return i ? jsxs('div', {
    className: cssBuilderInstance.flex.itemsCenter.gap8.$,
    children: [r && jsx(UserAvatar, {
      user: r,
      size: AvatarSize.MEDIUM
    }), jsx(TextWithTruncation, {
      truncate: !0,
      children: t
    })]
  }) : jsx(TextWithTruncation, {
    truncate: !0,
    children: '--'
  });
}
function W(e) {
  let t = e.folder.trashed_at;
  return t ? jsx(RelativeTimeDisplay, {
    date: t
  }) : jsx(TextWithTruncation, {
    truncate: !0,
    children: '--'
  });
}
let K = {
  renderRowCell: e => jsx(_$$n, {
    folder: e
  })
};
let Y = (e, t, i) => ({
  headerCellClassName: cssBuilderInstance.wHalf.$,
  field: FolderSortKey.NAME,
  renderHeaderCell: () => jsx(TextWithTruncation, {
    truncate: !0,
    children: renderI18nText('file_browser.folder_list_view.header_name_column')
  }),
  renderRowCell: (r, {
    itemIndex: a
  }) => {
    let s = !!i && r.team_id === i.teamId && i.isLockedTeam;
    return jsx(FolderPreview, {
      folder: r,
      dataOnboardingKey: a === t ? e : '',
      showViewOnlyLabel: s
    });
  }
});
let q = {
  renderHeaderCell: () => jsx(TextWithTruncation, {
    truncate: !0,
    children: renderI18nText('file_browser.folder_list_view.header_files_column')
  }),
  renderRowCell: e => jsx(B, {
    folderId: e.id
  })
};
let $ = {
  field: FolderSortKey.LAST_MODIFIED,
  renderHeaderCell: () => jsx(TextWithTruncation, {
    truncate: !0,
    children: renderI18nText('file_browser.folder_list_view.header_updated_column')
  }),
  renderRowCell: e => jsx(BV, {
    children: jsx(RelativeTimeDisplay, {
      date: e.folderLastUpdated ?? e.updated_at
    })
  })
};
let Z = {
  renderHeaderCell: () => jsx(TextWithTruncation, {
    truncate: !0,
    children: renderI18nText('file_browser.folder_list_view.header_updated_column')
  }),
  renderRowCell: e => jsx(BV, {
    children: jsx(RelativeTimeDisplay, {
      date: e.files_last_touched_at ?? e.updated_at
    })
  })
};
let X = {
  field: FolderSortKey.CREATED_AT,
  renderHeaderCell: () => jsx(TextWithTruncation, {
    truncate: !0,
    children: renderI18nText('file_browser.folder_list_view.header_created_column')
  }),
  renderRowCell: e => jsx(BV, {
    children: jsx(RelativeTimeDisplay, {
      date: e.created_at
    })
  })
};
let Q = {
  field: FolderSortKey.SHARED_AT,
  renderHeaderCell: () => jsx(TextWithTruncation, {
    truncate: !0,
    children: renderI18nText('file_browser.folder_list_view.header_shared_at_column')
  }),
  renderRowCell: e => jsx(BV, {
    children: jsx(V, {
      folder: e
    })
  })
};
let J = {
  renderHeaderCell: () => jsx(TextWithTruncation, {
    truncate: !0,
    children: renderI18nText('file_browser.folder_list_view.header_shared_by_column')
  }),
  renderRowCell: e => jsx(BV, {
    children: jsx(H, {
      folder: e
    })
  })
};
let ee = {
  renderHeaderCell: () => jsx(TextWithTruncation, {
    truncate: !0,
    children: renderI18nText('file_browser.folder_list_view.header_trashed_at_column')
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
    case 'recentsAndSharing':
      return ei({
        dataOnboardingKeyIndex: i,
        dataOnboardingKey: t
      });
    case 'search':
      return {
        gutterColumn: void 0,
        columns: [Y(void 0, void 0, n), q, Z, X]
      };
    case 'trashedFolders':
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
  let s = useDispatch<AppDispatch>();
  let x = useSelector(k);
  let S = getSelectedView();
  let w = getAtomMutate(trashFolderMutation);
  let C = MD(t);
  let T = useSelector(e => e.teams);
  let {
    columns,
    gutterColumn
  } = er(S, e.dataOnboardingKey, e.dataOnboardingKeyIndex, e.checksForViewOnlyLabels);
  let P = _$$E();
  let O = useCallback((e, t) => {
    trackEventAnalytics('Folder Permanently Delete Click', {
      folderId: e.id,
      teamId: e.team_id,
      orgId: t
    });
    C.projects.status === 'loaded' && C.projects.data[e.id].canPermanentlyDelete && s(showModalHandler({
      type: _$$U(),
      data: {
        folder: e,
        folderOrgId: t
      }
    }));
  }, [s, C]);
  let D = useCallback((e, t) => {
    trackEventAnalytics('Folder Trash Click', {
      folderId: e.id,
      teamId: e.team_id,
      orgId: t
    });
    e.folderPerms?.canSkipDeletionConfirmation ? w({
      folderId: e.id
    }).catch(() => {
      s(FlashActions.error(getI18nString('file_browser.api_folder.error_when_moving_to_trash')));
    }) : C.projects.status === 'loaded' && C.projects.data[e.id].canTrash && s(showModalHandler({
      type: _$$V(),
      data: {
        folder: e
      }
    }));
  }, [s, C, w]);
  let L = useCallback(e => {
    if (e.length !== 1) return;
    let t = e[0];
    let i = t.team_id;
    let n = t && i ? T[i] : void 0;
    let r = n ? n.org_id : t.org_id;
    void 0 === r && (r = null);
    S.view === 'trashedFolders' ? O(t, r) : D(t, r);
  }, [D, O, S.view, T]);
  return jsx(_$$A, {
    getAriaLabel: e => e.name,
    gridViewProps: {
      containerStyle: es.gridPadding,
      tileBorderRadius: 16,
      nestedFocus: !0,
      trailingGridElements: e.trailingGridElements,
      renderTile: (t, i) => {
        let r = e.dataOnboardingKeyIndex && e.folderList[e.dataOnboardingKeyIndex]?.id === t.id ? 'project-card' : '';
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
      s(showDropdownThunk({
        type: _$$B,
        data: {
          folder: {
            ...mapProjectProperties(i),
            isSubscribed: i.is_favorited
          },
          targetRect: n
        }
      }));
    },
    handleDeleteKey: L,
    handleOpenItem: (e, t) => {
      S.view !== 'trashedFolders' && (s(trackNavTreeClicked({
        clickedResourceType: 'team',
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
    paddingLeft: 'x1tudf5h',
    paddingRight: 'x1m2p0i2',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  }
};
export const m = $$ea0;
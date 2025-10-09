import { noop } from 'lodash-es';
import { Fragment as _$$Fragment, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { ModalRootComponent } from '../905/38914';
import { W as _$$W } from '../905/78565';
import { ModalSupportsBackground, registerModal } from '../905/102752';
import { selectWithShallowEqual } from '../905/103090';
import { mapLibraryAttributes } from '../905/128063';
import { H as _$$H } from '../905/216861';
import { getI18nString, renderI18nText } from '../905/303541';
import { RecordingScrollContainer } from '../905/347284';
import { useLibrary } from '../905/420347';
import { a as _$$a } from '../905/426262';
import { useModalManager } from '../905/437088';
import { IconButton } from '../905/443068';
import { C as _$$C } from '../905/520159';
import { librarySearchByFileAtomFamily, librarySearchByLibraryKeyAtomFamily, useLibrarySearchQuery } from '../905/570707';
import { getFeatureFlags } from '../905/601108';
import { createFileLibraryKeys } from '../905/651613';
import { LoadingRow } from '../905/682977';
import { kz } from '../905/691188';
import { S as _$$S } from '../905/711770';
import { liveStoreInstance } from '../905/713695';
import { SvgComponent } from '../905/714743';
import { l as _$$l } from '../905/716947';
import { I as _$$I } from '../905/717213';
import { m as _$$m } from '../905/760316';
import { u as _$$u2 } from '../905/831362';
import { useCurrentUserOrgId } from '../905/845253';
import { useFileByKey } from '../905/862913';
import { LibraryItemTilesByPage } from '../905/909811';
import { b as _$$b } from '../905/937225';
import { librariesAPI } from '../905/939602';
import { filesByLibraryKeyAtom } from '../905/977779';
import { getLibraryKeyWithReport } from '../905/997221';
import { useAtomWithSubscription } from '../figma_app/27355';
import { PXO } from '../figma_app/27776';
import { mapEditorTypeToStringWithObfuscated } from '../figma_app/53721';
import { u as _$$u } from '../figma_app/187359';
import { DialogBody, DialogContents, DialogHeader, DialogTitle } from '../figma_app/272243';
import { useOpenFileLibraryKey } from '../figma_app/516028';
import { setupResourceAtomHandler } from '../figma_app/566371';
import { getDraftsSidebarString, isPublishedLibraryWithAssets, NO_TEAM } from '../figma_app/633080';
import { sortLibraries, useIsAssetPublishedForCurrentFile } from '../figma_app/646357';
import { aU } from '../figma_app/757606';
import { parsePxInt } from '../figma_app/783094';
import { TrackingProvider } from '../figma_app/831799';
import { generateRecordingKey } from '../figma_app/878298';
import { useLibraryInfo } from '../figma_app/933328';
import { A as _$$A } from '../svg/562176';
let F = 'figjam_file_row--fileThumbnail--9IG5C';
function j({
  file: e,
  publishedLibrary: t,
  numComponents: i,
  numStateGroups: r,
  numStyles: a,
  noHover: s,
  thumbnailUrl: o,
  isDefaultLibraryFile: l,
  canEditSubscriptions: d,
  viewFile: c,
  isSearching: u,
  recordingKey: p
}) {
  let m = createFileLibraryKeys(e.key, t?.library_key ?? null);
  let h = t?.library_name ?? '';
  let g = _$$b(i, r, a, 0);
  let f = _$$S({
    disabled: g,
    libraryIdentifier: m,
    fileName: h,
    viewFile: c
  });
  return jsxs(_$$m, {
    libraryKey: m?.libraryKey,
    disabled: g || s || !1,
    className: 'figjam_file_row--figJamFileRow--FXwm0 figjam_file_row--_figJamFileRow--NVBXe file_row_styles--fileRowHover--WZeMw',
    disabledClassName: 'figjam_file_row--figJamFileRowNoHover--mts7E figjam_file_row--_figJamFileRow--NVBXe',
    hideCaret: !0,
    onClick: f,
    recordingKey: p,
    ariaLabel: h,
    children: [o ? jsx('img', {
      src: o ?? '',
      className: F,
      alt: ''
    }) : jsx(SvgComponent, {
      className: F,
      svg: _$$A
    }), jsxs('div', {
      className: 'figjam_file_row--nameAndStats--bJ22f',
      children: [jsx(_$$u2, {
        name: h,
        noMargin: !0
      }), jsx('div', {
        className: 'figjam_file_row--figjamFileItemCount--GgBHq',
        children: u ? jsx(_$$I, {
          numComponents: i,
          numStateGroups: r,
          numStyles: a,
          numVariables: 0,
          numVariableCollections: 0
        }) : jsx(_$$a, {
          numComponents: i,
          numStateGroups: r
        })
      })]
    }), !l && m && jsx(kz, {
      libraryKey: m.libraryKey,
      showingDefaultSubscriptionsForUser: !1,
      showingDefaultSubscriptionsForTeamId: null,
      disabled: !d,
      recordingKey: generateRecordingKey(p, 'fileRowSubscriptionToggle')
    })]
  });
}
function z() {
  let e = useCurrentUserOrgId();
  return useLibraryInfo({
    currentOrgId: e
  });
}
function H() {
  let e = useSelector(e => e.selectedView);
  let t = useMemo(() => {
    if (e.view === 'fullscreen') return mapEditorTypeToStringWithObfuscated(e.editorType);
  }, [e]);
  let [i] = setupResourceAtomHandler(W(t ?? ''), {
    enabled: !!t
  });
  return useMemo(() => i.data?.library_thumbnail_by_library_key ?? {}, [i]);
}
let W = liveStoreInstance.Query({
  fetch: async e => (await librariesAPI.getDefaultLibraries({
    editorType: e
  })).data.meta,
  key: 'figjamDefaultLibraries'
});
function K(e) {
  let t = useDispatch<AppDispatch>();
  let i = _$$l(e.publishedLibrary?.library_key ?? '');
  let {
    dropdownShown,
    selectedView,
    defaultPublished
  } = selectWithShallowEqual(e => ({
    dropdownShown: e.dropdownShown,
    selectedView: e.selectedView,
    defaultPublished: e.library.defaultPublished
  }));
  let c = useOpenFileLibraryKey();
  let [p] = setupResourceAtomHandler(_$$u(i), {
    enabled: !!i
  });
  let h = useMemo(() => p.data ? p.data.components ?? [] : [], [p.data]);
  let g = useMemo(() => p.data ? p.data.state_groups ?? [] : [], [p.data]);
  let f = useMemo(() => [...g, ...h.filter(e => e.containing_frame?.containingStateGroup == null)], [h, g]);
  let w = useMemo(() => !!i && defaultPublished.libraryKeys.includes(i), [defaultPublished.libraryKeys, i]);
  let C = c === e.publishedLibrary?.library_key;
  let [T] = z();
  let k = H();
  let R = useMemo(() => {
    if (!i) return null;
    if (w) return k[i];
    let e = T.data?.libraryThumbnailByLibraryKey;
    return e?.[i];
  }, [T.data?.libraryThumbnailByLibraryKey, i, k, w]);
  return jsx(TrackingProvider, {
    name: 'FigjamSubscriptionFileView',
    properties: {
      libraryKey: i
    },
    children: jsx(RecordingScrollContainer, {
      height: 528,
      className: 'figjam_subscription_file_view--fileView--4d2Xo',
      children: jsxs('div', {
        children: [!C && jsxs('div', {
          className: 'figjam_subscription_file_view--header--cDFWN',
          children: [jsx(IconButton, {
            'onClick': e.backToList,
            'aria-label': getI18nString('general.back'),
            'children': jsx(_$$C, {})
          }), jsx(j, {
            canEditSubscriptions: !0,
            file: e.libraryFile,
            isDefaultLibraryFile: w,
            isSearching: !1,
            noHover: !0,
            numComponents: f.length,
            numStateGroups: 0,
            numStyles: 0,
            publishedLibrary: e.publishedLibrary,
            thumbnailUrl: R,
            viewFile: noop
          }, i)]
        }), jsx(LibraryItemTilesByPage, {
          width: e.width,
          items: f,
          sourceForTracking: 'Library Modal',
          selectedView,
          dispatch: t,
          dropdownShown
        })]
      })
    })
  });
}
let ea = 'figjam_subscriptions_list_view--teamSectionHeaderSticky--6-qao figjam_subscriptions_list_view--sectionHeader--0sArV';
function es(e) {
  let t = useFileByKey();
  let i = useAtomWithSubscription(filesByLibraryKeyAtom);
  let s = useSelector(e => e.openFile);
  let o = useSelector(e => e.folders);
  let l = useSelector(e => e.library);
  let d = useSelector(e => e.teams);
  let {
    searchQuery,
    debouncedSearchQuery,
    setSearchQuery
  } = useLibrarySearchQuery();
  let [h] = setupResourceAtomHandler(librarySearchByFileAtomFamily(debouncedSearchQuery));
  let [f] = setupResourceAtomHandler(librarySearchByLibraryKeyAtomFamily(debouncedSearchQuery));
  let [_] = z();
  let A = H();
  let b = useMemo(() => {
    let e = _.data;
    return e ? sortLibraries(e.files, null, {
      isDescending: !0
    }) : [];
  }, [_.data]);
  let I = _.data?.libraryThumbnailByLibraryKey ?? {};
  let E = getFeatureFlags().dse_lk_figjam_library_search ? f.status === 'loaded' ? function (e, t, i, n) {
    let r = [];
    let a = {};
    let s = e.components;
    let o = e.styles;
    let l = e.stateGroups;
    for (let t of [e.components.filteredByTeamId, e.styles.filteredByTeamId, e.stateGroups.filteredByTeamId]) {
      for (let e in t) {
        for (let i in t[e]) a[_$$l(i)] = e;
      }
    }
    for (let e in a) {
      let d = _$$l(e);
      let c = t && t[d];
      if (!c) continue;
      let u = a[d];
      let p = i && u ? i[u] : void 0;
      let m = n && c.folder_id && n[c.folder_id];
      r.push({
        library_file_key: c.key,
        library_file_name: c.name,
        library_key: getLibraryKeyWithReport(c) ?? _$$l(''),
        team_name: p?.name,
        team_id: u,
        workspace_id: p?.workspace_id,
        folder_name: m && m.name || '',
        folder_id: c.folder_id || '',
        thumbnail_url: '',
        num_components: s.numAssetsByLibraryKey[d] || 0,
        num_state_groups: l.numAssetsByLibraryKey[d] || 0,
        num_styles: o.numAssetsByLibraryKey[d] || 0,
        num_variables: 0,
        num_variable_collections: 0,
        num_module_assets: 0,
        num_library_assets: 0,
        num_weekly_insertions: 0,
        max_search_score: Math.max(s.maxScorePerLibrary[d] || -1 / 0, o.maxScorePerLibrary[d] || -1 / 0),
        file: c
      });
    }
    return r;
  }(f.data, i, d, o) : b : h.status === 'loaded' ? function (e, t, i, n) {
    let r = [];
    let a = {};
    let s = e.components;
    let o = e.styles;
    let l = e.stateGroups;
    for (let t of [e.components.filteredByTeamId, e.styles.filteredByTeamId, e.stateGroups.filteredByTeamId]) {
      for (let e in t) {
        for (let i in t[e]) a[i] = e;
      }
    }
    for (let e in a) {
      let d = t && t[e];
      if (!d) continue;
      let c = a[e];
      let u = i && c ? i[c] : void 0;
      let p = n && d.folder_id && n[d.folder_id];
      r.push({
        library_file_key: e,
        library_file_name: d.name,
        library_key: getLibraryKeyWithReport(d) ?? _$$l(''),
        team_name: u?.name,
        team_id: c,
        workspace_id: u?.workspace_id,
        folder_name: p && p.name || '',
        folder_id: d.folder_id || '',
        thumbnail_url: '',
        num_components: s.numAssetsByFileKey[e] || 0,
        num_state_groups: l.numAssetsByFileKey[e] || 0,
        num_styles: o.numAssetsByFileKey[e] || 0,
        num_variables: 0,
        num_variable_collections: 0,
        num_module_assets: 0,
        num_library_assets: 0,
        num_weekly_insertions: 0,
        max_search_score: Math.max(s.maxScorePerFile[e] || -1 / 0, o.maxScorePerFile[e] || -1 / 0),
        file: d
      });
    }
    return r;
  }(h.data, t, d, o) : b;
  let x = useIsAssetPublishedForCurrentFile();
  let S = E.filter(e => s && x(e.library_key) && !l.defaultPublished.libraryKeys.includes(e.library_key));
  let w = s && S.length > 0 && !searchQuery;
  let C = NO_TEAM;
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: 'figjam_subscriptions_list_view--searchContainer--xaC0P',
      children: jsx(aU, {
        autofocus: !0,
        entryPointForTracking: 'figjam:library_subscriptions',
        extraSpacing: !0,
        isFigjam: !0,
        isVisible: !0,
        onChange: setSearchQuery,
        placeholder: getI18nString('whiteboard.library_subscriptions.search_for_libraries'),
        query: searchQuery,
        recordingKey: 'subscriptionListViewLibrarySearch',
        selectOnFocus: !0
      })
    }), jsxs(RecordingScrollContainer, {
      className: 'figjam_subscriptions_list_view--whiteboardingFileListView--E3NJk',
      height: 480,
      children: [jsx(_$$W, {
        dismissable: !1,
        buttonText: getI18nString('whiteboard.inserts.libraries_update_all'),
        formatBannerText: e => getI18nString('whiteboard.inserts.libraries_update_to_your_components', {
          numUpdates: e
        })
      }), _.status === 'loading' && jsx(LoadingRow, {}), _.status !== 'loading' && jsxs(Fragment, {
        children: [searchQuery && E.length === 0 && jsx('div', {
          className: 'figjam_subscriptions_list_view--noSearchResults--0YZBG ellipsis--ellipsis--Tjyfa',
          children: renderI18nText('whiteboard.library_subscriptions.no_results_for', {
            query: searchQuery
          })
        }), w && jsxs(Fragment, {
          children: [jsx('div', {
            className: ea,
            children: renderI18nText('whiteboard.library_subscriptions.in_this_file')
          }), S.map(i => {
            let r = t[i.library_file_key];
            return r ? jsx(j, {
              canEditSubscriptions: !0,
              file: r,
              isDefaultLibraryFile: !1,
              isSearching: !!searchQuery,
              numComponents: i.num_components,
              numStateGroups: i.num_state_groups,
              numStyles: i.num_styles,
              publishedLibrary: mapLibraryAttributes(i),
              thumbnailUrl: I[i.library_key],
              viewFile: e.viewFile
            }, r.key) : null;
          })]
        }), E.map(i => {
          let a = t && t[i.library_file_key];
          if (!a || s && i.library_file_key === s.key || i.num_components + i.num_state_groups <= 0 || l.defaultPublished.libraryKeys.includes(i.library_key)) return;
          let o = C !== i.team_id;
          C = i.team_id ?? NO_TEAM;
          let d = i.team_name || getDraftsSidebarString();
          return jsxs(_$$Fragment, {
            children: [o && jsx('div', {
              className: ea,
              children: d
            }), jsx(j, {
              canEditSubscriptions: !0,
              file: a,
              isDefaultLibraryFile: !1,
              isSearching: !!searchQuery,
              numComponents: i.num_components,
              numStateGroups: i.num_state_groups,
              numStyles: i.num_styles,
              publishedLibrary: mapLibraryAttributes(i),
              thumbnailUrl: I[i.library_key] ?? '',
              viewFile: e.viewFile
            })]
          }, a.key);
        }), l.defaultPublished.libraryKeys.length > 0 && !searchQuery && jsxs(Fragment, {
          children: [jsx('div', {
            className: ea,
            children: renderI18nText('whiteboard.library_subscriptions.default_files')
          }), l.defaultPublished.libraryKeys.map(t => {
            let r = i[t];
            if (!r) return null;
            let a = t && l.defaultPublished.componentsByLibraryKey[t];
            let s = a ? Object.keys(a).length : 0;
            return jsx(j, {
              canEditSubscriptions: !0,
              file: r,
              isDefaultLibraryFile: !0,
              isSearching: !!searchQuery,
              numComponents: s,
              numStateGroups: 0,
              numStyles: 0,
              publishedLibrary: {
                library_key: t,
                library_name: r.name
              },
              thumbnailUrl: t ? A[t] : r.thumbnail_url,
              viewFile: e.viewFile
            }, r.key);
          })]
        })]
      })]
    })]
  });
}
let el = 'figjam_library_modal--slidingPane--Ex7gt sliding_pane--slidingPane--6OmDU';
let ed = 'figjam_library_modal--slidingPaneLeft--uAaog sliding_pane--slidingPaneLeft--Wrfdy sliding_pane--slidingPane--6OmDU';
// Original modal name constant ($$ec1)
export const FIGJAM_LIBRARY_MODAL = 'FIGJAM_LIBRARY_MODAL';

/**
 * FigjamLibraryModal component - renders the library modal with sliding panes.
 * Original function: $$eu0 (anonymous modal registration function)
 * @param props - Modal props passed by the modal manager.
 * @returns JSX element for the modal.
 */
function FigjamLibraryModal(props: any) {
  const library = useSelector((state: any) => state.library);
  const closeHandler = _$$H();
  const modalManager = useModalManager({
    ...props,
    onClose: closeHandler
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const fileData = liveStoreInstance.useFile(selectedFile?.fileKey ?? null).data;
  const libraryData = useLibrary(selectedFile?.libraryKey ?? null).data;
  const modalWidth = parsePxInt(PXO);
  return jsx(ModalRootComponent, {
    manager: modalManager,
    width: modalWidth,
    height: 'dynamic',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText('design_systems.libraries_modal.manage_libraries')
        })
      }), jsx(DialogBody, {
        padding: 0,
        children: jsxs('div', {
          className: 'figjam_library_modal--slidingPaneContainer--ZuLV1 sliding_pane--slidingPaneContainer--RQkXf',
          children: [jsx('div', {
            className: selectedFile?.libraryKey ? ed : el,
            children: jsx(es, {
              library,
              viewFile: setSelectedFile,
              onUpdateClick: noop
            })
          }), selectedFile && fileData && jsx('div', {
            className: selectedFile.libraryKey ? el : ed,
            children: jsx(K, {
              width: modalWidth,
              library,
              libraryFile: fileData,
              publishedLibrary: isPublishedLibraryWithAssets(libraryData) ? libraryData : null,
              backToList: () => setSelectedFile(null)
            })
          })]
        })
      })]
    })
  });
}

// Register the modal with the named component
export const registeredModal = registerModal(FigjamLibraryModal, FIGJAM_LIBRARY_MODAL, ModalSupportsBackground.YES);

// Export the registered modal (original: Vg = $$eu0)
export const Vg = registeredModal;

// Export the modal name (original: _N = $$ec1)
export const _N = FIGJAM_LIBRARY_MODAL;

import P from 'classnames';
import { useCallback, useId, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { d as _$$d } from '../905/49800';
import { selectWithShallowEqual } from '../905/103090';
import { KindEnum } from '../905/129884';
import { hideModal } from '../905/156213';
import { Label } from '../905/270045';
import { getI18nString, renderI18nText } from '../905/303541';
import { P as _$$P } from '../905/347284';
import { GK, lh, LM, nX, TK } from '../905/424623';
import { Link } from '../905/438674';
import { IconButton } from '../905/443068';
import { J as _$$J2 } from '../905/445197';
import { trackEventAnalytics } from '../905/449184';
import { T as _$$T } from '../905/486858';
import { getLibraryName } from '../905/506188';
import { DefaultLibraryIcon } from '../905/511388';
import { C as _$$C } from '../905/520159';
import { Button } from '../905/521428';
import { C2, Kw, Tb, VJ } from '../905/610995';
import { PluginAction, setupPlaybackHandler } from '../905/656545';
import { SvgComponent } from '../905/714743';
import { l as _$$l } from '../905/716947';
import { isLibraryModalContextAvailable } from '../905/753512';
import { getSelectedFile } from '../905/766303';
import { useSingleEffect } from '../905/791079';
import { O as _$$O } from '../905/791978';
import { uQ } from '../905/794875';
import { handleLoadAllPagesWithVersionCheck } from '../905/807667';
import { zi } from '../905/824449';
import { usePublishedLibraries } from '../905/825399';
import { j as _$$j } from '../905/834956';
import { HiddenLabelPrimitive } from '../905/865071';
import { ManuallyLabeledCheckbox } from '../905/909715';
import { hideDropdownAction, showDropdownThunk } from '../905/929976';
import { A as _$$A } from '../3850/669090';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { LibraryFileSelect } from '../figma_app/43951';
import { directlySubscribedStylesNodeIdsFromLoadedPagesSelector, hasIndirectlySubscribedStylesFromLoadedPagesSelector } from '../figma_app/141508';
import { useSubscribedLibraries } from '../figma_app/155728';
import { hasResourcePresetKey } from '../figma_app/255679';
import { useMultiSubscription } from '../figma_app/288654';
import { handleFileLibrarySubscription } from '../figma_app/430563';
import { selectCurrentFile } from '../figma_app/516028';
import { hasRootPath } from '../figma_app/528509';
import { lX } from '../figma_app/588397';
import { NO_TEAM, PrimaryWorkflowEnum } from '../figma_app/633080';
import { sortLibrariesByFolder, useIsAssetPublishedForCurrentFile } from '../figma_app/646357';
import { useFigmaLibrariesEnabled } from '../figma_app/657017';
import { NG } from '../figma_app/709893';
import { Fullscreen, PluginModalType } from '../figma_app/763686';
import { ImageBackedLoading } from '../figma_app/858013';
import { useHandleMouseEvent } from '../figma_app/878298';
import D from '../vendor/239910';
let O = P;
let L = D;
let es = 'replace_libraries_modal--fileMapRowArrow--23Tyo';
let eo = 'replace_libraries_modal--fileMapRowItem--XUWtR';
function ed({
  item: e
}) {
  return e.type === PrimaryWorkflowEnum.STYLE ? jsx('div', {
    style: {
      marginRight: 12
    },
    children: jsx(zi, {
      dsStyle: e,
      disableTooltip: !0
    })
  }) : jsx('div', {
    style: {
      height: '24px'
    },
    className: 'replace_libraries_modal--libraryItemTileWrapper--4h7Nk',
    children: jsx(lX, {
      item: e,
      height: 24,
      width: 24
    })
  });
}
function ec({
  fromLibraryKey: e,
  property: t,
  onChange: i,
  id: s,
  isDisabled: o
}) {
  let l = useDispatch();
  let d = useSelector(e => e.dropdownShown);
  let c = selectCurrentFile();
  let u = usePublishedLibraries({
    includeLocalLibrary: !0
  });
  let p = useMemo(() => u.result?.filter(t => t.library_key !== e), [u, e]);
  let m = useSubscribedLibraries();
  let h = useMemo(() => m.data?.filter(t => t.libraryType === 'community' && t.libraryKey !== e) ?? [], [m, e]);
  let _ = c?.teamId || NO_TEAM;
  let A = useMemo(() => {
    let e = new Set();
    p.forEach(t => {
      e.add(t.folder_id);
    });
    return Array.from(e).map(e => ({
      projectId: e
    }));
  }, [p]);
  let y = useMultiSubscription(LibraryFileSelect, A);
  let b = useMemo(() => {
    let e = {};
    y.forEach(t => {
      t.result.status === 'loaded' && (e[t.args.projectId] = t.result.data.project);
    });
    return e;
  }, [y]);
  let v = useFigmaLibrariesEnabled();
  let I = hasResourcePresetKey(e);
  let x = useMemo(() => L()(u.result, e => e.library_key), [u.result]);
  let S = useMemo(() => L()(h, e => e.libraryKey), [h]);
  let C = useMemo(() => {
    let t = x[e];
    return function (e, t, i, r, a, s) {
      let o;
      let l = sortLibrariesByFolder(e, i, r, {
        isDescending: !0,
        groupByFolders: !0
      });
      let d = [];
      let c = {};
      let u = {
        displayText: '',
        disabled: !0,
        separator: !0
      };
      for (let e of l) {
        let t = {
          displayText: e.library_name,
          args: e.library_key,
          recordingKey: e.library_name
        };
        let i = e.folder_id;
        let n = r[e.folder_id];
        if (hasRootPath(n)) continue;
        if (a !== null && i === a) {
          d.push(t);
          continue;
        }
        if (!e.team_id || !e.team_name) continue;
        let s = e.team_name;
        c[s] || (c[s] = {
          displayText: s,
          children: []
        });
        let l = c[s].children;
        let p = e.folder_id;
        p !== o && (l.length && l.push(u), l.push({
          displayText: n?.path || getI18nString('design_systems.libraries_modal.hidden_project'),
          disabled: !0
        }), o = p);
        l.push(t);
      }
      let p = getI18nString('design_systems.libraries_modal.ui_kits');
      for (let e of t) {
        let t = {
          displayText: e.name,
          args: e.libraryKey,
          recordingKey: e.name,
          rightIcon: jsx('div', {
            className: cssBuilderInstance.flex.alignCenter.justifyCenter.flexShrink0.$,
            children: jsx(DefaultLibraryIcon, {})
          })
        };
        if (s) {
          d.push(t);
          continue;
        }
        c[p] || (c[p] = {
          displayText: p,
          children: []
        });
        let i = c[p].children;
        i?.push(t);
      }
      let m = [];
      if (d.length) {
        let e = s ? p : a && r[a]?.path || null;
        e && m.push({
          displayText: e,
          disabled: !0,
          recordingKey: e
        });
        m.push(...d);
      }
      let h = Object.values(c);
      h.length && (m.length && m.push(u), m.push(...h));
      return m;
    }(p, v ? h : [], _, b, t?.folder_id || null, I);
  }, [p, _, b, e, h, v, I, x]);
  let T = useMemo(() => ({
    format: e => {
      if (e == null) return getI18nString('design_systems.libraries_modal.choose_library');
      let t = x[e[1]];
      let i = S[e[1]];
      return t?.library_name ?? i?.name ?? '';
    },
    isEqual: (e, t) => e[0] === t[0] && e[1] === t[1]
  }), [x, S]);
  let k = useCallback(t => {
    i([e, t.args]);
  }, [i, e]);
  let [R, N] = useState({});
  let P = d && d.type === s;
  let O = useHandleMouseEvent('replace_libraries_modal.toggleDropdown', 'mousedown', e => {
    N(e.currentTarget.getBoundingClientRect());
    P ? l(hideDropdownAction()) : l(showDropdownThunk({
      type: s
    }));
  }, {
    recordMetadata: e => ({
      bounds: e.currentTarget.getBoundingClientRect()
    }),
    playbackMetadata: e => ({
      currentTarget: {
        getBoundingClientRect: () => e.bounds
      }
    })
  });
  let D = isLibraryModalContextAvailable();
  return jsxs(Fragment, {
    children: [jsx(uQ, {
      property: t,
      isDisabled: o,
      formatter: T,
      onClick: O,
      inputClassName: 'replace_libraries_modal--toLibraryFileSelectInput--JpSSi'
    }), P ? jsx(_$$j, {
      dispatch: l,
      items: C,
      showPoint: !1,
      parentRect: R,
      onSelectItem: k,
      recordingKey: 'libraryPicker',
      showLoadingSpinner: u.status === 'loading',
      shouldUsePortal: D
    }) : void 0]
  });
}
function eu({
  fromLibraryKey: e,
  toLibraryKey: t,
  onBackClick: i,
  createOverridesOnSwap: a
}) {
  let s = getLibraryName(e).data;
  let o = LM({
    fromLibraryKey: e,
    toLibraryKey: t
  });
  let l = useMemo(() => o.styles.size === 0 && o.components.size === 0, [o]);
  let d = C2(e);
  let c = useCallback(e => {
    let [t, i] = e;
    d(i);
  }, [d]);
  let u = jsxs('div', {
    className: 'replace_libraries_modal--emptyState--FvQQ7',
    children: [jsx('div', {
      className: 'replace_libraries_modal--emptyStateText--rbgUb',
      children: renderI18nText('design_systems.libraries_modal.no_items_to_swap')
    }), jsx('div', {
      className: 'replace_libraries_modal--emptyStateSubtext--aHZJ-',
      children: renderI18nText('design_systems.libraries_modal.no_items_to_swap_subtext')
    })]
  });
  return jsxs('div', {
    className: 'replace_libraries_modal--fileMapContainer--xejff',
    children: [jsxs('div', {
      className: 'replace_libraries_modal--fileMapHeaderRow--LYff7 replace_libraries_modal--_fileMapRowBase--agNce',
      children: [jsx('div', {
        children: jsx(IconButton, {
          'onClick': i,
          'aria-label': getI18nString('design_systems.libraries_modal.back_to_library'),
          'children': jsx(_$$C, {})
        })
      }), jsx('div', {
        className: 'replace_libraries_modal--fileMapHeaderLeftCol--4y1Vr',
        children: jsx('div', {
          className: 'replace_libraries_modal--fileMapHeaderName--9U1lx ellipsis--ellipsis--Tjyfa',
          children: s ?? jsxs(Fragment, {
            children: [jsx(SvgComponent, {
              className: 'replace_libraries_modal--missingLibrariesIcon--1oNrW',
              svg: _$$A
            }), renderI18nText('design_systems.libraries_modal.plural.missing_library', {
              missingLibCount: 1
            })]
          })
        })
      }), jsx('div', {
        className: es,
        children: jsx(_$$O, {})
      }), jsx('div', {
        className: 'replace_libraries_modal--fileMapHeaderRowSelect--MlJWl',
        children: jsx(ec, {
          fromLibraryKey: e,
          property: t ? [e, t] : null,
          onChange: c,
          id: 'REPLACE_LIBRARIES_FILE_MAP_SELECT',
          isDisabled: l
        })
      })]
    }), jsx('div', {
      className: 'replace_libraries_modal--fileMapContents--UfXz9',
      children: jsxs(_$$P, {
        className: 'replace_libraries_modal--scrollContainer--8DxhM',
        innerClassName: 'replace_libraries_modal--scrollContainerInner--hkoqL',
        children: [l && u, o.styles.size > 0 && jsx(em, {
          fromLibraryKey: e,
          toLibraryKey: t,
          libraryItemsType: PrimaryWorkflowEnum.STYLE,
          libraryItemsMap: o.styles,
          createOverridesOnSwap: a
        }), o.components.size > 0 && jsx(em, {
          fromLibraryKey: e,
          toLibraryKey: t,
          libraryItemsType: PrimaryWorkflowEnum.COMPONENT,
          libraryItemsMap: o.components,
          createOverridesOnSwap: !1
        })]
      })
    })]
  });
}
function ep({
  checked: e,
  disabled: t,
  onToggleRow: i,
  id: r
}) {
  return jsx('div', {
    className: cssBuilderInstance.flex.justifyEnd.$,
    children: jsx(ManuallyLabeledCheckbox, {
      checked: e,
      disabled: t,
      onChange: i,
      id: r
    })
  });
}
function em({
  fromLibraryKey: e,
  toLibraryKey: t,
  libraryItemsType: i,
  libraryItemsMap: r,
  createOverridesOnSwap: a
}) {
  let {
    sceneGraph,
    directlyUsedItemIDs
  } = selectWithShallowEqual(e => ({
    sceneGraph: e.mirror.sceneGraph,
    directlyUsedItemIDs: directlySubscribedStylesNodeIdsFromLoadedPagesSelector(e)
  }));
  let l = new Set();
  if (i === PrimaryWorkflowEnum.STYLE && !a) {
    for (let e of directlyUsedItemIDs) {
      let t = sceneGraph.get(e);
      t && t.styleKeyForPublish && l.add(t.styleKeyForPublish);
    }
    let e = new Map();
    for (let [t, i] of r.entries()) t.type === PrimaryWorkflowEnum.STYLE && (!i || i.type === PrimaryWorkflowEnum.STYLE) && l.has(t.key) && e.set(t, i);
    r = e;
  }
  let d = i === PrimaryWorkflowEnum.COMPONENT ? renderI18nText('design_systems.libraries_modal.used_component') : i === PrimaryWorkflowEnum.STYLE ? renderI18nText('design_systems.libraries_modal.used_style') : null;
  let c = i === PrimaryWorkflowEnum.COMPONENT ? renderI18nText('design_systems.libraries_modal.new_component') : i === PrimaryWorkflowEnum.STYLE ? renderI18nText('design_systems.libraries_modal.new_style') : null;
  return jsxs(Fragment, {
    children: [jsxs('div', {
      className: 'replace_libraries_modal--fileMapSubheaderRow--RBuNz replace_libraries_modal--_fileMapRowBase--agNce',
      children: [jsx('div', {}), jsx('div', {
        children: d
      }), jsx('div', {}), ' ', jsx('div', {
        children: c
      })]
    }), Array.from(r, ([i, a], s) => jsx(eh, {
      fromItem: i,
      toItem: a,
      fromLibraryKey: e,
      toLibraryKey: t,
      isLastItem: s === r.size - 1
    }, s))]
  });
}
function eh({
  fromItem: e,
  toItem: t,
  fromLibraryKey: i,
  toLibraryKey: a,
  isLastItem: s
}) {
  let o = useId();
  let l = !VJ(i).has(e.node_id);
  let d = Tb(i);
  let c = useCallback(() => {
    t && d(e.node_id);
  }, [e.node_id, t, d]);
  return jsxs('div', {
    className: O()('replace_libraries_modal--fileMapRowWithBorder--ATB65 replace_libraries_modal--fileMapRow--Q9j-c replace_libraries_modal--_fileMapRowBase--agNce', {
      [cssBuilderInstance.mb8.$]: s
    }),
    children: [jsx(HiddenLabelPrimitive, {
      htmlFor: o,
      children: getI18nString('design_systems.libraries_modal.swap_asset')
    }), jsx(ep, {
      checked: l && !!t,
      disabled: !t,
      id: o,
      onToggleRow: c
    }), jsxs('div', {
      'className': eo,
      'data-testid': 'replace-libraries-from-item',
      'children': [jsx(ed, {
        item: e
      }), jsx(eg, {
        name: e.name
      })]
    }), jsx('div', {
      className: es,
      children: jsx(_$$O, {})
    }), jsx('div', {
      'className': eo,
      'data-testid': 'replace-libraries-to-item',
      'children': t ? jsxs(Fragment, {
        children: [jsx(ed, {
          item: t
        }), jsx(eg, {
          name: t.name
        })]
      }) : a ? jsx('div', {
        className: 'replace_libraries_modal--fileMapNoneFound--3r7h0',
        children: renderI18nText('design_systems.libraries_modal.none_found')
      }) : null
    })]
  }, e.node_id);
}
function eg({
  name: e
}) {
  let t = useRef(null);
  let i = NG({
    text: e,
    textRef: t
  });
  return jsx('div', {
    'className': 'replace_libraries_modal--fileMapRowItemName--41aCr',
    'ref': t,
    'data-tooltip-type': i && KindEnum.TEXT,
    'data-tooltip': e,
    'data-tooltip-max-width': 340,
    'data-tooltip-show-immediately': !0,
    'children': e
  });
}
export function $$ef0({
  selectedLibraryKey: e,
  onBackClick: t
}) {
  let i = useDispatch();
  let [d, C] = useState(!0);
  useSingleEffect(() => {
    _$$J2(() => {
      handleLoadAllPagesWithVersionCheck(PluginModalType.REPLACE_LIBRARIES).then(() => {
        Fullscreen.expandInstancesWithStyleOverrides();
        Fullscreen.onFrame();
        C(!1);
      });
    });
  });
  let T = useSelector(e => getSelectedFile(e));
  let k = useSelector(hasIndirectlySubscribedStylesFromLoadedPagesSelector);
  let R = Kw(e);
  let N = lh();
  let P = LM({
    fromLibraryKey: e,
    toLibraryKey: R
  });
  let O = TK({
    fromLibraryKey: e,
    libraryMapping: P
  });
  let D = nX(R) && O;
  let [L, F] = useState(!0);
  let M = GK(e);
  let j = useIsAssetPublishedForCurrentFile();
  let U = _$$T();
  let B = useCallback(() => {
    e && (trackEventAnalytics('Swap library clicked', {
      editingFileKey: T?.key,
      libraryKeyToSwapFrom: e,
      libraryKeyToSwapTo: R
    }), M(N, L), i(hideModal()), T && R && j(e) && i(handleFileLibrarySubscription({
      libraryFileSubscription: {
        file_key: T.key,
        library_key: R,
        is_subscribed: !0
      },
      userInitiated: !0,
      fileSubscribedLibraryKeys: U
    })));
  }, [e, T, R, M, N, L, i, j, U]);
  let V = useCallback(() => {
    i(setupPlaybackHandler({
      assetLibraryKey: R ?? _$$l(''),
      onInsertAsset: () => Promise.resolve(B()),
      source: PluginAction.LIBRARY_SWAP
    }));
  }, [i, R, B]);
  let G = LM({
    fromLibraryKey: e,
    toLibraryKey: R ?? null
  });
  let z = useMemo(() => G.styles.size !== 0 || G.components.size !== 0, [G]);
  let H = isLibraryModalContextAvailable();
  return jsx('div', {
    'className': H ? 'subscription_file_replace_libraries_view--wrapperRedesign--qA7NT subscription_file_replace_libraries_view--wrapper--ZStG3' : 'subscription_file_replace_libraries_view--wrapper--ZStG3',
    'data-testid': `subscription_file_replace_libraries_view_${e}`,
    'children': d ? jsx(ImageBackedLoading, {
      size: 'large',
      className: 'subscription_file_replace_libraries_view--loadingSpinner--o40B1'
    }) : jsxs(Fragment, {
      children: [jsx(eu, {
        fromLibraryKey: e,
        toLibraryKey: R,
        onBackClick: t,
        createOverridesOnSwap: L
      }), z && jsxs('div', {
        className: 'subscription_file_replace_libraries_view--footer--ySYCK file_view_styles--fileViewFooter--y5O8t',
        children: [jsx('div', {
          className: cssBuilderInstance.flexGrow1.$,
          children: k && jsx(_$$d, {
            checked: L,
            onChange: F,
            label: jsx(Label, {
              children: jsx(e_, {})
            })
          })
        }), jsx('div', {
          className: cssBuilderInstance.flex.$,
          children: jsx('div', {
            className: 'subscription_file_replace_libraries_view--footerButton--KzAD-',
            children: jsxs(Button, {
              variant: 'secondary',
              recordingKey: 'subscriptionFileView.swapToSpecifiedLibrary',
              disabled: !D,
              onClick: V,
              children: [renderI18nText('design_systems.libraries_modal.swap_library'), ' ']
            })
          })
        })]
      })]
    })
  });
}
function e_() {
  return jsxs('span', {
    children: [jsx('div', {
      className: 'subscription_file_replace_libraries_view--footerText--YA1qF',
      children: renderI18nText('design_systems.libraries_modal.swap_default_styles_in_instances')
    }), jsx(Link, {
      href: 'https://help.figma.com/hc/articles/4404856784663#overrides',
      newTab: !0,
      trusted: !0,
      children: renderI18nText('design_systems.libraries_modal.learn_more')
    })]
  });
}
export const U = $$ef0;
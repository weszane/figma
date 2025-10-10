import f from 'classnames';
import { noop } from 'lodash-es';
import { createContext, createRef, forwardRef, memo, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { RadioPrimitiveRoot } from '../905/22449';
import { A as _$$A3 } from '../905/24328';
import { tX as _$$tX, AG, nZ, O1 } from '../905/28111';
import { h as _$$h } from '../905/78925';
import { o as _$$o2 } from '../905/89370';
import { rM } from '../905/95091';
import { useSprigWithSampling } from '../905/99656';
import { s2 } from '../905/107436';
import { useCounter } from '../905/108595';
import { VideoOverlayComponent } from '../905/129046';
import { KindEnum } from '../905/129884';
import { executeWithDSAAction } from '../905/135117';
import { e as SVG } from '../905/149844';
import { Tabs } from '../905/150656';
import { ServiceCategories } from '../905/165054';
import { getThemeBorderStyle } from '../905/187165';
import { FormattedInputVariant3 } from '../905/203369';
import { L as _$$L3 } from '../905/210923';
import { D as _$$D, J as _$$J } from '../905/225412';
import { Yl } from '../905/232641';
import { isSwatchSetId, CURRENT_PAGE_SWATCH_SET_ID, LOCAL_SWATCH_SET_ID } from '../905/255097';
import { n as _$$n } from '../905/264891';
import { HiddenLabel } from '../905/270045';
import { o as _$$o } from '../905/298519';
import { getI18nString, renderI18nText } from '../905/303541';
import { l as _$$l } from '../905/331642';
import { RecordingScrollContainer } from '../905/347284';
import { UpgradeAction } from '../905/370443';
import { k as _$$k3 } from '../905/376839';
import { OnboardingModal } from '../905/425180';
import { bR, Do, PC, UV } from '../905/438367';
import { A as _$$A } from '../905/442873';
import { IconButton } from '../905/443068';
import { useEventForwarder } from '../905/453826';
import { O as _$$O } from '../905/487602';
import { SelectGroupLabel, SelectOptionReset, SelectSeparator, SelectContainer, SelectRoot } from '../905/493196';
import { handleAtomEvent } from '../905/502364';
import { openWindow } from '../905/508367';
import { Button } from '../905/521428';
import { l as _$$l2 } from '../905/556594';
import { c$ } from '../905/575478';
import { k as _$$k2 } from '../905/582200';
import { W as _$$W } from '../905/592530';
import { getFeatureFlags } from '../905/601108';
import { useOverlay } from '../905/621515';
import { z as _$$z } from '../905/626016';
import { ButtonPrimitive } from '../905/632989';
import { getVisibleTheme, useThemeContext } from '../905/640017';
import { i as _$$i, U as _$$U } from '../905/649519';
import { R as _$$R } from '../905/649743';
import { useSessionStorageSync } from '../905/657224';
import { getSingletonSceneGraph } from '../905/700578';
import { interpolateGradientColor, sortByPosition, sortByPositionWithDefault, transformColorStop } from '../905/706046';
import { compareWithGeneratedKey } from '../905/709171';
import { X7 } from '../905/713167';
import { FormattedHexColor } from '../905/713722';
import { getFilteredFeatureFlags } from '../905/717445';
import { p as _$$p2 } from '../905/725707';
import { Point } from '../905/736624';
import { A as _$$A2 } from '../905/749030';
import { ErrorBoundaryCrash } from '../905/751457';
import { H as _$$H } from '../905/762413';
import { i as _$$i2 } from '../905/777871';
import { useSingleEffect } from '../905/791079';
import { c$ as _$$c$2, l6, sK } from '../905/794875';
import { Z as _$$Z } from '../905/801075';
import { convertKiwiToVariableIdString, convertVariableIdToKiwi } from '../905/805904';
import { V as _$$V } from '../905/823363';
import { KeyboardReceiver } from '../905/826900';
import { useCurrentUserOrgId } from '../905/845253';
import { useDropdownState } from '../905/848862';
import { L as _$$L } from '../905/858162';
import { ArrowPosition } from '../905/858282';
import { bL as _$$bL2, c$ as _$$c$3 } from '../905/867927';
import { isValidSessionLocalID, sessionLocalIDToString } from '../905/871411';
import { rW, T7 } from '../905/899866';
import { bL } from '../905/911410';
import { Legend } from '../905/932270';
import { b as _$$b2 } from '../905/946806';
import { calculatePickerPositionLeft } from '../905/959568';
import { colorCSSManipulatorInstance } from '../905/989956';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { VideoFillCallout } from '../figma_app/6204';
import { useIsFullscreenSlidesView } from '../figma_app/21029';
import { useAtomWithSubscription } from '../figma_app/27355';
import { teamLibraryCache } from '../figma_app/80990';
import { hidePickerThunk } from '../figma_app/91703';
import { isNullish } from '../figma_app/95419';
import { Rp } from '../figma_app/149989';
import { buildUploadUrl } from '../figma_app/169182';
import { TN } from '../figma_app/177697';
import { ExpressionInput, PercentageBaseInput } from '../figma_app/178475';
import { yesNoTrackingEnum } from '../figma_app/198712';
import { SY } from '../figma_app/200284';
import { Qh } from '../figma_app/228217';
import { Bf } from '../figma_app/249941';
import { mu, Rh, S7 } from '../figma_app/259578';
import { ModalPriority } from '../figma_app/268271';
import { DialogActionStrip, DialogBody, DialogContents, DialogHeader, DialogHiddenTitle, DialogTabStrip } from '../figma_app/272243';
import { L as _$$L2 } from '../figma_app/297778';
import { ZI } from '../figma_app/328825';
import { lx, QH } from '../figma_app/333571';
import { cS, Zo } from '../figma_app/334459';
import { p as _$$p } from '../figma_app/353099';
import { alignmentFromAnchorPosition, anchorPositionFromAlignment, checkIfAnyEffectVisible, getColorAtStop, getContrastingColor, getImageOrVideoPaint, getNoisePaint, getPatternPaint, getSolidPaint, isGradientType, isSolidType, validateGradientPaint } from '../figma_app/385874';
import { extractVariableAliasOrFontStyle } from '../figma_app/394327';
import { oz } from '../figma_app/406976';
import { ZB } from '../figma_app/451499';
import { fullscreenValue } from '../figma_app/455680';
import { x7 } from '../figma_app/492929';
import { Ep } from '../figma_app/504823';
import { useCurrentFileKey } from '../figma_app/516028';
import { userFlagExistsAtomFamily } from '../figma_app/545877';
import { getCurrentTeam } from '../figma_app/598018';
import { fI, Id, Zk } from '../figma_app/626177';
import { loadStyleCanvases } from '../figma_app/646357';
import { M as _$$M } from '../figma_app/648761';
import { useAppModelPropsShallow, useCurrentTool, useSceneGraphSelector } from '../figma_app/722362';
import { getColorFormat } from '../figma_app/740163';
import { addToSelection, clearSelection } from '../figma_app/741237';
import { stopPropagation } from '../figma_app/753501';
import { CopyPasteType, DesignGraphElements, EyedropperBindings, GradientToolApi, NodePropertyCategory, NoneColor, PropertyScope, SharedStyle, StyleVariableOperation, Thumbnail, VariableDataType, VariableResolvedDataType } from '../figma_app/763686';
import { Rk } from '../figma_app/844696';
import { getVariableById } from '../figma_app/852050';
import { generateRecordingKey, useHandleMouseEvent, useSetupPlayback } from '../figma_app/878298';
import { trackDefinedFileEventWithStore } from '../figma_app/901889';
import { useLatestRef } from '../figma_app/922077';
import { loadSharedVariableThunk } from '../figma_app/933328';
import { WC } from '../figma_app/973219';
import { EV } from '../figma_app/975811';
import { isSitesFileType } from '../figma_app/976749';
import { Te } from '../vendor/813803';
let _ = f;
let eg = 'video-fill-button';
let ef = 'video-fill-button-clicked';
let e_ = 'seen_video_fill_callout';
let eA = userFlagExistsAtomFamily(e_);
function ey({
  selectVideoFill: e
}) {
  let t = isSitesFileType();
  let i = getFeatureFlags().sts_video;
  let r = useAtomWithSubscription(eA);
  let {
    show,
    isShowing,
    complete,
    uniqueId
  } = useOverlay({
    overlay: VideoFillCallout,
    priority: ModalPriority.DEFAULT_MODAL
  }, [r]);
  useSingleEffect(() => {
    show({
      canShow: e => t && !!i && !e
    });
  });
  useEventForwarder(uniqueId, ef, () => {
    isShowing && complete();
  });
  return jsx(OnboardingModal, {
    arrowPosition: ArrowPosition.BOTTOM,
    description: renderI18nText('fullscreen.properties_panel.video_fill_callout.description'),
    isShowing,
    media: jsx(VideoOverlayComponent, {
      src: buildUploadUrl('3c264d9568a9593189da6d47438d382f94a70d95'),
      aspectRatio: 16 / 9
    }),
    onClose: complete,
    primaryCta: {
      label: renderI18nText('fullscreen.properties_panel.video_fill_callout.primary_cta'),
      type: 'button',
      onClick: () => {
        e();
        complete();
      },
      ctaTrackingDescriptor: UpgradeAction.TRY_IT_OUT,
      dataTestId: 'video-fill-callout-primary-cta'
    },
    secondaryCta: {
      label: renderI18nText('general.learn_more'),
      type: 'button',
      onClick: () => {
        openWindow('https://help.figma.com/hc/articles/33666207487767', '_blank');
        complete();
      },
      ctaTrackingDescriptor: UpgradeAction.LEARN_MORE,
      dataTestId: 'video-fill-callout-secondary-cta'
    },
    targetKey: eg,
    testId: 'video-feature-callout',
    title: renderI18nText('fullscreen.properties_panel.video_fill_callout.title'),
    trackingContextName: 'video_fill_callout',
    userFlagOnShow: e_
  });
}
let eb = 'paint_type_group_tabs--container--TtklB';
let ev = 'paint_type_group_tabs--fillTypeButton--WEJXB';
let eI = 'paint_type_group_tabs--selected--me4mY';
var eE = (e => (e.SOLID = 'SOLID', e.GRADIENT_LINEAR = 'GRADIENT_LINEAR', e.PATTERN = 'PATTERN', e.IMAGE = 'IMAGE', e.VIDEO = 'VIDEO', e))(eE || {});
let ex = {
  format: e => {
    switch (e) {
      case 'SOLID':
        return getI18nString('fullscreen.properties_panel.solid');
      case 'GRADIENT_LINEAR':
        return getI18nString('fullscreen.properties_panel.gradient');
      case 'PATTERN':
        return getI18nString('fullscreen.properties_panel.pattern');
      case 'IMAGE':
        return getI18nString('fullscreen.properties_panel.image');
      case 'VIDEO':
        return getI18nString('fullscreen.properties_panel.video');
    }
  }
};
let eS = e => {
  switch (e) {
    case 'SOLID':
      return jsx(_$$H, {
        'aria-hidden': 'true'
      });
    case 'GRADIENT_LINEAR':
      return jsx(_$$z, {
        'aria-hidden': 'true'
      });
    case 'PATTERN':
      return jsx(_$$L, {
        'aria-hidden': 'true'
      });
    case 'IMAGE':
      return jsx(_$$Z, {
        'aria-hidden': 'true'
      });
    case 'VIDEO':
      return jsx(_$$k3, {
        'aria-hidden': 'true'
      });
  }
};
let ew = e => {
  if (e === 'VIDEO') return eg;
};
function eC({
  figPaintType: e,
  disableImagePaints: t,
  disablePatternPaints: i,
  hidePatternPaints: r,
  recordingKey: a,
  onChange: s
}) {
  if (!getFeatureFlags().eu_fpl_colors_tab) {
    return jsx(eT, {
      paintType: e,
      disableImagePaints: t,
      disablePatternPaints: i,
      hidePatternPaints: r,
      recordingKey: a,
      onChange: s
    });
  }
  let o = e => e === 'PATTERN' && i;
  return jsxs(Fragment, {
    children: [jsx(_$$p, {
      children: jsx(ey, {
        selectVideoFill: () => s('VIDEO')
      })
    }), jsx(RadioPrimitiveRoot, {
      value: e,
      onChange: s,
      className: eb,
      recordingKey: generateRecordingKey(a, 'paintTypeGroupTabs'),
      children: Object.values(eE).filter(e => {
        switch (e) {
          case 'SOLID':
          case 'GRADIENT_LINEAR':
            return !0;
          case 'PATTERN':
            return !!(!r && getFilteredFeatureFlags().ce_il_pattern);
          case 'IMAGE':
          case 'VIDEO':
            return !t;
        }
      }).map(t => jsx(c$, {
        'value': t,
        'aria-label': ex.format(t),
        'className': _()(ev, {
          [eI]: e === t
        }),
        'readonly': e !== t && o(t) || void 0,
        'htmlAttributes': {
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': ex.format(t),
          'data-onboarding-key': ew(t)
        },
        'data-testid': `paintTypeGroupTabs-${t}`,
        'children': eS(t)
      }, t))
    })]
  });
}
function eT({
  paintType: e,
  onChange: t,
  disableImagePaints: i,
  disablePatternPaints: r,
  hidePatternPaints: a,
  recordingKey: s
}) {
  let o = !!(!a && getFilteredFeatureFlags().ce_il_pattern);
  return jsxs('div', {
    className: eb,
    children: [jsx(_$$p, {
      children: jsx(ey, {
        selectVideoFill: () => t('VIDEO')
      })
    }), jsx(ek, {
      isSelected: isSolidType(e),
      onChange: t,
      paintType: 'SOLID',
      recordingKey: generateRecordingKey(s, 'solid'),
      icon: jsx(_$$H, {}),
      tooltip: getI18nString('fullscreen.properties_panel.solid')
    }), jsx(ek, {
      isSelected: isGradientType(e),
      onChange: t,
      paintType: 'GRADIENT_LINEAR',
      recordingKey: generateRecordingKey(s, 'gradientLinear'),
      icon: jsx(_$$z, {}),
      tooltip: getI18nString('fullscreen.properties_panel.gradient')
    }), o && jsx(ek, {
      isSelected: e === 'PATTERN',
      onChange: t,
      paintType: 'PATTERN',
      recordingKey: generateRecordingKey(s, 'pattern'),
      icon: jsx(_$$L, {}),
      tooltip: getI18nString('fullscreen.properties_panel.pattern'),
      disabled: r && e !== 'PATTERN'
    }), !i && jsx(ek, {
      isSelected: e === 'IMAGE',
      onChange: t,
      paintType: 'IMAGE',
      recordingKey: generateRecordingKey(s, 'image'),
      icon: jsx(_$$Z, {}),
      tooltip: getI18nString('fullscreen.properties_panel.image')
    }), !i && jsx(ek, {
      isSelected: e === 'VIDEO',
      onChange: t,
      paintType: 'VIDEO',
      recordingKey: generateRecordingKey(s, 'video'),
      icon: jsx(_$$k3, {}),
      tooltip: getI18nString('fullscreen.properties_panel.video'),
      onboardingKey: eg
    })]
  });
}
function ek({
  isSelected: e,
  onChange: t,
  paintType: i,
  recordingKey: a,
  icon: s,
  tooltip: o,
  disabled: l,
  onboardingKey: d
}) {
  let c = useCallback(() => {
    t(i);
    i === 'VIDEO' && handleAtomEvent({
      id: ef
    });
  }, [t, i]);
  return jsx(ButtonPrimitive, {
    'aria-label': o,
    'onClick': c,
    'recordingKey': a,
    'className': _()(ev, {
      [eI]: e,
      'paint_type_group_tabs--disabled--QFCRq': l
    }),
    'htmlAttributes': {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': o,
      ...(d && {
        'data-onboarding-key': d
      })
    },
    'disabled': l,
    'children': s
  });
}
function eV() {
  return jsx('div', {
    className: _()(x7, cssBuilderInstance.m4.$),
    children: jsx('div', {
      className: _()(QH, lx)
    })
  });
}
let eK = createContext({
  isLoading: !1,
  registerItem: noop,
  unregisterItem: noop,
  setLoading: noop
});
function eY({
  children: e
}) {
  let [t, i] = useState({});
  let a = useCallback(e => {
    i(t => ({
      ...t,
      [e]: !0
    }));
  }, []);
  let s = useCallback(e => {
    i(t => {
      let i = {
        ...t
      };
      delete i[e];
      return i;
    });
  }, []);
  let o = useCallback((e, t) => {
    i(i => i.hasOwnProperty(e) ? {
      ...i,
      [e]: t
    } : i);
  }, []);
  let l = Object.values(t).some(e => e);
  let d = useMemo(() => ({
    isLoading: l,
    registerItem: a,
    unregisterItem: s,
    setLoading: o
  }), [l, a, s, o]);
  return jsx(eK.Provider, {
    value: d,
    children: e
  });
}
let e$ = 'color_swatch--chit--4pGNc';
function eZ({
  asset: e,
  recordingKey: t,
  index: i,
  onPaintChitClick: r,
  onStyleChitClick: a
}) {
  switch (e.type) {
    case 'paint':
      return jsx(eX, {
        paint: e.stylePaint.paint,
        recordingKey: generateRecordingKey(t, 'chit', i),
        onClick: r
      });
    case 'style':
      return jsx(eQ, {
        dsStyle: e.style,
        onClick: a,
        recordingKey: generateRecordingKey(t, 'chit', i)
      });
    case 'variable':
      return jsx(eJ, {
        variable: e.variable,
        variableCollection: e.variableCollection,
        recordingKey: generateRecordingKey(t, 'chit', i),
        onClick: r
      });
  }
}
function eX({
  paint: e,
  recordingKey: t,
  onClick: i
}) {
  let a = useCallback(() => {
    i(e);
  }, [e, i]);
  return jsx(_$$D, {
    className: e$,
    paint: e,
    recordingKey: t,
    onMouseDown: a
  });
}
function eQ({
  dsStyle: e,
  recordingKey: t,
  onClick: i
}) {
  let a = useCallback(() => {
    i(e);
  }, [e, i]);
  return jsx(_$$D, {
    className: e$,
    fillStyle: e,
    recordingKey: t,
    onMouseDown: a
  });
}
function eJ({
  variable: e,
  variableCollection: t,
  recordingKey: i,
  onClick: a
}) {
  let {
    thumbnailValue,
    isLoading
  } = _$$A({
    variable: e,
    variableCollection: t
  });
  !function ({
    itemId: e,
    isLoading: t
  }) {
    let {
      registerItem,
      unregisterItem,
      setLoading
    } = useContext(eK);
    useEffect(() => (registerItem(e), () => {
      unregisterItem(e);
    }), [e, registerItem, unregisterItem]);
    useEffect(() => {
      setLoading(e, t);
    }, [e, setLoading, t]);
  }({
    itemId: e.node_id,
    isLoading
  });
  let l = useMemo(() => {
    if (isNullish(thumbnailValue) || thumbnailValue === 'MIXED' || thumbnailValue.resolvedType !== VariableResolvedDataType.COLOR) return null;
    let e = thumbnailValue.value;
    return {
      type: 'SOLID',
      color: e,
      opacity: e.a
    };
  }, [thumbnailValue]);
  let d = useCallback(() => {
    l && a(l);
  }, [l, a]);
  return l ? jsx(_$$D, {
    className: e$,
    paint: l,
    recordingKey: i,
    onMouseDown: d
  }) : jsx(eV, {});
}
function e6({
  swatchSetIds: e,
  selectedSwatchSetId: t,
  subscribedLibraries: i,
  recordingKey: s,
  onChange: o
}) {
  let l = useDispatch<AppDispatch>();
  let d = useDropdownState();
  let c = getFeatureFlags().eu_fpl_migration_styles_picker_selects;
  let u = useMemo(() => ({
    format: e => {
      switch (e) {
        case CURRENT_PAGE_SWATCH_SET_ID:
          return getI18nString('fullscreen.properties_panel.current_page_colors');
        case LOCAL_SWATCH_SET_ID:
          return getI18nString('fullscreen.properties_panel.local_assets');
        default:
          {
            let t = i.find(t => t.fileKey === e);
            return t?.fileName ?? '';
          }
      }
    }
  }), [i]);
  let p = !e.every(isSwatchSetId);
  let m = useCallback(e => {
    let t = u.format(e).replace(/\W/g, '');
    return c ? jsx(SelectOptionReset, {
      value: e,
      children: u.format(e)
    }, e) : jsx(_$$c$2, {
      value: e,
      recordingKey: generateRecordingKey(s, t)
    }, e);
  }, [u, s, c]);
  let g = useMemo(() => e.filter(isSwatchSetId).map(m), [m, e]);
  let f = useMemo(() => e.filter(e => !isSwatchSetId(e)).map(m), [m, e]);
  return c ? jsxs(SelectGroupLabel, {
    value: t,
    onChange: o,
    recordingKey: s,
    children: [jsx(SelectSeparator, {
      'width': 'fill',
      'label': jsx(HiddenLabel, {
        children: u.format(t)
      }),
      'aria-label': getI18nString('fullscreen.properties_panel.library_swatch_select.aria_label')
    }), jsxs(SelectContainer, {
      children: [g, p && jsx(SelectRoot, {}), f]
    })]
  }) : jsxs(l6, {
    ariaLabel: getI18nString('fullscreen.properties_panel.library_swatch_select.aria_label'),
    formatter: u,
    id: 'color-picker-swatch-set-select-id',
    property: t,
    dropdownShown: d,
    dispatch: l,
    recordingKey: s,
    onChange: o,
    children: [g, p && jsx(sK, {}), f]
  });
}
function e7({
  onChange: e,
  recordingKey: t,
  onlySupportCurrentPage: i
}) {
  let a = useMemo(() => [VariableResolvedDataType.COLOR], []);
  let s = _$$A2(a, null);
  let o = useCurrentFileKey();
  let l = bR({
    subscribedLibraries: s
  });
  let d = i ? [CURRENT_PAGE_SWATCH_SET_ID] : l;
  let [c, u] = useSessionStorageSync('library-color-swatch-selected-swatch-set-id', d[0], {
    parse: e => d.find(t => t === e) ? e : void 0,
    stringify: e => e
  });
  let m = useCallback(e => {
    i || u(e);
  }, [u, i]);
  let h = useCallback(t => {
    if (compareWithGeneratedKey(t, o)) {
      let i = SharedStyle.getColorForFillStyle({
        nodeId: t.node_id
      });
      i && e(i);
    } else {
      teamLibraryCache.getCanvas(t).then(t => {
        let i = SharedStyle.getColorForSharedFillStyle(t);
        i && e(i);
      }).catch(() => {});
    }
  }, [e, o]);
  let g = useCallback(t => {
    t.color != null && t.opacity != null && e({
      ...t.color,
      a: t.opacity
    });
  }, [e]);
  return jsx(eY, {
    children: jsx(e8, {
      selectedSwatchSetId: c,
      render: ({
        isLoading: e,
        colorAssets: r
      }) => jsx(e9, {
        colorAssets: r,
        isLoading: e,
        onPaintChitClick: g,
        onStyleChitClick: h,
        onSwatchSetChange: m,
        onlySupportCurrentPage: !!i,
        recordingKey: t,
        selectedSwatchSetId: c,
        subscribedLibraries: s,
        swatchSetIds: d
      })
    })
  });
}
function e8({
  selectedSwatchSetId: e,
  render: t
}) {
  let i = UV();
  let n = Do();
  let a = PC(e);
  let s = useContext(eK);
  let o = a.status === 'loading' || s.isLoading;
  let l = function () {
    switch (e) {
      case CURRENT_PAGE_SWATCH_SET_ID:
        return i;
      case LOCAL_SWATCH_SET_ID:
        return n;
      default:
        return a.data ?? [];
    }
  }();
  let d = useMemo(() => {
    let e = [];
    if (a.status === 'loaded') {
      for (let t of a.data) t.type === 'style' && e.push(t.style);
    }
    return e;
  }, [a]);
  useEffect(() => {
    loadStyleCanvases(d);
  }, [d]);
  return t({
    isLoading: o,
    colorAssets: l
  });
}
function e9({
  swatchSetIds: e,
  selectedSwatchSetId: t,
  colorAssets: i,
  subscribedLibraries: a,
  isLoading: s,
  recordingKey: o,
  onSwatchSetChange: l,
  onPaintChitClick: d,
  onStyleChitClick: c,
  onlySupportCurrentPage: u
}) {
  let p = s && i.length === 0;
  let m = X7();
  let h = useRef(null);
  let g = p ? 4 : Math.ceil(i.length / 9);
  let f = useCallback(() => h.current, [h]);
  let A = useCallback(() => 24, []);
  let y = Te({
    count: g,
    getScrollElement: f,
    estimateSize: A,
    overscan: 8
  });
  let b = [];
  for (let e of y.getVirtualItems()) {
    let t = 9 * e.index;
    let r = (e.index + 1) * 9;
    for (let a = t; a < r; a++) {
      let r = i[a];
      if (!r && !p) break;
      b.push(jsx('div', {
        style: {
          position: 'absolute',
          transform: `translate(${(a - t) * 24}px, ${24 * e.index}px)`
        },
        children: p ? jsx(eV, {}) : jsx(eZ, {
          recordingKey: generateRecordingKey(o, 'swatch'),
          index: a,
          asset: r,
          onPaintChitClick: d,
          onStyleChitClick: c
        })
      }, r ? function (e, t) {
        switch (e.type) {
          case 'paint':
            return `${t}`;
          case 'style':
            return e.style.key;
          case 'variable':
            return e.variable.node_id;
        }
      }(r, a) : `loader-${a}`));
    }
  }
  return jsxs(Id, {
    className: _()('library_color_swatch--panel--dZ3D-', {
      'library_color_swatch--panelNewUI--xR8Xb': m
    }),
    children: [!u && jsx('div', {
      className: 'library_color_swatch--select--k7pDM',
      children: jsx(e6, {
        swatchSetIds: e,
        selectedSwatchSetId: t,
        subscribedLibraries: a,
        onChange: l,
        recordingKey: generateRecordingKey(o, 'swatchSetSelect')
      })
    }), jsx(RecordingScrollContainer, {
      className: _()('library_color_swatch--swatchScrollContainer--im6kP', {
        'library_color_swatch--swatchScrollContainerNewUI--w7-PQ': m
      }),
      scrollContainerRef: h,
      children: jsx('div', {
        style: {
          height: `${y.getTotalSize()}px`,
          width: 216,
          position: 'relative',
          paddingBottom: m ? 12 : 0,
          zIndex: 0
        },
        children: b
      })
    })]
  });
}
let t_ = l6;
let tA = _$$c$2;
function ty(e) {
  let t = useDispatch<AppDispatch>();
  let i = new ZB(() => e.paint);
  return jsx(t_, {
    ariaLabel: getI18nString('fullscreen.properties_panel.color_picker.paint_type.aria_label'),
    className: 'type_select--typeSelect--URjN7',
    dispatch: t,
    dropdownClassName: 'type_select--typeSelectDropdown--1qAZ9',
    dropdownShown: e.dropdownShown,
    formatter: i,
    id: 'color-picker-type-select',
    inputClassName: 'type_select--typeSelectInput--dpSQO',
    minTop: 6,
    onChange: e.onChange,
    onMouseDown: stopPropagation,
    property: e.paint.type,
    recordingKey: e.recordingKey,
    children: e.paintTypeOptions.map((t, i) => jsx(tA, {
      value: t,
      recordingKey: generateRecordingKey(e, t)
    }, i))
  });
}
let tk = memo(({
  onColorPickerToggle: e,
  onDeleteStop: t,
  onSelectedStopIndexChange: i,
  onStopsChange: a,
  recordingKey: s,
  selectedStopIndex: o,
  stops: l,
  stopsVar: d
}) => {
  let [c, u] = useState(!1);
  let [p, m] = useState(!1);
  let h = useCallback((e, t, n, r, s) => {
    let o = [...l];
    let c = {
      color: t,
      position: n
    };
    o.splice(e, 1, c);
    sortByPosition(o);
    let u = o.indexOf(c);
    let p = d.length === 0 ? l.map(transformColorStop) : [...d];
    let m = r ? {
      color: t,
      position: n,
      colorVar: r
    } : transformColorStop(c);
    p.splice(e, 1, m);
    sortByPositionWithDefault(p);
    a({
      stops: o,
      stopsVar: p
    }, s);
    e !== u && i(u);
  }, [i, a, l, d]);
  let g = useCallback(e => {
    i(e);
  }, [i]);
  let f = useCallback(e => {
    e.key === 'Tab' && !e.shiftKey && o < l.length - 1 && (e.preventDefault(), u(!0), m(!1), i(o + 1));
  }, [i, o, l.length]);
  let _ = useCallback(e => {
    e.key === 'Tab' && e.shiftKey && o > 0 && (e.preventDefault(), m(!0), u(!1), i(o - 1));
  }, [i, o]);
  let A = e => d[e]?.colorVar?.value?.alias || null;
  let [y, b] = useState([]);
  useEffect(() => {
    b(l.map(() => createRef()));
  }, [l]);
  let [v, I] = useState([]);
  useEffect(() => {
    I(l.map(() => createRef()));
  }, [l]);
  useEffect(() => {
    c && y[o]?.current?.focus();
    p && v[o]?.current?.focus();
  }, [o, c, y, p, v]);
  return jsx('div', {
    className: 'gradient_stop_list--root--yRCAd',
    children: l.map((i, r) => jsx(tR, {
      boundVariableId: A(r),
      buttonRef: v[r],
      handleTabNextRow: f,
      handleTabPrevRow: _,
      index: r,
      inputRef: y[r],
      isSelected: r === o,
      onChange: h,
      onColorPickerToggle: e,
      onDelete: t,
      onSelect: g,
      recordingKey: generateRecordingKey(s, 'gradientStop', r),
      setDeleteButtonFocused: m,
      setPercentInputFocused: u,
      stop: i,
      stopVar: d[r],
      totalStopCount: l.length
    }, r))
  });
});
function tR({
  index: e,
  isSelected: t,
  onChange: i,
  onColorPickerToggle: s,
  onDelete: o,
  onSelect: l,
  recordingKey: c,
  stop: u,
  stopVar: m,
  totalStopCount: h,
  boundVariableId: g,
  setPercentInputFocused: f,
  setDeleteButtonFocused: A,
  inputRef: y,
  buttonRef: b,
  handleTabNextRow: v,
  handleTabPrevRow: I
}) {
  let x = useDispatch<AppDispatch>();
  let S = useRef(null);
  let C = X7();
  let T = useCallback(() => {
    o(e);
  }, [e, o]);
  let k = useCallback((t, n) => {
    i(e, u.color, t, m?.colorVar, n);
  }, [e, i, u, m]);
  let R = useCallback(() => {
    l?.(e);
  }, [e, l]);
  let N = useHandleMouseEvent(generateRecordingKey(c, 'row'), 'mousedown', R);
  let P = useCallback((t, n) => {
    i(e, t, u.position, void 0, n);
  }, [e, i, u]);
  let O = useCallback(() => {
    executeWithDSAAction(StyleVariableOperation.VARIABLE_DETACH, CopyPasteType.DIRECT, () => {
      i(e, u.color, u.position, void 0, yesNoTrackingEnum.YES);
    });
  }, [e, i, u]);
  let D = useCallback(t => {
    t.preventDefault();
    S.current && s(e, calculatePickerPositionLeft(S.current));
  }, [e, s]);
  let L = useMemo(() => ({
    blendMode: 'NORMAL',
    color: u.color,
    type: 'SOLID',
    opacity: u.color.a
  }), [u.color]);
  return jsx(Fragment, {
    children: jsxs(fI, {
      className: 'gradient_stop_list--row--uqT1N',
      ref: S,
      onMouseDownCapture: N,
      selected: t,
      children: [jsx('div', {
        className: _()('gradient_stop_list--position--0dUS0', {
          'gradient_stop_list--positionNewUI--bUNK-': C
        }),
        children: jsx(PercentageBaseInput, {
          'data-tooltip': getI18nString('fullscreen.properties_panel.gradient_picker.stop_position'),
          'data-tooltip-type': KindEnum.TEXT,
          'decimals': 0,
          'dispatch': x,
          'forwardedRef': y,
          'onBlur': () => f(!1),
          'onFocus': () => f(!0),
          'onKeyDown': I,
          'onValueChange': k,
          'scrubbingDisabled': !0,
          'value': u.position
        })
      }), jsx('div', {
        className: _()('gradient_stop_list--color--6drDT', {
          'gradient_stop_list--colorNewUI--sF02Q': C,
          [Qh]: g
        }),
        children: g ? jsx(rM, {
          selected: t,
          variableId: g,
          paint: L,
          onClick: D,
          onDetachClick: O,
          enableDetach: !0
        }) : jsx(mu, {
          color: u.color,
          onChitMouseDown: D,
          onColorChange: P,
          opacityDecimals: 0,
          recordingKey: c
        })
      }), jsx('div', {
        className: 'gradient_stop_list--actions--seaVY',
        children: h > 1 && jsx(IconButton, {
          'onClick': T,
          'aria-label': getI18nString('fullscreen.properties_panel.gradient_picker.delete_stop'),
          'htmlAttributes': {
            'data-tooltip-type': KindEnum.TEXT,
            'data-tooltip': getI18nString('fullscreen.properties_panel.gradient_picker.delete_stop'),
            'onMouseDown': stopPropagation,
            'onBlur': () => A(!1),
            'onFocus': () => A(!0),
            'onKeyDown': v
          },
          'ref': b,
          'children': jsx(_$$O, {})
        })
      })]
    })
  });
}
function tN({
  colorProfile: e,
  currentSelectedGradientStop: t,
  onChange: i,
  onKeyDown: s,
  onPaintTypeChange: o,
  paint: l,
  recordingKey: c,
  variableScopes: h
}) {
  let g = useDropdownState();
  let f = useCounter();
  let A = useDispatch<AppDispatch>();
  let [b, v] = useState(null);
  let I = useRef(-1);
  let x = useRef(null);
  let [S, C] = _$$L3(t.index, e => {
    fullscreenValue.updateAppModel({
      currentSelectedGradientStop: {
        type: NoneColor.COLOR,
        index: e
      }
    });
  });
  let T = useMemo(() => ({
    stops: l.stops,
    stopsVar: l.stopsVar
  }), [l.stops, l.stopsVar]);
  let [k, R] = _$$L3(T, (e, t) => {
    i({
      ...l,
      stops: e.stops,
      stopsVar: e.stopsVar
    }, t);
  });
  let N = (e, t) => e >= t.length ? 0 : e;
  let P = e => {
    let t = [...k.stops];
    t.splice(e, 1);
    let i = k.stopsVar.length === 0 ? k.stops.map(transformColorStop) : [...k.stopsVar];
    i.splice(e, 1);
    R({
      stops: t,
      stopsVar: i
    }, yesNoTrackingEnum.YES);
  };
  let O = k.stopsVar[S]?.colorVar;
  let F = getVariableById(extractVariableAliasOrFontStyle(O) || void 0);
  let M = useCallback(() => {
    let e;
    let t = k.stops[N(S, k.stops)];
    let i = -1;
    let n = null;
    if (k.stops.length === 1) {
      let t = k.stops[0];
      i = t.position < 0.5 ? 1 : 0;
      e = getContrastingColor(t.color);
    } else if (S < k.stops.length - 1) {
      i = (k.stops[S + 1].position + t.position) / 2;
      e = interpolateGradientColor(k.stops, i);
    } else {
      let n = k.stops.slice(-2, -1)[0];
      i = (t.position + n.position) / 2;
      e = interpolateGradientColor(k.stops, i);
    }
    if (e && i >= 0 && (n = {
      color: e,
      position: i
    }), n) {
      let e = sortByPosition([...k.stops, n]);
      let t = k.stopsVar.length === 0 ? k.stops.map(transformColorStop) : k.stopsVar;
      R({
        stops: e,
        stopsVar: sortByPositionWithDefault([...t, transformColorStop(n)])
      });
      let i = e.indexOf(n);
      C(i);
      I.current = i;
    }
  }, [S, k, C, R]);
  let j = useCallback((e, t) => {
    let i = [...k.stops];
    let n = {
      ...i[S],
      color: e
    };
    i.splice(S, 1, n);
    let r = k.stopsVar.length === 0 ? k.stops.map(transformColorStop) : k.stopsVar.slice();
    let a = transformColorStop(n);
    r.splice(S, 1, a);
    R({
      stops: i,
      stopsVar: r
    }, t);
  }, [S, k, R]);
  let B = async e => {
    let t = await A(loadSharedVariableThunk(e));
    let i = convertVariableIdToKiwi(t);
    if (!i) return;
    let n = {
      value: {
        alias: i
      },
      dataType: 'ALIAS',
      resolvedDataType: 'COLOR'
    };
    let r = k.stopsVar.length === 0 ? k.stops.map(transformColorStop) : k.stopsVar.slice();
    let a = {
      ...r[S],
      colorVar: n
    };
    r.splice(S, 1, a);
    oz('FILL_PAINT > GRADIENT_STOP_COLOR', n);
    executeWithDSAAction(StyleVariableOperation.VARIABLE_ATTACH, CopyPasteType.DIRECT, () => {
      R({
        stops: k.stops,
        stopsVar: r
      }, yesNoTrackingEnum.YES);
    });
  };
  let G = useCallback((e, t) => {
    v(i => i == null ? (I.current = e, t) : e === I.current ? (I.current = -1, null) : (I.current = e, i));
  }, []);
  let z = useCallback(() => {
    v(null);
    I.current = -1;
  }, []);
  let H = validateGradientPaint(l);
  let W = X7();
  if (!H) return null;
  let K = jsx(ty, {
    paint: l,
    paintTypeOptions: ['GRADIENT_LINEAR', 'GRADIENT_RADIAL', 'GRADIENT_ANGULAR', 'GRADIENT_DIAMOND'],
    onChange: o,
    dropdownShown: g,
    recordingKey: generateRecordingKey(c, 'gradientTypeSelect')
  });
  let Y = jsx(IconButton, {
    'actionOnPointerDown': !0,
    'onClick': GradientToolApi.rotateGradient90Degrees,
    'aria-label': getI18nString('fullscreen.properties_panel.gradient_picker.rotate_90'),
    'htmlAttributes': {
      'data-tooltip': getI18nString('fullscreen.properties_panel.gradient_picker.rotate_90'),
      'data-tooltip-type': KindEnum.TEXT
    },
    'children': jsx(_$$R, {})
  });
  let q = jsx(_$$n, {
    gradientPaint: H,
    onChange: i
  });
  return jsxs(RecordingScrollContainer, {
    maxHeight: 500,
    children: [jsxs(KeyboardReceiver, {
      className: 'gradient_editor--root--YXS31',
      ref: x,
      focusOnMount: !0,
      forceUpdate: f,
      handleKeyDown: s,
      name: 'Color picker',
      children: [W ? jsxs('div', {
        className: 'gradient_editor--gradientSettingsRow---SfrV',
        children: [jsx('div', {
          className: 'gradient_editor--paintTypeSelect--ByiGb',
          children: K
        }), jsxs('div', {
          className: 'gradient_editor--gradientActions--64A-L',
          children: [q, Y]
        })]
      }) : jsxs(fI, {
        className: 'gradient_editor--selectRow--wBc3J',
        children: [jsx('div', {
          className: 'gradient_editor--select--JfYGn',
          children: K
        }), jsxs('div', {
          className: 'gradient_editor--actions--qmKUq',
          children: [Y, q]
        })]
      }), jsxs(Zk, {
        className: 'gradient_editor--control--Vs6kX',
        children: [jsx(_$$i2, {
          colorProfile: e,
          contextMenu: {
            onColorPickerToggle: G,
            onDeleteStop: P
          },
          paint: H,
          onChange: i,
          currentSelectedGradientStop: t,
          hasFocus: (x.current && x.current.hasFocus()) ?? !1,
          dispatch: A,
          recordingKey: generateRecordingKey(c, 'gradient')
        }), jsxs(fI, {
          className: _()('gradient_editor--stopsHeaderRow--pxKWt', {
            'gradient_editor--stopsHeaderRowNewUI--OtVTB': W
          }),
          children: [jsx('div', {
            className: 'gradient_editor--stopsHeaderLabel--fzmGs',
            children: getI18nString('fullscreen.properties_panel.gradient_picker.stops')
          }), jsx('div', {
            className: _()('gradient_editor--stopsHeaderAddButton--1MI-j', {
              'gradient_editor--stopsHeaderAddButtonNewUI--mNdDo': W
            }),
            children: jsx(IconButton, {
              'actionOnPointerDown': !0,
              'onClick': M,
              'aria-label': getI18nString('fullscreen.properties_panel.gradient_picker.add_stop'),
              'htmlAttributes': {
                'data-tooltip': getI18nString('fullscreen.properties_panel.gradient_picker.add_stop'),
                'data-tooltip-type': KindEnum.TEXT
              },
              'children': jsx(SVG, {})
            })
          })]
        }), jsx(tk, {
          onColorPickerToggle: G,
          onDeleteStop: P,
          onSelectedStopIndexChange: C,
          onStopsChange: R,
          recordingKey: generateRecordingKey(c, 'gradientStops'),
          selectedStopIndex: S,
          stops: k.stops,
          stopsVar: k.stopsVar
        }), jsx(_$$p2, {
          paint: l,
          onChange: i
        })]
      })]
    }), b && jsx($$io0, {
      boundVariable: F,
      color: k.stops[N(S, k.stops)].color,
      disabledVariableIds: new Set(),
      initialPosition: b,
      onChange: j,
      onClose: z,
      onVariableChange: B,
      recordingKey: generateRecordingKey(c, 'colorPicker'),
      variableScopes: h
    }, S)]
  });
}
let tV = 'noise_settings_modal--noiseTypeIcon--nYOhR chit--chit--WdWdx';
let tG = 'noise_settings_modal--duotoneIcon--NvHlL';
function tz(e) {
  let [t, i] = useState(!1);
  let [a, s] = useState(new Point(0, 0));
  let o = useRef(null);
  let l = () => {
    i(!1);
  };
  function d(t) {
    e.onChange({
      ...e.paint,
      color: t,
      opacity: t.a
    });
  }
  let c = getVisibleTheme();
  let u = useThemeContext();
  let p = {
    ...e.paint.color,
    a: 1
  };
  let m = colorCSSManipulatorInstance.format(p);
  let h = getThemeBorderStyle(u, m, c);
  let g = {
    r: 1 - e.paint.color.r,
    g: 1 - e.paint.color.g,
    b: 1 - e.paint.color.b,
    a: 1
  };
  let f = colorCSSManipulatorInstance.format(g);
  let _ = new FormattedHexColor({
    parseAlpha: !1
  });
  return jsxs(Fragment, {
    children: [jsxs(Id, {
      children: [jsx(cS, {
        label: renderI18nText('properties_panel.noise.noise_type'),
        input: jsxs(_$$bL2, {
          legend: jsx(Legend, {
            children: renderI18nText('properties_panel.noise.noise_type')
          }),
          value: e.paint.noiseType,
          onChange(t) {
            e.onChange({
              ...e.paint,
              noiseType: t
            });
          },
          children: [jsx(_$$c$3, {
            'icon': jsxs('div', {
              className: tV,
              children: [jsx('div', {
                style: {
                  background: m
                },
                className: tG
              }), jsx('div', {
                style: {
                  background: f
                },
                className: tG
              })]
            }),
            'value': 'DUOTONE',
            'aria-label': getI18nString('properties_panel.noise.noise_type.duotone')
          }), jsx(_$$c$3, {
            'icon': jsx('div', {
              style: {
                background: m
              },
              className: tV,
              children: h && jsx('div', {
                style: {
                  boxShadow: h
                },
                className: 'noise_settings_modal--borderShadow--VnWzy'
              })
            }),
            'value': 'MONOTONE',
            'aria-label': getI18nString('properties_panel.noise.noise_type.monotone')
          }), jsx(_$$c$3, {
            'icon': jsx('div', {
              className: 'noise_settings_modal--multitoneIcon--BgMU2 noise_settings_modal--noiseTypeIcon--nYOhR chit--chit--WdWdx'
            }),
            'value': 'MULTITONE',
            'aria-label': getI18nString('properties_panel.noise.noise_type.multitone')
          })]
        })
      }), (e.paint.noiseType === 'DUOTONE' || e.paint.noiseType === 'MONOTONE') && jsx(cS, {
        ref: o,
        label: null,
        input: jsxs('div', {
          className: 'noise_settings_modal--colorValueContainer--K2zYz paint_panels--colorValueContainer--DGeSP raw_components--borderFocusWithin--BaipZ paint_panels--_baseColorValueContainer--t-UIV raw_components--base--T7G0z raw_components--singleRowHeight--dKM4t',
          children: [jsx(_$$J, {
            onClick: () => {
              t ? l() : (s(calculatePickerPositionLeft(o.current)), i(!0));
            },
            className: 'noise_settings_modal--chit--KFm5o',
            color: e.paint.color,
            opacity: 1
          }), jsx(FormattedInputVariant3, {
            property: e.paint.color,
            onChange: d,
            formatter: _,
            noLeftBorder: !0,
            noBorderOnFocus: !0
          })]
        })
      }), jsx(cS, {
        label: renderI18nText('properties_panel.noise.opacity'),
        input: jsx(PercentageBaseInput, {
          'data-tooltip': getI18nString('properties_panel.noise.opacity'),
          'data-tooltip-type': KindEnum.TEXT,
          'dispatch': e.dispatch,
          'onValueChange': function (t) {
            e.onChange({
              ...e.paint,
              opacity: t
            });
          },
          'value': e.paint.opacity,
          'min': 0,
          'max': 1
        })
      }), jsx(cS, {
        label: renderI18nText('properties_panel.noise.noise_size'),
        input: jsx(ExpressionInput, {
          'data-tooltip': getI18nString('properties_panel.noise.noise_size'),
          'data-tooltip-type': KindEnum.TEXT,
          'dispatch': e.dispatch,
          'onValueChange': function (t) {
            e.onChange({
              ...e.paint,
              noiseSize: {
                x: t,
                y: t
              }
            });
          },
          'value': e.paint.noiseSize.x,
          'smallNudgeAmount': 1,
          'bigNudgeAmount': 5,
          'min': 0.1,
          'max': 100
        })
      }), jsx(cS, {
        label: renderI18nText('properties_panel.noise.density'),
        input: jsx(PercentageBaseInput, {
          'data-tooltip': getI18nString('properties_panel.noise.density'),
          'data-tooltip-type': KindEnum.TEXT,
          'dispatch': e.dispatch,
          'onValueChange': function (t) {
            e.onChange({
              ...e.paint,
              density: t
            });
          },
          'value': e.paint.density,
          'smallNudgeAmount': 0.1,
          'bigNudgeAmount': 1,
          'min': 0.01,
          'max': 1
        })
      })]
    }), t && jsx($$io0, {
      initialPosition: a,
      color: {
        ...e.paint.color,
        a: e.paint.opacity
      },
      onChange: d,
      onClose: l,
      disabledVariableIds: new Set(),
      boundVariable: null,
      isVariableCreationEnabled: !1
    })]
  });
}
let tY = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2',
      clipRule: 'evenodd'
    })
  });
});
let tq = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M17 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-1 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-5-6a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-1 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1-11a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-6 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2M6 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0',
      clipRule: 'evenodd'
    })
  });
});
let t$ = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M9 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-9 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2',
      clipRule: 'evenodd'
    })
  });
});
let t8 = 'pattern_settings_modal--inactiveLabel--ZYh90 transform_panel--inactiveLabel--fPCxr raw_components--iconInsideBorderFocusWithin--2g7fO';
function t9(e) {
  let {
    Sprig
  } = useSprigWithSampling();
  let [i, a] = useState(e.paint.patternSpacing.x === e.paint.patternSpacing.y);
  let s = useCurrentTool();
  let o = useSceneGraphSelector();
  let l = sessionLocalIDToString(e.paint.sourceNodeId);
  let c = isValidSessionLocalID(e.paint.sourceNodeId);
  let u = useMemo(() => l && c ? o.get(l) : null, [l, c, o]);
  let [m, g] = useState(null);
  let [f, A] = useState(u && checkIfAnyEffectVisible(u));
  useEffect(() => {
    if (l && c && Thumbnail) {
      let [e, t] = Thumbnail.generateThumbnailForNode(l, 208, 208, 32, {
        useRenderTreeWithoutEffects: !0
      });
      if (t) {
        let e = new Blob([t], {
          type: 'image/png'
        });
        let i = URL.createObjectURL(e);
        g(i);
        return () => URL.revokeObjectURL(i);
      }
    }
    g(null);
  }, [c, l]);
  useEffect(() => {
    u && checkIfAnyEffectVisible(u) ? A(!0) : A(!1);
  }, [u]);
  let y = useCallback(async () => {
    u && (clearSelection(), await getSingletonSceneGraph().setCurrentPageFromNodeAsync(u.guid), addToSelection([u.guid]), fullscreenValue.triggerActionInUserEditScope('zoom-to-selection', void 0), s === DesignGraphElements.PATTERN_SOURCE_SELECTOR && fullscreenValue.triggerAction('set-tool-default', null));
  }, [u, s]);
  return jsxs(Id, {
    children: [jsxs('div', {
      className: 'pattern_settings_modal--sourceNodeThumbnailContainer--fctgm',
      style: {
        width: 208,
        height: 208
      },
      children: [jsx('div', {
        className: 'pattern_settings_modal--sourceNodeThumbnail--FG4nV',
        style: {
          backgroundImage: m ? `url(${m})` : 'none'
        }
      }), jsx('div', {
        className: _()('pattern_settings_modal--buttonContainer--HgJkZ', {
          'pattern_settings_modal--buttonContainerShown--jC9-y': !u || s === DesignGraphElements.PATTERN_SOURCE_SELECTOR
        }),
        children: jsx('div', {
          className: 'pattern_settings_modal--buttonWrapper---yPaA',
          children: jsx(Button, {
            onClick: () => {
              fullscreenValue.triggerAction('set-tool-pattern-source-selector');
              getFeatureFlags().ce_il_sprig_tracking && Sprig('setAttribute', 'is_assets_visual_style_user', !0);
            },
            iconPrefix: jsx(_$$o, {}),
            variant: s === DesignGraphElements.PATTERN_SOURCE_SELECTOR ? 'primary' : 'secondary',
            recordingKey: generateRecordingKey(e.recordingKey, 'selectSource'),
            children: renderI18nText('properties_panel.pattern.select_source')
          })
        })
      })]
    }), u && jsxs('div', {
      className: 'pattern_settings_modal--sourceNodeInfo--QA6Ze',
      children: [jsxs('div', {
        className: 'pattern_settings_modal--sourceNode--oTUjb',
        children: [jsx(Bf, {
          guid: u.guid,
          useUI3Icon: !0,
          isPatternSourceIcon: !0
        }), jsx('span', {
          className: 'pattern_settings_modal--sourceNodeName--toYi8',
          children: u.name
        })]
      }), jsx(IconButton, {
        'aria-label': getI18nString('properties_panel.pattern.go_to_source'),
        'onClick': y,
        'children': jsx(_$$A3, {})
      })]
    }), jsx('div', {
      className: 'pattern_settings_modal--divider--cuS8M'
    }), jsx(cS, {
      label: renderI18nText('properties_panel.pattern.tile_type'),
      input: jsxs(_$$bL2, {
        legend: jsx(Legend, {
          children: renderI18nText('properties_panel.pattern.tile_type')
        }),
        value: e.paint.patternTileType === 'RECTANGULAR' ? 'RECTANGULAR' : 'HEXAGONAL',
        onChange(t) {
          e.onChange({
            ...e.paint,
            patternTileType: t === 'RECTANGULAR' ? 'RECTANGULAR' : 'HORIZONTAL_HEXAGONAL'
          });
        },
        children: [jsx(_$$c$3, {
          'icon': jsx(tY, {}),
          'value': 'RECTANGULAR',
          'aria-label': getI18nString('properties_panel.pattern.rectangular')
        }), jsx(_$$c$3, {
          'icon': e.paint.patternTileType === 'VERTICAL_HEXAGONAL' ? jsx(tq, {}) : jsx(t$, {}),
          'value': 'HEXAGONAL',
          'aria-label': getI18nString('properties_panel.pattern.hexagonal')
        })]
      })
    }), e.paint.patternTileType !== 'RECTANGULAR' && jsx(cS, {
      label: renderI18nText('properties_panel.pattern.direction'),
      input: jsxs(_$$bL2, {
        legend: jsx(Legend, {
          children: renderI18nText('properties_panel.pattern.tile_type')
        }),
        value: e.paint.patternTileType === 'VERTICAL_HEXAGONAL' ? 'VERTICAL' : 'HORIZONTAL',
        onChange(t) {
          e.onChange({
            ...e.paint,
            patternTileType: t === 'VERTICAL' ? 'VERTICAL_HEXAGONAL' : 'HORIZONTAL_HEXAGONAL'
          });
        },
        children: [jsx(_$$c$3, {
          'icon': jsx(_$$o2, {}),
          'value': 'HORIZONTAL',
          'aria-label': getI18nString('properties_panel.pattern.horizontal')
        }), jsx(_$$c$3, {
          'icon': jsx(_$$W, {}),
          'value': 'VERTICAL',
          'aria-label': getI18nString('properties_panel.pattern.vertical')
        })]
      })
    }), jsx(cS, {
      label: renderI18nText('properties_panel.pattern.scale'),
      input: jsx(PercentageBaseInput, {
        'bigNudgeAmount': 10,
        'data-tooltip': getI18nString('properties_panel.pattern.scale'),
        'data-tooltip-type': KindEnum.TEXT,
        'dispatch': e.dispatch,
        'inputClassName': WC,
        'max': 20,
        'min': 0.01,
        'onValueChange': function (t) {
          e.onChange({
            ...e.paint,
            scale: t
          });
        },
        'recordingKey': generateRecordingKey(e, 'scale'),
        'smallNudgeAmount': 1,
        'tooltipForScreenReadersOnly': !0,
        'value': e.paint.scale,
        'children': jsx(_$$l2, {
          className: t8
        })
      })
    }), jsx(cS, {
      label: renderI18nText('properties_panel.pattern.spacing'),
      input: jsx(PercentageBaseInput, {
        'bigNudgeAmount': 10,
        'data-tooltip': getI18nString('properties_panel.pattern.spacing'),
        'data-tooltip-type': KindEnum.TEXT,
        'dispatch': e.dispatch,
        'inputClassName': WC,
        'max': 20,
        'min': -0.5,
        'onValueChange': function (t) {
          e.onChange({
            ...e.paint,
            patternSpacing: {
              x: t,
              y: i ? t : e.paint.patternSpacing.y
            },
            spacing: 0
          });
        },
        'recordingKey': generateRecordingKey(e, 'spacing'),
        'smallNudgeAmount': 1,
        'tooltipForScreenReadersOnly': !0,
        'value': e.paint.patternSpacing.x,
        'children': jsx('span', {
          className: t8,
          children: renderI18nText('fullscreen.properties_panel.transform_panel.x')
        })
      })
    }), jsx(cS, {
      label: null,
      input: jsx(PercentageBaseInput, {
        'bigNudgeAmount': 10,
        'data-tooltip': getI18nString('properties_panel.pattern.spacing'),
        'data-tooltip-type': KindEnum.TEXT,
        'dispatch': e.dispatch,
        'inputClassName': WC,
        'max': 20,
        'min': -0.5,
        'onBlur': function (t) {
          t.target.value === '' && (a(!0), e.onChange({
            ...e.paint,
            patternSpacing: {
              x: e.paint.patternSpacing.x,
              y: e.paint.patternSpacing.x
            },
            spacing: 0
          }));
        },
        'onValueChange': function (t) {
          a(!1);
          e.onChange({
            ...e.paint,
            patternSpacing: {
              x: e.paint.patternSpacing.x,
              y: t
            },
            spacing: 0
          });
        },
        'placeholder': i ? EV.format(e.paint.patternSpacing.y) : void 0,
        'smallNudgeAmount': 1,
        'tooltipForScreenReadersOnly': !0,
        'value': i ? void 0 : e.paint.patternSpacing.y,
        'children': jsx('span', {
          className: t8,
          children: renderI18nText('fullscreen.properties_panel.transform_panel.y')
        })
      })
    }), jsx(Zo, {
      label: renderI18nText('properties_panel.pattern.alignment'),
      input: jsx(_$$V, {
        anchorPoint: anchorPositionFromAlignment(e.paint),
        onAnchorPointChange(t) {
          e.onChange({
            ...e.paint,
            ...alignmentFromAnchorPosition(t)
          });
        },
        fullWidth: !0
      }),
      appendedClassName: 'pattern_settings_modal--alignmentRow--fytTl'
    }), jsx(_$$p2, {
      paint: e.paint,
      onChange: e.onChange
    }), f && jsxs(Fragment, {
      children: [jsx('div', {
        className: 'pattern_settings_modal--effectsDivider--TxZaG pattern_settings_modal--divider--cuS8M'
      }), jsxs('div', {
        className: 'pattern_settings_modal--effectsError--gR9Bi',
        children: [jsx(_$$b2, {
          className: 'pattern_settings_modal--infoIcon--g1dQX'
        }), jsx('div', {
          className: 'pattern_settings_modal--effectsText--j0ZPF',
          children: getI18nString('properties_panel.pattern.effects_error')
        })]
      })]
    })]
  });
}
function ie(e, t, i, n) {
  let a = useLatestRef(e);
  useEffect(() => {
    e !== a && (e !== DesignGraphElements.DROPPER_COLOR || t && t.includes('custom_color'));
  }, [e, i, n, t, a]);
}
function it({
  rightButtons: e,
  recordingKey: t,
  tabManager: i,
  tabProps: r
}) {
  return jsxs(DialogHeader, {
    children: [jsx(DialogHiddenTitle, {
      children: renderI18nText('fullscreen.color_picker')
    }), jsxs(DialogTabStrip, {
      manager: i,
      children: [jsx(Tabs.Tab, {
        ...r.custom_color,
        recordingKey: generateRecordingKey(t, 'viewTabs.customColor'),
        children: renderI18nText('fullscreen.properties_panel.color_picker.custom')
      }), jsx(Tabs.Tab, {
        ...r.library,
        recordingKey: generateRecordingKey(t, 'viewTabs.library'),
        children: renderI18nText('fullscreen.properties_panel.color_picker.libraries')
      }), r.cms && jsx(Tabs.Tab, {
        ...r.cms,
        recordingKey: generateRecordingKey(t, 'viewTabs.dakota'),
        children: renderI18nText('variables.binding_ui.variable_dakota_tab_name')
      })]
    }), e && jsx(DialogActionStrip, {
      children: jsx('div', {
        className: 'color_picker_v2--headerButtonsWrapper--yKED7',
        children: e
      })
    })]
  });
}
export let $$ii1 = forwardRef(({
  paint: e,
  paintId: t,
  selectedStyle: i,
  inheritStyleKeyField: a,
  currentSelectedGradientStop: h,
  colorFormat: f,
  currentTool: A,
  initialPosition: y,
  initialView: b,
  supportedViews: I,
  initialCreationModalView: k,
  initialStyleCreationPaint: P,
  recordingKey: O,
  dropdownShown: L,
  onKeyDown: M,
  onChange: j,
  onColorChange: V,
  onBlendModeChange: G,
  onPaintTypeChange: z,
  onColorVariableChange: H,
  onApplyStyle: W,
  onClose: K,
  keepOpenOnItemSelect: Y,
  dropImageOnPaintThumbnail: q,
  updateStillImageAndSelectionPropertiesForGIF: $,
  disableImagePaints: Z,
  disablePatternPaints: X,
  variableScopes: Q,
  isInStyleModal: J,
  solidPaintOnly: ee,
  disableStyleModal: et,
  paintPickerSessionId: ei,
  hidePatternPaints: en,
  canPickerShowColorContrast: er,
  paintNodeIds: ea,
  minimalUI: es,
  positioningProps: eo
}, el) => {
  let ed = _$$M(el);
  let ec = X7();
  let {
    showDakotaFieldPicker,
    filteredFieldTypes
  } = ZI();
  let em = isSitesFileType();
  let eh = useAppModelPropsShallow('currentPage', 'currentSelectedProperty').currentSelectedProperty.type === NodePropertyCategory.STROKE;
  let [eg, ef, e_] = Tabs.useTabs({
    custom_color: !0,
    library: !0,
    cms: em && showDakotaFieldPicker && !eh
  }, {
    defaultActive: () => il({
      initialView: b,
      isBoundToLibraryAsset: !!e.colorVar || !!i,
      isBoundToCms: !!e.imageVar && e.imageVar.dataType === 'CMS_ALIAS',
      supportedViews: I
    })
  });
  let eA = rW(e, ei);
  let ey = useCallback(e => {
    W && (T7(e, ei), W(e));
  }, [W, ei]);
  let eb = useCallback((e, t) => {
    t && e.type && eA(e.type);
    j(e, t);
  }, [eA, j]);
  let {
    VariableAndStyleCreateModalRoot
  } = useContext(_$$l) ?? {};
  let [eI, eE] = useState(!1);
  let ex = useRef();
  ie(A, I, e_.setActiveTab, eI);
  let eS = useMemo(() => {
    let t = getSolidPaint(e);
    let i = validateGradientPaint(e);
    if (t && t.colorVar?.value?.alias) {
      return {
        type: VariableDataType.ALIAS,
        resolvedType: VariableResolvedDataType.COLOR,
        value: convertKiwiToVariableIdString(t.colorVar.value.alias)
      };
    }
    if (!t && !i) {
      return {
        type: VariableDataType.COLOR,
        resolvedType: VariableResolvedDataType.COLOR,
        value: {
          r: 1,
          g: 1,
          b: 1,
          a: 1
        }
      };
    }
    {
      let e = getColorAtStop(t || i, h);
      return {
        type: VariableDataType.COLOR,
        resolvedType: VariableResolvedDataType.COLOR,
        value: e
      };
    }
  }, [e, h]);
  let ew = useCallback(() => {
    let e = ed.current;
    if (!e) return;
    let t = calculatePickerPositionLeft(e, _$$i);
    ex.current = t;
    eE(!0);
  }, [ed]);
  let eC = useCallback(() => {
    eE(!1);
  }, [eE]);
  useEffect(() => {
    ec && A === DesignGraphElements.DROPPER_COLOR && eE(!1);
  }, [A, ec]);
  let eT = new Set([PropertyScope.ALL_SCOPES]);
  let ek = useIsFullscreenSlidesView();
  let eR = useAtomWithSubscription(TN).length > 0;
  let eN = es ? void 0 : jsx(it, {
    recordingKey: O,
    rightButtons: !J && jsx(IconButton, {
      'aria-label': getI18nString('variables.binding_ui.create_style_or_variable_button_tooltip'),
      'recordingKey': generateRecordingKey(O, 'createVariable'),
      'onClick': ew,
      'htmlAttributes': {
        'data-tooltip': getI18nString('variables.binding_ui.create_style_or_variable_button_tooltip'),
        'data-tooltip-type': KindEnum.TEXT
      },
      'disabled': ek && !eR,
      'children': jsx(SVG, {})
    }),
    tabManager: e_,
    tabProps: eg
  });
  let eP = jsx(ia, {
    canAcceptStyles: void 0 !== W,
    canAcceptVariables: !0,
    canPickerShowColorContrast: er && !J,
    colorFormat: f,
    currentSelectedGradientStop: h,
    currentTool: A,
    disableImagePaints: Z,
    disablePatternPaints: X,
    dropImageOnPaintThumbnail: q,
    dropdownShown: L,
    hidePatternPaints: en,
    minimalUI: es,
    onBlendModeChange: G,
    onChange: eb,
    onClose: K,
    onColorChange: V,
    onKeyDown: M,
    onPaintTypeChange: z,
    paint: e,
    paintId: t,
    paintPickerSessionId: ei,
    recordingKey: O,
    solidPaintOnly: ee,
    updateStillImageAndSelectionPropertiesForGIF: $,
    variableScopes: Q ?? eT
  });
  let eO = es ? eP : jsxs(Fragment, {
    children: [jsx(Tabs.TabPanel, {
      ...ef.custom_color,
      children: eP
    }), jsx(Tabs.TabPanel, {
      ...ef.library,
      children: jsx(is, {
        disabledVariableIds: new Set(),
        selectedItem: i || _$$L2(e),
        recordingKey: generateRecordingKey(O, 'libraryColors'),
        onVariableSelected: H,
        onStyleSelected: W ? ey : void 0,
        onClose: K,
        keepOpenOnItemSelect: Y,
        variableScopes: Q
      })
    }), eg.cms && jsx(Tabs.TabPanel, {
      ...ef.cms,
      children: jsx(_$$h, {
        onClose: K,
        cmsFieldTypes: filteredFieldTypes
      })
    })]
  });
  let eD = jsxs(Fragment, {
    children: [jsx(_$$k2, {
      name: 'paint_picker_v2_modal',
      children: jsx(bL, {
        ref: ed,
        onClose: ({
          source: e
        }) => {
          e !== 'outside' && (EyedropperBindings?.toggleOffEyedropper(), K());
        },
        width: 'sm',
        defaultPosition: eo ? Yl({
          ...eo,
          modalWidth: 240
        }) : y,
        recordingKey: generateRecordingKey(O, 'modal'),
        htmlAttributes: {
          'data-testid': J ? 'paint-picker-v2-style-modal' : 'paint-picker-v2-modal'
        },
        children: jsxs(DialogContents, {
          allowOverflow: !0,
          className: _()({
            'color_picker_v2--hideCloseButton--Q1-f0': es
          }),
          children: [eN, jsx(DialogBody, {
            padding: 0,
            children: eO
          })]
        })
      })
    }), eI && (ex.current && VariableAndStyleCreateModalRoot ? jsx(VariableAndStyleCreateModalRoot, {
      disableStyleModal: et,
      inheritStyleKeyField: a,
      initialPosition: ex.current,
      initialStyleCreationPaint: P,
      initialVariableValue: eS,
      initialView: validateGradientPaint(e) ? 'createStyle' : k,
      onClose: eC,
      onCreateStyle: W,
      onCreateVariable: H,
      resolvedType: VariableResolvedDataType.COLOR
    }) : null)]
  });
  return er ? jsx(ErrorBoundaryCrash, {
    boundaryKey: 'color_picker_with_color_contrast_tool',
    fallback: eD,
    team: ServiceCategories.EDITOR_USABILITY,
    sentryTags: {
      area: ServiceCategories.EDITOR_USABILITY
    },
    children: jsx(ir, {
      paint: e,
      colorFormat: f,
      isCreationModalOpen: eI,
      activeTab: e_.activeTab,
      paintNodeIds: ea,
      children: eD
    })
  }) : eD;
});
function ir({
  paint: e,
  colorFormat: t,
  isCreationModalOpen: i,
  activeTab: a,
  children: s,
  paintNodeIds: o
}) {
  let l = s2(getSolidPaint(e), Rh, t, o);
  let {
    showColorSwatchInfoFlyout,
    setShowColorSwatchInfoFlyout
  } = l.colorContrastInfo;
  useEffect(() => {
    (i || a !== 'custom_color') && setShowColorSwatchInfoFlyout(!1);
  }, [i, setShowColorSwatchInfoFlyout, a]);
  return jsxs(nZ.Provider, {
    value: l,
    children: [s, showColorSwatchInfoFlyout && jsx(_$$tX, {
      foregroundPaint: e
    })]
  });
}
function ia({
  paint: e,
  paintId: t,
  paintPickerSessionId: i,
  currentSelectedGradientStop: s,
  colorFormat: o,
  currentTool: l,
  recordingKey: d,
  dropdownShown: c,
  canAcceptStyles: u,
  canAcceptVariables: p,
  onKeyDown: m,
  onChange: g,
  onColorChange: f,
  onBlendModeChange: b,
  onPaintTypeChange: v,
  variableScopes: x,
  dropImageOnPaintThumbnail: S,
  updateStillImageAndSelectionPropertiesForGIF: w,
  disableImagePaints: C,
  disablePatternPaints: T,
  hidePatternPaints: k,
  solidPaintOnly: R,
  canPickerShowColorContrast: N,
  minimalUI: O,
  onClose: L
}) {
  let F = useDispatch<AppDispatch>();
  let U = Ep();
  let B = X7();
  let H = useCounter();
  let Y = useRef(null);
  let q = trackDefinedFileEventWithStore();
  let $ = useCurrentUserOrgId();
  let Z = getCurrentTeam()?.id;
  let X = getSolidPaint(e);
  let Q = validateGradientPaint(e);
  let J = getImageOrVideoPaint(e);
  let ee = getPatternPaint(e);
  let et = getNoisePaint(e);
  let ei = J && !!w && !!S;
  let en = !X && !Q && !ei && !ee;
  let er = useContext(nZ);
  let ea = er.showColorContrast && N;
  let es = useRef(!1);
  useEffect(() => {
    !es.current && N && X && !1 === er.colorContrastInfo.standardMet && (q('color_contrast.color_not_compliant_on_open', {}), es.current = !0);
  }, [N, er.colorContrastInfo.standardMet, X, q, $, Z]);
  let eo = useId();
  return jsxs(Fragment, {
    children: [!O && jsx('div', {
      className: _()('color_picker_v2--typeAndBlendMode---Ry3A', {
        'color_picker_v2--noBorder--1SBk9': en
      }),
      children: (B || !R) && jsxs(Fragment, {
        children: [jsx(eC, {
          figPaintType: e.type,
          onChange: v,
          disableImagePaints: C,
          disablePatternPaints: T,
          hidePatternPaints: k,
          recordingKey: getFeatureFlags().eu_fpl_colors_tab ? d : generateRecordingKey(d, 'paintTypeGroupTabs')
        }), jsxs('div', {
          className: 'color_picker_v2--rightButtons--d-dbS',
          children: [jsx(Rk, {
            blendMode: e.blendMode || 'NORMAL',
            onBlendModeChange: b,
            dispatch: F,
            dropdownShown: c,
            recordingKey: generateRecordingKey(d, 'blendModeSelection'),
            disabled: R
          }, `color-picker-blend-mode-selection-${t}`), ea && jsx(O1, {
            toggled: er.settings.contrastInfoShown,
            setToggled: er.settings.setIsColorContrastInfoShown,
            recordingKey: generateRecordingKey(d, 'colorContrastButton'),
            panelID: eo
          })]
        })]
      })
    }), ea && jsx(AG, {
      id: eo,
      recordingKey: d,
      onColorChange: f
    }), X && function (e) {
      let t = getColorAtStop(e, s);
      return jsxs(Fragment, {
        children: [jsx(KeyboardReceiver, {
          name: 'Color picker',
          ref: Y,
          handleKeyDown: m,
          focusOnMount: !0,
          forceUpdate: H,
          children: jsx(S7, {
            canAcceptStyles: u,
            canAcceptVariables: p,
            color: t,
            colorFormat: o,
            currentTool: l,
            dispatch: F,
            dropdownShown: c,
            onColorChange: f,
            paintPickerAnalytics: {
              paintType: 'SOLID'
            },
            paintPickerSessionId: i,
            preventAutoFocus: !0,
            recordingKey: generateRecordingKey(d, 'colorControls')
          })
        }), jsx(e7, {
          recordingKey: d,
          onChange: f,
          onlySupportCurrentPage: !!O
        })]
      });
    }(X), Q && (Q ? jsx(tN, {
      colorProfile: U,
      currentSelectedGradientStop: s,
      onChange: g,
      onKeyDown: m,
      onPaintTypeChange: v,
      paint: Q,
      recordingKey: generateRecordingKey(d, 'gradientEditor'),
      variableScopes: x
    }) : null), ei ? jsx(SY, {
      dispatch: F,
      dropImageOnPaintThumbnail: S,
      dropdownShown: c,
      onChange: g,
      onClose: L,
      paint: J,
      paintId: t,
      recordingKey: generateRecordingKey(d, 'imageSettings'),
      updateStillImageAndSelectionPropertiesForGIF: w
    }) : null, getFilteredFeatureFlags().ce_il_pattern && ee && jsx(t9, {
      paint: ee,
      dispatch: F,
      onChange: g,
      recordingKey: generateRecordingKey(d, 'patternSettings')
    }), getFilteredFeatureFlags().ce_il_noise && et && jsx(tz, {
      paint: et,
      dispatch: F,
      onChange: g
    })]
  });
}
function is({
  selectedItem: e,
  disabledVariableIds: t,
  recordingKey: i,
  onVariableSelected: r,
  onStyleSelected: a,
  onClose: s,
  keepOpenOnItemSelect: o,
  variableScopes: l
}) {
  return jsx(Rp, {
    disabledVariableIds: t,
    keepOpenOnItemSelect: o,
    onClose: s,
    onStyleSelected: a,
    onVariableSelected: r,
    pickerType: 'color-picker',
    recordingKey: i,
    resolvedType: VariableResolvedDataType.COLOR,
    selectedItem: e,
    variableScopes: l
  });
}
export function $$io0({
  color: e,
  boundVariable: t,
  disabledVariableIds: i,
  initialPosition: s,
  initialView: m,
  recordingKey: h,
  onChange: g,
  onVariableChange: f,
  onClose: _,
  hideLibraryContainer: A,
  variableScopes: y,
  isVariableCreationEnabled: b = !1
}) {
  let v = useDispatch<AppDispatch>();
  let I = useDropdownState();
  let S = getColorFormat();
  let C = useCurrentTool();
  let T = useMemo(() => f ? ['custom_color', 'library'] : ['custom_color'], [f]);
  let [R, N, P] = Tabs.useTabs({
    custom_color: T.includes('custom_color'),
    library: T.includes('library'),
    cms: !1
  }, {
    defaultActive: () => il({
      initialView: m,
      isBoundToLibraryAsset: !!t,
      supportedViews: T
    })
  });
  let D = P.activeTab;
  useEffect(() => {
    m && m !== D && P.setActiveTab(m);
  }, [m]);
  let M = useRef(null);
  let [j, V] = useState(!1);
  let G = useRef();
  let z = VariableResolvedDataType.COLOR;
  let H = useMemo(() => t?.node_id ? {
    type: VariableDataType.ALIAS,
    resolvedType: z,
    value: t.node_id
  } : e ? {
    type: VariableDataType.COLOR,
    resolvedType: z,
    value: e
  } : void 0, [t, e, z]);
  function K() {
    let e = M.current;
    if (!e) return;
    let t = calculatePickerPositionLeft(e, _$$i);
    G.current = t;
    V(!0);
  }
  let Y = useSetupPlayback(h || 'color_picker', 'close', useCallback(() => {
    EyedropperBindings?.toggleOffEyedropper();
    _ ? _() : v(hidePickerThunk());
  }, [_, v]));
  ie(C, T, P.setActiveTab, !1);
  return jsxs(_$$k2, {
    name: 'color_picker',
    children: [jsx(bL, {
      ref: M,
      width: 'sm',
      defaultPosition: s,
      onClose: ({
        source: e,
        target: t
      }) => {
        e === 'outside' && t && t.closest('#fullscreen-root') || Y();
      },
      recordingKey: generateRecordingKey(h, 'modal'),
      children: jsxs(DialogContents, {
        allowOverflow: !0,
        children: [jsx(it, {
          rightButtons: function () {
            if (b) {
              return jsx(IconButton, {
                'aria-label': getI18nString('variables.binding_ui.create_variable_button_tooltip'),
                'recordingKey': generateRecordingKey(h, 'createVariable'),
                'onClick': K,
                'htmlAttributes': {
                  'data-tooltip': getI18nString('variables.binding_ui.create_variable_button_tooltip'),
                  'data-tooltip-type': KindEnum.TEXT
                },
                'children': jsx(SVG, {})
              });
            }
          }(),
          recordingKey: h,
          tabManager: P,
          tabProps: R
        }), jsxs(DialogBody, {
          padding: 0,
          children: [jsxs(Tabs.TabPanel, {
            ...N.custom_color,
            children: [jsx(S7, {
              canAcceptStyles: !1,
              canAcceptVariables: void 0 !== f,
              color: e,
              colorFormat: S,
              currentTool: C,
              dispatch: v,
              dropdownShown: I,
              onColorChange: g,
              preventAutoFocus: !0,
              recordingKey: generateRecordingKey(h, 'colorControls')
            }), !A && jsx(e7, {
              onChange: g,
              recordingKey: h
            })]
          }), jsx(Tabs.TabPanel, {
            ...N.library,
            children: jsx(is, {
              selectedItem: t,
              disabledVariableIds: i,
              recordingKey: generateRecordingKey(h, 'libraryColors'),
              onVariableSelected: f,
              variableScopes: y,
              onClose: Y
            })
          })]
        })]
      })
    }), j && (G.current && f ? jsx(_$$U, {
      initialPosition: G.current,
      initialValue: H,
      initialWidth: _$$i,
      resolvedType: VariableResolvedDataType.COLOR,
      onCreateVariable: f,
      onClose() {
        V(!1);
      }
    }) : null)]
  });
}
function il({
  initialView: e,
  isBoundToLibraryAsset: t,
  isBoundToCms: i,
  supportedViews: n
}) {
  let r;
  return (r = e || (t ? 'library' : i ? 'cms' : 'custom_color'), n && !n.includes(r)) ? n[0] : r;
}
export const h = $$io0;
export const q = $$ii1;
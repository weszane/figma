import { props } from '@stylexjs/stylex';
import m from 'classnames';
import { memo, PureComponent, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { N as _$$N } from '../642/994749';
import { reportError } from '../905/11';
import { k as _$$k2 } from '../905/44647';
import { KeyCodes } from '../905/63728';
import { l as _$$l } from '../905/103989';
import { useNavigateToViewport } from '../905/104740';
import { KindEnum } from '../905/129884';
import { ServiceCategories } from '../905/165054';
import { setupToggleButton } from '../905/167712';
import { R as _$$R } from '../905/256203';
import { fullscreenHandler } from '../905/258517';
import { getI18nString } from '../905/303541';
import { s as _$$s2 } from '../905/403855';
import { globalPerfTimer } from '../905/542194';
import { useIsFullscreenSitesView } from '../905/561485';
import { conditionalWrapper } from '../905/579635';
import { getFeatureFlags } from '../905/601108';
import { r as _$$r2 } from '../905/619088';
import { ButtonPrimitive } from '../905/632989';
import { f as _$$f2 } from '../905/640587';
import { textDisplayConfig } from '../905/687265';
import { getSingletonSceneGraph } from '../905/700578';
import { SvgComponent } from '../905/714743';
import { getFilteredFeatureFlags } from '../905/717445';
import { DDRenderMode } from '../905/749197';
import { styleBuilderInstance } from '../905/941192';
import { O as _$$O } from '../905/969533';
import { S as _$$S } from '../905/999953';
import { A as _$$A3 } from '../b2835def/15890';
import { A as _$$A4 } from '../b2835def/221154';
import { A as _$$A } from '../b2835def/291355';
import { A as _$$A5 } from '../b2835def/405864';
import { A as _$$A2 } from '../b2835def/566447';
import { A as _$$A6 } from '../b2835def/597304';
import { A as _$$A7 } from '../b2835def/864187';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { useIsFullscreenSlidesView } from '../figma_app/21029';
import { useAtomWithSubscription } from '../figma_app/27355';
import { gdM, yj4 } from '../figma_app/27776';
import { computeFullscreenViewportForNode } from '../figma_app/62612';
import { eC as _$$eC, Fj } from '../figma_app/76123';
import { getObservableOrFallback } from '../figma_app/84367';
import { g$, qW } from '../figma_app/116234';
import { useDeepEqualSceneValue } from '../figma_app/167249';
import { nodeStateFamily } from '../figma_app/178273';
import { Bf } from '../figma_app/249941';
import { isSpecialType } from '../figma_app/387100';
import { A0, Br, sq } from '../figma_app/454974';
import { gz } from '../figma_app/605071';
import { $E, r as _$$r, _k, a6, bY, cb, cm, co, Cr, ct, dK, DT, Fq, GE, Gt, hF, HL, HR, HY, hz, Hz, i9, iE, Io, J0, j3, KJ, lh, M4, n4, nM, OI, Os, ow, pS, pZ, qg, qm, QW, r9, rS, sc, sz, t$, TY, u4, uC, uW, V0, V3, vp, wH, Wm, WO, xE, xG, xt, Xv, XW, yk, yo, Zt, Zu } from '../figma_app/622978';
import { ks } from '../figma_app/626177';
import { JT } from '../figma_app/632248';
import { y0 } from '../figma_app/718307';
import { EditorPreferencesApi } from '../figma_app/740163';
import { ActionType, SceneGraphHelpers } from '../figma_app/763686';
import { parsePxNumber } from '../figma_app/783094';
import { indentWidthWithMargin, rowActionsWidth, scrollBarYWidth, trackPadding } from '../figma_app/786175';
import { getExplicitModeNames } from '../figma_app/852050';
import { generateRecordingKey, SKIP_RECORDING, useHandleChangeEvent, useHandleGenericEvent, useHandleKeyboardEvent, useHandleMouseEvent } from '../figma_app/878298';
import { handleKeyboardEventByState, KeyboardEventResponse } from '../figma_app/896988';
import { formatList } from '../figma_app/930338';
import { Rt, Zy } from '../figma_app/945858';
import { pr } from '../figma_app/952446';
import { useSelector } from 'react-redux';
let g = m;
function W({
  modeNames: e
}) {
  if (e.length === 0) return null;
  let t = e.length === 1 ? e[0] : `${e[0]} + ${e.length - 1}`;
  return jsx('div', {
    'className': Io,
    'data-testid': 'variable-mode-pill',
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': getI18nString('variables.mode_pill.tooltip', {
      listOfModes: formatList(e)
    }),
    'children': jsx('div', {
      className: XW,
      children: t
    })
  });
}
function el() {
  return jsx('div', {
    className: cssBuilderInstance.flex.itemsCenter.justifyCenter.$,
    children: jsx('div', {
      className: xE
    })
  });
}
class ea extends PureComponent {
  constructor() {
    super(...arguments);
    this.expandMouseDown = e => {
      this.props.expandMouseDown(this.props.guid, e);
    };
  }
  renderNodeIndents() {
    let e = [];
    for (let t = 0; t < this.props.level + 1; t++) {
      let s = `[${t}]`;
      let n = this.props.isLastMaskedAtLevels.includes(s);
      let i = this.props.isMaskedAtLevels.includes(s);
      let l = t === this.props.level && this.props.mask;
      let a = t === this.props.level && this.props.hasChildren;
      let o = g()(dK, co, {
        [TY]: this.props.displayOrder === DDRenderMode.DOM
      });
      e.push(jsx('span', {
        className: pZ
      }, t));
      n ? e.push(jsx(SvgComponent, {
        svg: a ? _$$A5 : _$$A6,
        className: o
      }, `${t}-mask`)) : i ? e.push(jsx(SvgComponent, {
        svg: a ? _$$A4 : _$$A3,
        className: o
      }, `${t}-mask`)) : l && e.push(jsx(SvgComponent, {
        svg: a ? _$$A2 : _$$A,
        className: o
      }, `${t}-mask`));
      this.props.hasBullet && t === this.props.level ? e.push(jsx(ButtonPrimitive, {
        recordingKey: generateRecordingKey(this.props, 'expandCaret'),
        className: OI,
        actionOnPointerDown: !0,
        onClick: this.expandMouseDown,
        htmlAttributes: {
          'data-testid': this.props.isMeasurementNode ? void 0 : 'new-frame-bullet'
        },
        children: jsx(el, {})
      }, 'expand-caret')) : a && e.push(jsx(ButtonPrimitive, {
        recordingKey: generateRecordingKey(this.props, 'expandCaret'),
        className: g()(GE, Fq),
        actionOnPointerDown: !0,
        onClick: this.expandMouseDown,
        children: this.props.isExpanded ? jsx(_$$O, {}) : jsx(_$$k2, {})
      }, 'expand-caret'));
    }
    return e;
  }
  render() {
    return jsx('span', {
      ref: this.props.indentsRefCallback,
      className: Wm,
      children: this.renderNodeIndents()
    });
  }
}
ea.displayName = 'Indents';
let eh = memo(e => {
  let {
    locked,
    isAncestorLocked,
    onMouseDown,
    recordingKey
  } = e;
  let a = useRef(null);
  let o = useCallback(e => {
    e && onMouseDown(e);
  }, [onMouseDown]);
  let d = useHandleMouseEvent(recordingKey, 'mousedown', o);
  let c = useMemo(() => ({
    onMouseDown: d,
    onKeyDownCapture: e => {
      (e?.code === 'Space' || e?.key === 'Enter') && d(new MouseEvent('mousedown', {
        altKey: e.altKey
      }));
    },
    onMouseLeave: () => {
      a?.current && document?.activeElement === a?.current && a.current?.blur();
    },
    onDoubleClick: e => e.stopPropagation()
  }), [d]);
  let u = useMemo(() => isAncestorLocked && !locked ? Zy : jsx(_$$s2, {
    'data-testid': 'locked-icon'
  }), [isAncestorLocked, locked]);
  let p = useMemo(() => jsx(_$$r2, {
    'data-testid': 'unlocked-icon'
  }), []);
  return jsx('span', {
    className: hz,
    children: jsx(setupToggleButton, {
      'ref': a,
      'aria-label': getI18nString('fullscreen.object_row.toggle_lock'),
      'checked': locked || isAncestorLocked,
      'onIcon': u,
      'offIcon': p,
      'htmlAttributes': c
    })
  });
});
let em = memo(e => {
  return jsx('svg', {
    width: '16',
    height: '16',
    fill: 'none',
    viewBox: '0 0 16 16',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M8 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1H10v8h.5a.5.5 0 1 1 0 1h-2a.5.5 0 0 1 0-1H9V4h-.5a.5.5 0 0 1-.5-.5m3 2a.5.5 0 0 1 .5-.5h1A1.5 1.5 0 0 1 14 6.5v3a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5M2.5 7a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 .5.5h4a.5.5 0 1 1 0 1h-4A1.5 1.5 0 0 1 2 9.5v-2a.5.5 0 0 1 .5-.5m2.515-3.56L4.7 4.7l-1.26.315c-.505.126-.505.844 0 .97L4.7 6.3l.315 1.26c.126.505.844.505.97 0L6.3 6.3l1.26-.315c.505-.126.505-.844 0-.97L6.3 4.7l-.315-1.26c-.126-.505-.844-.505-.97 0',
      clipRule: 'evenodd'
    })
  });
});
function ex({
  disabled: e
}) {
  let t = useMemo(() => ({
    'data-tooltip-type': KindEnum.SPECIAL,
    'data-tooltip-show-above': !0,
    'data-tooltip-timeout-delay': 50,
    'data-tooltip': _$$S,
    'data-tooltip-ai-beta-text': getI18nString('fullscreen.context_menu.auto_rename_layers'),
    'data-tooltip-ai-beta-action': JT.AUTO_RENAME_LAYERS
  }), []);
  return jsx(ButtonPrimitive, {
    className: J0,
    onClick: () => {
      Br({
        source: ActionType.LAYERS_PANEL_ACTION_ROW,
        trackingDataSource: 'layers_panel_action_row'
      });
    },
    htmlAttributes: e ? void 0 : t,
    disabled: e,
    children: jsx(em, {})
  });
}
function eb({
  guid: e,
  isWebpage: t
}) {
  let s = useIsFullscreenSitesView();
  let n = getObservableOrFallback(EditorPreferencesApi().showSemanticTagsOnLayerRows);
  let i = useDeepEqualSceneValue((e, s) => {
    let r = e.get(s);
    if (!r) {
      return {
        htmlTag: void 0,
        nodeType: void 0,
        isVectorLike: !1,
        isLink: !1,
        isButton: !1,
        hasImageFill: !1,
        isWebpage: t ?? !1
      };
    }
    let n = !!r.hyperlink || (r.prototypeInteractions ?? []).some(e => e.event?.interactionType === 'ON_CLICK' && e.actions?.some(e => e.connectionType === 'URL' || e.connectionType === 'INTERNAL_NODE' && e.navigationType === 'NAVIGATE'));
    let i = !n && (r.prototypeInteractions ?? []).some(e => e.event?.interactionType === 'ON_CLICK');
    return {
      htmlTag: r.accessibleHTMLTag,
      nodeType: r.type,
      isVectorLike: r.isVectorLike,
      isLink: n,
      isButton: i,
      hasImageFill: r.type === 'FRAME' && (r.fills?.some(e => e.type === 'IMAGE') ?? !1),
      isWebpage: t ?? !1
    };
  }, e);
  if (!(s && getFeatureFlags().sts_a11y_layers_semantic_tags && n)) return null;
  let l = !i.htmlTag || i.isWebpage ? null : i.htmlTag === 'AUTO' ? i.isLink ? 'a' : i.isButton ? 'button' : i.isVectorLike ? 'svg' : i.nodeType === 'FRAME' && i.hasImageFill ? 'img' : i.nodeType === 'TEXT' ? 'p' : 'div' : i.htmlTag.toLowerCase();
  return l ? jsx('span', {
    ...props(eC.semanticTagLabel),
    children: l
  }) : null;
}
let eC = {
  semanticTagLabel: {
    ...textDisplayConfig.textBodyMedium,
    textAlign: 'x1hr2gdg',
    fontFamily: 'xwjs1nl',
    color: 'xtd9kr2',
    paddingRight: 'x1jwbysl',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    flexShrink: 'x2lah0s',
    $$css: !0
  }
};
let eS = memo(e => {
  let {
    visible,
    isAncestorHidden,
    onMouseDown,
    recordingKey
  } = e;
  let a = useRef(null);
  let o = useCallback(e => {
    e && onMouseDown(e);
  }, [onMouseDown]);
  let d = useHandleMouseEvent(recordingKey, 'mousedown', o);
  let c = useMemo(() => ({
    'onMouseDown': d,
    'onKeyDownCapture': e => {
      (e?.code === 'Space' || e?.key === 'Enter') && d(new MouseEvent('mousedown', {
        altKey: e.altKey
      }));
    },
    'onMouseLeave': () => {
      a?.current && document?.activeElement === a?.current && a.current?.blur();
    },
    'onDoubleClick': e => e.stopPropagation(),
    'data-testid': 'object-row-toggle-visibility'
  }), [d]);
  let u = useMemo(() => isAncestorHidden ? Zy : jsx(_$$l, {
    'data-testid': 'visible-icon'
  }), [isAncestorHidden]);
  let p = useMemo(() => jsx(_$$f2, {
    'data-testid': 'hidden-icon'
  }), []);
  return jsx('span', {
    className: yk,
    children: jsx(setupToggleButton, {
      'ref': a,
      'aria-label': getI18nString('fullscreen.object_row.toggle_visibility'),
      'checked': visible,
      'onIcon': u,
      'offIcon': p,
      'htmlAttributes': c
    })
  });
});
eS.displayName = 'VisibilityToggle';
export let $$eN0 = 'layer-panel-onboarding-key';
export function $$eI2(e) {
  let t = useIsFullscreenSitesView();
  let s = useIsFullscreenSlidesView();
  let r = (e.abbreviatedStateName || e.name).replace(/\n/, ' ');
  if (t && e.isWebpage && e.isDefaultResponsiveSet ? r = getI18nString('sites.panel.home') : s && e.nodeType === 'SLIDE' && (r = getI18nString('slides.layers_panel.slide_number', {
    orderNum: e.name
  })), e.shouldShowGuids) {
    let t = SceneGraphHelpers.getOverridePathForNode(e.guid);
    return `${r} (${e.guid}): [${t}]`;
  }
  return r;
}
function eE({
  isPrimaryBreakpoint: e
}) {
  return jsx('div', {
    className: cssBuilderInstance.flex.$,
    children: e && jsx('span', {
      className: cssBuilderInstance.colorTextBrand.pr8.$,
      children: getI18nString('sites.panel.primary')
    })
  });
}
function eM(e) {
  let [t, s] = useState(null);
  let [i, l] = useState(!1);
  let a = useIsFullscreenSitesView();
  let o = useAtomWithSubscription(nodeStateFamily(e.guid));
  let {
    showVisualLayerIcons
  } = useContext(y0);
  useEffect(() => {
    s(e.isRenaming ? e.name : null);
  }, [e.name, e.isRenaming]);
  let c = $$eI2({
    abbreviatedStateName: e.abbreviatedStateName,
    guid: e.guid,
    shouldShowGuids: e.shouldShowGuids,
    name: e.name,
    isDefaultResponsiveSet: e.isDefaultResponsiveSet,
    isWebpage: e.isWebpage,
    nodeType: e.nodeType
  });
  let u = useHandleMouseEvent(e.recordingKey, e.focusOnSingleClick ? 'click' : 'dblclick', () => {
    fullscreenHandler.trackFromFullscreen('action_rename_selection', {
      source: 'click'
    });
    e.startRenaming(e.guid);
  });
  let h = useRef(null);
  let m = useCallback(e => {
    e && (h.current = e, h.current.select());
  }, []);
  let f = useHandleChangeEvent(e.recordingKey, 'change', e => {
    s(e.currentTarget?.value);
  });
  let x = useHandleKeyboardEvent(e.recordingKey, 'keydown', t => {
    if (!i) {
      if (t.keyCode === KeyCodes.ESCAPE) {
        e.stopRenaming(!1);
      } else if (t.keyCode === KeyCodes.ENTER) {
        e.stopRenaming(!0, h.current?.value, c);
      } else {
        if (t.keyCode !== KeyCodes.TAB) {
          handleKeyboardEventByState(t, KeyboardEventResponse.NO);
          return SKIP_RECORDING;
        }
        t.preventDefault();
        e.stopRenaming(!0, h.current?.value, c);
        t.shiftKey ? e.prevNodeGuid && e.startRenaming(e.prevNodeGuid) : e.nextNodeGuid && e.startRenaming(e.nextNodeGuid);
      }
    }
  });
  let C = useHandleGenericEvent(e.recordingKey, 'blur', () => {
    e.stopRenaming(!0, h.current?.value, c);
  });
  let k = !e.isFixedOnHScroll;
  let w = showVisualLayerIcons && getFilteredFeatureFlags().ce_il_root;
  return jsxs(Fragment, {
    children: [w ? jsx(_$$N, {
      guid: e.guid,
      size: e.iconSize,
      navigateAndPanTo: e.navigateAndPanTo,
      isMeasurementNode: e.isMeasurementNode,
      rowSelected: e.isSelected
    }) : jsx(Bf, {
      disabled: e.disabled,
      guid: e.guid,
      hovered: e.hovered,
      isDefaultResponsiveSet: e.isDefaultResponsiveSet,
      locked: e.locked,
      navigateAndPanTo: e.navigateAndPanTo,
      outOfView: e.outOfView,
      panelType: e.panelType,
      scrollLeft: e.scrollLeft,
      useUI3Icon: e.useUI3Icons
    }), (e.isThumbnail || e.isFavicon || e.isSocialImage) && jsx(SvgComponent, {
      'data-tooltip': e.isFavicon ? getI18nString('fullscreen.object_row.favicon') : e.isSocialImage ? getI18nString('fullscreen.object_row.social_image') : getI18nString('fullscreen.object_row.file_thumbnail'),
      'data-tooltip-show-above': !0,
      'data-tooltip-type': KindEnum.TEXT,
      'className': V3,
      'svg': _$$A7
    }), e.isRenaming && jsx(ks, {
      autoCapitalize: 'off',
      autoCorrect: 'off',
      className: g()(hF, e.inputTextOverridesClassName),
      innerRef: m,
      onBlur: C,
      onChange: f,
      onCompositionEnd: () => l(!1),
      onCompositionStart: () => l(!0),
      onKeyDown: x,
      spellCheck: !1,
      value: t !== null ? t : e.name
    }), !e.isRenaming && jsxs('span', {
      className: g()(qg, e.staticTextOverridesClassName, {
        [cssBuilderInstance.justifyBetween.$]: a,
        [cssBuilderInstance.eventsAuto.$]: e.isFixedOnHScroll
      }),
      onDoubleClick: e.focusOnSingleClick ? void 0 : u,
      onClick: e.focusOnSingleClick ? u : void 0,
      dir: 'auto',
      children: [jsx('div', {
        className: Xv,
        ref: e.layerNamePlaceholderRef,
        children: c
      }), jsx('div', {
        className: g()(_k, {
          [_$$r]: !k || e.isHovered || e.hasSemanticLabel
        }),
        ref: e.layerNameRef,
        children: o && o.state !== 'pending' ? o.name : c
      }), e.explicitVariableModeNames && e.explicitVariableModeNames.length > 0 && jsx('div', {
        className: pS,
        children: jsx(W, {
          modeNames: e.explicitVariableModeNames
        })
      }), !e.isHovered && a && jsx(eE, {
        isPrimaryBreakpoint: e.isPrimaryBreakpoint
      })]
    })]
  });
}
let eA = memo(e => {
  let t;
  globalPerfTimer.start('object-row-inner-render-timer');
  let {
    topLevelObjectRowHeight,
    nestedObjectRowHeight,
    rowSelectionGap,
    topLevelIconSize,
    nestedIconSize,
    boldLayerNames
  } = useContext(y0);
  let S = useRef(null);
  let [I, E] = useState(null);
  let [M, A] = useState(null);
  let O = useCallback(e => {
    E(e);
  }, []);
  let V = useCallback(e => {
    A(e);
  }, []);
  let U = useAtomWithSubscription(_$$eC);
  t = e.guid;
  let W = useAtomWithSubscription(Fj).has(t);
  let [$, Y] = useState(!1);
  let [X, q] = useState(!1);
  let J = useDeepEqualSceneValue((e, t) => e.get(t)?.name ?? '', e.guid);
  let Z = useDeepEqualSceneValue((e, t) => {
    let s = e.get(t);
    return s && s.isState ? s.stateAbbreviatedName : null;
  }, e.guid);
  let Q = $$eI2({
    abbreviatedStateName: Z,
    name: J,
    shouldShowGuids: e.shouldShowGuids,
    guid: e.guid,
    isDefaultResponsiveSet: e.isDefaultResponsiveSet,
    isWebpage: e.isWebpage,
    nodeType: e.nodeType
  });
  let ee = useCallback(() => {
    let e = S.current;
    return !!e && e.scrollWidth > e.offsetWidth;
  }, []);
  let et = useCallback(() => {
    Y(ee());
  }, [Y, ee]);
  let {
    onContextMenu
  } = e;
  let er = useHandleMouseEvent(e.recordingKey, 'contextmenu', useCallback(t => {
    onContextMenu && onContextMenu(e.guid, t);
  }, [onContextMenu, e.guid]));
  let {
    onMouseEnter
  } = e;
  let ei = useCallback(t => {
    et();
    q(!0);
    onMouseEnter && onMouseEnter(e.guid, t);
  }, [onMouseEnter, e.guid, et]);
  let el = useCallback(() => {
    q(!1);
  }, []);
  let {
    lockMouseDown
  } = e;
  let ed = useCallback(t => {
    lockMouseDown && lockMouseDown(e.guid, t);
  }, [lockMouseDown, e.guid]);
  let {
    visibleMouseDown
  } = e;
  let eu = useCallback(t => {
    visibleMouseDown && visibleMouseDown(e.guid, t);
  }, [visibleMouseDown, e.guid]);
  let {
    onDragStartCallback
  } = e;
  let eg = useCallback(t => {
    t.dataTransfer.effectAllowed = 'none';
    onDragStartCallback != null && onDragStartCallback(e.guid, t);
  }, [onDragStartCallback, e.guid]);
  let {
    onDragOverCallback
  } = e;
  let ey = useCallback(t => {
    onDragOverCallback != null && onDragOverCallback(e.guid, t);
  }, [onDragOverCallback, e.guid]);
  let {
    onDragDropCallback
  } = e;
  let eC = useCallback(t => {
    onDragDropCallback != null && onDragDropCallback(e.guid, t);
  }, [onDragDropCallback, e.guid]);
  let {
    onDragEnterCallback
  } = e;
  let ev = useCallback(t => {
    onDragEnterCallback != null && onDragEnterCallback(e.guid, t);
  }, [onDragEnterCallback, e.guid]);
  let {
    onDragLeaveCallback
  } = e;
  let eE = useCallback(t => {
    onDragLeaveCallback != null && onDragLeaveCallback(e.guid, t);
  }, [onDragLeaveCallback, e.guid]);
  let eA = useCallback(() => e.nodeMemoryUsage != null && e.rootMemoryUsage != null ? pr(e.nodeMemoryUsage, e.rootMemoryUsage, !0) : (reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, new Error('node memory usage or root memory usage is null')), ''), [e.nodeMemoryUsage, e.rootMemoryUsage]);
  let eP = !e.visible || e.isAncestorHidden && e.panelType !== g$.CodeComponent;
  let eL = e.locked || e.isAncestorLocked;
  let eR = (e.level + 3) * parsePxNumber(indentWidthWithMargin);
  let eO = parsePxNumber(scrollBarYWidth) + parsePxNumber(trackPadding);
  let eD = void 0 !== e.panelWidth && eR + eO > e.panelWidth + e.scrollLeft;
  let eF = e.level === 0;
  let eB = A0(ActionType.LAYERS_PANEL_ACTION_ROW);
  let eK = getSingletonSceneGraph().get(e.guid);
  let eG = eB && eF && X && eK && sq(eK);
  let eH = e.nodeType !== 'REACT_FIBER' && e.nodeType !== 'SLIDE';
  let eV = useAtomWithSubscription(nodeStateFamily(e.guid))?.state === 'pending';
  let eU = getObservableOrFallback(EditorPreferencesApi().showSemanticTagsOnLayerRows);
  let ez = !X && getFeatureFlags().sts_a11y_layers_semantic_tags && eU;
  let eW = eF ? topLevelObjectRowHeight : nestedObjectRowHeight;
  let e$ = eF ? topLevelIconSize : nestedIconSize;
  let eY = {
    'transform': `translate3d(0px, ${e.top}px, 0)`,
    'height': eW,
    '--row-actions-width': eG ? gdM : yj4,
    '--object-row-height': `${eW}px`,
    '--selection-height': `${eW - 2 * rowSelectionGap}px`
  };
  let eX = e.fixed && e.panelWidth !== 0;
  let eq = e.nodeType === 'FRAME';
  let eJ = g()({
    [nM]: !0,
    [M4]: eF,
    [Gt]: eq && !Rt(e) && !e.resizeToFit && !e.isStateGroup,
    [Os]: eq && !Rt(e) && e.resizeToFit,
    [t$]: eq && Rt(e),
    [DT]: e.isStateGroup,
    [a6]: isSpecialType(e.nodeType),
    [uW]: e.nodeType === 'SECTION',
    [HR]: e.nodeType === 'SYMBOL',
    [rS]: e.nodeType === 'CODE_COMPONENT',
    [bY]: e.nodeType === 'CODE_INSTANCE',
    [$E]: e.componentLike,
    [qm]: e.layerLikeCodeNode || e.nodeType === 'REACT_FIBER',
    [xG]: e.nodeType === 'MODULE',
    [KJ]: e.nodeType === 'INSTANCE',
    [iE]: e.isStamp,
    [Zt]: e.nodeType === 'HIGHLIGHT',
    [HL]: e.nodeType === 'WIDGET' || e.isWidgetSublayer,
    [j3]: e.isDescendantOfSymbol,
    [cb]: e.isDescendantOfInstanceExcludingSlotSublayers,
    [vp]: e.isDescendantOfModule,
    [dK]: e.mask,
    [WO]: qW(e.panelType),
    [i9]: e.isWebpage,
    [Cr]: boldLayerNames,
    [Zu]: !!eX,
    [lh]: !!e.layerAbove,
    [yo]: e.isHovered,
    [wH]: e.isSelected,
    [ct]: e.isAncestorSelected,
    [r9]: eP,
    [xt]: eL,
    [sz]: e.hasChildren && e.isExpanded,
    [uC]: e.isLayerAboveSelected && e.isLayerBelowSelected,
    [ow]: e.isLayerAboveSelected && !e.isLayerBelowSelected,
    [sc]: e.isLayerBelowSelected && !e.isLayerAboveSelected
  });
  let eZ = e.versionHistory?.activeId && e.versionHistory.activeId === 'current_version';
  let eQ = e.showMemoryUsage && e.showInFileMemoryPercentage && !e.isRenaming && eZ;
  let {
    registerWidth
  } = gz();
  let e1 = !!eX;
  let {
    observeWithResizeObserver,
    unobserveWithResizeObserver
  } = e;
  useEffect(() => {
    if (I && M) {
      if (e1) return;
      let t = () => {
        let t = I.getBoundingClientRect().right - M.getBoundingClientRect().left + parsePxNumber(rowActionsWidth);
        registerWidth(e.guid, t);
      };
      t();
      observeWithResizeObserver(I, t);
      observeWithResizeObserver(M, t);
      return () => {
        unobserveWithResizeObserver(I);
        unobserveWithResizeObserver(M);
      };
    }
  }, [e1, I, M, e.guid, registerWidth, observeWithResizeObserver, unobserveWithResizeObserver]);
  useEffect(() => {
    let e = 'object-row-inner-render-timer';
    let t = globalPerfTimer.get(e);
    t && t.isRunning && !t.isUnreliable && globalPerfTimer.tryStop(e);
  });
  let e4 = jsxs(Fragment, {
    children: [eG && jsx(ex, {
      disabled: eV
    }), eH && jsx(eh, {
      recordingKey: generateRecordingKey(e, 'lockIcon'),
      locked: e.locked,
      isAncestorLocked: e.isAncestorLocked,
      onMouseDown: ed
    }), eH && jsx(eS, {
      recordingKey: generateRecordingKey(e, 'visibleIcon'),
      visible: e.visible,
      isAncestorHidden: e.isAncestorHidden,
      onMouseDown: eu
    })]
  });
  let e5 = !e.hideRowActions && !e.isRenaming && !e.isReadOnly && !e.isDragging && !eD;
  let e6 = jsx('div', {
    'className': u4,
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': $ ? Q : null,
    'data-tooltip-max-lines': 4,
    'data-tooltip-show-immediately': !0,
    'data-tooltip-hide-immediately': !0,
    'data-tooltip-show-right': !0,
    'data-tooltip-text-left': !0,
    'style': void 0 === e.panelWidth ? void 0 : {
      width: e1 ? `${e.panelWidth}px` : `${e.panelWidth + e.scrollLeft}px`
    },
    'children': function (t = !1) {
      return jsxs(Fragment, {
        children: [jsx(ea, {
          currentPage: e.currentPage,
          disabled: eP,
          dispatch: e.dispatch,
          displayOrder: e.displayOrder,
          expandMouseDown: e.expandMouseDown,
          guid: e.guid,
          hasBullet: W,
          hasChildren: e.hasChildren,
          hovered: e.isHovered,
          indentsRefCallback: V,
          isExpanded: e.isExpanded,
          isLastMaskedAtLevels: e.isLastMaskedAtLevels,
          isMaskedAtLevels: e.isMaskedAtLevels,
          isMeasurementNode: t,
          level: e.level,
          locked: eL,
          mask: e.mask,
          outOfView: eD,
          recordingKey: t ? void 0 : generateRecordingKey(e, 'indents'),
          scrollLeft: e.scrollLeft
        }), jsx(eM, {
          ...e,
          abbreviatedStateName: Z,
          disabled: eP,
          hasSemanticLabel: ez,
          hovered: e.isHovered,
          iconSize: e$,
          isFixedOnHScroll: e1,
          isMeasurementNode: t,
          layerNamePlaceholderRef: O,
          layerNameRef: S,
          locked: eL,
          name: J,
          outOfView: eD,
          recordingKey: t ? void 0 : e.recordingKey,
          scrollLeft: e.scrollLeft,
          useUI3Icons: !0
        }), e.hasWarning && jsx('div', {
          'className': g()(cssBuilderInstance.flex.alignCenter.mr16.$, QW),
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': e.warningMessage,
          'data-tooltip-max-lines': 4,
          'data-tooltip-show-immediately': !0,
          'data-tooltip-hide-immediately': !0,
          'children': jsx(_$$R, {})
        }), eQ && jsx('span', {
          className: HY,
          dir: 'auto',
          children: eA()
        }), ez && jsx(eb, {
          guid: e.guid,
          isWebpage: e.isWebpage
        }), e5 && jsx('div', {
          className: cm
        })]
      });
    }()
  });
  return jsxs('div', {
    'className': eJ,
    'data-onboarding-key': e.guid === U && e.isSelected && (!e.isRowInView || e.isRowInView(e, M)) ? $$eN0 : void 0,
    'data-testid': e.hasChildren ? 'layer-row-with-children' : 'layer-row',
    'draggable': !1,
    'onContextMenu': er,
    'onDragEnter': ev,
    'onDragLeave': eE,
    'onDragOver': ey,
    'onDragStart': eg,
    'onDrop': eC,
    'onMouseEnter': ei,
    'onMouseLeave': el,
    'style': eY,
    'children': [e5 && jsxs('div', {
      className: cm,
      style: styleBuilderInstance.absolute.wFull.eventsNone.$,
      children: [jsx('div', {
        className: cssBuilderInstance.wFull.$
      }), jsx('div', {
        className: V0,
        children: jsx('div', {
          className: Hz,
          children: e4
        })
      })]
    }), jsx(conditionalWrapper, {
      condition: e1,
      wrapper: e => jsx('div', {
        style: styleBuilderInstance.absolute.wFull.eventsNone.$,
        children: jsx('div', {
          className: n4,
          children: jsx('div', {
            children: e
          })
        })
      }),
      children: e6
    })]
  });
});
eA.displayName = 'ObjectRow';
export let $$eP1 = memo(e => {
  let t = useSelector(t => t.mirror.appModel.hoveredNode === e.guid);
  let s = e.hasRefToHoveredDef || t || e.isTemporarilyHovered;
  let l = useNavigateToViewport('prototype_sections_zoom');
  let a = useCallback(e => {
    l(computeFullscreenViewportForNode({
      nodeId: e,
      alwaysPan: !0
    }));
  }, [l]);
  let o = getExplicitModeNames(e.guid);
  return jsx(eA, {
    ...e,
    isHovered: s,
    explicitVariableModeNames: o,
    navigateAndPanTo: a
  });
});
export const vx = $$eN0;
export const oo = $$eP1;
export const OG = $$eI2;
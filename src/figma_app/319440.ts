import u from 'classnames';
import { useSetAtom } from 'jotai/react';
import { memo, useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { findContainingResponsiveSet } from '../905/26360';
import { d as _$$d2 } from '../905/49800';
import { selectWithShallowEqual } from '../905/103090';
import { J as _$$J2 } from '../905/125993';
import { Ib } from '../905/129884';
import { permissionScopeHandler } from '../905/189185';
import { isValidValue } from '../905/216495';
import { C as _$$C } from '../905/217042';
import { n6 } from '../905/234821';
import { Label } from '../905/270045';
import { kl, lJ } from '../905/275640';
import { E as _$$E } from '../905/277716';
import { F as _$$F } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { K as _$$K } from '../905/443068';
import { z as _$$z } from '../905/454433';
import { U as _$$U2 } from '../905/492359';
import { cJ } from '../905/561485';
import { r as _$$r } from '../905/571562';
import { k as _$$k2 } from '../905/582200';
import { getFeatureFlags } from '../905/601108';
import { E as _$$E2 } from '../905/632989';
import { getSingletonSceneGraph } from '../905/700578';
import { U as _$$U } from '../905/708285';
import { tV } from '../905/794875';
import { K as _$$K2 } from '../905/799615';
import { Ig } from '../905/805224';
import { Y as _$$Y } from '../905/912236';
import { lQ } from '../905/934246';
import { sx } from '../905/941192';
import { d as _$$d } from '../905/976845';
import { s as _$$s } from '../cssbuilder/589278';
import { ay, RW } from '../figma_app/17220';
import { sO } from '../figma_app/21029';
import { JQ, LB } from '../figma_app/29089';
import { getObservableValue } from '../figma_app/84367';
import { Jp } from '../figma_app/95266';
import { Q as _$$Q } from '../figma_app/104130';
import { W as _$$W3 } from '../figma_app/110892';
import { F as _$$F2 } from '../figma_app/127204';
import { I9 } from '../figma_app/151869';
import { Fk } from '../figma_app/167249';
import { aC, bX, NV, RK } from '../figma_app/193101';
import { h as _$$h } from '../figma_app/203891';
import { P as _$$P } from '../figma_app/223272';
import { tx as _$$tx, ah, fP } from '../figma_app/240115';
import { M as _$$M } from '../figma_app/339170';
import { u as _$$u } from '../figma_app/353758';
import { D4 } from '../figma_app/355754';
import { el as _$$el } from '../figma_app/369767';
import { wQ } from '../figma_app/385874';
import { $L, ek as _$$ek, XS as _$$XS, aj, aT, gF, gv, mp, rq, sE, T0, TQ, yc, Zp, zU } from '../figma_app/386160';
import { U as _$$U3 } from '../figma_app/427950';
import { J as _$$J } from '../figma_app/451499';
import { T as _$$T2 } from '../figma_app/453188';
import { fullscreenValue } from '../figma_app/455680';
import { Z3 } from '../figma_app/461594';
import { isIntegrationContext } from '../figma_app/469876';
import { i as _$$i } from '../figma_app/472709';
import { s as _$$s3 } from '../figma_app/483328';
import { q5, tS } from '../figma_app/516028';
import { s as _$$s2 } from '../figma_app/553327';
import { c$ } from '../figma_app/618433';
import { Zk } from '../figma_app/626177';
import { e as _$$e } from '../figma_app/630744';
import { R as _$$R2 } from '../figma_app/636548';
import { db } from '../figma_app/636678';
import { W as _$$W2 } from '../figma_app/691750';
import { aV } from '../figma_app/722362';
import { bh, VE, X9 } from '../figma_app/730706';
import { qw } from '../figma_app/740163';
import { dG } from '../figma_app/753501';
import { AppStateTsApi, CmsRepeaterHelpers, ItemType, ViewType, LayoutTabType, InteractionCpp, Command, InsertSourceType, ChildRelationshipStatus } from '../figma_app/763686';
import { bw, gc, jw, Xl } from '../figma_app/781981';
import { Pt } from '../figma_app/806412';
import { to } from '../figma_app/828186';
import { t as _$$t2 } from '../figma_app/856638';
import { b as _$$b, bL, mc, YJ } from '../figma_app/860955';
import { W as _$$W } from '../figma_app/896386';
import { QE } from '../figma_app/914216';
import { S as _$$S } from '../figma_app/924300';
import { uc } from '../figma_app/930338';
import { vG } from '../figma_app/938628';
import { L as _$$L } from '../figma_app/940186';
import { dP, m9 } from '../figma_app/947348';
import { T as _$$T } from '../figma_app/962636';
import { Em, ow, vn } from '../figma_app/976749';
import { Wg, ZU } from '../figma_app/986347';
import { kk, OU } from '../figma_app/986594';
import { f$, LF } from '../figma_app/998062';
import { useDispatch, useSelector } from '../vendor/514228';
let p = u;
let M = 'cmsCollectionSubmenu';
function F() {
  let e = getSingletonSceneGraph().getDirectlySelectedNodes();
  let t = kk(e);
  let r = !1;
  let s = CmsRepeaterHelpers?.getSelectedNodesToConvertIntoRepeatersGUIDs(ChildRelationshipStatus.HAS_IDENTICAL_CHILDREN) ?? [];
  s.length === 0 && (s = CmsRepeaterHelpers?.getSelectedNodesToConvertIntoRepeatersGUIDs(ChildRelationshipStatus.HAS_CHILDREN) ?? [], r = !0);
  let o = useDispatch();
  let u = tS();
  let p = c$(u).data;
  let _ = getFeatureFlags().dakota_repeaters && s.length > 0 || U(t);
  let m = t?.getDakotaSelector()?.collectionId;
  let g = useSetAtom(_$$C);
  let f = OU(InsertSourceType.CMS_PROPERTIES_PANEL);
  let E = useCallback(e => {
    e && (t && t.type === 'RESPONSIVE_SET' ? permissionScopeHandler.user('dakota-set-text-binding', () => {
      t.setDakotaSelectorCollection(e, InsertSourceType.CMS_PROPERTIES_PANEL);
    }) : f(e, () => {
      o(_$$F.enqueue({
        button: {
          text: getI18nString('dakota.fullscreen_actions.visual_bell.go_to_component'),
          action: () => {
            fullscreenValue.triggerActionEnum(Command.GO_TO_REPEATER_COMPONENT);
          }
        },
        message: getI18nString('dakota.fullscreen_actions.visual_bell.repeater_created'),
        onDismiss: () => {}
      }));
    }));
  }, [t, f, o]);
  if (!_$$U2() || !_ || (p ?? []).length === 0 || m) return;
  if (!getFeatureFlags().dakota_grid_repeaters && t?.stackMode === 'GRID') {
    return {
      type: ZU.CUSTOM_ACTION,
      customActionType: Wg.STANDARD_BUTTON,
      onClick: lQ,
      icon: jsx(_$$T, {}),
      getTitle: () => getI18nString('dakota.collection_selector.connect_submenu_title'),
      recordingKey: 'cmsCollectionAction',
      disabled: !0
    };
  }
  let b = (p ?? []).map(e => ({
    type: ZU.CUSTOM_ACTION,
    onClick: () => E(e.id),
    getTitle: () => e.name,
    recordingKey: getFeatureFlags().cms_bindings_ux_improvements && !r ? e.name : Pt(M, e.name) ?? '',
    customActionType: Wg.STANDARD_BUTTON,
    icon: getFeatureFlags().cms_bindings_ux_improvements ? void 0 : jsx(_$$T, {}),
    preventHoisting: !0
  }));
  let v = {
    type: ZU.CUSTOM_ACTION,
    customActionType: Wg.DROPDOWN_GROUP_HEADER,
    getTitle: () => getI18nString('dakota.collection_selector.connect_submenu_title'),
    recordingKey: 'cmsPageBindingLabel',
    onClick: lQ,
    preventHoisting: !0,
    disabled: !0
  };
  let P = getFeatureFlags().cms_bindings_ux_improvements ? [v, ...b] : b;
  return {
    type: ZU.ACTION_SUBMENU,
    recordingKey: M,
    icon: getFeatureFlags().cms_bindings_ux_improvements ? jsx(_$$i, {}) : jsx(_$$T, {}),
    getTitle: () => getFeatureFlags().cms_bindings_ux_improvements ? getI18nString('dakota.collection_selector.connect_list_to_cms_title') : getI18nString('dakota.collection_selector.connect_submenu_title'),
    items: P,
    preventSingleItemSubmenuFlattening: !0,
    preventHoisting: !getFeatureFlags().cms_bindings_ux_improvements || r,
    onSubmenuOpenClose: e => {
      getFeatureFlags().cms_bindings_ux_improvements && (g(e), InteractionCpp?.invalidateViewport());
    }
  };
}
function j() {
  let e = getSingletonSceneGraph().getDirectlySelectedNodes();
  let t = kk(e);
  let r = t?.getDakotaSelector()?.collectionId;
  if (t && r) {
    return {
      type: ZU.CUSTOM_ACTION,
      onClick: () => {
        permissionScopeHandler.user('dakota-unbind-collection', () => {
          t.setDakotaSelectorCollection('', InsertSourceType.CMS_PROPERTIES_PANEL);
          fullscreenValue.triggerAction('commit');
        });
      },
      icon: jsx(_$$U, {}),
      getTitle: () => getI18nString('dakota.collection_selector.disconnect_submenu_title'),
      recordingKey: 'removeCmsCollectionAction',
      customActionType: Wg.STANDARD_BUTTON
    };
  }
}
let U = e => !!e && e.type === 'RESPONSIVE_SET' && e.name !== '/';
let ea = {
  type: ZU.ACTION,
  action: 'apply-transform-modifiers',
  editModes: LB,
  recordingKey: 'toolApplyTransformModifiers'
};
let es = {
  type: ZU.ACTION,
  action: 'add-transform-modifier-to-selection',
  getDisplayAction: () => 'add-radial-repeat-to-selection',
  editModes: LB,
  recordingKey: 'addTransformModifierToSelection',
  onboardingKey: m9
};
let eo = {
  type: ZU.ACTION,
  action: 'add-linear-repeat-to-selection',
  editModes: LB,
  recordingKey: 'addLinearRepeatToSelection'
};
let el = {
  type: ZU.ACTION,
  action: 'add-skew-modifier-to-selection',
  editModes: LB,
  recordingKey: 'addSkewToSelection',
  featureFlags: ['ce_il_slant']
};
let ed = {
  type: ZU.FLYOUT,
  dropdownKey: 'modifiers-overflow-flyout',
  getTooltip: () => getI18nString('fullscreen_actions.more-transform-modifier-options'),
  actions: [es, eo, el],
  flyoutRecordingKey: 'transformModifierActionsFlyout',
  id: gc
};
function ey() {
  let e = !!getObservableValue(AppStateTsApi?.propertiesPanelState()?.shownPropertiesPanels, [])[ItemType.CODE_INSTANCE_HTML_FIBER];
  let t = _$$u.directManipulationCanvasEditor();
  let r = useCallback(() => {
    t.goToSource();
  }, [t]);
  return e ? jsx(_$$E, {
    name: 'layer_go_to_source_button',
    children: jsx('div', {
      'data-non-interactive': !0,
      'className': 'x1y1aw1k xjkvuk6',
      'children': jsx(_$$z, {
        onClick: r,
        recordingKey: 'webGoToSourceButton',
        children: getI18nString('figmake.toolbar.goToSource')
      })
    })
  }) : null;
}
function ek() {
  let e = function () {
    let e = getSingletonSceneGraph().getDirectlySelectedNodes();
    let t = kk(e);
    let r = Fk(e => e.getDirectlySelectedNodes().every(e => U(e)));
    let a = tS();
    let s = c$(a).data;
    let o = t?.getDakotaSelector()?.collectionId;
    let d = useCallback(e => {
      e && t && t.type === 'RESPONSIVE_SET' && permissionScopeHandler.user('dakota-set-text-binding', () => {
        t.setDakotaSelectorCollection(e, InsertSourceType.CMS_PROPERTIES_PANEL);
      });
    }, [t]);
    if (!_$$U2() || !r || (s ?? []).length === 0 || o) return;
    let c = [{
      type: ZU.CUSTOM_ACTION,
      customActionType: Wg.DROPDOWN_GROUP_HEADER,
      getTitle: () => getI18nString('dakota.collection_selector.connect_submenu_title'),
      recordingKey: 'cmsPageBindingLabel',
      onClick: lQ,
      preventHoisting: !0,
      disabled: !0
    }, ...(s ?? []).map(e => ({
      type: ZU.CUSTOM_ACTION,
      onClick: () => d(e.id),
      getTitle: () => e.name,
      recordingKey: e.name,
      customActionType: Wg.STANDARD_BUTTON,
      preventHoisting: !0
    }))];
    return {
      type: ZU.ACTION_SUBMENU,
      recordingKey: M,
      icon: jsx(_$$i, {}),
      getTitle: () => getI18nString('dakota.collection_selector.connect_page_to_cms_title'),
      items: c,
      preventSingleItemSubmenuFlattening: !0,
      preventHoisting: !1
    };
  }();
  return getFeatureFlags().cms_bindings_ux_improvements && e ? jsx(_$$E, {
    name: 'layer_header_button',
    alsoTrack: () => ({
      layerButtonAction: `open_submenu_${uc(e.getTitle())}`
    }),
    children: jsx(QE, {
      item: e,
      numUnreadComments: 0,
      recordingKey: 'cms_page_binding_button'
    })
  }, e.recordingKey) : null;
}
function eB() {
  let {
    getTriggerProps,
    manager
  } = _$$b();
  let r = j();
  if (!getFeatureFlags().cms_bindings_ux_improvements || !r) return null;
  let i = [jsx(_$$t2, {
    item: r,
    recordingKey: r.recordingKey
  }, r.recordingKey)];
  return jsxs(bL, {
    manager,
    children: [jsx(_$$E2, {
      ...getTriggerProps(),
      'aria-label': getI18nString('dakota.collection_selector.disconnect_submenu_title'),
      'className': p()('cms_unbind_button--iconButton--ptjPj', {
        'cms_unbind_button--iconButtonActive--jCaxN': manager.isOpen
      }),
      'recordingKey': 'cms_page_unbind_button',
      'children': jsx(_$$J2, {})
    }), jsx(mc, {
      children: jsx(YJ, {
        children: i
      })
    })]
  });
}
let ez = memo(({
  selectedNodeCount: e,
  node: t,
  shouldShowCodeInstancePanel: r,
  shouldShowInstancePanel: i,
  shouldShowComponentPropertiesPanel: s,
  shouldShowSlotPanel: o,
  panelTitleRef: c
}) => {
  let u = sO();
  let p = to();
  let _ = F();
  let h = j();
  let m = [];
  _ && m.push(_);
  h && m.push(h);
  let g = RW({
    shouldShowInstancePanel: i,
    shouldShowCodeInstancePanel: r,
    shouldShowComponentPropertiesPanel: s,
    shouldShowSlotPanel: o
  });
  if (useSelector(e => e.mirror.appModel.activeCanvasEditModeType) === LayoutTabType.VECTOR && t) {
    return jsx(eK, {
      node: t,
      panelTitleRef: c,
      nodeTypeStringToDisplay: getI18nString('fullscreen.properties_panel.layer_header.node_type_vector')
    });
  }
  let f = jsx('div', {
    ref: c,
    className: Zp,
    children: jsx('span', {
      children: getI18nString('fullscreen.properties_panel.layer_header.node_type_multiple_selected', {
        count: e
      })
    })
  });
  switch (g) {
    case null:
      return null;
    case 'MIXED':
      return f;
    case 'MIXED_FRAME_SECTION_GROUP':
    case 'SECTION':
    case 'GROUP':
    case 'REPEATER':
    case 'FRAME':
      if (t && t.getDakotaSelector()?.collectionId) {
        return jsxs('div', {
          className: _$$s.flex.wFull.justifyBetween.$,
          children: [jsx(eK, {
            node: t,
            nodeTypeStringToDisplay: renderI18nText('dakota.properties_panel.repeater_header'),
            panelTitleRef: c
          }), m && jsx(_$$S, {
            enabledToolbarItems: [m],
            recordingKey: 'ResponsiveSetUI3ToolbarOverflowMenu'
          })]
        });
      }
      if (t && t.isBreakpointFrame) {
        return jsx(eK, {
          node: t,
          panelTitleRef: c
        });
      }
      if (u || p) {
        if (g === 'MIXED_FRAME_SECTION_GROUP') return f;
        return t ? jsx(eK, {
          node: t,
          panelTitleRef: c
        }) : null;
      }
      return jsx('div', {
        className: _$$s.inlineFlex.$,
        children: jsx(tV, {
          value: {
            chevron: () => jsx(_$$r, {
              className: yc
            })
          },
          children: jsx(vG, {
            id: 'selection-actions-frame-preset-dropdown',
            selectClassName: T0,
            inputClassName: gv,
            recordingKey: 'transformPanel.framePresetDropdown'
          })
        })
      });
    case 'RESPONSIVE_SET':
    case 'WEBPAGE':
      return t ? jsxs('div', {
        className: _$$s.flex.wFull.justifyBetween.$,
        children: [jsx(eK, {
          node: t,
          nodeTypeStringToDisplay: getFeatureFlags().cms_bindings_ux_improvements && t.getDakotaSelectorCollectionId() ? renderI18nText('sites.panel.toolbar_header.webpage_bound_to_cms') : renderI18nText('sites.panel.toolbar_header.webpage'),
          panelTitleRef: c
        }), jsxs('div', {
          className: _$$s.flex.justifyEnd.itemsCenter.$,
          children: [jsx(_$$M, {
            showLibrarySets: !1,
            recordingKey: 'pageLevel'
          }), jsx(ek, {}), jsx(_$$el, {
            page: t.guid,
            recordingKey: 'toolbar_header.webpage'
          }), jsx(eB, {})]
        })]
      }) : null;
    case 'SYMBOL':
      return jsx(_$$R2, {
        alwaysShowParentComponent: !0,
        unfocusedInputOverridesClassName: _$$XS,
        focusedInputOverridesClassName: sE,
        shouldHideComponentIcon: !0
      });
    case 'INSTANCE':
      return jsx(_$$W, {
        panelTitleRef: c
      });
    case 'CODE_INSTANCE':
      return jsx(eW, {
        panelTitleRef: c
      });
    case 'SLOT':
      return jsx(_$$s3, {
        unfocusedInputOverridesClassName: _$$XS,
        focusedInputOverridesClassName: sE
      });
    default:
      return t ? jsx(eK, {
        node: t,
        panelTitleRef: c
      }) : null;
  }
});
function eW({
  panelTitleRef: e
}) {
  let t = I9();
  let r = useMemo(() => {
    if (!t) return null;
    if (t.length > 0 && t.every(e => e.isCodeInstance)) {
      let e = t[0].name;
      if (t.every(t => t.name === e)) return t[0];
    }
    let e = t.filter(e => e.isCodeInstance).map(e => e.backingCodeComponent);
    return new Set(e.map(e => e?.guid)).size === 1 ? e[0] : null;
  }, [t]);
  return r ? jsx(eK, {
    node: r,
    panelTitleRef: e
  }) : jsx('div', {
    ref: e,
    className: Zp,
    children: jsx('span', {
      children: getI18nString('fullscreen.properties_panel.layer_header.node_type_multiple_selected', {
        count: t?.length ?? 0
      })
    })
  });
}
function eK({
  node: e,
  nodeTypeStringToDisplay: t,
  panelTitleRef: r
}) {
  let i = r.current;
  let a = !!i && i.offsetWidth < i.scrollWidth;
  let [s] = lJ('leftEndCap');
  let [o] = lJ('rightEndCap');
  let l = isValidValue(s) ? s : void 0;
  let d = isValidValue(o) ? o : void 0;
  let c = sO();
  let u = t || function (e, t, r, n) {
    if (function (e, t) {
      switch (e) {
        case 'RECTANGLE':
        case 'ROUNDED_RECTANGLE':
          return !0;
        case 'ELLIPSE':
        case 'REGULAR_POLYGON':
        case 'STAR':
        case 'VECTOR':
        case 'SHAPE_WITH_TEXT':
        case 'FRAME':
        case 'REPEATER':
          return t || !1;
        default:
          return !1;
      }
    }(e.type, n)) {
      let t = e.type === 'SHAPE_WITH_TEXT' && e.immutableFrameShape || e;
      let r = t.hasEnabledAnimatedPaint || t.hasEnabledVideoPaint;
      let n = t.hasEnabledStaticImagePaint;
      if (r) return getI18nString('fullscreen.properties_panel.layer_header.node_type_video');
      if (n) return getI18nString('fullscreen.properties_panel.layer_header.node_type_image');
    }
    if (e.isSlideNumber) return getI18nString('slides.properties_panel.slide_number.title');
    switch (e.type) {
      case 'ELLIPSE':
        return getI18nString('fullscreen.properties_panel.layer_header.node_type_ellipse');
      case 'LINE':
        return getI18nString('fullscreen.properties_panel.layer_header.node_type_line');
      case 'REGULAR_POLYGON':
        return getI18nString('fullscreen.properties_panel.layer_header.node_type_polygon');
      case 'RECTANGLE':
      case 'ROUNDED_RECTANGLE':
        return getI18nString('fullscreen.properties_panel.layer_header.node_type_rectangle');
      case 'SECTION':
        return getI18nString('fullscreen.properties_panel.layer_header.node_type_section');
      case 'SLICE':
        return getI18nString('fullscreen.properties_panel.layer_header.node_type_slice');
      case 'STAR':
        return getI18nString('fullscreen.properties_panel.layer_header.node_type_star');
      case 'TEXT':
        return getI18nString('fullscreen.properties_panel.layer_header.node_type_text');
      case 'TEXT_PATH':
        return getI18nString('fullscreen.properties_panel.layer_header.node_type_text_on_a_path');
      case 'VECTOR':
        if (wQ(t) || wQ(r)) return getI18nString('fullscreen.properties_panel.layer_header.node_type_arrow');
        return getI18nString('fullscreen.properties_panel.layer_header.node_type_vector_path');
      case 'SLIDE':
        return _$$Y(e) && e.isSkippedSlide ? getI18nString('fullscreen.properties_panel.layer_header.node_type_slide_skipped') : getI18nString('fullscreen.properties_panel.layer_header.node_type_slide', {
          slideNumber: e.name
        });
      case 'INTERACTIVE_SLIDE_ELEMENT':
        if (e.interactiveSlideElementType === 'YOUTUBE') return getI18nString('slides.flapp.embed.widget_youtube');
        return getI18nString('fullscreen.properties_panel.layer_header.node_type_interactive_slide_element');
      case 'SHAPE_WITH_TEXT':
        return n ? eY.format(e.shapeWithTextType) : e.name;
      case 'TRANSFORM':
        return getI18nString('fullscreen.properties_panel.layer_header.node_type_transform_group');
      case 'FRAME':
        if (n) {
          if (e.stackMode !== 'NONE') return getI18nString('fullscreen.properties_panel.layer_header.node_type_frame_auto_layout');
          if (e.isGroup) return getI18nString('fullscreen.properties_panel.layer_header.node_type_group');
          return getI18nString('fullscreen.properties_panel.layer_header.node_type_frame');
        }
        return e.name;
      default:
        return e.name;
    }
  }(e, l, d, c);
  return jsx('div', {
    'ref': r,
    'className': aj,
    'data-tooltip-type': Ib.TEXT,
    'data-tooltip': a ? u : void 0,
    'data-testid': 'node-type-display',
    'children': u
  });
}
let eY = new _$$J();
let e5 = 'sites-disabled-create-symbol-button';
function e8() {
  let e = kl('videoMediaLoop');
  let t = kl('videoAutoplay');
  let r = kl('videoMuted');
  let i = kl('videoShowControls');
  return jsx('div', {
    className: 'x78zum5 xdt5ytf x8rdmch xctkrei x1k70j0n x1jnr06f',
    children: jsx('div', {
      className: 'x163pfp',
      children: jsxs('div', {
        className: 'x78zum5 xdt5ytf xh8yej3 x1jnr06f',
        children: [jsx(_$$d2, {
          id: 'autoplay',
          checked: !0 === t,
          onChange: () => {
            fullscreenValue.updateSelectionProperties({
              videoAutoplay: !t
            });
          },
          label: jsx(Label, {
            children: getI18nString('fullscreen.properties_panel.video_controls.autoplay')
          })
        }), jsx(_$$d2, {
          id: 'mediaLoop',
          checked: !0 === e,
          onChange: () => {
            fullscreenValue.updateSelectionProperties({
              videoMediaLoop: !e
            });
          },
          label: jsx(Label, {
            children: getI18nString('fullscreen.properties_panel.video_controls.loop')
          })
        }), jsx(_$$d2, {
          id: 'showControls',
          checked: !0 === i,
          onChange: () => {
            fullscreenValue.updateSelectionProperties({
              videoShowControls: !i
            });
          },
          label: jsx(Label, {
            children: getI18nString('fullscreen.properties_panel.video_controls.show_playback_controls')
          })
        }), jsx(_$$d2, {
          id: 'muted',
          checked: !0 === r,
          onChange: () => {
            fullscreenValue.updateSelectionProperties({
              videoMuted: !r
            });
          },
          label: jsx(Label, {
            children: getI18nString('fullscreen.properties_panel.video_controls.mute')
          })
        })]
      })
    })
  });
}
export let $$e90 = 'toolbarView';
export function $$te5() {
  return 4.5 + (qw() >= 280 ? 1 : 0);
}
export function $$tt3(e) {
  return jsx(Ig, {
    children: jsx(tr, {
      ...e
    })
  });
}
function tr({
  shouldShowCodeInstancePanel: e,
  shouldShowInstancePanel: t,
  shouldShowComponentPropertiesPanel: r,
  shouldShowSlotPanel: s,
  shouldShowSlidesTypePanel: o,
  shouldShowVectorOperationPanel: u,
  shouldShowTransformModifiersPanel: y,
  recordingKey: T,
  withBottomBorder: I = !0
}) {
  let S = D4();
  let v = _$$s2(!1);
  let A = useRef(null);
  let x = useSetAtom(_$$h);
  let N = vn();
  let C = jw();
  useEffect(() => {
    x(A);
  }, [x]);
  let w = $$ti7(t, A);
  let O = useMemo(() => N ? Xl(w, C) : w, [N, w, C]);
  let {
    orderedHoistableToolbarItems,
    hasAnyPreventHoistingItems
  } = $$ts6(O);
  let k = kl('containsResponsiveSets');
  let M = useRef(null);
  let F = RW({
    shouldShowComponentPropertiesPanel: r,
    shouldShowCodeInstancePanel: e,
    shouldShowInstancePanel: t,
    shouldShowSlotPanel: s
  });
  let j = f$(M, T);
  let U = $$tn4($$te5(), orderedHoistableToolbarItems, hasAnyPreventHoistingItems);
  let {
    topLevelMode,
    editMode
  } = selectWithShallowEqual(e => ({
    topLevelMode: e.mirror.appModel.topLevelMode,
    editMode: e.mirror.appModel.activeCanvasEditModeType
  }));
  let q = useSelector(e => {
    let t = e.modalShown;
    return t?.type === _$$e;
  });
  let Q = q5();
  let ea = aV();
  let es = isIntegrationContext();
  let eo = Em();
  let el = sO();
  let ed = cJ();
  let ep = editMode === LayoutTabType.COMMENTS || editMode === LayoutTabType.PREVIEW || editMode === LayoutTabType.BRANCHING || topLevelMode === ViewType.HISTORY || topLevelMode === ViewType.PREVIEW || topLevelMode === ViewType.DEV_HANDOFF || topLevelMode === ViewType.BRANCHING;
  let em = ow();
  let eg = !!Q?.isTryFile && !q && !ea && es;
  let ef = $$ta8(O, U);
  let eE = ef.reduce((e, t) => e + t.length, 0);
  let eI = n6();
  let {
    count,
    node
  } = ay();
  let eA = ed && node?.hasEnabledVideoPaint && getFeatureFlags().sts_video;
  let ex = (eo || ed || el) && F === 'INSTANCE';
  let eN = function () {
    let e = useSelector(Jp);
    let t = useSelector(Z3);
    return e || t.length > 0;
  }();
  let eC = useContext(_$$Q);
  if (!(!(!q && (em || S || ep || ea) && !v) && !em && !eg)) return null;
  let ew = o && j ? j : eE > 0 && jsx(_$$E, {
    name: 'layer_overflow_menu_button',
    children: jsx(_$$S, {
      enabledToolbarItems: ef,
      recordingKey: Pt(T, 'UI3ToolbarOverflowMenu')
    })
  });
  let eO = node && !!node.getDakotaSelector()?.collectionId;
  return jsx(_$$k2, {
    name: 'layer_header_bar',
    children: jsxs(Zk, {
      'ref': A,
      'data-testid': 'property-panel-toolbar',
      'data-onboarding-key': dP,
      'className': p()(rq, {
        [$L]: F === 'INSTANCE' || F === 'SLOT' || F === 'SYMBOL' || u || y || o,
        [aT]: eN && ex,
        [TQ]: eC.mergeLayerHeaderWithTransformPanel
      }),
      'style': I ? void 0 : sx.bb0.pb4.$,
      'children': [jsxs('div', {
        className: p()(mp, _$$s.flex.alignLeft.borderBox.itemsCenter.h24.$, _$$s.pl8.pr8.gap8.$),
        children: [jsx('div', {
          'className': _$$s.hFull.flexGrow1.flex.itemsCenter.minW0.$,
          'data-non-interactive': !0,
          'children': jsx(ez, {
            panelTitleRef: M,
            selectedNodeCount: count,
            node,
            shouldShowCodeInstancePanel: e,
            shouldShowComponentPropertiesPanel: r,
            shouldShowInstancePanel: t,
            shouldShowSlotPanel: s
          })
        }), !k && !eO && jsxs('div', {
          'data-non-interactive': !0,
          'className': p()(gF, {
            [_$$ek]: !['INSTANCE', 'FRAME', 'REPEATER'].includes(F || '')
          }),
          'children': [U.map(e => e.type === ZU.FLYOUT ? jsx(_$$E, {
            name: 'layer_header_button',
            alsoTrack: () => ({
              layerButtonAction: `open_flyout_${uc(e.dropdownKey)}`
            }),
            children: jsx(_$$F2, {
              flyoutConfig: e,
              recordingKey: Pt($$e90, e.flyoutRecordingKey)
            })
          }, e.dropdownKey) : e.type === ZU.ACTION ? jsx(_$$E, {
            name: 'layer_header_button',
            alsoTrack: () => ({
              layerButtonAction: `${uc(e.action)}`
            }),
            children: jsx(QE, {
              item: e,
              numUnreadComments: eI,
              recordingKey: T
            })
          }, e.recordingKey) : e.type === ZU.ACTION_SUBMENU ? jsx(_$$E, {
            name: 'layer_header_button',
            alsoTrack: () => ({
              layerButtonAction: `open_submenu_${uc(e.getTitle())}`
            }),
            children: jsx(QE, {
              item: e,
              numUnreadComments: eI,
              recordingKey: T
            })
          }, e.recordingKey) : e.type === ZU.CUSTOM_ACTION ? jsx($$to1, {
            item: e
          }, e.recordingKey) : null), ew, orderedHoistableToolbarItems.map((e, t) => e.type === ZU.CUSTOM_ACTION && e.customActionType === Wg.DROPDOWN_TRIGGER_BUTTON ? jsx('div', {
            children: e.dropdown
          }, t) : null)]
        })]
      }), eA && jsx(e8, {}), jsx(_$$T2, {}), ex && jsx(_$$W2, {
        recordingKey: $$e90
      }), jsx(_$$P, {}), jsx(ah, {}), jsx(fP, {}), jsx(_$$W3, {}), jsx(bh, {}), jsx(ey, {})]
    })
  });
}
export function $$tn4(e, t, r) {
  let n = [];
  let i = e;
  t.every(e => {
    let t = e.type === ZU.FLYOUT && e.actions.length > 1 ? 1.5 : 1;
    return i - t >= 0 && (i -= t, n.push(e), !0);
  });
  let a = t.length - n.length;
  i < 1 && (a > 0 || r) && n.pop();
  return n;
}
export function $$ti7(e, t) {
  let r = aC();
  let a = bX(e);
  let s = RK(e);
  let o = _$$tx(t);
  let l = db(t);
  let d = function () {
    let {
      showTransformModifiersSelectionActions
    } = useContext(_$$Q);
    return showTransformModifiersSelectionActions ? ed : null;
  }();
  let c = _$$L();
  let u = NV();
  let p = X9();
  let _ = VE();
  let h = function () {
    let e = Fk(e => {
      let t = e.getDirectlySelectedNodes();
      return t.length > 0 && t.every(e => findContainingResponsiveSet(e) && (e.type === 'FRAME' || e.isCodeInstance && e.isLayerLikeCodeNode) && !e.isBreakpointFrame);
    });
    if (cJ() && e) {
      return {
        type: ZU.CUSTOM_ACTION,
        customActionType: Wg.STANDARD_BUTTON,
        onClick: lQ,
        icon: jsx(_$$K2, {
          style: {
            '--color-icon': 'var(--color-icon-disabled)'
          }
        }),
        disabled: !0,
        getTitle: () => getI18nString('sites.toolbar_item.cannot-create-component'),
        recordingKey: e5,
        dataTestId: e5
      };
    }
  }();
  let m = LF();
  let g = cJ();
  let f = kl('containsNodesInResponsiveSets');
  let E = kl('containsSitesLayouts');
  let b = g && !!E;
  let I = I9();
  let S = F();
  let v = j();
  let {
    showTransformModifiersSelectionActions
  } = useContext(_$$Q);
  let x = vn();
  let N = useMemo(() => JQ({
    isIllustrationMode: x,
    resetSubmenu: r,
    selectedNodes: I || [],
    applyInstanceSwapButton: a,
    instanceNeedsUpdateButton: s,
    bindingButton: c,
    applyTransformModifiersButton: showTransformModifiersSelectionActions ? ea : null,
    transformModifiersOverflowButton: d || void 0,
    restoreVariantButton: u,
    componentConfigurationButton: o,
    slotActions: l,
    designRewriteButton: p,
    figjamRewriteButton: _,
    cmsCollectionSelectorMenu: S,
    sitesDisabledCreateSymbolButton: h,
    onlyShowBreakpointFrameActions: b,
    cmsCollectionUnbindAction: v,
    shouldShowTextEditHyperlinkAction: !g || g && !f,
    slidesDesignModeVariableModeButton: m || void 0
  }), [x, r, I, a, s, c, showTransformModifiersSelectionActions, d, u, o, l, p, _, S, h, b, v, g, f, m]);
  return _$$U3(N);
}
export function $$ta8(e, t) {
  return useMemo(() => e.map(e => e.reduce((e, r) => t.includes(r) ? e : r.type === ZU.CUSTOM_ACTION && r.dataTestId === e5 ? (r.getTitle = () => getI18nString('fullscreen_actions.create-symbol'), e.concat(r)) : r.type === ZU.FLYOUT ? e.concat(r.actions) : e.concat(r), [])), [e, t]);
}
export function $$ts6(e) {
  let t = vn();
  let r = jw();
  return useMemo(() => {
    let n = !1;
    let i = [...e.flat().filter(e => !('preventHoisting' in e) || !e.preventHoisting || (n = !0, !1))];
    t && (i = bw(i, r));
    return {
      orderedHoistableToolbarItems: i,
      hasAnyPreventHoistingItems: n
    };
  }, [e, t, r]);
}
export function $$to1({
  item: e
}) {
  let t = e.customActionType === Wg.DIALOG_TRIGGER_BUTTON;
  let r = e.customActionType === Wg.DROPDOWN_TRIGGER_BUTTON;
  return jsx(_$$E, {
    name: 'layer_header_button',
    alsoTrack: () => ({
      layerButtonAction: `${uc(e.getTitle())}`
    }),
    children: t || r ? jsx('span', {
      className: zU,
      children: jsx(_$$d, {
        'ref': r ? e.dropdownTargetButtonRef : void 0,
        'recordingKey': e.recordingKey,
        'aria-expanded': e.isSelected,
        'aria-label': e.getTitle(),
        'onClick': e.onClick,
        'htmlAttributes': {
          onMouseDown: dG
        },
        'children': e.icon
      })
    }) : jsx(_$$K, {
      'aria-label': e.getTitle(),
      'onClick': e.onClick,
      'recordingKey': Pt($$e90, e.recordingKey),
      'htmlAttributes': {
        'data-tooltip': e.getTitle(),
        'data-tooltip-type': Ib.TEXT,
        'data-testid': e.dataTestId
      },
      'disabled': e.disabled,
      'children': e.icon
    }, e.recordingKey)
  }, e.recordingKey);
}
export function $$tl2({
  item: e
}) {
  let t = e.customActionType === Wg.DROPDOWN_TRIGGER_BUTTON;
  return jsxs(Fragment, {
    children: [jsx($$to1, {
      item: e
    }), t && e.dropdown]
  });
}
export const If = $$e90;
export const CX = $$to1;
export const XS = $$tl2;
export const _i = $$tt3;
export const b_ = $$tn4;
export const fJ = $$te5;
export const NA = $$ts6;
export const gT = $$ti7;
export const yG = $$ta8;
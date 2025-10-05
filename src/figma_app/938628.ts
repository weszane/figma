import { stylex } from '@stylexjs/stylex';
import g from 'classnames';
import { createContext, createRef, memo, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { selectWithShallowEqual } from '../905/103090';
import { ImageOverlayComponent } from '../905/129046';
import { KindEnum } from '../905/129884';
import { Vb } from '../905/151685';
import { setupToggleButton } from '../905/167712';
import { S as _$$S2 } from '../905/177206';
import { ow } from '../905/188421';
import { permissionScopeHandler, scopeAwareFunction } from '../905/189185';
import { isInvalidValue, isValidValue, MIXED_MARKER, normalizeValue } from '../905/216495';
import { labConfigurations, useLabConfiguration } from '../905/226610';
import { F as _$$F } from '../905/258517';
import { HiddenLabel } from '../905/270045';
import { useSelectedStyleOrSelectionPropertyValues, useSelectionProperty, useSelectionPropertyValue, useSelectionPropertyValues } from '../905/275640';
import { AutoInteractableWrapper } from '../905/277716';
import { getI18nString, renderI18nText } from '../905/303541';
import { MediaQuerySvgComponent } from '../905/331623';
import { Q as _$$Q2 } from '../905/346809';
import { UpgradeAction } from '../905/370443';
import { OnboardingModal } from '../905/425180';
import { analyticsEventManager, trackEventAnalytics } from '../905/449184';
import { P as _$$P } from '../905/460261';
import { removePositionChars, parseAnchorPosition } from '../905/476456';
import { z as _$$z } from '../905/489760';
import { bL as _$$bL, c$ as _$$c$, l9, mc } from '../905/493196';
import { RecordableDiv } from '../905/511649';
import { r as _$$r3 } from '../905/571562';
import { conditionalWrapper } from '../905/579635';
import { k as _$$k2 } from '../905/582200';
import { O as _$$O } from '../905/587457';
import { getFeatureFlags } from '../905/601108';
import { e as _$$e } from '../905/621515';
import { ButtonPrimitive } from '../905/632989';
import { N as _$$N3 } from '../905/696319';
import { getSingletonSceneGraph } from '../905/700578';
import { logError } from '../905/714362';
import { SvgComponent } from '../905/714743';
import { getFilteredFeatureFlags } from '../905/717445';
import { ArrowPosition } from '../905/748636';
import { By } from '../905/777187';
import { c$ as _$$c$2, tV as _$$tV, l6, sK } from '../905/794875';
import { languageCodes } from '../905/816253';
import { EventShield } from '../905/821217';
import { useDropdownState } from '../905/848862';
import { bL, c$ } from '../905/867927';
import { dayjs } from '../905/920142';
import { Legend } from '../905/932270';
import { noop } from 'lodash-es';
;
import { CU, H_, z6 } from '../905/963340';
import { DialogTriggerButton } from '../905/976845';
import { N as _$$N2 } from '../905/995635';
import { A as _$$A11 } from '../2854/374356';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { efW } from '../figma_app/6204';
import { u as _$$u } from '../figma_app/6978';
import { ak } from '../figma_app/8833';
import { createLocalStorageAtom, useAtomValueAndSetter, useAtomWithSubscription } from '../figma_app/27355';
import { v as _$$v } from '../figma_app/45501';
import { Q as _$$Q3 } from '../figma_app/67145';
import { G as _$$G } from '../figma_app/80900';
import { getObservableOrFallback } from '../figma_app/84367';
import { trackFileEventThunk } from '../figma_app/91703';
import { isNullish } from '../figma_app/95419';
import { createEnabledTransformControlsObservable, createShownTransformControlsObservable, getNudgeMultipliers, isLineOrWashiTapeSelectedSelector, useAutoSizingFlags, useTransformInputHandler } from '../figma_app/98483';
import { eC as _$$eC, r as _$$r, t5 as _$$t2, BG, BP, DL, fm, GC, hF, HO, i6, jC, Kw, LI, oH, PK, QK, sC, T1, wO, xe, Xq } from '../figma_app/100987';
import { Q as _$$Q } from '../figma_app/104130';
import { I9, Tv } from '../figma_app/151869';
import { useDeepEqualSceneValue } from '../figma_app/167249';
import { buildUploadUrl } from '../figma_app/169182';
import { AngleInput, ExpressionInput, LengthInput, NumericInput, PercentageBaseInput, PercentageInputWithMinMax } from '../figma_app/178475';
import { yesNoTrackingEnum } from '../figma_app/198712';
import { II, Vk } from '../figma_app/200284';
import { Xw } from '../figma_app/201694';
import { aq } from '../figma_app/257798';
import { N as _$$N } from '../figma_app/268271';
import { useCooperFrameSelectionInfo } from '../figma_app/334505';
import { p as _$$p } from '../figma_app/353099';
import { Ij } from '../figma_app/359943';
import { getI18nState } from '../figma_app/363242';
import { S as _$$S } from '../figma_app/375482';
import { getImageOrVideoPaint } from '../figma_app/385874';
import { bI, cl, dj, mJ, VW } from '../figma_app/391215';
import { rX as _$$rX, aj, dr, Fp, G7, hl, jQ, jw, Kl, Md, mw, Ng, p3, QG, qi, qU, SC, wf, wV, XO, Zg, zg, zn } from '../figma_app/409807';
import { fullscreenValue } from '../figma_app/455680';
import { fB, SA } from '../figma_app/473317';
import { CC } from '../figma_app/509285';
import { W as _$$W } from '../figma_app/521665';
import { I as _$$I } from '../figma_app/531250';
import { Fy, mp } from '../figma_app/579169';
import { fI, Zk } from '../figma_app/626177';
import { C as _$$C } from '../figma_app/630916';
import { h as _$$h2 } from '../figma_app/648675';
import { fS, g1, sE } from '../figma_app/681244';
import { ph } from '../figma_app/709893';
import { r as _$$r4 } from '../figma_app/711157';
import { useOnSelectionChange } from '../figma_app/722362';
import { T as _$$T } from '../figma_app/737897';
import { getNudgeAmounts } from '../figma_app/740163';
import { AppStateTsApi, AspectRatioLockBindings, Axis, ContainerType, Fullscreen, ItemType, LayoutSizingMode, PrototypingTsApi, SceneGraphHelpers, SnapMode, SocialMediaFormats, StackBindingsCpp, VariableResolvedDataType } from '../figma_app/763686';
import { DE, fn, sY } from '../figma_app/811257';
import { Q as _$$Q4 } from '../figma_app/834744';
import { VariableBindingInput } from '../figma_app/841644';
import { MenuContainerComp, MenuGroupComp, MenuHiddenTitleComp, MenuRootComp, MenuSeparator, setupMenu } from '../figma_app/860955';
import { generateRecordingKey } from '../figma_app/878298';
import { selectSceneGraph, selectSceneGraphSelectionKeys } from '../figma_app/889655';
import { trackFileEventWithUser } from '../figma_app/901889';
import { U as _$$U } from '../figma_app/924260';
import { isSitesFileType } from '../figma_app/976749';
import { w as _$$w } from '../figma_app/984514';
import { A as _$$A } from '../svg/33649';
import { A as _$$A9 } from '../svg/98898';
import { A as _$$A12 } from '../svg/134230';
import { A as _$$A10 } from '../svg/195837';
import { A as _$$A6 } from '../svg/271986';
import { A as _$$A13 } from '../svg/278413';
import { A as _$$A7 } from '../svg/285963';
import { A as _$$A1 } from '../svg/393808';
import { A as _$$A4 } from '../svg/490650';
import { A as _$$A2 } from '../svg/541014';
import { A as _$$A14 } from '../svg/663377';
import { A as _$$A5 } from '../svg/717711';
import { A as _$$A8 } from '../svg/924155';
import { A as _$$A0 } from '../svg/985621';
let d = memo(e => {
  return jsxs('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: [jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M9 7a2 2 0 0 1 1.935 1.5H18a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5h-7.065A2 2 0 0 1 9 11c-.37 0-.717-.103-1.015-.28L6 12.708v.793a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h.793l1.985-1.986A2 2 0 0 1 9 7m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2'
    }), jsx('path', {
      fill: 'var(--color-icon-tertiary)',
      fillRule: 'evenodd',
      d: 'M6.734 11.973a16 16 0 0 0-.223.922 28 28 0 0 0-.398 2.452 31 31 0 0 0-.105 1.034l-.005.061-.001.016v.003L6 16.463l.499.037-.5-.035a.5.5 0 0 0 .981.17l.018-.1v-.017l.003-.022.003-.034v-.003l.018-.214a27 27 0 0 1 .466-3.14c.183-.854.42-1.672.715-2.27a2 2 0 0 1-.22-.112zM10.937 9.5c-.08.313-.235.597-.444.83.41.17.826.4 1.245.68.94.626 1.848 1.47 2.646 2.33a28 28 0 0 1 2.647 3.357l.021.032.016.024.009.014.002.003.063.08a.5.5 0 0 0 .825-.53l-.046-.09-.002-.003h-.001l-.002-.003-.003-.006-.007-.011-.018-.027-.023-.035-.003-.004q-.052-.08-.15-.224a29 29 0 0 0-2.596-3.257c-.827-.89-1.794-1.796-2.823-2.482A8.6 8.6 0 0 0 11.09 9.5z',
      clipRule: 'evenodd'
    })]
  });
});
let c = memo(e => {
  return jsxs('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: [jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M9 7a2 2 0 0 1 1.935 1.5H18a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5h-7.065a1.999 1.999 0 0 1-3.87 0H6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5h1.065A2 2 0 0 1 9 7m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2'
    }), jsx('path', {
      fill: 'var(--color-icon-tertiary)',
      fillRule: 'evenodd',
      d: 'M6.218 9.5q-.15.21-.269.44c-.41.779-.641 1.784-.775 2.74a21 21 0 0 0-.186 2.642 24 24 0 0 0 .015 1.17v.01l.002.018v.005l.499-.025-.5.026a.5.5 0 0 0 .995.05l.005-.102-.001-.004v-.015l-.001-.016L6 16.396l-.007-.231c-.005-.2-.009-.487-.005-.831.008-.691.048-1.606.176-2.515.129-.918.341-1.788.67-2.415q.173-.327.366-.531a2 2 0 0 1-.137-.373zm4.72 0q-.043.16-.109.31c2.52.589 4.19 1.928 5.284 3.257.735.894 1.213 1.79 1.507 2.461a9 9 0 0 1 .376 1.024l.015.053.003.012v.002l.034.095A.5.5 0 0 0 19 16.48l-.015-.1v-.003l-.002-.007-.005-.02-.011-.04-.01-.032a7 7 0 0 0-.077-.256 10 10 0 0 0-.344-.895 11.6 11.6 0 0 0-1.65-2.695 10.4 10.4 0 0 0-3.84-2.933z',
      clipRule: 'evenodd'
    })]
  });
});
let u = memo(e => {
  return jsxs('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: [jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M12 7a2 2 0 0 1 1.935 1.5H18a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5h-4.065a1.999 1.999 0 0 1-3.87 0H6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5h4.065A2 2 0 0 1 12 7m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2'
    }), jsx('path', {
      fill: 'var(--color-icon-tertiary)',
      fillRule: 'evenodd',
      d: 'M8.616 9.5c-1.158.785-1.95 1.927-2.483 3.033a12.7 12.7 0 0 0-.918 2.686 13 13 0 0 0-.201 1.136l-.005.038-.004.032-.002.018v.006l-.001.002.498.049-.498-.048a.5.5 0 0 0 .996.096v-.016l.004-.028.004-.027q.009-.077.031-.224c.03-.195.078-.477.154-.816.153-.679.413-1.577.843-2.47.637-1.322 1.616-2.584 3.139-3.152a2 2 0 0 1-.11-.315zm5.321 0a2 2 0 0 1-.11.315c1.523.569 2.502 1.83 3.139 3.152.43.893.69 1.791.842 2.47a12 12 0 0 1 .186 1.04l.003.027.004.028v.016l.021.1a.5.5 0 0 0 .976-.196l-.498.048.498-.049-.001-.002v-.006l-.002-.018q0-.014-.004-.032l-.005-.038-.034-.253a13 13 0 0 0-.167-.883 12.7 12.7 0 0 0-.918-2.686c-.533-1.106-1.325-2.248-2.483-3.033z',
      clipRule: 'evenodd'
    })]
  });
});
let f = g;
function z() {
  let e = W();
  return e.isNonEditableInstanceSublayerSelected || e.nodesAreAllInsideStacks && e.stackPositioning === 'AUTO' || !1;
}
function W() {
  return selectWithShallowEqual(e => {
    let t = e.mirror.selectionProperties;
    return {
      openFileKey: e.openFile?.key,
      stackMode: t.stackMode,
      stackLayoutSizeOptions: t.stackLayoutSizeOptions,
      stackHorizontalSize: t.stackHorizontalSize,
      stackVerticalSize: t.stackVerticalSize,
      stackPositioning: t.stackPositioning,
      someConstraintItemsSelected: t.someNodesAreConstraintItems,
      nodesAreAllInsideStacks: t.nodesAreAllInsideStacks,
      horizontalConstraint: t.horizontalConstraint,
      verticalConstraint: t.verticalConstraint,
      scrollBehavior: t.scrollBehavior,
      allHaveScrollableFrameAsParent: t.allHaveScrollableFrameAsParent,
      hasHorizontallyScrollingParent: t.hasHorizontallyScrollingParent,
      hasVerticallyScrollingParent: t.hasVerticallyScrollingParent,
      isNonEditableInstanceSublayerSelected: !!t.isNonEditableInstanceSublayerSelected,
      hasMinOrMaxWidth: t.minWidth != null || t.maxWidth != null,
      hasMinOrMaxHeight: t.minHeight != null || t.maxHeight != null
    };
  });
}
class X {
  constructor(e, t) {
    this.isHorizontal = e === 'HORIZONTAL';
    this.hasUI3V2Constraints = t;
  }
  format(e) {
    switch (e) {
      case 'MIN':
        return this.isHorizontal ? getI18nString('fullscreen.properties_panel.constraints_panel.select.left') : getI18nString('fullscreen.properties_panel.constraints_panel.select.top');
      case 'MAX':
        return this.isHorizontal ? getI18nString('fullscreen.properties_panel.constraints_panel.select.right') : getI18nString('fullscreen.properties_panel.constraints_panel.select.bottom');
      case 'STRETCH':
        return this.isHorizontal ? this.hasUI3V2Constraints ? getI18nString('fullscreen.properties_panel.constraints_panel.select.left_plus_right') : getI18nString('fullscreen.properties_panel.constraints_panel.select.left_and_right') : this.hasUI3V2Constraints ? getI18nString('fullscreen.properties_panel.constraints_panel.select.top_plus_bottom') : getI18nString('fullscreen.properties_panel.constraints_panel.select.top_and_bottom');
      case 'CENTER':
        return getI18nString('fullscreen.properties_panel.constraints_panel.select.center');
      case 'SCALE':
        return getI18nString('fullscreen.properties_panel.constraints_panel.select.scale');
      default:
        return '';
    }
  }
  getUI3DropdownOverride(e) {
    if (e === 'STRETCH') return this.isHorizontal ? getI18nString('fullscreen.properties_panel.constraints_panel.select.left_and_right_truncated') : getI18nString('fullscreen.properties_panel.constraints_panel.select.top_and_bottom_truncated');
  }
}
function q(e, t, r) {
  switch (e) {
    case 'TOP':
      return {
        verticalConstraint: ['MAX', 'STRETCH'].includes(t ?? '') ? 'STRETCH' : 'MIN',
        horizontalConstraint: r
      };
    case 'BOTTOM':
      return {
        verticalConstraint: ['MIN', 'STRETCH'].includes(t ?? '') ? 'STRETCH' : 'MAX',
        horizontalConstraint: r
      };
    case 'LEFT':
      return {
        verticalConstraint: t,
        horizontalConstraint: ['MAX', 'STRETCH'].includes(r ?? '') ? 'STRETCH' : 'MIN'
      };
    case 'RIGHT':
      return {
        verticalConstraint: t,
        horizontalConstraint: ['MIN', 'STRETCH'].includes(r ?? '') ? 'STRETCH' : 'MAX'
      };
  }
}
function J(e, t, r, n, i) {
  let a = getSingletonSceneGraph();
  let s = q(t, r, n);
  permissionScopeHandler.user(`set-sites-position-${t.toLowerCase()}`, () => {
    switch (t) {
      case 'TOP':
        a.getDirectlySelectedNodes().forEach(t => {
          SceneGraphHelpers.setNodeRenderTRBLRelativeToParent(t.guid, {
            top: e
          }, r === 'STRETCH');
        });
        break;
      case 'BOTTOM':
        a.getDirectlySelectedNodes().forEach(t => {
          SceneGraphHelpers.setNodeRenderTRBLRelativeToParent(t.guid, {
            bottom: e
          }, r === 'STRETCH');
        });
        break;
      case 'LEFT':
        a.getDirectlySelectedNodes().forEach(t => {
          SceneGraphHelpers.setNodeRenderTRBLRelativeToParent(t.guid, {
            left: e
          }, n === 'STRETCH');
        });
        break;
      case 'RIGHT':
        a.getDirectlySelectedNodes().forEach(t => {
          SceneGraphHelpers.setNodeRenderTRBLRelativeToParent(t.guid, {
            right: e
          }, n === 'STRETCH');
        });
    }
  });
  i(s);
}
function Q(e) {
  let t = useDispatch();
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = getNudgeAmounts();
  let s = useSelectionPropertyValue('topRelativeToParent');
  let o = useSelectionPropertyValue('bottomRelativeToParent');
  let l = useSelectionPropertyValue('leftRelativeToParent');
  let d = useSelectionPropertyValue('rightRelativeToParent');
  let c = useSelectionPropertyValue('centerRelativeToParent');
  let u = W();
  let h = useDeepEqualSceneValue(e => e.getDirectlySelectedNodes().map(e => e.guid));
  let m = useDeepEqualSceneValue(e => new Set(e.getDirectlySelectedNodes().map(e => e?.parentGuid)));
  let g = t => {
    u.isNonEditableInstanceSublayerSelected || (trackEventAnalytics('Constraint Changed', {
      fileKey: e.openFileKey,
      source: 'panel',
      nodeIds: h.slice(0, 50),
      parentNodeIds: Array.from(m).slice(0, 50),
      ...t
    }), permissionScopeHandler.user('update-sites-position-constraints', () => {
      fullscreenValue.updateSelectionProperties(t);
    }));
  };
  let f = u.horizontalConstraint === 'MIN' || u.horizontalConstraint === 'STRETCH';
  let y = u.horizontalConstraint === 'MAX' || u.horizontalConstraint === 'STRETCH';
  let b = u.verticalConstraint === 'MIN' || u.verticalConstraint === 'STRETCH';
  let I = u.verticalConstraint === 'MAX' || u.verticalConstraint === 'STRETCH';
  let S = u.horizontalConstraint === 'CENTER';
  let v = u.verticalConstraint === 'CENTER';
  let x = (e, t) => {
    let r = e === 'MIN' || e === 'STRETCH';
    let n = e === 'MAX' || e === 'STRETCH';
    let i = e === 'CENTER';
    let a = t === 'horizontal' ? l : s;
    let u = t === 'horizontal' ? d : o;
    let p = [];
    r && !isInvalidValue(a) && void 0 !== a && p.push(a);
    n && !isInvalidValue(u) && void 0 !== u && p.push(u);
    i && !isInvalidValue(c) && void 0 !== c && p.push(t === 'horizontal' ? c.x : c.y);
    (isInvalidValue(a) || isInvalidValue(u) || isInvalidValue(c)) && (p = MIXED_MARKER);
    r || n || i || isInvalidValue(a) || void 0 === a || (p = [a]);
    return p;
  };
  let R = (e, t) => {
    if (e.length === 0) return;
    let r = t === 'horizontal' ? f : b;
    let n = t === 'horizontal' ? y : I;
    let i = t === 'horizontal' ? S : v;
    let a = t === 'horizontal' ? ['LEFT', 'RIGHT'] : ['TOP', 'BOTTOM'];
    i && void 0 !== e[0] ? function (e, t, r, n, i) {
      let a = getSingletonSceneGraph();
      let s = t === 'horizontal' ? 'centerHorizontal' : 'centerVertical';
      permissionScopeHandler.user(`set-sites-position-center-${t}`, () => {
        a.getDirectlySelectedNodes().forEach(t => {
          SceneGraphHelpers?.setNodeRenderTRBLRelativeToParent(t.guid, {
            [s]: e
          }, !1);
        });
      });
      i({
        verticalConstraint: r,
        horizontalConstraint: n
      });
    }(e[0], t, u.verticalConstraint, u.horizontalConstraint, g) : e.length === 2 || r && n ? (r && n && void 0 !== e[0] && e.push(e[0]), void 0 !== e[0] && J(e[0], a[0], u.verticalConstraint, u.horizontalConstraint, g), void 0 !== e[1] && J(e[1], a[1], u.verticalConstraint, u.horizontalConstraint, g)) : void 0 !== e[0] && (n ? J(e[0], a[1], u.verticalConstraint, u.horizontalConstraint, g) : J(e[0], a[0], u.verticalConstraint, u.horizontalConstraint, g));
  };
  let L = (e, t) => {
    let r = e === 'MIN' || e === 'STRETCH';
    let n = e === 'MAX' || e === 'STRETCH';
    return e === 'CENTER' ? getI18nString('fullscreen.properties_panel.transform_panel.c') : r && !n ? t === 'horizontal' ? getI18nString('fullscreen.properties_panel.transform_panel.l') : getI18nString('fullscreen.properties_panel.transform_panel.t') : n && !r ? t === 'horizontal' ? getI18nString('fullscreen.properties_panel.transform_panel.r') : getI18nString('fullscreen.properties_panel.transform_panel.b') : t === 'horizontal' ? getI18nString('fullscreen.properties_panel.transform_panel.x') : getI18nString('fullscreen.properties_panel.transform_panel.y');
  };
  let P = (e, t) => {
    let r = e === 'MIN' || e === 'STRETCH';
    let n = e === 'MAX' || e === 'STRETCH';
    return r && !n ? t === 'horizontal' ? getI18nString('fullscreen.properties_panel.transform_panel.left') : getI18nString('fullscreen.properties_panel.transform_panel.top') : n && !r ? t === 'horizontal' ? getI18nString('fullscreen.properties_panel.transform_panel.right') : getI18nString('fullscreen.properties_panel.transform_panel.bottom') : t === 'horizontal' ? getI18nString('fullscreen.properties_panel.transform_panel.horizontal_constraints') : getI18nString('fullscreen.properties_panel.transform_panel.vertical_constraints');
  };
  let D = jsx(PercentageInputWithMinMax, {
    bigNudgeAmount,
    'data-tooltip': P(u.horizontalConstraint, 'horizontal'),
    'data-tooltip-type': KindEnum.TEXT,
    'dispatch': t,
    'inputClassName': LI,
    'onValueChange': (e, t) => {
      t === yesNoTrackingEnum.YES && Fullscreen.temporarilyHideOverlay(SnapMode.SELECTION);
      R(e, 'horizontal');
    },
    'recordingKey': generateRecordingKey(e.recordingKey, 'collapsed-horizontal-constraint-input'),
    smallNudgeAmount,
    'softDisabled': !f && !y && !S,
    'value': x(u.horizontalConstraint, 'horizontal'),
    'children': jsx('span', {
      className: `${QK} svg`,
      children: L(u.horizontalConstraint, 'horizontal')
    })
  });
  let k = jsx(PercentageInputWithMinMax, {
    bigNudgeAmount,
    'data-tooltip': P(u.verticalConstraint, 'vertical'),
    'data-tooltip-type': KindEnum.TEXT,
    'dispatch': t,
    'inputClassName': LI,
    'onValueChange': (e, t) => {
      t === yesNoTrackingEnum.YES && Fullscreen.temporarilyHideOverlay(SnapMode.SELECTION);
      R(e, 'vertical');
    },
    'recordingKey': generateRecordingKey(e.recordingKey, 'collapsed-vertical-constraint-input'),
    smallNudgeAmount,
    'softDisabled': !b && !I && !v,
    'value': x(u.verticalConstraint, 'vertical'),
    'children': jsx('span', {
      className: `${QK} svg`,
      children: L(u.verticalConstraint, 'vertical')
    })
  });
  return jsx(fn, {
    dataTestId: 'x-y-inputs-row-for-collapsed-constraints',
    ref: e.rowRef,
    leftLabel: renderI18nText('properties.label.position'),
    leftInput: D,
    rightLabel: null,
    rightInput: k,
    icon: e.editConstraintsIcon
  });
}
function ea({
  options: e,
  optionClassname: t,
  inputRef: r
}) {
  let [a, s] = useState(null);
  let [o, l] = useState(0);
  let d = useMemo(() => e.map(() => createRef()), [e]);
  let c = useMemo(() => jsx(Fragment, {
    children: e.map((e, r) => jsx('span', {
      ref: d[r],
      className: t,
      children: e
    }, r))
  }), [e, d, t]);
  useLayoutEffect(() => {
    let e = r?.current;
    e && l(e.getBoundingClientRect().width);
    let t = new ResizeObserver(e => {
      l(e[0].contentRect.width);
    });
    if (e) {
      t.observe(e);
      return () => t.unobserve(e);
    }
  }, [r]);
  useLayoutEffect(() => {
    if (!d.length) {
      a !== null && s(null);
      return;
    }
    let t = d.map(e => o - (e.current?.getBoundingClientRect().width ?? 0)).reduce((e, t, r, n) => t < n[e] && t >= 0 ? r : e, 0);
    a !== e[t] && s(e[t]);
  }, [a, s, o, e, d]);
  return {
    measurementNode: c,
    bestText: a
  };
}
let eo = new class {
  format(e) {
    if (e === 'AUTO') return getI18nString('fullscreen.auto');
  }
}();
function el(e) {
  let t = z();
  let r = new X(e.axis, !0);
  let a = isInvalidValue(e.constraint) ? [] : [r.getUI3DropdownOverride(e.constraint), r.format(e.constraint)].filter(e => e != null);
  let s = useRef(null);
  let {
    measurementNode,
    bestText
  } = ea({
    options: a,
    optionClassname: '',
    inputRef: s
  });
  if (e.readOnly && isValidValue(e.constraint)) {
    let t = new X(e.axis, !0).format(e.constraint);
    return jsxs('div', {
      className: f()(e.className, 'constraint_select--flexContainer--a9ZPi'),
      children: [jsx(SvgComponent, {
        svg: e.axis === 'HORIZONTAL' ? _$$A2 : _$$A,
        className: Vb
      }), jsx('span', {
        className: 'constraint_select--readOnlyText--uBzWh ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd',
        children: t
      })]
    });
  }
  let d = jsx('div', {
    className: 'constraint_select--iconSecondary--13AAc',
    children: e.axis === 'HORIZONTAL' ? jsx(_$$w, {}) : jsx(_$$T, {})
  });
  let c = isValidValue(e.constraint) ? bestText : void 0;
  let u = jsx('div', {
    className: 'constraint_select--hideMeasurementNode--Of14C',
    children: measurementNode
  });
  let p = e.axis === 'HORIZONTAL' ? getI18nString('fullscreen.properties_panel.constraints_panel.constraints.horizontal.tooltip') : getI18nString('fullscreen.properties_panel.constraints_panel.constraints.vertical.tooltip');
  let _ = jsx('div', {
    className: 'constraint_select--selectText--IcqbB',
    ref: s,
    children: c || r.format(e.constraint)
  });
  return jsxs(Fragment, {
    children: [jsxs(_$$bL, {
      onChange: t ? noop : t => {
        let r = e.axis === 'HORIZONTAL' ? 'horizontalConstraint' : 'verticalConstraint';
        e.updateConstraints({
          [r]: t
        }, !0);
      },
      value: t ? eo.format('AUTO') : r.format(e.constraint),
      recordingKey: generateRecordingKey(e, 'select'),
      children: [jsx(l9, {
        label: jsx(HiddenLabel, {
          children: p
        }),
        width: 'fill',
        disabled: t,
        iconLead: d,
        children: _
      }), jsx(mc, {
        'data-testId': `${e.axis}-constraint-select`,
        'children': t ? jsx(_$$c$, {
          disabled: !0,
          value: 'AUTO',
          children: c || eo.format('AUTO')
        }) : ['MIN', 'MAX', 'STRETCH', 'CENTER', 'SCALE'].map(i => {
          let a = e.disableStretchScaleConstraints && ['STRETCH', 'SCALE'].includes(i);
          return jsx(_$$c$, {
            value: i,
            disabled: t || a,
            children: r.format(i)
          }, i);
        })
      })]
    }), u]
  });
}
let ec = 'constraint_selector--outerRow--vEwHH';
let eu = 'constraint_selector--compactOuterRow--lVbKK constraint_selector--outerRow--vEwHH';
let ep = 'constraint_selector--hover--QinHp';
function e_(e) {
  let [t, r] = useState(null);
  let [a, s] = useState(null);
  let o = z();
  let l = o ? void 0 : e.horizontalConstraint;
  let d = o ? void 0 : e.verticalConstraint;
  let c = e => ['top', 'bottom'].includes(e) ? 'VERTICAL' : 'HORIZONTAL';
  let u = e => e === 'HORIZONTAL' ? l : d;
  let p = e => e.shiftKey || e.metaKey;
  let _ = (t, r) => n => {
    if (e.readOnly) return;
    let i = r;
    if (p(n) || e.isCompact) {
      let n = r === 'MIN' ? 'MAX' : 'MIN';
      let a = u(t);
      let s = t === 'VERTICAL' ? !e.disableVerticalStretchScaleConstraints : !e.disableHorizontalStretchScaleConstraints;
      a === r && s ? i = 'SCALE' : a === n && s ? i = 'STRETCH' : a === 'STRETCH' && (i = n);
    }
    t === 'VERTICAL' ? e.updateConstraints({
      verticalConstraint: i
    }) : e.updateConstraints({
      horizontalConstraint: i
    });
  };
  let h = t => () => {
    e.readOnly || r(t);
  };
  let m = () => {
    r(null);
  };
  let g = e => {
    let t = e.target.parentElement;
    if (!t) {
      console.error(`constraint selector inner target element is ${t}`);
      return null;
    }
    let {
      top,
      left,
      width,
      height
    } = t.getBoundingClientRect();
    let s = Math.abs(e.clientX - left - width / 2);
    let o = Math.abs(e.clientY - top - height / 2);
    return s < 3 && o < 3 ? 'HORIZONTAL' : s < o ? 'VERTICAL' : 'HORIZONTAL';
  };
  let E = t => {
    if (!e.readOnly) {
      if (d !== 'CENTER' || p(t)) {
        if (l !== 'CENTER' || p(t)) {
          if (g(t) === 'VERTICAL') {
            let r = p(t) && d === 'CENTER' ? 'SCALE' : 'CENTER';
            e.updateConstraints({
              verticalConstraint: r
            });
          } else {
            let r = p(t) && l === 'CENTER' ? 'SCALE' : 'CENTER';
            e.updateConstraints({
              horizontalConstraint: r
            });
          }
        } else {
          e.updateConstraints({
            verticalConstraint: 'CENTER'
          });
        }
      } else {
        e.updateConstraints({
          horizontalConstraint: 'CENTER'
        });
      }
    }
  };
  let y = t => {
    e.readOnly || (d === 'CENTER' ? s('HORIZONTAL') : l === 'CENTER' ? s('VERTICAL') : s(g(t)));
  };
  let b = () => {
    s(null);
  };
  let I = e => f()({
    'constraint_selector--selected--Eb73C': e,
    'constraint_selector--disabled--hLCxk': o
  });
  let S = (r, n) => {
    let i = c(r) === 'HORIZONTAL' ? e.isCompact ? 'constraint_selector--compactOuterHorizontalHandle--LVIo0 constraint_selector--outerHorizontalHandle--5Riwa constraint_selector--_handle--LH-q2' : 'constraint_selector--outerHorizontalHandle--5Riwa constraint_selector--_handle--LH-q2' : e.isCompact ? 'constraint_selector--compactOuterVerticalHandle--bF8mY constraint_selector--outerVerticalHandle--SrFsJ constraint_selector--_handle--LH-q2' : 'constraint_selector--outerVerticalHandle--SrFsJ constraint_selector--_handle--LH-q2';
    return f()(i, I(n), {
      [ep]: t === r && !o
    });
  };
  let v = (t, r) => {
    let n = t === 'HORIZONTAL' ? e.isCompact ? 'constraint_selector--compactInnerHorizontalHandle--voVqQ constraint_selector--_compactInnerHandle--gqwrT constraint_selector--_handle--LH-q2' : 'constraint_selector--innerHorizontalHandle--Zfxr0 constraint_selector--_innerHandle--UA2jx constraint_selector--_handle--LH-q2' : e.isCompact ? 'constraint_selector--compactInnerVerticalHandle--UTZB- constraint_selector--_compactInnerHandle--gqwrT constraint_selector--_handle--LH-q2' : 'constraint_selector--innerVerticalHandle--slyp1 constraint_selector--_innerHandle--UA2jx constraint_selector--_handle--LH-q2';
    return f()(n, I(r), {
      [ep]: a === t && !o
    });
  };
  let A = t => {
    let r = c(t);
    let i = u(r);
    let a = ['top', 'left'].includes(t) ? 'MIN' : 'MAX';
    let s = [a, 'STRETCH'].includes(i);
    let o = r === 'HORIZONTAL' ? e.isCompact ? 'constraint_selector--compactOuterHorizontalTarget--5-m-j constraint_selector--outerHorizontalTarget--2Tsd3' : 'constraint_selector--outerHorizontalTarget--2Tsd3' : e.isCompact ? 'constraint_selector--compactOuterVerticalTarget--0Lb9I constraint_selector--outerVerticalTarget--m0eT7' : 'constraint_selector--outerVerticalTarget--m0eT7';
    let l = S(t, s);
    return jsx(RecordableDiv, {
      className: o,
      recordingKey: generateRecordingKey(e, 'constraint', t),
      onMouseDown: _(r, a),
      onMouseEnter: h(t),
      onMouseLeave: m,
      children: jsx('div', {
        className: l
      })
    });
  };
  let x = t => {
    let r = t === 'centerX' ? 'HORIZONTAL' : 'VERTICAL';
    let i = u(r);
    let a = r === 'HORIZONTAL' ? 'constraint_selector--innerUI3V2HorizontalTarget--kJ2Ck constraint_selector--_innerUI3V2Target--PtYtd' : 'constraint_selector--innerUI3V2VerticalTarget--rNFiS constraint_selector--_innerUI3V2Target--PtYtd';
    return jsx(RecordableDiv, {
      className: a,
      recordingKey: generateRecordingKey(e, 'constraint', t),
      onMouseDown: E,
      onMouseMove: y,
      onMouseLeave: b,
      children: jsx('div', {
        className: v(r, i === 'CENTER')
      })
    });
  };
  let N = jsxs('div', {
    className: e.isCompact ? 'constraint_selector--compactSelectorContainer--tn5PR constraint_selector--selectorContainer--stEPY' : 'constraint_selector--selectorContainer--stEPY',
    children: [jsx('div', {
      className: e.isCompact ? eu : ec,
      children: A('top')
    }), jsxs('div', {
      className: 'constraint_selector--innerRow--Sq9bp',
      children: [A('left'), (() => {
        let t = x('centerX');
        let r = x('centerY');
        return jsx('div', {
          className: e.isCompact ? 'constraint_selector--compactInnerTarget--RzKnh constraint_selector--innerTarget--8C-rg' : 'constraint_selector--innerTarget--8C-rg',
          children: l === 'CENTER' ? jsxs(Fragment, {
            children: [r, t]
          }) : jsxs(Fragment, {
            children: [t, r]
          })
        });
      })(), A('right')]
    }), jsx('div', {
      className: e.isCompact ? eu : ec,
      children: A('bottom')
    })]
  });
  return e.isCompact ? N : jsx('div', {
    className: 'constraint_selector--ui3V2ConstraintsContainer--pW-hd',
    children: N
  });
}
function eh(e, t = !1) {
  let r = W();
  if ((e === 'HORIZONTAL' ? r.stackHorizontalSize : r.stackVerticalSize) === LayoutSizingMode.FILL_CONTAINER || r.stackMode !== 'NONE' && (e === 'HORIZONTAL' ? r.hasMinOrMaxWidth : r.hasMinOrMaxHeight)) return !0;
  if (r.scrollBehavior !== MIXED_MARKER && (t || r.scrollBehavior !== 'FIXED_WHEN_CHILD_OF_SCROLLING_FRAME')) return !1;
  let n = e === 'HORIZONTAL' ? r.hasHorizontallyScrollingParent : r.hasVerticallyScrollingParent;
  return !!normalizeValue(n);
}
function eg(e) {
  let [t, r] = useState(null);
  let a = z();
  let s = a ? void 0 : e.horizontalConstraint;
  let o = a ? void 0 : e.verticalConstraint;
  let l = e => ['top', 'bottom'].includes(e) ? 'VERTICAL' : 'HORIZONTAL';
  let d = e => e === 'HORIZONTAL' ? s : o;
  let c = e => e.shiftKey || e.metaKey;
  let u = (t, r) => n => {
    if (e.readOnly) return;
    let i = r;
    if (c(n)) {
      let n = r === 'MIN' ? 'MAX' : 'MIN';
      let a = d(t);
      let s = t === 'VERTICAL' ? !e.disableVerticalStretchScaleConstraints : !e.disableHorizontalStretchScaleConstraints;
      a === r && s ? i = 'SCALE' : a === n && s ? i = 'STRETCH' : a === 'STRETCH' && (i = n);
    }
    t === 'VERTICAL' ? e.updateConstraints({
      verticalConstraint: i
    }) : e.updateConstraints({
      horizontalConstraint: i
    });
  };
  let p = e => {
    let t = e.target.parentElement;
    if (!t) {
      console.error(`constraint selector inner target element is ${t}`);
      return null;
    }
    let {
      top,
      left,
      width,
      height
    } = t.getBoundingClientRect();
    let s = Math.abs(e.clientX - left - width / 2);
    let o = Math.abs(e.clientY - top - height / 2);
    return s < 3 && o < 3 ? 'HORIZONTAL' : o < s ? 'VERTICAL' : 'HORIZONTAL';
  };
  let _ = t => {
    if (!e.readOnly) {
      if (o !== 'CENTER' || c(t)) {
        if (s !== 'CENTER' || c(t)) {
          if (p(t) === 'VERTICAL') {
            let r = c(t) && o === 'CENTER' ? 'SCALE' : 'CENTER';
            e.updateConstraints({
              verticalConstraint: r
            });
          } else {
            let r = c(t) && s === 'CENTER' ? 'SCALE' : 'CENTER';
            e.updateConstraints({
              horizontalConstraint: r
            });
          }
        } else {
          e.updateConstraints({
            verticalConstraint: 'CENTER'
          });
        }
      } else {
        e.updateConstraints({
          horizontalConstraint: 'CENTER'
        });
      }
    }
  };
  let h = t => {
    e.readOnly || (o === 'CENTER' ? r('HORIZONTAL') : s === 'CENTER' ? r('VERTICAL') : r(p(t)));
  };
  let m = () => {
    r(null);
  };
  let g = t => {
    let r = l(t);
    let i = d(r);
    let s = ['top', 'left'].includes(t) ? 'MIN' : 'MAX';
    let o = [s, 'STRETCH'].includes(i);
    let c = i === 'SCALE';
    return jsx(RecordableDiv, {
      ...stylex.props(eE.baseConstraintButton, eE[t]),
      recordingKey: generateRecordingKey(e, 'constraint', t),
      onMouseDown: u(r, s),
      children: c ? jsx('div', {
        ...stylex.props(eT[t]),
        children: jsx(ef, {})
      }) : jsx('div', {
        ...stylex.props(eb.baseHandle, r === 'HORIZONTAL' && eb.horizontalHandle, o && (r === 'HORIZONTAL' ? eb.horizontalHandleSelected : eb.verticalHandleSelected), a && eb.handleDisabled)
      })
    });
  };
  let f = r => {
    let i = r === 'centerX' ? 'HORIZONTAL' : 'VERTICAL';
    let a = d(i) === 'CENTER';
    return jsx(RecordableDiv, {
      ...stylex.props(ey.baseInnerTarget, i === 'HORIZONTAL' ? ey.horizontalInnerTarget : ey.verticalInnerTarget, !a && t === i && ey.innerTargetHover),
      recordingKey: generateRecordingKey(e, 'constraint', r),
      onMouseDown: _,
      onMouseMove: h,
      onMouseLeave: m,
      children: jsx('div', {
        ...stylex.props(ey.baseInnerTarget, i === 'HORIZONTAL' ? ey.horizontalInnerConstraintHandle : ey.verticalInnerConstraintHandle, a && (i === 'HORIZONTAL' ? eb.horizontalHandleSelected : eb.verticalHandleSelected))
      })
    });
  };
  return jsxs('div', {
    className: 'xrvj5dj x11ny1cx x1yp5cz5 x6s0dn4 xnfjc3l x14h49td x1i3ajwb x1yjdb4r x19y5rnk',
    children: [jsx('div', {
      className: 'x78zum5 xl56j7k x6s0dn4 x16b7bv',
      children: g('top')
    }), jsx('div', {
      className: 'x78zum5 xl56j7k x6s0dn4 x14oktoh',
      children: g('right')
    }), jsx('div', {
      className: 'xl8s46a x19y5rnk x78zum5 xl56j7k x6s0dn4 xh8yej3 x5yr21d',
      children: (() => {
        let e = f('centerX');
        let t = f('centerY');
        return jsx('div', {
          className: 'x3psx0u x1n2onr6 xlzg99y xi0exxh x78zum5 x6s0dn4 xl56j7k',
          children: s === 'CENTER' ? jsxs(Fragment, {
            children: [t, e]
          }) : jsxs(Fragment, {
            children: [e, t]
          })
        });
      })()
    }), jsx('div', {
      className: 'x78zum5 xl56j7k x6s0dn4 xcmxgx4',
      children: g('bottom')
    }), jsx('div', {
      className: 'x78zum5 xl56j7k x6s0dn4 xkscesj',
      children: g('left')
    })]
  });
}
function ef() {
  return jsx('svg', {
    className: 'x1ayoduh',
    width: '17',
    height: '26',
    viewBox: '0 0 17 26',
    fill: 'none',
    children: jsx('path', {
      d: 'M3.5 3L13.5 13L3.5 23',
      strokeWidth: '6',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  });
}
let eE = {
  baseConstraintButtonContainer: {
    display: 'x78zum5',
    justifyContent: 'xl56j7k',
    alignItems: 'x6s0dn4',
    $$css: !0
  },
  topConstraintGrid: {
    gridArea: 'x16b7bv',
    gridRow: null,
    gridRowStart: null,
    gridRowEnd: null,
    gridColumn: null,
    gridColumnStart: null,
    gridColumnEnd: null,
    $$css: !0
  },
  rightConstraintGrid: {
    gridArea: 'x14oktoh',
    gridRow: null,
    gridRowStart: null,
    gridRowEnd: null,
    gridColumn: null,
    gridColumnStart: null,
    gridColumnEnd: null,
    $$css: !0
  },
  bottomConstraintGrid: {
    gridArea: 'xcmxgx4',
    gridRow: null,
    gridRowStart: null,
    gridRowEnd: null,
    gridColumn: null,
    gridColumnStart: null,
    gridColumnEnd: null,
    $$css: !0
  },
  leftConstraintGrid: {
    gridArea: 'xkscesj',
    gridRow: null,
    gridRowStart: null,
    gridRowEnd: null,
    gridColumn: null,
    gridColumnStart: null,
    gridColumnEnd: null,
    $$css: !0
  },
  baseConstraintButton: {
    'display': 'x78zum5',
    'justifyContent': 'xl56j7k',
    'alignItems': 'x6s0dn4',
    ':hover_backgroundColor': 'x12tve8b',
    '$$css': !0
  },
  top: {
    clipPath: 'xhx93ge',
    width: 'xyg06dn',
    height: 'x1v9usgg',
    $$css: !0
  },
  right: {
    clipPath: 'x1k29xe',
    width: 'x6jxa94',
    height: 'xi881uo',
    $$css: !0
  },
  bottom: {
    clipPath: 'x145bw3a',
    width: 'xyg06dn',
    height: 'x1v9usgg',
    $$css: !0
  },
  left: {
    clipPath: 'x1qhnhve',
    width: 'x6jxa94',
    height: 'xi881uo',
    $$css: !0
  }
};
let ey = {
  baseInnerTarget: {
    position: 'x10l6tqk',
    display: 'x78zum5',
    justifyContent: 'xl56j7k',
    alignItems: 'x6s0dn4',
    $$css: !0
  },
  innerTargetHover: {
    '::before_content': 'x1cpjm7i',
    '::before_zIndex': 'x12maryy',
    '::before_position': 'x1hmns74',
    '::before_height': 'x1vuf1so',
    '::before_width': 'xs0xu5o',
    '::before_borderRadius': 'xrhax15',
    '::before_borderStartStartRadius': null,
    '::before_borderStartEndRadius': null,
    '::before_borderEndStartRadius': null,
    '::before_borderEndEndRadius': null,
    '::before_borderTopLeftRadius': null,
    '::before_borderTopRightRadius': null,
    '::before_borderBottomLeftRadius': null,
    '::before_borderBottomRightRadius': null,
    '::before_background': 'xtlwyzb',
    '::before_backgroundAttachment': null,
    '::before_backgroundClip': null,
    '::before_backgroundColor': null,
    '::before_backgroundImage': null,
    '::before_backgroundOrigin': null,
    '::before_backgroundPosition': null,
    '::before_backgroundPositionX': null,
    '::before_backgroundPositionY': null,
    '::before_backgroundRepeat': null,
    '::before_backgroundSize': null,
    '$$css': !0
  },
  horizontalInnerTarget: {
    height: 'xi0exxh',
    width: 'x10vfzb2',
    paddingTop: 'x1iorvi4',
    paddingBottom: 'xjkvuk6',
    borderRadius: 'x192jxwq',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  verticalInnerTarget: {
    height: 'x6w4g8m',
    width: 'xlzg99y',
    paddingLeft: 'x6wrskw',
    paddingRight: 'xmzs88n',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    borderRadius: 'x192jxwq',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  horizontalInnerConstraintHandle: {
    backgroundColor: 'x1vc12gn',
    width: 'x1i1rx1s',
    height: 'x18gnavp',
    zIndex: 'xhtitgo',
    $$css: !0
  },
  verticalInnerConstraintHandle: {
    backgroundColor: 'x1vc12gn',
    height: 'xjm9jq1',
    width: 'x1fxhmyf',
    zIndex: 'xhtitgo',
    $$css: !0
  }
};
let eb = {
  baseHandle: {
    backgroundColor: 'x1vc12gn',
    flex: 'x3psx0u',
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    height: 'xjm9jq1',
    width: 'x1fxhmyf',
    $$css: !0
  },
  handleDisabled: {
    backgroundColor: 'xc4qkwg',
    $$css: !0
  },
  verticalHandleSelected: {
    backgroundColor: 'x6qnwee',
    borderRadius: 'x192jxwq',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    height: 'xuoj239',
    $$css: !0
  },
  horizontalHandleSelected: {
    backgroundColor: 'x6qnwee',
    borderRadius: 'x192jxwq',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    width: 'x1g8rjiy',
    $$css: !0
  },
  horizontalHandle: {
    height: 'x18gnavp',
    width: 'x1i1rx1s',
    $$css: !0
  }
};
let eT = {
  scaleChevon: {
    stroke: 'x1ayoduh',
    $$css: !0
  },
  right: {
    transform: 'x1a33avv',
    $$css: !0
  },
  top: {
    transform: 'x9bhbcj',
    $$css: !0
  },
  bottom: {
    transform: 'x1snpbez',
    $$css: !0
  },
  left: {
    transform: 'x1pyq5x7',
    $$css: !0
  }
};
let eI = 'expanded_constraint_control--tbrlInnerInput--zEvmT';
let eS = 'expanded_constraint_control--scrubbableInputEnabled--pOHsZ';
let ev = 'expanded_constraint_control--scrubbableInputSoftDisabled--1qsfu';
function eA(e) {
  let t = useDispatch();
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = getNudgeAmounts();
  let o = useSelectionPropertyValue('topRelativeToParent');
  let l = useSelectionPropertyValue('rightRelativeToParent');
  let d = useSelectionPropertyValue('bottomRelativeToParent');
  let c = useSelectionPropertyValue('leftRelativeToParent');
  let u = W();
  let h = useDeepEqualSceneValue(e => e.getDirectlySelectedNodes().map(e => e.guid));
  let m = useDeepEqualSceneValue(e => new Set(e.getDirectlySelectedNodes().map(e => e?.parentGuid)));
  let [g, f] = useState(!1);
  let [y, b] = useState(!1);
  let [S, v] = useState(!1);
  let [x, R] = useState(!1);
  let L = e => {
    if ((e === 'HORIZONTAL' ? u.stackHorizontalSize : u.stackVerticalSize) === LayoutSizingMode.FILL_CONTAINER || u.stackMode !== 'NONE' && (e === 'HORIZONTAL' ? u.hasMinOrMaxWidth : u.hasMinOrMaxHeight)) return !0;
    if (u.scrollBehavior !== MIXED_MARKER) return !1;
    let t = e === 'HORIZONTAL' ? u.hasHorizontallyScrollingParent : u.hasVerticallyScrollingParent;
    return !!normalizeValue(t);
  };
  let P = t => {
    u.isNonEditableInstanceSublayerSelected || (trackEventAnalytics('Constraint Changed', {
      fileKey: e.openFileKey,
      source: 'panel',
      nodeIds: h.slice(0, 50),
      parentNodeIds: Array.from(m).slice(0, 50),
      ...t
    }), permissionScopeHandler.user('update-sites-position-constraints', () => {
      fullscreenValue.updateSelectionProperties(t);
    }));
  };
  let D = L('HORIZONTAL');
  let k = L('VERTICAL');
  let j = jsx(ExpressionInput, {
    bigNudgeAmount,
    'childrenAtEnd': !0,
    'className': u.verticalConstraint === 'MIN' || u.verticalConstraint === 'STRETCH' ? eS : ev,
    'data-tooltip': getI18nString('sites.panel.position_panel.top'),
    'data-tooltip-type': KindEnum.TEXT,
    'dispatch': t,
    'inputClassName': eI,
    'onBlur': () => {
      permissionScopeHandler.user('blur-sites-position-top', () => {
        g && P(q('TOP', u.verticalConstraint, u.horizontalConstraint));
      });
      f(!1);
    },
    'onKeyDown': e => {
      isNaN(Number(e.key)) || f(!0);
    },
    'onValueChange': e => {
      J(e, 'TOP', u.verticalConstraint, u.horizontalConstraint, P);
    },
    'recordingKey': generateRecordingKey(e.recordingKey, 'top-constraint-input'),
    smallNudgeAmount,
    'softDisabled': !(u.verticalConstraint === 'MIN' || u.verticalConstraint === 'STRETCH'),
    'value': isInvalidValue(o) ? MIXED_MARKER : o
  });
  let U = jsx(ExpressionInput, {
    bigNudgeAmount,
    'childrenAtEnd': !0,
    'className': u.verticalConstraint === 'MAX' || u.verticalConstraint === 'STRETCH' ? eS : ev,
    'data-tooltip': getI18nString('sites.panel.position_panel.bottom'),
    'data-tooltip-type': KindEnum.TEXT,
    'dispatch': t,
    'inputClassName': eI,
    'onBlur': () => {
      permissionScopeHandler.user('blur-sites-position-bottom', () => {
        S && P(q('BOTTOM', u.verticalConstraint, u.horizontalConstraint));
        v(!1);
      });
    },
    'onKeyDown': e => {
      isNaN(Number(e.key)) || v(!0);
    },
    'onValueChange': e => {
      J(e, 'BOTTOM', u.verticalConstraint, u.horizontalConstraint, P);
    },
    'recordingKey': generateRecordingKey(e.recordingKey, 'bottom-constraint-input'),
    smallNudgeAmount,
    'softDisabled': !(u.verticalConstraint === 'MAX' || u.verticalConstraint === 'STRETCH'),
    'value': isInvalidValue(d) ? MIXED_MARKER : d
  });
  let G = jsx(ExpressionInput, {
    bigNudgeAmount,
    'childrenAtEnd': !0,
    'className': u.horizontalConstraint === 'MIN' || u.horizontalConstraint === 'STRETCH' ? eS : ev,
    'data-tooltip': getI18nString('sites.panel.position_panel.left'),
    'data-tooltip-type': KindEnum.TEXT,
    'dispatch': t,
    'inputClassName': eI,
    'onBlur': () => {
      permissionScopeHandler.user('blur-sites-position-left', () => {
        x && P(q('LEFT', u.verticalConstraint, u.horizontalConstraint));
        R(!1);
      });
    },
    'onKeyDown': e => {
      isNaN(Number(e.key)) || R(!0);
    },
    'onValueChange': e => {
      J(e, 'LEFT', u.verticalConstraint, u.horizontalConstraint, P);
    },
    'recordingKey': generateRecordingKey(e.recordingKey, 'left-constraint-input'),
    smallNudgeAmount,
    'softDisabled': !(u.horizontalConstraint === 'MIN' || u.horizontalConstraint === 'STRETCH'),
    'value': isInvalidValue(c) ? MIXED_MARKER : c
  });
  let V = jsx(ExpressionInput, {
    bigNudgeAmount,
    'childrenAtEnd': !0,
    'className': u.horizontalConstraint === 'MAX' || u.horizontalConstraint === 'STRETCH' ? eS : ev,
    'data-tooltip': getI18nString('sites.panel.position_panel.right'),
    'data-tooltip-type': KindEnum.TEXT,
    'dispatch': t,
    'inputClassName': eI,
    'onBlur': () => {
      permissionScopeHandler.user('blur-sites-position-right', () => {
        y && P(q('RIGHT', u.verticalConstraint, u.horizontalConstraint));
        b(!1);
      });
    },
    'onKeyDown': e => {
      isNaN(Number(e.key)) || b(!0);
    },
    'onValueChange': e => {
      J(e, 'RIGHT', u.verticalConstraint, u.horizontalConstraint, P);
    },
    'recordingKey': generateRecordingKey(e.recordingKey, 'right-constraint-input'),
    smallNudgeAmount,
    'softDisabled': !(u.horizontalConstraint === 'MAX' || u.horizontalConstraint === 'STRETCH'),
    'value': isInvalidValue(l) ? MIXED_MARKER : l
  });
  let H = jsx(AutoInteractableWrapper, {
    name: 'constraint_selector',
    children: jsx(eg, {
      horizontalConstraint: u.horizontalConstraint,
      verticalConstraint: u.verticalConstraint,
      someConstraintItemsSelected: u.someConstraintItemsSelected,
      updateConstraints: P,
      disableHorizontalStretchScaleConstraints: D,
      disableVerticalStretchScaleConstraints: k,
      dispatch: t,
      recordingKey: generateRecordingKey(e, 'constraintSelector'),
      readOnly: e.readOnly
    })
  });
  return jsxs('div', {
    className: 'x1v8gsql x19y5rnk xfawy5m x1gslohp',
    children: [jsx('div', {
      className: 'x78zum5 xl56j7k x6s0dn4',
      children: jsx('div', {
        className: 'x1bx8frr xjkvuk6',
        children: j
      })
    }), jsxs('div', {
      className: 'x78zum5 xl56j7k x6s0dn4',
      children: [jsx('div', {
        className: 'x1bx8frr xmzs88n',
        children: G
      }), jsx('div', {
        children: H
      }), jsx('div', {
        className: 'x1bx8frr x6wrskw',
        children: V
      })]
    }), jsx('div', {
      className: 'x78zum5 xl56j7k x6s0dn4',
      children: jsx('div', {
        className: 'x1bx8frr x1iorvi4',
        children: U
      })
    })]
  });
}
function ex(e) {
  return jsxs('div', {
    className: 'x78zum5 xdt5ytf x1jnr06f',
    children: [jsx(DE, {
      label: getI18nString('fullscreen.properties_panel.constraints_panel.constraints'),
      input: jsx(eA, {
        openFileKey: e.openFileKey,
        recordingKey: e.recordingKey
      }),
      icon: e.editConstraintsIcon
    }), jsx(fn, {
      dataTestId: 'x-y-inputs-row',
      ref: e.rowRef,
      leftLabel: null,
      leftInput: e.widthSelect,
      rightLabel: null,
      rightInput: e.heightSelect,
      icon: null
    })]
  });
}
let eF = [{
  groupName: g1.phonePresets,
  presets: sE.phonePresets
}, {
  groupName: g1.tabletPresets,
  presets: sE.tabletPresets
}, {
  groupName: g1.desktopPresets,
  presets: sE.desktopPresets
}, {
  groupName: g1.presentationPresets,
  presets: sE.presentationPresets
}, {
  groupName: g1.watchPresets,
  presets: sE.watchPresets
}, {
  groupName: g1.paperPresets,
  presets: sE.paperPresets
}, {
  groupName: g1.socialMediaPresets,
  presets: sE.socialMediaPresets
}, {
  groupName: g1.figmaPresets,
  presets: sE.figmaPresets
}, {
  groupName: g1.archivedPresets,
  presets: sE.archivedPresets
}];
let ej = e => isInvalidValue(e) ? getI18nString('fullscreen.mixed') : e === ContainerType.FRAME ? getI18nString('viewer.options_menu.frame') : e === ContainerType.GROUP ? getI18nString('viewer.options_menu.group') : e === ContainerType.SECTION ? getI18nString('viewer.options_menu.section') : e;
let eU = () => {
  fullscreenValue.triggerActionInUserEditScope('replace-selected-frame-with-section');
};
let eB = () => {
  fullscreenValue.triggerActionInUserEditScope('replace-selected-section-with-frame');
};
let eG = e => {
  permissionScopeHandler.user('change-selection-to-frame-or-group', () => {
    Fullscreen?.changeSelectionToFrameOrGroup(e);
    PrototypingTsApi?.updateCurrentPagePrototypeDeviceIfNecessary();
  });
};
let eV = (e, t) => isInvalidValue(e) ? MIXED_MARKER : e ? ContainerType.GROUP : t ? ContainerType.SECTION : ContainerType.FRAME;
function eH(e) {
  let {
    showPresetOptions,
    isSection,
    resizeToFit,
    width,
    height,
    isOrInInstance,
    isMixedOverride,
    disabled,
    showSectionOption,
    canBecomeSection,
    canBecomeFrame,
    canBecomeGroup,
    triggerClassName
  } = e;
  let b = useDispatch();
  let {
    manager,
    getTriggerProps
  } = setupMenu();
  let x = eV(resizeToFit, isSection);
  let C = isInvalidValue(width) || isInvalidValue(height) ? null : fS({
    width,
    height
  });
  let O = useCallback(e => {
    b(trackFileEventThunk({
      name: 'Frame Size Preset Chosen',
      params: {
        method: 'Transform Panel',
        deviceName: e.name
      }
    }));
    permissionScopeHandler.user('set-frame-preset', () => {
      Fullscreen?.makeSelectedFramesManuallySized();
      fullscreenValue.updateSelectionProperties({
        width: e.width,
        height: e.height
      });
      PrototypingTsApi?.updateCurrentPagePrototypeDeviceIfNecessary();
    });
  }, [b]);
  let R = useCallback(e => {
    let t = Number(e);
    t === ContainerType.SECTION && eU();
    t === ContainerType.FRAME && eV(resizeToFit, isSection) === ContainerType.SECTION && eB();
    eG(t);
  }, [isSection, resizeToFit]);
  return jsx(AutoInteractableWrapper, {
    name: 'frame_preset_select',
    children: jsxs(MenuRootComp, {
      manager,
      children: [jsxs(ButtonPrimitive, {
        'aria-label': getI18nString('presets.selection_trigger_with_selected', {
          selected: ej(isMixedOverride ? MIXED_MARKER : x)
        }),
        'className': f()(mJ, triggerClassName),
        disabled,
        'recordingKey': generateRecordingKey(e, 'toggleMenu'),
        ...getTriggerProps(),
        'children': [jsx('span', {
          children: ej(isMixedOverride ? MIXED_MARKER : x)
        }), jsx(_$$r3, {})]
      }), jsx(MenuContainerComp, {
        children: jsxs(EventShield, {
          eventListeners: ['onWheel'],
          children: [(isMixedOverride || isInvalidValue(x)) && jsxs(Fragment, {
            children: [jsx(H_, {
              checked: !0,
              disabled: !0,
              onChange: noop,
              children: ej(MIXED_MARKER)
            }), jsx(MenuSeparator, {})]
          }), jsxs(z6, {
            title: jsx(MenuHiddenTitleComp, {
              children: getI18nString('presets.group_titles.layout_options')
            }),
            onChange: R,
            value: x?.toString(),
            recordingKey: generateRecordingKey(e, 'layoutChange'),
            children: [!!showSectionOption && jsx(CU, {
              value: ContainerType.SECTION?.toString(),
              disabled: !canBecomeSection,
              children: jsx('span', {
                className: dj,
                children: ej(ContainerType.SECTION)
              })
            }), jsx(CU, {
              value: ContainerType.FRAME?.toString(),
              disabled: !!isOrInInstance || !canBecomeFrame,
              children: jsx('span', {
                className: dj,
                children: ej(ContainerType.FRAME)
              })
            }), jsx(CU, {
              value: ContainerType.GROUP?.toString(),
              disabled: !canBecomeGroup,
              children: jsx('span', {
                className: dj,
                children: ej(ContainerType.GROUP)
              })
            })]
          }), !!showPresetOptions && !isSection && jsx(ez, {
            onChange: O,
            selectedPreset: C,
            recordingKey: e?.recordingKey
          })]
        })
      })]
    })
  });
}
function ez({
  onChange: e,
  selectedPreset: t,
  recordingKey: r
}) {
  return jsx(Fragment, {
    children: eF.map(({
      groupName: i,
      presets: a
    }, s) => jsx(MenuGroupComp, {
      title: jsx(MenuHiddenTitleComp, {
        children: i?.i18nName()
      }),
      children: a.map(i => jsx(eW, {
        preset: i,
        checked: t?.name === i.name,
        onChange: e,
        recordingKey: r
      }, i.name))
    }, `preset-group-${s}`))
  });
}
function eW({
  preset: e,
  checked: t,
  onChange: r,
  recordingKey: a
}) {
  let [s, o] = useState(!1);
  let [l, d] = useState(!1);
  let c = s ? bI : '';
  return jsx(H_, {
    checked: t,
    onChange: () => r(e),
    htmlAttributes: {
      onFocus: () => d(!0),
      onBlur: () => d(!1)
    },
    recordingKey: generateRecordingKey(a, e.name),
    children: jsxs('span', {
      className: l ? cl : dj,
      children: [jsx(ph, {
        text: e.i18nName(),
        className: VW,
        onTruncationChange: e => {
          s !== e && o(e);
        }
      }), jsxs('span', {
        className: c,
        children: [e.width, '\u200A\xD7\u200A', e.height]
      })]
    })
  }, e.name);
}
let e2 = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M7.5 7h9a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5M6 7.5A1.5 1.5 0 0 1 7.5 6h9A1.5 1.5 0 0 1 18 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5zM9.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V10h1.5a.5.5 0 0 0 0-1zm5.5 3.5a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5z',
      clipRule: 'evenodd'
    })
  });
});
let to = 'aspect-ratio-lock-toggle-onboarding-key';
let tl = createContext(void 0);
function td({
  children: e
}) {
  let t = useAtomWithSubscription(Fy);
  let r = useAtomWithSubscription(mp);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: efW,
    priority: _$$N.SECONDARY_MODAL
  }, [t, r]);
  !function (e) {
    let t = useSelectionPropertyValue('aspectRatioLockToggled');
    let r = useSelector(e => e.mirror.selectionProperties.fillPaints);
    let n = useAtomWithSubscription(Vk);
    let s = useRef(null);
    let o = useCallback(() => {
      s.current && clearTimeout(s.current);
      s.current = null;
    }, []);
    let l = useCallback(() => {
      o();
      s.current = setTimeout(e, 500);
    }, [e, o]);
    useEffect(() => {
      if (n) {
        o();
        return;
      }
      let e = Array.isArray(r) && r.some(e => getImageOrVideoPaint(e) && !II(e));
      if (t || e) {
        l();
        return;
      }
      o();
    }, [o, l, r, t, n]);
    useEffect(() => () => o(), [o]);
  }(useCallback(() => {
    show({
      canShow: (e, t) => e && t != null && dayjs(t).isBefore('2025-02-04')
    });
  }, [show]));
  return jsx(tl.Provider, {
    value: {
      isModalShown: isShowing,
      closeModal: complete
    },
    children: e
  });
}
function tc() {
  let {
    isModalShown,
    closeModal
  } = function () {
    let e = useContext(tl);
    if (!e) throw new Error('Tried to use `useAspectRatioLockOverlay` outside of provider!');
    return e;
  }();
  return jsx(OnboardingModal, {
    arrowPadding: 4,
    arrowPosition: ArrowPosition.RIGHT_BODY,
    description: renderI18nText('fullscreen.aspect_ratio_lock_onboarding.body'),
    isShowing: isModalShown,
    media: jsx(ImageOverlayComponent, {
      src: buildUploadUrl('88fb870fdeb521c4f90560d92c52830f5043c807'),
      alt: 'A GIF demonstrating that something will resize proportionally with Lock aspect ratio enabled.',
      aspectRatio: 16 / 9
    }),
    onClose: closeModal,
    onTargetLost: closeModal,
    pointToLeftEdge: !0,
    primaryCta: {
      label: renderI18nText('general.got_it'),
      type: 'button',
      onClick: closeModal,
      variantOverride: 'primary',
      ctaTrackingDescriptor: UpgradeAction.GOT_IT
    },
    secondaryCta: {
      label: renderI18nText('general.learn_more'),
      type: 'link',
      href: 'https://help.figma.com/hc/articles/5731482952599#suggest',
      ctaTrackingDescriptor: UpgradeAction.LEARN_MORE
    },
    targetKey: to,
    title: jsx('p', {
      'data-testid': 'arl-onboarding-title',
      'children': renderI18nText('fullscreen.aspect_ratio_lock_onboarding.header')
    }),
    trackingContextName: 'Aspect Ratio Lock Onboarding Overlay'
  });
}
function tp(e) {
  let [t, r] = useSelectionProperty('aspectRatioLockToggled');
  let i = _$$h2();
  let a = getI18nString(t ? 'fullscreen.properties_panel.transform_panel.aspect_ratio_unlock' : 'fullscreen.properties_panel.transform_panel.aspect_ratio_lock');
  let s = {
    'data-testid': 'aspect-ratio-lock-toggle',
    'data-tooltip': a,
    'data-tooltip-type': KindEnum.TEXT,
    'data-onboarding-key': to
  };
  let o = generateRecordingKey(e, 'aspectRatioLockToggle');
  return jsx('div', {
    className: xe,
    children: jsx(AutoInteractableWrapper, {
      name: 'aspect_ratio_lock_toggle',
      children: jsx(setupToggleButton, {
        'actionOnPointerDown': !0,
        'aria-label': a,
        'checked': i,
        'disabled': e.disabled,
        'htmlAttributes': s,
        'mixed': t === MIXED_MARKER,
        'offIcon': jsx(e2, {}),
        'onChange': e => {
          getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics('editor-transform-panel-change', {
            key: 'aspectRatioLockToggled',
            value: e
          });
          r(e);
        },
        'onIcon': jsx(_$$z, {}),
        'recordingKey': o,
        'variant': 'highlighted'
      })
    })
  });
}
function t_(e) {
  return jsxs(td, {
    children: [jsx(tp, {
      ...e
    }), jsx(_$$p, {
      children: jsx(tc, {})
    })]
  });
}
function tR(e) {
  return isValidValue(e) && e != null && e !== LayoutSizingMode.FIXED;
}
function tL() {
  let e = useSelectionPropertyValue('stackHorizontalSize');
  let t = useSelectionPropertyValue('stackVerticalSize');
  return tR(e) || tR(t);
}
let tD = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M18 5.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 .5.5m0 13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 .5.5M8.845 8v8h1.09v-3.531h4.129V16h1.086V8h-1.086v3.52H9.935V8z',
      clipRule: 'evenodd'
    })
  });
});
let tk = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M5.5 18a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5m13 0a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5M7.604 8l1.882 8h1.03L12 10.062 13.485 16h1.029l1.882-8h-1.027l-1.384 5.88L12.515 8h-1.03l-1.47 5.88L8.63 8z',
      clipRule: 'evenodd'
    })
  });
});
function tj(e, t) {
  return (r, n) => {
    if (r !== By.SYNTAX_UNRECOGNIZED) return;
    let i = parseAnchorPosition(n);
    i != null && (n = removePositionChars(n), permissionScopeHandler.user(e, () => {
      t(n, i) !== yesNoTrackingEnum.NO && Fullscreen.triggerAction('commit', {});
    }));
  };
}
function tB(e, t) {
  return tj(e, (e, r) => Fullscreen.setNodeSelectionSizeWithAnchor(e, t, r) ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO);
}
let tG = tB('relative-h', Axis.Y);
let tV = tB('relative-w', Axis.X);
let tH = createContext(null);
function tz({
  children: e
}) {
  let [t, r] = useSelectionProperty('height');
  let [i, a] = useSelectionProperty('minHeight');
  let [s, o] = useSelectionProperty('maxHeight');
  let l = {
    key: 'height',
    axis: Axis.Y,
    dropdownAlignment: 'right',
    autolayoutMinMaxIcon: jsx(tD, {}),
    removeLimitIcons: XO.removeHeightLimit,
    relativeInputHandler: tG,
    value: t,
    minValue: i,
    maxValue: s,
    setValue: r,
    setMinValue: a,
    setMaxValue: o,
    stackSize: useSelectionPropertyValue('stackVerticalSize'),
    isAuto: useAutoSizingFlags().heightIsAuto,
    variableField: 'HEIGHT',
    minMaxOptions: [zn, jw],
    strings: {
      dimAbbrev: getI18nString('fullscreen.properties_panel.transform_panel.h'),
      dim: {
        fixed: getI18nString('fullscreen.properties_panel.transform_panel.height'),
        resizing: getI18nString('fullscreen.properties_panel.section_autoLayout.tooltip_verticalResizing')
      },
      dimWithMinMax: {
        fixed: getI18nString('fullscreen.properties_panel.transform_panel.height_min_max'),
        resizing: getI18nString('fullscreen.properties_panel.section_autoLayout.tooltip_verticalResizingMinMaxH')
      },
      dimWithMin: {
        fixed: getI18nString('fullscreen.properties_panel.transform_panel.height_min'),
        resizing: getI18nString('fullscreen.properties_panel.section_autoLayout.tooltip_verticalResizingMinH')
      },
      dimWithMax: {
        fixed: getI18nString('fullscreen.properties_panel.transform_panel.height_max'),
        resizing: getI18nString('fullscreen.properties_panel.section_autoLayout.tooltip_verticalResizingMaxH')
      }
    },
    scrubbableInputClass: sC
  };
  return jsx(tH.Provider, {
    value: l,
    children: e
  });
}
function tW({
  children: e
}) {
  let [t, r] = useSelectionProperty('width');
  let [i, a] = useSelectionProperty('minWidth');
  let [s, o] = useSelectionProperty('maxWidth');
  let l = {
    key: 'width',
    axis: Axis.X,
    dropdownAlignment: 'left',
    autolayoutMinMaxIcon: jsx(tk, {}),
    removeLimitIcons: XO.removeWidthLimit,
    relativeInputHandler: tV,
    value: t,
    minValue: i,
    maxValue: s,
    setValue: r,
    setMinValue: a,
    setMaxValue: o,
    stackSize: useSelectionPropertyValue('stackHorizontalSize'),
    isAuto: useAutoSizingFlags().widthIsAuto,
    variableField: 'WIDTH',
    minMaxOptions: [mw, QG],
    strings: {
      dimAbbrev: getI18nString('fullscreen.properties_panel.transform_panel.w'),
      dim: {
        fixed: getI18nString('fullscreen.properties_panel.transform_panel.width'),
        resizing: getI18nString('fullscreen.properties_panel.section_autoLayout.tooltip_horizontalResizing')
      },
      dimWithMinMax: {
        fixed: getI18nString('fullscreen.properties_panel.transform_panel.width_min_max'),
        resizing: getI18nString('fullscreen.properties_panel.section_autoLayout.tooltip_horizontalResizingMinMaxW')
      },
      dimWithMin: {
        fixed: getI18nString('fullscreen.properties_panel.transform_panel.width_min'),
        resizing: getI18nString('fullscreen.properties_panel.section_autoLayout.tooltip_horizontalResizingMinW')
      },
      dimWithMax: {
        fixed: getI18nString('fullscreen.properties_panel.transform_panel.width_max'),
        resizing: getI18nString('fullscreen.properties_panel.section_autoLayout.tooltip_horizontalResizingMaxW')
      }
    },
    scrubbableInputClass: BP
  };
  return jsx(tH.Provider, {
    value: l,
    children: e
  });
}
function tK() {
  let e = useContext(tH);
  if (!e) throw new Error('DimensionInputConfigContext not initialized!');
  return e;
}
function tY() {
  return {
    next: {},
    numMatches: 0,
    validWord: void 0
  };
}
function t$() {
  return {
    [getI18nString('fullscreen.properties_panel.constraints_resizing_panel.hug')]: LayoutSizingMode.HUG_CONTENT,
    [getI18nString('fullscreen.properties_panel.constraints_resizing_panel.hug_contents')]: LayoutSizingMode.HUG_CONTENT,
    [getI18nString('fullscreen.properties_panel.constraints_resizing_panel.fill_container')]: LayoutSizingMode.FILL_CONTAINER,
    [getI18nString('fullscreen.properties_panel.constraints_resizing_panel.fill')]: LayoutSizingMode.FILL_CONTAINER
  };
}
let tX = 'dimension_input--dropdownIcon--IaH6E';
let tq = 'dimension_input--comboBoxInput--J0jWQ';
let tJ = {
  width: {
    [LayoutSizingMode.FILL_CONTAINER]: _$$G,
    [LayoutSizingMode.FIXED]: _$$w,
    [LayoutSizingMode.HUG_CONTENT]: _$$v
  },
  height: {
    [LayoutSizingMode.FILL_CONTAINER]: _$$N2,
    [LayoutSizingMode.FIXED]: _$$T,
    [LayoutSizingMode.HUG_CONTENT]: _$$C
  }
};
function tZ(e) {
  switch (e) {
    case 'FILL_CONTAINER':
      return LayoutSizingMode.FILL_CONTAINER;
    case 'HUG_CONTENT':
      return LayoutSizingMode.HUG_CONTENT;
    case 'FIXED':
      return LayoutSizingMode.FIXED;
    default:
      return null;
  }
}
function tQ({
  providedClassName: e,
  isHoveredOverInput: t,
  OriginalComponent: r
}) {
  let {
    stackSize
  } = tK();
  return jsx('div', {
    className: f()('dimension_input--chevronContainer--CJdqK', {
      'dimension_input--hoveredOverInput--Px1rP': t,
      'dimension_input--alwaysShowChevron--I-Q8Z': stackSize === LayoutSizingMode.FIXED || isInvalidValue(stackSize)
    }),
    children: jsx(r, {
      providedClassName: e
    })
  });
}
function t0({
  checkSvg: e,
  selected: t,
  iconToReplaceCheck: r,
  icon: i,
  OriginalComponent: a
}) {
  return jsx(a, {
    ignoreCheck: !1,
    icon: jsx('div', {
      className: tX,
      children: i ?? r
    }),
    iconToReplaceCheck: null,
    rightCheck: !1,
    selected: t,
    checkSvg: e
  });
}
function t1(e) {
  let t = parseFloat(e);
  return isNaN(t) ? e : parseFloat(t.toFixed(2)).toString();
}
function t2({
  property: e,
  stackSize: t,
  inputRef: r
}) {
  return ea({
    options: useMemo(() => t == null ? [] : function (e, t) {
      switch (e) {
        case LayoutSizingMode.HUG_CONTENT:
          return [getI18nString('fullscreen.properties_panel.constraints_resizing_panel.hug'), getI18nString('fullscreen.properties_panel.stack_panel.al.hug_with_value', {
            value: t
          })];
        case LayoutSizingMode.FILL_CONTAINER:
          return [getI18nString('fullscreen.properties_panel.constraints_resizing_panel.fill'), getI18nString('fullscreen.properties_panel.stack_panel.al.fill_with_value', {
            value: t
          })];
      }
    }(t, t1(e)), [e, t]),
    optionClassname: 'dimension_input--measuredInputText--E0PKL',
    inputRef: r
  });
}
function t5({
  OriginalComponent: e,
  property: t,
  onChange: r,
  ...s
}) {
  let {
    stackSize,
    axis
  } = tK();
  let d = aj();
  let c = t9();
  let u = function (e) {
    let t = useMemo(t$, []);
    let r = useMemo(() => function (e) {
      let t = tY();
      for (let r of e) {
        let e = t;
        for (let t = 0; t < r.length; t++) {
          let n = r[t].toUpperCase();
          e.next[n] = e.next[n] ?? tY();
          e.numMatches++;
          e = e.next[n];
        }
        e.validWord = r;
      }
      return t;
    }(Object.keys(t)), [t]);
    return useCallback(n => {
      if (!n.length) return null;
      let i = new Set();
      let a = function (e, t) {
        let r = e;
        for (let e = 0; e < t.length; e++) {
          let n = t[e].toUpperCase();
          if (!(r = r.next[n])) return null;
        }
        return r;
      }(r, n);
      return a ? (!function e(t, r) {
        if (t.validWord && !r(t.validWord)) return !1;
        for (let n of Object.values(t.next)) {
          if (!e(n, r)) return !1;
        }
        return !0;
      }(a, r => {
        let n = t[r];
        return !e.has(n) || (i.add(n), !(i.size > 1));
      }), i.size === 1 ? LayoutSizingMode[Array.from(i)[0]] : null) : null;
    }, [r, e, t]);
  }(function () {
    let e = useSelector(e => e.mirror.selectionProperties.stackLayoutSizeOptions);
    return useMemo(() => new Set((e ?? t7).map(e => e.size)), [e]);
  }());
  let _ = useMemo(() => stackSize == null || isInvalidValue(stackSize) || stackSize === LayoutSizingMode.FIXED ? null : LayoutSizingMode[stackSize], [stackSize]);
  let h = useRef(null);
  let {
    measurementNode
  } = t2({
    property: t,
    stackSize: stackSize != null && stackSize !== LayoutSizingMode.FIXED && isValidValue(stackSize) ? stackSize : null,
    inputRef: h
  });
  let g = useMemo(() => function (e, t, r) {
    let n = {
      ...e
    };
    Object.setPrototypeOf(n, Zg.prototype);
    let i = n.format.bind(n);
    n.format = e => typeof r == 'number' ? t1(String(r)) : i(e);
    n.incrementBy = (e, t, n) => typeof r == 'number' ? r + t : e;
    let a = n.parse.bind(n);
    n.parse = (e, r) => {
      let n = t(e);
      return n != null ? n : a(e, r);
    };
    n.incrementBy = (e, t, n) => typeof r == 'number' ? r + t : e;
    n.getNudgeAmount = e.getNudgeAmount?.bind(e);
    let s = n.clamp?.bind(n);
    s && (n.clamp = e => e === LayoutSizingMode[LayoutSizingMode.FILL_CONTAINER] || e === LayoutSizingMode[LayoutSizingMode.HUG_CONTENT] ? e : s(e));
    n.isEqual = (e, t) => typeof e == 'string' || typeof t == 'string' ? e === t : i(e) === i(t);
    return n;
  }(s.formatter, u, t), [s.formatter, u, t]);
  let {
    forwardedRef
  } = s;
  let y = s.shouldUseHoveringFormatterIfCombobox || s.isHoveringOverSelect;
  let b = (stackSize === LayoutSizingMode.HUG_CONTENT || stackSize === LayoutSizingMode.FILL_CONTAINER) && !y;
  let T = _ && (y || isValidValue(t));
  return jsxs('div', {
    className: 'dimension_input--inputAndHug--bWNNM',
    children: [jsx(e, {
      ...s,
      outerClassName: f()(tq, {
        'dimension_input--hovering--YOErf': y,
        'dimension_input--fixedLayout--vOVTA': stackSize === LayoutSizingMode.FIXED,
        'dimension_input--hugContent---kPR-': stackSize === LayoutSizingMode.HUG_CONTENT,
        'dimension_input--fillContainer--xnfQH': stackSize === LayoutSizingMode.FILL_CONTAINER
      }),
      formatter: g,
      property: T ? _ : t,
      pillsContainerClassName: 'dimension_input--comboBoxPillsContainer--Uv3fj',
      onChange: e => {
        let t = typeof e == 'string' ? tZ(e) : null;
        if (t) {
          d(t, axis);
          c(t, axis);
          return;
        }
        d(null, axis);
        c(LayoutSizingMode.FIXED, axis);
        r(e);
      },
      forwardedRef: useCallback(e => {
        h.current = e;
        typeof forwardedRef == 'function' ? forwardedRef(e) : forwardedRef && (forwardedRef.current = e);
      }, [forwardedRef])
    }), b && jsx('span', {
      className: 'dimension_input--hugFillText--K76mr',
      children: function (e) {
        switch (e) {
          case LayoutSizingMode.HUG_CONTENT:
            return getI18nString('fullscreen.properties_panel.constraints_resizing_panel.hug');
          case LayoutSizingMode.FILL_CONTAINER:
            return getI18nString('fullscreen.properties_panel.constraints_resizing_panel.fill');
        }
      }(stackSize ?? LayoutSizingMode.HUG_CONTENT)
    }), jsx('div', {
      className: f()(tq, 'dimension_input--hideMeasurementNode--7MP1z'),
      children: measurementNode
    })]
  });
}
function t3() {
  let e = useSelectionPropertyValue('nodesAreAllStacksOrInStacks');
  let t = _$$rX();
  let r = getFeatureFlags().ce_tv_grid_min_max ? t : e;
  let {
    minValue,
    maxValue
  } = tK();
  return (!isNullish(minValue) || !isNullish(maxValue)) && r;
}
function t4(e) {
  let {
    strings,
    value,
    setValue,
    key,
    variableField,
    relativeInputHandler,
    scrubbableInputClass
  } = tK();
  let u = tL();
  let _ = useTransformInputHandler({
    key,
    setValue
  });
  let m = Ng();
  let g = CC();
  let {
    hideVariableEntrypoints
  } = useContext(_$$Q);
  let E = useSelector<AppState>(e => {
    if (isInvalidValue(e.mirror.selectionProperties.cooperTemplateData)) return MIXED_MARKER;
    if (!e.mirror.selectionProperties.cooperTemplateData) return SocialMediaFormats.CUSTOM;
    let t = e.mirror.selectionProperties.cooperTemplateData?.type || 'CUSTOM';
    return SocialMediaFormats[t];
  });
  let {
    hasInstanceSelected
  } = useCooperFrameSelectionInfo();
  let b = hasInstanceSelected || E !== SocialMediaFormats.CUSTOM;
  let S = useMemo(() => [variableField], [variableField]);
  return m ? jsx(re, {
    onSizeConstraintClick: e.onSizeConstraintClick,
    onEvaluateExpressionError: relativeInputHandler,
    disabled: g || b,
    recordingKey: generateRecordingKey(e, `${key}Input`),
    showResizingTooltips: u
  }) : jsx(AutoInteractableWrapper, {
    name: `${key}_input`,
    children: jsx(conditionalWrapper, {
      condition: !m,
      wrapper: t => jsx(VariableBindingInput, {
        recordingKey: generateRecordingKey(e, `${key}InputWrapper`),
        fields: S,
        disabled: e.disabled,
        resolvedType: VariableResolvedDataType.FLOAT,
        currentFieldValue: isValidValue(value) ? value : void 0,
        inputClassName: scrubbableInputClass,
        hideIcon: hideVariableEntrypoints,
        children: t
      }),
      children: jsx(LengthInput, {
        'disabled': e.disabled,
        'inputClassName': hF,
        'isTokenizable': !0,
        'value': value ?? 0,
        ..._,
        'data-tooltip': u ? strings.dim.resizing : strings.dim.fixed,
        'data-tooltip-show-on-target-only': !0,
        'data-tooltip-type': KindEnum.TEXT,
        'dataTestId': `transform-${key}`,
        'min': getFeatureFlags().editor_zero_width_input ? ak : void 0,
        'noBorderOnHover': !0,
        'onEvaluateExpressionError': relativeInputHandler,
        'onScrubBegin': () => AspectRatioLockBindings?.showAspectRatioLockResizingLines(),
        'onScrubEnd': () => {
          AspectRatioLockBindings?.hideAspectRatioLockResizingLines();
        },
        'recordingKey': generateRecordingKey(e, `${key}Input`),
        'tooltipForScreenReadersOnly': !1,
        'children': jsx('span', {
          className: `${QK} svg`,
          children: strings.dimAbbrev
        })
      })
    })
  });
}
function t8({
  OriginalComponent: e,
  ...t
}) {
  let {
    stackSize,
    axis
  } = tK();
  let s = aj();
  let o = useMemo(() => isValidValue(stackSize) && stackSize != null ? stackSize : null, [stackSize]);
  return jsx(e, {
    ...t,
    property: o != null ? LayoutSizingMode[o] : t.property,
    openBelowTarget: !1,
    onOptionFocus: (e, r) => {
      t.onOptionFocus?.(e, r);
      s(tZ(e), axis);
    },
    inputClassName: 'dimension_input--selectInput--yZiCE'
  });
}
function t6(e, t, r) {
  return !!(r === LayoutSizingMode.FILL_CONTAINER && t === Axis.Y && e && function (e) {
    let t = new Set([]);
    for (let r of e) {
      let n = getSingletonSceneGraph().get(r);
      if (n && n.parentGuid && !t.has(n.parentGuid) && (t.add(n.parentGuid), function (e, t) {
        let r = e.parentNode;
        let n = !1;
        let i = !0;
        if (e && r && r.stackWrap === 'WRAP') {
          for (let a of r.childrenGuids) {
            t.find(e => e === a) || (i = !1);
            let r = getSingletonSceneGraph().get(a);
            a !== e.guid && r && r.stackChildAlignSelf === 'AUTO' && (n = !0);
          }
        }
        return n && !i;
      }(n, e))) {
        return !0;
      }
    }
    return !1;
  }(e));
}
let t7 = [];
function t9() {
  let e = trackFileEventWithUser();
  let t = useSelector(selectSceneGraphSelectionKeys);
  let r = useSelector(selectSceneGraph);
  let n = useSelectionPropertyValue('stackMode');
  let s = t.map(e => {
    let t = r.get(e);
    return t?.parentGuid;
  });
  return useCallback((r, i) => {
    permissionScopeHandler.user('change-stack-layout-size', () => {
      StackBindingsCpp.setStackSizeOnSelection(r, i);
    });
    e('Autolayout sizing changed', {
      axis: i,
      size: r,
      source: 'dropdown',
      nodeIds: t,
      parentNodeIds: s,
      stackMode: qU(n)
    });
  }, [t, s, e, n]);
}
function re(e) {
  let {
    minValue,
    maxValue,
    setValue,
    setMinValue,
    setMaxValue,
    key,
    axis,
    variableField,
    minMaxOptions,
    strings,
    autolayoutMinMaxIcon,
    dropdownAlignment,
    stackSize
  } = tK();
  let S = t3();
  let v = function (e) {
    let t = useSelector(e => e.mirror.selectionProperties.stackLayoutSizeOptions) ?? t7;
    let r = wV();
    let s = SC();
    let o = !r && !s || getFeatureFlags().ce_tv_grid_min_max;
    let {
      minMaxOptions: _minMaxOptions,
      removeLimitIcons,
      key: _key,
      axis: _axis
    } = tK();
    let _ = useSelectionPropertyValue('isNonEditableInstanceSublayerSelected');
    let m = useSelectionPropertyValue('isBreakpointFrameSelected');
    let g = t3();
    let f = Tv();
    return useMemo(() => {
      let r = [];
      if (t.forEach(e => {
        let {
          size,
          disabled,
          disabledReason
        } = e;
        let s = _axis === Axis.X;
        let o = size === LayoutSizingMode.FILL_CONTAINER;
        let l = size === LayoutSizingMode.HUG_CONTENT;
        let d = t6(f, _axis, size);
        let _ = disabled || m && (o || l && s) || d;
        let h = tJ[_key][size];
        let g = disabledReason === 'no-fill-component' ? getI18nString('fullscreen.properties_panel.stack_panel.sizing_disabled.no_fill_component') : d ? getI18nString('fullscreen.properties_panel.stack_panel.sizing_disabled.select_all_fill') : void 0;
        r.push(jsx(_$$c$2, {
          disabled: _,
          additionalStylesClassName: wO,
          value: LayoutSizingMode[size],
          iconToReplaceCheck: jsx(h, {}),
          dataTestId: `${LayoutSizingMode[size]}-${Axis[_axis]}`,
          tooltip: g,
          tooltipType: KindEnum.TEXT
        }, LayoutSizingMode[size]));
      }), o && r.push(jsx(sK, {}, 'ui3-divider')), o && (_minMaxOptions.forEach(t => {
        let [i, a] = XO[t];
        r.push(jsx(_$$c$2, {
          additionalStylesClassName: wO,
          iconToReplaceCheck: jsx(MediaQuerySvgComponent, {
            className: tX,
            svg: i,
            fallbackSvg: a
          }),
          value: t,
          disabled: !!_,
          recordingKey: generateRecordingKey(e, 'select', t)
        }, t));
      }), g && !_)) {
        let [t, i] = removeLimitIcons;
        r.push(jsx(sK, {}, 'first-divider'));
        r.push(jsx(_$$c$2, {
          additionalStylesClassName: wO,
          value: zg,
          iconToReplaceCheck: jsx(MediaQuerySvgComponent, {
            className: tX,
            svg: t,
            fallbackSvg: i
          }),
          recordingKey: generateRecordingKey(e, 'select', zg)
        }, zg));
      }
      return r;
    }, [o, t, _axis, m, f, _key, _minMaxOptions, g, _, e, removeLimitIcons]);
  }(e);
  let [x, C] = useState(void 0);
  let R = useTransformInputHandler({
    key,
    setValue
  });
  let L = jQ(key, e.onEvaluateExpressionError);
  let [P, D] = useAtomValueAndSetter(Kl);
  let [k, F] = useAtomValueAndSetter(Md);
  let j = P[key].min || P[key].max;
  let B = wf(key);
  let V = Fp();
  let H = t9();
  let z = useCallback((t, r) => {
    if (typeof t == 'number') {
      R.onValueChange(t, r);
    } else if (t === minMaxOptions[0]) {
      e.onSizeConstraintClick('min');
    } else if (t === minMaxOptions[1]) {
      e.onSizeConstraintClick('max');
    } else if (t === zg) {
      setMinValue(null, yesNoTrackingEnum.NO);
      setMaxValue(null, yesNoTrackingEnum.NO);
      fullscreenValue.triggerAction('commit');
      D({
        ...P,
        [key]: {
          min: !1,
          max: !1
        }
      });
      F(null);
    } else if (typeof t == 'string') {
      let e = tZ(t);
      e != null && H(e, axis);
    }
  }, [minMaxOptions, R, e, setMinValue, setMaxValue, D, P, key, F, H, axis]);
  let W = S ? jsx('div', {
    className: QK,
    children: autolayoutMinMaxIcon
  }) : jsx('span', {
    className: `${QK} svg`,
    children: strings.dimAbbrev
  });
  let K = strings.dim;
  minValue != null && maxValue != null ? K = strings.dimWithMinMax : minValue != null ? K = strings.dimWithMin : maxValue != null && (K = strings.dimWithMax);
  let Y = e.showResizingTooltips ? K.resizing : K.fixed;
  let $ = aj();
  return jsxs(Fragment, {
    children: [jsx(ow, {
      value: {
        select: t8,
        inputComponent: t5
      },
      children: jsx(_$$tV, {
        value: {
          chevron: tQ,
          leftCheckIcon: t0
        },
        children: jsx(AutoInteractableWrapper, {
          name: `${key}_input_min_max_combobox`,
          children: jsx(_$$S, {
            'id': `${key}Transform`,
            'options': v,
            'outerClassName': f()(Kw, 'dimension_input--ui3ComboBoxContainer--BbSLS'),
            ...function (e) {
              let {
                value
              } = tK();
              return {
                value: value ?? 0,
                placeholder: void 0
              };
            }(),
            'data-tooltip-max-width': 200,
            'disabled': e.disabled,
            dropdownAlignment,
            'dropdownWidth': x,
            'formatter': L,
            'icon': W,
            'iconId': `${key}-label`,
            'inputTestId': `transform-${key}`,
            'mixedMathHandler': R.mixedMathHandler,
            'noBorderOnFocus': !0,
            'omitValueFromDropdown': !0,
            'onBlur': () => {
              V('minmax', {
                axis,
                renderLabels: !1
              }, qi.YES_ONLY_MIN_MAX);
            },
            'onChange': z,
            'onFocus': () => V('minmax', {
              axis,
              renderLabels: !1
            }, qi.YES),
            'onKeyUp': R.onKeyUp,
            'onMixedMathNudge': R.onMixedMathNudge,
            'onMouseEnter': () => {
              V('minmax', {
                axis,
                renderLabels: !0
              });
            },
            'onMouseEnterNonPropagating': () => {
              $(isValidValue(stackSize) && stackSize != null ? stackSize : null, axis);
            },
            'onMouseLeave': () => {
              V('minmax', null);
              $(null, axis);
            },
            'onScrubBegin': () => {
              $(null, axis);
            },
            'onScrubClick': S || j ? B : void 0,
            'onboardingKey': `transform-${key}`,
            'openBelowTarget': !0,
            'recordingKey': e.recordingKey,
            'scrubbingDisabled': e.disabled,
            'shiftVariableOptionToAlign': !0,
            'showTooltipOnTargetOnly': !0,
            'source': 'panel',
            'tooltipText': Y,
            variableField
          })
        })
      })
    }), jsx(_$$Q3, {
      setMaxWidth: C,
      options: v,
      formatOption: e => e && e.props.value ? L.format(e.props.value) : '',
      getIcon: () => jsx('div', {
        className: cssBuilderInstance.w24.$
      })
    })]
  });
}
function rd(e) {
  let t = useDispatch();
  let r = useDropdownState();
  let s = useSelector(e => e.mirror.selectionProperties.stackLayoutSizeOptions);
  let [o, l] = useState(!1);
  let d = t6(Tv(), e.axis, LayoutSizingMode.FILL_CONTAINER);
  let c = useSelector(e => !!e.mirror.selectionProperties.isNonEditableInstanceSublayerSelected);
  let u = trackFileEventWithUser();
  let h = useSelector(selectSceneGraphSelectionKeys);
  let m = useSelector(selectSceneGraph);
  let g = useSelectionPropertyValue('stackMode');
  let E = h.map(e => {
    let t = m.get(e);
    return t?.parentGuid;
  });
  let b = useMemo(() => new ru(e.axis), [e.axis]);
  let I = useSelectionPropertyValue('width');
  let S = useSelectionPropertyValue('height');
  let v = useMemo(() => new rp(e.axis, e.axis === Axis.X ? I : S), [e.axis, I, S]);
  let x = r_(e.axis === Axis.X ? I : S, 2);
  let N = useRef(null);
  let C = e.size;
  let L = x != null && isValidValue(x);
  let P = t2({
    property: L ? `${x}` : '',
    stackSize: C != null && C !== LayoutSizingMode.FIXED && isValidValue(C) ? C : null,
    inputRef: N
  });
  if (s == null) return null;
  let [D, F] = rc(e.axis, e.size);
  let j = function (e, t) {
    let r = e === Axis.X;
    switch (t) {
      case LayoutSizingMode.HUG_CONTENT:
        return r ? jsx(_$$v, {}) : jsx(_$$C, {});
      case LayoutSizingMode.FILL_CONTAINER:
        return r ? jsx(_$$G, {}) : jsx(_$$N2, {});
      default:
        return r ? jsx(_$$w, {}) : jsx(_$$T, {});
    }
  }(e.axis, e.size);
  if (e.readOnly && isValidValue(e.size)) {
    let t = rh(e.size);
    return jsxs('div', {
      className: f()(e.className, 'stack_sizing_select_v5--flexContainer--nrpIK'),
      children: [jsx(MediaQuerySvgComponent, {
        svg: D,
        fallbackSvg: F,
        className: Vb
      }), jsx('span', {
        className: 'stack_sizing_select_v5--readOnlyText--Ik-gS ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd',
        children: t
      })]
    });
  }
  let B = c;
  for (let e of s) {
    if (e.size === LayoutSizingMode.HUG_CONTENT || e.size === LayoutSizingMode.FILL_CONTAINER) {
      B = !1;
      break;
    }
  }
  let G = s.map(t => {
    let r = LayoutSizingMode[t.size];
    let i = t.size === LayoutSizingMode.FILL_CONTAINER && d;
    let a = t.disabled || i;
    let s = t.disabledReason === 'no-fill-component' ? getI18nString('fullscreen.properties_panel.stack_panel.sizing_disabled.no_fill_component') : i ? getI18nString('fullscreen.properties_panel.stack_panel.sizing_disabled.select_all_fill') : void 0;
    return jsx(_$$c$2, {
      value: t.size,
      recordingKey: generateRecordingKey(e.recordingKey, 'select', r),
      disabled: a,
      tooltip: s,
      tooltipType: KindEnum.TEXT,
      dataTestId: `${r}-${Axis[e.axis]}`
    }, t.size);
  });
  let V = getI18nState()?.getPrimaryLocale(!0);
  let H = c ? 173 : V === languageCodes.EN ? 150 : 210;
  let z = e.axis === Axis.X ? jsx('span', {
    className: `${QK} svg`,
    children: renderI18nText('fullscreen.properties_panel.transform_panel.w')
  }) : jsx('span', {
    className: `${QK} svg`,
    children: renderI18nText('fullscreen.properties_panel.transform_panel.h')
  });
  let W = L ? `${x}` : void 0;
  let {
    bestText,
    measurementNode
  } = L ? P : {
    bestText: void 0,
    measurementNode: void 0
  };
  return jsxs(Fragment, {
    children: [jsx(l6, {
      ariaLabel: getI18nString('fullscreen.properties_panel.stack_panel.advanced_layout'),
      chevronClassName: 'stack_sizing_select_v5--stackLayoutSizeChevron--xh9BG',
      className: e.className,
      disabled: B,
      dispatch: t,
      dropdownAlignment: e.dropdownAlignment,
      dropdownOverride: (o ? W : bestText) ?? void 0,
      dropdownShown: r,
      dropdownWidth: H,
      formatter: c ? v : b,
      icon: c ? z : j,
      id: e.id,
      inputClassName: 'stack_sizing_select_v5--stackLayoutSizeInput--aB6Pd',
      inputTextRef: N,
      onChange: t => {
        t != null && (permissionScopeHandler.user('set-stack-size', () => StackBindingsCpp.setStackSizeOnSelection(t, e.axis)), u('Autolayout sizing changed', {
          axis: e.axis,
          size: t,
          source: 'dropdown',
          nodeIds: h,
          parentNodeIds: E,
          stackMode: qU(g)
        }));
      },
      onMouseDown: () => {
        l(!1);
      },
      onMouseEnter: () => {
        e.onHover(isValidValue(e.size) ? e.size : null, 'input');
        l(!0);
      },
      onMouseLeave: () => {
        e.onHover(null, 'input');
        l(!1);
      },
      onOptionFocus: (t, r) => e.onHover(t ?? null, r),
      property: e.size,
      recordingKey: generateRecordingKey(e, 'select'),
      tooltip: e.axis === Axis.X ? getI18nString('fullscreen.properties_panel.constraints_resizing_panel.horizontal_resizing') : getI18nString('fullscreen.properties_panel.constraints_resizing_panel.vertical_resizing'),
      truncation: 'none',
      children: G
    }), jsx('div', {
      className: 'stack_sizing_select_v5--hideMeasurementNode--WbKf3',
      children: measurementNode
    })]
  });
}
function rc(e, t) {
  let r = e === Axis.X;
  switch (t) {
    case MIXED_MARKER:
      return r ? [_$$A0] : [_$$A6];
    case LayoutSizingMode.HUG_CONTENT:
      return r ? [_$$A1] : [_$$A7];
    case LayoutSizingMode.FILL_CONTAINER:
      return r ? [_$$A8] : [_$$A4];
    default:
      return r ? [_$$A2, _$$A9] : [_$$A, _$$A5];
  }
}
class ru {
  constructor(e) {
    this.axis = e;
  }
  format(e) {
    return e == null ? '' : rh(e);
  }
  formatExtended(e) {
    if (e == null) {
      return {
        text: ''
      };
    }
    let [t, r] = rc(this.axis, e);
    return {
      text: function (e, t) {
        switch (t) {
          case LayoutSizingMode.FIXED:
            return e === Axis.X ? getI18nString('fullscreen.properties_panel.constraints_resizing_panel.fixed_width') : getI18nString('fullscreen.properties_panel.constraints_resizing_panel.fixed_height');
          case LayoutSizingMode.HUG_CONTENT:
            return getI18nString('fullscreen.properties_panel.constraints_resizing_panel.hug_contents');
          case LayoutSizingMode.FILL_CONTAINER:
            return getI18nString('fullscreen.properties_panel.constraints_resizing_panel.fill_container');
        }
      }(this.axis, e) || '',
      svg: t,
      fallbackSvg: r
    };
  }
}
class rp {
  constructor(e, t) {
    this.axis = e;
    this.fixedSize = t;
  }
  format(e) {
    return e == null ? '' : function (e, t) {
      switch (e) {
        case LayoutSizingMode.FIXED:
          return r_(t, 2);
        case LayoutSizingMode.HUG_CONTENT:
          return getI18nString('fullscreen.properties_panel.constraints_resizing_panel.hug');
        case LayoutSizingMode.FILL_CONTAINER:
          return getI18nString('fullscreen.properties_panel.constraints_resizing_panel.fill');
      }
    }(e, this.fixedSize);
  }
  formatExtended(e) {
    if (e == null) {
      return {
        text: ''
      };
    }
    let [t, r] = rc(this.axis, e);
    return {
      text: function (e, t, r) {
        switch (t) {
          case LayoutSizingMode.FIXED:
            return e === Axis.X ? getI18nString('fullscreen.properties_panel.stack_panel.al.fixed.width', {
              value: r_(r)
            }) : getI18nString('fullscreen.properties_panel.stack_panel.al.fixed.height', {
              value: r_(r)
            });
          case LayoutSizingMode.HUG_CONTENT:
            return getI18nString('fullscreen.properties_panel.constraints_resizing_panel.hug_contents');
          case LayoutSizingMode.FILL_CONTAINER:
            return getI18nString('fullscreen.properties_panel.constraints_resizing_panel.fill_container');
        }
      }(this.axis, e, this.fixedSize) || '',
      svg: t,
      fallbackSvg: r
    };
  }
}
function r_(e, t = 0) {
  return isInvalidValue(e) ? getI18nString('fullscreen.mixed') : e ? String(parseFloat(e.toFixed(e % 1 == 0 ? 0 : t))) : (logError('UI3 merged autolayout picker StackSizingSelect', 'undefined fixedSize of instance sublayer'), '');
}
function rh(e) {
  switch (e) {
    case LayoutSizingMode.FIXED:
      return getI18nString('fullscreen.properties_panel.constraints_resizing_panel.fixed');
    case LayoutSizingMode.HUG_CONTENT:
      return getI18nString('fullscreen.properties_panel.constraints_resizing_panel.hug');
    case LayoutSizingMode.FILL_CONTAINER:
      return getI18nString('fullscreen.properties_panel.constraints_resizing_panel.fill');
  }
}
function rm(e) {
  let t = useSelectionPropertyValue('stackHorizontalSize');
  let r = useSelectionPropertyValue('stackVerticalSize');
  let i = aj();
  if (t == null || r == null) return null;
  let a = renderI18nText('properties.label.resizing');
  let s = jsx(rd, {
    id: 'stack-sizing-width',
    className: oH,
    axis: Axis.X,
    size: t,
    recordingKey: generateRecordingKey(e.recordingKey, 'widthInput'),
    dropdownAlignment: 'left',
    onHover: e => i(e, Axis.X)
  });
  let o = jsx(rd, {
    id: 'stack-sizing-height',
    className: T1,
    axis: Axis.Y,
    size: r,
    recordingKey: generateRecordingKey(e.recordingKey, 'heightInput'),
    dropdownAlignment: 'right',
    onHover: e => i(e, Axis.Y)
  });
  return e.renderRow(a, s, o);
}
function rg({
  recordingKey: e
}) {
  return jsx(rm, {
    renderRow: (e, t, r) => jsx(fn, {
      dataTestId: 'stack-sizing-row',
      leftLabel: e,
      leftInput: t,
      rightInput: r,
      rightLabel: null,
      icon: jsx(t_, {
        disabled: !0
      })
    }),
    recordingKey: e
  });
}
function rf() {
  let e = !rE();
  return jsxs('div', {
    'className': f()('constraints_preview_icon--container--n518S', cssBuilderInstance.relative.$, 'constraints_preview_icon--isV2Constraints---SJMy'),
    'data-testid': e ? 'disabled-constraints-preview' : 'enabled-constraints-preview',
    'children': [jsx(ry, {
      axis: 'HORIZONTAL',
      disabled: e
    }), jsx('div', {
      className: rw(90),
      children: jsx(ry, {
        axis: 'VERTICAL',
        disabled: e
      })
    }), jsx(rT, {
      disabled: e
    })]
  });
}
function rE() {
  let e = W();
  return !(dr() && e.stackPositioning === 'AUTO');
}
function ry(e) {
  let t = W();
  let r = e.axis === 'HORIZONTAL' ? t.horizontalConstraint : t.verticalConstraint;
  let i = isInvalidValue(t.horizontalConstraint) || isInvalidValue(t.verticalConstraint);
  if (i || e.disabled) {
    return jsx(rb, {
      selected: i
    });
  }
  switch (r) {
    case 'MIN':
      return jsxs(Fragment, {
        children: [jsx(rA, {
          selected: !0
        }), jsx(rA, {
          rotation: 180
        })]
      });
    case 'MAX':
      return jsxs(Fragment, {
        children: [jsx(rA, {}), jsx(rA, {
          rotation: 180,
          selected: !0
        })]
      });
    case 'STRETCH':
      return jsxs(Fragment, {
        children: [jsx(rA, {
          selected: !0
        }), jsx(rA, {
          rotation: 180,
          selected: !0
        })]
      });
    case 'CENTER':
      return jsxs(Fragment, {
        children: [jsx(rA, {}), jsx(rA, {
          rotation: 180
        })]
      });
    case 'SCALE':
      return jsxs(Fragment, {
        children: [jsx(rx, {
          selected: !0
        }), jsx(rx, {
          rotation: 180,
          selected: !0
        })]
      });
    default:
      return jsx(rb, {});
  }
}
function rb(e) {
  return jsxs(Fragment, {
    children: [jsx(rA, {
      selected: e.selected
    }), jsx(rA, {
      selected: e.selected,
      rotation: 180
    })]
  });
}
function rT(e) {
  let t = W();
  let r = t.horizontalConstraint === 'CENTER';
  let i = t.verticalConstraint === 'CENTER';
  let a = isInvalidValue(t.horizontalConstraint) || isInvalidValue(t.verticalConstraint);
  return r === i || a || e.disabled ? jsx(rv, {
    selected: !e.disabled && (r || a)
  }) : jsxs('div', {
    className: rw(i ? 0 : 90),
    children: [jsx(rS, {
      selected: !0
    }), jsx(rI, {
      rotation: 90
    })]
  });
}
function rI(e) {
  return jsxs('div', {
    className: rw(e.rotation || 0),
    children: [jsx(rN, {}), jsx(rN, {
      rotation: 180
    })]
  });
}
function rS(e) {
  return jsx('svg', {
    viewBox: '0 0 24 24',
    children: jsx(rC, {
      d: 'M 9,12  L 15,12',
      ...e
    })
  });
}
function rv(e) {
  return jsx('svg', {
    viewBox: '0 0 24 24',
    children: jsx(rC, {
      d: 'M 9,12  L 15,12  M 12,9 L 12,15',
      ...e
    })
  });
}
function rA(e) {
  return jsx('svg', {
    viewBox: '0 0 24 24',
    children: jsx(rC, {
      d: 'M 5.5,9 L 5.5,15',
      rotation: e.rotation,
      selected: e.selected
    })
  });
}
function rx(e) {
  return jsx('svg', {
    viewBox: '0 0 24 24',
    children: jsx(rC, {
      d: 'M 6.5,10  L 4.5,12 L 6.5,14',
      ...e
    })
  });
}
function rN(e) {
  return jsx('svg', {
    viewBox: '0 0 24 24',
    children: jsx(rC, {
      d: 'M 9,12  L 10,12',
      ...e
    })
  });
}
function rC(e) {
  return jsx('path', {
    d: e.d,
    fill: 'none',
    className: f()('constraints_preview_icon--line--z6ghs', rw(e.rotation || 0), {
      'constraints_preview_icon--selected--GXU2-': e.selected
    })
  });
}
let rw = e => {
  switch (e) {
    case 0:
      return;
    case 90:
      return 'constraints_preview_icon--rotate90--uayVi constraints_preview_icon--_rotate--2AAty';
    case 180:
      return 'constraints_preview_icon--rotate180--lqQgR constraints_preview_icon--_rotate--2AAty';
  }
};
let rP = memo(e => {
  return jsx(tz, {
    children: jsx(t4, {
      ...e
    })
  });
});
let rk = memo(e => {
  _$$O();
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M6 7a1 1 0 0 1 1-1h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0zm12 0a1 1 0 0 0-1-1h-2.5a.5.5 0 0 0 0 1H17v2.5a.5.5 0 0 0 1 0zM7 18a1 1 0 0 1-1-1v-2.5a.5.5 0 0 1 1 0V17h2.5a.5.5 0 0 1 0 1zm11-1a1 1 0 0 1-1 1h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 0 1 1 0zm-8-7h4v4h-4zm-1 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z',
      clipRule: 'evenodd'
    })
  });
});
function rF(e) {
  let t = G7();
  let r = CC();
  let [i, s] = useSelectionProperty('stackPositioning');
  let o = trackFileEventWithUser();
  let l = useSelectionPropertyValue('isNonEditableInstanceSublayerSelected');
  let d = useSelector(selectSceneGraphSelectionKeys);
  let c = useSelector(selectSceneGraph);
  let u = d.map(e => {
    let t = c.get(e);
    return t?.parentGuid;
  });
  if (!(t && !r)) return null;
  let h = {
    'disabled': !!l,
    'data-tooltip': getI18nString('properties.tooltip.ignore_auto_layout'),
    'data-tooltip-type': KindEnum.TEXT,
    'recordingKey': generateRecordingKey(e, 'absolutePosition')
  };
  return jsx(setupToggleButton, {
    'aria-label': getI18nString('properties.tooltip.ignore_auto_layout'),
    'checked': i === 'ABSOLUTE',
    'disabled': h.disabled,
    'htmlAttributes': {
      'data-testid': 'stack-positioning-toggle',
      'data-tooltip': h['data-tooltip'],
      'data-tooltip-type': h['data-tooltip-type']
    },
    'mixed': isInvalidValue(i),
    'offIcon': jsx(rk, {}),
    'onChange': () => {
      permissionScopeHandler.user('set-stack-position', () => {
        i === 'ABSOLUTE' ? (s('AUTO'), o('Remove Absolute Position')) : (s('ABSOLUTE', yesNoTrackingEnum.NO), Fullscreen.bringSelectionToFrontVisually(), Fullscreen.triggerAction('commit', {}), _$$F.trackFromFullscreen('add_absolute_position', {
          source: 'properties_panel',
          parent_node_ids: u
        }));
      });
    },
    'onIcon': jsx(rk, {}),
    'recordingKey': h.recordingKey,
    'variant': 'highlighted'
  });
}
let rj = memo(e => {
  return jsx(tW, {
    children: jsx(t4, {
      ...e
    })
  });
});
let rV = tj('relative-x', (e, t) => Fullscreen?.setNodeSelectionOffsetWithAnchor(e, Axis.X, t) ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO);
let rH = memo(e => useLabConfiguration(labConfigurations.fplScrubbableInput) ? jsx(rW, {
  ...e
}) : jsx(rz, {
  ...e
}));
function rz(e) {
  let [t, r] = useSelectionProperty('x');
  let i = useTransformInputHandler({
    key: 'x',
    setValue: r
  });
  return jsx(AutoInteractableWrapper, {
    name: 'x_input',
    children: jsx(ExpressionInput, {
      ...i,
      'onEvaluateExpressionError': rV,
      'className': BP,
      'inputClassName': hF,
      'value': t,
      'disabled': e.disabled,
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('properties.tooltip.xposition'),
      'recordingKey': generateRecordingKey(e.recordingKey, 'xInput'),
      'children': jsx('span', {
        className: `${QK} svg`,
        children: renderI18nText('fullscreen.properties_panel.transform_panel.x')
      })
    })
  });
}
function rW(e) {
  let [t, r] = useSelectionProperty('x');
  let {
    onMixedMathNudge,
    onValueChange,
    mixedMathCallback,
    mixedMathHandler
  } = useTransformInputHandler({
    key: 'x',
    setValue: r
  });
  let l = _$$S2({
    mixedMathHandler,
    mixedMathCallback,
    onEvaluateExpressionError: rV,
    onMixedMathNudge
  });
  return jsx(AutoInteractableWrapper, {
    name: 'x_input',
    children: jsx(_$$N3, {
      'aria-label': getI18nString('properties.tooltip.xposition'),
      'formatter': l,
      'value': t,
      'onChange': (e, {
        commit: t
      }) => onValueChange(e, t ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO),
      'disabled': e.disabled || t == null,
      'icon': jsx('span', {
        className: HO,
        children: renderI18nText('fullscreen.properties_panel.transform_panel.x')
      }),
      'recordingKey': generateRecordingKey(e.recordingKey, 'xInput')
    })
  });
}
let rK = tj('relative-y', (e, t) => Fullscreen?.setNodeSelectionOffsetWithAnchor(e, Axis.Y, t) ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO);
let rY = memo(e => useLabConfiguration(labConfigurations.fplScrubbableInput) ? jsx(rX, {
  ...e
}) : jsx(r$, {
  ...e
}));
function r$(e) {
  let [t, r] = useSelectionProperty('y');
  let i = useTransformInputHandler({
    key: 'y',
    setValue: r
  });
  return jsx(AutoInteractableWrapper, {
    name: 'y_input',
    children: jsx(ExpressionInput, {
      ...i,
      'onEvaluateExpressionError': rK,
      'className': BP,
      'inputClassName': hF,
      'value': t,
      'disabled': e.disabled,
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('properties.tooltip.yposition'),
      'recordingKey': generateRecordingKey(e.recordingKey, 'yInput'),
      'children': jsx('span', {
        className: `${QK} svg`,
        children: renderI18nText('fullscreen.properties_panel.transform_panel.y')
      })
    })
  });
}
function rX(e) {
  let [t, r] = useSelectionProperty('y');
  let {
    onMixedMathNudge,
    onValueChange,
    mixedMathCallback,
    mixedMathHandler
  } = useTransformInputHandler({
    key: 'y',
    setValue: r
  });
  let l = _$$S2({
    mixedMathHandler,
    mixedMathCallback,
    onEvaluateExpressionError: rK,
    onMixedMathNudge
  });
  return jsx(AutoInteractableWrapper, {
    name: 'y_input',
    children: jsx(_$$N3, {
      'aria-label': getI18nString('properties.tooltip.yposition'),
      'formatter': l,
      'value': t,
      'onChange': (e, {
        commit: t
      }) => onValueChange(e, t ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO),
      'disabled': e.disabled || t == null,
      'icon': jsx('span', {
        className: HO,
        children: renderI18nText('fullscreen.properties_panel.transform_panel.y')
      }),
      'recordingKey': generateRecordingKey(e.recordingKey, 'yInput')
    })
  });
}
export let $$r24 = memo(e => {
  let t = createShownTransformControlsObservable();
  let r = createEnabledTransformControlsObservable();
  let {
    hasSelectedText,
    disableFontControls,
    enabledTypePanelControls,
    textAutoResize
  } = SA();
  let c = getObservableOrFallback(AppStateTsApi.propertiesPanelState().shownPropertiesPanels);
  useSelectionPropertyValue('x');
  let u = !c[ItemType.TRANSFORM_ITEM];
  let _ = t.framePresetsItem && r.transform;
  let h = c[ItemType.SITES_POSITION_ITEM];
  let m = useRef(null);
  let g = useSelector(selectSceneGraphSelectionKeys);
  let [f, E] = Xw();
  let y = jsx($$r48, {
    transformDisabled: !r.transform,
    recordingKey: e.recordingKey,
    showFrameFitButton: !_ && !t.sectionItem,
    canEditConstraints: e.canEditConstraints,
    openFileKey: e.openFileKey
  });
  let b = useContext(_$$Q);
  let T = jsxs(Fragment, {
    children: [!e.onlyShowXYInputsRow && y, b.noLayoutPanel && jsx($$r87, {
      recordingKey: e.recordingKey,
      forwardedRef: m
    }), b.noLayoutPanel && hasSelectedText && jsx(fB, {
      disabled: disableFontControls,
      enabledTypePanelControls,
      textAutoResize,
      recordingKey: e.recordingKey
    }), t.angle && jsx(_$$Q4, {
      cornerRadiusShown: t.cornerRadius,
      cornerRadiusDisabled: !r.cornerRadius,
      rectangleCornersShown: t.rectangleCornerRadii,
      rectangleCornersDisabled: !r.rectangleCornerRadii,
      angleShown: t.angle,
      angleDisabled: !r.angle,
      recordingKey: e.recordingKey
    }, g.join('-')), t.fixedFrameOptions && b.noLayoutPanel && jsx(_$$u, {
      recordingKey: e.recordingKey
    })]
  });
  return jsx(Fragment, {
    children: !h && jsx(_$$k2, {
      name: 'transform_panel',
      children: jsxs(Zk, {
        'data-non-interactive': !0,
        'className': e.topPadding ? DL : void 0,
        ...E,
        'children': [!b.mergeLayerHeaderWithTransformPanel && jsx(_$$r4, {
          titleTx: renderI18nText('fullscreen.appearance_panel.position'),
          icon: jsx(rF, {
            recordingKey: e.recordingKey
          })
        }), !e.onlyShowXYInputsRow && jsx(aq, {
          isHoveringOverPanel: f,
          recordingKey: 'alignPanel'
        }), e.onlyShowXYInputsRow && y, !u && !e.onlyShowXYInputsRow && T]
      })
    })
  });
});
export function $$r51(e) {
  let t = useSelectionPropertyValue('width');
  let r = useSelectionPropertyValue('height');
  let i = useSelectionPropertyValue('isInstanceSelected');
  let s = useSelectionPropertyValue('isNonEditableInstanceSublayerSelected');
  let o = useSelectionPropertyValue('resizeToFit');
  let l = useSelectionPropertyValue('canBecomeFrame');
  let d = useSelectionPropertyValue('canBecomeGroup');
  let c = useSelectionPropertyValue('canBecomeSection');
  let u = useSelectionPropertyValue('isSection');
  let p = !!(i || s);
  let _ = useSelectionPropertyValue('isWidgetSelected');
  let m = isSitesFileType();
  let g = useSelectionPropertyValue('stackMode');
  let E = I9();
  let y = E != null && E.some(e => e.type !== E[0].type);
  let b = useSelector(e => e.dropdownShown);
  let T = useDispatch();
  return getFeatureFlags().eu_fpl_frame_preset_menu ? jsx(eH, {
    canBecomeFrame: !!l,
    canBecomeGroup: !!d,
    canBecomeSection: !!c,
    disabled: !!_,
    height: r,
    isMixedOverride: y,
    isOrInInstance: p,
    isSection: !!u,
    recordingKey: e.recordingKey,
    resizeToFit: o,
    showPresetOptions: !m,
    showSectionOption: !m,
    triggerClassName: f()(e.inputClassName),
    width: t
  }) : jsx(Ij, {
    canBecomeFrame: !!l,
    canBecomeGroup: !!d,
    canBecomeSection: !!c,
    dispatch: T,
    dropdownOverride: y ? getI18nString('fullscreen.mixed') : void 0,
    dropdownShown: b,
    height: r,
    id: e.id,
    inputClassName: e.inputClassName,
    isOrInInstance: p,
    isSection: !!u,
    isWidget: !!_,
    leftIcon: e.leftIcon,
    recordingKey: e.recordingKey,
    resizeToFit: o,
    selectClassName: e.selectClassName,
    showPresetOptions: !m,
    showSectionOption: !m,
    stackMode: g,
    width: t
  });
}
function r3() {
  return tL() ? renderI18nText('properties.label.resizing') : renderI18nText('properties.label.dimensions');
}
export function $$r48(e) {
  let t = useSelectionPropertyValue('nodesAreAllInsideStacks');
  let r = useSelectionPropertyValue('stackPositioning');
  let o = useDispatch();
  let l = isSitesFileType();
  let d = rE() && e.canEditConstraints;
  let c = useRef(null);
  let u = useSelector(e => e.dropdownShown);
  let p = !!t && r === 'AUTO' || e.transformDisabled;
  let _ = W();
  let h = function (e) {
    let t = W();
    let r = useDeepEqualSceneValue(e => e.getDirectlySelectedNodes().map(e => e.guid));
    let n = useDeepEqualSceneValue(e => new Set(e.getDirectlySelectedNodes().map(e => e?.parentGuid)));
    return (i, a = !1) => {
      t.isNonEditableInstanceSublayerSelected || (trackEventAnalytics('Constraint Changed', {
        fileKey: e,
        source: a ? 'dropdown' : 'panel',
        nodeIds: r.slice(0, 50),
        parentNodeIds: Array.from(n).slice(0, 50),
        ...i
      }), fullscreenValue.updateSelectionProperties(i));
    };
  }(e.openFileKey);
  let [g, f] = useAtomValueAndSetter(useMemo(() => createLocalStorageAtom('has_user_expanded_ui3_constraints_ui', !1), []));
  let y = eh('HORIZONTAL', l);
  let b = eh('VERTICAL', l);
  let S = jsx(el, {
    id: 'width-select',
    axis: 'HORIZONTAL',
    constraint: _.horizontalConstraint,
    updateConstraints: h,
    someConstraintItemsSelected: _.someConstraintItemsSelected,
    disableStretchScaleConstraints: y,
    dispatch: o,
    dropdownShown: u,
    recordingKey: generateRecordingKey(e, 'width')
  });
  let v = jsx(el, {
    id: 'height-select',
    axis: 'VERTICAL',
    constraint: _.verticalConstraint,
    updateConstraints: h,
    someConstraintItemsSelected: _.someConstraintItemsSelected,
    disableStretchScaleConstraints: b,
    dispatch: o,
    dropdownShown: u,
    recordingKey: generateRecordingKey(e, 'height')
  });
  let C = jsx(AutoInteractableWrapper, {
    name: 'constraint_selector',
    children: jsx(e_, {
      horizontalConstraint: _.horizontalConstraint,
      verticalConstraint: _.verticalConstraint,
      someConstraintItemsSelected: _.someConstraintItemsSelected,
      updateConstraints: h,
      disableHorizontalStretchScaleConstraints: y,
      disableVerticalStretchScaleConstraints: b,
      dispatch: o,
      recordingKey: generateRecordingKey(e, 'constraintSelector')
    })
  });
  let w = renderI18nText('properties.label.position');
  let R = jsx(rH, {
    disabled: p,
    recordingKey: e.recordingKey
  });
  let L = jsx(rY, {
    disabled: p,
    recordingKey: e.recordingKey
  });
  let P = d ? jsx(DialogTriggerButton, {
    'aria-expanded': g,
    'recordingKey': generateRecordingKey(e, 'constraintsButton'),
    'onClick': () => f(!g),
    'aria-label': getI18nString('fullscreen.properties_panel.constraints_panel.constraints'),
    'htmlAttributes': {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('fullscreen.properties_panel.constraints_panel.constraints')
    },
    'children': jsx(rf, {})
  }) : null;
  return l ? jsx(Fragment, {
    children: d ? g ? jsx(ex, {
      openFileKey: e.openFileKey,
      recordingKey: e.recordingKey,
      editConstraintsIcon: P,
      widthSelect: S,
      heightSelect: v,
      rowRef: c
    }) : jsx(Q, {
      openFileKey: e.openFileKey,
      recordingKey: e.recordingKey,
      rowRef: c,
      editConstraintsIcon: P
    }) : jsx(fn, {
      dataTestId: 'x-y-inputs-row',
      ref: c,
      leftLabel: w,
      leftInput: R,
      rightLabel: null,
      rightInput: L,
      icon: P
    })
  }) : jsxs(Fragment, {
    children: [jsx(fn, {
      dataTestId: 'x-y-inputs-row',
      ref: c,
      leftLabel: w,
      leftInput: R,
      rightLabel: null,
      rightInput: L,
      icon: P
    }), d && g ? jsx(sY, {
      topLeftInput: S,
      bottomLeftInput: v,
      rightInput: C,
      leftLabel: getI18nString('fullscreen.properties_panel.constraints_panel.constraints'),
      rightLabel: null,
      topIcon: null,
      bottomIcon: null
    }) : null]
  });
}
export function $$r87(e) {
  let [t, r] = useAtomValueAndSetter(Kl);
  let [a, s] = useAtomValueAndSetter(Md);
  let o = isLineOrWashiTapeSelectedSelector();
  let l = Fp();
  let d = trackFileEventWithUser();
  let c = hl();
  let u = useSelectionPropertyValue('height');
  let p = createEnabledTransformControlsObservable().size;
  let {
    widthIsAuto,
    heightIsAuto
  } = useAutoSizingFlags();
  useOnSelectionChange(() => {
    r(p3);
    s(null);
    l('minmax', null, qi.YES);
  });
  let g = useCallback(e => {
    d('Expanded min max property', e);
    let n = {
      ...t,
      [e.widthOrHeight]: {
        ...t[e.widthOrHeight],
        [e.minOrMax]: !0
      }
    };
    let i = e.minOrMax === 'min' ? 'max' : 'min';
    let a = c[e.widthOrHeight][e.minOrMax];
    let o = c[e.widthOrHeight][i];
    !a && o && (n[e.widthOrHeight][i] = !0);
    r(n);
    s(e);
  }, [c, t, s, r, d]);
  let f = useSelectionPropertyValue('isNonEditableInstanceSublayerSelected');
  let E = useCallback(e => {
    g({
      widthOrHeight: 'width',
      minOrMax: e,
      minOrMaxWidthOrHeight: `${e}Width`
    });
  }, [g]);
  let b = useCallback(e => {
    g({
      widthOrHeight: 'height',
      minOrMax: e,
      minOrMaxWidthOrHeight: `${e}Height`
    });
  }, [g]);
  if (f) {
    return jsx(rg, {
      recordingKey: e.recordingKey
    });
  }
  let T = jsxs('div', {
    className: BG,
    children: [jsx(_$$W, {}), jsx(rj, {
      disabled: widthIsAuto || !p,
      onSizeConstraintClick: E,
      recordingKey: e.recordingKey
    })]
  });
  let I = jsx(rP, {
    disabled: heightIsAuto || !p,
    onSizeConstraintClick: b,
    recordingKey: e.recordingKey
  });
  return jsx(fn, {
    dataTestId: 'width-height-row',
    leftLabel: jsx(r3, {}),
    leftInput: T,
    rightLabel: null,
    rightInput: I,
    icon: !o && u !== 0 && jsx(t_, {
      disabled: e.disabled || !p,
      recordingKey: e.recordingKey
    })
  });
}
export function $$r62(e) {
  let [t, r] = useSelectionProperty('count');
  let [i, s] = useSelectionProperty('starInnerScale');
  let {
    smallNudgeAmount,
    bigNudgeAmount,
    wheelMultiplier,
    scrubMultiplier
  } = getNudgeMultipliers();
  let u = useDispatch();
  let p = I9();
  let _ = () => {
    p && (p.every(e => e.type === 'STAR') ? analyticsEventManager.trackDefinedEvent('illustration.web_star_count', {}) : p.every(e => e.type === 'REGULAR_POLYGON') && analyticsEventManager.trackDefinedEvent('illustration.web_polygon_count', {}));
  };
  let h = () => {
    analyticsEventManager.trackDefinedEvent('illustration.web_star_ratio', {});
  };
  let m = _$$P(getI18nString('fullscreen.properties_panel.transform_panel.count'));
  let g = e.countShown && jsxs(NumericInput, {
    'bigNudgeAmount': 10,
    'className': BP,
    'data-tooltip': m,
    'data-tooltip-type': KindEnum.TEXT,
    'dataTestId': 'count-input',
    'disabled': e.countDisabled,
    'dispatch': u,
    'inputClassName': hF,
    'max': 60,
    'min': 3,
    'onValueChange': e => {
      r(e);
      _();
    },
    'recordingKey': generateRecordingKey(e, 'countInput'),
    'resolution': 0.01,
    'scrubMultiplier': 0.1 * smallNudgeAmount,
    smallNudgeAmount,
    'value': t,
    wheelMultiplier,
    'children': [e.starInnerScaleShown && jsx(SvgComponent, {
      className: QK,
      svg: _$$A13
    }), !e.starInnerScaleShown && jsx(SvgComponent, {
      className: QK,
      svg: _$$A12
    })]
  });
  let f = _$$P(getI18nString('fullscreen.properties_panel.transform_panel.ratio'));
  let y = e.starInnerScaleShown && jsx(PercentageBaseInput, {
    bigNudgeAmount,
    'className': sC,
    'data-tooltip': f,
    'data-tooltip-type': KindEnum.TEXT,
    'disabled': e.starInnerScaleDisabled,
    'dispatch': u,
    'inputClassName': hF,
    'min': 0.001,
    'onValueChange': e => {
      s(e);
      h();
    },
    'recordingKey': generateRecordingKey(e, 'starInnerScaleInput'),
    'resolution': 0.001,
    scrubMultiplier,
    smallNudgeAmount,
    'value': i,
    wheelMultiplier,
    'children': jsx(SvgComponent, {
      className: QK,
      svg: _$$A14
    })
  });
  return y ? jsx(fn, {
    leftLabel: renderI18nText('properties.label.count'),
    leftInput: g,
    rightLabel: renderI18nText('fullscreen.properties_panel.transform_panel.ratio'),
    rightInput: y,
    icon: null
  }) : jsx(fn, {
    leftLabel: renderI18nText('properties.label.count'),
    leftInput: g,
    rightLabel: null,
    rightInput: null,
    icon: null
  });
}
export let $$r70 = memo(e => {
  let [t, r] = useSelectionProperty('arcStart');
  let [i, s] = useSelectionProperty('arcSweep');
  let [o, l] = useSelectionProperty('arcRadius');
  let {
    smallNudgeAmount,
    bigNudgeAmount,
    wheelMultiplier,
    scrubMultiplier
  } = getNudgeMultipliers();
  let _ = useDispatch();
  return jsx(DE, {
    label: renderI18nText('properties.label.arc'),
    icon: null,
    input: jsxs('div', {
      className: Xq,
      children: [jsx(AngleInput, {
        bigNudgeAmount,
        'className': fm,
        'data-tooltip': getI18nString('fullscreen.properties_panel.transform_panel.start'),
        'data-tooltip-type': KindEnum.TEXT,
        'disabled': e.arcDataDisabled,
        'dispatch': _,
        'inputClassName': hF,
        'noBorderOnFocus': !1,
        'onValueChange': r,
        'recordingKey': generateRecordingKey(e, 'arcStart'),
        scrubMultiplier,
        smallNudgeAmount,
        'value': t,
        wheelMultiplier,
        'children': jsx(SvgComponent, {
          className: QK,
          svg: _$$A10
        })
      }), jsx(PercentageBaseInput, {
        bigNudgeAmount,
        'className': _$$t2,
        'data-tooltip': getI18nString('fullscreen.properties_panel.transform_panel.sweep'),
        'data-tooltip-type': KindEnum.TEXT,
        'dispatch': _,
        'inputClassName': PK,
        'min': -1,
        'noBorderOnFocus': !1,
        'onValueChange': s,
        'recordingKey': generateRecordingKey(e, 'arcSweep'),
        'resolution': 0.001,
        scrubMultiplier,
        smallNudgeAmount,
        'value': i,
        wheelMultiplier
      }), jsx(PercentageBaseInput, {
        bigNudgeAmount,
        'className': _$$eC,
        'data-tooltip': getI18nString('fullscreen.properties_panel.transform_panel.ratio'),
        'data-tooltip-type': KindEnum.TEXT,
        'dispatch': _,
        'inputClassName': PK,
        'noBorderOnFocus': !1,
        'onValueChange': l,
        'recordingKey': generateRecordingKey(e, 'arcRatio'),
        'resolution': 0.001,
        scrubMultiplier,
        smallNudgeAmount,
        'value': o,
        wheelMultiplier
      })]
    })
  });
});
export function $$r96(e) {
  let t = ne(e.useContextualSelectionProperties);
  let r = createEnabledTransformControlsObservable();
  useSelectionPropertyValue('x');
  let [a, s] = Xw();
  let [o] = useSelectionProperty('hasPartialRadiusSelection');
  let l = jsx($$r48, {
    transformDisabled: !r.transform,
    recordingKey: e.recordingKey,
    showFrameFitButton: !1,
    canEditConstraints: !1,
    openFileKey: e.openFileKey
  });
  let d = jsx(DE, {
    input: jsx($$ns3, {
      handleMirroring: t.handleMirroring,
      recordingKey: generateRecordingKey(e, 'mirroring')
    }),
    icon: null,
    label: getI18nString('fullscreen.properties_panel.section_vector.label_mirroring')
  });
  let c = useContext(_$$Q);
  let u = c.showIllustrationSliderInputs ? jsx(_$$U, {
    disabled: !1,
    useSingleRadiusIcon: isInvalidValue(o) || o
  }) : jsx(_$$I, {
    disabled: !1,
    isBoundToVariable: !1,
    recordingKey: e.recordingKey,
    useSingleRadiusIcon: isInvalidValue(o) || o,
    noBorderOnHover: !1
  });
  let p = jsx(Fragment, {
    children: c.showIllustrationSliderInputs ? jsx(DE, {
      input: u,
      icon: null,
      label: getI18nString('fullscreen.properties_panel.transform_panel.corner_radius')
    }) : jsx(fn, {
      leftInput: u,
      leftLabel: getI18nString('fullscreen.properties_panel.transform_panel.corner_radius'),
      rightInput: null,
      rightLabel: null,
      icon: null
    })
  });
  let _ = jsx(aq, {
    isHoveringOverPanel: a,
    recordingKey: 'alignPanel'
  });
  return jsx(_$$k2, {
    name: 'transform_panel',
    children: jsxs(Zk, {
      'data-non-interactive': !0,
      ...s,
      'style': e.isInSelectionActionsPanel ? {
        paddingBottom: 0
      } : void 0,
      'children': [_, l, d, p]
    })
  });
}
function ne(e) {
  let t = (e ? useSelectedStyleOrSelectionPropertyValues : useSelectionPropertyValues)('x', 'y', 'cornerRadius', 'handleMirroring');
  return {
    ...t,
    handleMirroring: t.handleMirroring
  };
}
export function $$nt5(e) {
  let {
    bigNudgeAmount,
    smallNudgeAmount
  } = getNudgeAmounts();
  let i = ne(e.useContextualSelectionProperties);
  return e.isUI3 ? null : jsx(nr, {
    ...e,
    ...i,
    bigNudgeAmount,
    smallNudgeAmount
  });
}
function nr(e) {
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = e;
  let i = {
    wheelMultiplier: smallNudgeAmount,
    scrubMultiplier: smallNudgeAmount,
    smallNudgeAmount,
    bigNudgeAmount
  };
  let a = jsx(ExpressionInput, {
    'className': BP,
    'inputClassName': hF,
    'value': e.x,
    ...i,
    'data-tooltip': getI18nString('fullscreen.properties_panel.transform_panel.x'),
    'data-tooltip-type': KindEnum.TEXT,
    'dispatch': e.dispatch,
    'mixedMathCallback': scopeAwareFunction.user('apply-mixed-method-for-vector-network', e => {
      SceneGraphHelpers.applyMixedMathForSelectedVectorNetwork(Axis.X, e);
    }),
    'onValueChange': (e, t) => {
      fullscreenValue.updateSelectionProperties({
        x: e
      }, {
        shouldCommit: t
      });
    },
    'recordingKey': generateRecordingKey(e, 'xInput'),
    'tooltipForScreenReadersOnly': !0,
    'children': jsx('span', {
      className: QK,
      children: renderI18nText('fullscreen.properties_panel.transform_panel.x')
    })
  });
  let s = jsx(ExpressionInput, {
    'className': sC,
    'inputClassName': hF,
    'value': e.y,
    ...i,
    'data-tooltip': getI18nString('fullscreen.properties_panel.transform_panel.x'),
    'data-tooltip-type': KindEnum.TEXT,
    'dispatch': e.dispatch,
    'mixedMathCallback': scopeAwareFunction.user('apply-mixed-method-for-vector-network', e => {
      SceneGraphHelpers.applyMixedMathForSelectedVectorNetwork(Axis.Y, e);
    }),
    'onValueChange': (e, t) => {
      fullscreenValue.updateSelectionProperties({
        y: e
      }, {
        shouldCommit: t
      });
    },
    'recordingKey': generateRecordingKey(e, 'yInput'),
    'tooltipForScreenReadersOnly': !0,
    'children': jsx('span', {
      className: QK,
      children: renderI18nText('fullscreen.properties_panel.transform_panel.y')
    })
  });
  let o = jsx($$ns3, {
    handleMirroring: e.handleMirroring,
    recordingKey: generateRecordingKey(e, 'mirroring')
  });
  let l = jsx(LengthInput, {
    'className': BP,
    'inputClassName': hF,
    'value': e.cornerRadius,
    ...i,
    'onValueChange': (e, t) => {
      fullscreenValue.updateSelectionProperties({
        cornerRadius: e
      }, {
        shouldCommit: t
      });
    },
    'dispatch': e.dispatch,
    'recordingKey': generateRecordingKey(e, 'cornerRadiusInput'),
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': getI18nString('fullscreen.properties_panel.transform_panel.corner_radius'),
    'children': jsx(SvgComponent, {
      className: QK,
      svg: _$$A11
    })
  });
  return jsx(_$$k2, {
    name: 'vector_transform_panel',
    children: jsxs(Zk, {
      children: [jsx(fI, {
        children: jsx(_$$Q2, {
          children: renderI18nText('fullscreen.properties_panel.transform_panel.vector')
        })
      }), e.isUI3 ? jsxs(Fragment, {
        children: [jsx(fn, {
          leftLabel: renderI18nText('fullscreen.properties_panel.section_vector.label_position'),
          leftInput: a,
          rightLabel: null,
          rightInput: s,
          icon: null
        }), jsx(DE, {
          label: renderI18nText('fullscreen.properties_panel.section_vector.label_mirroring'),
          input: o,
          icon: null
        }), jsx(fn, {
          leftLabel: renderI18nText('fullscreen.properties_panel.section_vector.label_radius'),
          leftInput: l,
          rightLabel: null,
          rightInput: null,
          icon: null
        })]
      }) : jsxs(Fragment, {
        children: [jsxs(fI, {
          children: [a, s]
        }), jsx(fI, {
          children: o
        }), jsx(fI, {
          children: l
        })]
      })]
    })
  });
}
let nn = l6;
let ni = _$$c$2;
let na = {
  format: e => {
    switch (e) {
      case 'NONE':
        return getI18nString('fullscreen.properties_panel.transform_panel.no_mirroring');
      case 'ANGLE':
        return getI18nString('fullscreen.properties_panel.transform_panel.mirror_angle');
      case 'ANGLE_AND_LENGTH':
        return getI18nString('fullscreen.properties_panel.transform_panel.mirror_angle_and_length');
    }
  }
};
export function $$ns3(e) {
  let t = useDispatch();
  let r = useDropdownState();
  let i = e => {
    fullscreenValue.updateSelectionProperties({
      handleMirroring: e
    });
  };
  return getFilteredFeatureFlags().ce_il_root ? jsxs(bL, {
    value: isInvalidValue(e.handleMirroring) ? void 0 : e.handleMirroring,
    onChange: i,
    recordingKey: e.recordingKey,
    legend: jsx(Legend, {
      children: getI18nString('fullscreen.properties_panel.section_vector.label_mirroring')
    }),
    children: [jsx(c$, {
      'aria-label': getI18nString('fullscreen.properties_panel.transform_panel.no_mirroring'),
      'icon': jsx(d, {}),
      'value': 'NONE'
    }), jsx(c$, {
      'aria-label': getI18nString('fullscreen.properties_panel.transform_panel.mirror_angle'),
      'icon': jsx(c, {}),
      'value': 'ANGLE'
    }), jsx(c$, {
      'aria-label': getI18nString('fullscreen.properties_panel.transform_panel.mirror_angle_and_length'),
      'icon': jsx(u, {}),
      'value': 'ANGLE_AND_LENGTH'
    })]
  }) : jsxs(nn, {
    ariaLabel: getI18nString('fullscreen.properties_panel.transform_panel.mirror_select.aria_label'),
    chevronClassName: _$$r,
    className: GC,
    dispatch: t,
    dropdownShown: r,
    formatter: na,
    iconClassName: jC,
    id: 'handle-mirroring-select',
    inputClassName: i6,
    onChange: i,
    property: e.handleMirroring,
    recordingKey: e.recordingKey,
    children: [jsx(ni, {
      value: 'NONE',
      recordingKey: generateRecordingKey(e, 'NONE')
    }), jsx(ni, {
      value: 'ANGLE',
      recordingKey: generateRecordingKey(e, 'ANGLE')
    }), jsx(ni, {
      value: 'ANGLE_AND_LENGTH',
      recordingKey: generateRecordingKey(e, 'ANGLE_AND_LENGTH')
    })]
  });
}
export const Je = $$r70;
export const vG = $$r51;
export const cU = $$r62;
export const Cs = $$ns3;
export const zq = $$r24;
export const VR = $$nt5;
export const U_ = $$r96;
export const Ws = $$r87;
export const dA = $$r48;
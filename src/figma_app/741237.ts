import { MIXED_MARKER } from '../905/216495';
import { kiwiParserCodec } from '../905/294864';
import { debugState } from '../905/407919';
import { trackEventAnalytics } from '../905/449184';
import { reactTimerGroup } from '../905/542194';
import { getFeatureFlags } from '../905/601108';
import { extractOriginalTextMap } from '../905/744769';
import { getPropertyActions } from '../905/770460';
import { defaultSessionLocalID, sessionLocalIDToString } from '../905/871411';
import { debounce } from '../905/915765';
import { w3, zk } from '../figma_app/198712';
import { fullscreenValue } from '../figma_app/455680';
import { debug } from '../figma_app/465776';
import { SceneGraphHelpers, AppStateTsApi, Fullscreen, ScrollBehavior } from '../figma_app/763686';
import { desktopAPIInstance } from '../figma_app/876459';
export let $$E6 = sessionLocalIDToString(defaultSessionLocalID);
export function $$y3(e) {
  SceneGraphHelpers.addToSelection(e);
}
export function $$b2(e) {
  SceneGraphHelpers.removeFromSelection(e);
}
export function $$T30(e, t = !0) {
  SceneGraphHelpers.replaceSelection(e, t);
}
export function $$I33() {
  SceneGraphHelpers.clearSelection();
}
export function $$S5(e, t) {
  SceneGraphHelpers.selectNodesInRange(e, t);
}
export function $$v13(e, t, r = ScrollBehavior.SCROLLS) {
  SceneGraphHelpers.transferSelection(e, t, r);
}
export function $$A25(e, t, r = ScrollBehavior.SCROLLS) {
  SceneGraphHelpers.duplicateSelection(e, t, r);
}
export function $$x23(e, t) {
  let r = debugState?.getState().mirror.sceneGraph.get(e);
  r && (getFeatureFlags().sts_code && (r.isCodeFile || r.isCodeInstance || r.isCodeComponent) || t && getFeatureFlags().slide_chapters && r.isCanvasGridRow ? r.setHasBeenManuallyRenamed(!0) : getFeatureFlags().slide_chapters && r.isCanvasGridRow && r.setHasBeenManuallyRenamed(!1), r.name = t);
}
export function $$N0(e) {
  Object.keys(debugState?.getState().mirror.sceneGraphSelection).forEach(t => $$x23(t, e));
}
export function $$C29(e, t) {
  let r = debugState?.getState().mirror.sceneGraph.get(e);
  r && (r.isExpanded = t);
}
export function $$w7(e, t) {
  let r = debugState?.getState().mirror.sceneGraph.get(e);
  r && (r.isTemporarilyExpanded = t);
}
export function $$O4(e, t) {
  let r = debugState?.getState().mirror.sceneGraph.get(e);
  r && (r.isSymbolPublishable = t);
}
export function $$R24(e, t) {
  let r = debugState?.getState().mirror.sceneGraph.get(e);
  r && (r.isPublishable = t);
}
export function $$L22(e) {
  SceneGraphHelpers.expandUpToRoot(e);
}
export function $$P28(e, t) {
  SceneGraphHelpers.setExpandedRecursive(e, t);
}
export function $$D34(e, t) {
  SceneGraphHelpers.setSelectionExpanded(e, t);
}
export function $$k21(e) {
  Fullscreen?.updateAppModel(e);
}
export function $$M11(e) {
  $$k21({
    hoveredNode: e
  });
}
export function $$F19(e) {
  AppStateTsApi.uiState().hoveredComponentPropDef.set(e);
}
export function $$j17(e) {
  $$k21({
    temporarilyExpandedInstanceLayers: e
  });
}
export function $$U18(e) {
  $$k21({
    devHandoffCodeLanguage: e
  });
}
export function $$B14(e) {
  $$k21({
    devHandoffPreferences: e
  });
}
export function $$G15() {
  return AppStateTsApi?.propertiesPanelState()?.propertiesPanelTab;
}
export function $$V9(e) {
  return $$G15()?.set(e);
}
export function $$H8() {
  return AppStateTsApi?.devModePropertiesPanelState()?.getEnabledTabs() ?? [];
}
export function $$z32() {
  return AppStateTsApi?.devModePropertiesPanelState()?.selectedTab;
}
export function $$W16(e) {
  return $$z32()?.set(e);
}
export function $$K1(e) {
  $$k21({
    activeTextReviewPlugin: e
  });
}
export function $$Y31(e, t, r) {
  SceneGraphHelpers.setNodeLocked(e, t, r);
}
export function $$$27(e, t, r) {
  SceneGraphHelpers.setNodeVisible(e, t, r);
}
let X = ['x', 'y', 'width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'angle', 'canBecomeFrame', 'canBecomeGroup', 'canBecomeSection', 'aspectRatioLockToggled', 'miterLimitAngle', 'terminalCap', 'dashCap', 'dynamicStrokeFrequency', 'dynamicStrokeSmoothen', 'dynamicStrokeWiggle', 'scatterBrushGap', 'scatterBrushWiggle', 'scatterBrushAngularJitter', 'scatterBrushRotation', 'scatterBrushSizeJitter', 'availableOTFeaturesForSelection', 'availableOTFeaturesForFonts', 'toggledOnOTFeaturesForSelection', 'toggledOffOTFeaturesForSelection', 'mixedStateOTFeaturesForSelection', 'detectedList', 'destinationOverlayPositionType', 'destinationOverlayBackgroundInteraction', 'destinationOverlayBackgroundType', 'destinationOverlayBackgroundColor', 'name', 'numSelected', 'numSelectedByType', 'arcStart', 'arcSweep', 'arcRadius', 'fontFamily', 'previewFontFamily', 'fontStyle', 'fontVariations', 'intrinsicLineHeight', 'textContent', 'textPathStartForward', 'prototypeInteractions', 'prototypeInheritedInternalInteractions', 'isValidPrototypingSourceSelected', 'selectionIsHyperlink', 'whiteboardControls', 'whiteboardColor', 'whiteboardDividedSwatchColors', 'whiteboardStrokeColor', 'whiteboardFontFamilies', 'whiteboardFontSizes', 'whiteboardTextAlignHorizontal', 'whiteboardTextAlignVertical', 'whiteboardStrokeStyle', 'whiteboardNumSelected', 'whiteboardNumSelectedByType', 'whiteboardSelectionCanSummarize', 'whiteboardSelectionCanCluster', 'whiteboardSelectionCanShowAiOnboardingBadge', 'whiteboardStickyAIControlsShown', 'whiteboardMindmapAIControlsShown', 'nodeSelectedValidForQuickAdd', 'whiteboardStrokeWeight', 'washiTapePaint', 'washiTapePaintIsMixed', 'connectorLineStyleForSelection', 'connectorStartCapForSelection', 'connectorEndCapForSelection', 'connectorTextBackgroundTransparent', 'codeBlockLanguage', 'codeBlockTheme', 'leftEndCap', 'rightEndCap', 'leftCapSize', 'rightCapSize', 'maxStrokeWeight', 'shapeWithTextTypeForSelection', 'shapeWithTextFillType', 'shapeWithTextOpacityOverride', 'platformShapeFillType', 'platformShapeOpacityOverride', 'authorVisibility', 'imageAspectRatio', 'imageHasNoStroke', 'imageOverlayPaint', 'sectionContentsHidden', 'isSection', 'variableConsumptionInfo', 'borderTopVisible', 'borderRightVisible', 'borderBottomVisible', 'borderLeftVisible', 'borderSharedWeight', 'stackCounterSpacing', 'gridRowCount', 'gridColumnCount', 'gridTrackSize', 'gridTrackSizingType', 'directlySubscribedAssetKeys', 'numVideosSelected', 'videoAutoplay', 'videoMediaLoop', 'videoMuted', 'videoShowControls', 'themeId', 'objectAnimationType', 'objectAnimationDuration', 'objectAnimationPhase', 'shadow', 'blur', 'htmlWidgetYouTubeVideoURL', 'htmlWidgetGoogleMapLocation', 'htmlWidgetGoogleMapZoom', 'htmlWidgetMailchimpFormURL', 'htmlWidgetMailchimpInputPlaceholder', 'htmlWidgetMailchimpSubmitButtonLabel', 'htmlWidgetMailchimpLayoutIsVertical', 'htmlWidgetGenericEmbedUrl', 'htmlWidgetGenericEmbedCodeType', 'htmlWidgetGenericEmbedIframeHtml', 'htmlWidgetGenericEmbedAllowFullscreen', 'appear', 'hover', 'press', 'focus', 'scrollParallax', 'scrollTransform', 'cursor', 'marquee', 'code'];
export function $$q10(e, t, r, a, o) {
  reactTimerGroup.start('update-selection-properties');
  try {
    !function (e, t, r, a, o) {
      let l = {
        ...e
      };
      let d = function (e) {
        let t = Object.create(null);
        for (let r of X) {
          if (r in e) {
            let n = e[r];
            n !== MIXED_MARKER && (t[r] = n);
            delete e[r];
          }
        }
        return t;
      }(l);
      let c = function (e) {
        let t = {
          guid: {
            sessionID: 0,
            localID: 0
          }
        };
        for (let r in e) {
          let n = e[r];
          n !== MIXED_MARKER && (t[r] = n);
        }
        return t;
      }(l);
      if (a = $$J20(a), t?.guid) {
        if (d) {
          let e = d.fontFamily && d.fontStyle;
          if (debug(!e, 'UI should never simultaneously update font family and style'), d.fontFamily && t.fontStyle && (c.fontName = {
            family: d.fontFamily,
            style: t.fontStyle,
            postscript: ''
          }), t.fontFamily && d.fontStyle && (c.fontName = {
            family: t.fontFamily,
            style: d.fontStyle,
            postscript: ''
          }), d.fontVariations && (c.fontVariations = d.fontVariations), d.variableConsumptionInfo?.variableConsumptionMap) {
            let e = d.variableConsumptionInfo.variableConsumptionMap;
            let t = w3(e);
            c.variableConsumptionMap = t;
            c.parameterConsumptionMap = t;
          }
        }
        let e = kiwiParserCodec.encodeMessage({
          type: 'NODE_CHANGES',
          sessionID: 0,
          ackID: 0,
          nodeChanges: [c]
        });
        Fullscreen?.updateSelectedStyleProperties(e, r, a === zk.YES);
        debug(t.styleType != null, 'unknown style type');
        Z(t.styleType);
      } else {
        let e = kiwiParserCodec.encodeMessage({
          type: 'NODE_CHANGES',
          sessionID: 0,
          ackID: 0,
          nodeChanges: [c]
        });
        SceneGraphHelpers.updateSelectionProperties(d, r, o, a === zk.YES, e);
      }
    }(e, t, r, a, o);
  } catch (e) {
    throw e;
  } finally {
    reactTimerGroup.stop('update-selection-properties');
  }
}
export function $$J20(e) {
  switch (e) {
    case zk.YES:
    case zk.YES_FORCE_TRACKING_AS_EDIT:
    case zk.YES_WITHOUT_TRACKING_AS_EDIT:
      return zk.YES;
    default:
      return zk.NO;
  }
}
let Z = debounce(e => {
  trackEventAnalytics('Style Edited', {
    styleType: e
  });
}, 500);
let Q = Object.create(null);
var ee = (e => (e[e.SceneGraph = 0] = 'SceneGraph', e[e.AppModel = 1] = 'AppModel', e[e.Selection = 2] = 'Selection', e[e.SelectionProperties = 3] = 'SelectionProperties', e))(ee || {});
let et = new Set([0, 1, 2, 3]);
export function $$er26(e = et) {
  e.has(0) && fullscreenValue.fromFullscreen.on('sceneGraphMirrorUpdate', ei);
  e.has(2) && (fullscreenValue.fromFullscreen.on('selection:addSelectors', es), fullscreenValue.fromFullscreen.on('selection:removeSelectors', eo), fullscreenValue.fromFullscreen.on('selection:replaceSelectors', el));
  e.has(1) && fullscreenValue.fromFullscreen.on('updateAppModel', ed);
  e.has(3) && fullscreenValue.fromFullscreen.on('selectionPropertiesUpdate', ec);
}
export function $$en12() {
  let e = Q;
  Q = Object.create(null);
  return e;
}
function ei(e) {
  debug(!Q.invalidateSceneGraph, 'We should get at most one sceneGraphMirrorUpdate per frame. We got two.');
  Q.invalidateSceneGraph = {
    rebuildRows: !e || e.rebuildRows
  };
}
function ea(e, t) {
  return e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24;
}
function es(e) {
  debug(!Q.selection?.replace, 'addSelectors and replaceSelectors called on the same frame');
  Q.selection ||= Object.create(null);
  Q.selection.add ||= Object.create(null);
  Q.selection.userTriggered ||= e.userTriggered;
  let t = e.buffer;
  if (t) {
    for (let e = 0; e < t.length; e += 8) {
      let r = ea(t, e);
      let n = ea(t, e + 4);
      let i = sessionLocalIDToString({
        sessionID: r,
        localID: n
      });
      Q.selection.add[i] = !0;
    }
  }
}
function eo(e) {
  debug(!Q.selection?.replace, 'removeSelectors and replaceSelectors called on the same frame');
  Q.selection ||= Object.create(null);
  Q.selection.remove ||= Object.create(null);
  Q.selection.userTriggered ||= e.userTriggered;
  let t = e.buffer;
  if (t) {
    for (let e = 0; e < t.length; e += 8) {
      let r = ea(t, e);
      let n = ea(t, e + 4);
      let i = sessionLocalIDToString({
        sessionID: r,
        localID: n
      });
      Q.selection.remove[i] = !0;
    }
  }
}
function el(e) {
  debug(!Q.selection?.add, 'addSelectors and replaceSelectors called on the same frame');
  debug(!Q.selection?.remove, 'removeSelectors and replaceSelectors called on the same frame');
  Q.selection ||= Object.create(null);
  Q.selection.replace ||= Object.create(null);
  Q.selection.userTriggered ||= e.userTriggered;
  let t = e.buffer;
  if (t) {
    for (let e = 0; e < t.length; e += 8) {
      let r = ea(t, e);
      let n = ea(t, e + 4);
      let i = sessionLocalIDToString({
        sessionID: r,
        localID: n
      });
      Q.selection.replace[i] = !0;
    }
  }
}
function ed({
  changes: e,
  shouldIgnoreUserPrefs: t
}) {
  if (desktopAPIInstance) {
    let t;
    let r = {};
    let n = {};
    let i = 'actionEnabled__';
    for (let t of Object.keys(e)) {
      if (t.startsWith(i)) {
        r[t.substr(i.length)] = e[t].value;
      } else {
        let r = getPropertyActions(t);
        if (void 0 !== r) {
          let i = e[t].value;
          for (let {
            name,
            propertyValue
          } of r.actions) n[name] = i === propertyValue;
        }
      }
    }
    e.keyboardShortcuts && (t = extractOriginalTextMap(e.keyboardShortcuts.value));
    let a = Object.keys(r).length > 0;
    let s = Object.keys(n).length > 0;
    let o = void 0 !== t;
    (a || s || o) && desktopAPIInstance.updateFullscreenMenuState({
      actionEnabledState: a ? r : void 0,
      actionCheckedState: s ? n : void 0,
      actionShortcuts: t
    });
  }
  let r = Object.create(null);
  let n = Object.create(null);
  for (let i in e) {
    r[i] = e[i].value;
    n[i] = t?.[i];
  }
  Q.appModelChanges = {
    ...Q.appModelChanges,
    ...r
  };
  Q.appModelChangesShouldIgnoreUserPrefs = {
    ...Q.appModelChangesShouldIgnoreUserPrefs,
    ...n
  };
}
function ec(e) {
  let t = e.buffer && e.buffer.length > 0 ? kiwiParserCodec.decodeMessage(e.buffer) : null;
  delete e.buffer;
  debug(!Q.selectionProperties, 'Updating selectionProperties multiple times on a frame');
  Q.selectionProperties = {
    message: t,
    derivedProperties: e
  };
}
export const BH = $$N0;
export const Br = $$K1;
export const D$ = $$b2;
export const Dh = $$y3;
export const G9 = $$O4;
export const GL = $$S5;
export const Hr = $$E6;
export const Ir = $$w7;
export const NI = $$H8;
export const NT = $$V9;
export const T8 = $$q10;
export const Uc = $$M11;
export const XP = $$en12;
export const Yu = $$v13;
export const aB = $$B14;
export const aY = $$G15;
export const ax = $$W16;
export const bd = $$j17;
export const bw = $$U18;
export const dH = $$F19;
export const dZ = $$J20;
export const gX = $$k21;
export const hq = $$L22;
export const i = $$x23;
export const iT = $$R24;
export const kH = $$A25;
export const n_ = $$er26;
export const pr = $$$27;
export const sK = $$P28;
export const sq = $$C29;
export const tJ = $$T30;
export const tU = $$Y31;
export const tw = $$z32;
export const wr = $$I33;
export const yF = $$D34;
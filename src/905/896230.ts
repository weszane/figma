import { captureException } from '../905/11'
import { yx } from '../905/41973'
import { x as _$$x } from '../905/89282'
import { X } from '../905/91006'
import { featureAPI } from '../905/189279'
import { r as _$$r } from '../905/210851'
import { H as _$$H } from '../905/250770'
import { F as _$$F2 } from '../905/268366'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { BU, fO, k9 } from '../905/319279'
import { debugState } from '../905/407919'
import { browserCapabilities } from '../905/409121'
import { analyticsEventManager } from '../905/449184'
import { createCapabilityGetters } from '../905/544669'
import { uo } from '../905/581543'
import { K } from '../905/591700'
import { Q } from '../905/608122'
import { u as _$$u } from '../905/644087'
import { EventEmitter } from '../905/690073'
import { XA } from '../905/714160'
import { logCustom } from '../905/714362'
import { N as _$$N } from '../905/718123'
import { Bm } from '../905/755627'
import { B as _$$B } from '../905/797453'
import { NP } from '../905/889931'
import { fullscreenCrashHandler } from '../905/913008'
import { h as _$$h } from '../905/943864'
import { LineBreakProcessor } from '../905/994917'
import { Z } from '../figma_app/61485'
import { Iu } from '../figma_app/141088'
import { _v } from '../figma_app/204937'
import { $C, _L, A1, A2, a5, Ag, aO, b_, be, Bj, Bz, c2, CJ, d1, d_, di, dJ, EU, eZ, Fe, Gh, gQ, IW, Iz, jw, k0, l5, lM, LY, Lz, M0, mk, nn, p6, pG, qP, qQ, qV, rb, rf, rm, RN, RU, Rx, S_, sG, TC, tg, tO, tz, Ud, uG, uH, V3, Vm, vv, W3, w4, WF, wm, xJ, yR, yy, Z3, ZD } from '../figma_app/548577'
import { safeModeRenderController } from '../figma_app/582563'
import { prototypeLibPerfModule } from '../figma_app/661568'
import { UserAppType } from '../figma_app/763686'

// Base Figma app stub used by prototype-lib bindings
class FigmaAppBase extends EU {
  constructor(...args: any[]) {
    super(...args)
    this.fileArrayToString = null
    this.session = {
      user: null,
    }
    this.fromFullscreen = new EventEmitter('')
    this.viewport = new EventEmitter('')
  }

  saveUseNumbersForOpacityPreference(_e) {
    throw new Error('Method not implemented.')
  }

  onCreateSticky() {
    throw new Error('Method not implemented.')
  }

  isReady() {
    return !1
  }

  setIsReady__TEST_ONLY(_e) {}
  figFileLoaded() {}
  resetLoadedFigFile() {}
  loadAndStartFullscreenIfNecessary() {
    return Promise.reject()
  }

  setFigmascopeSelectedGuidCallback(_e) {}
  fileLoadTime() {
    return null
  }

  hasDesktopApp() {
    return !1
  }

  toggleDowntimeBanner() {}
  getDesktopAppMenuItemName() {
    return ''
  }

  handleDesktopAppMenuItem() {}
  getCurrentFileName() {
    throw new Error('Method not implemented.')
  }

  getThumbnailMenuItemName() {
    return ''
  }

  getFileThumbnailMenuItemName() {
    return ''
  }

  handleFileThumbnailMenuItem() {}
  disableFileThumbnailMenu() {
    return !1
  }

  disableShowRotationOriginMenuItem() {
    return !1
  }

  getPageThumbnailMenuItemName() {
    return ''
  }

  handlePageThumbnailMenuItem() {}
  disablePageThumbnailMenu() {
    return !1
  }

  handleSketchImportEvent() {
    return !1
  }

  reparentRootElement() {}
  isRootElementVisible() {
    return !1
  }

  updateSelectionProperties() {}
  deselectProperty() {}
  updateAppModel() {}
  onReady() {
    return Promise.reject()
  }

  openFilePromise() {
    return Promise.reject()
  }

  openFileKeyPromise() {
    return Promise.reject()
  }

  sourceFileKeyPromise() {
    return Promise.reject()
  }

  currentOrgId() {
    return ''
  }

  currentTeamId() {
    return ''
  }

  triggerActionEnum() {}
  triggerActionEnumInUserEditScope() {}
  triggerAction() {}
  triggerActionInUserEditScope() {}
  commit() {
    return -1
  }

  getViewportInfo() {}
  isInDrafts() {
    return !1
  }

  showUI() {
    return !1
  }

  dispatch() {}
  dispatchIfSaved() {}
  restoreSoftDeletedNode() {}
  forwardKeyboardEvent() {}
  setMissingFont() {}
  selectMissingFontNodes() {}
  onWatchedNodeBoundsChange() {}
  onFrame() {}
  pinchZoomFixDisabled() {
    return !1
  }

  allowWebGestures() {}
  cancelPendingGestures() {}
  takePencilSample() {}
  memorySpikeOnFileLoadBytes() {
    throw new Error('FigmaApp.memorySpikeOnFileLoadBytes: method not implemented')
  }

  takeIndirectPinchGesture() {}
}
// Interaction bindings implementation for prototype-lib
class InteractionBindingsImpl extends tz {
  createMouseBehavior(_e) {
    return {
      handleMouseLeave: () => {},
      handleMouseMove: () => {},
      handleMouseDown: () => {},
      handleMouseDrag: () => {},
      handleMouseUp: () => {},
      handleBeforeFrame: () => {},
      handleContextMenuOpen: () => {},
      render: () => {},
      renderUnderEditModeUI: () => {},
      reset: () => {},
      name: () => '',
    }
  }

  tableUiReorderHandleHoveredLength() {
    return 0
  }

  tableUiAddButtonHoveredRadius() {
    return 0
  }
}
// Variables mirror bindings implementation for prototype-lib
class VariablesMirrorBindingsImpl {
  subscribedVariableOverridesUpdated(_e) {
    throw new Error('Method not implemented.')
  }

  subscribedVariableOverridesDeleted(_e) {
    throw new Error('Method not implemented.')
  }

  localVariableSetUpdated(_e) {
    throw new Error('VariablesMirrorBinding.localVariableSetUpdated not implemented.')
  }

  subscribedVariableSetUpdated(_e, _t) {
    throw new Error('VariablesMirrorBinding.subscribedVariableSetAdded not implemented.')
  }

  localVariableSetDeleted(_e) {
    throw new Error('VariablesMirrorBinding.deleteVariableSet not implemented.')
  }

  subscribedVariableSetDeleted(_e) {
    throw new Error('VariablesMirrorBinding.subscribedVariableSetDeleted not implemented.')
  }

  localVariablesUpdated(_e) {
    throw new Error('VariablesMirrorBindings.localVariableUpdated not implemented.')
  }

  localVariablesDeleted(_e) {
    throw new Error('VariablesMirrorBindings.variableDeleted not implemented.')
  }

  localVariableOverridesDeleted(_e) {
    throw new Error('VariablesMirrorBindings.localVariableOverridesDeleted not implemented.')
  }

  localVariableOverridesUpdated(_e) {
    throw new Error('VariablesMirrorBindings.localVariableOverridesUpdated not implemented.')
  }

  variableResolvedValueUpdated(_e, _t) {
    throw new Error('VariablesMirrorBindings.variableResolvedValueUpdated not implemented.')
  }

  explicitModeUpdated(_e, _t) {
    throw new Error('VariablesMirrorBindings.explicitModeUpdated not implemented.')
  }

  resetMirrorCache() {
    throw new Error('VariablesMirrorBInding.resetMirrorCache not implemented.')
  }
}
// State management bindings implementation for prototype-lib
class StateManagementBindingsImpl {
  recordInteractionUpgraded(_e, _t) {
    throw new Error('StateManagementBindings.recordInteractionUpgraded not yet implemented')
  }
}
// Web reporting implementation for prototype-lib
class WebReportingImpl extends Rx {
  logNumericMetric(e, t) {
    prototypeLibPerfModule.logValue(e, t)
  }

  startPerfTimer(e) {
    prototypeLibPerfModule.start(e)
  }

  stopPerfTimer(e) {
    prototypeLibPerfModule.end(e)
  }

  slogFromFullscreen(e, t, i, n, r, a, s) {
    return logCustom(e, t, i, n, r, a, s)
  }

  trackDefinedEventFromFullscreen(e, t) {
    analyticsEventManager.trackDefinedFullscreenEvent(e, _$$r(t))
  }

  resetDefinedAnalyticsForDocument() {
    analyticsEventManager.resetDefinedAnalyticsForDocument()
  }
}
// Concrete Figma app used in prototype-lib runtime
class PrototypeLibFigmaApp extends FigmaAppBase {
  isUserPresent() {
    return !1
  }
}
// Out-of-memory helpers implementation for prototype-lib
class OOMHelpersImpl extends Q {
  allocationFailed(_e, _t, _i, _n, _r, a) {
    this._receivedFailedAllocation || (this._receivedFailedAllocation = !0, prototypeLibPerfModule.reportOOM(a), debugState?.dispatch(VisualBellActions.enqueue({
      get message() {
        return getI18nString('proto.lib.device_low_memory')
      },
    })))
  }
}
const prototypeLibBindings = {
  PrototypeApp: () => k9,
  PrototypingFormatter: () => _$$u,
  SkewKiwiSerialization: () => BU,
  DeprecatedJsSceneHooks: () => fO,
  CommonApp: () => ({
    ...featureAPI,
    ...createCapabilityGetters(),
    appType: () => UserAppType.PrototypeLib,
  }),
  AccessibleAreasBindings: () => _$$H,
  OOMHelpers: () => new OOMHelpersImpl(),
  PlatformInfo: () => browserCapabilities,
  FontManagerJs: () => Z,
  FigmaApp: () => new PrototypeLibFigmaApp(),
  WebAsync: () => _$$F2,
  WebReporting: () => new WebReportingImpl(),
  JsKiwiSerialization: () => K,
  SceneGraphHookBindings: () => uo,
  BoundsWatcherTs: Iu,
  WebGPUTsContext: () => NP,
  TsGlContextBindings: X,
  ScreenBindings: () => _$$N,
  ThumbnailRequestManager: () => new rb(),
  HTMLWindowBindings: () => new CJ(),
  AutoLayoutBindings: () => new WF(),
  WebUserSyncing: () => new Lz(),
  EmojiWheelBindings: () => new eZ(),
  JsBindingsTestHelpers: () => new jw(),
  WebSelection: () => new TC(),
  Comments: () => new tg(),
  WidgetBindings: () => new nn(),
  ImageIo: () => new A2(),
  ImageTsBindings: () => new V3(),
  VideoTsBindings: () => new qQ(),
  PdfImportBindings: () => new w4(),
  CanvasSearchBindings: () => new tO(),
  AccessibilityBindings: () => new dJ(),
  SummaryBindings: () => new d1(),
  TsFontManualLoader: () => new yy(),
  StylesCheckBindings: () => new pG(),
  HandoffScenegraphBindings: () => new RU(),
  RichTextBindings: () => new yR(),
  WebMultiplayer: () => new lM(),
  PluginCallbacks: () => new c2(),
  AutosaveSessionBindings: () => new di(),
  InteractionBindings: () => new InteractionBindingsImpl(),
  SpellCheckAPIBindings: () => new Vm(),
  VariablesBindingsWeb: () => new Ag(),
  VariablesMirrorBindings: () => new VariablesMirrorBindingsImpl(),
  AssetMirrorBindings: () => new sG(),
  AssetConsumptionMirrorBindings: () => new d_(),
  HandoffBindings: () => new p6(),
  HandoffCallbacks: () => new rf(),
  JSTextLayout: () => LineBreakProcessor,
  ScaleToolAPIBindings: () => _$$h,
  EmojiTsBindings: () => new k0(),
  NodeChatMessageHelper: () => new IW(),
  MentionsTsBindings: () => new l5(),
  LinterBindings: () => new ZD(),
  EditScopeWebBindings: () => new RN(),
  StateManagementBindings: () => new StateManagementBindingsImpl(),
  ColorManagementBindings: () => new LY(),
  KeyboardShortcutBindings: () => new mk(),
  WhiteboardTemplatePreviewTsBindings: () => new Fe(),
  FrameDistributionTrackerBindings: () => new uH(),
  WhiteboardTsBindings: () => new Z3(),
  CodeBlockBindings: () => new vv(),
  ColorRampBindings: () => new qV(),
  WhiteboardAnalyticsTsBindings: () => new b_(),
  CurrentUserInfo: () => new Bj(),
  ExperimentBuildersTsBindings: () => new be(),
  ZipImpl: () => new wm(),
  CoreUtils: () => _$$x,
  MissingFontsTrackerJs: () => new Gh(),
  StatsigConfigBindings: () => new _v(),
  WhiteboardThemeTsBindings: () => new aO(),
  QuickActionsBindings: () => new $C(),
  BranchingWebBindings: () => _$$B,
  SafeModeOptions: () => safeModeRenderController,
  DSAWebBindings: () => new xJ(),
  WhiteboardDltConstantBindings: () => new Ud(),
  SlidesTsBindings: () => new Iz(),
  CooperTsBindings: () => new A1(),
  DeprecatedXHRSendBindings: () => yx,
  ComponentPropBindings: () => XA,
  FullscreenWebSocketTsCallbacks: () => new _L(),
  AutosuggestTextBindings: () => new rm(),
  VariablesJsRuntimeAliasTsBindings: () => new qP(),
  SitesBindings: () => new W3(),
  SitesJsBindings: () => new M0(),
  AutoSuggestAssetBindings: () => new a5(),
  UndoRedoEventsBindings: () => new S_(),
  UserActionTimingBindings: () => new uG(),
  ScenegraphStringManagementBindings: () => Bm,
  SlotsBindingsWeb: () => new gQ(),
  jsHelpers: {
    reportError: captureException,
    preventEnteringCpp: () => fullscreenCrashHandler.preventEnteringCpp(),
    fatalCppError(e, t) {
      fullscreenCrashHandler.fatalCppError(e, t)
    },
  },
  ThumbhashBindings: () => new Bz(),
}
export let $$K0 = prototypeLibBindings
export const t = $$K0

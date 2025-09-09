import { x as _$$x } from "../905/89282";
import { K } from "../905/591700";
import { UserAppType } from "../figma_app/763686";
import { EU, tz, Rx, rb, CJ, WF, Lz, eZ, jw, TC, tg, nn, A2, V3, qQ, w4, tO, dJ, d1, yy, pG, RU, yR, lM, c2, di, Vm, Ag, sG, d_, p6, rf, k0, IW, l5, ZD, RN, LY, mk, Fe, uH, Z3, vv, qV, b_, Bj, be, wm, Gh, aO, $C, xJ, Ud, Iz, A1, _L, rm, qP, W3, M0, a5, S_, uG, gQ, Bz } from "../figma_app/548577";
import { analyticsEventManager } from "../905/449184";
import { debugState } from "../905/407919";
import { iw } from "../figma_app/582563";
import { captureException } from "../905/11";
import { logCustom } from "../905/714362";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { Iu } from "../figma_app/141088";
import { EventEmitter } from "../905/690073";
import { y as _$$y } from "../905/913008";
import { N as _$$N } from "../905/718123";
import { X } from "../905/91006";
import { NP } from "../905/889931";
import { k9, BU, fO } from "../905/319279";
import { r as _$$r } from "../905/210851";
import { u as _$$u } from "../905/644087";
import { XA } from "../905/714160";
import { H as _$$H } from "../905/250770";
import { N as _$$N2 } from "../905/544669";
import { B as _$$B } from "../905/797453";
import { Z } from "../figma_app/61485";
import { _v } from "../figma_app/204937";
import { yx } from "../905/41973";
import { Q } from "../905/608122";
import { r as _$$r2 } from "../figma_app/661568";
import { y as _$$y2 } from "../905/409121";
import { h as _$$h } from "../905/943864";
import { uo } from "../905/581543";
import { Bm } from "../905/755627";
import { LineBreakProcessor } from "../905/994917";
import { LO } from "../905/189279";
import { F as _$$F2 } from "../905/268366";
class f extends EU {
  constructor() {
    super(...arguments);
    this.fileArrayToString = null;
    this.session = {
      user: null
    };
    this.fromFullscreen = new EventEmitter("");
    this.viewport = new EventEmitter("");
  }
  saveUseNumbersForOpacityPreference(e) {
    throw Error("Method not implemented.");
  }
  onCreateSticky() {
    throw Error("Method not implemented.");
  }
  isReady() {
    return !1;
  }
  setIsReady__TEST_ONLY(e) {}
  figFileLoaded() {}
  resetLoadedFigFile() {}
  loadAndStartFullscreenIfNecessary() {
    return Promise.reject();
  }
  setFigmascopeSelectedGuidCallback(e) {}
  fileLoadTime() {
    return null;
  }
  hasDesktopApp() {
    return !1;
  }
  toggleDowntimeBanner() {}
  getDesktopAppMenuItemName() {
    return "";
  }
  handleDesktopAppMenuItem() {}
  getCurrentFileName() {
    throw Error("Method not implemented.");
  }
  getThumbnailMenuItemName() {
    return "";
  }
  getFileThumbnailMenuItemName() {
    return "";
  }
  handleFileThumbnailMenuItem() {}
  disableFileThumbnailMenu() {
    return !1;
  }
  disableShowRotationOriginMenuItem() {
    return !1;
  }
  getPageThumbnailMenuItemName() {
    return "";
  }
  handlePageThumbnailMenuItem() {}
  disablePageThumbnailMenu() {
    return !1;
  }
  handleSketchImportEvent() {
    return !1;
  }
  reparentRootElement() {}
  isRootElementVisible() {
    return !1;
  }
  updateSelectionProperties() {}
  deselectProperty() {}
  updateAppModel() {}
  onReady() {
    return Promise.reject();
  }
  openFilePromise() {
    return Promise.reject();
  }
  openFileKeyPromise() {
    return Promise.reject();
  }
  sourceFileKeyPromise() {
    return Promise.reject();
  }
  currentOrgId() {
    return "";
  }
  currentTeamId() {
    return "";
  }
  triggerActionEnum() {}
  triggerActionEnumInUserEditScope() {}
  triggerAction() {}
  triggerActionInUserEditScope() {}
  commit() {
    return -1;
  }
  getViewportInfo() {}
  isInDrafts() {
    return !1;
  }
  showUI() {
    return !1;
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
    return !1;
  }
  allowWebGestures() {}
  cancelPendingGestures() {}
  takePencilSample() {}
  memorySpikeOnFileLoadBytes() {
    throw Error("FigmaApp.memorySpikeOnFileLoadBytes: method not implemented");
  }
  takeIndirectPinchGesture() {}
}
class _ extends tz {
  createMouseBehavior(e) {
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
      name: () => ""
    };
  }
  tableUiReorderHandleHoveredLength() {
    return 0;
  }
  tableUiAddButtonHoveredRadius() {
    return 0;
  }
}
class A {
  subscribedVariableOverridesUpdated(e) {
    throw Error("Method not implemented.");
  }
  subscribedVariableOverridesDeleted(e) {
    throw Error("Method not implemented.");
  }
  localVariableSetUpdated(e) {
    throw Error("VariablesMirrorBinding.localVariableSetUpdated not implemented.");
  }
  subscribedVariableSetUpdated(e, t) {
    throw Error("VariablesMirrorBinding.subscribedVariableSetAdded not implemented.");
  }
  localVariableSetDeleted(e) {
    throw Error("VariablesMirrorBinding.deleteVariableSet not implemented.");
  }
  subscribedVariableSetDeleted(e) {
    throw Error("VariablesMirrorBinding.subscribedVariableSetDeleted not implemented.");
  }
  localVariablesUpdated(e) {
    throw Error("VariablesMirrorBindings.localVariableUpdated not implemented.");
  }
  localVariablesDeleted(e) {
    throw Error("VariablesMirrorBindings.variableDeleted not implemented.");
  }
  localVariableOverridesDeleted(e) {
    throw Error("VariablesMirrorBindings.localVariableOverridesDeleted not implemented.");
  }
  localVariableOverridesUpdated(e) {
    throw Error("VariablesMirrorBindings.localVariableOverridesUpdated not implemented.");
  }
  variableResolvedValueUpdated(e, t) {
    throw Error("VariablesMirrorBindings.variableResolvedValueUpdated not implemented.");
  }
  explicitModeUpdated(e, t) {
    throw Error("VariablesMirrorBindings.explicitModeUpdated not implemented.");
  }
  resetMirrorCache() {
    throw Error("VariablesMirrorBInding.resetMirrorCache not implemented.");
  }
}
class y {
  recordInteractionUpgraded(e, t) {
    throw Error("StateManagementBindings.recordInteractionUpgraded not yet implemented");
  }
}
class z extends Rx {
  logNumericMetric(e, t) {
    _$$r2.logValue(e, t);
  }
  startPerfTimer(e) {
    _$$r2.start(e);
  }
  stopPerfTimer(e) {
    _$$r2.end(e);
  }
  slogFromFullscreen(e, t, i, n, r, a, s) {
    return logCustom(e, t, i, n, r, a, s);
  }
  trackDefinedEventFromFullscreen(e, t) {
    analyticsEventManager.trackDefinedFullscreenEvent(e, _$$r(t));
  }
  resetDefinedAnalyticsForDocument() {
    analyticsEventManager.resetDefinedAnalyticsForDocument();
  }
}
class H extends f {
  isUserPresent() {
    return !1;
  }
}
class W extends Q {
  allocationFailed(e, t, i, n, r, a) {
    this._receivedFailedAllocation || (this._receivedFailedAllocation = !0, _$$r2.reportOOM(a), debugState?.dispatch(VisualBellActions.enqueue({
      get message() {
        return getI18nString("proto.lib.device_low_memory");
      }
    })));
  }
}
export let $$K0 = {
  PrototypeApp: () => k9,
  PrototypingFormatter: () => _$$u,
  SkewKiwiSerialization: () => BU,
  DeprecatedJsSceneHooks: () => fO,
  CommonApp: () => ({
    ...LO,
    ..._$$N2(),
    appType: () => UserAppType.PrototypeLib
  }),
  AccessibleAreasBindings: () => _$$H,
  OOMHelpers: () => new W(),
  PlatformInfo: () => _$$y2,
  FontManagerJs: () => Z,
  FigmaApp: () => new H(),
  WebAsync: () => _$$F2,
  WebReporting: () => new z(),
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
  InteractionBindings: () => new _(),
  SpellCheckAPIBindings: () => new Vm(),
  VariablesBindingsWeb: () => new Ag(),
  VariablesMirrorBindings: () => new A(),
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
  StateManagementBindings: () => new y(),
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
  SafeModeOptions: () => iw,
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
    preventEnteringCpp: () => _$$y.preventEnteringCpp(),
    fatalCppError(e, t) {
      _$$y.fatalCppError(e, t);
    }
  },
  ThumbhashBindings: () => new Bz()
};
export const t = $$K0;
import { captureException } from '../905/11';
import { deprecatedXHRSendBindingsInstance } from '../905/41973';
import { CoreUtils } from '../905/89282';
import { createTsGlContextManager } from '../905/91006';
import { featureAPI } from '../905/189279';
import { buildAnalyticsContext } from '../905/210851';
import { AccessibleAreasBindings } from '../905/250770';
import { WebAsyncInstance } from '../905/268366';
import { VisualBellActions } from '../905/302958';
import { getI18nString } from '../905/303541';
import { DeprecatedJsSceneHooks, PrototypeApp, SkewKiwiSerialization } from '../905/319279';
import { debugState } from '../905/407919';
import { browserCapabilities } from '../905/409121';
import { analyticsEventManager } from '../905/449184';
import { createCapabilityGetters } from '../905/544669';
import { SceneGraphHookBindingsInstance } from '../905/581543';
import { JsKiwiSerializationInstance } from '../905/591700';
import { MemoryStateManager } from '../905/608122';
import { prototypingFormatterInstance } from '../905/644087';
import { EventEmitter } from '../905/690073';
import { componentPropBindingsInstance } from '../905/714160';
import { logCustom } from '../905/714362';
import { ScreenBindings } from '../905/718123';
import { scenegraphStringManagementBindingsInstance } from '../905/755627';
import { branchingWebBindingsInstance } from '../905/797453';
import { webGPUContextInstance } from '../905/889931';
import { fullscreenCrashHandler } from '../905/913008';
import { ScaleToolAPIBindings } from '../905/943864';
import { JSTextLayoutImpl } from '../905/994917';
import { fontManagerJsHandler } from '../figma_app/61485';
import { getBoundsChangeHandler } from '../figma_app/141088';
import { StatsigConfigBindings } from '../figma_app/204937';
import { AccessibilityBindings, AssetConsumptionMirrorBindings, AssetMirrorBindings, AutoLayoutBindings, AutosaveSessionBindings, AutoSuggestAssetBindings, AutosuggestTextBindings, CanvasSearchBindings, CodeBlockBindings, ColorManagementBindings, ColorRampBindings, CommentManagerImpl, CooperTsBindings, CurrentUserInfo, DefaultStrokeWeightManager, DesignLinterManager, DSAWebBindings, EditScopeHandler, EmojiTsBindings, EmojiWheelBindings, FrameDistributionTrackerBindings, FullscreenWebSocketTsCallbacks, HandoffBindings, HandoffCallbacks, HandoffScenegraphBindings, ImageProcessorHandler, ImageTsBindings, JsBindingsTestHelpers, KeyboardShortcutBindings, MainAppHandler, MentionsTypeaheadManager, MissingFontScanner, MouseBehaviorManager, NodeChatMessageHelper, OrganizationMembershipChecker, PdfImportBindings, PerformanceAnalyticsManager, PluginCallbacksManager, QuickActionsManager, RichTextBindings, SitesJsBindings, SitesViewManager, SlidesTsBindings, SlotsBindingsWeb, SpellCheckAPIBindings, StylesCheckBindings, SummaryBindings, ThumbHashHandler, ThumbnailRequestManager, TsFontManualLoader, UI3ColorManager, UndoRedoEventsBindings, UserActionTimingBindings, VariablesBindingsWeb, VariablesJsRuntimeAliasTsBindings, VideoTsBindings, WebMultiplayerManager, WebSelectionManager, WebUserSyncing, WhiteboardAnalyticsTsBindings, WhiteboardTemplatePreviewTsBindings, WhiteboardTsBindings, WidgetManagerHandler, WindowManagerHandler, ZipImpl } from '../figma_app/548577';
import { safeModeRenderController } from '../figma_app/582563';
import { prototypeLibPerfModule } from '../figma_app/661568';
import { UserAppType } from '../figma_app/763686';

// Base Figma app stub used by prototype-lib bindings
class FigmaAppBase extends MainAppHandler {
  fileArrayToString: any;
  session: any;
  fromFullscreen: EventEmitter;
  viewport: EventEmitter;
  constructor(...args: any[]) {
    super(...args);
    this.fileArrayToString = null;
    this.session = {
      user: null
    };
    this.fromFullscreen = new EventEmitter('');
    this.viewport = new EventEmitter('');
  }
  saveUseNumbersForOpacityPreference(_e) {
    throw new Error('Method not implemented.');
  }
  onCreateSticky() {
    throw new Error('Method not implemented.');
  }
  isReady() {
    return !1;
  }
  setIsReady__TEST_ONLY(_e) {}
  figFileLoaded() {}
  resetLoadedFigFile() {}
  loadAndStartFullscreenIfNecessary() {
    return Promise.reject();
  }
  setFigmascopeSelectedGuidCallback(_e) {}
  fileLoadTime() {
    return null;
  }
  hasDesktopApp() {
    return !1;
  }
  toggleDowntimeBanner() {}
  getDesktopAppMenuItemName() {
    return '';
  }
  handleDesktopAppMenuItem() {}
  getCurrentFileName() {
    throw new Error('Method not implemented.');
  }
  getThumbnailMenuItemName() {
    return '';
  }
  getFileThumbnailMenuItemName() {
    return '';
  }
  handleFileThumbnailMenuItem() {}
  disableFileThumbnailMenu() {
    return !1;
  }
  disableShowRotationOriginMenuItem() {
    return !1;
  }
  getPageThumbnailMenuItemName() {
    return '';
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
    return '';
  }
  currentTeamId() {
    return '';
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
    throw new Error('FigmaApp.memorySpikeOnFileLoadBytes: method not implemented');
  }
  takeIndirectPinchGesture() {}
}
// Interaction bindings implementation for prototype-lib
class InteractionBindingsImpl extends MouseBehaviorManager {
  createMouseBehavior(_e: any) {
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
      name: () => ''
    };
  }
  tableUiReorderHandleHoveredLength() {
    return 0;
  }
  tableUiAddButtonHoveredRadius() {
    return 0;
  }
}
// Variables mirror bindings implementation for prototype-lib
class VariablesMirrorBindingsImpl {
  subscribedVariableOverridesUpdated(_e) {
    throw new Error('Method not implemented.');
  }
  subscribedVariableOverridesDeleted(_e) {
    throw new Error('Method not implemented.');
  }
  localVariableSetUpdated(_e) {
    throw new Error('VariablesMirrorBinding.localVariableSetUpdated not implemented.');
  }
  subscribedVariableSetUpdated(_e, _t) {
    throw new Error('VariablesMirrorBinding.subscribedVariableSetAdded not implemented.');
  }
  localVariableSetDeleted(_e) {
    throw new Error('VariablesMirrorBinding.deleteVariableSet not implemented.');
  }
  subscribedVariableSetDeleted(_e) {
    throw new Error('VariablesMirrorBinding.subscribedVariableSetDeleted not implemented.');
  }
  localVariablesUpdated(_e) {
    throw new Error('VariablesMirrorBindings.localVariableUpdated not implemented.');
  }
  localVariablesDeleted(_e) {
    throw new Error('VariablesMirrorBindings.variableDeleted not implemented.');
  }
  localVariableOverridesDeleted(_e) {
    throw new Error('VariablesMirrorBindings.localVariableOverridesDeleted not implemented.');
  }
  localVariableOverridesUpdated(_e) {
    throw new Error('VariablesMirrorBindings.localVariableOverridesUpdated not implemented.');
  }
  variableResolvedValueUpdated(_e, _t) {
    throw new Error('VariablesMirrorBindings.variableResolvedValueUpdated not implemented.');
  }
  explicitModeUpdated(_e, _t) {
    throw new Error('VariablesMirrorBindings.explicitModeUpdated not implemented.');
  }
  resetMirrorCache() {
    throw new Error('VariablesMirrorBInding.resetMirrorCache not implemented.');
  }
}
// State management bindings implementation for prototype-lib
class StateManagementBindingsImpl {
  recordInteractionUpgraded(_e, _t) {
    throw new Error('StateManagementBindings.recordInteractionUpgraded not yet implemented');
  }
}
// Web reporting implementation for prototype-lib
class WebReportingImpl extends PerformanceAnalyticsManager {
  logNumericMetric(e, t) {
    prototypeLibPerfModule.logValue(e, t);
  }
  startPerfTimer(e) {
    prototypeLibPerfModule.start(e);
  }
  stopPerfTimer(e) {
    prototypeLibPerfModule.end(e);
  }
  slogFromFullscreen(e, t, i, n, r, a, s) {
    return logCustom(e, t, i, n, r, a, s);
  }
  trackDefinedEventFromFullscreen(e, t) {
    analyticsEventManager.trackDefinedFullscreenEvent(e, buildAnalyticsContext(t));
  }
  resetDefinedAnalyticsForDocument() {
    analyticsEventManager.resetDefinedAnalyticsForDocument();
  }
}
// Concrete Figma app used in prototype-lib runtime
class PrototypeLibFigmaApp extends FigmaAppBase {
  isUserPresent() {
    return !1;
  }
}
// Out-of-memory helpers implementation for prototype-lib
class OOMHelpersImpl extends MemoryStateManager {
  allocationFailed(_e: any, _t: any, _i: any, _n: any, _r: any, a: any): void {
    if (!this._receivedFailedAllocation) {
      this._receivedFailedAllocation = true;
      prototypeLibPerfModule.reportOOM(a);
      debugState?.dispatch(VisualBellActions.enqueue({
        get message() {
          return getI18nString('proto.lib.device_low_memory');
        }
      }));
    }
  }
}
export const prototypeLibBindings = {
  PrototypeApp: () => PrototypeApp,
  PrototypingFormatter: () => prototypingFormatterInstance,
  SkewKiwiSerialization: () => SkewKiwiSerialization,
  DeprecatedJsSceneHooks: () => DeprecatedJsSceneHooks,
  CommonApp: () => ({
    ...featureAPI,
    ...createCapabilityGetters(),
    appType: () => UserAppType.PrototypeLib
  }),
  AccessibleAreasBindings: () => AccessibleAreasBindings,
  OOMHelpers: () => new OOMHelpersImpl(),
  PlatformInfo: () => browserCapabilities,
  FontManagerJs: () => fontManagerJsHandler,
  FigmaApp: () => new PrototypeLibFigmaApp(),
  WebAsync: () => WebAsyncInstance,
  WebReporting: () => new WebReportingImpl(),
  JsKiwiSerialization: () => JsKiwiSerializationInstance,
  SceneGraphHookBindings: () => SceneGraphHookBindingsInstance,
  BoundsWatcherTs: getBoundsChangeHandler,
  WebGPUTsContext: () => webGPUContextInstance,
  TsGlContextBindings: createTsGlContextManager,
  ScreenBindings: () => ScreenBindings,
  ThumbnailRequestManager: () => new ThumbnailRequestManager(),
  HTMLWindowBindings: () => new WindowManagerHandler(),
  AutoLayoutBindings: () => new AutoLayoutBindings(),
  WebUserSyncing: () => new WebUserSyncing(),
  EmojiWheelBindings: () => new EmojiWheelBindings(),
  JsBindingsTestHelpers: () => new JsBindingsTestHelpers(),
  WebSelection: () => new WebSelectionManager(),
  Comments: () => new CommentManagerImpl(),
  WidgetBindings: () => new WidgetManagerHandler(),
  ImageIo: () => new ImageProcessorHandler(),
  ImageTsBindings: () => new ImageTsBindings(),
  VideoTsBindings: () => new VideoTsBindings(),
  PdfImportBindings: () => new PdfImportBindings(),
  CanvasSearchBindings: () => new CanvasSearchBindings(),
  AccessibilityBindings: () => new AccessibilityBindings(),
  SummaryBindings: () => new SummaryBindings(),
  TsFontManualLoader: () => new TsFontManualLoader(),
  StylesCheckBindings: () => new StylesCheckBindings(),
  HandoffScenegraphBindings: () => new HandoffScenegraphBindings(),
  RichTextBindings: () => new RichTextBindings(),
  WebMultiplayer: () => new WebMultiplayerManager(),
  PluginCallbacks: () => new PluginCallbacksManager(),
  AutosaveSessionBindings: () => new AutosaveSessionBindings(),
  InteractionBindings: () => new InteractionBindingsImpl(),
  SpellCheckAPIBindings: () => new SpellCheckAPIBindings(),
  VariablesBindingsWeb: () => new VariablesBindingsWeb(),
  VariablesMirrorBindings: () => new VariablesMirrorBindingsImpl(),
  AssetMirrorBindings: () => new AssetMirrorBindings(),
  AssetConsumptionMirrorBindings: () => new AssetConsumptionMirrorBindings(),
  HandoffBindings: () => new HandoffBindings(),
  HandoffCallbacks: () => new HandoffCallbacks(),
  JSTextLayout: () => JSTextLayoutImpl,
  ScaleToolAPIBindings: () => ScaleToolAPIBindings,
  EmojiTsBindings: () => new EmojiTsBindings(),
  NodeChatMessageHelper: () => new NodeChatMessageHelper(),
  MentionsTsBindings: () => new MentionsTypeaheadManager(),
  LinterBindings: () => new DesignLinterManager(),
  EditScopeWebBindings: () => new EditScopeHandler(),
  StateManagementBindings: () => new StateManagementBindingsImpl(),
  ColorManagementBindings: () => new ColorManagementBindings(),
  KeyboardShortcutBindings: () => new KeyboardShortcutBindings(),
  WhiteboardTemplatePreviewTsBindings: () => new WhiteboardTemplatePreviewTsBindings(),
  FrameDistributionTrackerBindings: () => new FrameDistributionTrackerBindings(),
  WhiteboardTsBindings: () => new WhiteboardTsBindings(),
  CodeBlockBindings: () => new CodeBlockBindings(),
  ColorRampBindings: () => new ColorRampBindings(),
  WhiteboardAnalyticsTsBindings: () => new WhiteboardAnalyticsTsBindings(),
  CurrentUserInfo: () => new CurrentUserInfo(),
  ExperimentBuildersTsBindings: () => new OrganizationMembershipChecker(),
  ZipImpl: () => new ZipImpl(),
  CoreUtils: () => CoreUtils,
  MissingFontsTrackerJs: () => new MissingFontScanner(),
  StatsigConfigBindings: () => new StatsigConfigBindings(),
  WhiteboardThemeTsBindings: () => new UI3ColorManager(),
  QuickActionsBindings: () => new QuickActionsManager(),
  BranchingWebBindings: () => branchingWebBindingsInstance,
  SafeModeOptions: () => safeModeRenderController,
  DSAWebBindings: () => new DSAWebBindings(),
  WhiteboardDltConstantBindings: () => new DefaultStrokeWeightManager(),
  SlidesTsBindings: () => new SlidesTsBindings(),
  CooperTsBindings: () => new CooperTsBindings(),
  DeprecatedXHRSendBindings: () => deprecatedXHRSendBindingsInstance,
  ComponentPropBindings: () => componentPropBindingsInstance,
  FullscreenWebSocketTsCallbacks: () => new FullscreenWebSocketTsCallbacks(),
  AutosuggestTextBindings: () => new AutosuggestTextBindings(),
  VariablesJsRuntimeAliasTsBindings: () => new VariablesJsRuntimeAliasTsBindings(),
  SitesBindings: () => new SitesViewManager(),
  SitesJsBindings: () => new SitesJsBindings(),
  AutoSuggestAssetBindings: () => new AutoSuggestAssetBindings(),
  UndoRedoEventsBindings: () => new UndoRedoEventsBindings(),
  UserActionTimingBindings: () => new UserActionTimingBindings(),
  ScenegraphStringManagementBindings: () => scenegraphStringManagementBindingsInstance,
  SlotsBindingsWeb: () => new SlotsBindingsWeb(),
  jsHelpers: {
    reportError: captureException,
    preventEnteringCpp: () => fullscreenCrashHandler.preventEnteringCpp(),
    fatalCppError(e, t) {
      fullscreenCrashHandler.fatalCppError(e, t);
    }
  },
  ThumbhashBindings: () => new ThumbHashHandler()
};
export const $$K0 = prototypeLibBindings

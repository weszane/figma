import { getHeadlessAppBindings, setHeadlessAppBindings } from '../905/209562'
import { Axis, getWritableObservableValue_VectorF_Internal, HorizontalAlignment, setupWritableObservableValue_VectorF, VerticalAlignment } from '../905/229717'
import { ClipboardAction, EventTypeEnum, getInternalReferences, HTMLWindow, KeyboardLayout, PageNavigation, PointerType, setupInternalReferences } from '../905/297135'
import { getWebGLBindings, GpuErrorType, gpuMetricsLoggingBinding, setupWebGLBindings, webGPUBindings } from '../905/345688'
import { getInternalBindings, initializeRenderBindings, prototypeInternal } from '../905/777011'
import { getUniquePathContext, setupUniquePath } from '../905/793167'
import { ColorConversionEnum, ColorFormatEnum, colorManagementStateJs, ColorProfileEnum, ColorSpaceEnum, DocumentColorProfileEnum, getColorManagementState, initializeColorManagement, YesNoEnum } from '../905/864609'
import { assetBindings, assetConsumptionBindings, DimensionErrorType, documentStateTsApi, figmaScopeBindings, FromToDirection, getBindings, initBindings, interactionTestHelpers, OperationType, SymbolInstanceType, UserAppType, VariableDataType, VariableErrorType, VariableResolvedDataType, variablesMirrorManager, VariantType } from '../905/880730'
import { getRuntimeContext, setRuntimeContext } from '../905/954433'
import { AbsolutePositionType, AccessibilityAttributes, AccessLevel, Actions, ActionType, AlignmentPosition, AnchorPosition, AnimationBindings, AnimationStatus, ApprovalStatus, AppStateTsApi, AspectRatioLockBindings, AutosaveEventType, AutosaveHelpers, AxisType, BackgroundPattern, BaseColor, BindingsPerfBench, BorderStyle, BoundsWatcherCpp, BranchingOperation, BreakpointFrameHelpersBindings, BuzzCloneHelpers, CanvasComponentType, CanvasOperation, CanvasSearchHelpers, ChangesStagerBindings, ChartType, ChildRelationshipStatus, CmsHelpers, CmsRepeaterHelpers, CodeComponentHelper, CollaborationType, CollectionGroupType, ColorIdentifier, ColorOptions, ColorStateTsApi, ColumnInteraction, Command, ComponentPanelTab, ComponentPropsAiCPPBindings, Confirmation, ConfirmationLevel, ConnectionState, ContentFillNudgesStateBindings, CooperHelpers, CooperTemplateTypesTsBindings, CopyPasteType, CoverageStatus, CSSExportHelpers, CurveType, CustomFocusHelpers, CustomPosition, DataLoadStatus, DebuggingHelpers, DesignGraphElements, DesignSystemsInternalHelpers, DesignSystemsTsApi, DesignToBuzzHelpers, DesignWorkspace, DetachError, DetachStatus, DeviceType, DiagramElementType, DiffImpl, DraftState, DrawBindingsCpp, DrawingElementType, DSACppBindings, EditAction, EditChangeMode, EligibilityStatus, EmailAction, EmbedPanelType, EmbedType, EmojiCppBindings, EyedropperBindings, FeedbackCategory, FigmaSite, FileAndBranchTipType, FileFormat, FileLoadEvent, FilterOption, FirstDraftHelpers, FitMode, FlappBindings, FontHelpers, FontWeight, FruitTypes, Fullscreen, FullscreenPerfInfo, FullscreenPerfMetrics, FullscreenWebSocketTsApi, GeometricValues, getAllBindingHelpers, GitReferenceType, GradientToolApi, GraphicElement, GraphicObjectTypes, GridDirection, GridLayoutApi, HandoffBindingsCpp, HideMode, HistoryChangesBindings, HitTestBindings, IAssertResource, IgnoreSelectionUIHidingBindings, IgnoreUndoRedoBindings, ImageFormat, ImageToolsBindings, IMixedValues, initializeGlobalObjects, InsetEditorBindingsCpp, InteractionCpp, PageType as IPagePlugin, IPanelType, ItemType, IVariableStyles, JoinType, JSXRendererBindings, LibraryPubSub, LibraryUpdateStatus, LinterCppBindings, LogicalOperation, MakeBindings, MatchCriteria, MeasurementType, MeasurementUnit, MentionsCppBindings, MenuType, MergeStatus, MindmapCppBindings, MixedBlockType, Multiplayer, NoneColor, OffsetPathTsApi, OperationResult, Orientation, PageSelectionType, PageType, PageViewMode, PaintTools, PerfResult, PluginHelpers, PluginModalType, PluginSource, Position, Positioning, PresentationMode, PresentationValidationStatus, PreviewStage, ProcessStage, PrototypingTsApi, RelationType, ResourceLocation, SaveConnectionIssues, ScaleToolTsApi, SceneChangeType, SceneGraphHelpers, SceneIdentifier, SceneNodeCpp, SchemaJoinStatus, ScrollBehavior, SelectionPaintHelpers, SelectionPanelType, SelectionState, SelectionStylesHelpers, SelfDesignType, SessionOrigin, SessionStatus, SettingsAction, ShapeSidebarMode, SharedStyle, SimplifyVectorToolTsApi, SitesBindingsCpp, SlideAnimation, SlidePptxImporterBindings, SlidesAiBindings, SlidesEmbeddedPrototypeBindings, SlidesObjectAnimationBindings, SlideViewType, SnapMode, SnapshotLevel, SocialMediaFormats, SpacingConstants, SpacingMode, SquareShapes, StackBindingsCpp, StateHierarchy, StateManagementCPPBindings, StateTransitionResult, StickyClusteringCppBindings, StickyTableConfig, StylesBindings, StyleVariableOperation, SwitchState, SyncError, TabMode, TemplateType, TextAlignmentOptions, TextBoxType, TextCase, TextModificationAction, TextStyleOverridesBindings, Thumbnail, ToolType, TransactionCommand, TransformModifierBindingsCpp, TypographySettings, UiParserHelpers, UIVisibilitySetting, UndoActionStatus, UnselectedNodesMode, UserActionState, UserExperienceMode, UserInteractionButton, UserInteractionState, UserInterfaceElements, VariableCollectionContext, VariablesBindings, VariableUIContext, VideoCppBindings, ViewType, VisibilityState, WeightLevel, WhiteboardAgendaCppBindings, WhiteboardAiTemplatePreviewCppBindings, WhiteboardAiVisualCppBindings, WhiteboardCanvasAIBindings, WhiteboardFeatures, WhiteboardIntegrationType, WhiteboardSectionPresetPickerCppBindings, WhiteboardStarterKitCppBindings, WhiteboardTemplatePreviewCppBindings, WhiteboardTsApi, WhiteboardVotingCppBindings, WriteInReadonlyScopeBindings, YesNo } from '../figma_app/13528'
import { AccessibilityFacetTsApiGenerated, AccessibilityHelpers, AnimationEventType, AnimationTriggerType, AnnotationFacetTsApiGenerated, AppMode, AssetSource, AssistantTools, AutoLayoutAlignment, BaseNodeTsApiGenerated, BooleanOperationType, BuildStatus, BuzzFacetTsApiGenerated, CanvasFacetTsApiGenerated, CanvasGridFacetTsApiGenerated, ChangeType, ChatMessageType, CodeFacetTsApiGenerated, ColorPalette, ComponentishFacetTsApiGenerated, ComponentPropType, ComponentType, ConnectorFacetTsApiGenerated, ConnectorType, ConstraintsFacetTsApiGenerated, ContainerType, DistributionType, DuplicateType, EasingType, EqualityType, ExportScope, FacetType, FieldType, FileSourceType, FillType, FirstDraftFacetTsApiGenerated, Fonts, FontSourceType, FrameFacetTsApiGenerated, ImageCppBindings, ImageExportType, initializeGlobalBindings, InsertErrorType, InsertSourceType, InstanceFacetTsApiGenerated, IssueCategory, JsxFacetTsApiGenerated, LayerFacetTsApiGenerated, LayoutDirection, LayoutSizingMode, LayoutSizingType, LayoutTabType, LibraryType, MatchType, ModuleFacetTsApiGenerated, MutableSceneGraph, NavigationDirection, NodePropertyCategory, NodePropertyType, NodeTsApi, NodeTsApiGenerated, NodeType, PaintType, PanelType, PlatformType, PointerAction, PolygonFacetTsApiGenerated, PresetType, PropertyScope, PrototypingFacetTsApiGenerated, registerFigmaServices, RenderableBaseFacetTsApiGenerated, RenderableRectangleFacetTsApiGenerated, ResponsiveNodeSetFacetTsApiGenerated, ResponsiveSetFacetTsApiGenerated, RevisionNumberAccessor, RichTextType, RotationType, SceneGraphTsApi, SelectionMode, Side, SideType, SlideConstantsCppBindings, SlideFacetTsApiGenerated, SlideHelpersCppBindings, SlideTransitionType, SnapshotStatus, SourceType, StackFacetTsApiGenerated, StateGroupErrorType, StateSourceType, StickyWidgetType, StrokeAlignment, StyleFacetTsApiGenerated, SymbolOverrideType, TextBlockType, TextData_Internal, TextDecorationType, TextDirection, TextEditAction, TextFacetTsApiGenerated, TextOverflowType, TextPathStartHelpers, ThemeColorStatus, ThemeMode, ThemeType, TrackType, UnitType, UploadStatus, VariableSetErrorType, VectorFacetTsApiGenerated, VerticalPosition, VisibilityCondition, WidgetFacetTsApiGenerated, WorkspaceType } from '../figma_app/175377'
import { AutoLayoutInsertMode, bindings, CorePerfInfo, deprecatedXHRBindings, DocumentMode, DocumentSaveEvent, FullscreenMode, fullscreenOptimizationExposureLoggingBinding, getAllBindings, GLContextType, GLFailureType, ImageSourceType, initializeBindings, LogToConsoleMode, performanceEventCounters, PerfPriority, PerfQuality, perfTimerFrameManagerBindings, PerfType, TextureType, weakHandleHelpers, webAsyncCallback } from '../figma_app/290762'

export { getHeadlessAppBindings, setHeadlessAppBindings } from '../905/209562'
export { Axis, getWritableObservableValue_VectorF_Internal, HorizontalAlignment, setupWritableObservableValue_VectorF, VerticalAlignment } from '../905/229717'
export { ClipboardAction, EventTypeEnum, getInternalReferences, HTMLWindow, KeyboardLayout, PageNavigation, PointerType, setupInternalReferences } from '../905/297135'
export { getWebGLBindings, GpuErrorType, gpuMetricsLoggingBinding, setupWebGLBindings, webGPUBindings } from '../905/345688'
export { getInternalBindings, initializeRenderBindings, prototypeInternal } from '../905/777011'
export { getUniquePathContext, setupUniquePath } from '../905/793167'
export { ColorConversionEnum, ColorFormatEnum, colorManagementStateJs, ColorProfileEnum, ColorSpaceEnum, DocumentColorProfileEnum, getColorManagementState, initializeColorManagement, YesNoEnum } from '../905/864609'
export { assetBindings, assetConsumptionBindings, DimensionErrorType, documentStateTsApi, figmaScopeBindings, FromToDirection, getBindings, initBindings, interactionTestHelpers, OperationType, SymbolInstanceType, UserAppType, VariableDataType, VariableErrorType, VariableResolvedDataType, variablesMirrorManager, VariantType } from '../905/880730'
export { getRuntimeContext, setRuntimeContext } from '../905/954433'
export { AbsolutePositionType, AccessibilityAttributes, AccessLevel, Actions, ActionType, AlignmentPosition, AnchorPosition, AnimationBindings, AnimationStatus, ApprovalStatus, AppStateTsApi, AspectRatioLockBindings, AutosaveEventType, AutosaveHelpers, AxisType, BackgroundPattern, BaseColor, BindingsPerfBench, BorderStyle, BoundsWatcherCpp, BranchingOperation, BreakpointFrameHelpersBindings, BuzzCloneHelpers, CanvasComponentType, CanvasOperation, CanvasSearchHelpers, ChangesStagerBindings, ChartType, ChildRelationshipStatus, CmsHelpers, CmsRepeaterHelpers, CodeComponentHelper, CollaborationType, CollectionGroupType, ColorIdentifier, ColorOptions, ColorStateTsApi, ColumnInteraction, Command, ComponentPanelTab, ComponentPropsAiCPPBindings, Confirmation, ConfirmationLevel, ConnectionState, ContentFillNudgesStateBindings, CooperHelpers, CooperTemplateTypesTsBindings, CopyPasteType, CoverageStatus, CSSExportHelpers, CurveType, CustomFocusHelpers, CustomPosition, DataLoadStatus, DebuggingHelpers, DesignGraphElements, DesignSystemsInternalHelpers, DesignSystemsTsApi, DesignToBuzzHelpers, DesignWorkspace, DetachError, DetachStatus, DeviceType, DiagramElementType, DiffImpl, DraftState, DrawBindingsCpp, DrawingElementType, DSACppBindings, EditAction, EditChangeMode, EligibilityStatus, EmailAction, EmbedPanelType, EmbedType, EmojiCppBindings, EyedropperBindings, FeedbackCategory, FigmaSite, FileAndBranchTipType, FileFormat, FileLoadEvent, FilterOption, FirstDraftHelpers, FitMode, FlappBindings, FontHelpers, FontWeight, FruitTypes, Fullscreen, FullscreenPerfInfo, FullscreenPerfMetrics, FullscreenWebSocketTsApi, GeometricValues, getAllBindingHelpers, GitReferenceType, GradientToolApi, GraphicElement, GraphicObjectTypes, GridDirection, GridLayoutApi, HandoffBindingsCpp, HideMode, HistoryChangesBindings, HitTestBindings, IAssertResource, IgnoreSelectionUIHidingBindings, IgnoreUndoRedoBindings, ImageFormat, ImageToolsBindings, IMixedValues, initializeGlobalObjects, InsetEditorBindingsCpp, InteractionCpp, PageType as IPagePlugin, IPanelType, ItemType, IVariableStyles, JoinType, JSXRendererBindings, LibraryPubSub, LibraryUpdateStatus, LinterCppBindings, LogicalOperation, MakeBindings, MatchCriteria, MeasurementType, MeasurementUnit, MentionsCppBindings, MenuType, MergeStatus, MindmapCppBindings, MixedBlockType, Multiplayer, NoneColor, OffsetPathTsApi, OperationResult, Orientation, PageSelectionType, PageType, PageViewMode, PaintTools, PerfResult, PluginHelpers, PluginModalType, PluginSource, Position, Positioning, PresentationMode, PresentationValidationStatus, PreviewStage, ProcessStage, PrototypingTsApi, RelationType, ResourceLocation, SaveConnectionIssues, ScaleToolTsApi, SceneChangeType, SceneGraphHelpers, SceneIdentifier, SceneNodeCpp, SchemaJoinStatus, ScrollBehavior, SelectionPaintHelpers, SelectionPanelType, SelectionState, SelectionStylesHelpers, SelfDesignType, SessionOrigin, SessionStatus, SettingsAction, ShapeSidebarMode, SharedStyle, SimplifyVectorToolTsApi, SitesBindingsCpp, SlideAnimation, SlidePptxImporterBindings, SlidesAiBindings, SlidesEmbeddedPrototypeBindings, SlidesObjectAnimationBindings, SlideViewType, SnapMode, SnapshotLevel, SocialMediaFormats, SpacingConstants, SpacingMode, SquareShapes, StackBindingsCpp, StateHierarchy, StateManagementCPPBindings, StateTransitionResult, StickyClusteringCppBindings, StickyTableConfig, StylesBindings, StyleVariableOperation, SwitchState, SyncError, TabMode, TemplateType, TextAlignmentOptions, TextBoxType, TextCase, TextModificationAction, TextStyleOverridesBindings, Thumbnail, ToolType, TransactionCommand, TransformModifierBindingsCpp, TypographySettings, UiParserHelpers, UIVisibilitySetting, UndoActionStatus, UnselectedNodesMode, UserActionState, UserExperienceMode, UserInteractionButton, UserInteractionState, UserInterfaceElements, VariableCollectionContext, VariablesBindings, VariableUIContext, VideoCppBindings, ViewType, VisibilityState, WeightLevel, WhiteboardAgendaCppBindings, WhiteboardAiTemplatePreviewCppBindings, WhiteboardAiVisualCppBindings, WhiteboardCanvasAIBindings, WhiteboardFeatures, WhiteboardIntegrationType, WhiteboardSectionPresetPickerCppBindings, WhiteboardStarterKitCppBindings, WhiteboardTemplatePreviewCppBindings, WhiteboardTsApi, WhiteboardVotingCppBindings, WriteInReadonlyScopeBindings, YesNo } from '../figma_app/13528'
export { AccessibilityFacetTsApiGenerated, AccessibilityHelpers, AnimationEventType, AnimationTriggerType, AnnotationFacetTsApiGenerated, AppMode, AssetSource, AssistantTools, AutoLayoutAlignment, BaseNodeTsApiGenerated, BooleanOperationType, BuildStatus, BuzzFacetTsApiGenerated, CanvasFacetTsApiGenerated, CanvasGridFacetTsApiGenerated, ChangeType, ChatMessageType, CodeFacetTsApiGenerated, ColorPalette, ComponentishFacetTsApiGenerated, ComponentPropType, ComponentType, ConnectorFacetTsApiGenerated, ConnectorType, ConstraintsFacetTsApiGenerated, ContainerType, DistributionType, DuplicateType, EasingType, EqualityType, ExportScope, FacetType, FieldType, FileSourceType, FillType, FirstDraftFacetTsApiGenerated, Fonts, FontSourceType, FrameFacetTsApiGenerated, ImageCppBindings, ImageExportType, initializeGlobalBindings, InsertErrorType, InsertSourceType, InstanceFacetTsApiGenerated, IssueCategory, JsxFacetTsApiGenerated, LayerFacetTsApiGenerated, LayoutDirection, LayoutSizingMode, LayoutSizingType, LayoutTabType, LibraryType, MatchType, ModuleFacetTsApiGenerated, MutableSceneGraph, NavigationDirection, NodePropertyCategory, NodePropertyType, NodeTsApi, NodeTsApiGenerated, NodeType, PaintType, PanelType, PlatformType, PointerAction, PolygonFacetTsApiGenerated, PresetType, PropertyScope, PrototypingFacetTsApiGenerated, registerFigmaServices, RenderableBaseFacetTsApiGenerated, RenderableRectangleFacetTsApiGenerated, ResponsiveNodeSetFacetTsApiGenerated, ResponsiveSetFacetTsApiGenerated, RevisionNumberAccessor, RichTextType, RotationType, SceneGraphTsApi, SelectionMode, Side, SideType, SlideConstantsCppBindings, SlideFacetTsApiGenerated, SlideHelpersCppBindings, SlideTransitionType, SnapshotStatus, SourceType, StackFacetTsApiGenerated, StateGroupErrorType, StateSourceType, StickyWidgetType, StrokeAlignment, StyleFacetTsApiGenerated, SymbolOverrideType, TextBlockType, TextData_Internal, TextDecorationType, TextDirection, TextEditAction, TextFacetTsApiGenerated, TextOverflowType, TextPathStartHelpers, ThemeColorStatus, ThemeMode, ThemeType, TrackType, UnitType, UploadStatus, VariableSetErrorType, VectorFacetTsApiGenerated, VerticalPosition, VisibilityCondition, WidgetFacetTsApiGenerated, WorkspaceType } from '../figma_app/175377'
export { AutoLayoutInsertMode, bindings, CorePerfInfo, deprecatedXHRBindings, DocumentMode, DocumentSaveEvent, FullscreenMode, fullscreenOptimizationExposureLoggingBinding, getAllBindings, GLContextType, GLFailureType, ImageSourceType, initializeBindings, LogToConsoleMode, performanceEventCounters, PerfPriority, PerfQuality, perfTimerFrameManagerBindings, PerfType, TextureType, weakHandleHelpers, webAsyncCallback } from '../figma_app/290762'

export function initializeAppBindings(e) {
  initializeGlobalBindings(e)
  initializeGlobalObjects(e)
  setupWebGLBindings(e)
  initializeColorManagement(e)
  initializeBindings(e)
  setHeadlessAppBindings(e)
  setupWritableObservableValue_VectorF(e)
  initBindings(e)
  initializeRenderBindings(e)
  setupInternalReferences(e)
  setupUniquePath(e)
  setRuntimeContext(e)
}
export function initializeFigmaServices() {
  return {
    ...registerFigmaServices(),
    ...getAllBindings(),
    ...getWebGLBindings(),
    ...getColorManagementState(),
    ...getAllBindingHelpers(),
    ...getHeadlessAppBindings(),
    ...getWritableObservableValue_VectorF_Internal(),
    ...getBindings(),
    ...getInternalBindings(),
    ...getInternalReferences(),
    ...getUniquePathContext(),
    ...getRuntimeContext(),
  }
}
export const $6Y = NavigationDirection
export const $DY = PrototypingFacetTsApiGenerated
export const $XN = CanvasOperation
export const $au = CmsHelpers
export const $mk = WhiteboardAiVisualCppBindings
export const A$i = VisibilityState
export const AP3 = EligibilityStatus
export const AWq = HistoryChangesBindings
export const AZ4 = AssetSource
export const AiE = fullscreenOptimizationExposureLoggingBinding
export const AjQ = TextCase
export const AlE = documentStateTsApi
export const Ats = DetachError
export const BJw = AccessibilityAttributes
export const BS2 = EqualityType
export const BXd = LibraryPubSub
export const Bko = ImageCppBindings
export const Bll = IssueCategory
export const BtE = PreviewStage
export const Bx4 = EventTypeEnum
export const ByZ = VectorFacetTsApiGenerated
export const CMm = GraphicObjectTypes
export const CNR = SlideConstantsCppBindings
export const CT8 = ContentFillNudgesStateBindings
export const CUU = SceneNodeCpp
export const CWU = VariablesBindings
export const CX = InsetEditorBindingsCpp
export const CXS = GridDirection
export const CeL = FullscreenPerfMetrics
export const D1Y = GraphicElement
export const D2E = PerfPriority
export const DCy = SlidesEmbeddedPrototypeBindings
export const DPQ = IPagePlugin
export const DV9 = WhiteboardTsApi
export const Det = CollectionGroupType
export const Dje = LibraryUpdateStatus
export const E63 = SaveConnectionIssues
export const EBZ = ResponsiveSetFacetTsApiGenerated
export const EUU = StickyTableConfig
export const EW4 = EditAction
export const EYD = DeviceType
export const Egt = SceneGraphHelpers
export const ElO = TextDirection
export const En0 = Actions
export const Ez5 = AppStateTsApi
export const F84 = SwitchState
export const FAf = DesignWorkspace
export const FDn = InsertErrorType
export const Fk7 = NodeTsApiGenerated
export const Fzw = CodeFacetTsApiGenerated
export const G1O = DrawBindingsCpp
export const G6k = VariableCollectionContext
export const GP2 = HorizontalAlignment
export const GUn = HitTestBindings
export const H$z = OperationResult
export const H4l = colorManagementStateJs
export const H9y = TextFacetTsApiGenerated
export const HG$ = VariableErrorType
export const HS4 = VariableUIContext
export const HTr = GLFailureType
export const HV5 = GridLayoutApi
export const Hcu = figmaScopeBindings
export const Hdj = WeightLevel
export const Hur = StickyClusteringCppBindings
export const Hyj = WhiteboardTemplatePreviewCppBindings
export const HzA = TrackType
export const IPZ = StickyWidgetType
export const IPu = CooperHelpers
export const IQ2 = SlideViewType
export const IXA = assetConsumptionBindings
export const IcQ = AxisType
export const Ifi = MatchCriteria
export const J0O = ComponentPropType
export const J5D = FileLoadEvent
export const J6N = SlideAnimation
export const JA = SnapshotLevel
export const JTp = OperationType
export const K$p = ChatMessageType
export const KAf = EmbedPanelType
export const KG_ = WidgetFacetTsApiGenerated
export const KO7 = initializeFigmaServices
export const KWd = TransactionCommand
export const KXw = ColorConversionEnum
export const KgA = UserInteractionState
export const KjJ = ScrollBehavior
export const KpW = CollaborationType
export const Krs = TextStyleOverridesBindings
export const KtY = StackFacetTsApiGenerated
export const L5V = NodePropertyType
export const LQj = initializeAppBindings
export const Liw = ChangeType
export const Lov = PageViewMode
export const Lv9 = BoundsWatcherCpp
export const Lxv = SnapshotStatus
export const M7s = FieldType
export const MEW = PerfResult
export const MoD = ImageExportType
export const MoP = YesNo
export const Mpt = DesignToBuzzHelpers
export const Msn = SitesBindingsCpp
export const NFK = AnimationStatus
export const NLJ = DesignGraphElements
export const NUh = LogToConsoleMode
export const NVY = ColorFormatEnum
export const NfO = PluginHelpers
export const Nfd = PanelType
export const O3Z = AssistantTools
export const OGQ = CanvasFacetTsApiGenerated
export const OQN = BooleanOperationType
export const OR7 = StrokeAlignment
export const Ocq = LibraryType
export const OhE = WhiteboardCanvasAIBindings
export const Oin = UIVisibilitySetting
export const OmW = EyedropperBindings
export const Osy = SelectionPaintHelpers
export const P2e = FullscreenPerfInfo
export const P5M = assetBindings
export const PHu = EmailAction
export const PKm = DesignSystemsInternalHelpers
export const PMF = SquareShapes
export const PVe = FontWeight
export const PWo = FacetType
export const PcT = webGPUBindings
export const Pdb = SharedStyle
export const Pir = MixedBlockType
export const Pls = ColorIdentifier
export const PoC = ConnectorType
export const Pt4 = StylesBindings
export const Q8J = SimplifyVectorToolTsApi
export const QCv = PaintType
export const QOV = UserActionState
export const QOd = BaseColor
export const Qa7 = StackBindingsCpp
export const QeU = SpacingMode
export const Qej = MenuType
export const QjO = TemplateType
export const Qtg = deprecatedXHRBindings
export const RN1 = ColorPalette
export const RN9 = SpacingConstants
export const RY1 = IMixedValues
export const RYP = ColorSpaceEnum
export const Roq = DuplicateType
export const RsU = StyleFacetTsApiGenerated
export const S2l = IgnoreSelectionUIHidingBindings
export const SES = SessionOrigin
export const SIf = ColorStateTsApi
export const Sie = StateSourceType
export const SmY = EmojiCppBindings
export const SoG = SymbolInstanceType
export const SpR = AutoLayoutAlignment
export const Sqb = GeometricValues
export const T4N = WhiteboardSectionPresetPickerCppBindings
export const Tcr = WhiteboardFeatures
export const TsU = InsertSourceType
export const UF0 = YesNoEnum
export const UNF = NodeTsApi
export const Ubo = DebuggingHelpers
export const UcW = ResourceLocation
export const Une = webAsyncCallback
export const Uze = FromToDirection
export const V$M = ContainerType
export const V4z = TransformModifierBindingsCpp
export const V5h = AlignmentPosition
export const VD3 = StyleVariableOperation
export const VDs = CustomFocusHelpers
export const VIy = IPanelType
export const VQu = ApprovalStatus
export const VTL = ConfirmationLevel
export const Vzr = Thumbnail
export const W2B = EditChangeMode
export const W8Y = SessionStatus
export const WXh = VisibilityCondition
export const Ws0 = ChangesStagerBindings
export const X3B = PrototypingTsApi
export const XJn = FirstDraftHelpers
export const XQq = PresetType
export const XpJ = TypographySettings
export const XpX = FullscreenMode
export const Xts = MergeStatus
export const Y8A = RevisionNumberAccessor
export const YEY = CanvasSearchHelpers
export const YIO = BranchingOperation
export const YIb = DesignSystemsTsApi
export const YMM = TextData_Internal
export const YOB = PerfType
export const YVF = PageNavigation
export const YdF = SlidesObjectAnimationBindings
export const YnC = SymbolOverrideType
export const YyC = performanceEventCounters
export const Z64 = SocialMediaFormats
export const Z6A = NodeType
export const ZEs = ChildRelationshipStatus
export const ZHy = VerticalPosition
export const ZRE = FillType
export const Z_n = VariableDataType
export const Zbk = AppMode
export const Zdr = SlidesAiBindings
export const ZiZ = SceneIdentifier
export const ZxO = Confirmation
export const _0v = Axis
export const _3L = ThemeType
export const _4o = IVariableStyles
export const _SS = OffsetPathTsApi
export const _YF = WorkspaceType
export const _eX = EmbedType
export const _em = PluginModalType
export const _gJ = IAssertResource
export const _q7 = UnselectedNodesMode
export const aDE = TextureType
export const aTl = FileAndBranchTipType
export const aTn = KeyboardLayout
export const b3I = ImageFormat
export const bOM = PresentationValidationStatus
export const bQY = MeasurementType
export const baT = ExportScope
export const bbV = UiParserHelpers
export const biQ = ComponentPropsAiCPPBindings
export const bpS = prototypeInternal
export const bq3 = PresetType
export const btW = SideType
export const bwI = StateGroupErrorType
export const c0k = BreakpointFrameHelpersBindings
export const cQy = RichTextType
export const cTp = ResponsiveNodeSetFacetTsApiGenerated
export const ccR = SyncError
export const cfv = Positioning
export const cgc = FullscreenWebSocketTsApi
export const cus = UnitType
export const cxo = ToolType
export const d8m = UploadStatus
export const dBj = PresentationMode
export const dNx = SelectionState
export const dPJ = AutosaveEventType
export const dTb = DetachStatus
export const dYj = YesNo
export const daH = ColorOptions
export const e0R = CopyPasteType
export const eL2 = TextEditAction
export const eLE = SlideHelpersCppBindings
export const eVK = AnchorPosition
export const ed1 = FruitTypes
export const egF = DiffImpl
export const eii = DimensionErrorType
export const f1$ = WriteInReadonlyScopeBindings
export const f2e = UserInteractionButton
export const fHP = LogicalOperation
export const fLc = ImageSourceType
export const fOf = ComponentType
export const fQ3 = AnnotationFacetTsApiGenerated
export const fRZ = LayerFacetTsApiGenerated
export const fZb = perfTimerFrameManagerBindings
export const fZl = CooperTemplateTypesTsBindings
export const fp8 = MentionsCppBindings
export const gEE = Side
export const gRN = TextBlockType
export const gSS = LayoutDirection
export const gdE = TextPathStartHelpers
export const glU = Fullscreen
export const gmH = PointerType
export const goc = AccessLevel
export const gw5 = WhiteboardStarterKitCppBindings
export const gz6 = CanvasGridFacetTsApiGenerated
export const h3O = Multiplayer
export const h62 = WhiteboardIntegrationType
export const hJs = SnapMode
export const hKj = CustomPosition
export const hMR = CorePerfInfo
export const hR8 = ComponentishFacetTsApiGenerated
export const htN = CmsRepeaterHelpers
export const hxu = ProcessStage
export const hyM = JsxFacetTsApiGenerated
export const hzD = DocumentColorProfileEnum
export const i0e = StateTransitionResult
export const i1K = FitMode
export const i6g = AutosaveHelpers
export const iCO = StateHierarchy
export const iIc = SceneChangeType
export const iLo = SlidePptxImporterBindings
export const iZB = ConstraintsFacetTsApiGenerated
export const ibQ = ItemType
export const idw = FigmaSite
export const j0r = PropertyScope
export const jDJ = FrameFacetTsApiGenerated
export const jWk = bindings
export const jXp = FontSourceType
export const jkn = TabMode
export const jot = IgnoreUndoRedoBindings
export const juq = FileSourceType
export const kQG = MatchType
export const kR6 = ColumnInteraction
export const kTx = SelectionStylesHelpers
export const kul = SchemaJoinStatus
export const kz3 = RelationType
export const lKz = Confirmation
export const lMj = PointerAction
export const luZ = AnimationTriggerType
export const lyf = ViewType
export const m1T = LayoutTabType
export const m33 = AccessibilityFacetTsApiGenerated
export const m7W = SettingsAction
export const mHF = LinterCppBindings
export const mKm = LayoutSizingMode
export const mNT = UserExperienceMode
export const mSn = SceneGraphTsApi
export const mgy = EasingType
export const miP = Orientation
export const miS = HideMode
export const mov = weakHandleHelpers
export const mrc = TextAlignmentOptions
export const msz = interactionTestHelpers
export const n1M = MakeBindings
export const nQ7 = SelfDesignType
export const nzw = DiagramElementType
export const oHM = FlappBindings
export const oHs = AbsolutePositionType
export const oUq = DSACppBindings
export const oVz = DraftState
export const oXo = StateManagementCPPBindings
export const oeV = AutoLayoutInsertMode
export const ofk = WhiteboardVotingCppBindings
export const otU = ComponentPanelTab
export const pWM = CoverageStatus
export const phr = CSSExportHelpers
export const plo = DistributionType
export const ppO = RenderableBaseFacetTsApiGenerated
export const q6_ = GpuErrorType
export const qOu = PolygonFacetTsApiGenerated
export const qYO = ThemeColorStatus
export const qmM = InteractionCpp
export const qq = ShapeSidebarMode
export const r6o = SelectionMode
export const rCR = DocumentMode
export const rO6 = FirstDraftFacetTsApiGenerated
export const rVj = PageType
export const rXF = VariableResolvedDataType
export const rau = DocumentSaveEvent
export const rcl = Command
export const rpt = FilterOption
export const rrT = NodePropertyCategory
export const ruz = ImageToolsBindings
export const ryE = JSXRendererBindings
export const sAE = LayoutSizingType
export const sFD = ColorIdentifier
export const sVn = ModuleFacetTsApiGenerated
export const sYL = GitReferenceType
export const sbT = BaseNodeTsApiGenerated
export const sdu = HTMLWindow
export const t2E = GradientToolApi
export const t8O = FontHelpers
export const tEb = RenderableRectangleFacetTsApiGenerated
export const tHB = VideoCppBindings
export const tIU = JoinType
export const tKW = MeasurementUnit
export const tS9 = AspectRatioLockBindings
export const tbL = TextDecorationType
export const tbx = AnimationEventType
export const tvY = BackgroundPattern
export const u4j = variablesMirrorManager
export const uCV = UserAppType
export const uPi = PerfQuality
export const uQ6 = ActionType
export const uXP = ConnectionState
export const uXg = VariableSetErrorType
export const uv = BuzzCloneHelpers
export const v$l = SlideTransitionType
export const v4N = VariantType
export const v8u = FileFormat
export const vNG = MutableSceneGraph
export const vRS = NoneColor
export const vSx = BuzzFacetTsApiGenerated
export const vXe = Fonts
export const vhv = PageSelectionType
export const vlL = WhiteboardAiTemplatePreviewCppBindings
export const vmp = Position
export const vr8 = TextOverflowType
export const vwB = ChartType
export const w$P = GLContextType
export const w3z = HandoffBindingsCpp
export const wzW = MindmapCppBindings
export const x4V = SlideFacetTsApiGenerated
export const x7E = ConnectorFacetTsApiGenerated
export const xLh = CurveType
export const xMT = InstanceFacetTsApiGenerated
export const xOL = RotationType
export const xSx = UndoActionStatus
export const xae = UserInterfaceElements
export const xal = DataLoadStatus
export const xbm = BorderStyle
export const xc1 = SelectionPanelType
export const y0x = PlatformType
export const yDE = BindingsPerfBench
export const yFm = ScaleToolTsApi
export const yGz = AccessibilityHelpers
export const yTM = DrawingElementType
export const yuz = gpuMetricsLoggingBinding
export const ywP = ColorProfileEnum
export const yxn = CanvasComponentType
export const z6l = CodeComponentHelper
export const z7E = PaintTools
export const z7j = PluginSource
export const zGX = FeedbackCategory
export const zIx = BuildStatus
export const zMY = ThemeMode
export const zbP = VerticalAlignment
export const zd5 = TextBoxType
export const zdR = WhiteboardAgendaCppBindings
export const zkO = SourceType
export const zol = Confirmation
export const zuo = AnimationBindings
export const zvt = TextModificationAction
export const zyC = ClipboardAction

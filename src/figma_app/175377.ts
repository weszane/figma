export let EditScopeBindings: any;
export let ObservableValue_Map_GUID_Int_Internal: any;
export let WritableObservableValue_UGUID_Internal: any;
export let WritableObservableValue_Array_GUID_Internal: any;
export let WritableObservableValue_Optional_GUID_Internal: any;
export let ObservableValue_Set_GUID_Internal: any;
export let WritableObservableValue_GUID_Internal: any;
export let ObservableValue_Array_GUID_Internal: any;
export let ObservableValue_GUID_Internal: any;
export let ObservableValue_Optional_GUID_Internal: any;
export let WritableObservableValue_Set_GUID_Internal: any;
export let ObservableValue_Array_Array_GUID_Internal: any;
export let ObservableValue_Map_GUID_String_Internal: any;
export let CollaborativePlainText_Internal: any;
export let BindingsNode_Internal: any;
export let NodeTsApi: any;
export let WritableObservableValue_ActiveEmbedData__Internal: any;
export let AssistantTools: any;
export let Fonts: any;
export let CmsAnalytics: any;
export let ImageCppBindings: any;
export let ObservableValue_PrototypeDevice__Internal: any;
export let PrototypeInteractions_Internal: any;
export let RevisionNumberAccessor: any;
export let ImmutableFrameObserver_Internal: any;
export let SceneGraph_Internal: any;
export let SceneGraphTsApi: any;
export let TextData_Internal: any;
export let DerivedTextData_Internal: any;
export let TextPathStartHelpers: any;
export let CompiledVectorData_Internal: any;
export let AccessibilityState_Internal: any;
export let AccessibilityHelpers: any;
export let ObservableValue_KeyboardSelectMode__Internal: any;
export let CanvasGrid_Internal: any;
export let CanvasSelection_Internal: any;
export let SlideConstantsCppBindings: any;
export let SlideHelpersCppBindings: any;
export let SlideThemeLibBindings_Internal: any;
export let SlideAnimationBindings_Internal: any;
export let SitesPreviewObserver_Internal: any;
export let AnnotationObserver_Internal: any;
export let DakotaBindings_Internal: any;
export let ObservableValue_Map_String_Array_CMSAliasEntry__Internal: any;
export let ObservableValue_Map_String_DakotaSelector__Internal: any;
export let CodeBuildBindings_Internal: any;
export let MaterializeInvisibleChildrenBindings: any;
export let AccessibilityFacetTsApiGenerated: any;
export let AnnotationFacetTsApiGenerated: any;
export let AssetFacetTsApiGenerated: any;
export let BrushFacetTsApiGenerated: any;
export let BrushStrokeFacetTsApiGenerated: any;
export let BuzzFacetTsApiGenerated: any;
export let CanvasFacetTsApiGenerated: any;
export let CanvasGridFacetTsApiGenerated: any;
export let CMSFacetTsApiGenerated: any;
export let CodeFacetTsApiGenerated: any;
export let CodeBehaviorFacetTsApiGenerated: any;
export let CodeComponentFacetTsApiGenerated: any;
export let CodeFileFacetTsApiGenerated: any;
export let CodeLibraryFacetTsApiGenerated: any;
export let ComponentishFacetTsApiGenerated: any;
export let ComponentPropRefFacetTsApiGenerated: any;
export let ConnectorFacetTsApiGenerated: any;
export let ConstraintsFacetTsApiGenerated: any;
export let DerivedSubtreesFacetTsApiGenerated: any;
export let DiagramFacetTsApiGenerated: any;
export let DocumentFacetTsApiGenerated: any;
export let FirstDraftFacetTsApiGenerated: any;
export let FrameFacetTsApiGenerated: any;
export let GeometryFacetTsApiGenerated: any;
export let GeometryCacheFacetTsApiGenerated: any;
export let GuidesFacetTsApiGenerated: any;
export let ImmutableFrameFacetTsApiGenerated: any;
export let InstanceFacetTsApiGenerated: any;
export let InteractiveSlideElementFacetTsApiGenerated: any;
export let JsxFacetTsApiGenerated: any;
export let LayerFacetTsApiGenerated: any;
export let LayoutGridFacetTsApiGenerated: any;
export let ManagedStringFacetTsApiGenerated: any;
export let ModuleFacetTsApiGenerated: any;
export let ParameterConsumptionFacetTsApiGenerated: any;
export let PlatformShapeFacetTsApiGenerated: any;
export let PluginFacetTsApiGenerated: any;
export let PolygonFacetTsApiGenerated: any;
export let PrototypingFacetTsApiGenerated: any;
export let ResponsiveNodeSetFacetTsApiGenerated: any;
export let ResponsiveSetFacetTsApiGenerated: any;
export let RenderableBackgroundFacetTsApiGenerated: any;
export let RenderableBaseFacetTsApiGenerated: any;
export let RenderableRectangleFacetTsApiGenerated: any;
export let RenderTreeFacetTsApiGenerated: any;
export let StackFacetTsApiGenerated: any;
export let SlideFacetTsApiGenerated: any;
export let SlideThemeMapFacetTsApiGenerated: any;
export let StarFacetTsApiGenerated: any;
export let StateFacetTsApiGenerated: any;
export let StateGroupFacetTsApiGenerated: any;
export let StyleFacetTsApiGenerated: any;
export let SymbolFacetTsApiGenerated: any;
export let TableFacetTsApiGenerated: any;
export let TextFacetTsApiGenerated: any;
export let TextPathFacetTsApiGenerated: any;
export let TransformFacetTsApiGenerated: any;
export let VariableFacetTsApiGenerated: any;
export let VariableDataFacetTsApiGenerated: any;
export let VariableModeConsumptionFacetTsApiGenerated: any;
export let VariableOverrideFacetTsApiGenerated: any;
export let VariableSetFacetTsApiGenerated: any;
export let VectorFacetTsApiGenerated: any;
export let VectorOperationFacetTsApiGenerated: any;
export let ViewerStateFacetTsApiGenerated: any;
export let WidgetFacetTsApiGenerated: any;
export let BaseNodeTsApiGenerated: any;
export let NodeTsApiGenerated: any;



export class ObservableValue_Map_GUID_Int {
  handle: any;
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableObservableValue_Map_GUID_Int extends ObservableValue_Map_GUID_Int {
  getCopy() {
    return ObservableValue_Map_GUID_Int_Internal.getCopy(this.handle);
  }

  subscribeFromJs(e) {
    return ObservableValue_Map_GUID_Int_Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    ObservableValue_Map_GUID_Int_Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableObservableValue_Map_GUID_Int as $$rC137 };

export class WritableObservableValue_UGUID {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableWritableObservableValue_UGUID extends WritableObservableValue_UGUID {
  getCopy() {
    return WritableObservableValue_UGUID_Internal.getCopy(this.handle);
  }

  set(e) {
    WritableObservableValue_UGUID_Internal.set(this.handle, e);
  }

  subscribeFromJs(e) {
    return WritableObservableValue_UGUID_Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    WritableObservableValue_UGUID_Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableWritableObservableValue_UGUID as $$rO138 };

export class WritableObservableValue_Array_GUID {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableWritableObservableValue_Array_GUID extends WritableObservableValue_Array_GUID {
  getCopy() {
    return WritableObservableValue_Array_GUID_Internal.getCopy(this.handle);
  }

  set(e) {
    WritableObservableValue_Array_GUID_Internal.set(this.handle, e);
  }

  subscribeFromJs(e) {
    return WritableObservableValue_Array_GUID_Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    WritableObservableValue_Array_GUID_Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableWritableObservableValue_Array_GUID as $$rL17 };

export class WritableObservableValue_Optional_GUID {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableWritableObservableValue_Optional_GUID extends WritableObservableValue_Optional_GUID {
  getCopy() {
    return WritableObservableValue_Optional_GUID_Internal.getCopy(this.handle);
  }

  set(e) {
    WritableObservableValue_Optional_GUID_Internal.set(this.handle, e);
  }

  subscribeFromJs(e) {
    return WritableObservableValue_Optional_GUID_Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    WritableObservableValue_Optional_GUID_Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableWritableObservableValue_Optional_GUID as $$rD125 };

export class ObservableValue_Set_GUID {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableObservableValue_Set_GUID extends ObservableValue_Set_GUID {
  getCopy() {
    return ObservableValue_Set_GUID_Internal.getCopy(this.handle);
  }

  subscribeFromJs(e) {
    return ObservableValue_Set_GUID_Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    ObservableValue_Set_GUID_Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableObservableValue_Set_GUID as $$rM140 };

export class WritableObservableValue_GUID {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableWritableObservableValue_GUID extends WritableObservableValue_GUID {
  getCopy() {
    return WritableObservableValue_GUID_Internal.getCopy(this.handle);
  }

  set(e) {
    WritableObservableValue_GUID_Internal.set(this.handle, e);
  }

  subscribeFromJs(e) {
    return WritableObservableValue_GUID_Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    WritableObservableValue_GUID_Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableWritableObservableValue_GUID as $$rj65 };

export class ObservableValue_Array_GUID {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableObservableValue_Array_GUID extends ObservableValue_Array_GUID {
  getCopy() {
    return ObservableValue_Array_GUID_Internal.getCopy(this.handle);
  }

  subscribeFromJs(e) {
    return ObservableValue_Array_GUID_Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    ObservableValue_Array_GUID_Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableObservableValue_Array_GUID as $$rB22 };

export class ObservableValue_GUID {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableObservableValue_GUID extends ObservableValue_GUID {
  getCopy() {
    return ObservableValue_GUID_Internal.getCopy(this.handle);
  }

  subscribeFromJs(e) {
    return ObservableValue_GUID_Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    ObservableValue_GUID_Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableObservableValue_GUID as $$rV122 };

export class ObservableValue_Optional_GUID {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableObservableValue_Optional_GUID extends ObservableValue_Optional_GUID {
  getCopy() {
    return ObservableValue_Optional_GUID_Internal.getCopy(this.handle);
  }

  subscribeFromJs(e) {
    return ObservableValue_Optional_GUID_Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    ObservableValue_Optional_GUID_Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableObservableValue_Optional_GUID as $$rz113 };

export class WritableObservableValue_Set_GUID {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableWritableObservableValue_Set_GUID extends WritableObservableValue_Set_GUID {
  getCopy() {
    return WritableObservableValue_Set_GUID_Internal.getCopy(this.handle);
  }

  set(e) {
    WritableObservableValue_Set_GUID_Internal.set(this.handle, e);
  }

  subscribeFromJs(e) {
    return WritableObservableValue_Set_GUID_Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    WritableObservableValue_Set_GUID_Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableWritableObservableValue_Set_GUID as $$rK19 };

export class ObservableValue_Array_Array_GUID {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableObservableValue_Array_Array_GUID extends ObservableValue_Array_Array_GUID {
  getCopy() {
    return ObservableValue_Array_Array_GUID_Internal.getCopy(this.handle);
  }

  subscribeFromJs(e) {
    return ObservableValue_Array_Array_GUID_Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    ObservableValue_Array_Array_GUID_Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export class ObservableValue_Map_GUID_String {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableObservableValue_Map_GUID_String extends ObservableValue_Map_GUID_String {
  getCopy() {
    return ObservableValue_Map_GUID_String_Internal.getCopy(this.handle);
  }

  subscribeFromJs(e) {
    return ObservableValue_Map_GUID_String_Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    ObservableValue_Map_GUID_String_Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export class CollaborativePlainText {
  handle: any;
  getCurrentVersionAsString() {
    return CollaborativePlainText_Internal.getCurrentVersionAsString(this.handle);
  }

  textLengthInWideChars() {
    return CollaborativePlainText_Internal.textLengthInWideChars(this.handle);
  }

  hasNeverBeenEdited() {
    return CollaborativePlainText_Internal.hasNeverBeenEdited(this.handle);
  }

  adjustWidecharPositionFromPreviousVersion(e, t) {
    return CollaborativePlainText_Internal.adjustWidecharPositionFromPreviousVersion(this.handle, e, t);
  }

  isInUnrecoverableBugErrorState() {
    return CollaborativePlainText_Internal.isInUnrecoverableBugErrorState(this.handle);
  }

  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableCollaborativePlainText extends CollaborativePlainText {
  computeCurrentText() {
    return CollaborativePlainText_Internal.computeCurrentText(this.handle);
  }

  startBatch() {
    CollaborativePlainText_Internal.startBatch(this.handle);
  }

  endBatch() {
    CollaborativePlainText_Internal.endBatch(this.handle);
  }

  createInsertionOp(e, t, r, n) {
    return CollaborativePlainText_Internal.createInsertionOp(this.handle, e, t, r, n);
  }

  createDeletionOp(e, t, r, n) {
    return CollaborativePlainText_Internal.createDeletionOp(this.handle, e, t, r, n);
  }

  replaceRegion(e, t, r, n) {
    return CollaborativePlainText_Internal.replaceRegion(this.handle, e, t, r, n);
  }

  replaceSourceCodeRegionWithVersionAdjustment(e, t, r, n, i) {
    return CollaborativePlainText_Internal.replaceSourceCodeRegionWithVersionAdjustment(this.handle, e, t, r, n, i);
  }

  addObserver(e) {
    return CollaborativePlainText_Internal.addObserver(this.handle, e);
  }

  removeObserver(e) {
    CollaborativePlainText_Internal.removeObserver(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableCollaborativePlainText as $$rZ98 };

export class BindingsNode {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableBindingsNode extends BindingsNode {
  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export class WritableObservableValue_ActiveEmbedData_ {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableWritableObservableValue_ActiveEmbedData_ extends WritableObservableValue_ActiveEmbedData_ {
  getCopy() {
    return WritableObservableValue_ActiveEmbedData__Internal.getCopy(this.handle);
  }

  set(e) {
    WritableObservableValue_ActiveEmbedData__Internal.set(this.handle, e);
  }

  subscribeFromJs(e) {
    return WritableObservableValue_ActiveEmbedData__Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    WritableObservableValue_ActiveEmbedData__Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableWritableObservableValue_ActiveEmbedData_ as $$r245 };

export class ObservableValue_PrototypeDevice_ {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableObservableValue_PrototypeDevice_ extends ObservableValue_PrototypeDevice_ {
  getCopy() {
    return ObservableValue_PrototypeDevice__Internal.getCopy(this.handle);
  }

  subscribeFromJs(e) {
    return ObservableValue_PrototypeDevice__Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    ObservableValue_PrototypeDevice__Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableObservableValue_PrototypeDevice_ as $$r358 };

export class PrototypeInteractions {
  getOrCreateJsCopy() {
    return PrototypeInteractions_Internal.getOrCreateJsCopy(this.handle);
  }

  getOrCreateSkewCopy() {
    return PrototypeInteractions_Internal.getOrCreateSkewCopy(this.handle);
  }

  constructor(e) {
    
    this.handle = e;
  }

}

export class MutablePrototypeInteractions extends PrototypeInteractions {
  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export class ImmutableFrameObserver {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableImmutableFrameObserver extends ImmutableFrameObserver {
  invalidateConnectorForReparenting(e) {
    ImmutableFrameObserver_Internal.invalidateConnectorForReparenting(this.handle, e);
  }

  updateImmutableFrameInternal() {
    ImmutableFrameObserver_Internal.updateImmutableFrameInternal(this.handle);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export class SceneGraph {
  immutableFrameObserverReference() {
    return SceneGraph_Internal.immutableFrameObserverReference(this.handle);
  }

  getIncidentConnectorIDsArray(e) {
    return SceneGraph_Internal.getIncidentConnectorIDsArray(this.handle, e);
  }

  sitesPreviewObserverReference() {
    return SceneGraph_Internal.sitesPreviewObserverReference(this.handle);
  }

  hierarchyDebugString() {
    return SceneGraph_Internal.hierarchyDebugString(this.handle);
  }

  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableSceneGraph extends SceneGraph {
  updateAll() {
    SceneGraph_Internal.updateAll(this.handle);
  }

  updateNode(e) {
    SceneGraph_Internal.updateNode(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableSceneGraph as $$ne128 };

export class TextData {
  getOrCreateSkewCopy() {
    return TextData_Internal.getOrCreateSkewCopy(this.handle);
  }

  getOrCreateJsCopy() {
    return TextData_Internal.getOrCreateJsCopy(this.handle);
  }

  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableTextData extends TextData {
  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export class DerivedTextData {
  getOrCreateSkewCopy() {
    return DerivedTextData_Internal.getOrCreateSkewCopy(this.handle);
  }

  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableDerivedTextData extends DerivedTextData {
  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export class CompiledVectorData {
  getOrCreateSkewCopy() {
    return CompiledVectorData_Internal.getOrCreateSkewCopy(this.handle);
  }

  getOrCreateJsCopy() {
    return CompiledVectorData_Internal.getOrCreateJsCopy(this.handle);
  }

  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableCompiledVectorData extends CompiledVectorData {
  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export class AccessibilityState {
  get pickCursorFocusedNode() {
    return AccessibilityState_Internal.__getProperty_pickCursorFocusedNode(this.handle);
  }

  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableAccessibilityState extends AccessibilityState {
  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableAccessibilityState as $$nl55 };

export class ObservableValue_KeyboardSelectMode_ {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableObservableValue_KeyboardSelectMode_ extends ObservableValue_KeyboardSelectMode_ {
  getCopy() {
    return ObservableValue_KeyboardSelectMode__Internal.getCopy(this.handle);
  }

  subscribeFromJs(e) {
    return ObservableValue_KeyboardSelectMode__Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    ObservableValue_KeyboardSelectMode__Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableObservableValue_KeyboardSelectMode_ as $$nc40 };

export class CanvasGrid {
  get canvasGridArray() {
    return CanvasGrid_Internal.__getProperty_canvasGridArray(this.handle);
  }

  get canvasGridArrayChanges() {
    return CanvasGrid_Internal.__getProperty_canvasGridArrayChanges(this.handle);
  }

  get isDraggingChildren() {
    return CanvasGrid_Internal.__getProperty_isDraggingChildren(this.handle);
  }

  get slideNumbers() {
    return CanvasGrid_Internal.__getProperty_slideNumbers(this.handle);
  }

  gridRowSpacing() {
    return CanvasGrid_Internal.gridRowSpacing(this.handle);
  }

  gridChildSpacing() {
    return CanvasGrid_Internal.gridChildSpacing(this.handle);
  }

  gridPadding() {
    return CanvasGrid_Internal.gridPadding(this.handle);
  }

  gridWidth(e) {
    return CanvasGrid_Internal.gridWidth(this.handle, e);
  }

  gridHeight(e) {
    return CanvasGrid_Internal.gridHeight(this.handle, e);
  }

  rowMaxSize() {
    return CanvasGrid_Internal.rowMaxSize(this.handle);
  }

  getLastChildCoord() {
    return CanvasGrid_Internal.getLastChildCoord(this.handle);
  }

  slidesWrappedInModule__TEST_ONLY__() {
    return CanvasGrid_Internal.slidesWrappedInModule__TEST_ONLY__(this.handle);
  }

  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableCanvasGrid extends CanvasGrid {
  coordForChild(e) {
    return CanvasGrid_Internal.coordForChild(this.handle, e);
  }

  gridGUID() {
    return CanvasGrid_Internal.gridGUID(this.handle);
  }

  getRowGUID(e) {
    return CanvasGrid_Internal.getRowGUID(this.handle, e);
  }

  setAreChildrenManuallyIndented(e) {
    CanvasGrid_Internal.setAreChildrenManuallyIndented(this.handle, e);
  }

  getClosestGridCoord(e, t) {
    return CanvasGrid_Internal.getClosestGridCoord(this.handle, e, t);
  }

  recomputeGrid() {
    CanvasGrid_Internal.recomputeGrid(this.handle);
  }

  insertChildAtCoord(e, t, r, n) {
    CanvasGrid_Internal.insertChildAtCoord(this.handle, e, t, r, n);
  }

  replaceChildInGrid(e, t) {
    CanvasGrid_Internal.replaceChildInGrid(this.handle, e, t);
  }

  moveRow(e, t) {
    CanvasGrid_Internal.moveRow(this.handle, e, t);
  }

  moveChildrenToCoord(e, t) {
    CanvasGrid_Internal.moveChildrenToCoord(this.handle, e, t);
  }

  selectRow(e) {
    CanvasGrid_Internal.selectRow(this.handle, e);
  }

  selectChildrenInRow(e) {
    CanvasGrid_Internal.selectChildrenInRow(this.handle, e);
  }

  addOrRemoveRowFromSelection(e) {
    CanvasGrid_Internal.addOrRemoveRowFromSelection(this.handle, e);
  }

  addOrRemoveRowChildrenFromSelection(e) {
    CanvasGrid_Internal.addOrRemoveRowChildrenFromSelection(this.handle, e);
  }

  setGridOrder(e) {
    return CanvasGrid_Internal.setGridOrder(this.handle, e);
  }

  rectForCoord(e, t, r) {
    return CanvasGrid_Internal.rectForCoord(this.handle, e, t, r);
  }

  rowContentBoundsInCanvas(e, t) {
    return CanvasGrid_Internal.rowContentBoundsInCanvas(this.handle, e, t);
  }

  createRow(e) {
    return CanvasGrid_Internal.createRow(this.handle, e);
  }

  updateSourceLibraryKey(e) {
    CanvasGrid_Internal.updateSourceLibraryKey(this.handle, e);
  }

  setSlidesWrappedInModule__TEST_ONLY__(e) {
    CanvasGrid_Internal.setSlidesWrappedInModule__TEST_ONLY__(this.handle, e);
  }

  isRowSelected(e) {
    return CanvasGrid_Internal.isRowSelected(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableCanvasGrid as $$np41 };

export class CanvasSelection {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableCanvasSelection extends CanvasSelection {
  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export class SlideThemeLibBindings {
  getThemeName(e) {
    return SlideThemeLibBindings_Internal.getThemeName(this.handle, e);
  }

  getBlackColorVariableId(e) {
    return SlideThemeLibBindings_Internal.getBlackColorVariableId(this.handle, e);
  }

  getWhiteColorVariableId(e) {
    return SlideThemeLibBindings_Internal.getWhiteColorVariableId(this.handle, e);
  }

  themeIdForAsset(e) {
    return SlideThemeLibBindings_Internal.themeIdForAsset(this.handle, e);
  }

  numSlidesUsingTheme(e) {
    return SlideThemeLibBindings_Internal.numSlidesUsingTheme(this.handle, e);
  }

  doesSlideDeckUseSameTheme() {
    return SlideThemeLibBindings_Internal.doesSlideDeckUseSameTheme(this.handle);
  }

  mostUsedTemplateLibraryKey() {
    return SlideThemeLibBindings_Internal.mostUsedTemplateLibraryKey(this.handle);
  }

  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableSlideThemeLibBindings extends SlideThemeLibBindings {
  addStyleToLocalTheme(e, t) {
    SlideThemeLibBindings_Internal.addStyleToLocalTheme(this.handle, e, t);
  }

  setThemeColorVariableFromSubscribedVariableColorValue(e, t, r) {
    return SlideThemeLibBindings_Internal.setThemeColorVariableFromSubscribedVariableColorValue(this.handle, e, t, r);
  }

  setThemeName(e, t) {
    SlideThemeLibBindings_Internal.setThemeName(this.handle, e, t);
  }

  setActiveTheme(e) {
    SlideThemeLibBindings_Internal.setActiveTheme(this.handle, e);
  }

  insertDefaultLocalTheme(e, t) {
    return SlideThemeLibBindings_Internal.insertDefaultLocalTheme(this.handle, e, t);
  }

  upsertLocalThemeFromModule(e) {
    return SlideThemeLibBindings_Internal.upsertLocalThemeFromModule(this.handle, e);
  }

  deleteTheme(e) {
    SlideThemeLibBindings_Internal.deleteTheme(this.handle, e);
  }

  remapSlideToLocalTheme(e) {
    return SlideThemeLibBindings_Internal.remapSlideToLocalTheme(this.handle, e);
  }

  setThemeIdOnSelection(e) {
    SlideThemeLibBindings_Internal.setThemeIdOnSelection(this.handle, e);
  }

  swapSelectedSlidesToNewTheme(e, t) {
    return SlideThemeLibBindings_Internal.swapSelectedSlidesToNewTheme(this.handle, e, t);
  }

  detachThemesForTemplatePublish(e) {
    SlideThemeLibBindings_Internal.detachThemesForTemplatePublish(this.handle, e);
  }

  renameThemeForTemplatePublish(e) {
    return SlideThemeLibBindings_Internal.renameThemeForTemplatePublish(this.handle, e);
  }

  setDocumentTemplateLibraryKey(e) {
    SlideThemeLibBindings_Internal.setDocumentTemplateLibraryKey(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableSlideThemeLibBindings as $$ng97 };

export class SlideAnimationBindings {
  getSlideTransition(e) {
    return SlideAnimationBindings_Internal.getSlideTransition(this.handle, e);
  }

  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableSlideAnimationBindings extends SlideAnimationBindings {
  setSlideTransition(e, t) {
    SlideAnimationBindings_Internal.setSlideTransition(this.handle, e, t);
  }

  setSlideTransitionForAll(e) {
    SlideAnimationBindings_Internal.setSlideTransitionForAll(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableSlideAnimationBindings as $$nE75 };

export class SitesPreviewObserver {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableSitesPreviewObserver extends SitesPreviewObserver {
  setPreviewedNodeID(e) {
    SitesPreviewObserver_Internal.setPreviewedNodeID(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export class AnnotationObserver {
  get annotationInfoByTlf() {
    return AnnotationObserver_Internal.__getProperty_annotationInfoByTlf(this.handle);
  }

  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableAnnotationObserver extends AnnotationObserver {
  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableAnnotationObserver as $$nI118 };

export class DakotaBindings {
  get nodeIdToAliasMap() {
    return DakotaBindings_Internal.__getProperty_nodeIdToAliasMap(this.handle);
  }

  get nodeIdToSelectorMap() {
    return DakotaBindings_Internal.__getProperty_nodeIdToSelectorMap(this.handle);
  }

  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableDakotaBindings extends DakotaBindings {
  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableDakotaBindings as $$nv107 };

export class ObservableValue_Map_String_Array_CMSAliasEntry_ {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableObservableValue_Map_String_Array_CMSAliasEntry_ extends ObservableValue_Map_String_Array_CMSAliasEntry_ {
  getCopy() {
    return ObservableValue_Map_String_Array_CMSAliasEntry__Internal.getCopy(this.handle);
  }

  subscribeFromJs(e) {
    return ObservableValue_Map_String_Array_CMSAliasEntry__Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    ObservableValue_Map_String_Array_CMSAliasEntry__Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export class ObservableValue_Map_String_DakotaSelector_ {
  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableObservableValue_Map_String_DakotaSelector_ extends ObservableValue_Map_String_DakotaSelector_ {
  getCopy() {
    return ObservableValue_Map_String_DakotaSelector__Internal.getCopy(this.handle);
  }

  subscribeFromJs(e) {
    return ObservableValue_Map_String_DakotaSelector__Internal.subscribeFromJs(this.handle, e);
  }

  unsubscribeFromJs(e) {
    ObservableValue_Map_String_DakotaSelector__Internal.unsubscribeFromJs(this.handle, e);
  }

  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export class CodeBuildBindings {
  get buildNumberByNodeId() {
    return CodeBuildBindings_Internal.__getProperty_buildNumberByNodeId(this.handle);
  }

  openDoNotBumpCodeNodeBuildNumbersScope() {
    return CodeBuildBindings_Internal.openDoNotBumpCodeNodeBuildNumbersScope(this.handle);
  }

  closeDoNotBumpCodeNodeBuildNumbersScope(e) {
    CodeBuildBindings_Internal.closeDoNotBumpCodeNodeBuildNumbersScope(this.handle, e);
  }

  constructor(e) {
    
    this.handle = e;
  }

}

export class MutableCodeBuildBindings extends CodeBuildBindings {
  constructor(e) {
    super(e);
    
    this.handle = e;
  }

}

export { MutableCodeBuildBindings as $$nO2 };
export function initializeGlobalBindings(e) {
  EditScopeBindings = e.EditScopeBindings;
  ObservableValue_Map_GUID_Int_Internal = e.ObservableValue_Map_GUID_Int_Internal;
  globalThis.ObservableValue_Map_GUID_Int = ObservableValue_Map_GUID_Int;
  globalThis.MutableObservableValue_Map_GUID_Int = MutableObservableValue_Map_GUID_Int;
  WritableObservableValue_UGUID_Internal = e.WritableObservableValue_UGUID_Internal;
  globalThis.WritableObservableValue_UGUID = WritableObservableValue_UGUID;
  globalThis.MutableWritableObservableValue_UGUID = MutableWritableObservableValue_UGUID;
  WritableObservableValue_Array_GUID_Internal = e.WritableObservableValue_Array_GUID_Internal;
  globalThis.WritableObservableValue_Array_GUID = WritableObservableValue_Array_GUID;
  globalThis.MutableWritableObservableValue_Array_GUID = MutableWritableObservableValue_Array_GUID;
  WritableObservableValue_Optional_GUID_Internal = e.WritableObservableValue_Optional_GUID_Internal;
  globalThis.WritableObservableValue_Optional_GUID = WritableObservableValue_Optional_GUID;
  globalThis.MutableWritableObservableValue_Optional_GUID = MutableWritableObservableValue_Optional_GUID;
  ObservableValue_Set_GUID_Internal = e.ObservableValue_Set_GUID_Internal;
  globalThis.ObservableValue_Set_GUID = ObservableValue_Set_GUID;
  globalThis.MutableObservableValue_Set_GUID = MutableObservableValue_Set_GUID;
  WritableObservableValue_GUID_Internal = e.WritableObservableValue_GUID_Internal;
  globalThis.WritableObservableValue_GUID = WritableObservableValue_GUID;
  globalThis.MutableWritableObservableValue_GUID = MutableWritableObservableValue_GUID;
  ObservableValue_Array_GUID_Internal = e.ObservableValue_Array_GUID_Internal;
  globalThis.ObservableValue_Array_GUID = ObservableValue_Array_GUID;
  globalThis.MutableObservableValue_Array_GUID = MutableObservableValue_Array_GUID;
  ObservableValue_GUID_Internal = e.ObservableValue_GUID_Internal;
  globalThis.ObservableValue_GUID = ObservableValue_GUID;
  globalThis.MutableObservableValue_GUID = MutableObservableValue_GUID;
  ObservableValue_Optional_GUID_Internal = e.ObservableValue_Optional_GUID_Internal;
  globalThis.ObservableValue_Optional_GUID = ObservableValue_Optional_GUID;
  globalThis.MutableObservableValue_Optional_GUID = MutableObservableValue_Optional_GUID;
  WritableObservableValue_Set_GUID_Internal = e.WritableObservableValue_Set_GUID_Internal;
  globalThis.WritableObservableValue_Set_GUID = WritableObservableValue_Set_GUID;
  globalThis.MutableWritableObservableValue_Set_GUID = MutableWritableObservableValue_Set_GUID;
  ObservableValue_Array_Array_GUID_Internal = e.ObservableValue_Array_Array_GUID_Internal;
  globalThis.ObservableValue_Array_Array_GUID = ObservableValue_Array_Array_GUID;
  globalThis.MutableObservableValue_Array_Array_GUID = MutableObservableValue_Array_Array_GUID;
  ObservableValue_Map_GUID_String_Internal = e.ObservableValue_Map_GUID_String_Internal;
  globalThis.ObservableValue_Map_GUID_String = ObservableValue_Map_GUID_String;
  globalThis.MutableObservableValue_Map_GUID_String = MutableObservableValue_Map_GUID_String;
  CollaborativePlainText_Internal = e.CollaborativePlainText_Internal;
  globalThis.CollaborativePlainText = CollaborativePlainText;
  globalThis.MutableCollaborativePlainText = MutableCollaborativePlainText;
  BindingsNode_Internal = e.BindingsNode_Internal;
  globalThis.BindingsNode = BindingsNode;
  globalThis.MutableBindingsNode = MutableBindingsNode;
  NodeTsApi = e.NodeTsApi;
  WritableObservableValue_ActiveEmbedData__Internal = e.WritableObservableValue_ActiveEmbedData__Internal;
  globalThis.WritableObservableValue_ActiveEmbedData_ = WritableObservableValue_ActiveEmbedData_;
  globalThis.MutableWritableObservableValue_ActiveEmbedData_ = MutableWritableObservableValue_ActiveEmbedData_;
  AssistantTools = e.AssistantTools;
  Fonts = e.Fonts;
  CmsAnalytics = e.CmsAnalytics;
  ImageCppBindings = e.ImageCppBindings;
  ObservableValue_PrototypeDevice__Internal = e.ObservableValue_PrototypeDevice__Internal;
  globalThis.ObservableValue_PrototypeDevice_ = ObservableValue_PrototypeDevice_;
  globalThis.MutableObservableValue_PrototypeDevice_ = MutableObservableValue_PrototypeDevice_;
  PrototypeInteractions_Internal = e.PrototypeInteractions_Internal;
  globalThis.PrototypeInteractions = PrototypeInteractions;
  globalThis.MutablePrototypeInteractions = MutablePrototypeInteractions;
  RevisionNumberAccessor = e.RevisionNumberAccessor;
  ImmutableFrameObserver_Internal = e.ImmutableFrameObserver_Internal;
  globalThis.ImmutableFrameObserver = ImmutableFrameObserver;
  globalThis.MutableImmutableFrameObserver = MutableImmutableFrameObserver;
  SceneGraph_Internal = e.SceneGraph_Internal;
  globalThis.SceneGraph = SceneGraph;
  globalThis.MutableSceneGraph = MutableSceneGraph;
  SceneGraphTsApi = e.SceneGraphTsApi;
  TextData_Internal = e.TextData_Internal;
  globalThis.TextData = TextData;
  globalThis.MutableTextData = MutableTextData;
  DerivedTextData_Internal = e.DerivedTextData_Internal;
  globalThis.DerivedTextData = DerivedTextData;
  globalThis.MutableDerivedTextData = MutableDerivedTextData;
  TextPathStartHelpers = e.TextPathStartHelpers;
  CompiledVectorData_Internal = e.CompiledVectorData_Internal;
  globalThis.CompiledVectorData = CompiledVectorData;
  globalThis.MutableCompiledVectorData = MutableCompiledVectorData;
  AccessibilityState_Internal = e.AccessibilityState_Internal;
  globalThis.AccessibilityState = AccessibilityState;
  globalThis.MutableAccessibilityState = MutableAccessibilityState;
  AccessibilityHelpers = e.AccessibilityHelpers;
  ObservableValue_KeyboardSelectMode__Internal = e.ObservableValue_KeyboardSelectMode__Internal;
  globalThis.ObservableValue_KeyboardSelectMode_ = ObservableValue_KeyboardSelectMode_;
  globalThis.MutableObservableValue_KeyboardSelectMode_ = MutableObservableValue_KeyboardSelectMode_;
  CanvasGrid_Internal = e.CanvasGrid_Internal;
  globalThis.CanvasGrid = CanvasGrid;
  globalThis.MutableCanvasGrid = MutableCanvasGrid;
  CanvasSelection_Internal = e.CanvasSelection_Internal;
  globalThis.CanvasSelection = CanvasSelection;
  globalThis.MutableCanvasSelection = MutableCanvasSelection;
  SlideConstantsCppBindings = e.SlideConstantsCppBindings;
  SlideHelpersCppBindings = e.SlideHelpersCppBindings;
  SlideThemeLibBindings_Internal = e.SlideThemeLibBindings_Internal;
  globalThis.SlideThemeLibBindings = SlideThemeLibBindings;
  globalThis.MutableSlideThemeLibBindings = MutableSlideThemeLibBindings;
  SlideAnimationBindings_Internal = e.SlideAnimationBindings_Internal;
  globalThis.SlideAnimationBindings = SlideAnimationBindings;
  globalThis.MutableSlideAnimationBindings = MutableSlideAnimationBindings;
  SitesPreviewObserver_Internal = e.SitesPreviewObserver_Internal;
  globalThis.SitesPreviewObserver = SitesPreviewObserver;
  globalThis.MutableSitesPreviewObserver = MutableSitesPreviewObserver;
  AnnotationObserver_Internal = e.AnnotationObserver_Internal;
  globalThis.AnnotationObserver = AnnotationObserver;
  globalThis.MutableAnnotationObserver = MutableAnnotationObserver;
  DakotaBindings_Internal = e.DakotaBindings_Internal;
  globalThis.DakotaBindings = DakotaBindings;
  globalThis.MutableDakotaBindings = MutableDakotaBindings;
  ObservableValue_Map_String_Array_CMSAliasEntry__Internal = e.ObservableValue_Map_String_Array_CMSAliasEntry__Internal;
  globalThis.ObservableValue_Map_String_Array_CMSAliasEntry_ = ObservableValue_Map_String_Array_CMSAliasEntry_;
  globalThis.MutableObservableValue_Map_String_Array_CMSAliasEntry_ = MutableObservableValue_Map_String_Array_CMSAliasEntry_;
  ObservableValue_Map_String_DakotaSelector__Internal = e.ObservableValue_Map_String_DakotaSelector__Internal;
  globalThis.ObservableValue_Map_String_DakotaSelector_ = ObservableValue_Map_String_DakotaSelector_;
  globalThis.MutableObservableValue_Map_String_DakotaSelector_ = MutableObservableValue_Map_String_DakotaSelector_;
  CodeBuildBindings_Internal = e.CodeBuildBindings_Internal;
  globalThis.CodeBuildBindings = CodeBuildBindings;
  globalThis.MutableCodeBuildBindings = MutableCodeBuildBindings;
  MaterializeInvisibleChildrenBindings = e.MaterializeInvisibleChildrenBindings;
  AccessibilityFacetTsApiGenerated = e.AccessibilityFacetTsApiGenerated;
  AnnotationFacetTsApiGenerated = e.AnnotationFacetTsApiGenerated;
  AssetFacetTsApiGenerated = e.AssetFacetTsApiGenerated;
  BrushFacetTsApiGenerated = e.BrushFacetTsApiGenerated;
  BrushStrokeFacetTsApiGenerated = e.BrushStrokeFacetTsApiGenerated;
  BuzzFacetTsApiGenerated = e.BuzzFacetTsApiGenerated;
  CanvasFacetTsApiGenerated = e.CanvasFacetTsApiGenerated;
  CanvasGridFacetTsApiGenerated = e.CanvasGridFacetTsApiGenerated;
  CMSFacetTsApiGenerated = e.CMSFacetTsApiGenerated;
  CodeFacetTsApiGenerated = e.CodeFacetTsApiGenerated;
  CodeBehaviorFacetTsApiGenerated = e.CodeBehaviorFacetTsApiGenerated;
  CodeComponentFacetTsApiGenerated = e.CodeComponentFacetTsApiGenerated;
  CodeFileFacetTsApiGenerated = e.CodeFileFacetTsApiGenerated;
  CodeLibraryFacetTsApiGenerated = e.CodeLibraryFacetTsApiGenerated;
  ComponentishFacetTsApiGenerated = e.ComponentishFacetTsApiGenerated;
  ComponentPropRefFacetTsApiGenerated = e.ComponentPropRefFacetTsApiGenerated;
  ConnectorFacetTsApiGenerated = e.ConnectorFacetTsApiGenerated;
  ConstraintsFacetTsApiGenerated = e.ConstraintsFacetTsApiGenerated;
  DerivedSubtreesFacetTsApiGenerated = e.DerivedSubtreesFacetTsApiGenerated;
  DiagramFacetTsApiGenerated = e.DiagramFacetTsApiGenerated;
  DocumentFacetTsApiGenerated = e.DocumentFacetTsApiGenerated;
  FirstDraftFacetTsApiGenerated = e.FirstDraftFacetTsApiGenerated;
  FrameFacetTsApiGenerated = e.FrameFacetTsApiGenerated;
  GeometryFacetTsApiGenerated = e.GeometryFacetTsApiGenerated;
  GeometryCacheFacetTsApiGenerated = e.GeometryCacheFacetTsApiGenerated;
  GuidesFacetTsApiGenerated = e.GuidesFacetTsApiGenerated;
  ImmutableFrameFacetTsApiGenerated = e.ImmutableFrameFacetTsApiGenerated;
  InstanceFacetTsApiGenerated = e.InstanceFacetTsApiGenerated;
  InteractiveSlideElementFacetTsApiGenerated = e.InteractiveSlideElementFacetTsApiGenerated;
  JsxFacetTsApiGenerated = e.JsxFacetTsApiGenerated;
  LayerFacetTsApiGenerated = e.LayerFacetTsApiGenerated;
  LayoutGridFacetTsApiGenerated = e.LayoutGridFacetTsApiGenerated;
  ManagedStringFacetTsApiGenerated = e.ManagedStringFacetTsApiGenerated;
  ModuleFacetTsApiGenerated = e.ModuleFacetTsApiGenerated;
  ParameterConsumptionFacetTsApiGenerated = e.ParameterConsumptionFacetTsApiGenerated;
  PlatformShapeFacetTsApiGenerated = e.PlatformShapeFacetTsApiGenerated;
  PluginFacetTsApiGenerated = e.PluginFacetTsApiGenerated;
  PolygonFacetTsApiGenerated = e.PolygonFacetTsApiGenerated;
  PrototypingFacetTsApiGenerated = e.PrototypingFacetTsApiGenerated;
  ResponsiveNodeSetFacetTsApiGenerated = e.ResponsiveNodeSetFacetTsApiGenerated;
  ResponsiveSetFacetTsApiGenerated = e.ResponsiveSetFacetTsApiGenerated;
  RenderableBackgroundFacetTsApiGenerated = e.RenderableBackgroundFacetTsApiGenerated;
  RenderableBaseFacetTsApiGenerated = e.RenderableBaseFacetTsApiGenerated;
  RenderableRectangleFacetTsApiGenerated = e.RenderableRectangleFacetTsApiGenerated;
  RenderTreeFacetTsApiGenerated = e.RenderTreeFacetTsApiGenerated;
  StackFacetTsApiGenerated = e.StackFacetTsApiGenerated;
  SlideFacetTsApiGenerated = e.SlideFacetTsApiGenerated;
  SlideThemeMapFacetTsApiGenerated = e.SlideThemeMapFacetTsApiGenerated;
  StarFacetTsApiGenerated = e.StarFacetTsApiGenerated;
  StateFacetTsApiGenerated = e.StateFacetTsApiGenerated;
  StateGroupFacetTsApiGenerated = e.StateGroupFacetTsApiGenerated;
  StyleFacetTsApiGenerated = e.StyleFacetTsApiGenerated;
  SymbolFacetTsApiGenerated = e.SymbolFacetTsApiGenerated;
  TableFacetTsApiGenerated = e.TableFacetTsApiGenerated;
  TextFacetTsApiGenerated = e.TextFacetTsApiGenerated;
  TextPathFacetTsApiGenerated = e.TextPathFacetTsApiGenerated;
  TransformFacetTsApiGenerated = e.TransformFacetTsApiGenerated;
  VariableFacetTsApiGenerated = e.VariableFacetTsApiGenerated;
  VariableDataFacetTsApiGenerated = e.VariableDataFacetTsApiGenerated;
  VariableModeConsumptionFacetTsApiGenerated = e.VariableModeConsumptionFacetTsApiGenerated;
  VariableOverrideFacetTsApiGenerated = e.VariableOverrideFacetTsApiGenerated;
  VariableSetFacetTsApiGenerated = e.VariableSetFacetTsApiGenerated;
  VectorFacetTsApiGenerated = e.VectorFacetTsApiGenerated;
  VectorOperationFacetTsApiGenerated = e.VectorOperationFacetTsApiGenerated;
  ViewerStateFacetTsApiGenerated = e.ViewerStateFacetTsApiGenerated;
  WidgetFacetTsApiGenerated = e.WidgetFacetTsApiGenerated;
  BaseNodeTsApiGenerated = e.BaseNodeTsApiGenerated;
  NodeTsApiGenerated = e.NodeTsApiGenerated;
}
export function registerFigmaServices() {
  return {
    editScopeBindings: EditScopeBindings,
    nodeTsApi: NodeTsApi,
    assistantTools: AssistantTools,
    fonts: Fonts,
    cmsAnalytics: CmsAnalytics,
    imageCppBindings: ImageCppBindings,
    revisionNumberAccessor: RevisionNumberAccessor,
    sceneGraphTsApi: SceneGraphTsApi,
    textPathStartHelpers: TextPathStartHelpers,
    accessibilityHelpers: AccessibilityHelpers,
    slideConstantsCppBindings: SlideConstantsCppBindings,
    slideHelpersCppBindings: SlideHelpersCppBindings,
    materializeInvisibleChildrenBindings: MaterializeInvisibleChildrenBindings,
    accessibilityFacetTsApiGenerated: AccessibilityFacetTsApiGenerated,
    annotationFacetTsApiGenerated: AnnotationFacetTsApiGenerated,
    assetFacetTsApiGenerated: AssetFacetTsApiGenerated,
    brushFacetTsApiGenerated: BrushFacetTsApiGenerated,
    brushStrokeFacetTsApiGenerated: BrushStrokeFacetTsApiGenerated,
    buzzFacetTsApiGenerated: BuzzFacetTsApiGenerated,
    canvasFacetTsApiGenerated: CanvasFacetTsApiGenerated,
    canvasGridFacetTsApiGenerated: CanvasGridFacetTsApiGenerated,
    cMSFacetTsApiGenerated: CMSFacetTsApiGenerated,
    codeFacetTsApiGenerated: CodeFacetTsApiGenerated,
    codeBehaviorFacetTsApiGenerated: CodeBehaviorFacetTsApiGenerated,
    codeComponentFacetTsApiGenerated: CodeComponentFacetTsApiGenerated,
    codeFileFacetTsApiGenerated: CodeFileFacetTsApiGenerated,
    codeLibraryFacetTsApiGenerated: CodeLibraryFacetTsApiGenerated,
    componentishFacetTsApiGenerated: ComponentishFacetTsApiGenerated,
    componentPropRefFacetTsApiGenerated: ComponentPropRefFacetTsApiGenerated,
    connectorFacetTsApiGenerated: ConnectorFacetTsApiGenerated,
    constraintsFacetTsApiGenerated: ConstraintsFacetTsApiGenerated,
    derivedSubtreesFacetTsApiGenerated: DerivedSubtreesFacetTsApiGenerated,
    diagramFacetTsApiGenerated: DiagramFacetTsApiGenerated,
    documentFacetTsApiGenerated: DocumentFacetTsApiGenerated,
    firstDraftFacetTsApiGenerated: FirstDraftFacetTsApiGenerated,
    frameFacetTsApiGenerated: FrameFacetTsApiGenerated,
    geometryFacetTsApiGenerated: GeometryFacetTsApiGenerated,
    geometryCacheFacetTsApiGenerated: GeometryCacheFacetTsApiGenerated,
    guidesFacetTsApiGenerated: GuidesFacetTsApiGenerated,
    immutableFrameFacetTsApiGenerated: ImmutableFrameFacetTsApiGenerated,
    instanceFacetTsApiGenerated: InstanceFacetTsApiGenerated,
    interactiveSlideElementFacetTsApiGenerated: InteractiveSlideElementFacetTsApiGenerated,
    jsxFacetTsApiGenerated: JsxFacetTsApiGenerated,
    layerFacetTsApiGenerated: LayerFacetTsApiGenerated,
    layoutGridFacetTsApiGenerated: LayoutGridFacetTsApiGenerated,
    managedStringFacetTsApiGenerated: ManagedStringFacetTsApiGenerated,
    moduleFacetTsApiGenerated: ModuleFacetTsApiGenerated,
    parameterConsumptionFacetTsApiGenerated: ParameterConsumptionFacetTsApiGenerated,
    platformShapeFacetTsApiGenerated: PlatformShapeFacetTsApiGenerated,
    pluginFacetTsApiGenerated: PluginFacetTsApiGenerated,
    polygonFacetTsApiGenerated: PolygonFacetTsApiGenerated,
    prototypingFacetTsApiGenerated: PrototypingFacetTsApiGenerated,
    responsiveNodeSetFacetTsApiGenerated: ResponsiveNodeSetFacetTsApiGenerated,
    responsiveSetFacetTsApiGenerated: ResponsiveSetFacetTsApiGenerated,
    renderableBackgroundFacetTsApiGenerated: RenderableBackgroundFacetTsApiGenerated,
    renderableBaseFacetTsApiGenerated: RenderableBaseFacetTsApiGenerated,
    renderableRectangleFacetTsApiGenerated: RenderableRectangleFacetTsApiGenerated,
    renderTreeFacetTsApiGenerated: RenderTreeFacetTsApiGenerated,
    stackFacetTsApiGenerated: StackFacetTsApiGenerated,
    slideFacetTsApiGenerated: SlideFacetTsApiGenerated,
    slideThemeMapFacetTsApiGenerated: SlideThemeMapFacetTsApiGenerated,
    starFacetTsApiGenerated: StarFacetTsApiGenerated,
    stateFacetTsApiGenerated: StateFacetTsApiGenerated,
    stateGroupFacetTsApiGenerated: StateGroupFacetTsApiGenerated,
    styleFacetTsApiGenerated: StyleFacetTsApiGenerated,
    symbolFacetTsApiGenerated: SymbolFacetTsApiGenerated,
    tableFacetTsApiGenerated: TableFacetTsApiGenerated,
    textFacetTsApiGenerated: TextFacetTsApiGenerated,
    textPathFacetTsApiGenerated: TextPathFacetTsApiGenerated,
    transformFacetTsApiGenerated: TransformFacetTsApiGenerated,
    variableFacetTsApiGenerated: VariableFacetTsApiGenerated,
    variableDataFacetTsApiGenerated: VariableDataFacetTsApiGenerated,
    variableModeConsumptionFacetTsApiGenerated: VariableModeConsumptionFacetTsApiGenerated,
    variableOverrideFacetTsApiGenerated: VariableOverrideFacetTsApiGenerated,
    variableSetFacetTsApiGenerated: VariableSetFacetTsApiGenerated,
    vectorFacetTsApiGenerated: VectorFacetTsApiGenerated,
    vectorOperationFacetTsApiGenerated: VectorOperationFacetTsApiGenerated,
    viewerStateFacetTsApiGenerated: ViewerStateFacetTsApiGenerated,
    widgetFacetTsApiGenerated: WidgetFacetTsApiGenerated,
    baseNodeTsApiGenerated: BaseNodeTsApiGenerated,
    nodeTsApiGenerated: NodeTsApiGenerated,
    observableValue_Map_GUID_Int_Internal: ObservableValue_Map_GUID_Int_Internal,
    writableObservableValue_UGUID_Internal: WritableObservableValue_UGUID_Internal,
    writableObservableValue_Array_GUID_Internal: WritableObservableValue_Array_GUID_Internal,
    writableObservableValue_Optional_GUID_Internal: WritableObservableValue_Optional_GUID_Internal,
    observableValue_Set_GUID_Internal: ObservableValue_Set_GUID_Internal,
    writableObservableValue_GUID_Internal: WritableObservableValue_GUID_Internal,
    observableValue_Array_GUID_Internal: ObservableValue_Array_GUID_Internal,
    observableValue_GUID_Internal: ObservableValue_GUID_Internal,
    observableValue_Optional_GUID_Internal: ObservableValue_Optional_GUID_Internal,
    writableObservableValue_Set_GUID_Internal: WritableObservableValue_Set_GUID_Internal,
    observableValue_Array_Array_GUID_Internal: ObservableValue_Array_Array_GUID_Internal,
    observableValue_Map_GUID_String_Internal: ObservableValue_Map_GUID_String_Internal,
    collaborativePlainText_Internal: CollaborativePlainText_Internal,
    bindingsNode_Internal: BindingsNode_Internal,
    writableObservableValue_ActiveEmbedData__Internal: WritableObservableValue_ActiveEmbedData__Internal,
    observableValue_PrototypeDevice__Internal: ObservableValue_PrototypeDevice__Internal,
    prototypeInteractions_Internal: PrototypeInteractions_Internal,
    immutableFrameObserver_Internal: ImmutableFrameObserver_Internal,
    sceneGraph_Internal: SceneGraph_Internal,
    textData_Internal: TextData_Internal,
    derivedTextData_Internal: DerivedTextData_Internal,
    compiledVectorData_Internal: CompiledVectorData_Internal,
    accessibilityState_Internal: AccessibilityState_Internal,
    observableValue_KeyboardSelectMode__Internal: ObservableValue_KeyboardSelectMode__Internal,
    canvasGrid_Internal: CanvasGrid_Internal,
    canvasSelection_Internal: CanvasSelection_Internal,
    slideThemeLibBindings_Internal: SlideThemeLibBindings_Internal,
    slideAnimationBindings_Internal: SlideAnimationBindings_Internal,
    sitesPreviewObserver_Internal: SitesPreviewObserver_Internal,
    annotationObserver_Internal: AnnotationObserver_Internal,
    dakotaBindings_Internal: DakotaBindings_Internal,
    observableValue_Map_String_Array_CMSAliasEntry__Internal: ObservableValue_Map_String_Array_CMSAliasEntry__Internal,
    observableValue_Map_String_DakotaSelector__Internal: ObservableValue_Map_String_DakotaSelector__Internal,
    codeBuildBindings_Internal: CodeBuildBindings_Internal
  };
}
export const $6Y = NavigationDirection;
export const $DY = PrototypingFacetTsApiGenerated;
export const AKB = MutableCodeBuildBindings;
export const AZ4 = AssetSource;
export const BLp = CompiledVectorData_Internal;
export const BS2 = EqualityType;
export const Bko = ImageCppBindings;
export const Bll = IssueCategory;
export const ByZ = VectorFacetTsApiGenerated;
export const CNR = SlideConstantsCppBindings;
export const EBZ = ResponsiveSetFacetTsApiGenerated;
export const ElO = TextDirection;
export const FDn = InsertErrorType;
export const FbN = ClipboardContentType;
export const Fk7 = NodeTsApiGenerated;
export const Fzw = CodeFacetTsApiGenerated;
export const H9y = TextFacetTsApiGenerated;
export const Hxi = MutableWritableObservableValue_Array_GUID;
export const HzA = TrackType;
export const IEt = MutableWritableObservableValue_Set_GUID;
export const IPZ = StickyWidgetType;
export const J0O = ComponentPropType;
export const JwG = MutableObservableValue_Array_GUID;
export const K$p = ChatMessageType;
export const KG_ = WidgetFacetTsApiGenerated;
export const KO7 = registerFigmaServices;
export const KtY = StackFacetTsApiGenerated;
export const L5V = NodePropertyType;
export const LQj = initializeGlobalBindings;
export const Liw = ChangeType;
export const Lxv = SnapshotStatus;
export const M7s = FieldType;
export const MoD = ImageExportType;
export const Nfd = PanelType;
export const O3Z = AssistantTools;
export const OGQ = CanvasFacetTsApiGenerated;
export const OQN = BooleanOperationType;
export const OR7 = StrokeAlignment;
export const Ocq = LibraryType;
export const OiN = MaterializeInvisibleChildrenBindings;
export const PB2 = MutableObservableValue_KeyboardSelectMode_;
export const PFX = MutableCanvasGrid;
export const PWo = FacetType;
export const PoC = ConnectorType;
export const QCv = PaintType;
export const QcK = MutableWritableObservableValue_ActiveEmbedData_;
export const RN1 = ColorPalette;
export const Roq = DuplicateType;
export const RsU = StyleFacetTsApiGenerated;
export const SKs = PrototypeInteractions_Internal;
export const Sie = StateSourceType;
export const SpR = AutoLayoutAlignment;
export const TsU = InsertSourceType;
export const UNF = NodeTsApi;
export const V$M = ContainerType;
export const WAt = MutableAccessibilityState;
export const WXh = VisibilityCondition;
export const XQq = PresetType;
export const XeX = MutableObservableValue_PrototypeDevice_;
export const Xxv = EditScopeBindings;
export const Y8A = RevisionNumberAccessor;
export const YMM = TextData_Internal;
export const YnC = SymbolOverrideType;
export const Z6A = NodeType;
export const ZHy = VerticalPosition;
export const ZPn = MutableWritableObservableValue_GUID;
export const ZRE = FillType;
export const Zbk = AppMode;
export const _3L = ThemeType;
export const _YF = WorkspaceType;
export const baT = ExportScope;
export const btW = SideType;
export const bwI = StateGroupErrorType;
export const cQy = RichTextType;
export const cTp = ResponsiveNodeSetFacetTsApiGenerated;
export const cuQ = MutableSlideAnimationBindings;
export const cus = UnitType;
export const d8m = UploadStatus;
export const eL2 = TextEditAction;
export const eLE = SlideHelpersCppBindings;
export const fOf = ComponentType;
export const fQ3 = AnnotationFacetTsApiGenerated;
export const fRZ = LayerFacetTsApiGenerated;
export const fWh = InteractiveSlideElementFacetTsApiGenerated;
export const gEE = Side;
export const gRN = TextBlockType;
export const gSS = LayoutDirection;
export const gdE = TextPathStartHelpers;
export const gz6 = CanvasGridFacetTsApiGenerated;
export const hR8 = ComponentishFacetTsApiGenerated;
export const hyM = JsxFacetTsApiGenerated;
export const iZB = ConstraintsFacetTsApiGenerated;
export const j0r = PropertyScope;
export const jDJ = FrameFacetTsApiGenerated;
export const jXp = FontSourceType;
export const juq = FileSourceType;
export const kQG = MatchType;
export const kRH = MutableSlideThemeLibBindings;
export const lIn = MutableCollaborativePlainText;
export const lMj = PointerAction;
export const luZ = AnimationTriggerType;
export const m1T = LayoutTabType;
export const m33 = AccessibilityFacetTsApiGenerated;
export const mKm = LayoutSizingMode;
export const mSn = SceneGraphTsApi;
export const mgy = EasingType;
export const oN4 = ChatRole;
export const pOw = MutableDakotaBindings;
export const plo = DistributionType;
export const ppO = RenderableBaseFacetTsApiGenerated;
export const pxg = ImageFillMode;
export const qOu = PolygonFacetTsApiGenerated;
export const qYO = ThemeColorStatus;
export const qhH = MutableObservableValue_Optional_GUID;
export const r6o = SelectionMode;
export const rO6 = FirstDraftFacetTsApiGenerated;
export const rrT = NodePropertyCategory;
export const sAE = LayoutSizingType;
export const sS8 = MutableAnnotationObserver;
export const sVn = ModuleFacetTsApiGenerated;
export const sbT = BaseNodeTsApiGenerated;
export const tEb = RenderableRectangleFacetTsApiGenerated;
export const tNK = MutableObservableValue_GUID;
export const tbL = TextDecorationType;
export const tbx = AnimationEventType;
export const u3r = MutableWritableObservableValue_Optional_GUID;
export const uXg = VariableSetErrorType;
export const v$l = SlideTransitionType;
export const vNG = MutableSceneGraph;
export const vSx = BuzzFacetTsApiGenerated;
export const vXe = Fonts;
export const vr8 = TextOverflowType;
export const x4V = SlideFacetTsApiGenerated;
export const x7E = ConnectorFacetTsApiGenerated;
export const xMT = InstanceFacetTsApiGenerated;
export const xOL = RotationType;
export const y0x = PlatformType;
export const y1d = MutableObservableValue_Map_GUID_Int;
export const y6_ = MutableWritableObservableValue_UGUID;
export const yGz = AccessibilityHelpers;
export const yNY = MutableObservableValue_Set_GUID;
export const zIx = BuildStatus;
export const zMY = ThemeMode;
export const zkO = SourceType;
/**
 * SourceType (original: $$n143)
 */
export enum SourceType {
  INVALID = 0,
  TEST_SETUP = 1,
  USER = 2,
  PLUGIN = 3,
  SYSTEM = 4,
  REST_API = 5,
  ONBOARDING = 6,
  AUTOSAVE = 7,
  AI = 8,
}

/**
 * EasingType (original: $$i105)
 */
export enum EasingType {
  IN_CUBIC = 0,
  OUT_CUBIC = 1,
  INOUT_CUBIC = 2,
  LINEAR = 3,
  IN_BACK_CUBIC = 4,
  OUT_BACK_CUBIC = 5,
  INOUT_BACK_CUBIC = 6,
  CUSTOM_CUBIC = 7,
  SPRING = 8,
  GENTLE_SPRING = 9,
  CUSTOM_SPRING = 10,
  SPRING_PRESET_ONE = 11,
  SPRING_PRESET_TWO = 12,
  SPRING_PRESET_THREE = 13,
}

/**
 * InsertSourceType (original: $$a52)
 */
export enum InsertSourceType {
  CLICK = 0,
  COPY_PASTE = 1,
  COPY_PASTE_DIFFERENT_FILE = 2,
  DLT_DRAG_DROP = 3,
  SHAPES_SIDEBAR_CLICK = 4,
  SHAPES_SIDEBAR_DRAG_DROP = 5,
  DUPLICATION = 6,
  LIBRARY_DRAG_AND_DROP = 7,
  PLAYGROUND = 8,
  SWAPPING_FROM_LIBRARY_DRAG_AND_DROP = 9,
  SWAPPING_FROM_PROPERTIES_PANEL = 10,
  LEFT_PANEL = 11,
  CMS_PROPERTIES_PANEL = 12,
  CMS_CONNECT_MODE = 13,
  UNKNOWN = 14,
}

/**
 * FileSourceType (original: $$s95)
 */
export enum FileSourceType {
  LIVE_FILE = 0,
  HISTORY = 1,
  DETACHED_COMPONENTS = 2,
  PLAYGROUND = 3,
  FIRST_DRAFT = 4,
  HUB_FILE_EMBED = 5,
  HUB_FILE_MOBILE = 6,
  FIGMASCOPE = 7,
  MOBILE = 8,
  COMPARE_CHANGES = 9,
  GARBAGE_COLLECTION_RESTORER = 10,
  TEMPLATE_COMMIT = 11,
  TEMPLATE_PREVIEW = 12,
  FAKE_CLIPBOARD = 13,
  DEV_MODE_TYPOGRAPHY_PREVIEW = 14,
  SLIDE_THEME_STYLE_PREVIEW = 15,
  STYLE_SELECTION_PROPERTIES = 16,
  EXPORTER_PAINT_ICON_RENDERING = 17,
  STYLE_RENDERING = 18,
  AUTO_SUGGEST = 19,
  LINTER = 20,
}

/**
 * StateSourceType (original: $$o50)
 */
export enum StateSourceType {
  REDUX = 0,
  PLUGIN = 1,
  PROTOTYPE_LIB = 2,
}

/**
 * NodeType (original: $$l63)
 */
export enum NodeType {
  NONE = 0,
  DOCUMENT = 1,
  CANVAS = 2,
  GROUP_DEPRECATED = 3,
  FRAME = 4,
  SYMBOL = 5,
  INSTANCE = 6,
  STICKY = 7,
  SHAPE_WITH_TEXT = 8,
  CONNECTOR = 9,
  CODE_BLOCK = 10,
  WIDGET = 11,
  STAMP = 12,
  MEDIA = 13,
  SECTION = 14,
  SECTION_OVERLAY = 15,
  TABLE = 16,
  TABLE_CELL = 17,
  SLIDE = 18,
  CANVAS_GRID = 19,
  CANVAS_ROW = 20,
  MODULE = 21,
  VECTOR_OPERATION = 22,
  VECTOR = 23,
  HIGHLIGHT = 24,
  STAR = 25,
  LINE = 26,
  ELLIPSE = 27,
  RECTANGLE = 28,
  REGULAR_POLYGON = 29,
  ROUNDED_RECTANGLE = 30,
  TEXT = 31,
  SLICE = 32,
  WASHI_TAPE = 33,
  VARIABLE = 34,
  VARIABLE_SET = 35,
  ASSISTED_LAYOUT_DEPRECATED = 36,
  INTERACTIVE_SLIDE_ELEMENT = 37,
  VARIABLE_OVERRIDE = 38,
  RESPONSIVE_SET = 39,
  CODE_COMPONENT = 40,
  TEXT_PATH = 41,
  CODE_INSTANCE = 42,
  CODE_LIBRARY = 43,
  CODE_FILE = 44,
  CODE_LAYER = 45,
  BRUSH = 46,
  MANAGED_STRING = 47,
  TRANSFORM = 48,
  CMS_RICH_TEXT = 49,
  REPEATER = 50,
  JSX = 51,
  EMBEDDED_PROTOTYPE = 52,
  REACT_FIBER = 53,
  RESPONSIVE_NODE_SET = 54,
  WEBPAGE = 55,
}

/**
 * TrackType (original: $$d18)
 */
export enum TrackType {
  IGNORE = 0,
  TRACK = 1,
}

/**
 * BuildStatus (original: $$c141)
 */
export enum BuildStatus {
  NONE = 0,
  BUILD = 1,
  COMPLETED = 2,
}

// original enums for reference
// export enum $$n143 { ... }
// export enum $$i105 { ... }
// export enum $$a52 { ... }
// export enum $$s95 { ... }
// export enum $$o50 { ... }
// export enum $$l63 { ... }
// export enum $$d18 { ... }
// export enum $$c141 { ... }
/**
 * AutoLayoutAlignment (original: $$u51)
 */
export enum AutoLayoutAlignment {
  NONE = 0,
  AUTO = 1,
  TOP = 2,
  LEFT = 3,
  BOTTOM = 4,
  RIGHT = 5,
  CENTER = 6,
  EDGE = 7,
  ABSOLUTE = 8,
}
// $$u51

/**
 * NodePropertyType (original: $$p27)
 */
export enum NodePropertyType {
  FILL = 0,
  STROKE = 1,
  WIDTH = 2,
  HEIGHT = 3,
  MIN_WIDTH = 4,
  MIN_HEIGHT = 5,
  MAX_WIDTH = 6,
  MAX_HEIGHT = 7,
  STROKE_WIDTH = 8,
  CORNER_RADIUS = 9,
  EFFECT = 10,
  TEXT_STYLE = 11,
  TEXT_ALIGN_HORIZONTAL = 12,
  FONT_FAMILY = 13,
  FONT_SIZE = 14,
  FONT_WEIGHT = 15,
  LINE_HEIGHT = 16,
  LETTER_SPACING = 17,
  STACK_SPACING = 18,
  STACK_PADDING = 19,
  STACK_MODE = 20,
  STACK_ALIGNMENT = 21,
  OPACITY = 22,
  COMPONENT = 23,
  FONT_STYLE = 24,
  GRID_ROW_GAP = 25,
  GRID_COLUMN_GAP = 26,
  GRID_ROW_COUNT = 27,
  GRID_COLUMN_COUNT = 28,
  GRID_ROW_ANCHOR_INDEX = 29,
  GRID_COLUMN_ANCHOR_INDEX = 30,
  GRID_ROW_SPAN = 31,
  GRID_COLUMN_SPAN = 32,
}
// $$p27

/**
 * ColorSwatch (original: $$_46)
 */
export enum ColorPalette {
  YELLOW = 0,
  ORANGE = 1,
  RED = 2,
  PINK = 3,
  VIOLET = 4,
  BLUE = 5,
  TEAL = 6,
  GREEN = 7,
}
// $$_46

/**
 * IssueCategory (original: $$h7)
 */
export enum IssueCategory {
  NONE = 0,
  ACCESSIBILITY = 1,
  BEHAVIOR = 2,
  CONTENT = 3,
  DEVELOPMENT = 4,
  INTERACTION = 5,
}
// $$h7

/**
 * VerticalPosition (original: $$m64)
 */
export enum VerticalPosition {
  TOP = 0,
  BOTTOM = 1,
  LEFT = 2,
  RIGHT = 3,
}
// $$m64

/**
 * AssetSource (original: $$g3)
 */
export enum AssetSource {
  LOCAL = 0,
  LIBRARY = 1,
}
// $$g3

/**
 * ComponentType (original: $$E80)
 */
export enum ComponentType {
  COMPONENT = 0,
  STATE_GROUP = 1,
}
// $$E80


/**
 * UnitType (original: $$T76)
 */
export enum UnitType {
  RAW = 0,
  PIXELS = 1,
  PERCENT = 2,
}

/**
 * PaintType (original: $$I44)
 */
export enum PaintType {
  FILL = 0,
  STROKE = 1,
  BACKGROUND__NO_LONGER_USED = 2,
  TEXT = 3,
  EFFECT = 4,
  GRID = 5,
  DEPRECATED_STROKE = 6,
  NOT_SUPPORTED = 7,
}

/**
 * TextEditAction (original: $$S78)
 */
export enum TextEditAction {
  TOGGLE_BOLD = 0,
  INCREASE_BOLD = 1,
  DECREASE_BOLD = 2,
  TOGGLE_ITALIC = 3,
  TOGGLE_UNDERLINE = 4,
  TOGGLE_STRIKETHROUGH = 5,
  REMOVE_DECORATION = 6,
  SET_ORIGINAL_CASE = 7,
  SET_UPPER_CASE = 8,
  SET_LOWER_CASE = 9,
  SET_TITLE_CASE = 10,
  INCREASE_LETTER_SPACING = 11,
  DECREASE_LETTER_SPACING = 12,
  INCREASE_LINE_HEIGHT = 13,
  DECREASE_LINE_HEIGHT = 14,
}

/**
 * ChangeType (original: $$A29)
 */
export enum ChangeType {
  NONE = 0,
  CREATED = 1,
  EDITED = 2,
  REMOVED = 3,
  INDIRECTLY_EDITED = 4,
  AFFECTED = 5,
  LIBRARY_UPDATES = 6,
}

/**
 * PropertyScope (original: $$x92)
 */
export enum PropertyScope {
  ALL_SCOPES = 0,
  TEXT_CONTENT = 1,
  CORNER_RADIUS = 2,
  WIDTH_HEIGHT = 3,
  GAP = 4,
  ALL_FILLS = 5,
  FRAME_FILL = 6,
  SHAPE_FILL = 7,
  TEXT_FILL = 8,
  STROKE = 9,
  STROKE_FLOAT = 10,
  EFFECT_FLOAT = 11,
  EFFECT_COLOR = 12,
  OPACITY = 13,
  FONT_STYLE = 14,
  FONT_FAMILY = 15,
  FONT_SIZE = 16,
  LINE_HEIGHT = 17,
  LETTER_SPACING = 18,
  PARAGRAPH_SPACING = 19,
  PARAGRAPH_INDENT = 20,
  FONT_VARIATIONS = 21,
}

/**
 * PlatformType (original: $$N136)
 */
export enum PlatformType {
  WEB = 0,
  ANDROID = 1,
  iOS = 2,
}

/**
 * LayoutTabType (original: $$C101)
 */
export enum LayoutTabType {
  DESIGN_LAYOUT = 0,
  WHITEBOARD_LAYOUT = 1,
  VECTOR = 2,
  TEXT = 3,
  RASTER = 4,
  GRADIENT = 5,
  PLACE_IMAGE = 6,
  HISTORY = 7,
  PREVIEW = 8,
  COMMENTS = 9,
  BRANCHING = 10,
  DEV_HANDOFF = 11,
  COMPARE_CHANGES = 12,
  LIBRARY = 13,
  DEV_HANDOFF_HISTORY = 14,
  SLIDE_LAYOUT = 15,
  MAGIC_LINK = 16,
  BUZZ_LAYOUT = 17,
  PROGRESSIVE_BLUR = 18,
  COOPER_BULK_CREATE = 19,
  CMS_BINDING_CONSTRAINED = 20,
  SITES_LAYOUT = 21,
}

/**
 * DistributionType (original: $$O108)
 */
export enum DistributionType {
  STRETCH = 0,
  SCATTER = 1,
}

/**
 * ChatMessageType (original: $$R23)
 */
export enum ChatMessageType {
  USER_MESSAGE = 0,
  ASSISTANT_MESSAGE = 1,
  TOOL_MESSAGE = 2,
  SYSTEM_MESSAGE = 3,
}

/**
 * TextBlockType (original: $$L85)
 */
export enum TextBlockType {
  HEADING1 = 0,
  HEADING2 = 1,
  HEADING3 = 2,
  HEADING4 = 3,
  HEADING5 = 4,
  HEADING6 = 5,
  PARAGRAPH = 6,
  LINK = 7,
  BLOCKQUOTE = 8,
}

/**
 * SnapshotStatus (original: $$P30)
 */
export enum SnapshotStatus {
  INITIAL = 0,
  SNAPSHOTTING = 1,
  OK = 2,
  SNAPSHOT_ERROR = 3,
  LLM_IN_PROGRESS = 4,
}

/**
 * ChatRole (original: $$D106)
 */
export enum ChatRole {
  USER = 0,
  ASSISTANT = 1,
  TOOL = 2,
  SYSTEM = 3,
}

/**
 * ClipboardContentType (original: $$k13)
 */
export enum ClipboardContentType {
  INVALID = 0,
  TEXT = 1,
  SELECTED_NODE_IDS = 2,
}

/**
 * LayoutSizingType (original: $$M117)
 */
export enum LayoutSizingType {
  FLEX = 0,
  FIXED = 1,
  HUG = 2,
}

/**
 * SideType (original: $$F71)
 */
export enum SideType {
  LEFT = 0,
  RIGHT = 1,
}

/**
 * NodePropertyCategory (original: $$j116)
 */
export enum NodePropertyCategory {
  NONE = 0,
  FILL = 1,
  STROKE = 2,
  STROKE_PRESET = 3,
  EFFECT = 4,
  EXPORT = 5,
  LAYOUT_GRID = 6,
  PLUGIN = 7,
  PROTOTYPE_INTERACTION = 8,
  PROTOTYPE_INHERITED_INTERNAL_INTERACTION = 9,
  PROTOTOTYPE_STARTING_POINT = 10,
  BEHAVIOR = 11,
  TRANSFORM_MODIFIER = 12,
  COMPONENT_PROP_ASSIGNMENT = 13,
}

/**
 * ComponentPropType (original: $$U21)
 */
export enum ComponentPropType {
  NONE = 0,
  BOOL = 1,
  TEXT = 2,
  INSTANCE_SWAP = 3,
  VARIANT = 4,
  NUMBER = 5,
  IMAGE = 6,
  SLOT = 7,
}

/**
 * VariableSetErrorType (original: $$B126)
 */
export enum VariableSetErrorType {
  NONE = 0,
  UNUSED_DEF_ERROR = 1,
  CONFLICTING_NAMES_ERROR = 2,
  CONFLICTING_NAMES_WITH_VARIANT_ERROR = 3,
}

/**
 * StateGroupErrorType (original: $$G72)
 */
export enum StateGroupErrorType {
  NONE = 0,
  TOO_MANY_STATES_ERROR = 1,
  MISSING_PROPERTIES_ERROR = 2,
  DUPLICATE_STATE_ERROR = 3,
  PARSE_ERROR = 4,
}

/**
 * SymbolOverrideType (original: $$V62)
 */
export enum SymbolOverrideType {
  OVERRIDES_FOR_LAYER_AND_SUBLAYERS = 0,
  EXPORTS = 1,
  EFFECTS = 2,
  LAYER = 3,
  VISIBLE = 4,
  NAME = 5,
  FILL = 6,
  STROKE = 7,
  TEXT = 8,
  TEXT_STYLE = 9,
  SIZE = 10,
  OVERRIDDEN_SYMBOL = 11,
  PROTOTYPE_INTERACTIONS = 12,
  OVERLAY = 13,
  NUM_VALUES = 14,
}

/**
 * VisibilityCondition (original: $$H56)
 */
export enum VisibilityCondition {
  ALWAYS = 0,
  ONLY_WHEN_NOT_EMPTY = 1,
  ONLY_WHEN_NOT_DISABLED = 2,
}
/**
 * FillType (original: $$z66)
 */
export enum FillType {
  "SOLID" = 0,
  "TRANSPARENT" = 1,
  "GRID" = 2,
}

/**
 * WorkspaceType (original: $$W69)
 */
export enum WorkspaceType {
  "DESIGN" = 0,
  "WHITEBOARD" = 1,
  "SLIDES" = 2,
  "DEV_HANDOFF" = 3,
  "SITES" = 4,
  "COOPER" = 5,
  "ILLUSTRATION" = 6,
  "FIGMAKE" = 7,
}

/**
 * ContainerType (original: $$K54)
 */
export enum ContainerType {
  "NONE" = 0,
  "FRAME" = 1,
  "GROUP" = 2,
  "STACK" = 3,
  "SECTION" = 4,
  "RESPONSIVE_SET" = 5,
  "TRANSFORM" = 6,
  "GRID" = 7,
}

/**
 * LayoutSizingMode (original: $$$103)
 */
export enum LayoutSizingMode {
  "FIXED" = 0,
  "HUG_CONTENT" = 1,
  "FILL_CONTAINER" = 2,
}

/**
 * PointerAction (original: $$X99)
 */
export enum PointerAction {
  "CLICK" = 0,
  "DRAG" = 1,
}

/**
 * Side (original: $$q84)
 */
export enum Side {
  "TOP" = 0,
  "RIGHT" = 1,
  "BOTTOM" = 2,
  "LEFT" = 3,
}

/**
 * LayoutDirection (original: $$J86)
 */
export enum LayoutDirection {
  "ROW" = 0,
  "COLUMN" = 1,
}

/**
 * NavigationDirection (original: $$Z0)
 */
export enum NavigationDirection {
  "FORWARD" = 0,
  "BACKWARD" = 1,
}

/**
 * DuplicateType (original: $$ee47)
 */
export enum DuplicateType {
  "BLANK" = 0,
  "DUPLICATE" = 1,
}

/**
 * LibraryType (original: $$et38)
 */
export enum LibraryType {
  "LOCAL" = 0,
  "SUBSCRIBED" = 1,
}

/**
 * FacetType (original: $$er42)
 */
export enum FacetType {
  "NONE" = 0,
  "STATE_GROUP" = 1,
  "STYLE" = 2,
  "SYMBOL" = 3,
  "VARIABLE" = 4,
  "VARIABLE_SET" = 5,
  "VARIABLE_OVERRIDE" = 6,
  "MODULE" = 7,
  "RESPONSIVE_SET" = 8,
  "CONSTRAINED_TEMPLATE" = 9,
  "CODE_LIBRARY" = 10,
  "CODE_FILE" = 11,
  "CODE_COMPONENT" = 12,
  "BRUSH" = 13,
  "MANAGED_STRING" = 14,
}

/**
 * TextOverflowType (original: $$en131)
 */
export enum TextOverflowType {
  "TextOverflow" = 0,
}

/**
 * FontSourceType (original: $$ea94)
 */
export enum FontSourceType {
  "LOCAL" = 0,
  "GOOGLE" = 1,
  "SHARED" = 2,
}

/**
 * ImageFillMode (original: $$es110)
 */
export enum ImageFillMode {
  "FILL" = 0,
  "FIT" = 1,
  "STRETCH" = 2,
  "TILE" = 3,
}

/**
 * ImageExportType (original: $$eo32)
 */
export enum ImageExportType {
  "NON_ANIMATED_ONLY" = 0,
  "LOW_RES_ONLY" = 1,
  "ALL" = 2,
}

/**
 * UploadStatus (original: $$el77)
 */
export enum UploadStatus {
  "SUCCESS" = 0,
  "UNSUPPORTED_MEDIA" = 1,
  "OTHER_FAILURE" = 2,
}

/**
 * PresetType (original: $$ed57)
 */
export enum PresetType {
  "NONE" = 0,
  "PRESET" = 1,
  "CUSTOM" = 2,
  "PRESENTATION" = 3,
}

/**
 * ExportScope (original: $$ec70)
 */
export enum ExportScope {
  "ALL" = 0,
  "BASE_SCREENS" = 1,
  "SCROLL_TO" = 2,
  "STATES" = 3,
  "RESPONSIVE_SETS" = 4,
}

/**
 * RotationType (original: $$eu135)
 */
export enum RotationType {
  "NONE" = 0,
  "CCW_90" = 1,
}

/**
 * AnimationTriggerType (original: $$ep100)
 */
export enum AnimationTriggerType {
  "TRIGGER" = 0,
  "AFTER_PREVIOUS" = 1,
}

/**
 * RichTextType (original: $$e_73)
 */
export enum RichTextType {
  "PLAIN" = 0,
  "ORDERED_LIST" = 1,
  "UNORDERED_LIST" = 2,
  "BLOCKQUOTE" = 3,
  "HEADER" = 4,
}

/**
 * TextDirection (original: $$eh11)
 */
export enum TextDirection {
  "LTR" = 0,
  "RTL" = 1,
}

/**
 * TextDecorationType (original: $$em123)
 */
export enum TextDecorationType {
  "NONE" = 0,
  "SEMANTIC_WEIGHT" = 1,
  "SEMANTIC_ITALIC" = 2,
  "TEXT_DECORATION" = 3,
  "HYPERLINK" = 4,
  "TEXT_DECORATION_THICKNESS" = 5,
  "TEXT_UNDERLINE_OFFSET" = 6,
  "TEXT_DECORATION_SKIP_INK" = 7,
  "TEXT_DECORATION_FILL_PAINT_DATA" = 8,
  "TEXT_DECORATION_STYLE" = 9,
  "FONT_VARIANT_POSITION" = 10,
}

/**
 * ThemeType (original: $$eg68)
 */
export enum ThemeType {
  "FIGJAM_DARK" = 0,
  "DRACULA" = 1,
  "DUOTONE_SEA" = 2,
  "DUOTONE_SPACE" = 3,
  "DUOTONE_EARTH" = 4,
  "DUOTONE_FOREST" = 5,
  "DUOTONE_LIGHT" = 6,
}

/**
 * StrokeAlignment (original: $$ef37)
 */
export enum StrokeAlignment {
  "CENTER" = 0,
  "INSIDE" = 1,
  "OUTSIDE" = 2,
}

/**
 * SelectionMode (original: $$eE114)
 */
export enum SelectionMode {
  "BOX" = 0,
  "PICK" = 1,
}

/**
 * AppMode (original: $$ey67)
 */
export enum AppMode {
  "NONE" = 0,
  "FIGJAM" = 1,
  "VIEWER" = 2,
  "DESIGN" = 3,
  "SLIDES" = 4,
}

/**
 * BooleanOperationType (original: $$eT36)
 */
export enum BooleanOperationType {
  "UNION" = 0,
  "SUBTRACT" = 1,
  "INTERSECT" = 2,
  "XOR" = 3,
}

/**
 * ConnectorType (original: $$eI43)
 */
export enum ConnectorType {
  "ELBOWED" = 0,
  "STRAIGHT" = 1,
  "CURVED" = 2,
}

/**
 * StickyWidgetType (original: $$eS20)
 */
export enum StickyWidgetType {
  "SWT_CREATED" = 0,
  "SWT_DELETED" = 1,
  "SWT_EDITED" = 2,
  "SWT_RESIZED" = 3,
  "STICKY_DELETED" = 4,
  "STICKY_EDITED" = 5,
  "STICKY_RESIZED" = 6,
}

/**
 * ThemeMode (original: $$eA142)
 */
export enum ThemeMode {
  "LIGHT" = 0,
  "DARK" = 1,
}

/**
 * ThemeColorStatus (original: $$ex112)
 */
export enum ThemeColorStatus {
  "NO_THEME_COLORS" = 0,
  "NONE_AVAILABLE" = 1,
  "SWAPPED" = 2,
  "NO_THEME_FOUND" = 3,
}

/**
 * AnimationEventType (original: $$eN124)
 */
export enum AnimationEventType {
  "ON_CLICK" = 0,
  "AFTER_DELAY" = 1,
}

/**
 * SlideTransitionType (original: $$eC127)
 */
export enum SlideTransitionType {
  "NONE" = 0,
  "DISSOLVE" = 1,
  "SLIDE_FROM_LEFT" = 2,
  "SLIDE_FROM_RIGHT" = 3,
  "SLIDE_FROM_TOP" = 4,
  "SLIDE_FROM_BOTTOM" = 5,
  "PUSH_FROM_LEFT" = 6,
  "PUSH_FROM_RIGHT" = 7,
  "PUSH_FROM_TOP" = 8,
  "PUSH_FROM_BOTTOM" = 9,
  "MOVE_FROM_LEFT" = 10,
  "MOVE_FROM_RIGHT" = 11,
  "MOVE_FROM_TOP" = 12,
  "MOVE_FROM_BOTTOM" = 13,
  "SLIDE_OUT_TO_LEFT" = 14,
  "SLIDE_OUT_TO_RIGHT" = 15,
  "SLIDE_OUT_TO_TOP" = 16,
  "SLIDE_OUT_TO_BOTTOM" = 17,
  "MOVE_OUT_TO_LEFT" = 18,
  "MOVE_OUT_TO_RIGHT" = 19,
  "MOVE_OUT_TO_TOP" = 20,
  "MOVE_OUT_TO_BOTTOM" = 21,
  "SMART_ANIMATE" = 22,
}

/**
 * PanelType (original: $$ew33)
 */
export enum PanelType {
  "FILE" = 0,
  "CODE" = 1,
  "DAKOTA" = 2,
  "SETTINGS" = 3,
  "INSERT" = 4,
}

/**
 * InsertErrorType (original: )
 */
export enum  InsertErrorType{
  "MORE_THAN_ONE_HIGHLEVEL_NODE_FOUND" = 0,
  "INSERTED_NODES_TOO_LARGE" = 1,
  "MAXIMUM_ATTACHMENTS_EXCEEDED" = 2,
  "USER_PASTED_FIGMA_LINK_IN_CHAT" = 3,
  "DESIGN_2_REACT_OTHER" = 4,
  "DESIGN_2_REACT_STATE_GROUP" = 5,
  "OTHER" = 6,
}

/**
 * EqualityType (original: $$eR5)
 */
export enum EqualityType {
  "EQUALS" = 0,
}

/**
 * MatchType (original: $$eL96)
 */
export enum MatchType {
  "MATCH_ALL" = 0,
  "MATCH_ANY" = 1,
}

/**
 * FieldType (original: $$ej31)
 */
export enum FieldType {
  "TEXT" = 0,
  "DATE" = 1,
  "TIME" = 2,
  "NUMBER" = 3,
}

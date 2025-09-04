// Type definitions for NodeFactory and related classes
// This file contains all type definitions extracted from 472793.ts

// === Core Type Interfaces ===

export interface ComponentProps {
  componentId?: string
  sharedPluginData?: Record<string, string>
  pluginData?: Record<string, string>
  componentProps?: any
  nestedInstancesVisibility?: Record<string, boolean>
  componentPropsNested?: Record<string, any>
}

export interface Color {
  r: number
  g: number
  b: number
  a?: number

}
export interface PaintStyle {
  type: string
  color?: Color
  visible: any
  opacity: any
  blendMode: any
  colorVar?: {
    id: string
    name: string
  } | {
    dataType: string
    resolvedDataType: string
    value: {
      alias: any
    }
  }
}

export interface SolidPaint extends PaintStyle {
  type: 'SOLID'
  colorVar?: {
    id: string
    name: string
  } | {
    dataType: string
    resolvedDataType: string
    value: {
      alias: any
    }
  }
}

export interface GradientPaint extends PaintStyle {
  type: 'GRADIENT_LINEAR' | 'GRADIENT_RADIAL' | 'GRADIENT_ANGULAR' | 'GRADIENT_DIAMOND'
  transform?: any
  stops?: Array<{
    color: any
    position: number
    boundVariables?: {
      color?: VariableAlias
    }
  }>
  stopsVar?: Array<{
    color: any
    position: number
    colorVar?: any
  }>
  gradientStops?: Array<{
    color: any
    position: number
    boundVariables?: {
      color?: VariableAlias
    }
  }>
  gradientTransform?: any[][]
}

export interface ImagePaint extends PaintStyle {
  type: 'IMAGE'
  imageScaleMode?: string
  transform?: any
  paintFilter?: any
  scale?: number
  scalingFactor?: number
  rotation?: number
  scaleMode?: string
  imageTransform?: any[][]
  animatedImage?: any
  filters?: any
  image?: any
  imageHash?: string | null
}

export interface VideoPaint extends PaintStyle {
  type: 'VIDEO'
  animatedImage?: any
  loop?: boolean
  autoPlay?: boolean
  imageScaleMode?: string
  transform?: any
  paintFilter?: any
  scale?: number
  scalingFactor?: number
  rotation?: number
  scaleMode?: string
  videoTransform?: any[][]
  imageTransform?: any[][]
  filters?: any
  image?: any
  video?: any
  videoHash?: string | null
}

export interface PatternPaint extends PaintStyle {
  type: 'PATTERN'
  sourceNodeId?: { sessionID: number, localID: number }
  patternTileType?: string
  scale?: number
  scalingFactor?: number
  patternSpacing?: { x: number, y: number }
  spacing?: { x: number, y: number }
  horizontalAlignment: string
  verticalAlignment: string
  tileType?: string
}

export interface NavigationAction {
  type: string
  destination?: string
  transition?: any
  preserveScrollPosition?: boolean
  url?: string
  overlay?: any
  destinationId?: string | null
  overlayRelativePosition?: { x: number, y: number }
  navigation?: string | null
  resetVideoPosition?: boolean
  resetScrollPosition?: boolean
  mediaAction?: string
  skipAmount?: number
  newTimestamp?: number
  conditionalBlocks?: ActionGroup[]
  variableId?: string | null
  variableValue?: any
  variableCollectionId?: string | null
  variableModeId?: string | null
  openInNewTab?: boolean
  resetInteractiveComponents?: any
}

export interface ConditionalAction {
  condition?: any
  actions: NavigationAction[]
}

export interface ActionGroup {
  condition?: any
  actions: NavigationAction[]
}

export interface TriggerEvent {
  type: string
  timeout?: number
  delay?: number
  device?: string
  keyCodes?: string[]
  mediaHitTime?: number
  deprecatedVersion?: boolean
}

export interface InteractionReaction {
  action: NavigationAction | null
  actions: NavigationAction[]
  trigger: TriggerEvent | null
}

export interface BuildStatus {
  NONE: string
  [key: string]: any
}

export interface SourceType {
  PLUGIN: string
  [key: string]: any
}

export interface ExportSetting {
  format: any
  suffix: any
  contentsOnly: boolean
  colorProfile?: string
  useAbsoluteBounds?: boolean
  constraint?: {
    type: string
    value: number
  }
  svgOutlineText?: boolean
  svgIdAttribute?: boolean
  svgSimplifyStroke?: boolean
}

export interface ConnectorEndpoint {
  endpointNodeId: any
  position?: {
    x: number
    y: number
  }
  magnet?: any
}

export interface VariableAlias {
  type: 'VARIABLE_ALIAS'
  id: string
}

// Add the missing LayoutGrid interfaces here
export interface BaseLayoutGrid {
  visible?: boolean
  color?: Color
}

export interface StripLayoutGridBase extends BaseLayoutGrid {
  pattern: 'COLUMNS' | 'ROWS'
  gutterSize: number
  count: number
  offset: number
  boundVariables?: {
    gutterSize?: VariableAlias
    count?: VariableAlias
    sectionSize?: VariableAlias
    offset?: VariableAlias
  }
}

export interface StripLayoutGridMinMax extends StripLayoutGridBase {
  alignment: 'MIN' | 'MAX'
  sectionSize: number
}

export interface StripLayoutGridStretch extends StripLayoutGridBase {
  alignment: 'STRETCH'
}

export interface StripLayoutGridCenter extends StripLayoutGridBase {
  alignment: 'CENTER'
  sectionSize: number
}

export interface GridLayoutGrid extends BaseLayoutGrid {
  pattern: 'GRID'
  sectionSize: number
  boundVariables?: {
    sectionSize?: VariableAlias
    offset?: VariableAlias
    count?: VariableAlias
    gutterSize?: VariableAlias
  }
}

export type LayoutGrid
  = | StripLayoutGridMinMax
  | StripLayoutGridStretch
  | StripLayoutGridCenter
  | GridLayoutGrid

export type LayoutGrids = LayoutGrid[]
export interface GridLayoutConfig {
  pattern: string
  axis?: string
  numSections?: number
  type?: any
  gutterSize?: any
  sectionSize?: any
  offset?: any
  visible: boolean
  color: Color
  numSectionsVar?: any
  sectionSizeVar?: any
  offsetVar?: any
  gutterSizeVar?: any
  boundVariables?: VariableAlias
  alignment?: string  
  count?: number
}
export interface TransitionData {
  type: string
  direction?: string | null
  matchLayers?: boolean
  easing?: EasingData
  duration?: number
}

export interface EasingData {
  type: string
  easingFunctionCubicBezier?: {
    x1: number
    y1: number
    x2: number
    y2: number
  }
  easingFunctionSpring?: {
    mass: number
    stiffness: number
    damping: number
  }
}

export interface PropertyDefinition {
  type: string
  defaultValue?: any
  variantOptions?: string[]
  preferredValues?: any[]
}

export interface ComponentPropertyDefinitions {
  [key: string]: PropertyDefinition
}

export interface VectorRegion {
  windingRule: any
  loops: any
  fillStyleRef?: string
  fillStyleId?: string
  fillPaints?: {
    data: any[]
  }
  fills?: any[]
}

export interface VariableInfo {
  id: string
  name: string
  description?: string
  type: string
  scopes: string[]
  hiddenFromPublishing?: boolean
  valuesByMode: Record<string, any>
  remote?: boolean
  key?: string
  variableCollectionId?: string
}

export interface VariableCollectionInfo {
  id: string
  name: string
  key?: string
  description?: string
  remote?: boolean
  hiddenFromPublishing?: boolean
  modes: Array<{
    modeId: string
    name: string
  }>
  defaultModeId: string
  variables: VariableInfo[]
}

export interface DropEvent {
  clientX: number
  clientY: number
  dataTransfer: {
    types: readonly string[]
    getData: (format: string) => string
  }
  files: FileList
  dropMetadata: Array<{
    kind: string
    type: string
    data?: string
  }>
}

export interface ChangeRecord {
  id: string
  origin: string
  type: string
  properties: string[]
  style?: any
  node?: any
}

export interface DocumentChange {
  documentChanges: ChangeRecord[]
}

export interface StyleChange {
  styleChanges: ChangeRecord[]
}

export interface NodeChange {
  nodeChanges: ChangeRecord[]
}

export interface PluginMessage {
  type: string
  data?: any
  [key: string]: any
}

export interface LoadedFont {
  family: string
  style: string
}

// === Node Type Interfaces ===

export interface BaseNode {
  id: string
  type: string
  name: string
  visible: boolean
  locked: boolean
  parent?: BaseNode
  children?: BaseNode[]
  pluginData?: Record<string, string>
  sharedPluginData?: Record<string, Record<string, string>>
  removed?: boolean
}

export interface SceneNode extends BaseNode {
  x: number
  y: number
  width: number
  height: number
  rotation: number
  layoutAlign?: string
  layoutGrow?: number
  constraints?: {
    horizontal: string
    vertical: string
  }
  layoutSizingHorizontal?: string
  layoutSizingVertical?: string
  fills?: any[]
  strokes?: any[]
  strokeWeight?: number
  strokeAlign?: string
  strokeCap?: string
  strokeJoin?: string
  strokeDashes?: number[]
  cornerRadius?: number | number[]
  effects?: any[]
  opacity?: number
  blendMode?: string
  absoluteTransform?: number[][]
  relativeTransform?: number[][]
  size?: { width: number, height: number }
  absoluteBoundingBox?: {
    x: number
    y: number
    width: number
    height: number
  }
  exportSettings?: ExportSetting[]
  reactions?: InteractionReaction[]
}

export interface DocumentNode extends BaseNode {
  type: 'DOCUMENT'
  children: PageNode[]
}

export interface PageNode extends SceneNode {
  type: 'PAGE'
  children: SceneNode[]
  backgrounds?: any[]
  prototypeStartNode?: SceneNode | null
  prototypeBackgrounds?: any[]
  flowStartingPoints?: any[]
}

export interface FrameNode extends SceneNode {
  type: 'FRAME' | 'COMPONENT' | 'COMPONENT_SET' | 'INSTANCE'
  children: SceneNode[]
  layoutMode?: string
  primaryAxisSizingMode?: string
  counterAxisSizingMode?: string
  primaryAxisAlignItems?: string
  counterAxisAlignItems?: string
  paddingLeft?: number
  paddingRight?: number
  paddingTop?: number
  paddingBottom?: number
  itemSpacing?: number
  backgrounds?: any[]
  backgroundStyleId?: string
  clipsContent?: boolean
  guides?: any[]
  gridStyleId?: string
  layoutGrids?: any[]
  overflowDirection?: string
  numberOfFixedChildren?: number
  overlayPositionType?: string
  overlayBackground?: any
  overlayBackgroundInteraction?: string
}

export interface GroupNode extends SceneNode {
  type: 'GROUP'
  children: SceneNode[]
  backgrounds?: any[]
  backgroundStyleId?: string
  expanded?: boolean
}

export interface ComponentNode extends FrameNode {
  type: 'COMPONENT'
  variantProperties?: Record<string, string>
  componentPropertyDefinitions?: ComponentPropertyDefinitions
  description?: string
  documentationLinks?: Array<{
    uri: string
    name?: string
  }>
  remote?: boolean
  key?: string
  instances?: InstanceNode[]
}

export interface ComponentSetNode extends FrameNode {
  type: 'COMPONENT_SET'
  variantGroupProperties?: Record<string, { values: string[] }>
  componentPropertyDefinitions?: ComponentPropertyDefinitions
  description?: string
  documentationLinks?: Array<{
    uri: string
    name?: string
  }>
  remote?: boolean
  key?: string
  defaultVariant?: ComponentNode
}

export interface InstanceNode extends FrameNode {
  type: 'INSTANCE'
  componentId?: string
  componentProperties?: Record<string, any>
  variantProperties?: Record<string, string>
  exposedInstances?: InstanceNode[]
  overrides?: Record<string, any>
  isExposedInstance?: boolean
  swapComponent?: (componentNode: ComponentNode) => void
  detachInstance?: () => FrameNode
  setProperties?: (properties: Record<string, any>) => void
  resetOverrides?: () => void
}

export interface VectorNode extends SceneNode {
  type: 'VECTOR' | 'STAR' | 'LINE' | 'ELLIPSE' | 'POLYGON' | 'RECTANGLE'
  vectorNetwork?: any
  vectorPaths?: any[]
  handleMirroring?: string
  fillGeometry?: any[]
  strokeGeometry?: any[]
}

export interface StarNode extends VectorNode {
  type: 'STAR'
  pointCount?: number
  innerRadius?: number
}

export interface LineNode extends VectorNode {
  type: 'LINE'
}

export interface EllipseNode extends VectorNode {
  type: 'ELLIPSE'
  arcData?: {
    startingAngle: number
    endingAngle: number
    innerRadius: number
  }
}

export interface PolygonNode extends VectorNode {
  type: 'POLYGON'
  pointCount?: number
}

export interface RectangleNode extends VectorNode {
  type: 'RECTANGLE'
  topLeftRadius?: number
  topRightRadius?: number
  bottomLeftRadius?: number
  bottomRightRadius?: number
}

export interface TextNode extends SceneNode {
  type: 'TEXT'
  characters: string
  fontName?: {
    family: string
    style: string
  }
  fontSize?: number
  fontWeight?: number
  textDecoration?: string
  textCase?: string
  lineHeight?: { value: number, unit: string } | number
  letterSpacing?: { value: number, unit: string } | number
  textAlignHorizontal?: string
  textAlignVertical?: string
  textAutoResize?: string
  paragraphIndent?: number
  paragraphSpacing?: number
  autoRename?: boolean
  textStyleId?: string
  fillStyleId?: string
  strokeStyleId?: string
  textSegments?: any[]
  textDirection?: string
  hyperlink?: {
    type: string
    url?: string
    nodeId?: string
  }
  hasMissingFont?: boolean
}

export interface SliceNode extends SceneNode {
  type: 'SLICE'
}

export interface BooleanOperationNode extends SceneNode {
  type: 'BOOLEAN_OPERATION'
  children: SceneNode[]
  booleanOperation?: string
}

// === Factory and Runtime Interfaces ===

export interface VariableFactoryOptions {
  vm: VMInstance
  sceneGraph: any
  // Add other properties as needed based on actual usage
}

export interface VariableCollectionFactoryOptions {
  vm: VMInstance
  sceneGraph: any
  // Add other properties as needed based on actual usage
}

export interface AnnotationCategoryFactoryOptions {
  vm: VMInstance
  sceneGraph: any
  // Add other properties as needed based on actual usage
}

export interface NodeFactoryOptions {

  pluginID: string
  pluginVersionID: string
  imageStore: any
  videoStore: any
  getStyleFactory: () => any
  getVariableCollectionFactory: () => any
  documentAccessState: any
  mixedSentinel: any
  stats: any
  enableProposedApi: boolean
  isWidget: boolean
  widgetManager: any
  validatedPermissions: any
  editorType: string
  defineVmFunction: any
  defineVmIncrementalMethod: any
  defineVmProp: any
  defineVmIncrementalProp: any
  addEventHandlersTo: any
  incLoadingErrorLogger: IncLoadingErrorLogger
  openFileKey: string
  apiMode: any
  sceneGraph: any
  getNode: any
  getVariableNode: any
  getVariableCollectionNode: any
  getAnnotationCategory: any
  incrementalSafeApi: boolean
  allowIncrementalUnsafeApiCalls: boolean
  styleManager: any
  isPluginExemptFromPluginDataLimits: boolean
  enableResponsiveSetHierarchyMutations: boolean
}

export interface StyleFactoryOptions {
  vm: VMInstance
  stats: any
  pluginID: string
  pluginVersionID: string
  getNodeFactory: () => any
  getVariableCollectionFactory: () => any
  imageStore: any
  videoStore: any
  documentAccessState: any
  mixedSentinel: any
  enableProposedApi: boolean
  isWidget: boolean
  widgetManager: any
  validatedPermissions: any
  editorType: string
  defineVmFunction: any
  defineVmIncrementalMethod: any
  defineVmProp: any
  defineVmIncrementalProp: any
  addEventHandlersTo: any
  apiMode: any
  openFileKey: string
  getNode: any
  getVariableNode: any
  getVariableCollectionNode: any
  getAnnotationCategory: any
  sceneGraph: any
  incrementalSafeApi: boolean
  allowIncrementalUnsafeApiCalls: boolean
  styleManager: any
  isPluginExemptFromPluginDataLimits: boolean
  enableResponsiveSetHierarchyMutations: boolean
}

export interface IncLoadingErrorLoggerOptions {
  pluginID: string
  pluginVersionID: string
}

export interface PluginRuntimeOptions {
  pluginID: string
  pluginVersionID: string
  sceneGraph: any
  stats: any
  enableProposedApi: boolean
  incrementalSafeApi: boolean
  allowIncrementalUnsafeApiCalls: boolean
  validatedPermissions: any
  apiMode: any
  triggeredFrom: string
  openFileKey: string
  isPluginExemptFromPluginDataLimits: boolean
  enableResponsiveSetHierarchyMutations: boolean
}

export interface EventHandler {
  handler: (...args: any[]) => any
  once?: boolean
  pageGuid?: string
  type?: string
}

export interface ScheduledEvent {
  timeoutId: any
  eventType: string
}

export interface CallbackInfo {
  createPromiseCallback: (options: any) => any
}

export interface AnnotationCategoryFactoryOptions {
  vm: VMInstance
  sceneGraph: any
  // Add other properties as needed
}

// === Error and Logging Interfaces ===

export interface IncLoadingErrorLoggerOptions {
  pluginID: string
  editorType: any
  fileKey: string
  userId: string
}

export interface LogEntry {
  apiMethod: string
  pluginId: string
  editorType: string
  fileKey: string
  userId: string
}

// === VM and Runtime Bridge Interfaces ===

export interface VMInstance {
  vmType: string
  newObject: (prototype?: any) => any
  newArray: () => any
  newString: (value: string) => any
  newBoolean: (value: boolean) => any
  newNumber: (value: number) => any
  newUint8Array: (data: Uint8Array) => any
  newSymbol: (name: string) => any
  newJsxRenderer: (elements: any) => any
  undefined: any
  null: any
  $$null: any
  global: any
  setProp: (obj: any, key: string, value: any) => void
  getProp: (obj: any, key: string) => any
  setStringProp: (obj: any, key: string, value: string) => void
  getStringProp: (obj: any, key: string) => string
  getNumberProp: (obj: any, key: string) => number
  getBooleanProp: (obj: any, key: string) => boolean
  defineFunction: (obj: any, name: string, metricsKey: string, fn: (...args: any[]) => any) => void
  defineProp: (obj: any, name: string, descriptor: PropertyDescriptor) => void
  callFunction: (fn: any, thisArg: any, ...args: any[]) => any
  callConstructor: (constructor: any, ...args: any[]) => any
  isFunction: (value: any) => boolean
  isObject: (value: any) => boolean
  isString: (value: any) => boolean
  isArray: (value: any) => boolean
  isNull: (value: any) => boolean
  isUndefined: (value: any) => boolean
  isDestroyed: () => boolean
  isEqual: (a: any, b: any) => boolean
  typeof: (value: any) => string
  toString: (value: any) => string
  retainHandle: (handle: any) => void
  releaseHandle: (handle: any) => void
  deepWrap: (value: any) => any
  deepUnwrap: (value: any, preservePromises?: boolean) => any
  shallowFreezeObject: (obj: any) => void
  newPromise: () => { promise: any, resolve: (value: any) => void, reject: (reason: any) => void }
  registerPromise: (promise: Promise<any>) => Promise<any>
}

export interface RuntimeBridge {
  pluginID: string
  sendMessage: (message: any) => void
  addEventListener: (type: string, listener: (...args: any[]) => any) => void
  removeEventListener: (type: string, listener: (...args: any[]) => any) => void
}

// === Widget and UI Interfaces ===

export interface WidgetManagerOptions {
  vm: VMInstance
  pluginID: string
  runtimeBridge: RuntimeBridge
}

export interface UIHandle {
  postMessageToIframe: (message: any) => void
  close: () => void
  resize: (width: number, height: number) => void
  on: (event: string, callback: (...args: any[]) => any) => void
  off: (event: string, callback: (...args: any[]) => any) => void
}

// === Storage and Data Interfaces ===

export interface ImageStoreData {
  hash: string
  data: Uint8Array
  url?: string
}

export interface VideoStoreData {
  hash: string
  data: Uint8Array
  coverHash?: string
  coverThumbnailHash?: string
  url?: string
}

export interface DocumentAccessState {
  getIsIncrementalMode: () => boolean
  addLoadedPageIds: (pageIds: string[]) => void
  getLoadedPages: () => string[]
}

// === Style and Variable Management ===

export interface StyleManager {
  get: (styleId: string) => any
  create: (style: any) => string
  delete: (styleId: string) => void
  softDeleteStyle: (node: any) => void
  moveStyle: (styleNode: any, referenceNode: any, styleType: any) => string
  getAllLocalStyles: (styleType: any) => any[]
  moveFolder: (targetFolderName: string, referenceFolderName: string, styleType: any) => string
  localStyleToStyleKey: (localStyle: any) => { key: any, version: string }
  sceneGraph: any
  createStyle: (styleData: any) => string
}

export interface PaintStyleData {
  type: 'FILL'
  name: string
  description?: string
  paints: any[]
  remote?: boolean
  key?: string
}

export interface TextStyleData {
  type: 'TEXT'
  name: string
  description?: string
  fontName: {
    family: string
    style: string
  }
  fontSize: number
  textDecoration?: string
  textCase?: string
  lineHeight?: any
  letterSpacing?: any
  remote?: boolean
  key?: string
}

export interface EffectStyleData {
  type: 'EFFECT'
  name: string
  description?: string
  effects: any[]
  remote?: boolean
  key?: string
}

export interface GridStyleData {
  type: 'GRID'
  name: string
  description?: string
  layoutGrids: any[]
  remote?: boolean
  key?: string
}

// === Plugin API Method Types ===

export type APIMethod = (
  context: {
    vm: VMInstance
    defineVmFunction?: (obj: any, name: string, metricsKey: string, fn: (...args: any[]) => any) => void
    defineVmProp?: (obj: any, name: string, descriptor: PropertyDescriptor) => void
    getNode?: (id: string) => any
    getNodeFactory?: () => NodeFactory
    editorType?: any
    documentAccessState?: DocumentAccessState
  },
  handle: any
) => void

export interface APIMethodCollection {
  [key: string]: APIMethod
}

// === Utility and Helper Types ===

export type NodeType
  = | 'DOCUMENT'
  | 'PAGE'
  | 'FRAME'
  | 'GROUP'
  | 'COMPONENT'
  | 'COMPONENT_SET'
  | 'INSTANCE'
  | 'BOOLEAN_OPERATION'
  | 'VECTOR'
  | 'STAR'
  | 'LINE'
  | 'ELLIPSE'
  | 'POLYGON'
  | 'RECTANGLE'
  | 'TEXT'
  | 'TEXT_PATH'
  | 'SLICE'
  | 'STICKY'
  | 'HIGHLIGHT'
  | 'CODE_BLOCK'
  | 'SHAPE_WITH_TEXT'
  | 'CONNECTOR'
  | 'STAMP'
  | 'WIDGET'
  | 'EMBED'
  | 'LINK_UNFURL'
  | 'MEDIA'
  | 'SECTION'
  | 'WASHI_TAPE'
  | 'TABLE'
  | 'TABLE_CELL'
  | 'SLIDE'
  | 'SLIDE_GRID'
  | 'SLIDE_ROW'
  | 'INTERACTIVE_SLIDE_ELEMENT'
  | 'MODULE'
  | 'WEBPAGE'
  | 'CODE_INSTANCE'
  | 'REPEATER'
  | 'TRANSFORM_GROUP'
  | 'CMS_RICH_TEXT'

export type StyleType = 'FILL' | 'TEXT' | 'EFFECT' | 'GRID'

export type BlendMode
  = | 'NORMAL'
  | 'DARKEN'
  | 'MULTIPLY'
  | 'LINEAR_BURN'
  | 'COLOR_BURN'
  | 'LIGHTEN'
  | 'SCREEN'
  | 'LINEAR_DODGE'
  | 'COLOR_DODGE'
  | 'OVERLAY'
  | 'SOFT_LIGHT'
  | 'HARD_LIGHT'
  | 'DIFFERENCE'
  | 'EXCLUSION'
  | 'HUE'
  | 'SATURATION'
  | 'COLOR'
  | 'LUMINOSITY'

export type EventType
  = | 'selectionchange'
  | 'currentpagechange'
  | 'close'
  | 'run'
  | 'textreview'
  | 'documentchange'
  | 'stylechange'
  | 'nodechange'
  | 'open'
  | 'drop'
  | 'message'

// === Class Type Definitions ===

export interface VariableFactoryClass {
  new(options: VariableFactoryOptions): VariableFactory
}

export interface VariableCollectionFactoryClass {
  new(options: VariableCollectionFactoryOptions): VariableCollectionFactory
}

export interface VariableCollectionFactory {
  readonly vm: VMInstance
  readonly sceneGraph: any
  readonly variableCollectionPrototype: any
  readonly extendedVariableCollectionPrototype: any

  createVariableCollectionHandle: (id: string, sceneGraph: any) => any
  createNewVariableCollection: (name: string) => string
  getLocalVariableCollections: () => any
  getLibraryVariableCollectionsAsync: () => Promise<any>
  createNewExtendedVariableCollection: (name: string, parentId: string) => string
  createExtendedVariableCollectionHandle: (id: string) => any
  getOrUpsertVariableCollectionAsync: (key: string) => Promise<string>
}

export interface AnnotationCategoryFactoryClass {
  new(options: AnnotationCategoryFactoryOptions): AnnotationCategoryFactory
}
export interface AnnotationCategoryData {
  label: string
  properties: {type: string}[]
  categoryId: string | null
}

export interface AnnotationCategoryFactory {
  readonly vm: VMInstance
  readonly annotationCategoryPrototype: any
  readonly sceneGraph: any

  createAnnotationCategoryHandle: (id: string) => any
  getLocalAnnotationCategoriesAsync: () => Promise<any>
  getLocalAnnotationCategoryByIdAsync: (id: string) => Promise<any>
  createAnnotationCategoryAsync: (label: string, color: string) => Promise<any>
}

export interface VariableFactory {
  readonly vm: VMInstance
  readonly sceneGraph: any
  readonly variablePrototype: any

  createVariableHandle: (id: string, sceneGraph: any) => any
  createNewVariable: (name: string, collectionId: string, variableType: string) => string
  getLocalVariables: (variableType?: string) => any
  getSubscribedVariables: (variableType?: string) => any
  getVariablesInLibraryCollectionAsync: (collectionKey: string) => Promise<any>
  importByKeyAsync: (variableKey: string) => Promise<any>
}

export interface PluginSceneNodeAdapterClass {
  new(id: string, pluginNode: any, runtime: any): PluginSceneNodeAdapter
}

export interface PluginSceneNodeAdapter {
  readonly id: string
  readonly pluginNode: any
  readonly runtime: any
  readonly shimNode: any

  getId: () => string
  get children(): PluginSceneNodeAdapter[]
  getPluginNode: () => any
  getShimNode: () => any
  setComponentId: (componentId: string) => void
  setComponentProps: (props: ComponentProps) => void
  setPluginData: (key: string, value: string) => void
  setSharedPluginData: (namespace: string, key: string, value: string) => void
}

export interface NodeFactoryClass {
  new(vm: VMInstance, options: NodeFactoryOptions): NodeFactory
}

export interface NodeFactory {
  readonly cache: Map<string, any>
  readonly incLoadingErrorLogger: any
  readonly sceneGraph: any
  readonly vm: VMInstance
  readonly fullscreenEditorType: any

  // Prototype properties for different node types
  readonly documentNodePrototype: any
  readonly pageNodePrototype: any
  readonly sliceNodePrototype: any
  readonly frameNodePrototype: any
  readonly groupNodePrototype: any
  readonly componentNodePrototype: any
  readonly componentSetNodePrototype: any
  readonly instanceNodePrototype: any
  readonly booleanOperationNodePrototype: any
  readonly vectorNodePrototype: any
  readonly starNodePrototype: any
  readonly lineNodePrototype: any
  readonly ellipseNodePrototype: any
  readonly polygonNodePrototype: any
  readonly rectangleNodePrototype: any
  readonly textNodePrototype: any
  readonly textPathNodePrototype: any
  readonly transformNodePrototype: any
  readonly stickyNodePrototype: any
  readonly highlightNodePrototype: any
  readonly codeBlockNodePrototype: any
  readonly shapeWithTextNodePrototype: any
  readonly connectorNodePrototype: any
  readonly stampNodePrototype: any
  readonly textSublayerNodePrototype: any
  readonly alignableTextSublayerNodePrototype: any
  readonly labelSublayerNodePrototype: any
  readonly widgetNodePrototype: any
  readonly embedPrototype: any
  readonly linkUnfurlPrototype: any
  readonly mediaPrototype: any
  readonly sectionPrototype: any
  readonly washiTapeNodePrototype: any
  readonly tableNodePrototype: any
  readonly tableCellNodePrototype: any
  readonly slideNodePrototype: any
  readonly slideGridNodePrototype: any
  readonly slideRowNodePrototype: any
  readonly flappNodePrototype: any
  readonly moduleNodePrototype: any
  readonly webpageNodePrototype: any
  readonly codeLayerNodePrototype: any
  readonly repeaterNodePrototype: any
  readonly cmsRichTextNodePrototype: any

  addTypeToPrototype: (prototype: any, type: NodeType) => void
  createVMObject: (nodeType: NodeType) => any
  inSlides: () => boolean
  inBuzz: () => boolean
  createSublayerVMObject: (sublayerType: string, nodeType: NodeType) => any
  createNode: (guid: string, context: string) => any
  createNodeByGuid: (guid: string, context: string) => any
  nodeIds: () => string[]
}

export interface StyleFactoryClass {
  new(options: StyleFactoryOptions): StyleFactory
}

export interface StyleFactory {
  readonly cache: Map<string, any>
  readonly vm: VMInstance
  readonly pluginId: string
  readonly styleManager: StyleManager
  readonly paintStylePrototype: any
  readonly textStylePrototype: any
  readonly effectStylePrototype: any
  readonly gridStylePrototype: any

  createStyle: (styleId: string) => any
  getStyleById: (styleId: string) => any
  importStyleByKeyAsync: (styleKey: string) => Promise<any>
  createStyleObjectByType: (styleType: string) => any
  configureStyleObject: (styleObject: any, styleId: string) => void
}

export interface ImageStoreClass {
  new(): ImageStore
}

export interface ImageStore {
  hashToPrivateImage: Map<string, any>

  tearDown: () => void
  internalBytesForImage: (hash: string) => any
  bytesFromImage: (hash: string) => Promise<Uint8Array>
  getPrivateImageOrThrow: (hash: string) => any
  getOrCreatePrivateImage: (hash: string, animatedInfo: any) => any
  getImageFromSHA1: (hash: string) => any
  createImage: (imageBytes: any) => any
  extractAnimatedImageCover: (imageBytes: any) => any
}

export interface VideoStoreClass {
  new(): VideoStore
}

export interface VideoStore {
  thumbnailGenerator: any
  hashToPrivateVideo: Map<string, any>
  hashToCoverImageHash: Map<string, string>
  hashToCoverThumbnailImageHash: Map<string, string>

  createVideoAsync: (videoBytes: any) => Promise<any>
  getOrCreatePrivateVideo: (hash: string) => any
  getThumbnailImageForVideo: (hash: string) => string
  getPrivateVideoOrThrow: (hash: string) => any
  tearDown: () => void
}

export interface IncLoadingErrorLoggerClass {
  new(options: IncLoadingErrorLoggerOptions): IncLoadingErrorLogger
}

export interface IncLoadingErrorLogger {
  readonly options: IncLoadingErrorLoggerOptions
  readonly loggedApiCalls: Set<string>

  logError: (...args: any[]) => void
  maybeLogError: (guid: string, context: string) => void
}

export interface PluginRuntimeClass {
  new(vm: VMInstance, options: PluginRuntimeOptions): PluginRuntime
}

export interface PluginRuntime {
  // Core properties
  readonly vm: VMInstance
  readonly options: PluginRuntimeOptions
  visualBellCounter: number
  eventHandlers: Map<string, EventHandler[]>
  eventHandlerTimeouts: Map<string, any>
  scheduledEvents: Map<string, ScheduledEvent>
  runningSyncEvent: string | null
  runningCloseEventHandler: boolean
  previousSelection: string[]
  previousSelectedTextRangeJson: string
  onMessageCallback: any
  queryMode: boolean
  checkoutRequested: boolean
  widgetManager: any
  skipInvisibleInstanceChildren: boolean
  spellCheckCallback: any
  legacyCodegenCallback: any
  codegenCallback: any
  linkPreviewCallback: any
  authCallback: any
  textReviewRequestRejects: number
  isTextReviewRequestModalOpen: boolean
  isWidget: boolean
  privateSceneGraph: any
  styleManager: StyleManager
  imageStore: ImageStore
  videoStore: VideoStore
  documentAccessState: DocumentAccessState
  _hasRegisteredWidgetFunction: boolean
  fullscreenEditorType: any
  mixedSentinel: any
  runtimeOptions: any
  nodeFactory: NodeFactory
  styleFactory: StyleFactory
  variableFactory: VariableFactory
  variableCollectionFactory: any
  annotationCategoryFactory: any
  uiHandle: UIHandle

  getNode: (e: any) => any
  getVariableNode: (e: any) => any
  getVariableCollectionNode: (e: any) => any
  getAnnotationCategory: (e: any) => any

  addEventHandler: (eventType: EventType, handler: (...args: any[]) => any, isOnce?: boolean) => void
  removeEventHandler: (eventType: EventType, handler: (...args: any[]) => any) => void
  fireEventSync: (eventType: EventType, args: any[]) => void
  fireEventAsync: (eventType: EventType, args: any[]) => Promise<void>
  tearDown: (reason: string) => void
  close: () => Promise<void>
  setMessageCallback: (callback: (message: any) => void) => void
  setQueryMode: (enabled: boolean) => void
  setSkipInvisibleInstanceChildren: (skip: boolean) => void
  currentSelectedTextRangeJson: () => string
  createSpellCheckCallback: (options: any) => any
  createLegacyCodegenCallback: (options: any) => any
  createLinkPreviewCallback: (options: any) => any
  defineVmFunction: (handle: any, key: string, metricsKey: string, fn: (...args: any[]) => any) => void
  defineVmProp: (handle: any, key: string, descriptor: PropertyDescriptor) => void
  getAllAccessedGuids: () => string[]
  getAccessiblePages: () => string[]
  hasRegisteredWidget: () => boolean
  logWarning: (message: string) => void
  getRunMode: () => string
  getCodegenLanguage: () => string
  getPublishedExtension: (pluginId: string) => any
}

// === Additional type definitions for array fixes ===

export interface FontInfo {
  fontName: {
    family: string
    style: string
  }
}

export interface ComponentInfo {
  library_key: string
  component_key?: string
  node_id?: string
}

export interface StateGroupInfo {
  library_key: string
}

export interface LibraryResult {
  status: 'loaded' | 'errors'
  data?: any
  errors?: any
}

export interface VariableResult {
  status: 'loaded' | 'errors'
  data?: {
    variable?: any
    variableCollection?: {
      variables: any[]
    }
  }
  errors?: any
}

export interface ProcessedRegion {
  windingRule: any
  loops: any
  fillStyleRef?: string | {version: string, key: string}
  fillStyleId?: string
  fillPaints?: {
    data: any[]
    blobs: any[]
  }
  fills?: any[]
}

export interface InteractionTrigger {
  type: string
  timeout?: number
  delay?: number
  device?: string
  keyCodes?: string[]
  mediaHitTime?: number
  deprecatedVersion?: boolean
}

export interface WidgetEvent {
  type: string
  data?: any
}

export interface UIOptions {
  type: string
  uiHandle?: any
  noOpUI?: boolean
}

// === Function Type Definitions ===

export interface ResizeDimensions {
  width: number
  height: number
}

export interface Node {
  type: string
  guid: string
  sectionContentsHidden?: boolean
  [key: string]: any
}

// === Function Signatures ===

/**
 * Validates and returns width/height for resizing nodes.
 * @param node - The node to resize
 * @param widthHandle - Handle for width value
 * @param heightHandle - Handle for height value
 * @param vm - VM instance
 * @returns Object with width and height properties
 */
export declare function validateResizeDimensions(
  node: Node,
  widthHandle: any,
  heightHandle: any,
  vm: VMInstance
): ResizeDimensions

// === Export all type definitions ===
// Note: Removed export statements that reference non-existent files

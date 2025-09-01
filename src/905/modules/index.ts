/**
 * Module Index
 * 
 * Exports for all refactored modules from the original 472793.ts file.
 * This provides a clean interface to access the modularized functionality.
 */

// Action Processing Mo// Layer Renaming Module
export {
  getLayerNamingStats,
  isLayerNameValid,
  renameLayersInNode,
  renameLayersWithConfig,
  renameSelectedLayers,
} from './layer-renaming'

// Phase 19: Advanced Navigation and Action Processing Systems
export {
  AdvancedNavigationProcessor,
  AdvancedPropertyWriter,
  AdvancedTextRangeProcessor,
  createAdvancedNavigationProcessor,
  createAdvancedPropertyWriter,
  createAdvancedTextRangeProcessor
} from './navigation-action-processing'

export type {
  ConditionalBlock,
  EasingConfig,
  MediaActionConfig,
  NavigationAction
} from './navigation-action-processing'

// Network and Real-Time Communication Systems Modulet {
ActionProcessor,
  ActionValidator,
  ConnectionType,
  createActionProcessor,
  createActionValidator,
  createReactionManager,
  MediaAction,
  ReactionManager,
  VariableDataType
} from './action-processing'

// Animation and Transition Systems Module
export {
  createEasingManager,
  createKeyframeAnimationManager,
  createMotionInterpolationManager,
  createSpringAnimationManager,
  createTransitionManager,
  CUBIC_BEZIER_PRESETS,
  EASING_FUNCTIONS,
  EasingManager,
  KeyframeAnimationManager,
  MotionInterpolationManager,
  SPRING_PRESETS,
  SpringAnimationManager,
  TransitionManager
} from './animation-transitions'

export type {
  AnimationConfig,
  AnimationDirection,
  AnimationState,
  CubicBezierControlPoints,
  EasingFunction,
  EasingType,
  KeyframeDefinition,
  SpringConfiguration,
  SpringPhysics,
  TransitionConfig,
  TransitionDirection,
  TransitionType
} from './animation-transitions'

// API Integration and Services Module
export {
  CommunicationPreferenceService,
  createCommunicationPreferenceService,
  createFileOperationsManager,
  createHTTPClientManager,
  createNetworkAccessManager,
  createPluginCapabilityManager,
  createRequestManagementService,
  createServiceRegistryManager,
  FileOperationsManager,
  HTTPClientManager,
  NetworkAccessManager,
  PluginCapabilityManager,
  RequestManagementService,
  ServiceRegistryManager
} from './api-integration-services'

export type {
  APIRequest,
  APIResponse,
  FileUploadRequest,
  ServiceBindings,
  ServiceManifest,
  UploadConfig
} from './api-integration-services'

// Client Storage Module
export {
  calculateStorageSize,
  createStorageKey,
  extractStorageName,
  getAllStorageKeys,
  getStorageValue,
  listStorageKeys,
  openDatabase,
  setStorageValue
} from './client-storage'

// Configuration and Lifecycle Module
export {
  createPersistenceManager,
  createPluginConfigurationManager,
  createPluginLifecycleManager,
  PersistenceManager,
  PluginConfigurationManager,
  PluginConfigUtils,
  PluginLifecycleManager
} from './configuration-lifecycle'

export type {
  CodegenSettings,
  LocalPluginConfig,
  PluginConfig,
  PluginContext,
  PluginPreferences,
  PublishedPluginConfig
} from './configuration-lifecycle'

// Data Processing and Serialization Module
export {
  BufferProcessor,
  CollectionProcessor,
  CommandProcessor,
  createBufferProcessor,
  createCollectionProcessor,
  createCommandProcessor,
  createFormatProcessor,
  createJSONProcessor,
  createMatrixProcessor,
  createTextProcessor,
  createVariableProcessor,
  FormatProcessor,
  JSONProcessor,
  MatrixProcessor,
  ProductComponentSerializer,
  TextProcessor,
  VariableProcessor
} from './data-processing-serialization'

// Data Structures and Collections Module
export {
  BufferManager,
  createBufferManager,
  createHashMap,
  createLRUCache,
  createMemoryManager,
  createNumberHashMap,
  HashFunctions,
  HashMap,
  LRUCache,
  MemoryManager
} from './data-structures-collections'

export type {
  BufferInfo,
  BufferType,
  CacheEntry,
  CollectionIterator,
  CollectionType,
  DataNode,
  FilterOptions,
  HashMapEntry,
  MemoryUsageStats,
  SortingOptions
} from './data-structures-collections'

// Event Management Module
export {
  createEventProcessingManager,
  createPluginNodeAdapterWrapper,
  createPluginRuntimeWrapper,
  createStyleManagerWrapper,
  EventErrorManager,
  EventProcessingManager,
  PluginNodeAdapterWrapper,
  PluginRuntimeWrapper,
  ReactionsActionProcessor,
  StyleManagerWrapper
} from './event-management'

// File System Interface and Extension Management Module
export {
  createFileBrowserManager,
  createLocalStorageManager,
  createManifestValidator,
  createVSCodeExtensionManager,
  FileBrowserManager,
  LocalStorageManager,
  ManifestValidator,
  VSCodeExtensionManager
} from './filesystem-extension-management'

export type {
  DirectoryEntry,
  ExtensionMenuItem,
  ExtensionMetadata,
  ExtensionParameter,
  FileSystemOperationParams,
  FileSystemOptions,
  FileUploadOptions,
  LocalExtensionManifest,
  ParameterOption,
  StorageOperationParams,
  StorageOptions,
  StorageStats
} from './filesystem-extension-management'

// Layer Renaming Module
export {
  getLayerNamingStats,
  isLayerNameValid,
  renameLayersInNode,
  renameLayersWithConfig,
  renameSelectedLayers,
} from './layer-renaming'

// Network and Real-Time Communication Systems Module
export {
  AdvancedHTTPClientManager,
  BroadcastChannelManager,
  CommunicationPreferenceManager,
  createAdvancedHTTPClientManager,
  createBroadcastChannelManager,
  createCommunicationPreferenceManager,
  createEventStreamManager,
  createNetworkStatusMonitor,
  createPushNotificationManager,
  createWebSocketManager,
  EventStreamManager,
  NetworkStatusMonitor,
  PushNotificationManager,
  WebSocketManager
} from './network-communication-realtime'

export type {
  BroadcastConfig,
  CommunicationPreference,
  EventStreamConfig,
  EventStreamMessage,
  NetworkMetrics,
  NetworkRequest,
  NetworkResponse,
  PushNotificationConfig,
  WebSocketConfig,
  WebSocketMessage
} from './network-communication-realtime'

// Node Management Module
export {
  createPluginNodeAdapter,
  createPluginNodeRuntime,
  PluginNodeAdapter,
  PluginNodeRuntime,
} from './node-management'

export type { 
  FigmaAPI, 
  NodeCreationProps, 
  NodeElement, 
  PluginVM, 
  SceneNode 
} from './node-management'

// Phase 20: Advanced Paint and Fill Processing Systems
export {
  AdvancedFillManager,
  AdvancedPaintProcessor,
  createAdvancedFillManager,
  createAdvancedPaintProcessor
} from './paint-fill-processing'

export type {
  GradientStop,
  ImageData,
  PaintConfig,
  PaintFilter,
  VariableBinding,
  VideoData
} from './paint-fill-processing'

// Paint Management Module
export {
  arrayToTransformMatrix,
  convertInternalPaintToExternal,
  convertPaintArray,
  convertTextDecorationPaints,
  createVariableAlias,
  DARK_COLOR_PALETTE,
  LIGHT_COLOR_PALETTE,
  normalizeBlendMode,
  transformMatrixToArray,
} from './paint-management'

export type { Paint } from './paint-management'

// Performance and Analytics Module
export {
  AnalyticsEventTracker,
  BrowserPerformanceProfiler,
  ContextMenuPerformanceTracker,
  createAnalyticsEventTracker,
  createBrowserPerformanceProfiler,
  createContextMenuPerformanceTracker,
  createPerformanceMetricsManager,
  createTelemetryDataCollector,
  createUserAnalyticsDataProcessor,
  PerformanceMetricsManager,
  TelemetryDataCollector,
  UserAnalyticsDataProcessor
} from './performance-analytics'

export type {
  AnalyticsEvent,
  PerformanceMeasurement,
  PerformanceMetric,
  ProfilerConfiguration,
  TelemetryData,
  UserAnalyticsData
} from './performance-analytics'

// Plugin Communication Module
export {
  createIframeManager,
  createNetworkFetchManager,
  createPluginMessageHandler,
  createServiceWorkerManager,
  createWorkerThreadManager,
  IframeManager,
  NetworkFetchManager,
  PluginMessageHandler,
  ServiceWorkerManager,
  WorkerThreadManager
} from './plugin-communication'

export type {
  FetchRequest,
  FetchResponse,
  IframeMessage,
  PluginMessage,
  UIMessage,
  WorkerMessage
} from './plugin-communication'

// Rendering and Graphics Module
export {
  CanvasViewStateManager,
  createCanvasViewStateManager,
  createDrawingToolsManager,
  createGraphicsBackendManager,
  createTextRenderingManager,
  createWebGLContextManager,
  createWebGPUContextManager,
  DrawingToolsManager,
  GraphicsBackendManager,
  TextRenderingManager,
  WebGLContextManager,
  WebGPUContextManager
} from './rendering-graphics'

export type {
  BlendMode,
  CanvasViewState,
  DrawingToolProperties,
  DrawingToolState,
  DrawingToolType,
  GraphicsBackend,
  GraphicsContext,
  RenderingCapabilities,
  TextRenderingMode,
  TextRenderingState
} from './rendering-graphics'

// Security and Validation Module
export {
  BaseValidator,
  createBaseValidator,
  createCSPManager,
  createEnhancedValidator,
  createInputValidationManager,
  createPermissionValidator,
  createSecurityFormManager,
  createWAFManager,
  CSPManager,
  EnhancedValidator,
  InputValidationManager,
  PermissionValidator,
  SecurityFormManager,
  WAFManager
} from './security-validation'

export type {
  LogLevel,
  PermissionOptions,
  SecurityFormResponse,
  SecurityPolicyViolation,
  ValidationBehavior,
  ValidationContext,
  ValidationError,
  ValidatorResponse,
  WAFVerificationState
} from './security-validation'

// UI Components and Controls Module
export {
  ButtonManager,
  CheckboxManager,
  ColorControlManager,
  createButtonManager,
  createCheckboxManager,
  createColorControlManager,
  createDialogManager,
  createTextInputManager,
  createVariableControlManager,
  DialogManager,
  TextInputManager,
  UI_COMPONENT_CLASSES,
  VariableControlManager
} from './ui-components-controls'

export type {
  ButtonProps,
  ButtonSize,
  ButtonVariant,
  CheckboxProps,
  ColorControlProps,
  ColorFormat,
  ColorValue,
  DialogProps,
  FormControlProps,
  PanelProps,
  TextInputProps,
  VariableControlProps,
  VariableReference,
  VariableType
} from './ui-components-controls'

// UI and Style Management Module
export {
  ComponentPropertyManager,
  convertTextDecorationColor,
  createComponentPropertyManager,
  createStyleManagementRuntime,
  PaintConversionUtils,
  StyleManagementRuntime,
  UI_STYLE_CONSTANTS,
} from './ui-style-management'

// Utilities Module
export {
  clampValue,
  CollectionUtils,
  COLOR_PALETTES,
  createGeometryUtils,
  createTransformationUtils,
  createValidationUtils,
  GeometryUtils,
  isNotNull,
  MathUtils,
  processURL,
  StorageKeyUtils,
  StringUtils,
  TransformationUtils,
  URLUtils,
  UTILITY_CONSTANTS,
  ValidationUtils,
} from './utilities'

// Export Phase 27: Node API Methods (Namespace approach)
export * from './node-api-methods-namespace'
export { NodeAPI, NodeAPISetupUtils, createNodeAPIProcessor, type NodeAPIConfig } from './node-api-methods-namespace'

// Previous exports from other phases
export * from './layout-positioning'
export * from './image-processing'
export * from './validation-helpers'
export * from './ui-enhancements'
export * from './utility-functions'
export * from './paint-fill-processing'
export * from './core-utilities'
export * from './node-api-methods'

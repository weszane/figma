export let bindings: any
export let CorePerfInfo: any
export let perfTimerFrameManagerBindings: any
export let featureFlagsCppApi: any
export let fullscreenOptimizationExposureLoggingBinding: any
export let observableValue_Map_Int_AutoLayoutShortcutHint__Internal: any
export let weakHandleHelpers: any
export let webAsyncCallback: any
export let performanceEventCounters: any
export let deprecatedXHRBindings: any
export let writableObservableValue_Bool_Internal: any
export let observableValue_Array_Bool_Internal: any
export let observableValue_Bool_Internal: any
export let observableValue_Float_Internal: any
export let writableObservableValue_Double_Internal: any
export let writableObservableValue_Int_Internal: any
export let writableObservableValue_String_Internal: any
export let observableValue_Json_Internal: any
export let observableValue_Int_Internal: any
export let writableObservableValue_Optional_String_Internal: any
export let writableObservableValue_Float_Internal: any
export let writableObservableValue_Array_String_Internal: any
export let observableValue_Double_Internal: any
export let observableValue_Map_String_Int_Internal: any

/**
 * Types for observable value handles.
 */
export type ObservableValueHandle = any;

/**
 * ObservableValue_Map_Int_AutoLayoutShortcutHint_ class
 * Original: ObservableValue_Map_Int_AutoLayoutShortcutHint_
 */
export class ObservableValueMapIntAutoLayoutShortcutHint {
  handle: ObservableValueHandle;

  constructor(handle: ObservableValueHandle) {
    this.handle = handle;
  }
}

/**
 * MutableObservableValue_Map_Int_AutoLayoutShortcutHint_ class
 * Original: MutableObservableValue_Map_Int_AutoLayoutShortcutHint_
 */
export class MutableObservableValueMapIntAutoLayoutShortcutHint extends ObservableValueMapIntAutoLayoutShortcutHint {
  getCopy(): any {
    return observableValue_Map_Int_AutoLayoutShortcutHint__Internal.getCopy(this.handle);
  }

  subscribeFromJs(callback: any): any {
    return observableValue_Map_Int_AutoLayoutShortcutHint__Internal.subscribeFromJs(this.handle, callback);
  }

  unsubscribeFromJs(callback: any): void {
    observableValue_Map_Int_AutoLayoutShortcutHint__Internal.unsubscribeFromJs(this.handle, callback);
  }

  constructor(handle: ObservableValueHandle) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * WritableObservableValue_Bool class
 * Original: WritableObservableValue_Bool
 */
export class WritableObservableValueBool {
  handle: ObservableValueHandle;

  constructor(handle: ObservableValueHandle) {
    this.handle = handle;
  }
}

/**
 * MutableWritableObservableValue_Bool class
 * Original: MutableWritableObservableValue_Bool
 */
export class MutableWritableObservableValueBool extends WritableObservableValueBool {
  getCopy(): any {
    return writableObservableValue_Bool_Internal.getCopy(this.handle);
  }

  set(value: boolean): void {
    writableObservableValue_Bool_Internal.set(this.handle, value);
  }

  subscribeFromJs(callback: any): any {
    return writableObservableValue_Bool_Internal.subscribeFromJs(this.handle, callback);
  }

  unsubscribeFromJs(callback: any): void {
    writableObservableValue_Bool_Internal.unsubscribeFromJs(this.handle, callback);
  }

  constructor(handle: ObservableValueHandle) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * ObservableValue_Array_Bool class
 * Original: ObservableValue_Array_Bool
 */
export class ObservableValueArrayBool {
  handle: ObservableValueHandle;

  constructor(handle: ObservableValueHandle) {
    this.handle = handle;
  }
}

/**
 * MutableObservableValue_Array_Bool class
 * Original: MutableObservableValue_Array_Bool
 */
export class MutableObservableValueArrayBool extends ObservableValueArrayBool {
  getCopy(): any {
    return observableValue_Array_Bool_Internal.getCopy(this.handle);
  }

  subscribeFromJs(callback: any): any {
    return observableValue_Array_Bool_Internal.subscribeFromJs(this.handle, callback);
  }

  unsubscribeFromJs(callback: any): void {
    observableValue_Array_Bool_Internal.unsubscribeFromJs(this.handle, callback);
  }

  constructor(handle: ObservableValueHandle) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * ObservableValue_Bool class
 * Original: ObservableValue_Bool
 */
export class ObservableValueBool {
  handle: ObservableValueHandle;

  constructor(handle: ObservableValueHandle) {
    this.handle = handle;
  }
}

/**
 * MutableObservableValue_Bool class
 * Original: MutableObservableValue_Bool
 */
export class MutableObservableValueBool extends ObservableValueBool {
  getCopy(): any {
    return observableValue_Bool_Internal.getCopy(this.handle);
  }

  subscribeFromJs(callback: any): any {
    return observableValue_Bool_Internal.subscribeFromJs(this.handle, callback);
  }

  unsubscribeFromJs(callback: any): void {
    observableValue_Bool_Internal.unsubscribeFromJs(this.handle, callback);
  }

  constructor(handle: ObservableValueHandle) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * ObservableValue_Float class
 * Original: ObservableValue_Float
 */
export class ObservableValueFloat {
  handle: ObservableValueHandle;

  constructor(handle: ObservableValueHandle) {
    this.handle = handle;
  }
}

/**
 * MutableObservableValue_Float class
 * Original: MutableObservableValue_Float
 */
export class MutableObservableValueFloat extends ObservableValueFloat {
  getCopy(): any {
    return observableValue_Float_Internal.getCopy(this.handle);
  }

  subscribeFromJs(callback: any): any {
    return observableValue_Float_Internal.subscribeFromJs(this.handle, callback);
  }

  unsubscribeFromJs(callback: any): void {
    observableValue_Float_Internal.unsubscribeFromJs(this.handle, callback);
  }

  constructor(handle: ObservableValueHandle) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * WritableObservableValue_Double class
 * Original: WritableObservableValue_Double
 */
export class WritableObservableValueDouble {
  handle: ObservableValueHandle;

  constructor(handle: ObservableValueHandle) {
    this.handle = handle;
  }
}

/**
 * MutableWritableObservableValue_Double class
 * Original: MutableWritableObservableValue_Double
 */
export class MutableWritableObservableValueDouble extends WritableObservableValueDouble {
  getCopy(): any {
    return writableObservableValue_Double_Internal.getCopy(this.handle);
  }

  set(value: number): void {
    writableObservableValue_Double_Internal.set(this.handle, value);
  }

  subscribeFromJs(callback: any): any {
    return writableObservableValue_Double_Internal.subscribeFromJs(this.handle, callback);
  }

  unsubscribeFromJs(callback: any): void {
    writableObservableValue_Double_Internal.unsubscribeFromJs(this.handle, callback);
  }

  constructor(handle: ObservableValueHandle) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * WritableObservableValue_Int class
 * Original: WritableObservableValue_Int
 */
export class WritableObservableValueInt {
  handle: ObservableValueHandle;

  constructor(handle: ObservableValueHandle) {
    this.handle = handle;
  }
}

/**
 * MutableWritableObservableValue_Int class
 * Original: MutableWritableObservableValue_Int
 */
export class MutableWritableObservableValueInt extends WritableObservableValueInt {
  getCopy(): any {
    return writableObservableValue_Int_Internal.getCopy(this.handle);
  }

  set(value: number): void {
    writableObservableValue_Int_Internal.set(this.handle, value);
  }

  subscribeFromJs(callback: any): any {
    return writableObservableValue_Int_Internal.subscribeFromJs(this.handle, callback);
  }

  unsubscribeFromJs(callback: any): void {
    writableObservableValue_Int_Internal.unsubscribeFromJs(this.handle, callback);
  }

  constructor(handle: ObservableValueHandle) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * WritableObservableValue_String class
 * Original: WritableObservableValue_String
 */
export class WritableObservableValueString {
  handle: ObservableValueHandle;

  constructor(handle: ObservableValueHandle) {
    this.handle = handle;
  }
}

/**
 * MutableWritableObservableValue_String class
 * Original: MutableWritableObservableValue_String
 */
export class MutableWritableObservableValueString extends WritableObservableValueString {
  getCopy(): any {
    return writableObservableValue_String_Internal.getCopy(this.handle);
  }

  set(value: string): void {
    writableObservableValue_String_Internal.set(this.handle, value);
  }

  subscribeFromJs(callback: any): any {
    return writableObservableValue_String_Internal.subscribeFromJs(this.handle, callback);
  }

  unsubscribeFromJs(callback: any): void {
    writableObservableValue_String_Internal.unsubscribeFromJs(this.handle, callback);
  }

  constructor(handle: ObservableValueHandle) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * ObservableValue_Json class
 * Original: ObservableValue_Json
 */
export class ObservableValueJson {
  handle: ObservableValueHandle;

  constructor(handle: ObservableValueHandle) {
    this.handle = handle;
  }
}

/**
 * MutableObservableValue_Json class
 * Original: MutableObservableValue_Json
 */
export class MutableObservableValueJson extends ObservableValueJson {
  getCopy(): any {
    return observableValue_Json_Internal.getCopy(this.handle);
  }

  subscribeFromJs(callback: any): any {
    return observableValue_Json_Internal.subscribeFromJs(this.handle, callback);
  }

  unsubscribeFromJs(callback: any): void {
    observableValue_Json_Internal.unsubscribeFromJs(this.handle, callback);
  }

  constructor(handle: ObservableValueHandle) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * ObservableValue_Int class
 * Original: ObservableValue_Int
 */
export class ObservableValueInt {
  handle: ObservableValueHandle;

  constructor(handle: ObservableValueHandle) {
    this.handle = handle;
  }
}

/**
 * MutableObservableValue_Int class
 * Original: MutableObservableValue_Int
 */
export class MutableObservableValueInt extends ObservableValueInt {
  getCopy(): any {
    return observableValue_Int_Internal.getCopy(this.handle);
  }

  subscribeFromJs(callback: any): any {
    return observableValue_Int_Internal.subscribeFromJs(this.handle, callback);
  }

  unsubscribeFromJs(callback: any): void {
    observableValue_Int_Internal.unsubscribeFromJs(this.handle, callback);
  }

  constructor(handle: ObservableValueHandle) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * WritableObservableValue_Optional_String class
 * Original: WritableObservableValue_Optional_String
 */
export class WritableObservableValueOptionalString {
  handle: ObservableValueHandle;

  constructor(handle: ObservableValueHandle) {
    this.handle = handle;
  }
}

/**
 * MutableWritableObservableValue_Optional_String class
 * Original: MutableWritableObservableValue_Optional_String
 */
export class MutableWritableObservableValueOptionalString extends WritableObservableValueOptionalString {
  getCopy(): any {
    return writableObservableValue_Optional_String_Internal.getCopy(this.handle);
  }

  set(value: string | undefined): void {
    writableObservableValue_Optional_String_Internal.set(this.handle, value);
  }

  subscribeFromJs(callback: any): any {
    return writableObservableValue_Optional_String_Internal.subscribeFromJs(this.handle, callback);
  }

  unsubscribeFromJs(callback: any): void {
    writableObservableValue_Optional_String_Internal.unsubscribeFromJs(this.handle, callback);
  }

  constructor(handle: ObservableValueHandle) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * WritableObservableValue_Float class
 * Original: WritableObservableValue_Float
 */
export class WritableObservableValueFloat {
  handle: ObservableValueHandle;

  constructor(handle: ObservableValueHandle) {
    this.handle = handle;
  }
}

/**
 * MutableWritableObservableValue_Float class
 * Original: MutableWritableObservableValue_Float
 */
export class MutableWritableObservableValueFloat extends WritableObservableValueFloat {
  getCopy(): any {
    return writableObservableValue_Float_Internal.getCopy(this.handle);
  }

  set(value: number): void {
    writableObservableValue_Float_Internal.set(this.handle, value);
  }

  subscribeFromJs(callback: any): any {
    return writableObservableValue_Float_Internal.subscribeFromJs(this.handle, callback);
  }

  unsubscribeFromJs(callback: any): void {
    writableObservableValue_Float_Internal.unsubscribeFromJs(this.handle, callback);
  }

  constructor(handle: ObservableValueHandle) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * WritableObservableValue_Array_String class
 * Original: WritableObservableValue_Array_String
 */
export class WritableObservableValueArrayString {
  handle: ObservableValueHandle;

  constructor(handle: ObservableValueHandle) {
    this.handle = handle;
  }
}

/**
 * MutableWritableObservableValue_Array_String class
 * Original: MutableWritableObservableValue_Array_String
 */
export class MutableWritableObservableValueArrayString extends WritableObservableValueArrayString {
  getCopy(): any {
    return writableObservableValue_Array_String_Internal.getCopy(this.handle);
  }

  set(value: string[]): void {
    writableObservableValue_Array_String_Internal.set(this.handle, value);
  }

  subscribeFromJs(callback: any): any {
    return writableObservableValue_Array_String_Internal.subscribeFromJs(this.handle, callback);
  }

  unsubscribeFromJs(callback: any): void {
    writableObservableValue_Array_String_Internal.unsubscribeFromJs(this.handle, callback);
  }

  constructor(handle: ObservableValueHandle) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * ObservableValue_Double class
 * Original: ObservableValue_Double
 */
export class ObservableValueDouble {
  handle: ObservableValueHandle;

  constructor(handle: ObservableValueHandle) {
    this.handle = handle;
  }
}

/**
 * MutableObservableValue_Double class
 * Original: MutableObservableValue_Double
 */
export class MutableObservableValueDouble extends ObservableValueDouble {
  getCopy(): any {
    return observableValue_Double_Internal.getCopy(this.handle);
  }

  subscribeFromJs(callback: any): any {
    return observableValue_Double_Internal.subscribeFromJs(this.handle, callback);
  }

  unsubscribeFromJs(callback: any): void {
    observableValue_Double_Internal.unsubscribeFromJs(this.handle, callback);
  }

  constructor(handle: ObservableValueHandle) {
    super(handle);
    this.handle = handle;
  }
}

/**
 * ObservableValue_Map_String_Int class
 * Original: ObservableValue_Map_String_Int
 */
export class ObservableValueMapStringInt {
  handle: ObservableValueHandle;

  constructor(handle: ObservableValueHandle) {
    this.handle = handle;
  }
}

/**
 * MutableObservableValue_Map_String_Int class
 * Original: MutableObservableValue_Map_String_Int
 */
export class MutableObservableValueMapStringInt extends ObservableValueMapStringInt {
  getCopy(): any {
    return observableValue_Map_String_Int_Internal.getCopy(this.handle);
  }

  subscribeFromJs(callback: any): any {
    return observableValue_Map_String_Int_Internal.subscribeFromJs(this.handle, callback);
  }

  unsubscribeFromJs(callback: any): void {
    observableValue_Map_String_Int_Internal.unsubscribeFromJs(this.handle, callback);
  }

  constructor(handle: ObservableValueHandle) {
    super(handle);
    this.handle = handle;
  }
}

// Export aliases for backward compatibility
export const $$z15 = MutableObservableValueMapIntAutoLayoutShortcutHint;
export const $$K36 = MutableWritableObservableValueBool;
export const $$$0 = MutableObservableValueArrayBool;
export const $$q6 = MutableObservableValueBool;
export const $$Z4 = MutableObservableValueFloat;
export const $$ee2 = MutableWritableObservableValueDouble;
export const $$er12 = MutableWritableObservableValueInt;
export const $$ei9 = MutableWritableObservableValueString;
export const $$es14 = MutableObservableValueJson;
export const $$el30 = MutableObservableValueInt;
export const $$ec28 = MutableWritableObservableValueOptionalString;
export const $$ep19 = MutableWritableObservableValueFloat;
export const $$eh10 = MutableWritableObservableValueArrayString;
export const $$eg17 = MutableObservableValueDouble;
export const $$eE8 = MutableObservableValueMapStringInt;

/**
 * Initializes bindings and global classes.
 * Original: $$ey23
 */
export function initializeBindings(e: any) {
  bindings = e.Bindings;
  CorePerfInfo = e.CorePerfInfo;
  globalThis.CorePerfInfo = CorePerfInfo;
  perfTimerFrameManagerBindings = e.PerfTimerFrameManagerBindings;
  featureFlagsCppApi = e.FeatureFlagsCppApi;
  fullscreenOptimizationExposureLoggingBinding = e.FullscreenOptimizationExposureLoggingBinding;
  observableValue_Map_Int_AutoLayoutShortcutHint__Internal = e.ObservableValue_Map_Int_AutoLayoutShortcutHint__Internal;
  globalThis.ObservableValueMapIntAutoLayoutShortcutHint = ObservableValueMapIntAutoLayoutShortcutHint;
  globalThis.MutableObservableValueMapIntAutoLayoutShortcutHint = MutableObservableValueMapIntAutoLayoutShortcutHint;
  weakHandleHelpers = e.WeakHandleHelpers;
  webAsyncCallback = e.WebAsyncCallback;
  performanceEventCounters = e.PerformanceEventCounters;
  deprecatedXHRBindings = e.DeprecatedXHRBindings;
  writableObservableValue_Bool_Internal = e.WritableObservableValue_Bool_Internal;
  globalThis.WritableObservableValueBool = WritableObservableValueBool;
  globalThis.MutableWritableObservableValueBool = MutableWritableObservableValueBool;
  observableValue_Array_Bool_Internal = e.ObservableValue_Array_Bool_Internal;
  globalThis.ObservableValueArrayBool = ObservableValueArrayBool;
  globalThis.MutableObservableValueArrayBool = MutableObservableValueArrayBool;
  observableValue_Bool_Internal = e.ObservableValue_Bool_Internal;
  globalThis.ObservableValueBool = ObservableValueBool;
  globalThis.MutableObservableValueBool = MutableObservableValueBool;
  observableValue_Float_Internal = e.ObservableValue_Float_Internal;
  globalThis.ObservableValueFloat = ObservableValueFloat;
  globalThis.MutableObservableValueFloat = MutableObservableValueFloat;
  writableObservableValue_Double_Internal = e.WritableObservableValue_Double_Internal;
  globalThis.WritableObservableValueDouble = WritableObservableValueDouble;
  globalThis.MutableWritableObservableValueDouble = MutableWritableObservableValueDouble;
  writableObservableValue_Int_Internal = e.WritableObservableValue_Int_Internal;
  globalThis.WritableObservableValueInt = WritableObservableValueInt;
  globalThis.MutableWritableObservableValueInt = MutableWritableObservableValueInt;
  writableObservableValue_String_Internal = e.WritableObservableValue_String_Internal;
  globalThis.WritableObservableValueString = WritableObservableValueString;
  globalThis.MutableWritableObservableValueString = MutableWritableObservableValueString;
  observableValue_Json_Internal = e.ObservableValue_Json_Internal;
  globalThis.ObservableValueJson = ObservableValueJson;
  globalThis.MutableObservableValueJson = MutableObservableValueJson;
  observableValue_Int_Internal = e.ObservableValue_Int_Internal;
  globalThis.ObservableValueInt = ObservableValueInt;
  globalThis.MutableObservableValueInt = MutableObservableValueInt;
  writableObservableValue_Optional_String_Internal = e.WritableObservableValue_Optional_String_Internal;
  globalThis.WritableObservableValueOptionalString = WritableObservableValueOptionalString;
  globalThis.MutableWritableObservableValueOptionalString = MutableWritableObservableValueOptionalString;
  writableObservableValue_Float_Internal = e.WritableObservableValue_Float_Internal;
  globalThis.WritableObservableValueFloat = WritableObservableValueFloat;
  globalThis.MutableWritableObservableValueFloat = MutableWritableObservableValueFloat;
  writableObservableValue_Array_String_Internal = e.WritableObservableValue_Array_String_Internal;
  globalThis.WritableObservableValueArrayString = WritableObservableValueArrayString;
  globalThis.MutableWritableObservableValueArrayString = MutableWritableObservableValueArrayString;
  observableValue_Double_Internal = e.ObservableValue_Double_Internal;
  globalThis.ObservableValueDouble = ObservableValueDouble;
  globalThis.MutableObservableValueDouble = MutableObservableValueDouble;
  observableValue_Map_String_Int_Internal = e.ObservableValue_Map_String_Int_Internal;
  globalThis.ObservableValueMapStringInt = ObservableValueMapStringInt;
  globalThis.MutableObservableValueMapStringInt = MutableObservableValueMapStringInt;
}

/**
 * Returns all bindings and internals.
 * Original: $$eb7
 */
export function getAllBindings() {
  return {
    bindings,
    corePerfInfo: CorePerfInfo,
    perfTimerFrameManagerBindings,
    featureFlagsCppApi,
    fullscreenOptimizationExposureLoggingBinding,
    weakHandleHelpers,
    webAsyncCallback,
    performanceEventCounters,
    deprecatedXHRBindings,
    observableValue_Map_Int_AutoLayoutShortcutHint__Internal,
    writableObservableValue_Bool_Internal,
    observableValue_Array_Bool_Internal,
    observableValue_Bool_Internal,
    observableValue_Float_Internal,
    writableObservableValue_Double_Internal,
    writableObservableValue_Int_Internal,
    writableObservableValue_String_Internal,
    observableValue_Json_Internal,
    observableValue_Int_Internal,
    writableObservableValue_Optional_String_Internal,
    writableObservableValue_Float_Internal,
    writableObservableValue_Array_String_Internal,
    observableValue_Double_Internal,
    observableValue_Map_String_Int_Internal,
  };
}

// Export refactored names for usage elsewhere
export const AH = MutableObservableValueArrayBool;
export const Ai = fullscreenOptimizationExposureLoggingBinding;
export const D = MutableWritableObservableValueDouble;
export const Ej = MutableObservableValueFloat;
export const IQ = MutableObservableValueBool;
export const KO = getAllBindings;
export const KT = MutableObservableValueMapStringInt;
export const LQ = MutableWritableObservableValueString;
export const Lp = MutableWritableObservableValueArrayString;
export const P0 = MutableWritableObservableValueInt;
export const Qt = deprecatedXHRBindings;
export const S_ = MutableObservableValueJson;
export const U0 = MutableObservableValueMapIntAutoLayoutShortcutHint;
export const Un = webAsyncCallback;
export const Vt = MutableObservableValueDouble;
export const YL = MutableWritableObservableValueFloat;
export const Yy = performanceEventCounters;
export const cc = initializeBindings;
export const fZ = perfTimerFrameManagerBindings;
export const hM = CorePerfInfo;
export const jW = bindings;
export const md = MutableWritableObservableValueOptionalString;
export const mo = weakHandleHelpers;
export const nK = MutableObservableValueInt;
export const yB = MutableWritableObservableValueBool;




/**
 * Enums for various internal states and types.
 * Original enum names preserved in comments for traceability.
 */

/**
 * DocumentMode
 * Original: $$n33
 */
export enum DocumentMode {
  LEGACY = 0,
  DEFAULT = 1,
  MERGE_MODAL = 2,
  RECOVERY = 3,
  MAXIMUM = 4,
}

/**
 * PerfType
 * Original: $$i20
 */
export enum PerfType {
  IMAGE = 0,
  RENDERER = 1,
  JS = 2,
}

/**
 * BufferType
 * Original: a
 */
export enum BufferType {
  BUFFER = 0,
}

/**
 * GLResourceType
 * Original: s
 */
export enum GLResourceType {
  TEXTURE = 0,
  VERTEX_BUFFER = 1,
  INDEX_BUFFER = 2,
  RENDERBUFFER = 3,
  UNIFORM_BUFFER = 4,
}

/**
 * ImageSourceType
 * Original: $$o24
 */
export enum ImageSourceType {
  COMPRESSED = 0,
  BUFFER = 1,
  BITMAP = 2,
}

/**
 * TextureType
 * Original: $$l22
 */
export enum TextureType {
  BACKBUFFER = 0,
  EYEDROPPER_BACKBUFFER_COPY = 1,
  EXPORT = 2,
  GLYPH_DATA = 3,
  GRADIENT = 4,
  IMAGE = 5,
  OVERLAY_IMAGE = 6,
  OVERLAY_NINE_GRID = 7,
  OVERLAY_TEXT = 8,
  OVERLAY_TILE = 9,
  SINGLE_PIXEL_TEXTURE = 10,
  SWAP_CHAIN = 11,
  TEST = 12,
  TILE_ATLAS = 13,
  TILE_STACK = 14,
  STENCIL = 15,
  CHROME_HACK = 16,
}

/**
 * FullscreenMode
 * Original: $$d18
 */
export enum FullscreenMode {
  FULLSCREEN = 0,
  NON_FULLSCREEN = 1,
}

/**
 * AutoLayoutInsertMode
 * Original: $$c31
 */
export enum AutoLayoutInsertMode {
  IGNORE_AUTOLAYOUT = 0,
  FORCE_INSERTION = 1,
  PREVENT_NESTING = 2,
}

/**
 * GLContextType
 * Original: $$u35
 */
export enum GLContextType {
  None = 0,
  WebGL1 = 1,
  WebGL2 = 2,
  WebGPU = 3,
}

/**
 * PerfPriority
 * Original: $$p3
 */
export enum PerfPriority {
  LOW = 0,
  HIGH = 1,
}

/**
 * GLFailureType
 * Original: $$_5
 */
export enum GLFailureType {
  GL_VERTEX_BUFFER_FAILURE = 0,
  GL_TEXTURE_FAILURE = 1,
  GL_RENDERBUFFER_FAILURE = 2,
  GL_UNIFORM_BUFFER_FAILURE = 3,
  GL_INDEX_BUFFER_FAILURE = 4,
  WASM_FAILURE = 100,
}

/**
 * GenericType
 * Original: h
 */
export enum GenericType {
  GENERIC = 0,
}

/**
 * SaveMode
 * Original: $$m11
 */
export enum LogToConsoleMode {
  DEFAULT = 0,
  ALWAYS = 1,
  NEVER = 2,
}

/**
 * DocumentSaveEvent
 * Original: $$g32
 */
export enum DocumentSaveEvent {
  AFTER_INITIAL_JOIN_END = 0,
  AFTER_FIRST_RENDER = 1,
  DOCUMENT_STARTED_SAVING = 2,
  DOCUMENT_FINISHED_SAVING = 3,
}

/**
 * PerfQuality
 * Original: $$f34
 */
export enum PerfQuality {
  NONE = 0,
  FAST = 1,
  DEFAULT = 6,
  BEST = 9,
}

// Export aliases for backward compatibility and usage elsewhere
export const D2 = PerfPriority;
export const HT = GLFailureType;
export const NU = LogToConsoleMode;
export const Xp = FullscreenMode;
export const YO = PerfType;
export const aD = TextureType;
export const fL = ImageSourceType;
export const oe = AutoLayoutInsertMode;
export const r = DocumentSaveEvent;
export const rC = DocumentMode;
export const uP = PerfQuality;
export const w$ = GLContextType;

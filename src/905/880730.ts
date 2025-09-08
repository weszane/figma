// --- Internal bindings (initialized via LQ/initBindings) ---
export let documentStateTsApi: any
export let figmaScopeBindings: any
export let variablesMirrorManager: any
export let observableValueArrayIDLSubscribedVariableSetInfoInternal: any
export let observableValueArrayIDLSubscribedVariableInfoInternal: any
export let observableValueArrayIDLLocalVariableSetInfoInternal: any
export let observableValueArrayIDLLocalVariableInfoInternal: any
export let sharedDebuggingHelpers: any
export let interactionTestHelpers: any
export let assetConsumptionBindings: any
export let assetBindings: any
export let colorTokensStateInternal: any
export let writableObservableValueColorTokensInternal: any
// --- Enums ---
/**
 * Enum for AppType (original: $$n20)
 */
export enum UserAppType {
  FullscreenApp = 0,
  PrototypeLib = 1,
  InteractionTest = 2,
}

/**
 * Enum for Direction (original: $$r11)
 */
export enum FromToDirection {
  FROM = 0,
  TO = 1,
}

/**
 * Enum for VariantType (original: $$a21)
 */
export enum VariantType {
  PRIMARY = 0,
  SECONDARY = 1,
}

/**
 * Enum for SymbolInstanceType (original: $$s10)
 */
export enum SymbolInstanceType {
  INVALID = 0,
  PRIMARY_INSTANCE_BACKED_BY_SYMBOL = 1,
  PRIMARY_INSTANCE_WITH_NESTED_SWAP_TO_SYMBOL = 2,
  PRIMARY_INSTANCE_WITH_TOP_LEVEL_PROP_ASSIGNMENT_TO_SYMBOL = 3,
  PRIMARY_INSTANCE_WITH_NESTED_PROP_ASSIGNMENT_TO_SYMBOL = 4,
  PRODUCT_COMPONENT_WITH_PROP_DEF_TO_SYMBOL = 5,
  STATE_WITH_PROP_DEF_TO_SYMBOL = 6,
  SYMBOL_CONTAINING_PRIMARY_INSTANCE = 7,
}

/**
 * Enum for VariableErrorType (original: $$o3)
 */
export enum VariableErrorType {
  NONE = 0,
  TOO_MANY_VARIABLES_ERROR = 1,
  TOO_MANY_MODES_ERROR = 2,
}

/**
 * Enum for DimensionErrorType (original: $$l14)
 */
export enum DimensionErrorType {
  NONE = 0,
  LESS_THAN_MIN_WIDTH = 1,
  LESS_THAN_MIN_HEIGHT = 2,
  GREATER_THAN_MAX_WIDTH = 3,
  GREATER_THAN_MAX_HEIGHT = 4,
  NEGATIVE = 5,
  NEGATIVE_OR_ZERO = 6,
  LESS_THAN_ONE = 7,
}

/**
 * Enum for ValueType (original: $$d17)
 */
export enum VariableResolvedDataType {
  BOOLEAN = 0,
  FLOAT = 1,
  STRING = 2,
  COLOR = 3,
  MAP = 4,
  SYMBOL_ID = 5,
  FONT_STYLE = 6,
  TEXT_DATA = 7,
  IMAGE = 8,
  LINK = 9,
  JS_RUNTIME_ALIAS = 10,
  SLOT_CONTENT_ID = 11,
}

/**
 * Enum for ExtendedValueType (original: $$c12)
 */
export enum VariableDataType {
  BOOLEAN = 0,
  FLOAT = 1,
  STRING = 2,
  ALIAS = 3,
  COLOR = 4,
  EXPRESSION = 5,
  MAP = 6,
  SYMBOL_ID = 7,
  FONT_STYLE = 8,
  TEXT_DATA = 9,
  INVALID = 10,
  NODE_FIELD_ALIAS = 11,
  CMS_ALIAS = 12,
  PROP_REF = 13,
  IMAGE = 14,
  MANAGED_STRING_ALIAS = 15,
  LINK = 16,
  JS_RUNTIME_ALIAS = 17,
  SLOT_CONTENT_ID = 18,
  DATE = 19,
}

/**
 * Enum for OperationType (original: $$u6)
 */
export enum OperationType {
  ADDITION = 0,
  SUBTRACTION = 1,
  RESOLVE_VARIANT = 2,
  MULTIPLY = 3,
  DIVIDE = 4,
  EQUALS = 5,
  NOT_EQUAL = 6,
  LESS_THAN = 7,
  LESS_THAN_OR_EQUAL = 8,
  GREATER_THAN = 9,
  GREATER_THAN_OR_EQUAL = 10,
  AND = 11,
  OR = 12,
  NOT = 13,
  STRINGIFY = 14,
  TERNARY = 15,
  VAR_MODE_LOOKUP = 16,
  NEGATE = 17,
  IS_TRUTHY = 18,
}

/**
 * Enum for TestType (original: p)
 */
export enum TestType {
  INTERACTION_TEST = 0,
  VIEWER_TEST = 1,
}

// --- Types for Handles ---
/**
 * Generic handle type for observable values.
 */
export type Handle = any // Replace with actual handle type if available

// --- Utility function ---
/**
 * Assigns a property to an object, using defineProperty if the property exists.
 * @param obj The object to assign to
 * @param key The property key
 * @param value The value to assign
 * @returns The object with the property assigned
 * (original: w)
 */
function assignProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  }
  else {
    obj[key] = value
  }
  return obj
}

// --- Observable Value Classes ---
/**
 * ObservableValue_Array_IDLSubscribedVariableSetInfo_ (original: C)
 */
export class ObservableValueArrayIDLSubscribedVariableSetInfo {
  handle: Handle
  constructor(handle: Handle) {
    assignProperty(this, 'handle', handle)
  }
}

/**
 * MutableObservableValue_Array_IDLSubscribedVariableSetInfo_ (original: $$T13)
 */
export class MutableObservableValueArrayIDLSubscribedVariableSetInfo extends ObservableValueArrayIDLSubscribedVariableSetInfo {
  getCopy() {
    return observableValueArrayIDLSubscribedVariableSetInfoInternal.getCopy(this.handle)
  }

  subscribeFromJs(cb: any) {
    return observableValueArrayIDLSubscribedVariableSetInfoInternal.subscribeFromJs(this.handle, cb)
  }

  unsubscribeFromJs(cb: any) {
    observableValueArrayIDLSubscribedVariableSetInfoInternal.unsubscribeFromJs(this.handle, cb)
  }

  constructor(handle: Handle) {
    super(handle)
    assignProperty(this, 'handle', handle)
  }
}

/**
 * ObservableValue_Array_IDLSubscribedVariableInfo_ (original: k)
 */
export class ObservableValueArrayIDLSubscribedVariableInfo {
  handle: Handle
  constructor(handle: Handle) {
    assignProperty(this, 'handle', handle)
  }
}

/**
 * MutableObservableValue_Array_IDLSubscribedVariableInfo_ (original: $$R16)
 */
export class MutableObservableValueArrayIDLSubscribedVariableInfo extends ObservableValueArrayIDLSubscribedVariableInfo {
  getCopy() {
    return observableValueArrayIDLSubscribedVariableInfoInternal.getCopy(this.handle)
  }

  subscribeFromJs(cb: any) {
    return observableValueArrayIDLSubscribedVariableInfoInternal.subscribeFromJs(this.handle, cb)
  }

  unsubscribeFromJs(cb: any) {
    observableValueArrayIDLSubscribedVariableInfoInternal.unsubscribeFromJs(this.handle, cb)
  }

  constructor(handle: Handle) {
    super(handle)
    assignProperty(this, 'handle', handle)
  }
}

/**
 * ObservableValue_Array_IDLLocalVariableSetInfo_ (original: N)
 */
export class ObservableValueArrayIDLLocalVariableSetInfo {
  handle: Handle
  constructor(handle: Handle) {
    assignProperty(this, 'handle', handle)
  }
}

/**
 * MutableObservableValue_Array_IDLLocalVariableSetInfo_ (original: $$P18)
 */
export class MutableObservableValueArrayIDLLocalVariableSetInfo extends ObservableValueArrayIDLLocalVariableSetInfo {
  getCopy() {
    return observableValueArrayIDLLocalVariableSetInfoInternal.getCopy(this.handle)
  }

  subscribeFromJs(cb: any) {
    return observableValueArrayIDLLocalVariableSetInfoInternal.subscribeFromJs(this.handle, cb)
  }

  unsubscribeFromJs(cb: any) {
    observableValueArrayIDLLocalVariableSetInfoInternal.unsubscribeFromJs(this.handle, cb)
  }

  constructor(handle: Handle) {
    super(handle)
    assignProperty(this, 'handle', handle)
  }
}

/**
 * ObservableValue_Array_IDLLocalVariableInfo_ (original: O)
 */
export class ObservableValueArrayIDLLocalVariableInfo {
  handle: Handle
  constructor(handle: Handle) {
    assignProperty(this, 'handle', handle)
  }
}

/**
 * MutableObservableValue_Array_IDLLocalVariableInfo_ (original: $$D1)
 */
export class MutableObservableValueArrayIDLLocalVariableInfo extends ObservableValueArrayIDLLocalVariableInfo {
  getCopy() {
    return observableValueArrayIDLLocalVariableInfoInternal.getCopy(this.handle)
  }

  subscribeFromJs(cb: any) {
    return observableValueArrayIDLLocalVariableInfoInternal.subscribeFromJs(this.handle, cb)
  }

  unsubscribeFromJs(cb: any) {
    observableValueArrayIDLLocalVariableInfoInternal.unsubscribeFromJs(this.handle, cb)
  }

  constructor(handle: Handle) {
    super(handle)
    assignProperty(this, 'handle', handle)
  }
}

/**
 * ColorTokensState (original: L)
 */
export class ColorTokensState {
  handle: Handle
  get hasRunTokenSync() {
    return colorTokensStateInternal.__getProperty_hasRunTokenSync(this.handle)
  }

  get currentTokens() {
    return colorTokensStateInternal.__getProperty_currentTokens(this.handle)
  }

  constructor(handle: Handle) {
    assignProperty(this, 'handle', handle)
  }
}

/**
 * MutableColorTokensState (original: $$F2)
 */
export class MutableColorTokensState extends ColorTokensState {
  constructor(handle: Handle) {
    super(handle)
    assignProperty(this, 'handle', handle)
  }
}

/**
 * WritableObservableValue_ColorTokens_ (original: M)
 */
export class WritableObservableValueColorTokens {
  handle: Handle
  constructor(handle: Handle) {
    assignProperty(this, 'handle', handle)
  }
}

/**
 * MutableWritableObservableValue_ColorTokens_ (original: j)
 */
export class MutableWritableObservableValueColorTokens extends WritableObservableValueColorTokens {
  getCopy() {
    return writableObservableValueColorTokensInternal.getCopy(this.handle)
  }

  set(value: any) {
    writableObservableValueColorTokensInternal.set(this.handle, value)
  }

  subscribeFromJs(cb: any) {
    return writableObservableValueColorTokensInternal.subscribeFromJs(this.handle, cb)
  }

  unsubscribeFromJs(cb: any) {
    writableObservableValueColorTokensInternal.unsubscribeFromJs(this.handle, cb)
  }

  constructor(handle: Handle) {
    super(handle)
    assignProperty(this, 'handle', handle)
  }
}

/**
 * Initializes all internal bindings from the provided API object.
 * (original: $$U8)
 */
export function initBindings(e: any) {
  documentStateTsApi = e.DocumentStateTsApi
  figmaScopeBindings = e.FigmaScopeBindings
  variablesMirrorManager = e.VariablesMirrorManager
  observableValueArrayIDLSubscribedVariableSetInfoInternal = e.ObservableValue_Array_IDLSubscribedVariableSetInfo__Internal
  observableValueArrayIDLSubscribedVariableInfoInternal = e.ObservableValue_Array_IDLSubscribedVariableInfo__Internal
  observableValueArrayIDLLocalVariableSetInfoInternal = e.ObservableValue_Array_IDLLocalVariableSetInfo__Internal
  observableValueArrayIDLLocalVariableInfoInternal = e.ObservableValue_Array_IDLLocalVariableInfo__Internal
  sharedDebuggingHelpers = e.SharedDebuggingHelpers
  interactionTestHelpers = e.InteractionTestHelpers
  assetConsumptionBindings = e.AssetConsumptionBindings
  assetBindings = e.AssetBindings
  colorTokensStateInternal = e.ColorTokensState_Internal
  writableObservableValueColorTokensInternal = e.WritableObservableValue_ColorTokens__Internal

  // Expose classes to globalThis for legacy compatibility
  globalThis.ObservableValue_Array_IDLSubscribedVariableSetInfo_ = ObservableValueArrayIDLSubscribedVariableSetInfo
  globalThis.MutableObservableValue_Array_IDLSubscribedVariableSetInfo_ = MutableObservableValueArrayIDLSubscribedVariableSetInfo
  globalThis.ObservableValue_Array_IDLSubscribedVariableInfo_ = ObservableValueArrayIDLSubscribedVariableInfo
  globalThis.MutableObservableValue_Array_IDLSubscribedVariableInfo_ = MutableObservableValueArrayIDLSubscribedVariableInfo
  globalThis.ObservableValue_Array_IDLLocalVariableSetInfo_ = ObservableValueArrayIDLLocalVariableSetInfo
  globalThis.MutableObservableValue_Array_IDLLocalVariableSetInfo_ = MutableObservableValueArrayIDLLocalVariableSetInfo
  globalThis.ObservableValue_Array_IDLLocalVariableInfo_ = ObservableValueArrayIDLLocalVariableInfo
  globalThis.MutableObservableValue_Array_IDLLocalVariableInfo_ = MutableObservableValueArrayIDLLocalVariableInfo
  globalThis.ColorTokensState = ColorTokensState
  globalThis.MutableColorTokensState = MutableColorTokensState
  globalThis.WritableObservableValue_ColorTokens_ = WritableObservableValueColorTokens
  globalThis.MutableWritableObservableValue_ColorTokens_ = MutableWritableObservableValueColorTokens
}

/**
 * Returns all internal bindings as an object.
 * (original: $$B7)
 */
export function getBindings() {
  return {
    documentStateTsApi,
    figmaScopeBindings,
    variablesMirrorManager,
    sharedDebuggingHelpers,
    interactionTestHelpers,
    assetConsumptionBindings,
    assetBindings,
    observableValue_Array_IDLSubscribedVariableSetInfo__Internal: observableValueArrayIDLSubscribedVariableSetInfoInternal,
    observableValue_Array_IDLSubscribedVariableInfo__Internal: observableValueArrayIDLSubscribedVariableInfoInternal,
    observableValue_Array_IDLLocalVariableSetInfo__Internal: observableValueArrayIDLLocalVariableSetInfoInternal,
    observableValue_Array_IDLLocalVariableInfo__Internal: observableValueArrayIDLLocalVariableInfoInternal,
    colorTokensState_Internal: colorTokensStateInternal,
    writableObservableValue_ColorTokens__Internal: writableObservableValueColorTokensInternal,
  }
}

// --- Exported aliases for compatibility ---
export const Al = documentStateTsApi
export const Bb = MutableObservableValueArrayIDLLocalVariableInfo
export const F3 = MutableColorTokensState
export const HG = VariableErrorType
export const Hc = figmaScopeBindings
export const IX = assetConsumptionBindings
export const JT = OperationType
export const KO = getBindings
export const LQ = initBindings
export const P5 = assetBindings
export const So = SymbolInstanceType
export const Uz = FromToDirection
export const Z_ = VariableDataType
export const aB = MutableObservableValueArrayIDLSubscribedVariableSetInfo
export const ei = DimensionErrorType
export const ms = interactionTestHelpers
export const on = MutableObservableValueArrayIDLSubscribedVariableInfo
export const rX = VariableResolvedDataType
export const tX = MutableObservableValueArrayIDLLocalVariableSetInfo
export const u4 = variablesMirrorManager
export const uC = UserAppType
export const v4 = VariantType

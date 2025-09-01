/**
 * WebSocket close codes for client-server communication
 * Original: $$n18
 */
export enum WebSocketCloseCodes {
  MANUAL_CLOSE = 1000,
  CLIENT_GOING_AWAY = 1001,
  SERVER_SESSION_LIMIT_REACHED = 4001,
  SERVER_IDLE = 4010,
  AUTH_FAIL = 4011,
  CLIENT_IDLE = 4012,
  SERVER_ERROR = 4013,
  CLIENT_ERROR = 4014,
}

/**
 * Priority levels for operations
 * Original: $$a8
 */
export enum PriorityLevels {
  P0 = 'p0',
  P1 = 'p1',
  P2 = 'p2',
  P3 = 'p3',
}

/**
 * File operation types
 * Original: $$s1
 */
export enum FileOperationTypes {
  FileBrowser = 'file_browser',
  CreateFile = 'create_file',
  LoadFile = 'load_file',
  EditFile = 'edit_file',
  SaveServer = 'save_server',
}

/**
 * Connection attempt types
 * Original: $$c17
 */
export enum ConnectionAttemptTypes {
  Initial = 'initial',
  Retry = 'retry',
  Reinitialization = 'reinitialization',
  LegacyReinitialization = 'refresh',
  LegacyInitial = 'initial_load',
}

/**
 * Connection modes
 * Original: $$u7
 */
export enum ConnectionModes {
  Initial = 'initial',
  Reconnect = 'reconnect',
  LegacyInitial = 'initial_load',
}

/**
 * Resource status types
 * Original: $$b16
 */
export enum ResourceStatus {
  Error = 'error',
  Loaded = 'loaded',
}

/**
 * Existence status
 * Original: $$v3
 */
export enum ExistenceStatus {
  Exists = 'exists',
}

/**
 * Subscription event types
 * Original: f
 */


// Type definitions
export interface NamedItem {
  name: string
}

export interface LoadingState<T> {
  status: 'loading' | 'errors' | 'loaded'
  data: T | null
  errors: any[] | null
}

export interface LoadedResource<T> {
  status: 'loaded'
  data: T
}

// Custom Error Classes
/**
 * Base computation error
 * Original: $$A12
 */
export class ComputationError extends Error {}

/**
 * Error with specific error code
 * Original: $$y15
 */
export class CodedError extends Error {
  constructor(public readonly errorCode: string) {
    super()
    this.errorCode = errorCode
  }
}
interface TypedReference {
  type: string
  ref: string
}

// Utility Functions
/**
 * Type guard to check if object has 'type' property
 * Original: $$r11
 */
export function hasTypeProperty(value: unknown): value is TypedReference {
  return value !== null && typeof value === 'object' && 'type' in value
}

/**
 * Find item by name in array
 * Original: $$o4
 */
export function findItemByName<T extends NamedItem>(
  items: T[] | undefined,
  targetName: string,
): T | null {
  if (items) {
    for (const item of items) {
      if (item.name === targetName) {
        return item
      }
    }
  }
  return null
}

/**
 * Deep equality comparison for objects and arrays
 * Original: $$l13
 */
export function deepEqual(obj1: any, obj2: any): boolean {
  if (obj1 === null || obj2 === null || obj1 === undefined || obj2 === undefined) {
    return obj1 === obj2
  }

  for (const key in obj1) {
    const value1 = obj1[key]
    const value2 = obj2[key]

    if (value1 === undefined) {
      if (value2 !== undefined) {
        return false
      }
    }
    else if (Array.isArray(value1)) {
      if (!Array.isArray(value2) || !arraysEqual(value1, value2)) {
        return false
      }
    }
    else if (value1 !== value2) {
      return false
    }
  }

  return Object.keys(obj1).length === Object.keys(obj2).length
}

/**
 * Helper function for array equality comparison
 */
function arraysEqual(arr1: any[], arr2: any[]): boolean {
  if (arr1 === arr2)
    return true
  if (arr1 == null || arr2 == null || arr1.length !== arr2.length)
    return false

  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i])
      return false
  }
  return true
}

// State Management
/**
 * Unique symbol for internal identification
 * Original: $$d14
 */
export const INTERNAL_SYMBOL = Symbol('')

/**
 * Default loading state
 * Original: $$p2
 */
export const DEFAULT_LOADING_STATE: LoadingState<any> = Object.freeze({
  status: 'loading',
  data: null,
  errors: null,
})

/**
 * Create initial loading state
 * Original: $$m6
 */
export function createLoadingState<T>(): LoadingState<T> {
  return DEFAULT_LOADING_STATE
}

/**
 * Create error state
 * Original: $$h9
 */
export function createErrorState<T>(errors: any[]): LoadingState<T> {
  return {
    status: 'errors',
    data: null,
    errors,
  }
}

/**
 * Create loaded state
 * Original: $$g10
 */
export function createLoadedState<T>(data: T, errors: any[] = []): LoadingState<T> {
  return {
    status: 'loaded',
    data,
    errors,
  }
}

/**
 * Create loaded resource
 * Original: $$I5
 */
export function createLoadedResource<T>(data: T): LoadedResource<T> {
  return {
    status: 'loaded',
    data,
  }
}

// Constants
/**
 * Default priority level
 * Original: $$E0
 */
export const DEFAULT_PRIORITY = 'p2'

// Legacy exports for backward compatibility
export const $M = DEFAULT_PRIORITY // $$E0
export const B0 = FileOperationTypes // $$s1
export const F5 = DEFAULT_LOADING_STATE // $$p2
export const RX = ExistenceStatus // $$v3
export const Rx = findItemByName // $$o4
export const Wk = createLoadedResource // $$I5
export const Xm = createLoadingState // $$m6
export const Xt = ConnectionModes // $$u7
export const aG = PriorityLevels // $$a8
export const e1 = createErrorState // $$h9
export const gB = createLoadedState // $$g10
export const l$ = hasTypeProperty // $$r11
export const lR = ComputationError // $$A12
export const lw = deepEqual // $$l13
export const rP = INTERNAL_SYMBOL // $$d14
export const rT = CodedError // $$y15
export const tT = ResourceStatus // $$b16
export const ty = ConnectionAttemptTypes // $$c17
export const x0 = WebSocketCloseCodes // $$n18

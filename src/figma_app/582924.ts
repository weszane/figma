import { waitForJoinStatus } from '../905/346794'
import { logInfo } from '../905/714362'
import { atomStoreManager } from '../figma_app/27355'
import { fullscreenValue } from '../figma_app/455680'
import { nc } from '../figma_app/474636'
import {
  IPagePlugin,
  LogToConsoleMode,
  Multiplayer,
  SchemaJoinStatus,
} from '../figma_app/763686'
import { isInteractionPathCheck } from '../figma_app/897289'

/**
 * Converts SchemaJoinStatus enum to string representation.
 * Original: $$m6
 */
export function getJoinStatusString(status: SchemaJoinStatus): string {
  switch (status) {
    case SchemaJoinStatus.UNJOINED:
      return 'unjoined'
    case SchemaJoinStatus.UNJOINED_FROM_ERROR:
      return 'unjoined_from_error'
    case SchemaJoinStatus.UNJOINED_FROM_VALIDATION_FAILURE:
      return 'unjoined_from_validation_failure'
    case SchemaJoinStatus.GOT_SCHEMA:
      return 'got_schema'
    case SchemaJoinStatus.JOINING_INITIAL_LOAD:
      return 'joining_initial_load'
    case SchemaJoinStatus.JOINING_RECONNECT:
      return 'joining_reconnect'
    case SchemaJoinStatus.JOINING_RECONNECT_AWAITING_QUERY_REPLY:
      return 'joining_reconnect_awaiting_query_reply'
    case SchemaJoinStatus.JOINED:
      return 'joined'
    case SchemaJoinStatus.SHOULD_UPGRADE:
      return 'should_upgrade'
    case SchemaJoinStatus.UPGRADING:
      return 'upgrading'
    case SchemaJoinStatus.WAITING_FOR_RELOAD:
      return 'waiting_for_reload'
    case SchemaJoinStatus.DETACHED:
      return 'detached'
    default:
      return 'unknown'
  }
}

let workerDelayFn: ((cb: () => void, delay: number) => void) | null = null
let flushDelay = 0
let isFlushing = false
let isIntervalSetup = false

/**
 * Sets up multiplayer connection state listeners and interval.
 * Original: $$g0
 */
export function setupConnectionStateHandler(): void {
  if (isIntervalSetup)
    return
  isIntervalSetup = true
  setInterval(() => {
    if (fullscreenValue.isReady()) {
      Multiplayer.updateConnectionStateIfNeeded(false)
    }
  }, 250)
  window.addEventListener('online', () => {
    if (navigator.onLine && fullscreenValue.isReady()) {
      Multiplayer.updateConnectionStateIfNeeded(true)
    }
  })
  window.addEventListener('visibilitychange', () => {
    if (
      document.visibilityState === 'visible'
      && fullscreenValue.isReady()
    ) {
      Multiplayer.updateConnectionStateIfNeeded(true)
    }
  })
}

/**
 * Sets up a flush timer using a worker or fallback to setTimeout.
 * Original: $$f2
 */
export function setupFlushTimer(delay: number): void {
  if (!workerDelayFn) {
    workerDelayFn = (() => {
      try {
        const blob = new Blob([
          `(${function () {
            // Worker code for delay
            onmessage = e =>
              setTimeout(() => self.postMessage(''), e.data)
          }})()`,
        ], { type: 'text/javascript' })
        const worker = new Worker(URL.createObjectURL(blob))
        return (cb: () => void, ms: number) => {
          if (!worker.onmessage) {
            worker.onmessage = () => {
              worker.onmessage = null
              cb()
            }
            worker.postMessage(ms)
          }
        }
      }
      catch (err) {
        console.error(err)
        return (cb: () => void, ms: number) => setTimeout(cb, ms)
      }
    })()
  }
  flushDelay = delay
  if (!isFlushing) {
    (function flushLoop() {
      if (flushDelay) {
        isFlushing = true
        workerDelayFn!(() => {
          isFlushing = false
          if (flushDelay) {
            Multiplayer.flush()
            flushLoop()
          }
        }, flushDelay)
      }
    })()
  }
}

/**
 * Starts loading all pages and returns a promise that resolves when done.
 * Original: $$E9
 */
export function loadAllPagesAndTrack(t: any): Promise<void> {
  const sessionId = getNextSessionId()
  const promise = createSessionPromise(sessionId)
  Multiplayer.startLoadingAllPages(sessionId, t)
  promise.then(() => {
    atomStoreManager.set(nc, false)
  })
  return promise
}

/**
 * Subscribes to GUIDs and returns a promise for completion.
 * Original: $$y8
 */
export function subscribeToGuidsAndTrack(
  guids: any,
  callback: any,
): Promise<void> {
  const sessionId = getNextSessionId()
  const promise = createSessionPromise(sessionId)
  Multiplayer.subscribeToGuids(guids, sessionId, callback)
  return promise
}

/**
 * Checks if session is incremental or validating incremental.
 * Original: $$b3
 */
export function isIncrementalSessionOrValidating(): boolean {
  return Multiplayer.isIncrementalSession() || Multiplayer.isValidatingIncremental()
}

let sessionCounter = 1
const sessionPromiseMap = new Map<number, [(value?: unknown) => void, () => void]>()

/**
 * Generates a new session ID.
 * Original: $$S1
 */
export function getNextSessionId(): number {
  return sessionCounter++
}

/**
 * Creates a promise for a session ID.
 * Original: $$v5
 */
export function createSessionPromise(sessionId: number): Promise<void> {
  return new Promise((resolve, reject) => {
    sessionPromiseMap.set(sessionId, [resolve, reject])
  })
}

/**
 * Resolves a session promise.
 * Original: $$A7
 */
export function resolveSessionPromise(sessionId: number): void {
  const handlers = sessionPromiseMap.get(sessionId)
  if (handlers) {
    const [resolve] = handlers
    resolve()
    sessionPromiseMap.delete(sessionId)
  }
}

/**
 * Rejects all session promises.
 * Original: $$x11
 */
export function rejectAllSessionPromises(): void {
  sessionPromiseMap.forEach(([_, reject]) => {
    reject()
  })
  sessionPromiseMap.clear()
}

/**
 * Subscribes to containing page and returns a promise.
 * Original: $$N4
 */
export function subscribeToContainingPage(
  page: any,
  callback: any,
  pluginType: IPagePlugin = IPagePlugin.CONTAINING_PAGE,
): Promise<void> {
  isInteractionPathCheck()
  const sessionId = getNextSessionId()
  const promise = createSessionPromise(sessionId)
  const isPlugin = pluginType === IPagePlugin.PLUGIN
  Multiplayer.subscribeToContainingPage__DO_NOT_USE_DIRECTLY(
    page,
    sessionId,
    callback,
    isPlugin,
  )
  return promise
}

/**
 * Subscribes to multiple containing pages and returns a promise.
 * Original: $$C10
 */
export function subscribeToContainingPages(
  pages: any[],
  callback: any,
  pluginType: IPagePlugin = IPagePlugin.CONTAINING_PAGE,
): Promise<void> {
  if (pages.length === 0)
    return Promise.resolve()
  isInteractionPathCheck()
  const sessionId = getNextSessionId()
  const promise = createSessionPromise(sessionId)
  const isPlugin = pluginType === IPagePlugin.PLUGIN
  Multiplayer.subscribeToContainingPages__DO_NOT_USE_DIRECTLY(
    pages,
    sessionId,
    callback,
    isPlugin,
  )
  return promise
}

/**
 * Checks if a node is downloaded.
 * Original: $$w13
 */
export function isNodeDownloaded(node: any): boolean {
  return !!Multiplayer && Multiplayer.isNodeDownloaded(node)
}

/**
 * Autosave subscribe to containing pages with retry logic.
 * Original: $$O12
 */
export function autosaveSubscribeWithRetry(nodes: Set<string>){
  const subscribe = () => {
    const sessionId = getNextSessionId()
    return new Promise(async (resolve, reject) => {
      nodes.delete('0:0')
      logInfo(
        'Autosave',
        `Requesting dependencies for ${nodes.size} nodes while loading incrementally`,
        undefined,
        { logToConsole: LogToConsoleMode.ALWAYS },
      )
      await waitForJoinStatus(SchemaJoinStatus.JOINED)
      sessionPromiseMap.set(sessionId, [resolve, reject])
      Multiplayer.autosaveSubscribeToContainingPages(nodes, sessionId)
    }).catch(() => subscribe())
  }
  return subscribe()
}

// Exported names refactored to match new function names
export const LD = getJoinStatusString
export const AW = setupConnectionStateHandler
export const Cd = setupFlushTimer
export const W5 = loadAllPagesAndTrack
export const Tj = subscribeToGuidsAndTrack
export const Ff = isIncrementalSessionOrValidating
export const Ak = getNextSessionId
export const Ki = createSessionPromise
export const PV = resolveSessionPromise
export const Xk = rejectAllSessionPromises
export const IL = subscribeToContainingPage
export const WA = subscribeToContainingPages
export const mQ = isNodeDownloaded
export const Xl = autosaveSubscribeWithRetry

import { sendMetric } from '../905/485103'
import { handleOOMError } from '../905/707384'

let memoryPerformanceKeys = ['memory.fullscreen.', 'performance.fullscreen.']
/**
 * Tracks whether error handling is enabled.
 * @original s
 */
let errorHandlingEnabled = true

/**
 * Creates a throttled callback that only executes the handler if the specified interval has passed.
 * @param intervalSeconds - Minimum interval between calls in seconds.
 * @param handler - Function to execute.
 * @returns Throttled function.
 * @original o
 */
function createThrottledCallback(intervalSeconds: number, handler: () => void): () => void {
  let lastCalled = -Infinity
  return () => {
    const now = Date.now() / 1e3
    if (now - lastCalled > intervalSeconds) {
      lastCalled = now
      handler()
    }
  }
}

/**
 * Global error event listener for unhandled errors.
 * @original window.addEventListener('error', ...)
 */
window.addEventListener('error', (event) => {
  if (!errorHandlingEnabled)
    return
  errorHandlingEnabled = false

  const { message, filename } = event
  const isAbort = /abort/i.test(message)
  const isFullscreen = /\/compiled_/.test(filename)
  sendMetric('unhandled_error', {
    abort: isAbort,
    fullscreen: isFullscreen,
  })
})

/**
 * Throttled callback for context lost events.
 * @original $$l8
 */
const contextLostHandler = createThrottledCallback(30, () => {
  sendMetric('context_lost')
})

/**
 * Throttled callback for context restored events.
 * @original $$d10
 */
const contextRestoredHandler = createThrottledCallback(30, () => {
  sendMetric('context_restored')
})

/**
 * Posts performance testing metrics to the window.
 * @param name - Metric name.
 * @original $$c11
 */
export function postPerfMetric(name: string): void {
  if (window.figmaPerfTesting) {
    window.postMessage({
      name,
      value: performance.now() / 1e3,
    }, '*')
  }
}

/**
 * Sends a metric indicating the document is dirty after load.
 * @original $$u9
 */
export function sendDirtyAfterLoad(): void {
  sendMetric('dirty_after_load')
}

/**
 * Sends a metric for consecutive flushes.
 * @original $$p0
 */
export function sendConsecutiveFlushes(): void {
  sendMetric('consecutive_flushes')
}

/**
 * Sends a metric for consecutive image change skips.
 * @original $$_6
 */
export function sendConsecutiveImageChangeSkips(): void {
  sendMetric('consecutive_image_change_skips')
}

/**
 * Sends a metric for image paste errors.
 * @original $$h4
 */
export function sendImagePasteError(): void {
  sendMetric('image_paste_error')
}

/**
 * Sends a metric for unsaved changes bell notification.
 * @original $$m3
 */
export function sendUnsavedChangesBell(): void {
  sendMetric('unsaved_changes_bell')
}

/**
 * Sends a metric for autosave notifications.
 * @original $$g5
 */
export function sendAutosaveNotification(): void {
  sendMetric('autosave_notification')
}

/**
 * Sends a metric for reconnecting banner.
 * @param client - Client identifier.
 * @original $$f2
 */
export function sendReconnectingBanner(client: string): void {
  sendMetric('reconnecting_banner', {
    client,
  })
}

/**
 * Handles out-of-memory errors.
 * @param error - Error object.
 * @original $$E7
 */
export function handleOutOfMemoryError(error: any): any {
  return handleOOMError(error, true, error.productType)
}

// Exported constants with refactored names
export const YJ = sendConsecutiveFlushes
export const Ad = memoryPerformanceKeys
export const B3 = sendReconnectingBanner
export const Hh = sendUnsavedChangesBell
export const Jj = sendImagePasteError
export const Mw = sendAutosaveNotification
export const S = sendConsecutiveImageChangeSkips
export const Y7 = handleOutOfMemoryError
export const ai = contextLostHandler
export const f1 = sendDirtyAfterLoad
export const kJ = contextRestoredHandler
export const s$ = postPerfMetric

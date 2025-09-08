import { SyncError } from '../figma_app/13528'

/**
 * Stores the latest sync event.
 * @originalName r
 */
let latestSyncEvent: any = null

/**
 * Stores resolve callbacks for pending sync promises.
 * @originalName a
 */
let resolveCallbacks: Array<() => void> = []

/**
 * Stores reject callbacks for pending sync promises.
 * @originalName s
 */
let rejectCallbacks: Array<(error: Error) => void> = []

/**
 * Maps SyncError codes to Error objects.
 * @param errorCode - The error code from SyncError.
 * @returns Error object or null if no error.
 * @originalName o
 */
function mapSyncError(errorCode: SyncError): Error | null {
  switch (errorCode) {
    case SyncError.NONE:
      return null
    case SyncError.SCENEGRAPH_VALIDATION_ERROR:
      return new Error('Scenegraph validation failure')
    case SyncError.NON_ATOMIC_SYNC_ERROR:
      return new Error('Could not sync atomically')
    default:
      return new Error('Unknown sync error')
  }
}

/**
 * Handles a sync event, resolving or rejecting pending promises.
 * @param event - The sync event object.
 * @originalName $$l0
 */
export function handleSyncEvent(event: { error: SyncError, unsaved: { hasMultiplayerChanges: boolean } }): void {
  const error = mapSyncError(event.error)
  if (error) {
    // Reject all pending promises with error
    for (const reject of rejectCallbacks) reject(error)
    rejectCallbacks = []
    resolveCallbacks = []
  }
  else if (!event.unsaved.hasMultiplayerChanges) {
    // Resolve all pending promises
    for (const resolve of resolveCallbacks) resolve()
    rejectCallbacks = []
    resolveCallbacks = []
  }
  latestSyncEvent = event
}

/**
 * Returns a promise that resolves or rejects based on the latest sync event.
 * @returns Promise<void>
 * @originalName $$d1
 */
export function awaitSync(): Promise<void> {
  if (latestSyncEvent) {
    const error = mapSyncError(latestSyncEvent.error)
    if (error)
      return Promise.reject(error)
    if (!latestSyncEvent.unsaved.hasMultiplayerChanges)
      return Promise.resolve()
  }
  return new Promise<void>((resolve, reject) => {
    resolveCallbacks.push(resolve)
    rejectCallbacks.push(reject)
  })
}

// Export refactored names
export const g = handleSyncEvent
export const l = awaitSync

import { throttle } from 'lodash-es'
import { logAutosaveError } from '../905/327522'
import { IpcStorageHandler } from '../905/724705'

/**
 * Handler for IPC storage operations.
 */
export const ipcStorageHandler = new IpcStorageHandler()

/**
 * Key for restored autosave state.
 */
export const restoredAutosaveKey = 'restored-autosave'

/**
 * Message for autosave commit changes.
 */
export const autosaveCommitMessage = 'Autosave Commit Changes'

/**
 * Event name for autosave new files update.
 */
export const autosaveNewFilesUpdate = 'autosave-new-files-update'

/**
 * Event name for autosave new files delete.
 */
export const autosaveNewFilesDelete = 'autosave-new-files-delete'

/**
 * Event name for autosave new file sync start.
 */
export const autosaveNewFileSyncStart = 'autosave-new-file-sync-start'

/**
 * Throttled function to notify all tabs of new files update.
 * Throttled to prevent excessive calls within 1 second.
 * @param ipcStorageHandler - The IPC storage handler instance.
 * @param autosaveNewFilesUpdate - The event name for the update.
 */
export const throttledNotifyNewFilesUpdate = throttle(() => {
  try {
    ipcStorageHandler.sendToAllTabs(autosaveNewFilesUpdate)
  }
  catch (e) {
    logAutosaveError('Failed to notify all tabs of new files update', {
      error: e.message,
    })
  }
}, 1000)

export const Cr = autosaveCommitMessage
export const HZ = throttledNotifyNewFilesUpdate
export const a = restoredAutosaveKey
export const c6 = autosaveNewFilesDelete
export const ec = autosaveNewFilesUpdate
export const hp = ipcStorageHandler
export const m6 = autosaveNewFileSyncStart

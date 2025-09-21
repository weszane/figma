import { reportError } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { atom, atomStoreManager } from '../figma_app/27355'
import { AutosaveHelpers } from '../figma_app/763686'
/**
 * StatusEnum - Original: $$o2
 * Represents the status of the file system changes.
 */
export enum FileProcessingStatus {
  NEW_FILE = 0,
  EXISTING_FILE = 1,
  WAITING = 2,
  FINISHED_WAITING = 3,
}

/**
 * autosaveAtom - Original: $$l5
 * Atom to store autosave status and timeout handle.
 */
export const autosaveAtom = atom({
  status: FileProcessingStatus.EXISTING_FILE,
  timeoutHandle: null as null | ReturnType<typeof setTimeout>,
})

/**
 * getAutosaveState - Original: $$d1
 * Returns the current autosave state from atomStoreManager.
 */
export function getAutosaveState() {
  return atomStoreManager.get(autosaveAtom)
}

/**
 * startAutosaveWait - Original: $$c0
 * Initiates waiting for autosave if only new file system changes exist and online.
 * @param onTimeout Callback to execute after timeout.
 * @returns {boolean} True if waiting started, false otherwise.
 */
export function startAutosaveWait(onTimeout: () => void): boolean {
  const state = getAutosaveState()
  if (
    state.status !== FileProcessingStatus.NEW_FILE
    || !AutosaveHelpers
    || !AutosaveHelpers.hasOnlyNewFileSystemChanges()
    || !navigator.onLine
  ) {
    return false
  }

  const timeoutHandle = setTimeout(() => {
    finishAutosaveWait(true)
    onTimeout()
  }, 10000)

  updateAutosaveStateToWaiting(timeoutHandle)
  return true
}

/**
 * finishAutosaveWait - Original: $$u4
 * Finishes waiting for autosave, clears timeout if necessary.
 * @param fromTimeout Indicates if called from timeout.
 */
export function finishAutosaveWait(fromTimeout: boolean) {
  const state = getAutosaveState()
  state.status = FileProcessingStatus.FINISHED_WAITING
  if (!fromTimeout) {
    if (state.timeoutHandle) {
      clearTimeout(state.timeoutHandle)
    }
    else {
      reportError(
        ServiceCategories.SCENEGRAPH_AND_SYNC,
        new Error('Finished waiting but no timeout handle'),
      )
    }
  }
  state.timeoutHandle = null
  atomStoreManager.set(autosaveAtom, state)
}

/**
 * updateAutosaveStateToWaiting - Helper for startAutosaveWait
 * Updates atom state to WAITING and sets timeout handle.
 * @param timeoutHandle Timeout handle to store.
 */
function updateAutosaveStateToWaiting(timeoutHandle: ReturnType<typeof setTimeout>) {
  const state = getAutosaveState()
  state.status = FileProcessingStatus.WAITING
  state.timeoutHandle = timeoutHandle
  atomStoreManager.set(autosaveAtom, state)
}

/**
 * setAutosaveStatus - Original: $$p3
 * Sets autosave status to NEW_FILE or EXISTING_FILE and clears timeout.
 * @param isNewFile True if status should be NEW_FILE, false for EXISTING_FILE.
 */
export function setAutosaveStatus(isNewFile: boolean) {
  const state = getAutosaveState()
  state.status = isNewFile ? FileProcessingStatus.NEW_FILE : FileProcessingStatus.EXISTING_FILE
  if (state.timeoutHandle) {
    clearTimeout(state.timeoutHandle)
  }
  state.timeoutHandle = null
  atomStoreManager.set(autosaveAtom, state)
}

// Export original variable names for compatibility
export const QY = FileProcessingStatus // $$o2
export const vE = autosaveAtom // $$l5
export const Js = getAutosaveState // $$d1
export const Ed = startAutosaveWait // $$c0
export const pi = finishAutosaveWait // $$u4
export const Yu = setAutosaveStatus // $$p3

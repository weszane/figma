import { setTagGlobal } from "../905/11"
import { isActiveAtom } from "../905/617744"
import { fullscreenCrashHandler } from "../905/913008"
import { atomStoreManager } from "../figma_app/27355"
import { getProductType } from "../figma_app/314264"
import { getMemoryUsage } from "../figma_app/527873"
import { handleOutOfMemoryError } from "../figma_app/553184"
import { SchemaJoinStatus, UIVisibilitySetting } from "../figma_app/763686"
import { BrowserInfo } from "../figma_app/778880"

export class MemoryStateManager {
  _fullscreenCrashed: boolean
  _receivedFailedAllocation: boolean
  _lastAction: string | null
  _lastWebContextMessage: string | null
  _fileLoadTime: number | null

  constructor() {
    this._fullscreenCrashed = false
    this._receivedFailedAllocation = false
    this._lastAction = null
    this._lastWebContextMessage = null
    this._fileLoadTime = null
  }

  /**
   * Constructs out-of-memory state information
   * (Original name: oomState)
   */
  protected buildOOMState(baseState: Record<string, unknown>): Record<string, unknown> {
    const totalMemoryInBytes = getMemoryUsage()
    const fileLoadTime = this._fileLoadTime
    const timeSinceFileLoad = fileLoadTime ? window.performance.now() - fileLoadTime : 0

    return {
      ...baseState,
      totalMemoryInBytes,
      fileLoaded: !!fileLoadTime,
      timeSinceFileLoad,
      is64BitBrowser: BrowserInfo.is64BitBrowser,
      lastAction: this._lastAction,
      lastWebContextMessage: this._lastWebContextMessage,
    }
  }

  /**
   * Marks the document as loaded by recording the current time
   * (Original name: documentIsLoaded)
   */
  markDocumentLoaded(): void {
    this._fileLoadTime = window.performance.now()
  }

  /**
   * Resets out-of-memory tracking state
   * (Original name: resetOOMState)
   */
  resetOOMTracking(): void {
    this._fileLoadTime = null
    this._lastAction = null
  }

  /**
   * Records an action for out-of-memory reporting
   * (Original name: recordActionForReportingOOM)
   * @param action - The action to record
   */
  recordActionForOOM(action: string): void {
    this._lastAction = action
  }
}

export class OutOfMemoryHandler extends MemoryStateManager {
  _store: any

  /**
   * Gets the current application state
   * (Original name: _state)
   */
  protected get currentState(): any {
    if (!this._store) {
      throw new Error("Calling currentState without a valid store")
    }
    return this._store.getState()
  }

  constructor(store: any) {
    super()
    this._store = store
  }

  /**
   * Gets the currently open file key
   * (Original name: openFileKey)
   */
  openFileKey() {
    return this.currentState.openFile?.key || null
  }

  /**
   * Handles allocation failure events
   * (Original name: allocationFailed)
   */
  handleAllocationFailure(
    heapMemoryMode: any,
    heapMemoryLimit: number,
    mallocHighWatermark: number,
    currentAllocatedBytes: number,
    maxAllocatedBytes: number,
    failedSize: number,
    fontBytes: number,
    migration: any,
    migrationFrom: any,
    migrationTo: any,
  ): void {
    // Prevent duplicate handling
    if (this._receivedFailedAllocation) {
      return
    }

    // Mark OOM event
    setTagGlobal("wasm_oom", "yes")
    this._receivedFailedAllocation = true

    // Calculate memory metrics
    const totalMemoryInBytes = getMemoryUsage()
    const failedSizeKB = (failedSize / 1024).toFixed(1)
    const highWatermarkMB = (mallocHighWatermark / 1024 / 1024).toFixed(1)
    const totalReservedMB = (totalMemoryInBytes / 1024 / 1024).toFixed(1)

    // Log memory failure details
    console.log(`malloc of size ${failedSizeKB}KB failed
        (high water mark was ${highWatermarkMB}MB,
        total reserved memory was ${totalReservedMB}MB)`)

    // Build OOM state information
    const oomStateData = this.buildOOMState({
      heapMemoryMode,
      heapMemoryLimit,
      mallocHighWatermark,
      currentAllocatedBytes,
      maxAllocatedBytes,
      failedSize,
      fontBytes,
      migration,
      migrationFrom,
      migrationTo,
    })

    // Handle OOM error with full context
    handleOutOfMemoryError({
      ...oomStateData,
      progressBarMode: UIVisibilitySetting[this.currentState.progressBarState.mode],
      multiplayerSessionState: SchemaJoinStatus[this.currentState.mirror.appModel.multiplayerSessionState],
      editingFileKey: this.openFileKey(),
      isReadOnly: this.currentState.mirror.appModel.isReadOnly,
      appType: "editor",
      productType: getProductType(this.currentState.selectedView, null),
    })

    // Show crash modal
    const isBranching = atomStoreManager.get(isActiveAtom)
    fullscreenCrashHandler.showMemoryCrashModal(
      {
        isBranching,
      },
      this.openFileKey(),
      this._store,
    )
  }
}

export const Q = MemoryStateManager
export const a = OutOfMemoryHandler

/**
 * Manages file creation state and cancellation
 * Original class name: n
 */
class FileCreationManager {
  private _isCanceled: boolean = false
  private _onCanceled: (() => void) | null = null
  private _resolveCompletionPromise: () => void = () => { }
  private _promise: Promise<void>

  constructor() {
    this._promise = new Promise((resolve) => {
      this._resolveCompletionPromise = resolve
    })
  }

  /**
   * Cancels the file creation process
   */
  cancel(): void {
    this._isCanceled = true
    if (this._onCanceled) {
      this._onCanceled()
    }
  }

  /**
   * Sets a callback to be executed when cancellation occurs
   * @param callback - Function to call on cancellation
   */
  setOnCanceled(callback: () => void): void {
    this._onCanceled = callback
  }

  /**
   * Gets the cancellation status
   */
  get isCanceled(): boolean {
    return this._isCanceled
  }

  /**
   * Resolves the completion promise
   */
  done(): void {
    this._resolveCompletionPromise()
  }

  /**
   * Returns a promise that resolves when the file creation is completed
   */
  waitForCompletion(): Promise<void> {
    return this._promise
  }
}

// Singleton instance for file creation management
let fileCreationManager: FileCreationManager | null = null

/**
 * Gets the current file creation manager instance
 * Original function name: $$a2
 */
export function getFileCreationManager(): FileCreationManager | null {
  return fileCreationManager
}

/**
 * Checks if file creation is in progress
 * Original function name: $$s3
 */
export function isFileCreationInProgress(): boolean {
  return !!fileCreationManager
}

/**
 * Initializes a new file creation process
 * Original function name: $$o0
 */
export function startFileCreation(): FileCreationManager {
  if (fileCreationManager) {
    throw new Error("File creation already in progress")
  }
  return fileCreationManager = new FileCreationManager()
}

/**
 * Completes the current file creation process
 * Original function name: $$l1
 */
export function completeFileCreation(): void {
  if (!fileCreationManager) {
    throw new Error("No file creation in progress")
  }
  fileCreationManager.done()
  fileCreationManager = null
}

// Export aliases for backward compatibility
export const E7 = startFileCreation
export const UT = completeFileCreation
export const aZ = getFileCreationManager
export const gD = isFileCreationInProgress

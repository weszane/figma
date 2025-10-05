import { localStorageRef } from '../905/657224'

const IPC_PREFIX = 'ipc:'

/**
 * Handles cross-tab communication using localStorage events.
 * Original class name: $$a0
 */
export class IpcStorageHandler {
  private storage: Storage
  private callbacks: Record<string, Array<(payload: any) => void>>
  private _onStorageEvent: (e: StorageEvent) => void

  constructor() {
    this.storage = localStorageRef
    this.callbacks = {}

    /**
     * Handles the 'storage' event and dispatches messages to registered callbacks.
     * Original method name: _onStorageEvent
     */
    this._onStorageEvent = (event: StorageEvent) => {
      const key = event.key
      if (
        event.storageArea === this.storage
        && event.newValue !== null
        && key?.startsWith(IPC_PREFIX)
      ) {
        let payload: any = null
        try {
          payload = JSON.parse(event.newValue)[0]
        }
        catch {
          // Ignore malformed JSON
          return
        }
        let thrownError: any = null
        for (const callback of this.callbacks[key] || []) {
          try {
            callback(payload)
          }
          catch (err) {
            thrownError = err
          }
        }
        if (thrownError)
          throw thrownError
      }
    }

    // Clean up any existing IPC messages in storage
    if (this.storage) {
      for (const key of Object.keys(this.storage)) {
        if (key.startsWith(IPC_PREFIX)) {
          delete this.storage[key]
        }
      }
    }

    window.addEventListener('storage', this._onStorageEvent, false)
  }

  /**
   * Returns the callback array for a given message key, creating it if necessary.
   * Original method name: _callbacksForMessage
   */
  private getCallbacksForMessage(message: string): Array<(payload: any) => void> {
    const key = IPC_PREFIX + message
    if (!this.callbacks[key]) {
      this.callbacks[key] = []
    }
    return this.callbacks[key]
  }

  /**
   * Sends a message to other tabs via localStorage.
   * Original method name: sendToOtherTabs
   */
  sendToOtherTabs(message: string, payload: any = {}): void {
    if (this.storage) {
      try {
        this.storage[IPC_PREFIX + message] = JSON.stringify([payload, Math.random()])
      }
      catch (err: any) {
        console.error(`${err && err.stack || err}`)
      }
    }
  }

  /**
   * Sends a message to all registered callbacks and other tabs.
   * Original method name: sendToAllTabs
   */
  sendToAllTabs(message: string, payload: any = {}): void {
    const callbacks = this.getCallbacksForMessage(message)
    let thrownError: any = null
    for (const callback of callbacks) {
      try {
        callback(payload)
      }
      catch (err) {
        thrownError = err
      }
    }
    this.sendToOtherTabs(message, payload)
    if (thrownError)
      throw thrownError
  }

  /**
   * Registers a callback for a specific message.
   * Original method name: register
   */
  register(message: string, callback: (payload: any) => void): void {
    const callbacks = this.getCallbacksForMessage(message)
    if (!callbacks.includes(callback)) {
      callbacks.push(callback)
    }
  }

  /**
   * Unregisters a callback for a specific message.
   * Original method name: unregister
   */
  unregister(message: string, callback: (payload: any) => void): void {
    const callbacks = this.getCallbacksForMessage(message)
    const idx = callbacks.indexOf(callback)
    if (idx >= 0) {
      callbacks.splice(idx, 1)
    }
  }
}

// Export with original variable name for compatibility
export const P = IpcStorageHandler

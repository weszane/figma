import { createDeferredPromise } from '../905/874553'

/**
 * Manages a retained resource and its associated promise lifecycle.
 * Original class name: $$r0
 */
export class RetainedPromiseManager {
  /** Function to retain the resource. Original: retainFn */
  retainFn: () => (() => void) | void
  /** Deferred promise object. Original: deferred */
  deferred: ReturnType<typeof createDeferredPromise>
  /** Unsubscribe/release function. Original: unsub */
  unsub: (() => void) | null

  /**
   * @param retainFn Function that retains the resource and returns a release function.
   */
  constructor(retainFn: () => (() => void) | void) {
    this.retainFn = retainFn
    this.unsub = null
    this.deferred = this.createDeferred()

    // Ensure promise errors are caught to avoid unhandled rejections.
    this.deferred.promise = this.deferred.promise.catch(() => { })
  }

  /**
   * Creates a new deferred promise.
   * Original: createDeferred
   */
  createDeferred() {
    const deferred = createDeferredPromise()
    deferred.promise = deferred.promise.catch(() => { })
    return deferred
  }

  /**
   * Returns the current deferred promise.
   * Original: getPromise
   */
  getPromise() {
    return this.deferred.promise
  }

  /**
   * Resolves the current deferred promise and creates a new one.
   * Original: resolve
   */
  resolve() {
    this.deferred?.resolve()
    this.deferred = this.createDeferred()
  }

  /**
   * Rejects the current deferred promise and creates a new one.
   * Original: reject
   * @param error Error to reject with.
   */
  reject(error: unknown) {
    this.deferred?.reject(error)
    this.deferred = this.createDeferred()
  }

  /**
   * Registers an external promise and resolves/rejects accordingly.
   * Original: registerPromise
   * @param promise Promise to register.
   */
  registerPromise(promise: Promise<unknown>) {
    promise
      .then(() => {
        this.resolve()
      })
      .catch((error) => {
        this.reject(error)
      })
    this.deferred = this.createDeferred()
  }

  /**
   * Retains the resource and sets up release after promise settles.
   * Original: retain
   */
  retain() {
    if (!this.unsub) {
      const unsub = this.retainFn()
      if (typeof unsub === 'function') {
        this.unsub = unsub
      }
    }
    // Use finally to release after promise settles.
    this.deferred.promise.finally(() => {
      setTimeout(() => this.release(), 6000)
    })
  }

  /**
   * Releases the retained resource.
   * Original: release
   */
  release() {
    this.unsub?.()
    this.unsub = null
  }
}

// Refactored export name
export const W = RetainedPromiseManager

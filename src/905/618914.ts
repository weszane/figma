import { createDeferredPromise } from "../905/874553"
import { atomStoreManager } from "../figma_app/27355"

// Origin: /Users/allen/github/fig/src/905/618914.ts
// Refactored: Renamed variables, added types, simplified logic, added comments, ensured type safety

// Assumed external dependencies:
// - createDeferredPromise: returns { promise: Promise<T>, resolve: (value: T) => void, reject: (reason: any) => void }
// - atomStoreManager: provides get(key) and sub(key, callback) methods



// Refactored function to wait for atom store to load data or error
export function waitForAtomStore<T = any>(key: any): Promise<T> {
  const { promise, resolve, reject } = createDeferredPromise()

  // Handler for atom store updates
  const handleUpdate = (): void => {
    const atom: any = atomStoreManager.get(key)
    if (atom.status === "loaded") {
      resolve(atom.data as T)
      setTimeout(unsubscribe)
    }
    else if (atom.status === "errors") {
      reject(atom.errors)
      setTimeout(unsubscribe)
    }
    // If status is neither, keep waiting
  }

  // Unsubscribe function returned by atomStoreManager.sub
  const unsubscribe = atomStoreManager.sub(key, handleUpdate)

  // Immediately check current status
  handleUpdate()

  return promise
}

// Alias for backward compatibility
export const Q = waitForAtomStore

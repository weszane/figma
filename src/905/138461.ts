// Original code names: $$n2, $$r1, $$a0, Ph, ly, yp

/**
 * Interface for a lock object returned by requestLock.
 */
interface Lock {
  name: string
  release: () => Promise<void>
}

/**
 * Checks if the Web Locks API is supported.
 * Original: $$n2
 */
export const isLocksSupported: boolean = !!navigator.locks

/**
 * Requests a lock with the given name, returning a lock object if acquired, or null if not available.
 * If the Web Locks API is not supported, returns a mock lock object with a no-op release.
 * Original: $$r1
 * @param lockName - The name of the lock to request.
 * @returns A promise resolving to a Lock object or null.
 */
export async function requestLock(lockName: string): Promise<Lock | null> {
  if (!navigator.locks) {
    return { name: lockName, release: async () => {} }
  }

  return new Promise<Lock | null>((resolve) => {
    navigator.locks.request(lockName, { ifAvailable: true }, async (lock) => {
      if (!lock) {
        resolve(null)
        return
      }

      // Create a promise that resolves when the lock is released
      let resolveRelease: () => void
      const releasePromise = new Promise<void>((resolveRel) => {
        resolveRelease = resolveRel
      })

      const lockObject: Lock = {
        name: lockName,
        release: async () => {
          resolveRelease()
        },
      }

      resolve(lockObject)
      return releasePromise
    }).catch((error) => {
      // Delay throwing the error to avoid unhandled promise rejection
      setTimeout(() => {
        throw error
      })
    })
  })
}

/**
 * Checks if a lock with the given name is available.
 * Original: $$a0
 * @param lockName - The name of the lock to check.
 * @returns A promise resolving to true if the lock is available, false otherwise.
 */
export async function isLockAvailable(lockName: string): Promise<boolean> {
  if (!navigator.locks) {
    return true
  }
  return navigator.locks.request(lockName, { ifAvailable: true }, lock => !!lock)
}

// Refactored exports to match new function names
export const Ph = isLockAvailable
export const ly = requestLock
export const yp = isLocksSupported

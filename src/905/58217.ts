import { isLockAvailable, isLocksSupported, requestLock } from '../905/138461'
import { trackEventAnalytics } from '../905/449184'
import { Timer } from '../905/609396'
import { localStorageRef } from '../905/657224'
import { logError } from '../905/714362'

// Constants for ping mechanism
const PING_REQUEST_PREFIX = 'ping-request:'
const PING_RESPONSE_PREFIX = 'ping-response:'

/**
 * Generates a unique autosave key based on user ID, file key, and session ID.
 * Original: c
 * @param params - Object containing userID, fileKey, and sessionID
 * @returns The autosave key string
 */
function generateAutosaveKey({
  userID,
  fileKey,
  sessionID,
}: {
  userID: string
  fileKey: string
  sessionID: number
}): string {
  return `autosave-${userID}-${fileKey}-${sessionID}`
}

/**
 * Checks if the lock name matches the generated autosave key.
 * Original: $$u1
 * @param lock - The lock object with a name property
 * @param params - Object containing userID, fileKey, and sessionID
 * @returns True if the lock name matches
 */
export function isLockNameMatching(
  lock: { name: string },
  params: { userID: string, fileKey: string, sessionID: number },
): boolean {
  return lock.name === generateAutosaveKey(params)
}

/**
 * Performs a ping-pong mechanism using localStorage to check if a lock is available.
 * Original: inner function in $$p3
 * @param key - The autosave key
 * @returns Promise resolving to true if lock is available, false otherwise
 */
async function checkLockViaLocalStorage(key: string): Promise<boolean> {
  const storage = localStorageRef
  if (!storage) {
    throw new Error('Local storage not available')
  }

  const requestKey = PING_REQUEST_PREFIX + key
  const responseKey = PING_RESPONSE_PREFIX + key
  const timer = new Timer()
  let timedOut = false
  let resolvePromise: (value: boolean) => void
  const promise = new Promise<boolean>((resolve) => {
    resolvePromise = resolve
  })

  const cleanup = () => {
    storage.removeItem(requestKey)
    storage.removeItem(responseKey)
    window.removeEventListener('storage', handleStorage)
  }

  const handleStorage = (event: StorageEvent) => {
    if (
      event.storageArea === storage
      && event.newValue !== null
      && event.key === responseKey
    ) {
      timer.stop()
      cleanup()
      if (timedOut) {
        logError('storage', 'ping: responded after timeout interval')
      }
      else {
        resolvePromise(true)
      }
    }
  }

  storage.removeItem(requestKey)
  storage.removeItem(responseKey)
  window.addEventListener('storage', handleStorage)

  const timestamp = Date.now()
  storage.setItem(requestKey, timestamp.toString())
  timer.start()

  setTimeout(() => {
    setTimeout(cleanup, 10000) // Additional cleanup delay
    timedOut = true
    resolvePromise(false)
  }, 200)

  window.addEventListener('unload', cleanup)
  return promise
}

/**
 * Checks if a lock is available for the given autosave parameters.
 * Uses Web Locks API if supported, otherwise falls back to localStorage ping.
 * Original: $$p3
 * @param params - Object containing userID, fileKey, and sessionID
 * @returns Promise resolving to true if lock is available
 */
export async function isLockAvailableForAutosave(params: {
  userID: string
  fileKey: string
  sessionID: number
}): Promise<boolean> {
  const key = generateAutosaveKey(params)
  if (isLocksSupported) {
    return !(await isLockAvailable(key))
  }
  else {
    return await checkLockViaLocalStorage(key)
  }
}

/**
 * Checks if an autosave lock is available, using sessionID 0.
 * Original: $$m2
 * @param userID - The user ID
 * @param file - Object containing fileKey
 * @returns Promise resolving to true if lock is available
 */
export async function isAutosaveLockAvailable(
  userID: string,
  file: { fileKey: string },
): Promise<boolean> {
  return await isLockAvailableForAutosave({
    userID,
    fileKey: file.fileKey,
    sessionID: 0,
  })
}

/**
 * Registers a ping listener for localStorage-based locking.
 * Original: inner function in $$h0
 * @param key - The autosave key
 * @returns Object with unregister method
 */
function registerPingListener(key: string) {
  const storage = localStorageRef
  if (!storage) {
    throw new Error('Local storage not available')
  }

  const requestKey = PING_REQUEST_PREFIX + key
  const responseKey = PING_RESPONSE_PREFIX + key
  storage.removeItem(responseKey)

  const handleStorage = (event: StorageEvent) => {
    if (
      event.storageArea === storage
      && event.newValue !== null
      && event.key === requestKey
    ) {
      const timestamp = Date.now()
      storage.setItem(responseKey, timestamp.toString())
      setTimeout(() => {
        storage.removeItem(requestKey)
        storage.removeItem(responseKey)
      }, 1000)
    }
  }

  window.addEventListener('storage', handleStorage, false)
  return {
    unregister: () => window.removeEventListener('storage', handleStorage, false),
  }
}

/**
 * Acquires a lock for autosave, using Web Locks API if supported, otherwise localStorage.
 * Original: $$h0
 * @param params - Object containing userID, fileKey, and sessionID
 * @returns Promise resolving to the lock object or null if failed
 */
export async function acquireAutosaveLock(params: {
  userID: string
  fileKey: string
  sessionID: number
}): Promise<{ name: string, release: () => Promise<void> } | null> {
  const key = generateAutosaveKey(params)
  let lock = null

  if (isLocksSupported) {
    lock = await requestLock(key)
  }
  else {
    const listener = registerPingListener(key)
    lock = {
      name: key,
      release: () => {
        listener.unregister()
        return Promise.resolve()
      },
    }
  }

  if (!lock) {
    trackEventAnalytics('autosave_acquiring_lock_failed', {
      lockName: key,
      sessionID: params.sessionID,
      webLocksAvailable: isLocksSupported,
    })
  }

  return lock
}

// Refactored exports with meaningful names
export const A2 = acquireAutosaveLock
export const LX = isLockNameMatching
export const M = isAutosaveLockAvailable
export const mc = isLockAvailableForAutosave

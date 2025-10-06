import type { Atom } from 'jotai'
import type { AtomFamily } from 'jotai/vanilla/utils/atomFamily'
import type { ResourceView } from '../figma_app/43951'
import { noop } from 'lodash-es'
import { serializeJSON } from '../905/251556'
import { deepEqual } from '../905/382883'
import { observableState } from '../905/441145'
import { RetainedPromiseManager } from '../905/491061'
import { getFeatureFlags } from '../905/601108'
import { createLoadingState } from '../905/957591'
import { resourceUtils } from '../905/989992'
import { atom, atomStoreManager, atomWithDefault, createRemovableAtomFamily, setupAtomWithMount } from '../figma_app/27355'

/**
 * Type for cache values stored in ExpiringCache (class u)
 */

/**
 * Scheduler interface for cache expiration
 */
/**
 * Type for cache values stored in ExpiringCache (class ExpiringCache)
 */
interface ExpiringCacheEntry<T> {
  value: T
  expiresAt: number
}

/**
 * Scheduler interface for cache expiration (original: defaultCacheScheduler)
 */
export interface CacheScheduler {
  expireIn: (fn: () => void, ms: number) => any
  now: () => number
  clearExpireIn: (id: any) => void
}

/**
 * ExpiringCache (original class u)
 * Stores key-value pairs with expiration logic.
 */
export class ExpiringCache<T = any> {
  cacheScheduler: CacheScheduler
  cacheTTL: number
  values: Map<string, ExpiringCacheEntry<T>>
  nextCheckAt: number | null
  pendingCleanUp: any | null

  /**
   * Create a new ExpiringCache.
   * @param cacheScheduler Scheduler for expiration.
   * @param cacheTTL Default time-to-live in ms.
   */
  constructor(cacheScheduler: CacheScheduler, cacheTTL: number = 5000) {
    this.cacheScheduler = cacheScheduler
    this.cacheTTL = cacheTTL
    this.values = new Map()
    this.nextCheckAt = null
    this.pendingCleanUp = null
  }

  /**
   * Get value by key (original: get)
   * @param key Cache key
   */
  get(key: string): T | undefined {
    return this.values.get(key)?.value
  }

  /**
   * Clean up expired entries (original: cleanUp)
   */
  cleanUp(): void {
    this.pendingCleanUp = null
    let earliestExpiry: number | null = null
    const now = this.cacheScheduler.now()
    for (const [key, entry] of this.values) {
      if (entry.expiresAt > now) {
        earliestExpiry = earliestExpiry === null || earliestExpiry > entry.expiresAt ? entry.expiresAt : earliestExpiry
        continue
      }
      this.values.delete(key)
    }
    if (earliestExpiry !== null) {
      this.pendingCleanUp = this.cacheScheduler.expireIn(() => this.cleanUp(), Math.max(earliestExpiry - this.cacheScheduler.now(), 0))
    }
  }

  /**
   * Set value with expiration (original: set)
   * @param key Cache key
   * @param value Value to store
   * @param ttl Time-to-live in ms
   */
  set(key: string, value: T, ttl: number = this.cacheTTL): void {
    const expiresAt = this.cacheScheduler.now() + ttl
    this.values.set(key, {
      value,
      expiresAt,
    })
    if (this.nextCheckAt === null || this.nextCheckAt > expiresAt) {
      if (this.pendingCleanUp)
        this.cacheScheduler.clearExpireIn(this.pendingCleanUp)
      this.nextCheckAt = expiresAt
      this.pendingCleanUp = this.cacheScheduler.expireIn(() => this.cleanUp(), ttl)
    }
  }

  /**
   * Clear all cache entries (original: clear)
   */
  clear(): void {
    this.values = new Map()
    if (this.pendingCleanUp)
      this.cacheScheduler.clearExpireIn(this.pendingCleanUp)
    this.nextCheckAt = null
    this.pendingCleanUp = null
  }
}

/**
 * Default cache scheduler (original: defaultCacheScheduler)
 */
export const defaultCacheScheduler: CacheScheduler = {
  expireIn: (fn, ms) => setTimeout(fn, ms),
  now: Date.now,
  clearExpireIn: id => clearTimeout(id),
}
function sanitizeCacheData(data: any): any {
  if (typeof data !== 'object' || data === null || data instanceof Date) {
    return data
  }
  if (Array.isArray(data) && 'hasNextPage' in data) {
    const result: any = []
    for (const key in data) {
      const value = typeof data[key] === 'function' ? noop : data[key]
      result[key] = value
    }
    return result
  }
  const result = Array.isArray(data) ? [] : {}
  let isUnchanged = true
  for (const key in data) {
    const originalValue = data[key]
    const sanitizedValue = sanitizeCacheData(originalValue)
    result[key] = sanitizedValue
    if (originalValue !== sanitizedValue) {
      isUnchanged = false
    }
  }
  return isUnchanged ? data : result
}

/**
 * Creates a subscription promise for loading data.
 * Original: part of the inner function
 * @param store - The store instance
 * @param atom - The atom
 * @param key - The key
 * @returns Promise that resolves on load or rejects on error
 */
function createSubscriptionPromise(store: any, atom: any, key: any): Promise<void> {
  return new Promise((resolve, reject) => {
    const subscription = store.subscribe(atom, key, (update: any) => {
      if (update.status === 'loaded') {
        resolve()
        setTimeout(() => subscription?.(), 0)
      }
      else if (update.errors) {
        reject(update.errors)
        setTimeout(() => subscription?.(), 0)
      }
    })
  })
}

/**
 * Type definition for suspendable resources
 */
export type SuspendableResource
  = | ReturnType<typeof resourceUtils.disabledSuspendable>
  | ReturnType<typeof resourceUtils.loadingSuspendable>
  | ReturnType<typeof resourceUtils.errorSuspendable>
  | ReturnType<typeof resourceUtils.loadedSuspendable>

/**
 * Main function to create an atom family with caching and subscription logic.
 * Original: the entire $$f0 IIFE
 * @param getStore - Function to get the store
 * @param cacheTTL - Cache time-to-live in milliseconds
 * @param cache - Optional cache instance (defaults to new u(m, cacheTTL))
 * @returns Function to create atom family
 */
/**
 * Creates an atom family with caching and subscription logic.
 * Refactored from: createAtomFamily
 * @param getStore - Function to get the store instance
 * @param cacheTTL - Cache time-to-live in milliseconds
 * @param cache - Optional ExpiringCache instance
 * @returns Function to create atom family
 */
export function createAtomFamilyAlias(getStore: () => any, cacheTTL: number, cache: ExpiringCache = new ExpiringCache(defaultCacheScheduler, cacheTTL)) {
  /**
   * Factory to create atom family for resources.
   * @param storeFactory - Factory function for store options
   */
  function atomFamilyFactory(storeFactory: ResourceView) {
    /**
     * Atom family for resource keys.
     * Refactored from: atomFamily
     */
    const atomFamily = createRemovableAtomFamily<any, Atom<SuspendableResource>>((key: any) => {
      // Suspense handler for promise management (original: suspenseHandler)
      const suspenseHandler = new RetainedPromiseManager(() => atomStoreManager.sub(atomFamily as any, () => { }))
      // Handle null key case
      if (key === null) {
        return atom(resourceUtils.disabledSuspendable(suspenseHandler))
      }

      // Serialize key for cache
      const serializedKey = serializeJSON(key)
      const cacheKey = `${storeFactory._name}:${serializedKey}`
      let lastUpdate: any = null

      /**
       * Atom selector for resource state (original: atomSelector)
       */
      const atomSelector = setupAtomWithMount(atomWithDefault(() => cache.get(cacheKey) || createLoadingState()), ({
        setSelf,
      }) => {
        // Subscribe to store updates
        const subscription = getStore().subscribe(storeFactory, key, (update: any) => {
          setSelf((prev: any) => prev.status !== 'loading' && update.status === 'loading' ? prev : (lastUpdate = update, update))
        })

        // Cleanup logic on unmount
        return () => {
          atomFamily.setShouldRemove((_: any, k: any) => k === key)
          atomFamily.setShouldRemove(null)
          if (lastUpdate) {
            if (getFeatureFlags().livestore_sanitize_cache) {
              cache.set(cacheKey, {
                ...lastUpdate,
                data: sanitizeCacheData(lastUpdate.data),
              })
            }
            else {
              cache.set(cacheKey, lastUpdate)
            }
          }
          subscription()
        }
      })

      /**
       * Atom for suspendable resource (original: suspendableAtom)
       */
      const suspendableAtom = atom<SuspendableResource>(get => resourceUtils.suspendableFrom(get(atomSelector), () => createSubscriptionPromise(getStore(), storeFactory, key), suspenseHandler))
      suspendableAtom.debugLabel = performance.now().toString()
      return suspendableAtom
    }, deepEqual) as AtomFamily<any, Atom<SuspendableResource>>

    /**
     * Expose atom family and getter (original: Object.assign)
     */
    const getResource = (key: any) => atomFamily(key)
    Object.assign(getResource, {
      _atomFamily: atomFamily,
    })
    return getResource
  }
  return atomFamilyFactory
}
export const createAtomFamily = createAtomFamilyAlias(() => observableState.get(), 300000)

/**
 * Atom family for resource state (original: resourceAtomFamily)
 */
export const resourceAtomFamily = createRemovableAtomFamily((resourceKey: any) => atom(() => createAtomFamily(resourceKey)))

/**
 * Get atom store for resource (original: getResourceAtomStore)
 * @param key Resource key
 */
export function getResourceAtomStore(key: any) {
  const atomInstance = resourceAtomFamily(key)
  return atomStoreManager.get(atomInstance)
}

/**
 * Sanitize resource data for cache (original: sanitizeResourceData)
 * @param data Resource data
 */
export function sanitizeResourceData(data: any): any {
  if (typeof data !== 'object' || data === null || data instanceof Date)
    return data
  if (Array.isArray(data) && 'hasNextPage' in data) {
    const sanitized: any[] = []
    for (const i in data) {
      const value = typeof data[i] === 'function' ? noop : data[i]
      Object.assign(sanitized, {
        [i]: value,
      })
    }
    return sanitized
  }
  const result: any = Array.isArray(data) ? [] : {}
  let unchanged = true
  for (const key in data) {
    const value = data[key]
    const sanitizedValue = sanitizeResourceData(value)
    result[key] = sanitizedValue
    if (value !== sanitizedValue)
      unchanged = false
  }
  return unchanged ? data : result
}

// Exported names refactored for clarity
export const he = createAtomFamily
export const gc = getResourceAtomStore

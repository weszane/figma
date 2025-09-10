import { useEffect, useMemo, useState } from 'react'
import { debounce } from '../905/915765'

/**
 * Storage references for session and local storage.
 * Original variable names: $$a0, $$s8
 */
export let sessionStorageRef: Storage | null = null
export let localStorageRef: Storage | null = null
try {
  sessionStorageRef = window.sessionStorage
} catch { }
try {
  localStorageRef = window.localStorage
} catch { }

/**
 * Returns the localStorage reference.
 * Original function name: $$o4
 */
export function getLocalStorage(): Storage | null {
  return localStorageRef
}

/**
 * Returns the sessionStorage reference.
 * Original function name: $$l3
 */
export function getSessionStorage(): Storage | null {
  return sessionStorageRef
}

/**
 * Parses a cookie string and returns the value for a given key.
 * Original function name: $$d2
 * @param cookieString - The cookie string
 * @param key - The key to search for
 */
export function getCookieValue(cookieString: string, key: string): string | null {
  const searchKey = `${key}=`
  for (const part of cookieString.split(';')) {
    const trimmed = part.trim()
    if (trimmed.slice(0, searchKey.length) === searchKey)
      return decodeURIComponent(trimmed.slice(searchKey.length))
  }
  return null
}

/**
 * LocalStorage wrapper class.
 * Original class name: c
 */
class LocalStorageWrapper {
  /**
   * Gets a value from localStorage.
   * @param key - The key to retrieve
   */
  get(key: string): any | null {
    if (localStorageRef == null)
      return null
    const item = window.localStorage.getItem(key)
    return item === null ? null : JSON.parse(item)
  }

  /**
   * Sets a value in localStorage.
   * @param key - The key to set
   * @param value - The value to store
   */
  set(key: string, value: any): void {
    if (localStorageRef != null)
      window.localStorage.setItem(key, JSON.stringify(value))
  }

  /**
   * Deletes a key from localStorage.
   * @param key - The key to delete
   */
  delete(key: string): void {
    if (localStorageRef != null)
      window.localStorage.removeItem(key)
  }
}

const fallbackMap = new Map<string, any>()

/**
 * Returns a LocalStorageWrapper instance if localStorage is available, otherwise a Map.
 * Original function name: $$p1
 */
export function getStorage(): LocalStorageWrapper | Map<string, any> {
  return localStorageRef ? new LocalStorageWrapper() : fallbackMap
}

/**
 * Safe JSON parse helper.
 * Original function name: m
 * @param value - The string to parse
 */
function safeJsonParse(value: string): any | undefined {
  try {
    return JSON.parse(value)
  } catch {
    return undefined
  }
}

/**
 * React hook for syncing state with storage.
 * Original function name: h
 * @param key - Storage key
 * @param storage - Storage object
 * @param initialValue - Initial value or function
 * @param options - Options for debounce, stringify, parse
 */
function useStorageSync<T>(
  key: string,
  storage: Storage | null,
  initialValue: T | (() => T),
  {
    debounceTime,
    stringify = JSON.stringify,
    parse = safeJsonParse,
  }: {
    debounceTime?: number
    stringify?: (value: any) => string
    parse?: (value: string) => any
  } = {}
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
  const [state, setState] = useState<T>(() => {
    if (storage) {
      const stored = storage.getItem(key)
      if (stored != null) {
        const parsed = parse(stored)
        if (parsed !== undefined)
          return parsed
      }
    }
    return typeof initialValue === 'function' ? (initialValue as () => T)() : initialValue
  })

  const setStorageValue = useMemo(() => {
    const setter = (value: T) => {
      if (storage)
        storage.setItem(key, stringify(value))
    }
    return debounceTime == null ? setter : debounce(setter, debounceTime)
  }, [debounceTime, storage, stringify, key])

  const removeStorageValue = useMemo(() => () => {
    if (storage)
      storage.removeItem(key)
  }, [storage, key])

  useEffect(() => {
    setStorageValue(state)
  }, [setStorageValue, state])

  return [state, setState, removeStorageValue]
}

/**
 * React hook for syncing state with localStorage.
 * Original function name: $$g5
 */
export function useLocalStorageSync<T>(
  key: string,
  initialValue: T | (() => T),
  options: {
    debounceTime?: number
    stringify?: (value: any) => string
    parse?: (value: string) => any
  } = {}
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
  return useStorageSync(key, localStorageRef, initialValue, options)
}

/**
 * React hook for syncing state with sessionStorage.
 * Original function name: $$f6
 */
export function useSessionStorageSync<T>(
  key: string,
  initialValue: T | (() => T),
  options: {
    debounceTime?: number
    stringify?: (value: any) => string
    parse?: (value: string) => any
  } = {}
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
  return useStorageSync(key, sessionStorageRef, initialValue, options)
}

/**
 * React hook for syncing value on storage events.
 * Original function name: $$_7
 * @param params - Object with onSync and shouldSyncValue
 */
export function useStorageEventSync({
  onSync,
  shouldSyncValue,
}: {
  onSync: (newValue: any) => void
  shouldSyncValue: (event: StorageEvent) => boolean
}): void {
  useEffect(() => {
    function handleStorageEvent(event: StorageEvent) {
      if (shouldSyncValue(event))
        onSync(event.newValue)
    }
    window.addEventListener('storage', handleStorageEvent)
    return () => {
      window.removeEventListener('storage', handleStorageEvent)
    }
  }, [onSync, shouldSyncValue])
}

// Refactored exports with original names as comments
export const Co = sessionStorageRef // $$a0
export const DN = getStorage // $$p1
export const OS = getCookieValue // $$d2
export const Q_ = getSessionStorage // $$l3
export const TQ = getLocalStorage // $$o4
export const Vc = useLocalStorageSync // $$g5
export const Wz = useSessionStorageSync // $$f6
export const tl = useStorageEventSync // $$_7
export const x4 = localStorageRef // $$s8

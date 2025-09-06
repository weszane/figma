import { atom } from 'jotai'
import { getLocalStorage } from '../905/657224'
import { setupAtomWithMount } from '../905/867679'
import { debounce } from '../905/915765'
import { atomWithDefault } from '../vendor/812047'

/**
 * Options for local storage atom creation.
 */
export interface LocalStorageAtomOptions {
  subscribeToChanges?: boolean
}

/**
 * Serialization options for local storage atom.
 */
export interface LocalStorageAtomSerializationOptions<T> {
  debounceTime?: number
  stringify?: (value: T) => string
  parse?: (value: string) => T
}

/**
 * Creates a jotai atom synced with localStorage.
 * @param key - The localStorage key.
 * @param defaultValue - The default value if not found in localStorage.
 * @param options - Options for subscribing to changes.
 * @param serialization - Serialization options.
 * @returns Jotai atom synced with localStorage.
 */
// $$$$l1
export function createLocalStorageAtom<T>(key: string, defaultValue: T, options: LocalStorageAtomOptions = { subscribeToChanges: false }, serialization: LocalStorageAtomSerializationOptions<T> = {}) {
  const {
    subscribeToChanges = false,
  } = options
  const {
    debounceTime,
    stringify = JSON.stringify,
    parse = JSON.parse,
  } = serialization

  // p
  function getStoredValue(): T | undefined {
    const storage = getLocalStorage()
    if (storage) {
      const item = storage.getItem(key)
      if (item != null) {
        try {
          const parsed = parse(item)
          if (parsed !== undefined)
            return parsed
        }
        catch {
          // ignore parse errors
        }
      }
    }
    return defaultValue
  }

  // m
  const baseAtom = atomWithDefault(() => getStoredValue())

  // h
  const setStorageValue = (() => {
    const setValue = (value: T) => {
      const storage = getLocalStorage()
      if (storage)
        storage.setItem(key, stringify(value))
    }
    return debounceTime == null ? setValue : debounce(setValue, debounceTime)
  })()

  // g
  const localStorageAtom = atom(
    get => get(baseAtom),
    (get, set, newValue: T) => {
      set(baseAtom, newValue)
      setStorageValue(get(baseAtom))
    },
  )

  // subscribeToChanges
  if (subscribeToChanges) {
    return setupAtomWithMount(localStorageAtom, ({ setSelf }) => {
      const storageListener = (event: StorageEvent) => {
        if (event.key === key)
          setSelf(() => getStoredValue())
      }
      window.addEventListener('storage', storageListener)
      return () => window.removeEventListener('storage', storageListener)
    })
  }
  return localStorageAtom
}

/**
 * Creates a jotai atom synced with localStorage and validated by Zod.
 * @param key - The localStorage key.
 * @param defaultValue - The default value if not found or invalid.
 * @param schema - Zod schema for validation.
 * @param options - Options for subscribing to changes.
 * @param serialization - Serialization options.
 * @returns Jotai atom synced with localStorage and validated.
 */
// $$d0
export function createValidatedLocalStorageAtom<T>(key: string, defaultValue: T, schema: { safeParse: (value: unknown) => { success: boolean } }, options: LocalStorageAtomOptions = { subscribeToChanges: false }, serialization: LocalStorageAtomSerializationOptions<T> = {}) {
  const baseAtom = createLocalStorageAtom(key, defaultValue, options, serialization)
  return atom(
    (get) => {
      const value = get(baseAtom)
      return schema.safeParse(value).success ? value : defaultValue
    },
    (get, set, newValue: T) => set(baseAtom, newValue),
  )
}

// Exported names refactored for clarity and traceability
export const E = createValidatedLocalStorageAtom // $$d0
export const l = createLocalStorageAtom // $$$$l1

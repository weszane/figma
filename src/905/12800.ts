import type { WritableAtom } from 'jotai'
import { atom } from 'jotai'
import { isEqual } from 'lodash-es'

/**
 * Creates a Jotai atom with a custom setter that uses an equality function to avoid unnecessary updates.
 * @param key - The writable atom key or identifier for the atom.
 * @param equalityFn - The function to compare old and new values (defaults to lodash's isEqual).
 * @returns A Jotai atom with getter and setter.
 */
export function createAtomWithEquality<T>(
  key: WritableAtom<T, [T], void>,
  equalityFn: (a: T, b: T) => boolean = isEqual,
) {
  return atom(
    get => get(key), // Getter: retrieve the value at the key
    (get, set, update) => {
      const currentValue = get(key) // Get current value
      const newValue = typeof update === 'function' ? update(currentValue) : update // Compute new value
      if (!equalityFn(currentValue, newValue)) {
        set(key, newValue) // Set only if not equal
      }
    },
  )
}

// Alias for backward compatibility (original $$a0)
export const M = createAtomWithEquality

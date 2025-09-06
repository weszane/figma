import { atom } from 'jotai'

/**
 * Creates a set of atoms for debouncing a value.
 * @param initialValue - The initial value to debounce.
 * @param delay - The debounce delay in milliseconds.
 * @param skipImmediate - If true, skips debounce when value matches initialValue.
 * @returns Object containing atoms for current value, debounced value, timeout control, and debouncing state.
 */
export function setupDebounceAtoms<T>(initialValue: T, delay = 500, skipImmediate = false) {
  // Atom to store the timeout ID
  const timeoutAtom = atom<number | undefined>(undefined)

  // Atom to store the current value
  const valueAtom = atom<T>(initialValue)

  // Atom to indicate if debouncing is active
  const isDebouncingAtom = atom<boolean>(false)

  /**
   * Atom to handle debounced value updates.
   * Original: l
   */
  const debouncedValueAtom = atom(
    initialValue,
    (get, set, update) => {
      clearTimeout(get(timeoutAtom))
      const prevValue = get(valueAtom)
      const nextValue = typeof update === 'function' ? update(prevValue) : update

      // Helper to finalize debounce
      const finalizeDebounce = () => {
        set(debouncedValueAtom, nextValue)
        set(isDebouncingAtom, false)
      }

      set(valueAtom, nextValue)
      set(isDebouncingAtom, true)

      if (!skipImmediate && nextValue === initialValue) {
        finalizeDebounce()
        return
      }

      set(
        timeoutAtom,
        setTimeout(() => {
          finalizeDebounce()
        }, delay) as unknown as number,
      )
    },
  )

  /**
   * Atom to clear the debounce timeout.
   * Original: d
   */
  const clearTimeoutAtom = atom(
    null,
    (get, set) => {
      clearTimeout(get(timeoutAtom))
      set(isDebouncingAtom, false)
    },
  )

  /**
   * Atom to get the current value.
   * Original: currentValueAtom
   */
  const currentValueAtom = atom<T>(get => get(valueAtom))

  return {
    currentValueAtom,
    isDebouncingAtom,
    clearTimeoutAtom,
    debouncedValueAtom,
  }
}

// Refactored export name
export const Z = setupDebounceAtoms

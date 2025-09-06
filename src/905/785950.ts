import { atom } from 'jotai'

/**
 * Creates a custom jotai atom with read and write logic.
 * @param key - The key or initial value for the atom.
 * @param handler - The handler function for reading and writing atom state.
 * @returns A jotai atom with custom logic.
 * @originalName $$r0
 */
export function setupCustomAtom(key: any, handler: (value: any, ...args: any[]) => any) {
  return atom(
    get => handler(get(key)),
    (get, set, ...args) => {
      const newValue = handler(get(key), ...args, get)
      set(key, newValue)
    },
  )
}

// Refactored export name for F
export const F = setupCustomAtom

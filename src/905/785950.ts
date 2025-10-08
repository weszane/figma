import type { Getter, WritableAtom } from 'jotai'
import { atom } from 'jotai'

/**
 * Creates a custom jotai atom with read and write logic.
 * @param key - The key or initial value for the atom.
 * @param handler - The handler function for reading and writing atom state.
 * @returns A jotai atom with custom logic.
 * @originalName $$r0
 */
export function setupCustomAtom<TState, TAction = any, TReturn = TState>(
  key: WritableAtom<TState, [TState], void>,
  handler: (state: TState, action?: TAction, get?: Getter) => TState | TReturn
): WritableAtom<TReturn, [TAction], void> {
  return atom(
    (get) => handler(get(key)) as TReturn,
    (get, set, action: TAction) => {
      const newValue = handler(get(key), action, get) as TState
      set(key, newValue)
    }
  )
}

// Refactored export name for F
export const F = setupCustomAtom

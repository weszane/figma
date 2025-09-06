import type { Atom, WritableAtom } from 'jotai/vanilla'
import { setupAtomWithMount } from '../905/867679'

/**
 * Initializes an atom with a mount handler that sets its value.
 * @param atom - The atom to initialize.
 * @param value - The value to set when mounted.
 * @returns The initialized atom.
 * (Original function name: $$r0)
 */
export function setupAtomWithInitialValue<T>(atom: Atom<T> | WritableAtom<T, unknown[], void>, value: any) {
  return setupAtomWithMount(atom, ({ onSet }) => {
    onSet(value)
  })
}

// Refactored export name for H
export const H = setupAtomWithInitialValue

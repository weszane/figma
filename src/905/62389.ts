import type { Atom } from 'jotai'
import { atom } from 'jotai'

type Getter = <Value>(atom: Atom<Value>) => Value
/**
 * Creates a custom jotai atom with read and write logic.
 * @param readFn - Function to read the atom value.
 * @param writeFn - Function to write/update the atom value.
 * @returns A jotai atom with custom read/write logic.
 * @originalName $$r0
 */
export function createCustomAtom<U>(readFn: (value: Getter) => U, writeFn: (get: any, set: any, ...args: any[]) => void) {
  return atom(
    get => readFn(get),
    (get, set, ...args) => writeFn(get, set, ...args),
  )
}

/** Alias for createCustomAtom (original export: L) */
export const L = createCustomAtom

import type { Atom, Getter, WritableAtom } from 'jotai'
import { atom } from 'jotai'

export function createCustomAtom<T, U, Args extends any[]>(
  readFn: WritableAtom<T, Args, any>,
  writeFn: (value: Getter) => U,
): WritableAtom<U, Args, any> {
  return atom(
    get => writeFn(get),
    (get, set, ...update) => set(readFn, ...update),
  )
}

/** Alias for createCustomAtom (original export: L) */
export const L = createCustomAtom

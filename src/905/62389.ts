import type { Getter, WritableAtom } from 'jotai'
import { atom } from 'jotai'

/**
 * createCustomAtom (original export: L)
 *
 * Create a derived writable atom that forwards reads to `writeFn(get)` and forwards writes to the provided `readFn`.
 *
 * @template T - type of the source atom value
 * @template U - type of the created atom value
 * @template Args - arguments accepted by the writable source atom
 */
export function createCustomAtom<T, U, Args extends any[]>(
  readFn: WritableAtom<T, Args, any>,
  writeFn: (get: Getter) => U,
): WritableAtom<U, Args, any> {
  return atom(
    get => writeFn(get),
    (get, set, ...update: Args) => set(readFn, ...update),
  )
}

/** Alias for createCustomAtom (original export: L) */
export const L = createCustomAtom

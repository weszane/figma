import type { Atom } from 'jotai'
import type { SuspendableResource } from './157003'
import { atom } from '../figma_app/27355'
import { resourceUtils } from './989992'

/**
 * Transforms an atom by applying a transformation function.
 * Original function name: $$a1
 * @param source - The source atom containing a SuspendableResource with data of type T.
 * @param transformFn - The transformation function to apply to the data of type T, returning type R.
 * @returns The transformed atom containing a SuspendableResource with data of type R.
 */
export function transformAtom<T, R>(
  source: Atom<SuspendableResource & { data: T }>,
  transformFn: (data: T, get: <V>(atom: Atom<V>) => V) => R,
) {
  return atom(get => get(source).transform(e => transformFn(e, get)))
}

/**
 * Maps over an array, applies a function to each element, and aggregates resources.
 * Original function name: $$s0
 * @param atoms - The array of atoms to map over.
 * @param fn - The function to apply to the resolved values from the atoms.
 * @returns The transformed atom with aggregated resources.
 */
export function mapAndAggregateResources<T extends any[], R>(
  atoms: { [K in keyof T]: Atom<SuspendableResource & { data: T[K] }> },
  fn: (items: T, get: <V>(atom: Atom<V>) => V) => R,
) {
  return transformAtom(
    atom(() => {
      return resourceUtils.all(atoms)
    }),
    (data, get) => fn(data as T, get),
  )
}

// Exported names refactored for clarity
export const J9 = mapAndAggregateResources
export const Z1 = transformAtom

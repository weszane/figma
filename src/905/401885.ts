import type { Atom } from 'jotai'
import { resourceUtils } from '../905/989992'
import { atom } from '../figma_app/27355'

/**
 * Transforms an atom by applying a transformation function.
 * Original function name: $$a1
 * @param source - The source atom.
 * @param transformFn - The transformation function to apply.
 * @returns The transformed atom.
 */
export function transformAtom(source: Atom<any>, transformFn: any) {
  return atom(get => get(source).transform(e => transformFn(e, get)))
}

/**
 * Maps over an array, applies a function to each element, and aggregates resources.
 * Original function name: $$s0
 * @param arr - The array to map over.
 * @param fn - The function to apply to each element.
 * @returns The transformed atom with aggregated resources.
 */
export function mapAndAggregateResources(arr: any[], fn: any) {
  return transformAtom(
    atom(() => {
      const mapped = arr.map(e => fn(e))
      return resourceUtils.all(mapped)
    }),
    fn,
  )
}

// Exported names refactored for clarity
export const J9 = mapAndAggregateResources
export const Z1 = transformAtom

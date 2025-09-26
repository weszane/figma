import type { Atom } from 'jotai'
import { atom } from 'jotai'

import { isEqual } from 'lodash-es'
import { selectAtom } from '../vendor/812047'

/**
 * Creates a selector atom that selects the value with an identity function and uses isEqual for comparison.
 * Original function name: $$s1
 * @param atom - The atom to select from.
 * @returns A selector atom.
 */
export function identitySelector<T>(atom: Atom<T>): Atom<T> {
  return selectAtom(atom, value => value, isEqual)
}

/**
 * Combines multiple atoms into a single atom by applying a combiner function to their values.
 * Original function name: $$o0
 * @param atoms - Array of atoms to combine.
 * @param combiner - Function to combine the atom values.
 * @returns A combined atom.
 */
export function atomCombiner<T>(atoms: Atom<any>[], combiner: (...args: any[]) => T): Atom<T> {
  return identitySelector(atom((getter) => {
    const values = atoms.map(atom => getter(atom))
    return combiner(...values)
  }))
}

// Original export aliases
export const p6 = atomCombiner
export const tP = identitySelector

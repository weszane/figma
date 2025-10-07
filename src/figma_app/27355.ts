import type { Atom } from 'jotai'
import type { AtomFamily } from 'jotai/vanilla/utils/atomFamily'
import { atom } from 'jotai'
import { useSetAtom, useStore } from 'jotai/react'
import { atomFamily, atomWithDefault, unwrap } from 'jotai/utils'
import { useDebugValue, useEffect, useMemo, useReducer } from 'react'
import { createAtomWithEquality } from '../905/12800'
import { setupDebounceAtoms } from '../905/20215'
import { createLocalStorageAtom, createValidatedLocalStorageAtom } from '../905/42220'
import { createCustomAtom } from '../905/62389'
import { useUndoRedoAtom } from '../905/123366'
import { setupSubscriptionAtom } from '../905/142517'
import { atomStoreManager } from '../905/490038'
import { AtomProvider } from '../905/577276'
import { setupAtomWithInitialValue } from '../905/623391'
import { setupCustomAtom } from '../905/785950'
import { handlePromiseStatus } from '../905/844533'
import { setupAtomWithMount } from '../905/867679'

/**
 * Symbol used as a default value for atom unwrapping.
 * @originalName p
 */
// eslint-disable-next-line symbol-description
const defaultSymbol = Symbol()

/**
 * Creates an atom with custom read/write logic.
 * @param atomLike - The atom or atom-like object to unwrap.
 * @returns A new atom with custom read/write logic.
 * @originalName $$_13
 */
export function createCustomReadWriteAtom(atomLike: any) {
  const initialValue = unwrap(atomLike, (...args) => args.length ? args[0] : defaultSymbol)
  const read = (get: any) => get(initialValue) === defaultSymbol ? get(atomLike) : get(initialValue)
  return 'write' in atomLike ? atom(read, atomLike.write) : atom(read)
}

/**
 * Hook to subscribe to an atom and get its value, with optional frame deferral.
 * @param atomInstance - The atom to subscribe to.
 * @param options - Optional configuration object.
 * @returns The current value of the atom, or a promise status if the value is a Promise.
 * @originalName $$S18
 */
export function useAtomWithSubscription(atomInstance: any, options?: { deferToFrame?: boolean }) {
  const store = useStore()
  const [[, lastStore, lastAtom], trigger] = useReducer(
    (prev) => {
      const nextValue = store.get(atomInstance)
      return Object.is(prev[0], nextValue) && prev[1] === store && prev[2] === atomInstance
        ? prev
        : [nextValue, store, atomInstance]
    },
    undefined,
    () => [store.get(atomInstance), store, atomInstance],
  )
  let value = store.get(atomInstance)
  if (lastStore !== store || lastAtom !== atomInstance) {
    trigger()
    value = store.get(atomInstance)
  }
  const deferToFrame = options?.deferToFrame ?? false
  useEffect(() => {
    let frameId: number | undefined
    const unsubscribe = store.sub(atomInstance, () => {
      if (deferToFrame) {
        if (frameId !== undefined)
          cancelAnimationFrame(frameId)
        frameId = requestAnimationFrame(trigger)
      }
      else {
        trigger()
      }
    })
    trigger()
    return () => {
      if (frameId !== undefined)
        cancelAnimationFrame(frameId)
      unsubscribe()
    }
  }, [store, atomInstance, deferToFrame])
  useDebugValue(value)
  return value instanceof Promise ? handlePromiseStatus(value as any) : value
}

/**
 * Returns a tuple of the atom value and a setter function.
 * @param atomInstance - The atom to use.
 * @param options - Optional configuration object.
 * @returns [atom value, atom setter]
 * @originalName $$v17
 */
export function useAtomValueAndSetter(atomInstance: any, options?: any) {
  return [useAtomWithSubscription(atomInstance, options), useSetAtom(atomInstance)]
}

/**
 * Creates an atom family with a removeAll method.
 * @param keyFn - Function to generate keys for the atom family.
 * @param areEqual - Function to generate atoms.
 * @returns Atom family with removeAll method.
 * @originalName $$A3
 */
export function createRemovableAtomFamily<T, R extends Atom<any>>(keyFn: (value: T) => R, areEqual?: (a: T, b: T) => boolean): AtomFamily<T, R> & {
    removeAll: () => void;
} {
  const family = atomFamily(keyFn, areEqual) as AtomFamily<T, R> & { removeAll: () => void }
  family.removeAll = () => {
    family.setShouldRemove(() => true)
    family.setShouldRemove(null)
  }
  return family
} 

/**
 * Memoizes an atom and returns its value using useAtomWithSubscription.
 * @param initialValue - Initial value for the atom.
 * @param atomInstance - Optional atom instance to use.
 * @returns Atom value.
 * @originalName $$x19
 */
export function useMemoizedAtomValue(initialValue: any, atomInstance?: any) {
  const memoizedAtom = useMemo(() => atom(initialValue), [initialValue])
  return useAtomWithSubscription(atomInstance || memoizedAtom)
}

// Export refactored names for external usage
export const Iz = createRemovableAtomFamily
export const Mt = createCustomReadWriteAtom
export const fp = useAtomValueAndSetter
export const md = useAtomWithSubscription
export const mC = useMemoizedAtomValue
export { p6, tP } from '../905/292282'
export { Pj, Xr } from '../vendor/525001'
export { mg, Rq, t_, tx, um, Ut } from '../vendor/812047'
export { useResetAtom } from 'jotai/react/utils'
export const An = AtomProvider
export const xP = useUndoRedoAtom
export const zl = atomStoreManager
export const Zb = setupDebounceAtoms
export const S_ = setupSubscriptionAtom
export const E3 = createLocalStorageAtom
export const E2 = createValidatedLocalStorageAtom
export const Hj = setupAtomWithInitialValue
export const yu = setupAtomWithMount
export const M2 = createAtomWithEquality
export const LJ = createCustomAtom
export const FZ = setupCustomAtom
export const eU = atom
export { atom, AtomProvider, atomStoreManager, atomWithDefault, createAtomWithEquality, createCustomAtom, createLocalStorageAtom, createValidatedLocalStorageAtom, setupAtomWithMount, setupCustomAtom, setupSubscriptionAtom }

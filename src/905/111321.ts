import type { Atom, PrimitiveAtom } from 'jotai'
import type { Store } from 'redux'
import { atom } from 'jotai'
import { atomWithDefault } from 'jotai/utils'

import { noop } from 'lodash-es'
import { createActionCreator } from '../905/73481'
import { setupSubscriptionAtom } from '../905/142517'
import { setupAtomWithInitialValue } from '../905/623391'

/**
 * Sets up a Redux-integrated atom with initial value and reducer.
 * Original: $$d2
 * @param storeAtom - Atom for the Redux store
 * @param atomValue - Configuration for the atom
 * @param actionType - Type of the Redux action
 * @param initialState - Initial state for the reducer
 * @returns The configured atom with Redux integration
 */
export function setupReduxAtom<T = any>(
  storeAtom: () => Store<T>,
  atomValue: PrimitiveAtom<T>,
  actionType: string,
  initialState?: T,
) {
  let unsubscribe = noop
  const { action, reducer } = createActionAndReducer(actionType, 'init' in atomValue ? atomValue.init : initialState)
  return attachReducer(
    setupAtomWithInitialValue(atomValue, (value: any) => {
      storeAtom()?.dispatch(action(value))
      unsubscribe(value, 'toRedux')
    }),
    reducer,
  )
}

/**
 * Creates a Redux action creator and corresponding reducer.
 * Original: $$c0
 * @param actionType - Type of the Redux action
 * @param initialState - Initial state for the reducer
 * @returns Object containing action creator and reducer
 */
export function createActionAndReducer<T>(actionType: string, initialState: T) {
  const actionCreator = createActionCreator(actionType)
  return {
    action: actionCreator,
    reducer: (state = initialState, action: any) => actionCreator.matches(action) ? action.payload : state,
  }
}

/**
 * Attaches a reducer to an atom.
 * Original: $$u3
 * @param atom - The atom to attach the reducer to
 * @param reducer - The reducer function
 * @returns The atom with the reducer attached
 */
export function attachReducer(atom: any, reducer: any) {
  atom.reducer = reducer
  return atom
}

/**
 * Creates an atom with Redux integration using default initial value.
 * Original: $$p1
 * @param storeAtom - Atom for the Redux store
 * @param initialValue - Initial value for the atom
 * @param actionType - Type of the Redux action
 * @returns The configured atom
 */
export function createAtomWithRedux<T>(storeAtom: () => Store<T>, initialValue: T, actionType: string) {
  return setupReduxAtom(storeAtom, atom(initialValue), actionType)
}

/**
 * Creates a subscription atom for Redux store state.
 * Original: $$m4
 * @param storeAtom - Atom for the Redux store
 * @param selector - Selector function for the state
 * @param options - Options for notification
 * @returns The subscription atom with getStore method
 */
export function createReduxSubscriptionAtom<T = any, S = any>(
  storeAtom: () => Store<S> & { subscribeImmediate?: (listener?: () => any) => () => void } | null,
  selector: (state: S) => T,
  options: { notifyImmediate?: boolean } = {},
) {
  const { notifyImmediate = false } = options
  const subscriptionAtom = setupSubscriptionAtom({
    get: () => {
      const store = storeAtom()
      if (!store) {
        throw new Error('Redux Store does not exist yet. Please create a store or make sure it\'s appropriately set.')
      }
      return selector(store.getState())
    },
    subscribe: (callback: () => void) => {
      const store = storeAtom()
      if (!store) {
        throw new Error('Redux Store does not exist yet. Please create a store or make sure it\'s appropriately set.')
      }
      if (notifyImmediate && 'subscribeImmediate' in store && typeof store.subscribeImmediate === 'function') {
        return store.subscribeImmediate(callback)
      }
      return store.subscribe(callback)
    },
  })
  const res =  Object.assign(atomWithDefault(() => subscriptionAtom), {
    getStore: storeAtom,
  })
  return res as Atom<T> & { getStore: () => Store<S> | null }
}

// Refactored exports to match new function names
export const B5 = createActionAndReducer
export const OX = createAtomWithRedux
export const Pj = setupReduxAtom
export const S9 = attachReducer
export const bt = createReduxSubscriptionAtom

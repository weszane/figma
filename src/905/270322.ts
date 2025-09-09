import type { PrimitiveAtom } from 'jotai'
import { attachReducer, createActionAndReducer, createAtomWithRedux, createReduxSubscriptionAtom, setupReduxAtom } from '../905/111321'
import { debugState } from '../905/407919'

/**
 * Returns the debug state.
 * Original name: a
 */
function getDebugState() {
  return debugState
}

type SetupReduxAtomArgs<T> = [
  atomValue: PrimitiveAtom<T>,
  actionType: string,
  initialState?: T,
]

/**
 * Sets up a Redux atom with the debug state.
 * Original name: $$s2
 * @param args - Arguments for setupReduxAtom
 * @returns The result of setupReduxAtom
 */
export function setupReduxAtomWithState<T>(...args: SetupReduxAtomArgs<T>) {
  return setupReduxAtom(getDebugState, ...args)
}

type CreateAtomWithReduxArgs<T> = [
  actionType: string,
  initialValue: T,
]
/**
 * Creates an action and reducer.
 * Original name: $$o0
 * @param args - Arguments for createActionAndReducer
 * @returns The result of createActionAndReducer
 */
export function createActionAndReducerWrapper<T>(...args: CreateAtomWithReduxArgs<T>) {
  return createActionAndReducer(...args)
}

/**
 * Attaches a reducer.
 * Original name: $$l3
 * @param args - Arguments for attachReducer
 * @returns The result of attachReducer
 */
export function attachReducerWrapper(...args: [atom: any, reducer: (state: any, action: any) => any]) {
  return attachReducer(...args)
}

/**
 * Creates an atom with Redux using the debug state.
 * Original name: $$d1
 * @param args - Arguments for createAtomWithRedux
 * @returns The result of createAtomWithRedux
 */
export function createAtomWithReduxWithState(...args: [actionType: string, initialValue: any]) {
  return createAtomWithRedux(getDebugState, ...args)
}

/**
 * Creates a Redux subscription atom with the debug state.
 * Original name: $$c4
 * @param e - First argument
 * @param t - Second argument
 * @returns The result of createReduxSubscriptionAtom
 */
export function createReduxSubscriptionAtomWithState<T = any, S = any>(e: (state: S) => T, t: { notifyImmediate?: boolean } = {}) {
  return createReduxSubscriptionAtom(getDebugState, e, t)
}

// Aliases for backward compatibility or external use
// Original names: B5 = $$o0, OX = $$d1, Pj = $$s2, S9 = $$l3, bt = $$c4
export const B5 = createActionAndReducerWrapper
export const OX = createAtomWithReduxWithState
export const Pj = setupReduxAtomWithState
export const S9 = attachReducerWrapper
export const bt = createReduxSubscriptionAtomWithState

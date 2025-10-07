import type { PrimitiveAtom } from 'jotai'
import type { Store } from 'redux'
import { attachReducer, createActionAndReducer, createAtomWithRedux, createReduxSubscriptionAtom, setupReduxAtom } from '../905/111321'
import { debugState } from '../905/407919'

/**
 * Returns the debug state.
 * Original name: a
 */
function getDebugState(): Store<AppState> {
  return debugState as Store<AppState>
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
 * @param atom - The atom to attach the reducer to
 * @param reducer - The reducer function
 * @returns The result of attachReducer
 */
export function attachReducerWrapper<T>(
  atom: PrimitiveAtom<T> & { reducer?: (state: T, action: any) => T },
  reducer: (state: T, action: any) => T,
) {
  return attachReducer(atom, reducer)
}

/**
 * Creates an atom with Redux using the debug state.
 * Original name: $$d1
 * @param initialValue - Initial value for the atom
 * @param actionType - Type of the Redux action
 * @returns The result of createAtomWithRedux
 */
export function createAtomWithReduxWithState<T extends Record<string, any>>(
  initialValue: T,
  actionType: string,
) {
  return createAtomWithRedux(getDebugState, initialValue, actionType)
}

/**
 * Creates a Redux subscription atom with the debug state.
 * Original name: $$c4
 * @param selector - Selector function for the state
 * @param options - Options for notification
 * @returns The result of createReduxSubscriptionAtom
 */
export function createReduxSubscriptionAtomWithState<T>(
  selector: (state: AppState) => T,
  options: { notifyImmediate?: boolean } = {},
) {
  return createReduxSubscriptionAtom<T, AppState>(getDebugState, selector, options)
}

// Aliases for backward compatibility or external use
// Original names: B5 = $$o0, OX = $$d1, Pj = $$s2, S9 = $$l3, bt = $$c4
export const B5 = createActionAndReducerWrapper
export const OX = createAtomWithReduxWithState
export const Pj = setupReduxAtomWithState
export const S9 = attachReducerWrapper
export const bt = createReduxSubscriptionAtomWithState

import { ErrorType, OperationStatus, ProcessState } from '../3973/473379'
import { atom, setupCustomAtom } from '../figma_app/27355'

/**
 * Checks if the process status is ERRORED due to TIMEOUT.
 * @param state - The process state object.
 * @returns True if errored due to timeout, false otherwise.
 * @originalName $$i4
 */
export function isErroredTimeout(state: { status: OperationStatus, cause?: ErrorType }) {
  return state.status === OperationStatus.ERRORED && state.cause === ErrorType.TIMEOUT
}

/**
 * Initial atom state for process.
 * @originalName n
 */
const initialProcessState = atom({
  status: OperationStatus.NOT_STARTED,
  initCompletedPromise: undefined as undefined | Promise<void>,
})

/**
 * Custom atom for process state transitions.
 * Handles RESET, START, ERROR, and COMPLETE actions.
 * @originalName $$o0
 */
export const processAtom = setupCustomAtom(initialProcessState, (state, action) => {
  switch (action?.type) {
    case ProcessState.RESET:
      return {
        status: OperationStatus.NOT_STARTED,
        initCompletedPromise: undefined,
      }
    case ProcessState.START:
      if (state.status === OperationStatus.NOT_STARTED) {
        const { initCompletedPromise, sdkKey } = action.payload
        return {
          status: OperationStatus.IN_PROGRESS,
          sdkKey,
          initCompletedPromise,
        }
      }
      return state
    case ProcessState.ERROR:
      if (state.status === OperationStatus.IN_PROGRESS) {
        const { sdkKey, initCompletedPromise } = state
        const { cause } = action.payload
        return {
          status: OperationStatus.ERRORED,
          sdkKey,
          cause,
          initCompletedPromise,
        }
      }
      return state
    case ProcessState.COMPLETE:
      if (state.status === OperationStatus.IN_PROGRESS) {
        const { sdkKey, initCompletedPromise } = state
        return {
          status: OperationStatus.COMPLETED,
          sdkKey,
          initCompletedPromise,
        }
      }
      return state
    default:
      return state
  }
})

/**
 * Atom selector for processAtom.
 * @originalName $$_2
 */
export const processSelector = atom(get => get(processAtom))

/**
 * Atom selector for initCompletedPromise from processAtom.
 * @originalName $$l5
 */
export const initCompletedPromiseSelector = atom(get => get(processAtom).initCompletedPromise)

/**
 * Atom for a numeric value, default 0.
 * @originalName $$u3
 */
export const numericAtom = atom(0)

/**
 * Atom for a boolean flag, default false.
 * @originalName $$c1
 */
export const booleanFlagAtom = atom(false)

// Exported variables with refactored names
export const MQ = processAtom
export const UY = booleanFlagAtom
export const ZJ = processSelector
export const gR = numericAtom
export const hH = isErroredTimeout
export const u_ = initCompletedPromiseSelector

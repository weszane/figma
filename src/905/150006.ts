import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { handlePromiseError } from '../905/573154'
import { handleOptimistTransaction } from '../905/842794'
/**
 * Handles an optimist transaction with error handling for promises.
 * @param params - Parameters for the transaction and error handling.
 * @param params.requestPromise - The promise representing the request.
 * @param params.fallbackError - The error to use if the promise fails.
 * @param params.store - The Redux store for dispatching actions.
 * @param params.next - The next middleware function.
 * @param params.action - The action to process.
 * @returns The result of the optimist transaction handler.
 */
// Original function name: $$a0
export function handleOptimistTransactionWithError(params: {
  requestPromise: Promise<any>
  fallbackError: any
  store: { dispatch: any }
  next: Fn
  action: any
}) {
  const { requestPromise, fallbackError, store, next, action } = params

  // Dispatch error handling for the promise
  store.dispatch(
    handlePromiseError({
      promise: requestPromise,
      fallbackError,
    }),
  )

  // Proceed with the optimist transaction
  return handleOptimistTransaction(requestPromise, next, action)
}

// Export with refactored name for clarity
export const Q = handleOptimistTransactionWithError

import { BEGIN, COMMIT, REVERT } from 'redux-optimist'

/**
 * Generates a unique optimist transaction id.
 * @returns {number} Unique id
 * @originalName $$a0
 */
export const generateOptimistId = (() => {
  let currentId = 0
  return () => currentId++
})()

/**
 * Handles an async action with redux-optimist transaction lifecycle.
 * Dispatches BEGIN, COMMIT, and REVERT actions as appropriate.
 * @param promise The async operation (Promise)
 * @param dispatch Redux dispatch function
 * @param baseAction The base action to dispatch with BEGIN
 * @returns The original promise
 * @originalName $$s1
 */
export function handleOptimistTransaction(promise: Promise<any>, dispatch: (action: any) => void, baseAction: any): Promise<any> {
  const id = generateOptimistId()
  // Dispatch BEGIN action
  dispatch({
    ...baseAction,
    optimist: {
      type: BEGIN,
      id,
    },
  })
  // Handle promise resolution
  promise
    .then((result) => {
      dispatch({
        type: null,
        optimist: {
          type: COMMIT,
          id,
        },
      })
      return result
    })
    .catch(() => {
      dispatch({
        type: null,
        optimist: {
          type: REVERT,
          id,
        },
      })
    })
  return promise
}

// Exported aliases for backward compatibility
export const F = generateOptimistId // original: $$a0
export const f = handleOptimistTransaction // original: $$s1

import { COMMIT, REVERT } from 'redux-optimist'

/**
 * Creates an optimist commit action.
 * @param id - The transaction id for the commit.
 * @returns The commit action object.
 * (Original function: $$r0)
 */
export function createOptimistCommitAction(id: number | string) {
  return {
    type: 'null',
    optimist: {
      type: COMMIT,
      id,
    },
  }
}

/**
 * Creates an optimist revert action.
 * @param id - The transaction id for the revert.
 * @returns The revert action object.
 * (Original function: $$a1)
 */
export function createOptimistRevertAction(id: number | string) {
  return {
    type: 'null',
    optimist: {
      type: REVERT,
      id,
    },
  }
}

// Export aliases for backward compatibility and refactored imports
export const c = createOptimistCommitAction
export const r = createOptimistRevertAction

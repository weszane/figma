/**
 * Enumeration representing the state of a merge operation.
 * @enum {number}
 */
export enum MergeState {
  /** No merge operation is currently in progress */
  NOT_MERGING = 0,
  /** A merge operation is currently in progress */
  MERGING = 1,
  /** An error occurred during the merge operation */
  MERGING_ERROR = 2,
}

export const y = MergeState

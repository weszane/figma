import {
  loadingStatePutFailure as putFailure,
  loadingStatePutFailureReason as putFailureReason,
  loadingStatePutLoading as putLoading,
  loadingStatePutSuccess as putSuccess,
} from '../figma_app/714946'

/**
 * Handles loading state transitions for async operations.
 * Dispatches loading, success, and failure actions based on promise resolution.
 *
 * @param promise - The async operation to track.
 * @param store - The store with a dispatch method.
 * @param key - Unique key for loading state.
 * @param getReason - Optional function to extract failure reason from error.
 */
export function setupLoadingStateHandler(
  promise: Promise<unknown>,
  store: { dispatch: (action: any) => void },
  key: string,
  getReason?: (error: any) => string | null,
): void {
  // $$r0
  store.dispatch(putLoading({ key }))

  promise
    .then(() => {
      store.dispatch(putSuccess({ key }))
    })
    .catch((error) => {
      if (getReason) {
        store.dispatch(putFailureReason({
          key,
          reason: getReason(error) || null,
        }))
      }
      store.dispatch(putFailure({ key }))
    })
}

// Export with refactored name
export const N = setupLoadingStateHandler

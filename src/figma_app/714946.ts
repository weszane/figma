import { createActionCreator } from '../905/73481'

/**
 * Action creator for loading state delete.
 * Original variable: $$i4
 */
export const loadingStateDelete = createActionCreator('LOADING_STATE_DEL')

/**
 * Action creator for loading state put failure reason.
 * Original variable: $$a1
 */
export const loadingStatePutFailureReason = createActionCreator('LOADING_STATE_PUT_FAILURE_REASON')

/**
 * Action creator for loading state put failure.
 * Original variable: $$s2
 */
export const loadingStatePutFailure = createActionCreator('LOADING_STATE_PUT_FAILURE')

/**
 * Action creator for loading state put success.
 * Original variable: $$o3
 */
export const loadingStatePutSuccess = createActionCreator('LOADING_STATE_PUT_SUCCESS')

/**
 * Action creator for loading state put loading.
 * Original variable: $$l0
 */
export const loadingStatePutLoading = createActionCreator('LOADING_STATE_PUT_LOADING')

// Refactored exports for clarity and maintainability
export const Cx = loadingStatePutLoading
export const SI = loadingStatePutFailureReason
export const of = loadingStatePutFailure
export const x2 = loadingStatePutSuccess
export const yH = loadingStateDelete

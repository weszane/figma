import type { Dispatch } from 'redux'
import { BEGIN } from 'redux-optimist'
import { createActionCreator, createOptimistAction as createOptimistActionUtil, generateUniqueType } from '../905/73481'
import { createOptimistCommitAction, createOptimistRevertAction } from '../905/676456'
import { generateOptimistId } from '../905/842794'
import { getFalseValue } from '../figma_app/897289'

// Original: let d = createActionCreator('_THUNK_FOR_TEST_')
const thunkTestAction = createActionCreator('_THUNK_FOR_TEST_')

/**
 * Generates an optimist thunk action creator.
 *
 * @param handler - The main thunk handler function.
 * @param loadingKeySelector - Optional function to select a loading key.
 * @returns An optimist thunk action creator with loading key support.
 * @originalName $$l1
 */
export function createOptimistThunk(handler: (
  context: {
    dispatch: Dispatch
    getState: () => any
    optimisticDispatch: (action: { type: string, payload?: any }) => {
      optimistId: number | string
      revert: () => void
      commit: () => void
    }
  },
  payload: any,
  extra?: Record<string, any>
) => any, loadingKeySelector?: (payload: any) => string) {
  const uniqueType = generateUniqueType('THUNK')
  const getLoadingKey = (payload: any) => loadingKeySelector ? loadingKeySelector(payload) : uniqueType

  /**
   * The actual thunk action creator.
   * @param payload - The payload for the thunk.
   */
  const optimistThunkAction = (payload: any) => {
    const loadingKey = getLoadingKey(payload)

    return (dispatch: Dispatch, getState: () => any, extra?: Record<string, any>) => {
      // For testing: dispatch a test action if getFalseValue() returns true
      if (getFalseValue()) {
        dispatch(thunkTestAction({
          thunkIdentifier: uniqueType,
          thunkPayload: payload,
        }))
      }

      return handler(
        {
          dispatch,
          getState,
          optimisticDispatch(action) {
            const optimistId = generateOptimistId()
            dispatch({
              type: action.type,
              payload: action.payload,
              optimist: {
                type: BEGIN,
                id: optimistId,
              },
            })
            return {
              optimistId,
              revert: () => dispatch(createOptimistRevertAction(optimistId)),
              commit: () => dispatch(createOptimistCommitAction(optimistId)),
            }
          },
        },
        payload,
        {
          loadingKey,
          ...extra,
        },
      )
    }
  }

  // Attach loading key selector for payloads
  optimistThunkAction.loadingKeyForPayload = getLoadingKey

  // For testing: expose unique identifier if getFalseValue() returns true
  if (getFalseValue()) {
    (optimistThunkAction as any)._uniqueIdentifierForTest_ = uniqueType
  }

  return optimistThunkAction
}

/**
 * Creates an optimist action.
 *
 * @param type - The action type.
 * @param payload - The action payload.
 * @param meta - Optional meta information.
 * @returns An optimist action object.
 * @originalName $$c0
 */
export function createOptimistAction(type: string, payload: any, meta?: any) {
  return createOptimistActionUtil(type, payload, meta)
}

// Exported aliases for compatibility
export const MM = createOptimistAction
export const nF = createOptimistThunk

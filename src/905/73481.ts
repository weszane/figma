import type { ActionCreator, Dispatch } from 'redux'
import { BEGIN } from 'redux-optimist'
import { generateOptimistId } from '../905/842794'
import { isDebugMode } from '../figma_app/897289'
import { ThunkDispatch } from 'redux-thunk'

/**
 * Internal registry for unique action types.
 * @original s
 */
const uniqueTypeRegistry: Record<string, boolean> = Object.create(null)

/**
 * Generates a unique action type string based on the input.
 * @param baseType - The base action type string.
 * @returns A unique action type string.
 * @original $$o2
 */
export function generateUniqueType(baseType: string): string {
  let type = baseType
  let index = 0
  while (uniqueTypeRegistry[type]) {
    type = `${baseType}_${index}`
    index += 1
  }
  uniqueTypeRegistry[type] = true
  return type
}

/**
 * Creates a simple action creator with a unique type.
 * @param baseType - The base action type string.
 * @returns An action creator function with .matches and optional ._uniqueType properties.
 * @original $$l1
 */
export function createActionCreator(baseType: string) {
  const type = generateUniqueType(baseType)
  const actionCreator = (payload: Record<string, any> = {}) => ({
    type,
    payload,
  })
  actionCreator.matches = (action: { type: string }) => action.type === type
  if (isDebugMode) {
    (actionCreator as any)._uniqueType = type
  }
  return actionCreator
}

/**
 * Type for the thunk handler function.
 * @original $$d0
 */
type ThunkHandler<TState = any, TPayload = any, TExtra = Record<string, unknown>> = (
  context: { dispatch: ThunkDispatch<TState, unknown, any>, getState: () => TState },
  payload: TPayload,
  extra: TExtra
) => any

/**
 * Creates an async action creator with optimist support.
 * @param baseType - The base action type string.
 * @param handler - The thunk handler function.
 * @param loadingKeySelector - Optional function to select loading key from payload.
 * @returns An async action creator with .matches and .loadingKeyForPayload properties.
 * @original $$d0
 */
export function createOptimistAction<TState = any, TPayload = any, TExtra extends Record<string, unknown> = any>(
  baseType: string,
  handler: ThunkHandler<TState, TPayload, TExtra>,
  loadingKeySelector?: (payload: TPayload) => string,
) {
  const type = generateUniqueType(baseType)
  const getLoadingKey = loadingKeySelector || (() => type)

  const asyncActionCreator = (payload: TPayload) => {
    const loadingKey = getLoadingKey(payload)
    return (dispatch: Dispatch, getState: () => TState, extra?: TExtra) => {
      const optimistId = generateOptimistId()
      const result = handler(
        { dispatch, getState },
        payload,
        ({
          loadingKey,
          optimistId,
          ...(extra || {}),
        } as unknown as TExtra),
      )
      dispatch({
        type,
        payload,
        optimist: {
          type: BEGIN,
          id: optimistId,
        },
      })
      return result
    }
  }

  asyncActionCreator.matches = (action: { type: string }) => action.type === type
  asyncActionCreator.loadingKeyForPayload = getLoadingKey
  return asyncActionCreator
}

// Exported names refactored for clarity and traceability
export const MM = createOptimistAction // original: MM = $$d0
export const NC = createActionCreator // original: NC = $$l1
export const T4 = generateUniqueType // original: T4 = $$o2

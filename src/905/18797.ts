import { useSelector } from 'react-redux'

import { APILoadingStatus } from '../905/520829'

/**
 * Types for loading state and API status
 */

/**
 * Checks if the given key in the state is loading.
 * @param state - The state object containing loading statuses.
 * @param key - The key to check.
 * @returns True if loading, false otherwise.
 * (Original: $$s4)
 */
export function isLoading(state: Record<string, APILoadingStatus>, key: string): boolean {
  return state[key] === APILoadingStatus.LOADING
}

/**
 * Checks if the given key in the state is not null or undefined.
 * @param state - The state object.
 * @param key - The key to check.
 * @returns True if not null/undefined, false otherwise.
 * (Original: $$o7)
 */
export function isDefined(state: Record<string, any>, key: string): boolean {
  return state[key] !== null && state[key] !== undefined
}

/**
 * Checks if the given key in the state is not loading and is defined.
 * @param state - The state object.
 * @param key - The key to check.
 * @returns True if not loading and defined, false otherwise.
 * (Original: $$l0)
 */
export function isLoaded(state: Record<string, APILoadingStatus>, key: string): boolean {
  return isDefined(state, key) && !isLoading(state, key)
}

/**
 * Checks if the given key in the state is successful.
 * @param state - The state object containing loading statuses.
 * @param key - The key to check.
 * @returns True if success, false otherwise.
 * (Original: $$d2)
 */
export function isSuccess(state: Record<string, APILoadingStatus>, key: string): boolean {
  return state[key] === APILoadingStatus.SUCCESS
}

/**
 * Checks if the given key in the state is failure.
 * @param state - The state object containing loading statuses.
 * @param key - The key to check.
 * @returns True if failure, false otherwise.
 * (Original: $$c5)
 */
export function isFailure(state: Record<string, APILoadingStatus>, key: string): boolean {
  return state[key] === APILoadingStatus.FAILURE
}

/**
 * Returns the value for the given key in the state.
 * @param state - The state object.
 * @param key - The key to retrieve.
 * @returns The value for the key.
 * (Original: $$u1)
 */
export function getValue<T>(state: Record<string, T>, key: string): T {
  return state[key]
}

/**
 * Checks if the given key in the state is null, undefined, or failure.
 * @param state - The state object containing loading statuses.
 * @param key - The key to check.
 * @returns True if null/undefined/failure, false otherwise.
 * (Original: $$p3)
 */
export function isNullOrFailure(state: Record<string, APILoadingStatus>, key: string): boolean {
  return state[key] === null || state[key] === undefined || state[key] === APILoadingStatus.FAILURE
}

/**
 * Checks if the loading state for the given key is loading using useSelector.
 * @param key - The key to check.
 * @returns True if loading, false otherwise.
 * (Original: $$m8)
 */
export function useIsLoading(key: string): boolean {
  return isLoading(useSelector((state: any) => state.loadingState), key)
}

/**
 * Checks if the loading state for the given key is loaded using useSelector.
 * @param key - The key to check.
 * @returns True if loaded, false otherwise.
 * (Original: $$h6)
 */
export function useIsLoaded(key: string): boolean {
  return isLoaded(useSelector((state: any) => state.loadingState), key)
}

// Export aliases for backwards compatibility with original names
export const D2 = isLoaded
export const Fl = getValue
export const GH = isSuccess
export const Sc = isNullOrFailure
export const VP = isLoading
export const aF = isFailure
export const mC = useIsLoaded
export const mn = isDefined
export const oh = useIsLoading

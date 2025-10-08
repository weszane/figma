import { hideModal } from "../905/156213"
import { setTwoFactorAuthError, setTwoFactorAuthLoading } from "../905/355291"
import { putUserAction } from "../figma_app/24841"

// Origin: /Users/allen/github/fig/src/905/990455.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments for clarity and potential issues.

// Assumed dependencies:
// - setTwoFactorAuthError, setTwoFactorAuthLoading, hideModal, putUserAction are imported action creators with a .matches(action) method.

// Type definition for the two-factor authentication state
export interface TwoFactorAuthState {
  secret: string | null
  token: string | null
  provisioningUri: string | null
  currentError?: string | null
  loading?: boolean
}

// Internal state for two-factor authentication setup
let twoFactorAuthSetup: Omit<TwoFactorAuthState, "currentError" | "loading"> = {
  secret: null,
  token: null,
  provisioningUri: null,
}

/**
 * Sets the internal two-factor authentication setup state.
 * @param setup - New setup state
 */
export function setTwoFactorAuthSetup(setup: typeof twoFactorAuthSetup): void {
  twoFactorAuthSetup = setup
}

/**
 * Gets the current two-factor authentication setup state.
 * @returns The current setup state
 */
export function getTwoFactorAuthSetup(): typeof twoFactorAuthSetup {
  return twoFactorAuthSetup
}

/**
 * Resets the internal two-factor authentication setup state to initial values.
 */
export function resetTwoFactorAuthSetup(): void {
  twoFactorAuthSetup = {
    secret: null,
    token: null,
    provisioningUri: null,
  }
}

/**
 * Reducer for two-factor authentication state.
 * Handles error, loading, and modal actions.
 * @param state - Current state (default: empty object)
 * @param action - Dispatched action
 * @returns Updated state
 */
export function twoFactorAuthReducer(
  state: any = {},
  action: any, // Replace 'any' with a proper Action type if available
): TwoFactorAuthState {
  // Note: The matches() method is assumed to check if the action is of a certain type.
  if (setTwoFactorAuthError.matches(action)) {
    return {
      ...state,
      currentError: action.payload,
      loading: false,
    }
  }
  if (putUserAction.matches(action)) {
    return {
      ...state,
      loading: false,
    }
  }
  if (setTwoFactorAuthLoading.matches(action)) {
    return {
      ...state,
      loading: true,
      currentError: null,
    }
  }
  if (hideModal.matches(action)) {
    return {
      ...state,
      loading: false,
      currentError: null,
    }
  }
  return state
}

// Export aliases for compatibility with original code
export const Wm = twoFactorAuthReducer
export const ed = resetTwoFactorAuthSetup
export const r6 = getTwoFactorAuthSetup
export const yV = setTwoFactorAuthSetup

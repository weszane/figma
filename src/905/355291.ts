import { createActionCreator } from "../905/73481"
import { showModalHandler } from "../905/156213"
// Origin: /src/905/355291.ts
// Refactored: Renamed variables, added types, simplified exports, added comments and type safety.

// Assumed dependencies:
// - createActionCreator: function that creates Redux-style action creators.
// - showModalHandler: function that triggers modal display, expects a config object.



// Action creators for two-factor authentication state
export const setTwoFactorAuthError = createActionCreator("TWO_FACTOR_AUTH_SET_CURRENT_ERROR")
export const setTwoFactorAuthLoading = createActionCreator("TWO_FACTOR_AUTH_SET_LOADING")

// Modal type constants
export const TWO_FACTOR_RECOVERY_MODAL_TYPE = "TwoFactorRecoveryModal"
export const PHONE_SETUP_MODAL_TYPE = "PhoneSetupModal"

// Handler to show the Two-Factor Recovery modal
export function showTwoFactorRecoveryModal(): ReturnType<typeof showModalHandler> {
  return showModalHandler({
    type: { type: TWO_FACTOR_RECOVERY_MODAL_TYPE },
    showModalsBeneath: true, // Show modals beneath this one
  })
}

// Handler to show the Phone Setup modal
export function showPhoneSetupModal(): ReturnType<typeof showModalHandler> {
  return showModalHandler({
    type: { type: PHONE_SETUP_MODAL_TYPE },
    showModalsBeneath: true,
  })
}

// Export aliases for compatibility with original codebase
export const N$ = showTwoFactorRecoveryModal
export const Yu = showPhoneSetupModal
export const qk = PHONE_SETUP_MODAL_TYPE
export const r1 = setTwoFactorAuthLoading
export const sp = TWO_FACTOR_RECOVERY_MODAL_TYPE
export const z3 = setTwoFactorAuthError

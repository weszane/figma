import { selectCurrentUser } from "../905/372672"
import { getFeatureFlags } from "../905/601108"
import { useCurrentUserOrg } from "../905/845253"
import { useCurrentPlanUser, useIsOrgGuestUser } from "../figma_app/465071"
import { UserTypeEnum } from "../figma_app/736948"
/**
 * Checks if MFA is required for the current user's organization
 * Original name: $$l0
 */
export function isMfaRequiredForOrg(): boolean {
  const currentUserOrg = useCurrentUserOrg()
  return (
    currentUserOrg?.mfa_required === UserTypeEnum.GUESTS
    || currentUserOrg?.mfa_required === UserTypeEnum.ALL_USERS
  )
}

/**
 * Checks if the current user is restricted to SSO only authentication
 * Original name: d
 */
function isUserSsoOnly(): boolean {
  const currentUser = selectCurrentUser()
  return !!currentUser?.google_sso_only || !!currentUser?.saml_sso_only
}

/**
 * Checks if MFA setup is required for guest users
 * Original name: $$c1
 */
export function shouldShowMfaSetupForGuests(): boolean {
  const isOrgRequiringMfa = isMfaRequiredForOrg()
  const isUserMfaEnabled = (): boolean => {
    const currentUser = selectCurrentUser()
    return !!currentUser?.two_factor_app_enabled || !!currentUser?.phone_number
  }
  const isSsoOnlyUser = isUserSsoOnly()

  return (
    !!getFeatureFlags().mfa_for_guests
    && isOrgRequiringMfa
    && !isUserMfaEnabled
    && !isSsoOnlyUser
  )
}

/**
 * Checks if MFA disable warning should be shown for guests in MFA-required orgs
 * Original name: $$u2
 */
export function showMFADisableWarning(): boolean {
  const currentUser = useCurrentPlanUser("useShouldShowMfaDisableWarningForMfaRequiredOrg")
  const isGuestUser = useIsOrgGuestUser(currentUser).unwrapOr(false)
  const isOrgRequiringMfa = isMfaRequiredForOrg()
  const isSsoOnlyUser = isUserSsoOnly()

  return (
    !!getFeatureFlags().mfa_for_guests
    && isGuestUser
    && isOrgRequiringMfa
    && !isSsoOnlyUser
  )
}

// Export aliases for backward compatibility
export const Of = isMfaRequiredForOrg
export const lW = shouldShowMfaSetupForGuests
export const uG = showMFADisableWarning

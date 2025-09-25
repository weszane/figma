import { getFeatureFlags } from '../905/601108'
import { currentUserOrgIdAtom } from '../905/845253'
import { atom } from '../figma_app/27355'
import { OrgUserIsMfaRestrictedView } from '../figma_app/43951'
/**
 * Atom to determine if the current user is MFA restricted in their organization.
 * Original export: $$o0
 */
export const isCurrentUserMfaRestrictedAtom = atom((get) => {
  // Get the MFA for guests feature flag
  const mfaForGuestsEnabled = getFeatureFlags().mfa_for_guests
  // Get the current user's organization ID
  const orgId = get(currentUserOrgIdAtom)

  // Guard clause: If feature flag or orgId is missing, return false
  if (!mfaForGuestsEnabled || !orgId)
    return false

  // Query the MFA restriction view for the current user in the org
  const mfaRestrictionResult = get<{ status: string, data: ObjectOf }>(
    OrgUserIsMfaRestrictedView.Query({ orgId }),
  )

  // Guard clause: If query is not loaded, return false
  if (mfaRestrictionResult.status !== 'loaded')
    return false

  // Extract the MFA restriction status from the query result
  const mfaRestriction
    = mfaRestrictionResult.data.currentUser.baseOrgUser?.isMfaRestricted

  // Return true only if the restriction status is loaded and data is true
  return mfaRestriction?.status === 'loaded' && mfaRestriction.data === true
})

/** Alias for isCurrentUserMfaRestrictedAtom (original: _) */
export const _ = isCurrentUserMfaRestrictedAtom

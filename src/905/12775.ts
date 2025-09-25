import { useLayoutEffect, useState } from 'react'
import { isCurrentUserMfaRestrictedAtom } from '../905/401345'
import { getFeatureFlags } from '../905/601108'
import { useAtomWithSubscription } from '../figma_app/27355'
/**
 * Checks if the current user is MFA restricted and if the MFA for guests feature flag is enabled.
 * Returns true if both conditions are met.
 *
 * Original function name: $$o0
 */
export function isMfaForGuestEnabled(): boolean {
  const isMfaRestricted = useAtomWithSubscription(isCurrentUserMfaRestrictedAtom)
  const [isRestricted, setIsRestricted] = useState(false)

  useLayoutEffect(() => {
    if (isMfaRestricted) {
      setIsRestricted(true)
    }
  }, [isMfaRestricted])

  // Guard clause for feature flag and restriction state
  return Boolean(getFeatureFlags().mfa_for_guests && isRestricted)
}

/**
 * Export alias for isMfaForGuestEnabled (original: K)
 */
export const K = isMfaForGuestEnabled

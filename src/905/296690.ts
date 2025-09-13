import { createReduxSubscriptionAtomWithState as createOrgSubscriptionAtom } from '../905/270322'
import { getOrgByCurrentUserId as fetchOrgByUserId } from '../905/845253'

/**
 * Creates a subscription atom for the current user's organization.
 * @param params - Contains currentUserOrgId and orgById.
 * @returns The organization object for the current user.
 * @see $$r0
 */
export const orgSubscriptionAtom = createOrgSubscriptionAtom(
  ({ currentUserOrgId, orgById }) => fetchOrgByUserId(currentUserOrgId, orgById),
)

// Export alias for backward compatibility (Z was $$r0)
export const Z = orgSubscriptionAtom

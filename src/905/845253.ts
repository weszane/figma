import { useSelector } from 'react-redux'
import { createReduxSubscriptionAtomWithState } from '../905/270322'

/**
 * Returns the value from orgById for the currentUserOrgId.
 * @param orgId - The current user's organization ID.
 * @param orgById - The mapping of organization IDs to organization objects.
 * @returns The organization object for the given orgId, if it exists.
 * (Original function: $$r3)
 */
export function getOrgByCurrentUserId(orgId?: string, orgById?: Record<string, any>) {
  if (!orgId)
    return
  const org = orgById?.[orgId]
  if (org)
    return org
}

/**
 * Selector hook to get the current user's organization object from Redux state.
 * (Original function: $$a2)
 */
export function useCurrentUserOrg() {
  return useSelector(({ currentUserOrgId, orgById }) =>
    getOrgByCurrentUserId(currentUserOrgId, orgById),
  )
}

/**
 * Selector hook to get the current user's organization ID from Redux state.
 * (Original function: $$s0)
 */
export function useCurrentUserOrgId() {
  return useSelector<{ currentUserOrgId: string | undefined }, any>(state => state.currentUserOrgId)
}

/**
 * Atom for subscribing to currentUserOrgId changes in Redux state.
 * (Original variable: $$o1)
 */
export const currentUserOrgIdAtom = createReduxSubscriptionAtomWithState(
  ({ currentUserOrgId }) => currentUserOrgId,
)

// Refactored exports for clarity and consistency
export const dq = useCurrentUserOrgId
export const h0 = currentUserOrgIdAtom
export const sZ = useCurrentUserOrg
export const td = getOrgByCurrentUserId

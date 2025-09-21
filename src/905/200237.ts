import { setLastVisitedId } from '../905/93909'
import { orgsSetOrgId } from '../905/395917'

// Original name: $$a0
/**
 * Constant representing the external teams identifier.
 */
export const EXTERNAL_TEAMS = 'external-teams'

// Original name: $$s1
/**
 * Selects the appropriate ID based on the action type.
 * If the action matches setLastVisitedId, returns the planId from payload.
 * If the action matches orgsSetOrgId and the default value is null, returns the orgId from payload.
 * Otherwise, returns the provided default value.
 * @param defaultValue - The default ID value, defaults to null.
 * @param action - The action object to check.
 * @returns The selected ID or the default value.
 */
export function getSelectedId(defaultValue: string | null = null, action: any): string | null {
  if (setLastVisitedId.matches(action)) {
    return action.payload.planId
  }
  else if (orgsSetOrgId.matches(action) && defaultValue === null) {
    return action.payload.orgId
  }
  else {
    return defaultValue
  }
}

// Aliases for backward compatibility (original names: P and j)
export const P = EXTERNAL_TEAMS
export const j = getSelectedId

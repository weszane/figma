import { hasParentOrgId } from '../905/882262'
import { canAccessDevModeEntryPoint } from '../figma_app/473493'
/**
 * Checks if the user has a parent organization ID and can access the dev mode entry point.
 * @param user - The user object to check.
 * @returns True if both conditions are met, false otherwise.
 * (Original function: $$a0)
 */
export function canAccessDevModeWithOrg(user: any): boolean {
  const hasOrg = user && hasParentOrgId(user)
  const canAccessDevMode = user && canAccessDevModeEntryPoint(user)
  return hasOrg && canAccessDevMode
}

// Export with original alias for traceability (Original export: b)
export const b = canAccessDevModeWithOrg

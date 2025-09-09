import { OrgUserRoleEnum } from '../figma_app/35887'
import { FUserRoleType } from '../figma_app/191312'

/**
 * Maps FUserRoleType to OrgUserRoleEnum.
 * @param role - The user role from FUserRoleType.
 * @returns The corresponding OrgUserRoleEnum value.
 * @see $$a0
 */
export function mapUserRoleToOrgUserRole(role: FUserRoleType): OrgUserRoleEnum | undefined {
  switch (role) {
    case FUserRoleType.GUEST:
      return OrgUserRoleEnum.GUEST
    case FUserRoleType.MEMBER:
      return OrgUserRoleEnum.MEMBER
    case FUserRoleType.ADMIN:
      return OrgUserRoleEnum.ADMIN
    default:
      return undefined
  }
}

// Refactored export for compatibility with original usage (A)
export const A = mapUserRoleToOrgUserRole

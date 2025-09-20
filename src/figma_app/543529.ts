import { useSelector } from 'react-redux'
import { useCurrentUserOrg, useCurrentUserOrgId } from '../905/845253'
import { resourceUtils } from '../905/989992'
import { OrgHasSeatsManagedViaScimView } from '../figma_app/43951'
import { FPlanNameType, FUserRoleType } from '../figma_app/191312'
import { useCurrentPublicPlan } from '../figma_app/465071'
import { handleSuspenseRetainRelease, setupResourceAtomHandler } from '../figma_app/566371'
import { useCurrentOrgAdminInfo } from '../figma_app/740025'

interface Org {
  orgUsersByOrgId: Record<string, Record<string, { permission: string }>>
  user: ObjectOf
  userFlags: any
  teams: any
  currentTeamId: string
}
// Original: $$u0
/**
 * Hook to check if the current user is a guest in their organization.
 * @returns {boolean} True if the user is a guest, false otherwise.
 */
export function useIsUserGuestInOrg() {
  const currentOrg = useCurrentUserOrg()
  return useSelector<Org>((state) => {
    const orgUsers = currentOrg && state.orgUsersByOrgId[currentOrg.id]
    return orgUsers && orgUsers[state.user.id]?.permission === FUserRoleType.GUEST
  })
}

// Original: $$p1
/**
 * Hook to check if the current user has permission in their organization and is not a guest.
 * @returns {boolean} True if the user has permission and is not a guest, false otherwise.
 */
export function useHasUserPermissionInOrg() {
  const currentOrg = useCurrentUserOrg()
  const permission = useSelector<Org>(state =>
    currentOrg && state.orgUsersByOrgId[currentOrg.id][state.user.id]?.permission,
  )
  return permission && permission !== FUserRoleType.GUEST
}

// Original: $$_4
/**
 * Hook to get the parent organization of the currently open file.
 * @returns {object | undefined} The parent organization object or undefined.
 */
export function useParentOrgOfOpenFile(): ObjectOf | undefined {
  return useSelector<ObjectOf>(state =>
    state.openFile?.parentOrgId && state.orgById[state.openFile.parentOrgId] || undefined,
  )
}

// Original: $$h3
/**
 * Hook to determine if the organization manages seats via SCIM and is on an Enterprise plan.
 * @returns {boolean} True if conditions are met, false otherwise.
 */
export function useOrgManagesSeatsViaScim() {
  const orgId = useCurrentUserOrgId()
  const publicPlan = useCurrentPublicPlan('useSuspendOrgManagesSeatsViaScim')
  const [resource] = setupResourceAtomHandler(
    OrgHasSeatsManagedViaScimView({ orgId }),
    { enabled: !!orgId },
  )
  const retained = handleSuspenseRetainRelease(publicPlan, resource)
  const allResources = resourceUtils.all(retained)
  return resourceUtils.useTransform(allResources, ([plan, scimData]) =>
    plan.tier === FPlanNameType.ENTERPRISE
    && !!scimData.org?.orgSamlConfigs?.some(
      config => config.hasSeatManagedViaScim.status === 'loaded' && config.hasSeatManagedViaScim.data,
    ))
}

// Original exports updated to match new function names
export const Cb = useIsUserGuestInOrg
export const U5 = useHasUserPermissionInOrg
export const Yo = useCurrentOrgAdminInfo
export const i6 = useOrgManagesSeatsViaScim
export const yy = useParentOrgOfOpenFile

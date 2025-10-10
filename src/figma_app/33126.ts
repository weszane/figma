import { createReduxSubscriptionAtomWithState } from "../905/270322"
import { mapAndAggregateResources, transformAtom } from "../905/401885"
import { N } from "../905/482239"
import { createRemovableAtomFamily } from "../figma_app/27355"
import { OrgHasWorkspacesView, UserForRcs } from "../figma_app/43951"
import { FUserRoleType } from "../figma_app/191312"

// Refactored for readability, type safety, and maintainability.
// Renamed variables, added types, simplified object mapping and conditional logic.

// Type definitions inferred from usage
interface OrgUser {
  orgId: string
  userId: string
  permission: FUserRoleType
}

interface Org {
  id: string
  bigmaEnabledAt?: string | null
  voiceDisabledAt?: string | null
  widgetsWhitelistEnforced?: boolean | null
  workspaces?: Array<unknown>
  k12GoogleOrg?: boolean
  [key: string]: unknown // Allow additional properties
}

interface ProcessedOrg extends Org {
  bigmaEnabled: boolean
  voiceEnabled: boolean
  widgetsWhitelistEnforced: boolean
}

// Fetch current user's org users
export const currentUserOrgUsersAtom = transformAtom(
  UserForRcs.Query({}),
  data => data.currentUser.orgUsers as OrgUser[],
)

// Map org users to a dictionary of processed orgs
export const orgDictionaryAtom = transformAtom(currentUserOrgUsersAtom, (orgUsers) => {
  const orgs = orgUsers?.map(orgUser => orgUser.org as Org)
  if (orgs === undefined)
    return {}

  const processedOrgs: Record<string, ProcessedOrg> = {}
  for (const org of orgs) {
    if (org != null) {
      processedOrgs[org.id] = {
        ...org,
        bigmaEnabled: !!org.bigmaEnabledAt,
        voiceEnabled: !org.voiceDisabledAt,
        widgetsWhitelistEnforced: !!org.widgetsWhitelistEnforced,
      }
    }
  }
  return processedOrgs
})

// Get current user's org ID from Redux state
export const currentUserOrgIdAtom = createReduxSubscriptionAtomWithState(
  state => state.currentUserOrgId,
)

// Get current user's org based on org ID
export const currentUserOrgAtom = mapAndAggregateResources(
  [orgDictionaryAtom],
  ([orgMap], getAtomValue) => {
    const orgId = getAtomValue(currentUserOrgIdAtom)
    return orgId != null ? orgMap[orgId] : null
  },
)

// Check if an org has workspaces and bigma enabled
export const orgHasWorkspacesAndBigmaAtomFamily = createRemovableAtomFamily((orgId: string) =>
  transformAtom(
    OrgHasWorkspacesView.Query({ orgId }),
    data => !!data.org?.workspaces?.length && !!data.org?.bigmaEnabledAt,
  ),
)

// Get orgById map from Redux state
export const orgByIdAtom = createReduxSubscriptionAtomWithState(state => state.orgById)

// Determine if current user can access bigma features
export const canAccessBigmaAtom = mapAndAggregateResources(
  [currentUserOrgAtom, currentUserOrgUsersAtom, N],
  ([currentOrg, orgUsers, currentUserId], getAtomValue) => {
    if (!currentOrg)
      return false

    const orgInfo = getAtomValue(orgByIdAtom)[currentOrg.id]
    if (!orgInfo?.bigma_enabled || !orgInfo?.workspaces_nux_active_at)
      return false

    const userOrgEntry = orgUsers?.find(
      entry => entry.orgId === currentOrg.id && entry.userId === currentUserId,
    )
    return !!userOrgEntry && userOrgEntry.permission !== FUserRoleType.GUEST
  },
)

// Check if any org is a K12 Google org
export const hasK12GoogleOrgAtom = transformAtom(orgDictionaryAtom, orgMap =>
  !!Object.values(orgMap).find((org: Org) => org.k12GoogleOrg as boolean))

// Export atoms with descriptive names
export const KI = orgDictionaryAtom
export const UC = orgHasWorkspacesAndBigmaAtomFamily
export const ZS = currentUserOrgAtom
export const _s = currentUserOrgIdAtom
export const eS = hasK12GoogleOrgAtom
export const rg = currentUserOrgUsersAtom
export const uA = canAccessBigmaAtom

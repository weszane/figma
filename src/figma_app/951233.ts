import { KindEnum } from '../905/129884'
import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { getI18nString } from '../905/303541'
import { extractValuesByKey } from '../905/439650'
import { AccountTypeEnum } from '../figma_app/35887'
import { FUserRoleType } from '../figma_app/191312'
import { sortByPropertyWithOptions } from '../figma_app/656233'
import { BadgeColor } from '../figma_app/919079'

/**
 * Checks if the user exists and has organization users.
 * @param state - The application state.
 * @returns True if user exists and has org users, false otherwise.
 * (Original: $$u5)
 */
export function hasOrgUsersForUser(state: {
  user?: { id: string }
  orgUsersByOrgId?: Record<string, Record<string, any>>
}): boolean {
  if (!state.user || state.orgUsersByOrgId === undefined)
    return false
  return extractValuesByKey(state.orgUsersByOrgId, state.user.id).length > 0
}

/**
 * Gets the current user's organization user object.
 * @param state - The application state.
 * @returns The org user object or null.
 * (Original: $$p9)
 */
export function getCurrentUserOrgUser(state: {
  currentUserOrgId?: string
  user?: { id: string }
  orgUsersByOrgId: Record<string, Record<string, any>>
}): any | null {
  const { currentUserOrgId, user, orgUsersByOrgId } = state
  if (currentUserOrgId && user && orgUsersByOrgId[currentUserOrgId]) {
    return orgUsersByOrgId[currentUserOrgId][user.id]
  }
  return null
}

createReduxSubscriptionAtomWithState(getCurrentUserOrgUser)

/**
 * Atom for main workspace id of current user.
 * (Original: $$_2)
 */
export const mainWorkspaceIdAtom = createReduxSubscriptionAtomWithState((state) => {
  const orgUser = getCurrentUserOrgUser(state)
  return orgUser?.workspace_users?.find((wu: any) => wu.is_main_workspace)?.workspace_id
})

/**
 * Gets the user's organization user object for a specific org.
 * @param state - The application state.
 * @param orgId - The organization id.
 * @returns The org user object or null.
 * (Original: $$h1)
 */
export function getUserOrgUserByOrgId(
  state: { user?: { id: string }, orgUsersByOrgId: Record<string, Record<string, any>> },
  orgId: string,
): any | null {
  if (state.user && state.orgUsersByOrgId[orgId]) {
    return state.orgUsersByOrgId[orgId][state.user.id]
  }
  return null
}

/**
 * Extracts values by key from an object.
 * (Original: $$m8)
 */
export const extractOrgUsersByUserId = extractValuesByKey

/**
 * Gets all admin users sorted by creation date.
 * @param orgUsers - Organization users object.
 * @returns Array of admin users.
 * (Original: $$g4)
 */
export function getAdminUsers(orgUsers: Record<string, any>): any[] {
  const admins = Object.values(orgUsers).filter(
    (user: any) => user.permission === FUserRoleType.ADMIN,
  )
  sortByPropertyWithOptions(admins, 'created_at')
  return admins
}

/**
 * Gets the top 3 admin users.
 * @param orgUsers - Organization users object.
 * @returns Array of up to 3 admin users.
 * (Original: $$f10)
 */
export function getTopAdminUsers(orgUsers: Record<string, any>): any[] {
  return getAdminUsers(orgUsers).slice(0, 3)
}

/**
 * Gets badge info for a user.
 * @param user - The user object.
 * @param options - Options for badge display.
 * @returns Badge info object.
 * (Original: $$E7)
 */
export function getUserBadge(
  user: any,
  options?: { showMember?: boolean },
): {
  color: BadgeColor
  text: string
  dataTooltipType?: KindEnum
  dataTooltip?: string
  dataTooltipTimeout?: number
  dataTooltipShowAbove?: boolean
} | undefined {
  if (user.permission === FUserRoleType.ADMIN) {
    return {
      color: BadgeColor.DEFAULT,
      text: getI18nString('members_table.badge_label.admin'),
    }
  }
  if (user.is_email_validated) {
    if (user.permission === FUserRoleType.GUEST && user.is_mfa_restricted) {
      return {
        color: BadgeColor.DEFAULT,
        text: getI18nString('members_table.badge_label.blocked'),
        dataTooltipType: KindEnum.TEXT,
        dataTooltip: getI18nString('members_table.badge_label.blocked.description'),
        dataTooltipTimeout: 50,
        dataTooltipShowAbove: true,
      }
    }
    if (user.permission === FUserRoleType.GUEST) {
      return {
        color: BadgeColor.DEFAULT,
        text: getI18nString('members_table.badge_label.guest'),
      }
    }
    if (user.permission === FUserRoleType.MEMBER && options?.showMember) {
      return {
        color: BadgeColor.DEFAULT,
        text: getI18nString('general.member'),
      }
    }
    return undefined
  }
  return {
    color: BadgeColor.DEFAULT,
    text: getI18nString('members_table.badge_label.unverified'),
  }
}

/**
 * Finds the main workspace user.
 * @param orgUser - The organization user object.
 * @returns The main workspace user object.
 * (Original: $$y0)
 */
export function findMainWorkspaceUser(orgUser: any) {
  return orgUser.workspace_users?.find((wu: any) => wu.is_main_workspace)
}

/**
 * Checks if SCIM metadata exists.
 * @param orgUser - The organization user object.
 * @returns True if SCIM metadata exists.
 * (Original: $$b3)
 */
export function hasScimMetadata(orgUser: any): boolean {
  return !!orgUser.scim_metadata
}

/**
 * Checks if SCIM seat type exists for org user or invite.
 * @param user - The user object.
 * @returns True if SCIM seat type exists.
 * (Original: $$T6)
 */
export function hasScimSeatType(user: any): boolean {
  if (user.type === AccountTypeEnum.ORG_USER) {
    return !!user.scim_seat_type
  }
  return !user.isOrgInvite && !!user.scim_seat_type
}

// Exported aliases for refactored functions
export const Ad = findMainWorkspaceUser
export const H = getUserOrgUserByOrgId
export const LM = mainWorkspaceIdAtom
export const QS = hasScimMetadata
export const Xy = getAdminUsers
export const Yj = hasOrgUsersForUser
export const bC = hasScimSeatType
export const t5 = getUserBadge
export const x9 = extractOrgUsersByUserId
export const xw = getCurrentUserOrgUser
export const zR = getTopAdminUsers

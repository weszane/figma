import { TeamExtendedDataMapper } from '../905/863010'
import { postUserFlag } from '../905/985254'
import { hasValidSubscription, isTeamInGracePeriod } from '../figma_app/345997'
import { isAllowedDomain } from '../figma_app/416935'
import { canAdminTeam } from '../figma_app/642025'
import { hasOrgUsersForUser } from '../figma_app/951233'
/**
 * OrgUpsellDismissalFlags - Maps dismissal states for org upsell.
 */
const OrgUpsellDismissalFlags = {
  FIRST_TIME: 'dismissed_org_upsell_first_time',
  SECOND_TIME: 'dismissed_org_upsell_second_time',
  PERMANENT: 'dismissed_org_upsell_permanently',
}

/**
 * TeamCountType - Enum for team count states.
 */
export enum TeamCountType {
  NONE = 0,
  SINGLE_TEAM = 1,
  MULTIPLE_TEAMS = 2,
}

/**
 * OrgUpsellDismissalState - Enum for org upsell dismissal states.
 */
export enum OrgUpsellDismissalState {
  NEVER = 0,
  ONCE = 1,
  TWICE = 2,
  PERMANENTLY = 3,
}

/**
 * getOrgUpsellDismissalState - Determines the org upsell dismissal state.
 * @param flags - User flag object
 * @returns OrgUpsellDismissalState
 */
function getOrgUpsellDismissalState(flags: Record<string, any>): OrgUpsellDismissalState {
  // p
  return flags[OrgUpsellDismissalFlags.PERMANENT]
    ? OrgUpsellDismissalState.PERMANENTLY
    : flags[OrgUpsellDismissalFlags.SECOND_TIME]
      ? OrgUpsellDismissalState.TWICE
      : flags[OrgUpsellDismissalFlags.FIRST_TIME]
        ? OrgUpsellDismissalState.ONCE
        : OrgUpsellDismissalState.NEVER
}

/**
 * isFlagRecent - Checks if a flag was updated recently.
 * @param flags - User flag object
 * @param flagKey - Key to check
 * @param durationMs - Duration in ms (default: 90 days)
 * @returns boolean
 */
function isFlagRecent(
  flags: Record<string, any>,
  flagKey: string,
  durationMs: number = 7776e6,
): boolean {
  // _
  const flag = flags[flagKey]
  if (!flag)
    return false
  const updatedAt = flag.updatedAt.getTime()
  return Date.now() - updatedAt < durationMs
}

/**
 * shouldShowOrgUpsell - Determines if org upsell should be shown.
 * @param flags - User flag object
 * @returns boolean
 */
export function shouldShowOrgUpsell(flags: Record<string, any>): boolean {
  // $$h4
  switch (getOrgUpsellDismissalState(flags)) {
    case OrgUpsellDismissalState.NEVER:
      return false
    case OrgUpsellDismissalState.ONCE:
      return isFlagRecent(flags, OrgUpsellDismissalFlags.FIRST_TIME)
    case OrgUpsellDismissalState.TWICE:
      return isFlagRecent(flags, OrgUpsellDismissalFlags.SECOND_TIME)
    default:
      return true
  }
}

/**
 * dismissOrgUpsell - Posts user flag for org upsell dismissal.
 * @param flags - User flag object
 * @returns Promise<any>
 */
export function dismissOrgUpsell(flags: Record<string, any>) {
  // $$m0
  switch (getOrgUpsellDismissalState(flags)) {
    case OrgUpsellDismissalState.NEVER:
      return postUserFlag({ dismissed_org_upsell_first_time: true })
    case OrgUpsellDismissalState.ONCE:
      return postUserFlag({ dismissed_org_upsell_second_time: true })
    default:
      return postUserFlag({ dismissed_org_upsell_permanently: true })
  }
}

/**
 * getTeamCountTypeForUpsell - Determines team count type for upsell logic.
 * @param userData - User data object
 * @param adminId - Admin ID
 * @param teamData - Team data object
 * @returns TeamCountType
 */
export function getTeamCountTypeForUpsell(
  userData: any,
  adminId: any,
  teamData?: any,
): TeamCountType {
  // $$g3
  if (
    hasOrgUsersForUser(userData)
    || userData.userFlags.completed_org_cart_flow
  ) {
    return TeamCountType.NONE
  }
  const email = userData.user?.email
  const emailValidated = !!userData.user?.email_validated_at
  const completedProCartFlow = (user: any, durationMs = 2592e6) =>
    isFlagRecent(user.userFlags, 'completed_pro_cart_flow', durationMs)

  if (
    !email
    || isAllowedDomain(email)
    || !emailValidated
    || completedProCartFlow(userData)
    || (teamData
      && (!hasValidSubscription(teamData)
        || isTeamInGracePeriod(TeamExtendedDataMapper.toSinatra(teamData))
        || teamData.isStudentTeam
        || teamData.deletedAt
        || teamData.orgId
        || !teamData.canAdmin))
  ) {
    return TeamCountType.NONE
  }

  const validTeams = Object.values(userData.teams).filter(
    (team: any) =>
      hasValidSubscription(team)
      && !isTeamInGracePeriod(team)
      && !team.student_team
      && !team.deleted_at
      && !team.org_id
      && canAdminTeam(team.id, adminId),
  )
  return validTeams.length > 1
    ? TeamCountType.MULTIPLE_TEAMS
    : validTeams.length === 1
      ? TeamCountType.SINGLE_TEAM
      : TeamCountType.NONE
}

/**
 * isNonAllowedDomainEmail - Checks if email is not in allowed domain.
 * @param user - User object
 * @returns boolean
 */
export function isNonAllowedDomainEmail(user: { email: string }): boolean {
  // $$f1
  return !!user && !isAllowedDomain(user.email)
}

// Export refactored names for imports
export const CJ = dismissOrgUpsell
export const Hw = isNonAllowedDomainEmail
export const VY = TeamCountType
export const hF = getTeamCountTypeForUpsell
export const j = shouldShowOrgUpsell

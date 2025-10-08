import { AccessLevelEnum } from "../905/557142"
import { c } from "../figma_app/52714"
import { FAccessLevelType } from "../figma_app/191312"
import { canManageNonSecretOrgTeam, canViewTeam, hasViewerRoleAccessOnTeam } from "../figma_app/642025"

// Team action types enumeration
export const TeamActionType = Object.freeze({
  CLICK_LEAVE: 0,
  CLICK_WITHDRAW: 1,
  CLICK_JOIN: 2,
  CLICK_REQUEST: 3,
  BYPASS_REQUEST: 4,
  CLICK_JOIN_AS_ADMIN: 5,
} as const)

/**
 * Determines if a team is orphaned (not properly connected to an organization)
 * @param team - The team to check
 * @param userContext - User context containing org teams and roles
 * @returns boolean indicating if team is orphaned
 */
function isTeamOrphaned(team: any, userContext: any): boolean {
  // Teams without org_id cannot be orphaned
  if (!team.org_id) {
    return false
  }

  // Check if team exists in orgTeams and is marked as orphaned
  const orgTeam = userContext.orgTeams?.teams.find((t: any) => t.id === team.id)
  if (orgTeam) {
    return !!orgTeam.orphaned
  }

  // Check if user has any admin roles or pending roles on the team
  const teamRoles = userContext.roles.byTeamId[team.id]
  if (!teamRoles) {
    return true // No roles means orphaned
  }

  // Orphaned if all roles are below admin level and not pending
  return Object.values(teamRoles).every(
    (role: any) => role.level < AccessLevelEnum.ADMIN && !role.pending,
  )
}

/**
 * Determines the appropriate team action based on user permissions and team status
 * @param team - The team to evaluate
 * @param membershipRequest - Pending membership request if exists
 * @param userContext - User context with roles and permissions
 * @param isAdminBypass - Whether admin bypass is enabled
 * @returns TeamActionType or null if no action applicable
 */
export function getTeamActionType(
  team: any,
  membershipRequest: any,
  userContext: any,
  isAdminBypass: boolean,
): number | null {
  // User already has viewer access
  const hasViewerAccess = hasViewerRoleAccessOnTeam(team.id, userContext)
  if (hasViewerAccess) {
    return TeamActionType.CLICK_LEAVE
  }

  // User has pending membership request
  if (membershipRequest && membershipRequest.status === c.PENDING) {
    return TeamActionType.CLICK_WITHDRAW
  }

  // Check if team is orphaned
  const teamIsOrphaned = isTeamOrphaned(team, userContext)

  // Admin can bypass request for private/secret teams
  const canBypassRequest
    = (team.org_access === FAccessLevelType.PRIVATE || team.org_access === FAccessLevelType.SECRET)
      && teamIsOrphaned
      && isAdminBypass

  if (canBypassRequest) {
    return TeamActionType.BYPASS_REQUEST
  }

  // User can manage non-secret org team
  if (canManageNonSecretOrgTeam(team, userContext, userContext.user?.id)) {
    return TeamActionType.CLICK_JOIN_AS_ADMIN
  }

  // Public team - can join directly
  if (team.org_access === FAccessLevelType.PUBLIC) {
    return TeamActionType.CLICK_JOIN
  }

  // Private team - need to request access
  if (team.org_access === FAccessLevelType.PRIVATE) {
    return TeamActionType.CLICK_REQUEST
  }

  // No applicable action
  return null
}

/**
 * Checks if user can view a team based on team access level
 * @param team - The team to check
 * @param userContext - User context with permissions
 * @returns boolean indicating if team is viewable
 */
export function canViewTeamByAccessLevel(team: any, userContext: any): boolean {
  const isSecretTeam = team.org_access === FAccessLevelType.SECRET
  return !isSecretTeam || canViewTeam(team.id, userContext)
}

/**
 * Generates a cache key for joining a single org team
 * @param teamId - The team ID
 * @returns cache key string
 */
export const generateJoinTeamCacheKey = (teamId: string): string => `JOINING_ORG_TEAM_${teamId}`

/**
 * Generates a cache key for batch joining org teams
 * @param teamIds - Array of team IDs
 * @returns cache key string
 */
export function generateBatchJoinTeamsCacheKey(teamIds: string[]): string {
  return `JOINING_${teamIds.length}_BATCH_ORG_TEAMS_${teamIds[0]}`
}

// Export aliases for backward compatibility
export const YP = getTeamActionType
export const gO = TeamActionType
export const n1 = generateBatchJoinTeamsCacheKey
export const ox = canViewTeamByAccessLevel
export const p9 = generateJoinTeamCacheKey

import { getI18nString } from '../905/303541'
import { logInfo } from '../905/714362'
import { memoizeByArgs } from '../figma_app/815945'

/**
 * Generates a workspace identity object from user, org, and team IDs.
 * Original: $$s0
 */
export function setupWorkspaceIdentity(user: { id: string } | null, orgId?: string, teamId?: string) {
  if (!user)
    return null
  return {
    userId: user.id,
    orgId,
    teamId,
  }
}

/**
 * Checks if two workspace identities match.
 * Original: $$o2
 */
export function isSameWorkspaceIdentity(workspace: {
  user: { id: string } | null
  currentUserOrgId?: string
  currentTeamId?: string
}, compare: { userId: string, orgId?: string, teamId?: string }) {
  const identity = setupWorkspaceIdentity(workspace.user, workspace.currentUserOrgId, workspace.currentTeamId)
  if (!identity)
    return false
  if (identity.userId !== compare.userId)
    return false
  if (identity.orgId && identity.orgId === compare.orgId)
    return true
  if (identity.teamId && identity.teamId === compare.teamId)
    return true
  return false
}

/**
 * Returns the workspace name based on org/team/user context.
 * Original: $$l1
 */
export function getWorkspaceName(state: {
  orgById: Record<string, { name?: string }>
  teams: Record<string, { name?: string }>
  user?: { id: string }
}, identity?: { orgId?: string, teamId?: string }, orgsById?: Record<string, { name?: string }>, teamsById?: Record<string, { name?: string }>) {
  const defaultWorkspaceName = getI18nString('navbar.workspaces.default_workspace_name')
  if (!identity)
    return defaultWorkspaceName

  if (identity.orgId) {
    const org = orgsById?.[identity.orgId] || state.orgById[identity.orgId]
    return org?.name || getI18nString('navbar.workspaces.default_org_workspace_name')
  }

  if (identity.teamId) {
    const team = teamsById?.[identity.teamId] || state.teams[identity.teamId]
    return team?.name || getI18nString('navbar.workspaces.default_team_workspace_name')
  }

  if (state.user?.id !== '-1') {
    // Original: logInfo
    logInfo('planSpaces', 'User with Plan Spaces enabled saw External Teams.')
  }
  return getI18nString('navbar.profile_switcher.your_teams')
}

// Memoize setupWorkspaceIdentity (original: $$s0)
memoizeByArgs(setupWorkspaceIdentity)

// Export original variable names for compatibility
export const vp = setupWorkspaceIdentity // $$s0
export const HE = getWorkspaceName // $$l1
export const O_ = isSameWorkspaceIdentity // $$o2

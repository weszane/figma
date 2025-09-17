import { TeamOrgType } from '../figma_app/10554'
/**
 * Checks if the entity is an organization or a team.
 * Original: $$i0
 * @param entity - The entity object to check.
 * @returns True if entity is ORG or TEAM, false otherwise.
 */
export function isOrgOrTeam(entity: { entity_type?: TeamOrgType } | null | undefined): boolean {
  return !!(entity && (entity.entity_type === TeamOrgType.ORG || entity.entity_type === TeamOrgType.TEAM))
}

/**
 * Resolves a display name or handle for a given team/org/user context.
 * Original: $$a1
 * @param appState - The application state containing users, orgs, and teams.
 * @param context - The context object with possible user/org/team info.
 * @returns The resolved name, handle, or email, or null if not found.
 */
export function resolveDisplayName(appState: {
  authedUsers: { byId: Record<string, { email?: string }> }
  orgById: Record<string, { name?: string }>
  teams: Record<string, { name?: string }>
}, context?: {
  public_at?: boolean
  profile_handle?: string
  primary_user_id?: string
  org_id?: string
  team_id?: string
}): string | null {
  if (!context)
    return null
  if (context.public_at)
    return context.profile_handle ? `@${context.profile_handle}` : null
  if (context.primary_user_id)
    return appState.authedUsers.byId[context.primary_user_id]?.email || null
  if (context.org_id)
    return appState.orgById[context.org_id].name || null
  if (context.team_id)
    return appState.teams[context.team_id].name || null
  return null
}

// Refactored exports for compatibility with original names
export const c = isOrgOrTeam
export const m = resolveDisplayName

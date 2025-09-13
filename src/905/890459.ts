/**
 * Generates a path string based on organization or team ID.
 * @param params - Object containing currentUserOrgId and currentTeamId.
 * @returns Path string for organization or team, or empty string if neither is present.
 * (Original function: $$n0)
 */
export function getOrgOrTeamPath(params: { currentUserOrgId?: string, currentTeamId?: string }): string {
  const { currentUserOrgId, currentTeamId } = params
  if (currentUserOrgId)
    return `/${currentUserOrgId}`
  if (currentTeamId)
    return `/team/${currentTeamId}`
  return ''
}

// Export with original alias for backward compatibility
export const i = getOrgOrTeamPath

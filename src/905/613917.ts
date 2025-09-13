/**
 * Finds a team by its ID from either the teams object or the orgTeams array.
 * @param teamId - The ID of the team to find.
 * @param context - The context containing teams and orgTeams.
 * @returns The team object if found, otherwise undefined.
 * (Original function: $$n0)
 */
export function findTeamById(teamId: string, context: {
  teams: Record<string, any>
  orgTeams?: { teams: Array<{ id: string }> }
}): any {
  // Try to find the team in orgTeams if available
  const orgTeam = context.orgTeams?.teams.find(team => team.id === teamId)
  // Return from teams object if exists, otherwise from orgTeams
  return context.teams[teamId] ?? orgTeam
}

// Refactored export for compatibility with original code
export const _ = findTeamById

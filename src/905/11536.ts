/**
 * Returns a sorted array of associated user profiles for the active community profile.
 * If no associated users are found, returns the primary user profile if available.
 *
 * @param params - Object containing authedActiveCommunityProfile and authedUsers
 * @returns Array of user profiles
 */
export function getAssociatedUserProfiles(params: {
  authedActiveCommunityProfile: {
    associated_users?: { user_id: string }[]
    primary_user_id?: string
    id?: string
  } | null
  authedUsers: {
    byId: Record<string, { id: string, created_at: string }>
    id: string
  }
}): { id: string, created_at: string }[] {
  const { authedActiveCommunityProfile, authedUsers } = params

  // $$n0: Early return if no active community profile
  if (!authedActiveCommunityProfile)
    return []

  // $$n0: Map associated users to their profiles, filter out missing, and sort
  const associatedProfiles = (authedActiveCommunityProfile.associated_users || [])
    .map(user => authedUsers.byId[user.user_id])
    .filter(Boolean)
    .sort((a, b) => {
      // Place primary user first, then sort by creation date
      if (a.id === authedActiveCommunityProfile.primary_user_id)
        return -1
      return Date.parse(a.created_at) - Date.parse(b.created_at)
    })

  // $$n0: If no associated users, return primary user profile if available
  if (!associatedProfiles.length && authedActiveCommunityProfile.primary_user_id) {
    const primaryUser = authedUsers.byId[authedActiveCommunityProfile.primary_user_id]
    return primaryUser ? [primaryUser] : []
  }

  return associatedProfiles
}

// Refactored export variable name to match function name
export const G = getAssociatedUserProfiles

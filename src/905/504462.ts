import { createUserContext } from "../905/539306"

interface AuthedUser {
  id: string
  [key: string]: any
}

interface AssociatedUser {
  user_id: string
  [key: string]: any
}

interface CommunityProfile {
  associated_users?: AssociatedUser[]
  team_id?: string
  org_id?: string
  [key: string]: any
}

interface Teams {
  [teamId: string]: {
    org_id: string
    [key: string]: any
  }
}

interface UserContext {
  teamId: string | null
  orgId: string | null
  userId: string
}

interface InputData {
  authedUsers: {
    byId: {
      [userId: string]: AuthedUser
    }
  }
  authedActiveCommunityProfile?: CommunityProfile
  teams: Teams
  user: {
    id: string
  }
}

interface PlansData {
  plansByUserId: {
    [userId: string]: any[]
  }
}

/**
 * Creates user context objects based on authentication data and plans
 * (Original function: $$r0)
 * @param inputData - Object containing authed users, community profile, teams and current user data
 * @param _unused - Unused parameter (kept for compatibility)
 * @param plansData - Object containing plans indexed by user ID
 * @returns Array of user context objects
 */
export function createUserContexts(
  inputData: InputData,
  _unused: any,
  plansData: PlansData,
): UserContext[] {
  const { authedUsers, authedActiveCommunityProfile } = inputData

  // Early return if no community profile
  if (!authedActiveCommunityProfile) {
    return []
  }

  // Handle case where team_id exists and has an org_id
  if (authedActiveCommunityProfile.team_id
    && inputData.teams[authedActiveCommunityProfile.team_id]?.org_id) {
    return [{
      teamId: null,
      orgId: inputData.teams[authedActiveCommunityProfile.team_id].org_id,
      userId: inputData.user.id,
    }]
  }

  // Handle case where org_id or team_id exists directly in community profile
  if (authedActiveCommunityProfile.org_id || authedActiveCommunityProfile.team_id) {
    return [{
      teamId: authedActiveCommunityProfile.team_id ?? null,
      orgId: authedActiveCommunityProfile.org_id ?? null,
      userId: inputData.user.id,
    }]
  }

  // Process associated users when no direct org/team is found
  const associatedUserIds: string[] = []
  const associatedUsers: AuthedUser[] = []

  if (authedActiveCommunityProfile.associated_users) {
    for (const associatedUser of authedActiveCommunityProfile.associated_users) {
      const user = authedUsers.byId[associatedUser.user_id]
      if (user) {
        associatedUserIds.push(associatedUser.user_id)
        associatedUsers.push(user)
      }
    }
  }

  // Reduce associated users to create user contexts from their plans
  return associatedUsers.reduce((contexts: UserContext[], user: AuthedUser) => {
    const plans = plansData.plansByUserId[user.id] || []
    const userContexts = plans.map(plan => createUserContext(plan, user.id)) || []
    return contexts.concat(userContexts)
  }, [])
}

export const F = createUserContexts

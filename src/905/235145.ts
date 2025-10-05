/**
 * Constant representing the action type for refreshing session state
 * Original name: $$n1
 */
export const REFRESH_SESSION_STATE_ACTION = "refresh-session-state"

/**
 * Initial state object containing empty arrays for various entities
 * Original name: $$r0
 */
export const INITIAL_SESSION_STATE = {
  users: [],
  orgs: [],
  teams: [],
  team_admin_roles_for_authed_users: [],
  org_users: [],
  profiles: [],
}

export const J = INITIAL_SESSION_STATE
export const y = REFRESH_SESSION_STATE_ACTION

import { useSelector } from 'react-redux'

/**
 * Returns the created_at property of the current user, or null if not available.
 * (Original: $$r0)
 */
export function getUserCreatedAt(): string | null {
  const user = selectCurrentUser()
  return user?.created_at || null
}

/**
 * Returns the id property of the current user, or null if not available.
 * (Original: $$a2)
 */
export function getUserId(): string | null {
  const user = selectCurrentUser()
  return user?.id || null
}

/**
 * Selects the user object from the Redux store.
 * (Original: $$s1)
 */
export function selectUser(): User | null {
  return useSelector((state: RootState) => state.user)
}

/**
 * Selects the user object from the Redux store.
 * (Original: $$o3)
 */
export function selectCurrentUser(): User | null {
  return useSelector((state: RootState) => state.user)
}

/**
 * Checks if the user has a password token or uses Google/SAML SSO.
 * (Original: $$l4)
 * @param user - The user object to check.
 */
export function hasPasswordOrSSO(user: User): boolean {
  return !!user.password_token || user.google_sso_only || user.saml_sso_only
}

// Export aliases for backward compatibility
export const J$ = getUserCreatedAt
export const Pc = selectUser
export const TA = getUserId
export const iZ = selectCurrentUser
export const pS = hasPasswordOrSSO

/**
 * User type definition.
 */
export interface User {
  id?: string
  created_at?: string
  password_token?: string
  google_sso_only?: boolean
  saml_sso_only?: boolean
}

/**
 * RootState type definition for Redux state.
 */
export interface RootState {
  user: User | null
}

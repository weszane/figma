import { useSelector } from 'react-redux'
import { getOrgOrTeamPath } from '../905/890459'

/**
 * Gets the organization path for the current user
 * @param params - Object containing currentUserOrgId and other properties
 * @returns The organization path string
 */
export function getUserOrgPath(params: { currentUserOrgId?: string, [key: string]: any }): string {
  const { currentUserOrgId } = params

  // If currentUserOrgId is not provided, attempt to get org/team path
  if (!currentUserOrgId) {
    getOrgOrTeamPath(params)
  }

  return `/${currentUserOrgId}`
}

/**
 * React hook to get the current user's organization path from Redux store
 * @returns The organization path string
 */
export function useUserOrgPath(): string {
  return useSelector(getUserOrgPath)
}

// Export aliases for backward compatibility
export const j = getUserOrgPath
export const q = useUserOrgPath

import { generateAnnomousPrefill, generateAnonymouseName } from '../905/301652'
import { hasTeamPaidAccess } from '../figma_app/345997'

/**
 * Enum representing possible error states for whiteboard editing.
 * Original: $$a1
 */
export enum WhiteboardErrorState {
  ORG_DISABLED = 'ORG_DISABLED',
  TEAM_NOT_PRO = 'TEAM_NOT_PRO',
  CANNOT_EDIT_FILE = 'CANNOT_EDIT_FILE',
  ERROR = 'ERROR',
}

/**
 * Checks if whiteboard editing is enabled for the given context.
 * Original: $$s0
 * @param params - Context containing editorType, org, and team.
 * @returns True if editing is enabled, false otherwise.
 */
export function isWhiteboardEditingEnabled(params: {
  editorType: string
  org?: { workshop_enabled?: boolean }
  team?: any
}): boolean {
  const { editorType, org, team } = params
  if (editorType !== 'whiteboard')
    return false
  if (org && org.workshop_enabled)
    return true
  if (!org && team && hasTeamPaidAccess(team))
    return true
  return false
}

/**
 * Determines the error state for whiteboard editing.
 * Original: $$o3
 * @param params - Context containing editorType, org, team, and canEdit.
 * @returns A value from WhiteboardErrorState.
 */
export function getWhiteboardErrorState(params: {
  editorType: string
  org?: { workshop_enabled?: boolean }
  team?: any
  canEdit?: boolean
}): WhiteboardErrorState {
  const { editorType, org, team, canEdit } = params
  if (editorType !== 'whiteboard') {
    // No error for non-whiteboard editors
    return WhiteboardErrorState.ERROR
  }
  if (org && org.workshop_enabled === false) {
    return WhiteboardErrorState.ORG_DISABLED
  }
  if (team && !hasTeamPaidAccess(team)) {
    return WhiteboardErrorState.TEAM_NOT_PRO
  }
  if (canEdit === false) {
    return WhiteboardErrorState.CANNOT_EDIT_FILE
  }
  return WhiteboardErrorState.ERROR
}

/**
 * Stores anonymous user data in localStorage.
 * Original: $$l2
 * @param name - The name to store.
 * @param value - The value to store.
 */
export function storeAnonymousUserData(name: string, value: string): void {
  localStorage.setItem(generateAnonymouseName(name), value)
  localStorage.setItem(generateAnnomousPrefill(), value)
}

// Refactored exports for clarity and traceability
export const M_ = isWhiteboardEditingEnabled // $$s0
export const Q9 = WhiteboardErrorState // $$a1
export const Vv = storeAnonymousUserData // $$l2
export const kA = getWhiteboardErrorState // $$o3

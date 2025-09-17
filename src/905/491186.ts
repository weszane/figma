import { q42 } from '../figma_app/822011'

/**
 * Retrieves a user or team/org object by key and id, or returns null if not found.
 * Original function: $$r0
 * @param context - The context object containing openFile and fileByKey
 * @param type - The type of user ('team_user' or 'org_user')
 * @param id - The id to match against
 * @returns The matched object or null
 */
export function getUserOrTeamById(
  context: { openFile?: { key: string }, fileByKey: Record<string, any> },
  type: string,
  id: any,
): any | null {
  if (context.openFile && id !== null) {
    const fileData = context.fileByKey[context.openFile.key]
    const userOrTeam = fileData?.[type] ?? null
    if (userOrTeam !== null) {
      // Determine the id field based on type
      let idField = 'id'
      if (type === 'team_user') {
        idField = 'team_id'
      }
      else if (type === 'org_user') {
        idField = 'org_id'
      }
      if (userOrTeam[idField] === id) {
        return userOrTeam
      }
    }
  }
  return q42.PENDING_LOAD
}

/**
 * Returns the user or team/org object if found, otherwise null.
 * Original export: J
 */
export const J = getUserOrTeamById

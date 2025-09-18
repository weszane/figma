import { roleBatchPutAction } from '../905/98702'
import { fetchTeamUsers } from '../905/584989'
import { roleServiceAPI } from '../figma_app/66216'
import { FResourceCategoryType } from '../figma_app/191312'
/**
 * Cache for fetched roles by resource key.
 * Original variable: o
 */
const rolesCache: Record<string, boolean> = {}

/**
 * Dispatches fetchTeamUsers if parentOrgId is not present.
 * Original function: l
 * @param parentOrgId - Parent organization ID
 * @param teamId - Team ID
 * @param store - Redux store or dispatch context
 */
function maybeFetchTeamUsers(parentOrgId: string | null, teamId: string, store: any): void {
  if (!parentOrgId) {
    store.dispatch(fetchTeamUsers({ teamId }))
  }
}

/**
 * Fetches and caches file roles, optionally fetching team users.
 * Original function: $$d0
 * @param file - File object containing key, team_id, parent_org_id
 * @param store - Redux store or dispatch context
 * @param options - Options object, may include shouldFetchTeamUsers
 */
export async function fetchFileRoles(
  file: { key: string, team_id?: string, parent_org_id?: string | null },
  store: any,
  options?: { shouldFetchTeamUsers?: boolean },
): Promise<void> {
  const { shouldFetchTeamUsers = true } = options || {}
  if (file.team_id && shouldFetchTeamUsers) {
    maybeFetchTeamUsers(file.parent_org_id || null, file.team_id, store)
  }
  const cacheKey = `file-${file.key}`
  if (!rolesCache[cacheKey]) {
    const response: any = await roleServiceAPI.getRoles({
      resourceType: FResourceCategoryType.FILE,
      resourceId: file.key,
    })
    if (response.data.meta) {
      store.dispatch(roleBatchPutAction({ roles: response.data.meta }))
      rolesCache[cacheKey] = true
    }
  }
}

/**
 * Fetches and caches folder roles.
 * Original function: $$c2
 * @param folderId - Folder ID
 * @param store - Redux store or dispatch context
 */
export async function fetchFolderRoles(
  folderId: string,
  store: any,
): Promise<void> {
  const cacheKey = `folder-${folderId}`
  if (!rolesCache[cacheKey]) {
    const response: any = await roleServiceAPI.getRoles({
      resourceType: FResourceCategoryType.FOLDER,
      resourceId: folderId,
    })
    if (response.data.meta) {
      store.dispatch(roleBatchPutAction({ roles: response.data.meta }))
      rolesCache[cacheKey] = true
    }
  }
}

/**
 * Fetches and caches team roles.
 * Original function: $$u3
 * @param teamId - Team ID
 * @param store - Redux store or dispatch context
 */
export async function fetchTeamRoles(
  teamId: string,
  store: any,
): Promise<void> {
  const cacheKey = `team-${teamId}`
  if (!rolesCache[cacheKey]) {
    const response: any = await roleServiceAPI.getRoles({
      resourceType: FResourceCategoryType.TEAM,
      resourceId: teamId,
    })
    if (response.data.meta) {
      store.dispatch(roleBatchPutAction({ roles: response.data.meta }))
      rolesCache[cacheKey] = true
    }
  }
}

/**
 * Fetches and caches file repo roles, optionally fetching team users.
 * Original function: $$p1
 * @param repo - Repo object containing id, team_id
 * @param parentOrgId - Parent organization ID
 * @param store - Redux store or dispatch context
 */
export async function fetchRepoRoles(
  repo: { id: string, team_id?: string },
  parentOrgId: string | null,
  store: any,
): Promise<void> {
  if (repo.team_id) {
    maybeFetchTeamUsers(parentOrgId, repo.team_id, store)
  }
  const cacheKey = `repo-${repo.id}`
  if (!rolesCache[cacheKey]) {
    const response: any = await roleServiceAPI.getRoles({
      resourceType: FResourceCategoryType.FILE_REPO,
      resourceId: repo.id,
    })
    if (response.data.meta) {
      store.dispatch(roleBatchPutAction({ roles: response.data.meta }))
      rolesCache[cacheKey] = true
    }
  }
}

// Export refactored names for external usage
export const YO = fetchFileRoles
export const sh = fetchRepoRoles
export const uA = fetchFolderRoles
export const xN = fetchTeamRoles

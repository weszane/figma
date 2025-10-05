import { trackEventAnalytics } from "../905/449184"
import { FEntityType } from "../figma_app/191312"
/**
 * Always returns true
 * @param _ - Unused parameter
 * @returns true
 */
export function alwaysTrue(_: unknown): boolean {
  return true
}

/**
 * Checks if an entity has an empty name
 * @param entity - The entity to check
 * @returns true if the entity's name is empty string
 */
export function isEmptyName(entity: { name: string }): boolean {
  return entity.name === ""
}

/**
 * Returns max limit based on condition
 * @param hasHighLimit - Whether to return high limit (1000) or low limit (50)
 * @returns The limit value
 */
export function getMaxLimit(hasHighLimit: boolean): number {
  return hasHighLimit ? 1000 : 50
}

/**
 * Finds a favorited item by its ID across all favorite types
 * @param userState - User state containing favorited items
 * @param resourceId - The resource ID to search for
 * @returns The found favorited item or undefined
 */
export function findFavoritedItem(
  userState: {
    currentUser: {
      favoritedFiles: any[]
      favoritedPrototypes: any[]
      favoritedProjects: any[]
      favoritedTeams: any[]
      favoritedWorkspaces: any[]
    }
  },
  resourceId: string,
) {
  return getAllFavoritedItems(
    userState.currentUser.favoritedFiles,
    userState.currentUser.favoritedPrototypes,
    userState.currentUser.favoritedProjects,
    userState.currentUser.favoritedTeams,
    userState.currentUser.favoritedWorkspaces,
  ).find(item => item.resource.resourceId === resourceId)
}

/**
 * Extracts favorited resource data based on entity type
 * @param favoritedItem - The favorited item data
 * @param entityType - The type of entity
 * @returns Formatted favorited resource data or undefined
 */
export function extractFavoritedResource(
  favoritedItem: {
    favoritedResource?: {
      id?: string
      favoritedFile?: any
      favoritedPrototype?: any
      favoritedProject?: any
      favoritedTeam?: any
      favoritedWorkspace?: any
    }
  },
  entityType: FEntityType,
): { id?: string, resourceType: FEntityType, resource: any } | undefined {
  switch (entityType) {
    case FEntityType.FILE:
      return favoritedItem.favoritedResource?.favoritedFile != null
        ? {
          id: favoritedItem.favoritedResource?.id,
          resourceType: FEntityType.FILE,
          resource: favoritedItem.favoritedResource?.favoritedFile,
        }
        : undefined

    case FEntityType.PROTOTYPE:
      return favoritedItem.favoritedResource?.favoritedPrototype != null
        ? {
          id: favoritedItem.favoritedResource?.id,
          resourceType: FEntityType.PROTOTYPE,
          resource: favoritedItem.favoritedResource?.favoritedPrototype,
        }
        : undefined

    case FEntityType.FOLDER:
      return favoritedItem.favoritedResource?.favoritedProject
        ? {
          id: favoritedItem.favoritedResource?.id,
          resourceType: FEntityType.FOLDER,
          resource: favoritedItem.favoritedResource?.favoritedProject,
        }
        : undefined

    case FEntityType.TEAM:
      return favoritedItem.favoritedResource?.favoritedTeam
        ? {
          id: favoritedItem.favoritedResource?.id,
          resourceType: FEntityType.TEAM,
          resource: favoritedItem.favoritedResource?.favoritedTeam,
        }
        : undefined

    case FEntityType.WORKSPACE:
      return favoritedItem.favoritedResource?.favoritedWorkspace
        ? {
          id: favoritedItem.favoritedResource?.id,
          resourceType: FEntityType.WORKSPACE,
          resource: favoritedItem.favoritedResource?.favoritedWorkspace,
        }
        : undefined

    default:
      return undefined
  }
}

/**
 * Tracks analytics event for corrected favorited resources
 */
function trackResourceCorrection(
  favoritedResourceId: string,
  resourceType: string,
  resourceTeamId: string | null,
  underlyingResourceTeamId: string | null,
  resourceOrgId: string | null,
  underlyingResourceOrgId: string | null,
): void {
  trackEventAnalytics(
    "data_drift_favorited_resource_corrected",
    {
      favoritedResourceId,
      resourceType,
      resourceTeamId,
      underlyingResourceTeamId,
      resourceOrgId,
      underlyingResourceOrgId,
    },
    {
      forwardToDatadog: true,
    },
  )
}

/**
 * Deduplicates favorited items by resource ID
 * @param seenIds - Set of already seen resource IDs
 * @param item - The item to process
 * @returns The item if not duplicate, null otherwise
 */
function deduplicateItem(
  seenIds: Set<string>,
  item: { resourceId: string },
): typeof item | null {
  return seenIds.has(item.resourceId) ? null : (seenIds.add(item.resourceId), item)
}

/**
 * Processes and filters favorited items based on team and plan constraints
 * @param favoritesData - Object containing arrays of favorited items
 * @param targetTeamId - Target team ID to filter by
 * @param plans - Array of plan objects
 * @returns Processed favorited items with deduplication sets
 */
export function processFavorites(
  favoritesData: {
    favoritedFiles?: Array<{
      id: string
      resourceId: string
      teamId: string | null
      file?: { teamId: string, canView: boolean } | null
    }>
    favoritedProjects?: Array<{
      id: string
      resourceId: string
      teamId: string | null
      project?: { teamId: string, orgId: string | null, deletedAt: string | null } | null
    }>
    favoritedPrototypes?: Array<{
      id: string
      resourceId: string
      teamId: string | null
      prototype?: { file?: { teamId: string, parentOrgId: string | null } | null }
    }>
  } | null,
  targetTeamId: string | null,
  plans: Array<{ plan_id: string }> | null,
) {
  const planIds = new Set((plans ?? []).map(plan => plan.plan_id))
  const fileIds = new Set<string>()
  const prototypeIds = new Set<string>()
  const folderIds = new Set<string>()

  return {
    favoritedFiles: (favoritesData?.favoritedFiles ?? [])
      .map((fileItem) => {
        if (targetTeamId != null) {
          if (targetTeamId === fileItem.file?.teamId) {
            if (fileItem.teamId !== fileItem.file?.teamId) {
              trackResourceCorrection(
                fileItem.resourceId,
                "file",
                fileItem.teamId,
                fileItem.file.teamId,
                null,
                null,
              )
              fileItem.teamId = fileItem.file?.teamId ?? null
            }
            return deduplicateItem(fileIds, fileItem)
          }
          if (fileItem.teamId === targetTeamId && !planIds.has(fileItem.file?.teamId ?? "")) {
            return deduplicateItem(fileIds, fileItem)
          }
        }
        return null
      })
      .filter(item => item != null),

    favoritedProjects: (favoritesData?.favoritedProjects ?? [])
      .map((projectItem) => {
        if (targetTeamId != null) {
          if (targetTeamId === projectItem.project?.teamId) {
            if (projectItem.teamId !== projectItem.project?.teamId) {
              trackResourceCorrection(
                projectItem.resourceId,
                "folder",
                projectItem.teamId,
                projectItem.project?.teamId ?? null,
                null,
                null,
              )
              projectItem.teamId = projectItem.project?.teamId ?? null
            }
            return deduplicateItem(folderIds, projectItem)
          }
          if (
            projectItem.project?.orgId === null
            && projectItem.teamId === targetTeamId
            && !planIds.has(projectItem.project?.teamId ?? "")
          ) {
            return deduplicateItem(folderIds, projectItem)
          }
        }
        return null
      })
      .filter(item => item != null),

    favoritedPrototypes: (favoritesData?.favoritedPrototypes ?? [])
      .map((prototypeItem) => {
        if (targetTeamId != null) {
          if (targetTeamId === prototypeItem.prototype?.file?.teamId) {
            if (prototypeItem.teamId !== prototypeItem.prototype?.file?.teamId) {
              trackResourceCorrection(
                prototypeItem.resourceId,
                "prototype",
                prototypeItem.teamId,
                prototypeItem.prototype?.file?.teamId ?? null,
                null,
                null,
              )
              prototypeItem.teamId = prototypeItem.prototype?.file?.teamId ?? null
            }
            return deduplicateItem(prototypeIds, prototypeItem)
          }
          if (
            prototypeItem.prototype?.file?.parentOrgId === null
            && prototypeItem.teamId === targetTeamId
            && !planIds.has(prototypeItem.prototype?.file?.teamId ?? "")
          ) {
            return deduplicateItem(prototypeIds, prototypeItem)
          }
        }
        return null
      })
      .filter(item => item != null),

    favoritedFilesKeySet: fileIds,
    favoritedPrototypesIdSet: prototypeIds,
    favoritedFoldersIdSet: folderIds,
  }
}

/**
 * Combines and filters all favorited items into a unified format
 * @param files - Favorited files
 * @param prototypes - Favorited prototypes
 * @param projects - Favorited projects
 * @param teams - Favorited teams
 * @param workspaces - Favorited workspaces
 * @returns Unified array of favorited items
 */
export function getAllFavoritedItems(
  files: Array<{ id: string, file?: { canView: boolean } | null }> | null,
  prototypes: any[] | null,
  projects: Array<{ id: string, project?: { deletedAt: string | null } | null }> | null,
  teams: Array<{ id: string, team?: { deletedAt: string | null } | null }> | null,
  workspaces: any[] | null,
) {
  return combineFavoriteItems(
    files?.filter(file => file.file?.canView) ?? [],
    prototypes ?? [],
    projects?.filter(project => project.project && !project.project.deletedAt) ?? [],
    teams?.filter(team => team.team && !team.team.deletedAt) ?? [],
    workspaces ?? [],
  )
}

/**
 * Internal helper to combine different types of favorited items
 */
function combineFavoriteItems(files: Array<{ id: string }>, prototypes: Array<{ id: string }>, projects: Array<{ id: string }>, teams: Array<{ id: string }>, workspaces: Array<{ id: string }>): Array<{ id: string, resourceType: FEntityType, resource: any }> {
  const fileItems = files.map(file => ({
    id: file.id,
    resourceType: FEntityType.FILE,
    resource: file,
  }))

  const prototypeItems = prototypes.map(prototype => ({
    id: prototype.id,
    resourceType: FEntityType.PROTOTYPE,
    resource: prototype,
  }))

  const projectItems = projects.map(project => ({
    id: project.id,
    resourceType: FEntityType.FOLDER,
    resource: project,
  }))

  const teamItems = teams.map(team => ({
    id: team.id,
    resourceType: FEntityType.TEAM,
    resource: team,
  }))

  const workspaceItems = workspaces.map(workspace => ({
    id: workspace.id,
    resourceType: FEntityType.WORKSPACE,
    resource: workspace,
  }))

  return [...fileItems, ...prototypeItems, ...projectItems, ...teamItems, ...workspaceItems]
}

/**
 * Checks if user has reached their favorites limit
 * @param userState - User state with favorited items
 * @param hasHighLimit - Whether user has high limit
 * @returns true if user has reached limit
 */
export function isFavoritesLimitReached(
  userState: {
    currentUser: {
      favoritedFiles: any[]
      favoritedPrototypes: any[]
      favoritedProjects: any[]
      favoritedTeams: any[]
      favoritedWorkspaces: any[]
    }
  },
  hasHighLimit: boolean,
): boolean {
  const limit = getMaxLimit(hasHighLimit)
  return (
    getAllFavoritedItems(
      userState.currentUser.favoritedFiles,
      userState.currentUser.favoritedPrototypes,
      userState.currentUser.favoritedProjects,
      userState.currentUser.favoritedTeams,
      userState.currentUser.favoritedWorkspaces,
    ).length >= limit
  )
}

/**
 * Checks if value represents high limit threshold
 * @param value - Value to check
 * @returns true if value is at least 1000
 */
export function isHighLimit(value: number | undefined): boolean {
  return !!value && value >= 1000
}

/**
 * Sorts items with pinned items first, followed by others sorted by creation date
 * @param items - Array of items to sort
 * @param pinnedIds - Array of pinned item IDs
 * @returns Sorted array with pinned items first
 */
export function sortWithPinnedItems<T extends { id: string, name: string, createdAt: string }>(
  items: T[],
  pinnedIds: string[] | null,
): T[] {
  const itemMap: Record<string, T> = {}
  items.forEach((item) => {
    itemMap[item.id] = item
  })

  const unnamedItemId = items.find(item => item.name === "")?.id
  const pinnedItems = pinnedIds?.map(id => itemMap[id]).filter(item => item) ?? []
  const unpinnedItems = items.filter(item => !(pinnedIds && pinnedIds.includes(item.id)))

  const unnamedItemIndex = unpinnedItems.findIndex(item => item.name === "")
  if (unnamedItemIndex !== -1) {
    unpinnedItems.splice(unnamedItemIndex, 1)
  }

  unpinnedItems.sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  )

  return unnamedItemIndex !== -1 && unnamedItemId
    ? [itemMap[unnamedItemId]!, ...pinnedItems, ...unpinnedItems]
    : [...pinnedItems, ...unpinnedItems]
}

/**
 * Sorts favorited resources with pinned ones first, followed by others by creation date
 * @param favoritedResources - Array of favorited resources
 * @param pinnedIds - Array of pinned resource IDs
 * @returns Sorted array with pinned resources first
 */
export function sortFavoritedResources(
  favoritedResources: Array<{ resource: { id: string, createdAt: string } }>,
  pinnedIds: string[] | null,
): Array<{ resource: { id: string, createdAt: string } }> {
  const resourceMap: Record<string, { resource: { id: string, createdAt: string } }> = {}
  favoritedResources.forEach((resource) => {
    resourceMap[resource.resource.id] = resource
  })

  const pinnedResources
    = pinnedIds?.map(id => resourceMap[id]).filter(resource => resource) ?? []
  const unpinnedResources = favoritedResources.filter(
    resource => !(pinnedIds && pinnedIds.includes(resource.resource.id)),
  )

  unpinnedResources.sort(
    (a, b) =>
      new Date(a.resource.createdAt).getTime() - new Date(b.resource.createdAt).getTime(),
  )

  return [...pinnedResources, ...unpinnedResources]
}

// Export aliases for backward compatibility
export const D6 = alwaysTrue
export const R3 = isEmptyName
export const T0 = findFavoritedItem
export const TF = processFavorites
export const ds = getAllFavoritedItems
export const eU = extractFavoritedResource
export const gV = isFavoritesLimitReached
export const kK = getMaxLimit
export const sb = sortFavoritedResources
export const t$ = sortWithPinnedItems
export const tW = isHighLimit

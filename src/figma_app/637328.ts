import { createOptimistThunk } from "../905/350402"
import { getCurrentLiveGraphClient } from "../905/761735"
import { sendWithRetry } from "../905/910117"

interface FileBrowserPreferences {
  id?: string
  userId?: string
  orderedTeamIds?: string[] | null
  orderedFavoritedResourceIds?: string[] | null
  orderedSidebarSections?: any[] | null
  orderedLicenseGroupIds?: string[] | null
  orgId?: string | null
  teamId?: string | null
  migratedToSections?: boolean
  sidebarMigrationStatus?: any
  updatedAt?: Date
  createdAt?: Date
}

interface TeamUser {
  favoritedFiles?: { id: string }[]
  favoritedPrototypes?: { id: string }[]
  favoritedProjects?: { id: string, resourceId: string }[]
}

interface UpdatePreferencesParams {
  prefs: FileBrowserPreferences
  teamUser?: TeamUser
  orderedFolderSubscriptions?: string[]
}

/**
 * Updates file browser preferences optimistically
 * Original function: $$s1
 */
export function updateFileBrowserPreferencesOptimistically(
  preferences: FileBrowserPreferences,
  userId: string | undefined,
  orgId: string | null,
  teamId: string | null,
  requestPromise: Promise<any>,
): void {
  const hasValidId = preferences.id && preferences.id !== "optimistic-id"

  if (hasValidId) {
    getCurrentLiveGraphClient()?.optimisticallyUpdate({
      FileBrowserPreferences: {
        [preferences.id]: {
          orderedTeamIds: preferences.orderedTeamIds,
          orderedFavoritedResourceIds: preferences.orderedFavoritedResourceIds,
          orderedSidebarSections: preferences.orderedSidebarSections,
          orgId,
          teamId,
          orderedLicenseGroupIds: preferences.orderedLicenseGroupIds,
        },
      },
    }, requestPromise)
  }
  else if (userId != null) {
    getCurrentLiveGraphClient()?.optimisticallyCreate({
      FileBrowserPreferences: {
        "optimistic-id": {
          userId,
          migratedToSections: true,
          sidebarMigrationStatus: null,
          orderedTeamIds: preferences.orderedTeamIds || null,
          orderedFavoritedResourceIds: preferences.orderedFavoritedResourceIds || null,
          orderedSidebarSections: preferences.orderedSidebarSections || null,
          updatedAt: new Date(),
          createdAt: new Date(),
          orgId,
          teamId,
          orderedLicenseGroupIds: preferences.orderedLicenseGroupIds || null,
        },
      },
    }, requestPromise)
  }
}

/**
 * Thunk for updating file browser preferences
 * Original function: $$o2
 */
const updateFileBrowserPreferencesThunk = createOptimistThunk((dispatch, params: UpdatePreferencesParams) => {
  const state = dispatch.getState()
  const userId = state.user?.id
  const orgId = state.currentUserOrgId
  const teamId = state.currentTeamId

  const requestPromise = sendWithRetry.put("/api/file_browser_preferences", {
    ordered_team_ids: params.prefs.orderedTeamIds,
    ordered_favorites: params.prefs.orderedFavoritedResourceIds,
    org_id: orgId,
    team_id: teamId,
    ordered_license_group_ids: params.prefs.orderedLicenseGroupIds,
    ordered_sidebar_sections: params.prefs.orderedSidebarSections,
  })

  updateFileBrowserPreferencesOptimistically(params.prefs, userId, orgId, teamId, requestPromise)
})

/**
 * Thunk for updating favorite resources
 * Original function: $$l0
 */
const updateFavoriteResourcesThunk = createOptimistThunk((dispatch, params: UpdatePreferencesParams) => {
  const state = dispatch.getState()
  const userId = state.user?.id
  const teamId = state.currentTeamId
  const teamUser = params.teamUser
  const orderedFavoritedResourceIds = params.prefs.orderedFavoritedResourceIds

  if (!teamUser || !orderedFavoritedResourceIds)
    return

  const favoriteResourceIds: string[] = []

  // Filter valid favorite resource IDs
  for (const resourceId of orderedFavoritedResourceIds) {
    const isFavoriteFile = teamUser.favoritedFiles?.some(file => file.id === resourceId)
    const isFavoritePrototype = teamUser.favoritedPrototypes?.some(prototype => prototype.id === resourceId)

    if (isFavoriteFile || isFavoritePrototype) {
      favoriteResourceIds.push(resourceId)
    }
  }

  // Add favorited projects that are in ordered folder subscriptions
  const favoritedProjectIds = teamUser.favoritedProjects
    ?.filter(project => params.orderedFolderSubscriptions?.includes(project.resourceId))
    .map(project => project.id) ?? []

  favoriteResourceIds.push(...favoritedProjectIds)

  const requestPromise = sendWithRetry.put("/api/file_browser_preferences", {
    ordered_favorites: favoriteResourceIds,
    team_id: teamId,
  })

  updateFileBrowserPreferencesOptimistically({
    id: "optimistic-id",
    orderedFavoritedResourceIds: favoriteResourceIds,
  }, userId, null, teamId, requestPromise)
})

export const Sh = updateFavoriteResourcesThunk
export const ah = updateFileBrowserPreferencesOptimistically
export const yJ = updateFileBrowserPreferencesThunk

import { createActionCreator } from "../905/73481"
import { resolveMessage } from "../905/231762"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { createOptimistAction, createOptimistThunk } from "../905/350402"
import { FlashActions } from "../905/573154"
import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456"
import { findBranchById } from "../905/760074"
import { getCurrentLiveGraphClient } from "../905/761735"
import { sendWithRetry } from "../905/910117"
import { fileEntityDataMapper } from "../905/943101"
import { APIParameterUtils } from "../figma_app/181241"
import { FEntityType } from "../figma_app/191312"
import { trackFavoritesToAddToSidebarClick, trackFavoritesToMoveUnstarAllClick, trackFileBrowserSidebarCustomSectionCreated, trackFileBrowserSidebarCustomSectionDeleted, trackFileBrowserSidebarCustomSectionRenamed, trackResourceAddedToFavorites, trackResourceRemovedFromFavorites } from "../figma_app/310688"
import { createFileResource, createFolderResource, createPrototypeResource, createTeamResource, createWorkspaceResource, transformFileData } from "../figma_app/411744"
import { throwTypeError } from "../figma_app/465776"
import { TileType } from "../figma_app/543100"
import { updateFileBrowserPreferencesOptimistically } from "../figma_app/637328"
import { alwaysTrue } from "../figma_app/863319"

export let setFavoritesCountAction = createActionCreator("SET_FAVORITES_COUNT")
export let updateExpandedSectionsAction = createActionCreator("UPDATE_EXPANDED_CUSTOM_SECTIONS")
export let setMovingResourceAction = createActionCreator("SET_MOVING_RESOURCE")
export let setNewSectionIndexAction = createActionCreator("SET_NEW_SECTION_INDEX")
/**
 * Updates a user sidebar section with new name and/or ordered favorite IDs
 * Original function: updateSidebarSection
 */
export let updateSidebarSection = createOptimistThunk(({ dispatch }, action) => {
  const {
    name,
    orderedFavoriteIds,
    sectionId,
  } = action

  // Update section via API
  const apiPromise = sendWithRetry.put(`/api/user_sidebar_sections/${sectionId}`, {
    ordered_favorited_resource_ids: orderedFavoriteIds,
    name,
  }).catch((error) => {
    dispatch(VisualBellActions.enqueue({
      message: `${error.data.message}`,
    }))
  })

  // Optimistically update local store
  getCurrentLiveGraphClient().optimisticallyUpdate({
    UserSidebarSection: {
      [sectionId]: {
        ...(name ? { name } : {}),
        ...(orderedFavoriteIds ? { orderedFavoritedResourceIds: orderedFavoriteIds } : {}),
      },
    },
  }, apiPromise)

  // Track renaming event
  if (name) {
    trackFileBrowserSidebarCustomSectionRenamed(sectionId, name)
  }
})

/**
 * Deletes a user sidebar section
 * Original function: deleteSidebarSection
 */
export let deleteSidebarSection = createOptimistThunk(({ dispatch }, action) => {
  const { sidebarSectionId } = action

  // Delete section via API
  const apiPromise = sendWithRetry.del(`/api/user_sidebar_sections/${sidebarSectionId}`).catch((error) => {
    dispatch(VisualBellActions.enqueue({
      message: `${error.msg}`,
    }))
  })

  // Track deletion event
  trackFileBrowserSidebarCustomSectionDeleted(sidebarSectionId)

  // Optimistically delete from local store
  getCurrentLiveGraphClient().optimisticallyDelete({
    UserSidebarSection: {
      [sidebarSectionId]: null,
    },
  }, apiPromise)
})

/**
 * Adds favorited resources to sidebar
 * Original function: addFavoritesToPlanlessSidebar
 */
export let addFavoritesToPlanlessSidebar = createOptimistThunk(({ dispatch }, action) => {
  const { favoriteIds, teamId } = action

  // Track UI interaction
  trackFavoritesToAddToSidebarClick(favoriteIds, teamId)

  // Update via API
  const requestData = {
    favorited_resource_ids: favoriteIds,
    team_id: teamId,
  }

  sendWithRetry.put("/api/planless_favorited_resource_plan_id", requestData).catch((error) => {
    dispatch(VisualBellActions.enqueue({
      message: `${error.data.message}`,
    }))
  })
})

/**
 * Moves a favorited resource to a specific section
 * Original function: moveFavoritedResourceToSection
 */
export let moveFavoritedResourceToSection = createOptimistThunk(({ dispatch }, action) => {
  const { sectionId, orderedFavoriteIds, favoriteId, resourceType } = action

  // Prepare request data
  const requestData = {
    section_id: sectionId,
    ordered_favorite_ids: orderedFavoriteIds,
  }

  // Update via API
  const apiPromise = sendWithRetry.put(`/api/favorited_resources/${favoriteId}`, requestData).catch((error) => {
    dispatch(VisualBellActions.enqueue({
      message: `${error.data.message}`,
    }))
  })

  // Update section ordering if section exists
  if (sectionId) {
    getCurrentLiveGraphClient().optimisticallyUpdate({
      UserSidebarSection: {
        [sectionId]: {
          orderedFavoritedResourceIds: orderedFavoriteIds,
        },
      },
    }, apiPromise)
  }

  // Update resource's section assignment based on type
  const resourceUpdate = {
    [favoriteId]: {
      sidebarSectionId: sectionId,
    },
  }

  switch (resourceType) {
    case FEntityType.TEAM:
      getCurrentLiveGraphClient().optimisticallyUpdate({ FavoritedTeam: resourceUpdate }, apiPromise)
      break
    case FEntityType.FOLDER:
      getCurrentLiveGraphClient().optimisticallyUpdate({ FavoritedProject: resourceUpdate }, apiPromise)
      break
    case FEntityType.FILE:
      getCurrentLiveGraphClient().optimisticallyUpdate({ FavoritedFile: resourceUpdate }, apiPromise)
      break
    case FEntityType.PROTOTYPE:
      getCurrentLiveGraphClient().optimisticallyUpdate({ FavoritedPrototype: resourceUpdate }, apiPromise)
      break
    case FEntityType.WORKSPACE:
      getCurrentLiveGraphClient().optimisticallyUpdate({ FavoritedWorkspace: resourceUpdate }, apiPromise)
      break
  }
})

/**
 * Creates a new user sidebar section with a resource
 * Original function: createSidebarSectionWithResource
 */
export let createSidebarSectionWithResource = createOptimistThunk(({ dispatch, getState }, action) => {
  const state = getState()
  const orgId = state.currentUserOrgId ?? null

  // Prepare request data
  const requestData = {
    name: action.name,
    org_id: orgId,
    insert_at_index: action.insertAtIndex,
    ordered_sections: action.currentOrderedSections,
  }

  // Create section via API
  const apiPromise = sendWithRetry.post("/api/user_sidebar_sections", requestData).then((response) => {
    if (!response?.data.meta) {
      dispatch(setMovingResourceAction({ movingResource: undefined }))
      return
    }

    // Associate new resource with section
    favoriteResource(
      dispatch,
      action.newResourceForSection.resourceType,
      action.newResourceForSection.isFavorited,
      action.newResourceForSection.resourceId,
      undefined,
      response.data.meta,
    )

    dispatch(setMovingResourceAction({ movingResource: undefined }))
  }).catch((error) => {
    dispatch(VisualBellActions.enqueue({
      message: `${error.msg}`,
    }))
  })

  // Optimistically create section in local store
  const optimisticSectionId = "optimistic-id-custom-section-id"
  getCurrentLiveGraphClient().optimisticallyCreate({
    UserSidebarSection: {
      [optimisticSectionId]: {
        userId: state.user?.id ?? "",
        orgId,
        teamId: null,
        name: action.name,
        createdAt: new Date(),
        orderedFavoritedResourceIds: [],
      },
    },
  }, apiPromise)

  // Update file browser preferences if needed
  if (action.prefs && action.currentOrderedSections) {
    const sectionsLength = action.currentOrderedSections.length
    const updatedOrderedSections = [
      ...action.currentOrderedSections.slice(0, action.insertAtIndex),
      optimisticSectionId,
      ...action.currentOrderedSections.slice(action.insertAtIndex, sectionsLength),
    ]

    const prefsUpdate = {
      id: action.prefs?.id,
      orderedFavoritedResourceIds: action.prefs?.orderedFavoritedResourceIds,
      orderedTeamIds: action.prefs?.orderedTeamIds,
      orderedLicenseGroupIds: action.prefs?.orderedLicenseGroupIds,
      orderedSidebarSections: updatedOrderedSections,
    }

    updateFileBrowserPreferencesOptimistically(
      prefsUpdate,
      state.user?.id,
      orgId,
      null,
      apiPromise,
    )
  }
})

/**
 * Creates a new user sidebar section
 * Original function: createSidebarSection
 */
export let createSidebarSection = createOptimistThunk(({ dispatch, getState }, action) => {
  const state = getState()
  const orgId = state.currentUserOrgId ?? null

  // Prepare request data
  const requestData = {
    name: action.name,
    org_id: orgId,
    insert_at_index: action.insertAtIndex,
    ordered_sections: action.currentOrderedSections,
  }

  // Create section via API
  const apiPromise = sendWithRetry.post("/api/user_sidebar_sections", requestData).then((response) => {
    trackFileBrowserSidebarCustomSectionCreated(response?.data.meta, action.name)
  }).catch((error) => {
    dispatch(VisualBellActions.enqueue({
      message: `${error.msg}`,
    }))
  })

  // Optimistically create section in local store
  const optimisticSectionId = "optimistic-id-custom-section-id"
  getCurrentLiveGraphClient().optimisticallyCreate({
    UserSidebarSection: {
      [optimisticSectionId]: {
        userId: state.user?.id ?? "",
        orgId,
        teamId: null,
        name: action.name,
        createdAt: new Date(),
        orderedFavoritedResourceIds: [],
      },
    },
  }, apiPromise)

  // Update file browser preferences if needed
  if (action.prefs && action.currentOrderedSections) {
    const sectionsLength = action.currentOrderedSections.length
    const updatedOrderedSections = [
      ...action.currentOrderedSections.slice(0, action.insertAtIndex),
      optimisticSectionId,
      ...action.currentOrderedSections.slice(action.insertAtIndex, sectionsLength),
    ]

    const prefsUpdate = {
      id: action.prefs?.id,
      orderedFavoritedResourceIds: action.prefs?.orderedFavoritedResourceIds,
      orderedTeamIds: action.prefs?.orderedTeamIds,
      orderedLicenseGroupIds: action.prefs?.orderedLicenseGroupIds,
      orderedSidebarSections: updatedOrderedSections,
    }

    updateFileBrowserPreferencesOptimistically(
      prefsUpdate,
      state.user?.id,
      orgId,
      null,
      apiPromise,
    )
  }
})

/**
 * Bulk sets resources as favorites
 * Original function: bulkSetResourcesAsFavorites
 */
export let bulkSetResourcesAsFavorites = createOptimistAction("BULK_RESOURCE_SET_FAVORITE", ({ dispatch, getState }, action, { optimistId, liveStore }) => {
  const state = getState()
  const {
    files,
    repos,
    prototypes,
    orgId,
    teamId,
    selectedView,
    entrypoint,
    insertAtIndex,
    orderedFavorites,
    sectionId,
    fileBrowserPrefs,
  } = action

  // Determine organization context
  const currentTeamId = state.currentTeamId
  const currentUserOrgId = state.currentUserOrgId
  const effectiveOrgId = currentTeamId ?? currentUserOrgId

  // Filter non-favorited files
  const nonFavoritedFiles = files.filter(file =>
    !file.is_favorited && (file.team_id === effectiveOrgId || file.parent_org_id === effectiveOrgId),
  )
  const fileKeys = nonFavoritedFiles.map(file => file.key)

  // Filter non-favorited repos
  const nonFavoritedRepos = repos
    .filter(repo => !repo.is_favorited && (repo.team_id === effectiveOrgId || repo.parent_org_id === effectiveOrgId))
    .filter(Boolean)
  const repoFileKeys = nonFavoritedRepos.map(repo => repo.default_file_key)

  // Filter non-favorited prototypes
  const nonFavoritedPrototypes = prototypes.filter(proto =>
    !proto.is_favorited && (proto.parent_team?.id === effectiveOrgId || proto.parent_org?.id === effectiveOrgId),
  )
  const prototypeKeys = nonFavoritedPrototypes.map(proto => `${proto.file_key},${proto.page_id}`)

  // Prepare API request data
  const requestData = {
    files: repoFileKeys.concat(fileKeys),
    org_id: orgId,
    team_id: teamId,
    prototypes: prototypeKeys,
    insert_at_index: insertAtIndex,
    ordered_favorites: orderedFavorites,
    section_id: sectionId,
  }

  // Track analytics events
  files.forEach((file) => {
    trackResourceAddedToFavorites(
      file.key,
      selectedView,
      entrypoint,
      FEntityType.FILE,
      file.editor_type,
      true,
    )
  })

  repos.forEach((repo) => {
    trackResourceAddedToFavorites(
      repo.default_file_key ?? undefined,
      selectedView,
      entrypoint,
      FEntityType.FILE,
      "design",
      true,
    )
  })

  prototypes.forEach((proto) => {
    trackResourceAddedToFavorites(
      proto.file_key,
      selectedView,
      entrypoint,
      FEntityType.PROTOTYPE,
      "design",
      true,
    )
  })

  // Execute bulk favorite API call
  const apiPromise = sendWithRetry.put("/api/bulk_favorite_resources", requestData).then(() => {
    dispatch(createOptimistCommitAction(optimistId))
  }).catch((error) => {
    dispatch(createOptimistRevertAction(optimistId))
    try {
      dispatch(VisualBellActions.enqueue({ message: error.message }))
    }
    catch {
      dispatch(FlashActions.error("An error occurred while favoriting these items"))
    }
  })

  // Get current user ID
  const userId = state.user?.id
  if (!userId)
    return

  // Prepare optimistic updates
  const fileUpdates = {}
  const prototypeUpdates = {}
  const optimisticIds = []

  // Process prototypes
  nonFavoritedPrototypes.forEach((proto) => {
    const optimisticId = `optimistic-id-${proto.fig_file.key}`
    optimisticIds.push(optimisticId)
    prototypeUpdates[optimisticId] = createPrototypeResource(proto, userId, orgId, sectionId)
  })

  // Process repos
  nonFavoritedRepos.forEach((repo) => {
    const fileKey = repo.default_file_key
    if (fileKey) {
      const cachedFile = liveStore.readCachedFile(fileKey)
      if (cachedFile) {
        const optimisticId = `optimistic-id-${cachedFile.key}`
        optimisticIds.push(optimisticId)
        fileUpdates[optimisticId] = createFileResource(cachedFile, userId, orgId, sectionId)
      }
    }
  })

  // Process files
  nonFavoritedFiles.forEach((file) => {
    const optimisticId = `optimistic-id-${file.key}`
    optimisticIds.push(optimisticId)
    fileUpdates[optimisticId] = createFileResource(file, userId, orgId, sectionId)
  })

  // Apply optimistic updates
  getCurrentLiveGraphClient().optimisticallyCreate({
    FavoritedFile: fileUpdates,
    FavoritedPrototype: prototypeUpdates,
  }, apiPromise)

  // Skip ordering update if insert index is null
  if (insertAtIndex === null) {
    return
  }

  // Update ordering of favorites
  const updatedOrder = [
    ...orderedFavorites.slice(0, insertAtIndex),
    ...optimisticIds,
    ...orderedFavorites.slice(insertAtIndex),
  ]

  // Apply ordering update to either section or global preferences
  if (sectionId) {
    getCurrentLiveGraphClient().optimisticallyUpdate({
      UserSidebarSection: {
        [sectionId]: {
          orderedFavoritedResourceIds: updatedOrder,
        },
      },
    }, apiPromise)
  }
  else {
    const prefsUpdate = {
      id: fileBrowserPrefs?.id || "optimistic-id",
      orderedFavoritedResourceIds: updatedOrder,
      orderedTeamIds: fileBrowserPrefs?.orderedTeamIds,
      orderedLicenseGroupIds: fileBrowserPrefs?.orderedLicenseGroupIds,
    }

    updateFileBrowserPreferencesOptimistically(
      prefsUpdate,
      userId,
      orgId,
      null,
      apiPromise,
    )
  }
})

/**
 * Handles unfavoriting based on tile type
 * Original function: handleTileUnfavorite
 */
export let handleTileUnfavorite = createOptimistThunk(({ dispatch }, action) => {
  const { tile, entrypoint, favoriteId, fileBrowserEntryPoint } = action

  switch (tile.type) {
    case TileType.FILE:
    case TileType.PINNED_FILE:
      dispatch(removeFileFavorite({
        entrypoint,
        favoriteId,
        file: tile.file,
        fileBrowserEntryPoint,
      }))
      return

    case TileType.PROTOTYPE:
      dispatch(removePrototypeFavorite({
        entrypoint,
        favoriteId,
        prototype: tile.prototype,
        fileBrowserEntryPoint,
      }))
      return

    case TileType.REPO:
      dispatch(removeFileFavorite({
        entrypoint,
        favoriteId,
        file: fileEntityDataMapper.toLiveGraph(findBranchById(tile.repo, tile.branches, {})),
        repoId: tile.repo.id,
        fileBrowserEntryPoint,
      }))
      return

    case TileType.OFFLINE_FILE:
      return

    default:
      throwTypeError(tile)
  }
})

/**
 * Removes a folder from favorites
 * Original function: removeFolderFromFavorites
 */
// Helper function for favoriting/unfavoriting resources via API
// Original: K
function favoriteFileFullscreen(dispatch: any, resourceType: FEntityType, isFavorited: boolean, fileKey: string, isSidebar: boolean) {
  return sendWithRetry.put("/api/favorited_resources", {
    resource_type: resourceType,
    is_favorited: isFavorited,
    file_key: fileKey,
  }).then(() => {
    const removedMessage = isSidebar ? getI18nString("tile.favoriting.file_removed_from_sidebar") : getI18nString("tile.favoriting.file_removed_from_favorites")
    const addedMessage = isSidebar ? getI18nString("tile.favoriting.file_added_to_sidebar") : getI18nString("tile.favoriting.file_added_to_favorites")
    dispatch(VisualBellActions.enqueue({
      message: isFavorited ? addedMessage : removedMessage,
    }))
  }).catch((error: any) => {
    const resolvedMessage = resolveMessage(error)
    if (resolvedMessage) {
      try {
        dispatch(VisualBellActions.enqueue({
          message: resolvedMessage,
        }))
      }
      catch {
        dispatch(FlashActions.error("An error occurred while favoriting this item"))
      }
    }
  })
}

// Helper function for favoriting/unfavoriting resources via API with additional params
// Original: favoriteResource
function favoriteResource(dispatch: any, resourceType: FEntityType, isFavorited: boolean, resourceIdOrKey: string, optimistId?: string | number, sectionId?: string, pageId?: string, showBell?: boolean) {
  return sendWithRetry.put("/api/favorited_resources", {
    resource_type: resourceType,
    is_favorited: isFavorited,
    resource_id_or_key: resourceIdOrKey,
    page_id: pageId,
    section_id: sectionId,
  }).then(() => {
    if (optimistId)
      dispatch(createOptimistCommitAction(optimistId))
    if (showBell || resourceType !== FEntityType.FILE) {
      const message = isFavorited ? getI18nString("sidebar.item_added_bell_message") : getI18nString("sidebar.item_removed_bell_message")
      dispatch(VisualBellActions.enqueue({
        message,
      }))
    }
  }).catch((error: any) => {
    const resolvedMessage = resolveMessage(error)
    if (resolvedMessage) {
      if (optimistId)
        dispatch(createOptimistRevertAction(optimistId))
      try {
        dispatch(VisualBellActions.enqueue({
          message: resolvedMessage,
        }))
      }
      catch {
        const action = isFavorited ? "favoriting this item" : "removing this favorite"
        dispatch(FlashActions.error(`An error occurred while ${action}`))
      }
    }
  })
}

// Folder-related favorite actions

/**
 * Removes a folder from favorites
 * @param dispatch - Redux dispatch function
 * @param getState - Redux getState function
 * @param action - Action payload
 * @param optimistId - Optimistic update ID
 * Original function: removeFolderFromFavorites
 */
export const removeFolderFromFavorites = createOptimistAction("REMOVE_FOLDER_FAVORITE", ({ dispatch, getState }, action: { folder: any, sectionId?: string, entrypoint: string, favoriteId?: string }, { optimistId }) => {
  const { folder, sectionId, entrypoint, favoriteId } = action
  const state = getState()

  trackResourceRemovedFromFavorites(
    folder.id,
    state.selectedView.view,
    entrypoint,
    FEntityType.FOLDER,
  )

  const removalPromise = favoriteResource(
    dispatch,
    FEntityType.FOLDER,
    false,
    folder.id,
    optimistId,
    sectionId,
  )

  if (favoriteId) {
    getCurrentLiveGraphClient().optimisticallyDelete({
      FavoritedProject: {
        [favoriteId]: null,
      },
    }, removalPromise)
  }
})

/**
 * Adds a folder to favorites
 * @param dispatch - Redux dispatch function
 * @param getState - Redux getState function
 * @param action - Action payload
 * @param optimistId - Optimistic update ID
 * Original function: addFolderFavorite
 */
export const addFolderFavorite = createOptimistAction("ADD_FOLDER_FAVORITE", ({ dispatch, getState }, action: { folder: any, sectionId?: string, entrypoint: string, favoriteId?: string }, { optimistId }) => {
  const { folder, sectionId, entrypoint, favoriteId } = action
  const state = getState()

  trackResourceAddedToFavorites(folder.id, state.selectedView.view, entrypoint, FEntityType.FOLDER)

  const addPromise = favoriteResource(dispatch, FEntityType.FOLDER, true, folder.id, optimistId, sectionId)
  const userId = state.user?.id
  const orgId = state.currentUserOrgId

  if (userId) {
    if (favoriteId && sectionId) {
      getCurrentLiveGraphClient().optimisticallyUpdate({
        FavoritedProject: {
          [favoriteId]: {
            sidebarSectionId: sectionId,
          },
        },
      }, addPromise)
    }
    if ("is_favorited" in folder && !favoriteId) {
      getCurrentLiveGraphClient().optimisticallyCreate({
        FavoritedProject: {
          [`optimistic-id-${folder.id}`]: createFolderResource(folder, userId, orgId, sectionId),
        },
      }, addPromise)
    }
  }
})

// Workspace-related favorite actions

/**
 * Removes a workspace from favorites
 * @param dispatch - Redux dispatch function
 * @param getState - Redux getState function
 * @param action - Action payload
 * Original function: removeWorkspaceFavorite
 */
export const removeWorkspaceFavorite = createOptimistThunk(({ dispatch, getState }, action: { workspace: any, entrypoint: string, favoriteId?: string }) => {
  const { workspace, entrypoint, favoriteId } = action
  const state = getState()

  trackResourceRemovedFromFavorites(workspace.id, state.selectedView.view, entrypoint, FEntityType.WORKSPACE)

  const removalPromise = favoriteResource(dispatch, FEntityType.WORKSPACE, false, workspace.id)

  if (favoriteId) {
    getCurrentLiveGraphClient().optimisticallyDelete({
      FavoritedWorkspace: {
        [favoriteId]: null,
      },
    }, removalPromise)
  }
})

/**
 * Adds a workspace to favorites
 * @param dispatch - Redux dispatch function
 * @param getState - Redux getState function
 * @param action - Action payload
 * Original function: addWorkspaceFavorite
 */
export const addWorkspaceFavorite = createOptimistThunk(({ dispatch, getState }, action: { workspace: any, sectionId?: string, entrypoint: string, favoriteId?: string }) => {
  const { workspace, sectionId, entrypoint, favoriteId } = action
  const state = getState()
  const orgId = state.currentUserOrgId

  trackResourceAddedToFavorites(workspace.id, state.selectedView.view, entrypoint, FEntityType.WORKSPACE)

  const addPromise = favoriteResource(dispatch, FEntityType.WORKSPACE, true, workspace.id, undefined, sectionId)
  const userId = state.user?.id

  if (userId) {
    if (favoriteId && sectionId) {
      getCurrentLiveGraphClient().optimisticallyUpdate({
        FavoritedWorkspace: {
          [favoriteId]: {
            sidebarSectionId: sectionId,
          },
        },
      }, addPromise)
    }
    else {
      getCurrentLiveGraphClient().optimisticallyCreate({
        FavoritedWorkspace: {
          [`optimistic-id-${workspace.id}`]: createWorkspaceResource(workspace, userId, orgId, sectionId),
        },
      }, addPromise)
    }
  }
})

// Team-related favorite actions

/**
 * Removes a team from favorites
 * @param dispatch - Redux dispatch function
 * @param getState - Redux getState function
 * @param action - Action payload
 * Original function: removeTeamFavorite
 */
export const removeTeamFavorite = createOptimistThunk(({ dispatch, getState }, action: { team: any, entrypoint: string, favoriteId?: string }) => {
  const { team, entrypoint, favoriteId } = action
  const state = getState()

  trackResourceRemovedFromFavorites(team.id, state.selectedView.view, entrypoint, FEntityType.TEAM)

  const removalPromise = favoriteResource(dispatch, FEntityType.TEAM, false, team.id)

  if (favoriteId) {
    getCurrentLiveGraphClient().optimisticallyDelete({
      FavoritedTeam: {
        [favoriteId]: null,
      },
    }, removalPromise)
  }
})

/**
 * Adds a team to favorites
 * @param dispatch - Redux dispatch function
 * @param getState - Redux getState function
 * @param action - Action payload
 * Original function: addTeamFavorite
 */
export const addTeamFavorite = createOptimistThunk(({ dispatch, getState }, action: { team: any, sectionId?: string, entrypoint: string, favoriteId?: string }) => {
  const { team, sectionId, entrypoint, favoriteId } = action
  const state = getState()
  const orgId = state.currentUserOrgId

  trackResourceAddedToFavorites(team.id, state.selectedView.view, entrypoint, FEntityType.TEAM)

  const addPromise = favoriteResource(dispatch, FEntityType.TEAM, true, team.id, undefined, sectionId)
  const userId = state.user?.id

  if (userId) {
    if (favoriteId && sectionId) {
      getCurrentLiveGraphClient().optimisticallyUpdate({
        FavoritedTeam: {
          [favoriteId]: {
            sidebarSectionId: sectionId,
          },
        },
      }, addPromise)
    }
    else {
      getCurrentLiveGraphClient().optimisticallyCreate({
        FavoritedTeam: {
          [`optimistic-id-${team.id}`]: createTeamResource(team, userId, orgId, sectionId),
        },
      }, addPromise)
    }
  }
})

// Prototype-related favorite actions

/**
 * Removes a prototype from favorites
 * @param dispatch - Redux dispatch function
 * @param getState - Redux getState function
 * @param action - Action payload
 * @param optimistId - Optimistic update ID
 * Original function: removePrototypeFavorite
 */
export const removePrototypeFavorite = createOptimistAction("REMOVE_PROTOTYPE_FAVORITE", ({ dispatch, getState }, action: { prototype: any, entrypoint: string, fileBrowserEntryPoint?: boolean, favoriteId?: string }, { optimistId }) => {
  const { prototype, entrypoint, fileBrowserEntryPoint } = action
  const state = getState()

  trackResourceRemovedFromFavorites(prototype.file_key, state.selectedView.view, entrypoint, FEntityType.PROTOTYPE, undefined, fileBrowserEntryPoint)

  const removalPromise = favoriteResource(dispatch, FEntityType.PROTOTYPE, false, prototype.file_key, optimistId, undefined, prototype.page_id)

  if (state.user?.id && action.favoriteId) {
    getCurrentLiveGraphClient().optimisticallyDelete({
      FavoritedPrototype: {
        [action.favoriteId]: null,
      },
    }, removalPromise)
  }
})

/**
 * Adds a prototype to favorites
 * @param dispatch - Redux dispatch function
 * @param getState - Redux getState function
 * @param action - Action payload
 * @param optimistId - Optimistic update ID
 * Original function: addPrototypeFavorite
 */
export const addPrototypeFavorite = createOptimistAction("ADD_PROTOTYPE_FAVORITE", ({ dispatch, getState }, action: { prototype: any, entrypoint: string, sectionId?: string, fileBrowserEntryPoint?: any, favoriteId?: string }, { optimistId }) => {
  const { prototype, entrypoint, sectionId, fileBrowserEntryPoint, favoriteId } = action
  const state = getState()
  const orgId = state.currentUserOrgId

  trackResourceAddedToFavorites(prototype.file_key, state.selectedView.view, entrypoint, FEntityType.PROTOTYPE, "prototype", fileBrowserEntryPoint)

  const addPromise = favoriteResource(dispatch, FEntityType.PROTOTYPE, true, prototype.fig_file.key, optimistId, sectionId, prototype.page_id)
  const userId = state.user?.id

  if (userId) {
    if (favoriteId && sectionId) {
      getCurrentLiveGraphClient().optimisticallyUpdate({
        FavoritedPrototype: {
          [favoriteId]: {
            sidebarSectionId: sectionId,
          },
        },
      }, addPromise)
    }
    else {
      getCurrentLiveGraphClient().optimisticallyCreate({
        FavoritedPrototype: {
          [`optimistic-id-${prototype.fig_file.key}`]: createPrototypeResource(prototype, userId, orgId, sectionId),
        },
      }, addPromise)
    }
  }
})

// File-related favorite actions

/**
 * Removes a file from favorites
 * @param dispatch - Redux dispatch function
 * @param getState - Redux getState function
 * @param action - Action payload
 * @param optimistId - Optimistic update ID
 * Original function: removeFileFavorite
 */
export const removeFileFavorite = createOptimistAction("REMOVE_FILE_FAVORITE", ({ dispatch, getState }, action: { file: any, entrypoint: string, fileBrowserEntryPoint?: any, favoriteId?: string; repoId?: string }, { optimistId }) => {
  const state = getState()
  const selectedView = state.selectedView.view
  const { file, entrypoint, fileBrowserEntryPoint, favoriteId } = action

  trackResourceRemovedFromFavorites(file.key, selectedView, entrypoint, FEntityType.FILE, file.editorType ?? "design", fileBrowserEntryPoint)

  const removalPromise = selectedView === "fullscreen"
    ? favoriteFileFullscreen(dispatch, FEntityType.FILE, false, file.key, alwaysTrue(state.currentUserOrgId))
    : favoriteResource(dispatch, FEntityType.FILE, false, file.key, optimistId)

  if (state.user?.id && favoriteId) {
    getCurrentLiveGraphClient().optimisticallyDelete({
      FavoritedFile: {
        [favoriteId]: null,
      },
    }, removalPromise)
  }
})

/**
 * Action creator for adding a file favorite
 * Original function: addFileFavoriteAction
 */
export const addFileFavoriteAction = createActionCreator("ADD_FILE_FAVORITE")

/**
 * Adds a file to favorites
 * @param dispatch - Redux dispatch function
 * @param getState - Redux getState function
 * @param action - Action payload
 * Original function: addFileFavorite
 */
export const addFileFavorite = createOptimistThunk(({ dispatch, getState, optimisticDispatch }, action: { file: any, entrypoint: string, sectionId?: string, fileBrowserEntryPoint?: any, favoriteId?: string, repoId?: string }) => {
  const { optimistId } = optimisticDispatch(addFileFavoriteAction(action))
  const { file, entrypoint, sectionId, fileBrowserEntryPoint, favoriteId } = action
  const state = getState()

  trackResourceAddedToFavorites(file.key, state.selectedView.view, entrypoint, FEntityType.FILE, file.editorType ?? "design", fileBrowserEntryPoint)

  const addPromise = favoriteResource(dispatch, FEntityType.FILE, true, file.key, optimistId, sectionId, undefined, alwaysTrue(state.currentUserOrgId))
  const userId = state.user?.id

  if (userId) {
    if (favoriteId && sectionId) {
      getCurrentLiveGraphClient().optimisticallyUpdate({
        FavoritedFile: {
          [favoriteId]: {
            sidebarSectionId: sectionId,
            orgId: state.currentUserOrgId ?? null,
            resourceType: FEntityType.FILE,
            userId,
          },
        },
      }, addPromise)
    }
    else if ((state.currentTeamId && state.currentTeamId === file.teamId) || (state.currentUserOrgId && file.parentOrgId)) {
      const readableFile = transformFileData(fileEntityDataMapper.toSinatra(file))
      getCurrentLiveGraphClient().optimisticallyCreate({
        FavoritedFile: {
          [`optimistic-id-${file.key}`]: {
            userId,
            orgId: state.currentUserOrgId ?? null,
            teamId: state.currentTeamId ?? null,
            sidebarSectionId: sectionId ?? null,
            createdAt: new Date(),
            updatedAt: new Date(),
            resourceId: file.key,
            resourceType: FEntityType.FILE,
            readableFile,
          },
        },
      }, addPromise)
    }
  }
})

// Tile-related handlers

/**
 * Handles adding favorites based on tile type
 * @param dispatch - Redux dispatch function
 * @param getState - Redux getState function
 * @param action - Action payload
 * @param liveStore - Live store instance
 * Original function: addTileFavorite
 */
export const addTileFavorite = createOptimistThunk(async ({ dispatch, getState }, action: { tile: any, entrypoint: string, favoriteId?: string, sectionId?: string, fileBrowserEntryPoint?: any }, { liveStore }) => {
  const { tile, entrypoint, favoriteId, sectionId, fileBrowserEntryPoint } = action

  switch (tile.type) {
    case TileType.FILE:
      dispatch(addFileFavorite({
        entrypoint,
        favoriteId,
        sectionId,
        file: tile.file,
        fileBrowserEntryPoint,
      }))
      break
    case TileType.PINNED_FILE: {
      const fetchedFile = await liveStore.fetchFile(tile.file.key)
      dispatch(addFileFavorite({
        entrypoint,
        favoriteId,
        sectionId,
        file: fileEntityDataMapper.toLiveGraph(fetchedFile),
        fileBrowserEntryPoint,
      }))
      break
    }
    case TileType.PROTOTYPE:
      dispatch(addPrototypeFavorite({
        entrypoint,
        favoriteId,
        sectionId,
        prototype: tile.prototype,
        fileBrowserEntryPoint,
      }))
      break
    case TileType.REPO:
      dispatch(addFileFavorite({
        entrypoint,
        favoriteId,
        sectionId,
        file: fileEntityDataMapper.toLiveGraph(findBranchById(tile.repo, tile.branches, getState().selectedBranchKeyByRepoId)),
        repoId: tile.repo.id,
        fileBrowserEntryPoint,
      }))
      break
    case TileType.OFFLINE_FILE:
      break
    default:
      throwTypeError(tile)
  }
})



/**
 * Helper function for unfavoriting multiple resources via API
 * Original: $
 */
function unstarFavorites(params: { favorited_resource_ids: string }) {
  trackFavoritesToMoveUnstarAllClick(params.favorited_resource_ids)
  return sendWithRetry.del("/api/favorited_resources", APIParameterUtils.toAPIParameters(params))
}

/**
 * Unstars all specified favorites
 * Original: $$X23
 */
export const unstarAllFavorites = createOptimistThunk(({ dispatch }, action) => {
  unstarFavorites({
    favorited_resource_ids: action.favoriteIds,
  }).catch((error) => {
    dispatch(VisualBellActions.enqueue({
      message: `${error.data.message}`,
    }))
  })
})

/**
 * Optimistic ID for custom section creation
 * Original: q
 */

export const DN = addTeamFavorite
export const EX = addTileFavorite
export const Fb = addFileFavorite
export const Ic = addFavoritesToPlanlessSidebar
export const Mv = addFolderFavorite
export const N9 = bulkSetResourcesAsFavorites
export const U6 = updateExpandedSectionsAction
export const V1 = moveFavoritedResourceToSection
export const X7 = removePrototypeFavorite
export const YI = createSidebarSection
export const ZW = addWorkspaceFavorite
export const de = deleteSidebarSection
export const dy = handleTileUnfavorite
export const gG = addFileFavoriteAction
export const iN = addPrototypeFavorite
export const _$$if = removeWorkspaceFavorite
export const jv = removeFolderFromFavorites
export const lF = setFavoritesCountAction
export const ox = removeTeamFavorite
export const pS = setNewSectionIndexAction
export const qP = removeFileFavorite
export const to = setMovingResourceAction
export const vg = updateSidebarSection
export const vr = unstarAllFavorites
export const yH = createSidebarSectionWithResource

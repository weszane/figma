import type { AjaxResponse } from "../905/910117"
import { noop } from 'lodash-es'
import { batch } from "react-redux"
import { z } from "zod"
import { consumptionPaywallUtils } from "../905/224"
import { o as _$$o } from "../905/29370"
import { beginCreateNewFolder } from "../905/34809"
import { z as _$$z3 } from "../905/40865"
import { roleBatchPutAction } from "../905/98702"
import { showModalHandler } from "../905/156213"
import { UpsellModalType } from "../905/165519"
import { p as _$$p } from "../905/282607"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { FolderSchema } from "../905/316062"
import { createOptimistAction, createOptimistThunk } from "../905/350402"
import { convertToFolder } from "../905/438864"
import { batchPutReposInSameFolder } from "../905/466026"
import { folderAPIInstance } from "../905/522628"
import { AccessSchema } from "../905/557142"
import { FlashActions, handlePromiseError } from "../905/573154"
import { getFeatureFlags } from "../905/601108"
import { convertTeamToRaw } from "../905/628874"
import { PageFolderFile } from "../905/652992"
import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456"
import { liveStoreInstance, setupResourceAtomHandler } from "../905/713695"
import { ConsumptionPaywallModalPlansPricing } from "../905/739964"
import { getCurrentLiveGraphClient } from "../905/761735"
import { fileEntityModel } from "../905/806985"
import { teamAPIClient } from "../905/834575"
import { getRequest, sendWithRetry } from "../905/910117"
import { selectViewAction } from "../905/929976"
import { repositoryDefinition } from "../905/954314"
import { convertLiveGraphFile } from "../905/970170"
import { FilesForProject, TeamFoldersQuerySyncView } from "../figma_app/43951"
import { batchPutFileAction } from "../figma_app/78808"
import { isNotNullish } from "../figma_app/95419"
import { FFolderType } from "../figma_app/191312"
import { trackFolderEvent } from "../figma_app/314264"
import { validateFolderName } from "../figma_app/528509"
import { createAtomSetter } from "../figma_app/566371"
import { AddOperationType, checkTeamFileRestrictions } from "../figma_app/598018"
import { folderLoadedAction, folderPostAction, folderPutAction } from "../figma_app/598926"
import { fileActionEnum } from "../figma_app/630077"
import { EntityType } from "../figma_app/707808"

// Refactored code: renamed variables, added types, simplified logic, improved readability
// Origin: $$Y -> updateFolderDataThunk

interface FolderDataPayload {
  folderId: string
  folderData: {
    folder: any // TODO: Replace with proper Folder type
    files: any[] // TODO: Replace with proper File type
    repos: any[] // TODO: Replace with proper Repo type
    roles: any[] // TODO: Replace with proper Role type
  }
}

export const updateFolderDataThunk = createOptimistThunk(
  (
    storeContext,
    { folderId, folderData }: FolderDataPayload,
  ) => {
    batch(() => {
      const folderExists = storeContext.getState().folders[folderId]

      if (folderExists) {
        storeContext.dispatch(folderPutAction({ folder: folderData.folder }))
      }
      else {
        storeContext.dispatch(folderPostAction(folderData.folder))
      }

      storeContext.dispatch(batchPutFileAction({
        files: folderData.files,
        subscribeToRealtime: false,
      }))

      storeContext.dispatch(batchPutReposInSameFolder({ repos: folderData.repos }))
      storeContext.dispatch(roleBatchPutAction({ roles: folderData.roles }))
      storeContext.dispatch(folderLoadedAction({ folderId, state: "loaded" }))
    })
  },
)
interface FolderRes {
  folder: z.infer<typeof FolderSchema>
  files: z.infer<typeof fileEntityModel>[]
  repos: z.infer<typeof repositoryDefinition>[]
  roles: z.infer<typeof AccessSchema>[]
}
// Origin: $ -> folderQuery
export const folderQuery = liveStoreInstance.Query<any, any, FolderRes>({
  fetch: async (params: { folderId: string, shouldShowOnlyTrashedFiles: boolean }, { reduxStore }) => {
    const response = await folderAPIInstance.getFiles({
      folderId: params.folderId,
      shouldShowOnlyTrashedFiles: !!params.shouldShowOnlyTrashedFiles,
    })

    const metaData = response.data.meta as FolderRes

    reduxStore.dispatch(batchPutFileAction({ files: metaData.files }))
    reduxStore.dispatch(batchPutReposInSameFolder({ repos: metaData.repos }))
    reduxStore.dispatch(roleBatchPutAction({ roles: metaData.roles }))
    reduxStore.dispatch(folderLoadedAction({ folderId: params.folderId, state: "loaded" }))

    return metaData
  },

  schema: (schemaBuilder: { object: (arg0: { folder: z.ZodNullable<z.ZodObject<any, z.UnknownKeysParam, z.ZodTypeAny, { [x: string]: any }, { [x: string]: any }>>, files: any, repos: any }) => any, array: (arg0: z.ZodObject<any, z.UnknownKeysParam, z.ZodTypeAny, { [x: string]: any }, { [x: string]: any }>) => any }) => schemaBuilder.object({
    folder: FolderSchema.nullable(),
    files: schemaBuilder.array(fileEntityModel),
    repos: schemaBuilder.array(repositoryDefinition),
  }),

  sync: ({ folderId }, { mutate, livegraphClient }) => {
    const today = new Date(new Date().setHours(0, 0, 0, 0))

    return livegraphClient.subscribe(FilesForProject, {
      projectId: folderId,
      updatedAtTimestamp: today,
    }, (subscriptionData) => {
      mutate((currentState) => {
        const fileUpdates = subscriptionData.data?.project?.fileUpdates || []
        const filteredUpdates = fileUpdates.filter(update => update.folderId === folderId)

        filteredUpdates.forEach((update) => {
          const fileExists = currentState.files.find(file => file.key === update.key)
          if (!fileExists) {
            currentState.files.unshift(convertLiveGraphFile(update))
          }
        })
      })
    })
  },

  syncObjects: true,

  output: ({ data, args }) => {
    const filterFiles = (showTrashed: boolean) =>
      data.files.filter(file =>
        file.folder_id === args.folderId
        && (showTrashed && file.trashed_at && file.trashed_with_parent === FFolderType.FOLDER
          || !showTrashed && !file.trashed_at)
        && !file.file_repo_id,
      )

    const filterRepos = (showTrashed: boolean) =>
      data.repos.filter(repo =>
        repo.folder_id === args.folderId
        && (showTrashed && repo.trashed_at && repo.trashed_with_parent === FFolderType.FOLDER
          || !showTrashed && !repo.trashed_at),
      )

    const activeRepos = data.repos.filter(repo => !repo.trashed_at && !repo.deleted_at)
    const previewFiles = activeRepos
      .map(repo => data.files.find(file => file.key === repo.default_file_key))
      .filter(isNotNullish)

    const filesByRepoId: Record<string, any[]> = {}
    data.repos.forEach((repo) => {
      const repoFiles = data.files
        .filter(file => file.file_repo_id === repo.id)
        .sort((a, b) => new Date(b.touched_at).getTime() - new Date(a.touched_at).getTime())
      filesByRepoId[repo.id] = repoFiles
    })

    const files = filterFiles(args.shouldShowOnlyTrashedFiles)
    const repos = filterRepos(args.shouldShowOnlyTrashedFiles)

    return {
      folder: data.folder,
      files,
      repos,
      previewFiles: [...files, ...previewFiles],
      filesByRepoId,
    }
  },
})

// Origin: $$X2 -> useFolderQuery
export function useFolderQuery(folderId: string, enabled = true, showOnlyTrashed = false) {
  const [queryResult] = setupResourceAtomHandler(
    folderQuery({ folderId, shouldShowOnlyTrashedFiles: showOnlyTrashed }),
    { enabled },
  )
  return queryResult
}

// Schema definition for paginated query
const PaginatedFolderDataSchema = z.object({
  folder: FolderSchema.nullable(),
  files: z.array(fileEntityModel),
  repos: z.array(repositoryDefinition),
  roles: z.array(AccessSchema),
})

// Origin: $$J0 -> paginatedFolderQuery
export const paginatedFolderQuery = liveStoreInstance.PaginatedQuery({
  fetch: async (params, { pageParam, reduxStore }) => {
    let url: string

    if (pageParam) {
      url = pageParam
    }
    else {
      const {
        folderId,
        shouldShowOnlyTrashedFiles = false,
        page_size = 50,
        skipFetchingRepoBranches = false,
        file_type = "",
        ...restParams
      } = params

      const searchParams = new URLSearchParams({
        ...restParams,
        fetch_only_trashed_with_folder_files: shouldShowOnlyTrashedFiles.toString(),
        page_size: page_size.toString(),
        skip_fetching_repo_branches: skipFetchingRepoBranches.toString(),
        file_type,
      }).toString()

      url = `/api/folders/${folderId}/paginated_files?${searchParams}`
    }

    const response = await getRequest(url) as any
    const metaData = response.data.meta as z.infer<typeof PaginatedFolderDataSchema>

    reduxStore.dispatch(batchPutFileAction({ files: metaData.files }))
    reduxStore.dispatch(batchPutReposInSameFolder({ repos: metaData.repos }))
    reduxStore.dispatch(roleBatchPutAction({ roles: metaData.roles }))
    reduxStore.dispatch(folderLoadedAction({ folderId: params.folderId, state: "loaded" }))

    return {
      data: metaData,
      nextPage: response.data.pagination?.next_page,
      prevPage: response.data.pagination?.prev_page,
    }
  },

  joinPages: pages => ({
    files: pages.flatMap(page => page.data.files),
    repos: pages.flatMap(page => page.data.repos),
    roles: pages.flatMap(page => page.data.roles),
    folder: pages.length > 0 ? pages[pages.length - 1].data.folder : null,
  }),

  sync: ({ folderId }, { mutate, livegraphClient }) => {
    const today = new Date(new Date().setHours(0, 0, 0, 0))

    return livegraphClient.subscribe(FilesForProject, {
      projectId: folderId,
      updatedAtTimestamp: today,
    }, (subscriptionData) => {
      mutate((currentState) => {
        const firstPage = currentState[0]
        if (firstPage) {
          const fileUpdates = subscriptionData.data?.project?.fileUpdates || []
          const filteredUpdates = fileUpdates.filter(update => update.folderId === folderId)

          filteredUpdates.forEach((update) => {
            const pageContainsFile = currentState.find(page =>
              !!page.files.find(file => file.key === update.key),
            )

            if (!pageContainsFile) {
              firstPage.files.unshift(convertLiveGraphFile(update))
            }
          })
        }
      })
    })
  },

  output: ({ data, args }) => {
    const files = data.files.filter((file) => {
      const matchesTrashFilter
        = args.shouldShowOnlyTrashedFiles && file.trashed_at && file.trashed_with_parent === FFolderType.FOLDER
          || !args.shouldShowOnlyTrashedFiles && !file.trashed_at

      const matchesRepoBranchFilter
        = args.skipFetchingRepoBranches && !file.source_file_key
          || !file.file_repo_id

      return file.folder_id === args.folderId && matchesTrashFilter && matchesRepoBranchFilter
    })

    const repos = data.repos.filter(repo =>
      repo.folder_id === args.folderId
      && (args.shouldShowOnlyTrashedFiles && repo.trashed_at && repo.trashed_with_parent === FFolderType.FOLDER
        || !args.shouldShowOnlyTrashedFiles && !repo.trashed_at),
    )

    const filesByRepoId: Record<string, any[]> = {}
    data.repos.forEach((repo) => {
      const repoFiles = data.files
        .filter(file => file.file_repo_id === repo.id)
        .sort((a, b) => new Date(b.touched_at).getTime() - new Date(a.touched_at).getTime())
      filesByRepoId[repo.id] = repoFiles
    })

    return {
      folder: data.folder,
      files,
      repos,
      filesByRepoId,
    }
  },

  schema: PaginatedFolderDataSchema,
  syncObjects: true,
})

// Origin: $$Z10 -> loadFolderIfNeededThunk
export const loadFolderIfNeededThunk = createOptimistThunk(
  async (storeContext, { folderId, loadedFolders }) => {
    if (!loadedFolders[folderId]) {
      storeContext.dispatch(folderLoadedAction({ folderId, state: "loading" }))

      try {
        const response = await folderAPIInstance.getFiles({ folderId })
        const metaData = response.data.meta

        storeContext.dispatch(updateFolderDataThunk({ folderId, folderData: metaData }))
      }
      catch (error: any) {
        if (error.status === 404 || error.status === 403) {
          storeContext.dispatch(selectViewAction({
            view: "resourceUnavailable",
            resourceType: EntityType.PROJECT,
          }))
        }
        else if (error.status >= 400 && error.status < 500) {
          storeContext.dispatch(folderLoadedAction({ folderId, state: "loaded" }))
        }
        else {
          storeContext.dispatch(folderLoadedAction({ folderId, state: null }))
        }
      }
    }
  },
)

// Origin: $$Q8 -> teamFoldersQuery
export const teamFoldersQuery = liveStoreInstance.Query({
  fetch: async (params) => {
    const response = await teamAPIClient.getFolders({ teamId: params.teamId })
    return response.data.meta.folder_rows
  },

  schema: schemaBuilder => schemaBuilder.array(
    FolderSchema.extend({ touched_at: schemaBuilder.string() }),
  ),

  syncObjects: true,
  enabled: params => !!params.teamId,

  sync: ({ teamId }, { mutate, livegraphClient }) => {
    if (!teamId || !getFeatureFlags().team_page_folder_creation_live_updates) {
      return noop
    }

    const today = new Date(new Date().setHours(0, 0, 0, 0))

    return livegraphClient.subscribe(TeamFoldersQuerySyncView, {
      teamId,
      updatedAtTimestamp: today,
    }, (subscriptionData) => {
      mutate((currentState) => {
        const projectUpdates = subscriptionData.data?.team?.projectUpdates ?? []
        const filteredUpdates = projectUpdates.filter(update => update.teamId === teamId)

        filteredUpdates.forEach((update) => {
          const folderExists = currentState.find(folder => folder.id === update.id)
          if (!folderExists) {
            currentState.push({
              ...convertToFolder(update),
              touched_at: update.updatedAt.toISOString(),
            })
          }
        })
      })
    })
  },

  output: ({ data }) => data.filter(folder => !(folder.trashed_at || folder.deleted_at)),
})

// Origin: $$ee5 -> permanentlyDeleteFolderMutation
export const permanentlyDeleteFolderMutation = liveStoreInstance.Mutation(
  (params, { reduxStore }) =>
    folderAPIInstance.permanentlyDelete({ folderId: params.folderId }).then(() => {
      reduxStore.dispatch(VisualBellActions.enqueue({
        message: getI18nString("file_browser.file_browser_actions.folder_deleted_forever"),
      }))
    }),
)

// Origin: $$et1 -> trashFolderMutation
export const trashFolderMutation = liveStoreInstance.Mutation(
  ({ folderId }, { objects, reduxStore }) => {
    const trashPromise = folderAPIInstance.trash({ folderId }).then(() => {
      objects.Folder.update(folderId, (folder) => {
        folder.trashed_at = Date.now().toString()
      })

      reduxStore.dispatch(VisualBellActions.enqueue({
        message: getI18nString("file_browser.file_browser_actions.folder_trashed"),
      }))
    })

    reduxStore.dispatch(handlePromiseError({
      promise: trashPromise,
      fallbackError: getI18nString("file_browser.api_folder.error_when_moving_to_trash"),
    }))

    getCurrentLiveGraphClient().optimisticallyUpdate({
      Project: {
        [folderId]: {
          trashedAt: new Date(),
        },
      },
    }, trashPromise)
  },
)

// Origin: $$er11 -> restoreFolderMutation
export const restoreFolderMutation = liveStoreInstance.Mutation(
  ({ folderId, team }, { objects, reduxStore }) => {
    const restorePromise = folderAPIInstance.restore({ folderId }).then(() => {
      objects.Folder.update(folderId, (folder) => {
        folder.trashed_at = null
      })

      reduxStore.dispatch(VisualBellActions.enqueue({
        message: getI18nString("file_browser.file_browser_actions.folder_restored"),
        button: {
          text: getI18nString("visual_bell.show_in_toast", {
            destination: team?.name ?? "Recents",
          }),
          action: () => {
            if (team) {
              reduxStore.dispatch(selectViewAction({
                view: "team",
                teamId: team.id,
              }))
            }
            else {
              reduxStore.dispatch(selectViewAction({
                view: "recentsAndSharing",
              }))
            }
          },
        },
      }))
    })

    reduxStore.dispatch(handlePromiseError({
      promise: restorePromise,
      fallbackError: getI18nString("file_browser.api_folder.error_when_restoring"),
    }))

    getCurrentLiveGraphClient().optimisticallyUpdate({
      Project: {
        [folderId]: {
          trashedAt: null,
        },
      },
    }, restorePromise)
  },
)

// Origin: $$en7 -> batchDeleteFoldersMutation
export const batchDeleteFoldersMutation = liveStoreInstance.Mutation(
  params => folderAPIInstance.batchDelete({ folderIds: params.folderIds }),
)

// Origin: $$ei12 -> renameFolderMutation
export const renameFolderMutation = liveStoreInstance.Mutation(
  ({ folderId, folderName }, { objects, reduxStore }) => {
    const validationError = validateFolderName(folderName)

    if (validationError) {
      reduxStore.dispatch(FlashActions.error(validationError))
      return
    }

    objects.Folder.update(folderId, (folder) => {
      folder.name = folderName
      folder.path = folderName
    })

    trackFolderEvent("Folder Renamed", folderId, null, reduxStore.getState(), {
      folderName,
    })

    const renamePromise = sendWithRetry.put("/api/folders/rename", {
      folder_id: folderId,
      name: folderName,
    })

    reduxStore.dispatch(handlePromiseError({
      promise: renamePromise,
      fallbackError: getI18nString("file_browser.api_folder.an_error_occurred_while_renaming_this_project"),
    }))

    getCurrentLiveGraphClient().optimisticallyUpdate({
      Project: {
        [folderId]: {
          name: folderName,
          path: folderName,
        },
      },
    }, renamePromise)

    return renamePromise
  },
)

// Origin: $$ea9 -> updateFolderAccessAction
export const updateFolderAccessAction = createOptimistAction(
  "FOLDER_UPDATE_FOLDER_ACCESS",
  (storeContext, params, { optimistId }) => {
    const updatePromise = sendWithRetry.put(`/api/folders/${params.folderId}`, {
      is_invite_only: params.isInviteOnly,
      is_view_only: params.isViewOnly,
    }).then(() => {
      storeContext.dispatch(createOptimistCommitAction(optimistId))
    }).catch(() => {
      storeContext.dispatch(createOptimistRevertAction(optimistId))
    })

    handlePromiseError({
      promise: updatePromise,
      fallbackError: getI18nString("file_browser.api_folder.an_error_while_updating_the_folder_s_access"),
    })
  },
)

// Origin: $$es4 -> updateFolderSharingAudienceAction
export const updateFolderSharingAudienceAction = createOptimistAction(
  "FOLDER_UPDATE_SHARING_AUDIENCE_CONTROLS",
  (storeContext, params, { optimistId }) => {
    const updatePromise = folderAPIInstance.updateFolderSharingAudienceControls({
      folderId: params.folder.id,
      sharingAudienceControl: params.sharingAudienceControl,
    }).then(() => {
      storeContext.dispatch(createOptimistCommitAction(optimistId))

      trackFolderEvent(
        "Folder Share Settings Updated",
        params.folder.id,
        params.folder.team_id,
        storeContext.getState(),
        {
          share_settings_type: "sharing_audience",
          oldSharingAudienceControl: params.folder.sharing_audience_control,
          newSharingAudienceControl: params.sharingAudienceControl,
        },
      )
    }).catch(() => {
      storeContext.dispatch(createOptimistRevertAction(optimistId))
    })

    handlePromiseError({
      promise: updatePromise,
      fallbackError: getI18nString("file_browser.api_folder.an_error_while_updating_the_folder_s_sharing_audience_control"),
    })
  },
)

// Origin: $$eo13 -> updateFolderTeamAccessAction
export const updateFolderTeamAccessAction = createOptimistAction(
  "FOLDER_UPDATE_TEAM_ACCESS",
  (storeContext, params, { optimistId }) => {
    const updatePromise = folderAPIInstance.updatedFolderTeamAccess({
      folderId: params.folder.id,
      teamAccess: params.teamAccess,
    }).then(() => {
      storeContext.dispatch(createOptimistCommitAction(optimistId))

      trackFolderEvent(
        "Folder Share Settings Updated",
        params.folder.id,
        params.folder.team_id,
        storeContext.getState(),
        {
          share_settings_type: "team_access",
          oldTeamAccess: params.folder.team_access,
          newTeamAccess: params.teamAccess,
        },
      )
    }).catch(() => {
      storeContext.dispatch(createOptimistRevertAction(optimistId))
    })

    handlePromiseError({
      promise: updatePromise,
      fallbackError: getI18nString("file_browser.api_folder.an_error_while_updating_the_folder_s_team_access"),
    })
  },
)

// Origin: $$el3 -> moveFolderThunk
export const moveFolderThunk = createOptimistThunk(
  async (storeContext, params) => {
    const { folder, team } = params
    const rawTeam = convertTeamToRaw(team)

    if (folder.inviteOnlyAt || folder.viewOnlyAt) {
      storeContext.dispatch(showModalHandler({
        type: _$$z3,
        data: { folder },
      }))
      return
    }

    try {
      await folderAPIInstance.getCanMove({
        teamId: team.id,
        folderId: folder.id,
      })
    }
    catch (error: any) {
      if (error.data?.failure_info?.code === "ERR_FILE_LIMIT"
        || error.data?.failure_info?.code === "ERR_PROJECT_LIMIT") {
        storeContext.dispatch(showModalHandler({
          type: ConsumptionPaywallModalPlansPricing,
          data: {
            team: rawTeam,
            resource: PageFolderFile.FOLDER,
            action: fileActionEnum.MOVE_FOLDER,
            currentPlan: consumptionPaywallUtils.Plan.STARTER,
            upsellPlan: consumptionPaywallUtils.Plan.PRO,
            editorType: null,
            upsellSource: UpsellModalType.FOLDER_MOVE_MODAL,
          },
        }))
      }
      else {
        storeContext.dispatch(FlashActions.error(error.data?.message))
      }
      return
    }

    if (folder.teamId && rawTeam) {
      storeContext.dispatch(showModalHandler({
        type: _$$o,
        data: {
          folder,
          destinationTeam: rawTeam,
          onConfirm: () => {
            createAtomSetter(moveFolderMutation)({
              folder,
              team: rawTeam,
            })
          },
        },
      }))
      return
    }

    createAtomSetter(moveFolderMutation)({
      folder,
      team: rawTeam,
    })

    params.onSuccess && params.onSuccess()
  },
)

// Origin: ed -> executeMoveFolderMutation
export const executeMoveFolderMutation = liveStoreInstance.Mutation(
  (params, { query, objects, reduxStore }) => {
    const { folder, team } = params

    trackFolderEvent("Folder Moved", folder.id, null, reduxStore.getState(), {
      destTeamId: team.id,
    })

    const movePromise = sendWithRetry.put("/api/folders/move", {
      folder_id: folder.id,
      team_id: team.id,
    }).then(() => {
      reduxStore.dispatch(VisualBellActions.enqueue({
        message: getI18nString("file_browser.folder_move.project_moved_toast", {
          folderName: folder.path,
          teamName: team.name,
        }),
      }))
    })

    reduxStore.dispatch(handlePromiseError({
      promise: movePromise,
      fallbackError: getI18nString("file_browser.api_folder.an_error_occurred_while_moving_this_project"),
    }))

    getCurrentLiveGraphClient()?.optimisticallyUpdate({
      Project: {
        [folder.id]: {
          teamId: team.id,
        },
      },
    }, movePromise)

    if (folder.teamId) {
      query.mutate(teamFoldersQuery({ teamId: folder.teamId }), (folders) => {
        const index = folders.findIndex(f => f.id === folder.id)
        if (index !== -1) {
          folders.splice(index, 1)
        }
      })

      objects.Folder.update(folder.id, (f) => {
        f.team_id = team.id
      })
    }

    return movePromise
  },
)

// Origin: $$ec6 -> createNewFolderThunk
export const createNewFolderThunk = createOptimistThunk(
  (storeContext, params) => {
    const state = storeContext.getState()
    const { where, team } = params
    const teamId = team.id

    const isCreatingNewFolder
      = state.creatingNewFolder
        && state.creatingNewFolder.where === where
        && state.creatingNewFolder.teamId === teamId

    if (!isCreatingNewFolder) {
      if (team.canEdit) {
        if (checkTeamFileRestrictions(team, { type: AddOperationType.ADD_PROJECT })) {
          storeContext.dispatch(beginCreateNewFolder({ where, teamId }))
          storeContext.dispatch(showModalHandler({
            type: _$$p(),
            data: {
              teamId: team.id,
              modalShown: state.modalShown,
              onFolderCreated: params.onFolderCreated,
            },
          }))
        }
        else {
          storeContext.dispatch(showModalHandler({
            type: ConsumptionPaywallModalPlansPricing,
            data: {
              team,
              resource: PageFolderFile.FOLDER,
              action: fileActionEnum.CREATE_FOLDER,
              currentPlan: consumptionPaywallUtils.Plan.STARTER,
              upsellPlan: consumptionPaywallUtils.Plan.PRO,
              editorType: null,
            },
          }))
        }
      }
      else {
        const errorMessage = team
          ? getI18nString("file_browser.api_folder.no_create_permissions_team_name", {
              teamName: team.name,
            })
          : getI18nString("file_browser.api_folder.no_create_permissions_this_team")

        storeContext.dispatch(FlashActions.flash(errorMessage))
      }
    }
  },
)

// Export statements with original names mapped to refactored implementations
export const BU = paginatedFolderQuery
export const Ct = trashFolderMutation
export const LK = useFolderQuery
export const Nr = moveFolderThunk
export const Q3 = updateFolderSharingAudienceAction
export const Q4 = permanentlyDeleteFolderMutation
export const SX = createNewFolderThunk
export const U = batchDeleteFoldersMutation
export const Xg = teamFoldersQuery
export const iT = updateFolderAccessAction
export const jl = loadFolderIfNeededThunk
export const k4 = restoreFolderMutation
export const mq = renameFolderMutation
export const xT = updateFolderTeamAccessAction

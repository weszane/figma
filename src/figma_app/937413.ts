import { keyBy } from "lodash-es"
import { consumptionPaywallUtils } from "../905/224"
import { resetTileSelection } from "../905/81009"
import { showModalHandler } from "../905/156213"
import { UpsellModalType } from "../905/165519"
import { restoreRepositories } from "../905/182187"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { createOptimistThunk } from "../905/350402"
import { extractValuesByKey } from "../905/439650"
import { isBakeStarterPaywallEnabledWithoutLimit } from "../905/442612"
import { subscribeMultipleAndAwaitAll } from "../905/553831"
import { FlashActions } from "../905/573154"
import { getFeatureFlags } from "../905/601108"
import { serializeQuery } from "../905/634134"
import { FeatureFlag, PageFolderFile } from "../905/652992"
import { liveStoreInstance } from "../905/713695"
import { ConsumptionPaywallModalPlansPricing } from "../905/739964"
import { extractPropertyValues } from "../905/780571"
import { handleRestoreTrashedFilesHelper } from "../905/844322"
import { sendWithRetry } from "../905/910117"
import { ComFileType } from "../905/915030"
import { selectViewAction } from "../905/929976"
import { i as _$$i2 } from "../figma_app/43065"
import { FileOperationsView } from "../figma_app/43951"
import { mapFileTypeToEditorType } from "../figma_app/53721"
import { FFileType } from "../figma_app/191312"
import { trackFileCopied } from "../figma_app/314264"
import { runWithConcurrency } from "../figma_app/562352"
import { checkFilesWithFolderLimits, checkTrashedFilesTeamLimits } from "../figma_app/598018"
import { fileActionEnum } from "../figma_app/630077"
import { canCreateFileType } from "../figma_app/687776"
import { M as _$$M } from "../figma_app/854365"

// Restore trashed files and repositories thunk
export let restoreTrashedFilesAndRepos = createOptimistThunk(
  async ({ dispatch, getState }, payload: { fileKeys: string[], repoIds?: string[] }) => {
    const { fileKeys, repoIds } = payload
    const state = getState()

    // Process file restoration
    if (fileKeys.length > 0) {
      const [limitExceededTeamId, ...fetchedFiles] = await Promise.all([
        checkTrashedFilesTeamLimits(fileKeys),
        ...fileKeys.map(key => liveStoreInstance.fetchFile(key)),
      ])

      if (limitExceededTeamId) {
        const team = state.teams[limitExceededTeamId]
        const editorTypes = new Set(fetchedFiles.map(file => file.editor_type))
        const singleEditorType
          = editorTypes.size > 1
            ? null
            : editorTypes.has(FFileType.WHITEBOARD)
              ? FFileType.WHITEBOARD
              : FFileType.DESIGN

        // Show appropriate paywall modal based on editor type
        if (editorTypes.has(FFileType.SITES) && _$$M && !getFeatureFlags().sts_starter_enabled) {
          dispatch(
            showModalHandler({
              type: _$$M,
              data: { team },
            }),
          )
        }
        else if (editorTypes.has(FFileType.FIGMAKE) && isBakeStarterPaywallEnabledWithoutLimit()) {
          dispatch(
            showModalHandler({
              type: _$$i2,
              data: { team },
            }),
          )
        }
        else {
          dispatch(
            showModalHandler({
              type: ConsumptionPaywallModalPlansPricing,
              data: {
                team,
                action: fileActionEnum.RESTORE_FILES,
                editorType: editorTypes.has(FFileType.FIGMAKE) ? FFileType.FIGMAKE : singleEditorType,
                resource: editorTypes.has(FFileType.FIGMAKE) && !getFeatureFlags().bake_starter_limit
                  ? FeatureFlag.FIGMAKE
                  : PageFolderFile.FILE,
                multipleResources: fileKeys.length > 1,
                currentPlan: consumptionPaywallUtils.Plan.STARTER,
                upsellPlan: consumptionPaywallUtils.Plan.PRO,
                upsellSource: UpsellModalType.CREATE_NEW_FILE,
              },
            }),
          )
        }
      }
      else {
        // Proceed with restoring files
        dispatch(
          handleRestoreTrashedFilesHelper({
            fileKeys: keyBy(fetchedFiles, "key"),
            userInitiated: true,
          }),
        )
      }
    }

    // Process repository restoration
    if (repoIds && repoIds.length > 0) {
      const fetchedRepos = await Promise.all(repoIds.map(id => liveStoreInstance.fetchRepo(id)))
      dispatch(
        restoreRepositories({
          reposById: keyBy(fetchedRepos, "id"),
          userInitiated: true,
        }),
      )
    }

    dispatch(resetTileSelection())
  },
)

/**
 * Helper function to determine copy destinations for files
 */
async function getCopyFileDestinations({
  selectedFileKeys,
  currentSpaceDraftsFolderId,
  currentUserId,
  state,
  toDraft,
}: {
  selectedFileKeys: string[]
  currentSpaceDraftsFolderId: string | undefined
  currentUserId: string | undefined
  state: any
  toDraft: boolean
}): Promise<{ copyFiles: Array<{ key: string, folderId: string }>, editorTypes: Set<FFileType> }> {
  const fileResponses = await subscribeMultipleAndAwaitAll(
    FileOperationsView,
    selectedFileKeys.map(fileKey => ({ fileKey })),
  )

  const copyFiles: Array<{ key: string, folderId: string }> = []
  const editorTypes = new Set<FFileType>()

  fileResponses.forEach(({ result: { data } }) => {
    const { file } = data ?? {}
    if (!file)
      return

    const { project, editorType, key } = file
    if (editorType != null) {
      editorTypes.add(editorType)
    }

    // Determine destination folder ID
    let destinationFolderId: string | undefined
    if (file.parentOrgId) {
      const orgUser = currentUserId && state.orgUsersByOrgId[file.parentOrgId]?.[currentUserId]
      destinationFolderId = orgUser ? orgUser.drafts_folder_id : currentSpaceDraftsFolderId
    }
    else if (file.teamId) {
      const teamRole = state.roles.byTeamId[file.teamId]
      const teamUser
        = currentUserId && teamRole && state.teamUserByTeamId[file.teamId]?.[currentUserId]
      destinationFolderId = teamUser ? teamUser.drafts_folder_id : currentSpaceDraftsFolderId
    }
    else {
      destinationFolderId = currentSpaceDraftsFolderId
    }

    const projectIdOrFallback = (destinationFolderId || project?.id) ?? ""
    const finalFolderId = !toDraft && project && canCreateFileType(project, editorType ?? FFileType.DESIGN)
      ? project.id
      : projectIdOrFallback

    copyFiles.push({
      key,
      folderId: finalFolderId,
    })
  })

  return { copyFiles, editorTypes }
}

// Duplicate selected files thunk
let duplicateSelectedFiles = createOptimistThunk(
  async ({ dispatch, getState }, payload: { toDraft?: boolean }) => {
    const state = getState()
    const currentUserId = state.user?.id
    const personalDraftsFolderId = state.user?.personal_drafts_folder_id
    const draftsFolderId = state.user?.drafts_folder_id

    // Collect all possible draft folder IDs
    const allDraftFolderIds = [personalDraftsFolderId]
    if (currentUserId) {
      allDraftFolderIds.push(
        ...extractValuesByKey(state.orgUsersByOrgId, currentUserId).map(user => user.drafts_folder_id),
        ...extractPropertyValues(state.teamUserByTeamId, currentUserId).map(
          user => user.drafts_folder_id || undefined,
        ),
      )
    }

    // Get selected file keys from tiles
    let selectedFileKeys = Object.keys(state.tileSelect?.[ComFileType.FILES] || {}).concat(
      Object.keys(state.tileSelect?.[ComFileType.PINNED_FILES] || {}),
    )

    // Include default file keys from selected repositories
    const selectedRepoIds = Object.keys(state.tileSelect?.[ComFileType.REPOS] || {})
    const repoFiles = await Promise.all(selectedRepoIds.map(id => liveStoreInstance.fetchRepo(id)))
    repoFiles.forEach((repo) => {
      if (repo.default_file_key) {
        selectedFileKeys.push(repo.default_file_key)
      }
    })

    // Determine copy destinations
    const { copyFiles, editorTypes } = await getCopyFileDestinations({
      selectedFileKeys,
      currentSpaceDraftsFolderId: draftsFolderId,
      currentUserId,
      state,
      toDraft: payload.toDraft ?? false,
    })

    // Check folder limits before proceeding
    const limitExceededTeamId = await checkFilesWithFolderLimits(copyFiles)
    if (limitExceededTeamId) {
      const team = state.teams[limitExceededTeamId]
      const singleEditorType
        = editorTypes.size > 1
          ? null
          : editorTypes.has(FFileType.WHITEBOARD)
            ? FFileType.WHITEBOARD
            : FFileType.DESIGN

      // Show appropriate paywall modal
      if (editorTypes.has(FFileType.SITES) && _$$M && !getFeatureFlags().sts_starter_enabled) {
        dispatch(
          showModalHandler({
            type: _$$M,
            data: { team },
          }),
        )
      }
      else if (editorTypes.has(FFileType.FIGMAKE) && isBakeStarterPaywallEnabledWithoutLimit()) {
        dispatch(
          showModalHandler({
            type: _$$i2,
            data: { team },
          }),
        )
      }
      else {
        dispatch(
          showModalHandler({
            type: ConsumptionPaywallModalPlansPricing,
            data: {
              team,
              action: fileActionEnum.DUPLICATE_FILES,
              editorType: singleEditorType,
              resource: editorTypes.has(FFileType.FIGMAKE) && !getFeatureFlags().bake_starter_limit
                ? FeatureFlag.FIGMAKE
                : PageFolderFile.FILE,
              multipleResources: copyFiles.length > 1,
              currentPlan: consumptionPaywallUtils.Plan.STARTER,
              upsellPlan: consumptionPaywallUtils.Plan.PRO,
              upsellSource: UpsellModalType.CREATE_NEW_FILE,
            },
          }),
        )
      }
      return
    }

    // Create copy operations
    const copyOperations = copyFiles.map(({ key, folderId }) => async () => {
      try {
        const response = await sendWithRetry.post(
          `/api/multiplayer/${key}/copy?${serializeQuery({ folder_id: folderId })}`,
        )
        return response
      }
      catch (error: any) {
        const message = error.data?.message
          ? error.data.message
          : getI18nString("file_browser.file_browser_actions.duplicate_file_error")
        dispatch(FlashActions.error(message))
        throw error
      }
    })

    // Execute copy operations with concurrency limit
    runWithConcurrency(copyOperations, 8).then((results) => {
      if (!results.some(result => result.type === "reject")) {
        // Count how many files were duplicated to user's drafts
        const draftsCopiesCount = copyFiles.filter(
          file => file.folderId && allDraftFolderIds.includes(file.folderId),
        ).length

        // Helper to create open button for visual bell
        const createOpenButton = (fileMeta: any) =>
          fileMeta && fileMeta.editor_type
            ? {
                text: getI18nString("general.open"),
                action: () => {
                  dispatch(
                    selectViewAction({
                      view: "fullscreen",
                      fileKey: fileMeta.key,
                      editorType: mapFileTypeToEditorType(fileMeta.editor_type),
                    }),
                  )
                  dispatch(VisualBellActions.dequeue({}))
                },
              }
            : undefined

        // Show appropriate visual bell notification
        if (
          draftsCopiesCount > 0
          && (state.selectedView.view !== "folder" || state.selectedView.folderId !== draftsFolderId)
        ) {
          let message = ""
          const isSingleFile = copyFiles.length === 1

          if (isSingleFile) {
            message = getI18nString("user_view.file_duplicated_to_your_drafts")
          }
          else if (draftsCopiesCount === copyFiles.length) {
            message = getI18nString("user_view.files_duplicated_to_your_drafts", {
              intArg: draftsCopiesCount,
            })
          }
          else {
            message = getI18nString("user_view.some_files_duplicated_to_your_drafts")
          }

          const button = isSingleFile
            ? createOpenButton(results[0].resolve?.data?.meta)
            : {
                text: getI18nString("general.show"),
                action: () => {
                  if (draftsFolderId) {
                    dispatch(
                      selectViewAction({
                        view: "folder",
                        folderId: draftsFolderId,
                      }),
                    )
                  }
                  dispatch(VisualBellActions.dequeue({}))
                },
              }

          dispatch(
            VisualBellActions.enqueue({
              type: "file_duplicated",
              message,
              button,
            }),
          )
        }
        else if (state.selectedView.view === "folder") {
          const button = createOpenButton(
            copyFiles.length === 1 ? results[0].resolve?.data?.meta : undefined,
          )

          dispatch(
            VisualBellActions.enqueue({
              type: "file_duplicated",
              message:
                copyFiles.length === 1
                  ? getI18nString("user_view.file_duplicated")
                  : getI18nString("user_view.files_duplicated", {
                      intArg: copyFiles.length,
                    }),
              button,
            }),
          )
        }

        // Track copied files
        const copiedFilesMetadata = results
          .map(result => (result.resolve != null ? result.resolve.data.meta : null))
          .filter(meta => meta != null)

        trackFileCopied(copyFiles, copiedFilesMetadata, getState())
      }
    })
  },
)

// Duplicate to drafts thunk
let duplicateToDrafts = createOptimistThunk(({ dispatch }) => {
  dispatch(duplicateSelectedFiles({ toDraft: true }))
})

// Duplicate single file to drafts thunk
let duplicateSingleFileToDrafts = createOptimistThunk(async ({ dispatch, getState }, payload: { file: { key: string } }) => {
  const state = getState()
  const draftsFolderId = state.user?.drafts_folder_id

  try {
    await sendWithRetry.post(
      `/api/multiplayer/${payload.file.key}/copy?${serializeQuery({ folder_id: draftsFolderId })}`,
    )
    dispatch(FlashActions.flash(getI18nString("user_view.file_duplicated_to_your_drafts")))
  }
  catch (error: any) {
    const message = error.data?.message
      ? error.data.message
      : getI18nString("file_browser.file_browser_actions.duplicate_file_error")
    dispatch(FlashActions.error(message))
  }
})

export const W6 = duplicateSingleFileToDrafts
export const b4 = restoreTrashedFilesAndRepos
export const g4 = duplicateToDrafts
export const n_ = duplicateSelectedFiles

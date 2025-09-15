import { createActionCreator } from '../905/73481'
import { ShareContext } from '../905/91820'
import { showModalHandler } from '../905/156213'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { OpenTarget } from '../905/380844'
import { subscribeAndAwaitData } from '../905/553831'
import { FlashActions } from '../905/573154'
import { getFeatureFlags } from '../905/601108'
import { customHistory } from '../905/612521'
import { getDesignFileUrlWithOptions } from '../905/612685'
import { serializeQuery } from '../905/634134'
import { logError } from '../905/714362'
import { tileCopyLinkModalId } from '../905/721794'
import { getResourceDataOrFallback } from '../905/723791'
import { isBranch } from '../905/760074'
import { WB } from '../905/761735'
import { VERSION_HISTORY_SET_FILE_LAST_SEEN_AT } from '../905/784363'
import { XHR } from '../905/910117'
import { debounce } from '../905/915765'
import { FileCreationPermissionsView } from '../figma_app/43951'
import { isDevEnvironment } from '../figma_app/169182'
import { trackFileEvent } from '../figma_app/314264'
import { setOssSalesExperimentValue } from '../figma_app/323326'
import { mapFileLinkExpirationConfig, mapFileLinkExpirationConfigOptimistic, mapFileProperties } from '../figma_app/349248'
import { copyTextToClipboard, copyTextWithPlainFallback } from '../figma_app/623293'
import { canCreateFileType } from '../figma_app/687776'
import { AppStateTsApi } from '../figma_app/763686'
import { fileApiHandler } from '../figma_app/787550'
import { Ul } from '../figma_app/841351'
import { desktopAPIInstance } from '../figma_app/876459'
import { isInteractionOrEvalMode } from '../figma_app/897289'

export const removeFileFromProjectAction = createActionCreator('FILE_REMOVE_FROM_PROJECT')
export const moveFileAction = createActionCreator('FILE_MOVE')
export const postFileAction = createActionCreator('FILE_POST')
export const batchSubscribeToRealtimeAction = createActionCreator('FILE_BATCH_SUBSCRIBE_TO_REALTIME')
export const batchPutFileAction = createActionCreator('FILE_BATCH_PUT')
export const filePutAction = createActionCreator('FILE_PUT')
/** File onboarding flag (original: $$F21) */
export const fileOnboardingFlag = {
  key: 'showDiagramOnboarding',
  value: '1',
}

/**
 * Checks if file has a repo (original: $$j17)
 * @param {any} file
 * @returns {boolean}
 */
export function hasFileRepo(file: any): boolean {
  return file.file_repo !== undefined
}

/**
 * Updates file thumbnail (original: $$U1)
 * @param {string} fileKey
 * @param {string} thumbnailGuid
 * @returns {Promise<void>}
 */
export function updateFileThumbnail(fileKey: string, thumbnailGuid: string): Promise<void> {
  return XHR.put(`/api/files/${fileKey}/thumbnail_guid`, {
    thumbnail_guid: thumbnailGuid,
  }).then(() => {
    AppStateTsApi?.canvasViewState().thumbnailNodeId.set(thumbnailGuid)
  })
}

/**
 * Optimistically updates file permissions (original: $$B18)
 */
export const updateFilePermissionsOptimistic = createOptimistThunk((dispatchApi, payload) => {
  payload.file.created_at
  && console.error(
    'It looks like you are PUT-ting to the API with the entire file object; please only pass the key and file permission attributes',
  )
  const updatePromise = fileApiHandler.putFile(payload).then(() => {
    payload.onSuccess?.()
  }).catch((error) => {
    payload.onError?.()
    dispatchApi.dispatch(
      VisualBellActions.enqueue({
        message: getI18nString('file_permissions.generic_error'),
        error: true,
      }),
    )
    if (isDevEnvironment())
      throw error
  })

  const file = payload.file
  const updateProps = {
    ...mapFileProperties(file, file.key),
    ...mapFileLinkExpirationConfig(file, payload.linkExpirationConfigId, payload.currentUser),
  }
  const optimisticConfig = mapFileLinkExpirationConfigOptimistic(file, payload.linkExpirationConfigId, payload.currentUser)
  if (Object.keys(updateProps).length > 0)
    WB().optimisticallyUpdate(updateProps, updatePromise)
  if (optimisticConfig)
    WB().optimisticallyCreate(optimisticConfig, updatePromise)
})

/** Action creator for file permissions PUT (original: $$G20) */
export const filePermissionsPutAction = createActionCreator('FILE_PERMISSIONS_PUT')

/**
 * Optimistically duplicates a file (original: $$V11)
 */
export const duplicateFileOptimistic = createOptimistThunk(async (dispatchApi, payload) => {
  const state = dispatchApi.getState()
  let params: Record<string, any> = {}
  const file = payload.file
  const folderId = payload.folderId || file.folderId
  let canCreate = false

  if (folderId) {
    const resourceData = getResourceDataOrFallback<any>(
      (await subscribeAndAwaitData(FileCreationPermissionsView, { projectId: folderId })).project,
    )
    canCreate = !!resourceData && !!file.editorType && canCreateFileType(resourceData, file.editorType)
  }
  if (canCreate)
    params.folder_id = folderId
  if (payload.versionId)
    params.version_id = payload.versionId

  dispatchApi.dispatch(
    VisualBellActions.enqueue({
      type: 'file_duplicating',
      message: getI18nString('visual_bell.duplicating'),
    }),
  )

  XHR.post(`/api/multiplayer/${file.key}/copy?${serializeQuery(params)}`)
    .then((response) => {
      dispatchApi.dispatch(VisualBellActions.dequeue({}))
      const hasOpenFile = !!state.openFile
      if (!response.data.error && response.data.meta && hasOpenFile) {
        const meta = response.data.meta
        trackFileEvent('File Duplicated', file.key, dispatchApi.getState(), {
          duplicatedFileKey: meta.key,
          duplicatedContainingFolderId: meta.folder_id,
          duplicatedFileTeamId: meta.team_id,
          source: payload.source,
        })
        if (payload.checkOssSalesExperiment)
          setOssSalesExperimentValue(meta.key)
        if (desktopAPIInstance) {
          desktopAPIInstance.openFile({
            fileKey: meta.key,
            title: meta.name,
            fileEditorType: meta.editor_type,
            target: OpenTarget.FOCAL_TAB,
            isBranch: isBranch(meta),
            isLibrary: !!meta.last_published_at,
            isTeamTemplate: false,
            userId: state.user?.id,
          })
          return
        }
        customHistory.redirect(getDesignFileUrlWithOptions(meta), '_blank')
      }
    })
    .catch(() => {
      dispatchApi.dispatch(VisualBellActions.dequeue({}))
      dispatchApi.dispatch(
        FlashActions.error(getI18nString('file_browser.file_browser_actions.file_copy_error')),
      )
    })
})

/**
 * Optimistically fetches file by key (original: $$H14)
 */
export const fetchFileByKeyOptimistic = createOptimistThunk((dispatchApi, payload) => {
  const fileKey = payload.file_key
  if (fileKey) {
    const state = dispatchApi.getState()
    if (!state.fileByKey[fileKey]) {
      fileApiHandler.getFiles({ fileKey }).then((result) => {
        dispatchApi.dispatch(filePutAction({ file: result.data.meta }))
      })
    }
  }
})

/**
 * Optimistically deletes workshop from file (original: $$z19)
 */
export const deleteWorkshopOptimistic = createOptimistThunk(async (_dispatchApi, payload) => {
  try {
    await XHR.del(`/api/files/${payload.file_key}/workshop`)
  }
  catch {}
})

/**
 * Optimistically starts workshop session (original: $$W7)
 */
export const startWorkshopSessionOptimistic = createOptimistThunk(async (dispatchApi, payload, { liveStore }) => {
  const fileMeta = await liveStore.fetchFile(payload.fileKey)
  const startPromise = XHR.post(`/api/files/${payload.fileKey}/workshop`)
    .then(() => {
      dispatchApi.dispatch(
        VisualBellActions.enqueue({
          message: getI18nString('whiteboard.open_sessions.open_session_started_notification'),
          button: {
            text: getI18nString('whiteboard.open_sessions.open_session_started_notification_copy_link'),
            action: () => {
              // eslint-disable-next-line ts/no-use-before-define
              dispatchApi.dispatch(copyShareLinkOptimistic({
                fileKey: payload.fileKey,
                url: getDesignFileUrlWithOptions(fileMeta),
                source: ShareContext.WORKSHOP_VISUAL_BELL,
              }))
            },
          },
        }),
      )
    })
    .catch(() => {
      dispatchApi.dispatch(
        VisualBellActions.enqueue({
          message: getI18nString('whiteboard.open_sessions.open_session_start_failed_notification'),
          error: true,
        }),
      )
    })

  const userId = dispatchApi.getState().user?.id
  if (userId) {
    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + 1)
    WB().optimisticallyCreate(
      {
        FigFileWorkshopMode: {
          [`optimistic-${payload.fileKey}`]: {
            fileKey: payload.fileKey,
            expiresAt,
            userId,
          },
        },
      },
      startPromise,
    )
  }
})

/**
 * Marks file as viewed (original: $$K2)
 */
export const markFileViewedOptimistic = createOptimistThunk(async (dispatchApi, payload) => {
  await XHR.post(`/api/files/${payload.fileKey}/view`)
    .then(({ data }) => {
      const { last_view_at, last_edit_at } = data.meta
      dispatchApi.dispatch(
        VERSION_HISTORY_SET_FILE_LAST_SEEN_AT({
          lastViewed: last_view_at,
          lastEdited: last_edit_at,
        }),
      )
      dispatchApi.dispatch(
        Ul({
          openFileKey: payload.fileKey,
          versionHistory: dispatchApi.getState().versionHistory,
        }),
      )
    })
    .catch((error) => {
      logError('recent files', 'Error marking file view / retrieving last seen times', { error })
    })
})

/**
 * Sets file thumbnail and shows notification (original: $$Y0)
 */
export const setFileThumbnailOptimistic = createOptimistThunk((dispatchApi, payload) => {
  updateFileThumbnail(payload.file_key, payload.thumbnail_guid)
    .then(() => {
      const featureFlags = getFeatureFlags()
      const message = featureFlags.dse_library_pg_thumbnails
        ? payload.thumbnail_guid
          ? getI18nString('file_browser.file_browser_actions.file_thumbnail_set')
          : getI18nString('file_browser.file_browser_actions.default_file_thumbnail_restored')
        : payload.thumbnail_guid
          ? getI18nString('file_browser.file_browser_actions.thumbnail_set')
          : getI18nString('file_browser.file_browser_actions.default_thumbnail_restored')
      dispatchApi.dispatch(VisualBellActions.enqueue({ message }))
    })
    .catch(() => {
      dispatchApi.dispatch(
        VisualBellActions.enqueue({
          message: getI18nString('file_browser.error_try_again'),
          error: true,
        }),
      )
    })
})

/** Action creator for file restore (original: $$$6) */
export const fileRestoreAction = createActionCreator('FILE_RESTORE')

/**
 * Optimistically restores file version (original: $$X9)
 */
export const restoreFileVersionOptimistic = createOptimistThunk((dispatchApi, payload) => {
  const { fileKey, version } = payload
  const versions = dispatchApi.getState().versionHistory.versions.filter(v => v.created_at).sort((a, b) => (a.created_at < b.created_at ? -1 : 1))
  const idx = versions.findIndex(v => v.id === version.id)
  if (idx === -1 || idx === 0) {
    dispatchApi.dispatch(FlashActions.error('Unable to find version to restore'))
    return
  }
  const prevVersion = versions[idx - 1]
  if (prevVersion) {
    dispatchApi.dispatch(fileRestoreAction({ fileKey, versionId: prevVersion.id }))
  }
  else {
    dispatchApi.dispatch(FlashActions.error('Unable to find version to restore'))
  }
})

/**
 * Copies embed code to clipboard and shows notification (original: $$q12)
 */
export const copyEmbedCodeOptimistic = createOptimistThunk((dispatchApi, payload) => {
  copyTextToClipboard(payload.embedCode)
    .then(() => {
      trackFileEvent('Embed Code Copied', payload.fileKey, dispatchApi.getState())
      dispatchApi.dispatch(
        VisualBellActions.enqueue({
          type: 'embeded_code_copied_to_clipboard',
          message: getI18nString('file_browser.file_browser_actions.embed_code_copied'),
        }),
      )
    })
    .catch(() => {
      dispatchApi.dispatch(
        FlashActions.error(getI18nString('file_browser.file_browser_actions.embed_code_copy_error')),
      )
    })
})

/**
 * Shows visual bell for link copy (original: J)
 * @param {any} dispatchApi
 * @param {any} options
 */
function showLinkCopiedVisualBell(dispatchApi: any, options: any) {
  const type = options.visualBellTypeOverride ?? 'link_copied_to_clipboard'
  const extras = options.visualBellExtras ?? {}
  const notification = options.visualBellMessageComponentKeyOverride
    ? {
        type,
        messageComponentKey: options.visualBellMessageComponentKeyOverride,
        button: options.visualBellButton,
        ...extras,
      }
    : {
        type,
        message: options.visualBellMessageOverride ?? getI18nString('copy_to_clipboard.link_copied_to_clipboard'),
        button: options.visualBellButton,
        ...extras,
      }
  dispatchApi.dispatch(VisualBellActions.enqueue(notification))
}

/**
 * Optimistically copies share link (original: $$Z8)
 */
export const copyShareLinkOptimistic = createOptimistThunk((dispatchApi, payload) => {
  let copyPromise: Promise<void>
  if (payload.label) {
    const anchor = document.createElement('a')
    anchor.href = payload.url
    anchor.innerText = payload.label
    copyPromise = copyTextWithPlainFallback(anchor.outerHTML, payload.url)
  }
  else {
    copyPromise = copyTextToClipboard(payload.url)
  }
  copyPromise
    .then(() => {
      trackFileEvent('File Share Link Copied', payload.fileKey, dispatchApi.getState(), {
        copyLinkSource: ShareContext[payload.source],
        ...payload.trackingProperties,
      })
      if (!payload.skipVisualBell)
        showLinkCopiedVisualBell(dispatchApi, payload)
    })
    .catch(() => {
      if (payload.showVisualBellOnErrorForInteractionTests && isInteractionOrEvalMode()) {
        showLinkCopiedVisualBell(dispatchApi, payload)
      }
      else {
        dispatchApi.dispatch(
          showModalHandler({
            type: tileCopyLinkModalId,
            data: { link: payload.url },
          }),
        )
      }
    })
})

/**
 * Removes newlines from string (original: Q)
 * @param {string} str
 * @returns {string}
 */
const removeNewlines = (str: string): string => str.replace(/[\r\n]+/g, ' ')
export const clearActiveFileUsersAction = createActionCreator('FILE_CLEAR_ACTIVE_USERS')
export const setActiveFileUsersAction = createActionCreator('FILE_SET_ACTIVE_USERS')
/**
 * Optimistically renames file (original: $$ee4)
 */
export const renameFileOptimistic = createOptimistThunk((dispatchApi, payload) => {
  const name = removeNewlines(payload.name)
  if (name.length <= 100) {
    const fileUpdate = {
      key: payload.file.key,
      name,
      updated_at: new Date().toISOString(),
    }
    dispatchApi.dispatch(filePutAction({ file: fileUpdate, userInitiated: true }))
    trackFileEvent('File Renamed', fileUpdate.key, dispatchApi.getState(), { fileName: fileUpdate.name })
  }
})

/** Action creators (original: $$et13, $$er10, $$en15, $$ei5, $$ea22, $$es23) */

/**
 * Debounced active file users updater (original: eo)
 */
const updateActiveFileUsersDebounced = debounce((fileKeys, dispatchApi) => {
  const state = dispatchApi.getState()
  if (state.activeFileUsers) {
    fileKeys = fileKeys.filter(key => !(key in state.activeFileUsers))
  }
  if (fileKeys.length) {
    XHR.post('/api/active_file_users', { keys: fileKeys })
      .then(({ data }) => {
        Object.entries(data.meta.active_file_users).forEach(([fileKey, usersObj]) => {
          if (state.activeFileUsers && fileKey in state.activeFileUsers)
            return
          const users = []
          if (usersObj) {
            Object.values(usersObj).forEach((userStr) => {
              users.push(JSON.parse(userStr))
            })
          }
          dispatchApi.dispatch(setActiveFileUsersAction({ fileKey, users }))
        })
      })
      .catch(() => {})
  }
}, 1000)

/** Triggers debounced active file users update */
createOptimistThunk((dispatchApi, payload) => {
  updateActiveFileUsersDebounced(payload.fileKeys, dispatchApi)
})

/** Action creators for active users (original: $$el16, $$ed3) */

/** Exported aliases for refactored names */
export const YJ = setFileThumbnailOptimistic
export const FE = updateFileThumbnail
export const GZ = markFileViewedOptimistic
export const Lk = setActiveFileUsersAction
export const Nw = renameFileOptimistic
export const PB = batchSubscribeToRealtimeAction
export const PF = fileRestoreAction
export const Rh = startWorkshopSessionOptimistic
export const S = copyShareLinkOptimistic
export const SQ = restoreFileVersionOptimistic
export const U2 = moveFileAction
export const YW = duplicateFileOptimistic
export const Yn = copyEmbedCodeOptimistic
export const Yp = removeFileFromProjectAction
export const ZN = fetchFileByKeyOptimistic
export const bE = postFileAction
export const c3 = clearActiveFileUsersAction
export const jO = hasFileRepo
export const og = updateFilePermissionsOptimistic
export const rA = deleteWorkshopOptimistic
export const sF = filePermissionsPutAction
export const tX = fileOnboardingFlag
export const uo = batchPutFileAction
export const yJ = filePutAction

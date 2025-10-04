import { setTagGlobal } from "../905/11"
import { fullscreenAlias } from "../905/37051"
import { fileMetadataService } from "../905/84999"
import { getRandomString } from "../905/87821"
import { fullscreenPerfManager } from "../905/125218"
import { isLocksSupported } from "../905/138461"
import { showModalHandler } from "../905/156213"
import { getFontMetadataList } from "../905/165290"
import { getBackgroundColorForTheme, getMPVisibleTheme } from "../905/187165"
import { permissionScopeHandler } from "../905/189185"
import { delay } from "../905/236856"
import { setLastUsedEditorType } from "../905/298923"
import { getI18nString } from "../905/303541"
import { isBakeStarterPaywallEnabledWithoutLimit } from "../905/442612"
import { trackEventAnalytics } from "../905/449184"
import { jubileeBAtom, jubileeEligibilitySAtom, jubileeTentativePlanEligibilityAtom, jubileeTentativeUserEligibilityAtom, setListAtom } from "../905/509613"
import { getConnectionInfo, getNavigatorHardwareInfo, getWindowDeviceInfo } from "../905/550523"
import { FlashActions } from "../905/573154"
import { putTeamUser } from "../905/584989"
import { getFeatureFlags } from "../905/601108"
import { getPreviousSelectedView } from "../905/612521"
import { saveLastUsedEditorType } from "../905/620668"
import { setupFileObject } from "../905/628874"
import { serializeQuery } from "../905/634134"
import { updateFontListFileMetadata } from "../905/646812"
import { createLocalFileKey, isLocalFileKey } from "../905/657242"
import { variableSetDefaultModeService } from "../905/694231"
import { liveStoreInstance } from "../905/713695"
import { logError, logInfo, logWarning } from "../905/714362"
import { completeFileCreation, getFileCreationManager, startFileCreation } from "../905/775298"
import { generateUUIDv4 } from "../905/871474"
import { sendWithRetry, XHRError } from "../905/910117"
import { selectViewAction } from "../905/929976"
import { eventLogger } from "../905/945673"
import { atomStoreManager } from "../figma_app/27355"
import { i as _$$i } from "../figma_app/43065"
import { doesEditorTypeMatchFileType, FEditorType, isWhiteboardOrDesignOrIllustration, mapEditorTypeToFileType, mapEditorTypeToWorkspaceType, mapFileTypeToEditorType } from "../figma_app/53721"
import { bY, q7, Vf } from "../figma_app/60023"
import { filePutAction } from "../figma_app/78808"
import { newFileLoaded, setLeftPanelTab, setNeedsUpgrade, setProgressBarState, showFileCreationFailureBanner } from "../figma_app/91703"
import { getGracePeriodStatus } from "../figma_app/141320"
import { isLocalDevOnCluster } from "../figma_app/169182"
import { ColorTokenManager } from "../figma_app/214121"
import { figjamCreateSlidesOutlineAtom, orgTemplatePickerViewAtom, sessionIdAtom } from "../figma_app/223206"
import { setTeamOptimistThunk } from "../figma_app/240735"
import { trackFileEvent, trackFileObjEvent } from "../figma_app/314264"
import { Ac, bJ, D2 } from "../figma_app/318123"
import { lA } from "../figma_app/325537"
import { handleFileLibrarySubscription } from "../figma_app/430563"
import { fullscreenValue } from "../figma_app/455680"
import { resetMissingFontTracking } from "../figma_app/557318"
import { Zj } from "../figma_app/610446"
import { $W } from "../figma_app/681244"
import { FileCreationPermissionsGenerator } from "../figma_app/687776"
import { l5 } from "../figma_app/728657"
import { canUseCustomTemplates } from "../figma_app/741211"
import { setPropertiesPanelTab } from "../figma_app/741237"
import { w5 } from "../figma_app/749805"
import { Lm, mF } from "../figma_app/755939"
import { ColorStateTsApi, DesignWorkspace, FontSourceType, Fullscreen, PrototypingTsApi, SideType, UIVisibilitySetting, UserInterfaceElements, VariablesBindings } from "../figma_app/763686"
import { handleEnterMode } from "../figma_app/806075"
import { defaultLibraryKeyAtom } from "../figma_app/825489"
import { checkFileHasUnsyncedAutosave, destroyAutosaveManager, getAutosaveFileInfo, getAutosaveManagerInstance, setupAutosaveManager } from "../figma_app/840917"
import { M as _$$M } from "../figma_app/854365"
import { desktopAPIInstance } from "../figma_app/876459"
import { setUserInOrgs } from "../figma_app/990058"

let n
/**
 * Promise that resolves when the browser comes back online.
 * Re-creates itself when resolved to handle subsequent offline periods.
 * Original name: A
 */
let onlinePromise = (function createOnlinePromise() {
  return new Promise<void>((resolve) => {
    const handleOnline = () => {
      window.removeEventListener("online", handleOnline)
      onlinePromise = createOnlinePromise()
      resolve()
    }
    window.addEventListener("online", handleOnline)
  })
}())

/**
 * Checks if a value represents a canceled request.
 * Original name: y
 * @param value - The value to check
 * @returns True if the value equals "canceled"
 */
function isCanceled(value: string): boolean {
  return value === "canceled"
}

/**
 * Manages a cancelable request with retry logic and exponential backoff.
 * Original name: b
 */
class CancelableRequestManager {
  private _resolveCancelPromise: (value: string) => void = () => {}
  private _cancelPromise: Promise<string>
  private _result: Promise<any>
  constructor(requestFn: () => Promise<any>) {
    this._cancelPromise = new Promise<string>((resolve) => {
      this._resolveCancelPromise = resolve
    })
    this._result = this.startRequest(requestFn)
  }

  /**
   * Gets the result of the request.
   * @returns The request result promise
   */
  getResult(): Promise<any> {
    return this._result
  }

  /**
   * Cancels the ongoing request.
   */
  cancelRequest(): void {
    this._resolveCancelPromise("canceled")
  }

  /**
   * Starts the request with retry logic and exponential backoff.
   * @param requestFn - The function that makes the actual request
   * @returns The result of the successful request or cancellation
   */
  private async startRequest(requestFn: () => Promise<any>): Promise<any> {
    let attemptCount = 0
    for (;;) {
      const currentOnlinePromise = onlinePromise
      try {
        return await Promise.race([requestFn(), this._cancelPromise])
      }
      catch (error) {
        if (error instanceof XHRError) {
          // Don't retry client errors (4xx)
          if (error.status >= 400 && error.status < 500) {
            throw error
          }
        }
        else {
          throw error
        }
      }
      const raceResult = await Promise.race([this._cancelPromise, delay(Math.min(500 * 2 ** attemptCount, 60000)), currentOnlinePromise])
      if (raceResult && isCanceled(raceResult)) {
        return raceResult
      }
      attemptCount++
    }
  }
}

/**
 * Gets an appropriate error message based on network status.
 * Original name: getErrorMessage
 * @param error - The error object
 * @param defaultMessage - The default message to use
 * @returns The appropriate error message
 */
export function getErrorMessage(error: {
  message?: string
}, defaultMessage: string): string {
  return navigator.onLine ? error.message ? error.message : defaultMessage : getI18nString("user_facing_error.offline")
}

/**
 * Gets an error message for new document creation failures.
 * Original name: getNewDocumentErrorMessage
 * @param error - The error object
 * @returns The new document error message
 */
export function getNewDocumentErrorMessage(error: {
  message?: string
}): string {
  return getErrorMessage(error, getI18nString("user_facing_error.new_document"))
}

/**
 * Tracks file opening events and handles mode transitions.
 * Original name: trackFileOpenedAndHandleMode
 * @param file - The file object with key
 * @param state - The application state
 * @param hasStoredView - Whether there's a stored view
 */
export function trackFileOpenedAndHandleMode(file: {
  key: string
}, state: any, hasStoredView?: boolean): void {
  const previousView = JSON.stringify(getPreviousSelectedView() || {})
  const source = state.selectedView.view === "fullscreen" ? state.selectedView.trackingInfo?.source : ""
  trackFileEvent("File Opened", file.key, state, {
    randomID: getRandomString(),
    prevView: previousView,
    source,
    authenticatedUserIds: state.authedUsers.orderedIds.filter((id: string) => id !== state.user?.id),
  })
  if (state.selectedView.view === "fullscreen" && (state.selectedView.editorType === FEditorType.Design || state.selectedView.editorType === FEditorType.DevHandoff || state.selectedView.editorType === FEditorType.Illustration)) {
    handleEnterMode(state, state.selectedView.editorType, hasStoredView ? "stored" : "init")
  }
}

/**
 * Creates a new file with retry logic.
 * Original name: createNewFileWithRetry
 * @param dispatch - The dispatch function
 * @param requestData - The request data for file creation
 * @param trackingInfo - Tracking information
 * @returns The created file key
 */
export async function createNewFileWithRetry(dispatch: any, requestData: any, trackingInfo: any): Promise<string> {
  const response = await sendWithRetry.post("/api/files/create", requestData, {
    retryCount: 2,
  })
  return processFileCreationResponse(dispatch, response.data, trackingInfo)
}

/**
 * Processes the file creation response and updates state.
 * Original name: ex
 * @param dispatch - The dispatch function
 * @param responseData - The response data from the API
 * @param trackingInfo - Tracking information
 * @param state - The application state
 * @returns The file key
 */
function processFileCreationResponse(dispatch: any, responseData: any, trackingInfo: any, state?: any): string {
  const file = responseData.meta.fig_file
  const teamUser = responseData.meta.team_user
  const orgUser = responseData.meta.org_user
  dispatch(filePutAction({
    file,
  }))
  if (orgUser) {
    dispatch(setUserInOrgs({
      orgUsers: [orgUser],
      orgId: orgUser.org_id,
    }))
  }
  if (teamUser) {
    dispatch(putTeamUser({
      teamUsers: [teamUser],
      teamId: teamUser.team_id,
    }))
  }
  const trackingData: Record<string, any> = trackingInfo
    ? {
        ...(trackingInfo.triggerElement && {
          uiTriggerElement: trackingInfo.triggerElement,
        }),
        uiTriggeredFrom: trackingInfo.from,
        uiSelectedView: JSON.stringify(trackingInfo.selectedView),
      }
    : {}
  trackingData.teamId = teamUser?.team_id || null
  trackingData.orgId = orgUser?.org_id || null
  trackingData.folderId = file.folder_id
  trackingData.authenticatedUserIds = state.authedUsers.orderedIds
  trackingData.offline = `${!navigator.onLine}`
  trackFileObjEvent("File Created", file, state, trackingData)
  return file.key
}

/**
 * Tracks fullscreen file opening events with performance metrics.
 * Original name: trackFullscreenFileOpened
 * @param params - File and state information
 */
export function trackFullscreenFileOpened({
  fileKey,
  folderId,
  teamId,
  orgId,
  isNewFile,
  state,
}: {
  fileKey: string
  folderId: string | null
  teamId: string | null
  orgId: string | null
  isNewFile: boolean
  state: any
}): void {
  const concurrentLoadingTabsCount = desktopAPIInstance && desktopAPIInstance.getConcurrentLoadingTabsCount() || 0
  const isVisibleLoad = desktopAPIInstance && concurrentLoadingTabsCount === 0 || !document.hidden
  const {
    fileOpenIndex,
    isColdBoot,
  } = fullscreenPerfManager.logOpenFileAction(fileKey, isVisibleLoad, folderId, teamId, orgId)
  eventLogger.loadTimer.logOpenFileAction(fileKey)
  trackFileEvent("Fullscreen File Opened", fileKey, state, {
    randomID: getRandomString(),
    fileOpenIndex,
    isColdBoot,
    concurrentLoadingTabsCount,
    isActive: !document.hidden,
    isVisibleLoad,
    isNewFile,
    ...getConnectionInfo(),
    ...getNavigatorHardwareInfo(),
    ...getWindowDeviceInfo(),
  }, {
    forwardToDatadog: true,
  })
}

/**
 * Loads and opens a file in fullscreen mode.
 * Original name: loadAndOpenFileInFullscreen
 * @param store - The Redux store
 * @param fileKey - The file key to open
 * @param editorType - The editor type
 * @param shouldUseOfflineMode - Whether to use offline mode
 */
export async function loadAndOpenFileInFullscreen(store: any, fileKey: string, editorType: any, shouldUseOfflineMode: boolean): Promise<void> {
  let state = store.getState()
  let selectedView = state.selectedView
  let isFullscreenView = selectedView && selectedView.view === "fullscreen"
  if (!isFullscreenView) {
    return
  }
  {
    const file = await liveStoreInstance.fetchFile(fileKey)
    setTagGlobal("file.key", file.key)
    if (file.file_repo_id === null) {
      setTagGlobal("branching", "not enabled")
    }
    else {
      setTagGlobal("branching_repo", file.file_repo_id)
      if (file.source_file_key === null) {
        setTagGlobal("branching", "main branch")
      }
      else {
        setTagGlobal("branching", "user branch")
      }
    }
    trackFullscreenFileOpened({
      fileKey,
      folderId: file.folder_id,
      orgId: file.parent_org_id ?? null,
      teamId: file.team_id,
      isNewFile: true,
      state,
    })
  }
  const backgroundColor = getBackgroundColorForTheme(getMPVisibleTheme(state.theme.themePreference))
  mpGlobal.preconnect(mpGlobal.url({
    fileKey,
    role: "editor",
    initialBgColor: backgroundColor,
    suppressDecodeErrors: isLocalDevOnCluster(),
    tagForLogging: mapEditorTypeToLoggingTag(editorType),
    forceViewOnly: fullscreenAlias.getIsExtension(),
  }))
  await fullscreenValue.loadAndStartFullscreenIfNecessary()
  Fullscreen.setEditorType(mapEditorTypeToWorkspaceType(editorType))
  Fullscreen.setEditorTheme(state.theme.visibleTheme || "")
  const fileMetadataResponse = (await (shouldUseOfflineMode
    ? (async () => {
        const requestManager = new CancelableRequestManager(() => fileMetadataService.getFileMetadata({
          fileKey,
        }))
        const result = await requestManager.getResult()
        if (isCanceled(result)) {
          throw new Error("Request was canceled")
        }
        return result
      })()
    : fileMetadataService.getFileMetadata({
        fileKey,
      }))).data.meta

  // Re-check state after async operations
  state = store.getState()
  selectedView = state.selectedView
  if (!(selectedView && selectedView.view === "fullscreen")) {
    return
  }
  trackFileOpenedAndHandleMode({
    key: fileKey,
  }, state)
  saveLastUsedEditorType(mapEditorTypeToFileType(editorType))
  setLastUsedEditorType(editorType)
  const fontListData = {
    sharedFontsList: getFontMetadataList(fileMetadataResponse.shared_fonts),
    localizedToUnlocalized: [],
    renames: {
      family: {},
      style: {},
    },
    sources: [FontSourceType.SHARED],
  }
  updateFontListFileMetadata(store, fontListData)
  store.dispatch(setNeedsUpgrade({
    needsUpgrade: fileMetadataResponse.needs_upgrade,
  }))
  fullscreenValue.figFileLoaded(fileKey)
  Fullscreen.openFileWithServerMetadata({
    metadata: {
      file_key: fileMetadataResponse.file_key,
      source_file_key: fileMetadataResponse.source_file_key,
    },
    startInCommentsMode: false,
    newFile: true,
    selectedNodeId: null,
    devModeFocusNodeId: null,
    fallbackStateGroupId: null,
    urlViewport: null,
    additionalTopPadding: null,
    mainComponentLink: false,
    shouldConnectToMultiplayer: mpGlobal.shouldConnectToMultiplayer,
    preserveUrlNodeId: false,
  })
  const team = fileMetadataResponse.team
  if (team) {
    store.dispatch(setTeamOptimistThunk({
      team,
      userInitiated: false,
    }))
  }
  atomStoreManager.set(jubileeTentativePlanEligibilityAtom, fileMetadataResponse.jubilee_tentative_plan_eligibility)
  atomStoreManager.set(jubileeTentativeUserEligibilityAtom, fileMetadataResponse.jubilee_tentative_user_eligibility)
  atomStoreManager.set(jubileeBAtom, fileMetadataResponse.jubilee_b)
  atomStoreManager.set(jubileeEligibilitySAtom, fileMetadataResponse.jubilee_eligibility_s)
  atomStoreManager.set(setListAtom, new Set())
  const updatedFile = await liveStoreInstance.fetchFile(fileKey)
  const updatedState = store.getState()
  const folder = updatedState.folders[updatedFile.folder_id || ""]
  const teamData = updatedState.teams[updatedFile.team_id || ""]
  const gracePeriodStatus = getGracePeriodStatus(updatedState.userEduGracePeriods, updatedFile.team_id || "")
  const repo = updatedState.repos[updatedFile.file_repo_id || ""]
  const sourceFile = updatedState.fileByKey[updatedFile.source_file_key || ""]
  const folderPermissions = folder
    ? {
        ...FileCreationPermissionsGenerator.disabled(),
        ...folder,
      }
    : null
  const fileObject = setupFileObject(updatedFile, {
    folder: folderPermissions,
    team: teamData,
    repo,
    sourceFile: {
      ...sourceFile,
      can_manage: true,
      can_view: true,
    },
    can_delete: true,
    can_edit: true,
    can_edit_canvas: true,
    can_access_dev_mode_entry_point: true,
    can_access_full_dev_mode: true,
    can_manage: true,
    can_view: true,
    can_export: true,
    hasEduGracePeriod: gracePeriodStatus.isInValidGracePeriod,
    // isFavorited: !!sourceFile?.is_favorited,
  })
  if (isWhiteboardOrDesignOrIllustration(editorType) && !doesEditorTypeMatchFileType(editorType, fileObject.editorType)) {
    logError("new file", "editor type mismatch", {
      requested: editorType,
      file: fileObject.editorType,
    })
    editorType = mapFileTypeToEditorType(fileObject.editorType)
  }
  if (editorType === FEditorType.Sites || editorType === FEditorType.Figmake) {
    Fullscreen.addNewFileDefaultResponsiveSet()
  }
  if (editorType === FEditorType.Figmake) {
    Fullscreen?.setEnabledFigmake(true)
  }
  store.dispatch(newFileLoaded({
    file: fileObject,
    fullscreenEditorType: editorType,
  }))
  const currentTeamUser = fileMetadataResponse.current_team_user
  if (currentTeamUser && updatedFile.team_id) {
    store.dispatch(putTeamUser({
      teamUsers: [currentTeamUser],
      teamId: updatedFile.team_id,
    }))
  }
  const isTeamTemplate = !!(fileMetadataResponse.is_team_template && canUseCustomTemplates(updatedState))
  desktopAPIInstance?.setIsLibrary(!!fileMetadataResponse.last_published_at)
  desktopAPIInstance?.setIsTeamTemplate(!!isTeamTemplate)
}

/**
 * Initializes the fullscreen environment for a new empty file.
 * Original name: initializeFullscreenForNewFile
 * @param dispatch - The dispatch function
 * @param editorType - The editor type
 * @param shouldHideUI - Whether to hide the UI
 */
export async function initializeFullscreenForNewFile(dispatch: any, editorType: any, shouldHideUI?: boolean): Promise<void> {
  dispatch(setProgressBarState({
    mode: shouldHideUI ? UIVisibilitySetting.HIDE_UI : UIVisibilitySetting.OFF,
  }))
  await fullscreenValue.loadAndStartFullscreenIfNecessary()
  if (ColorStateTsApi) {
    ColorTokenManager.updateColorsInFullscreen(ColorStateTsApi.colorTokensState())
  }
  setPropertiesPanelTab(DesignWorkspace.DESIGN)
  if (getFeatureFlags().ce_new_missing_fonts_logging) {
    resetMissingFontTracking()
  }
  const visibleTheme = fullscreenValue.getState().theme.visibleTheme
  fullscreenValue.updateAppModel({
    themePreference: visibleTheme,
  })
  Fullscreen.openEmptyFile(mapEditorTypeToWorkspaceType(editorType))
}
/**
 * Transforms new file creation parameters into API request parameters.
 * Original name: transformNewFileParamsToApiParams
 * @param params - New file creation parameters
 * @returns Transformed API parameters
 */
export function transformNewFileParamsToApiParams(params: any): Record<string, any> {
  const apiParams: Record<string, any> = {}
  params.folder_id && (apiParams.folder_id = params.folder_id)
  params.org_id && (apiParams.org_id = params.org_id)
  params.framePresetName && (apiParams.frame_preset_name = params.framePresetName)
  params.editorType && (apiParams.editor_type = params.editorType)
  params.fileName && (apiParams.name = params.fileName)
  params.localFileKey && (apiParams.localFileKey = params.localFileKey)
  params.team_id && (apiParams.team_id = params.team_id)
  if (params.figjamAiNewFileData) {
    apiParams.figjamAiNewFile_prompt = params.figjamAiNewFileData.prompt
    apiParams.figjamAiNewFile_useCaseCategory = params.figjamAiNewFileData.useCaseCategory
    apiParams.figjamAiNewFile_subtitle = params.figjamAiNewFileData.subtitle
    apiParams.figjamAiNewFile_entrypoint = params.figjamAiNewFileData.entrypoint
  }
  params.slidesAiNewFileData && (apiParams.slidesAiNewFile_source = params.slidesAiNewFileData.source)
  params.figmakeInitialMessage && (apiParams.figmakeInitialMessage = params.figmakeInitialMessage)
  params.figjamMakeSomethingUseCase && (apiParams.figjam_make_something_use_case = params.figjamMakeSomethingUseCase)
  params.newFileDataLocalStorageKey && (apiParams.newFileDataLocalStorageKey = params.newFileDataLocalStorageKey)
  params.slideTemplateLibraryKey && (apiParams.slide_template_library_key = params.slideTemplateLibraryKey)
  params.initialLibKey && (apiParams.initial_lib_key = params.initialLibKey)
  params.trackingInfo?.from && (apiParams.from = params.trackingInfo.from)
  return apiParams
}

/**
 * Handles the creation of a new file with all associated setup.
 * Original name: ek
 */
async function handleNewFileCreation(store: any, newFileParams: any, fileCreationController: any, shouldHideUI: boolean, autosaveManager: any): Promise<{
  status: string
  error?: any
}> {
  let fileCreationResponse

  // Initialize fullscreen environment
  atomStoreManager.set(q7, true)
  await initializeFullscreenForNewFile(store, mapFileTypeToEditorType(newFileParams.editorType), shouldHideUI)
  newFileParams.newFileDataLocalStorageKey && atomStoreManager.set(sessionIdAtom, newFileParams.newFileDataLocalStorageKey)
  if (newFileParams.editorType === "cooper" && Lm && mF) {
    const orgTemplateView = atomStoreManager.get(orgTemplatePickerViewAtom)
    newFileParams.cooperTemplateLibraryKey
      ? atomStoreManager.set(Lm, {
          type: mF.TEMPLATES,
          libraryKey: newFileParams.cooperTemplateLibraryKey,
          parentView: {
            type: mF.ALL,
          },
        })
      : orgTemplateView && atomStoreManager.set(Lm, {
        type: mF.ORG,
      })
  }

  // Handle slides editor type specific setup
  if (newFileParams.editorType === "slides") {
    if (newFileParams.slidesAiNewFileData) {
      const slidesOutline = atomStoreManager.get(figjamCreateSlidesOutlineAtom)
      atomStoreManager.set(bY, {
        type: Vf.TEMPLATE_PICKER,
        figjamEntryPointData: slidesOutline,
        source: newFileParams.slidesAiNewFileData.source,
      })
    }
    newFileParams.slideTemplateLibraryKey && atomStoreManager.set(bY, {
      type: Vf.TEMPLATE,
      libraryKey: newFileParams.slideTemplateLibraryKey,
      parentView: {
        type: Vf.ALL,
      },
    })
  }
  atomStoreManager.set(q7, false)

  // Handle autosave setup
  if (autosaveManager) {
    await autosaveManager.onConnectNewFile(newFileParams)
    await autosaveManager.session()?.restoreAutosaveIfNeeded()
  }
  else {
    logInfo("new file", "failed to get autosave")
  }

  // Restore page and viewport from URL if provided
  if (newFileParams.nodeId || newFileParams.viewport) {
    Fullscreen.restorePageAndViewportFromURL(newFileParams.nodeId ?? null, newFileParams.viewport ?? null)
  }

  // Get file info function
  let fileInfo = newFileParams
  const getFileInfo = () => {
    if (autosaveManager?.fileCreationManager?.newFileInfo) {
      fileInfo = autosaveManager?.fileCreationManager?.newFileInfo
    }
    return fileInfo
  }

  // Check if offline file creation is supported
  const isOfflineCreationSupported = newFileParams.editorType !== "slides" && autosaveManager?.managerState === "connected" && isLocksSupported && !w5()

  // Handle folder variable default modes
  if (newFileParams.folder_id) {
    variableSetDefaultModeService.getDefaultModes({
      folderId: newFileParams.folder_id,
    }).then((response) => {
      const metaData = response.data.meta
      for (const collectionKey of Object.keys(metaData)) {
        permissionScopeHandler.system("set-default-mode-from-workspace-team", () => {
          VariablesBindings.setExplicitVariableModeForSelection(collectionKey, {
            guid: metaData[collectionKey],
            collectionKey,
            extendedCollectionId: null,
          }, false)
        })
      }
    })
  }

  // Handle offline file creation with retry logic
  if (isOfflineCreationSupported) {
    let attemptCount = 0
    const startTime = performance.now()
    if (fileCreationController.isCanceled) {
      return {
        status: "canceled",
      }
    }
    const requestManager = new CancelableRequestManager(async () => {
      attemptCount++
      const params = transformNewFileParamsToApiParams(getFileInfo())
      return (await sendWithRetry.post("/api/files/create", params)).data
    })
    fileCreationController.setOnCanceled(() => requestManager.cancelRequest())
    const result = await requestManager.getResult()
    if (isCanceled(result)) {
      return {
        status: "canceled",
      }
    }
    fileCreationController.setOnCanceled(null)
    const duration = Math.round(performance.now() - startTime)
    n.offlineFileCreated(attemptCount, duration, newFileParams)
    fileCreationResponse = result
  }
  else {
    // Standard file creation
    logInfo("new file", "Offline file creation not supported", {
      editorType: newFileParams.editorType,
      autosaveState: autosaveManager?.managerState,
    })
    const params = transformNewFileParamsToApiParams(newFileParams)
    fileCreationResponse = (await sendWithRetry.post("/api/files/create", params, {
      retryCount: MAX_FILE_CREATION_RETRIES,
    })).data
  }

  // Process file creation response
  const file = fileCreationResponse.meta.fig_file
  desktopAPIInstance?.setUrl({
    url: file.url,
    fileKey: file.key,
    oldLocalFileKey: autosaveManager?.fileKey,
  })
  const fileCreationManager = autosaveManager?.fileCreationManager
  if (fileCreationManager) {
    fileCreationManager.assignPendingRealFileKey(file.key)
  }
  getFileInfo()

  // Update file name if it was changed
  if (fileInfo.fileName && fileInfo.fileName !== file.name) {
    store.dispatch(filePutAction({
      file: {
        key: file.key,
        name: fileInfo.fileName,
      },
      userInitiated: true,
    }))
    file.name = fileInfo.fileName
  }

  // Process file creation response and get file key
  const fileKey = processFileCreationResponse(store.dispatch, fileCreationResponse, newFileParams.trackingInfo, store.getState())

  // Handle editor type specific setups
  if (newFileParams.editorType === "whiteboard") {
    if (newFileParams.figjamAiNewFileData) {
      atomStoreManager.set(bJ)
      atomStoreManager.set(Ac, newFileParams.figjamAiNewFileData.prompt)
      atomStoreManager.set(D2, {
        fileKey,
        prompt: newFileParams.figjamAiNewFileData.prompt,
        useCaseCategory: newFileParams.figjamAiNewFileData.useCaseCategory,
        subtitle: newFileParams.figjamAiNewFileData.subtitle,
        stage: Zj.GENERATE_MODE,
        entrypoint: newFileParams.figjamAiNewFileData.entrypoint,
        fromGenerateModalV2: true,
        pageNodeId: "0:1",
      })
    }
    else if (newFileParams.figjamMakeSomethingUseCase) {
      atomStoreManager.set(l5, newFileParams.figjamMakeSomethingUseCase)
    }
  }
  if (newFileParams.editorType === "figmake" && newFileParams.figmakeInitialMessage && !getFeatureFlags().killswitch_make_initial_message) {
    atomStoreManager.set(lA, newFileParams.figmakeInitialMessage)
  }
  if (newFileParams.editorType === "design" && newFileParams.initialLibKey) {
    const libraryKey = newFileParams.initialLibKey
    store.dispatch(handleFileLibrarySubscription({
      libraryFileSubscription: {
        file_key: fileKey,
        library_key: libraryKey,
        is_subscribed: true,
      },
      userInitiated: true,
      fileSubscribedLibraryKeys: new Set(),
    }))
    trackEventAnalytics("Library File Enabled", {
      fileKey,
      fileTeamId: fileInfo.team_id,
      fileOrgId: fileInfo.org_id,
      libraryKey: newFileParams.initialLibKey,
      entryPoint: "community_resource_detail_page",
    }, {
      forwardToDatadog: true,
    })
    store.dispatch(setLeftPanelTab({
      tab: UserInterfaceElements.ASSETS,
      persist: true,
    }))
    atomStoreManager.set(defaultLibraryKeyAtom, libraryKey)
  }
  logInfo("new file", "Received file key for new file", {
    fileKey,
  })

  // Load and open file in fullscreen
  await loadAndOpenFileInFullscreen(store, fileKey, mapFileTypeToEditorType(newFileParams.editorType), isOfflineCreationSupported)
  await autosaveManager?.assignFileKeyForLocalFile(file.key)
  if (newFileParams.callback) {
    newFileParams.callback(fileKey)
  }
  return {
    status: "success",
  }
}

/**
 * File creation analytics and logging utilities.
 * Original name: n
 */
const fileCreationAnalytics = {
  /**
   * Logs the start of file creation process.
   */
  fileCreationStarted(params: any): void {
    trackEventAnalytics("File Creation Start", {
      editorType: params.editorType,
      from: params.trackingInfo?.from,
      triggerElement: params.trackingInfo?.triggerElement,
      selectedView: params.trackingInfo?.selectedView?.view,
      offline: !navigator.onLine,
      webLocksAvailable: isLocksSupported,
    })
    logInfo("new file", "Creating a new file", {
      editorType: params.editorType,
      from: params.trackingInfo?.from,
      selectedView: params.trackingInfo?.selectedView?.view,
    })
  },
  /**
   * Logs offline file creation statistics.
   */
  offlineFileCreated(attemptCount: number, duration: number, params: any): void {
    if (attemptCount > MAX_FILE_CREATION_RETRIES) {
      (async () => {
        const session = getAutosaveManagerInstance()?.session()
        const nodeChangeCount = session ? await session.getNodeChangeCount().catch(() => 0) : 0
        const fileInfo = getAutosaveFileInfo()
        trackEventAnalytics("Offline File Creation", {
          editorType: params.editorType,
          requestDuration: duration,
          requestAttempts: attemptCount,
          nodeChangeCount,
          hasChangedMetadata: fileInfo?.hasChangedMetadata,
        }, {
          forwardToDatadog: true,
        })
      })().catch(() => {})
    }
  },
  /**
   * Logs file creation failures.
   */
  fileCreationFailed(message: string, error: any, hasPersistedUserChanges: boolean, result: string, params: any): void {
    const status = error instanceof XHRError ? error.status : undefined
    logError("new file", "failed to create new file", {
      msg: message,
      status,
      hasPersistedUserChanges,
    })
    trackEventAnalytics("File Creation Failure", {
      editorType: params.editorType,
      msg: message,
      status,
      offline: !navigator.onLine,
      hasPersistedUserChanges,
      result,
      from: params.trackingInfo?.from,
      selectedView: params.trackingInfo?.selectedView?.view,
    }, {
      forwardToDatadog: true,
    })
  },
}
const MAX_FILE_CREATION_RETRIES = 2

/**
 * Initiates the new file creation process.
 * Original name: initiateNewFileCreation
 */
export function initiateNewFileCreation(store: any, newFileParams: any, shouldHideUI: boolean): void {
  let autosaveManager
  if (getFileCreationManager()) {
    logWarning("new file", "File creation already in progress")
    return
  }
  const fileCreationController = startFileCreation()
  fileCreationAnalytics.fileCreationStarted(newFileParams)
  const user = store.getState().user
  if (user) {
    const localFileKey = newFileParams.localFileKey ?? createLocalFileKey(generateUUIDv4)
    autosaveManager = setupAutosaveManager(localFileKey, user.id)
  }
  else {
    logInfo("Autosave", "Not creating manager for logged out user")
  }
  handleNewFileCreation(store, newFileParams, fileCreationController, shouldHideUI, autosaveManager).catch(error => ({
    status: "error",
    error,
  })).then(async (result) => {
    if (result.status === "canceled") {
      await destroyAutosaveManager()
    }
    else if (result.status === "error") {
      const {
        error,
      } = result
      const errorMessage = getNewDocumentErrorMessage(error)
      const hasPersistedChanges = !!(await autosaveManager?.session()?.hasPersistedUserChanges())
      const failureResult = hasPersistedChanges ? "show_banner" : "exit_editor"
      fileCreationAnalytics.fileCreationFailed(errorMessage, error, hasPersistedChanges, failureResult, newFileParams)
      if (failureResult === "show_banner") {
        logInfo("new file", "Leaving editor open because file has unsynced persisted changes.")
        store.dispatch(FlashActions.error(errorMessage))
        store.dispatch(showFileCreationFailureBanner())
      }
      else {
        if (user && autosaveManager) {
          const fileKey = autosaveManager.fileKey
          if (isLocalFileKey(fileKey)) {
            await checkFileHasUnsyncedAutosave(user.id, fileKey)
          }
        }
        await destroyAutosaveManager()
        store.dispatch(FlashActions.error(errorMessage))
        store.dispatch(selectViewAction({
          view: "recentsAndSharing",
        }))
        const teamsState = store.getState().teams
        const currentTeamId = store.getState().currentTeamId
        const team = teamsState[currentTeamId ?? ""]
        if (team && team.starter_team && newFileParams.editorType === "sites" && _$$M) {
          store.dispatch(showModalHandler({
            type: _$$M,
            data: {
              team,
            },
          }))
        }
        else if (team && team.starter_team && newFileParams.editorType === "figmake" && isBakeStarterPaywallEnabledWithoutLimit()) {
          store.dispatch(showModalHandler({
            type: _$$i,
            data: {
              team,
            },
          }))
        }
        if (desktopAPIInstance) {
          desktopAPIInstance.showFileBrowser(errorMessage)
          desktopAPIInstance.close({
            suppressReopening: true,
            shouldForceClose: true,
          })
        }
      }
      if (newFileParams.callback) {
        newFileParams.callback(null)
      }
    }
  }).finally(() => {
    completeFileCreation()
    logInfo("new file", "finished creating new file")
  })
  const selectedView = store.getState().selectedView
  store.dispatch(selectViewAction({
    view: "fullscreen",
    fileKey: undefined,
    framePresetName: newFileParams.framePresetName,
    editorType: mapFileTypeToEditorType(newFileParams.editorType),
    canNavigateDesktopNewTab: newFileParams.allowOnDesktop,
    nodeId: newFileParams.nodeId,
    localFileName: newFileParams.fileName,
    prevSelectedView: selectedView.view === "recentsAndSharing" || selectedView.view === "folder" ? selectedView : undefined,
  }))
}

/**
 * Creates a new file via desktop API.
 * Original name: createNewFileViaDesktopAPI
 */
export function createNewFileViaDesktopAPI(store: any, newFileParams: any): void {
  if (!desktopAPIInstance) {
    return
  }
  if (!newFileParams.localFileKey) {
    newFileParams.localFileKey = createLocalFileKey(generateUUIDv4)
  }
  const apiParams = {
    ...transformNewFileParamsToApiParams(newFileParams),
  }
  const userId = store.getState().user?.id
  if (userId) {
    apiParams.fuid = userId
  }
  const queryString = serializeQuery(apiParams)
  const url = new URL(`/file/new?${queryString}`, document.baseURI)

  // Clone tracking info to avoid mutation
  let trackingInfo = newFileParams.trackingInfo
    ? {
        ...newFileParams.trackingInfo,
      }
    : null
  try {
    if (trackingInfo?.selectedView) {
      structuredClone(trackingInfo.selectedView)
    }
  }
  catch {
    if (trackingInfo?.selectedView) {
      trackingInfo.selectedView = {
        view: trackingInfo.selectedView.view,
      }
    }
  }
  const fileCreationParams = {
    ...newFileParams,
    trackingInfo,
    callback: undefined,
  }
  const isFromNewTabPage = store.getState().selectedView.view === "desktopNewTab"
  desktopAPIInstance.createFile({
    url: url.href,
    newFileInfo: fileCreationParams,
    editorType: newFileParams.editorType,
    isFromNewTabPage,
  }).then(({
    fileKey,
  }) => {
    if (newFileParams.callback) {
      newFileParams.callback(fileKey)
    }
  }).catch((error) => {
    console.error(error)
  })
}

/**
 * Creates a new frame preset.
 * Original name: createNewFramePreset
 */
export function createNewFramePreset(presetKey: string): void {
  const preset = presetKey && $W[presetKey]
  if (preset) {
    const frameName = `${preset.name} -`
    Fullscreen.createFrame(frameName, preset.width, preset.height, SideType.RIGHT, true)
    fullscreenValue.triggerAction("zoom-to-fit")
    PrototypingTsApi.updateCurrentPagePrototypeDeviceIfNecessary()
  }
}

/**
 * Maps editor type to a tag for logging.
 * Original name: mapEditorTypeToLoggingTag
 */
export function mapEditorTypeToLoggingTag(editorType: FEditorType): string | undefined {
  return editorType === FEditorType.DevHandoff ? "dev_mode" : undefined
}
export const J5 = createNewFileViaDesktopAPI
export const Sp = createNewFileWithRetry
export const _I = transformNewFileParamsToApiParams
export const DH = mapEditorTypeToLoggingTag
export const U_ = initializeFullscreenForNewFile
export const OZ = loadAndOpenFileInFullscreen
export const zR = trackFullscreenFileOpened
export const rJ = createNewFramePreset
export const $N = initiateNewFileCreation
export const OX = getNewDocumentErrorMessage
export const BL = trackFileOpenedAndHandleMode
export const an = getErrorMessage

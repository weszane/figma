import { DESKTOP_API_FEATURES } from '../905/82315'
import { getLastUsedEditorType } from '../905/298923'
import { getFeatureFlags } from '../905/601108'
import { isFigmaBetaOrDev } from '../905/981904'
import { mapEditorTypeToString } from '../figma_app/53721'

// Original class name: $$l0
/**
 * DesktopAPI class handles interactions with the desktop API, including version checks, file operations, audio, and more.
 */
export class DesktopAPI {
  private api: any

  /**
   * Constructor for DesktopAPI.
   * @param api - The API instance.
   */
  constructor(api: any) {
    this.api = api
  }

  // Version and Feature Checks
  /**
   * Gets the API version.
   * @returns The version string.
   */
  getVersion(): string {
    return this.api.version
  }

  /**
   * Checks if a feature is available.
   * @param feature - The feature name.
   * @returns True if the feature is available.
   * @throws Error if the feature is unknown.
   */
  hasFeature(feature: string): boolean {
    if (!DESKTOP_API_FEATURES[feature]) {
      throw new Error(`hasFeature: unknown feature '${feature}'`)
    }
    return this.api.version >= DESKTOP_API_FEATURES[feature] || this.api.backportedApiFeatures?.includes(feature) || false
  }

  /**
   * Gets the OS version if the feature is available.
   * @returns The OS version or undefined.
   */
  getOSVersion(): string | undefined {
    if (this.hasFeature('addOsVersion')) {
      return this.api.osVersion
    }
  }

  /**
   * Checks if the app is in beta or dev mode.
   * @returns True if beta or dev.
   */
  get beta(): boolean {
    return isFigmaBetaOrDev()
  }

  /**
   * Gets the informational version.
   * @returns The app version or fallback.
   */
  getInformationalVersion(): string {
    if (this.api.appVersion) {
      return this.api.appVersion
    }
    const match = navigator.userAgent.match(/Figma\/(\S+)/)
    return match && match.length === 2 ? match[1] : 'dev'
  }

  /**
   * Gets the client ID.
   * @returns The client ID.
   */
  getClientID(): string {
    return this.api.clientID
  }

  /**
   * Gets the count of concurrent loading tabs.
   * @returns The count.
   */
  getConcurrentLoadingTabsCount(): number {
    return this.api.concurrentLoadingTabsCount
  }

  /**
   * Checks if the tab was opened as part of initial startup.
   * @returns True if it was.
   */
  tabWasOpenedAsPartOfInitialStartup(): boolean {
    return this.api.concurrentLoadingTabsCount !== undefined
  }

  /**
   * Checks if this is a file browser tab.
   * @returns True if file browser tab.
   */
  isFileBrowserTab(): boolean {
    return this.api.fileBrowser
  }

  // System and Performance
  /**
   * Gets CPU usage.
   * @returns Promise resolving to CPU usage.
   */
  getCPUUsage(): Promise<any> {
    return this.api.promiseMessage('getCPUUsage')
  }

  /**
   * Gets display metadata.
   * @param size - The thumbnail size.
   * @returns Promise resolving to metadata.
   */
  getDisplayMetadata(size: { width: number, height: number }): Promise<any> {
    return this.api.promiseMessage('getDisplayMetadata', {
      thumbnailWidth: size.width,
      thumbnailHeight: size.height,
    })
  }

  /**
   * Sets the message handler.
   * @param handler - The handler function.
   */
  setMessageHandler(handler: any): void {
    this.api.setMessageHandler(handler)
  }

  // Fonts
  /**
   * Gets fonts.
   * @param direct - Whether to get directly.
   * @returns Promise resolving to fonts.
   */
  getFonts(direct: boolean = true): Promise<any> {
    return this.api.promiseMessage('getFonts', { direct })
  }

  /**
   * Gets a font file.
   * @param path - The font path.
   * @param postscript - The postscript name.
   * @returns Promise resolving to Uint8Array.
   */
  getFontFile(path: string, postscript: string): Promise<Uint8Array> {
    return this.api.promiseMessage('getFontFile', { path, postscript }).then((data: any) => new Uint8Array(data))
  }

  /**
   * Gets a font preview.
   * @param path - The font path.
   * @param size - The size.
   * @param postscript - The postscript name.
   * @param family - The family.
   * @param style - The style.
   * @returns Promise resolving to preview.
   */
  getFontPreview(path: string, size: number, postscript: string, family: string, style: string): Promise<any> {
    return this.api.promiseMessage('getFontPreview', { path, size, postscript, family, style })
  }

  /**
   * Gets the modified time for fonts.
   * @returns Promise resolving to modified time.
   */
  getFontsModifiedAt(): Promise<any> {
    return this.api.promiseMessage('getFontsModifiedAt')
  }

  /**
   * Gets modified fonts.
   * @returns Promise resolving to modified fonts.
   */
  getModifiedFonts(): Promise<any> {
    return this.api.promiseMessage('getModifiedFonts')
  }

  // Clipboard
  /**
   * Gets clipboard data.
   * @param formats - The formats.
   * @returns Promise resolving to data.
   */
  getClipboardData(formats: any): Promise<any> {
    return this.api.promiseMessage('getClipboardData', { formats })
  }

  // File Operations
  /**
   * Opens a file.
   * @param params - File parameters.
   */
  openFile(params: {
    fileKey: string
    title: string
    fileEditorType: string
    target: any
    isBranch: boolean
    isLibrary: boolean
    isTeamTemplate: boolean
    userId: string
  }): void {
    let editorType = params.fileEditorType
    if (editorType === 'design') {
      editorType = mapEditorTypeToString(getLastUsedEditorType())
    }
    this.api.postMessage('openFile', {
      fileKey: params.fileKey,
      title: params.title,
      editorType,
      target: params.target,
      isBranch: params.isBranch,
      isLibrary: params.isLibrary,
      isTeamTemplate: params.isTeamTemplate,
      userId: params.userId,
    })
  }

  /**
   * Opens a prototype.
   * @param fileKey - The file key.
   * @param pageId - The page ID.
   * @param title - The title.
   * @param target - The target.
   * @param userId - The user ID.
   */
  openPrototype(fileKey: string, pageId: string, title: string, target: string, userId: string): void {
    this.api.postMessage('openPrototype', { fileKey, pageId, userId, title, target })
  }

  /**
   * Checks if a tab is open.
   * @param url - The URL.
   * @returns Promise resolving to boolean.
   */
  isTabOpen(url: string): Promise<boolean> {
    return this.api.promiseMessage('isTabOpen', { url })
  }

  /**
   * Opens community.
   * @param path - The path.
   * @param userId - The user ID.
   */
  openCommunity(path: string, userId: string): void {
    this.api.postMessage('openCommunity', { path, userId })
  }

  /**
   * Opens a file from a new tab.
   * @param params - File parameters.
   */
  openFileFromNewTab(params: {
    url: string
    fileEditorType: string
    title: string
    isBranch: boolean
    isLibrary: boolean
    isTeamTemplate: boolean
  }): void {
    let editorType = params.fileEditorType
    if (editorType === 'design') {
      editorType = mapEditorTypeToString(getLastUsedEditorType())
    }
    this.api.postMessage('openFileFromNewTab', {
      url: params.url,
      editorType,
      title: params.title,
      isBranch: params.isBranch,
      isLibrary: params.isLibrary,
      isTeamTemplate: params.isTeamTemplate,
    })
  }

  /**
   * Creates a new file.
   * @param params - File creation parameters.
   * @returns Promise resolving to result.
   */
  createFile(params: {
    url: string
    newFileInfo: any
    editorType: string
    isFromNewTabPage: boolean
  }): Promise<any> {
    return this.api.promiseMessage('createFile', params)
  }

  /**
   * Closes the tab.
   * @param params - Close parameters.
   */
  close(params: { suppressReopening: boolean, shouldForceClose: boolean }): void {
    this.api.postMessage('close', params)
  }

  /**
   * Adds tab analytics metadata.
   * @param info - The metadata.
   */
  addTabAnalyticsMetadata(info: any): void {
    this.api.postMessage('addTabAnalyticsMetadata', { info })
  }

  /**
   * Sets the title.
   * @param title - The title.
   * @param timer - The timer.
   */
  setTitle(title: string, timer: string): void {
    if (this.hasFeature('uncoupleFigjamTimerFromTabTitle')) {
      this.api.postMessage('setTitle', { title, timer })
    }
    else {
      this.api.postMessage('setTitle', { title: `${timer}${title}` })
    }
  }

  /**
   * Sets fullscreen mode.
   * @param fullscreen - Whether fullscreen.
   */
  setFullScreen(fullscreen: boolean): void {
    this.api.postMessage('setFullScreen', { fullscreen })
  }

  /**
   * Sets the URL.
   * @param params - URL parameters.
   */
  setUrl(params: { url: string, fileKey: string, oldLocalFileKey: string }): void {
    this.api.postMessage('setUrl', params)
  }

  /**
   * Sets the editor type.
   * @param editorType - The editor type.
   */
  setEditorType(editorType: string): void {
    this.api.postMessage('setEditorType', { editorType })
  }

  /**
   * Sets the realtime token.
   * @param params - Token parameters.
   */
  setRealtimeToken(params: { realtimeToken: string, fileKey: string }): void {
    this.api.postMessage('setRealtimeToken', params)
  }

  /**
   * Sets loading state.
   * @param loading - Whether loading.
   */
  setLoading(loading: boolean): void {
    this.api.postMessage('setLoading', { loading })
  }

  /**
   * Sets tab preview data.
   * @param data - The data.
   */
  setTabPreviewData(data: any): void {
    this.api.postMessage('setTabPreviewData', { data })
  }

  /**
   * Sets edit file permissions.
   * @param canEdit - Whether can edit.
   */
  setEditFilePermissions(canEdit: boolean): void {
    this.api.postMessage('setEditFilePermissions', { canEdit })
  }

  /**
   * Handles tab title rename.
   * @param newTitle - The new title.
   */
  handleTabTitleRename(newTitle: string): void {
    this.api.postMessage('handleTabTitleRename', { newTitle })
  }

  // MCP (likely Machine Learning or similar)
  /**
   * Sends MCP result.
   * @param queryId - The query ID.
   * @param result - The result.
   */
  sendMCPResult(queryId: string, result: any): void {
    this.api.postMessage('sendMCPResult', { queryId, result })
  }

  /**
   * Sends MCP image result.
   * @param queryId - The query ID.
   * @param result - The result.
   */
  sendMCPImageResult(queryId: string, result: any): void {
    this.api.postMessage('sendMCPImageResult', { queryId, result })
  }

  /**
   * Sets enable MCP.
   * @param enabled - Whether enabled.
   * @param port - The port.
   * @param callback - Optional callback.
   * @returns Promise resolving to result.
   */
  setEnableMCP(enabled: boolean, port: number, callback: () => void = () => { }): Promise<any> {
    if (this.hasFeature('addCodegenMCPStartupBinding')) {
      if (enabled)
        callback()
      return this.api.promiseMessage('setEnableMCP', { enabled, port })
    }
    return Promise.resolve({ didStart: false, wasAlreadyRunning: false, port: 0 })
  }

  /**
   * Sends MCP update.
   * @param updateType - The update type.
   * @param args - The arguments.
   */
  sendMCPUpdate(updateType: string, args: any): void {
    if (this.hasFeature('addMcpUpdateSupport')) {
      this.api.postMessage('sendMCPUpdate', { updateType, args })
    }
  }

  // Status and Settings
  /**
   * Sets saved state.
   * @param saved - Whether saved.
   */
  setSaved(saved: boolean): void {
    this.api.postMessage('setSaved', { saved })
  }

  /**
   * Sets merging status.
   * @param mergingStatus - The status.
   */
  setMergingStatus(mergingStatus: any): void {
    this.api.postMessage('setMergingStatus', { mergingStatus })
  }

  /**
   * Sets importing state.
   * @param isImporting - Whether importing.
   */
  setIsImporting(isImporting: boolean): void {
    this.api.postMessage('setIsImporting', { isImporting })
  }

  /**
   * Sets authed users.
   * @param userIDs - The user IDs.
   */
  setAuthedUsers(userIDs: any): void {
    if (this.isFileBrowserTab()) {
      this.api.postMessage('setAuthedUsers', { userIDs })
    }
  }

  /**
   * Sets initial options.
   * @param params - Options parameters.
   */
  setInitialOptions(params: {
    userId: string
    orgId: string
    teamId: string
    navigationConfig: any
  }): void {
    this.api.postMessage('setInitialOptions', params)
  }

  /**
   * Initializes livegraph.
   * @param params - Livegraph parameters.
   */
  initLivegraph(params: {
    userId: string
    figmaCookieName: string
    isDesktopLivegraphClientEnabled: boolean
    allPlans: any
  }): void {
    const enabled = this.hasFeature('addVersionCheckForDesktopLGClient') && params.isDesktopLivegraphClientEnabled
    if (this.hasFeature('addAllPlansToInitLivegraphBinding')) {
      this.api.postMessage('initLivegraph', {
        userId: params.userId,
        figmaCookieName: params.figmaCookieName,
        isDesktopLivegraphClientEnabled: enabled,
        allPlans: params.allPlans,
      })
    }
    else if (this.hasFeature('addInitLivegraphBinding')) {
      this.api.postMessage('initLivegraph', {
        userId: params.userId,
        figmaCookieName: params.figmaCookieName,
        isDesktopLivegraphClientEnabled: enabled,
      })
    }
  }

  /**
   * Initializes FCM.
   * @param params - FCM parameters.
   */
  initializeFCM(params: {
    appId: string
    apiKey: string
    projectId: string
    vapidKey: string
    userId: string
  }): void {
    if (this.hasFeature('addInitializeFCM') && (getFeatureFlags().desktop_fcm_notifications || getFeatureFlags().desktop_fcm_shadow_mode)) {
      this.api.postMessage('initializeFCM', params)
    }
  }

  /**
   * Sets is branch.
   * @param isBranch - Whether branch.
   */
  setIsBranch(isBranch: boolean): void {
    this.api.postMessage('setIsBranch', { isBranch })
  }

  /**
   * Sets is library.
   * @param isLibrary - Whether library.
   */
  setIsLibrary(isLibrary: boolean): void {
    this.api.postMessage('setIsLibrary', { isLibrary })
  }

  /**
   * Sets is team template.
   * @param isTeamTemplate - Whether team template.
   */
  setIsTeamTemplate(isTeamTemplate: boolean): void {
    this.api.postMessage('setIsTeamTemplate', { isTeamTemplate })
  }

  // Audio and Voice
  /**
   * Sets captions enabled.
   * @param captionsEnabled - Whether enabled.
   */
  setCaptionsEnabled(captionsEnabled: boolean): void {
    this.api.postMessage('setCaptionsEnabled', { captionsEnabled })
  }

  /**
   * Gets captions enabled.
   * @returns Promise resolving to boolean.
   */
  getCaptionsEnabled(): Promise<boolean> {
    return this.api.promiseMessage('getCaptionsEnabled')
  }

  /**
   * Opens audio stream.
   * @param streamID - The stream ID.
   */
  audioStreamOpen(streamID: string): void {
    this.api.postMessage('audioStreamOpen', { streamID })
  }

  /**
   * Closes audio stream.
   * @param streamID - The stream ID.
   */
  audioStreamClose(streamID: string): void {
    this.api.postMessage('audioStreamClose', { streamID })
  }

  /**
   * Sinks audio stream.
   * @param streamID - The stream ID.
   * @param samples - The samples.
   */
  audioStreamSink(streamID: string, samples: any): void {
    this.api.postMessage('audioStreamSink', { streamID, samples })
  }

  /**
   * Sets is in voice call.
   * @param isInVoiceCall - Whether in call.
   */
  setIsInVoiceCall(isInVoiceCall: boolean): void {
    this.api.postMessage('setIsInVoiceCall', { isInVoiceCall })
  }

  /**
   * Sets using microphone.
   * @param isUsingMicrophone - Whether using mic.
   */
  setUsingMicrophone(isUsingMicrophone: boolean): void {
    this.api.postMessage('setUsingMicrophone', { isUsingMicrophone })
  }

  /**
   * Adds allowed plugin origin.
   * @param pluginOrigin - The origin.
   * @returns Promise resolving to result.
   */
  addAllowedPluginOrigin(pluginOrigin: string): Promise<any> {
    return this.api.promiseMessage('addAllowedPluginOrigin', { pluginOrigin })
  }

  /**
   * Removes allowed plugin origin.
   * @param pluginOrigin - The origin.
   * @returns Promise resolving to result.
   */
  removeAllowedPluginOrigin(pluginOrigin: string): Promise<any> {
    return this.api.promiseMessage('removeAllowedPluginOrigin', { pluginOrigin })
  }

  /**
   * Requests microphone permission.
   * @returns Promise resolving to result.
   */
  requestMicrophonePermission(): Promise<any> {
    return this.api.promiseMessage('requestMicrophonePermission')
  }

  /**
   * Requests camera and/or microphone permissions.
   * @param params - Permission parameters.
   */
  requestCameraAndOrMicrophonePermissions(params: any): void {
    this.api.postMessage('requestCameraAndOrMicrophonePermissions', params)
  }

  // Workspace and Features
  /**
   * Sets workspace properties.
   * @param properties - The properties.
   */
  setWorkspaceProperties(properties: any): void {
    if (this.isFileBrowserTab()) {
      const props = { ...properties }
      if (!this.hasFeature('removeWorkspaceName')) {
        props.name = ''
      }
      if (!this.hasFeature('removeIsFigJamEnabled')) {
        props.isFigJamEnabled = false
      }
      this.api.postMessage('setWorkspaceProperties', props)
    }
  }

  /**
   * Sets feature flags.
   * @param featureFlags - The flags.
   */
  setFeatureFlags(featureFlags: any): void {
    this.api.postMessage('setFeatureFlags', { featureFlags })
  }

  /**
   * Sets default editor type.
   * @param editorType - The type.
   */
  setDefaultEditorType(editorType: string): void {
    this.api.postMessage('setDefaultEditorType', { editorType })
  }

  /**
   * Updates cached contains widget.
   * @param state - The state.
   */
  updateCachedContainsWidget(state: any): void {
    this.api.postMessage('updateCachedContainsWidget', { state })
  }

  /**
   * Updates fullscreen menu state.
   * @param state - The state.
   */
  updateFullscreenMenuState(state: any): void {
    this.api.postMessage('updateFullscreenMenuState', { state })
  }

  /**
   * Shows file browser.
   * @param flashErrorMessage - Whether to flash error.
   */
  showFileBrowser(flashErrorMessage: boolean): void {
    this.api.postMessage('showFileBrowser', { flashErrorMessage })
  }

  /**
   * Starts app auth.
   * @param grantPath - The grant path.
   */
  startAppAuth(grantPath: string): void {
    this.api.postMessage('startAppAuth', { grantPath })
  }

  /**
   * Finishes app auth.
   * @param redirectURL - The redirect URL.
   */
  finishAppAuth(redirectURL: string): void {
    this.api.postMessage('finishAppAuth', { redirectURL })
  }

  // File System
  /**
   * Writes files.
   * @param files - The files.
   */
  writeFiles(files: any): void {
    this.api.postMessage('writeFiles', { files })
  }

  /**
   * Writes file to path.
   * @param path - The path.
   * @param blob - The blob.
   * @param denyOverwritingFiles - Whether to deny overwriting.
   * @returns Promise resolving to result.
   */
  writeFileToPath(path: string, blob: any, denyOverwritingFiles: boolean): Promise<any> {
    return this.api.promiseMessage('writeFileToPath', { path, blob, denyOverwritingFiles })
  }

  // Extensions
  /**
   * Creates multiple new local file extensions.
   * @param options - The options.
   * @param depth - The depth.
   * @returns Promise resolving to result.
   */
  createMultipleNewLocalFileExtensions(options: any, depth: number): Promise<any> {
    return this.api.promiseMessage('createMultipleNewLocalFileExtensions', { options, depth })
  }

  /**
   * Gets local manifest file extension IDs to cached contains widget map.
   * @returns Promise resolving to map.
   */
  getLocalManifestFileExtensionIdsToCachedContainsWidgetMap(): Promise<any> {
    return this.api.promiseMessage('getLocalManifestFileExtensionIdsToCachedContainsWidgetMap')
  }

  /**
   * Gets local manifest file extension IDs to cached metadata map.
   * @returns Promise resolving to map.
   */
  getLocalManifestFileExtensionIdsToCachedMetadataMap(): Promise<any> {
    return this.api.promiseMessage('getLocalManifestFileExtensionIdsToCachedMetadataMap')
  }

  /**
   * Gets all local file extension IDs.
   * @returns Promise resolving to IDs.
   */
  getAllLocalFileExtensionIds(): Promise<any> {
    return this.api.promiseMessage('getAllLocalManifestFileExtensionIds')
  }

  /**
   * Gets local file extension manifest.
   * @param id - The ID.
   * @returns Promise resolving to manifest.
   */
  getLocalFileExtensionManifest(id: string): Promise<any> {
    return this.api.promiseMessage('getLocalFileExtensionManifest', { id })
  }

  /**
   * Gets local file extension source.
   * @param id - The ID.
   * @returns Promise resolving to source.
   */
  getLocalFileExtensionSource(id: string): Promise<any> {
    return this.api.promiseMessage('getLocalFileExtensionSource', { id })
  }

  /**
   * Removes local file extension.
   * @param id - The ID.
   */
  removeLocalFileExtension(id: string): void {
    this.api.postMessage('removeLocalFileExtension', { id })
  }

  /**
   * Opens extension directory.
   * @param id - The ID.
   */
  openExtensionDirectory(id: string): void {
    this.api.postMessage('openExtensionDirectory', { id })
  }

  /**
   * Opens extension manifest.
   * @param id - The ID.
   */
  openExtensionManifest(id: string): void {
    this.api.postMessage('openExtensionManifest', { id })
  }

  /**
   * Writes new extension to disk.
   * @param name - The name.
   * @param files - The files.
   * @returns Promise resolving to result.
   */
  writeNewExtensionToDisk(name: string, files: any): Promise<any> {
    return this.api.promiseMessage('writeNewExtensionDirectoryToDisk', {
      dir: { name, files, dirs: [] },
    })
  }

  /**
   * Writes new extension directory to disk.
   * @param dir - The directory.
   * @returns Promise resolving to result.
   */
  writeNewExtensionDirectoryToDisk(dir: any): Promise<any> {
    return this.api.promiseMessage('writeNewExtensionDirectoryToDisk', { dir })
  }

  // Dev Tools
  /**
   * Opens dev tools.
   * @param mode - The mode.
   * @returns Promise resolving to result.
   */
  openDevTools(mode: string): Promise<any> {
    return this.api.postMessage('openDevTools', { mode })
  }

  /**
   * Closes dev tools.
   * @returns Promise resolving to result.
   */
  closeDevTools(): Promise<any> {
    return this.api.postMessage('closeDevTools')
  }

  /**
   * Checks if dev tools are opened.
   * @returns Promise resolving to boolean.
   */
  isDevToolsOpened(): Promise<boolean> {
    return this.api.promiseMessage('isDevToolsOpened')
  }

  /**
   * Registers manifest change observer.
   * @param callback - The callback.
   * @returns The registration result.
   */
  registerManifestChangeObserver(callback: any): any {
    return this.api.registerCallback('registerManifestChangeObserver', undefined, callback)
  }

  /**
   * Registers code change observer.
   * @param callback - The callback.
   * @returns The registration result.
   */
  registerCodeChangeObserver(callback: any): any {
    return this.api.registerCallback('registerCodeChangeObserver', undefined, callback)
  }

  /**
   * Registers UI change observer.
   * @param callback - The callback.
   * @returns The registration result.
   */
  registerUiChangeObserver(callback: any): any {
    return this.api.registerCallback('registerUiChangeObserver', undefined, callback)
  }

  // UI and Preferences
  /**
   * Sets tab color.
   * @param color - The color.
   */
  setTabColor(color: any): void {
    this.api.postMessage('setTabColor', { color })
  }

  /**
   * Sets theme preference.
   * @param themePreference - The preference.
   */
  setThemePreference(themePreference: any): void {
    this.api.postMessage('setThemePreference', { themePreference })
  }

  /**
   * Sets enhanced contrast.
   * @param enhancedContrast - Whether enhanced.
   */
  setEnhancedContrast(enhancedContrast: boolean): void {
    if (this.hasFeature('enhancedContrast')) {
      this.api.postMessage('setEnhancedContrast', { enhancedContrast })
    }
  }

  /**
   * Gets zoom factor.
   * @returns Promise resolving to factor.
   */
  getZoomFactor(): Promise<any> {
    return this.api.promiseMessage('getZoomFactor')
  }

  /**
   * Gets keyboard layout.
   * @returns Promise resolving to layout.
   */
  getKeyboardLayout(): Promise<any> {
    return this.api.promiseMessage('getKeyboardLayout')
  }

  /**
   * Sets locales.
   * @param locales - The locales.
   */
  setLocales(locales: any): void {
    this.api.postMessage('setLocales', { locales })
  }

  // Spelling
  /**
   * Corrects spelling.
   * @param word - The word.
   * @param language - The language.
   * @returns Promise resolving to correction.
   */
  spellingCorrect(word: string, language: string = ''): Promise<any> {
    return this.api.promiseMessage('spellingCorrect', { word, language })
  }

  /**
   * Checks spelling.
   * @param text - The text.
   * @param language - The language.
   * @returns Promise resolving to result.
   */
  spellingCheckSpelling(text: string, language: string = ''): Promise<any> {
    return this.api.promiseMessage('spellingCheckSpelling', { text, language })
  }

  /**
   * Suggests spelling.
   * @param word - The word.
   * @param language - The language.
   * @returns Promise resolving to suggestions.
   */
  spellingSuggest(word: string, language: string = ''): Promise<any> {
    return this.api.promiseMessage('spellingSuggest', { word, language })
  }

  /**
   * Adds word to spelling.
   * @param word - The word.
   * @param language - The language.
   * @returns Promise resolving to result.
   */
  spellingAdd(word: string, language: string = ''): Promise<any> {
    return this.api.promiseMessage('spellingAdd', { word, language })
  }

  /**
   * Ignores words in spelling.
   * @param words - The words.
   * @param language - The language.
   * @returns Promise resolving to result.
   */
  spellingIgnore(words: any, language: string = ''): Promise<any> {
    return this.api.promiseMessage('spellingIgnoreWords', { words, language })
  }

  /**
   * Sets spelling language.
   * @param language - The language.
   * @returns Promise resolving to result.
   */
  spellingSetLanguage(language: string): Promise<any> {
    return this.api.promiseMessage('spellingSetLanguage', { language })
  }

  /**
   * Gets spelling languages.
   * @returns Promise resolving to languages.
   */
  spellingGetLanguages(): Promise<any> {
    return this.api.promiseMessage('spellingGetLanguages')
  }

  // Haptics and Display
  /**
   * Triggers haptic feedback.
   * @param type - The type.
   * @param count - The count.
   * @param intervalMs - The interval.
   * @returns Promise resolving to result.
   */
  triggerHaptic(type: any, count: number, intervalMs: number): Promise<any> {
    return this.api.postMessage('triggerHaptic', { type, count, intervalMs })
  }

  /**
   * Gets color space.
   * @returns The color space.
   */
  getColorSpace(): any {
    return this.api.colorSpace
  }

  /**
   * Gets legacy color space preference.
   * @returns The preference.
   */
  getLegacyColorSpacePreference(): any {
    return this.api.legacyColorSpacePreference
  }

  /**
   * Gets active NS screens.
   * @returns Promise resolving to screens.
   */
  getActiveNSScreens(): Promise<any> {
    return this.api.promiseMessage('getActiveNSScreens')
  }

  /**
   * Updates viewport.
   * @param fileKey - The file key.
   * @param viewport - The viewport.
   * @returns Promise resolving to result.
   */
  updateViewport(fileKey: string, viewport: any): Promise<any> {
    return this.api.postMessage('updateViewport', { fileKey, viewport })
  }

  /**
   * Reports fatal error.
   * @param fileKey - The file key.
   * @param errorInfo - The error info.
   * @returns Promise resolving to result.
   */
  reportFatalError(fileKey: string, errorInfo: any): Promise<any> {
    return this.api.postMessage('reportFatalError', { fileKey, errorInfo })
  }

  /**
   * Focuses popout window.
   * @param name - The name.
   * @returns Promise resolving to result.
   */
  focusPopoutWindow(name: string): Promise<any> {
    return this.api.postMessage('focusPopoutWindow', { name })
  }

  /**
   * Checks if floating window is available.
   * @returns True if available.
   */
  isFloatingWindowAvailable(): boolean {
    return this.hasFeature('floatingWindowsV2')
  }

  /**
   * Updates color profile.
   * @param colorProfile - The profile.
   * @returns Promise resolving to result.
   */
  updateColorProfile(colorProfile: any): Promise<any> | undefined {
    if (this.hasFeature('addUpdateColorProfile')) {
      return this.api.postMessage('updateColorProfile', { colorProfile })
    }
  }
}

// Original export: export const d = $$l0
export const d = DesktopAPI

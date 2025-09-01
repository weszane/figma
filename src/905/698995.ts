import { N } from "../905/981904";
import { DESKTOP_API_FEATURES } from "../905/82315";
import { getFeatureFlags } from "../905/601108";
import { YP } from "../figma_app/53721";
import { b1 } from "../905/298923";
export class $$l0 {
  constructor(e) {
    this.api = e;
  }
  getVersion() {
    return this.api.version;
  }
  hasFeature(e) {
    if (!DESKTOP_API_FEATURES[e]) throw Error(`hasFeature: unknown feature '${e}'`);
    return this.api.version >= DESKTOP_API_FEATURES[e] || this.api.backportedApiFeatures?.includes(e) || !1;
  }
  getOSVersion() {
    if (this.hasFeature("addOsVersion")) return this.api.osVersion;
  }
  get beta() {
    return N();
  }
  getInformationalVersion() {
    if (this.api.appVersion) return this.api.appVersion;
    let e = navigator.userAgent.match(/Figma\/([^\s]+)/);
    return e && 2 === e.length ? e[1] : "dev";
  }
  getClientID() {
    return this.api.clientID;
  }
  getConcurrentLoadingTabsCount() {
    return this.api.concurrentLoadingTabsCount;
  }
  tabWasOpenedAsPartOfInitialStartup() {
    return void 0 !== this.api.concurrentLoadingTabsCount;
  }
  isFileBrowserTab() {
    return this.api.fileBrowser;
  }
  getCPUUsage() {
    return this.api.promiseMessage("getCPUUsage");
  }
  getDisplayMetadata(e) {
    return this.api.promiseMessage("getDisplayMetadata", {
      thumbnailWidth: e.width,
      thumbnailHeight: e.height
    });
  }
  setMessageHandler(e) {
    this.api.setMessageHandler(e);
  }
  getFonts(e = !0) {
    return this.api.promiseMessage("getFonts", {
      direct: e
    });
  }
  getFontFile(e, t) {
    return this.api.promiseMessage("getFontFile", {
      path: e,
      postscript: t
    }).then(e => new Uint8Array(e));
  }
  getFontPreview(e, t, i, n, r) {
    return this.api.promiseMessage("getFontPreview", {
      path: e,
      size: t,
      postscript: i,
      family: n,
      style: r
    });
  }
  getFontsModifiedAt() {
    return this.api.promiseMessage("getFontsModifiedAt");
  }
  getModifiedFonts() {
    return this.api.promiseMessage("getModifiedFonts");
  }
  getClipboardData(e) {
    return this.api.promiseMessage("getClipboardData", {
      formats: e
    });
  }
  openFile({
    fileKey: e,
    title: t,
    fileEditorType: i,
    target: n,
    isBranch: r,
    isLibrary: a,
    isTeamTemplate: l,
    userId: d
  }) {
    let c = i;
    "design" === c && (c = YP(b1()));
    this.api.postMessage("openFile", {
      fileKey: e,
      title: t,
      editorType: c,
      target: n,
      isBranch: r,
      isLibrary: a,
      isTeamTemplate: l,
      userId: d
    });
  }
  openPrototype(e, t, i, n, r) {
    this.api.postMessage("openPrototype", {
      fileKey: e,
      pageId: t,
      userId: r,
      title: i,
      target: n
    });
  }
  isTabOpen(e) {
    return this.api.promiseMessage("isTabOpen", {
      url: e
    });
  }
  openCommunity(e, t) {
    this.api.postMessage("openCommunity", {
      path: e,
      userId: t
    });
  }
  openFileFromNewTab({
    url: e,
    fileEditorType: t,
    title: i,
    isBranch: n,
    isLibrary: r,
    isTeamTemplate: a
  }) {
    let l = t;
    "design" === l && (l = YP(b1()));
    this.api.postMessage("openFileFromNewTab", {
      url: e,
      editorType: l,
      title: i,
      isBranch: n,
      isLibrary: r,
      isTeamTemplate: a
    });
  }
  createFile({
    url: e,
    newFileInfo: t,
    editorType: i,
    isFromNewTabPage: n
  }) {
    return this.api.promiseMessage("createFile", {
      url: e,
      newFileInfo: t,
      editorType: i,
      isFromNewTabPage: n
    });
  }
  close({
    suppressReopening: e,
    shouldForceClose: t
  }) {
    this.api.postMessage("close", {
      suppressReopening: e,
      shouldForceClose: t
    });
  }
  addTabAnalyticsMetadata(e) {
    this.api.postMessage("addTabAnalyticsMetadata", {
      info: e
    });
  }
  setTitle(e, t) {
    this.hasFeature("uncoupleFigjamTimerFromTabTitle") ? this.api.postMessage("setTitle", {
      title: e,
      timer: t
    }) : this.api.postMessage("setTitle", {
      title: `${t}${e}`
    });
  }
  setFullScreen(e) {
    this.api.postMessage("setFullScreen", {
      fullscreen: e
    });
  }
  setUrl({
    url: e,
    fileKey: t,
    oldLocalFileKey: i
  }) {
    this.api.postMessage("setUrl", {
      url: e,
      fileKey: t,
      oldLocalFileKey: i
    });
  }
  setEditorType(e) {
    this.api.postMessage("setEditorType", {
      editorType: e
    });
  }
  setRealtimeToken({
    realtimeToken: e,
    fileKey: t
  }) {
    this.api.postMessage("setRealtimeToken", {
      realtimeToken: e,
      fileKey: t
    });
  }
  setLoading(e) {
    this.api.postMessage("setLoading", {
      loading: e
    });
  }
  setTabPreviewData(e) {
    this.api.postMessage("setTabPreviewData", {
      data: e
    });
  }
  setEditFilePermissions(e) {
    this.api.postMessage("setEditFilePermissions", {
      canEdit: e
    });
  }
  handleTabTitleRename(e) {
    this.api.postMessage("handleTabTitleRename", {
      newTitle: e
    });
  }
  sendMCPResult(e, t) {
    this.api.postMessage("sendMCPResult", {
      queryId: e,
      result: t
    });
  }
  sendMCPImageResult(e, t) {
    this.api.postMessage("sendMCPImageResult", {
      queryId: e,
      result: t
    });
  }
  setEnableMCP(e, t, i = () => {}) {
    return this.hasFeature("addCodegenMCPStartupBinding") ? (e && i(), this.api.promiseMessage("setEnableMCP", {
      enabled: e,
      port: t
    })) : Promise.resolve({
      didStart: !1,
      wasAlreadyRunning: !1,
      port: 0
    });
  }
  sendMCPUpdate(e, t) {
    this.hasFeature("addMcpUpdateSupport") && this.api.postMessage("sendMCPUpdate", {
      updateType: e,
      args: t
    });
  }
  setSaved(e) {
    this.api.postMessage("setSaved", {
      saved: e
    });
  }
  setMergingStatus(e) {
    this.api.postMessage("setMergingStatus", {
      mergingStatus: e
    });
  }
  setIsImporting(e) {
    this.api.postMessage("setIsImporting", {
      isImporting: e
    });
  }
  setAuthedUsers(e) {
    this.isFileBrowserTab() && this.api.postMessage("setAuthedUsers", {
      userIDs: e
    });
  }
  setInitialOptions({
    userId: e,
    orgId: t,
    teamId: i,
    navigationConfig: n
  }) {
    this.api.postMessage("setInitialOptions", {
      userId: e,
      orgId: t,
      teamId: i,
      navigationConfig: n
    });
  }
  initLivegraph({
    userId: e,
    figmaCookieName: t,
    isDesktopLivegraphClientEnabled: i,
    allPlans: n
  }) {
    let r = this.hasFeature("addVersionCheckForDesktopLGClient") && i;
    this.hasFeature("addAllPlansToInitLivegraphBinding") ? this.api.postMessage("initLivegraph", {
      userId: e,
      figmaCookieName: t,
      isDesktopLivegraphClientEnabled: r,
      allPlans: n
    }) : this.hasFeature("addInitLivegraphBinding") && this.api.postMessage("initLivegraph", {
      userId: e,
      figmaCookieName: t,
      isDesktopLivegraphClientEnabled: r
    });
  }
  initializeFCM({
    appId: e,
    apiKey: t,
    projectId: i,
    vapidKey: n,
    userId: r
  }) {
    this.hasFeature("addInitializeFCM") && (getFeatureFlags().desktop_fcm_notifications || getFeatureFlags().desktop_fcm_shadow_mode) && this.api.postMessage("initializeFCM", {
      appId: e,
      apiKey: t,
      projectId: i,
      vapidKey: n,
      userId: r
    });
  }
  setIsBranch(e) {
    this.api.postMessage("setIsBranch", {
      isBranch: e
    });
  }
  setIsLibrary(e) {
    this.api.postMessage("setIsLibrary", {
      isLibrary: e
    });
  }
  setIsTeamTemplate(e) {
    this.api.postMessage("setIsTeamTemplate", {
      isTeamTemplate: e
    });
  }
  setCaptionsEnabled(e) {
    this.api.postMessage("setCaptionsEnabled", {
      captionsEnabled: e
    });
  }
  getCaptionsEnabled() {
    return this.api.promiseMessage("getCaptionsEnabled");
  }
  audioStreamOpen(e) {
    this.api.postMessage("audioStreamOpen", {
      streamID: e
    });
  }
  audioStreamClose(e) {
    this.api.postMessage("audioStreamClose", {
      streamID: e
    });
  }
  audioStreamSink(e, t) {
    this.api.postMessage("audioStreamSink", {
      streamID: e,
      samples: t
    });
  }
  setIsInVoiceCall(e) {
    this.api.postMessage("setIsInVoiceCall", {
      isInVoiceCall: e
    });
  }
  setUsingMicrophone(e) {
    this.api.postMessage("setUsingMicrophone", {
      isUsingMicrophone: e
    });
  }
  addAllowedPluginOrigin(e) {
    return this.api.promiseMessage("addAllowedPluginOrigin", {
      pluginOrigin: e
    });
  }
  removeAllowedPluginOrigin(e) {
    return this.api.promiseMessage("removeAllowedPluginOrigin", {
      pluginOrigin: e
    });
  }
  requestMicrophonePermission() {
    return this.api.promiseMessage("requestMicrophonePermission");
  }
  requestCameraAndOrMicrophonePermissions(e) {
    this.api.postMessage("requestCameraAndOrMicrophonePermissions", e);
  }
  setWorkspaceProperties(e) {
    if (this.isFileBrowserTab()) {
      let t = {
        ...e
      };
      this.hasFeature("removeWorkspaceName") || (t.name = "");
      this.hasFeature("removeIsFigJamEnabled") || (t.isFigJamEnabled = !1);
      this.api.postMessage("setWorkspaceProperties", t);
    }
  }
  setFeatureFlags(e) {
    this.api.postMessage("setFeatureFlags", {
      featureFlags: e
    });
  }
  setDefaultEditorType(e) {
    this.api.postMessage("setDefaultEditorType", {
      editorType: e
    });
  }
  updateCachedContainsWidget(e) {
    this.api.postMessage("updateCachedContainsWidget", {
      state: e
    });
  }
  updateFullscreenMenuState(e) {
    this.api.postMessage("updateFullscreenMenuState", {
      state: e
    });
  }
  showFileBrowser(e) {
    this.api.postMessage("showFileBrowser", {
      flashErrorMessage: e
    });
  }
  startAppAuth(e) {
    this.api.postMessage("startAppAuth", {
      grantPath: e
    });
  }
  finishAppAuth(e) {
    this.api.postMessage("finishAppAuth", {
      redirectURL: e
    });
  }
  writeFiles(e) {
    this.api.postMessage("writeFiles", {
      files: e
    });
  }
  writeFileToPath(e, t, i) {
    return this.api.promiseMessage("writeFileToPath", {
      path: e,
      blob: t,
      denyOverwritingFiles: i
    });
  }
  createMultipleNewLocalFileExtensions(e, t) {
    return this.api.promiseMessage("createMultipleNewLocalFileExtensions", {
      options: e,
      depth: t
    });
  }
  getLocalManifestFileExtensionIdsToCachedContainsWidgetMap() {
    return this.api.promiseMessage("getLocalManifestFileExtensionIdsToCachedContainsWidgetMap");
  }
  getLocalManifestFileExtensionIdsToCachedMetadataMap() {
    return this.api.promiseMessage("getLocalManifestFileExtensionIdsToCachedMetadataMap");
  }
  getAllLocalFileExtensionIds() {
    return this.api.promiseMessage("getAllLocalManifestFileExtensionIds");
  }
  getLocalFileExtensionManifest(e) {
    return this.api.promiseMessage("getLocalFileExtensionManifest", {
      id: e
    });
  }
  getLocalFileExtensionSource(e) {
    return this.api.promiseMessage("getLocalFileExtensionSource", {
      id: e
    });
  }
  removeLocalFileExtension(e) {
    this.api.postMessage("removeLocalFileExtension", {
      id: e
    });
  }
  openExtensionDirectory(e) {
    this.api.postMessage("openExtensionDirectory", {
      id: e
    });
  }
  openExtensionManifest(e) {
    this.api.postMessage("openExtensionManifest", {
      id: e
    });
  }
  writeNewExtensionToDisk(e, t) {
    return this.api.promiseMessage("writeNewExtensionDirectoryToDisk", {
      dir: {
        name: e,
        files: t,
        dirs: []
      }
    });
  }
  writeNewExtensionDirectoryToDisk(e) {
    return this.api.promiseMessage("writeNewExtensionDirectoryToDisk", {
      dir: e
    });
  }
  openDevTools(e) {
    return this.api.postMessage("openDevTools", {
      mode: e
    });
  }
  closeDevTools() {
    return this.api.postMessage("closeDevTools");
  }
  isDevToolsOpened() {
    return this.api.promiseMessage("isDevToolsOpened");
  }
  registerManifestChangeObserver(e) {
    return this.api.registerCallback("registerManifestChangeObserver", void 0, e);
  }
  registerCodeChangeObserver(e) {
    return this.api.registerCallback("registerCodeChangeObserver", void 0, e);
  }
  registerUiChangeObserver(e) {
    return this.api.registerCallback("registerUiChangeObserver", void 0, e);
  }
  setTabColor(e) {
    this.api.postMessage("setTabColor", {
      color: e
    });
  }
  setThemePreference(e) {
    this.api.postMessage("setThemePreference", {
      themePreference: e
    });
  }
  setEnhancedContrast(e) {
    this.hasFeature("enhancedContrast") && this.api.postMessage("setEnhancedContrast", {
      enhancedContrast: e
    });
  }
  getZoomFactor() {
    return this.api.promiseMessage("getZoomFactor");
  }
  getKeyboardLayout() {
    return this.api.promiseMessage("getKeyboardLayout");
  }
  setLocales(e) {
    this.api.postMessage("setLocales", {
      locales: e
    });
  }
  spellingCorrect(e, t = "") {
    return this.api.promiseMessage("spellingCorrect", {
      word: e,
      language: t
    });
  }
  spellingCheckSpelling(e, t = "") {
    return this.api.promiseMessage("spellingCheckSpelling", {
      text: e,
      language: t
    });
  }
  spellingSuggest(e, t = "") {
    return this.api.promiseMessage("spellingSuggest", {
      word: e,
      language: t
    });
  }
  spellingAdd(e, t = "") {
    return this.api.promiseMessage("spellingAdd", {
      word: e,
      language: t
    });
  }
  spellingIgnore(e, t = "") {
    return this.api.promiseMessage("spellingIgnoreWords", {
      words: e,
      language: t
    });
  }
  spellingSetLanguage(e) {
    return this.api.promiseMessage("spellingSetLanguage", {
      language: e
    });
  }
  spellingGetLanguages() {
    return this.api.promiseMessage("spellingGetLanguages");
  }
  triggerHaptic(e, t, i) {
    return this.api.postMessage("triggerHaptic", {
      type: e,
      count: t,
      intervalMs: i
    });
  }
  getColorSpace() {
    return this.api.colorSpace;
  }
  getLegacyColorSpacePreference() {
    return this.api.legacyColorSpacePreference;
  }
  getActiveNSScreens() {
    return this.api.promiseMessage("getActiveNSScreens");
  }
  updateViewport(e, t) {
    return this.api.postMessage("updateViewport", {
      fileKey: e,
      viewport: t
    });
  }
  reportFatalError(e, t) {
    return this.api.postMessage("reportFatalError", {
      fileKey: e,
      errorInfo: t
    });
  }
  focusPopoutWindow(e) {
    return this.api.postMessage("focusPopoutWindow", {
      name: e
    });
  }
  isFloatingWindowAvailable() {
    return this.hasFeature("floatingWindowsV2");
  }
  updateColorProfile(e) {
    if (this.hasFeature("addUpdateColorProfile")) return this.api.postMessage("updateColorProfile", {
      colorProfile: e
    });
  }
}
export const d = $$l0;
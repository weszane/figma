function n(e, t, r) {
  t in e
    ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
    : e[t] = r
  return e
}
export class $$i17 {
  onMissingEditScope(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onIntentionalEdit(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$a38 {
  readyToAcceptAutosaveChanges(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  hasOngoingCommitTask(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  enqueueAutosaveCommit(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  createAutosaveManager(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  destroyAutosaveManager(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  isConnected(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$s30 {
  logShadowReadSuggestionsOnPaste(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$o54 {
  generateRequestId(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  generateSessionId(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  getSuggestion(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  onExplicitDismiss(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onFullOrPartialAccept(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$l41 {
  jsEchoUintValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  jsEchoUint64Value(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return '0'
  }

  jsEchoInt64Value(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return '0'
  }

  jsEchoInt64Struct(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return {
      uvalue: '0',
      ivalue: '0',
    }
  }

  jsEchoStringValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  jsEchoIntArrayValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return []
  }

  jsEchoBoolArrayValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return []
  }

  jsEchoJsonValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  jsEchoJsValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  jsEchoOptionalJsValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  jsEchoDeeplyNestedJsValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return []
  }

  jsEchoIntMapValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return new Map()
  }

  jsEchoIntSetValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return new Set()
  }

  jsEchoOptionalStringValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  jsEchoOptionalStringStruct(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return {
      valueOpt2: null,
    }
  }

  jsEchoFastParseableStructValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return {
      intValue: 0,
      uintValue: 0,
      int64Value: '0',
      uint64Value: '0',
      strValue: '',
      doubleValue: 0,
      boolValue: !1,
      guidValue: '-1:-1',
      structValue: {
        value: 0,
      },
      arrayIntValue: [],
      arrayStringValue: [],
      arrayBoolValue: [],
      jsValue: void 0,
    }
  }

  jsEchoNonFastParseableStructValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return {
      jsonValue: '',
      intValue: 0,
      uintValue: 0,
      int64Value: '0',
      uint64Value: '0',
      strValue: '',
      doubleValue: 0,
      boolValue: !1,
      guidValue: '-1:-1',
      structValue: {
        value: 0,
      },
      arrayIntValue: [],
      arrayStringValue: [],
      arrayBoolValue: [],
      jsValue: void 0,
    }
  }

  jsEchoCallbackValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return () => {}
  }

  getObservableCounter(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  getObservableArray(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  jsValueTestsDone(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$d56 {
  rerunSearch(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getTextMatches(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return []
  }

  rebuildIndex(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  logIndex(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setResultInfo(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setFocusAndNavigate(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setCategoryCounts(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updateCategoryCounts(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showReplace(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showMissingFontBell(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  detectTextTransform(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  applyTextTransform(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  getAnnotationTextContent(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$c11 {
  clearCodeSnapshotsFromMessages(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return []
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$u57 {
  handleMouseDown(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  handleMouseMove(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  handleMouseUp(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  createNewCommentAtPosition(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$p1 {
  openTemplatePicker(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$_64 {
  trackStyleAction(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  trackVariableAction(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  trackComponentAction(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$h42 {
  convertEmojiNameToString(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  setEmojiTypeaheadQuery(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  clearEmojiTypeaheadQuery(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  isShowingEmojiTypeaheadResults(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  setEmojiTypeaheadImageSet(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setEmojiTypeaheadTargetRect(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$m39 {
  startChat(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  closeWheel(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  handleShortcutPress(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  handleShortcutRelease(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$g7 {
  requestEditorType(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getDeviceInfoForSize(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  presetDeviceSupportsTouch(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  sizeMatchesFramePreset(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  getFramePresetForSize(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  getCurrentFileName(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  isUserPresent(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  backToFiles(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  documentIsLoaded(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  fullscreenIsReady(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  isFontListLoaded(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  afterFontsLoaded(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setFileVersion(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  openSettings(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  openFontSettings(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  attemptedSketchFileDrop(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  openExportPicker(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  openExportSettingsPicker(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  openPdfExportSettingsModal(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  openCooperExportModal(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  openShortcuts(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  toggleBrowseAllResourcesModal(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  openPreferencesModal(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showNudgeAmountPicker(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  openFplDebug(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  hidePicker(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  findInspiration(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  findCodebaseSuggestions(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  openQuickActionsAssetsTab(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  inspectFragment(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  handleSignedOutEditAttempt(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  hasUnsavedChanges(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  shouldSuppressUnsavedChangesUI(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  toggleInteractionRecorderVisibility(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  toggleFeatureFlagBisectorModal(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showCanvasContextMenu(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showSelectLayerContextMenu(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showTextEditModeContextMenu(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showRulerGuideContextMenu(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showSelectionContextMenu(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showLeftPanelTab(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  toggleTeamLibraryModal(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  toggleComponentInsertModal(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  toggleVariablesModal(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showPublishDialog(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showTemplatePublishModal(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  forcePublishStateGroup(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  mobileAppPush(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showAutosaveVisualBell(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showReturnToInstanceVisualBell(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showReturnToVariantVisualBell(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showPasteWidgetsAsSublayersVisualBell(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showAiContentFillSuggestedVisualBell(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  clearAiContentFillSuggestedVisualBell(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showMagicLinkSuggestedVisualBell(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showUpscaleImageSuggestedVisualBell(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showPushOverridesVisualBell(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  NOT_LOCALIZED_showVisualBell(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  NOT_LOCALIZED_showVisualBellInf(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  NOT_LOCALIZED_showMobileNativeToast(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showMobileNativeToastLocalized(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showVisualBellForMultiEdit(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showVisualBellForMultiEditGlueError(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showVisualBellWithUndo(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showVisualBellWithNodesLocalized(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showVisualBellLocalized(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showVisualBellLocalizedInf(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showVisualBellWithReloadButtonLocalized(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showVisualBellWithUrlButtonLocalized(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  dismissEphemeralVisualBells(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showVisualBellWithDelayLocalized(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showVisualBellWithCloseButtonLocalized(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  clearVisualBellType(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  dismissMobileMediaLoadingToast(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getUserLocale(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  getNaturalStyleKey(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  getLocalizedString(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  closeManageMemoryModal(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showPasteLoadingIndicatorAndPaste(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showPromptToMoveLibraryItems(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  triggerFromFullscreen(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updateViewportInfo(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showMissingFontDialog(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  hideMissingFontDialog(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getClipboardData(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  canUseClipboardAPI(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  readClipboardData(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  readFilesFromClipboard(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  clipboardHasUnsanitizedPng(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  decodePackedHTML(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return new Uint8Array()
  }

  decodeMetadataFromHTML(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  detectSpreadsheetDataInHTML(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  getHtmlString(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  writeToClipboard(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  writeDataToClipboard(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  sendSerializedClipboardDataToS3(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getSerializedClipboardDataFromS3(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  getKeyboardLayout(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  setKeyboardLayoutPreference(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  saveUseNumbersForOpacityPreference(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updateSelectedStyleProperties(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updateSelectedStyleThumbnail(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updateStyleThumbnail(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  createSavepoint(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  showSavepointModal(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showBrowserAlert(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  toggleHistoryMode(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showViewChangesNotification(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  togglePerfHUDVisibility(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  toggleFakeMPActivity(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  toggleTSMERConfig(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showImageScaledDownWarning(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showGIFConvertedAndScaledDownWarning(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showFragmentSearchSuggestion(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  usedKeyboardShortcut(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  startRenamingNodes(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  startRenamingPage(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  startRenamingPages(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  insertComponentOrShowError__DEPRECATED(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  fetchComponentBuffers(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  fetchComponentBufferForSevRepair(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  getLatestPublishedVersionHashForComponent(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  getLatestPublishedVersionForStateGroup(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  fetchVariableSetBuffers(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  startLoadingDroppedImage(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  finishLoadingDroppedImage(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  toggleMenu(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  trackInteractiveSlideElementInsertedForSprig(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  isCopyExportRestricted(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  isInWorkshopMode(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  requestOpenExternalSourceFileLibraryKey(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  validateAndParseURL(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  navigateToURL(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setHyperlinkPopup(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updateHyperlinkPopupPosition(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  handleUserClickOnHyperlink(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setCanvasMentionPopup(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updateCanvasMentionPopupPosition(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  openHelp(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  openSupportForum(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  openTutorials(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  keyboardWillShow(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  keyboardWillShowWithHeight(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  runLastPlugin(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  viewWidgetDetails(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  startMovePagesJob(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  retrieveMetadataAndSelectBrokenFixedScrollingNodes(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  desktopAppQueueFileForWriting(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  desktopAppWriteFiles(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  enableCodegenMcpServer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  mobileAppExportFile(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setMobileCutEnabled(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setMobileCopyEnabled(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setMobilePasteEnabled(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  mobileAppShowContextMenu(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getDefaultOnOTFeatures(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  copyLinkToPage(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  generateLinkToNode(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  generateLinkToCmsItemPage(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  generateLinkToRemoteNode(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  getLocalGUIDFromUrl(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  getLocalVersionIdFromUrl(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  syncPencilStyle(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  syncBrushStyle(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  syncPenStyle(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  syncHighlighterStyle(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  syncToolStyles(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  syncCurrentToolSetSource(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setVideoShouldAutoplay(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  sendActiveStackRegionAnalytics(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getUserName(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  getIsEmojiWheelOpen(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  openStartingPointFlowInPrototypeViewer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  focusPrototypeStartingPointPanelToEditName(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setSentryTag(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setTimer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  openTimerModal(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  resendTimer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setMusic(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  resendMusic(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  activateVotingStampTool(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setActiveAgendaItemId(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  escapeAndSaveCSVData(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  parseCsvStringAndCreateNodes(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  parseHtmlStringAndCreateNodes(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  parseHtmlStringAndTriggerSmartPaste(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  parseHTMLStringIntoLineDirectionalities(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  isNavigatorClipboardWriteSupported(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  onNodePositionChanged(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onSectionPresetPickerCreated(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  generateEmbed(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  generateWidgetFromURL(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  handleAction(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  startExportAction(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  sendEventToWebEventListener(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onAgendaChanged(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onFigjamStarterKitAction(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  canUploadAndEditVideo(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  getVariableSetNumberOfModesAllowed(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  getDefaultStateKeyForStateGroup(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  selectPublishedAssetGuids(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  handleZoomActionTriggeredToSetOnboardingFlag(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  handlePanActionTriggeredToSetOnboardingFlag(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  handleNodeCountReachedForMoveDraft(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  selectLocalStyles(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  formatDateTime(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  setFigjamStarterKitBoundingBox(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  loadedCompareChanges(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setUserFlag(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onViewOnlyJiggle(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  shouldViewOnlyJiggle(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  upsellLibrariesHandleConsecutivePaste(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onPlaygroundNodeChange(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  triggerHaptics(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  logEnterMode(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  evaluateMathExpression(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  changeDocumentColorProfile(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  addWhiteboardToolToRecents(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  addWhiteboardDiagrammingShapeToRecents(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onTilesRendered(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onCreateTable(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onEditTableText(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onNodeDragStart(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onNodeDragEnd(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onCreateSticky(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onDifferentSectionClicked(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onConnectDiagramShapeWithConnector(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onTileRendererChanged(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  afterPageChange(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  afterComputeViewportSettings(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getNextQueryRequestId(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  afterQueryCompleted(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  rejectAllSceneGraphQueries(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  movedSingleNodeVisualBell(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  createSlideAfterFocusedSlide(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return '-1:-1'
  }

  generateFlappFromPastedText(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  isAiDisabled(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  isAiDisabledFigJam(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  isOrgUserGatedForLlama(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  isInAiExperimentOrGrantlist(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  removeImageBackground(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  upscaleImage(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  autoRenameLayers(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  autoRenameLayersDevHandoff(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  regenerateText(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  openMakePrototypeModal(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  isMagicLinkDone(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  isMagicLinkDoneToastShowing(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  linkToComponent(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getLabValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  hasAiRenameLayersPermission(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  logFullscreenActionToDatadogRum(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  designToCodeFiles(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  bulkExportDesignsToReact(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onDirectExportCompleted(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setSitesViewFile(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setSitesViewCode(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setSitesViewCms(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setSitesInsertsOverlay(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setSitesFindOverlay(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setAnnotationEditingIndex(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showSlotPreferredContentPicker(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  pasteMermaidAsDiagram(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  showNudgeDesignModeAfterTemplateSetPasted(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$f66 {
  fontResourceStatusChanged(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$E29 {
  connect(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  disconnect(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  send(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$y13 {
  getDefaultDocumentColorProfile(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  getCanvasColorProfile(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  getUserColorProfile(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$b47 {
  getIsExtension(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  setNodesReady(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setNodesCompleted(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  forwardExportsToExtension(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showStatusContextMenu(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showLinterContextMenu(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  isStatusContextMenuShowing(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  isLinterContextMenuShowing(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  showAnnotationsButtonContextMenu(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  isDevModeOverview(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  enterDevModeFocusView(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  exitDevModeFocusOrOverview(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  isInteractiveInspectionEnabled(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  isChangingInspectionValues(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  onUnexpectedEditInFocusView(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getUnitName(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$T53 {
  nodeChange(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$I58 {
  createMouseBehavior(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  tableUiReorderHandleHoveredLength(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  tableUiAddButtonHoveredRadius(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$S28 {
  notifyLinterNodeUpdate(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  isDesignLinterEnabled(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$v43 {
  setMentionsTypeaheadQuery(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  clearMentionsTypeaheadQuery(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  isShowingMentionsTypeaheadResults(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  setMentionsTypeaheadTargetRect(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  startSearchSession(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  endSearchSession(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  showVisualBellForPastedMentions(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$A62 {
  getPdfSource(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  resetPdfSource(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  convertPdfToScene(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  shouldBlockPdfImports(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$x34 {
  selectionChange(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  boxSelectionEnded(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  currentPageChange(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  timerChange(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  slidesViewChange(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  documentChange(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  codegenPreferencesChange(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  stackInvariantsEnforced(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  pluginPageLoaded(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  pluginAccessibleNodeIds(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return []
  }

  pluginAccessiblePages(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return []
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$$$N25 {
  setSitesViewState(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getSitesViewState(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$C24 {
  getAPIName(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  getSuggestionsForWord(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  spellCheckText(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  runTextReviewPlugin(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  shouldEnableWhenFirstActivated(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$w52 {
  resolveThumbnailRequest(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  rejectThumbnailRequest(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$O0 {
  isQuickActionsShown(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$R3 {
  pasteVariablesWithLocalizationPopup(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$L44 {
  reconnectingStarted(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reconnectingSucceeded(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  notifyCursorHidden(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  notifyCursorUnhiddenFromObserver(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  notifyCursorUnhiddenFromConnectionCount(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  notifyEditorConvertedToViewer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updateSaveStatus(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updateMultiplayerState(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  restartPresentation(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showPresentationStoppedVisualBell(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  cancelPresentationStoppedVisualBell(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setBackgroundFlushInterval(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  startMonitorInterval(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  handleMultiplayerSignal(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showRestoreComponentDialog(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showComponentRemovedDialog(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  isWindowActive(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  buildMultiplayerUrl(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  socketBufferedAmount(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  prettyPrintMessage(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reconnectSequenceNumberChanged(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$P21 {
  showEyedropper(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  hideEyedropper(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updateSelectionPaintsWithFillEncodedPaints(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updateSelectionImages(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updateSelectionPaintsWithStyles(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updatePaintsDirectlyOnSingleNodeWithFillEncodedPaints(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updatePaintsDirectlyOnSingleNodeWithStyles(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  clearSelectionPaintsDueToLimitExceeded(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updateSelectionPaintFromDropper(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  pickerHasSelectionPaintOpen(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  originalPaintForCurrentSelectionPaintsPicker(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  colorPickerSelectedVariable(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  clearSelectionTextAndEffectStylesDueToLimitExceeded(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updateSelectionTextAndEffectStyles(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  isPrototypingModalOpen(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  validateCopyBuffer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$D14 {
  handleConnect(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  addUser(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  removeUser(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setMouseCursor(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setMousePosition(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setIsHoveringWidgetWithHiddenCursors(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setHighFiveStatus(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setChatMessage(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setFocusOnTextCursor(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setVoiceMetadata(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  handleReactionFromServer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  sendReaction(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$k8 {
  clearTemplatePreview(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$M27 {
  getEyedropperContext(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  updateEditPaletteModalColor(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  isCustomPaletteApplied(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  showSectionPresets(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$F20 {
  onUndo(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onRedo(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$j45 {
  dispatchAction(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  getCustomKeyboardShortcuts(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return []
  }

  getDisplayStringFromKey(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  getKeyboardShortcutFromText(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  getTextFromKeyboardShortcut(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$U19 {
  trackFromFullscreen(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  trackDefinedEventFromFullscreen(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  resetDefinedAnalyticsForDocument(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportConsecutiveFlushes(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportConsecutiveImageChangeSkips(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportContextRestore(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportBranchingLoadTime(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportMultiplayerRoundTripTime(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportPerfEvent(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportQuantizedColorEqualsUse(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportContextLost(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportContextRestored(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportDirtyAfterLoad(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  tryReportError(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  startPerfTimer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  stopPerfTimer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  startOpsTimer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  stopOpsTimer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  pauseOpsTimer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  resumeOpsTimer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  tryStopOpsTimer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  trySetAttributeOpsTimer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  tryGetAttributesOpsTimer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  getOpsTimer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  addToDistribution(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  createDistribution(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  removeDistribution(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getDistributionAnalyticsProperties(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  resetDistribution(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportRenderLayerCount(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportIndependentLayerAnimationActive(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportNonIndependentLayerAnimationActive(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportRenderedTileBytesUsed(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportAnimationFromCpp(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportAnimationFromTs(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  recordRenderingEvent(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  saveRenderingTrace(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportIndependentLayerActive(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportIndependentLayerAdded(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reportIndependentLayerRemoved(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  logNumericMetric(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  logStringMetric(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  handleAllocationFailureWithNative(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  slogFromFullscreen(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$B22 {
  getDefaultPencilStrokeWeight(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  getDefaultHighlighterStrokeWeight(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$G31 {
  isUI3(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  showUI3Colors(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  showUI3ColorsInitialValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$V63 {
  readSync(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return []
  }

  writeSync(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return new Uint8Array()
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$H2 {
  decodeImage(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  encodeImage(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return new Uint8Array()
  }

  scaleImage(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return new Uint8Array()
  }

  cancelCurrentImageWorkers(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  init(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$z50 {
  createVideo(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  deleteVideo(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getWidth(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  getHeight(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  getCoverImage(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return new Uint8Array()
  }

  loadVideo(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  copyVideoPermissions(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  copyVideoPermissionsFromLibraryKey(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getSignedUrls(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return new Map()
  }

  setExternalSource(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  loadAllVideos(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  contextLost(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$W26 {
  autoSegmentNodesByRegion(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  shouldRunSimpleStackDetection(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  runMakeResponsiveHeuristics(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  trackShouldShowMSALOnboarding(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  destroyAllAutoLayout(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  makeResponsive2(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$K4 {
  getUserId(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  getUserLocale(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  hasUserFlag(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$Y16 {
  createScene(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  Node_created(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  Node_destroyed(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  triggerSceneGraphEvent(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updateNodeAfterPropertyChange(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  linkNodeToParent(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  unlinkNodeFromParent(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$$9 {
  markMissingFontScannerAsComplete(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$X18 {
  submitDeveloperRelatedLinks(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  didGetNodeStatusChange(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  isVariableAvailableInLibraryAsset(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$q23 {
  copyImagePermissions(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  copyImagePermissionsFromLibraryKey(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setImageDownloadPriority(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  forceDownloadImage(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getSignedUrls(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return new Map()
  }

  getImageHostDomain(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  setMinimumImagePriority(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  forgetImage(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setImageDecodePending(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  clearImageDecodePending(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  downloadEmoji(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  markImageUploading(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  markImageUploaded(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  startUploadingImage(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  pendingUploadStats(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return [new Set(), new Set()]
  }

  logDebugInfo(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  pauseImageDownloads(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  resumeImageDownloads(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setExternalSource(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  staticAssetWithPath(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$J5 {
  rgbaToThumbhash(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return new Uint8Array()
  }

  thumbhashToRgba(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return {
      rgba: new Uint8Array(),
      width: 0,
      height: 0,
    }
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$Z65 {
  readRichTextFromHtml(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return []
  }

  createHtmlFromTextNodes(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  createHtmlFromTextData(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$Q61 {
  getParsedCodeTokens(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  getBackgroundColor(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  getLineNumberColor(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  getCursorColor(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$ee46 {
  onInsertFromExisting(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onImpression(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  mountWidget(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  mountWidgetLowPriority(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  trackSelectionStateInteraction(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  clickWidget(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  queueRender(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  renderFirstPartyWidget(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  isRenderingWidget(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  runPropertyMenuCallback(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  terminateRunningWidget(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  clickHyperlink(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getWidgetIconBuffer(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  onTextEditEnd(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showTooltip(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showNonInteractableWidgetTooltip(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  hideTooltip(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  logMultipleInputEditorsInWidget(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  stickableAdded(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  stickableRemoved(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  canInteractWithWidget(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  canViewWidgetDetails(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$et36 {
  prefersReducedMotion(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  getWCAG2Contrast(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  announceNodeCreated(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  announceSingleNodeDeleted(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  announceMultipleNodesDeleted(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  announceTextSelection(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  announceToolSelected(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  announceTableCellTextSelection(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  announceNodeResized(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  announceNodeMoved(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  announceSelectionBoxResized(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  announceSelectionBoxMoved(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  announceViewportPanned(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  announceViewportZoomed(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  announceBooleanOperation(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  showKeyboardSelectionModeChangedToast(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$er60 {
  onFrameDistributionTrackedEvent(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$en32 {
  isCustomPaletteColor(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$ei12 {
  clearSlideThemeStylePreview(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  syncSlideThemeAtom(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  computeThemeSwapColorVariableMapping(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return new Map()
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$ea15 {
  updatePreview(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  updateDirtyResponsiveSets(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setLeftPanelTabToCode(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setCodeWindowPanelToChat(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  markNodeAsDesignToReact(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  markCodeNodesDirty(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  syncNodeSourceCode(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getAutomaticCodeFileNameForNodeName(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  updateCodeSnapshotState(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  cleanupCodeSnapshotOverlays(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getTimestampForCodeSnapshotInvalidatedAt(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  isCodeSnapshotStale(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  resnapshotIfStale(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  regenerateDerivedCodeFileDebounced(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return Promise.reject()
  }

  showSupabaseDeployNudge(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setAutoDeploySupabase(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  removeAttachment(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  pushAttachmentSourceCode(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  pushAttachmentError(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  terminateOnePendingAttachment(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setSprigUserCreatedCodeLayerAtom(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  shouldHideDefaultSetOnCreation(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  prewarmSandboxPool(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getCodeLayersDefaultEntryPointFile(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$es33 {
  isInOrg(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$eo35 {
  getSummaryAsClipboardText(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$el51 {
  calculateColorWithRampValue(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  calculateColorWithRelativeAdjustment(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  getRampValueForColor(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$ed48 {
  isZombieStyle(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$ec49 {
  storeVariableData(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  fetchVariableData(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$eu59 {
  trackUserActionTimings(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  requestFrameTiming(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$ep40 {
  enableSlotsForOpenFile(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$e_37 {
  syncChangedSubscribedConsumptions(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  resetMirrorCache(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$eh55 {
  syncAddedOrChangedAssets(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  syncRemovedAssets(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  resetMirrorCache(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$em10 {
  ready(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  track(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  triggerViewerEvent(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  handleUncompressedSchema(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  handleUncompressedMessage(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  willReceiveNodeChanges(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  didReceiveNodeChanges(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getSceneLoadingPhase(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return 0
  }

  retAffineTransform(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  retArcData(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  retGUID(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  retStyleId(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  retVector(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  forEachFieldCallback(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  reverseVariantBindingsForICsDisabled(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  debugPrototypeActionFromPreview(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  getBaseScreenId(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  isScalingModeResponsive(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export class $$eg6 {
  windowSetupComplete(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  windowHandleBeforeTick(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  initPrefersReducedMotion(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  destroyWindow(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setTitle(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  title(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return ''
  }

  alert(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setTextCaretBounds(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  usingMultiTouchPointerEvents(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  setExpectingTextInput(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setExpectingCopyCutEvent(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  setExpectingPasteEvent(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  execCommandCopy(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  readClipboardContents(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  writeClipboardContents(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  clearClipboardContents(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  tryToReadFromClipboardAsBlobInHTML(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  tryToReadSubstringFromClipboard(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  tryToReadFilesFromClipboard(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  tryToDetectSpreadsheetDataOnClipboard(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  tryToDetectLineDataOnClipboard(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  writeToClipboardAsBlobInHTML(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return !1
  }

  focusView(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  viewWithFocus(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
    return null
  }

  setCanvasView(...e) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    
    this.shouldThrow = e
  }
}
export const $C = $$O0
export const A1 = $$p1
export const A2 = $$H2
export const Ag = $$R3
export const Bj = $$K4
export const Bz = $$J5
export const CJ = $$eg6
export const EU = $$g7
export const Fe = $$k8
export const Gh = $$$9
export const Gm = $$em10
export const IW = $$c11
export const Iz = $$ei12
export const LY = $$y13
export const Lz = $$D14
export const M0 = $$ea15
export const N = $$Y16
export const RN = $$i17
export const RU = $$X18
export const Rx = $$U19
export const S_ = $$F20
export const TC = $$P21
export const Ud = $$B22
export const V3 = $$q23
export const Vm = $$C24
export const W3 = $$$$N25
export const WF = $$W26
export const Z3 = $$M27
export const ZD = $$S28
export const _L = $$E29
export const a5 = $$s30
export const aO = $$G31
export const b_ = $$en32
export const be = $$es33
export const c2 = $$x34
export const d1 = $$eo35
export const dJ = $$et36
export const d_ = $$e_37
export const di = $$a38
export const eZ = $$m39
export const gQ = $$ep40
export const jw = $$l41
export const k0 = $$h42
export const l5 = $$v43
export const lM = $$L44
export const mk = $$j45
export const nn = $$ee46
export const p6 = $$b47
export const pG = $$ed48
export const qP = $$ec49
export const qQ = $$z50
export const qV = $$el51
export const rb = $$w52
export const rf = $$T53
export const rm = $$o54
export const sG = $$eh55
export const tO = $$d56
export const tg = $$u57
export const tz = $$I58
export const uG = $$eu59
export const uH = $$er60
export const vv = $$Q61
export const w4 = $$A62
export const wm = $$V63
export const xJ = $$_64
export const yR = $$Z65
export const yy = $$f66

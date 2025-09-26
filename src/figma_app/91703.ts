import { createActionCreator } from '../905/73481'
import { showModalHandler } from '../905/156213'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { trackEventAnalytics } from '../905/449184'
import { handleAtomEvent } from '../905/502364'
import { isIframe } from '../905/508367'
import { getFeatureFlags } from '../905/601108'
import { customHistory } from '../905/612521'
import { OrganizationType } from '../905/833838'
import { updateCurrentSelectionPaintInPicker } from '../905/854717'
import { autosaveErrorModal } from '../905/906499'
import { selectViewAction } from '../905/929976'
import { startAutosaveWait } from '../figma_app/139113'
import { getInitialOptions } from '../figma_app/169182'
import { getSelectedViewUrl, replaceOrgOrTeamId, selectedViewToPath } from '../figma_app/193867'
import { trackFileEvent } from '../figma_app/314264'
import { extractFigmaFileId } from '../figma_app/336853'
import { fullscreenValue } from '../figma_app/455680'
import { sendBackToFilesAction } from '../figma_app/564528'
import { extractTeamIdFromUrl } from '../figma_app/598018'
import { resetFileInfo, setMultiplayerPerfInfo, startRecording, stopRecordingBeforeSceneRebuild } from '../figma_app/682945'
import { AppStateTsApi, SaveConnectionIssues, SelectionPaintHelpers } from '../figma_app/763686'
import { desktopAPIInstance } from '../figma_app/876459'
import { MULTIPLAYER_USER_STATE_CHANGE } from '../figma_app/915202'

/**
 * Action creators and thunks for fullscreen and picker UI state management.
 * Original variable names are preserved in comments for traceability.
 */

// Action creators
export const clearSelectedViewCommentId = createActionCreator('CLEAR_SELECTED_VIEW_COMMENT_ID') // $$w18
export const updateRecentlyUsedQuickCommand = createActionCreator('UPDATE_RECENTLY_USED_QUICK_COMMAND') // $$O17
export const recentlyUsedQuickCommands = createActionCreator('RECENTLY_USED_QUICK_COMMANDS') // $$R13
export const updateCanvasMentionPopupPosition = createActionCreator('FULLSCREEN_UPDATE_CANVAS_MENTION_POPUP_POSITION') // $$L48
export const setCanvasMentionPopup = createActionCreator('FULLSCREEN_SET_CANVAS_MENTION_POPUP') // $$P8
export const updateHyperlinkPopupPosition = createActionCreator('FULLSCREEN_UPDATE_HYPERLINK_POPUP_POSITION') // $$D44
export const setHyperlinkPopup = createActionCreator('FULLSCREEN_SET_HYPERLINK_POPUP') // $$k16
export const setEyedropper = createActionCreator('FULLSCREEN_SET_EYEDROPPER') // $$M5
export const setLeftPanelTab = createActionCreator('FULLSCREEN_SET_LEFT_PANEL_TAB') // $$j4
export const showFileCreationFailureBanner = createActionCreator('FULLSCREEN_SHOW_FILE_CREATION_FAILURE_BANNER') // $$U7
export const hideUpgradeBanner = createActionCreator('FULLSCREEN_HIDE_UPGRADE_BANNER') // $$B2
export const showUpgradeBanner = createActionCreator('FULLSCREEN_SHOW_UPGRADE_BANNER') // $$G40
export const setPreferredValuesPickerListLayout = createActionCreator('FULLSCREEN_SET_PREFERRED_VALUES_PICKER_LIST_LAYOUT') // $$V20
export const setInstanceSwapPickerListLayout = createActionCreator('FULLSCREEN_SET_INSTANCE_SWAP_PICKER_LIST_LAYOUT') // $$H36
export const setPickerListLayout = createActionCreator('FULLSCREEN_SET_PICKER_LIST_LAYOUT') // $$z9
export const shouldShowStackAlignmentPicker = createActionCreator('FULLSCREEN_SHOULD_SHOW_STACK_ALIGNMENT_PICKER') // $$K11
export const hideStylePicker = createActionCreator('FULLSCREEN_HIDE_STYLE_PICKER') // $$Y23
export const showStylePicker = createActionCreator('FULLSCREEN_SHOW_STYLE_PICKER') // $$$34
export const hidePicker = createActionCreator('FULLSCREEN_HIDE_PICKER') // $$X14
export const showPicker = createActionCreator('FULLSCREEN_SHOW_PICKER') // $$q3
export const updateLocalFontAgentVersion = createActionCreator('FULLSCREEN_UPDATE_LOCAL_FONT_AGENT_VERSION') // $$er0
export const updateFontListAction = createActionCreator('FULLSCREEN_UPDATE_FONT_LIST') // $$en46
export const stopRenaming = createActionCreator('FULLSCREEN_STOP_RENAMING') // $$ei25
export const beginRenaming = createActionCreator('FULLSCREEN_BEGIN_RENAMING') // $$ea52
export const updateSelectedStyleThumbnailUrl = createActionCreator('FULLSCREEN_UPDATE_SELECTED_STYLE_THUMBNAIL_URL') // $$eo38
export const updateSelectedStyleProperties = createActionCreator('FULLSCREEN_UPDATE_SELECTED_STYLE_PROPERTIES') // $$el37
export const updateMirror = createActionCreator('FULLSCREEN_UPDATE_MIRROR') // $$ed47
export const setNeedsUpgrade = createActionCreator('FULLSCREEN_SET_NEEDS_UPGRADE') // $$ec41
export const setFileVersion = createActionCreator('FULLSCREEN_SET_FILE_VERSION') // $$eu27
export const setProgressBarState = createActionCreator('FULLSCREEN_SET_PROGRESS_BAR_STATE') // $$ep29
export const stopObservingOtherUser = createActionCreator('FULLSCREEN_STOP_OBSERVING_OTHER_USER') // $$e_31
export const updateMultiplayerState = createActionCreator('FULLSCREEN_UPDATE_MULTIPLAYER_STATE') // $$eh22
export const showDowntimeBanner = createActionCreator('FULLSCREEN_SHOW_DOWNTIME_BANNER') // $$eg49
export const hideDowntimeBanner = createActionCreator('FULLSCREEN_HIDE_DOWNTIME_BANNER') // $$ef1
export const hideOpenDesktopAppModal = createActionCreator('FULLSCREEN_HIDE_OPEN_DESKTOP_APP_MODAL') // $$eE30
export const showOpenDesktopAppModal = createActionCreator('FULLSCREEN_SHOW_OPEN_DESKTOP_APP_MODAL') // $$ey32
export const reconnectingSucceeded = createActionCreator('FULLSCREEN_RECONNECTING_SUCCEEDED') // $$eb15
export const reconnectingStarted = createActionCreator('FULLSCREEN_RECONNECTING_STARTED') // $$eI53
export const attemptClose = createActionCreator('FULLSCREEN_ATTEMPT_CLOSE') // $$ev33
export const fileSelectedShareModalTab = createActionCreator('FILE_SELECTED_SHARE_MODAL_TAB') // $$ex10
export const updateOpenFile = createActionCreator('UPDATE_OPEN_FILE') // $$eN21
export const newFileLoaded = createActionCreator('NEW_FILE_LOADED') // $$eC12
export const fullscreenOpen = createActionCreator('FULLSCREEN_OPEN') // $$ew39

/**
 * Thunk to track file events.
 */
export const trackFileEventThunk = createOptimistThunk((e, t) => { // $$F50
  const state = e.getState()
  const params = t.params || {}
  const { fileKey } = state.selectedView
  trackFileEvent(t.name, fileKey ?? null, state, params)
})

/**
 * Thunk to track style picker view changes.
 */
export const stylePickerViewChangedThunk = createOptimistThunk((e, t) => { // $$W28
  trackEventAnalytics('Style Picker View Changed', {
    styleType: 'FILL',
    oldViewMode: t.isListLayout ? 'GRID' : 'LIST',
    newViewMode: t.isListLayout ? 'LIST' : 'GRID',
  })
  e.dispatch(setPickerListLayout(t))
})

/**
 * Thunk to hide picker and update state.
 */
export const hidePickerThunk = createOptimistThunk((e) => { // $$ee26
  const prevPickerShown = e.getState().pickerShown
  e.dispatch(hidePicker())
  handlePickerTransition(prevPickerShown, e.getState().pickerShown, e.dispatch)
})

/**
 * Thunk to show picker and update state.
 */
export const showPickerThunk = createOptimistThunk((e, t) => { // $$et51
  const prevPickerShown = e.getState().pickerShown
  e.dispatch(showPicker(t))
  handlePickerTransition(prevPickerShown, e.getState().pickerShown, e.dispatch)
})

/**
 * Thunk to update multiplayer state and performance info.
 */
export const updateMultiplayerStateThunk = createOptimistThunk((e, t) => { // $$em6
  if (t.allUsers !== undefined) {
    setMultiplayerPerfInfo(t.allUsers.length, t.presenterSessionID)
    handleAtomEvent({ id: MULTIPLAYER_USER_STATE_CHANGE })
  }
  e.dispatch(updateMultiplayerState(t))
})

/**
 * Thunk to start recording and dispatch reconnecting succeeded.
 */
export const startRecordingThunk = createOptimistThunk((e) => { // $$eT43
  startRecording()
  e.dispatch(reconnectingSucceeded())
})

/**
 * Thunk to stop recording before scene rebuild and dispatch reconnecting started.
 */
export const stopRecordingThunk = createOptimistThunk((e) => { // $$eS45
  stopRecordingBeforeSceneRebuild()
  e.dispatch(reconnectingStarted())
})

/**
 * Thunk to handle autosave and navigation logic when closing or switching views.
 */
export const handleAutosaveAndNavigationThunk = createOptimistThunk((e, t) => { // $$eA35
  if (desktopAPIInstance) {
    if (t?.closeDesktopTabWithMessage) {
      desktopAPIInstance.showFileBrowser(t.closeDesktopTabWithMessage)
      desktopAPIInstance.close({ suppressReopening: true, shouldForceClose: true })
    }
    else {
      desktopAPIInstance.showFileBrowser()
    }
    return
  }
  if (isIframe()) {
    if (getFeatureFlags().integ_zoom_allow_file_switching && sendBackToFilesAction())
      return
    customHistory.redirect('/', '_blank')
    return
  }
  const state = e.getState()
  const { openFile, selectedView } = state
  let folderId = openFile?.project?.id
  let nextView: ObjectOf = { view: 'recentsAndSharing' }
  if (openFile && selectedView) {
    if (
      selectedView.view === 'fullscreen'
      && state.lastVisitedPlan
      && state.lastVisitedPlan.planId
      !== (state.lastVisitedPlan.planType === OrganizationType.ORG
        ? openFile?.parentOrgId
        : openFile?.teamId)
    ) {
      let url = getSelectedViewUrl(state, nextView)
      if (selectedView.prevSelectedView) {
        url = getSelectedViewUrl(state, selectedView.prevSelectedView)
      }
      const fileId = extractFigmaFileId(url)
      const teamId = extractTeamIdFromUrl(url)
      if (fileId || teamId) {
        url = replaceOrgOrTeamId(
          url,
          fileId ? OrganizationType.ORG : OrganizationType.TEAM,
          fileId || teamId,
          state.lastVisitedPlan.planType,
          state.lastVisitedPlan.planId,
        )
      }
      customHistory.redirect(url)
      return
    }
    if (selectedView.view === 'fullscreen' && selectedView.prevSelectedView) {
      nextView = selectedView.prevSelectedView
    }
    else if (openFile && folderId) {
      nextView = { view: 'folder', folderId }
    }
  }
  if (AppStateTsApi?.uiState().isRecovery.getCopy()) {
    const url = getSelectedViewUrl(state, nextView)
    customHistory.redirect(url)
  }
  fullscreenValue.dispatchIfSaved(selectViewAction(nextView))
  resetFileInfo()
  e.dispatch(attemptClose(t))
})

/**
 * Thunk to handle view selection and autosave logic.
 */
export const handleViewSelectionThunk = createOptimistThunk((e, t) => { // $$es24
  const state = e.getState()
  const newSelectedView = t.newSelectedView
  if (
    state.saveStatus
    && state.saveStatus.hasUnsavedChanges
    && state.saveStatus.tabCloseText !== SaveConnectionIssues.SUPPRESS_UNSAVED_CHANGES_UI
  ) {
    if (!startAutosaveWait(() => e.dispatch(handleAutosaveAndNavigationThunk()))) {
      const message = getI18nString('autosave.unable_to_leave_document.unsaved_changes_save_in_background')
      e.dispatch(
        showModalHandler({
          type: autosaveErrorModal,
          data: { message },
        }),
      )
    }
    customHistory.push(selectedViewToPath(state, newSelectedView), {
      ...e.getState().selectedView,
      previousSelectedView: t.oldSelectedView,
      jsCommitHash: getInitialOptions().release_manifest_git_commit,
    })
    e.dispatch(selectViewAction(t.oldSelectedView))
  }
  else {
    if (
      state.saveStatus
      && state.saveStatus.tabCloseText === SaveConnectionIssues.SUPPRESS_UNSAVED_CHANGES_UI
    ) {
      trackEventAnalytics('suppress_unsaved_changes_ui', {}, { forwardToDatadog: true })
    }
    e.dispatch(
      selectViewAction({
        ...newSelectedView,
        fromPopstate: true,
      }),
    )
  }
})

/**
 * Helper function to handle picker transitions.
 * Original function name: Q
 */
function handlePickerTransition(prevPicker, nextPicker, dispatch) {
  const prevId = prevPicker && prevPicker.id
  const nextId = nextPicker && nextPicker.id
  const isBackgroundPanel = prevId !== 'background-panel-color-picker' && nextId === 'background-panel-color-picker'
  const wasBackgroundPanel = prevId === 'background-panel-color-picker' && nextId !== 'background-panel-color-picker'
  const isPrototypePanel = prevId !== 'prototype-background-panel-color-picker' && nextId === 'prototype-background-panel-color-picker'
  const wasPrototypePanel = prevId === 'prototype-background-panel-color-picker' && nextId !== 'prototype-background-panel-color-picker'
  const isTypeSettings = prevId !== 'type-settings' && prevId !== 'style-preview-type-settings' && (nextId === 'type-settings' || nextId === 'style-preview-type-settings')
  const wasTypeSettings = (prevId === 'type-settings' || prevId === 'style-preview-type-settings') && nextId !== 'type-settings' && nextId !== 'style-preview-type-settings'
  const isStackingAdvancedSizing = prevId !== 'stacking-advanced-sizing' && nextId === 'stacking-advanced-sizing'
  const wasStackingAdvancedSizing = prevId === 'stacking-advanced-sizing' && nextId !== 'stacking-advanced-sizing'
  const isPaintPicker = !isSelectionPaintItem(prevId) && isSelectionPaintItem(nextId)
  const wasPaintPicker = isSelectionPaintItem(prevId) && !isSelectionPaintItem(nextId)
  const isStylePicker = !isSelectionStyleItem(prevId) && isSelectionStyleItem(nextId)
  const wasStylePicker = isSelectionStyleItem(prevId) && !isSelectionStyleItem(nextId)

  if (isBackgroundPanel) {
    AppStateTsApi?.uiState().backgroundPickerOpen.set(true)
  }
  else if (wasBackgroundPanel) {
    AppStateTsApi?.uiState().backgroundPickerOpen.set(false)
  }
  else if (isPrototypePanel) {
    fullscreenValue.updateAppModel({ prototypeBackgroundPickerOpen: true })
  }
  else if (wasPrototypePanel) {
    fullscreenValue.updateAppModel({ prototypeBackgroundPickerOpen: false })
  }
  else if (isTypeSettings) {
    AppStateTsApi?.propertiesPanelState().typeDetailsPanelOpen.set(true)
    trackEventAnalytics('Type Details Panel Opened')
  }
  else if (wasTypeSettings) {
    AppStateTsApi?.propertiesPanelState().typeDetailsPanelOpen.set(false)
  }

  if (isPaintPicker) {
    SelectionPaintHelpers?.setIsPaintPickerOpen(true)
  }
  else if (wasPaintPicker) {
    SelectionPaintHelpers?.setIsPaintPickerOpen(false)
  }

  if (isStylePicker) {
    SelectionPaintHelpers?.setIsStylePickerOpen(true)
  }
  else if (wasStylePicker) {
    SelectionPaintHelpers?.setIsStylePickerOpen(false)
  }

  if (isStackingAdvancedSizing) {
    AppStateTsApi?.uiState().minMaxModalShown.set(true)
  }
  else if (wasStackingAdvancedSizing) {
    AppStateTsApi?.uiState().minMaxModalShown.set(false)
  }

  if (wasPaintPicker) {
    dispatch(updateCurrentSelectionPaintInPicker({
      paintId: undefined,
      originalPaint: undefined,
      updatedPaintFromDropper: undefined,
    }))
  }
}

/**
 * Checks if the id is a selection paint item.
 * Original function name: $$J19
 */
export function isSelectionPaintItem(id: string | undefined): boolean {
  return !!id && id.startsWith('selection-paint-item')
}

/**
 * Checks if the id is a selection style item.
 * Original function name: $$Z42
 */
export function isSelectionStyleItem(id: string | undefined): boolean {
  return !!id && id.startsWith('selection-style-item')
}

// Constants for panel ids
export const BACKGROUND_PANEL_COLOR_PICKER = 'background-panel-color-picker' // k8
export const PROTOTYPE_BACKGROUND_PANEL_COLOR_PICKER = 'prototype-background-panel-color-picker' // $T
export const TYPE_SETTINGS_PANEL = 'type-settings' // AB
export const STACKING_ADVANCED_SIZING_PANEL = 'stacking-advanced-sizing' // _V
export const STYLE_PREVIEW_TYPE_SETTINGS_PANEL = 'style-preview-type-settings' // h2

// Export aliases for backward compatibility (original names)
export const Bs = updateLocalFontAgentVersion
export const CN = hideDowntimeBanner
export const D9 = hideUpgradeBanner
export const Dr = showPicker
export const FP = setLeftPanelTab
export const Gm = setEyedropper
export const J4 = updateMultiplayerStateThunk
export const JM = showFileCreationFailureBanner
export const Jt = setCanvasMentionPopup
export const Kx = setPickerListLayout
export const M3 = fileSelectedShareModalTab
export const Mt = shouldShowStackAlignmentPicker
export const OB = newFileLoaded
export const PQ = recentlyUsedQuickCommands
export const Ql = hidePicker
export const Qm = reconnectingSucceeded
export const R5 = setHyperlinkPopup
export const Rw = updateRecentlyUsedQuickCommand
export const ST = clearSelectedViewCommentId
export const Ty = isSelectionPaintItem
export const U8 = setPreferredValuesPickerListLayout
export const UC = updateOpenFile
export const UM = updateMultiplayerState
export const Uv = hideStylePicker
export const VB = handleViewSelectionThunk
export const Wk = stopRenaming
export const XE = hidePickerThunk
export const XQ = setFileVersion
export const Y = stylePickerViewChangedThunk
export const Y6 = setProgressBarState
export const Z1 = hideOpenDesktopAppModal
export const Z_ = stopObservingOtherUser
export const aK = showOpenDesktopAppModal
export const bO = attemptClose
export const bS = showStylePicker
export const eH = handleAutosaveAndNavigationThunk
export const fG = setInstanceSwapPickerListLayout
export const fk = updateSelectedStyleProperties
export const fy = updateSelectedStyleThumbnailUrl
export const ho = fullscreenOpen
export const il = showUpgradeBanner
export const kP = setNeedsUpgrade
export const kU = isSelectionStyleItem
export const lp = startRecordingThunk
export const lz = updateHyperlinkPopupPosition
export const nA = stopRecordingThunk
export const nN = updateFontListAction
export const p5 = updateMirror
export const pj = updateCanvasMentionPopupPosition
export const re = showDowntimeBanner
export const sx = trackFileEventThunk
export const u1 = showPickerThunk
export const vg = beginRenaming
export const yv = reconnectingStarted

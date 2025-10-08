import { createActionCreator } from "../905/73481"
import { getBackgroundColorForTheme } from "../905/187165"
import { createOptimistThunk } from "../905/350402"
import { trackEventAnalytics } from "../905/449184"
import { findCurrentPlan } from "../905/539306"
import { SearchAnalytics } from "../905/574958"
import { customHistory } from "../905/612521"
import { createAndOpenFile } from "../905/738636"
import { getNewFileConfig } from "../905/766303"
import { debounce } from "../905/915765"
import { selectViewAction } from "../905/929976"
import { searchEndSessionAction, searchSessionEnteredSearchViewAction, searchSetParametersAction } from "../905/977218"
import { mapFileTypeToEditorType } from "../figma_app/53721"
import { PublicModelType, SpaceAccessType } from "../figma_app/162807"
import { FFileType } from "../figma_app/191312"
import { getSelectedViewUrl } from "../figma_app/193867"
import { isChromebookTabbed } from "../figma_app/347146"
import { mapFileSummary } from "../figma_app/349248"
import { canMemberOrg, getPermissionsStateMemoized } from "../figma_app/642025"
import { isIncludedView, isOrgView } from "../figma_app/707808"
import { getAutosaveManagerInstance } from "../figma_app/840917"
import { desktopAPIInstance } from "../figma_app/876459"
import { FileBrowserLocation, TabOpenBehavior } from "../figma_app/915202"
// Thunk for updating viewport in fullscreen mode
export const updateViewportFullscreen = createOptimistThunk((
  { dispatch, getState },
  { viewport }: { viewport: string },
) => {
  const state = getState()
  const { selectedView } = state

  if (selectedView.view === "fullscreen") {
    dispatch(selectViewAction({
      ...selectedView,
      viewport,
    }))

    const fileKey = getAutosaveManagerInstance()?.fileKey || selectedView.fileKey
    if (fileKey) {
      desktopAPIInstance?.updateViewport(fileKey, viewport)
    }
  }
})

// Thunk for handling search initiation from desktop new tab
export const initiateDesktopNewTabSearch = createOptimistThunk(({dispatch, getState}) => {
  let state = getState()
  const searchScope = getSearchScopeFromState(state)

  dispatch(searchSetParametersAction({
    query: state.desktopNewTab.searchQuery,
    searchScope,
    searchModelType: PublicModelType.FILES,
  }))

  dispatch(searchSessionEnteredSearchViewAction({
    entryPoint: "desktop_new_tab",
  }))

  // Refresh state after dispatching actions
  state = getState()

  const searchUrl = getSelectedViewUrl(state, {
    view: "search",
    entryPoint: "desktop_new_tab",
    previousView: state.selectedView
      && (isIncludedView(state.selectedView) || isOrgView(state.selectedView))
      ? state.selectedView
      : undefined,
  })

  customHistory.redirect(searchUrl)
})

// Action creators for desktop new tab UI state
export const setLoadingBackgroundColor = createActionCreator("DESKTOP_NEW_TAB_SET_LOADING_BACKGROUND_COLOR")
export const setIsSearchBarFocused = createActionCreator("DESKTOP_NEW_TAB_SET_IS_SEARCH_BAR_FOCUSED")
export const setSearchQuery = createActionCreator("DESKTOP_NEW_TAB_SET_SEARCH_QUERY")

// Thunk for handling search result click
export const handleSearchResultClick = createOptimistThunk((
  {dispatch, getState},
  {
    result,
    index,
    clickAction,
  }: {
    result: any
    index: number
    clickAction: string
  },
) => {
  const state = getState()
  const model = result.model

  const analyticsData = {
    position: index,
    resource_id: model.key,
    resource_type: result.search_model_type.toString(),
    matched_queries: result.matched_queries,
    result,
  }

  const planData = {
    plan: findCurrentPlan(state),
  }

  new SearchAnalytics.Analytics(state.search, analyticsData, planData)
    .click(result.search_model_type, state.selectedView, {
      action: clickAction,
    })

  dispatch(searchEndSessionAction())
  dispatch(selectViewAction({
    view: "fullscreen",
    fileKey: model.key,
    editorType: mapFileTypeToEditorType(model.editor_type ?? FFileType.DESIGN),
  }))
})

// Thunk for opening recent prototype
export const openRecentPrototype = createOptimistThunk(async (
  {dispatch},
  { fileKey, pageId },
  { liveStore }
) => {
  const file = await liveStore.fetchFile(fileKey)

  trackEventAnalytics("Desktop New Tab Open Recent", {
    itemType: "prototype",
    fileKey: file.key,
  })

  dispatch(selectViewAction({
    view: "prototype",
    file: mapFileSummary(file),
    nodeId: pageId,
    pageId,
  }))
})

// Thunk for opening recent file
export const openRecentFile = createOptimistThunk(async (
  {dispatch},
  { fileKey },
  { liveStore },
) => {
  const file = await liveStore.fetchFile(fileKey)

  trackEventAnalytics("Desktop New Tab Open Recent", {
    itemType: "file",
    fileKey: file.key,
  })

  dispatch(selectViewAction({
    view: "fullscreen",
    fileKey: file.key,
    editorType: mapFileTypeToEditorType(file.editor_type ?? FFileType.DESIGN),
  }))
})

// Thunk for creating and opening new file
export const createNewFile = createOptimistThunk((
  {dispatch, getState},
  { projectId, editorType }: { projectId?: string, editorType: string },
) => {
  const state = getState()

  if (!state.desktopNewTab.isCreatingFile) {
    const tabBehavior = isChromebookTabbed() ? TabOpenBehavior.SAME_TAB : TabOpenBehavior.NEW_TAB

    const fileConfig = getNewFileConfig({
      state: getState(),
      openNewFileIn: tabBehavior,
      folderOverride: projectId
        ? { folderId: projectId }
        : "drafts",
      trackingInfo: {
        from: FileBrowserLocation.DESKTOP_NEW_TAB_BUTTON,
        selectedView: state.selectedView,
      },
      editorType,
    })

    dispatch(createAndOpenFile(fileConfig))
  }
})

/**
 * Determines search scope based on user permissions
 * Original function: $$k5
 */
export function getSearchScopeFromState(state: any): SpaceAccessType {
  const permissions = getPermissionsStateMemoized(state)

  if (permissions.currentUserOrgId) {
    return canMemberOrg(permissions.currentUserOrgId, permissions)
      ? SpaceAccessType.ORG
      : SpaceAccessType.ORG_GUEST
  }

  return SpaceAccessType.PERSONAL
}

/**
 * Gets background color based on theme and type
 * Original function: $$M9
 */
export function getBackgroundColorByTheme(theme: string, type?: string | null): string {
  if (type == null) {
    return "#00000000"
  }

  if (type === "whiteboard") {
    return "#ffffff"
  }

  return `#${getBackgroundColorForTheme(theme)}`
}

// Debounced viewport update
export const debouncedUpdateViewport = debounce((
  dispatch,
  viewport: string,
) => {
  dispatch(updateViewportFullscreen({ viewport }))
}, 1000)

// Exported constants with descriptive names
export const Gb = handleSearchResultClick
export const I$ = openRecentFile
export const Mx = openRecentPrototype
export const Ri = setSearchQuery
export const c3 = debouncedUpdateViewport
export const gt = getSearchScopeFromState
export const ht = initiateDesktopNewTabSearch
export const j3 = setIsSearchBarFocused
export const mg = setLoadingBackgroundColor
export const on = getBackgroundColorByTheme
export const x3 = createNewFile

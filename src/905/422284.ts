import type { ShowBranchMergeModalParams } from "../905/292918"
import { reportError } from "../905/11"
import { fullscreenRestoreModal } from "../905/26554"
import { showModalHandler } from "../905/156213"
import { ServiceCategories } from "../905/165054"
import { permissionScopeHandler } from "../905/189185"
import { showBranchMergeModalThunk } from "../905/292918"
import { handleMergeOnFileOpen } from "../905/300250"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { executeTeamUpgrade } from "../905/309846"
import { mapViewTypeToMainfestEditorType, parsePluginParams } from "../905/327571"
import { waitForJoinStatus } from "../905/346794"
import { createOptimistThunk } from "../905/350402"
import { tryPluginInFullscreen } from "../905/489647"
import { $ as inspectStateAtom } from "../905/532878"
import { InspectState } from "../905/560959"
import { parseAndNormalizeQuery } from "../905/634134"
import { fetchTeamRoles } from "../905/672897"
import { getSingletonSceneGraph } from "../905/700578"
import { parseSearchParams } from "../905/792802"
import { teamAPIClient } from "../905/834575"
import { canAccessDevModeWithOrg } from "../905/898378"
import { selectViewAction } from "../905/929976"
import { searchThunk } from "../905/977218"
import { filesByLibraryKeyAtom } from "../905/977779"
import { FEditorType } from "../figma_app/53721"
import { mapPathToSelectedView } from "../figma_app/193867"
import { teamFoldersQuery } from "../figma_app/199513"
import { setTeamOptimistThunk } from "../figma_app/240735"
import { emptyFunction } from "../figma_app/292324"
import { mapToEditorType } from "../figma_app/300692"
import { fullscreenPromise, fullscreenValue } from "../figma_app/455680"
import { getFullscreenViewFile } from "../figma_app/516028"
import { subscribeToContainingPage } from "../figma_app/582924"
import { findLibraryNameForAsset, usedComponentsPromise } from "../figma_app/646357"
import { SelectorType } from "../figma_app/707808"
import { AutosaveEventType, Fullscreen, SchemaJoinStatus, ViewType, WorkspaceType } from "../figma_app/763686"
import { enterVersionHistoryMode, setActiveVersion } from "../figma_app/841351"
import { updateLocalLibraryItemsThunk } from "../figma_app/864378"
import { switchAccountAndNavigate } from "../figma_app/976345"
import { atomStoreManager } from "./490038"
// Refactored from minified code in /Users/allen/github/fig/src/905/422284.ts
// Changes: Renamed variables for clarity (e.g., $$H to handleFileNavigation), added TypeScript interfaces for type safety, simplified nested conditionals, added comments explaining logic, preserved all functionality including dispatches and async operations.

// Define types for better type safety, inferred from code logic
interface RouteParams {
  params?: string
  hash?: string
}
interface ParsedQuery {
  "fuid"?: string
  "mode"?: string
  "m"?: string
  "version-id"?: string
  "vars"?: string
  "ready-for-dev"?: string
  "focus-id"?: string
  "component-browser"?: string
  "gh-settings"?: string
  "gh-repo-selector"?: string
  "component-key"?: string
  "var-id"?: string
  "try-plugin-id"?: string
  "try-plugin-name"?: string
  "try-plugin-version-id"?: string
  "is-widget"?: string
  "try-plugin-editor-type"?: string
  "is-playground-file"?: string
  "try-plugin-file-key"?: string
  "node-id"?: string
  "merge-branch-key"?: string
  "merge-source-key"?: string
  "merge-direction"?: string
  "merge-to-checkpoint-key"?: string
  "merge-from-checkpoint-key"?: string
  "merge-back-key"?: string
  "merge-on-file-open"?: string
  "checkpoint-diff-url"?: string
  "teamToMoveFileToOnNavigate"?: string
}
interface AppState {
  openFile?: {
    parentOrgId?: string
    key: string
    fileRepoId?: string
    editorType?: string
    folderId?: string
    teamId?: string
  }
  user?: {
    id: string
  }
  selectedView: {
    editorType: FEditorType
    view: string
    showDevModeVariablesTable?: boolean
    devModeVariablesTableSelectedVariable?: string
    showOverview?: boolean
    devModeFocusId?: string
    showDevModeComponentBrowser?: boolean
    componentKey?: string
    githubRepositorySelectorMode?: SelectorType
    commentThreadId?: string
    file?: {
      editor_type: string
      key: string
    }
    isPresenterView?: boolean
    nodeId?: string
    startingPointNodeId?: string
  }
  mirror: {
    sceneGraph: Map<string, SceneNode>
    appModel: {
      topLevelMode: ViewType
    }
  }
  library: {
    movedLibraryItems: {
      local: any
    }
    publishedByLibraryKey: {
      components: any
    }
  }
  teams: Record<string, any>
  fileVersion?: string
}
interface SceneNode {
  guid: string
  styleType: string
  type: string
  parentNode?: {
    type: string
    visible: boolean
  }
}

// Thunk for handling file navigation and various URL-based actions
const handleFileNavigation = createOptimistThunk(({ dispatch, getState }, routeParams, {
  liveStore,
}) => {
  const state: AppState = getState()
  if (state.openFile) {
    const parsedQuery: ParsedQuery = parseAndNormalizeQuery(routeParams.params || "")
    const hash = routeParams.hash
    const targetUserId = parsedQuery.fuid

    // Switch account if fuid differs from current user
    if (targetUserId && targetUserId !== state.user?.id) {
      dispatch(switchAccountAndNavigate({
        workspace: {
          userId: targetUserId,
          orgId: state.openFile.parentOrgId,
        },
        view: state.selectedView,
      }))
    }
    const mode = parsedQuery.mode || parsedQuery.m || "auto"
    const selectedView = state.selectedView
    const isInspectOrDev = mode === "inspect" || mode === "dev"

    // Toggle editor type based on mode and current view
    if (selectedView.editorType === FEditorType.Design && isInspectOrDev) {
      fullscreenValue.requestEditorType(WorkspaceType.DEV_HANDOFF)
    }
    else if (selectedView.editorType === FEditorType.DevHandoff && !isInspectOrDev && mode !== "auto") {
      fullscreenValue.requestEditorType(WorkspaceType.DESIGN)
    }

    // Handle version history
    if (parsedQuery["version-id"]) {
      dispatch(setActiveVersion({
        id: parsedQuery["version-id"],
      }))
      dispatch(enterVersionHistoryMode())
    }
    let hasFocusId = false
    const canAccessDev = canAccessDevModeWithOrg(state)
    if (parsedQuery.vars === "1") {
      atomStoreManager.set(inspectStateAtom, InspectState.DirectUrl)
      dispatch(selectViewAction({
        ...selectedView,
        showDevModeVariablesTable: true,
        devModeVariablesTableSelectedVariable: parsedQuery["var-id"],
      }))
    }
    else if (canAccessDev) {
      const currentView = getState().selectedView
      if (parsedQuery["ready-for-dev"] === "1") {
        dispatch(selectViewAction({
          ...currentView,
          showOverview: true,
          devModeFocusId: undefined,
        }))
      }
      else if (isInspectOrDev && parsedQuery["focus-id"]) {
        hasFocusId = true
        dispatch(selectViewAction({
          ...currentView,
          showOverview: false,
          devModeFocusId: parsedQuery["focus-id"],
        }))
      }
      else if (parsedQuery["component-browser"] === "1") {
        let selectorType = SelectorType.NONE
        if (parsedQuery["gh-settings"] === "repo") {
          selectorType = SelectorType.REPO_SELECTOR
        }
        else if (parsedQuery["gh-settings"] === "dirs") {
          selectorType = SelectorType.DIRECTORY_SELECTOR
        }
        else if (parsedQuery["gh-repo-selector"] === "1") {
          selectorType = SelectorType.REPO_SELECTOR
        }
        dispatch(selectViewAction({
          ...currentView,
          showDevModeComponentBrowser: true,
          componentKey: parsedQuery["component-key"] || undefined,
          githubRepositorySelectorMode: selectorType,
        }))
      }
    }
    if (parsedQuery.vars !== "1") {
      atomStoreManager.set(inspectStateAtom, null)
    }

    // Handle try plugin in fullscreen
    if (state.user && parsedQuery["try-plugin-id"]) {
      permissionScopeHandler.user("try-plugin-desktop", () => {
        dispatch(tryPluginInFullscreen({
          tryPluginId: parsedQuery["try-plugin-id"],
          tryPluginName: parsedQuery["try-plugin-name"],
          tryPluginVersionId: parsedQuery["try-plugin-version-id"],
          isWidget: parsedQuery["is-widget"] === "1",
          fullscreenEditorType: mapToEditorType(mapViewTypeToMainfestEditorType(parsedQuery["try-plugin-editor-type"] ?? "")),
          isPlaygroundFile: parsedQuery["is-playground-file"] === "1",
          tryPluginParams: parsePluginParams(parsedQuery),
          fileKey: parsedQuery["try-plugin-file-key"],
        }))
      })
    }

    // Helper function to handle node selection or panning
    const handleNodeSelection = (node: SceneNode) => {
      const nodeId = node.guid
      const hasStyle = node.styleType !== "NONE"
      const isSymbol = node.type === "SYMBOL"
      const parent = node.parentNode
      if (hasStyle) {
        Fullscreen.selectStyleByGuid(nodeId)
      }
      else if (isSymbol && parent && parent.type === "CANVAS" && !parent.visible) {
        usedComponentsPromise.then(async () => {
          const filesByLibrary = atomStoreManager.get(filesByLibraryKeyAtom)
          const movedToFile = findLibraryNameForAsset(nodeId, state.library.movedLibraryItems.local, state.library.publishedByLibraryKey.components, filesByLibrary) || undefined
          const fullscreenFile = await getFullscreenViewFile(dispatch)
          if (fullscreenFile?.canEdit) {
            dispatch(showModalHandler({
              type: fullscreenRestoreModal,
              data: {
                nodeId,
                movedToFile,
              },
            }))
          }
          else {
            dispatch(VisualBellActions.enqueue({
              message: movedToFile
                ? getI18nString("visual_bell.main_component_moved", {
                    movedToFile,
                  })
                : getI18nString("visual_bell.main_component_deleted"),
            }))
          }
        })
      }
      else {
        if (hasFocusId)
          return
        Fullscreen.panToNode(nodeId, true)
      }
    }
    const nodeId = parsedQuery["node-id"]
    const node = nodeId ? state.mirror.sceneGraph.get(nodeId) : null
    if (node != null) {
      handleNodeSelection(node)
    }
    else if (nodeId != null && selectedView.view === "fullscreen") {
      // Async handling for node not immediately available
      (async () => {
        await fullscreenPromise
        await fullscreenValue.onReady()
        await waitForJoinStatus(SchemaJoinStatus.JOINED)
        await subscribeToContainingPage(nodeId, AutosaveEventType.PAGE_INITIAL_LOAD)
        getSingletonSceneGraph().setCurrentPageFromNodeAsync(nodeId)
        const resolvedNode = nodeId ? state.mirror.sceneGraph.get(nodeId) : null
        if (resolvedNode)
          handleNodeSelection(resolvedNode)
      })()
    }

    // Handle comment thread from hash
    if (hash) {
      const threadId = hash.slice(1)
      if (state.selectedView.view === "fullscreen" && state.mirror.appModel.topLevelMode !== ViewType.BRANCHING && threadId !== "commentPreferences" && state.selectedView?.commentThreadId !== threadId) {
        dispatch(selectViewAction({
          ...state.selectedView,
          commentThreadId: threadId,
        }))
      }
    }

    // Handle merge operations
    if (parsedQuery["merge-branch-key"] && parsedQuery["merge-source-key"] && parsedQuery["merge-direction"]) {
      const {
        selectedView: currentView,
      } = getState()
      if (currentView.view === "fullscreen") {
        const mergeParams: ShowBranchMergeModalParams = {
          branchKey: parsedQuery["merge-branch-key"],
          sourceKey: parsedQuery["merge-source-key"],
          direction: parsedQuery["merge-direction"],
        }
        if (parsedQuery["merge-to-checkpoint-key"] && parsedQuery["merge-from-checkpoint-key"]) {
          mergeParams.toCheckpointKey = parsedQuery["merge-to-checkpoint-key"]
          mergeParams.fromCheckpointKey = parsedQuery["merge-from-checkpoint-key"]
        }
        if (parsedQuery["merge-back-key"]) {
          mergeParams.backFileKey = parsedQuery["merge-back-key"]
        }
        if (parsedQuery["merge-on-file-open"]) {
          mergeParams.mergeOnFileOpen = true
          const openFile = state.openFile
          if (!openFile)
            return
          if (parsedQuery["checkpoint-diff-url"]) {
            mergeParams.checkpointDiffURL = parsedQuery["checkpoint-diff-url"]
          }
          dispatch(handleMergeOnFileOpen({
            mergeParams,
            editingFile: {
              key: openFile.key,
              file_repo_id: openFile.fileRepoId,
            },
            migrationVersion: state.fileVersion,
            user: state.user,
          }))
          dispatch(updateLocalLibraryItemsThunk())
        }
        else {
          dispatch(showBranchMergeModalThunk(mergeParams))
        }
      }
    }

    // Async team file move handling
    (async () => {
      try {
        const {
          teams,
          user,
          openFile,
        } = state
        const teamIdToMove = parsedQuery.teamToMoveFileToOnNavigate
        if (teamIdToMove && openFile) {
          let team = null
          if (Object.keys(teams).length === 0) {
            const {
              data,
            } = await teamAPIClient.getTeam({
              teamId: teamIdToMove,
            })
            team = data.meta
            dispatch(setTeamOptimistThunk({
              team,
              userInitiated: false,
            }))
            await fetchTeamRoles(teamIdToMove, dispatch)
          }
          else {
            team = teamIdToMove ? teams[teamIdToMove] : null
          }
          if (!team)
            return
          const folder = (await liveStore.fetch(teamFoldersQuery({
            teamId: teamIdToMove,
          }), {
            policy: "networkOnly",
          }))[0] || null
          executeTeamUpgrade(team, folder, user, dispatch, {
            ...openFile,
            editor_type: openFile.editorType,
            folder_id: openFile.folderId,
            team_id: openFile.teamId,
          })
        }
      }
      catch (error) {
        reportError(ServiceCategories.DESKTOP, error)
      }
    })()
  }
})

// Thunk for handling prototype view navigation
const handlePrototypeNavigation = createOptimistThunk((dispatch: any, routeParams: RouteParams) => {
  const {
    selectedView,
  } = dispatch.getState()
  if (selectedView.view === "prototype") {
    const mode = selectedView.isPresenterView ? "presenter" : selectedView.file?.editor_type === "slides" ? "deck" : "proto"
    const newView = mapPathToSelectedView(dispatch.getState(), `/${mode}/${selectedView.file?.key}`, routeParams.params, routeParams.hash)
    if (newView && (newView.nodeId !== selectedView.nodeId || newView.startingPointNodeId !== selectedView.startingPointNodeId)) {
      emptyFunction() // Placeholder, possibly for side effects
      dispatch(selectViewAction(newView))
    }
  }
})

// Thunk for handling search view navigation
const handleSearchNavigation = createOptimistThunk((dispatch: any, routeParams: RouteParams) => {
  if (!routeParams.params)
    return
  const state = dispatch.getState()
  if (state.selectedView.view === "search") {
    const {
      query,
      searchModelType,
      searchScope,
    } = parseSearchParams(routeParams.params, state, state.selectedView)
    if (query) {
      dispatch(searchThunk({
        searchModelType,
        query,
        searchScope,
        debounce: false,
      }))
    }
  }
})

// Main thunk that checks for route changes and dispatches sub-thunks
export const handleRouteUpdate = createOptimistThunk((dispatch: any, routeParams: RouteParams) => {
  const currentUrl = new URL(window.location.href)
  const currentParams = currentUrl.searchParams
  const newParams = new URLSearchParams(routeParams.params)

  // Check if params match, ignoring minor differences like hyphens in node-id
  const paramsMatch = Array.from(newParams.entries()).every(([key, value]) => key === "node-id" ? currentParams.get(key)?.replace("-", ":") === value.replace("-", ":") : currentParams.get(key) === value)
  const modeRemoved = currentParams.get("m") != null && newParams.get("m") == null
  const versionRemoved = currentParams.get("version-id") != null && newParams.get("version-id") == null
  if (!paramsMatch || modeRemoved || versionRemoved || currentUrl.hash !== routeParams.hash) {
    dispatch(handleFileNavigation(routeParams))
    dispatch(handlePrototypeNavigation(routeParams))
    dispatch(handleSearchNavigation(routeParams))
  }
})

// Export with original name on left, refactored name on right
export const H = handleRouteUpdate

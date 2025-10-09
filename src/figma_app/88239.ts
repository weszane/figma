import { sum } from 'lodash-es'
import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { selectWithShallowEqual } from '../905/103090'
import { isFullscreenDevHandoffView } from '../905/782918'
import { useHasParentOrgId } from '../905/882262'
import { selectViewAction } from '../905/929976'
import { useAtomValueAndSetter } from '../figma_app/27355'
import { FEditorType } from '../figma_app/53721'
import { getObservableOrFallback } from '../figma_app/84367'
import { useCanAccessDevModeEntryPoint } from '../figma_app/473493'
import { subscribeToGuidsAndTrack } from '../figma_app/582924'
import { SelectorType } from '../figma_app/707808'
import { gk } from '../figma_app/715641'
import { useIsProgressBarHiddenOrLocked } from '../figma_app/722362'
import { AppStateTsApi, AutosaveEventType, HandoffBindingsCpp } from '../figma_app/763686'
import { handleEnterMode } from '../figma_app/806075'
import { atomH1 } from '../figma_app/879363'
import { trackFileEventWithStore } from '../figma_app/901889'

/**
 * Returns true if the selected view is fullscreen and showOverview is true.
 * @param selectedView - The selected view object from state.
 * @returns boolean
 * @originalName $$C4
 */
export function isFullscreenOverview(selectedView: any): boolean {
  return !!selectedView && selectedView?.view === 'fullscreen' && selectedView?.showOverview === true
}

/**
 * Selector for checking if the selected view is fullscreen and showDevModeComponentBrowser is true.
 * @returns boolean
 * @originalName $$v8
 */
export function useIsFullscreenDevModeComponentBrowser(): boolean {
  return useSelector((state) => {
    const selectedView = state.selectedView
    return !!selectedView && selectedView.view === 'fullscreen' && selectedView.showDevModeComponentBrowser === true
  })
}

/**
 * Selector for getting the componentKey if the selected view is fullscreen.
 * @returns string | undefined
 * @originalName $$A1
 */
export function useFullscreenComponentKey(): string | undefined {
  return useSelector((state) => {
    const selectedView = state.selectedView
    if (selectedView && selectedView.view === 'fullscreen') {
      return selectedView.componentKey
    }
    return undefined
  })
}

/**
 * Selector for checking if the github repository selector mode is active in fullscreen dev mode component browser.
 * @returns boolean
 * @originalName $$x14
 */
export function useIsGithubRepositorySelectorActive(): boolean {
  return useSelector((state) => {
    const selectedView = state.selectedView
    return (
      selectedView?.view === 'fullscreen'
      && selectedView?.showDevModeComponentBrowser === true
      && selectedView?.githubRepositorySelectorMode !== undefined
      && selectedView?.githubRepositorySelectorMode !== SelectorType.NONE
    )
  })
}

/**
 * Selector for getting the github repository selector mode in fullscreen dev mode component browser.
 * @returns SelectorType
 * @originalName $$N11
 */
export function useGithubRepositorySelectorMode(): SelectorType {
  return useSelector((state) => {
    const selectedView = state.selectedView
    return selectedView?.view === 'fullscreen' && selectedView?.showDevModeComponentBrowser === true
      ? selectedView?.githubRepositorySelectorMode ?? SelectorType.NONE
      : SelectorType.NONE
  })
}

/**
 * Selector for checking if the selected view is fullscreen and showOverview is true.
 * @returns boolean
 * @originalName $$S12
 */
export function useIsFullscreenOverview(): boolean {
  return useSelector(state => isFullscreenOverview(state.selectedView))
}

/**
 * Selector for getting the devModeFocusId if the selected view is a fullscreen dev handoff view.
 * @returns string | undefined
 * @originalName $$O13
 */
export function getDevModeFocusId(selectedView: any): string | undefined {
  if (selectedView && isFullscreenDevHandoffView(selectedView)) {
    return selectedView.devModeFocusId
  }
  return undefined
}

/**
 * Selector for getting the devModeFocusId from state.
 * @returns string | null
 * @originalName $$w9
 */
export function useDevModeFocusId(): string | null {
  return useSelector(state => getDevModeFocusId(state.selectedView) ?? null)
}

/**
 * Loads all nodes with statuses and subscribes to their GUIDs for tracking.
 * @returns Observable<any>
 * @originalName $$R3
 */
export function useNodesWithStatusLoaded(): any {
  const isProgressBarHiddenOrLocked = useIsProgressBarHiddenOrLocked()
  const nodesWithStatusLoaded = getObservableOrFallback(AppStateTsApi.currentSceneState().nodesWithStatusLoaded)

  useEffect(() => {
    if (isProgressBarHiddenOrLocked || nodesWithStatusLoaded)
      return
    const allNodesWithStatusesByPage = HandoffBindingsCpp.getAllNodesWithStatusesByPage()
    const nodeSet = new Set<string>()
    allNodesWithStatusesByPage.forEach((pageNodes) => {
      pageNodes.forEach(nodeId => nodeSet.add(nodeId))
    })
    subscribeToGuidsAndTrack(nodeSet, AutosaveEventType.DEV_HANDOFF_STATUS).then(() => {
      HandoffBindingsCpp.onAllNodesWithStatusesLoaded(allNodesWithStatusesByPage)
    })
  }, [isProgressBarHiddenOrLocked, nodesWithStatusLoaded])

  return nodesWithStatusLoaded
}

/**
 * Returns the sum of ready and completed nodes by page.
 * @returns number
 * @originalName $$L7
 */
export function useTotalReadyAndCompletedNodes(): number {
  const numReadyNodesByPage = getObservableOrFallback(AppStateTsApi.currentSceneState().numReadyNodesByPage)
  const numCompletedNodesByPage = getObservableOrFallback(AppStateTsApi.currentSceneState().numCompletedNodesByPage)

  return useMemo(() => sum([...numReadyNodesByPage.values(), ...numCompletedNodesByPage.values()]), [numReadyNodesByPage, numCompletedNodesByPage])
}

/**
 * Returns true if the user has a parent org ID and there are ready/completed nodes.
 * @returns boolean
 * @originalName $$P5
 */
export function useHasReadyNodesWithParentOrg(): boolean {
  const hasParentOrgId = useHasParentOrgId()
  const totalNodes = useTotalReadyAndCompletedNodes()
  return hasParentOrgId && totalNodes > 0
}

/**
 * Selector for getting the selected view with overview enabled if in fullscreen.
 * @returns any
 * @originalName $$D2
 */
export function useSelectedViewWithOverview(): any {
  const currentPage = useSelector(state => state.mirror.appModel.currentPage)
  return selectWithShallowEqual(state => state.selectedView.view === 'fullscreen'
    ? {
        ...state.selectedView,
        showOverview: true,
        overviewBackButtonTargetNodeId: currentPage,
      }
    : state.selectedView)
}

/**
 * Callback for handling Dev Mode Overview entry click.
 * @returns () => void
 * @originalName $$k6
 */
export function useDevModeOverviewEntryClick(): () => void {
  const store = useStore()
  const trackEvent = trackFileEventWithStore()
  const cannotAccessDevModeEntry = !useCanAccessDevModeEntryPoint()
  const [, setAtomH1] = useAtomValueAndSetter(atomH1)
  const dispatch = useDispatch<AppDispatch>()
  const [_, setGk] = useAtomValueAndSetter(gk)
  const selectedViewWithOverview = useSelectedViewWithOverview()

  return useCallback(() => {
    if (cannotAccessDevModeEntry)
      return
    trackEvent('Dev Mode Overview Entry Clicked')
    const state = store.getState()
    if ('editorType' in state.selectedView && state.selectedView.editorType === FEditorType.Design) {
      handleEnterMode(state, FEditorType.DevHandoff, 'overview_entry')
    }
    setAtomH1('entry_clicked')
    setGk(undefined)
    dispatch(selectViewAction(selectedViewWithOverview))
  }, [cannotAccessDevModeEntry, dispatch, selectedViewWithOverview, setGk, setAtomH1, store, trackEvent])
}

/**
 * Callback for selecting the component browser entrypoint.
 * @param entrypoint - The entrypoint value.
 * @returns () => void
 * @originalName $$M10
 */
export function useComponentBrowserEntrypoint(entrypoint: any): () => void {
  const dispatch = useDispatch<AppDispatch>()
  const selectedView = (() => {
    const currentPage = useSelector(state => state.mirror.appModel.currentPage)
    return selectWithShallowEqual(state => state.selectedView.view === 'fullscreen'
      ? {
          ...state.selectedView,
          showDevModeComponentBrowser: true,
          componentBrowserBackButtonTargetNodeId: currentPage,
          componentBrowserEntrypoint: entrypoint,
        }
      : state.selectedView)
  })()

  return useCallback(() => {
    dispatch(selectViewAction(selectedView))
  }, [dispatch, selectedView])
}

/**
 * Callback for updating the github repository selector mode.
 * @returns (mode: SelectorType) => void
 * @originalName $$F0
 */
export function useUpdateGithubRepositorySelectorMode(): (mode: SelectorType) => void {
  const dispatch = useDispatch<AppDispatch>()
  const selectedView = useSelector(state => state.selectedView)

  return useCallback((mode: SelectorType) => {
    if (selectedView.view === 'fullscreen') {
      dispatch(selectViewAction({
        ...selectedView,
        githubRepositorySelectorMode: mode,
      }))
    }
  }, [dispatch, selectedView])
}

// Exported variables with refactored names
export const Bt = useUpdateGithubRepositorySelectorMode
export const NZ = useFullscreenComponentKey
export const U0 = useSelectedViewWithOverview
export const US = useNodesWithStatusLoaded
export const Wl = isFullscreenOverview
export const X0 = useHasReadyNodesWithParentOrg
export const Xd = useDevModeOverviewEntryClick
export const ZI = useTotalReadyAndCompletedNodes
export const ZO = useIsFullscreenDevModeComponentBrowser
export const hA = useDevModeFocusId
export const ju = useComponentBrowserEntrypoint
export const kZ = useGithubRepositorySelectorMode
export const l7 = useIsFullscreenOverview
export const s4 = getDevModeFocusId
export const xV = useIsGithubRepositorySelectorActive

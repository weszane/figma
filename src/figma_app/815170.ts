import { permissionScopeHandler } from '../905/189185'
import { parseLinkForContext } from '../905/250387'
import { createOptimistThunk } from '../905/350402'
import { trackEventAnalytics } from '../905/449184'
import { customHistory } from '../905/612521'
import { isFullscreenDevHandoffView } from '../905/782918'
import { selectViewAction } from '../905/929976'
import { FEditorType } from '../figma_app/53721'
import { isChromebookTabbed } from '../figma_app/347146'
import { fullscreenValue } from '../figma_app/455680'
import { subscribeToContainingPage } from '../figma_app/582924'
import { hasNotLoaded } from '../figma_app/623300'
import { AppStateTsApi, AutosaveEventType, Fullscreen, HandoffBindingsCpp } from '../figma_app/763686'
import { Fm } from '../figma_app/770088'
import { enterVersionHistoryMode, setActiveVersion } from '../figma_app/841351'
import { desktopAPIInstance, popoutAPIInstance } from '../figma_app/876459'
import { openUrlInContext } from '../figma_app/976345'

/**
 * Handles hyperlink click events and navigates or focuses nodes based on context.
 * Original export: $$T0
 */
export const setupHyperlinkHandler = createOptimistThunk((dispatchApi, {
  rawInput,
  event,
}) => {
  const state = dispatchApi.getState()
  const isDevHandoffFullscreen = isFullscreenDevHandoffView(state.selectedView)
  const isSlidesFullscreen = state.selectedView.view === 'fullscreen' && state.selectedView.editorType === FEditorType.Slides
  const isSitesFullscreen = state.selectedView.view === 'fullscreen' && state.selectedView.editorType === FEditorType.Sites

  const {
    url,
    nodeIdInThisFile,
    commentThreadId,
    versionId,
    nextView,
    cmsItemId,
  } = parseLinkForContext(rawInput, state)

  let node = nodeIdInThisFile ? state.mirror.sceneGraph.get(nodeIdInThisFile) : null

  // External handler hook (original: n)
  if (hyperlinkHandlerHook) {
    hyperlinkHandlerHook(url, node)
    return
  }

  /** Analytics event context */
  const analyticsContext = {
    desktopApp: !!desktopAPIInstance,
    nodeInThisFile: !!nodeIdInThisFile,
    nodeMissing: !node,
    linkType: nextView ? nextView.view : url.startsWith('mailto:') ? 'mailto' : 'remote',
  }

  // Node navigation logic
  if (nodeIdInThisFile && event?.button !== 1 && !versionId) {
    /**
     * Navigates to node, focuses, pans, or applies CMS filter as needed.
     * Original inline function: t
     */
    const handleNodeNavigation = () => {
      node = node ?? state.mirror.sceneGraph.get(nodeIdInThisFile)

      if (node) {
        // Dev handoff fullscreen node focus
        if (isDevHandoffFullscreen && state.mirror.appModel.currentPage === Fullscreen?.getPageIdFromNode(node.guid)) {
          HandoffBindingsCpp?.selectAndFocusOnNode(node.guid, true)
        }
        else {
          // General fullscreen navigation
          fullscreenValue.triggerAction('goto-layer', { args: { nodeId: nodeIdInThisFile } })

          // Slides fullscreen node focus/pan
          if (isSlidesFullscreen && AppStateTsApi) {
            const slideView = AppStateTsApi.singleSlideView()
            slideView.isFocusedNodeViewEnabled()
              ? slideView.focusNodeInFocusedNodeView(nodeIdInThisFile, true)
              : slideView.panToNode(nodeIdInThisFile, 0)
          }

          // Sites fullscreen CMS filter
          if (isSitesFullscreen && cmsItemId) {
            permissionScopeHandler.system('cms-update-item-page-item-when-clicking-link', () => {
              node?.setDakotaSelectorSingleItemFilter(cmsItemId)
            })
          }
        }

        // Comment thread focus
        if (commentThreadId) {
          requestAnimationFrame(() => {
            dispatchApi.dispatch(Fm({ threadId: commentThreadId }))
          })
        }
      }
    }

    // Preload node if not loaded
    if (!node && hasNotLoaded(state.mirror.appModel.pagesList)) {
      subscribeToContainingPage(nodeIdInThisFile, AutosaveEventType.HYPERLINK_PRELOAD).then(handleNodeNavigation)
    }
    else {
      Promise.resolve().then(handleNodeNavigation)
    }

    trackEventAnalytics('Hyperlink Click', analyticsContext)
    return
  }

  // Desktop app navigation
  if (desktopAPIInstance) {
    if (nextView && nextView.view === 'fullscreen') {
      const currentView = state.selectedView
      if (currentView.view === 'fullscreen' && currentView.fileKey && currentView.fileKey === nextView.fileKey) {
        nextView.editorType = currentView.editorType
      }
      dispatchApi.dispatch(selectViewAction(nextView))
      if (nextView.versionId) {
        dispatchApi.dispatch(setActiveVersion({ id: nextView.versionId }))
        dispatchApi.dispatch(enterVersionHistoryMode())
      }
      trackEventAnalytics('Hyperlink Click', analyticsContext)
      return
    }
    if (nextView && nextView.view === 'prototype') {
      dispatchApi.dispatch(openUrlInContext({ url }))
      return
    }
  }

  // External URL navigation
  if (
    url.startsWith('mailto:')
    || url.startsWith('tel:')
    || url.startsWith('https://connect.stripe.com/setup/')
  ) {
    customHistory.unsafeRedirect(url, '_blank')
    return
  }

  // Fallback navigation for desktop/popout/Chromebook/tabbed
  if (desktopAPIInstance || popoutAPIInstance || isChromebookTabbed()) {
    customHistory.unsafeRedirect(url, '_blank')
  }
  else {
    customHistory.postRedirect(`/exit?url=${encodeURIComponent(url)}`, '_blank')
  }

  trackEventAnalytics('Hyperlink Click', analyticsContext)
})

/** External handler hook for hyperlink navigation (original: n) */
let hyperlinkHandlerHook: ((url: string, node: any) => void) | undefined

export const RK = setupHyperlinkHandler
export let n = hyperlinkHandlerHook

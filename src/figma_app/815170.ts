import { permissionScopeHandler } from '../905/189185'
import { ih } from '../905/250387'
import { createOptimistThunk } from '../905/350402'
import { trackEventAnalytics } from '../905/449184'
import { customHistory } from '../905/612521'
import { isFullscreenDevHandoffView } from '../905/782918'
import { selectViewAction } from '../905/929976'
import { FEditorType } from '../figma_app/53721'
import { ce } from '../figma_app/347146'
import { fullscreenValue } from '../figma_app/455680'
import { subscribeToContainingPage } from '../figma_app/582924'
import { lH } from '../figma_app/623300'
import { AppStateTsApi, AutosaveEventType, Fullscreen, HandoffBindingsCpp } from '../figma_app/763686'
import { Fm } from '../figma_app/770088'
import { enterVersionHistoryMode, setActiveVersion } from '../figma_app/841351'
import { desktopAPIInstance, popoutAPIInstance } from '../figma_app/876459'
import { V3 } from '../figma_app/976345'

let n
export let $$T0 = createOptimistThunk((e, {
  rawInput: t,
  event: r,
}) => {
  let y = e.getState()
  let T = isFullscreenDevHandoffView(y.selectedView)
  let I = y.selectedView.view === 'fullscreen' && y.selectedView.editorType === FEditorType.Slides
  let S = y.selectedView.view === 'fullscreen' && y.selectedView.editorType === FEditorType.Sites
  let {
    url,
    nodeIdInThisFile,
    commentThreadId,
    versionId,
    nextView,
    cmsItemId,
  } = ih(t, y)
  let O = nodeIdInThisFile ? y.mirror.sceneGraph.get(nodeIdInThisFile) : null
  if (n) {
    n(url, O)
    return
  }
  let R = {
    desktopApp: !!desktopAPIInstance,
    nodeInThisFile: !!nodeIdInThisFile,
    nodeMissing: !O,
    linkType: nextView ? nextView.view : url.startsWith('mailto:') ? 'mailto' : 'remote',
  }
  if (nodeIdInThisFile && r?.button !== 1 && !versionId) {
    let t = () => {
      (O = O ?? y.mirror.sceneGraph.get(nodeIdInThisFile)) && (T && y.mirror.appModel.currentPage === Fullscreen?.getPageIdFromNode(O.guid)
        ? HandoffBindingsCpp?.selectAndFocusOnNode(O.guid, !0)
        : (fullscreenValue.triggerAction('goto-layer', {
            args: {
              nodeId: nodeIdInThisFile,
            },
          }), I && AppStateTsApi && (AppStateTsApi.singleSlideView().isFocusedNodeViewEnabled() ? AppStateTsApi.singleSlideView().focusNodeInFocusedNodeView(nodeIdInThisFile, !0) : AppStateTsApi.singleSlideView().panToNode(nodeIdInThisFile, 0)), S && cmsItemId && permissionScopeHandler.system('cms-update-item-page-item-when-clicking-link', () => {
            O?.setDakotaSelectorSingleItemFilter(cmsItemId)
          })), commentThreadId && requestAnimationFrame(() => {
        e.dispatch(Fm({
          threadId: commentThreadId,
        }))
      }))
    }
    !O && lH(y.mirror.appModel.pagesList) ? subscribeToContainingPage(nodeIdInThisFile, AutosaveEventType.HYPERLINK_PRELOAD).then(t) : Promise.resolve().then(t)
    trackEventAnalytics('Hyperlink Click', R)
    return
  }
  if (desktopAPIInstance) {
    if (nextView && nextView.view === 'fullscreen') {
      let t = y.selectedView
      t.view === 'fullscreen' && t.fileKey && t.fileKey === nextView.fileKey && (nextView.editorType = t.editorType)
      e.dispatch(selectViewAction(nextView))
      nextView.versionId && (e.dispatch(setActiveVersion({
        id: nextView.versionId,
      })), e.dispatch(enterVersionHistoryMode()))
      trackEventAnalytics('Hyperlink Click', R)
      return
    }
    if (nextView && nextView.view === 'prototype') {
      e.dispatch(V3({
        url,
      }))
      return
    }
  }
  if (url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('https://connect.stripe.com/setup/')) {
    customHistory.unsafeRedirect(url, '_blank')
    return
  }
  desktopAPIInstance || popoutAPIInstance || ce() ? customHistory.unsafeRedirect(url, '_blank') : customHistory.postRedirect(`/exit?url=${encodeURIComponent(url)}`, '_blank')
  trackEventAnalytics('Hyperlink Click', R)
})
export const RK = $$T0

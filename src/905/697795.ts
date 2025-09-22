import { useSelector } from 'react-redux'
import { setLastVisitedId, setLastVisitedPlan } from '../905/93909'
import { hideModal } from '../905/156213'
import { EXTERNAL_TEAMS } from '../905/200237'
import { extractFirstEmoji, removePrefixAndVariation } from '../905/225144'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { getUserId } from '../905/372672'
import { trackEventAnalytics } from '../905/449184'
import { getFeatureFlags } from '../905/601108'
import { customHistory, hasViewProperty } from '../905/612521'
import { isBranch } from '../905/760074'
import { getFullscreenFile } from '../905/766303'
import { OrganizationType } from '../905/833838'
import { selectViewAction } from '../905/929976'
import { searchRestoreSessionAction } from '../905/977218'
import { FEditorType, mapFileTypeToEditorType } from '../figma_app/53721'
import { handleViewSelectionThunk } from '../figma_app/91703'
import { getInitialOptions } from '../figma_app/169182'
import { getSelectedViewName, mapPathToSelectedView } from '../figma_app/193867'
import { isSlidesFile } from '../figma_app/252485'
import { isChromebookTabbed } from '../figma_app/347146'
import { getCurrentSearchSessionId } from '../figma_app/387599'
import { fullscreenValue } from '../figma_app/455680'
import { BrowserInfo } from '../figma_app/778880'
import { getAutosaveFileInfo } from '../figma_app/840917'
import { desktopAPIInstance } from '../figma_app/876459'
import { hasQuery } from '../figma_app/930386'
import { openUrlInContext, trackFileClicked } from '../figma_app/976345'
import { getEditorTypeFromView } from '../figma_app/976749'

// Store the last used emoji for favicon updates (original: n)
let lastEmoji: string | undefined

/**
 * Returns the current release manifest git commit.
 * (original: $$D3)
 */
export function getReleaseManifestGitCommit(): string | undefined {
  return getInitialOptions().release_manifest_git_commit
}

/**
 * Sets the document title and favicon based on the provided parameters.
 * Handles Chromebook tabbed mode and emoji favicon logic.
 * (original: L)
 */
function setDocumentTitle(title: string, subtitle: string | null, prefix: string = ''): void {
  if (isChromebookTabbed()) {
    document.title = subtitle ? `${prefix}${subtitle}` : title
    return
  }
  const currentTitle = lastEmoji ? lastEmoji + document.title : document.title
  if (title !== currentTitle) {
    if (BrowserInfo.browserType !== 'safari') {
      let faviconLink: HTMLLinkElement | null = document.getElementById('custom-emoji-favicon') as HTMLLinkElement | null
      const emoji = extractFirstEmoji(title)
      if (emoji) {
        lastEmoji = emoji
        if (!faviconLink) {
          faviconLink = document.createElement('link')
          faviconLink.id = 'custom-emoji-favicon'
          faviconLink.rel = 'icon'
          document.head.appendChild(faviconLink)
        }
        faviconLink.href = `data:image/svg+xml,${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">{text}</text></svg>'.replace('{text}', emoji)}`
      } else {
        faviconLink && faviconLink.remove()
        lastEmoji = undefined
      }
      if (emoji) {
        title = removePrefixAndVariation(title, emoji)
      }
    }
    document.title = title
    if (desktopAPIInstance && subtitle) {
      desktopAPIInstance.setTitle(subtitle, prefix)
    }
  }
}

/**
 * Sets the document title based on editor type and file name.
 * (original: $$F6)
 */
export function setEditorDocumentTitle(fileName: string, editorType: FEditorType | null = null, prefix: string = ''): void {
  const suffix = (() => {
    switch (editorType) {
      case FEditorType.Whiteboard:
        return ' – FigJam'
      case FEditorType.Slides:
        return ' – Figma Slides'
      case FEditorType.Sites:
        return ' – Figma Sites'
      case FEditorType.Cooper:
        return ' – Figma Buzz'
      case FEditorType.Figmake:
        return ' – Figma Make'
      default:
        return ' – Figma'
    }
  })()
  setDocumentTitle(`${prefix}${fileName}${suffix}`, fileName, prefix)
}

/**
 * Sets the document title based on the selected view and file context.
 * (original: $$M2)
 */
export function setViewDocumentTitle(state: any, selectedView: any): void {
  let viewName = getSelectedViewName(state, selectedView)
  if (!viewName) {
    setDocumentTitle('Figma', null)
    return
  }
  if (selectedView.view === 'fullscreen' && selectedView.tryPluginName) {
    if (state.openFile) {
      setDocumentTitle(state.openFile.name, viewName)
    } else {
      setDocumentTitle(getI18nString('community.try.plugin_name_with_community', {
        pluginName: selectedView.tryPluginName,
      }), viewName)
    }
    return
  }
  if (selectedView.view === 'prototype') {
    let title: string
    let displayTitle = ''
    if (isSlidesFile(selectedView.file.editor_type)) {
      title = displayTitle = `${selectedView.isPresenterView ? getI18nString('slides.general.presenter') : getI18nString('slides.general.slide_deck')} · ${viewName} - ${getI18nString('slides.general.slides')}`
    } else {
      const pageName = (() => {
        const prototype = state.prototype
        for (const page of prototype.pages) {
          if (page.nodeId === prototype.currentPageId) return page.name
        }
        return ''
      })()
      if (pageName && state.prototype.pages.length > 1) {
        displayTitle = `▶ ${viewName} - ${pageName}`
        title = `${viewName} - ${pageName}`
      } else {
        displayTitle = `▶ ${viewName}`
        title = viewName
      }
    }
    setDocumentTitle(displayTitle, title)
    return
  }
  if (selectedView.view === 'fullscreen' && !state.openFile) {
    const autosaveInfo = getAutosaveFileInfo()
    if (autosaveInfo?.name) {
      viewName = autosaveInfo.name
    } else if (selectedView?.localFileName) {
      viewName = selectedView.localFileName
    }
  }
  const fullscreenFile = getFullscreenFile(state)
  if (fullscreenFile && isBranch(fullscreenFile)) {
    setDocumentTitle(`⌥ ${viewName}`, `${viewName}`)
    return
  }
  setEditorDocumentTitle(viewName, getEditorTypeFromView(selectedView))
}

/**
 * Redux thunk for handling browser history popstate events.
 * (original: $$j1)
 */
export const setupPopstateListener = createOptimistThunk(store => customHistory.listen((actionType) => {
  if (actionType === 'POP') {
    const handlePop = (locationState?: ObjectOf<any>) => {
      if (locationState) {
        const state = store.getState()
        const selectedView = state.selectedView
        if (!hasViewProperty(locationState)) return
        const { jsCommitHash, searchSessionId, ...newView } = locationState
        if (jsCommitHash !== undefined && jsCommitHash !== getReleaseManifestGitCommit()) {
          customHistory.reload('Navigating to a state that was pushed by an older version of this application')
          return
        }
        if (selectedView.view === 'fullscreen' && !fullscreenValue.isReady()) {
          customHistory.reload('User navigated before fullscreen fully initialized')
          return
        }
        if (newView.view === 'fullscreen' && !newView.fileKey) {
          window.history.back()
          return
        }
        if (selectedView.view === 'fullscreen' && (newView.view !== 'fullscreen' || selectedView.fileKey !== newView.fileKey)) {
          store.dispatch(handleViewSelectionThunk({
            oldSelectedView: selectedView,
            newSelectedView: newView,
          }))
        } else {
          store.dispatch(hideModal())
          if (newView.view === 'communityHub' && newView.subView === 'searchAndBrowse' && hasQuery(newView.data)) {
            const sessionId = getCurrentSearchSessionId(state)
            if (sessionId) {
              store.dispatch(searchRestoreSessionAction({ sessionId }))
            }
          }
          store.dispatch(selectViewAction({
            ...newView,
            fromPopstate: true,
          }))
          setViewDocumentTitle(state, newView)
        }
      }
    }
    handlePop(customHistory.location.state)
    if (!hasViewProperty(customHistory.location.state)) {
      const state = store.getState()
      const mappedView = mapPathToSelectedView(
        state,
        customHistory.location.pathname,
        customHistory.location.search,
        customHistory.location.hash,
        null
      )
      if (mappedView !== null) {
        store.dispatch(selectViewAction({
          ...mappedView,
          fromPopstate: true,
        }))
      }
    }
  }
}))

/**
 * Handles opening a file in fullscreen and updating last visited plan/id.
 * (original: $$U4)
 */
export function openFileInFullscreen(dispatch: Fn, file: any, orgId: string | null, teamId: string | null) {
  dispatch(trackFileClicked({ fileKey: file.key }))
  const planId = orgId || teamId
  const planType = orgId ? OrganizationType.ORG : OrganizationType.TEAM
  if (planId) {
    dispatch(setLastVisitedPlan({ planId, planType }))
  } else {
    dispatch(setLastVisitedId({ planId: orgId || EXTERNAL_TEAMS }))
  }
  dispatch(selectViewAction({
    view: 'fullscreen',
    fileKey: file.key,
    editorType: file.editorType ? mapFileTypeToEditorType(file.editorType) : FEditorType.Design,
  }))
}

/**
 * Tracks analytics and opens file in a new tab.
 * (original: $$B8)
 */
export function openFileInNewTab(url: string, fileKey: string, selectedView: any, dispatch: Fn): void {
  trackEventAnalytics('Open File in New Tab Click', {
    fileKey,
    uiSelectedView: JSON.stringify(selectedView),
  })
  dispatch(trackFileClicked({ fileKey }))
  customHistory.redirect(url, '_blank')
}

/**
 * Tracks analytics and opens prototype in a new tab.
 * (original: $$V0)
 */
export function openPrototypeInNewTab(url: string, fileKey: string, pageId: string, selectedView: any): void {
  trackEventAnalytics('Open Prototype in New Tab Click', {
    fileKey,
    pageId,
    uiSelectedView: JSON.stringify(selectedView),
  })
  customHistory.redirect(url, '_blank')
}

/**
 * Opens a URL in the current context.
 * (original: $$G5)
 */
export function openUrl(dispatch: Fn, url: string): void {
  dispatch(openUrlInContext({ url }))
}

/**
 * Checks if the user has access to a plan.
 * (original: $$z7)
 */
export function userHasPlan(planId: string, fallbackPlanId: string): boolean {
  const userId = getUserId()
  const targetPlanId = planId || fallbackPlanId
  const plans = useSelector<AppState, AppState['plans']>(state =>
    getFeatureFlags().limited_plan_spaces
      ? state.plans
      : userId
        ? state.authedUsers.byId[userId]?.plans
        : null
  ) 
  return !!plans?.find((plan: any) => plan.plan_id === targetPlanId)
}

// Export refactored names for external usage
export const D4 = openPrototypeInNewTab
export const De = setupPopstateListener
export const OR = setViewDocumentTitle
export const Qr = getReleaseManifestGitCommit
export const Tq = openFileInFullscreen
export const Wq = openUrl
export const hL = setEditorDocumentTitle
export const jm = userHasPlan
export const nz = openFileInNewTab

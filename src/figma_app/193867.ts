import { addBreadcrumb } from '@sentry/browser'
import { BaseViewManager } from '../905/27038'
import { CommunityHubNavigator } from '../905/122726'
import { IllustrationFullscreenViewHandler } from '../905/289978'
import { ViewSelectorGroup } from '../905/560883'
import { FigmascopeNavigator } from '../905/694285'
import { OrgSelfServePathHandler } from '../905/733330'
import { FigjamTryViewHandler } from '../905/778192'
import { SelectedViewPathHandler } from '../905/782918'
import { AbuseReportFormRouter } from '../905/832475'
import { OrganizationType } from '../905/833838'
import { DesktopNewTabViewHandler } from '../905/838114'
import { OrgViewHandler } from '../905/855105'
import { isCommunityHubSubView } from '../905/856857'
import { SelectedViewPathManager } from '../905/870666'
import { TeamRestoreViewHandler } from '../905/931569'
import { SelectedViewHandler } from '../905/992906'
import { FEditorType } from '../figma_app/53721'
import { ViewPathManager, viewSlugs } from '../figma_app/422062'
import { throwTypeError } from '../figma_app/465776'
import { ViewTypeEnum } from '../figma_app/471068'
import { getOrgId } from '../figma_app/502247'

/**
 * ViewSelectorGroup instance containing all view handlers and managers.
 * Original: $$A0
 */
export const viewSelectorGroup = new ViewSelectorGroup([
  new ViewPathManager(),
  new SelectedViewHandler(),
  new SelectedViewPathHandler(),
  new IllustrationFullscreenViewHandler(),
  new SelectedViewPathManager(),
  new TeamRestoreViewHandler(),
  new CommunityHubNavigator(),
  new OrgViewHandler(),
  new OrgSelfServePathHandler(),
  new FigmascopeNavigator(),
  new FigjamTryViewHandler(),
  new DesktopNewTabViewHandler(),
  new BaseViewManager(),
  new AbuseReportFormRouter(),
])

/**
 * Returns the absolute URL for a selected view.
 * Original: $$x14
 * @param orgId
 * @param view
 */
export function getSelectedViewUrl(orgId: string, view: any): string {
  return new URL(selectedViewToPath(orgId, view), document.baseURI).href
}

/**
 * Converts selected view to path.
 * Original: $$N6
 * @param orgId
 * @param view
 */
export function selectedViewToPath(orgId: string, view: any): string {
  return viewSelectorGroup.selectedViewToPath(view, orgId)
}

const viewSlugList = [
  'drafts',
  'fonts',
  'libraries',
  'search',
  'settings',
  'plugins',
  'widgets',
  'user',
  ...viewSlugs,
]
const fileViewRegex = new RegExp(`^/files/([0-9]+)/(?:${viewSlugList.join('|')})(.*)$`)
const fileRootRegex = /^\/files\/(\d+)\/?$/
const teamFileViewRegex = new RegExp(`^/files/team/([0-9]+)/(?:${viewSlugList.join('|')})(.*)$`)

/**
 * Splits and normalizes a path for view selection.
 * Original: L
 */
function normalizePath(path: string, orgId?: string, teamId?: string): string[] {
  const segments = path.split('/')
  if (segments[1] && segments[1] === 'files') {
    if (
      segments.length !== 6
      || segments[1] !== 'files'
      || segments[2] !== 'team'
      || segments[5] !== 'restore'
    ) {
      if (path.match(fileViewRegex)) {
        segments.splice(2, 1)
      }
      else if (path.match(teamFileViewRegex)) {
        segments.splice(2, 2)
      }
      else {
        if (segments.length >= 3 && orgId && segments[2] === orgId) {
          segments.splice(2, 1)
        }
        if (segments.length >= 3 && teamId && segments[3] === teamId) {
          segments.splice(2, 2)
        }
      }
    }
  }
  return segments
}

/**
 * Splits and normalizes a path for organization.
 * Original: P
 */
function normalizeOrgPath(path: string, orgId?: string): string[] {
  const segments = path.split('/')
  if (segments[1] && segments[1] === 'files') {
    if (path.match(fileViewRegex)) {
      segments.splice(2, 1)
    }
    else if (segments.length >= 3 && orgId && segments[2] === orgId) {
      segments.splice(2, 1)
    }
  }
  return segments
}

/**
 * Extracts file id from path.
 * Original: $$D10
 */
export function getFileIdFromPath(path: string): string | null {
  const match = path.match(fileViewRegex)
  if (match)
    return match[1]
  const rootMatch = path.match(fileRootRegex)
  return rootMatch ? rootMatch[1] : null
}

/**
 * Extracts team id from team file path.
 * Original: $$k15
 */
export function getTeamIdFromPath(path: string): string | null {
  const match = path.match(teamFileViewRegex)
  return match ? match[1] : null
}

/**
 * Normalizes path and removes trailing empty segments.
 * Original: $$M9
 */
export function getNormalizedPath(path: string): string[] {
  const segments = normalizeOrgPath(path, getOrgId())
  if (segments[segments.length - 1] === '') {
    segments.splice(segments.length - 1, 1)
  }
  return segments
}

/**
 * Maps a path to a selected view object.
 * Original: $$F13
 */
export function mapPathToSelectedView(
  appState: any,
  path: string,
  arg3: any,
  arg4: any,
  fallback: any = { view: 'recentsAndSharing' },
): any {
  // Normalize path and remove trailing empty segments
  let segments = normalizePath(path, appState.currentUserOrgId, appState.currentTeamId)
  if (segments[segments.length - 1] === '') {
    segments.splice(segments.length - 1, 1)
  }
  return viewSelectorGroup.pathToSelectedView(appState, segments, arg3, arg4) || fallback
}

/**
 * Replaces organization/team id in a path.
 * Original: $$j7
 */
export function replaceOrgOrTeamId(
  path: string,
  orgType: string,
  orgId: string,
  newOrgType: string,
  newOrgId: string,
): string {
  if (orgType === newOrgType && orgId === newOrgId)
    return path
  const current = orgType === OrganizationType.ORG ? orgId : `team/${orgId}`
  const replacement = newOrgType === OrganizationType.ORG ? newOrgId : `team/${newOrgId}`
  return path.replace(current, replacement)
}

/**
 * Gets the selected view name.
 * Original: $$U3
 */
export function getSelectedViewName(orgId: string, view: any): string {
  return viewSelectorGroup.selectedViewName(view, orgId)
}

/**
 * Checks if account settings modal is shown.
 * Original: $$B2
 */
export function isAccountSettingsModalShown(state: any): boolean {
  let modal = state.modalShown
  while (modal) {
    if (modal.type === 'ACCOUNT_SETTINGS_MODAL')
      return true
    modal = modal.prevModal
  }
  return false
}

/**
 * Checks if a view is a main view.
 * Original: $$G1
 */
export function isMainView(state: any): boolean {
  const { view } = state
  switch (view) {
    case 'deletedFiles':
    case 'folder':
    case 'team':
    case 'allProjects':
    case 'teamAdminConsole':
    case 'orgAdminSettings':
    case 'licenseGroup':
    case 'workspace':
    case 'billingGroupDashboard':
    case 'search':
    case 'fullscreen':
    case 'org':
    case 'user':
    case 'resourceUnavailable':
    case 'feed':
    case 'desktopNewTab':
    case 'modalInIFrame':
    case 'teamFeed':
    case 'limitedTeamSharedProjects':
    case 'recentsAndSharing':
    case 'draftsToMove':
    case 'orgDomainManagement':
    case 'orgIdpManagement':
    case 'abandonedDraftFiles':
    case 'trashedFolders':
    case 'seatRequests':
    case 'resourceHub':
      return true
    case 'teamCreation':
    case 'teamUpgrade':
    case 'teamRestore':
    case 'addCollaborators':
    case 'promoReview':
    case 'eduReview':
    case 'orgSelfServe':
    case 'communityHub':
    case 'prototype':
    case 'figmascope':
    case 'mobileViewer':
    case 'figjamTry':
    case 'presentation':
    case 'litmus':
    case 'litmus-standalone':
    case 'componentBrowserLibrary':
    case 'abuseReportForm':
      return false
    default:
      throwTypeError(view)
  }
}

/**
 * Checks if workshop mode is active.
 * Original: $$V16
 */
export function isWorkshopModeActive(state: any): boolean {
  return (
    state.view === 'fullscreen'
    && state.workshopModeInfoLoaded
    && state.workshopModeInfo
    && state.editorType === FEditorType.Whiteboard
    && new Date() < state.workshopModeInfo.until
  ) || false
}

/**
 * Checks if try plugin modal is shown.
 * Original: $$H11
 */
export function isTryPluginModalShown(state: any): boolean {
  return !!(
    state.view === 'fullscreen'
    && state.tryPluginId
    && state.tryPluginName
    && state.tryPluginVersionId
  )
}

/**
 * Gets node id if view is fullscreen.
 * Original: $$z12
 */
export function getFullscreenNodeId(state: any): string | null {
  return state.view === 'fullscreen' && state.nodeId ? state.nodeId : null
}

/**
 * Gets file key from selected view.
 * Original: $$W8
 */
export function getFileKeyFromSelectedView(state: any): string | null {
  switch (state.view) {
    case 'fullscreen':
      return state.fileKey || null
    case 'mobileViewer':
      return state.file?.key || null
    case 'prototype':
      if (state.file == null) {
        addBreadcrumb({ data: { selectedView: state } })
      }
      return state.file.key
    default:
      return null
  }
}

/**
 * Checks if view is recentsAndSharing and tab is recently viewed.
 * Original: $$$$K4
 */
export function isRecentsAndSharingView(state: any): boolean {
  return (
    state.view === 'recentsAndSharing'
    && (state.tab === undefined || state.tab === ViewTypeEnum.RECENTLY_VIEWED)
  )
}

/**
 * Checks if view is resource hub or community hub subview.
 * Original: $$Y5
 */
export function isResourceOrCommunityHubView(state: any): boolean {
  return state.view === 'resourceHub' || isCommunityHubSubView(state)
}

// Export aliases for backward compatibility and refactored names
export const YJ = viewSelectorGroup
export const CR = isMainView
export const IE = isAccountSettingsModalShown
export const Iu = getSelectedViewName
export const K = isRecentsAndSharingView
export const Mo = isResourceOrCommunityHubView
export const Np = selectedViewToPath
export const Tk = replaceOrgOrTeamId
export const U2 = getFileKeyFromSelectedView
export const YP = getNormalizedPath
export const bW = getFileIdFromPath
export const i1 = isTryPluginModalShown
export const s5 = getFullscreenNodeId
export const vU = mapPathToSelectedView
export const xS = getSelectedViewUrl
export const yn = getTeamIdFromPath
export const zg = isWorkshopModeActive

// Imports: Refactored to use named exports matching new function names
import {
  analyticsEventManager,
  clearAnalyticsStorage,
  trackEventAnalytics,
} from '../905/449184'
import { findTeamById } from '../905/613917'
import { logInfo } from '../905/714362'
import { FEditorType } from '../figma_app/53721'
import { FFileType, FResourceCategoryType } from '../figma_app/191312'
import { ViewTypeEnum } from '../figma_app/471068'
import { AppStateTsApi, LogToConsoleMode, Multiplayer } from '../figma_app/763686'

/**
 * Maps FEditorType to product type string.
 * @param editorType - FEditorType
 * @returns Product type string
 * (Original: $$p1)
 */
export function mapEditorTypeToProductType(editorType: FEditorType): string {
  switch (editorType) {
    case FEditorType.Design: return 'design'
    case FEditorType.Whiteboard: return 'figjam'
    case FEditorType.DevHandoff: return 'dev_handoff'
    case FEditorType.Slides: return 'slides'
    case FEditorType.Sites: return 'sites'
    case FEditorType.Figmake: return 'make'
    case FEditorType.Cooper: return 'buzz'
    case FEditorType.Illustration: return 'draw'
    default: return 'unknown'
  }
}

/**
 * Maps file object/editorType to product type string.
 * @param file - File object with editorType
 * @returns Product type string
 * (Original: $$_30)
 */
export function mapFileToProductType(file: { editorType?: FFileType }): string {
  switch (file && file.editorType) {
    case FFileType.DESIGN: return 'design'
    case FFileType.WHITEBOARD: return 'figjam'
    case FFileType.SLIDES: return 'slides'
    case FFileType.SITES: return 'sites'
    case FFileType.FIGMAKE: return 'make'
    case FFileType.COOPER: return 'buzz'
    default: return 'unknown'
  }
}

/**
 * Determines product type based on view and editorType.
 * @param selectedView - Selected view object
 * @param editorType - Editor type
 * @returns Product type string
 * (Original: $$h33)
 */
export function getProductType(selectedView: any, editorType?: FFileType): string {
  return selectedView?.view === 'fullscreen'
    ? mapEditorTypeToProductType(selectedView.editorType)
    : editorType
      ? mapFileToProductType({ editorType })
      : 'unknown'
}

/**
 * Finds file by key from state.
 * @param key - File key
 * @param state - State object
 * @returns File object or null
 * (Original: m)
 */
export function findFileByKey(key: string, state: any): any | null {
  switch (state?.selectedView?.view) {
    case 'prototype':
    case 'mobileViewer':
      return state.selectedView.file?.key === key ? state.selectedView.file || null : null
    default:
      return key && state.fileByKey[key] || null
  }
}

// Internal state for loadID and reconnectId
let loadID: string | null = null

/**
 * Gets current loadID.
 * (Original: $$f19)
 */
export function getLoadID(): string | null {
  return loadID
}

/**
 * Sets loadID.
 * @param id - Load ID
 * (Original: $$E36)
 */
export function setLoadID(id: string): void {
  loadID = id
}

// Internal reconnect counter
let reconnectCounter = 0

/**
 * Gets reconnect counter as string.
 * (Original: $$b9)
 */
export function getReconnectId(): string {
  return reconnectCounter.toString()
}

/**
 * Resets reconnect counter.
 * (Original: $$T13)
 */
export function resetReconnectCounter(): void {
  reconnectCounter = 0
}

/**
 * Increments reconnect counter.
 * (Original: $$I6)
 */
export function incrementReconnectCounter(): void {
  reconnectCounter++
}

/**
 * Builds analytics event payload for file.
 * @param fileKey - File key
 * @param fileObj - File object
 * @param state - State object
 * @param extra - Extra payload
 * @returns Analytics payload object
 * (Original: S)
 */
export function buildFileAnalyticsPayload(
  fileKey: string,
  fileObj: any,
  state: any,
  extra: Record<string, any> = {},
): Record<string, any> {
  const productType = getProductType(state?.selectedView, fileObj && fileObj.editor_type)
  const payload: Record<string, any> = {
    ...extra,
    ...getSlideViewAnalytics(productType, state?.selectedView?.view),
    productType,
    fileKey: fileKey || 'new',
    fileParentOrgId: fileObj && fileObj.parent_org_id,
    fileTeamId: fileObj && fileObj.team_id,
    containingFolderId: fileObj && fileObj.folder_id,
    entrypoint: extra.entrypoint,
    figmaBasicsExperiment: fileObj?.track_tags?.figma_basics_experiment,
    fileIsIncremental: !!Multiplayer?.isIncrementalSession(),
    fileIsValidatingIncremental: !!Multiplayer?.isValidatingIncremental(),
    isStagingChanges: !!Multiplayer?.isStagingChanges(),
  }
  if (fileObj && fileObj.file_repo_id)
    payload.fileRepoId = fileObj.file_repo_id
  if (loadID) {
    payload.loadID = loadID
    payload.reconnectId = getReconnectId()
  }
  return payload
}

/**
 * Returns slide view analytics for slides in fullscreen.
 * @param productType - Product type
 * @param view - View string
 * @returns Slide view analytics object
 * (Original: $$v8)
 */
export function getSlideViewAnalytics(productType: string, view: string): Record<string, any> {
  if (productType === FFileType.SLIDES && view === 'fullscreen') {
    return {
      slide_view: AppStateTsApi?.singleSlideView()?.isFocusedNodeViewEnabled() ? 'ssv' : 'grid',
    }
  }
  return {}
}

/**
 * Clears analytics storage.
 * (Original: $$A12)
 */
export function clearAnalytics(): void {
  clearAnalyticsStorage()
}

/**
 * Tracks event analytics for file.
 * @param event - Event name
 * @param fileKey - File key
 * @param state - State object
 * @param extra - Extra payload
 * @param options - Options
 * (Original: $$x20)
 */
export function trackFileEvent(
  event: string,
  fileKey: string,
  state: any,
  extra: Record<string, any> = {},
  options?: any,
): void {
  const fileObj = findFileByKey(fileKey, state)
  const payload = buildFileAnalyticsPayload(fileKey, fileObj, state, extra)
  trackEventAnalytics(event, payload, options)
}

/**
 * Tracks event analytics for file object.
 * @param event - Event name
 * @param fileObj - File object
 * @param state - State object
 * @param extra - Extra payload
 * @param options - Options
 * (Original: $$N21)
 */
export function trackFileObjEvent(
  event: string,
  fileObj: any,
  state: any,
  extra: Record<string, any> = {},
  options?: any,
): void {
  const payload = buildFileAnalyticsPayload(fileObj.key, fileObj, state, extra)
  trackEventAnalytics(event, payload, options)
}

/**
 * Tracks defined analytics event.
 * @param event - Event name
 * @param fileKey - File key
 * @param state - State object
 * @param extra - Extra payload
 * (Original: $$C5)
 */
export function trackDefinedFileEvent(
  event: string,
  fileKey: string,
  state: any,
  extra?: Record<string, any>,
): void {
  const fileObj = findFileByKey(fileKey, state)
  const payload = buildFileAnalyticsPayload(fileKey, fileObj, state, extra)
  analyticsEventManager.trackDefinedEvent(event, payload)
}

/**
 * Tracks file browser file click event.
 * @param event - Event name
 * @param fileObj - File object
 * @param extra - Extra payload
 * @param options - Options
 * (Original: $$w2)
 */
export function trackFileBrowserFileClick(
  event: string,
  fileObj: any,
  extra: Record<string, any> = {},
  options?: any,
): void {
  extra.productType = fileObj && mapFileToProductType(fileObj)
  extra.fileKey = fileObj?.key || 'new'
  extra.fileParentOrgId = fileObj?.parentOrgId
  extra.fileTeamId = fileObj?.teamId
  extra.containingFolderId = fileObj?.folderId
  if (fileObj && fileObj.fileRepoId)
    extra.fileRepoId = fileObj.fileRepoId
  trackEventAnalytics(event, extra, options)
}

// Exported constants (Original: $$O23, $$X15, etc.)
export const FILE_BROWSER_FILE_CLICKED = 'File Browser File Clicked'
export const CTA_CLICKED = 'CTA Clicked'
export const DISABLED_TEAM_CREATION_BUTTON_HOVERED = 'Disabled Team Creation Button Hovered'
export const TEAM_CREATION_BUTTON_HOVERED_TIMEOUT = 5000

// Exported enums (Original: $$J17)
export enum PopulationStatus {
  NOT_POPULATED = 'not_populated',
  POPULATED_INCOMPLETE = 'populated_incomplete',
  POPULATED_COMPLETE = 'populated_complete',
}

// Exported functions (Original: $$R25, $$L7, etc.)
/**
 * Tracks file browser file click event with state.
 * @param fileKey - File key
 * @param params - Params object
 * @param options - Options
 * (Original: $$R25)
 */
export function trackFileBrowserFileClicked(
  fileKey: string,
  params: any,
  options?: any,
): void {
  if (params.state) {
    let selectedView
    const n = params.state
    if (n.selectedView.view === 'recentsAndSharing') {
      selectedView = n.selectedView.tab || ViewTypeEnum.RECENTLY_VIEWED
    }
    else if (n.selectedView.view === 'folder' && n.selectedView.folderId === n.user?.drafts_folder_id) {
      selectedView = 'drafts'
    }
    else {
      selectedView = n.selectedView.view
    }
    trackFileEvent(FILE_BROWSER_FILE_CLICKED, fileKey, params.state, {
      selectedView,
      entrypoint: params.entrypoint,
      planFilterId: params.planFilterId,
      planFilterType: params.planFilterType,
      sharedByFilter: params.sharedByFilter,
      viewMode: params.viewMode,
    }, options)
  }
  else {
    if (params.selectedViewName) {
      trackEventAnalytics(FILE_BROWSER_FILE_CLICKED, {
        fileKey,
        selectedView: params.selectedViewName,
        entrypoint: params.entrypoint,
      }, options)
    }
    else {
      trackEventAnalytics(FILE_BROWSER_FILE_CLICKED, {
        fileKey,
        entrypoint: params.entrypoint,
      }, options)
    }
  }
}

/**
 * Tracks file browser loaded event.
 * @param view - View object
 * @param orgId - Org ID
 * @param teamId - Team ID
 * @param isLimitedTeamPlanSpace - Boolean
 * (Original: $$L7)
 */
export function trackFileBrowserLoaded(
  view: any,
  orgId: string,
  teamId: string,
  isLimitedTeamPlanSpace: boolean,
): void {
  trackEventAnalytics('file_browser_loaded', {
    selectedView: view.view,
    currentOrgId: orgId,
    currentTeamId: teamId,
    isLimitedTeamPlanSpace,
  })
}

/**
 * Tracks file browser page visit event.
 * @param view - View object
 * (Original: $$P27)
 */
export function trackFileBrowserPageVisit(view: any): void {
  trackEventAnalytics('file_browser_page_visit', {
    selectedView: view.view,
  })
}

/**
 * Tracks file browser plan filter selected event.
 * @param planId - Plan ID
 * @param entryPoint - Entry point
 * @param planType - Plan type
 * (Original: $$D3)
 */
export function trackFileBrowserPlanFilterSelected(
  planId: string,
  entryPoint: string,
  planType: string,
): void {
  trackEventAnalytics('file_browser_plan_filter_selected', {
    planId,
    entryPoint,
    planType,
  })
}

/**
 * Tracks file browser sharer filter selected event.
 * @param sharerId - Sharer ID
 * @param entryPoint - Entry point
 * (Original: $$k26)
 */
export function trackFileBrowserSharerFilterSelected(
  sharerId: string,
  entryPoint: string,
): void {
  trackEventAnalytics('file_browser_sharer_filter_selected', {
    sharerId,
    entryPoint,
  })
}

/**
 * Tracks multiple file event analytics.
 * @param event - Event name
 * @param files - Array of file objects
 * @param extra - Extra payload
 * @param options - Options
 * (Original: $$M10)
 */
export function trackMultipleFileEvent(
  event: string,
  files: any[],
  extra: Record<string, any> = {},
  options?: any,
): void {
  extra.fileKeys = files.map(f => f.key)
  extra.fileParentOrgIds = files.map(f => f.parent_org_id)
  extra.fileTeamIds = files.map(f => f.team_id)
  extra.containingFolderIds = files.map(f => f.folder_id)
  trackEventAnalytics(event, extra, options)
}

/**
 * Tracks file copy event analytics.
 * @param event - Event name
 * @param fileKeys - Array of file keys
 * @param state - State object
 * @param extra - Extra payload
 * @param options - Options
 * (Original: $$F11)
 */
export function trackFileCopyEvent(
  event: string,
  fileKeys: string[],
  state: any,
  extra: Record<string, any> = {},
  options?: any,
): void {
  const files = fileKeys.map(key => state.fileByKey[key])
  extra.fileKeys = fileKeys
  extra.fileParentOrgIds = files.map(f => f.parent_org_id)
  extra.fileTeamIds = files.map(f => f.team_id)
  extra.containingFolderIds = files.map(f => f.folder_id)
  trackEventAnalytics(event, extra, options)
}

/**
 * Tracks file event for array of file objects.
 * @param event - Event name
 * @param files - Array of file objects
 * @param extra - Extra payload
 * @param options - Options
 * (Original: $$j29)
 */
export function trackFileArrayEvent(
  event: string,
  files: any[],
  extra: Record<string, any> = {},
  options?: any,
): void {
  extra.fileKeys = files.map(f => f.key)
  extra.fileParentOrgIds = files.map(f => f.parentOrgId)
  extra.fileTeamIds = files.map(f => f.teamId)
  extra.containingFolderIds = files.map(f => f.folderId)
  trackEventAnalytics(event, extra, options)
}

/**
 * Tracks file copied event.
 * @param files - Array of file objects
 * @param copiedFiles - Array of copied file objects
 * @param state - State object
 * @param options - Options
 * (Original: $$U18)
 */
export function trackFileCopied(
  files: any[],
  copiedFiles: any[],
  state: any,
  options?: any,
): void {
  const fileKeys = files.map(f => f.key)
  const copiedFileKeys = copiedFiles.map(f => f.key)
  const copiedContainingFolderIds = copiedFiles.map(f => f.folder_id)
  const copiedFileTeamIds = copiedFiles.map(f => f.team_id)
  trackFileCopyEvent('File Copied', fileKeys, state, {
    copiedFileKeys,
    copiedContainingFolderIds,
    copiedFileTeamIds,
  }, options)
}

/**
 * Tracks folder event analytics.
 * @param event - Event name
 * @param folderId - Folder ID
 * @param teamId - Team ID
 * @param state - State object
 * @param extra - Extra payload
 * @param options - Options
 * (Original: $$B34)
 */
export function trackFolderEvent(
  event: string,
  folderId: string,
  teamId: string,
  state: any,
  extra: Record<string, any> = {},
  options?: any,
): void {
  const folder = state.folders[folderId]
  extra.folderId = folder?.id || folderId
  extra.folderTeamId = folder?.team_id || teamId
  trackEventAnalytics(event, extra, options)
}

/**
 * Tracks team event analytics.
 * @param event - Event name
 * @param teamId - Team ID
 * @param orgId - Org ID
 * @param extra - Extra payload
 * @param options - Options
 * (Original: $$G16)
 */
export function trackTeamEvent(
  event: string,
  teamId: string,
  orgId: any,
  extra: Record<string, any> = {},
  options?: any,
): void {
  const team = findTeamById(teamId, orgId)
  extra.teamId = team?.id
  extra.teamName = team?.name
  trackEventAnalytics(event, extra, options)
}

/**
 * Tracks org event analytics.
 * @param event - Event name
 * @param orgId - Org ID
 * @param state - State object
 * @param extra - Extra payload
 * @param options - Options
 * (Original: $$V4)
 */
export function trackOrgEvent(
  event: string,
  orgId: string,
  state: any,
  extra: Record<string, any> = {},
  options?: any,
): void {
  const org = state.orgById[orgId]
  extra.orgId = org.id
  extra.orgName = org.name
  trackEventAnalytics(event, extra, options)
}

/**
 * Tracks user event analytics.
 * @param event - Event name
 * @param params - Params object
 * @param extra - Extra payload
 * @param options - Options
 * (Original: $$H32)
 */
export function trackUserEvent(
  event: string,
  params: any,
  extra: Record<string, any> = {},
  options?: any,
): void {
  extra.userId = params.user && params.user.id
  trackEventAnalytics(event, extra, options)
}

// Resource type mapping (Original: z)
const resourceTypeToKey: Record<FResourceCategoryType, string> = {
  [FResourceCategoryType.FILE]: 'fileKey',
  [FResourceCategoryType.FILE_REPO]: 'fileRepoId',
  [FResourceCategoryType.FOLDER]: 'folderId',
  [FResourceCategoryType.TEAM]: 'teamId',
}

/**
 * Tracks role event analytics.
 * @param event - Event name
 * @param roleObj - Role object
 * @param extra - Extra payload
 * @param options - Options
 * (Original: $$W37)
 */
export function trackRoleEvent(
  event: string,
  roleObj: any,
  extra: Record<string, any> = {},
  options?: any,
): void {
  const key = resourceTypeToKey[roleObj.resource_type]
  extra.roleId = roleObj.id
  extra[key] = roleObj.resource_id_or_key
  if (roleObj.user_id)
    extra.roleUserId = roleObj.user_id
  trackEventAnalytics(event, extra, options)
}

/**
 * Tracks generic event analytics.
 * @param event - Event name
 * @param payload - Payload object
 * (Original: $$K35)
 */
export function trackGenericEvent(event: string, payload: any): void {
  trackEventAnalytics(event, payload)
}

/**
 * Returns file edit info.
 * @param fileObj - File object
 * @returns Edit info object
 * (Original: $$Y28)
 */
export function getFileEditInfo(fileObj: any): { canEdit: boolean, fileKey: string, productType: string } {
  return {
    canEdit: fileObj.canEdit,
    fileKey: fileObj.key,
    productType: mapFileToProductType(fileObj),
  }
}

/**
 * Logs CTA click and tracks analytics.
 * @param payload - Payload object
 * @param eventName - Event name
 * @param sendAsBeacon - Send as beacon flag
 * @param options - Options
 * (Original: $$q0)
 */
export function logAndTrackCTA(
  payload: any,
  eventName?: string,
  sendAsBeacon?: boolean,
  options?: any,
): void {
  const event = eventName || CTA_CLICKED
  logInfo(event, payload.text || '', payload, { logToConsole: LogToConsoleMode.NEVER })
  const analyticsPayload = { ...payload, nonInteraction: 0 }
  trackEventAnalytics(event, analyticsPayload, {
    forwardToDatadog: true,
    sendAsBeacon,
    ...options,
  })
}

/**
 * Tracks input blurred event.
 * @param payload - Payload object
 * @param options - Options
 * (Original: $$Z22)
 */
export function trackInputBlurred(payload: any, options?: any): void {
  const analyticsPayload = { ...payload, nonInteraction: 0 }
  trackEventAnalytics('Input Blurred', analyticsPayload, options)
}

/**
 * Tracks context viewed event.
 * @param payload - Payload object
 * @param options - Options
 * (Original: $$Q31)
 */
export function trackContextViewed(payload: any, options: any = {}): void {
  trackEventAnalytics('Context Viewed', payload, {
    forwardToDatadog: true,
    ...options,
  })
}

// Exported aliases for backward compatibility (original export names)
export const Cu = logAndTrackCTA
export const Dc = mapEditorTypeToProductType
export const E9 = trackFileBrowserFileClick
export const FE = trackFileBrowserPlanFilterSelected
export const Fr = trackOrgEvent
export const GS = trackDefinedFileEvent
export const Hb = incrementReconnectCounter
export const I0 = trackFileBrowserLoaded
export const Nb = getSlideViewAnalytics
export const Nq = getReconnectId
export const OH = trackMultipleFileEvent
export const PB = trackFileCopyEvent
export const Pg = clearAnalytics
export const QM = resetReconnectCounter
export const WL = TEAM_CREATION_BUTTON_HOVERED_TIMEOUT
export const Ws = CTA_CLICKED
export const _J = trackTeamEvent
export const _R = PopulationStatus
export const ak = trackFileCopied
export const cf = getLoadID
export const ds = trackFileEvent
export const f5 = trackFileObjEvent
export const fy = trackInputBlurred
export const gH = FILE_BROWSER_FILE_CLICKED
export const jd = DISABLED_TEAM_CREATION_BUTTON_HOVERED
export const k1 = trackFileBrowserFileClicked
export const nX = trackFileBrowserSharerFilterSelected
export const o5 = trackFileBrowserPageVisit
export const oP = getFileEditInfo
export const pf = trackFileArrayEvent
export const pi = mapFileToProductType
export const qD = trackContextViewed
export const uE = trackUserEvent
export const v5 = getProductType
export const xr = trackFolderEvent
export const ye = trackGenericEvent
export const ys = setLoadID
export const z_ = trackRoleEvent

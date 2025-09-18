import { ThunkDispatch } from 'redux-thunk' // optional helper type (not required by runtime)
import { setDeletedFiles, setDeletedRepos, setFileBrowserLoading } from '../905/34809'
import { hideModal } from '../905/156213'
import { trashedFoldersAPI } from '../905/190576'
import { sessionApiInstance } from '../905/202181'
import { delay } from '../905/236856'
import { sendMessageToParent } from '../905/298920'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { FolderSchema } from '../905/316062'
import { createOptimistThunk } from '../905/350402'
import { trackEventAnalytics } from '../905/449184'
import { trashedFilesValidatorAPI } from '../905/494706'
import { appendSearchParams } from '../905/508367'
import { FlashActions } from '../905/573154'
import { getFeatureFlags } from '../905/601108'
import { customHistory } from '../905/612521'
import { setupLoadingStateHandler } from '../905/696711'
import { liveStoreInstance } from '../905/713695'
import { IpcStorageHandler } from '../905/724705'
import { isVsCodeEnvironment } from '../905/858738'
import { XHR } from '../905/910117'
import { hideDropdownAction, selectViewAction, setSessionStateAction, showDropdownThunk } from '../905/929976'
import { getSelectedViewUrl, selectedViewToPath } from '../figma_app/193867'
import { hasStarterTeamLoopholeAccess, isEligibleForStarterLoopholeTeamOne } from '../figma_app/297957'
import { trackFileBrowserFileClicked, trackUserEvent } from '../figma_app/314264'
import { openInBrowser } from '../figma_app/415217'
import { isIntegrationContext } from '../figma_app/469876'
import { setRecentUserData } from '../figma_app/502247'
import { allViews, CreateUpgradeAction } from '../figma_app/707808'
import { isCommunityHubView } from '../figma_app/740025'
import { UpgradeSteps } from '../figma_app/831101'
import { desktopAPIInstance } from '../figma_app/876459'
import { fileBrowserPageManager } from '../figma_app/997907'

/**
 * Refactored actions and thunks from 976345.ts selection.
 *
 * Notes:
 * - Original internal names are preserved as comments for traceability (e.g. // $$F24).
 * - Functions are converted to named arrow functions and given descriptive names.
 * - Exports at the bottom re-map original short export identifiers to the new descriptive symbols,
 *   per refactoring instructions.
 */

type ThunkAPI = any // keep broad to match original dynamic usage

// Helper types for commonly used payloads (partial where shapes are unknown)
export interface WorkspacePayload {
  orgId?: string
  teamId?: string | null
  userId?: string
}
export interface OpenCreateTeamOptions {
  previousView?: any
  openInNewTab?: boolean
  onSubmitReturnToPrevView?: any
  isEduTeam?: boolean
  ignoreCurrentPlan?: boolean
}
export interface TrashedFilesArgs { orgId?: string, teamId?: string }
export interface LoadingOptions { loadingKey?: string }
type DropdownPayload = any

// Pending reload storage (original: ea)
let pendingReload: {
  reason: string
  metadata?: any
  additionalViewsToReload?: string[]
} | null = null

/**
 * Ensure the file browser shows a loading state while an operation runs.
 * Original: $$F24
 */
const setFileBrowserLoadingHandler = createOptimistThunk((dispatchApi, { until }: { until?: Promise<any> } = {}) => {
  // hide modals and dropdowns if shown
  if (dispatchApi.getState().modalShown?.type != null) {
    dispatchApi.dispatch(hideModal())
  }
  if (dispatchApi.getState().dropdownShown?.type != null) {
    dispatchApi.dispatch(hideDropdownAction())
  }

  dispatchApi.dispatch(setFileBrowserLoading({ show: true }))

  // turn off loading when the operation completes (if an until promise exists)
  until?.then(() => {
    dispatchApi.dispatch(setFileBrowserLoading({ show: false }))
  })

  // Add to page manager dependencies (same semantics as original)
  fileBrowserPageManager.addDependency('FILE_BROWSER_SET_LOADING', until || 'pending')
})

/**
 * Refresh session state from sessionApiInstance and update store.
 * Original: $$j18
 */
const refreshSessionState = createOptimistThunk((dispatchApi) => {
  sessionApiInstance.getState()
    .then((res: any) => {
      dispatchApi.dispatch(setSessionStateAction(res.data.meta))
      dispatchApi.dispatch(sendIpcRefreshSession(res.data.meta))
    })
    .catch((err: any) => {
      const message = err.data?.message || getI18nString('file_browser.file_browser_actions.error_on_data_update')
      dispatchApi.dispatch(VisualBellActions.enqueue({ error: true, message }))
    })
})

/**
 * Send 'refresh-session-state' to other tabs via IpcStorageHandler.
 * Original: $$U23
 */
const sendIpcRefreshSession = createOptimistThunk((_: ThunkAPI, payload: any) => {
  // new IpcStorageHandler().sendToOtherTabs('refresh-session-state', payload)
  new IpcStorageHandler().sendToOtherTabs('refresh-session-state', payload)
})

/**
 * Handle account switching and view redirection.
 * Original: $$B11
 */
const switchAccountAndNavigate = createOptimistThunk((dispatchApi, payload: { view?: any, path?: string, workspace: WorkspacePayload }) => {
  const state = dispatchApi.getState()
  const viewPayload = payload.view || { view: 'recentsAndSharing' }

  const computedPath = selectedViewToPath({
    ...state,
    currentUserOrgId: payload.workspace.orgId,
    currentTeamId: payload.workspace.teamId || null,
  }, viewPayload)

  const switchingToCommunityHub = !isCommunityHubView(state.selectedView) && isCommunityHubView(viewPayload)

  if (desktopAPIInstance && switchingToCommunityHub) {
    desktopAPIInstance.openCommunity(computedPath, payload.workspace.userId)
    return
  }

  // helper to redirect back to previous community view if needed (original: d)
  function maybeRedirectFromCommunity() {
    const leavingCommunity = isCommunityHubView(state.selectedView) && !isCommunityHubView(viewPayload)
    if (desktopAPIInstance && leavingCommunity) {
      customHistory.redirect(appendSearchParams(selectedViewToPath({
        ...state,
        currentUserOrgId: payload.workspace.orgId,
        currentTeamId: payload.workspace.teamId || null,
      }, state.selectedView), { fuid: payload.workspace.userId }))
    }
  }

  // show loading / hide UIs
  dispatchApi.dispatch(setFileBrowserLoadingHandler())

  // if a direct path is provided, track and redirect there
  if (payload.path) {
    trackUserEvent('account_switched', state, {
      newUserId: payload.workspace.userId,
      orgId: state.currentUserOrgId,
      newOrgId: payload.workspace.orgId,
      teamId: state.currentTeamId,
      newTeamId: payload.workspace.teamId,
      view: state.selectedView.view,
      newPath: payload.path,
    })

    customHistory.redirect(appendSearchParams(payload.path, { fuid: payload.workspace.userId }))
    maybeRedirectFromCommunity()
    return
  }

  // otherwise, track switching between views
  trackUserEvent('account_switched', state, {
    newUserId: payload.workspace.userId,
    orgId: state.currentUserOrgId,
    newOrgId: payload.workspace.orgId,
    view: state.selectedView.view,
    newView: viewPayload.view,
    newTeamId: payload.workspace.teamId,
    teamId: state.currentTeamId,
  })

  // persist recent user data in some cross-org/team scenarios
  if ((payload.workspace.orgId && !computedPath.includes(payload.workspace.orgId))
    || (payload.workspace.teamId && !computedPath.includes(payload.workspace.teamId))
    || (isCommunityHubView(viewPayload) && !payload.workspace.orgId && state.currentUserOrgId)) {
    setRecentUserData(payload.workspace.userId, isCommunityHubView(viewPayload), payload.workspace.orgId, undefined, payload.workspace.teamId)
  }

  if (isIntegrationContext()) {
    sendMessageToParent({ action: 'reloadPage', payload: { fuid: payload.workspace.userId } })
  }
  else {
    customHistory.redirect(appendSearchParams(computedPath, { fuid: payload.workspace.userId }))
    maybeRedirectFromCommunity()
  }
})

/**
 * Start desktop app authentication flow.
 * Original: $$G26
 */
const startDesktopAppAuth = createOptimistThunk((dispatchApi) => {
  XHR.post('/api/session/app_auth', { app_type: 'desktop' })
    .then(({ data }: any) => {
      const authId = data.meta.id
      let path = `/app_auth/${authId}/grant`
      const authedIds = dispatchApi.getState().authedUsers.orderedIds
      if (authedIds.length > 0) {
        path += `?authed_ids=${authedIds.join(',')}`
      }
      desktopAPIInstance?.startAppAuth(path)
      dispatchApi.dispatch(VisualBellActions.enqueue({
        message: getI18nString('file_browser.file_browser_actions.desktop_go_to_your_browser'),
      }))
    })
    .catch((err: any) => {
      console.error(err)
      dispatchApi.dispatch(VisualBellActions.enqueue({
        message: getI18nString('file_browser.error_try_again'),
        error: true,
      }))
    })
})

/**
 * Show dropdown if none is currently open.
 * Original: $$V21
 */
const showDropdownIfNone = createOptimistThunk((dispatchApi, payload: DropdownPayload) => {
  if (!dispatchApi.getState().dropdownShown) {
    dispatchApi.dispatch(showDropdownThunk(payload))
  }
})

/**
 * Toggle a dropdown by type.
 * Original: $$H16
 */
export const toggleDropdown = createOptimistThunk((dispatchApi, payload: DropdownPayload) => {
  const current = dispatchApi.getState().dropdownShown
  if (current?.type === payload.type) {
    dispatchApi.dispatch(hideDropdownAction())
  }
  else {
    dispatchApi.dispatch(showDropdownThunk(payload))
  }
})

/**
 * Open a URL either in the browser or via history redirect (for new tab).
 * Original: $$z9
 */
export const openUrlInContext = createOptimistThunk((_: ThunkAPI, payload: { url: string }) => {
  if (isVsCodeEnvironment()) {
    openInBrowser(payload.url)
  }
  else {
    customHistory.redirect(payload.url, '_blank')
  }
})

/**
 * Short helpers to create select view actions (kept as functions).
 * Originals: $$W15, $$K13, $$Y14
 */
export function selectFolderView(folderId: string, opts: any = {}) { // $$W15
  return selectViewAction({ view: 'folder', folderId, ...opts })
}
export function selectTeamView(teamId: string, opts: any = {}, teamViewTab?: any) { // $$K13
  return selectViewAction({ view: 'team', teamId, ...opts, teamViewTab })
}
export function selectLimitedTeamSharedProjectsView() { // $$Y14
  return selectViewAction({ view: 'limitedTeamSharedProjects' })
}

/**
 * Tracking thunks
 * Originals: $$$7 (T5), $$X8 (UN), $$q4, $$J5, $$Z19
 */
const trackRecentFileClicked = createOptimistThunk((_: ThunkAPI, { index }: { index: number }) => {
  trackEventAnalytics('Recent File Clicked', { index }, { forwardToDatadog: true })
})

const trackFileClicked = createOptimistThunk((dispatchApi, { fileKey, entrypoint, currentPlanFilter, currentSharedByFilter, viewMode }: any) => {
  trackFileBrowserFileClicked(fileKey, {
    state: dispatchApi.getState(),
    entrypoint,
    planFilterId: currentPlanFilter?.planId,
    planFilterType: currentPlanFilter?.planType,
    sharedByFilter: currentSharedByFilter,
    viewMode,
  })
})

const trackFontInstallerDownloaded = createOptimistThunk((dispatchApi) => {
  trackUserEvent('Font Installer Downloaded', dispatchApi.getState())
})

const trackFontUninstallerDownloaded = createOptimistThunk((dispatchApi) => {
  trackUserEvent('Font Uninstaller Downloaded', dispatchApi.getState())
})

const trackNavTreeClicked = createOptimistThunk((dispatchApi, { clickedResourceType, resourceIdOrKey }: { clickedResourceType: string, resourceIdOrKey: string }) => {
  trackUserEvent('File Browser Nav Tree Clicked', dispatchApi.getState(), {
    clickedResourceType,
    resourceIdOrKey,
  })
})

/**
 * Query for trashed folders using liveStoreInstance.
 * Original: $$Q22
 */
const trashedFoldersQuery = liveStoreInstance.Query({
  fetch: async (args: any) => ((await trashedFoldersAPI.getTrashedFolders(args)).data as any).meta,
  schema: (e: any) => e.object({
    folders: e.array(FolderSchema.extend({ touched_at: e.string() })),
  }),
  output: ({ data }: any) => ({
    folders: data.folders
      .map((f: any) => ({ ...f, touched_at: '' }))
      .filter((f: any) => !!f && !!f.trashed_at && !f.deleted_at)
      .sort((a: any, b: any) => (new Date(a.trashed_at) < new Date(b.trashed_at) ? 1 : -1)),
  }),
})

/**
 * Load trashed files and repos and update store.
 * Original: $$ee17
 */
const loadTrashedFiles = createOptimistThunk((dispatchApi, { orgId, teamId }: TrashedFilesArgs, { loadingKey }: LoadingOptions = {}) => {
  const request = trashedFilesValidatorAPI.getTrashedFilesV2({ orgId: orgId || '', teamId: teamId || '' })
  setupLoadingStateHandler(request, dispatchApi, loadingKey)
  request.then((res: any) => {
    const parsed = JSON.parse(res.response)
    dispatchApi.dispatch(setDeletedFiles({ deletedFiles: parsed.meta.files }))
    dispatchApi.dispatch(setDeletedRepos({ deletedRepos: parsed.meta.repos }))
  })
})

/**
 * Open create-team or upgrade flow with various conditions.
 * Original: $$et3
 */
const openCreateTeamFlow = createOptimistThunk((dispatchApi, opts: OpenCreateTeamOptions) => {
  const state = dispatchApi.getState()

  if (opts.openInNewTab) {
    const url = getSelectedViewUrl(state, { view: 'teamCreation', ignoreCurrentPlan: opts.ignoreCurrentPlan })
    dispatchApi.dispatch(openUrlInContext({ url }))
    return
  }

  if (state.user && getFeatureFlags().close_starter_team_loophole_v2 && hasStarterTeamLoopholeAccess({
    userId: state.user.id,
    teams: Object.values(state.teams),
    rolesByTeamId: state.roles.byTeamId,
  })) {
    dispatchApi.dispatch(selectViewAction({
      view: 'teamUpgrade',
      teamFlowType: CreateUpgradeAction.CREATE_AND_UPGRADE,
      teamId: null,
      paymentStep: UpgradeSteps.PLAN_COMPARISON,
      previousView: opts.previousView,
      isEduTeam: opts.isEduTeam,
      ignoreCurrentPlan: opts.ignoreCurrentPlan,
    }))
    return
  }

  if (state.user && isEligibleForStarterLoopholeTeamOne(state.user.id, Object.values(state.teams), state.roles.byTeamId)) {
    dispatchApi.dispatch(selectViewAction({
      view: 'teamUpgrade',
      teamFlowType: CreateUpgradeAction.CREATE,
      teamId: null,
      paymentStep: UpgradeSteps.CREATE_TEAM,
      previousView: opts.previousView,
      isEduTeam: opts.isEduTeam,
      ignoreCurrentPlan: opts.ignoreCurrentPlan,
    }))
  }
  else {
    dispatchApi.dispatch(selectViewAction({
      view: 'teamCreation',
      previousView: opts.previousView,
      onSubmitReturnToPrevView: opts.onSubmitReturnToPrevView,
      isEduTeam: opts.isEduTeam,
      ignoreCurrentPlan: opts.ignoreCurrentPlan,
    }))
  }
})

/**
 * Views considered sensitive for reload (original: er, en, $$ei12)
 */
const reloadSensitiveViews = ['fullscreen', 'prototype']
const allKnownViews = [...allViews, 'desktopNewTab']

export function isViewReloadSensitive(selectedView: any, additionalViewsToReload?: string[]) { // $$ei12
  if (reloadSensitiveViews.includes(selectedView.view)) {
    return false
  }
  else if (allKnownViews.includes(selectedView.view)) {
    return true
  }
  else if (additionalViewsToReload && additionalViewsToReload.includes(selectedView.view)) {
    return true
  }
  return false
}

/**
 * Reload if pending reload exists and the current selected view matches the pending criteria.
 * Original: $$es10
 */
const reloadIfPending = createOptimistThunk((_: ThunkAPI, context: { selectedView: any }) => {
  if (pendingReload && isViewReloadSensitive(context.selectedView, pendingReload.additionalViewsToReload)) {
    customHistory.reload(pendingReload.reason, pendingReload.metadata)
  }
})

/** Originals: $$eo25, $$el20 */
export function hasPendingReload() { // $$eo25
  return pendingReload != null
}
export function clearPendingReload() { // $$el20
  pendingReload = null
}

/**
 * Reload reason enum (original: $$ed6)
 */

export enum ReloadReasonEnum {
  NONE = 0,
  DEFAULT = 2000,
}
/**
 * Schedule a reload after a delay; if view matches now, reload immediately, otherwise store pending reload.
 * Original: $$ec2
 */
const scheduleReload = createOptimistThunk(async (_: ThunkAPI, args: { delay: number, reason: string, metadata?: any, additionalViewsToReload?: string[] }) => {
  await delay(args.delay)
  if (isViewReloadSensitive((_.getState()).selectedView, args.additionalViewsToReload)) {
    customHistory.reload(args.reason, args.metadata)
  }
  else {
    pendingReload = {
      reason: args.reason,
      metadata: args.metadata,
      additionalViewsToReload: args.additionalViewsToReload,
    }
  }
})

/**
 * Handle org migration: if current view is orgSelfServe then mark orgMigrated, else schedule reload.
 * Original: $$eu1
 */
const handleOrgMigration = createOptimistThunk((dispatchApi, args: { delay: number, reason: string, metadata?: any, additionalViewsToReload?: string[] }) => {
  const selectedView = dispatchApi.getState().selectedView
  if (selectedView.view === 'orgSelfServe') {
    dispatchApi.dispatch(selectViewAction({
      view: selectedView.view,
      step: selectedView.step,
      orgMigrated: true,
      upsellSource: selectedView.upsellSource,
    }))
  }
  else {
    dispatchApi.dispatch(scheduleReload(args))
  }
})

/**
 * Redirect home after delay.
 * Original: ep
 */
const redirectHomeAfterDelay = createOptimistThunk(async (_: ThunkAPI, args: { delay: number }) => {
  await delay(args.delay)
  customHistory.redirect('/')
})

/**
 * Flash MFA message then redirect home.
 * Original: $$e_0
 */
const flashMfaAndRedirect = createOptimistThunk((dispatchApi, args: { delay: number }) => {
  dispatchApi.dispatch(FlashActions.flash(getI18nString('org_settings.mfa_for_members.member_flash')))
  dispatchApi.dispatch(redirectHomeAfterDelay(args))
})

/**
 * Exports: map original short exported identifiers to the new refactored symbols.
 * (Keep the original export names to preserve external references)
 */

// Original short export mapping preserved:
export const C7 = flashMfaAndRedirect // $$e_0
export const Dj = handleOrgMigration // $$eu1
export const Dl = scheduleReload // $$ec2
export const Dw = openCreateTeamFlow // $$et3
export const Ef = trackFontInstallerDownloaded // $$q4
export const Fs = trackFontUninstallerDownloaded // $$J5
export const RH = ReloadReasonEnum // $$ed6
export const T5 = trackRecentFileClicked // $$$7
export const UN = trackFileClicked // $$X8
export const V3 = openUrlInContext // $$z9
export const Z8 = reloadIfPending // $$es10
export const _l = switchAccountAndNavigate // $$B11
export const cz = isViewReloadSensitive // $$ei12
export const dm = selectTeamView // $$K13
export const eP = selectLimitedTeamSharedProjectsView // $$Y14
export const gN = selectFolderView // $$W15
export const gR = toggleDropdown // $$H16
export const h3 = loadTrashedFiles // $$ee17
export const hm = refreshSessionState // $$j18
export const kg = trackNavTreeClicked // $$Z19
export const l7 = clearPendingReload // $$el20
export const mT = showDropdownIfNone // $$V21
export const p5 = trashedFoldersQuery // $$Q22
export const q0 = sendIpcRefreshSession // $$U23
export const qj = setFileBrowserLoadingHandler // $$F24
export const rg = hasPendingReload // $$eo25
export const rq = startDesktopAppAuth // $$G26

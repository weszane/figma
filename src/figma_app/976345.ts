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
import { e5, Mk } from '../figma_app/297957'
import { trackFileBrowserFileClicked, trackUserEvent } from '../figma_app/314264'
import { openInBrowser } from '../figma_app/415217'
import { isIntegrationContext } from '../figma_app/469876'
import { setRecentUserData } from '../figma_app/502247'
import { allViews, CreateUpgradeAction } from '../figma_app/707808'
import { isCommunityHubView } from '../figma_app/740025'
import { UpgradeSteps } from '../figma_app/831101'
import { desktopAPIInstance } from '../figma_app/876459'
import { fileBrowserPageManager } from '../figma_app/997907'

let $$F24 = createOptimistThunk((e, t) => {
  e.getState().modalShown?.type != null && e.dispatch(hideModal())
  e.getState().dropdownShown?.type != null && e.dispatch(hideDropdownAction())
  e.dispatch(setFileBrowserLoading({
    show: !0,
  }))
  t?.until.then(() => {
    e.dispatch(setFileBrowserLoading({
      show: !1,
    }))
  })
  fileBrowserPageManager.addDependency('FILE_BROWSER_SET_LOADING', t?.until || 'pending')
})
let $$j18 = createOptimistThunk((e) => {
  sessionApiInstance.getState().then((t) => {
    e.dispatch(setSessionStateAction(t.data.meta))
    e.dispatch($$U23(t.data.meta))
  }).catch((t) => {
    let r = t.data?.message || getI18nString('file_browser.file_browser_actions.error_on_data_update')
    e.dispatch(VisualBellActions.enqueue({
      error: !0,
      message: r,
    }))
  })
})
let $$U23 = createOptimistThunk((e, t) => {
  new IpcStorageHandler().sendToOtherTabs('refresh-session-state', t)
})
let $$B11 = createOptimistThunk((e, t) => {
  let r = e.getState()
  let n = t.view || {
    view: 'recentsAndSharing',
  }
  let i = selectedViewToPath({
    ...r,
    currentUserOrgId: t.workspace.orgId,
    currentTeamId: t.workspace.teamId || null,
  }, n)
  let a = !isCommunityHubView(r.selectedView) && isCommunityHubView(n)
  if (desktopAPIInstance && a) {
    desktopAPIInstance.openCommunity(i, t.workspace.userId)
    return
  }
  function d() {
    let e = isCommunityHubView(r.selectedView) && !isCommunityHubView(n)
    desktopAPIInstance && e && customHistory.redirect(appendSearchParams(selectedViewToPath({
      ...r,
      currentUserOrgId: t.workspace.orgId,
      currentTeamId: t.workspace.teamId || null,
    }, r.selectedView), {
      fuid: t.workspace.userId,
    }))
  }
  if (e.dispatch($$F24()), t.path) {
    trackUserEvent('account_switched', r, {
      newUserId: t.workspace.userId,
      orgId: r.currentUserOrgId,
      newOrgId: t.workspace.orgId,
      teamId: r.currentTeamId,
      newTeamId: t.workspace.teamId,
      view: r.selectedView.view,
      newPath: t.path,
    })
    customHistory.redirect(appendSearchParams(t.path, {
      fuid: t.workspace.userId,
    }))
    d()
    return
  }
  trackUserEvent('account_switched', r, {
    newUserId: t.workspace.userId,
    orgId: r.currentUserOrgId,
    newOrgId: t.workspace.orgId,
    view: r.selectedView.view,
    newView: n.view,
    newTeamId: t.workspace.teamId,
    teamId: r.currentTeamId,
  });
  (t.workspace.orgId && !i.includes(t.workspace.orgId) || t.workspace.teamId && !i.includes(t.workspace.teamId) || isCommunityHubView(n) && !t.workspace.orgId && r.currentUserOrgId) && setRecentUserData(t.workspace.userId, isCommunityHubView(n), t.workspace.orgId, void 0, t.workspace.teamId)
  isIntegrationContext()
    ? sendMessageToParent({
        action: 'reloadPage',
        payload: {
          fuid: t.workspace.userId,
        },
      })
    : (customHistory.redirect(appendSearchParams(i, {
        fuid: t.workspace.userId,
      })), d())
})
let $$G26 = createOptimistThunk((e) => {
  XHR.post('/api/session/app_auth', {
    app_type: 'desktop',
  }).then(({
    data: t,
  }) => {
    let r = t.meta.id
    let n = `/app_auth/${r}/grant`
    let i = e.getState().authedUsers.orderedIds
    i.length > 0 && (n += `?authed_ids=${i.join(',')}`)
    desktopAPIInstance?.startAppAuth(n)
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString('file_browser.file_browser_actions.desktop_go_to_your_browser'),
    }))
  }).catch((t) => {
    console.error(t)
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString('file_browser.error_try_again'),
      error: !0,
    }))
  })
})
let $$V21 = createOptimistThunk((e, t) => {
  e.getState().dropdownShown || e.dispatch(showDropdownThunk(t))
})
let $$H16 = createOptimistThunk((e, t) => {
  let r = e.getState().dropdownShown
  r?.type === t.type ? e.dispatch(hideDropdownAction()) : e.dispatch(showDropdownThunk(t))
})
let $$z9 = createOptimistThunk((e, t) => {
  isVsCodeEnvironment() ? openInBrowser(t.url) : customHistory.redirect(t.url, '_blank')
})
export function $$W15(e, t = {}) {
  return selectViewAction({
    view: 'folder',
    folderId: e,
    ...t,
  })
}
export function $$K13(e, t = {}, r) {
  return selectViewAction({
    view: 'team',
    teamId: e,
    ...t,
    teamViewTab: r,
  })
}
export function $$Y14() {
  return selectViewAction({
    view: 'limitedTeamSharedProjects',
  })
}
let $$$7 = createOptimistThunk((e, {
  index: t,
}) => {
  trackEventAnalytics('Recent File Clicked', {
    index: t,
  }, {
    forwardToDatadog: !0,
  })
})
let $$X8 = createOptimistThunk((e, {
  fileKey: t,
  entrypoint: r,
  currentPlanFilter: n,
  currentSharedByFilter: i,
  viewMode: a,
}) => {
  trackFileBrowserFileClicked(t, {
    state: e.getState(),
    entrypoint: r,
    planFilterId: n?.planId,
    planFilterType: n?.planType,
    sharedByFilter: i,
    viewMode: a,
  })
})
let $$q4 = createOptimistThunk((e) => {
  trackUserEvent('Font Installer Downloaded', e.getState())
})
let $$J5 = createOptimistThunk((e) => {
  trackUserEvent('Font Uninstaller Downloaded', e.getState())
})
let $$Z19 = createOptimistThunk((e, {
  clickedResourceType: t,
  resourceIdOrKey: r,
}) => {
  trackUserEvent('File Browser Nav Tree Clicked', e.getState(), {
    clickedResourceType: t,
    resourceIdOrKey: r,
  })
})
let $$Q22 = liveStoreInstance.Query({
  fetch: async e => (await trashedFoldersAPI.getTrashedFolders(e)).data.meta,
  schema: e => e.object({
    folders: e.array(FolderSchema.extend({
      touched_at: e.string(),
    })),
  }),
  output: ({
    data: e,
  }) => ({
    folders: e.folders.map(e => ({
      ...e,
      touched_at: '',
    })).filter(e => !!e && !!e.trashed_at && !e.deleted_at).sort((e, t) => new Date(e.trashed_at) < new Date(t.trashed_at) ? 1 : -1),
  }),
})
let $$ee17 = createOptimistThunk((e, {
  orgId: t,
  teamId: r,
}, {
  loadingKey: n,
}) => {
  let i = trashedFilesValidatorAPI.getTrashedFilesV2({
    orgId: t || '',
    teamId: r || '',
  })
  setupLoadingStateHandler(i, e, n)
  i.then((t) => {
    let r = JSON.parse(t.response)
    e.dispatch(setDeletedFiles({
      deletedFiles: r.meta.files,
    }))
    e.dispatch(setDeletedRepos({
      deletedRepos: r.meta.repos,
    }))
  })
})
let $$et3 = createOptimistThunk((e, {
  previousView: t,
  openInNewTab: r,
  onSubmitReturnToPrevView: i,
  isEduTeam: a,
  ignoreCurrentPlan: s,
}) => {
  let o = e.getState()
  if (r) {
    let t = getSelectedViewUrl(o, {
      view: 'teamCreation',
      ignoreCurrentPlan: s,
    })
    e.dispatch($$z9({
      url: t,
    }))
    return
  }
  if (o.user && getFeatureFlags().close_starter_team_loophole_v2 && e5({
    userId: o.user.id,
    teams: Object.values(o.teams),
    rolesByTeamId: o.roles.byTeamId,
  })) {
    e.dispatch(selectViewAction({
      view: 'teamUpgrade',
      teamFlowType: CreateUpgradeAction.CREATE_AND_UPGRADE,
      teamId: null,
      paymentStep: UpgradeSteps.PLAN_COMPARISON,
      previousView: t,
      isEduTeam: a,
      ignoreCurrentPlan: s,
    }))
    return
  }
  o.user && Mk(o.user.id, Object.values(o.teams), o.roles.byTeamId)
    ? e.dispatch(selectViewAction({
        view: 'teamUpgrade',
        teamFlowType: CreateUpgradeAction.CREATE,
        teamId: null,
        paymentStep: UpgradeSteps.CREATE_TEAM,
        previousView: t,
        isEduTeam: a,
        ignoreCurrentPlan: s,
      }))
    : e.dispatch(selectViewAction({
        view: 'teamCreation',
        previousView: t,
        onSubmitReturnToPrevView: i,
        isEduTeam: a,
        ignoreCurrentPlan: s,
      }))
})
let er = ['fullscreen', 'prototype']
let en = [...allViews, 'desktopNewTab']
export function $$ei12(e, t) {
  if (er.includes(e.view))
  ;else if (en.includes(e.view))
    return !0; else if (t && t.includes(e.view))
    return !0
  return !1
}
let ea = null
let $$es10 = createOptimistThunk((e, t) => {
  ea && $$ei12(t.selectedView, ea.additionalViewsToReload) && customHistory.reload(ea.reason, ea.metadata)
})
export function $$eo25() {
  return ea != null
}
export function $$el20() {
  ea = null
}
export var $$ed6 = (e => (e[e.DEFAULT = 2e3] = 'DEFAULT', e[e.NONE = 0] = 'NONE', e))($$ed6 || {})
let $$ec2 = createOptimistThunk(async (e, t) => {
  await delay(t.delay)
  $$ei12(e.getState().selectedView, t.additionalViewsToReload)
    ? customHistory.reload(t.reason, t.metadata)
    : ea = {
      reason: t.reason,
      metadata: t.metadata,
      additionalViewsToReload: t.additionalViewsToReload,
    }
})
let $$eu1 = createOptimistThunk((e, t) => {
  let r = e.getState().selectedView
  r.view === 'orgSelfServe'
    ? e.dispatch(selectViewAction({
        view: r.view,
        step: r.step,
        orgMigrated: !0,
        upsellSource: r.upsellSource,
      }))
    : e.dispatch($$ec2(t))
})
let ep = createOptimistThunk(async (e, t) => {
  await delay(t.delay)
  customHistory.redirect('/')
})
let $$e_0 = createOptimistThunk((e, t) => {
  e.dispatch(FlashActions.flash(getI18nString('org_settings.mfa_for_members.member_flash')))
  e.dispatch(ep(t))
})
export const C7 = $$e_0
export const Dj = $$eu1
export const Dl = $$ec2
export const Dw = $$et3
export const Ef = $$q4
export const Fs = $$J5
export const RH = $$ed6
export const T5 = $$$7
export const UN = $$X8
export const V3 = $$z9
export const Z8 = $$es10
export const _l = $$B11
export const cz = $$ei12
export const dm = $$K13
export const eP = $$Y14
export const gN = $$W15
export const gR = $$H16
export const h3 = $$ee17
export const hm = $$j18
export const kg = $$Z19
export const l7 = $$el20
export const mT = $$V21
export const p5 = $$Q22
export const q0 = $$U23
export const qj = $$F24
export const rg = $$eo25
export const rq = $$G26

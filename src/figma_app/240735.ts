import { createActionCreator } from '../905/73481'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistAction, createOptimistThunk } from '../905/350402'
import { FlashActions } from '../905/573154'
import { customHistory } from '../905/612521'
import { adminPermissionConfig } from '../905/654645'
import { createOptimistCommitAction, createOptimistRevertAction } from '../905/676456'
import { setupLoadingStateHandler } from '../905/696711'
import { teamAPIClient } from '../905/834575'
import { deleteTeam, putTeam } from '../905/890368'
import { XHR } from '../905/910117'
import { createLatencyTimer } from '../figma_app/391338'
/**
 * Optimist action for batch deleting team members.
 * Original: $$g7
 */
export const batchDeleteTeamMembers = createOptimistAction(
  'BATCH_DEL_TEAM_MEMBERS',
  (dispatchContext, { teamId, userIds }, { optimistId }) => {
    XHR.del(`/api/teams/${teamId}/users`, { user_ids: userIds })
      .then(() => {
        dispatchContext.dispatch(createOptimistCommitAction(optimistId))
      })
      .catch(() => {
        dispatchContext.dispatch(createOptimistRevertAction(optimistId))
      })
  },
)

/**
 * Optimist thunk for restoring a team.
 * Original: $$f3
 */
export const restoreTeamThunk = createOptimistThunk(async (dispatchContext, { teamId }) => {
  await XHR.put(`/api/teams/${teamId}/restore`)
    .then(() => {
      customHistory.redirect(`/files/team/${teamId}`)
      dispatchContext.dispatch(
        FlashActions.flash(getI18nString('file_browser.file_browser_actions.restore_team_success')),
      )
    })
    .catch((error) => {
      dispatchContext.dispatch(
        FlashActions.error(
          getI18nString('file_browser.file_browser_actions.restore_team_error', {
            errorMsg: error.data.message || getI18nString('file_browser.file_browser_actions.unknown_error'),
          }),
        ),
      )
    })
})

/**
 * Optimist thunk for updating team description.
 * Original: $$E17
 */
export const updateTeamDescriptionThunk = createOptimistThunk(async (dispatchContext, payload) => {
  await XHR.put(`/api/teams/${payload.teamId}`, { description: payload.description })
    .then(() => {
      dispatchContext.dispatch(setTeamOptimistThunk({
        team: {
          id: payload.teamId,
          description: payload.description,
        },
        userInitiated: true,
      }))
    })
    .catch(() => {
      dispatchContext.dispatch(
        FlashActions.error(getI18nString('file_browser.file_browser_actions.update_description_error')),
      )
    })
})

/**
 * Optimist thunk for toggling Figma provided libraries.
 * Original: $$y16
 */
export const toggleFigmaLibrariesThunk = createOptimistThunk(async (dispatchContext, payload) => {
  const { teamId, figma_provided_libraries_disabled } = payload
  await teamAPIClient.updatePresetsDisabled({
    teamId,
    presetsDisabled: figma_provided_libraries_disabled,
  })
    .then(() => {
      dispatchContext.dispatch(
        VisualBellActions.enqueue({
          message: figma_provided_libraries_disabled
            ? getI18nString('settings_tab.ui_kits_disabled')
            : getI18nString('settings_tab.ui_kits_enabled'),
          type: 'team.ui_kit_toggle',
          error: false,
        }),
      )
      dispatchContext.dispatch(setTeamOptimistThunk({
        team: {
          id: teamId,
          figma_provided_libraries_disabled,
        },
        userInitiated: true,
      }))
    })
    .catch(() => {
      dispatchContext.dispatch(FlashActions.error(getI18nString('file_browser.error_try_again')))
    })
})

/**
 * Optimist thunk for loading a team.
 * Original: anonymous createOptimistThunk
 */
export const loadTeamThunk = createOptimistThunk((dispatchContext, { teamId }, { loadingKey }) => {
  const teamPromise = teamAPIClient.getTeam({ teamId })
  setupLoadingStateHandler(teamPromise, dispatchContext, loadingKey)
  teamPromise
    .then(({ data }: { data: ObjectOf }) => {
      dispatchContext.dispatch(setTeamOptimistThunk({
        team: data.meta,
        userInitiated: false,
      }))
    })
    .catch(() => {
      dispatchContext.dispatch(FlashActions.error(getI18nString('file_browser.error_try_again')))
    })
})

/**
 * Optimist thunk for fetching team members.
 * Original: $$b12
 */
export const fetchTeamMembersThunk = createOptimistThunk(
  (dispatchContext, { teamId, userInitiated = true }, { loadingKey }) => {
    const membersPromise = teamAPIClient.getMembers({ teamId })
    if (userInitiated) {
      setupLoadingStateHandler(membersPromise, dispatchContext, loadingKey)
    }
    const latencyTimer = createLatencyTimer({
      label: adminPermissionConfig.TeamMembersTable.teamMembersByTeamId,
      variant: 'old',
      contextArgs: { teamId },
    })
    membersPromise.then(
      ({ data }: { data: ObjectOf }) => {
        latencyTimer()
        const membersMap: Record<string, any> = {}
        data.meta.forEach((member: any) => {
          membersMap[member.email] = member
        })
        dispatchContext.dispatch(setTeamMembersAction({
          members: membersMap,
          teamId,
        }))
      },
      (error) => {
        console.error(error)
        dispatchContext.dispatch(
          FlashActions.error(getI18nString('file_browser.file_browser_actions.team_member_fetch_error')),
        )
      },
    )
  },
  args => `TEAM_FETCH_MEMBERS_LIST::teamId::${args.teamId}`,
)

/**
 * Action creators for team actions.
 * Original: $$T1, $$I11, $$S13, $$v5, $$A6, $$x15, $$N14, $$C8, $$w10, $$O2, $$R18, $$k9, $$M4
 */
export const setTeamMembersAction = createActionCreator('TEAM_SET_MEMBERS') // $$T1
export const batchJoinTeamAction = createActionCreator('TEAM_BATCH_JOIN') // $$I11
export const joinTeamAction = createActionCreator('TEAM_JOIN') // $$S13
export const stopRenameTeamAction = createActionCreator('TEAM_STOP_RENAME') // $$v5
export const beginRenameTeamAction = createActionCreator('TEAM_BEGIN_RENAME') // $$A6
export const setTeamCreationLoadingAction = createActionCreator('TEAM_CREATION_SET_LOADING') // $$x15
export const changeDefaultPermissionAction = createActionCreator('TEAM_CHANGE_DEFAULT_PERMISSION') // $$N14
export const changeSharingSettingsAction = createActionCreator('TEAM_CHANGE_SHARING_SETTINGS') // $$C8
export const changeOrgAccessAction = createActionCreator('TEAM_CHANGE_ORG_ACCESS') // $$w10
export const renameTeamAction = createActionCreator('TEAM_RENAME') // $$O2
export const batchPutTeamAction = createActionCreator('TEAM_BATCH_PUT') // $$R18
export const postTeamAction = createActionCreator('TEAM_POST') // $$k9
export const getTeamAction = createActionCreator('TEAM_GET') // $$M4

/**
 * Team put and delete actions.
 * Original: $$L0, $$D19
 */
export const putTeamAction = putTeam // $$L0
export const deleteTeamAction = deleteTeam // $$D19

/**
 * Optimist thunk for setting team.
 * Original: $$P20
 */
export const setTeamOptimistThunk = createOptimistThunk((dispatchContext, payload) => {
  dispatchContext.dispatch(putTeamAction(payload))
})

/**
 * Exported variables (refactored names).
 */
export const $I = putTeamAction
export const $V = setTeamMembersAction
export const $w = renameTeamAction
export const I9 = restoreTeamThunk
export const Jt = getTeamAction
export const TI = stopRenameTeamAction
export const WC = beginRenameTeamAction
export const _E = batchDeleteTeamMembers
export const aB = changeSharingSettingsAction
export const bE = postTeamAction
export const bQ = changeOrgAccessAction
export const ii = batchJoinTeamAction
export const m$ = fetchTeamMembersThunk
export const mw = joinTeamAction
export const n9 = changeDefaultPermissionAction
export const r1 = setTeamCreationLoadingAction
export const tk = toggleFigmaLibrariesThunk
export const ub = updateTeamDescriptionThunk
export const uo = batchPutTeamAction
export const yH = deleteTeamAction
export const yJ = setTeamOptimistThunk

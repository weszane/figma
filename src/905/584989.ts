import { DeepLinkType } from '../905/15667'
import { isNullOrFailure } from '../905/18797'
import { createActionCreator } from '../905/73481'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { FlashActions } from '../905/573154'
import { setupLoadingStateHandler } from '../905/696711'
import { teamAPIClient } from '../905/834575'
import { sendWithRetry } from '../905/910117'

/**
 * Types for requestUpgrade and fetchTeamUsers thunks
 */
interface RequestUpgradeParams {
  licenseType: string
  seatTypeKey: string
  fileKey: string
  message: string
  teamId: string
  entryPoint: string
  onError?: () => void
  onSuccess?: (id: string) => void
  hideSuccessMessage?: boolean
  folderId?: string
}

interface FetchTeamUsersParams {
  teamId: string
}

interface FetchTeamUsersMeta {
  loadingKey: string
}

/**
 * Sends a request to upgrade a team user and handles success/error feedback.
 * Original: $$m0
 */
export const requestUpgrade = createOptimistThunk(
  (dispatchContext, params: RequestUpgradeParams) => {
    const {
      licenseType,
      seatTypeKey,
      fileKey,
      message,
      teamId,
      entryPoint,
      onError,
      onSuccess,
      hideSuccessMessage,
      folderId,
    } = params

    sendWithRetry.post(`/api/teams/${teamId}/team_users/request_upgrade`, {
      editor_type: licenseType,
      billable_product_key: seatTypeKey,
      file_key: fileKey,
      message,
      team_id: teamId,
      entry_point: entryPoint,
      folder_id: folderId,
    })
      .then((response) => {
        if (response.status === 200) {
          onSuccess?.(response.data.meta?.id)
        }
        if (!hideSuccessMessage) {
          let messageText: string
          switch (entryPoint) {
            case DeepLinkType.IN_EDITOR_RESTRICTED_DRAFT:
            case DeepLinkType.RESTRICTED_DRAFT_SHARED_EMAIL:
              messageText = getI18nString('team_user.actions.request_sent_well_let_you_know')
              break
            case DeepLinkType.ASK_TO_EDIT_ONE_CLICK:
              messageText = getI18nString('1_click_expansion.request_sent_well_let_you')
              break
            case 'create-file-project-view':
            case DeepLinkType.USER_SETTINGS:
              messageText = getI18nString('upgrades.request_sent_toast')
              break
            default:
              messageText = getI18nString('team_user.actions.team_members_request_to_upgrade_succeeded')
          }
          dispatchContext.dispatch(
            VisualBellActions.enqueue({
              message: messageText,
              type: 'pro-upgrade-request-sent',
            }),
          )
        }
      })
      .catch(() => {
        dispatchContext.dispatch(
          FlashActions.error(
            getI18nString('team_user.actions.team_members_request_to_upgrade_failed'),
          ),
        )
        onError?.()
      })
  },
)

/**
 * Fetches team users for a given team, handling loading state and errors.
 * Original: $$h1
 */
export const fetchTeamUsers = createOptimistThunk(
  (dispatchContext, params: FetchTeamUsersParams, meta: FetchTeamUsersMeta) => {
    const { teamId } = params
    const { loadingKey } = meta

    if (!teamId)
      return

    const state = dispatchContext.getState()
    const isTeamView
      = state.selectedView.view === 'team'
      && (state.selectedView.teamViewTab === 'members'
        || state.selectedView.teamViewTab === 'billing')
    const isOtherView
      = state.selectedView.view === 'teamUpgrade'
      || state.selectedView.view === 'eduReview'

    if (!isNullOrFailure(state.loadingState, loadingKey) && !(isTeamView || isOtherView)) {
      return
    }

    const teamUsersPromise = teamAPIClient.getTeamUsers({ teamId })
    setupLoadingStateHandler(teamUsersPromise, dispatchContext, loadingKey)

    teamUsersPromise.then(
      (response) => {
        dispatchContext.dispatch(setTeamUsersInitial({
          teamUsers: (response.data as any).meta,
          teamId,
        }))
      },
      (error) => {
        console.error(error)
        if (error && error.status !== 403) {
          dispatchContext.dispatch(
            FlashActions.error(
              getI18nString(
                'team_user.actions.an_error_occurred_while_retrieving_fetching_the_list_of_users_on_this_team',
              ),
            ),
          )
        }
      },
    )
  },
  (params: FetchTeamUsersParams) => `TEAM_USER_INITIALIZED_FOR_TEAM_${params.teamId}`,
)

/**
 * Action creator for updating a team user.
 * Original: $$g3
 */
export const putTeamUser = createActionCreator('TEAM_USER_PUT')

/**
 * Action creator for initializing team users.
 * Original: $$f2
 */
export const setTeamUsersInitial = createActionCreator('TEAM_USER_INITIAL_SET')
export const Nu = requestUpgrade
export const Xw = fetchTeamUsers
export const pE = setTeamUsersInitial
export const yJ = putTeamUser

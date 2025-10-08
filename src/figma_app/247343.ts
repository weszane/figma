import { showModalHandler } from "../905/156213"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { createOptimistAction, createOptimistThunk } from "../905/350402"
import { FlashActions } from "../905/573154"
import { putTeamUser } from "../905/584989"
import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456"
import { TeamType } from "../905/814802"
import { j } from "../905/869261"
import { sendWithRetry } from "../905/910117"
import { FPlanRestrictionType } from "../figma_app/191312"

interface TeamUserUpdateDesignPaidStatusPayload {
  teamId: string
  teamUsers: Array<{ user_id: string }>
  usersWithNoTeamUserIds?: string[]
  paidStatus: string
  paidStatusType: TeamType
  userInitiated: boolean
  entryPoint?: string
}

export const updateTeamUserDesignPaidStatus = createOptimistAction(
  "TEAM_USER_UPDATE_DESIGN_PAID_STATUS",
  async (
    {dispatch},
    {
      teamId,
      teamUsers,
      usersWithNoTeamUserIds,
      paidStatus,
      paidStatusType,
      userInitiated,
      entryPoint,
    }: TeamUserUpdateDesignPaidStatusPayload,
    { optimistId },
  ) => {
    if (!userInitiated) {
      return
    }

    try {
      const userIds = teamUsers.map(user => user.user_id).concat(usersWithNoTeamUserIds || [])

      const teamUserDeltas = userIds.map((userId) => {
        const delta: any = { user_id: userId }
        if (paidStatusType === TeamType.WHITEBOARD) {
          delta.whiteboard_paid_status = paidStatus
        }
        else {
          delta.design_paid_status = paidStatus
        }
        return delta
      })

      const response = await sendWithRetry.put(`/api/teams/${teamId}/team_user_batch`, {
        team_user_deltas: teamUserDeltas,
        entry_point: entryPoint,
      })

      dispatch(createOptimistCommitAction(optimistId))
      dispatch(putTeamUser({
        teamUsers: response.data.meta,
        teamId,
      }))
    }
    catch (error) {
      dispatch(createOptimistRevertAction(optimistId))
      const errorMessage = getI18nString("team_user.actions.an_error_occurred_while_changing_a_team_member_s_billing_status")
      dispatch(FlashActions.error(errorMessage))
      console.error(error)
    }
  },
  payload => `$TEAM_USER_UPDATE_DESIGN_PAID_STATUS::teamId::${payload.teamId}`,
)

export const m = updateTeamUserDesignPaidStatus

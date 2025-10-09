import { getI18nString } from "../905/303541"
import { createOptimistAction } from "../905/350402"
import { ViewAccessTypeEnum } from "../905/513035"
import { FlashActions } from "../905/573154"
import { putTeamUser } from "../905/584989"
import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456"
import { teamUserService } from "../figma_app/395012"
// Origin: /Users/allen/sigma-main/src/figma_app/529847.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability

// --- Type Definitions ---

// Represents a delta for updating a team user's seat type
interface TeamUserDelta {
  userId: string
  seatTypeOption: string
  seatIncreaseAuthorized?: boolean
  seatSwapIntended?: boolean
}

// Team user meta info (assumed shape)
interface TeamUserMeta {
  user_id: string
  seat_type?: string
  seat_increase_authorized?: boolean
  seat_swap_intended?: boolean
  [key: string]: any
}

// --- Refactored TEAM_USER_UPDATE_SEAT_TYPE Optimist Action ---

export const teamUserUpdateSeatType = createOptimistAction(
  "TEAM_USER_UPDATE_SEAT_TYPE",
  async (
    storeContext, // Assumed redux-thunk context
    {
      teamId,
      deltas,
      entryPoint,
      onSuccess,
      onFailure,
    },
    { optimistId },
  ) => {
    // Prepare payload for API call
    const teamUserDeltas = deltas.map(
      ({
        userId,
        seatTypeOption,
        seatIncreaseAuthorized,
        seatSwapIntended,
      }): TeamUserMeta => {
        // If seat type is VIEW, send empty string
        const seatType
          = seatTypeOption === ViewAccessTypeEnum.VIEW ? "" : seatTypeOption
        const delta: TeamUserMeta = {
          user_id: userId,
          seat_type: seatType,
        }
        if (seatIncreaseAuthorized !== undefined) {
          delta.seat_increase_authorized = seatIncreaseAuthorized
        }
        if (seatSwapIntended !== undefined) {
          delta.seat_swap_intended = seatSwapIntended
        }
        return delta
      },
    ) as any

    try {
      // Call service to update team users
      const response: any = await teamUserService.updateTeamUsers({
        team_id: teamId,
        team_user_deltas: teamUserDeltas,
        entry_point: entryPoint,
      })

      // Commit optimist update and update team users in store
      storeContext.dispatch(createOptimistCommitAction(optimistId))
      storeContext.dispatch(
        putTeamUser({
          teamUsers: response.data.meta,
          teamId,
        }),
      )
      onSuccess?.()
    }
    catch (error: any) {
      // Revert optimist update and show error flash
      storeContext.dispatch(createOptimistRevertAction(optimistId))
      storeContext.dispatch(
        FlashActions.error((() => {
          const { reason, message } = error.data || {}
          switch (reason) {
            case "seat_increase_unauthorized":
              return getI18nString(
                "modify_plan_user_seat_modal.error.seat_increase_unauthorized",
              )
            case "upgrade_on_suspended_plan":
              if (message) {
                return getI18nString(
                  "modify_plan_user_seat_modal.error.upgrade_on_suspended_plan",
                )
              }
              break
          }
          return getI18nString(
            "team_user.actions.an_error_occurred_while_changing_a_team_member_s_billing_status",
          )
        })()),
      )
      onFailure?.()
      // Log error for debugging
      console.error(error)
    }
  },
)

// --- Refactored Reducer for Team User Seat Type Updates ---

// Payload for reducer
interface TeamUserUpdateReducerPayload {
  teamId: string
  deltas: TeamUserDelta[]
  seatTypeProducts: Record<string, any>
  upgradeMethod?: string
  upgradeReason?: string
  assignedAt?: string
  upgradeActorName?: string
}

// State shape for team users (assumed)
interface TeamUsersState {
  [teamId: string]: Record<string, TeamUserState>
}

// Team user state (assumed)
interface TeamUserState {
  team_user?: TeamUserMeta
  upgrade_reason?: string
  upgrade_method?: string
  assigned_at?: string
  upgrade_actor_name?: string
  [key: string]: any
}

// Reducer for updating team user seat types
export function teamUserUpdateSeatTypeReducer(
  state: TeamUsersState,
  action: { payload: TeamUserUpdateReducerPayload },
): TeamUsersState {
  const {
    teamId,
    deltas,
    seatTypeProducts,
    upgradeMethod,
    upgradeReason,
    assignedAt,
    upgradeActorName,
  } = action.payload

  const teamUsers = state[teamId]
  if (!teamUsers)
    return state

  // Clone team users for immutability
  const updatedTeamUsers: Record<string, TeamUserState> = { ...teamUsers }

  // Map user_id to original key/member for quick lookup
  const userIdToOriginal: Record<
    string,
    { originalKey: string, originalMember: TeamUserState }
  > = {}
  Object.entries(teamUsers).forEach(([key, member]) => {
    const userId = member.team_user?.user_id
    if (key && userId) {
      userIdToOriginal[userId] = {
        originalKey: key,
        originalMember: member,
      }
    }
  })

  // Apply deltas to update seat types
  deltas.forEach(({ userId, seatTypeOption }) => {
    const mapping = userIdToOriginal[userId]
    if (!mapping)
      return

    const { originalKey, originalMember } = mapping
    if (!originalKey || !originalMember || !originalMember.team_user)
      return

    // If seat type is VIEW, set to null; otherwise, get product
    const seatType
      = seatTypeOption === ViewAccessTypeEnum.VIEW ? null : seatTypeOption
    const seatTypeProduct = seatType ? seatTypeProducts[seatType] ?? null : null

    // If seat type is not valid, skip update
    if (seatType && !seatTypeProduct)
      return

    // Update team user with new seat type and meta info
    const updatedTeamUser: TeamUserMeta = {
      ...originalMember.team_user,
      active_seat_type: seatTypeProduct,
    }

    updatedTeamUsers[originalKey] = {
      ...originalMember,
      upgrade_reason: upgradeReason,
      upgrade_method: upgradeMethod,
      assigned_at: assignedAt,
      upgrade_actor_name: upgradeActorName,
      team_user: updatedTeamUser,
    }
  })

  // Return updated state
  return {
    ...state,
    [teamId]: updatedTeamUsers,
  }
}

// --- Export Aliases (keep original names for compatibility) ---

export const $$c0 = teamUserUpdateSeatType
export const $$u1 = teamUserUpdateSeatTypeReducer
export const P = teamUserUpdateSeatType
export const Z = teamUserUpdateSeatTypeReducer

// --- Assumed dependencies ---
// - createOptimistAction, createOptimistCommitAction, createOptimistRevertAction, putTeamUser, FlashActions, getI18nString, ViewAccessTypeEnum, teamUserService

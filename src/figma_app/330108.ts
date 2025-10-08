import { throttle } from "lodash-es"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { useThrottledCallback } from "use-debounce"
import { createActionCreator } from "../905/73481"
import { resolveMessage } from "../905/231762"
import { getI18nString } from "../905/303541"
import { createOptimistThunk } from "../905/350402"
import { FlashActions } from "../905/573154"
import { setupLoadingStateHandler } from "../905/696711"
import { sendWithRetry } from "../905/910117"
import { generateBatchJoinTeamsCacheKey, generateJoinTeamCacheKey } from "../figma_app/88768"
import { setTeamOptimistThunk } from "../figma_app/240735"
import { UM, vr } from "../figma_app/475472"
import { organizationAPIService } from "../figma_app/617654"
import { loadingStatePutFailure, loadingStatePutLoading } from "../figma_app/714946"

interface TeamAssignmentPayload {
  teams: Array<{
    id: string
    workspace_id?: string
  }>
  workspaceId?: string
  workspaceName?: string
}

interface JoinTeamPayload {
  teamId: string
  teamIds?: string[]
  level?: string
}

interface FetchTeamPayload {
  teamId: string
  disableFlashError?: boolean
}

interface FetchTeamsPayload {
  includeProjectCount?: boolean
  includeMemberCount?: boolean
  includeTopMembers?: boolean
  includeSecretTeams?: boolean
}

/**
 * Unassign teams from their workspaces
 * Original name: $$T7
 */
export const unassignTeamsFromWorkspaces = createOptimistThunk(
  async ({ dispatch }, payload: TeamAssignmentPayload) => {
    const workspaceTeamMap: Record<string, string[]> = {}

    // Group teams by workspace ID
    payload.teams.forEach((team) => {
      const workspaceId = team.workspace_id
      if (workspaceId) {
        if (!(workspaceId in workspaceTeamMap)) {
          workspaceTeamMap[workspaceId] = []
        }
        workspaceTeamMap[workspaceId].push(team.id)
      }
    })

    // Only proceed if there are teams to unassign
    if (Object.keys(workspaceTeamMap).length > 0) {
      try {
        // Create deletion requests for each workspace
        const deletionRequests = Object.keys(workspaceTeamMap).map((workspaceId) => {
          const teamIds = workspaceTeamMap[workspaceId]
          return sendWithRetry.del(`/api/workspace/${workspaceId}/teams`, {
            team_ids: teamIds,
          })
        })

        // Execute all deletion requests
        const responses = await Promise.all(deletionRequests)
        const updatedTeams = responses.flatMap(response => response.data.meta)

        // Dispatch success actions
        dispatch(setDiscoverableTeams({
          teams: updatedTeams,
        }))
        dispatch(FlashActions.flash(getI18nString("org_team_actions.teams_were_unassigned", {
          numTeams: updatedTeams.length,
        })))
      }
      catch (error) {
        dispatch(FlashActions.error(resolveMessage(
          error,
          getI18nString("org_team_actions.an_error_occurred_while_unassigning_team_s_from_a_workspace"),
        )))
      }
    }
  },
)

/**
 * Assign teams to a workspace
 * Original name: $$I10
 */
export const assignTeamsToWorkspace = createOptimistThunk(
  async ({ dispatch }, payload: TeamAssignmentPayload) => {
    const teamIds = payload.teams.map(team => team.id)
    const { workspaceId, workspaceName } = payload

    try {
      const response = await sendWithRetry.post(`/api/workspace/${workspaceId}/teams`, {
        team_ids: teamIds,
      })
      const updatedTeams = response.data.meta

      dispatch(setDiscoverableTeams({
        teams: updatedTeams,
      }))
      dispatch(FlashActions.flash(getI18nString("org_team_actions.teams_were_assigned_to_workspace", {
        numTeams: updatedTeams.length,
        workspaceName,
      })))
    }
    catch (error) {
      dispatch(FlashActions.error(resolveMessage(
        error,
        getI18nString("org_team_actions.an_error_occurred_while_assigning_team_s_to_a_workspace"),
      )))
    }
  },
)

/**
 * Join multiple teams in batch
 * Original name: $$S6
 */
export const joinTeamsBatch = createOptimistThunk(
  ({ dispatch, getState }, payload: JoinTeamPayload) => {
    const state = getState()
    const orgId = state.currentUserOrgId
    const { teamIds = [], level } = payload

    const requestData: {
      team_ids: string[]
      level?: string
    } = {
      team_ids: teamIds,
    }

    if (level) {
      requestData.level = level
    }

    const cacheKey = generateBatchJoinTeamsCacheKey(teamIds)
    dispatch(loadingStatePutLoading({
      key: cacheKey,
    }))

    sendWithRetry.post(`/api/orgs/${orgId}/teams/join`, requestData)
      .then(() => {
        dispatch(UM({
          teamIds,
          level,
        }))
      })
      .catch((error) => {
        dispatch(FlashActions.error(resolveMessage(
          error,
          getI18nString("org_team_actions.an_error_occurred_while_joining_teams"),
        )))
        dispatch(loadingStatePutFailure({
          key: cacheKey,
        }))
      })
  },
)

/**
 * Join a single team
 * Original name: v
 */
export const joinSingleTeam = createOptimistThunk(
  ({ dispatch, getState }, payload: JoinTeamPayload) => {
    const state = getState()
    const orgId = state.currentUserOrgId
    const { teamId, level } = payload

    const requestData: {
      team_ids: string[]
      level?: string
    } = {
      team_ids: [teamId],
    }

    if (level) {
      requestData.level = level
    }

    const cacheKey = generateJoinTeamCacheKey(teamId)
    dispatch(loadingStatePutLoading({
      key: cacheKey,
    }))

    sendWithRetry.post(`/api/orgs/${orgId}/teams/join`, requestData)
      .then(() => {
        dispatch(vr({
          teamId,
          level,
        }))
      })
      .catch((error) => {
        dispatch(FlashActions.error(resolveMessage(
          error,
          getI18nString("org_team_actions.an_error_occurred_while_joining"),
        )))
        dispatch(loadingStatePutFailure({
          key: cacheKey,
        }))
      })
  },
)

/**
 * Fetch a single team's details
 * Original name: $$A2
 */
export const fetchTeamDetails = createOptimistThunk(
  (context, payload: FetchTeamPayload, { loadingKey }) => {
    const state = context.getState()
    const orgId = state.currentUserOrgId
    const { teamId, disableFlashError } = payload

    const teamRequest = organizationAPIService.getTeam({
      orgId,
      teamId,
    })

    setupLoadingStateHandler(teamRequest, context, loadingKey)

    teamRequest
      .then((response) => {
        const teamData = response.data.meta
        context.dispatch(setTeamOptimistThunk({
          team: teamData,
          userInitiated: false,
        }))
      })
      .catch((error) => {
        if (!disableFlashError) {
          context.dispatch(FlashActions.error(resolveMessage(
            error,
            getI18nString("org_team_actions.an_error_occurred_while_trying_to_fetch_this_team"),
          )))
        }
      })
  },
  ({ teamId }: FetchTeamPayload) => `ORG_FETCH_TEAM_${teamId}`,
)

/**
 * Action creator for fetching discoverable teams
 * Original name: $$x0
 */
export const fetchDiscoverableTeamsAction = createActionCreator("ORG_FETCH_DISCOVERABLE_TEAMS")

/**
 * Fetch all teams within the organization
 * Original name: $$N3
 */
export const fetchOrganizationTeams = createOptimistThunk(
  ({ dispatch, getState }, payload?: FetchTeamsPayload) => {
    const state = getState()
    const orgId = state.currentUserOrgId
    const {
      includeProjectCount,
      includeMemberCount,
      includeTopMembers,
      includeSecretTeams,
    } = payload || {}

    organizationAPIService.getTeams({
      orgId,
      includeMemberCount,
      includeProjectCount,
      includeTopMembers,
      includeSecretTeams,
    })
      .then((response) => {
        const teamsData = response.data.meta
        dispatch(setDiscoverableTeams({
          teams: teamsData,
        }))
      })
      .catch((error) => {
        dispatch(FlashActions.error(resolveMessage(
          error,
          getI18nString("org_team_actions.an_error_occurred_while_trying_to_fetch_teams_within_the_organization"),
        )))
      })

    dispatch(fetchDiscoverableTeamsAction(payload))
  },
)

/**
 * Action creators for team status and state management
 * Original names: $$C4, $$w5, $$O8
 */
export const setOrgTeamsStatus = createActionCreator("SET_ORG_TEAMS_STATUS")
export const resetOrgTeams = createActionCreator("RESET_ORG_TEAMS")
export const setDiscoverableTeams = createActionCreator("ORGS_SET_DISCOVERABLE_TEAMS")

/**
 * Throttled team joining function
 * Original name: $$R1
 */
export function createThrottledTeamJoin(dispatch, teamId: string, level?: string) {
  return throttle(() => dispatch(joinSingleTeam({
    teamId,
    level,
  })), 500, {
    leading: true,
    trailing: false,
  })
}

/**
 * Hook for throttled team joining with React integration
 * Original name: $$L9
 */
export function useThrottledTeamJoin(teamId: string, level?: string, callback?: (id: string) => void) {
  const dispatch = useDispatch<AppDispatch>()

  const throttledJoin = useThrottledCallback(() => {
    dispatch(joinSingleTeam({
      teamId,
      level,
    }))
    if (callback) {
      callback(teamId)
    }
  }, 500, {
    leading: true,
    trailing: false,
  })

  return useCallback(throttledJoin, [throttledJoin])
}

// Exported constants with meaningful names
export const E = fetchDiscoverableTeamsAction
export const GR = createThrottledTeamJoin
export const HD = fetchTeamDetails
export const Jt = fetchOrganizationTeams
export const Lx = setOrgTeamsStatus
export const MT = resetOrgTeams
export const ZT = joinTeamsBatch
export const c5 = unassignTeamsFromWorkspaces
export const hZ = setDiscoverableTeams
export const lH = useThrottledTeamJoin
export const xM = assignTeamsToWorkspace

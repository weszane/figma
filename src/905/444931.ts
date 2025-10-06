import { getWorkspaceName } from "../905/967587"
import { isExternalRestricted } from "../figma_app/12796"
import { isFigmaLibrariesEnabled } from "../figma_app/657017"

interface WorkspaceContext {
  userId: string
  orgId?: string
  teamId?: string
}

interface AuthedUser {
  id: string
  // ... other user properties
}

interface Org {
  id: string
  figjam_disabled_at?: string
  is_slides_disabled?: boolean
  figma_provided_libraries_disabled?: boolean
  // ... other org properties
}

interface Team {
  id: string
  // ... other team properties
  figma_provided_libraries_disabled?: boolean
}

interface Plan {
  plan_id: string
  is_plan_locked?: boolean
  draft_folder_id?: string
  is_sites_disabled?: boolean
  is_cooper_disabled?: boolean
  is_figmake_disabled?: boolean
}

interface State {
  authedUsers: {
    byId: Record<string, AuthedUser>
  }
  orgById: Record<string, Org>
  teams: Record<string, Team>
}

interface ServerData {
  orgs: Org[]
  teams: Team[]
  plansByUserId: Record<string, Plan[]>
}

/**
 * Process workspace context and return enhanced workspace information
 * Original function: $$s0
 */
export function processWorkspaceContext(
  context: WorkspaceContext,
  appType: string,
  state: State,
  serverData: ServerData | null,
  isDsePresetsEnabled: boolean,
) {
  const { userId, orgId, teamId } = context

  // Get user information
  const user = state.authedUsers.byId[userId]

  // Process organizations data
  const orgsById = serverData
    ? serverData.orgs.reduce((acc, org) => ({
      ...acc,
      [org.id]: org,
    }), {} as Record<string, Org>)
    : state.orgById

  // Process teams data
  const teamsById = serverData
    ? serverData.teams.reduce((acc, team) => ({
      ...acc,
      [team.id]: team,
    }), {} as Record<string, Team>)
    : state.teams

  // Get workspace name
  const workspaceName = getWorkspaceName(state as any, context, orgsById as any, teamsById as any)

  // Check if user is restricted externally
  const isDisabledDueToECC = isExternalRestricted(user, orgId)

  // Check if DSE presets are disabled
  const isDsePresetsDisabled = !!isDsePresetsEnabled && !isFigmaLibrariesEnabled(
    orgId ? orgsById[orgId] : null,
    teamId ? teamsById[teamId] : null,
    null,
  )

  // Handle team-level (no org) workspace context
  if (!orgId) {
    const teamPlan = serverData?.plansByUserId[userId]?.find(plan => plan.plan_id === teamId)
    const isPlanLocked = teamPlan?.is_plan_locked
    const draftFolderId = teamPlan?.draft_folder_id

    return {
      ...context,
      user,
      workspaceName,
      isDisabledDueToECC,
      isDsePresetsDisabled,
      isPlanLocked,
      draftFolderId,
    }
  }

  // Handle organization-level workspace context
  const org = state.orgById[orgId]

  // Check app-specific disabled states
  const isFigJamDisabled = !!org?.figjam_disabled_at && appType === "whiteboard"
  const isSlidesDisabled = !!org?.is_slides_disabled && appType === "slides"

  // Find organization plan
  const orgPlan = serverData?.plansByUserId[userId]?.find(plan => plan.plan_id === orgId)

  // Check various app disable states
  const isSitesDisabled = (orgPlan?.is_sites_disabled ?? true) && appType === "sites"
  const isCooperDisabled = (orgPlan?.is_cooper_disabled ?? true) && appType === "cooper"
  const isFigmakeDisabled = (orgPlan?.is_figmake_disabled ?? true) && appType === "figmake"

  // Plan lock and draft folder information
  const isPlanLocked = orgPlan?.is_plan_locked
  const draftFolderId = orgPlan?.draft_folder_id

  return {
    ...context,
    user,
    workspaceName,
    isFigJamDisabled,
    isDisabledDueToECC,
    isDsePresetsDisabled,
    isSlidesDisabled,
    isSitesDisabled,
    isCooperDisabled,
    isFigmakeDisabled,
    isPlanLocked,
    draftFolderId,
  }
}

export const y = processWorkspaceContext

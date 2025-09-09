import { reportError } from '../905/11'
import { ServiceCategories as _$$e } from '../905/165054'
import { OrganizationType } from '../905/833838'
import { getInitialOptions } from '../figma_app/169182'

/**
 * Views that may require team ID resolution.
 * (original variable: o)
 */
const teamRelatedViews = [
  'recentsAndSharing',
  'draftsToMove',
  'communityHub',
  'search',
  'user',
]

/**
 * Resolves the team ID from the provided Redux state object.
 * Handles various view types and fallback scenarios.
 * @param state - The Redux state object.
 * @returns The resolved team ID or an empty string if not found.
 * (original function: $$l0)
 */
export function resolveTeamId(state: {
  openFile?: { teamId?: string }
  selectedView: {
    teamId?: string
    view?: string
    adminPlanType?: OrganizationType
    planId?: string
    folderId?: string
  }
  folders?: Record<string, { team_id?: string }>
  currentUserOrgId?: string
  currentTeamId?: string
}): string {
  try {
    // openFile.teamId
    if (state.openFile) {
      return state.openFile.teamId || ''
    }

    // selectedView.teamId
    if ('teamId' in state.selectedView) {
      return state.selectedView.teamId || ''
    }

    // abandonedDraftFiles or seatRequests with TEAM adminPlanType
    const { view, adminPlanType, planId, folderId } = state.selectedView
    if (
      (view === 'abandonedDraftFiles' && adminPlanType === OrganizationType.TEAM)
      || (view === 'seatRequests' && adminPlanType === OrganizationType.TEAM)
    ) {
      return planId || ''
    }

    // folder view
    if (view === 'folder') {
      const folder = state.folders?.[folderId!]
      if (!folder) {
        return getInitialOptions().page_load_team_id || ''
      }
      return folder.team_id || ''
    }

    // Other views that may require team ID
    const otherViews = [
      ...teamRelatedViews,
      'deletedFiles',
      'limitedTeamSharedProjects',
      'trashedFolders',
      'desktopNewTab',
      'resourceHub',
    ]
    if (otherViews.includes(view!) && !state.currentUserOrgId) {
      return state.currentTeamId || ''
    }
  }
  catch (err: any) {
    // Error handling (original: reportError)
    reportError(_$$e.GROWTH_PLATFORM, new Error(`Error getting team ID from Redux state: ${err.message}`))
  }
  return ''
}

/** Exported alias for resolveTeamId (original: Z) */
export const Z = resolveTeamId

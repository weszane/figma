import { FlashActions } from '../905/573154'
import { getFeatureFlags } from '../905/601108'
import { selectViewAction } from '../905/929976'
import { FFileType, FPlanNameType } from '../figma_app/191312'
import { isTeamFolderV2 } from '../figma_app/528509'
import { AddOperationType, checkTeamFileRestrictions } from '../figma_app/598018'
import { canCreateFileType } from '../figma_app/687776'
import { desktopAPIInstance } from '../figma_app/876459'

/**
 * Shows the file browser or displays an error if desktopAPIInstance is unavailable.
 * Original function: $$p0
 * @param errorMessage - The error message to display.
 * @param dispatch - The dispatch function for actions.
 */
export function showFileBrowserOrError(errorMessage: any, dispatch: any): void {
  if (desktopAPIInstance) {
    desktopAPIInstance.showFileBrowser(errorMessage)
    desktopAPIInstance.close({
      suppressReopening: false,
      shouldForceClose: true,
    })
    return
  }
  dispatch(selectViewAction({ view: 'recentsAndSharing' }))
  dispatch(FlashActions.error(errorMessage))
}

/**
 * Generates and returns a random string.
 * Original function: $$h2
 * @returns {string} Random string.
 */
let randomString = Math.random().toString(36).slice(2)
export function getRandomString(): string {
  return randomString
}

/**
 * Checks if a file can be created in a team based on restrictions and feature flags.
 * Original function: $$g3
 * @param file - The file object.
 * @param fileType - The type of file to create.
 * @param appState - The application state containing teams and open file info.
 * @returns {object | undefined} The team object if creation is allowed, otherwise undefined.
 */
export function canCreateTeamFile(file: { teamId?: string, plan?: { tier?: FPlanNameType }, editorType?: FFileType } | undefined, fileType: any, appState: { teams: Record<string, any>, openFile?: { project?: any } }): object | undefined {
  const teamId = file?.teamId
  const team = teamId ? appState.teams[teamId] : null
  const planTier = file?.plan?.tier
  const editorType = file?.editorType ?? FFileType.DESIGN
  const canCreate = !!file && !!fileType && canCreateFileType(fileType, editorType)

  const isRestricted = team && canCreate && !checkTeamFileRestrictions(team, {
    type: AddOperationType.ADD_FILE,
    editorType,
    isDestinationTeamDrafts: isTeamFolderV2(appState.openFile?.project),
  })

  const isStarterLimit = editorType === FFileType.FIGMAKE
    && team
    && planTier === FPlanNameType.STARTER
    && !getFeatureFlags().bake_starter_limit

  if (isRestricted || isStarterLimit) {
    return team
  }
  return undefined
}

// Refactored exports for clarity and traceability
export const A7 = showFileBrowserOrError // $$p0
export const ds = getRandomString // $$h2
export const xp = canCreateTeamFile // $$g3
export { ck } from '../figma_app/469876'

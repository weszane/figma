import { getI18nString } from '../905/303541'
import { encodeUri } from '../figma_app/930338'
/**
 * Handles logic for the "teamRestore" view.
 * Original class name: $$a0
 */
export class TeamRestoreViewHandler {
  /**
   * Determines if the given path matches the "teamRestore" view.
   * @param _unused - Unused parameter (original: e)
   * @param pathSegments - Array of path segments
   * @returns Object with view info or null
   */
  pathToSelectedView(_unused: unknown, pathSegments: string[]): { view: string, teamId: string, teamName: string } | null {
    // $$a0.pathToSelectedView
    if (
      pathSegments[1] === 'files'
      && pathSegments[2] === 'team'
      && pathSegments[5] === 'restore'
    ) {
      return {
        view: 'teamRestore',
        teamId: pathSegments[3],
        teamName: pathSegments[4],
      }
    }
    return null
  }

  /**
   * Determines if a history change is required between two views.
   * @param current - Current view object
   * @param next - Next view object
   * @returns True if history change is required
   */
  requireHistoryChange(
    current: { view: string, teamId?: string },
    next: { view: string, teamId?: string },
  ): boolean {
    // $$a0.requireHistoryChange
    if (current.view !== 'teamRestore' || next.view !== 'teamRestore') {
      return (current.view === 'teamRestore') !== (next.view === 'teamRestore')
    }
    return next.teamId !== current.teamId
  }

  /**
   * Returns the i18n string for the selected view.
   * @param selectedView - Selected view object
   * @returns Localized string or null
   */
  selectedViewToPath(selectedView: { view: string }): string | null {
    // $$a0.selectedViewToPath
    if (selectedView.view === 'teamRestore') {
      return getI18nString('view_selectors.file_browser.restore_team')
    }
    return null
  }

  /**
   * Returns the path name for the selected view.
   * @param selectedView - Selected view object
   * @returns Path string or null
   */
  selectedViewName(selectedView: { view: string, teamId?: string, teamName?: string }): string | null {
    // $$a0.selectedViewName
    if (selectedView.view === 'teamRestore' && selectedView.teamId && selectedView.teamName) {
      return `/files/team/${selectedView.teamId}/${encodeUri(selectedView.teamName)}/restore`
    }
    return null
  }

  /**
   * Checks if the selected view has missing resources.
   * Always returns false for "teamRestore".
   * @param _selectedView - Selected view object
   * @param _resources - Resources object
   * @returns False
   */
  selectedViewHasMissingResources(_selectedView: unknown, _resources: unknown): boolean {
    // $$a0.selectedViewHasMissingResources
    return false
  }
}

// Refactored export name for $$a0
export const m = TeamRestoreViewHandler

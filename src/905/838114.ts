import { getI18nString } from '../905/303541'
import { serializeQuery } from '../905/634134'
/**
 * Handles view path and selection logic for the desktop new tab.
 * Original class name: $$a0
 */
export class DesktopNewTabViewHandler {
  /**
   * Maps a path array to a selected view object.
   * @param e - Unused parameter (original: e)
   * @param pathSegments - Array of path segments (original: t)
   * @param i - Unused parameter (original: i)
   * @param n - Unused parameter (original: n)
   * @returns Selected view object or null.
   */
  pathToSelectedView(
    e: unknown,
    pathSegments: string[],
    _i: unknown,
    _n: unknown,
  ): { view: 'desktopNewTab' } | null {
    // $$a0.pathToSelectedView
    if (pathSegments.length === 2 && pathSegments[1] === 'desktop_new_tab') {
      return { view: 'desktopNewTab' }
    }
    return null
  }

  /**
   * Converts a selected view object to a path string.
   * @param selectedView - Selected view object (original: e)
   * @param context - Context containing user/org/team info (original: t)
   * @returns Path string or null.
   */
  selectedViewToPath(
    selectedView: { view: string },
    context: {
      user?: { id: string }
      currentUserOrgId?: string
      currentTeamId?: string
    },
  ): string | null {
    // $$a0.selectedViewToPath
    if (selectedView.view !== 'desktopNewTab')
      return null
    const query: Record<string, string> = {}
    if (context.user)
      query.fuid = context.user.id
    if (context.currentUserOrgId)
      query.org_id = context.currentUserOrgId
    if (context.currentTeamId)
      query.team_id = context.currentTeamId
    return `/desktop_new_tab?${serializeQuery(query)}`
  }

  /**
   * Determines if a history change is required between two selected views.
   * @param prevView - Previous selected view (original: e)
   * @param nextView - Next selected view (original: t)
   * @returns True if history change is required.
   */
  requireHistoryChange(
    prevView: { view: string },
    nextView: { view: string },
  ): boolean {
    // $$a0.requireHistoryChange
    return (prevView.view === 'desktopNewTab') !== (nextView.view === 'desktopNewTab')
  }

  /**
   * Gets the display name for the selected view.
   * @param selectedView - Selected view object (original: e)
   * @returns Localized tab title or null.
   */
  selectedViewName(selectedView: { view: string }): string | null {
    // $$a0.selectedViewName
    if (selectedView.view !== 'desktopNewTab')
      return null
    return getI18nString('desktop_new_tab.tab_title')
  }
}

// Export with original variable name for compatibility
export const i = DesktopNewTabViewHandler

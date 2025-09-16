import { getI18nString } from '../905/303541'
import { parseQuerySimple } from '../905/634134'
/**
 * Handles routing and view logic for the abuse report form.
 */
export class AbuseReportFormRouter {
  /**
   * Maps a path to the selected view for the abuse report form.
   * @param e - Unused parameter (could be context or state).
   * @param pathSegments - Array of path segments.
   * @param queryString - Query string from the URL.
   * @param r - Unused parameter.
   * @returns The selected view object or null.
   * @originalName pathToSelectedView
   */
  pathToSelectedView(
    e: unknown,
    pathSegments: string[],
    queryString?: string,
    _r?: unknown,
  ): { view: string, reportedContent?: string } | null {
    if (
      pathSegments.length === 2
      && pathSegments[1] === 'report-abuse'
    ) {
      const query = queryString ? parseQuerySimple(queryString) : {}
      return {
        view: 'abuseReportForm',
        reportedContent: query.reported_content,
      }
    }
    return null
  }

  /**
   * Maps the selected view to a path.
   * @param selectedView - The selected view object.
   * @returns The path string or null.
   * @originalName selectedViewToPath
   */
  selectedViewToPath(
    selectedView: { view: string },
  ): string | null {
    if (selectedView.view !== 'abuseReportForm')
      return null
    return '/report-abuse'
  }

  /**
   * Determines if a history change is required between two views.
   * @param prevView - The previous view object.
   * @param nextView - The next view object.
   * @returns True if a history change is required, false otherwise.
   * @originalName requireHistoryChange
   */
  requireHistoryChange(
    prevView: { view: string },
    nextView: { view: string },
  ): boolean {
    return (
      (prevView.view === 'abuseReportForm')
      !== (nextView.view === 'abuseReportForm')
    )
  }

  /**
   * Gets the localized name for the selected view.
   * @param selectedView - The selected view object.
   * @returns The localized name or null.
   * @originalName selectedViewName
   */
  selectedViewName(
    selectedView: { view: string },
  ): string | null {
    if (selectedView.view !== 'abuseReportForm')
      return null
    return getI18nString('view_selectors.abuse_report_form.title')
  }
}

// Export with refactored name
export const v = AbuseReportFormRouter

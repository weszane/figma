import { getI18nString } from '../905/303541'
/**
 * Handles routing and view selection for the "figjamTry" view.
 */
export class FigjamTryViewHandler {
  /**
   * Maps a path to a selected view object.
   * @param e - Unused parameter.
   * @param t - Path segments.
   * @param i - Unused parameter.
   * @param n - Unused parameter.
   * @returns Selected view object or null.
   * @originalName pathToSelectedView
   */
  pathToSelectedView(e: unknown, t: string[], _i: unknown, _n: unknown): { view: string } | null {
    // pathToSelectedView
    if (t.length === 2 && t[1] === 'try-figjam') {
      return { view: 'figjamTry' }
    }
    return null
  }

  /**
   * Maps a selected view object to a path string.
   * @param e - Selected view object.
   * @returns Path string or null.
   * @originalName selectedViewToPath
   */
  selectedViewToPath(e: { view: string }): string | null {
    // selectedViewToPath
    if (e.view === 'figjamTry') {
      return '/try-figjam'
    }
    return null
  }

  /**
   * Determines if a history change is required between two views.
   * @param e - Current view object.
   * @param t - Target view object.
   * @returns True if a history change is required, false otherwise.
   * @originalName requireHistoryChange
   */
  requireHistoryChange(e: { view: string }, t: { view: string }): boolean {
    // requireHistoryChange
    return (e.view === 'figjamTry') !== (t.view === 'figjamTry')
  }

  /**
   * Gets the display name for the selected view.
   * @param e - Selected view object.
   * @returns Display name string or null.
   * @originalName selectedViewName
   */
  selectedViewName(e: { view: string }): string | null {
    // selectedViewName
    if (e.view === 'figjamTry') {
      return getI18nString('view_selectors.file_browser.try_figjam.try_fig_jam')
    }
    return null
  }
}

// Export with the original variable name for compatibility.
export const u = FigjamTryViewHandler

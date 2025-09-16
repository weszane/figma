import { getI18nString } from '../905/303541'
import { addSessionLocalIdToQuery, addVersionIdToQuery, appendHashToUrl, appendQueryToUrl, buildResourcePath, extractQueryParams, getTestPath, parseCommentPreferencesOrThreadId, setPageTypeIfCanvasOrDocument } from '../905/366346'
import { parseAndNormalizeQuery } from '../905/634134'
import { getFilteredFeatureFlags } from '../905/717445'
import { getDisplayName, getRepoById } from '../905/760074'
import { FEditorType } from '../figma_app/53721'
import { INTERACTION_FAKE_FILE_KEY } from '../figma_app/617727'
import { encodeUri } from '../figma_app/930338'
/**
 * Checks if the selected view is fullscreen illustration.
 * @param view - The selected view object.
 * @returns True if the view is fullscreen illustration, false otherwise.
 * (Original function: u)
 */
function isFullscreenIllustrationView(view: any): boolean {
  return (
    !!getFilteredFeatureFlags().ce_il_root
    && view?.view === 'fullscreen'
    && view?.editorType === FEditorType.Illustration
  )
}

/**
 * Interface for the selected view object.
 */
interface SelectedView {
  view?: string
  editorType?: FEditorType
  fileKey?: string
  user?: any
  nodeId?: string
  versionId?: string
  commentThreadId?: string
  mode?: string
}

/**
 * Interface for the context object.
 */
interface Context {
  fileByKey: Record<string, any>
  repos: any[]
}

/**
 * Handler for illustration fullscreen view logic.
 * (Original class: $$p0)
 */
export class IllustrationFullscreenViewHandler {
  /**
   * Builds the selected view object from path segments and query.
   * @param e - The selected view object.
   * @param t - Path segments.
   * @param i - Query string.
   * @param a - Additional argument.
   * @returns The selected view object or null.
   * (Original method: pathToSelectedView)
   */
  pathToSelectedView(
    e: SelectedView,
    t: string[],
    i?: string,
    a?: any,
  ): SelectedView | null {
    if (!getFilteredFeatureFlags().ce_il_root)
      return null

    const query = i ? parseAndNormalizeQuery(i) : {}
    const segment = t[1]

    if (
      (segment === 'design' || segment === 'file')
      && (query.mode === 'draw' || query.m === 'draw')
      && query.m !== 'auto'
    ) {
      const fileKey = t[3] === 'branch' && t[4] ? t[4] : t[2]
      const selectedView: SelectedView = {
        view: 'fullscreen',
        editorType: e?.user ? FEditorType.Illustration : FEditorType.Design,
        fileKey,
      }
      parseCommentPreferencesOrThreadId(a, selectedView)
      extractQueryParams(query, selectedView)

      if (
        isFullscreenIllustrationView(selectedView)
        && (query.mode === 'draw' || query.m === 'draw')
      ) {
        selectedView.mode = 'draw'
      }
      return selectedView
    }
    return null
  }

  /**
   * Determines if a history change is required.
   * @returns Always false.
   * (Original method: requireHistoryChange)
   */
  requireHistoryChange(): boolean {
    return false
  }

  /**
   * Converts the selected view object to a path string.
   * @param e - The selected view object.
   * @param t - The context object.
   * @returns The path string or null.
   * (Original method: selectedViewToPath)
   */
  selectedViewToPath(e: SelectedView, t: Context): string | null {
    if (isFullscreenIllustrationView(e)) {
      if (e.fileKey === INTERACTION_FAKE_FILE_KEY)
        return getTestPath()

      const viewName = this.selectedViewName(e, t)
      const encodedViewName = viewName ? encodeUri(viewName) : ''
      const query: Record<string, any> = {}
      const fileKey = e.fileKey
      const file = fileKey && t.fileByKey[fileKey]
      const resourceType = 'design'
      let path = ''

      if (file) {
        path = buildResourcePath(
          resourceType,
          fileKey ?? '',
          encodedViewName,
          file || undefined,
          getRepoById(file, t.repos),
        )
      }
      else {
        path = `/${resourceType}/${fileKey}`
        path += encodedViewName ? `/${encodedViewName}` : '/Untitled'
      }

      addSessionLocalIdToQuery(query, e.nodeId)
      setPageTypeIfCanvasOrDocument(query, e.nodeId)
      addVersionIdToQuery(query, e.versionId)
      query.m = 'draw'

      path = appendQueryToUrl(path, query)
      path = appendHashToUrl(path, e.commentThreadId)

      return path
    }
    return null
  }

  /**
   * Gets the display name for the selected view.
   * @param e - The selected view object.
   * @param t - The context object.
   * @returns The display name or null.
   * (Original method: selectedViewName)
   */
  selectedViewName(e: SelectedView, t: Context): string | null {
    if (isFullscreenIllustrationView(e)) {
      let name: string | null = null
      if (e.fileKey) {
        const file = t.fileByKey[e.fileKey]
        if (file) {
          const repo = getRepoById(file, t.repos)
          name = repo ? getDisplayName(file, repo) : file.name
        }
      }
      return name ?? getI18nString('dev_handoff.dev_handoff_view_selector.untitled')
    }
    return null
  }

  /**
   * Checks if the selected view has missing resources.
   * @param e - The context object.
   * @param t - The selected view object.
   * @returns True if resources are missing, false otherwise.
   * (Original method: selectedViewHasMissingResources)
   */
  selectedViewHasMissingResources(e: Context, t: SelectedView): boolean {
    return !!isFullscreenIllustrationView(t) && !!t.fileKey && !(t.fileKey in e.fileByKey)
  }
}

// Export with original variable name for compatibility
export const y = IllustrationFullscreenViewHandler

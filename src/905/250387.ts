import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { trackEventAnalytics } from '../905/449184'
import { getFeatureFlags } from '../905/601108'
import { isValidSessionLocalID, parseSessionLocalID } from '../905/871411'
import { mapPathToSelectedView } from '../figma_app/193867'
import { copyTextToClipboard } from '../figma_app/623293'

/**
 * Refactored from $$c1 -> parseLinkForContext
 * (original function name: $$c1)
 */

interface SelectedView {
  view: string
  fileKey?: string
}

interface NextView {
  view: string
  fileKey?: string
  nodeId?: string
  commentThreadId?: string
  versionId?: string
  cmsItemId?: string
  editorType?: string
}

/** Return shape kept compatible with original implementation */
export interface LinkContext {
  url: string | null
  nodeIdInThisFile: string
  commentThreadId: string
  nextView: NextView | null
  versionId: string
  cmsItemId: string
}

/**
 * Parse a URL and, when it points at the same origin and the user is viewing a fullscreen file,
 * attempt to map the URL path/query/hash to an application view using mapPathToSelectedView.
 *
 * Preserves original behavior: returns nodeId/commentThreadId/versionId/cmsItemId when applicable.
 *
 * @param url - candidate URL string (may be null/undefined)
 * @param appState - application state object that contains `selectedView`
 */
export function parseLinkForContext(url: string | null | undefined, appState: { selectedView?: SelectedView } & any): LinkContext {
  // original: $$c1
  let nodeIdInThisFile = ''
  let commentThreadId = ''
  let versionId = ''
  let cmsItemId = ''
  let nextView: NextView | null = null

  if (!url) {
    return {
      url: url ?? null,
      nodeIdInThisFile,
      commentThreadId,
      nextView,
      versionId,
      cmsItemId,
    }
  }

  // Try to construct a URL relative to current location; if it fails, treat as external.
  let parsed: URL | null = null
  try {
    parsed = new URL(url, location.href)
  }
  catch {
    parsed = null
  }

  if (parsed && parsed.origin === location.origin) {
    const selectedView = appState?.selectedView
    if (selectedView && selectedView.view === 'fullscreen' && selectedView.fileKey) {
      try {
        // mapPathToSelectedView can throw; preserve original try/catch behavior.
        nextView = mapPathToSelectedView(appState, parsed.pathname, parsed.search, parsed.hash) as NextView
      }
      catch {
        nextView = null
      }

      if (nextView && nextView.view === 'fullscreen' && selectedView.fileKey === nextView.fileKey) {
        // Preserve original validation logic for nodeId using session-local parsing & validation.
        try {
          if (nextView.nodeId && isValidSessionLocalID(parseSessionLocalID(nextView.nodeId))) {
            nodeIdInThisFile = nextView.nodeId
          }
        }
        catch {
          // keep nodeIdInThisFile as ''
        }

        if (nextView.commentThreadId)
          commentThreadId = nextView.commentThreadId
        if (nextView.versionId)
          versionId = nextView.versionId
        if (getFeatureFlags().dakota && nextView.cmsItemId)
          cmsItemId = nextView.cmsItemId
      }
    }
  }

  return {
    url,
    nodeIdInThisFile,
    commentThreadId,
    nextView,
    versionId,
    cmsItemId,
  }
}

/**
 * Refactored from $$u0 -> copyHyperlinkToClipboard
 * (original function name: $$u0)
 */

/** Minimal dispatcher/action types used by this function */
type Dispatcher = (action: any) => void

/**
 * Copy a hyperlink (or stripped email/phone) to clipboard, track analytics, and enqueue a visual bell.
 *
 * @param dispatch - function to dispatch actions (used to enqueue VisualBellActions)
 * @param href - original hyperlink string (may include mailto: or tel:)
 * @param source - analytics source string
 * @param customMessage - optional custom visual bell message
 */
export function copyHyperlinkToClipboard(
  dispatch: Dispatcher,
  href: string,
  source: string,
  customMessage?: string | null,
): void {
  // original: $$u0
  let textToCopy = href

  if (textToCopy.startsWith('mailto:')) {
    textToCopy = textToCopy.slice(7)
  }
  else if (textToCopy.startsWith('tel:')) {
    textToCopy = textToCopy.slice(4)
  }

  copyTextToClipboard(textToCopy)

  trackEventAnalytics('Copy Hyperlink', {
    source,
  })

  dispatch(VisualBellActions.enqueue({
    message: customMessage ?? getI18nString('visual_bell.url_copied_to_your_clipboard', { url: href }),
    type: 'hyperlink-copied',
  }))
}

/**
 * Maintain original exports for compatibility:
 * UA was originally $$u0, ih was originally $$c1
 */
export const UA = copyHyperlinkToClipboard
export const ih = parseLinkForContext

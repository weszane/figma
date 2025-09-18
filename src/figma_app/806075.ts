import { L } from '../905/657783'
import { FEditorType } from '../figma_app/53721'
import { getInitialOptions } from '../figma_app/169182'
import { FFileActivityType } from '../figma_app/191312'
import { trackFileEvent } from '../figma_app/314264'
import { canAccessFullDevMode } from '../figma_app/473493'

// original: $$d0
export const DEFAULT_DESIGN_MODE_LABEL = 'Enter Design Mode'

/**
 * Handle entering different editor modes and track/post activity.
 * original: $$c1
 *
 * @param context - app/context object (was `e`)
 * @param editorType - editor type enum (was `t`)
 * @param source - source string (was `r`)
 * @param forwardToDatadog - whether to forward metrics (was `u`)
 * @param options - additional metadata/options (was `p`)
 */
export function handleEnterMode(
  context: any,
  editorType: FEditorType,
  source: string,
  forwardToDatadog = false,
  options: Record<string, any> = {},
) {
  const isDevHandoff = editorType === FEditorType.DevHandoff
  const isIllustration = editorType === FEditorType.Illustration

  const metadata = {
    source,
    hasSeatForDevMode: canAccessFullDevMode(context),
    ...options,
  }

  const fileKey = context.openFile?.key

  // Track the file event first (keeps original behavior/order)
  trackFileEvent(
    isDevHandoff ? 'Enter Inspect Mode' : isIllustration ? 'Enter Illustration Mode' : DEFAULT_DESIGN_MODE_LABEL,
    fileKey,
    context,
    metadata,
    { forwardToDatadog },
  )

  // Only post recent activity when org_id is present, fileKey exists and source is not 'init'
  if (getInitialOptions().org_id && fileKey && source !== 'init') {
    // In the original code illustration mode avoided posting recent activity
    if (isIllustration)
      return

    const activityType = isDevHandoff ? FFileActivityType.DEV_MODE_FILE_SEEN : FFileActivityType.DESIGN_FILE_SEEN
    L.postRecentActivity({
      fileKey,
      activityType,
    })
  }
}

// Keep exported aliases consistent with original naming mapping
export const L3 = DEFAULT_DESIGN_MODE_LABEL
export const Ym = handleEnterMode

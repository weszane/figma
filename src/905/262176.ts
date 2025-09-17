import type { Dispatch } from 'redux'
import type { OptimistThunkContext } from './350402'
import { VisualBellActions } from '../905/302958'
import { formatI18nMessage } from '../905/482208'
import { copySelectedViewUrlToClipboard } from '../figma_app/107215'

/**
 * Copies the selected view URL to clipboard and enqueues a visual bell notification.
 * @param dispatch - Function to dispatch actions.
 * @param viewParams - Parameters for the view URL.
 * @param versionId - The version identifier.
 */
export function handleCopyViewUrl(dispatch: OptimistThunkContext['dispatch'], viewParams: Record<string, any>, versionId: string): void {
  // Original: $$s0
  dispatch(
    copySelectedViewUrlToClipboard({
      ...viewParams,
      versionId,
    }),
  )
  dispatch(
    VisualBellActions.enqueue({
      type: 'link_copied_to_clipboard',
      message: formatI18nMessage('link-copied'),
    }),
  )
}

// Refactored export name for consistency
export const S = handleCopyViewUrl

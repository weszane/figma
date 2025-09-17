import { noop } from 'lodash-es'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useDebounce } from 'use-debounce'
import { VisualBellActions } from '../905/302958'
import { VisualBellIcon } from '../905/576487'
import { getFeatureFlags } from '../905/601108'
import { customHistory } from '../905/612521'

/**
 * VisualBellConnectionErrorHandler - Handles CMS connection error visual bell notifications.
 * Original function name: $$p0
 */
const CMS_CONNECTION_ERROR_BELL_TYPE = 'cms-connection-error-visual-bell'

/**
 * Displays a visual bell notification when a CMS connection error occurs.
 * Cleans up the notification on unmount.
 * @param params - Object containing the current status.
 */
export function VisualBellConnectionErrorHandler(params: { status: string }) {
  const dispatch = useDispatch()
  const [debouncedStatus] = useDebounce(params.status, 3000)

  useEffect(() => {
    // Only show the visual bell if the feature flag is enabled
    if (getFeatureFlags().dakota_connection_error_toast) {
      if (debouncedStatus === 'errors') {
        dispatch(
          VisualBellActions.enqueue({
            type: CMS_CONNECTION_ERROR_BELL_TYPE,
            timeoutOverride: Infinity,
            icon: VisualBellIcon.OFFLINE,
            message: `Network hiccup—refresh to fix it.`,
            button: {
              text: 'Refresh',
              action: () => {
                customHistory.reload('[CMS] Livegraph connection error')
              },
            },
            onDismiss: noop,
          }),
        )
      }
      // Cleanup: remove the visual bell notification when component unmounts or status changes
      return () => {
        dispatch(
          VisualBellActions.dequeue({
            matchType: CMS_CONNECTION_ERROR_BELL_TYPE,
          }),
        )
      }
    }
  }, [debouncedStatus, dispatch])
}

/** Exported alias for VisualBellConnectionErrorHandler (original: g) */
export const g = VisualBellConnectionErrorHandler

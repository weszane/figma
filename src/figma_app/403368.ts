import { debugState } from '../905/407919'
import { subscribeAndAwaitData } from '../905/553831'
import { FileFeaturesEnabled } from '../figma_app/43951'
import { useSubscription } from '../figma_app/288654'
import { useCurrentFileKey } from '../figma_app/516028'

/**
 * Checks if cursor chat is disabled for the current file using a subscription.
 * Original function: $$l0
 * @returns {boolean} True if cursor chat is disabled, false otherwise.
 */
export function setupCursorChatDisabledCheck(): boolean {
  const fileKey = useCurrentFileKey()
  const subscription = useSubscription(
    FileFeaturesEnabled,
    { fileKey: fileKey || '' },
    { enabled: !!fileKey },
  )
  const orgPublicInfo = subscription.data?.file?.orgPublicInfo
  return !!orgPublicInfo?.cursorChatDisabledAt
}

/**
 * Asynchronously checks if cursor chat is disabled for the currently opened file.
 * Original function: $$d1
 * @returns {Promise<boolean>} Resolves to true if cursor chat is disabled, false otherwise.
 */
export function fetchCursorChatDisabledStatus(): Promise<boolean> {
  return new Promise((resolve) => {
    const openFileKey = debugState.getState().openFile?.key
    if (!openFileKey) {
      return resolve(false)
    }
    subscribeAndAwaitData(FileFeaturesEnabled, { fileKey: openFileKey })
      .then((result) => {
        const orgPublicInfo = result.file?.orgPublicInfo
        resolve(!!orgPublicInfo?.cursorChatDisabledAt)
      })
  })
}

// Export with original variable names for compatibility
export const S = setupCursorChatDisabledCheck // $$l0
export const q = fetchCursorChatDisabledStatus // $$d1

import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { trackEventAnalytics } from '../905/449184'
import { fileSelectedShareModalTab } from '../figma_app/91703'
import { ShareAction } from '../figma_app/707808'

/**
 * Mapping of ShareAction enum values to their corresponding tab names.
 * (original variable: d)
 */
const shareActionTabNames: Record<ShareAction, string> = {
  [ShareAction.INVITE]: 'Invite',
  [ShareAction.PUBLISH_COMMUNITY]: 'Publish community',
  [ShareAction.PUBLISH_TEMPLATE]: 'Publish template',
  [ShareAction.COLLABORATORS]: 'Collaborators',
  [ShareAction.EMBED_CODE]: 'Embed code',
  [ShareAction.SHARE_SETTINGS]: 'Share settings',
  [ShareAction.FOLDER_MEMBERS]: 'Folder members',
  [ShareAction.SHARE_GOOGLE_DEVICE_DISCLAIMER]: 'Share google device disclaimer',
  [ShareAction.SHARE_TO_GOOGLE_CLASSROOM]: 'Share to google classroom',
  [ShareAction.CONNECTED_PROJECT_USERS]: 'Connected project users',
  [ShareAction.UPDATE_SEAT]: 'Update seat',
}

/**
 * Returns a callback to handle share modal tab selection.
 * Dispatches Redux action and tracks analytics event.
 * (original function: $$l0)
 * @returns {Function} Callback for tab selection
 */
export function setupShareModalTabHandler(): (tab: ShareAction) => void {
  const dispatch = useDispatch<AppDispatch>()
  return useCallback((tab: ShareAction) => {
    dispatch(fileSelectedShareModalTab({ view: tab }))
    trackEventAnalytics('File Permissions Modal Tab Clicked', {
      tabName: shareActionTabNames[tab],
    })
  }, [dispatch])
}

// Refactored export for original 'o'
export const o = setupShareModalTabHandler

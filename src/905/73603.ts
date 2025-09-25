import { debugState } from '../905/407919'
import { actionsHistoryHandler } from '../905/454965'
import { atomStoreManager } from '../figma_app/27355'
import { $O, Z8 } from '../figma_app/109130'
import { hasLocalFileId } from '../figma_app/155287'
import { getPluginByFileId } from '../figma_app/300692'
/**
 * Adds a recently used action to the history and updates the atom store.
 * Original function name: $$d0
 * @param params - Object containing displayText, runPluginArgs, and localFileIdOrPluginId
 */
export function addRecentlyUsedAction({
  displayText,
  runPluginArgs,
  localFileIdOrPluginId,
}: {
  displayText: string
  runPluginArgs: any
  localFileIdOrPluginId?: string | number
}) {
  // Retrieve the current list of recently used actions
  const recentlyUsedActions = $O()

  // Find the plugin or widget extension info by file ID
  const extensionInfo = localFileIdOrPluginId
    ? getPluginByFileId({
        idToSearch: localFileIdOrPluginId.toString(),
        localExtensionsByFileId: debugState.getState().localPlugins,
        publishedExtensions: {
          ...debugState.getState().publishedPlugins,
          ...debugState.getState().publishedWidgets,
        },
      })
    : undefined

  // Build the action entry object
  const actionEntry = {
    displayName: displayText,
    runPluginArgs,
    extensionInfo: extensionInfo
      ? {
          extensionId: extensionInfo.plugin_id,
          extensionType: extensionInfo.manifest.containsWidget ? 'widget' : 'plugin',
          currentExtensionVersionId: hasLocalFileId(extensionInfo)
            ? null
            : extensionInfo.id ?? null,
          localFileId: hasLocalFileId(extensionInfo) ? extensionInfo.localFileId : null,
        }
      : undefined,
  }

  // Add the new action to the beginning of the list
  recentlyUsedActions.unshift(actionEntry)

  // Update the atom store with the new list
  atomStoreManager.set(Z8, recentlyUsedActions)

  // Update the actions history handler
  actionsHistoryHandler.updateRecentlyUsedActions(actionEntry)
}

/** Exported for compatibility with original usage (original: s) */
export const s = addRecentlyUsedAction

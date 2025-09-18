import { createActionCreator } from '../905/73481'
import { createOptimistThunk } from '../905/350402'
/**
 * Action creators for plugin and widget operations.
 */
export const putAllPlugins = createActionCreator('PLUGIN_PUT_ALL') // $$a2
export const putAllWidgets = createActionCreator('WIDGET_PUT_ALL') // $$s5
export const deleteAllPlugins = createActionCreator('PLUGIN_DEL_ALL') // $$o4
export const deleteAllWidgets = createActionCreator('WIDGET_DEL_ALL') // $$l0
export const mergePublishedPlugin = createActionCreator('MERGE_PUBLISHED_PLUGIN') // $$d3

/**
 * Validates a published plugin's version.
 * @param plugin The plugin object.
 * @param src Source identifier for error context.
 * @returns The validated plugin object.
 * @throws Error if the current version id does not exist in versions.
 */
function validatePublishedPluginVersion(
  plugin: any,
  src: string,
): any {
  const versionId = plugin.current_plugin_version_id
  if (versionId && (!plugin.versions || !plugin.versions[versionId])) {
    throw new Error(`${src} Invalid publishedPlugin ${plugin.id}: version id ${versionId} does not exist in versions`)
  }
  return plugin
}

/**
 * Optimist thunk for merging published plugins.
 * Dispatches actions to update plugins/widgets based on install status and creator.
 */
export const mergePublishedPluginThunk = createOptimistThunk((dispatchApi, payload) => {
  if (!payload.publishedPlugins)
    return

  const userId = (dispatchApi.getState().user || { id: null }).id
  const validPlugins: any[] = []
  const removedPlugins: any[] = []

  for (const plugin of payload.publishedPlugins) {
    // Skip plugins unpublished by other users
    if (plugin.unpublished_at && plugin.creator.id !== userId) {
      removedPlugins.push(plugin)
      continue
    }
    try {
      const { publishedPlugins, publishedWidgets } = dispatchApi.getState()

      // Optionally override install status
      if (!payload.overrideInstallStatus && plugin.install_status == null) {
        const existing = publishedPlugins[plugin.id] || publishedWidgets[plugin.id]
        if (existing)
          plugin.install_status = existing.install_status
      }

      validPlugins.push(validatePublishedPluginVersion(plugin, payload.src))
    }
    catch (error) {
      console.error(error)
    }
  }

  // Group plugins and widgets
  const groupedValid = {
    plugins: validPlugins.filter(p => !p.is_widget),
    widgets: validPlugins.filter(p => p.is_widget),
  }
  const groupedRemoved = {
    plugins: removedPlugins.filter(p => !p.is_widget),
    widgets: removedPlugins.filter(p => p.is_widget),
  }

  // Dispatch actions for valid plugins/widgets
  if (groupedValid.widgets.length > 0)
    dispatchApi.dispatch(putAllWidgets(groupedValid.widgets))
  if (groupedValid.plugins.length > 0)
    dispatchApi.dispatch(putAllPlugins(groupedValid.plugins))

  // Dispatch actions for removed plugins/widgets
  if (groupedRemoved.widgets.length > 0)
    dispatchApi.dispatch(deleteAllWidgets(groupedRemoved.widgets))
  if (groupedRemoved.plugins.length > 0)
    dispatchApi.dispatch(deleteAllPlugins(groupedRemoved.plugins))

  // Dispatch merge action
  dispatchApi.dispatch(mergePublishedPlugin(payload))
})

// Export refactored names for external usage
export const GV = deleteAllWidgets
export const Qi = mergePublishedPluginThunk
export const Vx = putAllPlugins
export const l5 = mergePublishedPlugin
export const l7 = deleteAllPlugins
export const uV = putAllWidgets

import { VsCodeLocalPluginMananger } from '../905/27090'
import { DesktopLocalPluginManager } from '../905/585266'
import { isVsCodeEnvironment } from '../905/858738'
import { desktopAPIInstance } from '../figma_app/876459'
// Origin: $$l0 (from 170366.ts)
// Changes: Renamed variables, added types, improved readability, added comments, ensured type safety

// Assumed dependencies:
// - DesktopLocalPluginManager, VsCodeLocalPluginMananger: classes for plugin management
// - desktopAPIInstance: instance indicating desktop environment
// - isVsCodeEnvironment: function to detect VSCode environment

// Type for plugin manager (union of both possible managers)
type PluginManager = DesktopLocalPluginManager | VsCodeLocalPluginMananger | null

// Singleton instance for the plugin manager
let pluginManagerInstance: PluginManager = null

/**
 * Returns a singleton instance of the appropriate plugin manager
 * depending on the environment (desktop or VSCode).
 * - If desktopAPIInstance exists, uses DesktopLocalPluginManager.
 * - If in VSCode environment, uses VsCodeLocalPluginMananger.
 * Note: If both conditions are true, VSCode manager takes precedence.
 */
export function getPluginManager(): PluginManager {
  if (!pluginManagerInstance) {
    if (desktopAPIInstance) {
      pluginManagerInstance = new DesktopLocalPluginManager()
    }
    if (isVsCodeEnvironment()) {
      // VSCode manager takes precedence if both environments are detected
      pluginManagerInstance = new VsCodeLocalPluginMananger()
    }
  }
  return pluginManagerInstance
}

// Export with original name for compatibility
export const M = getPluginManager

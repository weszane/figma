import { ZQ } from "../figma_app/155287";

/**
 * Interface for published plugin configuration
 * Original name: e parameter type
 */
interface PublishedPluginConfig {
  type: "published";
  pluginId: string;
}

/**
 * Interface for local plugin configuration
 * Original name: e parameter type
 */
interface LocalPluginConfig {
  type: "local";
  localFileId: string;
}

/**
 * Union type for plugin configurations
 */
type PluginConfig = PublishedPluginConfig | LocalPluginConfig;

/**
 * Interface for plugin context with local file information
 * Original name: t parameter type
 */
interface PluginContext {
  localFileId?: string;
  plugin_id?: string;
}

/**
 * Checks if a plugin configuration matches a given plugin context.
 *
 * For local plugins: matches when both have the same localFileId
 * For published plugins: matches when context is not local and plugin_id matches
 *
 * @param pluginConfig - The plugin configuration to match against (original name: e)
 * @param pluginContext - The plugin context to check (original name: t)
 * @returns true if the plugin configuration matches the context
 *
 * Original function name: Q
 */
export function isPluginConfigMatching(
  pluginConfig: PluginConfig | null | undefined,
  pluginContext: PluginContext,
): boolean {
  if (!pluginConfig) {
    return false;
  }

  // Check if context represents a local plugin using ZQ helper
  const isLocalContext = ZQ(pluginContext);

  if (isLocalContext && pluginConfig.type === "local") {
    // For local plugins, match by localFileId
    return pluginContext.localFileId === pluginConfig.localFileId;
  }

  if (!isLocalContext && pluginConfig.type === "published") {
    // For published plugins, match by plugin_id
    return pluginContext.plugin_id === pluginConfig.pluginId;
  }

  return false;
}

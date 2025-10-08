import { createScopedPluginInstance } from "../905/472793"
/**
 * Creates a scoped plugin instance with figma API access
 * @param config - Configuration options for the plugin instance
 * @returns Figma API scope from the created plugin instance
 */
export function createFigmaPluginScope(config?: {
  enableNativeJsx?: boolean
  sceneGraph?: any
}): any {
  return createScopedPluginInstance({
    apiMode: {
      type: "PLUGIN",
      noOpUI: true,
    },
    pluginID: "",
    enableNativeJsx: !!config?.enableNativeJsx,
    enableResponsiveSetHierarchyMutations: true,
    sceneGraph: config?.sceneGraph,
  }).vm.scope.figma
}

// Alias for backward compatibility
export const D = createFigmaPluginScope

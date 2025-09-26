import { reportError } from '../905/11'
import { pluginAPIService } from '../905/3209'
import { ServiceCategories } from '../905/165054'
import { liveStoreInstance } from '../905/713695'
import { isDevEnvironment } from '../figma_app/169182'
import { setupResourceAtomHandler } from '../figma_app/566371'

let d = ['1221187540287746170', '857346721138427857', '1056265616080331589', '1220512233196109878', '1220802563996996107', '842128343887142055', '747985167520967365', '1056467900248561542']
let c = ['1217657098906612843', '1217135789855512677', '1247607449040618138', '1247608226235858606', '1223313994819294460', '1028373000013876601', '1028372640233029916', '1065757873699611582']
/**
 * Extract capabilities from plugin manifest
 * Original function: u
 */
function extractPluginCapabilities(plugin: any): string[] {
  return plugin
    && plugin?.current_plugin_version_id
    && plugin.versions?.[plugin.current_plugin_version_id]?.manifest?.capabilities || []
}

/**
 * Check if plugin has codegen capability
 * Original function: p
 */
function hasCodegenCapability(plugin: any): boolean {
  return !!plugin && extractPluginCapabilities(plugin).includes('codegen')
}

/**
 * Check if plugin has inspect or panel capability
 * Original function: m
 */
function hasInspectOrPanelCapability(plugin: any): boolean {
  if (!plugin) {
    return false
  }

  const capabilities = extractPluginCapabilities(plugin)
  return capabilities.includes('inspect') || capabilities.includes('panel')
}

/**
 * Query for fetching plugin data
 * Original variable: h
 */
const pluginDataQuery = liveStoreInstance.Query({
  fetch: async () => {
    const pluginIds = isDevEnvironment() ? c : d

    try {
      const response = await pluginAPIService.postPluginsBatch(pluginIds)
      return response?.data?.meta ?? []
    }
    catch (error) {
      reportError(ServiceCategories.DEVELOPER_TOOLS, error)
      return []
    }
  },
  output: ({
    data: plugins,
  }) => ({
    inspectPlugins: plugins.filter(hasInspectOrPanelCapability),
    codegenPlugins: plugins.filter(hasCodegenCapability),
  }),
})

/**
 * Get plugin data with loading state
 * Original function: $$g0
 */
export function usePluginData() {
  const [queryResult] = setupResourceAtomHandler(pluginDataQuery())

  return {
    loading: queryResult.status === 'loading',
    inspectPlugins: queryResult.data?.inspectPlugins ?? [],
    codegenPlugins: queryResult.data?.codegenPlugins ?? [],
  }
}

export const n = usePluginData

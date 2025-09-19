import { getResourceDataOrFallback } from '../905/723791'
import { FileOrgExtensionSettingsView } from '../figma_app/43951'
import { useSubscription } from '../figma_app/288654'
import { useCurrentFileKey } from '../figma_app/516028'
/**
 * Retrieves organization extension settings for the current file.
 * @param enabled - Whether the subscription should be enabled.
 * @returns An object containing the loaded state and organization extension data.
 * (Original function: $$o0)
 */
export function getOrgExtensionSettings(enabled: boolean = true) {
  const fileKey = useCurrentFileKey()
  const subscription = useSubscription(FileOrgExtensionSettingsView, {
    fileKey: fileKey ?? '',
  }, {
    enabled: enabled && !!fileKey,
  })

  // Handle loading state
  if (subscription.status === 'loading') {
    return {
      loaded: false,
      data: null,
    }
  }

  // Handle error or missing data
  if (subscription.status === 'errors' || !subscription.data) {
    return {
      loaded: true,
      data: null,
    }
  }

  const resourceData = getResourceDataOrFallback(subscription.data.file, null)

  // Return organization extension settings if available
  if (resourceData && resourceData.org) {
    return {
      loaded: true,
      data: {
        workspaceId: resourceData.workspaceId,
        allowlistedExtensions: resourceData.org.allowlistedPlugins,
        pluginsAllowlistEnforced: resourceData.org.pluginsWhitelistEnforced,
        widgetsAllowlistEnforced: resourceData.org.widgetsWhitelistEnforced,
        publicExtensionsAllowed: resourceData.org.publicPluginsAllowed,
        org: {
          id: resourceData.org.id,
          name: resourceData.org.name,
        },
      },
    }
  }

  // Fallback if organization data is not available
  return {
    loaded: true,
    data: null,
  }
}

/** Alias for getOrgExtensionSettings (original export: c) */
export const c = getOrgExtensionSettings

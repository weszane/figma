import { getOrgExtensionSettings } from '../905/587163'
import { ResourceStatus } from '../905/663269'
import { getResourceDataOrFallback } from '../905/723791'
import { AllowlistPluginsSectionView, CurrentWorkspaceView } from '../figma_app/43951'
import { useSubscription } from '../figma_app/288654'
import { selectCurrentFile } from '../figma_app/516028'
/**
 * Filters allowlisted plugins/extensions based on type and workspace.
 * Original: function d
 * @param items - Array of allowlisted plugin/extension objects
 * @param type - 'plugin' or 'widget'
 * @param workspaceId - Current workspace ID
 * @returns Array of IDs matching the type and workspace
 */
function filterAllowlistedIds(
  items: Array<{
    plugin?: any
    allowlistGroupType?: string
    allowlistedWorkspace?: { id?: string }
  }>,
  type: 'plugin' | 'widget',
  workspaceId?: string,
): string[] {
  const pluginIds: string[] = []
  const widgetIds: string[] = []

  for (const item of items) {
    if (!item.plugin)
      continue

    let pluginData
    if ('status' in item.plugin) {
      if (item.plugin.status !== ResourceStatus.Loaded)
        continue
      pluginData = item.plugin.data
    }
    else {
      pluginData = item.plugin
    }
    if (!pluginData)
      continue

    const isWorkspaceGroup = item.allowlistGroupType === 'Workspace'
    const workspace = item.allowlistedWorkspace
    if ((isWorkspaceGroup && !workspace) || (isWorkspaceGroup && !workspaceId))
      continue

    const allowlistedWorkspaceId = workspace?.id
    if (workspaceId && allowlistedWorkspaceId && allowlistedWorkspaceId !== workspaceId)
      continue

    if (pluginData.isWidget) {
      widgetIds.push(pluginData.id)
    }
    else {
      pluginIds.push(pluginData.id)
    }
  }

  return type === 'plugin' ? pluginIds : widgetIds
}

/**
 * Loads allowlisted plugin/widget IDs for an organization.
 * Original: $$c6
 */
export function getAllowlistedPluginOrWidgetIds(
  orgId: string,
  type: 'plugin' | 'widget',
  enabled: boolean = true,
) {
  const workspaceInfo = getCurrentWorkspaceInfo()
  const subscription = useSubscription(AllowlistPluginsSectionView, { orgId }, { enabled })
  const orgData = subscription.data?.org

  if (subscription.status === 'loading' || !workspaceInfo.loaded) {
    return { loaded: false }
  }

  if (subscription.status !== 'errors' && orgData) {
    return {
      loaded: true,
      data: filterAllowlistedIds(orgData.allowlistedPlugins, type, workspaceInfo.data?.workspaceId),
    }
  }

  return { loaded: true, data: [] }
}

/**
 * Loads allowlisted extension IDs for an organization.
 * Original: $$u1
 */
export function getAllowlistedExtensionIds(
  type: 'plugin' | 'widget',
  enabled: boolean = true,
) {
  const extensionSettings = getOrgExtensionSettings(enabled)
  if (!extensionSettings.loaded) {
    return { loaded: false }
  }
  const data = extensionSettings.data
  return {
    loaded: true,
    data: filterAllowlistedIds(
      data?.allowlistedExtensions ?? [],
      type,
      data?.workspaceId ?? undefined,
    ),
  }
}

/**
 * Determines if extension requests are allowed for a workspace.
 * Original: $$p4
 */
export function isExtensionRequestAllowed({
  workspace,
  hasPendingRequest,
  extension,
}: {
  workspace: any
  hasPendingRequest: boolean
  extension: any
}): boolean {
  return !!(
    workspace.publicPluginsOrWidgetDisabled
    && !hasPendingRequest
    && workspace.extensionRequestsAllowed
    && !extension?.roles.org
  )
}

/**
 * Checks if whitelist enforcement and requests are allowed for plugins/widgets.
 * Original: $$_2
 */
export function isWhitelistEnforcedAndRequestsAllowed({
  org,
  isWidget,
}: {
  org: any
  isWidget: boolean
}): boolean {
  if (!org)
    return false
  const whitelistEnforced = isWidget
    ? org.widgets_whitelist_enforced
    : org.plugins_whitelist_enforced
  const requestsAllowed = isWidget
    ? org.widget_requests_allowed
    : org.plugin_requests_allowed
  return whitelistEnforced && requestsAllowed
}

/**
 * Determines if an extension can be requested (not allowlisted, not org role).
 * Original: $$h5
 */
export function canRequestExtension({
  org,
  extension,
  allowlistedExtensions,
}: {
  org: any
  extension: any
  allowlistedExtensions: Record<string, any>
}): boolean {
  return (
    !!org
    && !!extension
    && isWhitelistEnforcedAndRequestsAllowed({
      org,
      isWidget: extension.is_widget,
    })
    && !extension.roles.org
    && !allowlistedExtensions[extension.id]
  )
}

/**
 * Determines if an extension version can be requested (not allowlisted, not private).
 * Original: $$m0
 */
export function canRequestExtensionVersion({
  org,
  extensionVersion,
  isWidget,
  allowlistedExtensions,
}: {
  org: any
  extensionVersion: any
  isWidget: boolean
  allowlistedExtensions: Record<string, any>
}): boolean {
  return (
    !!org
    && !!extensionVersion
    && isWhitelistEnforcedAndRequestsAllowed({
      org,
      isWidget,
    })
    && !extensionVersion.is_private
    && !allowlistedExtensions[extensionVersion.plugin_id]
  )
}

/**
 * Gets current workspace info from the selected file.
 * Original: $$g3
 */
export function getCurrentWorkspaceInfo() {
  const file = selectCurrentFile()
  const hasFile = !!file
  const subscription = useSubscription(
    CurrentWorkspaceView,
    { fileKey: file?.key ?? '' },
    { enabled: hasFile },
  )

  if (!hasFile) {
    return { loaded: true, data: undefined }
  }

  if (subscription.status !== 'loaded') {
    return { loaded: false }
  }

  return {
    loaded: true,
    data: {
      workspaceId: subscription.data?.file?.workspaceId ?? undefined,
      workspaceName: getResourceDataOrFallback(subscription.data?.file?.computedWorkspace)?.workspace?.name,
      fileKey: file.key,
      fileName: file.name,
    },
  }
}

// Export refactored names for imports
export const BF = canRequestExtensionVersion
export const CR = getAllowlistedExtensionIds
export const Cs = isWhitelistEnforcedAndRequestsAllowed
export const RW = getCurrentWorkspaceInfo
export const XL = isExtensionRequestAllowed
export const XV = canRequestExtension
export const kA = getAllowlistedPluginOrWidgetIds

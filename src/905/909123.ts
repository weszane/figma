import { reportError } from '../905/11'
import { pluginAPIService } from '../905/3209'
import { ServiceCategories } from '../905/165054'
import { widgetAPIClient } from '../905/424668'
import { hubFileAPI } from '../905/473998'
import { liveStoreInstance } from '../905/713695'
import { hasContent } from '../figma_app/427318'
import { throwTypeError } from '../figma_app/465776'
import { a as _$$a } from '../figma_app/601188'
import { $f, I$ } from '../figma_app/940844'

interface ResourceVersionQueryArgs {
  apiResourceType: 'file' | 'plugin' | 'widget'
  id: string
}

interface ResourceDetailQueryArgs extends ResourceVersionQueryArgs {
  skipRelatedContent?: boolean
  includeFullCategory?: boolean
}

/**
 * Query for fetching resource versions metadata
 * Original name: $$$$m1
 */
const resourceVersionsQuery = liveStoreInstance.Query({
  fetch: async ({ apiResourceType, id }: ResourceVersionQueryArgs) => {
    switch (apiResourceType) {
      case 'file':
        return (await hubFileAPI.getVersions({ id })).data.meta
      case 'plugin':
        return (await pluginAPIService.getVersions({ pluginId: id })).data.meta.plugin
      case 'widget':
        return (await widgetAPIClient.getVersions({ widgetId: id })).data.meta.plugin
      default:
        throwTypeError(apiResourceType, `Unknown resource type: ${apiResourceType}`)
    }
  },
  output: ({
    data,
    args: { apiResourceType },
  }) => apiResourceType === 'plugin' || apiResourceType === 'widget' ? I$(data) : data,
})

/**
 * Query for fetching detailed resource information
 * Original name: $$h0
 */
const resourceDetailQuery = liveStoreInstance.Query({
  fetch: async ({
    apiResourceType,
    id,
    skipRelatedContent,
    includeFullCategory,
  }: ResourceDetailQueryArgs) => {
    const response = (await _$$a.getResourceWithContentID({
      resourceType: apiResourceType,
      contentId: id,
      skipRelatedContent,
      includeFullCategory,
    })).data.meta

    // Validate mutual exclusivity of resource and private_plugin
    if (response.resource && response.private_plugin) {
      const error = new Error('Resource and Private Plugin cannot both be present')
      reportError(ServiceCategories.COMMUNITY, error)
      return error
    }

    // Ensure at least one resource type is present
    if (!response.resource && !response.private_plugin) {
      const error = new Error('Resource or Private Plugin must be present')
      reportError(ServiceCategories.COMMUNITY, error)
      return error
    }

    return response.resource || response.private_plugin
  },
  output: ({
    data,
    args: { apiResourceType },
  }) => data && hasContent(data) && (apiResourceType === 'plugin' || apiResourceType === 'widget') ? $f(data) : data,
})

export const Z = resourceDetailQuery
export const m = resourceVersionsQuery

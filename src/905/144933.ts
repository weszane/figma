import { ResourceTypes } from '../905/178090'
import { getTrackingSessionId } from '../905/471229'
import { EditorTargetMode } from '../905/632544'
import { isVsCodeEnvironment } from '../905/858738'
import { generateUUIDv4 } from '../905/871474'
import { sendWithRetry } from '../905/910117'
import { SortingCriteria } from '../figma_app/162807'
import { APIParameterUtils, createMetaValidator, createNoOpValidator } from '../figma_app/181241'
import { SortOptions } from '../figma_app/324237'
import { PrimaryWorkflowEnum } from '../figma_app/633080'
import { SearchResultsSchema } from '../figma_app/701107'
import { PropertyScope, VariableResolvedDataType } from '../figma_app/763686'

/**
 * Retry strategy mapping for sendWithRetry requests.
 * (Original: $$f1)
 */
export const XhrRetryPolicy = {
  504: sendWithRetry.RetryStrategy.NO_RETRY,
}

/**
 * Truncates a string to 50 characters.
 * (Original: _)
 * @param str - The string to truncate.
 * @returns The truncated string.
 */
function truncateTo50(str: string): string {
  return str.substring(0, 50)
}

/**
 * Maps API variable set response to internal format.
 * (Original: $$A2)
 * @param variableSet - The variable set object from API.
 * @returns The mapped variable set object.
 */
export function createVariableResConfig(variableSet: any) {
  return {
    ...variableSet,
    type: PrimaryWorkflowEnum.VARIABLE_SET,
    version: variableSet.version,
    variableThumbnailsUrl: variableSet.variable_thumbnails_url,
    subscriptionStatus: 'LIBRARY',
    key: variableSet.key,
  }
}

/**
 * Maps API variable response to internal format.
 * (Original: $$y4)
 * @param variable - The variable object from API.
 * @returns The mapped variable object.
 */
export function mapVariableToWorkflow(variable: any) {
  return {
    ...variable,
    type: PrimaryWorkflowEnum.VARIABLE,
    version: variable.version,
    sortPosition: variable.sort_position,
    variableSetId: variable.variable_set_id,
    resolvedType: VariableResolvedDataType[variable.variable_type],
    scopes: variable.scopes ? variable.scopes.map((scope: string) => PropertyScope[scope]) : [],
    subscriptionStatus: 'LIBRARY',
    key: variable.key,
    variableCollectionKey: '',
  }
}

/**
 * Maps state group enums to 'variant' string.
 * (Original: $$b3)
 * @param arr - Array of workflow enums.
 * @returns Array with state group enums mapped to 'variant'.
 */
export function mapStateToVariant(arr: any[]) {
  return arr.map(item => item === PrimaryWorkflowEnum.STATE_GROUP ? 'variant' : item)
}

/**
 * Search API handler class.
 * (Original: $$v0)
 */
class SearchAPIHandler {
  ComponentsSchemaValidator = createNoOpValidator()
  CanvasAssetsSchemaValidator = createNoOpValidator()
  CommunityLibrariesComponentsSchemaValidator = createNoOpValidator()
  LibraryAssetsSchemaValidator = createNoOpValidator()
  LibraryAssetsByLibraryKeySchemaValidator = createNoOpValidator()
  CommunityLibraryAssetsSchemaValidator = createNoOpValidator()
  CommunityLegacyResourcesQuerySchemaValidator = createNoOpValidator()
  ResourcesQuerySchemaValidator = createMetaValidator('ResourcesQuerySchemaValidator', SearchResultsSchema, null, true)
  HubProfilesSchemaValidator = createNoOpValidator()
  CommunityMentionsSchemaValidator = createNoOpValidator()
  PluginsSearchSchemaValidator = createNoOpValidator()
  PrivatePluginsSearchSchemaValidator = createNoOpValidator()
  WidgetsSearchSchemaValidator = createNoOpValidator()
  PrivateWidgetsSearchSchemaValidator = createNoOpValidator()
  HubFilesSchemaValidator = createNoOpValidator()
  ExtensionsSchemaValidator = createNoOpValidator()
  FullResultsSchemaValidator = createNoOpValidator()
  PreviewSearchSchemaValidator = createNoOpValidator()
  CodeSuggestionsResultSchemaValidator = createNoOpValidator()
  CodeSuggestionsBulkResultSchemaValidator = createNoOpValidator()
  FacetSearchSchemaValidator = createNoOpValidator()
  FileMoveSearchSchemaValidator = createNoOpValidator()

  /**
   * Adds queryId and sessionId to API arguments.
   * (Original: argsWithQueryIdAndSessionId)
   */
  argsWithQueryIdAndSessionId(args: any) {
    return {
      ...args,
      queryId: generateUUIDv4(),
      sessionId: getTrackingSessionId(),
    }
  }

  /**
   * Converts code suggestion request to API parameters.
   * (Original: codeSuggestionRequestToAPIParameters)
   */
  codeSuggestionRequestToAPIParameters(request: any) {
    const { thumbnailB64, ...rest } = request
    return {
      ...APIParameterUtils.toAPIParameters(rest),
      thumbnail_b64: thumbnailB64,
    }
  }

  /**
   * Gets hub profiles.
   * (Original: getHubProfiles)
   */
  getHubProfiles(params: any) {
    return this.HubProfilesSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/search/hub_profiles', APIParameterUtils.toAPIParameters(params), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Gets hub files.
   * (Original: getHubFiles)
   */
  getHubFiles(params: any) {
    return this.HubFilesSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/search/hub_files', APIParameterUtils.toAPIParameters(params), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Gets extensions.
   * (Original: getExtensions)
   */
  getExtensions(params: any) {
    return this.ExtensionsSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/search/extensions', APIParameterUtils.toAPIParameters(params), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Gets full search results.
   * (Original: getFullResults)
   */
  getFullResults(params: any) {
    return this.FullResultsSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/search/full_results', APIParameterUtils.toAPIParameters(params, [
        'creator_ids[]',
        'folder_ids[]',
        'team_ids[]',
        'org_ids[]',
      ]), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Gets preview search results.
   * (Original: getPreviewResults)
   */
  getPreviewResults(params: any) {
    return this.PreviewSearchSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/search/file_browser_preview', APIParameterUtils.toAPIParameters(params, [
        'creator_ids[]',
        'folder_ids[]',
        'team_ids[]',
        'org_ids[]',
      ]), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Gets code suggestions.
   * (Original: getCodeSuggestions)
   */
  getCodeSuggestions(params: any) {
    return this.CodeSuggestionsResultSchemaValidator.validate(async ({ xr }) =>
      await xr.post('/api/search/code_suggestions', APIParameterUtils.toAPIParameters(params), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Gets bulk code suggestions.
   * (Original: getCodeSuggestionsBulk)
   */
  getCodeSuggestionsBulk(params: any) {
    return this.CodeSuggestionsBulkResultSchemaValidator.validate(async ({ xr }) =>
      await xr.post('/api/search/code_suggestions_bulk', APIParameterUtils.toAPIParameters(params), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Deprecated code suggestions API.
   * (Original: getCodeSuggestions_DEPRECATED)
   */
  getCodeSuggestions_DEPRECATED(params: any) {
    const args = this.argsWithQueryIdAndSessionId(params)
    return this.CodeSuggestionsResultSchemaValidator.validate(async ({ xr }) =>
      await xr.post('/api/search/code_suggestions', this.codeSuggestionRequestToAPIParameters(args), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Gets facet search results.
   * (Original: getFacetSearchResults)
   */
  getFacetSearchResults(params: any) {
    const { query, facetType, restrictOrgId, restrictTeamId } = params
    return this.FacetSearchSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/search/facet_search', APIParameterUtils.toAPIParameters({
        query,
        facet_type: facetType,
        sort: SortingCriteria.RELEVANCY,
        desc: true,
        is_global: !restrictOrgId && !restrictTeamId,
        org_id: restrictOrgId,
        team_id: restrictTeamId,
      }), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Gets file move search results.
   * (Original: getFileMoveSearchResults)
   */
  getFileMoveSearchResults(params: any) {
    const { query, orgId, maxNumResults } = params
    return this.FileMoveSearchSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/file_move/search', APIParameterUtils.toAPIParameters({
        query,
        sort: SortingCriteria.RELEVANCY,
        desc: true,
        org_id: orgId,
        max_num_results: maxNumResults,
      }), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Posts components.
   * (Original: postComponents)
   */
  postComponents(params: any) {
    return this.ComponentsSchemaValidator.validate(async ({ xr }) =>
      await xr.post('/api/search/components', APIParameterUtils.toAPIParameters(params), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Posts components from file.
   * (Original: postComponentsFromFile)
   */
  postComponentsFromFile(params: any) {
    return this.ComponentsSchemaValidator.validate(async ({ xr }) =>
      await xr.post('/api/search/components_from_file', APIParameterUtils.toAPIParameters(params), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Posts components from image.
   * (Original: postComponentsFromImage)
   */
  postComponentsFromImage(queryData: any, params: any) {
    const apiParams = APIParameterUtils.toAPIParameters(params)
    return this.ComponentsSchemaValidator.validate(async ({ xr }) =>
      await xr.post('/api/search/components_from_image', {
        ...apiParams,
        query_data: queryData,
      }),
    )
  }

  /**
   * Gets assets from community libraries.
   * (Original: getAssetsFromCommunityLibraries)
   */
  getAssetsFromCommunityLibraries(params: any) {
    const mappedParams = Object.entries(params ?? {}).reduce((acc, [key, value]) => {
      if (key === 'hubFileIds')
        acc['hub_file_ids[]'] = value
      else acc[key] = value
      return acc
    }, {} as Record<string, any>)
    return this.CommunityLibrariesComponentsSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/search/community_libraries/assets', APIParameterUtils.toAPIParameters(mappedParams, ['hub_file_ids[]']), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Gets library assets.
   * (Original: getLibraryAssets)
   */
  getLibraryAssets(params: any) {
    return this.LibraryAssetsSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/search/library_assets', APIParameterUtils.toAPIParameters(params), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Gets library assets grouped by library key.
   * (Original: getLibraryAssetsByLibraryKey)
   */
  getLibraryAssetsByLibraryKey(params: any) {
    return this.LibraryAssetsByLibraryKeySchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/search/library_assets', APIParameterUtils.toAPIParameters({
        ...params,
        group_by_library_key: true,
      }), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Gets community library assets.
   * (Original: getCommunityLibraryAssets)
   */
  getCommunityLibraryAssets(params: any) {
    return this.CommunityLibraryAssetsSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/search/community_libraries/library_assets', APIParameterUtils.toAPIParameters(params), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Gets community legacy resources.
   * (Original: getCommunityLegacyResources)
   */
  getCommunityLegacyResources(params: any) {
    return this.CommunityLegacyResourcesQuerySchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/search/community_resources', APIParameterUtils.toAPIParameters(params), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Gets resources.
   * (Original: getResources)
   */
  getResources(params: any) {
    const apiParams = APIParameterUtils.toAPIParameters({
      ...params,
      resource_type: params.resource_type && params.resource_type.join(','),
    })
    return this.ResourcesQuerySchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/search/resources', apiParams, {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Gets community mentions.
   * (Original: getCommunityMentions)
   */
  getCommunityMentions(params: any) {
    return this.CommunityMentionsSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/search/community_mentions', APIParameterUtils.toAPIParameters({
        query: params.query,
      }), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
  }

  /**
   * Gets community plugins and optionally  plugins.
   * (Original: getCommunityPlugins)
   */
  getCommunityPlugins(
    query: string,
    orgId: string,
    price: any,
    editorType: any,
    isInspect: any,
    includePrivate: boolean,
  ) {
    const extraParams = isInspect
      ? {
        is_inspect: `${isInspect}`,
        capability_type: isVsCodeEnvironment() ? EditorTargetMode.VSCODE : null,
      }
      : {
        editor_type: editorType,
      }
    const publicPluginsPromise = this.PluginsSearchSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/search/community_resources', APIParameterUtils.toAPIParameters({
        query: truncateTo50(query),
        current_org_id: orgId || undefined,
        resource_type: ResourceTypes.BrowseResourceTypes.PLUGINS,
        sort_by: SortOptions.Search.RELEVANCY,
        price,
        ...extraParams,
      }), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
    if (includePrivate) {
      const privatePluginsPromise = this.PrivatePluginsSearchSchemaValidator.validate(async ({ xr }) =>
        await xr.get('/api/search/community_resources', APIParameterUtils.toAPIParameters({
          query: truncateTo50(query),
          current_org_id: orgId || undefined,
          resource_type: ResourceTypes.BrowseResourceTypes.PLUGINS,
          sort_by: SortOptions.Search.RELEVANCY,
          price,
          ...extraParams,
          org_search: true,
        }), {
          retryStrategyOverride: XhrRetryPolicy,
        }),
      ).then(({ data }: { data: ObjectOf }) => data.meta.results)
      return [publicPluginsPromise, privatePluginsPromise]
    }
    return [publicPluginsPromise, Promise.resolve([])]
  }

  /**
   * Gets community widgets and optionally  widgets.
   * (Original: getCommunityWidgets)
   */
  getCommunityWidgets(
    query: string,
    orgId: string,
    price: any,
    editorType: any,
    xr: any,
  ) {
    const publicWidgetsPromise = this.WidgetsSearchSchemaValidator.validate(async ({ xr: xrInstance }) =>
      await xrInstance.get('/api/search/community_resources', APIParameterUtils.toAPIParameters({
        query: truncateTo50(query),
        current_org_id: orgId || '',
        resource_type: ResourceTypes.BrowseResourceTypes.WIDGETS,
        editor_type: editorType,
        sort_by: SortOptions.Search.RELEVANCY,
        price,
      }), {
        retryStrategyOverride: XhrRetryPolicy,
      }),
    )
    if (xr) {
      const privateWidgetsPromise = this.PrivateWidgetsSearchSchemaValidator.validate(async ({ xr: xrInstance }) =>
        await xrInstance.get('/api/search/community_resources', APIParameterUtils.toAPIParameters({
          query: truncateTo50(query),
          current_org_id: orgId || '',
          resource_type: ResourceTypes.BrowseResourceTypes.WIDGETS,
          editor_type: editorType,
          sort_by: SortOptions.Search.RELEVANCY,
          price,
          org_search: true,
        }), {
          retryStrategyOverride: XhrRetryPolicy,
        }),
      ).then(({ data }: { data: ObjectOf }) => data.meta.results)
      return [publicWidgetsPromise, privateWidgetsPromise]
    }
    return [publicWidgetsPromise, Promise.resolve([])]
  }
}

/** Exported instance for search API handler. (Original: $$v0) */
export const searchAPIHandler = new SearchAPIHandler()
export const $W = searchAPIHandler

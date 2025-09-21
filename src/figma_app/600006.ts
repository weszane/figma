import { editorUtilities } from '../905/22009'
import { ResourceTypes, ResourceTypeSubset } from '../905/178090'
import { PricingOptions } from '../905/237873'
import { parseQuerySimple } from '../905/634134'
import { getValueOrFallback } from '../905/872825'
import { BrowseUtils } from '../905/942203'
import { captureRouteEvent, concatStrings, RouteState, withCommunityRoute } from '../figma_app/321395'
import { SortOptions } from '../figma_app/324237'
import { RESOURCE_ROUTE, toResourceParams, toRouteParams } from '../figma_app/979714'

/**
 * Base class for route states, extending RouteState.
 * Original name: p
 */
class BaseRouteState extends RouteState {}

/**
 * SearchRoute class for community search functionality.
 * Original name: _
 */
class SearchRoute extends BaseRouteState {
  constructor(e: any, t: any) {
    super(e, {
      ...t,
      resource_type: t.resource_type ?? ResourceTypes.SearchResourceTypes.MIXED,
      editor_type: t.editor_type ?? editorUtilities.Editors.ALL,
      price: t.price ?? PricingOptions.ALL,
      sort_by: t.sort_by ?? SortOptions.Search.RELEVANCY,
      creators: t.creators ?? BrowseUtils.Search.ALL,
    })
  }

  static displayName = 'SearchRoute'
  static path = '/community/search'

  /**
   * Parses query string for SearchRoute.
   * Original name: _.parseQueryString
   */
  static parseQueryString = (e: any) => {
    const t = parseQuerySimple(e)
    return {
      query: t.query ?? '',
      resource_type: getValueOrFallback(t.resource_type, ResourceTypes.SearchResourceTypes),
      editor_type: getValueOrFallback(t.editor_type, editorUtilities.Editors),
      price: getValueOrFallback(t.price, PricingOptions.Price),
      sort_by: getValueOrFallback(t.sort_by, SortOptions.Search),
      creators: getValueOrFallback(t.creators, BrowseUtils.Search),
    }
  }
}

captureRouteEvent(SearchRoute)

export const SearchRouteWithCommunity = withCommunityRoute(SearchRoute)

/**
 * ResourceHubSearchRoute class for resource hub search functionality.
 * Original name: m
 */
export class ResourceHubSearchRoute extends BaseRouteState {
  constructor(e: any, t: any) {
    super(e, {
      ...t,
      resource_type: t.resource_type ?? ResourceTypeSubset.FILES,
      editor_type: t.editor_type ?? editorUtilities.Editors.ALL,
      price: t.price ?? PricingOptions.ALL,
    })
  }

  static displayName = 'ResourceHubSearchRoute'
  static path = concatStrings(RESOURCE_ROUTE, SearchRoute.path)
  static serializeParams = toResourceParams
  static deserializeParams = toRouteParams

  /**
   * Parses query string for static
   * Original name: m.parseQueryString
   */
  static parseQueryString = (e: any) => {
    const t = parseQuerySimple(e)
    return {
      query: t.query ?? '',
      resource_type: getValueOrFallback(t.resource_type, ResourceTypeSubset),
      editor_type: getValueOrFallback(t.editor_type, editorUtilities.Editors),
      price: getValueOrFallback(t.price, PricingOptions.Price),
    }
  }
}

captureRouteEvent(ResourceHubSearchRoute)

/**
 * ResourceHubInternalSearchRoute class for internal resource hub search functionality.
 * Original name: f
 */
export class ResourceHubInternalSearchRoute extends BaseRouteState {
  constructor(e: any, t: any) {
    super(e, {
      ...t,
      resource_type: t.resource_type ?? ResourceTypeSubset.FILES,
      editor_type: t.editor_type ?? editorUtilities.Editors.ALL,
    })
  }

  static displayName = 'ResourceHubInternalSearchRoute'
  static path = concatStrings(RESOURCE_ROUTE, '/internal/search')
  static serializeParams = toResourceParams
  static deserializeParams = toRouteParams

  /**
   * Parses query string for static
   * Original name: f.parseQueryString
   */
  static parseQueryString = (e: any) => {
    const t = parseQuerySimple(e)
    return {
      query: t.query ?? '',
      resource_type: getValueOrFallback(t.resource_type, ResourceTypeSubset),
      editor_type: getValueOrFallback(t.editor_type, editorUtilities.Editors),
    }
  }
}

captureRouteEvent(ResourceHubInternalSearchRoute)

// export const $$Eo0 = ResourceHubInternalSearchRoute
export const IQ = ResourceHubInternalSearchRoute
export const bP = ResourceHubSearchRoute
export const n6 = SearchRouteWithCommunity

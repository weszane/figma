import { parseQuerySimple } from '../905/634134'
import { captureRouteEvent, concatStrings, RouteState, withCommunityRoute } from '../figma_app/321395'
import { PreviewMode } from '../figma_app/707808'
import { processSlug } from '../figma_app/930338'
import { parseFuidQuery, RESOURCE_ROUTE, toResourceParams, toRouteParams } from '../figma_app/979714'

/**
 * ResourceType enum (original: $$u2)
 */
export enum ResourceType {
  FILE = 'file',
  WIDGET = 'widget',
  PLUGIN = 'plugin',
}

/**
 * ResourceTypePlural enum (original: $$p1)
 */
export enum ResourceTypePlural {
  FILE = 'files',
  WIDGET = 'widgets',
  PLUGIN = 'plugins',
}

/**
 * Helper to get prototype property (original: c)
 * @param obj - The object to get prototype from
 * @param target - The target object
 * @param prop - The property name
 */
function getPrototypeProperty<T, K extends keyof T>(obj: T, target: any, prop: K) {
  return Reflect.get(Object.getPrototypeOf(obj), prop, target)
}

/**
 * ResourceRouteState class (original: _)
 * Extends RouteState and processes urlSlug
 */
export class ResourceRouteState extends RouteState {
  constructor(params: any, context?: any) {
    super(
      {
        ...params,
        urlSlug: processSlug(params.urlSlug),
      },
      context,
    )
  }

  /** Deserialize params (original: _.deserializeParams) */
  static deserializeParams(params: any) {
    return {
      ...params,
      apiResourceType: params.apiResourceType,
    }
  }

  /** Serialize params (original: _.serializeParams) */
  static serializeParams(params: any) {
    return params
  }

  /** Parse query string (original: _.parseQueryString) */
  static parseQueryString(query: string) {
    const parsed = parseQuerySimple(query)
    return {
      comment: parsed.comment,
      checkout: parsed.checkout,
      rating: parsed.rating,
    }
  }
}

/**
 * CommunityResourceRoute class (original: h)
 * Extends ResourceRouteState
 */
export class CommunityResourceRoute extends ResourceRouteState {
  static path: string
  static displayName: string
}
captureRouteEvent(CommunityResourceRoute)
CommunityResourceRoute.displayName = 'ResourceRoute'
CommunityResourceRoute.path = '/community/:apiResourceType(file|plugin|widget)/:resourceId/:urlSlug?'

/**
 * CommunityRoute (original: $$m3)
 */
export const CommunityRoute = withCommunityRoute(CommunityResourceRoute)

/**
 * ResourceHubResourceRoute class (original: g)
 * Extends ResourceRouteState
 */
export class ResourceHubResourceRoute extends ResourceRouteState {
  static path: string
  static displayName: string
  static serializeParams: (params: any) => any
  static deserializeParams: (params: any) => any
  static parseQueryString: (query: string) => any
}
captureRouteEvent(ResourceHubResourceRoute)
ResourceHubResourceRoute.displayName = 'ResourceHubResourceRoute'
ResourceHubResourceRoute.path = concatStrings(RESOURCE_ROUTE, CommunityResourceRoute.path)

/** Serialize params (original: g.serializeParams) */
ResourceHubResourceRoute.serializeParams = (params: any) => ({
  ...toResourceParams(params),
  ...getPrototypeProperty(ResourceHubResourceRoute, ResourceHubResourceRoute, 'serializeParams')(params),
})

/** Deserialize params (original: g.deserializeParams) */
ResourceHubResourceRoute.deserializeParams = (params: any) => ({
  ...toRouteParams(params),
  ...getPrototypeProperty(ResourceHubResourceRoute, ResourceHubResourceRoute, 'deserializeParams')(params),
})

/** Parse query string (original: g.parseQueryString) */
ResourceHubResourceRoute.parseQueryString = (query: string) => ({
  ...parseFuidQuery(query),
  ...getPrototypeProperty(ResourceHubResourceRoute, ResourceHubResourceRoute, 'parseQueryString')(query),
})

/**
 * HubFileRoute class (original: E)
 * Extends ResourceRouteState
 */
export class HubFileRoute extends ResourceRouteState {
  static path: string
  static displayName: string
  static serializeParams: (params: any) => any
  static deserializeParams: (params: any) => any
  static parseQueryString: (query: string) => any
  constructor(params: any, context?: any) {
    super(
      {
        ...params,
        apiResourceType: 'file',
      },
      context,
    )
  }
}
captureRouteEvent(HubFileRoute)
HubFileRoute.displayName = 'HubFileRoute'
HubFileRoute.path = '/community/:apiResourceType(file)/:resourceId/:urlSlug?'

/** Serialize params (original: E.serializeParams) */
HubFileRoute.serializeParams = (params: any) =>
  getPrototypeProperty(HubFileRoute, HubFileRoute, 'serializeParams')({
    ...params,
    apiResourceType: 'file',
  })

/** Deserialize params (original: E.deserializeParams) */
HubFileRoute.deserializeParams = (params: any) => ({
  ...getPrototypeProperty(HubFileRoute, HubFileRoute, 'deserializeParams')(params),
  apiResourceType: 'file',
})

/** Parse query string (original: E.parseQueryString) */
HubFileRoute.parseQueryString = (query: string) => {
  const parsed = parseQuerySimple(query)
  return {
    ...getPrototypeProperty(HubFileRoute, HubFileRoute, 'parseQueryString')(query),
    preview: (() => {
      const previewVal = parsed.preview
      if (previewVal !== undefined)
        return parseInt(previewVal) === PreviewMode.DEFAULT ? PreviewMode.DEFAULT : previewVal
    })(),
    freemium_preview: parsed.freemium_preview,
  }
}

/**
 * Exported variables (original: $$y0, $$p1, $$u2, $$m3, $$f4)
 */
export const $$y0 = HubFileRoute
export const UF = ResourceTypePlural
export const Uo = ResourceType
export const Xu = CommunityRoute
export const jT = ResourceHubResourceRoute

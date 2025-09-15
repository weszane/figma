import { editorUtilities as _$$k } from '../905/22009'
import { ResourceTypes } from '../905/178090'
import { PricingOptions } from '../905/237873'
import { logger } from '../905/651849'
import { BrowseUtils } from '../905/942203'
import { getAllTimeSortOption, SortOptions } from '../figma_app/324237'
import { getDefaultEditorResource, selectEditorResource } from '../figma_app/773663'
import { buildBrowseUrl, parseBrowseRoute } from '../figma_app/805898'

/**
 * Parses a community browse/search route and returns the corresponding resource options.
 * @param pathname - The URL pathname to parse.
 * @param search - The URL search string.
 * @returns The parsed resource options object or null.
 * (Original: $$u6)
 */
export function setupBrowseRoute(pathname: string, search?: string) {
  return parseSearchRoute(pathname, search) || parseBrowseRoute(pathname, search) || parseCommunityRoute(pathname)
}

/**
 * Parses a community route and returns the corresponding resource options.
 * @param pathname - The URL pathname to parse.
 * @returns The parsed resource options object or undefined.
 * (Original: inline function in $$u6)
 */
function parseCommunityRoute(pathname?: string) {
  let route = decodeURIComponent(pathname || location.pathname)
  if (!communityRegex.test(route) || collectionsRegex.test(route) || resourceRegex.test(route))
    return
  let segments = (route[0] === '/' ? route.slice(1) : route).split('/')
  let options: BrowseOptions = {
    resourceType: undefined,
    tags: [],
    editor_type: undefined,
    sort_by: getAllTimeSortOption(),
    price: PricingOptions.ALL,
    category: null,
    creators: BrowseUtils.ALL,
  }
  for (let i = 0; i < routeParsers.length && segments.length !== 0; i++) {
    let result = routeParsers[i](segments, options)
    if (result && result[0]) {
      segments = result[1]
      options = { ...options, ...result[0] }
    }
  }
  const { editorType, resourceType } = selectEditorResource(options.editor_type, options.resourceType)
  options.editor_type = editorType
  options.resourceType = resourceType
  const params = new URLSearchParams(location.search)
  const creators = (() => {
    const c = params.get('creators')
    return c && c === BrowseUtils.FOLLOWING ? c : options.creators
  })()
  return { ...options, creators }
}

/**
 * Converts browse/search options to a URL.
 * @param options - The browse/search options.
 * @returns The corresponding URL string.
 * (Original: $$p1)
 */
export function buildBrowseOrSearchUrl(options: BrowseOptions | SearchOptions) {
  if ('query' in options) {
    return buildSearchUrl(options as SearchOptions)
  }
  if ('category' in options && options.category !== null) {
    return buildBrowseUrl(options as any)
  }
  return buildCommunityUrl(options as any)
}

/**
 * Builds a community browse URL from options.
 * @param options - The browse options.
 * @returns The corresponding URL string.
 * (Original: inline function in $$p1)
 */
function buildCommunityUrl(options: BrowseOptions) {
  let url = '/community'
  if (options.tags?.length)
    url += `/tag/${options.tags.join(',')}`
  const { editorType, resourceType } = selectEditorResource(options.editor_type, options.resourceType)
  if (options.editor_type !== editorType) {
    options.resourceType = selectEditorResource(options.editor_type).resourceType
  }
  else if (options.resourceType !== resourceType) {
    options.resourceType = resourceType
  }
  if (options.resourceType !== ResourceTypes.BrowseResourceTypes.MIXED) {
    url += `/${options.resourceType}`
  }
  if (selectEditorResource(options.editor_type, options.resourceType).editorType !== _$$k.Editors.ALL) {
    url += `/${options.editor_type}`
  }
  if (options.price && PricingOptions.FOR_URL_SLUG.includes(options.price)) {
    url += `/${options.price}`
  }
  if (options.creators === BrowseUtils.FIGMA_PARTNER) {
    url += `/${options.creators}`
  }
  if (options.sort_by && options.sort_by !== getAllTimeSortOption()) {
    if (options.sort_by === SortOptions.Browse.PUBLISHED_AT)
      url += '/new'
    else if (options.sort_by === SortOptions.Browse.POPULAR)
      url += '/trending'
  }
  if (communityUrlMap[url])
    url = communityUrlMap[url]
  const params: Record<string, string> = {}
  if (options.creators === BrowseUtils.FOLLOWING)
    params.creators = options.creators
  const query = Object.keys(params).length > 0 ? new URLSearchParams(params).toString() : undefined
  if (query)
    url += `?${query}`
  return url
}

/**
 * Parses a community search route and returns the corresponding search options.
 * @param pathname - The URL pathname to parse.
 * @param search - The URL search string.
 * @returns The parsed search options object or null.
 * (Original: $$h5)
 */
export function parseSearchRoute(pathname?: string, search?: string) {
  pathname ||= location.pathname
  if (!pathname.match(searchRegex))
    return null
  const params = new URLSearchParams(search ||= location.search)
  const query = params.get('query')
  if (!query)
    return null
  const resourceType = params.get('resource_type')
  if (!resourceType)
    return null
  const sortBy = params.get('sort_by') || SortOptions.Search.RELEVANCY
  const editorType = selectEditorResource(params.get('editor_type') as any, resourceType).editorType
  return {
    resourceType,
    sort_by: sortBy,
    editor_type: editorType,
    query,
    price: params.get('price') || PricingOptions.ALL,
    creators: (() => {
      const c = params.get('creators')
      return BrowseUtils.isSearchType(c) ? c : BrowseUtils.ALL
    })(),
  }
}

/**
 * Builds a community search URL from search options.
 * @param options - The search options.
 * @returns The corresponding URL string.
 * (Original: $$m2)
 */
export function buildSearchUrl(options: SearchOptions) {
  const params = new URLSearchParams({
    resource_type: options.resourceType,
    sort_by: options.sort_by,
    query: options.query,
    editor_type: selectEditorResource(options.editor_type, options.resourceType).editorType,
    price: options.price,
    creators: options.creators && BrowseUtils.isSearchType(options.creators) ? options.creators : BrowseUtils.ALL,
  }).toString()
  return `/community/search?${params}`
}

// Regex patterns for route matching (Original: g, f, E, _)
const communityRegex = /^\/community/
const collectionsRegex = /^\/community\/collections?\/?/
// eslint-disable-next-line regexp/no-unused-capturing-group
const resourceRegex = /^\/community\/(file|plugin|widget)\//
const searchRegex = /^\/community\/search$/

// Route parser functions (Original: b)
interface BrowseOptions {
  resourceType?: string
  tags?: string[]
  editor_type?: any
  sort_by?: string
  price?: string
  category?: string | null
  creators?: string
}
interface SearchOptions {
  resourceType: string
  sort_by: string
  editor_type: any
  query: string
  price: string
  creators: string
}

const routeParsers: Array<
  (segments: string[], options: BrowseOptions) => [Partial<BrowseOptions>, string[]] | undefined
> = [
  // community
  segments => segments[0] === 'community' && [{}, segments.slice(1)],
  // tag
  segments => segments[0] === 'tag' && !!segments[1] && [{
    tags: segments[1].split(','),
  }, segments.slice(2)],
  // resourceType
  (segments) => {
    const t = segments[0]
    return Object.values(ResourceTypes.BrowseResourceTypes).includes(t) && [{
      resourceType: t,
    }, segments.slice(1)]
  },
  // editor_type
  (segments, options) => {
    const r = segments[0] as any
    return Object.values(_$$k.Editors).includes(r) && [{
      editor_type: selectEditorResource(r, options.resourceType).editorType,
    }, segments.slice(1)]
  },
  // price
  (segments) => {
    const t = segments[0]
    return PricingOptions.FOR_URL_SLUG.includes(t) && [{
      price: t,
    }, segments.slice(1)]
  },
  // creators
  (segments) => {
    const t = segments[0]
    return t === BrowseUtils.FIGMA_PARTNER && [{
      creators: t,
    }, segments.slice(1)]
  },
  // sort_by
  (segments) => {
    let sortBy: string | undefined
    if (segments[0] === 'new')
      sortBy = SortOptions.Browse.PUBLISHED_AT
    if (segments[0] === 'popular')
      sortBy = SortOptions.Browse.ALL_TIME
    if (segments[0] === 'trending')
      sortBy = SortOptions.Browse.POPULAR
    return !!sortBy && [{
      sort_by: sortBy,
    }, segments.slice(1)]
  },
]

// Community URL map (Original: T)
const communityUrlMap: Record<string, string> = {
  '/community/mixed': '/community',
}

/**
 * Returns the default browse options.
 * (Original: $$I0)
 */
export function getDefaultBrowseOptions(): BrowseOptions {
  const e = getDefaultEditorResource()
  return {
    resourceType: e.resourceType,
    sort_by: getAllTimeSortOption(),
    editor_type: e.editorType,
    price: PricingOptions.ALL,
    tags: [],
    category: null,
    creators: BrowseUtils.ALL,
  }
}

/**
 * Default search options object.
 * (Original: $$S4)
 */
export const defaultSearchOptions = (() => {
  const e = getDefaultEditorResource()
  return {
    resourceType: e.resourceType,
    sort_by: SortOptions.Search.RELEVANCY,
    editor_type: e.editorType,
    price: PricingOptions.ALL,
    creators: BrowseUtils.ALL,
  }
})()

/**
 * Determines the subview for a given community route.
 * @param pathname - The route pathname.
 * @returns An object indicating the subview and router handling.
 * (Original: $$v3)
 */
export function getCommunitySubview(pathname: string) {
  // eslint-disable-next-line regexp/no-unused-capturing-group
  if (/\/community\/(file|plugin|widget)\/\d+/.test(pathname)) {
    return { reactRouterHandled: true, subView: 'resourcePage' }
  }
  if (/^\/@/.test(pathname)) {
    return { reactRouterHandled: true, subView: 'handle' }
  }
  if (/\/community*/.test(pathname)) {
    return { reactRouterHandled: true, subView: 'searchAndBrowse' }
  }
  logger.warn(`If this is firing, it means you're trying to use logged-out Community routing on a non-Community URL.
url: ${pathname}`)
  return { reactRouterHandled: false, subView: false }
}

// Exported aliases (refactored to match new names)
export const YJ = setupBrowseRoute
export const MU = buildBrowseOrSearchUrl
export const Mc = buildSearchUrl
export const gV = getCommunitySubview
export const qd = defaultSearchOptions
export const sT = parseSearchRoute
export const wl = setupBrowseRoute
export const Gu = getDefaultBrowseOptions

// Types for documentation
/**
 * BrowseOptions type for browse routes.
 * (Original: inline type)
 */
/**
 * SearchOptions type for search routes.
 * (Original: inline type)
 */

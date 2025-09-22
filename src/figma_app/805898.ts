import { useLayoutEffect, useMemo } from 'react';
import { editorUtilities } from '../905/22009';
import { ResourceTypes } from '../905/178090';
import { PricingOptions } from '../905/237873';
import { customHistory } from '../905/612521';
import { parseQuerySimple } from '../905/634134';
import { getValueOrFallback, isValueInObject } from '../905/872825';
import { BrowseUtils } from '../905/942203';
import { categoryBySlugQuery } from '../figma_app/188671';
import { captureRouteEvent, concatStrings, createRouteMatcher, RouteState, withCommunityRoute } from '../figma_app/321395';
import { getAllTimeSortOption, SortOptions } from '../figma_app/324237';
import { setupResourceAtomHandler } from '../figma_app/566371';
import { getCurrentLocale } from '../figma_app/598412';
import { anchorEditorResource, selectEditorResource, syncEditorResourceWithHistory } from '../figma_app/773663';
import { localizationMappings, TemplateCategory, getLocalizedCategory, getCanonicalCategory } from '../figma_app/930386';
import { parseFuidQuery, RESOURCE_ROUTE, toResourceParams, toRouteParams } from '../figma_app/979714';

// Utility functions for prototype access (original: y, b, T)
const getPrototypeOf = Object.getPrototypeOf;
const reflectGet = Reflect.get;
const callSuperMethod = (instance: any, context: any, method: string) => reflectGet(getPrototypeOf(instance), method, context);

/**
 * Interface for browse route parameters (derived from original $$I3 logic)
 */
export interface BrowseRouteParams {
  category: string;
  resourceType: string;
  editor_type: any;
  price: string;
  creators: string;
  sort_by: string;
  tags: string[];
}

/**
 * Parses the browse route from pathname and search query to extract parameters.
 * Original function: $$I3
 * @param pathname - The pathname to parse (defaults to current location)
 * @param search - The search query string (defaults to current location)
 * @returns Parsed browse parameters or null if parsing fails
 */
export function parseBrowseRoute(pathname?: string, search?: string): BrowseRouteParams | null {
  const decodedPath = decodeURIComponent(pathname || customHistory.location.pathname);
  let routeParams: any;
  try {
    const matcher = createRouteMatcher(CategoryRoute);
    const match = matcher(decodedPath);
    if (!match) return null;
    routeParams = match.params;
  } catch {
    return null;
  }
  const queryParams = CategoryRoute.parseQueryString(search || customHistory.location.search);
  const categorySlug = routeParams.categorySlug;
  const tagSlug = routeParams.tagSlug;
  const {
    resourceType,
    editorType
  } = selectEditorResource(queryParams.editor_type, queryParams.resource_type);
  const params: BrowseRouteParams = {
    category: categorySlug,
    resourceType,
    editor_type: editorType,
    price: queryParams.price || PricingOptions.ALL,
    creators: BrowseUtils.ALL,
    sort_by: getAllTimeSortOption(),
    tags: tagSlug ? [tagSlug] : []
  };

  // Handle sort_by if valid
  if (queryParams.sort_by && [SortOptions.Browse.ALL_TIME, SortOptions.Browse.PUBLISHED_AT, SortOptions.Browse.POPULAR, SortOptions.Browse.RANDOM].includes(queryParams.sort_by)) {
    params.sort_by = queryParams.sort_by;
  }

  // Handle creators if valid
  if (queryParams.creators && [BrowseUtils.FIGMA_PARTNER, BrowseUtils.FOLLOWING].includes(queryParams.creators)) {
    params.creators = queryParams.creators;
  }
  return params;
}

/**
 * Builds a browse URL from given parameters.
 * Original function: $$S4
 * @param params - The browse parameters
 * @returns The constructed URL string
 */
export function buildBrowseUrl(params: BrowseRouteParams): string {
  const categorySlug = getValueOrFallback(params.category, TemplateCategory);
  if (categorySlug === undefined) return '/community';
  const {
    resourceType,
    editorType
  } = selectEditorResource(params.editor_type, params.resourceType);
  return new BrowseCategoryRoute({
    categorySlug,
    tagSlug: params.tags[0]
  }, {
    resource_type: resourceType,
    editor_type: editorType,
    price: params.price,
    sort_by: params.sort_by,
    creators: params.creators
  }).href;
}

/**
 * Base route state class for category routes.
 * Original class: v
 */
class CategoryRouteState extends RouteState {
  /**
   * Deserializes parameters, validating category slug.
   * Original: v.deserializeParams
   */
  static deserializeParams(params: any): any {
    const locale = getCurrentLocale();
    const resolvedSlug = resolveCategorySlug(params.categorySlug, locale);
    if (resolvedSlug === undefined) {
      throw new Error(`CategoryRoute: Invalid category slug ${params.categorySlug}`);
    }
    return {
      ...params,
      categorySlug: resolvedSlug
    };
  }

  /**
   * Serializes parameters (pass-through).
   * Original: v.serializeParams
   */
  static serializeParams(params: any): any {
    return params;
  }

  /**
   * Parses query string into browse parameters.
   * Original: v.parseQueryString
   */
  static parseQueryString(query: string): any {
    const parsed = parseQuerySimple(query);
    return {
      resource_type: getValueOrFallback(parsed.resource_type, ResourceTypes.BrowseResourceTypes),
      editor_type: getValueOrFallback(parsed.editor_type, editorUtilities.Editors),
      price: getValueOrFallback(parsed.price, PricingOptions.Price),
      sort_by: getValueOrFallback(parsed.sort_by, SortOptions.Browse),
      creators: getValueOrFallback(parsed.creators, BrowseUtils.Browse)
    };
  }
}

/**
 * Route class for community category pages.
 * Original class: A
 */
class CategoryRoute extends CategoryRouteState {
  static displayName = 'CategoryRoute';
  static path = '/community/:categorySlug/:tagSlug?';
}
captureRouteEvent(CategoryRoute);

/**
 * Route class for browse category with community route wrapper.
 * Original class: $$N0
 */
export class BrowseCategoryRoute extends withCommunityRoute(CategoryRoute) {
  constructor(params: any, query: any = {}, hash?: any) {
    const locale = getCurrentLocale();
    const adjustedParams = {
      ...params
    };
    if (params.categorySlug) {
      const resolved = resolveCategorySlug(params.categorySlug, locale);
      if (resolved) adjustedParams.categorySlug = resolved;
    }
    super(adjustedParams, query, hash);
  }
}

/**
 * Route class for resource hub category pages.
 * Original class: C
 */
class ResourceHubCategoryRoute extends CategoryRouteState {
  static displayName = 'ResourceHubCategoryRoute';
  static path = concatStrings(RESOURCE_ROUTE, CategoryRoute.path);

  /**
   * Serializes parameters with resource params.
   * Original: C.serializeParams
   */
  static serializeParams(params: any): any {
    return {
      ...toResourceParams(params),
      ...callSuperMethod(this, this, 'serializeParams')(params)
    };
  }

  /**
   * Deserializes parameters with route params.
   * Original: C.deserializeParams
   */
  static deserializeParams(params: any): any {
    return {
      ...toRouteParams(params),
      ...callSuperMethod(this, this, 'deserializeParams')(params)
    };
  }

  /**
   * Parses query string with FUID query.
   * Original: C.parseQueryString
   */
  static parseQueryString(query: string): any {
    return {
      ...parseFuidQuery(query),
      ...callSuperMethod(this, this, 'parseQueryString')(query)
    };
  }
}
captureRouteEvent(ResourceHubCategoryRoute);

/**
 * Array of category URLs for all categories except 'make'.
 * Original: $$O5
 */
const categoryUrls = Array.from(Object.values(TemplateCategory)).filter(category => category !== TemplateCategory.make).map((category: string) => {
  const slug = resolveCategorySlug(category, getCurrentLocale());
  return slug ? new BrowseCategoryRoute({
    categorySlug: slug
  }).href : null;
}).filter(url => url !== null);

/**
 * Hook to handle resource atom setup and history synchronization for category routes.
 * Original function: $$R6
 * @param route - The current route object
 */
export function useCategoryResourceHandler(route: any): void {
  const {
    categorySlug,
    tagSlug
  } = route.params;
  const {
    editor_type,
    resource_type
  } = route.search;
  const locale = getCurrentLocale();
  const [resourceAtom] = setupResourceAtomHandler(categoryBySlugQuery({
    categorySlug,
    tagSlug,
    locale
  }));
  const availableEditorTypes = useMemo(() => resourceAtom.status === 'loaded' ? resourceAtom.data.editor_types : [], [resourceAtom.status, resourceAtom.data]);
  useLayoutEffect(() => {
    if (availableEditorTypes.length > 0 && (!editor_type || !availableEditorTypes.includes(editor_type))) {
      const defaultEditorType = availableEditorTypes[0];
      customHistory.replace(route.copyWith({}, {
        editor_type: defaultEditorType,
        resource_type: resource_type && anchorEditorResource(defaultEditorType, resource_type, {
          anchorOn: 'editorType'
        }).resourceType
      }).href);
    }
  }, [route, availableEditorTypes, editor_type, resource_type]);
  syncEditorResourceWithHistory(route);
}

/**
 * Resolves a category slug based on locale and validation.
 * Original function: L
 * @param slug - The slug to resolve
 * @param locale - The current locale
 * @returns The resolved slug or undefined if invalid
 */
function resolveCategorySlug(slug: string, locale: string): string | undefined {
  if (!slug) return undefined;
  if (locale && locale in localizationMappings) {
    if (isValueInObject(slug, TemplateCategory)) return getLocalizedCategory(slug, locale) || slug;
    const reverseSlug = getCanonicalCategory(slug, locale);
    if (reverseSlug && isValueInObject(reverseSlug, TemplateCategory)) return slug;
  } else if (isValueInObject(slug, TemplateCategory)) {
    return slug;
  }
  return undefined;
}

// Updated exports with meaningful names (original exports: $E, Dv, IE, J5, iB, m5, pj)
export const $E = BrowseCategoryRoute;
export const Dv = ResourceHubCategoryRoute;
export const IE = CategoryRoute;
export const J5 = parseBrowseRoute;
export const iB = buildBrowseUrl;
export const m5 = categoryUrls;
export const pj = useCategoryResourceHandler;
import { useMemo } from 'react';
import { useLocation, useRouteMatch } from 'react-router';
import { parseQuerySimple } from '../905/634134';
import { getValueOrFallback } from '../905/872825';
import { captureRouteEvent, concatStrings, RouteState } from '../figma_app/321395';
import { PublishSourceType } from '../figma_app/350203';

/**
 * Route pattern for resource hub.
 * @originalName d
 */
export const RESOURCE_ROUTE_PATTERN = '/files/:team(team)?/:id([0-9]+)';

/**
 * Concatenated route for resources.
 * @originalName $$c3
 */
export const RESOURCE_ROUTE = concatStrings(RESOURCE_ROUTE_PATTERN, '/resources');

/**
 * Converts route params to resource params.
 * @param params - Route params object
 * @returns Resource params object
 * @originalName $$u1
 */
export function toResourceParams(params: {
  teamId?: string;
  orgId?: string;
}) {
  return 'teamId' in params ? {
    team: 'team',
    id: params.teamId
  } : {
    id: params.orgId
  };
}

/**
 * Converts resource params to route params.
 * @param params - Resource params object
 * @returns Route params object
 * @originalName $$p0
 */
export function toRouteParams(params: {
  team?: string;
  id: string;
}) {
  return params.team === 'team' ? {
    teamId: params.id
  } : {
    orgId: params.id
  };
}

/**
 * Parses query string for fuid.
 * @param queryString - Query string
 * @returns Object with fuid
 * @originalName $$_5
 */
export function parseFuidQuery(queryString: string) {
  return {
    fuid: parseQuerySimple(queryString).fuid
  };
}

/**
 * ResourceHubHomeRoute class for route state.
 * @originalName h
 */
class ResourceHubHomeRoute extends RouteState {
  static displayName: string;
  static path: string;
  static serializeParams: (params: any) => any;
  static deserializeParams: (params: any) => any;
  static parseQueryString: (queryString: string) => any;
}
captureRouteEvent(ResourceHubHomeRoute);
ResourceHubHomeRoute.displayName = 'ResourceHubHomeRoute';
ResourceHubHomeRoute.path = concatStrings(RESOURCE_ROUTE, '/:tab(internal|community)');
ResourceHubHomeRoute.serializeParams = (params: any) => ({
  ...toResourceParams(params),
  tab: params.tab
});
ResourceHubHomeRoute.deserializeParams = (params: any) => ({
  ...toRouteParams(params),
  tab: getValueOrFallback(params.tab, PublishSourceType, PublishSourceType.INTERNAL)
});
ResourceHubHomeRoute.parseQueryString = parseFuidQuery;

/**
 * Exported ResourceHubHomeRoute class.
 * @originalName $$m4
 */
export const ResourceHubHomeRouteClass = ResourceHubHomeRoute;

/**
 * Memoized hook to get route params.
 * @originalName $$g2
 */
export function useResourceRouteParams() {
  const match = useRouteMatch<{
    team?: string;
    id: string;
  }>(RESOURCE_ROUTE_PATTERN);
  return useMemo(() => match === null ? null : toRouteParams(match.params), [match]);
}

/**
 * Memoized hook to get fuid from query string.
 * @originalName $$f6
 */
export function useResourceFuid() {
  const match = useRouteMatch(RESOURCE_ROUTE_PATTERN);
  const location = useLocation();
  return useMemo(() => match === null ? null : parseFuidQuery(location.search), [location.search, match]);
}

// Refactored exports to match new names
export const CS = toRouteParams;
export const FZ = toResourceParams;
export const Om = useResourceRouteParams;
export const VR = RESOURCE_ROUTE;
export const au = ResourceHubHomeRouteClass;
export const p7 = parseFuidQuery;
export const tv = useResourceFuid;
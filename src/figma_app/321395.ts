import { captureMessage } from '@sentry/core'
import { useMemo } from 'react'
import { generatePath, matchPath, useLocation, useRouteMatch } from 'react-router'
import { customHistory } from '../905/612521'
import { serializeQuery } from '../905/634134'
import { generateCommunityPagePaths, getCurrentCommunityBasePath } from '../figma_app/598412'

/**
 * Empty function placeholder (original: $$d0)
 */
export function captureRouteEvent(_: unknown): void {}

/**
 * RouteState class encapsulates route parameters, search, and state.
 * (original: $$c8)
 */
export class RouteState {
  private _params: Record<string, any>
  private _search: Record<string, any>
  private _state: Record<string, any>

  /** Get route params */
  get params(): Record<string, any> {
    return this._params
  }

  /** Get route search/query params */
  get search(): Record<string, any> {
    return this._search
  }

  /** Get route state */
  get state(): Record<string, any> {
    return this._state
  }

  /**
   * Construct a RouteState instance
   * @param params Route params
   * @param search Query params
   * @param state Route state
   */
  constructor(
    params?: Record<string, any>,
    search?: Record<string, any>,
    state?: Record<string, any>,
  ) {
    this._params = params ?? {}
    this._search = search ?? {}
    this._state = state ?? {}
  }

  /**
   * Create a copy with merged params, search, and state
   * @param params Partial params
   * @param search Partial search
   * @param state Partial state
   */
  copyWith(
    params?: Record<string, any>,
    search?: Record<string, any>,
    state?: Record<string, any>,
  ): RouteState {
    return new (this.constructor as typeof RouteState)(
      { ...this._params, ...params },
      { ...this._search, ...search },
      { ...this._state, ...state },
    )
  }

  /** Push route to history */
  pushToHistory(): void {
    customHistory.push(this.href, this.state)
  }

  /** Replace route in history */
  replaceInHistory(): void {
    customHistory.replace(this.href, this.state)
  }

  /** Get pathname for route */
  get pathname(): string {
    const ctor = this.constructor as any
    return generatePath(
      ctor.path,
      'serializeParams' in ctor ? ctor.serializeParams(this._params) : this._params,
    )
  }

  /** Get query string for route */
  get queryString(): string {
    const filtered = Object.fromEntries(
      Object.entries(this._search).filter(([, v]) => v !== undefined),
    )
    if (Object.keys(filtered).length === 0)
      return ''
    const ctor = this.constructor as any
    const encode
      = 'encodeQueryString' in ctor
        ? ctor.encodeQueryString ?? serializeQuery
        : serializeQuery
    return `?${encode(filtered)}`
  }

  /** Get full href for route */
  get href(): string {
    return `${this.pathname}${this.queryString}`
  }

  /** Get route location object */
  get to(): { pathname: string, search: string, state: any } {
    return {
      pathname: this.pathname,
      search: this.queryString,
      state: this._state,
    }
  }
}

type Constructor<T = any> = new (...args: any[]) => T
/**
 * Higher-order class for community routes (original: $$u4)
 * @param Base Base route class
 * @returns CommunityRoute class with localized paths
 */
export function withCommunityRoute<T extends Constructor<RouteState>>(Base: T): T {
  /**
   * CommunityRoute class (original: CommunityRoute)
   * Extends Base and overrides pathname for community localization.
   */
  class CommunityRoute extends Base {
    static localizedPaths = generateCommunityPagePaths((Base as any).path)
    constructor(...args: any[]) {
      super(...args)
    }

    /** Override pathname to use current community base path */
    get pathname(): string {
      return super.pathname.replace('/community', getCurrentCommunityBasePath())
    }
  }
  return CommunityRoute as T
}

/**
 * Warn if route does not match current location (original: p)
 */
function warnIfRouteMismatch(route: any): void {
  if (!useRouteMatch('localizedPaths' in route ? route.localizedPaths : route.path)) {
    const msg = `Current location does not match the provided CommunityRoute: ${route.displayName ?? route.constructor.name}`
    captureMessage(msg)
    console.warn(
      msg,
      'This could indicate a bug in the route definition or usage.',
    )
  }
}

/**
 * Check if route matches current location (original: $$_11)
 */
export function useRouteMatchExists(route: any, exact = false): boolean {
  const match = useRouteMatch({
    path: 'localizedPaths' in route ? route.localizedPaths : route.path,
    exact,
  })
  return useMemo(() => match !== null, [match])
}

/**
 * Get route params from current match (original: $$h3)
 */
export function useRouteParams(route: any): Record<string, any> | null {
  const match = useRouteMatch('localizedPaths' in route ? route.localizedPaths : route.path)
  return useMemo(() => {
    if (match === null)
      return null
    try {
      return 'deserializeParams' in route
        ? route.deserializeParams(match.params)
        : match.params
    }
    catch {
      return null
    }
  }, [route, match])
}

/**
 * Get route params, warn if not matched (original: $$m2)
 */
export function useSafeRouteParams(route: any): Record<string, any> {
  warnIfRouteMismatch(route)
  const params = useRouteParams(route)
  return useMemo(() => params ?? {}, [params])
}

/**
 * Get query params from current location (original: $$g10)
 */
export function useRouteQuery(route: any): Record<string, any> | null {
  const match = useRouteMatch('localizedPaths' in route ? route.localizedPaths : route.path)
  const location = useLocation()
  return useMemo(() => {
    if (match === null)
      return null
    try {
      return 'parseQueryString' in route
        ? route.parseQueryString(location.search)
        : {}
    }
    catch {
      return null
    }
  }, [route, location.search, match])
}

/**
 * Get query params, warn if not matched (original: $$f1)
 */
export function useSafeRouteQuery(route: any): Record<string, any> {
  warnIfRouteMismatch(route)
  const query = useRouteQuery(route)
  return useMemo(() => query ?? {}, [query])
}

/**
 * Get route state from current location (original: E)
 */
function getRouteState(route: any): Record<string, any> | null {
  const match = useRouteMatch('localizedPaths' in route ? route.localizedPaths : route.path)
  const location = useLocation()
  return match === null ? null : location.state ?? {}
}

/**
 * Get RouteState instance from current location (original: $$y7)
 */
export function useRouteStateInstance(CustomRoute: any): RouteState | null {
  const params = useRouteParams(CustomRoute)
  const query = useRouteQuery(CustomRoute)
  const state = getRouteState(CustomRoute)
  return useMemo(
    () =>
      params === null || query === null || state === null
        ? null
        : new CustomRoute(params, query, state),
    [CustomRoute, params, query, state],
  )
}

/**
 * Get RouteState instance with safe params/query/state (original: $$b5)
 */
export function useSafeRouteStateInstance(CustomRoute: any): RouteState {
  const params = useSafeRouteParams(CustomRoute)
  const query = useSafeRouteQuery(CustomRoute)
  const state = (() => {
    warnIfRouteMismatch(CustomRoute)
    const s = getRouteState(CustomRoute)
    return useMemo(() => s ?? {}, [s])
  })()
  return useMemo(() => new CustomRoute(params, query, state), [CustomRoute, params, query, state])
}

/**
 * Create a matcher function for a route (original: $$T9)
 */
export function createRouteMatcher(route: any) {
  return (pathname: string, options: Record<string, any> = {}) => {
    for (const path of 'localizedPaths' in route ? route.localizedPaths : [route.path]) {
      const match = matchPath(pathname, { ...options, path })
      if (match) {
        return {
          ...match,
          params:
            'deserializeParams' in route
              ? route.deserializeParams(match.params)
              : match.params,
        }
      }
    }
    return null
  }
}

/**
 * Concatenate two strings (original: $$I6)
 */
export function concatStrings(a: string, b: string): string {
  return `${a}${b}`
}

// Export refactored names
export const Ac = captureRouteEvent
export const NY = useSafeRouteQuery
export const RA = useSafeRouteParams
export const Rd = useRouteParams
export const Wk = withCommunityRoute
export const a4 = useSafeRouteStateInstance
export const aV = concatStrings
export const ed = useRouteStateInstance
export const nS = RouteState
export const pO = createRouteMatcher
export const vA = useRouteQuery
export const ye = useRouteMatchExists

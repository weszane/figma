import { isNotNull } from "../905/8035"

// Enum for style resolution status
export enum StyleStatus {
  StyleNotSet = 0,
  StyleNotFound = 1,
}

// Enum for variable resolution status
export enum VariableStatus {
  NotFound = 0,
  NotResolved = 1,
  Resolved = 2,
  Matching = 3,
}

/**
 * Memoization helper function
 * @param cache - Object to store cached values
 * @param key - Key to check in cache
 * @param defaultValue - Default value to use if key is not in cache
 * @param factory - Function to generate value if not in cache
 * @returns The cached or newly created value
 */
export function memoizeFn<T, K extends keyof any, V>(
  cache: Record<K, V>,
  key: K,
  defaultValue: T,
  factory: (value: T) => V,
): V {
  if (!(key in cache)) {
    const newValue = factory(defaultValue)
    cache[key] = newValue
  }
  return cache[key]
}

/**
 * Resolves fill style from a node
 * @param node - Node with potential fill style
 * @param resolver - Style resolver object
 * @returns Resolved style or status code
 */
export function resolveFillStyle(node: { fillStyleId?: string }, resolver: { resolveColor: (id: string) => any }): any {
  if (typeof node.fillStyleId === "string") {
    const styleId = node.fillStyleId
    const resolved = resolver.resolveColor(styleId)
    return isNotNull(resolved) ? resolved : StyleStatus.StyleNotFound
  }
  return StyleStatus.StyleNotSet
}

/**
 * Resolves stroke style from a node
 * @param node - Node with potential stroke style
 * @param resolver - Style resolver object
 * @returns Resolved style or status code
 */
export function resolveStrokeStyle(node: { strokeStyleId?: string }, resolver: { resolveColor: (id: string) => any }): any {
  if (typeof node.strokeStyleId === "string") {
    const styleId = node.strokeStyleId
    const resolved = resolver.resolveColor(styleId)
    return isNotNull(resolved) ? resolved : StyleStatus.StyleNotFound
  }
  return StyleStatus.StyleNotSet
}

/**
 * Resolves effect style from a node
 * @param node - Node with potential effect style
 * @param resolver - Style resolver object
 * @returns Resolved style or status code
 */
export function resolveEffectStyle(node: { effectStyleId?: string }, resolver: { resolveEffect: (id: string) => any }): any {
  if (typeof node.effectStyleId === "string") {
    const styleId = node.effectStyleId
    const resolved = resolver.resolveEffect(styleId)
    return isNotNull(resolved) ? resolved : StyleStatus.StyleNotFound
  }
  return StyleStatus.StyleNotSet
}

/**
 * Resolves text style from a node
 * @param node - Node with potential text style
 * @param resolver - Style resolver object
 * @returns Resolved style or status code
 */
export function resolveTextStyle(node: { textStyleId?: string }, resolver: { resolveTextStyle: (id: string) => any }): any {
  if (typeof node.textStyleId === "string") {
    const styleId = node.textStyleId
    const resolved = resolver.resolveTextStyle(styleId)
    return isNotNull(resolved) ? resolved : StyleStatus.StyleNotFound
  }
  return StyleStatus.StyleNotSet
}

/**
 * Checks if a value represents a resolved style (not a status code)
 * @param value - Value to check
 * @returns True if value is a resolved style
 */
export function isResolvedStyle(value: any): boolean {
  return value !== StyleStatus.StyleNotSet && value !== StyleStatus.StyleNotFound
}

/**
 * Checks if an object has a specific property
 * @param obj - Object to check
 * @param key - Property key to look for
 * @returns True if object has the property
 */
export function hasProperty<T, K extends keyof T>(obj: T, key: K): boolean {
  return obj && obj[key] !== undefined
}

/**
 * Resolves a variable with proper status tracking
 * @param variables - Variables collection
 * @param localVars - Local variables mapping
 * @param key - Variable key to resolve
 * @param resolver - Variable resolver object
 * @returns Resolution result with status
 */
export function resolveVariable(
  variables: Record<string, any>,
  localVars: Record<string, any[]> | undefined,
  key: string,
  resolver: { resolveVariable: (id: string) => any } | null,
): { status: VariableStatus, name?: string, codeSyntax?: any, id?: string, vars?: any[] } | null {
  if (!resolver)
    return null

  if (hasProperty(variables, key)) {
    const variable = variables[key]
    if (!variable) {
      return {
        status: VariableStatus.NotFound,
      }
    }

    const resolvedVar = resolver.resolveVariable(variable.id)
    return resolvedVar
      ? {
        name: resolvedVar.name,
        codeSyntax: resolvedVar.codeSyntax ?? undefined,
        status: VariableStatus.Resolved,
        id: resolvedVar.id,
      }
      : {
        status: VariableStatus.NotResolved,
      }
  }

  const localVariables = localVars?.[key]
  if (localVariables && localVariables.length > 0) {
    return {
      status: VariableStatus.Matching,
      vars: localVariables,
    }
  }

  return null
}

/**
 * Checks if a variable resolution result is successfully resolved
 * @param result - Variable resolution result
 * @returns True if result is resolved
 */
export function isVariableResolved(result: { status: VariableStatus } | null): boolean {
  return !!result && result.status === VariableStatus.Resolved
}

// Export aliases for backward compatibility
export const $r = resolveEffectStyle
export const H2 = memoizeFn
export const HN = isVariableResolved
export const Hb = hasProperty
export const V$ = resolveTextStyle
export const _2 = StyleStatus
export const fl = resolveFillStyle
export const jg = VariableStatus
export const oQ = isResolvedStyle
export const ut = resolveVariable
export const wI = resolveStrokeStyle

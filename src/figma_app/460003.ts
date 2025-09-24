import type { TSSceneGraph } from './518682'
import { permissionScopeHandler } from '../905/189185'
import { trackEventAnalytics } from '../905/449184'
import { getFeatureFlags } from '../905/601108'
import { GPTSearchType } from '../figma_app/338442'
import { getComponentInfoById } from '../figma_app/664063'
import { serializeJSX } from '../figma_app/964367'
/**
 * Extracts filtered component properties from the given component info.
 * Original function: $$d2
 * @param componentInfo - The component information object containing parsed definitions.
 * @param filterTypes - Optional array of property types to filter by (e.g., ['VARIANT', 'TEXT']).
 * @returns An array of property objects with name, type, and metadata.
 */
export function extractComponentProps(componentInfo: any, filterTypes?: string[]): any[] {
  const props: any[] = []
  componentInfo?.parsedDefs?.forEach((def: any) => {
    if (!filterTypes || filterTypes.includes(def.def.type)) {
      switch (def.def.type) {
        case 'VARIANT':
          props.push({
            propName: def.rawProp,
            propType: def.def.type,
            propMetadata: def.def.variantOptions,
          })
          break
        case 'TEXT':
          props.push({
            propName: def.rawProp,
            propType: def.def.type,
          })
          break
      }
    }
  })
  return props
}

/**
 * Serializes the given component to JSX string asynchronously.
 * Original function: $$c3
 * @param component - The component to serialize.
 * @param options - Additional serialization options.
 * @returns The serialized JSX string.
 */
export async function serializeComponentJSX(component: any, options: any): Promise<string> {
  return (await serializeJSX(component, {
    strict: false,
    ignoreFetchingComponentData: true,
    ...options,
  })).jsxStr
}

/**
 * Applies auto-suggested properties to a component instance and tracks analytics.
 * Original function: $$u0
 * @param instanceId - The ID of the component instance.
 * @param suggestion - The suggestion object containing component properties.
 * @param instancesMap - A map of instance IDs to instance objects.
 * @param componentKey - The key of the component.
 */
export function applyAutoSuggestedProps(instanceId: string, suggestion: any, instancesMap: Map<string, any>, componentKey: string): void {
  const instance = instancesMap.get(instanceId)
  if (!instance)
    return

  permissionScopeHandler.user('auto-suggest-component-prop-assignment', () => {
    try {
      instance.setProperties(suggestion.componentProps)
    }
    catch (error) {
      console.error('Error applying auto-suggested values to component instance node', error)
    }
  })

  const componentInfo = getComponentInfoById(componentKey, {
    enableTsArrays: false,
  })

  const propTypes: Record<string, string> = {}
  componentInfo?.parsedDefs.forEach((def: any) => {
    propTypes[def.rawProp] = def.def.type
  })

  let textPropCount = 0
  let variantPropCount = 0
  Object.keys(suggestion.componentProps).forEach((prop) => {
    switch (propTypes[prop]) {
      case 'TEXT':
        textPropCount++
        break
      case 'VARIANT':
        variantPropCount++
        break
    }
  })

  trackEventAnalytics('autosuggest_props_applied', {
    componentKey: componentInfo?.key,
    numTextProps: textPropCount,
    numVariantProps: variantPropCount,
    method: getFeatureFlags().anticipation_props_fs ? GPTSearchType.FS : GPTSearchType.GPT,
  })
}

/**
 * Finds the single instance ID from a list of IDs, filtering for actual instances.
 * Original function: $$p1
 * @param instanceIds - Array of instance IDs to check.
 * @param instancesMap - A map of instance IDs to instance objects.
 * @returns The single instance ID if exactly one instance is found, otherwise an empty string.
 */
export function findSingleInstanceId(instanceIds: string[], instancesMap: TSSceneGraph): string {
  const validInstances = instanceIds.filter((id) => {
    const instance = instancesMap.get(id)
    return instance?.isInstance
  })
  return validInstances.length === 1 ? validInstances[0] : ''
}

// Refactored exports with meaningful names
export const Dm = applyAutoSuggestedProps
export const Vg = findSingleInstanceId
export const ag = extractComponentProps
export const fn = serializeComponentJSX

import { createSelector } from 'reselect'
import { isInvalidValue } from '../905/216495'
import { createDeepEqualSelector } from '../905/270781'
import { getI18nString } from '../905/303541'
import { generateUniqueName } from '../905/578436'
import { findCommonStateGroupId, getComponentPropErrorType, getSortedDefinitions } from '../figma_app/164212'
import { BOOLEAN_VALUES, EM_DASH, stateGroupSelectionSelector } from '../figma_app/264776'
import { aggregateStateVariantProps } from '../figma_app/335489'
import { InstanceType } from '../figma_app/338442'
import { createSymbolNodesWithBackingSymbolSelector, getComponentProps, getContainingStateGroupId, selectStateOrInstanceNode } from '../figma_app/505098'
import { ComponentPropType, VariableSetErrorType } from '../figma_app/763686'
import { selectSceneGraph, selectSceneGraphSelectionKeys } from '../figma_app/889655'
/**
 * Determines if a list of property values represents a boolean variant.
 * @param values - Array of string values for the property.
 * @returns True if the values match boolean pairs, false otherwise.
 */
function isBooleanVariant(values: string[]): boolean {
  if (values.length === 2) {
    const lowerValues = values.map(v => v.toLowerCase())
    for (const [trueVal, falseVal] of BOOLEAN_VALUES) {
      if (lowerValues.includes(trueVal) && lowerValues.includes(falseVal)) {
        return true
      }
    }
  }
  return false
}

/**
 * Selector that returns an array of state group variant properties for the current selection.
 * Original function: $$m0
 */
export const selectStateGroupVariantProperties = createDeepEqualSelector(
  [stateGroupSelectionSelector, getComponentProps, selectSceneGraph, (state, props) => props],
  (stateGroupSelection, componentProps, sceneGraph, selectedNodes) => {
    if (!componentProps || selectedNodes.length === 0) {
      return []
    }

    const commonStateGroupId = findCommonStateGroupId(selectedNodes, sceneGraph) ?? getContainingStateGroupId(sceneGraph, selectedNodes)
    if (!commonStateGroupId || selectedNodes.includes(commonStateGroupId)) {
      return []
    }

    const stateGroupProps = componentProps[commonStateGroupId]?.stateGroupVariantProps
    if (!stateGroupProps) {
      return []
    }

    const aggregatedProps = aggregateStateVariantProps(componentProps, selectedNodes, stateGroupProps.propertySortOrder)
    return (stateGroupProps.propertySortOrder || []).map((propName) => {
      const propType = isBooleanVariant(stateGroupProps.propertyValues[propName])
        ? ComponentPropType.BOOL
        : ComponentPropType.VARIANT
      const propValue = aggregatedProps[propName] || EM_DASH

      if (isInvalidValue(propValue)) {
        return {
          name: propName,
          value: getI18nString('inspect_panel.property.mixed'),
          type: propType,
        }
      }
      return {
        name: propName,
        value: propValue,
        type: propType,
      }
    })
  },
)

/**
 * Selector that returns variant properties for a given node.
 * Original function: $$y1
 * @param nodeId - The ID of the node.
 * @param componentProps - The component properties.
 * @returns Array of variant property objects.
 */
export function getVariantProperties(nodeId: string, componentProps: any): any[] {
  const stateGroupProps = componentProps[nodeId]?.stateGroupVariantProps
  if (!stateGroupProps) {
    return []
  }

  const sortedDefinitions = getSortedDefinitions(nodeId, componentProps)
  const errorType = getComponentPropErrorType(nodeId, componentProps)

  return stateGroupProps.propertySortOrder.map((propName) => {
    const hasConflictingName = errorType === VariableSetErrorType.CONFLICTING_NAMES_WITH_VARIANT_ERROR
      && sortedDefinitions.some(def => def.name === propName)
    return {
      name: propName,
      values: stateGroupProps.propertyValues[propName],
      type: ComponentPropType.VARIANT,
      kind: InstanceType.VARIANT,
      error: hasConflictingName ? VariableSetErrorType.CONFLICTING_NAMES_WITH_VARIANT_ERROR : VariableSetErrorType.NONE,
      uguid: stateGroupProps.propertyUguids[propName],
    }
  })
}

/**
 * Selector that returns variant properties for the current component node or symbol.
 * Original function: $$g3
 */
export const selectComponentVariantProperties = createDeepEqualSelector(
  [getComponentProps, selectStateOrInstanceNode(), createSymbolNodesWithBackingSymbolSelector()],
  (componentProps, stateNode, symbolNodes) => {
    if (!componentProps) {
      return []
    }
    const targetNode = symbolNodes ?? stateNode
    return targetNode ? getVariantProperties(targetNode, componentProps) : []
  },
) 

/**
 * Selector that returns variant properties for the selected scene graph keys.
 * Original function: $$f4
 */
const selectSelectedVariantProperties = (() => {
  const baseSelector = selectComponentVariantProperties
  return (state: any) => baseSelector(state, selectSceneGraphSelectionKeys(state))
})()

/**
 * Selector that generates a unique default name for a variant property.
 * Original function: $$E2
 */
export const generateDefaultVariantPropertyName = createSelector(
  [selectSelectedVariantProperties],
  (selectedProperties) => {
    const existingNames = selectedProperties.map(prop => prop.name)
    const defaultName = getI18nString('design_systems.component_properties.variant_property_default_name')
    return generateUniqueName(defaultName, existingNames)
  },
)

// Updated exports to match refactored names
export const Cu = selectStateGroupVariantProperties
export const Jm = getVariantProperties
export const YH = generateDefaultVariantPropertyName
export const vf = selectComponentVariantProperties
export const x1 = selectSelectedVariantProperties

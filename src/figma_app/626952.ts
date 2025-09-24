import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useMemoStable } from '../905/19536'
import { isInvalidValue, MIXED_MARKER } from '../905/216495'
import { getFeatureFlags } from '../905/601108'
import { defaultSessionLocalIDString } from '../905/871411'
import { computeBackingGUID, DefinitionAssignment, findCommonStateGroupId, findCommonSymbolId, getSortedDefinitions, intersectHiddenProps, mergeComponentProps, resolveValueFromSet } from '../figma_app/164212'
import { aggregateStateVariantProps } from '../figma_app/335489'
import { getComponentProps } from '../figma_app/505098'
import { getVariantProperties, selectComponentVariantProperties } from '../figma_app/583247'
import { ComponentPropType, SceneGraphHelpers } from '../figma_app/763686'
import { selectSceneGraph } from '../figma_app/889655'

export function useComponentPropDefinitions(
  nodeIds: string[],
  assignmentType: DefinitionAssignment,
  useSceneGraphProps: boolean,
) {
  const selectVariantProperties = selectComponentVariantProperties
  const sceneGraph = useSelector(selectSceneGraph)
  const componentProps = useSelector(getComponentProps)
  const mergedProps = mergeComponentProps(nodeIds, sceneGraph)
  const variantPropDefs = useSelector((state: any) => selectVariantProperties(state, nodeIds))
  const effectiveProps = useSceneGraphProps ? mergedProps : componentProps
  const productComponentGUID = useComponentBackingGUID(nodeIds, assignmentType)

  const typedPropDefsExcludingHidden = useMemoStable(
    () => effectiveProps && productComponentGUID
      ? getTypedPropDefsExcludingHidden(productComponentGUID, nodeIds, effectiveProps)
      : [],
    [effectiveProps, nodeIds, productComponentGUID],
  )

  const assignmentValuesByDefId = useMemoStable(
    () => effectiveProps
      ? resolveAssignmentValues(
        typedPropDefsExcludingHidden,
        nodeIds.filter((nodeId) => {
          const node = sceneGraph.get(nodeId)
          return node?.isInstanceOrCodeInstance
        }),
        sceneGraph,
        effectiveProps,
      )
      : {},
    [nodeIds, sceneGraph, effectiveProps, typedPropDefsExcludingHidden],
  )

  const allStateVariantProps = useMemoStable(
    () => productComponentGUID && effectiveProps
      ? getStateVariantProps(productComponentGUID, effectiveProps, sceneGraph)
      : [],
    [productComponentGUID, effectiveProps, sceneGraph],
  )

  const backingStateVariantProps = useMemoStable(() => {
    const symbolIds = nodeIds.reduce((symbolSet, nodeId) => {
      const node = sceneGraph.get(nodeId)
      const symbolId = node?.symbolId
      if (symbolId && symbolId !== defaultSessionLocalIDString) {
        symbolSet.add(symbolId)
      }
      return symbolSet
    }, new Set<string>())
    return allStateVariantProps.filter(stateProp => symbolIds.has(stateProp.guid))
  }, [allStateVariantProps, nodeIds, sceneGraph])

  const statePropertyValues = useMemoStable(
    () => productComponentGUID && effectiveProps
      ? getStatePropertyValues(productComponentGUID, nodeIds, effectiveProps)
      : {},
    [productComponentGUID, nodeIds, effectiveProps],
  )

  return useMemo(() => ({
    typedPropDefsExcludingHidden,
    variantPropDefs,
    assignmentValuesByDefId,
    allStateVariantProps,
    backingStateVariantProps,
    statePropertyValues,
    productComponentGUID,
  }), [
    typedPropDefsExcludingHidden,
    variantPropDefs,
    assignmentValuesByDefId,
    allStateVariantProps,
    backingStateVariantProps,
    statePropertyValues,
    productComponentGUID,
  ])
}

export function useSingleNodePropDefinitions(
  nodeId: string,
  props: any,
  componentId: string | null,
  sceneGraph: any,
) {
  let backingStateVariantProps: any[]

  const typedPropDefsExcludingHidden = useMemoStable(
    () => componentId ? getTypedPropDefsExcludingHidden(componentId, [nodeId], props) : [],
    [nodeId, componentId, props],
  )

  const variantPropDefs = useMemoStable(
    () => componentId ? getVariantProperties(componentId, props) : [],
    [componentId, props],
  )

  const assignmentValuesByDefId = useMemoStable(
    () => resolveAssignmentValues(typedPropDefsExcludingHidden, [nodeId], sceneGraph, props),
    [nodeId, props, sceneGraph, typedPropDefsExcludingHidden],
  )

  const allStateVariantProps = useMemoStable(
    () => componentId && sceneGraph.get(componentId)?.isStateGroup
      ? getStateVariantProps(componentId, props, sceneGraph)
      : [],
    [componentId, props, sceneGraph],
  )

  const statePropertyValues = useMemoStable(
    () => componentId ? getStatePropertyValues(componentId, [nodeId], props) : {},
    [nodeId, componentId, props],
  )

  const nodeSymbolId = sceneGraph.get(nodeId)?.symbolId
  if (!(nodeSymbolId && sceneGraph.get(nodeSymbolId)?.isState)) {
    backingStateVariantProps = []
  }
  backingStateVariantProps = allStateVariantProps.filter(prop => nodeSymbolId === prop.guid)

  return useMemo(() => ({
    typedPropDefsExcludingHidden,
    variantPropDefs,
    assignmentValuesByDefId,
    allStateVariantProps,
    backingStateVariantProps,
    statePropertyValues,
  }), [
    typedPropDefsExcludingHidden,
    variantPropDefs,
    assignmentValuesByDefId,
    allStateVariantProps,
    backingStateVariantProps,
    statePropertyValues,
  ])
}

export function useComponentBackingGUID(
  nodeIds: string[],
  assignmentType: DefinitionAssignment,
): string {
  const sceneGraph = useSelector(selectSceneGraph)

  if (assignmentType !== DefinitionAssignment.DEFINITION) {
    return findCommonStateGroupId(nodeIds, sceneGraph) || findCommonSymbolId(nodeIds, sceneGraph) || ''
  }
  else {
    const backingGUID = computeBackingGUID(nodeIds, sceneGraph)
    return backingGUID && !isInvalidValue(backingGUID) ? backingGUID.guid : ''
  }
}

function getTypedPropDefsExcludingHidden(
  componentGUID: string,
  nodeIds: string[],
  props: any,
): any[] {
  const hiddenProps = intersectHiddenProps(nodeIds, props)
  return getSortedDefinitions(componentGUID, props).filter(
    def => !hiddenProps.has(def.explicitDefID)
      && !(def.type === ComponentPropType.IMAGE && !getFeatureFlags().ds_image_props_sites)
      && !(def.type === ComponentPropType.SLOT && !getFeatureFlags().dse_slots),
  )
}

function resolveAssignmentValues(
  propDefs: any[],
  nodeIds: string[],
  sceneGraph: any,
  props: any,
): Record<string, any> {
  const valuesByDefId: Record<string, any> = {}

  propDefs.forEach((propDef) => {
    const valueSet = new Set()
    const serializedValues = new Set()

    for (const nodeId of nodeIds) {
      const assignment = props[nodeId]?.assignments?.[propDef.explicitDefID]
      if (assignment) {
        if (assignment.isMixed) {
          valueSet.add(MIXED_MARKER)
          continue
        }

        if (
          assignment.value
          && typeof assignment.value === 'object'
          && 'value' in assignment.value
          && assignment.value.value
          && typeof assignment.value.value === 'object'
          && 'stablePathToNode' in assignment.value.value
          && 'indexOrKey' in assignment.value.value
        ) {
          const stablePath = assignment.value.value.stablePathToNode
          const targetNode = stablePath && stablePath.length === 1 ? sceneGraph.get(stablePath[0]) : null

          if (targetNode && targetNode.isState && targetNode.containingStateGroupId) {
            const explicitPropDefID = SceneGraphHelpers.getExplicitPropDefIDBinding(
              targetNode.guid,
              assignment.value.value.indexOrKey,
            )
            assignment.value.value.stablePathToNode = [targetNode.containingStateGroupId]
            assignment.value.value.indexOrKey = explicitPropDefID
          }
        }

        if (assignment.value != null) {
          const serializedValue = JSON.stringify(assignment.value)
          if (!serializedValues.has(serializedValue)) {
            valueSet.add(assignment.value)
          }
          serializedValues.add(serializedValue)
        }
      }
    }

    valuesByDefId[propDef.explicitDefID] = resolveValueFromSet(propDef.type, valueSet, sceneGraph)
  })

  return valuesByDefId
}

function getStateVariantProps(
  componentGUID: string,
  props: any,
  sceneGraph: any,
): any[] {
  const componentNode = sceneGraph.get(componentGUID)

  return componentNode?.isStateGroup
    ? componentNode.childrenNodes.reduce((acc: any[], childNode: any) => {
      const stateVariantProps = props[childNode.guid]?.stateVariantProps
      if (stateVariantProps) {
        acc.push({
          ...stateVariantProps,
          guid: childNode.guid,
        })
      }
      else {
        acc.push({
          propertyValues: childNode.statePropertyValues,
          guid: childNode.guid,
        })
      }
      return acc
    }, [])
    : []
}

function getStatePropertyValues(
  componentGUID: string,
  nodeIds: string[],
  props: any,
): Record<string, any> {
  const propertySortOrder = props[componentGUID]?.stateGroupVariantProps?.propertySortOrder ?? []
  return aggregateStateVariantProps(props, nodeIds, propertySortOrder)
}

export const RB = useComponentBackingGUID
export const an = useComponentPropDefinitions
export const nj = useSingleNodePropDefinitions

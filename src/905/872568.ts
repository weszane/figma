import { getComponentInfoById } from '../905/75000'
import { getSymbolOrStateGroupNode } from '../905/94678'
import { findNodesByCriteriaGUIDs } from '../905/327738'
import { cleanComponentPropNameForUsage, groupByCommonPrefixSorted } from '../905/581923'
import { getSingletonSceneGraph } from '../905/700578'
import { filterComponentProps } from '../905/970762'
import { Confirmation } from '../figma_app/763686'

export function usagePropsToRawProps(
  rawProps: Record<string, any>,
  componentId: string,
  componentInfo: any,
  options: { exposeAllNestedInstances?: boolean } = {},
): Record<string, any> {
  const typeInfo = getComponentInfoById(componentId, {
    enableTsArrays: false,
    exposeAllNestedInstances: options.exposeAllNestedInstances,
    bubbleInstanceSwapProps: true,
  })

  if (!typeInfo) {
    throw new Error(`Could not get typeInfo for component ${componentId}`)
  }

  return filterComponentProps(rawProps, typeInfo, componentInfo, {
    enableTsArrays: false,
    exposeAllNestedInstances: options.exposeAllNestedInstances,
    bubbleInstanceSwapProps: true,
  })
}

export function getInstanceNodeProps(
  instanceNode: any,
  options: {
    enableTsArrays?: boolean
    noTypeInfoCache?: boolean
    bubbleInstanceSwapProps?: boolean
    exposeAllNestedInstances?: boolean
    includeDefaultValues?: boolean
    includeVariables?: boolean
    includeCustomImageAndIconProps?: boolean
  },
): Record<string, any> {
  const sceneGraph = getSingletonSceneGraph()

  if (instanceNode.type !== 'INSTANCE' || !instanceNode.symbolId) {
    throw new Error(`Expected INSTANCE, got ${instanceNode.type} for node ${instanceNode.guid}`)
  }

  const componentInfo = getComponentInfoById(instanceNode.symbolId, {
    enableTsArrays: options.enableTsArrays,
    noTypeInfoCache: options.noTypeInfoCache,
    bubbleInstanceSwapProps: options.bubbleInstanceSwapProps,
    exposeAllNestedInstances: options.exposeAllNestedInstances,
  })

  if (!componentInfo) {
    throw new Error(`Could not get typeInfo for component ${instanceNode.symbolId}`)
  }

  const instanceNodes = findNodesByCriteriaGUIDs(instanceNode.guid, {
    types: ['INSTANCE'],
  })

  const visibleComponents: Record<string, boolean> = {}
  instanceNodes.forEach((node) => {
    const componentRefs = node.componentPropertyReferences()
    if ('mainComponent' in componentRefs) {
      visibleComponents[componentRefs.mainComponent] = node.visible
    }
  })

  const componentProps: Record<string, any> = {}
  for (const [propName, propValue] of Object.entries(instanceNode.componentProperties(Confirmation.YES))) {
    componentProps[cleanComponentPropNameForUsage(propName)] = propValue
  }

  const resultProps: Record<string, any> = {}

  function addProp({
    devFriendlyProp,
    value,
    defaultValue,
    componentProp,
  }: {
    devFriendlyProp: any
    value: any
    defaultValue?: any
    componentProp?: any
  }): void {
    // Skip if not including default values and value equals default
    if (!options.includeDefaultValues && defaultValue !== undefined && value === defaultValue) {
      return
    }

    if (devFriendlyProp.type === 'ARRAY') {
      if (options.enableTsArrays) {
        const existingArray = resultProps[devFriendlyProp.key]
        const arrayValue = Array.isArray(existingArray) ? existingArray : []
        resultProps[devFriendlyProp.key] = [...arrayValue, value]
      }
      else {
        resultProps[devFriendlyProp.nonArrayKey] = value
      }
    }
    else {
      if (options.includeVariables && componentProp?.boundVariables?.value) {
        resultProps[devFriendlyProp.key] = componentProp.boundVariables.value
      }
      else {
        resultProps[devFriendlyProp.key] = value
      }
    }
  }

  for (const parsedDef of componentInfo.parsedDefs) {
    // Skip derived booleans
    if (parsedDef.devFriendlyProp.type === 'DERIVED_BOOLEAN') {
      continue
    }

    const propKey = parsedDef.devFriendlyProp.type === 'ARRAY'
      ? parsedDef.devFriendlyProp.nonArrayKey
      : parsedDef.devFriendlyProp.key

    const componentProp = componentProps[propKey]
    const validOptions = parsedDef.devFriendlyProp.type === 'SIMPLE_CHOICE'
      ? parsedDef.devFriendlyProp.validOptions
      : undefined

    switch (parsedDef.def.type) {
      case 'BOOLEAN':
      case 'TEXT':
      case 'NUMBER':
        if (!componentProp)
          continue

        addProp({
          devFriendlyProp: parsedDef.devFriendlyProp,
          value: componentProp.value,
          defaultValue: parsedDef.def.defaultValue,
          componentProp,
        })
        break

      case 'INSTANCE_SWAP':
        if (!componentProp)
          continue

        if (validOptions && parsedDef.devFriendlyProp.type === 'SIMPLE_CHOICE') {
          const symbolNode = getSymbolOrStateGroupNode(componentProp.value)
          if (!symbolNode) {
            throw new Error('Could not find component for componentProp')
          }

          if (symbolNode.type === 'SYMBOL') {
            const variantProp = Object.values(symbolNode.variantProperties ?? {})[0]
            if (validOptions.includes(variantProp)) {
              addProp({
                devFriendlyProp: parsedDef.devFriendlyProp,
                value: variantProp,
              })
            }
            else {
              console.error(`Could not find ${variantProp} in ${JSON.stringify(validOptions)}`)
            }
          }
        }
        else {
          addProp({
            devFriendlyProp: parsedDef.devFriendlyProp,
            value: componentProp.value,
            defaultValue: parsedDef.def.defaultValue,
          })
        }
        break

      case 'VARIANT':
        if (!componentProp)
          continue

        if (validOptions && parsedDef.devFriendlyProp.type === 'SIMPLE_CHOICE') {
          const propValue = componentProp.value
          if (validOptions.includes(propValue)) {
            addProp({
              devFriendlyProp: parsedDef.devFriendlyProp,
              value: propValue,
            })
          }
          else {
            console.error(`Could not find ${propValue} in ${JSON.stringify(validOptions)}`)
          }
        }
        else {
          addProp({
            devFriendlyProp: parsedDef.devFriendlyProp,
            value: componentProp.value,
            defaultValue: parsedDef.def.defaultValue,
          })
        }
        break

      case 'GROUPED_INSTANCE_SWAP':
        if (!componentProp || !options.includeCustomImageAndIconProps)
          continue

        const iconId = componentProps[propKey].value
        if (options.includeDefaultValues || parsedDef.def.defaultValue !== iconId) {
          const iconSymbol = sceneGraph.get(iconId)
          if (!iconSymbol) {
            throw new Error(`Could not find icon symbol ${iconId}`)
          }

          if (!visibleComponents[parsedDef.rawProp])
            continue

          const iconData = {
            description: iconSymbol.name,
          }

          addProp({
            devFriendlyProp: parsedDef.devFriendlyProp,
            value: iconData,
          })
        }
        break

      case 'IMAGE':
        if (options.includeCustomImageAndIconProps) {
          const imageData = {
            id: '0',
          }

          addProp({
            devFriendlyProp: parsedDef.devFriendlyProp,
            value: imageData,
          })
          continue
        }

        const imageGuid = parsedDef.def.guidByParentComponentId[instanceNode.symbolId]
        if (imageGuid) {
          const imageNode = sceneGraph.get(imageGuid)
          const sublayerId = imageNode?.getSublayerIdForInstanceOfSymbol(instanceNode.guid)

          if (sublayerId) {
            const sublayerNode = sceneGraph.get(sublayerId)
            const imageDescription = sublayerNode
              && 'fills' in sublayerNode
              && sublayerNode.fills.some(fill => fill.type === 'IMAGE')
              && sublayerNode.getSharedPluginData('jsx', 'isImage') === 'true'
              && sublayerNode.fills.find(fill => fill.type === 'IMAGE')
              && (sublayerNode.getSharedPluginData('jsx', 'description') || sublayerNode.getSharedPluginData('jsx', 'altText'))
              || null

            if (imageDescription) {
              addProp({
                devFriendlyProp: parsedDef.devFriendlyProp,
                value: {
                  description: imageDescription,
                },
              })
            }
          }
        }
        break

      case 'NESTED_INSTANCE':
        const nestedGuid = parsedDef.def.guidByParentComponentId[instanceNode.symbolId]
        if (!nestedGuid)
          continue

        const devFriendlyId = sceneGraph.developerFriendlyIdFromGuid(instanceNode.guid)
        const prefix = devFriendlyId.startsWith('I') ? `${devFriendlyId};` : `I${devFriendlyId};`
        const fullDevId = `${prefix}${nestedGuid}`
        const nestedNodeGuid = sceneGraph.guidFromDeveloperFriendlyId(fullDevId)
        const nestedNode = sceneGraph.get(nestedNodeGuid)

        if (nestedNode) {
          // Note: This recursive call uses the original function name 'e'
          const nestedProps = getInstanceNodeProps(nestedNode, options)
          if (Object.keys(nestedProps).length > 0) {
            addProp({
              devFriendlyProp: parsedDef.devFriendlyProp,
              value: nestedProps,
            })
          }
        }
        break
    }
  }

  // Group array properties if enabled
  if (options.enableTsArrays) {
    const groupedProps = groupByCommonPrefixSorted(Object.keys(resultProps))
    for (const [groupName, propNames] of Object.entries(groupedProps)) {
      resultProps[groupName] = propNames.map(name => resultProps[name])
      for (const propName of propNames) {
        delete resultProps[propName]
      }
    }
  }

  return resultProps
}

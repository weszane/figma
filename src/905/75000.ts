import { getSymbolOrStateGroupNode } from '../905/94678'
import { GroupItemType } from '../905/223510'
import { findInstanceNodesByGuid, getSharedVersion } from '../905/327738'
import { areAllDefsSameTypeAndDefault, buildComponentJSXName, capitalizeFirstLetter, cleanComponentPropNameForUsage, comparePropDefs, extractModifiersFromProp, filterUniquePropDefs, getComponentJSXName, getComponentPropsTypeName, getInstanceDefaultValue, getNestedImageNodes, getTsPropKey, getTsPropType, getUniqueUsageProp, getUsagePropName, groupByCommonPrefixSorted, groupInstanceNodesBySymbol, groupNodesByPropName, isOptionalProp } from '../905/581923'
import { getSingletonSceneGraph } from '../905/700578'
import { BUILDING_BLOCKS_LABEL, findGroupName, getComponentGroupName, getCustomGroupName, getNodeParentPath, ICONS_GROUP, isPartOfGroup, UNKNOWN_LABEL } from '../905/926939'
import { throwTypeError } from '../figma_app/465776'
import { Confirmation, FirstDraftHelpers, SceneGraphHelpers } from '../figma_app/763686'

let u = 'CustomImage'
export let CUSTOM_IMAGE_TYPE_STR = `\
type ${u} = {
  // always use the string "0"
  id: string
};`
export let STRING_TYPE_REPR = {
  typeName: 'string',
}
export let BOOLEAN_TYPE_REPR = {
  typeName: 'boolean',
}
let g = {
  typeName: 'React.ReactNode',
}
export let IMAGE_TYPE_REPR = {
  typeName: u,
  referencedTypes: [{
    type: 'IMAGE',
  }],
}
function buildPropsTypeRepr({
  component: e,
  parsedDefs: t,
}, i) {
  let n = []
  let r = []
  for (let e of filterUniquePropDefs(t, i)) {
    e.typeRepr.referencedTypes && r.push(...e.typeRepr.referencedTypes)
    let t = getTsPropKey(e, void 0, i)
    let a = getTsPropType(e, i)
    t && a && n.push(`${t}: ${a}`)
  }

  // Extracted the IIFE into a named function to avoid ESLint no-unused-expressions error
  function generatePrefixComments(e, t) {
    let i = []
    for (let n of filterUniquePropDefs(e, t)) {
      let r = n.devFriendlyProp
      if (r.type === 'ARRAY' && t.enableTsArrays) {
        let t = 0
        let n = 0
        for (let i of e) {
          if (i.devFriendlyProp.type === 'ARRAY' && i.devFriendlyProp.key === r.key) {
            t++
            if (!i.isOptional)
              n++
          }
        }
        t === n ? i.push(`@param ${r.key} - Specify ${t} items`) : i.push(`@param ${r.key} - Specify between ${n} and ${t} items`)
      }
    }
    return i
  }

  return {
    typeName: getComponentPropsTypeName(e.name),
    typeDefBody: `{${n.join('; ')}}`,
    prefixComments: generatePrefixComments(t, i),
    referencedTypes: r,
  }
}

/**
 * Cache objects for type information.
 * Original variable names: y, b
 */
let typeInfoCache: Record<string, any> = {}
let typeInfoByAssetKey: Record<string, any> = {}

/**
 * Resets the cached type information.
 * Original function name: resetTypeInfoCache
 */
export function resetTypeInfoCache(): void {
  typeInfoCache = {}
  typeInfoByAssetKey = {}
}

/**
 * Retrieves type information for a component node, using cache if available.
 * Original function name: getTypeInfoCached
 * @param node - The component or state group node.
 * @param options - Options for type info retrieval.
 * @param seenNestedVariant - Optional map for nested variant tracking.
 * @returns The type information object for the node.
 */
export function getTypeInfoCached(
  node: any,
  options?: any,
  seenNestedVariant?: any,
): any {
  try {
    // If node is a state, use its parent node for type info.
    const resolvedNode = node.isState ? node.parentNode : node
    const guid = resolvedNode.guid

    // If not cached or caching is disabled, compute and cache type info.
    if (!typeInfoCache[guid] || options?.noTypeInfoCache) {
      const typeInfo = computeTypeInfo(resolvedNode, options, seenNestedVariant)
      typeInfoCache[guid] = typeInfo
      typeInfoByAssetKey[typeInfo.key] = typeInfo
    }
    return typeInfoCache[guid]
  }
  catch (error) {
    // Log the error for debugging purposes
    console.error('Error retrieving type info:', error)
    throw error
  }
}
// Original function name: E
// This function computes type information for a component node.
// It parses component properties, handles various types (e.g., TEXT, BOOLEAN, IMAGE, etc.),
// and constructs the type representation, including JSX name, props, and referenced types.
function computeTypeInfo(
  node: any,
  options?: any,
  seenNestedVariant?: any,
): any {
  const jsxName = getComponentJSXName(node.name)
  const parsedDefs = parseComponentDefs(node, options, seenNestedVariant)
  const propsTypeRepr = buildPropsTypeRepr({
    component: node,
    parsedDefs,
  }, options)
  const typeStr = `type ${jsxName} = React.FC<${propsTypeRepr.typeDefBody ?? '{}'}>`
  const componentGroupPath = getNodeParentPath(node.guid)
  const isBuildingBlock = isPartOfGroup(componentGroupPath, BUILDING_BLOCKS_LABEL)
  const groupName = findGroupName(componentGroupPath)
  const isIconLike = node.isIconLikeContainer
  const componentType = isBuildingBlock
    ? GroupItemType.BUILDING_BLOCK
    : groupName
      ? GroupItemType.GROUPED_COMPONENT
      : isIconLike
        ? GroupItemType.GROUPED_COMPONENT
        : GroupItemType.NONE
  const resolvedGroupName = isBuildingBlock
    ? BUILDING_BLOCKS_LABEL
    : groupName ?? (isIconLike ? 'Icon' : '')
  const version = getSharedVersion(node)
  const defaultNodeId = node.type === 'SYMBOL' ? node.guid : node.defaultVariant?.guid ?? ''
  const assetKey = componentType === GroupItemType.GROUPED_COMPONENT
    ? SceneGraphHelpers.getAssetKeyForPublish(defaultNodeId)
    : SceneGraphHelpers.getAssetKeyForPublish(node.guid)
  const defs = node.componentPropertyDefinitions(Confirmation.YES)
  return {
    componentId: node.guid,
    name: node.name,
    defaultNodeId,
    jsxName,
    componentGroupPath,
    groupName: resolvedGroupName,
    componentType,
    defs,
    parsedDefs,
    prefixTypes: generatePrefixTypes(parsedDefs, options),
    prefixComments: propsTypeRepr.prefixComments ?? [],
    typeStr,
    propsTypeRepr,
    description: node.description,
    key: assetKey,
    version,
    typeInfoVersion: 3,
  }
}

// Original nested function: (function (e, t, i) { ... })
// Parses component property definitions into a structured format.
function parseComponentDefs(
  component: any,
  options: any,
  seenNestedVariant?: any,
): any[] {
  const rawDefs = extractRawDefs(component, options)
  assignUsageProps(rawDefs)
  const parsedDefs = processDefs(component, rawDefs, options, seenNestedVariant)
  const sortedDefs = parsedDefs.sort(comparePropDefs)
  return sortedDefs
}

// Original nested function: (function (e, t) { ... })
// Extracts raw property definitions from the component.
function extractRawDefs(component: any, options: any): Record<string, any> {
  const defs = component.componentPropertyDefinitions(Confirmation.YES)
  const propKeys = Object.keys(defs).reverse()
  const rawProps: any[] = []

  for (const key of propKeys) {
    const def = defs[key]
    if (def.type === 'INSTANCE_SWAP') {
      const defaultNode = getSingletonSceneGraph().get(def.defaultValue)
      if (defaultNode && defaultNode.type === 'SYMBOL') {
        if (defaultNode.name === 'Slot') {
          rawProps.push({
            rawProp: key,
            def: { type: 'SLOT' },
          })
          continue
        }
        if (defaultNode.isSubscribedAsset) {
          rawProps.push({
            rawProp: key,
            def: {
              type: 'GROUPED_INSTANCE_SWAP',
              defaultValue: defaultNode.guid,
              groupName: defaultNode.isIconLikeContainer ? ICONS_GROUP : UNKNOWN_LABEL,
            },
          })
          continue
        }
        const typeInfo = getTypeInfoCached(defaultNode, options)
        const groupName = getComponentGroupName(typeInfo)
        if (groupName) {
          rawProps.push({
            rawProp: key,
            def: {
              type: 'GROUPED_INSTANCE_SWAP',
              defaultValue: defaultNode.guid,
              groupName,
            },
          })
          continue
        }
      }
    }
    rawProps.push({ rawProp: key, def })
  }

  // Handle nested image nodes
  const nestedImages = getNestedImageNodes(component)
  for (const [propName, imageData] of Object.entries(groupInstanceNodesBySymbol(nestedImages, 'IMAGE'))) {
    const tags: Record<string, any> = {}
    for (const [parentId, tagData] of Object.entries(imageData.tagsByParentComponentId)) {
      tags[parentId] = { background: 'normal' }
      if ((tagData as any).transparent === 'true')
        tags[parentId].background = 'transparent'
      if ((tagData as any).segment === 'true')
        tags[parentId].background = 'segment'
      if ((tagData as any).desc)
        tags[parentId].desc = (tagData as any).desc
      if ((tagData as any).prompt)
        tags[parentId].prompt = (tagData as any).prompt
    }
    rawProps.push({
      rawProp: propName,
      def: {
        type: 'IMAGE',
        guidByParentComponentId: imageData.guidByParentComponentId,
        tagsByParentComponentId: tags,
      },
    })
  }

  // Handle nested instance nodes
  const instanceNodes = findInstanceNodesByGuid(component.guid).filter(
    (node: any) =>
      !(node.isInstanceSublayer || (!node.isBubbled && !options.exposeAllNestedInstances)
        || (node.componentPropertyReferences()?.mainComponent && !options.bubbleInstanceSwapProps)),
  )
  for (const [propName, instanceData] of Object.entries(groupInstanceNodesBySymbol(instanceNodes, 'NESTED_INSTANCE'))) {
    const componentId = instanceData.componentIdOrNull
    if (!componentId)
      continue
    const tags: Record<string, any> = {}
    for (const [parentId, tagData] of Object.entries(instanceData.tagsByParentComponentId)) {
      tags[parentId] = {}
      const fixedVariants: Record<string, boolean> = {}
      if ((tagData as any).fixed) {
        const targetComponent = getSingletonSceneGraph().get(componentId)
        if (targetComponent) {
          const typeInfo = getTypeInfoCached(targetComponent, options)
          const fixedProps = (tagData as any).fixed?.split(',').map((s: string) => s.trim()) ?? []
          for (const def of typeInfo.parsedDefs) {
            if ('key' in def.devFriendlyProp && def.def.type === 'VARIANT') {
              const variantKey = def.devFriendlyProp.key
              if ((tagData as any).fixed === 'true' || fixedProps.includes(variantKey)) {
                fixedVariants[variantKey] = true
              }
            }
          }
          tags[parentId].fixedVariantProperties = fixedVariants
        }
      }
    }
    rawProps.push({
      rawProp: propName,
      def: {
        type: 'NESTED_INSTANCE',
        componentId,
        tagsByParentComponentId: tags,
        guidByParentComponentId: instanceData.guidByParentComponentId,
      },
    })
  }

  // Ensure unique rawProps
  const uniqueProps: Record<string, any> = {}
  for (const prop of rawProps) {
    if (uniqueProps[prop.rawProp]) {
      console.error('Unexpected repeated rawProp value', { rawProp: prop.rawProp })
      continue
    }
    uniqueProps[prop.rawProp] = prop
  }
  return uniqueProps
}

// Assigns usage prop names to grouped nodes.
function assignUsageProps(rawDefs: Record<string, any>): void {
  for (const group of groupNodesByPropName(rawDefs)) {
    for (let i = 0; i < group.length; i++) {
      const prop = group[i]
      prop.usagePropOverride = getUsagePropName({
        index: i,
        rawProp: prop.rawProp,
      })
    }
  }
}

// Processes raw defs into parsed defs with type representations.
function processDefs(
  component: any,
  rawDefs: Record<string, any>,
  options: any,
  seenNestedVariant?: any,
): any[] {
  const usageProps = new Set<string>()
  const propMappings: Record<string, string> = {}
  const typeGroups: Record<string, string[]> = {}
  const parsedDefs: any[] = []
  const variantMap = seenNestedVariant ?? new Map()

  for (const [rawProp, propData] of Object.entries(rawDefs)) {
    let usageProp = cleanComponentPropNameForUsage(propData.usagePropOverride ?? rawProp)
    if (usageProps.has(usageProp)) {
      usageProp = getUniqueUsageProp({ usageProp, usedUsageProps: usageProps })
    }
    const def = propData.def
    if (def.type === 'NESTED_INSTANCE' && (variantMap.get(def.componentId) ?? 0) >= 25)
      continue
    if (component.isStateGroup && def.type === 'NESTED_INSTANCE') {
      const count = variantMap.get(component.guid) ?? 0
      variantMap.set(component.guid, count + 1)
    }
    const typeRepr = getTypeRepresentation({
      component,
      rawProp,
      definition: def,
      seenNestedVariant: variantMap,
    }, options)
    if (typeRepr) {
      usageProps.add(usageProp)
      propMappings[rawProp] = usageProp
      const typeName = typeRepr.typeName
      typeGroups[typeName] = typeGroups[typeName] || []
      typeGroups[typeName].push(usageProp)
      const devFriendlyProp = buildDevFriendlyProp({
        usageProp,
        rawProp,
        definition: def,
      })
      const parsedDef = {
        def,
        devFriendlyProp,
        componentId: getInstanceDefaultValue(def),
        isOptional: isOptionalProp(rawProp),
        rawProp,
        typeRepr,
      }
      parsedDefs.push(parsedDef)
    }
  }

  // Group by common prefixes
  for (const group of Object.values(typeGroups)) {
    for (const [prefix, items] of Object.entries(groupByCommonPrefixSorted(group))) {
      if (areAllDefsSameTypeAndDefault(items.map((item: string) => parsedDefs.find(d => d.devFriendlyProp.key === item)))) {
        for (let i = 0; i < items.length; i++) {
          const item = items[i]
          const def = parsedDefs.find(d => d.devFriendlyProp.key === item)
          const originalProp = def.devFriendlyProp
          const arrayProp: any = {
            type: 'ARRAY',
            key: prefix,
            index: i,
            nonArrayKey: 'key' in originalProp ? originalProp.key : '',
            valueType: originalProp.valueType,
          }
          if ('originalKey' in originalProp)
            arrayProp.originalKey = (originalProp as any).originalKey
          def.devFriendlyProp = arrayProp
        }
      }
    }
  }

  // Finalize devFriendlyProps
  const finalProps: Record<string, any> = {}
  for (const def of parsedDefs) {
    const prop = def.devFriendlyProp
    if (prop.type !== 'DERIVED_BOOLEAN') {
      switch (prop.type) {
        case 'SIMPLE':
        case 'SIMPLE_CHOICE':
        case 'IMAGE':
        case 'GROUPED_INSTANCE_SWAP':
          finalProps[prop.key] = prop
          break
        case 'ARRAY':
          finalProps[prop.key] = prop
          finalProps[prop.key] = {
            type: 'SIMPLE',
            key: prop.key,
            valueType: prop.valueType,
          }
          break
        default:
          throwTypeError(prop)
      }
    }
  }

  // Handle derived booleans
  for (const def of parsedDefs) {
    const prop = def.devFriendlyProp
    if (prop.type === 'SIMPLE') {
      const visibleSuffix = 'Visible'
      if (prop.key.endsWith(visibleSuffix)) {
        const baseKey = prop.key.slice(0, -visibleSuffix.length)
        if (baseKey && finalProps[baseKey]) {
          def.devFriendlyProp = {
            type: 'DERIVED_BOOLEAN',
            valueType: 'BOOLEAN',
            devFriendlyProp: finalProps[baseKey],
          }
        }
      }
    }
  }

  return parsedDefs
}

// Original nested function: (function ({ component: e, rawProp: t, definition: i, seenNestedVariant: r }, s) { ... })
// Gets the type representation for a property definition.
function getTypeRepresentation(
  { component, rawProp, definition, seenNestedVariant }: any,
  options: any,
): any {
  switch (definition.type) {
    case 'TEXT':
      return STRING_TYPE_REPR
    case 'BOOLEAN':
      return BOOLEAN_TYPE_REPR
    case 'NUMBER':
      break
    case 'SLOT':
      return g
    case 'IMAGE':
      return IMAGE_TYPE_REPR
    case 'VARIANT':
      return {
        typeName: definition.variantOptions?.map((opt: string) => `"${opt}"`).join(' | ') ?? 'null',
      }
    case 'GROUPED_INSTANCE_SWAP':
      return {
        typeName: getCustomGroupName(definition.groupName),
        typeDefBody: '{description: string}',
        prefixComments: ['@param description - Specify a 1 sentence description'],
      }
    case 'INSTANCE_SWAP': {
      if (definition.preferredValues && definition.preferredValues.length > 0 && definition.preferredValues.length < 10) {
        const jsxName = buildComponentJSXName({ component, rawProp })
        const componentNames: string[] = []
        const referencedTypes: any[] = []
        for (const pref of definition.preferredValues) {
          const info = getComponentInfo(pref.key, options)
          if (info) {
            componentNames.push(info.jsxName)
            referencedTypes.push({
              type: 'COMPONENT_JSX',
              componentId: info.componentId,
            })
          }
        }
        if (componentNames.length > 0) {
          return {
            typeName: jsxName,
            typeDefBody: `ReactElement<any, ${componentNames.join(' | ')}>`,
            referencedTypes,
          }
        }
      }
      const defaultNode = getSingletonSceneGraph().get(definition.defaultValue)
      if (defaultNode && defaultNode.type === 'SYMBOL') {
        return getComponentTypeRepr({ component: defaultNode, rawProp, seenNestedVariant }, options)
      }
      break
    }
    case 'NESTED_INSTANCE': {
      const componentId = definition.componentId
      const targetComponent = getSingletonSceneGraph().get(componentId)
      if (targetComponent && (targetComponent.type === 'SYMBOL' || targetComponent.isStateGroup)) {
        return getComponentTypeRepr({ component: targetComponent, rawProp, seenNestedVariant }, options)
      }
      break
    }
    default:
      throwTypeError(definition)
  }
  return null
}

// Helper to get component type representation (extracted from A function).
function getComponentTypeRepr(
  { component, rawProp, seenNestedVariant }: any,
  options: any,
): any {
  const typeInfo = getTypeInfoCached(component, options, seenNestedVariant)
  const propsTypeName = typeInfo.propsTypeRepr.typeName
  const { omit, pick } = extractModifiersFromProp(rawProp)
  if (typeInfo.parsedDefs.length > 5 && pick && pick.length <= 2) {
    return {
      typeName: buildPropsTypeRepr({
        component,
        parsedDefs: filterUniquePropDefs(typeInfo.parsedDefs, options).filter(
          (def: any) => !(omit && omit.includes(cleanComponentPropNameForUsage(def.rawProp)))
            && (!pick || pick.includes(cleanComponentPropNameForUsage(def.rawProp))),
        ),
      }, options).typeDefBody ?? '{}',
      referencedTypes: [{ type: 'COMPONENT_INLINED', componentId: typeInfo.componentId }],
    }
  }
  let modifiedTypeName = propsTypeName
  if (omit) {
    const omittedKeys = filterUniquePropDefs(typeInfo.parsedDefs, options)
      .filter((def: any) => 'key' in def.devFriendlyProp && omit.includes(cleanComponentPropNameForUsage(def.rawProp)))
      .map((def: any) => def.devFriendlyProp.key)
    const omitStr = omittedKeys.map((key: string) => `"${key}"`).join(' | ')
    modifiedTypeName = `Omit<${modifiedTypeName}, ${omitStr}>`
  }
  if (pick) {
    const pickedKeys = filterUniquePropDefs(typeInfo.parsedDefs, options)
      .filter((def: any) => 'key' in def.devFriendlyProp && pick.includes(cleanComponentPropNameForUsage(def.rawProp)))
      .map((def: any) => def.devFriendlyProp.key)
    const pickStr = pickedKeys.map((key: string) => `"${key}"`).join(' | ')
    modifiedTypeName = `Pick<${modifiedTypeName}, ${pickStr}>`
  }
  return {
    typeName: modifiedTypeName,
    referencedTypes: [{ type: 'COMPONENT', componentId: typeInfo.componentId }],
  }
}

// Builds dev-friendly property object.
function buildDevFriendlyProp({ usageProp, rawProp, definition }: any): any {
  const baseProp: any = { key: usageProp }
  const cleanedRaw = cleanComponentPropNameForUsage(rawProp)
  if (cleanedRaw !== usageProp)
    baseProp.originalKey = cleanedRaw
  switch (definition.type) {
    case 'VARIANT':
      return {
        type: 'SIMPLE_CHOICE',
        validOptions: definition.variantOptions ?? [],
        valueType: 'STRING',
        ...baseProp,
      }
    case 'INSTANCE_SWAP':
    case 'NESTED_INSTANCE':
    case 'SLOT':
      return { type: 'SIMPLE', valueType: 'OBJECT', ...baseProp }
    case 'BOOLEAN':
      return { type: 'SIMPLE', valueType: 'BOOLEAN', ...baseProp }
    case 'TEXT':
      return { type: 'SIMPLE', valueType: 'STRING', ...baseProp }
    case 'NUMBER':
      return { type: 'SIMPLE', valueType: 'UNKNOWN', ...baseProp }
    case 'IMAGE':
      return { type: 'IMAGE', valueType: 'OBJECT', ...baseProp }
    case 'GROUPED_INSTANCE_SWAP': {
      const defaultNode = getSingletonSceneGraph().get(definition.defaultValue)
      if (!defaultNode || defaultNode.type !== 'SYMBOL') {
        return { type: 'SIMPLE', valueType: 'UNKNOWN', ...baseProp }
      }
      return {
        type: 'GROUPED_INSTANCE_SWAP',
        groupName: definition.groupName,
        valueType: 'OBJECT',
        ...baseProp,
      }
    }
    default:
      throwTypeError(definition)
  }
}

// Generates prefix types for the component.
function generatePrefixTypes(parsedDefs: any[], options: any): Record<string, string> {
  const prefixTypes: Record<string, string> = {}
  const addType = (key: string, typeStr: string) => {
    if (key in prefixTypes) {
      key = getUniqueUsageProp({ usageProp: key, usedUsageProps: new Set(Object.keys(prefixTypes)) })
    }
    prefixTypes[key] = typeStr
  }
  for (const def of filterUniquePropDefs(parsedDefs, options)) {
    const prop = def.devFriendlyProp
    if (prop.type === 'DERIVED_BOOLEAN' || (prop.type === 'ARRAY' && prop.index !== 0))
      continue
    if (def.typeRepr.referencedTypes) {
      for (const ref of def.typeRepr.referencedTypes) {
        switch (ref.type) {
          case 'IMAGE':
            addType(prop.key, CUSTOM_IMAGE_TYPE_STR)
            break
          case 'COMPONENT_JSX': {
            const targetComponent = getSingletonSceneGraph().get(ref.componentId)
            if (targetComponent) {
              const typeInfo = getTypeInfoCached(targetComponent, options)
              for (const [subKey, subType] of Object.entries(typeInfo.prefixTypes)) {
                addType(`${prop.key}${capitalizeFirstLetter(subKey)}`, subType as string)
              }
              addType(prop.key, typeInfo.typeStr)
            }
            break
          }
          case 'COMPONENT_INLINED':
          case 'COMPONENT': {
            const targetComponent = getSingletonSceneGraph().get(ref.componentId)
            if (targetComponent) {
              const typeInfo = getTypeInfoCached(targetComponent, options)
              for (const [subKey, subType] of Object.entries(typeInfo.prefixTypes)) {
                addType(`${prop.key}${capitalizeFirstLetter(subKey)}`, subType as string)
              }
              if (ref.type === 'COMPONENT') {
                const typeStr = generateTypeString(typeInfo.propsTypeRepr)
                if (typeStr)
                  addType(prop.key, typeStr)
              }
            }
            break
          }
          default:
            throwTypeError(ref)
        }
      }
    }
    const typeStr = generateTypeString(def.typeRepr)
    if (typeStr) {
      addType(prop.key, typeStr)
    }
  }
  return prefixTypes
}

// Generates type string from type representation (extracted from x function).
function generateTypeString(typeRepr: any): string | null {
  if (typeRepr.typeDefBody) {
    const lines: string[] = []
    if (typeRepr.prefixComments?.length) {
      lines.push('/**')
      for (const comment of typeRepr.prefixComments) {
        lines.push(` * ${comment}`)
      }
      lines.push(' */')
    }
    lines.push(`type ${typeRepr.typeName} = ${typeRepr.typeDefBody};`)
    return lines.join('\n')
  }
  return null
}

// Helper to get component info (simplified from original).
function getComponentInfo(assetKey: string, options: any): any {
  if (typeInfoByAssetKey[assetKey] && !options?.noTypeInfoCache)
    return typeInfoByAssetKey[assetKey]
  const component = FirstDraftHelpers.getComponentByAssetKey(assetKey) || FirstDraftHelpers.getStateGroupByAssetKey(assetKey)
  return component ? getComponentInfoById(component, options) : null
}

export function getComponentInfoById(e, t) {
  let i = getSymbolOrStateGroupNode(e)
  return i ? i.isState ? getTypeInfoCached(i.parentNode, t) : getTypeInfoCached(i, t) : null
}
export function getComponentInfoByIdUncached(e, t) {
  let i = getSymbolOrStateGroupNode(e)
  return i ? i.isState ? computeTypeInfo(i.parentNode, t) : computeTypeInfo(i, t) : null
}
export const NU = STRING_TYPE_REPR
export const NY = getTypeInfoCached
export const UY = resetTypeInfoCache
export const Vk = CUSTOM_IMAGE_TYPE_STR
export const Ye = getComponentInfoById
export const Z1 = getComponentInfoByIdUncached
export const dX = IMAGE_TYPE_REPR
export const oo = BOOLEAN_TYPE_REPR

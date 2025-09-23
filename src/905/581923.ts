import { findInstanceNodesByGuid, findNodesByCriteriaGUIDs, getSymbolParentGuid, moveNumbersToEnd, toCamelCase, toTitleCase } from '../905/327738'
import { getSingletonSceneGraph } from '../905/700578'
import { throwTypeError } from '../figma_app/465776'

/**
 * Prefix used for component names.
 * (COMPONENT_PREFIX)
 */
export const COMPONENT_PREFIX = 'Component'

/**
 * Cleans a component property name for usage.
 * Removes optional marker, modifiers, and non-alphanumeric characters.
 * (cleanComponentPropNameForUsage)
 */
export function cleanComponentPropNameForUsage(propName: string): string {
  propName = removeModifiers(removeOptionalMarker(stripHash(propName)))
  propName = toCamelCase(propName).replace(/[^0-9a-z]/gi, '')
  return moveNumbersToEnd(propName)
}

/**
 * Removes the optional marker '?' from the end of a string.
 * (h)
 */
function removeOptionalMarker(name: string): string {
  const [main] = name.split('#')
  return main.endsWith('?') ? main.slice(0, -1) : main
}

/**
 * Removes modifiers from a string (anything after '{').
 * (g)
 */
function removeModifiers(name: string): string {
  const idx = name.indexOf('{')
  return idx !== -1 ? name.substring(0, idx) : name
}

/**
 * Removes trailing modifier tags from a string using regex.
 * (g)
 */
function stripHash(name: string): string {
  const match = MODIFIER_TAGS.exec(name)
  return match?.[0] ? name.replace(match[0], '').trim() : name
}

const MODIFIER_TAG = /\[(\w+)(: ?([^[\]]+))?\]/
// eslint-disable-next-line regexp/no-unused-capturing-group
const MODIFIER_TAGS = new RegExp(`(${MODIFIER_TAG.source})*$`)
export const IMAGE_NAME_FORMAT = new RegExp(/^Image ?(\(.+\))?/.source + MODIFIER_TAGS.source)

/**
 * Generates a unique usage property name for a component prop.
 * ($$u15)
 */
export function getUsagePropName({
  index,
  rawProp,
}: { index: number, rawProp: string }): string {
  const [base, suffix] = rawProp.split('#')
  if (!base || !suffix)
    throw new Error(`Unexpected rawProp format: ${rawProp}`)
  let usageProp = cleanComponentPropNameForUsage(base)
  if (usageProp.match(/\d+$/))
    usageProp = usageProp.replace(/\d+$/, '')
  return `${usageProp}${index + 1}#${suffix}`
}

/**
 * Groups instance nodes by their containing symbol and assigns usage property names.
 * ($$p11)
 */
export function groupInstanceNodesBySymbol(
  nodes: Array<{ guid: string, containingSymbolId?: string, name: string, type?: string }>,
  mode: string,
) {
  const symbolToGuids: Record<string, string[]> = {}
  const guidToNode: Record<string, any> = {}
  const guidToSymbol: Record<string, string> = {}

  for (const node of nodes) {
    const { guid, containingSymbolId } = node
    if (containingSymbolId) {
      guidToNode[guid] = node
      guidToSymbol[guid] = containingSymbolId
      symbolToGuids[containingSymbolId] = symbolToGuids[containingSymbolId] || []
      symbolToGuids[containingSymbolId].push(guid)
    }
  }

  const usedProps = new Set<string>()
  const guidToUsageProp: Record<string, string> = {}

  for (const guids of Object.values(symbolToGuids)) {
    const usageProps = new Set<string>()
    for (const guid of guids) {
      const node = guidToNode[guid]
      if (!node)
        continue
      let usageProp = cleanComponentPropNameForUsage(node.name)
      if (usageProps.has(usageProp)) {
        usageProp = getUniqueUsageProp({
          usageProp,
          usedUsageProps: usageProps,
        })
      }
      usageProps.add(usageProp)
      usedProps.add(usageProp)
      guidToUsageProp[guid] = usageProp
    }
  }

  const result: Record<string, any> = {}
  for (const node of nodes) {
    const symbolId = guidToSymbol[node.guid]
    const usageProp = guidToUsageProp[node.guid]
    if (symbolId && usageProp) {
      let parentComponentId: string | null = null
      let usagePropWithParent = usageProp
      if (mode === 'NESTED_INSTANCE') {
        parentComponentId = getSymbolParentGuid(node)
        if (node.type !== 'INSTANCE' || !(parentComponentId))
          continue
        usagePropWithParent += `/${parentComponentId}`
      }
      const key = buildUsagePropKey(node.name, usagePropWithParent)
      if (!result[key]) {
        result[key] = {
          componentIdOrNull: parentComponentId,
          guidByParentComponentId: {},
          tagsByParentComponentId: {},
        }
      }
      result[key].guidByParentComponentId[symbolId] = node.guid
      const tags = extractTagsFromName(node.name)
      if (Object.keys(tags).length > 0) {
        result[key].tagsByParentComponentId[symbolId] = tags
      }
    }
  }
  return result
}

/**
 * Builds a usage property key from name and usage property.
 * (anonymous in $$p11)
 */
function buildUsagePropKey(name: string, usageProp: string): string {
  const base = stripHash(name.replace(/#/g, ''))
  return [base, usageProp].join('#')
}

/**
 * Extracts modifier tags from a name string.
 * (anonymous in $$p11)
 */
function extractTagsFromName(name: string): Record<string, string> {
  const match = MODIFIER_TAGS.exec(removeOptionalMarker(name))?.[0]
  if (!match)
    return {}
  return Object.fromEntries(
    match.match(new RegExp(MODIFIER_TAG, 'g'))?.map((tag) => {
      const parts = MODIFIER_TAG.exec(tag)
      return parts ? [parts[1], parts[3] || 'true'] : []
    }).filter(arr => arr.length === 2) || [],
  )
}

/**
 * Extracts modifiers from a prop string.
 * (extractModifiersFromProp)
 */
export function extractModifiersFromProp(prop: string): { omit?: string[], pick?: string[] } {
  const match = prop.match(/\{(.+)\}/)
  if (!match)
    return {}
  const items = match[1].split(',')
  return items[0].startsWith('-')
    ? { omit: items.map(item => item.replace('-', '')) }
    : { pick: items }
}

/**
 * Checks if a prop name is optional.
 * ($$f7)
 */
export function isOptionalProp(prop: string): boolean {
  return removeOptionalMarker(prop).endsWith('?')
}

/**
 * Builds a JSX name for a component prop.
 * ($$_9)
 */
export function buildComponentJSXName({
  component,
  rawProp,
}: { component: { name: string }, rawProp: string }): string {
  const propName = cleanComponentPropNameForUsage(rawProp)
  return toTitleCase(component.name) + toTitleCase(propName)
}

/**
 * Gets the JSX name for a component.
 * (getComponentJSXName)
 */
export function getComponentJSXName(name: string): string {
  return toTitleCase(name, COMPONENT_PREFIX)
}

/**
 * Gets the props type name for a component.
 * ($$y5)
 */
export function getComponentPropsTypeName(name: string): string {
  return `${toTitleCase(name, COMPONENT_PREFIX)}Props`
}

/**
 * Groups an array of prop names by their common prefix and sorts them.
 * (groupByCommonPrefixSorted)
 */
export function groupByCommonPrefixSorted(props: string[]): Record<string, string[]> {
  const groups: Record<string, string[]> = {}
  if (!Array.isArray(props) || props.length < 2)
    return groups
  const cleaned = props.map(cleanComponentPropNameForUsage)
  for (let i = 0; i < cleaned.length; i++) {
    const prefix = cleaned[i].replace(/\d+$/, '')
    groups[prefix] = groups[prefix] || []
    if (!groups[prefix].includes(props[i]))
      groups[prefix].push(props[i])
  }
  const result: Record<string, string[]> = {}
  for (const prefix in groups) {
    const sorted = groups[prefix].sort((a, b) => {
      const aNum = a.match(/\d+$/)
      const bNum = b.match(/\d+$/)
      return aNum && bNum ? parseInt(aNum[0], 10) - parseInt(bNum[0], 10) : a.localeCompare(b)
    })
    const plural = getPluralGroupName(sorted)
    if (plural)
      result[plural] = sorted
  }
  return result
}

/**
 * Determines if a group of prop names forms a plural group.
 * (anonymous in groupByCommonPrefixSorted)
 */
function getPluralGroupName(props: string[]): string | null {
  if (!Array.isArray(props) || props.length < 2)
    return null
  const prefix = props[0].replace(/\d+$/, '')
  for (let i = 0; i < props.length; i++) {
    if (!props[i].startsWith(prefix) || parseInt(props[i].slice(prefix.length)) !== i + 1)
      return null
  }
  return `${prefix}s`
}

/**
 * Gets the default value for an instance swap or nested instance prop.
 * ($$v6)
 */
export function getInstanceDefaultValue(def: any): string | null {
  if (def.type === 'INSTANCE_SWAP' && typeof def.defaultValue === 'string')
    return def.defaultValue
  if (def.type === 'NESTED_INSTANCE')
    return def.componentId
  return null
}

/**
 * Checks if all items in an array have the same type and default value.
 * ($$I21)
 */
export function areAllDefsSameTypeAndDefault(arr: Array<{ def: any }>): boolean {
  if (arr.length === 0)
    return true
  const first = arr[0]
  const firstDefault = getInstanceDefaultValue(first.def)
  return arr.every(item => first.def.type === item.def.type && firstDefault === getInstanceDefaultValue(item.def))
}

/**
 * Finds instance node GUIDs for a given definition.
 * (getInstanceIdsForDef)
 */
export function getInstanceIdsForDef(
  guid: string,
  prop: { def: any, rawProp: string },
  options: { exposeAllNestedInstances?: boolean } = {},
): string[] {
  const result: string[] = []
  for (const node of findInstanceNodesByGuid(guid)) {
    if (node.isInstanceSublayer)
      continue
    if (
      (['SLOT', 'INSTANCE_SWAP', 'GROUPED_INSTANCE_SWAP'].includes(prop.def.type)
        && node.componentPropertyReferences()?.mainComponent === prop.rawProp)
      || (prop.def.type === 'NESTED_INSTANCE'
        && (node.isBubbled || options.exposeAllNestedInstances)
        && Object.values(prop.def.guidByParentComponentId).includes(node.guid)
        && prop.def.componentId === getSymbolParentGuid(node))
    ) {
      result.push(node.guid)
    }
  }
  return result
}

/**
 * Generates a unique usage property name if already used.
 * ($$x8)
 */
export function getUniqueUsageProp({
  usageProp,
  usedUsageProps,
}: { usageProp: string, usedUsageProps: Set<string> }): string {
  if (!usedUsageProps.has(usageProp))
    return usageProp
  // eslint-disable-next-line regexp/no-super-linear-backtracking
  const match = usageProp.match(/^(.*?)(\d*)$/)
  const prefix = match ? match[1] : usageProp
  let maxNum = 1
  usedUsageProps.forEach((prop) => {
    if (prop.startsWith(prefix)) {
      const num = parseInt(prop.slice(prefix.length), 10)
      if (!isNaN(num) && num > maxNum)
        maxNum = num
    }
  })
  return `${prefix}${maxNum + 1}`
}

/**
 * Groups nodes by their cleaned prop name and finds sets of at least 3 related nodes.
 * ($$S16)
 */
export function groupNodesByPropName(nodes: Record<string, any>): any[][] {
  const groups: Record<string, string[]> = {}
  for (const key of Object.keys(nodes)) {
    const cleaned = cleanComponentPropNameForUsage(key)
    groups[cleaned] = groups[cleaned] || []
    groups[cleaned].push(key)
  }
  const result: any[][] = []
  for (const group of Object.values(groups)) {
    const set = findRelatedNodeSet(group.map(k => nodes[k]))
    if (set.length >= 3)
      result.push(set)
  }
  return result
}

/**
 * Finds a set of related nodes based on parent component ID and scene graph.
 * (anonymous in $$S16)
 */
function findRelatedNodeSet(nodes: any[]): any[] {
  if (nodes.length < 3)
    return []
  const first = nodes[0]
  if (!first || !('guidByParentComponentId' in first.def) || !areAllDefsSameTypeAndDefault(nodes))
    return []
  const parentGroups: Record<string, any[]> = {}
  for (const node of nodes) {
    if (!('guidByParentComponentId' in node.def))
      return []
    for (const parentId of Object.keys(node.def.guidByParentComponentId)) {
      parentGroups[parentId] = parentGroups[parentId] || []
      parentGroups[parentId].push(node)
    }
  }
  let commonParent: string | null = null
  for (const [parentId, group] of Object.entries(parentGroups)) {
    if (group.length === nodes.length) {
      commonParent = parentId
      break
    }
  }
  if (!commonParent)
    return []
  const guidToNode: Record<string, any> = {}
  for (const node of nodes) {
    if (!('guidByParentComponentId' in node.def))
      return []
    const guid = node.def.guidByParentComponentId[commonParent]
    if (!guid)
      return []
    guidToNode[guid] = node
  }
  const stackGroups: Record<string, string[]> = {}
  for (const guid of Object.keys(guidToNode)) {
    let node = getSingletonSceneGraph().get(guid)
    let parent = node?.parentNode
    while (parent && parent.stackMode !== 'NONE') {
      stackGroups[parent.guid] = stackGroups[parent.guid] || []
      stackGroups[parent.guid].push(guid)
      if (parent?.type === 'SYMBOL')
        break
      parent = parent.parentNode
    }
  }
  const sortedGroups = Object.entries(stackGroups).sort((a, b) => b[1].length - a[1].length)
  for (const [parentGuid, guids] of sortedGroups) {
    if (guids.length < 3)
      continue
    const guidSet = new Set(guids)
    return findNodesByCriteriaGUIDs(parentGuid, { types: ['INSTANCE'] })
      .filter(node => guidSet.has(node.guid))
      .map(node => guidToNode[node.guid])
  }
  return []
}

/**
 * Checks if a node matches the image name format and is not an instance sublayer.
 * (w)
 */
function isImageNode(node: { name: string, isInstanceSublayer?: boolean }) {
  return IMAGE_NAME_FORMAT.test(node.name) && !node.isInstanceSublayer
}

/**
 * Gets nested image nodes for a given node.
 * (getNestedImageNodes)
 */
export function getNestedImageNodes(node: { guid: string, name: string, isInstanceSublayer?: boolean }) {
  const nodes = findNodesByCriteriaGUIDs(node.guid, { types: ['FRAME', 'INSTANCE'] }).filter(isImageNode)
  if (isImageNode(node))
    nodes.push(node)
  return nodes
}

/**
 * Maps prop types to sort order.
 * (T)
 */
function getPropTypeOrder(type: string): number {
  switch (type) {
    case 'VARIANT': return 0
    case 'TEXT': return 1
    case 'BOOLEAN': return 2
    case 'INSTANCE_SWAP': return 3
    case 'GROUPED_INSTANCE_SWAP': return 4
    case 'IMAGE': return 5
    case 'NESTED_INSTANCE': return 6
    case 'SLOT': return 8
    default: return 7
  }
}

/**
 * Sorts two prop definitions by type and array index.
 * ($$k3)
 */
export function comparePropDefs(a: any, b: any): number {
  const orderA = getPropTypeOrder(a.def.type)
  const orderB = getPropTypeOrder(b.def.type)
  if (orderA !== orderB)
    return orderA - orderB
  if (a.devFriendlyProp.type === 'ARRAY' && b.devFriendlyProp.type === 'ARRAY') {
    return a.devFriendlyProp.index - b.devFriendlyProp.index
  }
  return 0
}

/**
 * Gets the TypeScript property key for a prop definition.
 * ($$R1)
 */
export function getTsPropKey(
  propDef: any,
  includeOptional = true,
  options: { enableTsArrays?: boolean } = {},
): string {
  const prop = propDef.devFriendlyProp
  const optional = includeOptional && propDef.isOptional ? '?' : ''
  switch (prop.type) {
    case 'SIMPLE':
    case 'SIMPLE_CHOICE':
    case 'IMAGE':
    case 'GROUPED_INSTANCE_SWAP':
      return `${prop.key}${optional}`
    case 'ARRAY':
      if (options.enableTsArrays)
        return `${prop.key}${optional}`
      return `${prop.nonArrayKey}${optional}`
    case 'DERIVED_BOOLEAN':
      return ''
    default:
      throwTypeError(prop)
  }
}

/**
 * Gets the TypeScript type representation for a prop definition.
 * ($$N2)
 */
export function getTsPropType(
  propDef: any,
  options: { enableTsArrays?: boolean },
): string {
  switch (propDef.devFriendlyProp.type) {
    case 'DERIVED_BOOLEAN':
      return ''
    case 'SIMPLE':
    case 'SIMPLE_CHOICE':
    case 'IMAGE':
    case 'GROUPED_INSTANCE_SWAP':
      return propDef.typeRepr.typeName
    case 'ARRAY':
      if (options.enableTsArrays) {
        if (propDef.typeRepr.typeName.startsWith('{'))
          return `(${propDef.typeRepr.typeName})[]`
        return `${propDef.typeRepr.typeName}[]`
      }
      return propDef.typeRepr.typeName
    default:
      throwTypeError(propDef.devFriendlyProp)
  }
}

/**
 * Filters out duplicate prop definitions by their TypeScript key.
 * ($$P14)
 */
export function filterUniquePropDefs(
  propDefs: any[],
  options: { enableTsArrays?: boolean },
): any[] {
  const result: any[] = []
  const seen = new Set<string>()
  for (const def of propDefs) {
    const key = getTsPropKey(def, false, options)
    if (key && !seen.has(key)) {
      result.push(def)
      seen.add(key)
    }
  }
  return result
}

/**
 * Capitalizes the first letter of a string.
 * ($$O13)
 */
export function capitalizeFirstLetter(str: string): string {
  return str.length && str[0] ? str[0].toUpperCase() + str.slice(1) : str
}

// Exported variables and functions with refactored names
export const FE = COMPONENT_PREFIX
export const GN = getTsPropKey
export const Hd = getTsPropType
export const Ho = comparePropDefs
export const Ii = IMAGE_NAME_FORMAT
export const L_ = getComponentPropsTypeName
export const O7 = getInstanceDefaultValue
export const QJ = isOptionalProp
export const R0 = getUniqueUsageProp
export const Vv = buildComponentJSXName
export const WG = getComponentJSXName
export const _e = groupInstanceNodesBySymbol
export const _j = getNestedImageNodes
export const bi = capitalizeFirstLetter
export const ep = filterUniquePropDefs
export const fy = getUsagePropName
export const go = groupNodesByPropName
export const hM = groupByCommonPrefixSorted
export const j3 = cleanComponentPropNameForUsage
export const rB = extractModifiersFromProp
export const wn = getInstanceIdsForDef
export const xb = areAllDefsSameTypeAndDefault

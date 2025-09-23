import { getSingletonSceneGraph } from '../905/700578'

/**
 * Finds all scene graph nodes matching the given criteria GUIDs.
 * Original function: $$r0
 */
export function findNodesByCriteriaGUIDs(guid: string, criteria: any): any[] {
  if (!guid)
    return []
  const sceneGraph = getSingletonSceneGraph()
  const node = sceneGraph.get(guid)
  if (!node)
    return []
  const matchedGUIDs = node.findAllWithCriteriaGUIDs(criteria)
  const result: any[] = []
  for (const matchedGuid of matchedGUIDs) {
    const matchedNode = sceneGraph.get(matchedGuid)
    if (matchedNode)
      result.push(matchedNode)
  }
  return result
}

/**
 * Finds all INSTANCE nodes for a given node GUID.
 * Original function: $$a5
 */
export function findInstanceNodesByGuid(guid: string): any[] {
  const node = getSingletonSceneGraph().get(guid)
  return node
    ? findNodesByCriteriaGUIDs(node.guid, {
        types: ['INSTANCE'],
        recurseIfMatch: false,
      })
    : []
}

/**
 * Gets the parent GUID or GUID of a symbol node, depending on its state.
 * Original function: $$s7
 */
export function getSymbolParentGuid(node: any): string | null {
  if (!node.symbolId)
    return null
  const symbolNode = getSingletonSceneGraph().get(node.symbolId)
  return symbolNode ? (symbolNode.isState ? symbolNode.parentGuid : symbolNode.guid) : null
}

/**
 * Returns the shared version string for a node.
 * Original function: $$o4
 */
export function getSharedVersion(node: any): string {
  return (node.isStateGroup ? node.sharedStateGroupVersion : node.sharedSymbolVersion) ?? ''
}

/**
 * Converts a string to TitleCase, optionally prefixing with a given string.
 * Original function: toTitleCase
 */
export function toTitleCase(str: string, prefix?: string): string {
  if (prefix && str.toLowerCase().startsWith(prefix.toLowerCase())) {
    str = str.slice(prefix.length)
  }
  const words = str.replace(/[^0-9a-z]/gi, ' ').split(' ').filter(Boolean)
  const firstWord = words[0]
  str = firstWord && words.length === 1
    ? firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
    : words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('')
  return prefix ? `${prefix}${str}` : str
}

/**
 * Converts a string to camelCase.
 * Original function: toCamelCase
 */
export function toCamelCase(str: string): string {
  if (!str)
    return str
  const words = str.replace(/[^0-9a-z]/gi, ' ').split(' ').filter(Boolean)
  const firstWord = words[0]
  return firstWord && words.length === 1
    ? firstWord.charAt(0).toLowerCase() + firstWord.slice(1)
    : words.map((word, idx) => {
        const lower = word.toLowerCase()
        return idx === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1)
      }).join('')
}

/**
 * Moves leading numbers in a string to the end.
 * Original function: moveNumbersToEnd
 */
export function moveNumbersToEnd(str: string): string {
  const match = str.match(/^\d+/)
  let result = str
  if (match && match.length > 0) {
    const num = match[0]
    result = result.replace(num, '') + num
  }
  return result
}

/**
 * Finds all unique SYMBOL or INSTANCE nodes for a given GUID, including their symbol nodes.
 * Original function: $$u2
 */
export function findUniqueSymbolOrInstanceNodes(guid: string): any[] {
  if (!guid)
    return []
  const sceneGraph = getSingletonSceneGraph()
  const node = sceneGraph.get(guid)
  if (!node)
    return []
  const candidates = findNodesByCriteriaGUIDs(node.guid, {
    types: ['COMPONENT', 'INSTANCE'],
  })
  const seen = new Set<string>()
  const result: any[] = []
  for (const candidate of candidates) {
    if (!seen.has(candidate.guid)) {
      if (candidate.type === 'SYMBOL') {
        result.push(candidate)
        seen.add(candidate.guid)
        continue
      }
      if (candidate.type === 'INSTANCE' && !candidate.isInstanceSublayer && candidate.symbolId) {
        const symbolNode = sceneGraph.get(candidate.symbolId)
        if (symbolNode && !seen.has(symbolNode.guid)) {
          result.push(symbolNode)
          seen.add(symbolNode.guid)
        }
      }
    }
  }
  return result
}

// Exported variables with refactored names
export const Au = findNodesByCriteriaGUIDs
export const Cb = toCamelCase
export const K = findUniqueSymbolOrInstanceNodes
export const Sn = toTitleCase
export const Uk = getSharedVersion
export const k4 = findInstanceNodesByGuid
export const wP = moveNumbersToEnd
export const yu = getSymbolParentGuid

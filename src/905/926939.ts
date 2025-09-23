import { findUniqueSymbolOrInstanceNodes, toTitleCase } from '../905/327738'
import { getSingletonSceneGraph } from '../905/700578'
// Constants for group names and labels (original: $$a1, $$o0, $$l7)
export const ICONS_GROUP = 'Icons'
export const UNKNOWN_LABEL = 'Unknown'
export const BUILDING_BLOCKS_LABEL = 'Building Blocks'

// List of group names (original: s)
export const GROUP_NAMES = [ICONS_GROUP]

/**
 * Normalize and compare two strings for equality, ignoring non-alphanumeric characters and case.
 * (original: d)
 */
export function areNamesEqual(nameA: string, nameB: string): boolean {
  const normalize = (str: string) => str.replace(/[^0-9a-z]/gi, '').toLowerCase()
  return normalize(nameA) === normalize(nameB)
}

/**
 * Checks if a given name is part of a group, splitting by ' / ' and comparing each part.
 * (original: isPartOfGroup)
 */
export function isPartOfGroup(name: string, group: string): boolean {
  for (const part of name.split(' / ')) {
    if (areNamesEqual(part, group)) {
      return true
    }
  }
  return false
}

/**
 * Returns the group name for a component node based on its group path.
 * (original: $$u6)
 */
export function getComponentGroupName(node: { componentGroupPath: string }): string | null {
  return findGroupName(node.componentGroupPath)
}

/**
 * Finds the first matching group name from GROUP_NAMES in the given path.
 * (original: $$p5)
 */
export function findGroupName(path: string): string | null {
  for (const group of GROUP_NAMES) {
    if (isPartOfGroup(path, group)) {
      return group
    }
  }
  return null
}

/**
 * Retrieves the parent path of a node, including only CANVAS and SECTION nodes.
 * (original: getNodeParentPath)
 */
export function getNodeParentPath(nodeGuid: string): string {
  const node = getSingletonSceneGraph().get(nodeGuid)
  if (!node)
    return ''
  const parentNames: string[] = []
  let parent = node.parentNode
  while (
    parent
    && ((parent.type === 'CANVAS' || parent.type === 'SECTION') && parentNames.push(parent.name),
    parent.type !== 'CANVAS' && parent.type !== 'DOCUMENT')
  ) {
    parent = parent.parentNode
  }
  parentNames.reverse()
  return parentNames.join(' / ')
}

/**
 * Returns a custom group name for a given string, singularizing if it ends with 's'.
 * (original: $$h4)
 */
export function getCustomGroupName(name: string): string {
  let singular = name.endsWith('s') ? name.slice(0, -1) : name
  return `Custom${toTitleCase(singular)}`
}

/**
 * Finds a node GUID by searching for a parent node with a matching name, then a child node with a matching name.
 * (original: $$g2)
 */
export function findNodeGuidByNames(parentName: string, node: any, childName: string): string | null {
  // Find parent node by name
  function findParentByName(name: string, node: any): any {
    let parent = node.parentNode
    while (parent && !areNamesEqual(parent.name, name)) {
      parent = parent.parentNode
    }
    return parent
  }
  const parentNode = findParentByName(parentName, node)
  if (!parentNode)
    return null
  for (const child of findUniqueSymbolOrInstanceNodes(parentNode.guid ?? '')) {
    if (areNamesEqual(child.name, childName)) {
      return child.guid
    }
  }
  return null
}

// Exported constants (refactored names)
export const $x = UNKNOWN_LABEL
export const C = ICONS_GROUP
export const Lq = findNodeGuidByNames
export const Se = isPartOfGroup
export const VV = getCustomGroupName
export const iR = findGroupName
export const vR = getComponentGroupName
export const vh = BUILDING_BLOCKS_LABEL
export const yu = getNodeParentPath

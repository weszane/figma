// /Users/allen/sigma-main/src/figma_app/387100.ts

import { isSpecialNodeType } from '../905/266460'
import { getFeatureFlags } from '../905/601108'
import { getSingletonSceneGraph } from '../905/700578'

// Define types for better clarity

type Node = any // Placeholder; define based on actual Node interface
type TraversalCallback = (node: Node) => 'stop' | 'skip' | void
type Guid = string

/**
 * Traverses the children of a node recursively, applying a callback.
 * Original: $$s20
 * @param node - The starting node
 * @param callback - Function to call on each node
 * @returns 'stop' or 'skip' if traversal should halt
 */
export function traverseChildren(node: Node, callback: TraversalCallback): 'stop' | 'skip' | void {
  const result = callback(node)
  if (result === 'stop' || result === 'skip') {
    return result
  }
  for (const child of node.childrenNodes) {
    if (traverseChildren(child, callback) === 'stop') {
      return 'stop'
    }
  }
}

/**
 * Gets the parent node of a given guid.
 * Original: $$o9
 * @param sceneGraph - The scene graph
 * @param guid - The node's guid
 * @returns The parent node or null
 */
export function getParent(sceneGraph: any, guid: Guid): Node | null {
  return sceneGraph.get(guid)?.parentNode || null
}

/**
 * Traverses ancestors of a node, applying a callback until stop.
 * Original: $$l11
 * @param sceneGraph - The scene graph
 * @param guid - The starting guid
 * @param callback - Function to call on each ancestor
 */
export function traverseAncestors(sceneGraph: any, guid: Guid, callback: TraversalCallback): void {
  let current = getParent(sceneGraph, guid)
  while (current) {
    if (current.type === 'CANVAS' || current.type === 'DOCUMENT') {
      return
    }
    if (callback(current) === 'stop') {
      break
    }
    current = current.parentNode
  }
}

/**
 * Traverses up and down from a node, applying a callback.
 * Original: $$d19
 * @param sceneGraph - The scene graph
 * @param guid - The starting guid
 * @param callback - Function to call on nodes
 */
export function traverseUpAndDown(sceneGraph: any, guid: Guid, callback: TraversalCallback): void {
  const node = sceneGraph.get(guid)
  if (node && callback(node) !== 'stop') {
    traverseAncestors(sceneGraph, guid, callback)
  }
}

/**
 * Gets all ancestors of a node.
 * Original: $$c0
 * @param sceneGraph - The scene graph
 * @param guid - The starting guid
 * @returns Array of ancestor nodes
 */
export function getAncestors(sceneGraph: any, guid: Guid): Node[] {
  const ancestors: Node[] = []
  traverseAncestors(sceneGraph, guid, (node) => {
    ancestors.push(node)
  })
  return ancestors
}

/**
 * Checks if one guid is a descendant of another.
 * Original: $$u25
 * @param sceneGraph - The scene graph
 * @param ancestorGuid - Potential ancestor guid
 * @param descendantGuid - Potential descendant guid
 * @returns True if descendant
 */
export function isDescendant(sceneGraph: any, ancestorGuid: Guid, descendantGuid: Guid): boolean {
  if (ancestorGuid === descendantGuid) {
    return true
  }
  let current = getParent(sceneGraph, descendantGuid)
  while (current) {
    if (current.guid === ancestorGuid) {
      return true
    }
    current = current.parentNode
  }
  return false
}

/**
 * Gets the depth of a node from canvas or document.
 * Original: $$p2
 * @param sceneGraph - The scene graph
 * @param guid - The node's guid
 * @returns Depth level
 */
export function getDepth(sceneGraph: any, guid: Guid): number {
  let depth = 0
  let current = sceneGraph.get(guid)
  while (current && current.type !== 'CANVAS' && current.type !== 'DOCUMENT') {
    depth++
    current = getParent(sceneGraph, current.guid)
  }
  return depth
}

/**
 * Maps guids to their canvas guids, filtering internal nodes.
 * Original: $$_18
 * @param sceneGraph - The scene graph
 * @param guids - Array of guids
 * @returns Map of guid to canvas guid
 */
export function getCanvasForNodes(sceneGraph: any, guids: Guid[]): Record<Guid, Guid | null> {
  return [...new Set(guids)].reduce((acc, guid) => {
    let canvasGuid = findAncestorOfType(sceneGraph, guid, 'CANVAS')
    if (canvasGuid && getSingletonSceneGraph().get(canvasGuid)?.isInternalOnlyNode) {
      canvasGuid = null
    }
    acc[guid] = canvasGuid
    return acc
  }, {} as Record<Guid, Guid | null>)
}

/**
 * Maps guids to their responsive set guids.
 * Original: $$h4
 * @param sceneGraph - The scene graph
 * @param guids - Array of guids
 * @returns Map of guid to responsive set guid
 */
export function getResponsiveSetForNodes(sceneGraph: any, guids: Guid[]): Record<Guid, Guid | null> {
  return [...new Set(guids)].reduce((acc, guid) => {
    acc[guid] = findAncestorOfType(sceneGraph, guid, 'RESPONSIVE_SET')
    return acc
  }, {} as Record<Guid, Guid | null>)
}

/**
 * Finds the ancestor of a specific type.
 * Helper for getCanvasForNodes and getResponsiveSetForNodes
 * @param sceneGraph - The scene graph
 * @param guid - Starting guid
 * @param type - Target type
 * @returns Guid of ancestor or null
 */
function findAncestorOfType(sceneGraph: any, guid: Guid, type: string): Guid | null {
  if (!guid)
    return null
  let node = sceneGraph.get(guid)
  if (!node)
    return null
  let current = node
  while (current.type !== type) {
    const parent = current.parentNode
    if (!parent)
      break
    current = parent
  }
  return current.guid
}

/**
 * Checks if a node type is a container.
 * Original: $$g22
 * @param type - Node type
 * @returns True if container
 */
export function isContainerType(type: string): boolean {
  if (type === 'CODE_INSTANCE') {
    return !!getFeatureFlags().bake_direct_manipulation_on_canvas
  }
  const containerTypes = ['DOCUMENT', 'CANVAS', 'GROUP', 'FRAME', 'SYMBOL', 'INSTANCE', 'BOOLEAN_OPERATION', 'STICKY', 'SHAPE_WITH_TEXT', 'CONNECTOR', 'CODE_BLOCK', 'TABLE', 'TABLE_CELL', 'VARIABLE_SET', 'MODULE', 'SLIDE', 'SLIDE_ROW', 'SLIDE_GRID', 'RESPONSIVE_SET', 'WEBPAGE', 'TRANSFORM']
  return containerTypes.includes(type) && !isSpecialType(type)
}

/**
 * Checks if a node type is a shape.
 * Original: $$f23
 * @param type - Node type
 * @returns True if shape
 */
export function isShapeType(type: string): boolean {
  const shapeTypes = ['VECTOR', 'STAR', 'LINE', 'ELLIPSE', 'RECTANGLE', 'REGULAR_POLYGON', 'ROUNDED_RECTANGLE']
  return shapeTypes.includes(type)
}

/**
 * Checks if a node type is special.
 * Original: $$E7
 * @param type - Node type
 * @returns True if special
 */
export function isSpecialType(type: string): boolean {
  const specialTypes = ['STICKY', 'SHAPE_WITH_TEXT', 'CONNECTOR', 'CODE_BLOCK', 'MEDIA', 'SECTION_OVERLAY', 'TABLE']
  return specialTypes.includes(type)
}

/**
 * Checks if a node is a stamp.
 * Original: $$y3
 * @param node - The node
 * @returns True if stamp
 */
export function isStamp(node: Node): boolean {
  return node.type === 'STAMP' || (node.type === 'ROUNDED_RECTANGLE' && node.name?.includes('FigJam Stamp Icon'))
}

/**
 * Checks if a node is visible and special under a parent.
 * Helper function
 * @param node - The node
 * @param parent - The parent node
 * @returns True if valid
 */
function isVisibleSpecialNode(node: Node, parent: Node): boolean {
  return parent && parent.type === 'CANVAS' && parent.visible && isSpecialNodeType(node.type) && node.visible
}

/**
 * Gets visible special children of a node.
 * Original: $$T16
 * @param sceneGraph - The scene graph
 * @param guid - Parent guid
 * @returns Array of visible special children
 */
export function getVisibleSpecialChildren(sceneGraph: any, guid: Guid): Node[] {
  const children: Node[] = []
  const parent = sceneGraph.get(guid)
  if (!parent)
    return children
  for (const childGuid of parent.uiOrderedChildren) {
    const child = sceneGraph.get(childGuid)
    if (isVisibleSpecialNode(child, parent)) {
      children.push(child)
    }
  }
  return children
}

/**
 * Gets responsive children of a node.
 * Original: $$I8
 * @param sceneGraph - The scene graph
 * @param guid - Parent guid
 * @returns Array of responsive children
 */
export function getResponsiveChildren(sceneGraph: any, guid: Guid): Node[] {
  const children: Node[] = []
  const parent = sceneGraph.get(guid)
  if (!parent)
    return []
  for (const childGuid of parent.uiOrderedChildren) {
    const child = sceneGraph.get(childGuid)
    if (child && child.isResponsiveSetOrWebpage && isVisibleSpecialNode(child, parent)) {
      children.push(child)
    }
  }
  return children
}

/**
 * Finds the first visible special node from a list.
 * Original: $$S5
 * @param sceneGraph - The scene graph
 * @param guids - Array of guids
 * @returns Object with tlfId and index
 */
export function findFirstVisibleSpecialNode(sceneGraph: any, guids: Guid[]): { tlfId: Guid | null, index: number | null } {
  let tlfId: Guid | null = null
  let index: number | null = null
  for (let i = 0; i < guids.length; i++) {
    const node = sceneGraph.get(guids[i])
    const parent = getParent(sceneGraph, guids[i])
    if (node && parent && isVisibleSpecialNode(node, parent)) {
      tlfId = guids[i]
      index = i
      break
    }
  }
  return { tlfId, index }
}

/**
 * Sorts an array by a key function.
 * Original: $$v14
 * @param array - Array to sort
 * @param keyFn - Function to get sort key
 */
export function sortBy<T>(array: T[], keyFn: (item: T) => any): void {
  array.sort((a, b) => {
    const keyA = keyFn(a)
    const keyB = keyFn(b)
    return keyA < keyB ? -1 : keyA > keyB ? 1 : 0
  })
}

/**
 * Finds a scrollable or visible parent.
 * Original: $$A10
 * @param sceneGraph - The scene graph
 * @param guid - Starting guid
 * @returns The found node or null
 */
export function findScrollableOrVisibleParent(sceneGraph: any, guid: Guid): Node | null {
  let result: Node | null = null
  traverseAncestors(sceneGraph, guid, (node) => {
    if (!result) {
      if (node.scrollDirection !== 'NONE') {
        result = node
        return 'stop'
      }
      const parent = node.parentNode
      if (parent && isVisibleSpecialNode(node, parent)) {
        result = node
        return 'stop'
      }
    }
  })
  return result
}

/**
 * Finds a visible child.
 * Original: $$x1
 * @param sceneGraph - The scene graph
 * @param guid - Starting guid
 * @returns The found node or null
 */
export function findVisibleChild(sceneGraph: any, guid: Guid): Node | null {
  let result: Node | null = null
  traverseUpAndDown(sceneGraph, guid, (node) => {
    const parent = node.parentNode
    if (parent && isVisibleSpecialNode(node, parent)) {
      result = node
    }
  })
  return result
}

/**
 * Finds the stack container ancestor.
 * Original: $$N6
 * @param node - Starting node
 * @returns The stack container or null
 */
export function findStackContainer(node: Node): Node | null {
  let result: Node | null = null
  let current = node.parentNode
  while (current) {
    if (current.isStackOrFixedSizeContainer) {
      result = current
      break
    }
    current = current.parentNode
  }
  return result
}

/**
 * Finds a visible section child.
 * Original: $$C21
 * @param sceneGraph - The scene graph
 * @param guid - Starting guid
 * @returns The found node or null
 */
export function findVisibleSectionChild(sceneGraph: any, guid: Guid): Node | null {
  let result: Node | null = null
  traverseUpAndDown(sceneGraph, guid, (node) => {
    const parent = node.parentNode
    if (parent && (parent.type === 'CANVAS' || parent.type === 'SECTION') && parent.visible && isSpecialNodeType(node.type) && node.visible && node.type !== 'SECTION') {
      result = node
    }
  })
  return result
}

/**
 * Finds a node matching a predicate.
 * Original: $$w17
 * @param predicate - Function to test nodes
 * @param page - The page or current page
 * @param startNode - Optional starting node
 * @returns The found node or null
 */
export function findNodeMatching(predicate: (node: Node, page: any) => boolean, page: any, startNode?: Node): Node | null {
  let result: Node | null = null
  if (!startNode) {
    const currentPage = page.getCurrentPage()
    if (!currentPage)
      return null
    startNode = currentPage
  }
  traverseChildren(startNode, (node) => {
    if (predicate(node, page)) {
      result = node
      return 'stop'
    }
  })
  return result
}

/**
 * Finds the latest node matching a predicate.
 * Original: $$O13
 * @param predicate - Function to test nodes
 * @param page - The page
 * @returns The latest node or null
 */
export function findLatestNodeMatching(predicate: (node: Node, page: any) => boolean, page: any): Node | null {
  let result: Node | null = null
  const currentPage = page.getCurrentPage()
  if (currentPage) {
    traverseChildren(currentPage, (node) => {
      if (predicate(node, page)) {
        if (!result) {
          result = node
        }
        else {
          const [nodeMajor, nodeMinor] = node.guid.split(':').map(Number)
          const [resMajor, resMinor] = result.guid.split(':').map(Number)
          result = nodeMajor === resMajor ? (nodeMinor > resMinor ? node : result) : (nodeMajor > resMajor ? node : result)
        }
      }
    })
  }
  return result
}

/**
 * Gets all node guids in the scene graph.
 * Original: $$R12
 * @returns Array of all guids
 */
export function getAllNodeGuids(): Guid[] {
  const sceneGraph = getSingletonSceneGraph()
  const guids: Guid[] = []
  traverseChildren(sceneGraph.getRoot(), (node) => {
    guids.push(node.guid)
  })
  return guids
}

/**
 * Gets visible children recursively.
 * Original: ZQ
 * @param sceneGraph - The scene graph
 * @param guid - Starting guid
 * @param result - Accumulator array
 * @returns Array of visible children
 */
export function getVisibleChildrenRecursive(sceneGraph: any, guid: Guid, result: Node[] = []): Node[] {
  const node = sceneGraph.get(guid)
  if (!node || !node.childrenNodes)
    return result
  for (const child of node.childrenNodes) {
    const parent = child.parentNode
    if (parent && (parent.type === 'CANVAS' || parent.type === 'SECTION') && parent.visible && child.visible) {
      if (child.type === 'SECTION') {
        getVisibleChildrenRecursive(sceneGraph, child.guid, result)
      }
      else {
        result.push(child)
      }
    }
  }
  return result
}

/**
 * Gets visible special children recursively.
 * Original: qT
 * @param sceneGraph - The scene graph
 * @param guid - Starting guid
 * @param result - Accumulator array
 * @returns Array of visible special children
 */
export function getVisibleSpecialChildrenRecursive(sceneGraph: any, guid: Guid, result: Node[] = []): Node[] {
  const node = sceneGraph.get(guid)
  if (!node || !node.childrenNodes)
    return result
  for (const child of node.childrenNodes) {
    const parent = child.parentNode
    if (parent && (parent.type === 'CANVAS' || parent.type === 'SECTION') && parent.visible && isSpecialNodeType(child.type) && child.visible) {
      if (child.type === 'SECTION') {
        getVisibleSpecialChildrenRecursive(sceneGraph, child.guid, result)
      }
      else {
        result.push(child)
      }
    }
  }
  return result
}

// Updated exports with meaningful names
export const DS = getAncestors
export const E6 = findVisibleChild
export const F0 = getDepth
export const GI = isStamp
export const HL = getResponsiveSetForNodes
export const H_ = findFirstVisibleSpecialNode
export const Ji = findStackContainer
export const MT = isSpecialType
export const O5 = getResponsiveChildren
export const PA = getParent
export const Ql = findScrollableOrVisibleParent
export const Si = traverseAncestors
export const UP = getAllNodeGuids
export const WY = findLatestNodeMatching
export const X4 = sortBy
export const bV = getVisibleSpecialChildren
export const cy = findNodeMatching
export const dA = getCanvasForNodes
export const hD = traverseUpAndDown
export const hV = traverseChildren
export const kh = findVisibleSectionChild
export const nO = isContainerType
export const oY = isShapeType
export const rV = isDescendant

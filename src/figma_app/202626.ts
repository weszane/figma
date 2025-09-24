// Original file: /Users/allen/sigma-main/src/figma_app/202626.ts
// Refactored to improve readability, maintainability, and type safety.
// Grouped related functionality: node finding utilities, specific element finders, and navigation helpers.
// Added TypeScript types, JSDoc comments with original names, and simplified logic with early returns.
// Renamed functions and exports to meaningful names while preserving original functionality.

import type { TSSceneGraph } from './518682'
import { computeFullscreenViewportForNode } from '../figma_app/62612'
import { getParent, traverseChildren } from '../figma_app/387100'
import { fullscreenValue } from '../figma_app/455680'
import { addToSelection, clearSelection } from '../figma_app/741237'

// Define types for better type safety
interface Node {
  type: string
  name: string
  guid: string
  parentNode?: Node
}

interface NavigationOptions {
  navigate: (viewport: any) => Promise<void>
  guidToFocus?: string
  guidToSelect: string
}

// Original: $$l4
enum NavigationDirection {
  FORWARD = 0,
  BACKWARD = 1,
}

// Original: $$d2
export const expTootipsSymbol = 'exp_tooltips_plus_onboarding'

// Original: c
const PRODUCT_PAGE_ANCESTOR = 'product page'

/**
 * Checks if a string starts with any of the given prefixes (case-insensitive).
 * Original: u
 */
function startsWithAny(str: string, prefixes: string[]): boolean {
  return prefixes.some(prefix => str.toLowerCase().startsWith(prefix.toLowerCase()))
}

/**
 * Finds the first node of a specific type in the scene graph, starting from the current page.
 * Original: $$p3
 */
export function findFirstNodeOfType(sceneGraph: TSSceneGraph, nodeType: string, startNode?: Node): Node | undefined {
  if (startNode?.type === nodeType)
    return startNode
  const currentPage = getCurrentPage(sceneGraph)
  if (!currentPage)
    return undefined
  let foundNode: Node | undefined
  traverseChildren(currentPage, (node) => {
    if (node.type === nodeType) {
      foundNode = node
      return 'stop'
    }
  })
  return foundNode
}

/**
 * Finds a node by type, preferred name, backup names, and optional ancestor name.
 * Original: $$_5
 */
export function findNodeByCriteria({
  nodeType,
  sceneGraph,
  preferredName,
  backupNames,
  ancestorName,
}: {
  nodeType: string
  sceneGraph: TSSceneGraph
  preferredName: string
  backupNames?: string[]
  ancestorName?: string
}): Node | undefined {
  const currentPage = getCurrentPage(sceneGraph)
  if (!currentPage)
    return undefined
  let preferredMatch: Node | undefined
  const backupMatches: Node[] = []
  traverseChildren(currentPage, (node) => {
    if (node.type === nodeType && startsWithAny(node.name, [preferredName])) {
      if (!ancestorName || hasAncestorWithName(node, ancestorName)) {
        preferredMatch = node
        return 'stop'
      }
    }
    if (backupNames && node.type === nodeType && startsWithAny(node.name, backupNames)) {
      backupMatches.push(node)
    }
  })
  return preferredMatch || (backupMatches.length > 0 ? backupMatches[0] : undefined)
}

/**
 * Checks if a node has an ancestor with a name starting with the given string (case-insensitive).
 * Helper for findNodeByCriteria.
 */
function hasAncestorWithName(node: Node, ancestorName: string): boolean {
  let parent = node.parentNode
  while (parent && !parent.name.toLowerCase().startsWith(ancestorName.toLowerCase())) {
    parent = parent.parentNode
  }
  return !!parent?.name.toLowerCase().startsWith(ancestorName.toLowerCase())
}

/**
 * Gets the current page from the scene graph, handling errors gracefully.
 * Original: $$h0
 */
export function getCurrentPage(sceneGraph: TSSceneGraph): Node | null {
  try {
    return sceneGraph.getCurrentPage()
  }
  catch (error) {
    if ((error as Error).message !== 'not implemented')
      throw error
    return null
  }
}

/**
 * Finds the product title text node, falling back to any TEXT node.
 * Original: $$m8
 */
export function findProductTitleText(sceneGraph: TSSceneGraph): Node | undefined {
  return findNodeByCriteria({
    nodeType: 'TEXT',
    sceneGraph,
    preferredName: 'heirloom tomato',
    backupNames: ['organic ginger', 'sweet onion', 'order summary', 'we’re farmers', 'grown in'],
    ancestorName: PRODUCT_PAGE_ANCESTOR,
  }) || findFirstNodeOfType(sceneGraph, 'TEXT')
}

/**
 * Finds the product frame, based on the product title text's parent or falling back to any FRAME.
 * Original: $$g1
 */
export function findProductFrame(sceneGraph: TSSceneGraph): Node | undefined {
  const titleText = findNodeByCriteria({
    nodeType: 'TEXT',
    sceneGraph,
    preferredName: 'heirloom tomato',
    backupNames: ['organic ginger', 'sweet onion', 'order summary', 'we’re farmers', 'grown in'],
    ancestorName: PRODUCT_PAGE_ANCESTOR,
  })
  if (titleText && titleText.type === 'TEXT') {
    const parent = getParent(sceneGraph, titleText.guid)
    if (parent?.type === 'FRAME')
      return parent
  }
  return findFirstNodeOfType(sceneGraph, 'FRAME')
}

/**
 * Finds the landing page title text node, falling back to any TEXT node.
 * Original: $$f6
 */
export function findLandingPageTitle(sceneGraph: TSSceneGraph): Node | undefined {
  return findNodeByCriteria({
    nodeType: 'TEXT',
    sceneGraph,
    preferredName: 'landing page title',
    backupNames: ['banner title', 'playlist section title'],
  }) || findFirstNodeOfType(sceneGraph, 'TEXT')
}

/**
 * Finds the hero image frame, falling back to any FRAME.
 * Original: $$E7
 */
export function findHeroImageFrame(sceneGraph: TSSceneGraph): Node | undefined {
  return findNodeByCriteria({
    nodeType: 'FRAME',
    sceneGraph,
    preferredName: 'hero image',
    backupNames: ['banner', 'playlist cover image'],
  }) || findFirstNodeOfType(sceneGraph, 'FRAME')
}

/**
 * Navigates to a viewport and selects a node, committing fullscreen.
 * Original: $$y9
 */
export async function navigateAndSelect({ navigate, guidToFocus, guidToSelect }: NavigationOptions): Promise<void> {
  clearSelection()
  await navigate(computeFullscreenViewportForNode({
    nodeId: guidToFocus || guidToSelect,
    alwaysPan: false,
    minSizePx: guidToFocus ? 200 : 32,
  }))
  addToSelection([guidToSelect])
  fullscreenValue.commit()
}

// Exports with refactored names
export const Qf = getCurrentPage
export const aD = findProductFrame
export const d4 = expTootipsSymbol
export const eN = findFirstNodeOfType
export const en = NavigationDirection
export const gn = findNodeByCriteria
export const l7 = findLandingPageTitle
export const nt = findHeroImageFrame
export const wy = findProductTitleText
export const zU = navigateAndSelect

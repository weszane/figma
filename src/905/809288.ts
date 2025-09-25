import type { TreeNode } from './6512'

/**
 * Converts input to an array.
 * @param input - The input to convert.
 * @returns The input as an array.
 * @original s
 */
function toArray<T>(input: T | T[]): T[] {
  return Array.isArray(input) ? input : [input]
}

/**
 * Gets children or parent nodes based on direction.
 * @param node - The node to get relatives from.
 * @param direction - 'parent' or other for children.
 * @returns Array of relatives.
 * @original o
 */
function getRelatives(node: TreeNode, direction: 'parent' | string): TreeNode[] {
  return direction === 'parent' ? [node.parent!].filter(Boolean) : node.children ?? []
}

/**
 * Traverses tree nodes with customizable options.
 * @param nodes - Starting nodes.
 * @param direction - Traversal direction.
 * @param visit - Function to call on each node.
 * @param options - Traversal options.
 * @original $$l4
 */
export function traverseTree(
  nodes: TreeNode | TreeNode[],
  direction: 'parent' | string,
  visit: (node: TreeNode) => void,
  {
    includeSelf = false,
    shouldSkipAfter,
    shouldBreakAfter,
  }: {
    includeSelf?: boolean
    shouldSkipAfter?: (node: TreeNode) => boolean
    shouldBreakAfter?: (node: TreeNode) => boolean
  } = {},
): void {
  let startNodes = toArray(nodes)
  let stack = includeSelf ? [...startNodes] : startNodes.flatMap(node => getRelatives(node, direction))
  while (true) {
    const node = stack.pop()
    if (!node)
      return
    visit(node)
    if (shouldBreakAfter?.(node))
      return
    if (!shouldSkipAfter?.(node)) {
      for (const child of getRelatives(node, direction)) stack.push(child)
    }
  }
}

/**
 * Collects visited nodes into an array.
 * @param nodes - Starting nodes.
 * @param direction - Traversal direction.
 * @param mapFn - Function to map each node.
 * @param options - Traversal options.
 * @returns Array of mapped nodes.
 * @original $$d2
 */
export function collectTree<T>(
  nodes: TreeNode | TreeNode[],
  direction: 'parent' | string,
  mapFn: (node: TreeNode) => T,
  options: Parameters<typeof traverseTree>[3] = {},
): T[] {
  const result: T[] = []
  traverseTree(nodes, direction, node => result.push(mapFn(node)), options)
  return result
}

/**
 * Finds the first node matching a predicate.
 * @param nodes - Starting nodes.
 * @param direction - Traversal direction.
 * @param predicate - Predicate function.
 * @param options - Traversal options.
 * @returns The first matching node or undefined.
 * @original $$c0
 */
export function findInTree(
  nodes: TreeNode | TreeNode[],
  direction: 'parent' | string,
  predicate: (node: TreeNode) => boolean,
  {
    includeSelf,
    shouldSkipAfter,
    shouldBreakAfter,
  }: {
    includeSelf?: boolean
    shouldSkipAfter?: (node: TreeNode) => boolean
    shouldBreakAfter?: (node: TreeNode) => boolean
  } = {},
): TreeNode | undefined {
  let found: TreeNode | undefined
  traverseTree(
    nodes,
    direction,
    (node) => {
      if (predicate(node))
        found = node
    },
    {
      includeSelf,
      shouldSkipAfter,
      shouldBreakAfter: node => found != null || shouldBreakAfter?.(node) || false,
    },
  )
  return found
}

/**
 * Collects all nodes matching a predicate.
 * @param nodes - Starting nodes.
 * @param direction - Traversal direction.
 * @param predicate - Predicate function.
 * @param options - Traversal options.
 * @returns Array of matching nodes.
 * @original $$u5
 */
export function filterTree(
  nodes: TreeNode | TreeNode[],
  direction: 'parent' | string,
  predicate: (node: TreeNode) => boolean,
  options: Parameters<typeof traverseTree>[3] = {},
): TreeNode[] {
  const result: TreeNode[] = []
  traverseTree(nodes, direction, (node) => {
    if (predicate(node))
      result.push(node)
  }, options)
  return result
}

/**
 * Counts nodes matching a predicate.
 * @param nodes - Starting nodes.
 * @param direction - Traversal direction.
 * @param predicate - Predicate function.
 * @param options - Traversal options.
 * @returns Number of matching nodes.
 * @original $$p3
 */
export function countTree(
  nodes: TreeNode | TreeNode[],
  direction: 'parent' | string,
  predicate: (node: TreeNode) => boolean = () => true,
  options: Parameters<typeof traverseTree>[3] = {},
): number {
  let count = 0
  traverseTree(nodes, direction, (node) => {
    if (predicate(node))
      count++
  }, options)
  return count
}

/**
 * Checks if any node matches a predicate.
 * @param nodes - Starting nodes.
 * @param direction - Traversal direction.
 * @param predicate - Predicate function.
 * @param options - Traversal options.
 * @returns True if any node matches.
 * @original $$m6
 */
export function someInTree(
  nodes: TreeNode | TreeNode[],
  direction: 'parent' | string,
  predicate: (node: TreeNode) => boolean,
  options: Parameters<typeof traverseTree>[3] = {},
): boolean {
  return findInTree(toArray(nodes), direction, predicate, options) != null
}

/**
 * Checks if all nodes match a predicate.
 * @param nodes - Starting nodes.
 * @param direction - Traversal direction.
 * @param predicate - Predicate function.
 * @param options - Traversal options.
 * @returns True if all nodes match.
 * @original $$h1
 */
export function everyInTree(
  nodes: TreeNode | TreeNode[],
  direction: 'parent' | string,
  predicate: (node: TreeNode) => boolean,
  options: Parameters<typeof traverseTree>[3] = {},
): boolean {
  return !someInTree(toArray(nodes), direction, node => !predicate(node), options)
}

// Export aliases for original names
export const I6 = findInTree
export const Si = everyInTree
export const Tj = collectTree
export const U9 = countTree
export const jJ = traverseTree
export const pb = filterTree
export const zN = someInTree

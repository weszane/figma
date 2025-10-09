import { traverseChildren } from "../figma_app/387100";
// Origin: /Users/allen/sigma-main/src/figma_app/935144.ts
// Refactored: Renamed variables, added types, simplified logic, added comments and type safety


/**
 * Constant representing the default maximum node count.
 * Original name: $$i1
 */
export const DEFAULT_MAX_NODE_COUNT = 40000;

/**
 * Converts a value to a scaled integer.
 * Scales the input by 250/4 and rounds to the nearest integer.
 * Original name: $$a2
 * @param value - The input number to scale.
 * @returns The scaled and rounded integer.
 */
export function scaleValue(value: number): number {
  return Math.round((250 * value) / 4);
}

/**
 * Counts the number of child nodes in a tree structure.
 * Uses traverseChildren to iterate through all children and increments a counter.
 * Original name: $$s0
 * @param node - The root node to start traversal.
 * @returns The total number of child nodes.
 */
export function countChildNodes(node: unknown): number {
  let count = 0;
  // Assumed: traverseChildren(node, callback) traverses all descendants and calls callback for each.
  traverseChildren(node, () => {
    count++;
  });
  return count;
}

// Export aliases to preserve original export names
export const $w = countChildNodes;
export const E4 = DEFAULT_MAX_NODE_COUNT;
export const Z = scaleValue;

/*
  Assumed dependencies:
  - traverseChildren: Function imported from "../figma_app/387100"
    Should accept a node and a callback, traversing all children and calling the callback for each.
*/

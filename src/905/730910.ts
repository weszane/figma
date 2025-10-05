/**
 * Filters visible children nodes and maps them to their corresponding node objects.
 *
 * @param nodeAccessor - Object that provides getNode method to retrieve nodes
 * @param parent - Parent object containing children array
 * @returns Array of visible child nodes
 */
export function getVisibleChildNodes(nodeAccessor: { getNode: (child: any) => any }, parent: { children: Array<{ visible?: boolean }> }): any[] {
  return parent.children
    .filter(child => child.visible ?? true)
    .map(child => nodeAccessor.getNode(child))
}

export const H = getVisibleChildNodes

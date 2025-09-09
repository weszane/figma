import { hasTypeProperty } from '../905/957591'

/**
 * Traverses an expression tree and collects all 'left' properties from nodes of type 'binary' or 'in'.
 * @param expr - The root expression node to traverse.
 * @returns A Set containing all collected 'left' properties.
 * (Original function: $$r1)
 */
export function collectLeftProperties(expr: any): Set<any> {
  const leftSet = new Set()

  /**
   * Recursively traverses the expression tree.
   * @param node - The current expression node.
   */
  const traverse = (node: any): void => {
    switch (node.type) {
      case 'binary':
      case 'in':
        leftSet.add(node.left)
        break
      case 'or':
      case 'and':
        node.expressions.forEach(traverse)
        break
      default:
        // No action for other types
        break
    }
  }

  if (expr)
    traverse(expr)
  return leftSet
}

/**
 * Traverses an expression tree and collects all 'right' properties from nodes of type 'binary' or 'in'
 * where the 'right' property has a 'type' property.
 * @param expr - The root expression node to traverse.
 * @returns An array containing all collected 'right' properties.
 * (Original function: $$a0)
 */
export function collectRightPropertiesWithType(expr: any): any[] {
  const rightList: any[] = []

  /**
   * Recursively traverses the expression tree.
   * @param node - The current expression node.
   */
  const traverse = (node: any): void => {
    switch (node.type) {
      case 'binary':
      case 'in':
        if (hasTypeProperty(node.right)) {
          rightList.push(node.right)
        }
        break
      case 'or':
      case 'and':
        node.expressions.forEach(traverse)
        break
      default:
        // No action for other types
        break
    }
  }

  if (expr)
    traverse(expr)
  return rightList
}

// Export aliases for backward compatibility
export const Gz = collectRightPropertiesWithType
export const az = collectLeftProperties

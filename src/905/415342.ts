import { hasTypeProperty } from '../905/957591'

/**
 * Interface for objects with type property
 * (based on original hasTypeProperty usage)
 */

/**
 * Interface for binary and in expressions
 * (based on original $$s2 function logic)
 */
interface BinaryExpression {
  type: 'binary' | 'in'
  right: any
}

/**
 * Interface for logical expressions
 * (based on original $$s2 function logic)
 */
interface LogicalExpression {
  type: 'or' | 'and'
  expressions: Expression[]
}

type Expression = BinaryExpression | LogicalExpression

/**
 * Resolves property references with parent context support
 * Handles both session and parent type references
 * (originally $$r1 function)
 *
 * @param sessionContext - Session context object (original param 'e')
 * @param localContext - Local context object (original param 't')
 * @param property - Property to resolve (original param 'i')
 * @param referenceContext - Reference context object (original param 'r')
 * @param parentContext - Parent context object (original param 's')
 * @returns Resolved property value
 */
export function resolvePropertyWithParent(
  sessionContext: Record<string, any>,
  localContext: Record<string, any>,
  property: any,
  referenceContext: Record<string, any>,
  parentContext: Record<string, any>,
): any {
  if (!hasTypeProperty(property)) {
    return property
  }

  if (property.type === 'parent') {
    return parentContext[property.ref]
  }

  return resolveBasicProperty(sessionContext, localContext, referenceContext[property.ref])
}

/**
 * Resolves basic property references from session or local context
 * (originally $$a0 function)
 *
 * @param sessionContext - Session context object (original param 'e')
 * @param localContext - Local context object (original param 't')
 * @param property - Property to resolve (original param 'i')
 * @returns Resolved property value
 */
export function resolveBasicProperty(
  sessionContext: Record<string, any>,
  localContext: Record<string, any>,
  property: any,
): any {
  if (!hasTypeProperty(property)) {
    return property
  }

  if (property.type === 'session') {
    return sessionContext[property.ref]
  }

  return localContext[property.ref]
}

/**
 * Transforms expressions by resolving property references
 * Handles binary, in, or, and and expression types
 * (originally $$s2 function)
 *
 * @param sessionContext - Session context object (original param 'e')
 * @param localContext - Local context object (original param 't')
 * @param expression - Expression to transform (original param 'i')
 * @param referenceContext - Reference context object (original param 'n')
 * @param parentContext - Parent context object (original param 'a')
 * @returns Transformed expression or undefined
 */
export function transformExpression(
  sessionContext: Record<string, any>,
  localContext: Record<string, any>,
  expression: Expression | null | undefined,
  referenceContext: Record<string, any>,
  parentContext: Record<string, any>,
): Expression | undefined {
  if (!expression) {
    return undefined
  }

  const transformSingleExpression = (expr: Expression): Expression => {
    switch (expr.type) {
      case 'binary':
      case 'in':
        return {
          ...expr,
          right: resolvePropertyWithParent(
            sessionContext,
            localContext,
            expr.right,
            referenceContext,
            parentContext,
          ),
        }

      case 'or':
      case 'and':
        return {
          ...expr,
          expressions: expr.expressions.map(transformSingleExpression),
        }

      default:
        return expr
    }
  }

  return transformSingleExpression(expression)
}

// Legacy exports for backward compatibility
// (originally Gu, iE, l$ exports)
export const Gu = resolveBasicProperty // Original $$a0
export const iE = resolvePropertyWithParent // Original $$r1
export const l$ = transformExpression // Original $$s2

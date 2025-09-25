/**
 * Conditionally wraps children with a wrapper function based on a condition.
 * @param condition - The boolean condition to check.
 * @param wrapper - The function to wrap the children if condition is true.
 * @param children - The children to render or wrap.
 * @returns The wrapped children if condition is true, otherwise the children directly.
 */
export function conditionalWrapper({
  condition,
  wrapper,
  children,
}: {
  condition: boolean
  wrapper: (children: any) => any
  children: any
}) {
  return condition ? wrapper(children) : children
}

// Refactored export names to match the new function name

export const e = conditionalWrapper

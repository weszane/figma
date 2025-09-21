import { z } from 'zod'

/**
 * Enum for field group types.
 * Original: $$n0
 */
export const fieldGroupTypeEnum = z.enum(['layout', 'rendering', 'text', 'interactivity'])

/**
 * Filters field group objects based on tailwindOnly and fieldGroups criteria.
 * Original: $$r1
 * @param items - Array of field group objects.
 * @param options - Filtering options.
 * @returns Filtered array of field group objects.
 */
export function filterFieldGroups(
  items: Array<{ includeInTailwind?: boolean, fieldGroups: Set<string> }>,
  options: { fieldGroups?: string[], tailwindOnly?: boolean },
): Array<{ includeInTailwind?: boolean, fieldGroups: Set<string> }> {
  const { fieldGroups, tailwindOnly } = options

  if (tailwindOnly) {
    // Only include items marked for Tailwind.
    return items.filter(item => item.includeInTailwind)
  }

  if (fieldGroups) {
    // Only include items that have at least one of the specified field groups, or none.
    return items.filter((item) => {
      const hasNoGroups = item.fieldGroups.size === 0
      const hasAnyGroup = fieldGroups.some(group => item.fieldGroups.has(group))
      return hasNoGroups || hasAnyGroup
    })
  }

  // No filtering, return all items.
  return items
}

// Refactored exports for clarity and traceability
export const H = fieldGroupTypeEnum // Original: H
export const c = filterFieldGroups // Original: c

import { z } from 'zod'
import { productSchema } from '../905/54385'

/**
 * Schema for monetized resource metadata.
 * Original: $$a0
 */
export const monetizedResourceMetadataSchema = z.object({
  monetized_resource_metadata: productSchema.optional(),
})

/**
 * Checks if monetized_resource_metadata exists in the given object.
 * Original: $$s1
 * @param obj - Object to check for monetized_resource_metadata
 * @returns True if monetized_resource_metadata exists, false otherwise
 */
export function hasMonetizedResourceMetadata(obj: unknown): boolean {
  // $$s1
  // Use optional chaining to check property existence
  return !!(obj as { monetized_resource_metadata?: unknown })?.monetized_resource_metadata
}

// Refactored exports for clarity and traceability
export const Y = monetizedResourceMetadataSchema // Original: Y
export const t = hasMonetizedResourceMetadata // Original: t

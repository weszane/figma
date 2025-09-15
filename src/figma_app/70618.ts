import { z } from 'zod'
/**
 * Enum representing content filter types.
 * Original variable: $$i1
 */
export enum ContentFilterType {
  ByCreator = 'by_creator',
  ByTags = 'by_tags',
}

/**
 * Schema for content filter.
 * Original function: $$a0
 * @param itemSchema - Zod schema for content items
 * @returns Zod schema for content filter object
 */
export function createContentFilterSchema(itemSchema: z.ZodTypeAny) {
  return z.object({
    types: z.array(z.nativeEnum(ContentFilterType)),
    content: z.array(itemSchema),
  })
}

/**
 * Exported alias for createContentFilterSchema.
 * Original export: M = $$a0
 */
export const M = createContentFilterSchema

/**
 * Exported alias for ContentFilterType enum.
 * Original export: o = $$i1
 */
export const o = ContentFilterType

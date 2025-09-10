import { z } from 'zod'

/**
 * Schema for the containing state group.
 * Original variable name: r
 */
export const ContainingStateGroupSchema = z.object({
  nodeId: z.string().optional(),
  name: z.string().optional(),
})

/**
 * Schema for the main object.
 * Original variable name: $$a0
 */
export const ContainingFrameSchema = z.object({
  nodeId: z.string().nullish().transform(e => e ?? undefined),
  name: z.string().nullish().transform(e => e ?? undefined),
  backgroundColor: z.string().nullish().transform(e => e ?? undefined),
  pageName: z.string().optional(),
  pageId: z.string().optional(),
  sortPosition: z.string().nullable().optional(),
  containingStateGroup: ContainingStateGroupSchema.nullish().transform(e => e ?? undefined),
})

/**
 * Exported schema for external usage.
 * Original export name: T
 */
export const T = ContainingFrameSchema

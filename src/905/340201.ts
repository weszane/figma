import { z } from 'zod'
/**
 * Schema for source code JSX call information.
 * Original variable: r
 */
export const SourceCodeJSXCallSchema = z.object({
  sourceCodeJSXCallId: z.string(),
  fullFilePath: z.string(),
  unstrippedFullFilePath: z.string(),
  line: z.number(),
  column: z.number(),
  displayName: z.string().nullable(),
})

/**
 * Tuple schema for inspected element sources.
 * Original variable: a
 */
export const InspectedElementSourcesTupleSchema = z.tuple([SourceCodeJSXCallSchema]).rest(SourceCodeJSXCallSchema)

/**
 * Schema for attachment objects.
 * Original variable: s
 */
export const AttachmentSchema = z.object({
  nodeGuid: z.string(),
  type: z.string(),
  label: z.string(),
  inspectedElementSources: InspectedElementSourcesTupleSchema.optional(),
})

/**
 * Main schema for user message and attachments.
 * Original variable: $$o0
 */
export const UserMessageWithAttachmentsSchema = z.object({
  rawUserMessage: z.string(),
  attachments: z.array(AttachmentSchema),
})

/**
 * Exported schema for external usage.
 * Original export: B
 */
export const B = UserMessageWithAttachmentsSchema

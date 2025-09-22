import { any, array, object, record, string, union } from 'zod'
import { assistantRoleSchema, completionReasonEnum, logprobsSchema, redactedContentSchema, requestSchema, tokenUsageSchema, toolCallSchema, toolResultSchema, toolRoleSchema } from '../905/31168'

/**
 * Schema for request payload with optional tools and toolChoice.
 * Original variable: $$a1
 */
export const toolChoiceSchema = requestSchema.merge(object({
  tools: record(any()).optional(),
  toolChoice: any(),
}))

/**
 * Schema for response object including text, tool calls, results, reasoning, and metadata.
 * Original variable: $$s0
 */
export const responseSchema = object({
  text: string(),
  toolCalls: array(toolCallSchema),
  toolResults: array(toolResultSchema),
  reasoning: string().optional(),
  reasoningDetails: array(redactedContentSchema),
  finishReason: completionReasonEnum,
  usage: tokenUsageSchema,
  response: object({
    messages: array(union([assistantRoleSchema, toolRoleSchema])),
  }),
  providerMetadata: any().optional(),
  logprobs: logprobsSchema.optional(),
})

export const $ = responseSchema
export const p = toolChoiceSchema

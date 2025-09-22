import { any, array, literal, object, optional, string, union } from 'zod'
import { completionReasonEnum, logprobsSchema, requestSchema, responseMetadataSchema, tokenUsageSchema } from '../905/31168'

export let outputSchemaOptions = requestSchema.merge(object({
  output: union([literal('object'), literal('array'), literal('enum'), literal('no-schema'), literal('amazon-bedrock-fake-no-schema')]).optional(),
  mode: union([literal('auto'), literal('json'), literal('tool')]).optional(),
  schema: any(),
  schemaName: string().optional(),
  schemaDescription: string().optional(),
  enum: array(string()).optional(),
}))
export let completionResponseSchema = object({
  object: any(),
  finishReason: completionReasonEnum,
  usage: tokenUsageSchema,
  logprobs: optional(logprobsSchema),
})

export const LR = completionResponseSchema
export const t8 = outputSchemaOptions

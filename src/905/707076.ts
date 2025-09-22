import { z } from 'zod'

// Refactored schemas for chat completion models and related types

/**
 * Enum for allowed chat completion models.
 * Original variable: r
 */
export const ChatCompletionModelEnum = z.enum([
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-0125',
  'gpt-4',
  'gpt-4-0314',
  'gpt-4-0613',
  'gpt-4-1106-preview',
  'gpt-4-vision-preview',
  'gpt-4-turbo-2024-04-09',
  'gpt-4o-2024-05-13',
  'gpt-4o-2024-08-06',
  'ft:gpt-4o-2024-08-06:figma-development::A95wrEFE:ckpt-step-732',
  'ft:gpt-4o-2024-08-06:figma-development::ANRnWJ0Y',
  'ft:gpt-4o-2024-08-06:figma-development::AOJ3FqLB',
  'gpt-4o-mini',
  'gpt-4o-mini-2024-07-18',
  'o1-preview-2024-09-12',
  'o1-mini-2024-09-12',
  'o3-mini-2025-01-31',
  'o3-2025-04-16',
  'o4-mini-2025-04-16',
  'gemini-1.5-pro-latest',
], {
  description: 'The specified model is not an allowed chat completion model',
})

/**
 * Enum for message roles.
 * Original variable: a
 */
export const MessageRoleEnum = z.enum(['system', 'user', 'assistant', 'function', 'tool'])

/**
 * Schema for chat completion options.
 * Original variable: s
 */
export const ChatCompletionOptionsSchema = z.object({
  stream: z.boolean().optional(),
  temperature: z.number().optional(),
  top_p: z.number().optional(),
  max_tokens: z.number().optional(),
  n: z.number().optional(),
  best_of: z.number().optional(),
  frequency_penalty: z.number().optional(),
  presence_penalty: z.number().optional(),
  logit_bias: z.record(z.number()).optional(),
  logprobs: z.boolean().optional(),
  stop: z.array(z.string()).or(z.string()).optional(),
  response_format: z.union([
    z.object({
      type: z.enum(['text', 'json_object']),
    }),
    z.object({
      type: z.literal('json_schema'),
      json_schema: z.record(z.any()),
    }),
  ]).optional(),
})

/**
 * Schema for usage statistics.
 * Original variable: o
 */
export const UsageSchema = z.object({
  prompt_tokens: z.number(),
  completion_tokens: z.number(),
  total_tokens: z.number(),
})

/**
 * Schema for message content (text or image).
 * Original variable: l
 */
export const MessageContentSchema = z.union([
  z.object({
    type: z.literal('text'),
    text: z.string(),
  }),
  z.object({
    type: z.literal('image_url'),
    image_url: z.object({
      url: z.string(),
      detail: z.string().optional(),
    }),
  }),
])

/**
 * Schema for a chat message.
 * Original variable: d
 */
export const ChatMessageSchema = z.object({
  role: MessageRoleEnum,
  content: z.union([z.string(), z.array(MessageContentSchema)]).nullable(),
  name: z.string().optional(),
  function_call: z.any(),
  tool_calls: z.any().array().optional(),
  tool_call_id: z.string().optional(),
})

/**
 * Schema for a completion message.
 * Original variable: c
 */
export const CompletionMessageSchema = z.object({
  role: MessageRoleEnum,
  content: z.string().nullable(),
  function_call: z.any(),
  tool_calls: z.any().array().optional(),
})

/**
 * Array of chat messages.
 * Original variable: $$u0
 */
export const ChatMessagesArraySchema = z.array(ChatMessageSchema)

/**
 * Schema for token probability.
 * Original variable: p
 */
export const TokenProbabilitySchema = z.object({
  token: z.string(),
  logprob: z.number(),
})

/**
 * Schema for logprobs.
 * Original variable: m
 */
export const LogprobsSchema = z.object({
  content: z.array(TokenProbabilitySchema).nullable(),
  refusal: z.array(TokenProbabilitySchema).nullable(),
})

/**
 * Schema for a choice in completion.
 * Original variable: h
 */
export const CompletionChoiceSchema = z.object({
  message: CompletionMessageSchema,
  index: z.number().optional(),
  logprobs: LogprobsSchema.nullable().optional(),
  finish_reason: z.string().nullable().optional(),
})

/**
 * Schema for chat completion request.
 * Original variable: $$g1
 */
export const ChatCompletionRequestSchema = z.object({
  model: ChatCompletionModelEnum,
  messages: ChatMessagesArraySchema,
  functions: z.any().array().optional(),
  tools: z.any().array().optional(),
  function_call: z.any(),
  seed: z.number().optional(),
  parallel_tool_calls: z.boolean().optional(),
}).merge(ChatCompletionOptionsSchema)

/**
 * Schema for chat completion response.
 * Original variable: $$f2
 */
export const ChatCompletionResponseSchema = z.object({
  id: z.string(),
  object: z.string(),
  model: z.string(),
  choices: z.array(CompletionChoiceSchema),
  usage: UsageSchema,
})

/**
 * Schema for delta message.
 * Original variable: _
 */
export const DeltaMessageSchema = z.object({
  content: z.string().optional().nullable(),
  function_call: z.any(),
  tool_calls: z.any(),
})

/**
 * Schema for a chunk choice.
 * Original variable: A
 */
export const ChunkChoiceSchema = z.object({
  delta: DeltaMessageSchema,
  logprobs: LogprobsSchema.nullable().optional(),
  finish_reason: z.string().nullable().optional(),
  index: z.number().optional(),
})

/**
 * Schema for chat completion chunk.
 * Original variable: $$y3
 */
export const ChatCompletionChunkSchema = z.object({
  id: z.string(),
  object: z.literal('chat.completion.chunk').optional(),
  created: z.number().optional(),
  model: z.string(),
  choices: z.array(ChunkChoiceSchema),
  usage: UsageSchema.optional(),
})

// Exported variables with refactored names
export const FQ = ChatMessagesArraySchema
export const $l = ChatCompletionRequestSchema
export const tm = ChatCompletionResponseSchema
export const v0 = ChatCompletionChunkSchema

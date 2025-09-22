import { z } from 'zod'
import { assistantRoleSchema, toolRoleSchema } from '../905/31168'
import { ImageGenerationRequestSchema } from '../905/219321'
import { responseSchema, toolChoiceSchema } from '../905/453712'
import { completionResponseSchema, outputSchemaOptions } from '../905/460208'
import { embeddingRequestSchema } from '../905/541395'
import { EmbeddingValue, EmbeddingValues, providerModelHeaderValue, ProviderValuesArray } from '../905/693198'
import { ChatCompletionRequestSchema, ChatCompletionResponseSchema } from '../905/707076'

/**
 * ScoreItemSchema
 * Represents an item with an associated score.
 */
const ScoreItemSchema = z.object({
  item: z.any(),
  score: z.number(),
})

/**
 * ErrorSchema
 * Represents an error with type, message, and optional stack trace.
 */
const ErrorSchema = z.object({
  type: z.string(),
  message: z.string(),
  stack: z.string().optional(),
})

/**
 * ChatSchema
 * Represents a chat request and optional response.
 */
const ChatSchema = z.object({
  request: ChatCompletionRequestSchema,
  response: ChatCompletionResponseSchema.optional(),
})

/**
 * ChatV2Schema
 * Represents a chatV2 request and optional response with responseMessages.
 */
const ChatV2Schema = z.object({
  request: toolChoiceSchema,
  response: responseSchema.omit({
    response: true,
  }).merge(z.object({
    responseMessages: z.array(z.union([assistantRoleSchema, toolRoleSchema])),
  })).optional(),
})

/**
 * ObjectV2Schema
 * Represents an objectV2 request and optional response.
 */
const ObjectV2Schema = z.object({
  request: outputSchemaOptions,
  response: completionResponseSchema.optional(),
})

/**
 * ImageV2Schema
 * Represents an imageV2 request.
 */
const ImageV2Schema = z.object({
  request: ImageGenerationRequestSchema,
})

/**
 * EmbeddingsSchema
 * Represents an embeddings request and optional choices.
 */
const EmbeddingsSchema = z.object({
  request: embeddingRequestSchema,
  choices: ScoreItemSchema.array().optional(),
  filteredChoices: ScoreItemSchema.array().optional(),
})

/**
 * EmbedV2Schema
 * Represents an embedV2 request and optional response.
 */
const EmbedV2Schema = z.object({
  request: z.union([providerModelHeaderValue, ProviderValuesArray]),
  response: z.union([
    EmbeddingValue.omit({ embedding: true }),
    EmbeddingValues.omit({ embeddings: true }),
  ]).optional(),
})

/**
 * NodeSchema
 * Represents a node with various types and optional children.
 */
export const NodeSchema = z.object({
  name: z.string(),
  type: z.enum([
    'group',
    'chat',
    'chatV2',
    'objectV2',
    'embeddings',
    'embedV2',
    'error',
    'image',
    'imageV2',
  ]),
  start: z.number(),
  end: z.number().optional(),
  chat: ChatSchema.optional(),
  chatV2: ChatV2Schema.optional(),
  objectV2: ObjectV2Schema.optional(),
  imageV2: ImageV2Schema.optional(),
  embeddings: EmbeddingsSchema.optional(),
  embedV2: EmbedV2Schema.optional(),
  error: ErrorSchema.optional(),
}).extend({
  children: z.lazy(() => NodeSchema.array()),
})

/**
 * B
 * Exported schema for node structure (original: $$p0).
 */
export const B = NodeSchema

import { any, array, number, object, record, string } from 'zod'

/**
 * Base schema for provider/model/headers
 * (original: r)
 */
const providerModelHeadersSchema = object({
  provider: string(),
  model: string(),
  headers: record(string(), string().optional()).optional(),
})

/**
 * Schema for a single value with provider/model/headers
 * (original: $$a2)
 */
export const providerModelHeaderValue = providerModelHeadersSchema.extend({
  value: any(),
})

/**
 * Schema for multiple values with provider/model/headers
 * (original: $$s0)
 */
export const ProviderValuesArray = providerModelHeadersSchema.extend({
  values: array(any()),
})

/**
 * Schema for a value, its embedding, and usage tokens
 * (original: $$o1)
 */
export const EmbeddingValue = object({
  value: any(),
  embedding: array(number()),
  usage: object({
    tokens: number(),
  }),
})

/**
 * Schema for multiple values, their embeddings, and usage tokens
 * (original: $$l3)
 */
export const EmbeddingValues = object({
  values: array(any()),
  embeddings: array(array(number())),
  usage: object({
    tokens: number(),
  }),
})

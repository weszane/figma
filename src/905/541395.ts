import { z } from "zod";
/**
 * Enum for supported embedding models.
 * (r)
 */
const embeddingModelEnum = z.enum([
  "text-embedding-ada-002",
  "text-embedding-3-small",
  "text-embedding-3-large"
]);

/**
 * Schema for embedding request payload.
 * (vD, $$a1)
 */
export const embeddingRequestSchema = z.object({
  model: embeddingModelEnum,
  input: z.string().or(z.string().array())
});

/**
 * Schema for a single embedding object.
 * (s)
 */
const embeddingObjectSchema = z.object({
  object: z.literal("embedding"),
  embedding: z.array(z.number()),
  index: z.number()
});

/**
 * Schema for embedding response payload.
 * (ZI, $$o0)
 */
export const embeddingResponseSchema = z.object({
  object: z.literal("list"),
  data: embeddingObjectSchema.array(),
  model: z.string(),
  usage: z.object({
    prompt_tokens: z.number(),
    total_tokens: z.number()
  })
});

export const ZI = embeddingResponseSchema;
export const vD = embeddingRequestSchema;

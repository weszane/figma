import { z } from 'zod'

/**
 * Schema for image generation request parameters.
 * Original variable name: $$r1
 */
export const ImageGenerationRequestSchema = z.object({
  cortexAiModelId: z.string().optional(),
  providerId: z.string().optional(),
  region: z.string().optional(),
  modelId: z.string().optional(),
  headers: z.record(z.string(), z.string()).optional(),
  width: z.number(),
  height: z.number(),
  numImages: z.number(),
  prompt: z.string(),
  negativePrompt: z.string().optional(),
  seed: z.number().optional(),
  cfgScale: z.number().optional(),
})

/**
 * Supported image formats.
 * Original variable name: a
 */
export const ImageFormatEnum = z.enum(['png', 'jpeg', 'webp'])

/**
 * Schema for image generation response.
 * Original variable name: $$s0
 */
export const ImageGenerationResponseSchema = z.object({
  images: z.array(z.string()),
  imageFormat: ImageFormatEnum,
})

export const K = ImageGenerationResponseSchema
export const k0 = ImageGenerationRequestSchema

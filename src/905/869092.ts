import { z } from "zod";
import { ImageProviderType } from "../905/585727";
/**
 * Maximum number of image URLs allowed (original: $$a2)
 */
export const MAX_IMAGE_URLS = 6;

/**
 * Schema for image generation request (original: $$s1)
 */
export const ImageCreationSchema = z.object({
  image_url: z.string().optional(),
  image_urls: z.array(z.string()).max(MAX_IMAGE_URLS).optional(),
  prompt: z.string(),
  targetWidth: z.number(),
  targetHeight: z.number(),
  modelType: z.nativeEnum(ImageProviderType).optional()
});

/**
 * Schema for base64 image response (original: $$o0)
 */
export const Base64ImageResponseSchema = z.object({
  base64_image: z.string()
});
export const Bd = Base64ImageResponseSchema; // $$o0
export const Vh = ImageCreationSchema
export const y1 = MAX_IMAGE_URLS

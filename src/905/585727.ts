/**
 * ImageModelType - Original $$n1
 * Enum for supported image model types.
 */
export enum ImageModelType {
  TITAN_V2 = "titan-v2",
  IMAGEN_3 = "imagen-3",
  GPT_4O_IMAGE = "gpt-4o-image",
}

/**
 * ImageProviderType - Original $$r0
 * Enum for supported image provider types.
 */
export enum ImageProviderType {
  OPENAI_GPT_IMAGE_1 = "openai-gpt-image-1",
  GOOGLE_GEMINI_2_0_FLASH_PREVIEW_IMAGE_GENERATION = "gemini-2.0-flash-preview-image-generation",
}

/**
 * ImageSourceType - Original $$a2
 * Enum for supported image source types.
 */
export enum ImageSourceType {
  UNSPLASH = "unsplash",
  TITAN_V2 = "titan-v2",
  IMAGEN_3 = "imagen-3",
  GPT_4O_IMAGE = "gpt-4o-image",
}

// Refactored exports to match original names
export const TU = ImageProviderType;
export const xw = ImageModelType;
export const zw = ImageSourceType;

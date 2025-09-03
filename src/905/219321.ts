import { z } from "../vendor/835909";
let $$r1 = z.object({
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
  cfgScale: z.number().optional()
});
let a = z.enum(["png", "jpeg", "webp"]);
let $$s0 = z.object({
  images: z.array(z.string()),
  imageFormat: a
});
export const K = $$s0;
export const k0 = $$r1;

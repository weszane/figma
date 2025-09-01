import { z } from "../vendor/835909";
import { TU } from "../905/585727";
let $$a2 = 6;
let $$s1 = z.object({
  image_url: z.string().optional(),
  image_urls: z.array(z.string()).max($$a2).optional(),
  prompt: z.string(),
  targetWidth: z.number(),
  targetHeight: z.number(),
  modelType: z.nativeEnum(TU).optional()
});
let $$o0 = z.object({
  base64_image: z.string()
});
export const Bd = $$o0;
export const Vh = $$s1;
export const y1 = $$a2;
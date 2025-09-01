import { z } from "../vendor/835909";
let r = z.object({
  source_id: z.string()
}).catchall(z.union([z.string().nullable(), z.number().nullable()]));
let $$a0 = z.object({
  endpointName: z.string(),
  data: z.array(r)
});
let s = z.object({
  source_id: z.string(),
  prediction: z.boolean(),
  score: z.number()
});
let $$o1 = z.object({
  results: z.array(s)
});
export const N4 = $$a0;
export const pA = $$o1; 

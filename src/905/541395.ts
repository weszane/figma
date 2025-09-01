import { z } from "../vendor/835909";
let r = z.$$enum(["text-embedding-ada-002", "text-embedding-3-small", "text-embedding-3-large"]);
let $$a1 = z.object({
  model: r,
  input: z.string().or(z.string().array())
});
let s = z.object({
  object: z.literal("embedding"),
  embedding: z.array(z.number()),
  index: z.number()
});
let $$o0 = z.object({
  object: z.literal("list"),
  data: s.array(),
  model: z.string(),
  usage: z.object({
    prompt_tokens: z.number(),
    total_tokens: z.number()
  })
});
export const ZI = $$o0;
export const vD = $$a1;
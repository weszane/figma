import { z } from "../vendor/835909";
let r = z.enum(["gpt-3.5-turbo", "gpt-3.5-turbo-0125", "gpt-4", "gpt-4-0314", "gpt-4-0613", "gpt-4-1106-preview", "gpt-4-vision-preview", "gpt-4-turbo-2024-04-09", "gpt-4o-2024-05-13", "gpt-4o-2024-08-06", "ft:gpt-4o-2024-08-06:figma-development::A95wrEFE:ckpt-step-732", "ft:gpt-4o-2024-08-06:figma-development::ANRnWJ0Y", "ft:gpt-4o-2024-08-06:figma-development::AOJ3FqLB", "gpt-4o-mini", "gpt-4o-mini-2024-07-18", "o1-preview-2024-09-12", "o1-mini-2024-09-12", "o3-mini-2025-01-31", "o3-2025-04-16", "o4-mini-2025-04-16", "gemini-1.5-pro-latest"], {
  description: "The specified model is not an allowed chat completion model"
});
z.enum(["gpt-35-turbo", "gpt-4", "gpt-4-turbo", "gpt-4-vision", "gpt-35-turbo-instruct", "gpt-4o", "gpt-4o-mini", "gpt-4o-2024-08-06", "text-embedding-ada-002", "text-embedding-3-small", "text-embedding-3-large", "no-fallback"]);
z.enum(["gpt-4-visual", "gpt-4-vision-preview", "gpt-4-turbo-2024-04-09", "gpt-4o-2024-05-13"]);
let a = z.enum(["system", "user", "assistant", "function", "tool"]);
let s = z.object({
  stream: z.boolean().optional(),
  temperature: z.number().optional(),
  top_p: z.number().optional(),
  max_tokens: z.number().optional(),
  n: z.number().optional(),
  best_of: z.number().optional(),
  frequency_penalty: z.number().optional(),
  presence_penalty: z.number().optional(),
  logit_bias: z.record(z.number()).optional(),
  logprobs: z.boolean().optional(),
  stop: z.array(z.string()).or(z.string()).optional(),
  response_format: z.union([z.object({
    type: z.enum(["text", "json_object"])
  }), z.object({
    type: z.literal("json_schema"),
    json_schema: z.record(z.any())
  })]).optional()
});
let o = z.object({
  prompt_tokens: z.number(),
  completion_tokens: z.number(),
  total_tokens: z.number()
});
let l = z.union([z.object({
  type: z.literal("text"),
  text: z.string()
}), z.object({
  type: z.literal("image_url"),
  image_url: z.object({
    url: z.string(),
    detail: z.string().optional()
  })
})]);
let d = z.object({
  role: a,
  content: z.union([z.string(), z.array(l)]).nullable(),
  name: z.string().optional(),
  function_call: z.any(),
  tool_calls: z.any().array().optional(),
  tool_call_id: z.string().optional()
});
let c = z.object({
  role: a,
  content: z.string().nullable(),
  function_call: z.any(),
  tool_calls: z.any().array().optional()
});
let $$u0 = z.array(d);
let p = z.object({
  token: z.string(),
  logprob: z.number()
});
let m = z.object({
  content: z.array(p).nullable(),
  refusal: z.array(p).nullable()
});
let h = z.object({
  message: c,
  index: z.number().optional(),
  logprobs: m.nullable().optional(),
  finish_reason: z.string().nullable().optional()
});
let $$g1 = z.object({
  model: r,
  messages: $$u0,
  functions: z.any().array().optional(),
  tools: z.any().array().optional(),
  function_call: z.any(),
  seed: z.number().optional(),
  parallel_tool_calls: z.boolean().optional()
}).merge(s);
let $$f2 = z.object({
  id: z.string(),
  object: z.string(),
  model: z.string(),
  choices: z.array(h),
  usage: o
});
let _ = z.object({
  content: z.string().optional().nullable(),
  function_call: z.any(),
  tool_calls: z.any()
});
let A = z.object({
  delta: _,
  logprobs: m.nullable().optional(),
  finish_reason: z.string().nullable().optional(),
  index: z.number().optional()
});
let $$y3 = z.object({
  id: z.string(),
  object: z.literal("chat.completion.chunk").optional(),
  created: z.number().optional(),
  model: z.string(),
  choices: z.array(A),
  usage: o.optional()
});
export const FQ = $$u0;
export const $l = $$g1;
export const tm = $$f2;
export const v0 = $$y3; 

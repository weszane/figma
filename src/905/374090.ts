import { z } from "../vendor/835909";
let r = z.object({
  type: z.literal("text").readonly(),
  text: z.string().readonly()
});
let a = z.object({
  type: z.literal("selected-node-ids").readonly(),
  selectedNodeIds: z.array(z.string()).readonly()
});
let s = z.object({
  type: z.literal("image").readonly(),
  image: z.string().readonly(),
  mimeType: z.string().optional().readonly()
});
let o = z.object({
  type: z.literal("jsx").readonly(),
  jsx: z.string().readonly()
});
let l = z.object({
  type: z.literal("reasoning").readonly(),
  text: z.string().readonly(),
  signature: z.string().optional().readonly()
});
let d = z.object({
  type: z.literal("redacted-reasoning").readonly(),
  data: z.string().readonly()
});
let c = z.object({
  type: z.literal("tool-call").readonly(),
  toolCallId: z.string().readonly(),
  toolName: z.string().readonly(),
  argsJSON: z.string().readonly()
});
let u = z.object({
  type: z.literal("tool-result").readonly(),
  toolCallId: z.string().readonly(),
  toolName: z.string().readonly(),
  resultJSON: z.string().readonly(),
  isError: z.boolean().optional()
});
let p = z.object({
  createdAtMs: z.number().readonly()
});
let m = p.extend({
  role: z.literal("user").readonly(),
  content: z.array(z.union([r, a, s, o])).readonly()
});
let h = p.extend({
  role: z.literal("assistant").readonly(),
  content: z.array(z.union([r, c, l, d])).readonly()
});
let g = p.extend({
  role: z.literal("tool").readonly(),
  content: z.array(u).readonly()
});
let f = p.extend({
  role: z.literal("system").readonly(),
  content: z.array(r).readonly()
});
let $$_0 = z.union([m, h, g, f]).readonly();
let A = z.object({
  useServerSideChat: z.boolean(),
  threadId: z.string().nullable(),
  fileKey: z.string(),
  privacyMode: z.$$enum(["user", "file"]),
  planParentId: z.string(),
  planParentType: z.$$enum(["team", "organization"])
});
let $$y1 = z.object({
  messages: z.array($$_0).readonly(),
  serverSideChatParams: A.optional()
});
export const He = $$_0;
export const Vg = $$y1; 

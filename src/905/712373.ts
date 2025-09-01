import { z } from "../vendor/835909";
let r = z.object({
  type: z.literal("text-delta"),
  textDelta: z.string()
});
let a = z.object({
  type: z.literal("reasoning"),
  textDelta: z.string()
});
let s = z.object({
  type: z.literal("reasoning-signature"),
  signature: z.string()
});
let o = z.object({
  type: z.literal("redacted-reasoning"),
  data: z.string()
});
let l = z.object({
  type: z.literal("threadId"),
  threadId: z.string()
});
let d = z.object({
  type: z.literal("messagesCommitted"),
  lastCommittedMessageIndex: z.number()
});
z.object({
  type: z.literal("tool-call"),
  toolCallId: z.string(),
  toolName: z.string(),
  args: z.any()
});
let c = z.object({
  type: z.literal("tool-result"),
  toolCallId: z.string(),
  toolName: z.string(),
  result: z.any()
});
let $$u0 = z.union([r, a, s, o, l, d, c]);
export function $$p1(e) {
  return z.object({
    type: z.literal("tool-call"),
    toolCallId: z.string(),
    toolName: z.literal(e.name),
    args: e.parameters
  });
}
export const Uv = $$u0;
export const d_ = $$p1;
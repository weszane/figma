import { z } from "../vendor/835909";
import { _O, z7 } from "../figma_app/232209";
import { rU } from "../figma_app/419232";
let s = z.object({
  type: z.literal("chat-compression")
}).merge(_O);
let o = z.object({
  type: z.literal("toolResult")
}).merge(z7);
let l = z.object({
  type: z.literal("message"),
  message: z.string()
});
let d = z.object({
  type: z.literal("plan"),
  message: z.string(),
  title: z.string().optional()
});
let c = z.object({
  type: z.literal("work"),
  message: z.string()
});
let u = z.object({
  type: z.literal("summary"),
  message: z.string()
});
let p = z.discriminatedUnion("type", [d, c, u]);
z.union([l, p]);
let m = z.object({
  type: z.literal("reasoning"),
  reasoning: z.string()
});
let h = z.object({
  type: z.literal("reasoning-signature"),
  signature: z.string()
});
let g = z.object({
  type: z.literal("redacted-reasoning"),
  data: z.string()
});
z.discriminatedUnion("type", [m, h, g]);
let f = z.discriminatedUnion("type", [z.object({
  type: z.literal("rewrite")
}), z.object({
  type: z.literal("edit")
})]);
let _ = z.object({
  type: z.literal("code"),
  code: z.string(),
  file: z.string(),
  reset: z.boolean().optional(),
  editType: f.optional(),
  excludeFromMessageHistory: z.boolean().optional()
});
let A = z.object({
  type: z.literal("codeDiffVisualizationDelta"),
  id: z.string(),
  old_str: z.string(),
  new_str: z.string(),
  path: z.string()
});
let y = z.object({
  type: z.literal("codeDiffVisualizationDone"),
  id: z.string()
});
z.discriminatedUnion("type", [A, y]);
let b = z.object({
  type: z.literal("editedFiles"),
  files: z.array(z.string())
});
let v = z.object({
  type: z.literal("toolCallStart"),
  toolCallId: z.string(),
  toolName: z.string()
});
let I = z.object({
  type: z.literal("toolCallDelta"),
  toolCallId: z.string(),
  toolName: z.string(),
  argsTextDelta: z.string()
});
z.union([v, I]);
let E = z.object({
  type: z.literal("heartbeat").describe("This is a heartbeat message. It does nothing but keep the stream alive.")
});
let x = z.object({
  type: z.literal("providerMetadata"),
  providerMetadata: z.object({
    openai: z.object({
      responseId: z.string().optional().describe("The response ID from OpenAI's Responses API. This enables us to re-use reasoning across requests.")
    }).optional()
  })
});
let $$S0 = z.union([v, I, o, l, m, h, g, E, rU, d, c, u, _, A, y, s, b, x, z.object({
  type: z.literal("requestUuid"),
  requestId: z.string()
}), z.object({
  type: z.literal("modelConfigVersion"),
  version: z.string()
})]);
z.object({
  files: z.record(z.string(), z.string())
});
export const EK = $$S0; 

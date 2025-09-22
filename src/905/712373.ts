import { z } from "zod";

/**
 * Schema for text-delta type
 * Original variable: r
 */
export const TextDeltaSchema = z.object({
  type: z.literal("text-delta"),
  textDelta: z.string()
});

/**
 * Schema for reasoning type
 * Original variable: a
 */
export const ReasoningSchema = z.object({
  type: z.literal("reasoning"),
  textDelta: z.string()
});

/**
 * Schema for reasoning-signature type
 * Original variable: s
 */
export const ReasoningSignatureSchema = z.object({
  type: z.literal("reasoning-signature"),
  signature: z.string()
});

/**
 * Schema for redacted-reasoning type
 * Original variable: o
 */
export const RedactedReasoningSchema = z.object({
  type: z.literal("redacted-reasoning"),
  data: z.string()
});

/**
 * Schema for threadId type
 * Original variable: l
 */
export const ThreadIdSchema = z.object({
  type: z.literal("threadId"),
  threadId: z.string()
});

/**
 * Schema for messagesCommitted type
 * Original variable: d
 */
export const MessagesCommittedSchema = z.object({
  type: z.literal("messagesCommitted"),
  lastCommittedMessageIndex: z.number()
});

/**
 * Schema for tool-result type
 * Original variable: c
 */
export const ToolResultSchema = z.object({
  type: z.literal("tool-result"),
  toolCallId: z.string(),
  toolName: z.string(),
  result: z.any()
});

/**
 * Union schema for all supported types
 * Original variable: $$u0
 */
export const UnifiedSchema = z.union([
  TextDeltaSchema,
  ReasoningSchema,
  ReasoningSignatureSchema,
  RedactedReasoningSchema,
  ThreadIdSchema,
  MessagesCommittedSchema,
  ToolResultSchema
]);

/**
 * Generates a schema for a tool-call type with specific tool name and parameters
 * Original function: $$p1
 * @param e - Object containing name and parameters for the tool
 * @returns Zod schema for the tool-call
 */
export function createToolCallSchema(e: { name: string; parameters: any }) {
  return z.object({
    type: z.literal("tool-call"),
    toolCallId: z.string(),
    toolName: z.literal(e.name),
    args: e.parameters
  });
}

export const Uv = UnifiedSchema
export const d_ = createToolCallSchema

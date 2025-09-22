import { z } from 'zod'

/**
 * Schema for text content (r)
 */
const textContentSchema = z.object({
  type: z.literal('text').readonly(),
  text: z.string().readonly(),
})

/**
 * Schema for selected node IDs (a)
 */
const selectedNodeIdsSchema = z.object({
  type: z.literal('selected-node-ids').readonly(),
  selectedNodeIds: z.array(z.string()).readonly(),
})

/**
 * Schema for image content (s)
 */
const imageContentSchema = z.object({
  type: z.literal('image').readonly(),
  image: z.string().readonly(),
  mimeType: z.string().optional().readonly(),
})

/**
 * Schema for JSX content (o)
 */
const jsxContentSchema = z.object({
  type: z.literal('jsx').readonly(),
  jsx: z.string().readonly(),
})

/**
 * Schema for reasoning content (l)
 */
const reasoningContentSchema = z.object({
  type: z.literal('reasoning').readonly(),
  text: z.string().readonly(),
  signature: z.string().optional().readonly(),
})

/**
 * Schema for redacted reasoning (d)
 */
const redactedReasoningSchema = z.object({
  type: z.literal('redacted-reasoning').readonly(),
  data: z.string().readonly(),
})

/**
 * Schema for tool call (c)
 */
const toolCallSchema = z.object({
  type: z.literal('tool-call').readonly(),
  toolCallId: z.string().readonly(),
  toolName: z.string().readonly(),
  argsJSON: z.string().readonly(),
})

/**
 * Schema for tool result (u)
 */
const toolResultSchema = z.object({
  type: z.literal('tool-result').readonly(),
  toolCallId: z.string().readonly(),
  toolName: z.string().readonly(),
  resultJSON: z.string().readonly(),
  isError: z.boolean().optional(),
})

/**
 * Base schema for message with createdAtMs (p)
 */
const baseMessageSchema = z.object({
  createdAtMs: z.number().readonly(),
})

/**
 * User message schema (m)
 */
const userMessageSchema = baseMessageSchema.extend({
  role: z.literal('user').readonly(),
  content: z.array(z.union([
    textContentSchema,
    selectedNodeIdsSchema,
    imageContentSchema,
    jsxContentSchema,
  ])).readonly(),
})

/**
 * Assistant message schema (h)
 */
const assistantMessageSchema = baseMessageSchema.extend({
  role: z.literal('assistant').readonly(),
  content: z.array(z.union([
    textContentSchema,
    toolCallSchema,
    reasoningContentSchema,
    redactedReasoningSchema,
  ])).readonly(),
})

/**
 * Tool message schema (g)
 */
const toolMessageSchema = baseMessageSchema.extend({
  role: z.literal('tool').readonly(),
  content: z.array(toolResultSchema).readonly(),
})

/**
 * System message schema (f)
 */
const systemMessageSchema = baseMessageSchema.extend({
  role: z.literal('system').readonly(),
  content: z.array(textContentSchema).readonly(),
})

/**
 * Union of all message schemas ($$_0)
 */
export const messageSchema = z.union([
  userMessageSchema,
  assistantMessageSchema,
  toolMessageSchema,
  systemMessageSchema,
]).readonly()

/**
 * Server-side chat parameters schema (A)
 */
const serverSideChatParamsSchema = z.object({
  useServerSideChat: z.boolean(),
  threadId: z.string().nullable(),
  fileKey: z.string(),
  privacyMode: z.enum(['user', 'file']),
  planParentId: z.string(),
  planParentType: z.enum(['team', 'organization']),
})

/**
 * Main chat schema ($$y1)
 */
export const chatSchema = z.object({
  messages: z.array(messageSchema).readonly(),
  serverSideChatParams: serverSideChatParamsSchema.optional(),
})

export const He = messageSchema // $$_0
export const Vg = chatSchema // $$y1

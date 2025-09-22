import { any, array, boolean, intersection, literal, number, object, record, string, union } from 'zod'

// Grouped related schema definitions and added documentation comments for clarity

// Message content schemas
/**
 * Text message schema (u)
 */
export const textMessageSchema = object({
  type: literal('text'),
  text: string(),
})

/**
 * Reasoning message schema (p)
 */
export const reasoningMessageSchema = object({
  type: literal('reasoning'),
  text: string(),
  signature: string().optional(),
})

/**
 * Redacted reasoning schema (m)
 */
export const redactedReasoningSchema = object({
  type: literal('redacted-reasoning'),
  data: string(),
})

/**
 * Tool call schema (gB, $$c7)
 */
export const toolCallArgs = {
  args: any(),
}
export const toolCallSchema = intersection(
  object({
    type: literal('tool-call'),
    toolCallId: string(),
    toolName: string(),
  }),
  object(toolCallArgs),
)

/**
 * Tool result schema (z7, $$d9)
 */
export const toolResultArgs = {
  result: any(),
}
export const toolResultSchema = intersection(
  object({
    type: literal('tool-result'),
    toolName: string(),
    toolCallId: string(),
    isError: boolean().optional(),
  }),
  object(toolResultArgs),
)

/**
 * Tool role schema (NA, $$g8)
 */
export const toolRoleSchema = object({
  role: literal('tool'),
  content: array(toolResultSchema),
})

/**
 * User message content schema (l)
 */
export const imageContent = {
  type: literal('image'),
  image: any(),
}
export const fileContent = {
  type: literal('file'),
  data: any(),
  mimeType: string(),
}
export const userContentSchema = union([
  string(),
  array(
    union([
      object({
        type: literal('text'),
        text: string(),
      }),
      object(imageContent),
      object(fileContent),
    ]),
  ),
])

/**
 * User role schema (f)
 */
export const userRoleSchema = object({
  role: literal('user'),
  content: userContentSchema,
})

/**
 * Assistant message content schema (h)
 */
export const assistantContentSchema = union([
  string(),
  array(
    union([
      textMessageSchema,
      reasoningMessageSchema,
      redactedReasoningSchema,
      toolCallSchema,
    ]),
  ),
])

/**
 * Assistant role schema (Dj, $$_0)
 */
export const assistantRoleSchema = object({
  role: literal('assistant'),
  content: assistantContentSchema,
})

/**
 * System role schema (A)
 */
export const systemRoleSchema = object({
  role: literal('system'),
  content: string(),
})

/**
 * Message union schema (y)
 */
export const messageSchema = union([
  userRoleSchema,
  assistantRoleSchema,
  toolRoleSchema,
  systemRoleSchema,
])

// Provider options schema (b)
export const providerOptionsSchema = object({
  openai: object({
    logitBias: record(number()).optional(),
    logprobs: union([boolean(), number()]).optional(),
    reasoningEffort: union([literal('low'), literal('medium'), literal('high')]).optional(),
    maxCompletionTokens: number().optional(),
    store: boolean().optional(),
    prediction: object({
      type: literal('content'),
      content: string(),
    }).optional(),
    tryUseResponsesApi: boolean().optional().describe('If true and the model supports it, the request will be sent with the Responses API instead of the Completions API.'),
    previousResponseId: string().optional().describe('The response ID from the previous request. This enables reusing reasoning across requests.'),
    priority: boolean().optional(),
    include: array(union([literal('reasoning.encrypted_content'), literal('file_search_call.results')])).optional(),
    reasoningSummary: union([literal('auto'), literal('detailed')]).optional(),
  }).optional(),
  anthropic: object({
    thinking: object({
      type: literal('enabled'),
      budgetTokens: number(),
    }),
  }).optional(),
  bedrock: object({
    reasoning_config: object({
      type: literal('enabled'),
      budget_tokens: number(),
    }),
  }).optional(),
  google: object({
    vertexAnthropicRegion: string().optional(),
    candidateCount: number().optional(),
  }).optional(),
  fireworks: object({
    additionalModelRequestFields: record(array(string())).optional(),
  }).optional(),
})

// Main request schema (lF, $$v6)
export const requestSchema = object({
  cortexAiModelId: string().optional(),
  provider: string().optional(),
  region: string().optional(),
  model: string().optional(),
  messages: array(messageSchema),
  system: string().optional(),
  maxTokens: number().optional(),
  temperature: number().optional(),
  topP: number().optional(),
  topK: number().optional(),
  presencePenalty: number().optional(),
  frequencyPenalty: number().optional(),
  stopSequences: array(string()).optional(),
  seed: number().optional(),
  headers: record(string(), string().optional()).optional(),
  providerOptions: providerOptionsSchema.optional(),
})

// Completion reason enum (zF, $$I1)
export const completionReasonEnum = union([
  literal('stop'),
  literal('length'),
  literal('tool-calls'),
  literal('other'),
  literal('unknown'),
])

// Token usage schema (cn, $$E3)
export const tokenUsageSchema = object({
  promptTokens: number(),
  completionTokens: number(),
  totalTokens: number(),
})

// Response metadata schema (Ex, $$x2)
export const responseMetadataSchema = object({
  id: string(),
  timestamp: string(),
  modelId: string(),
  headers: record(string(), string()).optional(),
})

// Logprobs schema (ue, $$S4)
export const logprobsSchema = array(
  object({
    token: string(),
    logprob: number(),
    topLogprobs: array(
      object({
        token: string(),
        logprob: number(),
      }),
    ),
  }),
)

// Redacted content schema (Ph, $$w5)
export const redactedContentSchema = union([
  object({
    type: literal('text'),
    text: string(),
    signature: string().optional(),
  }),
  object({
    type: literal('redacted'),
    data: string(),
  }),
])

// Exported schemas with original variable names as comments
export const Dj = assistantRoleSchema // $$_0
export const zF = completionReasonEnum // $$I1
export const Ex = responseMetadataSchema // $$x2
export const cn = tokenUsageSchema // $$E3
export const ue = logprobsSchema // $$S4
export const Ph = redactedContentSchema // $$w5
export const lF = requestSchema // $$v6
export const gB = toolCallSchema // $$c7
export const NA = toolRoleSchema // $$g8
export const z7 = toolResultSchema // $$d9

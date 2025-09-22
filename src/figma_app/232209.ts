import { z } from 'zod'
import { UserMessageWithAttachmentsSchema } from '../905/340201'
import { AdvanceAIModel } from '../905/467709'

/**
 * Enum for product types (original: $$n0)
 */
export enum ProductVariant {
  MAKE_STANDALONE = 'figmake',
  CODE_LAYERS = 'code_layers',
}

/**
 * Schema for plain text and code content (original: o)
 */
export const PlainTextCodeSchema = z.object({
  plainText: z.string(),
  code: z.string().optional(),
  codeFilePath: z.string().optional(),
  hidden: z.boolean().optional().describe('Used to hide automatic error handling messages, which are obfuscated from the user.'),
  modelConfigVersion: z.string().optional().describe('Identifies the model config version used in the exchange this message belongs to.'),
})

/**
 * Schema for code file details (original: l)
 */
export const CodeFileSchema = z.object({
  codeFileGuid: z.string(),
  fullFilePath: z.string(),
  code: z.string(),
})

/**
 * Schema for community attribution (original: d)
 */
export const CommunityAttributionSchema = z.object({
  hubFileId: z.string(),
  hubFileName: z.string(),
  creatorName: z.string(),
})

/**
 * Discriminated union for import types (original: c)
 */
export const ImportSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('node'),
    guid: z.string(),
    code: z.string().describe('Design2React output').optional(),
    codeFiles: z.array(CodeFileSchema).optional(),
    communityAttribution: CommunityAttributionSchema.optional(),
    image: z.string().describe('Image data URI').optional(),
  }),
  z.object({
    type: z.literal('image'),
    guid: z.string(),
    image: z.string().describe('Image data URI').optional(),
    imageHash: z.string().describe('Hash of the image').optional(),
  }),
])

/**
 * Schema for inspected element details (original: u)
 */
export const InspectedElementSchema = z.object({
  filePath: z.string(),
  snippetStartLine: z.number().describe('A 1-indexed line number for the start of the snippet'),
  tagLine: z.number().describe('The line that the selected element / tag is on. Also 1-indexed'),
  snippet: z.string(),
  tagName: z.string(),
  fileImports: z.string().optional(),
  componentHeader: z.string().optional(),
})

/**
 * Extended plain text/code schema for user content (original: p)
 */
export const UserContentSchema = PlainTextCodeSchema.merge(z.object({
  files: z.record(z.string(), z.string()).optional(),
  imports: ImportSchema.array().optional(),
  libraryKey: z.string().optional(),
  inspectedElement: InspectedElementSchema.optional(),
  errors: z.array(z.string()).optional(),
  requestUuid: z.string().optional(),
  retryType: z.enum(['unclosed_tags_benign', 'mid_stream_request_exceeds_context_limit']).optional(),
  selectedNodeIds: z.array(z.string()).optional(),
}))

/**
 * Schema for user role message (original: _)
 */
export const UserRoleSchema = z.object({
  role: z.literal('user'),
  content: z.discriminatedUnion('type', [
    z.object({ type: z.literal('content') }).merge(UserContentSchema),
  ]),
  nodeThumbnailBase64: z.string().optional(),
})

/**
 * Enum for message modes (original: h)
 */
export const MessageModeEnum = z.enum(['plan', 'work', 'summary', 'message', 'code'])

/**
 * Schema for code snapshot (original: m)
 */
export const CodeSnapshotSchema = z.object({
  codeSnapshotKey: z.string(),
  fileVersionId: z.string().optional(),
})

/**
 * Schema for code edit details (original: g)
 */
export const CodeEditSchema = z.object({
  id: z.string().optional(),
  oldString: z.string().optional(),
  newString: z.string().optional(),
  done: z.boolean().optional(),
  error: z.string().optional(),
})

/**
 * Extended plain text/code schema for assistant content (original: f)
 */
export const AssistantContentSchema = PlainTextCodeSchema.merge(z.object({
  mode: MessageModeEnum.optional(),
  reasoning: z.array(z.union([
    z.object({ text: z.string(), signature: z.string().optional() }),
    z.object({ data: z.string() }),
  ])).optional(),
  signedReasoning: z.object({
    text: z.string(),
    signature: z.string().optional(),
  }).optional(),
  redactedReasoning: z.string().optional(),
  codeSnapshot: CodeSnapshotSchema.optional(),
  title: z.string().optional(),
  edits: z.record(z.string(), CodeEditSchema).optional(),
  providerMetadata: z.object({
    openai: z.object({
      responseId: z.string().optional(),
    }).optional(),
  }).optional(),
}))

/**
 * Schema for tool call (original: $$E3)
 */
export const ToolCallSchema = z.object({
  type: z.literal('toolCall'),
  toolCallId: z.string(),
  toolName: z.string(),
  partialArgs: z.record(z.string(), z.any()),
})

/**
 * Schema for tool calls array (original: y)
 */
export const ToolCallsSchema = z.object({
  type: z.literal('toolCalls'),
  toolCalls: z.array(ToolCallSchema),
})

/**
 * Schema for assistant role message (original: b)
 */
export const AssistantRoleSchema = z.object({
  role: z.literal('assistant'),
  content: z.union([
    z.object({ type: z.literal('content') }).merge(AssistantContentSchema),
    ToolCallsSchema,
  ]),
  toolCalls: z.array(ToolCallSchema).optional(),
})

/**
 * Schema for tool call result (original: $$T4)
 */
export const ToolCallResultSchema = z.object({
  toolCallId: z.string(),
  toolName: z.string(),
  result: z.any(),
})

/**
 * Schema for tool results role message (original: I)
 */
export const ToolResultsRoleSchema = z.object({
  role: z.literal('toolResults'),
  content: ToolCallResultSchema.array(),
})

/**
 * Schema for tool role message (original: S)
 */
export const ToolRoleSchema = z.object({
  role: z.literal('tool'),
}).merge(ToolCallResultSchema)

/**
 * Schema for file change details (original: v)
 */
export const FileChangeSchema = z.object({
  path: z.string(),
  addedLines: z.number(),
  removedLines: z.number(),
})

/**
 * Discriminated union for system content types (original: A)
 */
export const SystemContentSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('restore'),
    restoredTo: z.string().optional(),
    codeSnapshot: CodeSnapshotSchema.optional(),
    title: z.string().optional(),
  }).merge(PlainTextCodeSchema),
  z.object({
    type: z.literal('manual_edit'),
    changedFiles: z.array(FileChangeSchema),
    codeSnapshot: CodeSnapshotSchema.optional(),
    title: z.string().optional(),
  }).merge(PlainTextCodeSchema),
  z.object({
    type: z.literal('duplicated_file'),
    plainText: z.string(),
    fileKeyHash: z.string(),
  }).merge(PlainTextCodeSchema),
  z.object({
    type: z.literal('deleted_chat_history'),
    timestamp: z.number(),
    userId: z.string().optional(),
  }).merge(PlainTextCodeSchema),
])

/**
 * Schema for system role message (original: x)
 */
export const SystemRoleSchema = z.object({
  role: z.literal('system'),
  content: SystemContentSchema.optional(),
})

/**
 * Discriminated union for chat message roles (original: N)
 */
export const ChatMessageSchema = z.discriminatedUnion('role', [
  AssistantRoleSchema,
  UserRoleSchema,
  ToolResultsRoleSchema,
  ToolRoleSchema,
  SystemRoleSchema,
])

/**
 * Schema for summarized chat (original: $$C1)
 */
export const ChatSummarySchema = z.object({
  totalSummarized: z.number(),
  summary: z.string(),
})

/**
 * Schema for chat compression (original: w)
 */
export const ChatCompressionSchema = z.object({
  force: z.boolean().optional(),
}).merge(ChatSummarySchema)

/**
 * Schema for code library component (original: O)
 */
export const CodeLibraryComponentSchema = z.object({
  key: z.string(),
  libraryKey: z.string(),
  version: z.number(),
})

/**
 * Main schema for chat and file exchange (original: $$R2)
 */
export const ChatExchangeSchema = z.object({
  chats: ChatMessageSchema.array(),
  files: z.record(z.string(), z.string()),
  chatCompression: ChatCompressionSchema.optional(),
  systemPromptOverride: z.string().optional(),
  supabase: z.object({
    projectId: z.string().optional(),
    publicAnonKey: z.string().optional(),
    makeNamespace: z.string().optional(),
    isConnectedNonOwner: z.boolean().optional(),
    secrets: z.array(z.string()).optional(),
  }).optional(),
  supabaseEnabled: z.boolean().optional(),
  codeLibraryComponents: z.array(CodeLibraryComponentSchema).optional(),
  rawUserChatDetails: UserMessageWithAttachmentsSchema.optional(),
  model: z.nativeEnum(AdvanceAIModel).optional(),
  entrypointFilePath: z.string().optional(),
  multiFileCodeLayersEnabled: z.boolean().optional(),
  productType: z.nativeEnum(ProductVariant).optional(),
}).extend({
  configKey: z.string(),
})

export const Ym = ProductVariant
export const _O = ChatSummarySchema
export const b0 = ChatExchangeSchema
export const gB = ToolCallSchema
export const z7 = ToolCallResultSchema

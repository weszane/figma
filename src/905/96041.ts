import { makeParser } from '@effect/experimental/Sse'
import { z } from 'zod'
import { completionReasonEnum, logprobsSchema, requestSchema, tokenUsageSchema } from '../905/31168'
import { ImageGenerationRequestSchema, ImageGenerationResponseSchema } from '../905/219321'
import { UserMessageWithAttachmentsSchema } from '../905/340201'
import { messageSchema } from '../905/374090'
import { toolChoiceSchema } from '../905/453712'
import { outputSchemaOptions } from '../905/460208'
import { ColorCornerRuleSchema, PropertyUpdatesSchema } from '../905/528903'
import { embeddingRequestSchema, embeddingResponseSchema } from '../905/541395'
import { ImageModelType, ImageSourceType } from '../905/585727'
import { ProviderValuesArray } from '../905/693198'
import { ChatCompletionChunkSchema, ChatCompletionRequestSchema, ChatCompletionResponseSchema, ChatMessagesArraySchema } from '../905/707076'
import { createToolCallSchema, UnifiedSchema } from '../905/712373'
import { createNodesRequestSchema, PromptModeSchema } from '../905/839044'
import { Base64ImageResponseSchema, ImageCreationSchema } from '../905/869092'
import { iconClassifierEndpointSchema, iconClassifierEndpointsResults } from '../905/889788'
import { getWAFActionType, WAFValidationHandlerInstance } from '../905/898440'
import { NodeSchema } from '../905/985467'
import { combinedSerializationOptionsSchema } from '../905/998509'
import { deserializeCortexErrorV2, isSerializedCortexErrorV2, OfflineError } from '../figma_app/316567'
import { ChatExchangeSchema, figMakeRequestMessageSchema } from '../figma_app/383733'
import { DeltaSchema, TextTonesProductTypeSchema } from '../figma_app/571325'
import { chatSchema as AiAssistantChatRequestSchema, aiAssistantChatSchema as AiAssistantChatResponseSchema } from '../figma_app/686647'
import { CortexError } from '../figma_app/691470'
import { ActionResponseSchema, ComponentPropertiesResponsesSchema, ConflictSchema, DesignImageSchema, FigmatePromptSchema, ImageRequestsSchema, ImageSchema, MobileDesignResponsesSchema, PromptHistorySchema, PromptPanelSchema, StateGroupRequestsSchema, ThemePresetSchema } from '../figma_app/705029'
import { createTrackEvent } from '../figma_app/970433'

let l = z.enum(['STICKY', 'SHAPE_WITH_TEXT', 'TEXT'], {
  invalid_type_error: 'Not an allowed type in summarize',
})
let d = z.record(z.number(), {
  description: 'A map from the name of the stamp to the number of instances it has on the given node',
})
let c = z.object({
  t: z.string({
    description: 'The text of the node',
  }),
  bounds: z.object({
    x: z.number(),
    y: z.number(),
    w: z.number(),
    h: z.number(),
  }).nullable(),
  id: z.string(),
  stamps: d.optional(),
  type: l,
})
let u = z.object({
  v: z.number({
    description: 'summarize request version',
  }),
  data: z.array(c),
  stream: z.boolean().optional(),
})

let m = z.object({
  delta: z.string(),
})

let g = z.enum(['TEXT', 'STICKY', 'CODE_BLOCK', 'SHAPE_WITH_TEXT', 'TABLE', 'EXPLORE_CLASS', 'EXPLORE_OPTION', 'GET_MORE_OPTION'])
let f = z.array(z.object({
  id: z.string(),
  type: g,
  text: z.string(),
}))
let _ = z.union([z.literal('ideate'), z.literal('quickQuestion'), z.literal('teachMeAbout'), z.literal('giveMeInit'), z.literal('giveMe'), z.literal('similarStuff'), z.literal('rabbitHoleInit'), z.literal('rabbitHole'), z.literal('summarize'), z.literal('rewriteThis'), z.literal('turnThisInto'), z.literal('code'), z.literal('custom'), z.literal('dev')])
let A = z.object({
  ideateDescription: z.string().optional(),
  quickQuestion: z.string().optional(),
  giveMeSelected: z.string().optional(),
  rabbitHoleSelected: z.string().optional(),
  summarizeSelected: z.string().optional(),
  rewriteThisDescription: z.string().optional(),
  turnThisIntoSelected: z.string().optional(),
  codeDescription: z.string().optional(),
  customPrompt: z.string().optional(),
  devSystemMessage: z.string().optional(),
  devPrefix: z.string().optional(),
})
let y = z.object({
  blockType: _,
  inputNodeData: f,
  widgetData: A,
})
let b = z.array(z.object({
  type: g,
  text: z.string(),
}))
let v = z.object({
  use_cache: z.boolean().optional().default(!0),
})

let W = z.union([z.enum(['anthropic-claude-3.7-sonnet', 'anthropic-claude-4-sonnet', 'gpt-4o-mini-2024-07-18']), z.string()])
let K = z.object({
  jsx: z.string().optional(),
  reasoning: z.string().optional(),
  trace: NodeSchema.optional(),
})

let q = z.object({
  jsxSerializerOverrides: combinedSerializationOptionsSchema.partial(),
  componentSerializerOverrides: combinedSerializationOptionsSchema.partial(),
  diffFormat: z.enum(['aider', 'jsxquery']),
  previewIncrementalEdits: z.boolean().optional(),
  generateReconciledJsx: z.boolean().optional(),
  silentOnNoChanges: z.boolean().optional(),
  disableSerializationTimeout: z.boolean().optional(),
  agentEnabled: z.boolean().optional(),
  allowMissingFonts: z.boolean().optional(),
  includeExtraContext: z.boolean().optional(),
  maxNodesToSerialize: z.number().optional(),
  modelId: W.optional(),
  selfHealing: z.boolean().optional(),
})
let $ = z.object({
  model: W.optional(),
  reasoningTokens: z.number().optional(),
  systemPrompt: z.string().optional(),
  userPrompt: z.string(),
  image: z.string().optional(),
  debugOptions: q.optional(),
})
let Z = z.object({
  ...$.shape,
  rawUserChatDetails: UserMessageWithAttachmentsSchema,
})

let MakeEditsDebugPromptRequestSchema = z.object({
  options: q,
})
let MakeEditsDebugPromptResponseSchema = z.object({
  systemPrompt: z.string(),
})

let J = ChatCompletionRequestSchema.and(v)

let ee = embeddingRequestSchema.and(v)
let chatRequestSchema = z.object({
  messages: ChatMessagesArraySchema,
})
let chatResponseSchema = ChatCompletionChunkSchema

let ImageEvaluatorRequestSchema = z.object({
  model: W,
  image1: z.string(),
  image2: z.string(),
  userPrompt: z.string(),
  systemPrompt: z.string(),
})
let ImageEvaluatorResponseSchema = z.object({
  content: z.enum(['0', '1']),
  rationale: z.string(),
})

let ea = z.object({
  model: z.string(),
  input: z.object({
    images: z.array(z.string()).optional(),
    image_s3_files: z.array(z.object({
      bucket: z.string(),
      key: z.string(),
      region: z.string().nullable(),
    })).optional(),
    text: z.array(z.string()).optional(),
  }),
})

let es = z.object({
  encoded_images: z.array(z.array(z.number())).optional(),
  encoded_text: z.array(z.array(z.number())).optional(),
})
let eo = z.object({
  requestUuid: z.string(),
  clusters: z.array(z.object({
    clusterName: z.string(),
    messages: z.array(z.string()),
  })),
})
let el = z.object({
  v: z.number(),
  tokenCount: z.number(),
  data: z.array(z.object({
    id: z.string(),
    text: z.string(),
  })),
})
let ed = z.union([z.literal('diagram'), z.literal('orgchart')])
let ec = z.union([z.literal('horizontal'), z.literal('vertical')])
let eu = z.object({
  id: z.string(),
  name: z.string(),
  team: z.string(),
  role: z.string(),
  location: z.string(),
  x: z.number(),
  y: z.number(),
})
let ep = z.object({
  id: z.string(),
  label: z.string(),
  shapeWithTextType: z.string(),
  x: z.number(),
  y: z.number(),
})
let em = z.object({
  startId: z.string(),
  endId: z.string(),
  label: z.string(),
})
let eh = z.object({
  requestId: z.string().optional(),
  type: ed,
  direction: ec,
  vertices: z.union([z.array(ep), z.array(eu)]),
  edges: z.array(em),
  trace: NodeSchema.optional(),
})
let eg = z.object({
  text: z.string(),
  rangePercent: z.number(),
})
let ef = z.object({
  text: z.string(),
  tasks: z.array(z.object({
    text: z.string(),
    dateText: z.string(),
    width: z.number(),
    x: z.number(),
    depth: z.number(),
    isMilestone: z.boolean(),
    isCrit: z.boolean(),
    isActive: z.boolean(),
    isDone: z.boolean(),
  })),
})
let e_ = z.object({
  requestId: z.string().optional(),
  title: z.string(),
  width: z.number(),
  numDays: z.number(),
  months: z.array(eg),
  categories: z.array(ef),
  trace: NodeSchema.optional(),
})
let eA = z.object({
  text: z.string(),
  rangePercent: z.number(),
})
let ey = z.object({
  x: z.number(),
  dateText: z.string(),
  text: z.string(),
  isMilestone: z.boolean(),
})
let eb = z.object({
  requestId: z.string().optional(),
  title: z.string(),
  width: z.number(),
  numDays: z.number(),
  months: z.array(eA),
  events: z.array(ey),
  trace: NodeSchema.optional(),
})
let ev = z.object({
  level: z.number(),
  descr: z.string(),
}).extend({
  children: z.lazy(() => ev.array()),
})
let eI = z.object({
  requestId: z.string().optional(),
  rootNode: ev,
  trace: NodeSchema.optional(),
})
let eE = z.union([ed, z.literal('gantt'), z.literal('timeline'), z.literal('mindmap')])
let ex = z.object({
  prompt: z.string(),
  visualType: eE,
  directMermaidText: z.string().optional(),
})
let eS = z.union([eh, e_, eb, eI])

let TextContentFromExamplesResponseSchema = z.object({
  trace: NodeSchema.optional(),
  cortex_error: z.object({
    type: z.string(),
    data: z.any(),
  }).optional(),
  result: z.record(z.string()).optional(),
})
let eC = z.array(z.object({
  defId: z.string(),
  fieldName: z.string(),
  instructions: z.string().optional(),
}))
let eT = z.object({
  defId: z.string(),
  fieldName: z.string(),
  value: z.string(),
})
let TextContentFromExamplesRequestSchema = z.object({
  v: z.number(),
  data: z.object({
    fieldsToValues: z.array(z.object({
      fields: z.array(eT),
    })),
    fieldsToUserInstructions: eC,
    numToAdd: z.number(),
    forceCacheMiss: z.boolean().optional(),
    userPrompt: z.string().optional(),
  }),
})

let eR = z.union([eE, z.literal('board')])

let eN = z.object({
  prompt: z.string(),
})
let eP = z.object({
  type: eR,
  trace: NodeSchema.optional(),
})

let eO = z.union([z.object({
  type: z.literal('TOPLEVEL'),
  variant: z.enum(['gpt', 'llama', 'gpt-fine-tuned', 'llama-fine-tuned', 'gpt-fine-tuned-v2', 'llama-fine-tuned-v2', 'gpt-fine-tuned-vision', 'llama-fine-tuned-vision', 'gpt-multi-stage-captioning', 'llama-multi-stage-captioning', 'ensemble', 'ensemble-v2']),
  topLevelFrames: z.string(),
  unfilteredScene: z.string(),
  imageBase64: z.string().optional(),
  debugTools: z.boolean().optional(),
}), z.object({
  type: z.literal('HOTSPOTS'),
  variant: z.literal('gpt'),
  selectedHotspots: z.string(),
  frameTextSummaries: z.string(),
  unfilteredScene: z.string(),
  selectedNodeIDs: z.string(),
  contextFrames: z.string(),
  debugTools: z.boolean().optional(),
})])

let eD = z.object({
  rationale: z.string().optional(),
  buttonID: z.string(),
  actionType: z.string(),
  destScreenID: z.string().nullable(),
  score: z.number().optional(),
})

let eU = z.literal('generate_ideas')
let eB = z.object({
  selectedNode: z.string(),
  parentHierarchy: z.array(z.string()),
  children: z.array(z.string()),
  excludedSuggestions: z.optional(z.array(z.string())),
})
let eV = z.discriminatedUnion('visualType', [z.object({
  visualType: z.literal('mindmap'),
  updateMode: eU,
})])
let eG = z.object({
  inputData: eB,
  updateType: eV,
})
let ez = z.object({
  image: z.string(),
})
let eH = z.object({
  mask: z.string(),
})
let eW = z.object({
  image: z.string(),
  imageCoordinates: z.object({
    x: z.number(),
    y: z.number(),
    width: z.number(),
    height: z.number(),
  }),
  modelOverride: z.optional(z.string()),
})
let eK = z.object({
  detections: z.array(z.object({
    score: z.number(),
    box: z.object({
      x: z.number(),
      y: z.number(),
      width: z.number(),
      height: z.number(),
    }),
  })),
})
let eq = z.enum(['chapter', 'slide'])
let e$ = z.object({
  type: eq,
  content: z.string(),
  role: z.string().optional(),
})
let eZ = z.object({
  title: z.string(),
  subtitle: z.string(),
  outlineItems: z.array(e$),
})
let eX = z.object({
  jsx: z.string(),
  thumbnailPublicURL: z.string().optional(),
})
let eQ = z.record(z.string(), eX)
let eJ = z.object({
  outline: eZ,
  layouts: eQ,
})
let e0 = z.enum(['presentation_title', 'chapter_title', 'agenda', 'content', 'comparison', 'process', 'summary', 'closing', 'text_focus', 'metric_focus', 'image_focus', 'design_mockup_focus'])
let e1 = z.object({
  layoutId: z.string(),
  role: e0,
  content: z.string(),
})

let e2 = z.discriminatedUnion('type', [z.object({
  type: z.literal('TRANSLATE'),
  language: z.string(),
}), z.object({
  type: z.literal('SHORTEN'),
}), z.object({
  type: z.literal('REWRITE_TEXT'),
  prompt: z.string(),
}), z.object({
  type: z.literal('CONTENT_FILL'),
  prompt: z.string(),
}), z.object({
  type: z.literal('REPLACE_SLIDE_CONTENT'),
  slideContent: z.string(),
  slideMetadata: z.record(z.string(), z.string()),
  outline: eZ,
})])
let e5 = z.object({
  id: z.string(),
  text: z.string(),
  context: z.string().optional(),
  guid: z.string().optional(),
})
let AdjustTextRequestSchema = z.union([z.object({
  action: e2,
  text: z.string(),
  surroundingContext: z.string().optional(),
}), z.object({
  action: e2,
  texts: e5.array(),
  jsonMode: z.boolean().optional(),
  surroundingContext: z.string().optional(),
})])
let AdjustTextResponseSchema = z.object({
  id: z.string().optional(),
  delta: z.string(),
})
let e7 = z.lazy(() => z.object({
  name: z.string().optional(),
  type: z.string(),
  id: z.string().optional(),
  x: z.number().optional(),
  y: z.number().optional(),
  w: z.number().optional(),
  h: z.number().optional(),
  text: z.string().optional(),
  autolayout: z.enum(['VERTICAL', 'HORIZONTAL', 'NONE']).optional(),
  children: z.array(e7).optional(),
}))
let e8 = z.union([z.object({
  nodeRepresentation: e7,
  imageB64: z.string(),
  isMeteringRequest: z.boolean().optional(),
  renameTopLayerOnly: z.boolean().optional(),
}), z.object({
  isMeteringRequest: z.literal(!0),
  nodes: z.array(z.object({
    rep: e7,
    image: z.string(),
  })),
  renameTopLayerOnly: z.boolean().optional(),
})])
let e9 = z.string()
let te = z.lazy(() => z.object({
  type: z.string(),
  name: z.string(),
  id: z.string(),
  text: z.string().optional(),
  children: z.array(te).optional(),
}))
let tt = z.array(z.array(z.string()))
let ti = z.object({
  nodeRepresentation: te,
  tabularData: tt,
})
let tn = z.object({
  guids: z.array(z.string()),
})
let designImageGenerateRequestSchema = z.object({
  prompt: z.string(),
  negativePrompt: z.string().default('blurry, bad'),
  cfgScale: z.number().default(8),
  seed: z.number().default(20),
  height: z.number().default(512),
  width: z.number().default(512),
  numImages: z.number().default(1),
  modelType: z.nativeEnum(ImageModelType).optional(),
})
let designImageGenerateResponseSchema = z.object({
  images: z.array(z.string()),
  metadata: z.object({
    height: z.number(),
    width: z.number(),
  }),
})
let tl = z.enum(['STICKY', 'SHAPE_WITH_TEXT', 'TEXT', 'SECTION'], {
  invalid_type_error: 'Not an allowed type in slides',
})
let td = z.object({
  t: z.string({
    description: 'The text of the node',
  }),
  type: tl,
})
let tc = z.object({
  version: z.string({
    description: 'slides request version',
  }),
  data: z.array(td),
})

let tu = z.enum(['h1', 'h2', 'h3', 'h4', 'li', 'p'])
let tp = z.object({
  type: tu,
  content: z.string(),
})
let tm = z.object({
  slideType: z.enum(['TITLE', 'CHAPTER', 'BODY']),
  content: z.array(tp),
})

let tf = z.object({
  text: z.string(),
  x: z.number(),
  y: z.number(),
}).array()
let t_ = z.object({
  texts: tf,
  image: z.string().optional(),
})
let tA = z.object({
  delta: z.string(),
})
let ty = z.object({
  image_url: z.string(),
})
let tb = z.object({
  base64_image: z.string(),
})
let tv = z.object({
  input: z.object({
    image: z.string(),
  }),
  numDesigns: z.number().optional(),
})
let tI = z.object({
  jsx: z.array(z.string()).or(z.array(z.array(z.string()))),
})

let tE = z.object({
  image: z.string(),
  candidates: z.array(z.string()),
})
let tx = z.object({
  bestCandidateIndex: z.number(),
  candidateSimilarities: z.array(z.number()),
  bestSimilarity: z.number(),
})
let UIParserRequestSchema = z.object({
  png_b64: z.string(),
})
let tw = z.object({
  cls: z.string(),
  x: z.number(),
  y: z.number(),
  width: z.number(),
  height: z.number(),
  mask: z.string(),
}).passthrough()
let UIParserResponseSchema = z.object({
  width: z.number(),
  height: z.number(),
  objects: z.array(tw),
}).passthrough()
let tT = z.enum(['STICKY', 'SHAPE_WITH_TEXT', 'TEXT'], {
  invalid_type_error: 'Not an allowed type in ideate',
})
let tk = z.enum(['IMG'])
let tR = z.object({
  guid: z.string(),
  type: tT,
  text: z.string(),
  aiParentPromptId: z.string().optional(),
})
let tN = z.object({
  guid: z.string(),
  type: tk,
  imgUri: z.string(),
  aiParentPromptId: z.string().optional(),
})
let tP = z.discriminatedUnion('type', [tR, tN])
let tO = z.object({
  id: z.string(),
  userPrompt: z.string(),
  selectedNodesPromptedOn: z.array(z.string()),
})
let tD = z.object({
  selectedNodes: z.array(tP).optional(),
  otherRelevantNodes: z.array(tP).optional(),
  previousPrompts: z.array(tO).optional(),
  userPrompt: z.string().optional(),
  generateUserPromptFromTexts: z.boolean().default(!1),
  nodeTextContents: z.array(z.string()),
  nodeImageContents: z.array(z.string()),
})
let tL = z.object({
  data: z.array(z.string()),
  enhancedPrompt: z.string().optional(),
})
let tF = z.object({
  selectedNodes: z.array(tP).optional(),
  otherRelevantNodes: z.array(tP).optional(),
  previousPrompts: z.array(tO).optional(),
  userPrompt: z.string().optional(),
  shouldEnhancePrompt: z.boolean().default(!1),
  targetWidth: z.number(),
  targetHeight: z.number(),
  nodeTextContents: z.array(z.string()),
  nodeImageContents: z.array(z.string()),
})
let tM = z.object({
  base64Image: z.string(),
  enhancedPrompt: z.string().optional(),
})
let tj = z.object({
  userPrompt: z.string(),
  imageContents: z.array(z.string()),
  outputType: z.enum(['image', 'ideas']),
})
let tU = z.object({
  data: z.string(),
})
let tV = z.object({
  description: z.string(),
  image: z.string(),
  modelType: z.nativeEnum(ImageSourceType),
})
let tG = z.object({
  jsx: z.string(),
  id: z.string(),
  width: z.number(),
  height: z.number(),
  modelType: z.nativeEnum(ImageSourceType).optional(),
})
let tW = z.object({
  fileKey: z.string().optional().nullable(),
  fileOrgId: z.number().optional().nullable(),
  userId: z.number().optional().nullable(),
})
let GenerateTextRequestSchema = requestSchema.merge(tW)
let GenerateTextResponseSchema = z.object({
  text: z.string(),
  usage: tokenUsageSchema,
  logprobs: z.optional(logprobsSchema),
})
let ClipdropUpscaleRequestSchema = z.object({
  image_url: z.string(),
  width: z.number().min(1).max(4096),
  height: z.number().min(1).max(4096),
})
let ClipdropUpscaleResponseSchema = z.object({
  base64_image: z.string(),
})
let tX = z.object({
  type: z.literal('collection'),
  collectionName: z.string().describe('Name of the collection'),
})
let tQ = z.object({
  type: z.literal('field'),
  fieldType: z.enum(['PLAIN_TEXT', 'SLUG', 'IMAGE', 'RICH_TEXT', 'LINK']).describe('Type of the field, based on the specifics of the content we are displaying in this collection'),
  name: z.string().describe('Name of the field'),
  reasoning: z.string().describe('Reasoning for the field'),
  confidence: z.number().min(0).max(1).describe('Confidence score between 0 and 1'),
})
let tJ = z.object({
  type: z.literal('item'),
  fieldName: z.string().describe('Name of the field'),
  value: z.string().describe('Value of the field'),
  collectionItemId: z.string().describe('Unique ID for the item'),
})
let StreamCMSCollectionResponseSchema = z.discriminatedUnion('type', [tX, tQ, tJ])
let StreamCMSCollectionRequestSchema = z.object({
  prompt: z.string(),
})
let FirstDraftFineTuneRequestSchema = z.object({
  userPrompt: z.string(),
})
let FirstDraftFineTuneResponseSchema = z.object({
  jsx: z.string().optional(),
  trace: NodeSchema.optional(),
})
let TextEmbedRequestSchema = ProviderValuesArray.extend({
  values: z.array(z.string()),
})
let TextEmbedResponseSchema = z.object({
  embeddings: z.array(z.array(z.number())),
})
let GenerateObjectRequestSchema = outputSchemaOptions.omit({
  output: !0,
  schema: !0,
  schemaName: !0,
  schemaDescription: !0,
}).merge(tW)
let GenerateObjectResponseSchema = z.object({
  object: z.any(),
  usage: tokenUsageSchema,
  logprobs: z.optional(logprobsSchema),
})
let StreamObjectResponseSchema = z.union([z.object({
  type: z.literal('object'),
  object: z.any(),
}), z.object({
  type: z.literal('text-delta'),
  textDelta: z.string(),
}), z.object({
  type: z.literal('error'),
  error: z.any(),
}), z.object({
  type: z.literal('finish'),
  finishReason: completionReasonEnum,
  usage: tokenUsageSchema,
})])
let AutosuggestTextRequestSchema = z.object({
  jsx: z.string(),
  nodeId: z.string(),
  suggestionType: z.number().optional(),
  existingText: z.string().optional(),
  startingChar: z.string().optional(),
})
let AutosuggestTextResponseSchema = z.object({
  suggestions: z.array(z.string()),
  usage: z.object({
    promptTokens: z.number(),
    completionTokens: z.number(),
    totalTokens: z.number(),
    logprobs: z.object({
      token: z.string(),
      logprob: z.number(),
    }).array().optional(),
  }),
})
let GenerationErrorLogRequestSchema = z.object({
  clientLifecycleId: z.string(),
  requestUuid: z.string(),
  phase: z.string(),
  generationIndex: z.number(),
  featureType: z.union([z.literal('figmake'), z.literal('code_in_sites'), z.literal('ai_assistant'), z.literal('figmake_in_design')]),
  error: z.string(),
})
let is = z.object({
  text: z.string(),
  layout: z.string(),
})
let io = z.object({
  layout: z.string(),
})
let il = z.enum(['minimal', 'concise', 'detailed', 'extensive'])
let id = z.enum(['auto', 'pitch', 'product_showcase', 'product_management', 'sales', 'proposal', 'research_report', 'knowledge', 'meeting', 'portfolio'])
let ic = z.enum(['chapter', 'slide'])
let iu = z.object({
  slideCount: z.number().min(1).max(25),
  textDensity: il,
  usecase: id,
})
let ip = z.object({
  description: z.string(),
  deckOptions: iu,
})
let im = z.discriminatedUnion('type', [z.object({
  type: z.literal('DECK_TITLE'),
  delta: z.string(),
}), z.object({
  type: z.literal('DECK_SUBTITLE'),
  delta: z.string(),
}), z.object({
  type: z.literal('OUTLINE_ITEM_TYPE'),
  itemType: ic,
  index: z.number(),
}), z.object({
  type: z.literal('OUTLINE_ITEM_ROLE'),
  itemType: z.literal('slide'),
  index: z.number(),
  delta: z.string(),
}), z.object({
  type: z.literal('OUTLINE_ITEM_CONTENT'),
  itemType: ic,
  index: z.number(),
  delta: z.string(),
})])
let ih = z.object({
  name: z.string(),
  code: z.string(),
})
let ig = z.object({
  code: z.string(),
})
let i_ = z.object({
  name: z.string(),
  fontFamily: z.string().optional(),
  fontWeight: z.string().optional(),
  fontSize: z.number().optional(),
  lineHeight: z.string().optional(),
})
let ExtractLibraryCssRequestSchema = z.object({
  variables: z.array(z.string()),
  textStyles: z.array(i_),
  componentsForVariables: z.array(ih),
  componentsForTypography: z.array(ih),
  fragments: z.array(ig),
})
let ExtractLibraryCssResponseSchema = z.object({
  typography: z.string(),
  cssVariables: z.string(),
  globalCss: z.string(),
})
let FigmakeEnhancePromptRequestSchema = z.object({
  prompt: z.string(),
  selection: z.object({
    text: z.string(),
    start: z.number().optional(),
  }).optional(),
})
let FigmakeEnhancePromptResponseSchema = z.object({
  delta: z.string(),
})
let MakeEditsAgentRequestSchema = z.object({
  messages: z.array(messageSchema).readonly(),
})
let iw = createTrackEvent({
  name: 'apply_jsx_diff',
  trackingName: 'apply_jsx_diff',
  parameters: z.object({
    reasoning: z.string().describe('Reasoning for the changes being made to the JSX. Always provide reasoning as the first parameter, not second.'),
    diff: z.string().describe('The aider or jsxquery diff to apply to the user\'s Figma design JSX.'),
  }),
})
let iC = createToolCallSchema(iw)
let MakeEditsAgentResponseSchema = z.union([iC, UnifiedSchema])
let PingRequestSchema = z.object({
  fileKeyHash: z.string(),
})
let iR = z.object({
  files: z.record(z.string()),
  mainComponent: z.string(),
  forceProvision: z.boolean().optional(),
})
let UploadCodeRequestSchema = z.intersection(iR, PingRequestSchema)
let UploadCodeResponseSchema = z.object({
  id: z.string(),
  namespace: z.string(),
  status: z.string(),
  urls: z.record(z.string()).optional(),
  upload_status: z.string(),
  esm: z.string().nullable(),
  css: z.string().nullable(),
  sourcemap: z.string().nullable(),
  fileCount: z.number().optional(),
})
let iO = z.object({
  filesToUpsert: z.record(z.string()),
  filePathsToDelete: z.array(z.string()),
})
let BundleRequestSchema = z.intersection(iO, PingRequestSchema)
let BundleResponseSchema = z.union([z.object({
  success: z.literal(!0),
  esm: z.string(),
  css: z.string(),
  sourcemap: z.string(),
}), z.object({
  success: z.literal(!1),
  error: z.string(),
})])
let iF = z.object({
  forceProvision: z.boolean().optional(),
})
let SandboxRequestSchema = z.intersection(iF, PingRequestSchema)
let SandboxResponseSchema = z.object({
  id: z.string(),
  namespace: z.string(),
  status: z.string(),
  urls: z.record(z.string()),
})
let PingResponseSchema = z.object({})
export enum VEOModelEnum {
  VEO3 = 'veo-3.0-generate-preview',
  VEO2 = 'veo-2.0-generate-001',
  VEO3_FAST = 'veo-3.0-fast-generate-preview',
}

let VideoGenerationRequestSchema = z.object({
  prompt: z.string(),
  imageUrls: z.array(z.string()).optional(),
  lastFrame: z.string().optional(),
  video: z.string().optional(),
  aspectRatio: z.string().optional(),
  durationSeconds: z.number().optional(),
  resolution: z.string().optional(),
  generateAudio: z.boolean().optional(),
  modelType: z.nativeEnum(VEOModelEnum).optional(),
})
let VideoPollRequestSchema = z.object({
  operationId: z.string(),
})
let VideoGenerationResponseSchema = z.object({
  operationId: z.string(),
})
let VideoPollResponseSchema = z.object({
  video: z.string().optional(),
  done: z.boolean(),
})
/**
 * Builds HTTP headers for Cortex API requests
 * @param context - Optional request context containing metadata
 * @returns Headers object with Content-Type and optional metadata headers
 */
function buildCortexHeaders(context?: {
  orgId?: string
  teamId?: string
  fileKey?: string
  userId?: string
  clientLifecycleId?: string
  persistentEntityId?: string
  trackingSessionId?: string
  clientGeneratedRequestUuid?: string
  fileSeq?: string
}): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  if (context != null) {
    const {
      orgId,
      teamId,
      fileKey,
      userId,
      clientLifecycleId,
      persistentEntityId,
      trackingSessionId,
      clientGeneratedRequestUuid,
      fileSeq,
    } = context

    headers['X-Figma-Org-ID'] = orgId ?? ''
    headers['X-Figma-Team-ID'] = teamId ?? ''
    headers['X-Figma-File-Key'] = fileKey ?? ''
    headers['X-Figma-File-Seq'] = fileSeq ?? ''
    headers['X-Figma-User-ID'] = userId ?? ''
    headers['X-Figma-Client-Lifecycle-ID'] = clientLifecycleId ?? ''
    headers['X-Figma-Persistent-Entity-ID'] = persistentEntityId ?? ''
    headers['X-Figma-Cortex-Client-Generated-Request-UUID'] = clientGeneratedRequestUuid ?? ''
    headers.Tsid = trackingSessionId ?? ''
    headers['X-Referer-Service'] = 'web'
  }

  return headers
}

// Global registry for API endpoints
const apiEndpointRegistry: Array<{
  route: string
  requestSchema: z.ZodSchema<any>
  responseSchema?: z.ZodSchema<any>
  streamMessageSchema?: z.ZodSchema<any>
  clientFunction: Fn
}> = []

/**
 * Wraps an API endpoint with error handling, header management, and response parsing
 * @param route - API route path
 * @param requestSchema - Zod schema for request validation
 * @param responseSchema - Zod schema for response validation
 * @param options - Configuration options
 * @returns Async function that makes the API call
 */
function wrapEndpoint<TRequest, TResponse>(
  route: string,
  requestSchema: z.ZodSchema<TRequest>,
  responseSchema: z.ZodSchema<TResponse>,
  options: {
    buildExtraHeaders?: () => Record<string, string>
    onError?: (route: string) => void
  },
): (request: TRequest, context: any, abortController?: AbortController) => Promise<TResponse> {
  async function makeRequest(
    request: TRequest,
    context: any,
    abortController?: AbortController,
  ): Promise<TResponse> {
    let response: Response
    let headers = buildCortexHeaders(context)

    if (options.buildExtraHeaders) {
      const extraHeaders = structuredClone(headers)
      Object.assign(headers = options.buildExtraHeaders(), extraHeaders)
    }

    const parsedRequest = requestSchema.parse(request)

    try {
      const doFetch = () => (globalThis.fetch ?? fetch)(route, {
        method: 'POST',
        headers,
        body: JSON.stringify(parsedRequest),
        signal: abortController?.signal,
      })

      response = await doFetch()

      if (response.ok) {
        const wafAction = getWAFActionType(response)
        if (wafAction) {
          await WAFValidationHandlerInstance.waitForWAFValidation(wafAction)
          response = await doFetch()
        }
      }
    }
    catch (error) {
      if (isNetworkError(error)) {
        throw createOfflineError(error, 'wrapEndpoint: offline')
      }
      throw error
    }

    if (!response.ok) {
      throw await createCortexError(route, response)
    }

    const jsonResponse = await response.json()
    return responseSchema.parse(jsonResponse)
  }

  return async function (request: TRequest, context: any, abortController?: AbortController) {
    try {
      return await makeRequest(request, context, abortController)
    }
    catch (error) {
      options.onError?.(route)
      throw error
    }
  }
}

/**
 * Creates a standard API endpoint function
 * @param route - API route path
 * @param requestSchema - Zod schema for request validation
 * @param responseSchema - Zod schema for response validation
 * @param options - Configuration options
 * @returns Client function for the endpoint
 */
function createStandardEndpoint<TRequest, TResponse>(
  route: string,
  requestSchema: z.ZodSchema<TRequest>,
  responseSchema: z.ZodSchema<TResponse>,
  options: {
    buildExtraHeaders?: () => Record<string, string>
    onError?: (route: string) => void
  },
): (request: TRequest, abortController?: AbortController) => Promise<TResponse> {
  const endpoint = wrapEndpoint(route, requestSchema, responseSchema, options)
  const clientFunction = (request: TRequest, abortController?: AbortController) =>
    endpoint(request, null, abortController)

  apiEndpointRegistry.push({
    route,
    requestSchema,
    responseSchema,
    clientFunction,
  })

  return clientFunction
}

/**
 * Creates an API endpoint function that passes context
 * @param route - API route path
 * @param requestSchema - Zod schema for request validation
 * @param responseSchema - Zod schema for response validation
 * @param options - Configuration options
 * @returns Client function for the endpoint
 */
function createContextEndpoint<TRequest, TResponse>(
  route: string,
  requestSchema: z.ZodSchema<TRequest>,
  responseSchema: z.ZodSchema<TResponse>,
  options: {
    buildExtraHeaders?: () => Record<string, string>
    onError?: (route: string) => void
  },
): (request: TRequest, context: any, abortController?: AbortController) => Promise<TResponse> {
  const endpoint = wrapEndpoint(route, requestSchema, responseSchema, options)

  apiEndpointRegistry.push({
    route,
    requestSchema,
    responseSchema,
    clientFunction: endpoint,
  })

  return endpoint
}

/**
 * Wraps a streaming API endpoint with SSE parsing and error handling
 * @param route - API route path
 * @param requestSchema - Zod schema for request validation
 * @param streamMessageSchema - Zod schema for stream message validation
 * @param options - Configuration options
 * @returns Async function that makes the streaming API call
 */
function wrapStreamingEndpoint<TRequest, TStreamMessage>(
  route: string,
  requestSchema: z.ZodSchema<TRequest>,
  streamMessageSchema: z.ZodSchema<TStreamMessage>,
  options: {
    buildExtraHeaders?: () => Record<string, string>
    onError?: (route: string) => void
  },
): (request: TRequest, context: any, abortController?: AbortController) => Promise<ReadableStream<TStreamMessage>> {
  async function makeStreamingRequest(
    request: TRequest,
    context: any,
    abortController?: AbortController,
  ): Promise<ReadableStream<TStreamMessage>> {
    let response: Response
    let headers = buildCortexHeaders(context)

    if (options.buildExtraHeaders) {
      const extraHeaders = structuredClone(headers)
      Object.assign(headers = options.buildExtraHeaders(), extraHeaders)
    }

    const parsedRequest = requestSchema.parse(request)

    try {
      const doFetch = () => (globalThis.fetch ?? fetch)(route, {
        method: 'POST',
        headers,
        body: JSON.stringify(parsedRequest),
        signal: abortController?.signal,
      })

      response = await doFetch()

      if (response.ok) {
        const wafAction = getWAFActionType(response)
        if (wafAction) {
          await WAFValidationHandlerInstance.waitForWAFValidation(wafAction)
          response = await doFetch()
        }
      }
    }
    catch (error) {
      if (isNetworkError(error)) {
        throw createOfflineError(error, 'wrapEndpointStreaming: offline')
      }
      throw error
    }

    if (!response.ok) {
      throw await createCortexError(route, response)
    }

    if (!response.body) {
      throw new CortexError('generic', {
        message: `Failed to fetch ${route}, no body`,
        status: response.status,
      })
    }

    // Parse SSE stream
    let stream = response.body
      .pipeThrough(createSSEParser())
      .pipeThrough(createEventProcessor(streamMessageSchema))

    // Add request UUID if present
    const requestUuid = response.headers.get('X-Cortex-Request-UUID')
    if (shouldIncludeRequestUuid(streamMessageSchema, requestUuid)) {
      stream = stream.pipeThrough(createRequestUuidStream(requestUuid!))
    }

    // Process trace data and validate messages
    return stream
      .pipeThrough(createTraceProcessor(context, streamMessageSchema))
      .pipeThrough(createMessageValidator(streamMessageSchema))
  }

  return async function (request: TRequest, context: any, abortController?: AbortController) {
    try {
      return await makeStreamingRequest(request, context, abortController)
    }
    catch (error) {
      options.onError?.(route)
      throw error
    }
  }
}

/**
 * Creates an SSE parser transform stream
 */
function createSSEParser(): TransformStream<Uint8Array, any> {
  let parser: ReturnType<typeof makeParser>
  const decoder = new TextDecoder()

  return new TransformStream({
    start(controller) {
      parser = makeParser(event => controller.enqueue(event))
    },
    transform(chunk) {
      parser.feed(decoder.decode(chunk))
    },
  })
}

/**
 * Creates an event processor for SSE events
 */
function createEventProcessor(_schema: z.ZodSchema<any>): TransformStream<any, any> {
  return new TransformStream({
    transform(event, controller) {
      if (event.type === 'event') {
        try {
          const data = JSON.parse(event.data)
          const cortexError = parseCortexError(data)
          if (cortexError !== null) {
            controller.error(cortexError)
            return
          }
          controller.enqueue(data)
        }
        catch (error) {
          controller.error(new CortexError('generic', {
            message: `Unable to parse streaming event: ${error}`,
          }))
        }
      }
    },
  })
}

/**
 * Checks if request UUID should be included in stream
 */
function shouldIncludeRequestUuid(
  schema: z.ZodSchema<any>,
  requestUuid: string | null,
): boolean {
  if (!requestUuid)
    return false

  const result = schema.safeParse({ requestUuid })
  return result.success
    && result.data
    && typeof result.data === 'object'
    && Object.keys(result.data).length !== 0
}

/**
 * Creates a stream that enqueues request UUID as first message
 */
function createRequestUuidStream(requestUuid: string): TransformStream<any, any> {
  const data = { requestUuid }
  return new TransformStream({
    start(controller) {
      controller.enqueue(data)
    },
    transform(chunk, controller) {
      controller.enqueue(chunk)
    },
  })
}

/**
 * Creates a trace processor for execution traces
 */
function createTraceProcessor(
  context: any,
  schema: z.ZodSchema<any>,
): TransformStream<any, any> {
  return new TransformStream({
    transform(chunk, controller) {
      const trace = extractTraceFromChunk(chunk)
      if (!trace) {
        controller.enqueue(chunk)
        return
      }

      storeExecutionTrace(context, trace)

      if (schema.safeParse({ trace }).success) {
        controller.enqueue({ trace })
      }
    },
  })
}

/**
 * Extracts trace from chunk if present
 */
function extractTraceFromChunk(chunk: any) {
  if (chunk == null
    || typeof chunk !== 'object'
    || !('trace' in chunk)
    || chunk.trace == null) {
    return null
  }

  const parseResult = NodeSchema.safeParse(chunk.trace)
  return parseResult.success ? parseResult.data : null
}

/**
 * Stores execution trace in IndexedDB
 */
function storeExecutionTrace(context: any, trace: any): void {
  try {
    const fileKey = context?.fileKey
    if (!trace || !fileKey || typeof indexedDB === 'undefined')
      return

    const dbName = 'cortex-execution-traces'
    const storeName = 'traces'
    const request = indexedDB.open(dbName, 1)

    request.onupgradeneeded = function () {
      if (!this.result.objectStoreNames.contains(storeName)) {
        this.result.createObjectStore(storeName, { keyPath: 'fileKey' })
      }
    }

    request.onsuccess = function () {
      const db = this.result
      const transaction = db.transaction(storeName, 'readwrite')
      const store = transaction.objectStore(storeName)
      const getReq = store.get(fileKey)

      getReq.onsuccess = () => {
        let record = getReq.result
        if (record && Array.isArray(record.traces)) {
          console.debug(dbName, 'adding new trace to record', fileKey)
          record.traces.push(trace)
        }
        else {
          console.debug(dbName, 'creating new record', fileKey)
          record = { fileKey, traces: [trace] }
        }

        const putReq = store.put(record)
        putReq.onsuccess = () => {
          const getAllReq = store.getAllKeys()
          getAllReq.onsuccess = () => {
            const keys = getAllReq.result.filter(key => key !== fileKey)
            if (keys.length > 30) {
              const randomKey = keys[Math.floor(Math.random() * keys.length)]
              store.delete(randomKey)
              console.debug(dbName, 'deleted record', randomKey)
            }
          }
        }

        putReq.onerror = (event) => {
          console.error('Error storing execution trace in IndexedDB', dbName, event)
        }
      }

      getReq.onerror = (event) => {
        console.error('Error reading execution trace from IndexedDB', dbName, event)
      }
    }

    request.onerror = (event) => {
      console.error(`Error opening ${dbName} db`, event)
    }
  }
  catch (error) {
    console.error('Error storing execution trace', error)
  }
}

/**
 * Creates a message validator transform stream
 */
function createMessageValidator<T>(schema: z.ZodSchema<T>): TransformStream<any, T> {
  return new TransformStream({
    transform(chunk, controller) {
      let parsed: T
      try {
        parsed = schema.parse(chunk)
      }
      catch (error) {
        controller.error(error)
        console.error('ERROR PARSING ZOD', error)
        return
      }

      try {
        controller.enqueue(parsed)
      }
      catch (error) {
        console.error('ERROR ENQUEUEING ZOD', error)
      }
    },
  }, new CountQueuingStrategy({ highWaterMark: 100 }), new CountQueuingStrategy({ highWaterMark: 100 }))
}

/**
 * Creates a streaming API endpoint function
 * @param route - API route path
 * @param requestSchema - Zod schema for request validation
 * @param streamMessageSchema - Zod schema for stream message validation
 * @param options - Configuration options
 * @returns Client function for the streaming endpoint
 */
function createStreamingEndpoint<TRequest, TStreamMessage>(
  route: string,
  requestSchema: z.ZodSchema<TRequest>,
  streamMessageSchema: z.ZodSchema<TStreamMessage>,
  options: {
    buildExtraHeaders?: () => Record<string, string>
    onError?: (route: string) => void
  },
): (request: TRequest, abortController?: AbortController) => Promise<ReadableStream<TStreamMessage>> {
  const endpoint = wrapStreamingEndpoint(route, requestSchema, streamMessageSchema, options)
  const clientFunction = (request: TRequest, abortController?: AbortController) =>
    endpoint(request, null, abortController)

  apiEndpointRegistry.push({
    route,
    requestSchema,
    streamMessageSchema,
    clientFunction,
  })

  return clientFunction
}

/**
 * Creates a streaming API endpoint function that passes context
 * @param route - API route path
 * @param requestSchema - Zod schema for request validation
 * @param streamMessageSchema - Zod schema for stream message validation
 * @param options - Configuration options
 * @returns Client function for the streaming endpoint
 */
function createContextStreamingEndpoint<TRequest, TStreamMessage>(
  route: string,
  requestSchema: z.ZodSchema<TRequest>,
  streamMessageSchema: z.ZodSchema<TStreamMessage>,
  options: {
    buildExtraHeaders?: () => Record<string, string>
    onError?: (route: string) => void
  },
): (request: TRequest, context: any, abortController?: AbortController) => Promise<ReadableStream<TStreamMessage>> {
  const endpoint = wrapStreamingEndpoint(route, requestSchema, streamMessageSchema, options)

  apiEndpointRegistry.push({
    route,
    requestSchema,
    streamMessageSchema,
    clientFunction: endpoint,
  })

  return endpoint
}

/**
 * Checks if an error is a network error
 */
function isNetworkError(error: any): boolean {
  const message = error.message
  return typeof message === 'string' && (
    message === 'Failed to fetch'
    || message === 'TypeError: Load failed'
    || message.includes('NetworkError')
    || message.toLowerCase().includes('network error')
  )
}

/**
 * Creates an offline error
 */
function createOfflineError(error: any, defaultMessage: string) {
  const message = typeof error.message === 'string' ? error.message : defaultMessage
  return new OfflineError({
    message,
    stack: error.stack,
  })
}

/**
 * Creates a Cortex error from HTTP response
 */
async function createCortexError(route: string, response: Response): Promise<Error> {
  let json: any
  try {
    json = await response.json()
  }
  catch (parseError) {
    switch (response.status) {
      case 404:
        return new CortexError('service_busy', {
          message: 'Not found',
          status: response.status,
        })
      case 502:
        return new CortexError('service_busy', {
          message: 'Bad Gateway',
          status: response.status,
        })
      case 504:
        return new CortexError('service_busy', {
          message: 'Gateway Timeout',
          status: response.status,
        })
      default:
        return new CortexError('generic', {
          message: `Unable to parse non-OK response: ${parseError}`,
          status: response.status,
        })
    }
  }

  const cortexError = parseCortexError(json)
  if (cortexError !== null) {
    cortexError.sentryTags = {
      request_uuid: json.request_uuid || json.requestUuid,
    }
    return cortexError
  }

  const errorObj = json !== null && typeof json === 'object' && json.error ? json.error : null
  return errorObj != null
    ? errorObj
    : new CortexError('generic', {
      message: `Failed to fetch ${route}`,
      status: response.status,
    })
}

/**
 * Parses Cortex error from JSON response
 */
function parseCortexError(json: any): CortexError | null {
  if (isSerializedCortexErrorV2(json)) {
    return deserializeCortexErrorV2(json)
  }

  if (json !== null
    && typeof json === 'object'
    && json.cortex_error) {
    return new CortexError(
      json.cortex_error.type,
      json.cortex_error.data,
      undefined,
      undefined,
      json.cortex_error.trace,
    )
  }

  return null
}
export function createCortexAPI(e = {}) {
  let t = e ?? {}
  return {
    openai: {
      completeChat: createStandardEndpoint('/api/cortex/dev/openai/chat/completions', J, ChatCompletionResponseSchema, t),
      streamChat: createStreamingEndpoint('/api/cortex/dev/openai/chat/completions', J, ChatCompletionChunkSchema, t),
      computeEmbeddings: createStandardEndpoint('/api/cortex/dev/openai/embeddings', ee, embeddingResponseSchema, t),
    },
    figjam: {
      cluster: createContextEndpoint('/api/cortex/figjam/cluster', el, eo, t),
      streamSummarize: createContextStreamingEndpoint('/api/cortex/figjam/summarize', u, m, t),
      jamGPT: createContextEndpoint('/api/cortex/figjam/jamgpt', y, b, t),
      createTemplate: createContextStreamingEndpoint('/api/cortex/figjam/create_template', PromptModeSchema, createNodesRequestSchema, t),
      createVisual: createContextEndpoint('/api/cortex/figjam/create_visual', ex, eS, t),
      classifyCreate: createContextEndpoint('/api/cortex/figjam/classify_create', eN, eP, t),
      updateVisual: createContextEndpoint('/api/cortex/figjam/update_visual', eG, eI, t),
      canvasIdeate: createContextEndpoint('/api/cortex/figjam/canvas/ideate', tD, tL, t),
      canvasMakeImageFromImages: createContextEndpoint('/api/cortex/figjam/canvas/make_image_from_canvas_content', tF, tM, t),
      canvasEnhancePrompt: createContextEndpoint('/api/cortex/figjam/canvas/enhance_prompt', tj, tU, t),
    },
    slides: {
      createSlides: createContextStreamingEndpoint('/api/cortex/slides/create_slides', tc, tm, t),
      rewriteText: createContextStreamingEndpoint('/api/cortex/slides/rewrite_text', TextTonesProductTypeSchema, DeltaSchema, t),
      speakerNotes: createContextStreamingEndpoint('/api/cortex/slides/speaker_notes', t_, tA, t),
      layoutSwap: createContextEndpoint('/api/cortex/slides/layout/swap', is, io, t),
      generateOutline: createContextStreamingEndpoint('/api/cortex/slides/outline/generate', ip, im, t),
      createDeckFromOutline: createContextStreamingEndpoint('/api/cortex/slides/outline/create_deck', eJ, e1, t),
    },
    design: {
      generateTextContentFromExamples: createContextStreamingEndpoint('/api/cortex/design/editor_ai/content_fill/generate_from_examples', TextContentFromExamplesRequestSchema, TextContentFromExamplesResponseSchema, t),
      generateImages: createContextEndpoint('/api/cortex/design/editor_ai/images/generate', designImageGenerateRequestSchema, designImageGenerateResponseSchema, t),
      generateVideo: createContextEndpoint('/api/cortex/design/editor_ai/video/generate', VideoGenerationRequestSchema, VideoGenerationResponseSchema, t),
      pollVideo: createContextEndpoint('/api/cortex/design/editor_ai/video/poll', VideoPollRequestSchema, VideoPollResponseSchema, t),
      generateMagicLinkV2: createContextStreamingEndpoint('/api/cortex/design/prototyping/magic_link_v2', eO, eD, t),
      iconClassifier: createContextEndpoint('/api/cortex/design/prototyping/icon_classifier', iconClassifierEndpointSchema, iconClassifierEndpointsResults, t),
      backgroundSegmentation: createContextEndpoint('/api/cortex/design/editor_ai/image_background_segmentation', ez, eH, t),
      sectionDetection: createContextEndpoint('/api/cortex/dev/inference/image_section_detection', eW, eK, t),
      generateRenameLayers: createContextStreamingEndpoint('/api/cortex/design/editor_ai/rename_layers', e8, e9, t),
      generateSmartPaste: createContextEndpoint('/api/cortex/design/editor_ai/smart_paste', ti, tn, t),
      firstDraftGenerateStream: createContextStreamingEndpoint('/api/cortex/design/first_draft/generate', FigmatePromptSchema, ThemePresetSchema, t),
      firstDraftGenerateV2Stream: createContextStreamingEndpoint('/api/cortex/design/first_draft/generate_v2', FigmatePromptSchema, ThemePresetSchema, t),
      firstDraftMakeChanges: createContextStreamingEndpoint('/api/cortex/design/first_draft/make_changes', PromptHistorySchema, ActionResponseSchema, t),
      firstDraftCreateImage: createContextEndpoint('/api/cortex/design/first_draft/images/create', PromptPanelSchema, DesignImageSchema, t),
      firstDraftIpConflict: createContextEndpoint('/api/cortex/design/first_draft/ip_conflict', ImageSchema, ConflictSchema, t),
      firstDraftComponentize: createContextEndpoint('/api/cortex/design/first_draft/componentize', ImageRequestsSchema, MobileDesignResponsesSchema, t),
      firstDraftSuggestProps: createContextEndpoint('/api/cortex/design/first_draft/suggest_props', StateGroupRequestsSchema, ComponentPropertiesResponsesSchema, t),
      makeEdits: createContextStreamingEndpoint('/api/cortex/design/first_draft/make_edits', Z, K, t),
      makeEditsCreateImage: createContextEndpoint('/api/cortex/design/first_draft/make_edits/images/create', PromptPanelSchema, DesignImageSchema, t),
      removeBackgroundClipdrop: createContextEndpoint('/api/cortex/design/editor_ai/clipdrop_background_removal', ty, tb, t),
      getTextImageEmbeds: createStandardEndpoint('/api/cortex/dev/inference/text_image_embeds', ea, es, t),
      imageToShareJsx: createStandardEndpoint('/api/cortex/dev/inference/image_to_share_jsx', tv, tI, t),
      guiclip: createStandardEndpoint('/api/cortex/dev/inference/guiclip', tE, tx, t),
      uiParser: createStandardEndpoint('/api/cortex/dev/inference/ui_parser', UIParserRequestSchema, UIParserResponseSchema, t),
      imagesEdit: createContextEndpoint('/api/cortex/design/editor_ai/images/edit', ImageCreationSchema, Base64ImageResponseSchema, t),
      imagesFill: createContextEndpoint('/api/cortex/design/editor_ai/images/fill', tG, tV, t),
      upscaleClipdrop: createContextEndpoint('/api/cortex/design/editor_ai/clipdrop_upscale', ClipdropUpscaleRequestSchema, ClipdropUpscaleResponseSchema, t),
      firstDraftFineTune: createStreamingEndpoint('/api/cortex/dev/design/first_draft/fine_tune', FirstDraftFineTuneRequestSchema, FirstDraftFineTuneResponseSchema, t),
    },
    shared: {
      makeEditsAgent: createContextStreamingEndpoint('/api/cortex/shared/make_edits_agent', MakeEditsAgentRequestSchema, MakeEditsAgentResponseSchema, t),
      adjustText: createContextStreamingEndpoint('/api/cortex/shared/adjust_text', AdjustTextRequestSchema, AdjustTextResponseSchema, t),
      assistantChat: createStreamingEndpoint('/api/cortex/dev/shared/assistant/chat', chatRequestSchema, chatResponseSchema, t),
      aiAssistantChat: createContextStreamingEndpoint('/api/cortex/shared/ai_assistant_chat', AiAssistantChatRequestSchema, AiAssistantChatResponseSchema, t),
      imageEvaluator: createStandardEndpoint('/api/cortex/dev/shared/image_evaluator', ImageEvaluatorRequestSchema, ImageEvaluatorResponseSchema, t),
      getViolationFix: createContextEndpoint('/api/cortex/shared/linting/get_violation_fix', ColorCornerRuleSchema, PropertyUpdatesSchema, t),
      generateLivingDesigns: createContextStreamingEndpoint('/api/cortex/shared/living_designs', ChatExchangeSchema, figMakeRequestMessageSchema, t),
      generateFigMake: createContextStreamingEndpoint('/api/cortex/shared/figmake', ChatExchangeSchema, figMakeRequestMessageSchema, t),
      generationErrorLog: createContextEndpoint('/api/cortex/shared/generation_error_log', GenerationErrorLogRequestSchema, z.object({
        message: z.string(),
      }), t),
      autosuggestText: createContextEndpoint('/api/cortex/shared/autosuggest_text', AutosuggestTextRequestSchema, AutosuggestTextResponseSchema, t),
      streamCMSCollection: createContextStreamingEndpoint('/api/cortex/shared/cms_collection', StreamCMSCollectionRequestSchema, StreamCMSCollectionResponseSchema, t),
      extractLibraryCss: createContextEndpoint('/api/cortex/shared/design_system_imports/extract_library_css', ExtractLibraryCssRequestSchema, ExtractLibraryCssResponseSchema, t),
      figmakeEnhancePrompt: createContextStreamingEndpoint('/api/cortex/shared/figmake/enhance_prompt', FigmakeEnhancePromptRequestSchema, FigmakeEnhancePromptResponseSchema, t),
    },
    foundry: {
      ping: createContextEndpoint('/api/cortex/foundry/ping', PingRequestSchema, PingResponseSchema, t),
      uploadCode: createContextEndpoint('/api/cortex/foundry/upload-code', UploadCodeRequestSchema, UploadCodeResponseSchema, t),
      bundle: createContextEndpoint('/api/cortex/foundry/bundle', BundleRequestSchema, BundleResponseSchema, t),
      sandbox: createContextEndpoint('/api/cortex/foundry/sandbox', SandboxRequestSchema, SandboxResponseSchema, t),
    },
    internal: {
      streamText: createStreamingEndpoint('/api/cortex/dev/stream_text', GenerateTextRequestSchema, z.string(), t),
      streamCMSCollection: createStreamingEndpoint('/api/cortex/dev/stream_cms_collection', GenerateTextRequestSchema, StreamCMSCollectionResponseSchema, t),
      generateText: createStandardEndpoint('/api/cortex/dev/generate_text', GenerateTextRequestSchema, GenerateTextResponseSchema, t),
      generateObject: createStandardEndpoint('/api/cortex/dev/generate_object', GenerateObjectRequestSchema, GenerateObjectResponseSchema, t),
      streamObject: createStreamingEndpoint('/api/cortex/dev/stream_object', GenerateObjectRequestSchema, StreamObjectResponseSchema, t),
      generateImages: createStandardEndpoint('/api/cortex/dev/generate_images', ImageGenerationRequestSchema, ImageGenerationResponseSchema, t),
      generateContext: createStreamingEndpoint('/api/cortex/dev/string_management/context/generate', toolChoiceSchema, z.string(), t),
      textEmbed: createStandardEndpoint('/api/cortex/dev/text_embed', TextEmbedRequestSchema, TextEmbedResponseSchema, t),
      makeEditsDebugPrompt: createStandardEndpoint('/api/cortex/dev/design/first_draft/make_edits/debug_prompt', MakeEditsDebugPromptRequestSchema, MakeEditsDebugPromptResponseSchema, t),
    },
  }
}
export const yu = createCortexAPI

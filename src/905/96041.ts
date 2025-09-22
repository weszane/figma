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
import { aiAssistantChatSchema, chatSchema } from '../figma_app/686647'
import { CortexError } from '../figma_app/691470'
import { ActionResponseSchema, ComponentPropertiesResponsesSchema, ConflictSchema, DesignImageSchema, FigmatePromptSchema, ImageRequestsSchema, ImageSchema, MobileDesignResponsesSchema, PromptHistorySchema, PromptPanelSchema, StateGroupRequestsSchema, ThemePresetSchema } from '../figma_app/705029'
import { createTrackEvent } from '../figma_app/970433'

let n
let a
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

let X = z.object({
  options: q,
})
let Q = z.object({
  systemPrompt: z.string(),
})


let J = ChatCompletionRequestSchema.and(v)

let ee = embeddingRequestSchema.and(v)
let et = z.object({
  messages: ChatMessagesArraySchema,
})
let ei = ChatCompletionChunkSchema

let en = z.object({
  model: W,
  image1: z.string(),
  image2: z.string(),
  userPrompt: z.string(),
  systemPrompt: z.string(),
})
let er = z.object({
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

let ew = z.object({
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
let ek = z.object({
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
let e4 = z.union([z.object({
  action: e2,
  text: z.string(),
  surroundingContext: z.string().optional(),
}), z.object({
  action: e2,
  texts: e5.array(),
  jsonMode: z.boolean().optional(),
  surroundingContext: z.string().optional(),
})])
let e3 = z.object({
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
let ta = z.object({
  prompt: z.string(),
  negativePrompt: z.string().default('blurry, bad'),
  cfgScale: z.number().default(8),
  seed: z.number().default(20),
  height: z.number().default(512),
  width: z.number().default(512),
  numImages: z.number().default(1),
  modelType: z.nativeEnum(ImageModelType).optional(),
})
let ts = z.object({
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
let tS = z.object({
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
let tC = z.object({
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
let tY = requestSchema.merge(tW)
let tq = z.object({
  text: z.string(),
  usage: tokenUsageSchema,
  logprobs: z.optional(logprobsSchema),
})
let t$ = z.object({
  image_url: z.string(),
  width: z.number().min(1).max(4096),
  height: z.number().min(1).max(4096),
})
let tZ = z.object({
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
let t0 = z.discriminatedUnion('type', [tX, tQ, tJ])
let t1 = z.object({
  prompt: z.string(),
})
let t5 = z.object({
  userPrompt: z.string(),
})
let t4 = z.object({
  jsx: z.string().optional(),
  trace: NodeSchema.optional(),
})
let t3 = ProviderValuesArray.extend({
  values: z.array(z.string()),
})
let t6 = z.object({
  embeddings: z.array(z.array(z.number())),
})
let t8 = outputSchemaOptions.omit({
  output: !0,
  schema: !0,
  schemaName: !0,
  schemaDescription: !0,
}).merge(tW)
let t9 = z.object({
  object: z.any(),
  usage: tokenUsageSchema,
  logprobs: z.optional(logprobsSchema),
})
let ie = z.union([z.object({
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
let it = z.object({
  jsx: z.string(),
  nodeId: z.string(),
  suggestionType: z.number().optional(),
  existingText: z.string().optional(),
  startingChar: z.string().optional(),
})
let ii = z.object({
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
let ia = z.object({
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
let iA = z.object({
  variables: z.array(z.string()),
  textStyles: z.array(i_),
  componentsForVariables: z.array(ih),
  componentsForTypography: z.array(ih),
  fragments: z.array(ig),
})
let iy = z.object({
  typography: z.string(),
  cssVariables: z.string(),
  globalCss: z.string(),
})
let ib = z.object({
  prompt: z.string(),
  selection: z.object({
    text: z.string(),
    start: z.number().optional(),
  }).optional(),
})
let iv = z.object({
  delta: z.string(),
})
let iS = z.object({
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
let iT = z.union([iC, UnifiedSchema])
let ik = z.object({
  fileKeyHash: z.string(),
})
let iR = z.object({
  files: z.record(z.string()),
  mainComponent: z.string(),
  forceProvision: z.boolean().optional(),
})
let iN = z.intersection(iR, ik)
let iP = z.object({
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
let iD = z.intersection(iO, ik)
let iL = z.union([z.object({
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
let iM = z.intersection(iF, ik)
let ij = z.object({
  id: z.string(),
  namespace: z.string(),
  status: z.string(),
  urls: z.record(z.string()),
})
let iU = z.object({})
!(function (e) {
  e.VEO3 = 'veo-3.0-generate-preview'
  e.VEO2 = 'veo-2.0-generate-001'
  e.VEO3_FAST = 'veo-3.0-fast-generate-preview'
}(a || (a = {})))
let iB = z.object({
  prompt: z.string(),
  imageUrls: z.array(z.string()).optional(),
  lastFrame: z.string().optional(),
  video: z.string().optional(),
  aspectRatio: z.string().optional(),
  durationSeconds: z.number().optional(),
  resolution: z.string().optional(),
  generateAudio: z.boolean().optional(),
  modelType: z.nativeEnum(a).optional(),
})
let iV = z.object({
  operationId: z.string(),
})
let iG = z.object({
  operationId: z.string(),
})
let iz = z.object({
  video: z.string().optional(),
  done: z.boolean(),
})
function iH(e) {
  let t = {
    'Content-Type': 'application/json',
  }
  if (e != null) {
    let {
      orgId,
      teamId,
      fileKey,
      userId,
      clientLifecycleId,
      persistentEntityId,
      trackingSessionId,
      clientGeneratedRequestUuid,
      fileSeq,
    } = e
    t['X-Figma-Org-ID'] = orgId ?? ''
    t['X-Figma-Team-ID'] = teamId ?? ''
    t['X-Figma-File-Key'] = fileKey ?? ''
    t['X-Figma-File-Seq'] = fileSeq ?? ''
    t['X-Figma-User-ID'] = userId ?? ''
    t['X-Figma-Client-Lifecycle-ID'] = clientLifecycleId ?? ''
    t['X-Figma-Persistent-Entity-ID'] = persistentEntityId ?? ''
    t['X-Figma-Cortex-Client-Generated-Request-UUID'] = clientGeneratedRequestUuid ?? ''
    t.Tsid = trackingSessionId ?? ''
    t['X-Referer-Service'] = 'web'
  }
  return t
}
let iW = []
function iK(e, t, i, r) {
  async function a(a, s, o) {
    let l
    let d = iH(s)
    if (r.buildExtraHeaders) {
      let e = structuredClone(d)
      Object.assign(d = r.buildExtraHeaders(), e)
    }
    let c = t.parse(a)
    try {
      let t = () => (n ?? fetch)(e, {
        method: 'POST',
        headers: d,
        body: JSON.stringify(c),
        signal: o?.abortSignal,
      })
      if ((l = await t()).ok) {
        let e = getWAFActionType(l)
        e && (await WAFValidationHandlerInstance.waitForWAFValidation(e), l = await t())
      }
    }
    catch (e) {
      if (iQ(e))
        throw iJ(e, 'wrapEndpoint: offline')
      throw e
    }
    if (!l.ok)
      throw await i0(e, l)
    let u = await l.json()
    return i.parse(u)
  }
  return async function (t, i, n) {
    try {
      return await a(t, i, n)
    }
    catch (t) {
      r.onError && r.onError(e)
      return t
    }
  }
}
function iY(e, t, i, n) {
  let r = iK(e, t, i, n)
  let a = (e, t) => r(e, null, t)
  iW.push({
    route: e,
    requestSchema: t,
    responseSchema: i,
    clientFunction: a,
  })
  return a
}
function iq(e, t, i, n) {
  let r = iK(e, t, i, n)
  iW.push({
    route: e,
    requestSchema: t,
    responseSchema: i,
    clientFunction: r,
  })
  return r
}
function i$(e, t, i, r) {
  async function a(a, s, l) {
    let d
    let c
    let u = iH(s)
    if (r.buildExtraHeaders) {
      let e = structuredClone(u)
      Object.assign(u = r.buildExtraHeaders(), e)
    }
    let p = t.parse(a)
    try {
      let t = () => (n ?? fetch)(e, {
        method: 'POST',
        headers: u,
        body: JSON.stringify(p),
        signal: l?.abortSignal,
      })
      if ((c = await t()).ok) {
        let e = getWAFActionType(c)
        e && (await WAFValidationHandlerInstance.waitForWAFValidation(e), c = await t())
      }
    }
    catch (e) {
      if (iQ(e))
        throw iJ(e, 'wrapEndpointStreaming: offline')
      throw e
    }
    if (!c.ok)
      throw await i0(e, c)
    if (!c.body) {
      throw new CortexError('generic', {
        message: `Failed to fetch ${e}, no body`,
        status: c.status,
      })
    }
    let m = c.body.pipeThrough(function () {
      let e
      let t = new TextDecoder()
      return new TransformStream({
        start(t) {
          e = makeParser(e => t.enqueue(e))
        },
        transform(i) {
          e.feed(t.decode(i))
        },
      })
    }()).pipeThrough(new TransformStream({
      transform(e, t) {
        if (e.type === 'event') {
          try {
            let i = JSON.parse(e.data)
            let n = i1(i)
            if (n !== null) {
              t.error(n)
              return
            }
            t.enqueue(i)
          }
          catch (e) {
            t.error(new CortexError('generic', {
              message: `Unable to parse streaming event: ${e}`,
            }))
          }
        }
      },
    }))
    let h = c.headers.get('X-Cortex-Request-UUID');
    (function (e, t) {
      if (!t)
        return !1
      let i = e.safeParse({
        requestUuid: t,
      })
      return i.success && i.data && typeof i.data == 'object' && Object.keys(i.data).length !== 0
    })(i, h) && (m = m.pipeThrough((d = {
      requestUuid: h,
    }, new TransformStream({
      start(e) {
        e.enqueue(d)
      },
      transform(e, t) {
        t.enqueue(e)
      },
    }))))
    return m.pipeThrough(new TransformStream({
      transform(e, t) {
        let n = (function (e) {
          if (e == null || typeof e != 'object' || !('trace' in e) || e.trace == null)
            return null
          let t = NodeSchema.safeParse(e.trace)
          return t.success ? t.data : null
        }(e))
        if (!n) {
          t.enqueue(e)
          return
        }
        (function (e, t) {
          try {
            let i = e?.fileKey
            if (!t || !i || typeof indexedDB == 'undefined')
              return
            let n = 'cortex-execution-traces'
            let r = 'traces'
            let a = indexedDB.open(n, 1)
            a.onupgradeneeded = function () {
              this.result.objectStoreNames.contains(r) || this.result.createObjectStore(r, {
                keyPath: 'fileKey',
              })
            }
            a.onsuccess = function () {
              let e = this.result.transaction(r, 'readwrite').objectStore(r)
              let a = e.get(i)
              a.onsuccess = () => {
                let r = a.result
                r && Array.isArray(r.traces)
                  ? (console.debug(n, 'adding new trace to record', i), r.traces.push(t))
                  : (console.debug(n, 'creating new record', i), r = {
                      fileKey: i,
                      traces: [t],
                    })
                let s = e.put(r)
                s.onsuccess = () => {
                  let t = e.getAllKeys()
                  t.onsuccess = () => {
                    let r = t.result.filter(e => e !== i)
                    if (r.length > 30) {
                      let t = r[Math.floor(Math.random() * r.length)]
                      e.$$delete(t)
                      console.debug(n, 'deleted record', t)
                    }
                  }
                }
                s.onerror = (e) => {
                  console.error('Error storing execution trace in IndexedDB', n, e)
                }
              }
              a.onerror = (e) => {
                console.error('Error reading execution trace from IndexedDB', n, e)
              }
            }
            a.onerror = (e) => {
              console.error(`Error opening ${n} db`, e)
            }
          }
          catch (e) {
            console.error('Error storing execution trace', e)
          }
        })(s, n)
        i.safeParse({
          trace: n,
        }).success && t.enqueue({
          trace: n,
        })
      },
    })).pipeThrough(new TransformStream({
      transform(e, t) {
        let n
        try {
          n = i.parse(e)
        }
        catch (e) {
          t.error(e)
          console.error('ERROR PARSING ZOD', e)
          return
        }
        try {
          t.enqueue(n)
        }
        catch (e) {
          console.error('ERROR ENQUEUEING ZOD', e)
        }
      },
    }, new CountQueuingStrategy({
      highWaterMark: 100,
    }), new CountQueuingStrategy({
      highWaterMark: 100,
    })))
  }
  return async function (t, i, n) {
    try {
      return await a(t, i, n)
    }
    catch (t) {
      r.onError && r.onError(e)
      return t
    }
  }
}
function iZ(e, t, i, n) {
  let r = i$(e, t, i, n)
  let a = (e, t) => r(e, null, t)
  iW.push({
    route: e,
    requestSchema: t,
    streamMessageSchema: i,
    clientFunction: a,
  })
  return a
}
function iX(e, t, i, n) {
  let r = i$(e, t, i, n)
  iW.push({
    route: e,
    requestSchema: t,
    streamMessageSchema: i,
    clientFunction: r,
  })
  return r
}
function iQ(e) {
  let t = e.message
  return typeof t == 'string' && (t === 'Failed to fetch' || t === 'TypeError: Load failed' || t.includes('NetworkError') || t.toLowerCase().includes('network error'))
}
function iJ(e, t) {
  let i = (function (e, t) {
    let i = e.message
    return typeof i == 'string' ? i : t
  }(e, t))
  return new OfflineError({
    message: i,
    stack: e.stack,
  })
}
async function i0(e, t) {
  let i
  try {
    i = await t.json()
  }
  catch (e) {
    return (function (e, t) {
      switch (e.status) {
        case 404:
          return new CortexError('service_busy', {
            message: 'Not found',
            status: e.status,
          })
        case 502:
          return new CortexError('service_busy', {
            message: 'Bad Gateway',
            status: e.status,
          })
        case 504:
          return new CortexError('service_busy', {
            message: 'Gateway Timeout',
            status: e.status,
          })
        default:
          return new CortexError('generic', {
            message: `Unable to parse non-OK response: ${t}`,
            status: e.status,
          })
      }
    }(t, e))
  }
  let n = i1(i)
  if (n !== null) {
    n.sentryTags = {
      request_uuid: i.request_uuid || i.requestUuid,
    }
    return n
  }
  let r = (function (e) {
    if (e !== null && typeof e == 'object' && e.error)
      return e.error
  }(i))
  return r != null
    ? r
    : new CortexError('generic', {
      message: `Failed to fetch ${e}`,
      status: t.status,
    })
}
function i1(e) {
  return isSerializedCortexErrorV2(e) ? deserializeCortexErrorV2(e) : e !== null && typeof e == 'object' && e.cortex_error ? new CortexError(e.cortex_error.type, e.cortex_error.data, void 0, void 0, e.cortex_error.trace) : null
}
export function $$i20(e = {}) {
  let t = e ?? {}
  return {
    openai: {
      completeChat: iY('/api/cortex/dev/openai/chat/completions', J, ChatCompletionResponseSchema, t),
      streamChat: iZ('/api/cortex/dev/openai/chat/completions', J, ChatCompletionChunkSchema, t),
      computeEmbeddings: iY('/api/cortex/dev/openai/embeddings', ee, embeddingResponseSchema, t),
    },
    figjam: {
      cluster: iq('/api/cortex/figjam/cluster', el, eo, t),
      streamSummarize: iX('/api/cortex/figjam/summarize', u, m, t),
      jamGPT: iq('/api/cortex/figjam/jamgpt', y, b, t),
      createTemplate: iX('/api/cortex/figjam/create_template', PromptModeSchema, createNodesRequestSchema, t),
      createVisual: iq('/api/cortex/figjam/create_visual', ex, eS, t),
      classifyCreate: iq('/api/cortex/figjam/classify_create', eN, eP, t),
      updateVisual: iq('/api/cortex/figjam/update_visual', eG, eI, t),
      canvasIdeate: iq('/api/cortex/figjam/canvas/ideate', tD, tL, t),
      canvasMakeImageFromImages: iq('/api/cortex/figjam/canvas/make_image_from_canvas_content', tF, tM, t),
      canvasEnhancePrompt: iq('/api/cortex/figjam/canvas/enhance_prompt', tj, tU, t),
    },
    slides: {
      createSlides: iX('/api/cortex/slides/create_slides', tc, tm, t),
      rewriteText: iX('/api/cortex/slides/rewrite_text', TextTonesProductTypeSchema, DeltaSchema, t),
      speakerNotes: iX('/api/cortex/slides/speaker_notes', t_, tA, t),
      layoutSwap: iq('/api/cortex/slides/layout/swap', is, io, t),
      generateOutline: iX('/api/cortex/slides/outline/generate', ip, im, t),
      createDeckFromOutline: iX('/api/cortex/slides/outline/create_deck', eJ, e1, t),
    },
    design: {
      generateTextContentFromExamples: iX('/api/cortex/design/editor_ai/content_fill/generate_from_examples', ek, ew, t),
      generateImages: iq('/api/cortex/design/editor_ai/images/generate', ta, ts, t),
      generateVideo: iq('/api/cortex/design/editor_ai/video/generate', iB, iG, t),
      pollVideo: iq('/api/cortex/design/editor_ai/video/poll', iV, iz, t),
      generateMagicLinkV2: iX('/api/cortex/design/prototyping/magic_link_v2', eO, eD, t),
      iconClassifier: iq('/api/cortex/design/prototyping/icon_classifier', iconClassifierEndpointSchema, iconClassifierEndpointsResults, t),
      backgroundSegmentation: iq('/api/cortex/design/editor_ai/image_background_segmentation', ez, eH, t),
      sectionDetection: iq('/api/cortex/dev/inference/image_section_detection', eW, eK, t),
      generateRenameLayers: iX('/api/cortex/design/editor_ai/rename_layers', e8, e9, t),
      generateSmartPaste: iq('/api/cortex/design/editor_ai/smart_paste', ti, tn, t),
      firstDraftGenerateStream: iX('/api/cortex/design/first_draft/generate', FigmatePromptSchema, ThemePresetSchema, t),
      firstDraftGenerateV2Stream: iX('/api/cortex/design/first_draft/generate_v2', FigmatePromptSchema, ThemePresetSchema, t),
      firstDraftMakeChanges: iX('/api/cortex/design/first_draft/make_changes', PromptHistorySchema, ActionResponseSchema, t),
      firstDraftCreateImage: iq('/api/cortex/design/first_draft/images/create', PromptPanelSchema, DesignImageSchema, t),
      firstDraftIpConflict: iq('/api/cortex/design/first_draft/ip_conflict', ImageSchema, ConflictSchema, t),
      firstDraftComponentize: iq('/api/cortex/design/first_draft/componentize', ImageRequestsSchema, MobileDesignResponsesSchema, t),
      firstDraftSuggestProps: iq('/api/cortex/design/first_draft/suggest_props', StateGroupRequestsSchema, ComponentPropertiesResponsesSchema, t),
      makeEdits: iX('/api/cortex/design/first_draft/make_edits', Z, K, t),
      makeEditsCreateImage: iq('/api/cortex/design/first_draft/make_edits/images/create', PromptPanelSchema, DesignImageSchema, t),
      removeBackgroundClipdrop: iq('/api/cortex/design/editor_ai/clipdrop_background_removal', ty, tb, t),
      getTextImageEmbeds: iY('/api/cortex/dev/inference/text_image_embeds', ea, es, t),
      imageToShareJsx: iY('/api/cortex/dev/inference/image_to_share_jsx', tv, tI, t),
      guiclip: iY('/api/cortex/dev/inference/guiclip', tE, tx, t),
      uiParser: iY('/api/cortex/dev/inference/ui_parser', tS, tC, t),
      imagesEdit: iq('/api/cortex/design/editor_ai/images/edit', ImageCreationSchema, Base64ImageResponseSchema, t),
      imagesFill: iq('/api/cortex/design/editor_ai/images/fill', tG, tV, t),
      upscaleClipdrop: iq('/api/cortex/design/editor_ai/clipdrop_upscale', t$, tZ, t),
      firstDraftFineTune: iZ('/api/cortex/dev/design/first_draft/fine_tune', t5, t4, t),
    },
    shared: {
      makeEditsAgent: iX('/api/cortex/shared/make_edits_agent', iS, iT, t),
      adjustText: iX('/api/cortex/shared/adjust_text', e4, e3, t),
      assistantChat: iZ('/api/cortex/dev/shared/assistant/chat', et, ei, t),
      aiAssistantChat: iX('/api/cortex/shared/ai_assistant_chat', chatSchema, aiAssistantChatSchema, t),
      imageEvaluator: iY('/api/cortex/dev/shared/image_evaluator', en, er, t),
      getViolationFix: iq('/api/cortex/shared/linting/get_violation_fix', ColorCornerRuleSchema, PropertyUpdatesSchema, t),
      generateLivingDesigns: iX('/api/cortex/shared/living_designs', ChatExchangeSchema, figMakeRequestMessageSchema, t),
      generateFigMake: iX('/api/cortex/shared/figmake', ChatExchangeSchema, figMakeRequestMessageSchema, t),
      generationErrorLog: iq('/api/cortex/shared/generation_error_log', ia, z.object({
        message: z.string(),
      }), t),
      autosuggestText: iq('/api/cortex/shared/autosuggest_text', it, ii, t),
      streamCMSCollection: iX('/api/cortex/shared/cms_collection', t1, t0, t),
      extractLibraryCss: iq('/api/cortex/shared/design_system_imports/extract_library_css', iA, iy, t),
      figmakeEnhancePrompt: iX('/api/cortex/shared/figmake/enhance_prompt', ib, iv, t),
    },
    foundry: {
      ping: iq('/api/cortex/foundry/ping', ik, iU, t),
      uploadCode: iq('/api/cortex/foundry/upload-code', iN, iP, t),
      bundle: iq('/api/cortex/foundry/bundle', iD, iL, t),
      sandbox: iq('/api/cortex/foundry/sandbox', iM, ij, t),
    },
    internal: {
      streamText: iZ('/api/cortex/dev/stream_text', tY, z.string(), t),
      streamCMSCollection: iZ('/api/cortex/dev/stream_cms_collection', tY, t0, t),
      generateText: iY('/api/cortex/dev/generate_text', tY, tq, t),
      generateObject: iY('/api/cortex/dev/generate_object', t8, t9, t),
      streamObject: iZ('/api/cortex/dev/stream_object', t8, ie, t),
      generateImages: iY('/api/cortex/dev/generate_images', ImageGenerationRequestSchema, ImageGenerationResponseSchema, t),
      generateContext: iZ('/api/cortex/dev/string_management/context/generate', toolChoiceSchema, z.string(), t),
      textEmbed: iY('/api/cortex/dev/text_embed', t3, t6, t),
      makeEditsDebugPrompt: iY('/api/cortex/dev/design/first_draft/make_edits/debug_prompt', X, Q, t),
    },
  }
}
export const yu = $$i20

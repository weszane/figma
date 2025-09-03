import { t8 as _$$t } from "../905/460208";
import { Ru } from "../905/693198";
import { z as _$$z } from "../vendor/835909";
import { C as _$$C } from "../vendor/847329";
import { Fs, pp } from "../905/839044";
import { $l, FQ, v0, tm as _$$tm } from "../905/707076";
import { vD, ZI } from "../905/541395";
import { B as _$$B } from "../905/985467";
import { B as _$$B2 } from "../905/340201";
import { Y_, zy } from "../figma_app/360163";
import { G1 } from "../figma_app/691470";
import { OfflineError, isSerializedCortexErrorV2, deserializeCortexErrorV2 } from "../figma_app/316567";
import { jR, bv, H as _$$H, tl as _$$tl, k8, Qp, r6, pp as _$$pp, TM, XM, L6, KU } from "../figma_app/705029";
import { n0, Kv } from "../figma_app/686647";
import { xw, zw } from "../905/585727";
import { HP, Kg } from "../905/898440";
import { e3 as _$$e, aC } from "../figma_app/571325";
import { Vh, Bd } from "../905/869092";
import { nT, Ld } from "../905/528903";
import { p as _$$p } from "../905/453712";
import { lF, cn, ue, zF } from "../905/31168";
import { N4, pA } from "../905/889788";
import { k0, K as _$$K } from "../905/219321";
import { b0, EK } from "../figma_app/383733";
import { k as _$$k } from "../figma_app/970433";
import { He } from "../905/374090";
import { d_, Uv } from "../905/712373";
let n;
var r;
var a;
let l = _$$z.enum(["STICKY", "SHAPE_WITH_TEXT", "TEXT"], {
  invalid_type_error: "Not an allowed type in summarize"
});
let d = _$$z.record(_$$z.number(), {
  description: "A map from the name of the stamp to the number of instances it has on the given node"
});
let c = _$$z.object({
  t: _$$z.string({
    description: "The text of the node"
  }),
  bounds: _$$z.object({
    x: _$$z.number(),
    y: _$$z.number(),
    w: _$$z.number(),
    h: _$$z.number()
  }).nullable(),
  id: _$$z.string(),
  stamps: d.optional(),
  type: l
});
let u = _$$z.object({
  v: _$$z.number({
    description: "summarize request version"
  }),
  data: _$$z.array(c),
  stream: _$$z.boolean().optional()
});
let p = _$$z.object({
  header: _$$z.string(),
  items: _$$z.string().array()
});
_$$z.object({
  summary: _$$z.string(),
  clusters: p.array()
});
let m = _$$z.object({
  delta: _$$z.string()
});
_$$z.object({
  error: _$$z.object({
    code: _$$z.number(),
    message: _$$z.string()
  })
});
let g = _$$z.enum(["TEXT", "STICKY", "CODE_BLOCK", "SHAPE_WITH_TEXT", "TABLE", "EXPLORE_CLASS", "EXPLORE_OPTION", "GET_MORE_OPTION"]);
let f = _$$z.array(_$$z.object({
  id: _$$z.string(),
  type: g,
  text: _$$z.string()
}));
let _ = _$$z.union([_$$z.literal("ideate"), _$$z.literal("quickQuestion"), _$$z.literal("teachMeAbout"), _$$z.literal("giveMeInit"), _$$z.literal("giveMe"), _$$z.literal("similarStuff"), _$$z.literal("rabbitHoleInit"), _$$z.literal("rabbitHole"), _$$z.literal("summarize"), _$$z.literal("rewriteThis"), _$$z.literal("turnThisInto"), _$$z.literal("code"), _$$z.literal("custom"), _$$z.literal("dev")]);
let A = _$$z.object({
  ideateDescription: _$$z.string().optional(),
  quickQuestion: _$$z.string().optional(),
  giveMeSelected: _$$z.string().optional(),
  rabbitHoleSelected: _$$z.string().optional(),
  summarizeSelected: _$$z.string().optional(),
  rewriteThisDescription: _$$z.string().optional(),
  turnThisIntoSelected: _$$z.string().optional(),
  codeDescription: _$$z.string().optional(),
  customPrompt: _$$z.string().optional(),
  devSystemMessage: _$$z.string().optional(),
  devPrefix: _$$z.string().optional()
});
let y = _$$z.object({
  blockType: _,
  inputNodeData: f,
  widgetData: A
});
let b = _$$z.array(_$$z.object({
  type: g,
  text: _$$z.string()
}));
let v = _$$z.object({
  use_cache: _$$z.boolean().optional().$$default(!0)
});
let E = _$$z.enum(["claude-instant-1.2", "claude-1.3", "claude-2.0", "claude-2.1", "claude-3-opus-20240229", "claude-3-sonnet-20240229", "claude-3-haiku-20240307", "claude-3-5-sonnet-20240620", "claude-3-5-sonnet-20241022"], {
  description: "The specified model is not an allowed anthropic chat model"
});
let x = _$$z.enum(["user", "assistant"]);
_$$z.enum(["stop_sequence", "max_tokens"]);
let S = _$$z.object({
  type: _$$z.literal("ephemeral")
});
let w = _$$z.object({
  type: _$$z.literal("text"),
  text: _$$z.string(),
  cache_control: S.optional()
});
let C = _$$z.enum(["image/jpeg", "image/png", "image/gif", "image/webp"]);
let T = _$$z.object({
  type: _$$z.literal("base64"),
  media_type: C,
  data: _$$z.string()
});
let k = _$$z.object({
  type: _$$z.literal("image"),
  source: T,
  cache_control: S.optional()
});
let R = _$$z.discriminatedUnion("type", [w, k]);
let N = _$$z.object({
  type: _$$z.literal("text_delta"),
  text: _$$z.string()
});
let P = _$$z.object({
  id: _$$z.string().optional(),
  type: _$$z.literal("message").optional(),
  role: x,
  content: _$$z.array(R).or(_$$z.string())
});
let O = _$$z.array(P);
let D = _$$z.object({
  model: E,
  system: _$$z.union([_$$z.string(), _$$z.array(w)]).optional(),
  messages: O,
  max_tokens: _$$z.number().optional(),
  stop_sequences: _$$z.array(_$$z.string()).optional(),
  temperature: _$$z.number().optional(),
  top_p: _$$z.number().optional(),
  top_k: _$$z.number().optional(),
  stream: _$$z.boolean().optional()
});
_$$z.object({
  id: _$$z.string(),
  type: _$$z.literal("message"),
  role: x,
  model: _$$z.string(),
  content: _$$z.array(R),
  stop_reason: _$$z.string().nullable().optional(),
  stop_sequence: _$$z.string().nullable().optional(),
  usage: _$$z.object({
    input_tokens: _$$z.number(),
    output_tokens: _$$z.number()
  })
});
let L = _$$z.object({
  type: _$$z.literal("message_start"),
  message: P.partial()
});
let F = _$$z.object({
  type: _$$z.literal("message_delta"),
  delta: P.partial()
});
let M = _$$z.object({
  type: _$$z.literal("message_stop")
});
let j = _$$z.object({
  type: _$$z.literal("content_block_start"),
  index: _$$z.number(),
  content_block: R
});
let U = _$$z.object({
  type: _$$z.literal("content_block_delta"),
  index: _$$z.number(),
  delta: N
});
let B = _$$z.object({
  type: _$$z.literal("content_block_stop"),
  index: _$$z.number()
});
_$$z.discriminatedUnion("type", [L, F, M, j, U, B]);
let W = _$$z.union([_$$z.enum(["anthropic-claude-3.7-sonnet", "anthropic-claude-4-sonnet", "gpt-4o-mini-2024-07-18"]), _$$z.string()]);
let K = _$$z.object({
  jsx: _$$z.string().optional(),
  reasoning: _$$z.string().optional(),
  trace: _$$B.optional()
});
_$$z.object({
  userPrompt: _$$z.string()
});
_$$z.object({
  selectedNodeId: _$$z.string().optional(),
  selectedNodeIds: _$$z.array(_$$z.string()).optional()
});
let Y = _$$z.object({
  model: _$$z.string().optional(),
  systemPrompt: _$$z.string().optional(),
  reasoningTokens: _$$z.number().optional(),
  omitImage: _$$z.boolean().optional(),
  userMessageFormat: _$$z.enum(["default", "first-party"]).optional(),
  duplicateAndRun: _$$z.boolean().optional()
});
let q = _$$z.object({
  jsxSerializerOverrides: Y_.partial(),
  componentSerializerOverrides: Y_.partial(),
  diffFormat: _$$z.enum(["aider", "jsxquery"]),
  previewIncrementalEdits: _$$z.boolean().optional(),
  generateReconciledJsx: _$$z.boolean().optional(),
  silentOnNoChanges: _$$z.boolean().optional(),
  disableSerializationTimeout: _$$z.boolean().optional(),
  agentEnabled: _$$z.boolean().optional(),
  allowMissingFonts: _$$z.boolean().optional(),
  includeExtraContext: _$$z.boolean().optional(),
  maxNodesToSerialize: _$$z.number().optional(),
  modelId: W.optional(),
  selfHealing: _$$z.boolean().optional()
});
let $ = _$$z.object({
  model: W.optional(),
  reasoningTokens: _$$z.number().optional(),
  systemPrompt: _$$z.string().optional(),
  userPrompt: _$$z.string(),
  image: _$$z.string().optional(),
  debugOptions: q.optional()
});
let Z = _$$z.object({
  ...$.shape,
  rawUserChatDetails: _$$B2
});
_$$z.object({
  selectedNodeId: _$$z.string().optional(),
  selectedNodeIds: _$$z.array(_$$z.string()).optional(),
  extraContextRootId: _$$z.string().optional(),
  selectionJsx: zy.pick({
    jsxStr: !0,
    assetsByName: !0,
    componentInfoByJSXName: !0,
    issues: !0,
    serializedIds: !0
  }),
  selectionImageUrl: _$$z.string().optional(),
  componentDefs: _$$z.array(_$$z.object({
    jsxStr: _$$z.string()
  }))
});
_$$z.object({
  model: W,
  systemPrompt: _$$z.string(),
  userPrompt: _$$z.string(),
  imageUrls: _$$z.array(_$$z.string()),
  reasoningTokens: _$$z.number()
});
let X = _$$z.object({
  options: q
});
let Q = _$$z.object({
  systemPrompt: _$$z.string()
});
!function (e) {
  e.NO_CHANGES_MADE = "No changes made";
  e.SERIALIZATION_TIMEOUT = "Serialization timeout";
}(r || (r = {}));
_$$z.object({
  options: q,
  debugInput: Y.optional()
});
let J = $l.and(v);
D.and(v);
let ee = vD.and(v);
let et = _$$z.object({
  messages: FQ
});
let ei = v0;
_$$z.object({
  model: _$$z.string(),
  data: _$$z.array(_$$z.object({
    key: _$$z.string(),
    query_matched_type: _$$z.array(_$$z.string()),
    creator_job: _$$z.string().nullable().optional(),
    user_job: _$$z.string().nullable().optional(),
    file_type: _$$z.string(),
    user_is_creator: _$$z.boolean(),
    favorited_file: _$$z.boolean().nullable().optional(),
    user_plan_max: _$$z.string().nullable().optional(),
    unique_user_count: _$$z.number().nullable().optional(),
    days_user_file_views: _$$z.number().nullable().optional(),
    days_user_file_edits: _$$z.number().nullable().optional(),
    days_user_file_comments: _$$z.number().nullable().optional(),
    days_user_file_view_7d: _$$z.number().nullable().optional(),
    days_user_file_edit_7d: _$$z.number().nullable().optional(),
    days_user_file_comments_7d: _$$z.number().nullable().optional(),
    days_user_last_viewed: _$$z.number().nullable().optional(),
    days_user_last_edited: _$$z.number().nullable().optional(),
    days_user_last_commented: _$$z.number().nullable().optional(),
    days_user_opened_share: _$$z.number().nullable().optional(),
    days_since_file_created: _$$z.number().nullable().optional(),
    num_unique_users_shared: _$$z.number().nullable().optional(),
    minutes_in_file: _$$z.number().nullable().optional(),
    minutes_in_file_7d: _$$z.number().nullable().optional(),
    user_opened_share: _$$z.boolean().nullable().optional(),
    score: _$$z.number().nullable().optional(),
    position: _$$z.number().nullable().optional(),
    days_user_file_views_7d: _$$z.number().nullable().optional(),
    days_user_file_edits_7d: _$$z.number().nullable().optional(),
    days_user_first_opened_share: _$$z.number().nullable().optional(),
    days_user_last_opened_share: _$$z.number().nullable().optional(),
    total_unique_user_views: _$$z.number().nullable().optional(),
    total_unique_user_edits: _$$z.number().nullable().optional(),
    total_unique_user_comments: _$$z.number().nullable().optional(),
    total_unique_user_views_7d: _$$z.number().nullable().optional(),
    total_unique_user_edits_7d: _$$z.number().nullable().optional(),
    total_unique_user_comments_7d: _$$z.number().nullable().optional(),
    last_commented_at: _$$z.string().nullable().optional(),
    last_edited_at: _$$z.string().nullable().optional(),
    last_viewed_at: _$$z.string().nullable().optional(),
    user_first_opened_share_at: _$$z.string().nullable().optional(),
    user_last_opened_share_at: _$$z.string().nullable().optional(),
    created_at: _$$z.string().nullable().optional()
  }))
});
_$$z.object({
  scores: _$$z.array(_$$z.object({
    id: _$$z.string(),
    score: _$$z.number()
  }))
});
_$$z.$$instanceof(Uint8Array);
_$$z.object({
  scores: _$$z.array(_$$z.object({
    id: _$$z.string(),
    score: _$$z.number()
  }))
});
let en = _$$z.object({
  model: W,
  image1: _$$z.string(),
  image2: _$$z.string(),
  userPrompt: _$$z.string(),
  systemPrompt: _$$z.string()
});
let er = _$$z.object({
  content: _$$z.enum(["0", "1"]),
  rationale: _$$z.string()
});
_$$z.object({
  flagName: _$$z.string()
});
_$$z.object({
  flagName: _$$z.string(),
  value: _$$z.boolean()
});
_$$z.object({
  systemPrompt: _$$z.string().optional(),
  userPrompt: _$$z.string()
});
_$$z.object({
  generateObjectResult: _$$z.any(),
  streamObjectParsedStreamResult: _$$z.any(),
  streamObjectAwaitedObjectResult: _$$z.any()
});
let ea = _$$z.object({
  model: _$$z.string(),
  input: _$$z.object({
    images: _$$z.array(_$$z.string()).optional(),
    image_s3_files: _$$z.array(_$$z.object({
      bucket: _$$z.string(),
      key: _$$z.string(),
      region: _$$z.string().nullable()
    })).optional(),
    text: _$$z.array(_$$z.string()).optional()
  })
});
ea.and(v);
let es = _$$z.object({
  encoded_images: _$$z.array(_$$z.array(_$$z.number())).optional(),
  encoded_text: _$$z.array(_$$z.array(_$$z.number())).optional()
});
let eo = _$$z.object({
  requestUuid: _$$z.string(),
  clusters: _$$z.array(_$$z.object({
    clusterName: _$$z.string(),
    messages: _$$z.array(_$$z.string())
  }))
});
let el = _$$z.object({
  v: _$$z.number(),
  tokenCount: _$$z.number(),
  data: _$$z.array(_$$z.object({
    id: _$$z.string(),
    text: _$$z.string()
  }))
});
let ed = _$$z.union([_$$z.literal("diagram"), _$$z.literal("orgchart")]);
let ec = _$$z.union([_$$z.literal("horizontal"), _$$z.literal("vertical")]);
let eu = _$$z.object({
  id: _$$z.string(),
  name: _$$z.string(),
  team: _$$z.string(),
  role: _$$z.string(),
  location: _$$z.string(),
  x: _$$z.number(),
  y: _$$z.number()
});
let ep = _$$z.object({
  id: _$$z.string(),
  label: _$$z.string(),
  shapeWithTextType: _$$z.string(),
  x: _$$z.number(),
  y: _$$z.number()
});
let em = _$$z.object({
  startId: _$$z.string(),
  endId: _$$z.string(),
  label: _$$z.string()
});
let eh = _$$z.object({
  requestId: _$$z.string().optional(),
  type: ed,
  direction: ec,
  vertices: _$$z.union([_$$z.array(ep), _$$z.array(eu)]),
  edges: _$$z.array(em),
  trace: _$$B.optional()
});
let eg = _$$z.object({
  text: _$$z.string(),
  rangePercent: _$$z.number()
});
let ef = _$$z.object({
  text: _$$z.string(),
  tasks: _$$z.array(_$$z.object({
    text: _$$z.string(),
    dateText: _$$z.string(),
    width: _$$z.number(),
    x: _$$z.number(),
    depth: _$$z.number(),
    isMilestone: _$$z.boolean(),
    isCrit: _$$z.boolean(),
    isActive: _$$z.boolean(),
    isDone: _$$z.boolean()
  }))
});
let e_ = _$$z.object({
  requestId: _$$z.string().optional(),
  title: _$$z.string(),
  width: _$$z.number(),
  numDays: _$$z.number(),
  months: _$$z.array(eg),
  categories: _$$z.array(ef),
  trace: _$$B.optional()
});
let eA = _$$z.object({
  text: _$$z.string(),
  rangePercent: _$$z.number()
});
let ey = _$$z.object({
  x: _$$z.number(),
  dateText: _$$z.string(),
  text: _$$z.string(),
  isMilestone: _$$z.boolean()
});
let eb = _$$z.object({
  requestId: _$$z.string().optional(),
  title: _$$z.string(),
  width: _$$z.number(),
  numDays: _$$z.number(),
  months: _$$z.array(eA),
  events: _$$z.array(ey),
  trace: _$$B.optional()
});
let ev = _$$z.object({
  level: _$$z.number(),
  descr: _$$z.string()
}).extend({
  children: _$$z.lazy(() => ev.array())
});
let eI = _$$z.object({
  requestId: _$$z.string().optional(),
  rootNode: ev,
  trace: _$$B.optional()
});
let eE = _$$z.union([ed, _$$z.literal("gantt"), _$$z.literal("timeline"), _$$z.literal("mindmap")]);
let ex = _$$z.object({
  prompt: _$$z.string(),
  visualType: eE,
  directMermaidText: _$$z.string().optional()
});
let eS = _$$z.union([eh, e_, eb, eI]);
_$$z.discriminatedUnion("type", [_$$z.object({
  type: _$$z.literal("KEY_VALUE_PAIR"),
  key: _$$z.string(),
  value: _$$z.any()
}), _$$z.object({
  type: _$$z.literal("OBJECT_OPEN"),
  key: _$$z.string().optional()
}), _$$z.object({
  type: _$$z.literal("OBJECT_CLOSE")
}), _$$z.object({
  type: _$$z.literal("ARRAY_OPEN"),
  key: _$$z.string().optional()
}), _$$z.object({
  type: _$$z.literal("ARRAY_CLOSE")
})]);
let ew = _$$z.object({
  trace: _$$B.optional(),
  cortex_error: _$$z.object({
    type: _$$z.string(),
    data: _$$z.any()
  }).optional(),
  result: _$$z.record(_$$z.string()).optional()
});
let eC = _$$z.array(_$$z.object({
  defId: _$$z.string(),
  fieldName: _$$z.string(),
  instructions: _$$z.string().optional()
}));
let eT = _$$z.object({
  defId: _$$z.string(),
  fieldName: _$$z.string(),
  value: _$$z.string()
});
let ek = _$$z.object({
  v: _$$z.number(),
  data: _$$z.object({
    fieldsToValues: _$$z.array(_$$z.object({
      fields: _$$z.array(eT)
    })),
    fieldsToUserInstructions: eC,
    numToAdd: _$$z.number(),
    forceCacheMiss: _$$z.boolean().optional(),
    userPrompt: _$$z.string().optional()
  })
});
_$$z.record(_$$z.string());
let eR = _$$z.union([eE, _$$z.literal("board")]);
_$$z.union([eE, _$$z.literal("board"), _$$z.literal("inappropriate")]);
let eN = _$$z.object({
  prompt: _$$z.string()
});
let eP = _$$z.object({
  type: eR,
  trace: _$$B.optional()
});
_$$z.object({
  selectedTLFs: _$$z.string().optional(),
  userDescription: _$$z.string().optional(),
  imageBase64: _$$z.string().optional(),
  existingInteractions: _$$z.string().optional(),
  imageInfos: _$$z.array(_$$z.object({
    base64: _$$z.string(),
    ids: _$$z.array(_$$z.string())
  })).optional(),
  frameTextSummaries: _$$z.string().optional(),
  canvasData: _$$z.string().optional(),
  selectedHotspots: _$$z.string().optional()
});
let eO = _$$z.union([_$$z.object({
  type: _$$z.literal("TOPLEVEL"),
  variant: _$$z.enum(["gpt", "llama", "gpt-fine-tuned", "llama-fine-tuned", "gpt-fine-tuned-v2", "llama-fine-tuned-v2", "gpt-fine-tuned-vision", "llama-fine-tuned-vision", "gpt-multi-stage-captioning", "llama-multi-stage-captioning", "ensemble", "ensemble-v2"]),
  topLevelFrames: _$$z.string(),
  unfilteredScene: _$$z.string(),
  imageBase64: _$$z.string().optional(),
  debugTools: _$$z.boolean().optional()
}), _$$z.object({
  type: _$$z.literal("HOTSPOTS"),
  variant: _$$z.literal("gpt"),
  selectedHotspots: _$$z.string(),
  frameTextSummaries: _$$z.string(),
  unfilteredScene: _$$z.string(),
  selectedNodeIDs: _$$z.string(),
  contextFrames: _$$z.string(),
  debugTools: _$$z.boolean().optional()
})]);
_$$z.object({
  type: _$$z.literal("TOPLEVEL"),
  topLevelFrames: _$$z.string(),
  unfilteredScene: _$$z.string(),
  imageBase64: _$$z.string().optional(),
  debugTools: _$$z.boolean().optional()
});
_$$z.object({
  rationale: _$$z.string().optional(),
  buttonID: _$$z.string(),
  actionType: _$$z.string(),
  destScreenID: _$$z.string().nullable(),
  score: _$$z.string().optional()
});
let eD = _$$z.object({
  rationale: _$$z.string().optional(),
  buttonID: _$$z.string(),
  actionType: _$$z.string(),
  destScreenID: _$$z.string().nullable(),
  score: _$$z.number().optional()
});
let eL = _$$z.object({
  source_id: _$$z.string(),
  target_id: _$$z.string()
}).catchall(_$$z.union([_$$z.string().nullable(), _$$z.number().nullable()]));
_$$z.object({
  data: _$$z.array(eL)
});
let eF = _$$z.object({
  source_id: _$$z.string(),
  target_id: _$$z.string(),
  predicted_link: _$$z.boolean(),
  score: _$$z.number()
});
_$$z.object({
  results: _$$z.array(eF)
});
let eU = _$$z.literal("generate_ideas");
let eB = _$$z.object({
  selectedNode: _$$z.string(),
  parentHierarchy: _$$z.array(_$$z.string()),
  children: _$$z.array(_$$z.string()),
  excludedSuggestions: _$$z.optional(_$$z.array(_$$z.string()))
});
let eV = _$$z.discriminatedUnion("visualType", [_$$z.object({
  visualType: _$$z.literal("mindmap"),
  updateMode: eU
})]);
let eG = _$$z.object({
  inputData: eB,
  updateType: eV
});
let ez = _$$z.object({
  image: _$$z.string()
});
let eH = _$$z.object({
  mask: _$$z.string()
});
let eW = _$$z.object({
  image: _$$z.string(),
  imageCoordinates: _$$z.object({
    x: _$$z.number(),
    y: _$$z.number(),
    width: _$$z.number(),
    height: _$$z.number()
  }),
  modelOverride: _$$z.optional(_$$z.string())
});
let eK = _$$z.object({
  detections: _$$z.array(_$$z.object({
    score: _$$z.number(),
    box: _$$z.object({
      x: _$$z.number(),
      y: _$$z.number(),
      width: _$$z.number(),
      height: _$$z.number()
    })
  }))
});
let eq = _$$z.enum(["chapter", "slide"]);
let e$ = _$$z.object({
  type: eq,
  content: _$$z.string(),
  role: _$$z.string().optional()
});
let eZ = _$$z.object({
  title: _$$z.string(),
  subtitle: _$$z.string(),
  outlineItems: _$$z.array(e$)
});
let eX = _$$z.object({
  jsx: _$$z.string(),
  thumbnailPublicURL: _$$z.string().optional()
});
let eQ = _$$z.record(_$$z.string(), eX);
let eJ = _$$z.object({
  outline: eZ,
  layouts: eQ
});
let e0 = _$$z.enum(["presentation_title", "chapter_title", "agenda", "content", "comparison", "process", "summary", "closing", "text_focus", "metric_focus", "image_focus", "design_mockup_focus"]);
let e1 = _$$z.object({
  layoutId: _$$z.string(),
  role: e0,
  content: _$$z.string()
});
_$$z.enum(["Arabic", "Chinese (Simplified)", "Chinese (Traditional)", "Dutch", "English (United Kingdom)", "English (United States)", "Tagalog", "French", "German", "Hindi", "Indonesian", "Italian", "Japanese", "Korean", "Malay", "Polish", "Portuguese (Brazil)", "Portuguese (Portugal)", "Russian", "Spanish (Latin America)", "Spanish (Spain)", "Swedish", "Tamil", "Thai", "Turkish", "Ukrainian", "Urdu", "Vietnamese"]);
let e2 = _$$z.discriminatedUnion("type", [_$$z.object({
  type: _$$z.literal("TRANSLATE"),
  language: _$$z.string()
}), _$$z.object({
  type: _$$z.literal("SHORTEN")
}), _$$z.object({
  type: _$$z.literal("REWRITE_TEXT"),
  prompt: _$$z.string()
}), _$$z.object({
  type: _$$z.literal("CONTENT_FILL"),
  prompt: _$$z.string()
}), _$$z.object({
  type: _$$z.literal("REPLACE_SLIDE_CONTENT"),
  slideContent: _$$z.string(),
  slideMetadata: _$$z.record(_$$z.string(), _$$z.string()),
  outline: eZ
})]);
let e5 = _$$z.object({
  id: _$$z.string(),
  text: _$$z.string(),
  context: _$$z.string().optional(),
  guid: _$$z.string().optional()
});
let e4 = _$$z.union([_$$z.object({
  action: e2,
  text: _$$z.string(),
  surroundingContext: _$$z.string().optional()
}), _$$z.object({
  action: e2,
  texts: e5.array(),
  jsonMode: _$$z.boolean().optional(),
  surroundingContext: _$$z.string().optional()
})]);
let e3 = _$$z.object({
  id: _$$z.string().optional(),
  delta: _$$z.string()
});
let e7 = _$$z.lazy(() => _$$z.object({
  name: _$$z.string().optional(),
  type: _$$z.string(),
  id: _$$z.string().optional(),
  x: _$$z.number().optional(),
  y: _$$z.number().optional(),
  w: _$$z.number().optional(),
  h: _$$z.number().optional(),
  text: _$$z.string().optional(),
  autolayout: _$$z.enum(["VERTICAL", "HORIZONTAL", "NONE"]).optional(),
  children: _$$z.array(e7).optional()
}));
let e8 = _$$z.union([_$$z.object({
  nodeRepresentation: e7,
  imageB64: _$$z.string(),
  isMeteringRequest: _$$z.boolean().optional(),
  renameTopLayerOnly: _$$z.boolean().optional()
}), _$$z.object({
  isMeteringRequest: _$$z.literal(!0),
  nodes: _$$z.array(_$$z.object({
    rep: e7,
    image: _$$z.string()
  })),
  renameTopLayerOnly: _$$z.boolean().optional()
})]);
let e9 = _$$z.string();
let te = _$$z.lazy(() => _$$z.object({
  type: _$$z.string(),
  name: _$$z.string(),
  id: _$$z.string(),
  text: _$$z.string().optional(),
  children: _$$z.array(te).optional()
}));
let tt = _$$z.array(_$$z.array(_$$z.string()));
let ti = _$$z.object({
  nodeRepresentation: te,
  tabularData: tt
});
let tn = _$$z.object({
  guids: _$$z.array(_$$z.string())
});
let ta = _$$z.object({
  prompt: _$$z.string(),
  negativePrompt: _$$z.string().$$default("blurry, bad"),
  cfgScale: _$$z.number().$$default(8),
  seed: _$$z.number().$$default(20),
  height: _$$z.number().$$default(512),
  width: _$$z.number().$$default(512),
  numImages: _$$z.number().$$default(1),
  modelType: _$$z.nativeEnum(xw).optional()
});
let ts = _$$z.object({
  images: _$$z.array(_$$z.string()),
  metadata: _$$z.object({
    height: _$$z.number(),
    width: _$$z.number()
  })
});
let tl = _$$z.enum(["STICKY", "SHAPE_WITH_TEXT", "TEXT", "SECTION"], {
  invalid_type_error: "Not an allowed type in slides"
});
let td = _$$z.object({
  t: _$$z.string({
    description: "The text of the node"
  }),
  type: tl
});
let tc = _$$z.object({
  version: _$$z.string({
    description: "slides request version"
  }),
  data: _$$z.array(td)
});
_$$z.object({
  delta: _$$z.string()
});
let tu = _$$z.enum(["h1", "h2", "h3", "h4", "li", "p"]);
let tp = _$$z.object({
  type: tu,
  content: _$$z.string()
});
let tm = _$$z.object({
  slideType: _$$z.enum(["TITLE", "CHAPTER", "BODY"]),
  content: _$$z.array(tp)
});
let th = _$$z.object({
  type: tu,
  content: _$$z.string()
});
_$$z.union([th, tm]);
let tf = _$$z.object({
  text: _$$z.string(),
  x: _$$z.number(),
  y: _$$z.number()
}).array();
let t_ = _$$z.object({
  texts: tf,
  image: _$$z.string().optional()
});
let tA = _$$z.object({
  delta: _$$z.string()
});
let ty = _$$z.object({
  image_url: _$$z.string()
});
let tb = _$$z.object({
  base64_image: _$$z.string()
});
let tv = _$$z.object({
  input: _$$z.object({
    image: _$$z.string()
  }),
  numDesigns: _$$z.number().optional()
});
let tI = _$$z.object({
  jsx: _$$z.array(_$$z.string()).or(_$$z.array(_$$z.array(_$$z.string())))
});
_$$z.object({
  max_tokens: _$$z.number(),
  temperature: _$$z.number(),
  top_p: _$$z.number(),
  repetition_penalty: _$$z.number(),
  n: _$$z.number().optional()
}).partial();
let tE = _$$z.object({
  image: _$$z.string(),
  candidates: _$$z.array(_$$z.string())
});
let tx = _$$z.object({
  bestCandidateIndex: _$$z.number(),
  candidateSimilarities: _$$z.array(_$$z.number()),
  bestSimilarity: _$$z.number()
});
let tS = _$$z.object({
  png_b64: _$$z.string()
});
let tw = _$$z.object({
  cls: _$$z.string(),
  x: _$$z.number(),
  y: _$$z.number(),
  width: _$$z.number(),
  height: _$$z.number(),
  mask: _$$z.string()
}).passthrough();
let tC = _$$z.object({
  width: _$$z.number(),
  height: _$$z.number(),
  objects: _$$z.array(tw)
}).passthrough();
let tT = _$$z.enum(["STICKY", "SHAPE_WITH_TEXT", "TEXT"], {
  invalid_type_error: "Not an allowed type in ideate"
});
let tk = _$$z.enum(["IMG"]);
let tR = _$$z.object({
  guid: _$$z.string(),
  type: tT,
  text: _$$z.string(),
  aiParentPromptId: _$$z.string().optional()
});
let tN = _$$z.object({
  guid: _$$z.string(),
  type: tk,
  imgUri: _$$z.string(),
  aiParentPromptId: _$$z.string().optional()
});
let tP = _$$z.discriminatedUnion("type", [tR, tN]);
let tO = _$$z.object({
  id: _$$z.string(),
  userPrompt: _$$z.string(),
  selectedNodesPromptedOn: _$$z.array(_$$z.string())
});
let tD = _$$z.object({
  selectedNodes: _$$z.array(tP).optional(),
  otherRelevantNodes: _$$z.array(tP).optional(),
  previousPrompts: _$$z.array(tO).optional(),
  userPrompt: _$$z.string().optional(),
  generateUserPromptFromTexts: _$$z.boolean().$$default(!1),
  nodeTextContents: _$$z.array(_$$z.string()),
  nodeImageContents: _$$z.array(_$$z.string())
});
let tL = _$$z.object({
  data: _$$z.array(_$$z.string()),
  enhancedPrompt: _$$z.string().optional()
});
let tF = _$$z.object({
  selectedNodes: _$$z.array(tP).optional(),
  otherRelevantNodes: _$$z.array(tP).optional(),
  previousPrompts: _$$z.array(tO).optional(),
  userPrompt: _$$z.string().optional(),
  shouldEnhancePrompt: _$$z.boolean().$$default(!1),
  targetWidth: _$$z.number(),
  targetHeight: _$$z.number(),
  nodeTextContents: _$$z.array(_$$z.string()),
  nodeImageContents: _$$z.array(_$$z.string())
});
let tM = _$$z.object({
  base64Image: _$$z.string(),
  enhancedPrompt: _$$z.string().optional()
});
let tj = _$$z.object({
  userPrompt: _$$z.string(),
  imageContents: _$$z.array(_$$z.string()),
  outputType: _$$z.enum(["image", "ideas"])
});
let tU = _$$z.object({
  data: _$$z.string()
});
let tV = _$$z.object({
  description: _$$z.string(),
  image: _$$z.string(),
  modelType: _$$z.nativeEnum(zw)
});
let tG = _$$z.object({
  jsx: _$$z.string(),
  id: _$$z.string(),
  width: _$$z.number(),
  height: _$$z.number(),
  modelType: _$$z.nativeEnum(zw).optional()
});
let tW = _$$z.object({
  fileKey: _$$z.string().optional().nullable(),
  fileOrgId: _$$z.number().optional().nullable(),
  userId: _$$z.number().optional().nullable()
});
let tY = lF.merge(tW);
let tq = _$$z.object({
  text: _$$z.string(),
  usage: cn,
  logprobs: _$$z.optional(ue)
});
let t$ = _$$z.object({
  image_url: _$$z.string(),
  width: _$$z.number().min(1).max(4096),
  height: _$$z.number().min(1).max(4096)
});
let tZ = _$$z.object({
  base64_image: _$$z.string()
});
let tX = _$$z.object({
  type: _$$z.literal("collection"),
  collectionName: _$$z.string().describe("Name of the collection")
});
let tQ = _$$z.object({
  type: _$$z.literal("field"),
  fieldType: _$$z.enum(["PLAIN_TEXT", "SLUG", "IMAGE", "RICH_TEXT", "LINK"]).describe("Type of the field, based on the specifics of the content we are displaying in this collection"),
  name: _$$z.string().describe("Name of the field"),
  reasoning: _$$z.string().describe("Reasoning for the field"),
  confidence: _$$z.number().min(0).max(1).describe("Confidence score between 0 and 1")
});
let tJ = _$$z.object({
  type: _$$z.literal("item"),
  fieldName: _$$z.string().describe("Name of the field"),
  value: _$$z.string().describe("Value of the field"),
  collectionItemId: _$$z.string().describe("Unique ID for the item")
});
let t0 = _$$z.discriminatedUnion("type", [tX, tQ, tJ]);
let t1 = _$$z.object({
  prompt: _$$z.string()
});
let t5 = _$$z.object({
  userPrompt: _$$z.string()
});
let t4 = _$$z.object({
  jsx: _$$z.string().optional(),
  trace: _$$B.optional()
});
let t3 = Ru.extend({
  values: _$$z.array(_$$z.string())
});
let t6 = _$$z.object({
  embeddings: _$$z.array(_$$z.array(_$$z.number()))
});
let t8 = _$$t.omit({
  output: !0,
  schema: !0,
  schemaName: !0,
  schemaDescription: !0
}).merge(tW);
let t9 = _$$z.object({
  object: _$$z.any(),
  usage: cn,
  logprobs: _$$z.optional(ue)
});
let ie = _$$z.union([_$$z.object({
  type: _$$z.literal("object"),
  object: _$$z.any()
}), _$$z.object({
  type: _$$z.literal("text-delta"),
  textDelta: _$$z.string()
}), _$$z.object({
  type: _$$z.literal("error"),
  error: _$$z.any()
}), _$$z.object({
  type: _$$z.literal("finish"),
  finishReason: zF,
  usage: cn
})]);
let it = _$$z.object({
  jsx: _$$z.string(),
  nodeId: _$$z.string(),
  suggestionType: _$$z.number().optional(),
  existingText: _$$z.string().optional(),
  startingChar: _$$z.string().optional()
});
let ii = _$$z.object({
  suggestions: _$$z.array(_$$z.string()),
  usage: _$$z.object({
    promptTokens: _$$z.number(),
    completionTokens: _$$z.number(),
    totalTokens: _$$z.number(),
    logprobs: _$$z.object({
      token: _$$z.string(),
      logprob: _$$z.number()
    }).array().optional()
  })
});
let ia = _$$z.object({
  clientLifecycleId: _$$z.string(),
  requestUuid: _$$z.string(),
  phase: _$$z.string(),
  generationIndex: _$$z.number(),
  featureType: _$$z.union([_$$z.literal("figmake"), _$$z.literal("code_in_sites"), _$$z.literal("ai_assistant"), _$$z.literal("figmake_in_design")]),
  error: _$$z.string()
});
let is = _$$z.object({
  text: _$$z.string(),
  layout: _$$z.string()
});
let io = _$$z.object({
  layout: _$$z.string()
});
let il = _$$z.enum(["minimal", "concise", "detailed", "extensive"]);
let id = _$$z.enum(["auto", "pitch", "product_showcase", "product_management", "sales", "proposal", "research_report", "knowledge", "meeting", "portfolio"]);
let ic = _$$z.enum(["chapter", "slide"]);
let iu = _$$z.object({
  slideCount: _$$z.number().min(1).max(25),
  textDensity: il,
  usecase: id
});
let ip = _$$z.object({
  description: _$$z.string(),
  deckOptions: iu
});
let im = _$$z.discriminatedUnion("type", [_$$z.object({
  type: _$$z.literal("DECK_TITLE"),
  delta: _$$z.string()
}), _$$z.object({
  type: _$$z.literal("DECK_SUBTITLE"),
  delta: _$$z.string()
}), _$$z.object({
  type: _$$z.literal("OUTLINE_ITEM_TYPE"),
  itemType: ic,
  index: _$$z.number()
}), _$$z.object({
  type: _$$z.literal("OUTLINE_ITEM_ROLE"),
  itemType: _$$z.literal("slide"),
  index: _$$z.number(),
  delta: _$$z.string()
}), _$$z.object({
  type: _$$z.literal("OUTLINE_ITEM_CONTENT"),
  itemType: ic,
  index: _$$z.number(),
  delta: _$$z.string()
})]);
let ih = _$$z.object({
  name: _$$z.string(),
  code: _$$z.string()
});
let ig = _$$z.object({
  code: _$$z.string()
});
let i_ = _$$z.object({
  name: _$$z.string(),
  fontFamily: _$$z.string().optional(),
  fontWeight: _$$z.string().optional(),
  fontSize: _$$z.number().optional(),
  lineHeight: _$$z.string().optional()
});
let iA = _$$z.object({
  variables: _$$z.array(_$$z.string()),
  textStyles: _$$z.array(i_),
  componentsForVariables: _$$z.array(ih),
  componentsForTypography: _$$z.array(ih),
  fragments: _$$z.array(ig)
});
let iy = _$$z.object({
  typography: _$$z.string(),
  cssVariables: _$$z.string(),
  globalCss: _$$z.string()
});
let ib = _$$z.object({
  prompt: _$$z.string(),
  selection: _$$z.object({
    text: _$$z.string(),
    start: _$$z.number().optional()
  }).optional()
});
let iv = _$$z.object({
  delta: _$$z.string()
});
let iS = _$$z.object({
  messages: _$$z.array(He).readonly()
});
let iw = _$$k({
  name: "apply_jsx_diff",
  trackingName: "apply_jsx_diff",
  parameters: _$$z.object({
    reasoning: _$$z.string().describe("Reasoning for the changes being made to the JSX. Always provide reasoning as the first parameter, not second."),
    diff: _$$z.string().describe("The aider or jsxquery diff to apply to the user's Figma design JSX.")
  })
});
let iC = d_(iw);
let iT = _$$z.union([iC, Uv]);
let ik = _$$z.object({
  fileKeyHash: _$$z.string()
});
let iR = _$$z.object({
  files: _$$z.record(_$$z.string()),
  mainComponent: _$$z.string(),
  forceProvision: _$$z.boolean().optional()
});
let iN = _$$z.intersection(iR, ik);
let iP = _$$z.object({
  id: _$$z.string(),
  namespace: _$$z.string(),
  status: _$$z.string(),
  urls: _$$z.record(_$$z.string()).optional(),
  upload_status: _$$z.string(),
  esm: _$$z.string().nullable(),
  css: _$$z.string().nullable(),
  sourcemap: _$$z.string().nullable(),
  fileCount: _$$z.number().optional()
});
let iO = _$$z.object({
  filesToUpsert: _$$z.record(_$$z.string()),
  filePathsToDelete: _$$z.array(_$$z.string())
});
let iD = _$$z.intersection(iO, ik);
let iL = _$$z.union([_$$z.object({
  success: _$$z.literal(!0),
  esm: _$$z.string(),
  css: _$$z.string(),
  sourcemap: _$$z.string()
}), _$$z.object({
  success: _$$z.literal(!1),
  error: _$$z.string()
})]);
let iF = _$$z.object({
  forceProvision: _$$z.boolean().optional()
});
let iM = _$$z.intersection(iF, ik);
let ij = _$$z.object({
  id: _$$z.string(),
  namespace: _$$z.string(),
  status: _$$z.string(),
  urls: _$$z.record(_$$z.string())
});
let iU = _$$z.object({});
!function (e) {
  e.VEO3 = "veo-3.0-generate-preview";
  e.VEO2 = "veo-2.0-generate-001";
  e.VEO3_FAST = "veo-3.0-fast-generate-preview";
}(a || (a = {}));
let iB = _$$z.object({
  prompt: _$$z.string(),
  imageUrls: _$$z.array(_$$z.string()).optional(),
  lastFrame: _$$z.string().optional(),
  video: _$$z.string().optional(),
  aspectRatio: _$$z.string().optional(),
  durationSeconds: _$$z.number().optional(),
  resolution: _$$z.string().optional(),
  generateAudio: _$$z.boolean().optional(),
  modelType: _$$z.nativeEnum(a).optional()
});
let iV = _$$z.object({
  operationId: _$$z.string()
});
let iG = _$$z.object({
  operationId: _$$z.string()
});
let iz = _$$z.object({
  video: _$$z.string().optional(),
  done: _$$z.boolean()
});
function iH(e) {
  let t = {
    "Content-Type": "application/json"
  };
  if (null != e) {
    let {
      orgId,
      teamId,
      fileKey,
      userId,
      clientLifecycleId,
      persistentEntityId,
      trackingSessionId,
      clientGeneratedRequestUuid,
      fileSeq
    } = e;
    t["X-Figma-Org-ID"] = orgId ?? "";
    t["X-Figma-Team-ID"] = teamId ?? "";
    t["X-Figma-File-Key"] = fileKey ?? "";
    t["X-Figma-File-Seq"] = fileSeq ?? "";
    t["X-Figma-User-ID"] = userId ?? "";
    t["X-Figma-Client-Lifecycle-ID"] = clientLifecycleId ?? "";
    t["X-Figma-Persistent-Entity-ID"] = persistentEntityId ?? "";
    t["X-Figma-Cortex-Client-Generated-Request-UUID"] = clientGeneratedRequestUuid ?? "";
    t.Tsid = trackingSessionId ?? "";
    t["X-Referer-Service"] = "web";
  }
  return t;
}
let iW = [];
function iK(e, t, i, r) {
  async function a(a, s, o) {
    let l;
    let d = iH(s);
    if (r.buildExtraHeaders) {
      let e = structuredClone(d);
      Object.assign(d = r.buildExtraHeaders(), e);
    }
    let c = t.parse(a);
    try {
      let t = () => (n ?? fetch)(e, {
        method: "POST",
        headers: d,
        body: JSON.stringify(c),
        signal: o?.abortSignal
      });
      if ((l = await t()).ok) {
        let e = HP(l);
        e && (await Kg.waitForWAFValidation(e), l = await t());
      }
    } catch (e) {
      if (iQ(e)) throw iJ(e, "wrapEndpoint: offline");
      throw e;
    }
    if (!l.ok) throw await i0(e, l);
    let u = await l.json();
    return i.parse(u);
  }
  return async function (t, i, n) {
    try {
      return await a(t, i, n);
    } catch (t) {
      r.onError && r.onError(e);
      return t;
    }
  };
}
function iY(e, t, i, n) {
  let r = iK(e, t, i, n);
  let a = (e, t) => r(e, null, t);
  iW.push({
    route: e,
    requestSchema: t,
    responseSchema: i,
    clientFunction: a
  });
  return a;
}
function iq(e, t, i, n) {
  let r = iK(e, t, i, n);
  iW.push({
    route: e,
    requestSchema: t,
    responseSchema: i,
    clientFunction: r
  });
  return r;
}
function i$(e, t, i, r) {
  async function a(a, s, l) {
    var d;
    let c;
    let u = iH(s);
    if (r.buildExtraHeaders) {
      let e = structuredClone(u);
      Object.assign(u = r.buildExtraHeaders(), e);
    }
    let p = t.parse(a);
    try {
      let t = () => (n ?? fetch)(e, {
        method: "POST",
        headers: u,
        body: JSON.stringify(p),
        signal: l?.abortSignal
      });
      if ((c = await t()).ok) {
        let e = HP(c);
        e && (await Kg.waitForWAFValidation(e), c = await t());
      }
    } catch (e) {
      if (iQ(e)) throw iJ(e, "wrapEndpointStreaming: offline");
      throw e;
    }
    if (!c.ok) throw await i0(e, c);
    if (!c.body) throw new G1("generic", {
      message: `Failed to fetch ${e}, no body`,
      status: c.status
    });
    let m = c.body.pipeThrough(function () {
      let e;
      let t = new TextDecoder();
      return new TransformStream({
        start(t) {
          e = _$$C(e => t.enqueue(e));
        },
        transform(i) {
          e.feed(t.decode(i));
        }
      });
    }()).pipeThrough(new TransformStream({
      transform(e, t) {
        if ("event" === e.type) try {
          let i = JSON.parse(e.data);
          let n = i1(i);
          if (null !== n) {
            t.error(n);
            return;
          }
          t.enqueue(i);
        } catch (e) {
          t.error(new G1("generic", {
            message: `Unable to parse streaming event: ${e}`
          }));
        }
      }
    }));
    let h = c.headers.get("X-Cortex-Request-UUID");
    (function (e, t) {
      if (!t) return !1;
      let i = e.safeParse({
        requestUuid: t
      });
      return i.success && i.data && "object" == typeof i.data && 0 !== Object.keys(i.data).length;
    })(i, h) && (m = m.pipeThrough((d = {
      requestUuid: h
    }, new TransformStream({
      start(e) {
        e.enqueue(d);
      },
      transform(e, t) {
        t.enqueue(e);
      }
    }))));
    return m.pipeThrough(new TransformStream({
      transform(e, t) {
        let n = function (e) {
          if (null == e || "object" != typeof e || !("trace" in e) || null == e.trace) return null;
          let t = _$$B.safeParse(e.trace);
          return t.success ? t.data : null;
        }(e);
        if (!n) {
          t.enqueue(e);
          return;
        }
        (function (e, t) {
          try {
            let i = e?.fileKey;
            if (!t || !i || "undefined" == typeof indexedDB) return;
            let n = "cortex-execution-traces";
            let r = "traces";
            let a = indexedDB.open(n, 1);
            a.onupgradeneeded = function () {
              this.result.objectStoreNames.contains(r) || this.result.createObjectStore(r, {
                keyPath: "fileKey"
              });
            };
            a.onsuccess = function () {
              let e = this.result.transaction(r, "readwrite").objectStore(r);
              let a = e.get(i);
              a.onsuccess = () => {
                let r = a.result;
                r && Array.isArray(r.traces) ? (console.debug(n, "adding new trace to record", i), r.traces.push(t)) : (console.debug(n, "creating new record", i), r = {
                  fileKey: i,
                  traces: [t]
                });
                let s = e.put(r);
                s.onsuccess = () => {
                  let t = e.getAllKeys();
                  t.onsuccess = () => {
                    let r = t.result.filter(e => e !== i);
                    if (r.length > 30) {
                      let t = r[Math.floor(Math.random() * r.length)];
                      e.$$delete(t);
                      console.debug(n, "deleted record", t);
                    }
                  };
                };
                s.onerror = e => {
                  console.error("Error storing execution trace in IndexedDB", n, e);
                };
              };
              a.onerror = e => {
                console.error("Error reading execution trace from IndexedDB", n, e);
              };
            };
            a.onerror = e => {
              console.error(`Error opening ${n} db`, e);
            };
          } catch (e) {
            console.error("Error storing execution trace", e);
          }
        })(s, n);
        i.safeParse({
          trace: n
        }).success && t.enqueue({
          trace: n
        });
      }
    })).pipeThrough(new TransformStream({
      transform(e, t) {
        let n;
        try {
          n = i.parse(e);
        } catch (e) {
          t.error(e);
          console.error("ERROR PARSING ZOD", e);
          return;
        }
        try {
          t.enqueue(n);
        } catch (e) {
          console.error("ERROR ENQUEUEING ZOD", e);
        }
      }
    }, new CountQueuingStrategy({
      highWaterMark: 100
    }), new CountQueuingStrategy({
      highWaterMark: 100
    })));
  }
  return async function (t, i, n) {
    try {
      return await a(t, i, n);
    } catch (t) {
      r.onError && r.onError(e);
      return t;
    }
  };
}
function iZ(e, t, i, n) {
  let r = i$(e, t, i, n);
  let a = (e, t) => r(e, null, t);
  iW.push({
    route: e,
    requestSchema: t,
    streamMessageSchema: i,
    clientFunction: a
  });
  return a;
}
function iX(e, t, i, n) {
  let r = i$(e, t, i, n);
  iW.push({
    route: e,
    requestSchema: t,
    streamMessageSchema: i,
    clientFunction: r
  });
  return r;
}
function iQ(e) {
  let t = e.message;
  return "string" == typeof t && ("Failed to fetch" === t || "TypeError: Load failed" === t || t.includes("NetworkError") || t.toLowerCase().includes("network error"));
}
function iJ(e, t) {
  let i = function (e, t) {
    let i = e.message;
    return "string" == typeof i ? i : t;
  }(e, t);
  return new OfflineError({
    message: i,
    stack: e.stack
  });
}
async function i0(e, t) {
  let i;
  try {
    i = await t.json();
  } catch (e) {
    return function (e, t) {
      switch (e.status) {
        case 404:
          return new G1("service_busy", {
            message: "Not found",
            status: e.status
          });
        case 502:
          return new G1("service_busy", {
            message: "Bad Gateway",
            status: e.status
          });
        case 504:
          return new G1("service_busy", {
            message: "Gateway Timeout",
            status: e.status
          });
        default:
          return new G1("generic", {
            message: `Unable to parse non-OK response: ${t}`,
            status: e.status
          });
      }
    }(t, e);
  }
  let n = i1(i);
  if (null !== n) {
    n.sentryTags = {
      request_uuid: i.request_uuid || i.requestUuid
    };
    return n;
  }
  let r = function (e) {
    if (null !== e && "object" == typeof e && e.error) return e.error;
  }(i);
  return null != r ? r : new G1("generic", {
    message: `Failed to fetch ${e}`,
    status: t.status
  });
}
function i1(e) {
  return isSerializedCortexErrorV2(e) ? deserializeCortexErrorV2(e) : null !== e && "object" == typeof e && e.cortex_error ? new G1(e.cortex_error.type, e.cortex_error.data, void 0, void 0, e.cortex_error.trace) : null;
}
export function $$i20(e) {
  let t = e ?? {};
  return {
    openai: {
      completeChat: iY("/api/cortex/dev/openai/chat/completions", J, _$$tm, t),
      streamChat: iZ("/api/cortex/dev/openai/chat/completions", J, v0, t),
      computeEmbeddings: iY("/api/cortex/dev/openai/embeddings", ee, ZI, t)
    },
    figjam: {
      cluster: iq("/api/cortex/figjam/cluster", el, eo, t),
      streamSummarize: iX("/api/cortex/figjam/summarize", u, m, t),
      jamGPT: iq("/api/cortex/figjam/jamgpt", y, b, t),
      createTemplate: iX("/api/cortex/figjam/create_template", Fs, pp, t),
      createVisual: iq("/api/cortex/figjam/create_visual", ex, eS, t),
      classifyCreate: iq("/api/cortex/figjam/classify_create", eN, eP, t),
      updateVisual: iq("/api/cortex/figjam/update_visual", eG, eI, t),
      canvasIdeate: iq("/api/cortex/figjam/canvas/ideate", tD, tL, t),
      canvasMakeImageFromImages: iq("/api/cortex/figjam/canvas/make_image_from_canvas_content", tF, tM, t),
      canvasEnhancePrompt: iq("/api/cortex/figjam/canvas/enhance_prompt", tj, tU, t)
    },
    slides: {
      createSlides: iX("/api/cortex/slides/create_slides", tc, tm, t),
      rewriteText: iX("/api/cortex/slides/rewrite_text", _$$e, aC, t),
      speakerNotes: iX("/api/cortex/slides/speaker_notes", t_, tA, t),
      layoutSwap: iq("/api/cortex/slides/layout/swap", is, io, t),
      generateOutline: iX("/api/cortex/slides/outline/generate", ip, im, t),
      createDeckFromOutline: iX("/api/cortex/slides/outline/create_deck", eJ, e1, t)
    },
    design: {
      generateTextContentFromExamples: iX("/api/cortex/design/editor_ai/content_fill/generate_from_examples", ek, ew, t),
      generateImages: iq("/api/cortex/design/editor_ai/images/generate", ta, ts, t),
      generateVideo: iq("/api/cortex/design/editor_ai/video/generate", iB, iG, t),
      pollVideo: iq("/api/cortex/design/editor_ai/video/poll", iV, iz, t),
      generateMagicLinkV2: iX("/api/cortex/design/prototyping/magic_link_v2", eO, eD, t),
      iconClassifier: iq("/api/cortex/design/prototyping/icon_classifier", N4, pA, t),
      backgroundSegmentation: iq("/api/cortex/design/editor_ai/image_background_segmentation", ez, eH, t),
      sectionDetection: iq("/api/cortex/dev/inference/image_section_detection", eW, eK, t),
      generateRenameLayers: iX("/api/cortex/design/editor_ai/rename_layers", e8, e9, t),
      generateSmartPaste: iq("/api/cortex/design/editor_ai/smart_paste", ti, tn, t),
      firstDraftGenerateStream: iX("/api/cortex/design/first_draft/generate", jR, bv, t),
      firstDraftGenerateV2Stream: iX("/api/cortex/design/first_draft/generate_v2", jR, bv, t),
      firstDraftMakeChanges: iX("/api/cortex/design/first_draft/make_changes", _$$H, _$$tl, t),
      firstDraftCreateImage: iq("/api/cortex/design/first_draft/images/create", k8, Qp, t),
      firstDraftIpConflict: iq("/api/cortex/design/first_draft/ip_conflict", r6, _$$pp, t),
      firstDraftComponentize: iq("/api/cortex/design/first_draft/componentize", TM, XM, t),
      firstDraftSuggestProps: iq("/api/cortex/design/first_draft/suggest_props", L6, KU, t),
      makeEdits: iX("/api/cortex/design/first_draft/make_edits", Z, K, t),
      makeEditsCreateImage: iq("/api/cortex/design/first_draft/make_edits/images/create", k8, Qp, t),
      removeBackgroundClipdrop: iq("/api/cortex/design/editor_ai/clipdrop_background_removal", ty, tb, t),
      getTextImageEmbeds: iY("/api/cortex/dev/inference/text_image_embeds", ea, es, t),
      imageToShareJsx: iY("/api/cortex/dev/inference/image_to_share_jsx", tv, tI, t),
      guiclip: iY("/api/cortex/dev/inference/guiclip", tE, tx, t),
      uiParser: iY("/api/cortex/dev/inference/ui_parser", tS, tC, t),
      imagesEdit: iq("/api/cortex/design/editor_ai/images/edit", Vh, Bd, t),
      imagesFill: iq("/api/cortex/design/editor_ai/images/fill", tG, tV, t),
      upscaleClipdrop: iq("/api/cortex/design/editor_ai/clipdrop_upscale", t$, tZ, t),
      firstDraftFineTune: iZ("/api/cortex/dev/design/first_draft/fine_tune", t5, t4, t)
    },
    shared: {
      makeEditsAgent: iX("/api/cortex/shared/make_edits_agent", iS, iT, t),
      adjustText: iX("/api/cortex/shared/adjust_text", e4, e3, t),
      assistantChat: iZ("/api/cortex/dev/shared/assistant/chat", et, ei, t),
      aiAssistantChat: iX("/api/cortex/shared/ai_assistant_chat", n0, Kv, t),
      imageEvaluator: iY("/api/cortex/dev/shared/image_evaluator", en, er, t),
      getViolationFix: iq("/api/cortex/shared/linting/get_violation_fix", nT, Ld, t),
      generateLivingDesigns: iX("/api/cortex/shared/living_designs", b0, EK, t),
      generateFigMake: iX("/api/cortex/shared/figmake", b0, EK, t),
      generationErrorLog: iq("/api/cortex/shared/generation_error_log", ia, _$$z.object({
        message: _$$z.string()
      }), t),
      autosuggestText: iq("/api/cortex/shared/autosuggest_text", it, ii, t),
      streamCMSCollection: iX("/api/cortex/shared/cms_collection", t1, t0, t),
      extractLibraryCss: iq("/api/cortex/shared/design_system_imports/extract_library_css", iA, iy, t),
      figmakeEnhancePrompt: iX("/api/cortex/shared/figmake/enhance_prompt", ib, iv, t)
    },
    foundry: {
      ping: iq("/api/cortex/foundry/ping", ik, iU, t),
      uploadCode: iq("/api/cortex/foundry/upload-code", iN, iP, t),
      bundle: iq("/api/cortex/foundry/bundle", iD, iL, t),
      sandbox: iq("/api/cortex/foundry/sandbox", iM, ij, t)
    },
    internal: {
      streamText: iZ("/api/cortex/dev/stream_text", tY, _$$z.string(), t),
      streamCMSCollection: iZ("/api/cortex/dev/stream_cms_collection", tY, t0, t),
      generateText: iY("/api/cortex/dev/generate_text", tY, tq, t),
      generateObject: iY("/api/cortex/dev/generate_object", t8, t9, t),
      streamObject: iZ("/api/cortex/dev/stream_object", t8, ie, t),
      generateImages: iY("/api/cortex/dev/generate_images", k0, _$$K, t),
      generateContext: iZ("/api/cortex/dev/string_management/context/generate", _$$p, _$$z.string(), t),
      textEmbed: iY("/api/cortex/dev/text_embed", t3, t6, t),
      makeEditsDebugPrompt: iY("/api/cortex/dev/design/first_draft/make_edits/debug_prompt", X, Q, t)
    }
  };
}
$$i20();
export const yu = $$i20; 

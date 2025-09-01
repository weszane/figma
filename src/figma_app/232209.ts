import { z } from "../vendor/835909";
import { H } from "../905/467709";
import { B } from "../905/340201";
var $$n0;
let o = z.object({
  plainText: z.string(),
  code: z.string().optional(),
  codeFilePath: z.string().optional(),
  hidden: z.boolean().optional().describe("Used to hide automatic error handling messages, which are obfuscated from the user."),
  modelConfigVersion: z.string().optional().describe("Identifies the model config version used in the exchange this message belongs to.")
});
let l = z.object({
  codeFileGuid: z.string(),
  fullFilePath: z.string(),
  code: z.string()
});
let d = z.object({
  hubFileId: z.string(),
  hubFileName: z.string(),
  creatorName: z.string()
});
let c = z.discriminatedUnion("type", [z.object({
  type: z.literal("node"),
  guid: z.string(),
  code: z.string().describe("Design2React output").optional(),
  codeFiles: z.array(l).optional(),
  communityAttribution: d.optional(),
  image: z.string().describe("Image data URI").optional()
}), z.object({
  type: z.literal("image"),
  guid: z.string(),
  image: z.string().describe("Image data URI").optional(),
  imageHash: z.string().describe("Hash of the image").optional()
})]);
let u = z.object({
  filePath: z.string(),
  snippetStartLine: z.number().describe("A 1-indexed line number for the start of the snippet"),
  tagLine: z.number().describe("The line that the selected element / tag is on. Also 1-indexed"),
  snippet: z.string(),
  tagName: z.string(),
  fileImports: z.string().optional(),
  componentHeader: z.string().optional()
});
let p = o.merge(z.object({
  files: z.record(z.string(), z.string()).optional(),
  imports: c.array().optional(),
  libraryKey: z.string().optional(),
  inspectedElement: u.optional(),
  errors: z.array(z.string()).optional(),
  requestUuid: z.string().optional(),
  retryType: z.$$enum(["unclosed_tags_benign", "mid_stream_request_exceeds_context_limit"]).optional(),
  selectedNodeIds: z.array(z.string()).optional()
}));
let _ = z.object({
  role: z.literal("user"),
  content: z.discriminatedUnion("type", [z.object({
    type: z.literal("content")
  }).merge(p)]),
  nodeThumbnailBase64: z.string().optional()
});
let h = z.$$enum(["plan", "work", "summary", "message", "code"]);
let m = z.object({
  codeSnapshotKey: z.string(),
  fileVersionId: z.string().optional()
});
let g = z.object({
  id: z.string().optional(),
  oldString: z.string().optional(),
  newString: z.string().optional(),
  done: z.boolean().optional(),
  error: z.string().optional()
});
let f = o.merge(z.object({
  mode: h.optional(),
  reasoning: z.array(z.union([z.object({
    text: z.string(),
    signature: z.string().optional()
  }), z.object({
    data: z.string()
  })])).optional(),
  signedReasoning: z.object({
    text: z.string(),
    signature: z.string().optional()
  }).optional(),
  redactedReasoning: z.string().optional(),
  codeSnapshot: m.optional(),
  title: z.string().optional(),
  edits: z.record(z.string(), g).optional(),
  providerMetadata: z.object({
    openai: z.object({
      responseId: z.string().optional()
    }).optional()
  }).optional()
}));
let $$E3 = z.object({
  type: z.literal("toolCall"),
  toolCallId: z.string(),
  toolName: z.string(),
  partialArgs: z.record(z.string(), z.any())
});
let y = z.object({
  type: z.literal("toolCalls"),
  toolCalls: z.array($$E3)
});
let b = z.object({
  role: z.literal("assistant"),
  content: z.union([z.object({
    type: z.literal("content")
  }).merge(f), y]),
  toolCalls: z.array($$E3).optional()
});
let $$T4 = z.object({
  toolCallId: z.string(),
  toolName: z.string(),
  result: z.any()
});
let I = z.object({
  role: z.literal("toolResults"),
  content: $$T4.array()
});
let S = z.object({
  role: z.literal("tool")
}).merge($$T4);
let v = z.object({
  path: z.string(),
  addedLines: z.number(),
  removedLines: z.number()
});
let A = z.discriminatedUnion("type", [z.object({
  type: z.literal("restore"),
  restoredTo: z.string().optional(),
  codeSnapshot: m.optional(),
  title: z.string().optional()
}).merge(o), z.object({
  type: z.literal("manual_edit"),
  changedFiles: z.array(v),
  codeSnapshot: m.optional(),
  title: z.string().optional()
}).merge(o), z.object({
  type: z.literal("duplicated_file"),
  plainText: z.string(),
  fileKeyHash: z.string()
}).merge(o), z.object({
  type: z.literal("deleted_chat_history"),
  timestamp: z.number(),
  userId: z.string().optional()
}).merge(o)]);
let x = z.object({
  role: z.literal("system"),
  content: A.optional()
});
let N = z.discriminatedUnion("role", [b, _, I, S, x]);
let $$C1 = z.object({
  totalSummarized: z.number(),
  summary: z.string()
});
let w = z.object({
  force: z.boolean().optional()
}).merge($$C1);
!function(e) {
  e.MAKE_STANDALONE = "figmake";
  e.CODE_LAYERS = "code_layers";
}($$n0 || ($$n0 = {}));
let O = z.object({
  key: z.string(),
  libraryKey: z.string(),
  version: z.number()
});
let $$R2 = z.object({
  chats: N.array(),
  files: z.record(z.string(), z.string()),
  chatCompression: w.optional(),
  systemPromptOverride: z.string().optional(),
  supabase: z.object({
    projectId: z.string().optional(),
    publicAnonKey: z.string().optional(),
    makeNamespace: z.string().optional(),
    isConnectedNonOwner: z.boolean().optional(),
    secrets: z.array(z.string()).optional()
  }).optional(),
  supabaseEnabled: z.boolean().optional(),
  codeLibraryComponents: z.array(O).optional(),
  rawUserChatDetails: B.optional(),
  model: z.nativeEnum(H).optional(),
  entrypointFilePath: z.string().optional(),
  multiFileCodeLayersEnabled: z.boolean().optional(),
  productType: z.nativeEnum($$n0).optional()
});
$$R2.extend({
  configKey: z.string()
});
export const Ym = $$n0;
export const _O = $$C1;
export const b0 = $$R2;
export const gB = $$E3;
export const z7 = $$T4; 

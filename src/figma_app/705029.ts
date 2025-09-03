import { z } from "../vendor/835909";
import { B } from "../905/985467";
z.object({
  prompt_data: z.string(),
  negative_prompt_data: z.string().$$default("blurry, bad"),
  cfg_scale: z.number().$$default(10),
  seed: z.number().$$default(20),
  steps: z.number().$$default(50),
  style_preset: z.string().$$default("photographic"),
  height: z.number().$$default(512),
  width: z.number().$$default(512),
  additionalPrefix: z.string().optional().$$default("")
});
z.object({
  image: z.string(),
  metadata: z.object({
    height: z.number(),
    width: z.number()
  })
});
z.object({
  componentQueries: z.array(z.string())
});
let a = z.union([z.object({
  role: z.union([z.literal("assistant"), z.literal("system")]),
  content: z.string()
}), z.object({
  role: z.literal("user"),
  content: z.union([z.string(), z.array(z.union([z.object({
    type: z.literal("text"),
    text: z.string()
  }), z.object({
    type: z.literal("image"),
    image: z.string()
  })]))])
})]);
let $$s9 = z.object({
  userPrompt: z.string(),
  kitKey: z.string().nullable().optional(),
  isLocal: z.boolean().nullable().optional(),
  isDirectGenerationCompatible: z.boolean().nullable().optional(),
  extraMessagesFigmateOnly: z.array(a).optional(),
  componentQueries: z.array(z.string()).optional()
});
z.string();
z.object({
  recommendedKitKey: z.string()
});
export let $$o8 = z.object({
  presets: z.array(z.string()).optional(),
  theme: z.record(z.any()).optional(),
  jsx: z.string().optional(),
  dsKit: z.object({
    kitKey: z.string(),
    isLocal: z.boolean(),
    isDirectGenLibrary: z.boolean()
  }).optional(),
  trace: B.optional()
});
z.object({
  userPrompt: z.string()
});
z.object({
  content: z.string()
});
let l = z.object({
  version: z.literal(2),
  darkMode: z.boolean(),
  fontFamilies: z.object({
    title: z.array(z.string()),
    body: z.array(z.string()),
    label: z.array(z.string())
  }),
  brandColor: z.string(),
  colors: z.object({
    text: z.string().array(),
    background: z.string().array(),
    border: z.string().array()
  }),
  borderRadii: z.array(z.number()),
  spacing: z.array(z.number())
});
l.omit({
  version: !0
}).keyof();
let d = z.object({
  fontFamilies: z.array(z.string()),
  colors: z.array(z.string()),
  borderRadii: z.array(z.number()),
  spacing: z.array(z.number())
});
let c = z.union([l, d]);
let $$u1 = z.object({
  prompt: z.string()
});
let $$p2 = z.object({
  userPrompt: z.string(),
  promptHistory: z.array($$u1).optional(),
  storedInitialPrompt: z.string(),
  jsx: z.string(),
  jsxInsertReplace: z.string().optional(),
  currentTheme: c,
  kitKey: z.string(),
  isLocal: z.boolean()
});
let _ = z.object({
  type: z.literal("text_or_image"),
  affectedId: z.string(),
  content: z.string()
});
let h = z.enum(["font", "layout", "component", "other"]);
let m = z.object({
  type: z.literal("theme"),
  content: l.partial()
});
let g = z.object({
  type: z.literal("iCantDoThis"),
  rationaleCategory: h.optional()
});
let f = [z.object({
  type: z.literal("remove"),
  affectedId: z.string()
}), z.object({
  type: z.literal("move"),
  affectedId: z.string(),
  insertBehavior: z.enum(["above", "below"]),
  destinationId: z.string()
}), z.object({
  type: z.literal("replaceClasses"),
  affectedId: z.string(),
  classes: z.string().array()
})];
let E = [z.object({
  type: z.literal("insert"),
  affectedId: z.string(),
  insertBehavior: z.enum(["above", "below"]),
  jsxToInsert: z.string()
}), z.object({
  type: z.literal("replace"),
  affectedId: z.string(),
  jsxToInsert: z.string()
})];
let y = z.discriminatedUnion("type", [_, ...f, ...E, m, g]);
let $$b13 = z.object({
  action: y.optional(),
  cortex_error: z.object({
    type: z.string(),
    data: z.any()
  }).optional(),
  trace: B.optional()
});
let T = z.object({
  key: z.string(),
  name: z.string(),
  is_local: z.boolean(),
  description: z.string()
});
z.object({
  meta: z.object({
    kits: z.array(T)
  }),
  error: z.boolean().optional(),
  message: z.string().optional()
});
let I = z.enum(["normal", "transparent", "segment"]);
let $$S12 = z.object({
  imageB64: z.string()
});
let $$v11 = z.object({
  conflictScore: z.number(),
  reasoning: z.string()
});
let A = z.object({
  imageB64: z.string(),
  jsx: z.string()
});
let $$x6 = z.object({
  requests: z.array(A)
});
let $$N0 = z.object({
  isMobileDesign: z.boolean(),
  components: z.array(z.object({
    guid: z.string(),
    name: z.string()
  }))
});
let $$C7 = z.object({
  responses: z.array($$N0.nullable())
});
let w = z.object({
  imageB64: z.string(),
  jsx: z.string(),
  isStateGroup: z.boolean()
});
let $$O4 = z.object({
  requests: z.array(w)
});
let R = z.object({
  componentName: z.string(),
  componentDescription: z.string(),
  nodeIdsToPropertyNames: z.array(z.object({
    id: z.string(),
    propertyName: z.string()
  }))
});
let $$L3 = z.object({
  responses: z.array(R.nullable())
});
let $$P10 = z.object({
  id: z.string().optional(),
  initialUserPrompt: z.string().optional(),
  jsxJSON: z.string().optional(),
  prompt: z.string().optional(),
  desc: z.string().optional(),
  transparent: z.boolean().optional(),
  background: I.optional(),
  height: z.number(),
  width: z.number(),
  description: z.string().optional()
});
let $$D5 = z.object({
  image: z.string(),
  foregroundImage: z.string().optional(),
  description: z.string(),
  trace: B.optional()
});
export const AR = $$N0;
export const Db = $$u1;
export const H = $$p2;
export const KU = $$L3;
export const L6 = $$O4;
export const Qp = $$D5;
export const TM = $$x6;
export const XM = $$C7;
export const bv = $$o8;
export const jR = $$s9;
export const k8 = $$P10;
export const pp = $$v11;
export const r6 = $$S12;
export const tl = $$b13; 

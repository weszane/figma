import { w5, Mn } from "../905/340677";
import { z } from "../vendor/835909";
let a = z.object({
  editType: z.literal("createNode"),
  guid: z.string(),
  nodeType: z.string()
});
let $$s4 = z.lazy(() => a.extend({
  nodeJsx: z.object({
    jsxText: z.string(),
    guidsInJSX: z.array(z.string()),
    subtreeEdits: z.array($$d7)
  }).optional()
}));
let $$o8 = z.object({
  editType: z.literal("setProperty"),
  guid: z.string(),
  key: z.string(),
  value: z.any()
});
let $$l0 = z.object({
  editType: z.literal("callMethod"),
  guid: z.string(),
  funcName: z.string(),
  args: z.array(z.any())
});
let $$d7 = z.lazy(() => z.discriminatedUnion("editType", [a, $$o8, $$l0]));
let $$c6 = z.object({
  guid: z.string(),
  jsxStr: z.string(),
  name: z.string(),
  jsxName: z.string(),
  typescriptType: z.string().optional()
});
let u = z.object({
  guid: z.string(),
  caption: z.string()
});
let p = u.extend({
  paintIndex: z.number()
});
let m = z.discriminatedUnion("type", [p.extend({
  type: z.literal("fill")
}), p.extend({
  type: z.literal("stroke")
})]);
let h = p.extend({
  type: z.literal("textRange"),
  rangeStart: z.number(),
  rangeEnd: z.number()
});
let g = u.extend({
  type: z.literal("vector")
});
let $$f1 = z.union([h, m, g]);
let $$_3 = z.object({
  type: z.$$enum(["vector", "vector-path"]),
  data: z.string(),
  nodeIds: z.array(z.string())
});
let $$A2 = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string()
});
let $$y5 = z.object({
  jsxStr: z.string(),
  componentInfoByJSXName: z.record($$c6),
  assetsByName: z.record($$_3),
  variablesObjDefinition: z.string().optional(),
  styleInfoByName: z.record($$A2).optional(),
  originalSize: z.object({
    x: z.number(),
    y: z.number()
  }),
  issues: z.array(w5),
  serializedIds: z.array(z.string()).optional()
});
z.object({
  jsStr: z.string(),
  serializeIssues: z.array(w5),
  deserializeIssues: z.array(Mn),
  edits: z.array($$d7)
});
export const D1 = $$l0;
export const Kj = $$f1;
export const UE = $$A2;
export const XY = $$_3;
export const ao = $$s4;
export const mk = $$y5;
export const n3 = $$c6;
export const sU = $$d7;
export const tV = $$o8;
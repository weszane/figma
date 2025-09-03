import { H } from "../905/154079";
import { n3, XY, UE, Kj } from "../905/43538";
import { z } from "../vendor/835909";
let s = z.object({
  tempDeserializeComponentsAsFrames: z.boolean().optional().describe("Deserialize components as frames"),
  tempExternalPathData: z.boolean().optional().describe("Extract only path data")
});
let o = z.object({
  testOnlyOmitNodeSerializers: z.array(z.string()).optional()
});
let $$l1 = z.object({
  fieldGroups: z.array(H).optional().describe("If set, only certain field groups will be included in the serialized output.  By default, all fields are included."),
  includeIDs: z.boolean().optional().describe("Include node id in the jsx "),
  includeNames: z.boolean().optional().describe("Include node name in the jsx ")
});
let d = z.enum(["default", "flow"]);
let c = z.object({
  ignoreDeveloperFriendlyIds: z.boolean().optional().describe("Ignore developer-friendly IDs"),
  excludeImageData: z.boolean().optional().describe("Exclude image data"),
  fieldGroupFilters: z.record(H, z.array(z.string())).optional(),
  focusNodeId: z.string().optional(),
  serializeAllFocusNodeAncestors: z.boolean().optional(),
  maxSerializeNodes: z.number().optional(),
  maxSerializeTimeMs: z.number().optional(),
  maxNodeswithFields: z.number().optional(),
  flattenTextContent: z.boolean().optional().describe("Flatten text content"),
  truncateFlattenedTextContent: z.number().optional(),
  substituteWebSyntaxForVariables: z.boolean().optional().describe("Substitute web syntax for variables"),
  useCustomGroupAndImageFormatForFirstDraft: z.boolean().optional().describe("Use custom group and image format for First Draft"),
  includeInstanceSublayers: z.boolean().optional().describe("Include instance sublayers"),
  forcePopulateOverrideKey: z.boolean().optional().describe("Always populate overrideKey"),
  onlyIncludeTopPaint: z.boolean().optional().describe("Only include top paint"),
  ignoreFetchingComponentData: z.boolean().optional().describe("Ignore fetching component data"),
  ignoreComponentProps: z.boolean().optional().describe("Ignore component props"),
  includeTypescriptTypes: z.boolean().optional().describe("Include TypeScript types"),
  forceAbsolutePosition: z.boolean().optional().describe("Force absolute position for x/y"),
  forceAbsoluteSize: z.boolean().optional().describe("Force absolute size for width/height"),
  excludeEmptyContainers: z.boolean().optional().describe("Exclude empty containers"),
  noTypeInfoCache: z.boolean().optional().describe("Disable caching for type info"),
  replaceIrregularWhitespace: z.boolean().optional().describe("Replace unusual whitespace"),
  vectorPlaceholderAssetId: z.string().optional()
});
let u = z.object({
  componentInfoByJSXName: z.record(n3.partial()).optional(),
  assetsByName: z.record(XY).optional(),
  styleInfoByName: z.record(UE.partial().required({
    id: !0
  })).optional(),
  originalSize: z.object({
    x: z.number(),
    y: z.number()
  }).optional(),
  unknownNodeFallbackHex: z.string().optional(),
  imagePlaceholderRef: z.string().optional(),
  transformUnhandledNodes: z.boolean().optional().describe("Transform unhandled nodes"),
  updateDerivedSymbolDataAfterDeserialization: z.boolean().optional().describe("Update derived symbol data after deserialization"),
  parentNodeId: z.string().optional(),
  indexInParent: z.number().optional(),
  namesFromImageGenerationRequests: z.boolean().optional(),
  reconcileById: z.boolean().optional().describe("Reconcile by id"),
  checkEditQuality: z.boolean().optional(),
  modifiableIds: z.array(z.string()).optional(),
  permissiveTopLevelOverrides: z.boolean().optional()
});
let p = z.object({
  flavor: d.$$default("default"),
  tailwind: z.boolean().optional().describe("Use Tailwind"),
  tailwindOnly: z.boolean().optional().describe("Use Tailwind ONLY (lossy)"),
  includeIDs: z.boolean().optional().describe("Include IDs"),
  includeNames: z.boolean().optional().describe("Include names"),
  fieldGroups: z.array(H).optional(),
  excludeVectorData: z.boolean().optional().describe("Exclude vector data"),
  inlineVectorData: z.boolean().optional().describe("Inline vector data"),
  includeNodeTypes: z.array(z.string()).optional(),
  normalizeRootXY: z.boolean().optional().describe("Normalize root XY"),
  normalizePxToRange01: z.boolean().optional().describe("Normalize pixel values to 0-1"),
  orderChildrenByXY: z.boolean().optional().describe("Order children by XY"),
  ignoreHugContentsOnEmptyFrames: z.boolean().optional().describe("Ignore hug contents on empty frames"),
  includeInstanceOverrides: z.boolean().optional().describe("Include instance overrides"),
  useDivTagsForFrames: z.boolean().optional().describe("Use div tags for frames"),
  topLevelComponentProps: z.boolean().optional().describe("Deserialize top-level component props"),
  includeVariables: z.boolean().optional().describe("Include variables"),
  includeStyles: z.boolean().optional().describe("Include styles"),
  includeAssetGenerationRequests: z.boolean().optional(),
  assetGenerationRequests: z.array(Kj).optional(),
  strict: z.boolean().optional().describe("Strict serialize/deserialize"),
  materializeInvisibleChildren: z.boolean().optional().describe("Materialize invisible children")
});
let $$m4 = z.object({
  ...p.shape,
  ...c.shape,
  ...u.shape,
  ...s.shape,
  ...o.shape
});
$$m4.extend({
  serializeAsComponentDefinition: z.boolean().optional()
});
export let $$h2 = $$m4.parse({
  includeIDs: !0,
  includeNames: !0,
  inlineVectorData: !0,
  orderChildrenByXY: !0,
  strict: !0
});
export function $$g3() {
  return function (e) {
    let t = {};
    for (let [i, n] of Object.entries(e)) n instanceof z.ZodOptional && n.unwrap() instanceof z.ZodBoolean && n._def.description && "string" == typeof n._def.description && (t[i] = n._def.description);
    return t;
  }($$m4.shape);
}
export { D1, ao, sU, tV } from "../905/43538";
export const J3 = $$l1;
export const KQ = $$h2;
export const UD = $$g3;
export const Y_ = $$m4; 

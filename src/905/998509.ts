import { z } from 'zod'
import { assetSchema, componentInfoSchema, paintUnionSchema, styleInfoSchema } from '../905/43538'
import { fieldGroupTypeEnum } from '../905/154079'

/**
 * @fileoverview
 * Refactored Zod schemas and utility functions for serialization options.
 * Original variable names preserved in comments for traceability.
 */

/**
 * Schema for temporary serialization options.
 * (Original: s)
 */
export const tempSerializationOptionsSchema = z.object({
  tempDeserializeComponentsAsFrames: z.boolean().optional().describe('Deserialize components as frames'),
  tempExternalPathData: z.boolean().optional().describe('Extract only path data'),
})

/**
 * Schema for test-only node serializer options.
 * (Original: o)
 */
export const testNodeSerializerOptionsSchema = z.object({
  testOnlyOmitNodeSerializers: z.array(z.string()).optional(),
})

/**
 * Schema for field group serialization options.
 * (Original: $$l1)
 */
export const fieldGroupSerializationOptionsSchema = z.object({
  fieldGroups: z.array(fieldGroupTypeEnum).optional().describe('If set, only certain field groups will be included in the serialized output.  By default, all fields are included.'),
  includeIDs: z.boolean().optional().describe('Include node id in the jsx '),
  includeNames: z.boolean().optional().describe('Include node name in the jsx '),
})

/**
 * Enum for serialization flavor.
 * (Original: d)
 */
export const serializationFlavorEnum = z.enum(['default', 'flow'])

/**
 * Schema for advanced serialization options.
 * (Original: c)
 */
export const advancedSerializationOptionsSchema = z.object({
  ignoreDeveloperFriendlyIds: z.boolean().optional().describe('Ignore developer-friendly IDs'),
  excludeImageData: z.boolean().optional().describe('Exclude image data'),
  fieldGroupFilters: z.record(fieldGroupTypeEnum, z.array(z.string())).optional(),
  focusNodeId: z.string().optional(),
  serializeAllFocusNodeAncestors: z.boolean().optional(),
  maxSerializeNodes: z.number().optional(),
  maxSerializeTimeMs: z.number().optional(),
  maxNodeswithFields: z.number().optional(),
  flattenTextContent: z.boolean().optional().describe('Flatten text content'),
  truncateFlattenedTextContent: z.number().optional(),
  substituteWebSyntaxForVariables: z.boolean().optional().describe('Substitute web syntax for variables'),
  useCustomGroupAndImageFormatForFirstDraft: z.boolean().optional().describe('Use custom group and image format for First Draft'),
  includeInstanceSublayers: z.boolean().optional().describe('Include instance sublayers'),
  forcePopulateOverrideKey: z.boolean().optional().describe('Always populate overrideKey'),
  onlyIncludeTopPaint: z.boolean().optional().describe('Only include top paint'),
  ignoreFetchingComponentData: z.boolean().optional().describe('Ignore fetching component data'),
  ignoreComponentProps: z.boolean().optional().describe('Ignore component props'),
  includeTypescriptTypes: z.boolean().optional().describe('Include TypeScript types'),
  forceAbsolutePosition: z.boolean().optional().describe('Force absolute position for x/y'),
  forceAbsoluteSize: z.boolean().optional().describe('Force absolute size for width/height'),
  excludeEmptyContainers: z.boolean().optional().describe('Exclude empty containers'),
  noTypeInfoCache: z.boolean().optional().describe('Disable caching for type info'),
  replaceIrregularWhitespace: z.boolean().optional().describe('Replace unusual whitespace'),
  vectorPlaceholderAssetId: z.string().optional(),
})

/**
 * Schema for component and asset info.
 * (Original: u)
 */
export const componentAssetInfoSchema = z.object({
  componentInfoByJSXName: z.record(componentInfoSchema.partial()).optional(),
  assetsByName: z.record(assetSchema).optional(),
  styleInfoByName: z.record(styleInfoSchema.partial().required({
    id: true,
  })).optional(),
  originalSize: z.object({
    x: z.number(),
    y: z.number(),
  }).optional(),
  unknownNodeFallbackHex: z.string().optional(),
  imagePlaceholderRef: z.string().optional(),
  transformUnhandledNodes: z.boolean().optional().describe('Transform unhandled nodes'),
  updateDerivedSymbolDataAfterDeserialization: z.boolean().optional().describe('Update derived symbol data after deserialization'),
  parentNodeId: z.string().optional(),
  indexInParent: z.number().optional(),
  namesFromImageGenerationRequests: z.boolean().optional(),
  reconcileById: z.boolean().optional().describe('Reconcile by id'),
  checkEditQuality: z.boolean().optional(),
  modifiableIds: z.array(z.string()).optional(),
  permissiveTopLevelOverrides: z.boolean().optional(),
})

/**
 * Schema for serialization options.
 * (Original: p)
 */
export const serializationOptionsSchema = z.object({
  flavor: serializationFlavorEnum.default('default'),
  tailwind: z.boolean().optional().describe('Use Tailwind'),
  tailwindOnly: z.boolean().optional().describe('Use Tailwind ONLY (lossy)'),
  includeIDs: z.boolean().optional().describe('Include IDs'),
  includeNames: z.boolean().optional().describe('Include names'),
  fieldGroups: z.array(fieldGroupTypeEnum).optional(),
  excludeVectorData: z.boolean().optional().describe('Exclude vector data'),
  inlineVectorData: z.boolean().optional().describe('Inline vector data'),
  includeNodeTypes: z.array(z.string()).optional(),
  normalizeRootXY: z.boolean().optional().describe('Normalize root XY'),
  normalizePxToRange01: z.boolean().optional().describe('Normalize pixel values to 0-1'),
  orderChildrenByXY: z.boolean().optional().describe('Order children by XY'),
  ignoreHugContentsOnEmptyFrames: z.boolean().optional().describe('Ignore hug contents on empty frames'),
  includeInstanceOverrides: z.boolean().optional().describe('Include instance overrides'),
  useDivTagsForFrames: z.boolean().optional().describe('Use div tags for frames'),
  topLevelComponentProps: z.boolean().optional().describe('Deserialize top-level component props'),
  includeVariables: z.boolean().optional().describe('Include variables'),
  includeStyles: z.boolean().optional().describe('Include styles'),
  includeAssetGenerationRequests: z.boolean().optional(),
  assetGenerationRequests: z.array(paintUnionSchema).optional(),
  strict: z.boolean().optional().describe('Strict serialize/deserialize'),
  materializeInvisibleChildren: z.boolean().optional().describe('Materialize invisible children'),
})

/**
 * Combined schema for all serialization options.
 * (Original: $$m4)
 */
export const combinedSerializationOptionsSchema = z.object({
  ...serializationOptionsSchema.shape,
  ...advancedSerializationOptionsSchema.shape,
  ...componentAssetInfoSchema.shape,
  ...tempSerializationOptionsSchema.shape,
  ...testNodeSerializerOptionsSchema.shape,
}).extend({
  serializeAsComponentDefinition: z.boolean().optional(),
})

/**
 * Default serialization options.
 * (Original: $$h2)
 */
export const defaultSerializationOptions = combinedSerializationOptionsSchema.parse({
  includeIDs: true,
  includeNames: true,
  inlineVectorData: true,
  orderChildrenByXY: true,
  strict: true,
})

/**
 * Extracts descriptions from boolean optional fields in the schema.
 * (Original: $$g3)
 * @returns Record<string, string>
 */
export function extractBooleanFieldDescriptions(): Record<string, string> {
  const shape = combinedSerializationOptionsSchema.shape
  const descriptions: Record<string, string> = {}
  for (const [key, value] of Object.entries(shape)) {
    if (
      value instanceof z.ZodOptional
      && value.unwrap() instanceof z.ZodBoolean
      && value._def.description
      && typeof value._def.description === 'string'
    ) {
      descriptions[key] = value._def.description
    }
  }
  return descriptions
}

// Exported variables with original names for traceability
export const J3 = fieldGroupSerializationOptionsSchema // $$l1
export const KQ = defaultSerializationOptions // $$h2
export const UD = extractBooleanFieldDescriptions // $$g3
export const Y_ = combinedSerializationOptionsSchema // $$m4
export { ao, D1, sU, tV } from '../905/43538'

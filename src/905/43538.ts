import { z } from 'zod'
import { deserializeErrorSchema, errorMessageSchema } from '../905/340677'

/**
 * Zod schemas for node edits and related types.
 * Original variable names preserved in comments for traceability.
 */

/**
 * Represents a node creation edit.
 * @see a
 */
export const createNodeEditSchema = z.object({
  editType: z.literal('createNode'),
  guid: z.string(),
  nodeType: z.string(),
})

/**
 * Represents a set property edit.
 * @see $$o8
 */
export const setPropertyEditSchema = z.object({
  editType: z.literal('setProperty'),
  guid: z.string(),
  key: z.string(),
  value: z.any(),
})

/**
 * Represents a call method edit.
 * @see $$l0
 */
export const callMethodEditSchema = z.object({
  editType: z.literal('callMethod'),
  guid: z.string(),
  funcName: z.string(),
  args: z.array(z.any()),
})

/**
 * Discriminated union of all edit types.
 * @see $$d7
 */
export const editSchema = z.lazy(() =>
  z.discriminatedUnion('editType', [
    createNodeEditSchema,
    setPropertyEditSchema,
    callMethodEditSchema,
  ]),
)

/**
 * Represents a node JSX edit, extending createNodeEditSchema.
 * @see $$s4
 */
export const createNodeWithJsxEditSchema = z.lazy(() =>
  createNodeEditSchema.extend({
    nodeJsx: z
      .object({
        jsxText: z.string(),
        guidsInJSX: z.array(z.string()),
        subtreeEdits: z.array(editSchema),
      })
      .optional(),
  }),
)

/**
 * Component info schema.
 * @see $$c6
 */
export const componentInfoSchema = z.object({
  guid: z.string(),
  jsxStr: z.string(),
  name: z.string(),
  jsxName: z.string(),
  typescriptType: z.string().optional(),
})

/**
 * Base user schema.
 * @see u
 */
export const userSchema = z.object({
  guid: z.string(),
  caption: z.string(),
})

/**
 * Paint schema, extends userSchema.
 * @see p
 */
export const paintSchema = userSchema.extend({
  paintIndex: z.number(),
})

/**
 * Fill and stroke discriminated union.
 * @see getDefaultFrameProps
 */
export const fillStrokeSchema = z.discriminatedUnion('type', [
  paintSchema.extend({
    type: z.literal('fill'),
  }),
  paintSchema.extend({
    type: z.literal('stroke'),
  }),
])

/**
 * Text range schema.
 * @see h
 */
export const textRangeSchema = paintSchema.extend({
  type: z.literal('textRange'),
  rangeStart: z.number(),
  rangeEnd: z.number(),
})

/**
 * Vector schema.
 * @see g
 */
export const vectorSchema = userSchema.extend({
  type: z.literal('vector'),
})

/**
 * Union of fill, stroke, text range, and vector.
 * @see $$f1
 */
export const paintUnionSchema = z.union([textRangeSchema, fillStrokeSchema, vectorSchema])

/**
 * Asset schema.
 * @see $$_3
 */
export const assetSchema = z.object({
  type: z.enum(['vector', 'vector-path']),
  data: z.string(),
  nodeIds: z.array(z.string()),
})

/**
 * Style info schema.
 * @see $$A2
 */
export const styleInfoSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
})

/**
 * Main mk schema for component info, assets, variables, styles, and issues.
 * @see $$y5
 */
export const defineJSXSchema = z.object({
  jsxStr: z.string(),
  componentInfoByJSXName: z.record(componentInfoSchema),
  assetsByName: z.record(assetSchema),
  variablesObjDefinition: z.string().optional(),
  styleInfoByName: z.record(styleInfoSchema).optional(),
  originalSize: z.object({
    x: z.number(),
    y: z.number(),
  }),
  issues: z.array(errorMessageSchema),
  serializedIds: z.array(z.string()).optional(),
})

/** Exported schemas with refactored names. */
export const D1 = callMethodEditSchema
export const Kj = paintUnionSchema
export const UE = styleInfoSchema
export const XY = assetSchema
export const ao = createNodeWithJsxEditSchema
export const mk = defineJSXSchema
export const n3 = componentInfoSchema
export const sU = editSchema
export const tV = setPropertyEditSchema

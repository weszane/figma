import { z } from 'zod'

// Original: $$r6 - SessionInfo schema
/**
 * Schema for session information containing session ID and local ID.
 */
export const SessionInfoSchema = z.object({
  sessionID: z.number(),
  localID: z.number(),
})

// Original: $$a3 - ColorRGBA schema
/**
 * Schema for RGBA color values, each component between 0 and 1.
 */
export const ColorRGBASchema = z.object({
  r: z.number().gte(0).lte(1),
  g: z.number().gte(0).lte(1),
  b: z.number().gte(0).lte(1),
  a: z.number().gte(0).lte(1),
})

// Original: $$s2 - Rectangle schema
/**
 * Schema for rectangle dimensions with position and size.
 */
export const RectangleSchema = z.object({
  x: z.number(),
  y: z.number(),
  width: z.number(),
  height: z.number(),
})

// Original: $$o1 - VectorPair schema (two 3-element tuples, e.g., start and end points)
/**
 * Schema for a pair of 3D vectors, represented as tuples.
 */
export const VectorPairSchema = z.tuple([z.tuple([z.number(), z.number(), z.number()]), z.tuple([z.number(), z.number(), z.number()])])

// Original: $$l5 - AffineTransform schema (2x3 matrix for 2D affine transformations)
/**
 * Schema for a 2x3 affine transformation matrix.
 */
export const AffineTransformSchema = z.object({
  m00: z.number(),
  m01: z.number(),
  m02: z.number(),
  m10: z.number(),
  m11: z.number(),
  m12: z.number(),
})

// Original: d - DataType enum
/**
 * Enum for data types used in variables.
 */
export const DataType = z.enum(['STRING', 'FLOAT', 'BOOLEAN', 'COLOR', 'IMAGE'])

// Original: $$c4 - VariableAlias schema
/**
 * Schema for variable alias with type, ID, and optional resolved type.
 */
export const VariableAliasSchema = z.object({
  type: z.literal('VARIABLE_ALIAS'),
  id: z.string(),
  resolvedType: DataType.optional(),
})

// Original: $$u0 - Point schema
/**
 * Schema for a 2D point with x and y coordinates.
 */
export const PointSchema = z.object({
  x: z.number(),
  y: z.number(),
})

// Refactored exports with meaningful names, maintaining original export structure for compatibility
export const $l = PointSchema // Original export: $l
export const QV = VectorPairSchema // Original export: QV
export const TL = RectangleSchema // Original export: TL
export const Ux = ColorRGBASchema // Original export: Ux
export const Yj = VariableAliasSchema // Original export: Yj
export const bG = AffineTransformSchema // Original export: bG
export const rw = SessionInfoSchema // Original export: rw

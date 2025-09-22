import { z } from 'zod'

/**
 * Enum for rule types (original: $$n0)
 */
export enum MissingRuleType {
  MISSING_COLOR_TOKEN = 'MISSING_COLOR_TOKEN',
  MISSING_CORNER_RADII = 'MISSING_CORNER_RADII',
}

/**
 * Zod enum for fill/stroke (original: a)
 */
export const FillStrokeEnum = z.enum(['fill', 'stroke'])

/**
 * Zod schema for variable object (original: s)
 */
export const VariableSchema = z.object({
  name: z.string(),
  type: z.string(),
  value: z.string(),
})

/**
 * Zod schema for property update (original: o)
 */
export const PropertyUpdateSchema = z.object({
  id: z.string().optional(),
  prop: z.discriminatedUnion('ruleType', [
    z.object({
      ruleType: z.literal(MissingRuleType.MISSING_COLOR_TOKEN),
      value: FillStrokeEnum,
    }),
    z.object({
      ruleType: z.literal(MissingRuleType.MISSING_CORNER_RADII),
      value: z.enum([
        'topLeftRadius',
        'topRightRadius',
        'bottomLeftRadius',
        'bottomRightRadius',
      ]),
    }),
  ]),
  newValue: z.string().optional(),
  deleted: z.boolean().optional(),
})

/**
 * Zod schema for replacement JSX (original: l)
 */
export const ReplacementJsxSchema = z.object({
  guid: z.string().optional(),
  jsx: z.string().optional(),
})

/**
 * Zod schema for context (original: d)
 */
export const ContextSchema = z.object({
  variables: z.array(VariableSchema).optional(),
  prop: FillStrokeEnum,
})

/**
 * Zod schema for color/corner rule (original: $$c2)
 */
export const ColorCornerRuleSchema = z.object({
  targetNodeGuid: z.string().optional(),
  inputJsx: z.string().optional(),
  ruleType: z.nativeEnum(MissingRuleType),
  context: ContextSchema.optional(),
})

/**
 * Zod schema for property updates and replacement JSX (original: $$u1)
 */
export const PropertyUpdatesSchema = z.object({
  propertyUpdates: z.array(PropertyUpdateSchema).optional(),
  replacementJsx: ReplacementJsxSchema.optional(),
})

// Exported variables with refactored names
export const D2 = MissingRuleType
export const Ld = PropertyUpdatesSchema
export const nT = ColorCornerRuleSchema

import { z } from "zod";

/**
 * Schema for fill paint style definitions
 * Represents styling information for fill properties
 */
const FillStyleSchema = z.object({
  type: z.literal("FILL"),
  fillPaints: z.object({}).array()
});

/**
 * Schema for effect style definitions
 * Represents styling information for visual effects
 */
const EffectStyleSchema = z.object({
  type: z.literal("EFFECT"),
  effects: z.object({}).array()
});

/**
 * Schema for grid style definitions
 * Represents styling information for layout grids
 */
const GridStyleSchema = z.object({
  type: z.literal("GRID"),
  layoutGrids: z.object({}).array().optional()
});

/**
 * Schema for text style definitions
 * Represents styling information for text properties including font metrics
 */
const TextStyleSchema = z.object({
  type: z.literal("TEXT"),
  metrics: z.object({
    fontSize: z.number().optional(),
    lineHeight: z.object({
      value: z.number(),
      units: z.union([
        z.literal("RAW"),
        z.literal("PIXELS"),
        z.literal("PERCENT")
      ])
    }).optional()
  })
});

/**
 * Schema for invalid style definitions
 * Represents a fallback for unrecognized or malformed styles
 */
const InvalidStyleSchema = z.object({
  type: z.literal("INVALID")
});

/**
 * Union schema for all possible style types
 * Validates against any of the defined style schemas
 */
export const StyleDefinitionSchema = z.union([
  FillStyleSchema,
  EffectStyleSchema,
  GridStyleSchema,
  TextStyleSchema,
  InvalidStyleSchema
]);

// Type definition derived from the schema
export type StyleDefinition = z.infer<typeof StyleDefinitionSchema>;

// Export with original name for backward compatibility (originally N)
export const N = StyleDefinitionSchema;

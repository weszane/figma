import { z } from "zod";

// Original: $$r2
export const livestorePrimaryKey = "__LIVESTORE_PK__";

// Original: $$a0
export const livestoreNormalized = "__LIVESTORE_NORM__";

/**
 * Creates a Zod schema for a primary key string.
 * Original: $$s3
 * @returns {z.ZodString} A Zod string schema with description.
 */
export const createPrimaryKeySchema = () => z.string().describe(livestorePrimaryKey);

/**
 * Describes a normalized value with a prefix.
 * Original: $$o1
 * @param {string} entity - The entity name.
 * @param {z.ZodTypeAny} type - The Zod type to describe.
 * @returns {z.ZodTypeAny} The described Zod type.
 */
export function describeNormalized(entity: string, type: z.ZodTypeAny): z.ZodTypeAny {
  return type.describe(`${livestoreNormalized}:${entity}`);
}

// Original exports maintained
export const HQ = livestoreNormalized;
export const S8 = describeNormalized;
export const YB = livestorePrimaryKey;
export const ie = createPrimaryKeySchema;

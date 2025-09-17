import snakeCase from 'lodash-es/snakeCase'
import { z, ZodFirstPartyTypeKind } from 'zod'
import { getFalseValue } from '../figma_app/897289'

/**
 * Extracts possible discriminator values from a Zod schema.
 * @param schema - The Zod schema to extract values from.
 * @returns An array of possible values or null.
 * (Original: o)
 */
export function extractDiscriminatorValues(schema: z.ZodTypeAny): any[] | null {
  if (schema instanceof z.ZodLazy)
    return extractDiscriminatorValues(schema.schema)
  if (schema instanceof z.ZodEffects)
    return extractDiscriminatorValues(schema.innerType())
  if (schema instanceof z.ZodLiteral)
    return [schema.value]
  if (schema instanceof z.ZodEnum)
    return schema.options
  if (schema instanceof z.ZodNativeEnum)
    return Object.keys(schema.enum)
  if (schema instanceof z.ZodDefault)
    return extractDiscriminatorValues(schema._def.innerType)
  if (schema instanceof z.ZodUndefined)
    return [void 0]
  if (schema instanceof z.ZodNull)
    return [null]
  return null
}

/** Set of Zod type kinds that are considered nullable or optional. (Original: l) */
export const nullableOptionalKinds = new Set([
  ZodFirstPartyTypeKind.ZodNullable,
  ZodFirstPartyTypeKind.ZodOptional,
])

/**
 * Preprocesses a value to convert undefined to null and parses date strings.
 * Throws if an empty string is passed for a Sinatra date.
 * @param schema - The Zod schema to preprocess.
 * @returns A Zod schema with preprocessing.
 * (Original: d)
 */
export function preprocessDate(schema: z.ZodTypeAny): z.ZodTypeAny {
  return z.preprocess((value) => {
    if (value === undefined)
      return null
    if (value && typeof value === 'string') {
      if (value === '' && getFalseValue())
        throw new Error('You are passing an empty string for a sinatra date. Don\'t do that.')
      return new Date(value)
    }
    return value
  }, schema)
}

/**
 * Converts a Zod object schema to handle snake_case keys and date preprocessing.
 * @param schema - The Zod object schema.
 * @param targetSchema - Optional target schema for merging.
 * @returns A Zod schema with preprocessing for snake_case and dates.
 * (Original: $$c0)
 */
export function convertSinatraModel(
  schema: z.ZodObject<any>,
  targetSchema?: z.ZodObject<any>,
): z.ZodTypeAny {
  if (targetSchema) {
    // Merge with target schema, handle snake_case and dates
    const shape = schema.shape
    const mergedShape: Record<string, z.ZodTypeAny> = {}
    Object.keys(shape).forEach((key) => {
      const snakeKey = snakeCase(key)
      let typeName = shape[key]._def.typeName
      typeName = nullableOptionalKinds.has(typeName)
        ? shape[key]._def.innerType._def.typeName
        : typeName
      if (snakeKey !== key && (!targetSchema || targetSchema.shape[snakeKey])) {
        if (typeName === ZodFirstPartyTypeKind.ZodDate) {
          mergedShape[key] = preprocessDate(shape[key])
        }
        else {
          mergedShape[key] = z.preprocess(val => val === undefined ? null : val, shape[key])
        }
      }
    })
    const merged = targetSchema.merge(z.object(mergedShape).passthrough())
    return z.preprocess((input: ObjectOf) => {
      const result = { ...input }
      Object.keys(shape).forEach((key) => {
        const snakeKey = snakeCase(key)
        if (snakeKey !== key)
          result[key] = input[snakeKey]
      })
      return result
    }, merged.passthrough())
  }
  else {
    // Only handle snake_case and dates for the original schema
    const shape = schema.shape
    const processedShape: Record<string, z.ZodTypeAny> = {}
    Object.keys(shape).forEach((key) => {
      const snakeKey = snakeCase(key)
      let typeName = shape[key]._def.typeName
      typeName = nullableOptionalKinds.has(typeName)
        ? shape[key]._def.innerType._def.typeName
        : typeName
      if (snakeKey === key || typeName === ZodFirstPartyTypeKind.ZodDate) {
        processedShape[key] = preprocessDate(shape[key])
      }
    })
    const baseObject = z.object(schema.shape)
    return z.preprocess((input: ObjectOf) => {
      const result = { ...input }
      Object.keys(shape).forEach((key) => {
        const snakeKey = snakeCase(key)
        if (snakeKey !== key)
          result[key] = input[snakeKey]
      })
      return result
    }, baseObject)
  }
}

/**
 * Adds discriminated union support to convertSinatraModel.
 * @param discriminatorKey - The key to discriminate on.
 * @param schemas - Array of Zod schemas.
 * @param options - Optional options for the union.
 * @returns A Zod schema for the discriminated union.
 * (Original: $$c0.discriminatedUnion)
 */
export function convertSinatraModelDiscriminatedUnion(
  discriminatorKey: string,
  schemas: z.ZodEffects<any, any, any>[],
  options?: any,
): z.ZodTypeAny {
  return z.preprocess((obj: ObjectOf) => ({
    ...obj,
    [discriminatorKey]: obj[snakeCase(discriminatorKey)],
  }), createDiscriminatedUnion(discriminatorKey, schemas, options))
}

/**
 * Custom Zod type for discriminated unions.
 * (Original: class u)
 */
export class DiscriminatedUnionType extends z.ZodType<any, any, any> {
  _parse(input: z.ParseInput): z.ParseReturnType<any> {
    const { ctx } = this._processInputParams(input)
    if (ctx.parsedType !== z.ZodParsedType.object) {
      z.addIssueToContext(ctx, {
        code: z.ZodIssueCode.invalid_type,
        expected: z.ZodParsedType.object,
        received: ctx.parsedType,
      })
      return z.INVALID
    }
    const discriminator = this.discriminator
    const value = ctx.data[discriminator]
    const optionSchema = this.optionsMap.get(value)
    if (optionSchema) {
      return ctx.common.async
        ? optionSchema._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx,
          })
        : optionSchema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx,
          })
    }
    else {
      z.addIssueToContext(ctx, {
        code: z.ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator],
      })
      return z.INVALID
    }
  }

  /** The discriminator key. */
  get discriminator() {
    return this._def.discriminator
  }

  /** The union options. */
  get options() {
    return this._def.options
  }

  /** Map of discriminator values to schemas. */
  get optionsMap() {
    return this._def.optionsMap
  }

  /**
   * Creates a discriminated union Zod type.
   * @param discriminatorKey - The key to discriminate on.
   * @param schemas - Array of Zod schemas.
   * @param options - Optional options for the union.
   * @returns A DiscriminatedUnionType instance.
   * (Original: u.create)
   */
  static create(
    discriminatorKey: string,
    schemas: z.ZodEffects<any, any, any>[],
    options?: any,
  ): DiscriminatedUnionType {
    const optionsMap = new Map<any, any>()
    for (const schema of schemas) {
      const shape = 'shape' in schema ? schema.shape : schema.innerType().shape
      const values = extractDiscriminatorValues(shape[discriminatorKey])
      if (!values)
        throw new Error(`A discriminator value for key \`${discriminatorKey}\` could not be extracted from all schema options`)
      for (const value of values) {
        if (optionsMap.has(value))
          throw new Error(`Discriminator property ${String(discriminatorKey)} has duplicate value ${String(value)}`)
        optionsMap.set(value, schema)
      }
    }
    return new DiscriminatedUnionType({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator: discriminatorKey,
      options: schemas,
      optionsMap,
      ...getDiscriminatedUnionDef(options),
    })
  }
}

/**
 * Helper to build the discriminated union definition.
 * (Original: anonymous function inside u.create)
 */
function getDiscriminatedUnionDef(options?: any): Record<string, any> {
  if (!options)
    return {}
  const {
    errorMap,
    invalid_type_error,
    required_error,
    description,
  } = options
  if (errorMap && (invalid_type_error || required_error))
    throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.')
  if (errorMap) {
    return { errorMap, description }
  }
  return {
    errorMap: (issue: any, ctx: any) =>
      issue.code !== 'invalid_type'
        ? { message: ctx.defaultError }
        : ctx.data === undefined
          ? { message: required_error ?? ctx.defaultError }
          : { message: invalid_type_error ?? ctx.defaultError },
    description,
  }
}

/** Alias for DiscriminatedUnionType.create (Original: p) */
export const createDiscriminatedUnion = DiscriminatedUnionType.create

convertSinatraModel.discriminatedUnion = convertSinatraModelDiscriminatedUnion
// Export main API with refactored names
export const D = convertSinatraModel

// Attach discriminatedUnion to D for compatibility

// Symbol for convertedSinatraModel (Original: Symbol('convertedSinatraModel'))
export const convertedSinatraModelSymbol = Symbol('convertedSinatraModel')

import { z, ZodFirstPartyTypeKind } from 'zod'
import { livestoreNormalized, livestorePrimaryKey } from '../905/67898'
import { SchemaLibrary } from '../905/893701'
import { assert } from '../figma_app/465776'

// Original function: $$o0
// Extracts normalized object information from a Zod schema if it matches criteria.
export function extractNormalizedObjectInfo(schema: any): { uniqueName: string, primaryKey: string } | undefined {
  if (!('typeName' in schema._def)) {
    console.error('no typeName?', schema)
    return
  }
  if (schema instanceof z.ZodOptional || schema instanceof z.ZodNullable) {
    return extractNormalizedObjectInfo(schema.unwrap())
  }
  if (schema._def.typeName !== ZodFirstPartyTypeKind.ZodObject || !schema.description?.includes(livestoreNormalized)) {
    return
  }
  const uniqueName = schema.description.split(':')[1]
  let primaryKey: string | null = null
  const shape = schema.shape
  for (const key in shape) {
    if (shape[key].description?.includes(livestorePrimaryKey)) {
      assert(!primaryKey, `normalizedObject ${schema.description} entry has more than one primaryKey`)
      primaryKey = key
    }
  }
  assert(!!primaryKey, `normalizedObject ${schema.description} entry has no primaryKey`)
  return {
    uniqueName,
    primaryKey,
  }
}

// Original function: $$l1
// Builds a schema object from a Zod schema, including normalizr schema and normalization flag.
/**
 * @param schemaOrFn - Zod schema or function returning one.
 * @param entityMap - Map of entity definitions.
 * @returns Object with zodSchema, normalizrSchema, and requiresNormalization flag.
 */
export function buildSchema(schemaOrFn: any, entityMap: Map<string, any>) {
  const zodSchema = typeof schemaOrFn === 'function' ? schemaOrFn(z) : schemaOrFn
  const normalizrSchema = buildNormalizrSchema(zodSchema, entityMap)
  return {
    zodSchema,
    normalizrSchema,
    requiresNormalization: normalizrSchema?.__HAS_ENTITY__ || false,
  }
}

// Helper function to build normalizr schema recursively.
/**
 * @param schema - Zod schema.
 * @param entityMap - Map of entity definitions.
 * @returns Normalizr schema or null.
 */
function buildNormalizrSchema(schema: any, entityMap: Map<string, any>): any {
  const def = schema._def
  if (!('typeName' in def)) {
    console.error('no typeName?', schema)
    return null
  }
  const normalizedInfo = extractNormalizedObjectInfo(schema)
  if (normalizedInfo) {
    const { uniqueName, primaryKey } = normalizedInfo
    const entityDef = entityMap.get(uniqueName)
    assert(!!entityDef, `No objectDef found for ${uniqueName}`)
    return Object.assign(new SchemaLibrary.Entity(uniqueName, {}, {
      idAttribute: primaryKey,
      processStrategy: (e: any) => e,
    }), {
      __HAS_ENTITY__: true,
    })
  }
  if (def.typeName === ZodFirstPartyTypeKind.ZodObject) {
    const shape = def.shape()
    const properties: Record<string, any> = {}
    let hasEntity = false
    for (const key in shape) {
      const propSchema = buildNormalizrSchema(shape[key], entityMap)
      if (propSchema) {
        properties[key] = propSchema
        if (propSchema.__HAS_ENTITY__) {
          hasEntity = true
        }
      }
    }
    return Object.assign(new SchemaLibrary.Object(properties), {
      __HAS_ENTITY__: hasEntity,
    })
  }
  if (def.typeName === ZodFirstPartyTypeKind.ZodArray) {
    const itemSchema = buildNormalizrSchema(def.type, entityMap)
    if (itemSchema) {
      return Object.assign(new SchemaLibrary.Array(itemSchema), {
        __HAS_ENTITY__: itemSchema.__HAS_ENTITY__,
      })
    }
    return null
  }
  if (def.typeName === ZodFirstPartyTypeKind.ZodNullable || def.typeName === ZodFirstPartyTypeKind.ZodOptional) {
    return buildNormalizrSchema(def.innerType, entityMap)
  }
  return null
}

export const AT = extractNormalizedObjectInfo
export const q6 = buildSchema

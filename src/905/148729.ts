import { logCmsError } from '../905/937198';
import { isNotNullish } from '../figma_app/95419';
/**
 * Represents a field schema with required properties.
 */
export interface FieldSchema {
  id: string;
  stableId: string;
  name: string;
  fieldType: string;
  position: number;
  required: boolean;
  properties: Record<string, any>;
  version: number;
  databaseId: string;
}

/**
 * Represents a collection schema with its fields.
 */
export interface CollectionSchema {
  id: string;
  databaseId: string;
  stableId: string;
  fieldSchemas: FieldSchema[];
  name: string;
  description?: string;
}

/**
 * Represents a collection summary without field schemas.
 */
export interface CollectionSummary {
  id: string;
  databaseId: string;
  stableId: string;
  name: string;
  description?: string;
}

/**
 * Converts a raw field schema object to a FieldSchema.
 * @param rawFieldSchema - The raw field schema object.
 * @returns FieldSchema or null if invalid.
 */
// Original function: a
export function toFieldSchema(rawFieldSchema: any): FieldSchema | null {
  if (rawFieldSchema == null) return null;
  if (rawFieldSchema.stableId == null) {
    logCmsError('Field schema stable id is null', {
      lgFieldSchema: rawFieldSchema
    });
    return null;
  }
  return {
    id: rawFieldSchema.stableId,
    databaseId: rawFieldSchema.id,
    stableId: rawFieldSchema.stableId,
    name: rawFieldSchema.name,
    fieldType: rawFieldSchema.fieldType,
    position: rawFieldSchema.position,
    required: rawFieldSchema.required,
    properties: rawFieldSchema.properties,
    version: rawFieldSchema.version
  };
}

/**
 * Converts a raw collection object to a CollectionSchema.
 * @param rawCollection - The raw collection object.
 * @returns CollectionSchema or null if invalid.
 */
// Original function: $$s1
export function toCollectionSchema(rawCollection: any): CollectionSchema | null {
  if (rawCollection == null) return null;
  if (rawCollection.stableId == null) {
    logCmsError('Collection stable id is null', {
      lgCollection: rawCollection
    });
    return null;
  }
  if (rawCollection.fieldSchemas == null) {
    logCmsError('Collection field schemas is null', {
      lgCollection: rawCollection
    });
    return null;
  }
  return {
    id: rawCollection.stableId,
    databaseId: rawCollection.id,
    stableId: rawCollection.stableId,
    fieldSchemas: rawCollection.fieldSchemas.map(toFieldSchema).filter(isNotNullish),
    name: rawCollection.name,
    description: rawCollection.description
  };
}

/**
 * Converts a raw collection object to a CollectionSummary.
 * @param rawCollection - The raw collection object.
 * @returns CollectionSummary or null if invalid.
 */
// Original function: $$o0
export function toCollectionSummary(rawCollection: any): CollectionSummary | null {
  if (rawCollection == null) return null;
  if (rawCollection.stableId == null) {
    logCmsError('Collection stable id is null', {
      lgCollection: rawCollection
    });
    return null;
  }
  return {
    id: rawCollection.stableId,
    databaseId: rawCollection.id,
    stableId: rawCollection.stableId,
    name: rawCollection.name,
    description: rawCollection.description
  };
}

// Export aliases for backward compatibility
export const b = toCollectionSummary;
export const D = toCollectionSchema;
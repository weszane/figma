import { z } from 'zod'
import { convertSinatraModel } from '../905/412108'
import { XHR } from '../905/910117'
import { createMetaValidator } from '../figma_app/181241'

/**
 * CollectionSchema - Zod schema for collection validation.
 */
export const CollectionSchema = z.object({
  id: z.string().uuid(),
  stableId: z.string().uuid(),
  createdAt: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  updatedAt: z.string(),
  orgId: z.string().nullable(),
  teamId: z.string().nullable(),
})

/**
 * FieldSchema - Zod schema for field validation.
 */
export const FieldSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string(),
  updatedAt: z.string(),
  name: z.string(),
  required: z.boolean().nullable(),
  version: z.number(),
  collectionId: z.string().uuid(),
  properties: z.object({
    characterLimit: z.string().optional(),
    placeholder: z.string().optional(),
  }),
  position: z.string(),
  fieldType: z.string(),
})

/**
 * CollectionService - Handles collection and field schema operations.
 */
export class CollectionService {
  public CollectionResponseSchemaValidator = createMetaValidator(
    'CollectionSchemaValidator',
    convertSinatraModel(CollectionSchema),
    null,
  )

  public FieldSchemaResponseValidator = createMetaValidator(
    'FieldSchemaResponseValidator',
    convertSinatraModel(FieldSchema),
    null,
  )

  /**
   * Creates a new collection.
   * @param params - Collection creation parameters.
   */
  createCollection(params: {
    id: string
    name: string
    description?: string | null
    fields?: any[]
    fileKey: string
  }) {
    // createCollection
    const { id, name, description, fields, fileKey } = params
    return this.CollectionResponseSchemaValidator.validate(async ({ xr }) =>
      await xr.post(`/api/file/${fileKey}/collections`, {
        collection_id: id,
        name,
        description: description ?? '',
        fields: fields ?? [],
      }),
    )
  }

  /**
   * Renames an existing collection.
   * @param params - Rename parameters.
   */
  renameCollection(params: {
    collection: { databaseId: string }
    name: string
  }) {
    // renameCollection
    const { collection, name } = params
    return this.CollectionResponseSchemaValidator.validate(async ({ xr }) =>
      await xr.put(`/api/collections/${collection.databaseId}`, {
        name,
      }),
    )
  }

  /**
   * Deletes a collection.
   * @param params - Delete parameters.
   */
  async deleteCollection(params: { collection: { databaseId: string } }) {
    // deleteCollection
    const { collection } = params
    await XHR.del(`/api/collections/${collection.databaseId}`)
  }

  /**
   * Creates a new field schema.
   * @param params - Field schema creation parameters.
   */
  createFieldSchema(params: {
    collection: { databaseId: string }
    attributes: {
      name: string
      fieldType: string
      position: string
      required?: boolean | null
      properties?: Record<string, any>
    }
  }) {
    // createFieldSchema
    const { collection, attributes } = params
    return this.FieldSchemaResponseValidator.validate(async ({ xr }) =>
      await xr.post(`/api/collections/${collection.databaseId}/field_schemas`, {
        name: attributes.name,
        field_type: attributes.fieldType,
        position: attributes.position,
        required: attributes.required,
        properties: attributes.properties ?? {},
      }),
    )
  }

  /**
   * Updates an existing field schema.
   * @param params - Update parameters.
   */
  updateFieldSchema(params: {
    collection: { databaseId: string }
    fieldSchema: { databaseId: string }
    newAttributes: {
      name: string
      fieldType: string
      position: string
      required?: boolean | null
      properties?: Record<string, any>
    }
  }) {
    // updateFieldSchema
    const { collection, fieldSchema, newAttributes } = params
    return this.FieldSchemaResponseValidator.validate(async ({ xr }) =>
      await xr.put(
        `/api/collections/${collection.databaseId}/field_schemas/${fieldSchema.databaseId}`,
        {
          name: newAttributes.name,
          field_type: newAttributes.fieldType,
          position: newAttributes.position,
          required: newAttributes.required,
          properties: newAttributes.properties,
        },
      ),
    )
  }

  /**
   * Deletes a field schema.
   * @param params - Delete parameters.
   */
  async deleteFieldSchema(params: {
    collection: { databaseId: string }
    fieldSchema: { databaseId: string }
  }) {
    // deleteFieldSchema
    const { collection, fieldSchema } = params
    await XHR.del(
      `/api/collections/${collection.databaseId}/field_schemas/${fieldSchema.databaseId}`,
    )
  }
}

/**
 * Exported instance for collection operations.
 */
export const collectionService = new CollectionService()
export const A2 = collectionService

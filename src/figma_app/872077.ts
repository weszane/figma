import { z } from "../905/239603";
import { createMetaValidator } from "../figma_app/181241";
import { XHR } from "../905/910117";
import { D } from "../905/412108";
let o = z.object({
  id: z.string().uuid(),
  stableId: z.string().uuid(),
  createdAt: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  updatedAt: z.string(),
  orgId: z.string().nullable(),
  teamId: z.string().nullable()
});
let l = z.object({
  id: z.string().uuid(),
  createdAt: z.string(),
  updatedAt: z.string(),
  name: z.string(),
  required: z.boolean().nullable(),
  version: z.number(),
  collectionId: z.string().uuid(),
  properties: z.object({
    characterLimit: z.string().optional(),
    placeholder: z.string().optional()
  }),
  position: z.string(),
  fieldType: z.string()
});
let $$d0 = new class {
  constructor() {
    this.CollectionResponseSchemaValidator = createMetaValidator("CollectionSchemaValidator", D(o), null);
    this.FieldSchemaResponseValidator = createMetaValidator("FieldSchemaResponseValidator", D(l), null);
  }
  createCollection({
    id: e,
    name: t,
    description: r,
    fields: n,
    fileKey: i
  }) {
    return this.CollectionResponseSchemaValidator.validate(async ({
      xr: a
    }) => await a.post(`/api/file/${i}/collections`, {
      collection_id: e,
      name: t,
      description: r ?? "",
      fields: n ?? []
    }));
  }
  renameCollection({
    collection: e,
    name: t
  }) {
    return this.CollectionResponseSchemaValidator.validate(async ({
      xr: r
    }) => await r.put(`/api/collections/${e.databaseId}`, {
      name: t
    }));
  }
  async deleteCollection({
    collection: e
  }) {
    await XHR.del(`/api/collections/${e.databaseId}`);
  }
  createFieldSchema({
    collection: e,
    attributes: t
  }) {
    return this.FieldSchemaResponseValidator.validate(async ({
      xr: r
    }) => await r.post(`/api/collections/${e.databaseId}/field_schemas`, {
      name: t.name,
      field_type: t.fieldType,
      position: t.position,
      required: t.required,
      properties: t.properties ?? {}
    }));
  }
  updateFieldSchema({
    collection: e,
    fieldSchema: t,
    newAttributes: r
  }) {
    return this.FieldSchemaResponseValidator.validate(async ({
      xr: n
    }) => await n.put(`/api/collections/${e.databaseId}/field_schemas/${t.databaseId}`, {
      name: r.name,
      field_type: r.fieldType,
      position: r.position,
      required: r.required,
      properties: r.properties
    }));
  }
  async deleteFieldSchema({
    collection: e,
    fieldSchema: t
  }) {
    await XHR.del(`/api/collections/${e.databaseId}/field_schemas/${t.databaseId}`);
  }
}();
export const A2 = $$d0;
import { z } from "../905/239603";
import { YV } from "../figma_app/181241";
import { D } from "../905/412108";
let s = z.object({
  id: z.string().uuid(),
  collectionId: z.string().uuid(),
  position: z.string(),
  status: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  lastPublishedAt: z.string().nullable(),
  statusUpdatedAt: z.string().nullable()
});
let o = z.object({
  id: z.string().uuid(),
  itemId: z.string().uuid(),
  fieldSchemaId: z.string().uuid(),
  value: z.string(),
  version: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  assetsForPublish: z.array(z.object({
    type: z.string(),
    hash: z.string(),
    height: z.number(),
    width: z.number()
  })).optional()
});
let l = z.object({
  valid: z.boolean(),
  failure_info: z.object({
    errors: z.array(z.string()),
    i18n_keys: z.array(z.string())
  }).optional()
});
let d = z.object({
  success: z.boolean(),
  error: z.string().nullable(),
  errorType: z.string().nullable()
});
let $$c0 = new class {
  constructor() {
    this.CollectionItemResponseSchemaValidator = YV("CollectionItemResponseSchemaValidator", D(s), null);
    this.BulkImportResponseSchemaValidator = YV("BulkImportResponseSchemaValidator", D(z.object({
      count: z.number()
    })), null);
    this.CollectionFieldResponseSchemaValidator = YV("CollectionFieldResponseSchemaValidator", D(o), null);
    this.ItemValidateResponseSchemaValidator = YV("ItemValidateResponseSchemaValidator", l, null);
    this.CsvValidationResponseValidator = YV("CsvValidationResponseValidator", D(d), null);
  }
  createItem({
    collection: e,
    itemId: t
  }) {
    return this.CollectionItemResponseSchemaValidator.validate(async ({
      xr: r
    }) => await r.post(`/api/collections/${e.databaseId}/items`, {
      item_id: t
    }));
  }
  importItems({
    collection: e,
    items: t
  }) {
    return this.BulkImportResponseSchemaValidator.validate(async ({
      xr: r
    }) => await r.post(`/api/collections/${e.databaseId}/items/import`, {
      items: t
    }));
  }
  updateItem({
    collection: e,
    item: t,
    updatedItemAttributes: r
  }) {
    return this.CollectionItemResponseSchemaValidator.validate(async ({
      xr: n
    }) => await n.put(`/api/collections/${e.databaseId}/items/${t.databaseId}`, {
      index: r.position,
      status: r.status
    }));
  }
  updateSingleItemData({
    fieldId: e,
    fieldSchema: t,
    item: r,
    newValue: n,
    assetsForPublish: i
  }) {
    return this.CollectionFieldResponseSchemaValidator.validate(async ({
      xr: a
    }) => {
      let s = {
        value: n,
        uuid: e
      };
      void 0 !== i && (s.assets_for_publish = i);
      return await a.put(`/api/items/${r.databaseId}/fields/${t.databaseId}`, s);
    });
  }
  deleteItem({
    collection: e,
    item: t
  }) {
    return this.CollectionItemResponseSchemaValidator.validate(async ({
      xr: r
    }) => await r.del(`/api/collections/${e.databaseId}/items/${t.databaseId}`));
  }
  validateItemData({
    fieldSchema: e,
    item: t,
    newValue: r
  }) {
    return this.ItemValidateResponseSchemaValidator.validate(async ({
      xr: n
    }) => await n.put(`/api/items/${t.databaseId}/fields/${e.databaseId}/validate`, {
      value: r
    }));
  }
  validateCsv({
    fileKey: e,
    itemsData: t
  }) {
    return this.CsvValidationResponseValidator.validate(async ({
      xr: r
    }) => await r.post("/api/collections/validate_cms_csv", {
      file_key: e,
      items_data: t
    }));
  }
}();
export const hl = $$c0; 

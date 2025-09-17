import { isNotNullish } from "../figma_app/95419";
import { logCmsError } from "../905/937198";
function a(e) {
  return null == e ? null : null == e.fieldSchema.stableId ? (logCmsError("Field schema stable id is null", {
    lgField: e
  }), null) : {
    id: e.id,
    value: e.value,
    itemId: e.itemId,
    fieldSchemaId: e.fieldSchema.stableId,
    fieldSchemaDatabaseId: e.fieldSchema.id,
    fieldSchemaStableId: e.fieldSchema.stableId,
    assetsForPublish: e.assetsForPublish?.status === "loaded" && e.assetsForPublish.data || void 0
  };
}
export function $$s0(e) {
  return null == e ? null : null == e.stableId ? (logCmsError("Item stable id is null", {
    lgItem: e
  }), null) : null == e.allFields ? (logCmsError("Item allFields is null", {
    lgItem: e
  }), null) : {
    databaseId: e.id,
    id: e.stableId,
    stableId: e.stableId,
    fields: e.allFields.map(a).filter(isNotNullish),
    position: e.position,
    status: e.status
  };
}
export const J = $$s0;
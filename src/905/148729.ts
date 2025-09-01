import { isNotNullish } from "../figma_app/95419";
import { sD } from "../905/937198";
function a(e) {
  if (null == e) return null;
  if (null == e.stableId) {
    sD("Field schema stable id is null", {
      lgFieldSchema: e
    });
    return null;
  }
  let t = e.id;
  let i = e.stableId;
  return {
    id: i,
    databaseId: t,
    stableId: i,
    name: e.name,
    fieldType: e.fieldType,
    position: e.position,
    required: e.required,
    properties: e.properties,
    version: e.version
  };
}
export function $$s1(e) {
  return null == e ? null : null == e.stableId ? (sD("Collection stable id is null", {
    lgCollection: e
  }), null) : null == e.fieldSchemas ? (sD("Collection field schemas is null", {
    lgCollection: e
  }), null) : {
    id: e.stableId,
    databaseId: e.id,
    stableId: e.stableId,
    fieldSchemas: e.fieldSchemas.map(a).filter(isNotNullish),
    name: e.name,
    description: e.description
  };
}
export function $$o0(e) {
  return null == e ? null : null == e.stableId ? (sD("Collection stable id is null", {
    lgCollection: e
  }), null) : {
    id: e.stableId,
    databaseId: e.id,
    stableId: e.stableId,
    name: e.name,
    description: e.description
  };
}
export const b = $$o0;
export const D = $$s1;
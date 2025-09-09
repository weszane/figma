import { generateUUIDv4 } from "../905/871474";
import { Qw } from "../figma_app/618433";
import { Tj, _Z } from "../figma_app/649254";
import { X } from "../905/145028";
import { J } from "../905/539754";
import { sD } from "../905/937198";
import { tS } from "../figma_app/516028";
export async function $$c0() {
  let e = await navigator.clipboard.readText();
  let t = null;
  try {
    t = JSON.parse(e);
  } catch (e) {
    return null;
  }
  if (!t || !t.fileKey || !t.name || !t.fieldSchemas || !t.items) return null;
  for (let e of t.fieldSchemas) if (!e.name || !e.fieldType || !e.position) return null;
  for (let e of t.items) for (let t of e.fields) if (!t.fieldSchemaId) return null;
  return t;
}
export function $$u1() {
  let e = tS();
  return async t => {
    if (!e) return null;
    let i = await X({
      collectionStableId: t
    });
    if (null == i) {
      sD("items is collection", {
        collectionId: t
      });
      return null;
    }
    let r = i.name;
    let n = i.description;
    let a = i.fieldSchemas.map(e => ({
      name: e.name,
      fieldType: e.fieldType,
      position: e.position,
      required: e.required,
      fieldSchemaId: e.id
    }));
    let d = await J({
      collectionStableId: t
    });
    return null == d ? (sD("items is null", {
      collectionId: t
    }), null) : JSON.stringify({
      name: r,
      description: n,
      fileKey: e,
      fieldSchemas: a,
      items: d.map(e => {
        let t = [];
        for (let i of e.fields ?? []) t.push({
          fieldSchemaId: i.fieldSchemaId,
          value: i.value
        });
        return {
          position: e.position,
          fields: t
        };
      })
    });
  };
}
export function $$p2() {
  let e = tS();
  return async t => {
    if (!e) return;
    let i = t.fieldSchemas.map(e => ({
      id: generateUUIDv4(),
      name: e.name,
      fieldType: e.fieldType,
      required: !!e.required,
      position: e.position,
      properties: {},
      action: "create",
      version: "1"
    }));
    let o = await Qw({
      id: null,
      name: t.name,
      description: t.description,
      fileKey: e,
      fields: i
    });
    if (null == o) return;
    let d = o.id;
    let c = await X({
      collectionStableId: d
    });
    if (null == c) {
      sD("newCollection is null", {
        newCollectionId: d
      });
      return;
    }
    let u = c.fieldSchemas;
    let p = {};
    for (let e of u) {
      let i = t.fieldSchemas.find(t => t.name === e.name)?.fieldSchemaId;
      i && (p[i] = e.id);
    }
    for (let e of t.items) Tj(c, void 0, t => {
      for (let i of e.fields) {
        let {
          value
        } = i;
        if (null == value) {
          sD("Field value is null during import", {
            fieldSchemaId: i.fieldSchemaId
          });
          continue;
        }
        let r = p[i.fieldSchemaId];
        if (null == r) {
          sD("Field schema ID mapping not found during import", {
            fieldSchemaId: i.fieldSchemaId
          });
          continue;
        }
        let n = c.fieldSchemas.find(e => e.id === r);
        if (null == n) {
          sD("Field schema not found during import", {
            newFieldSchemaId: r
          });
          continue;
        }
        let s = {
          databaseId: t
        };
        _Z({
          fieldId: null,
          fieldSchema: n,
          item: s,
          value
        });
      }
    }, e.position);
  };
}
export const WS = $$c0;
export const ZX = $$u1;
export const ut = $$p2;
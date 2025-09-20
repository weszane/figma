import { useMemo } from "react";
import { WB } from "../905/761735";
import { compareNumbers, nextAsciiString, separatorChar } from "../figma_app/766708";
import { generateUUIDv4 } from "../905/871474";
import { J } from "../905/539754";
import { H } from "../905/748658";
import { w } from "../figma_app/987465";
import { hl } from "../figma_app/553024";
export function $$u0(e) {
  return e.sort((e, t) => compareNumbers(t.position || "", e.position || ""));
}
export function $$p8({
  collectionId: e,
  itemId: t
}) {
  let {
    item,
    status
  } = H({
    collectionStableId: e,
    itemStableId: t
  });
  return useMemo(() => ({
    status,
    data: item
  }), [item, status]);
}
export function $$_3(e) {
  return e.reduce((e, t) => ({
    ...e,
    [t.fieldSchemaId]: t
  }), {});
}
export function $$h1(e) {
  return e.reduce((e, t) => ({
    ...e,
    [t.fieldSchemaId]: t.value
  }), {});
}
export function $$m5(e) {
  let {
    items,
    status
  } = w({
    collectionStableId: e
  });
  return useMemo(() => ({
    status,
    data: items ?? []
  }), [items, status]);
}
export function $$g9(e) {
  let t = $$u0($$m5(e).data);
  let r = t && t[t.length - 1];
  return r?.position ? nextAsciiString(r.position) : separatorChar;
}
export async function $$f10(e) {
  return await J({
    collectionStableId: e
  });
}
export function $$E4(e, t, r, n) {
  t ??= generateUUIDv4();
  WB().optimisticallyCreate({
    CollectionItemV2: {
      [t]: {
        stableId: t,
        collectionId: e.databaseId,
        position: n,
        status: "draft",
        createdAt: new Date(),
        updatedAt: new Date(),
        lastPublishedAt: null,
        statusUpdatedAt: null,
        fields: []
      }
    }
  }, hl.createItem({
    collection: e,
    itemId: t
  })).then(e => (r(e.data.meta.id), e.data.meta));
  return t;
}
export function $$y6({
  collection: e,
  item: t,
  updatedItemAttributes: r
}) {
  WB().optimisticallyUpdate({
    CollectionItemV2: {
      [t.databaseId]: {
        collectionId: e.databaseId,
        position: r.position,
        status: r.status
      }
    }
  }, hl.updateItem({
    collection: e,
    item: t,
    updatedItemAttributes: r
  }));
}
export async function $$b7({
  fieldId: e,
  fieldSchema: t,
  item: r,
  value: n,
  assetsForPublish: a
}) {
  var o;
  return e ? await WB().optimisticallyUpdate({
    CollectionItemField: {
      [e]: {
        value: n
      }
    }
  }, hl.updateSingleItemData({
    fieldId: e,
    item: r,
    fieldSchema: t,
    newValue: n,
    assetsForPublish: a
  })).then(e => e.data.meta) : (e = generateUUIDv4(), await WB().optimisticallyCreate({
    CollectionItemField: {
      [e]: (o = r.databaseId, {
        itemId: o,
        fieldSchemaId: t.databaseId,
        value: n,
        version: "0",
        createdAt: new Date(),
        updatedAt: new Date(),
        assetsForPublish: null
      })
    }
  }, hl.updateSingleItemData({
    fieldId: e,
    item: r,
    fieldSchema: t,
    newValue: n,
    assetsForPublish: a
  })));
}
export function $$T2({
  collection: e,
  item: t
}) {
  WB().optimisticallyDelete({
    CollectionItemV2: {
      [t.databaseId]: null
    }
  }, hl.deleteItem({
    collection: e,
    item: t
  })).then(e => e.data.meta);
}
export const BM = $$u0;
export const IR = $$h1;
export const KB = $$T2;
export const Sp = $$_3;
export const Tj = $$E4;
export const Vp = $$m5;
export const W0 = $$y6;
export const _Z = $$b7;
export const dx = $$p8;
export const gg = $$g9;
export const w1 = $$f10;
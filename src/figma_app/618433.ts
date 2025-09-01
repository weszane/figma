import { useMemo } from "react";
import { WB } from "../905/761735";
import { G } from "../905/707993";
import { X } from "../905/880040";
import { $ } from "../905/47975";
import { b } from "../905/148729";
import { A2 } from "../figma_app/872077";
export function $$c5(e) {
  let {
    collection,
    status
  } = G({
    collectionStableId: e
  });
  return useMemo(() => ({
    status,
    data: collection
  }), [collection, status]);
}
export function $$u4(e) {
  let {
    hasCollection
  } = $({
    fileKey: e
  });
  return hasCollection ?? !1;
}
export function $$p2(e) {
  let {
    collections,
    status
  } = X({
    fileKey: e
  });
  return useMemo(() => ({
    status,
    data: collections
  }), [collections, status]);
}
export function $$_0(e) {
  return WB().optimisticallyCreate({}, A2.createCollection(e)).then(e => e.data.meta).then(b);
}
export function $$h3({
  collection: e,
  name: t
}) {
  let r = {
    CollectionV2: {
      [e.databaseId]: {
        name: t,
        updatedAt: new Date()
      }
    }
  };
  return WB().optimisticallyUpdate(r, A2.renameCollection({
    collection: e,
    name: t
  })).then(e => e.data.meta);
}
export function $$m1({
  collection: e
}) {
  let t = e.databaseId;
  return WB().optimisticallyDelete({
    CollectionV2: {
      [t]: null
    }
  }, A2.deleteCollection({
    collection: e
  }));
}
export const Qw = $$_0;
export const Tx = $$m1;
export const c$ = $$p2;
export const c5 = $$h3;
export const fk = $$u4;
export const gL = $$c5;
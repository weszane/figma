import { Fk } from "../figma_app/167249";
function n(e) {
  return {
    isTextNode: "TEXT" === e.type,
    collectionStableId: e.getNearestDakotaCollectionId() ?? void 0,
    itemStableId: e.getNearestDakotaCollectionItemId() ?? void 0,
    fieldSchemaStableId: e.getDakotaFieldId() ?? void 0
  };
}
export function $$i0(e, t) {
  if (0 === t.length) return null;
  let s = t[0];
  let r = e.get(s);
  if (!r) return null;
  let i = n(r);
  for (let s = 1; s < t.length; s++) {
    let r = t[s];
    let l = e.get(r);
    if (!l) return null;
    let a = n(l);
    if (i.isTextNode !== a.isTextNode || i.collectionStableId !== a.collectionStableId || i.itemStableId !== a.itemStableId || i.fieldSchemaStableId !== a.fieldSchemaStableId) return null;
  }
  return i;
}
export function $$l1(e) {
  return Fk($$i0, e);
}
export const D = $$i0;
export const a = $$l1;
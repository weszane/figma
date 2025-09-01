import { BM } from "../figma_app/649254";
import { J } from "../905/539754";
export function $$a1(e) {
  let t = e.split("/").filter(e => e.length > 0);
  return t.length < 2 ? null : t.slice(1).join("/");
}
export function $$s5(e) {
  let t = e.split("/").filter(Boolean);
  return 0 === t.length ? "/" : "/" + t[0];
}
export async function $$o0(e) {
  let t = e.filter(e => !!e.getDakotaSelector()?.collectionId && !!e.getDakotaItemData()?.slugFieldId);
  let r = t.reduce((e, t) => {
    let r = t.getDakotaSelector()?.collectionId;
    r && (e[r] = t.getDakotaItemData().slugFieldId);
    return e;
  }, {});
  let a = {};
  for (let e of Object.keys(r)) {
    let t = await J({
      collectionStableId: e
    });
    let r = BM(t ?? []);
    a[e] = r;
  }
  let s = Object.entries(r).reduce((e, [t, r]) => {
    let n = (a[t] || []).map(e => e.fields?.find(e => e.fieldSchemaId === r)?.value).filter(Boolean);
    n.length > 0 && (e[t] = n);
    return e;
  }, {});
  return t.reduce((e, t) => {
    let r = t.getDakotaSelector()?.collectionId;
    let n = r ? s[r] : null;
    n && n.length > 0 && (e[t.name] = n);
    return e;
  }, {});
}
export function $$l4(e) {
  let t = e.getDakotaItemData()?.slugFieldId;
  let r = e.getDakotaItemData()?.fieldIdToDataMap;
  let n = r?.[t]?.value;
  return n && "string" == typeof n ? `${e.name}/${n}` : e.name;
}
export function $$d3(e) {
  return "RESPONSIVE_SET" === e.type && !!e.getDakotaSelector()?.collectionId;
}
export function $$c2(e, t) {
  return e.reduce((e, r) => {
    if (t[r]?.length) {
      let n = t[r].map(e => `${r}/${e}`);
      e.push(...n);
    } else e.push(r);
    return e;
  }, []);
}
export const CK = $$o0;
export const Iv = $$a1;
export const hE = $$c2;
export const _$$if = $$d3;
export const lB = $$l4;
export const sO = $$s5;
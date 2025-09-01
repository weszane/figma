import { isNotNullish } from "../figma_app/95419";
import { Mz } from "../vendor/925040";
import { Zm } from "../905/270781";
import { aK } from "../figma_app/524618";
import { dK } from "../figma_app/889655";
export function $$l1(e, t) {
  let i = t.get(e);
  let {
    publishID,
    componentKey,
    stateGroupKey
  } = i ?? {};
  let s = componentKey || stateGroupKey;
  let o = i?.sourceLibraryKey;
  return publishID && s && o ? {
    publishID,
    key: s,
    libraryKey: o
  } : null;
}
let $$d3 = Zm(e => Object.keys(e.mirror.selectionProperties.symbolGUIDsBackingSelection ?? {}));
let c = Mz([dK, $$d3], (e, t) => t.map(t => $$l1(t, e)).filter(isNotNullish));
export function $$u2() {
  return Mz([dK, (e, t) => t], (e, t) => t.filter(t => {
    let i = e.get(t);
    return i?.isPrimaryInstance || i?.isSwappedNestedInstance;
  }).map(t => aK(t, e)).filter(isNotNullish));
}
export let $$p0 = Mz([c], e => {
  if (e.length < 1) return null;
  let t = e[0]?.libraryKey;
  if (!t) return null;
  for (let i of e) if (i.libraryKey !== t) return null;
  return t;
});
export const CX = $$p0;
export const QL = $$l1;
export const bd = $$u2;
export const i2 = $$d3;
import { atomStoreManager } from "../figma_app/27355";
import { il, dN } from "../vendor/291472";
import { oQ } from "../905/772425";
import { ph, KG, kh } from "../905/50769";
export let $$n2;
export function $$l1(e) {
  let t = il.getDefaultSkin() || 1;
  return String.fromCodePoint(...(e.skins[t - 1] ? e.skins[t - 1].unified : e.skins[0].unified).split("-").map(e => parseInt(e, 16)));
}
class d {
  convertEmojiNameToString(e) {
    let t = e.toLocaleLowerCase();
    let r = dN.searchSynchronized(t).filter(e => e.id === t);
    return 0 === r.length ? "" : $$l1(r[0]);
  }
  setEmojiTypeaheadQuery(e) {
    let t = e && e.length > 1 ? oQ(e) : null;
    atomStoreManager.set(ph, t);
  }
  clearEmojiTypeaheadQuery() {
    atomStoreManager.set(ph, null);
  }
  isShowingEmojiTypeaheadResults() {
    let e = atomStoreManager.get(ph);
    return !!e?.emojis?.length;
  }
  setEmojiTypeaheadImageSet(e) {
    atomStoreManager.set(KG, e);
  }
  setEmojiTypeaheadTargetRect(e, t, r) {
    atomStoreManager.set(kh, {
      x: e,
      y: t,
      height: r,
      width: 0
    });
  }
}
export function $$c0() {
  $$n2 = new d();
}
export const XR = $$c0;
export const _Q = $$l1;
export const jm = $$n2;
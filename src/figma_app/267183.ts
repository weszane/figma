import { l as _$$l } from "../905/716947";
import { createRemovableAtomFamily, useAtomWithSubscription, atomStoreManager } from "../figma_app/27355";
import { z } from "../905/239603";
import { yV } from "../figma_app/516028";
import { P } from "../905/262370";
let l = createRemovableAtomFamily(e => P(`recently-used-${e}s`, "key", z.object({
  type: z.literal(e),
  key: z.string(),
  libraryKey: z.string()
}), {
  transform: (e, t) => {
    let r = t(yV);
    return {
      type: e.type,
      key: "LOCAL" === e.subscriptionStatus ? e.keyForPublish : e.key,
      libraryKey: "LOCAL" === e.subscriptionStatus ? _$$l(r?.libraryKey ?? "") : e.sourceLibraryKey
    };
  }
}));
export function $$d1(e) {
  return useAtomWithSubscription(l(e));
}
export function $$c0(e) {
  atomStoreManager.set(l(e.type), e);
}
export const e = $$c0;
export const o = $$d1;
import { atomStoreManager } from "../figma_app/27355";
import { LibrarySourceEnum } from "../figma_app/633080";
import { V9 } from "../905/72677";
export function $$s0(e) {
  if (null == e) return;
  let t = atomStoreManager.get(V9);
  return t[e]?.partner_type ?? void 0;
}
export function $$o1(e) {
  switch (e) {
    case LibrarySourceEnum.LIBRARY:
      return "library";
    case LibrarySourceEnum.HUBFILE:
      return "hubFile";
  }
}
export const X = $$s0;
export const z = $$o1;
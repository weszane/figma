import { atomStoreManager } from "../figma_app/27355";
import { v4, jq } from "../figma_app/761118";
export function $$a0() {
  let e = "loaded" === atomStoreManager.get(v4).status;
  let t = "loaded" === atomStoreManager.get(jq).status;
  return e && t;
}
export const c = $$a0;
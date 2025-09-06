import { getResourceDataOrFallback } from "../905/419236";
import { Rs } from "../figma_app/288654";
import { isInteractionPathCheck } from "../figma_app/897289";
import { tS } from "../figma_app/516028";
import { Bhh } from "../figma_app/43951";
var $$l1 = (e => (e.LOADING = "LOADING", e.HAS_ACCESS = "HAS_ACCESS", e.NO_ACCESS = "NO_ACCESS", e))($$l1 || {});
export function $$d0() {
  let e = tS() ?? "";
  let t = Rs(Bhh, {
    key: e
  });
  let r = getResourceDataOrFallback(t?.data?.file);
  return isInteractionPathCheck() ? "HAS_ACCESS" : r ? r?.hasPermission ? "HAS_ACCESS" : "NO_ACCESS" : "LOADING";
}
export const e = $$d0;
export const n = $$l1;
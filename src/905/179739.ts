import { atomStoreManager } from "../figma_app/27355";
import { useIsNavigationStackEmpty, useCurrentNavigationItem } from "../905/794154";
import { Lk } from "../figma_app/604494";
export function $$s0() {
  return useIsNavigationStackEmpty() ? atomStoreManager.get(Lk) : useCurrentNavigationItem()?.name ?? void 0;
}
export const x = $$s0;
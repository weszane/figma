import { useCallback } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { oE } from "../905/977779";
import { useHasLibraryKeyInSet } from "../figma_app/255679";
export function $$o0() {
  let e = useAtomWithSubscription(oE);
  let t = useHasLibraryKeyInSet();
  return useCallback(i => {
    let n = i.library_key;
    return t(i) || !!(n && e?.[n]);
  }, [e, t]);
}
export const s = $$o0;
import { useCallback } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { handleAtomEvent } from "../905/502364";
import { overlayStateAtom } from "../905/12032";
import { CURATOR_GLOBAL_REQUEST_CLOSE } from "../figma_app/916469";
import { l as _$$l } from "../figma_app/265420";
export function $$d0(e) {
  let t = useAtomWithSubscription(overlayStateAtom);
  return useCallback(() => {
    t && !_$$l.has(t) && handleAtomEvent({
      id: CURATOR_GLOBAL_REQUEST_CLOSE,
      properties: {
        requester: e
      }
    });
  }, [t, e]);
}
export const g = $$d0;
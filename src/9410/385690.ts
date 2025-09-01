import { useCallback } from "react";
import { md } from "../figma_app/27355";
import { YQ } from "../905/502364";
import { D } from "../905/12032";
import { X } from "../figma_app/916469";
import { l as _$$l } from "../figma_app/265420";
export function $$d0(e) {
  let t = md(D);
  return useCallback(() => {
    t && !_$$l.has(t) && YQ({
      id: X,
      properties: {
        requester: e
      }
    });
  }, [t, e]);
}
export const g = $$d0;
import { useMemo } from "react";
import { d4 } from "../vendor/514228";
import { Rs } from "../figma_app/288654";
import { g } from "../905/880308";
import { gfM } from "../figma_app/43951";
import { kY } from "../figma_app/336853";
export function $$c0() {
  let e = useMemo(() => g(), []);
  let t = d4(kY);
  let i = Rs(gfM, {
    cacheNonce: e
  });
  return useMemo(() => {
    if ("loaded" === i.status) {
      let e = i.data?.lockClient;
      if (e) return e.lock;
    }
    return t;
  }, [i, t]);
}
export const N = $$c0;
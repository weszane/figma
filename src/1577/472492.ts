import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useSubscription } from "../figma_app/288654";
import { generateUUIDv4 } from "../905/871474";
import { LockClientView } from "../figma_app/43951";
import { isAccountLockedDuringOrgOperation } from "../figma_app/336853";
export function $$c0() {
  let e = useMemo(() => generateUUIDv4(), []);
  let t = useSelector(isAccountLockedDuringOrgOperation);
  let i = useSubscription(LockClientView, {
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
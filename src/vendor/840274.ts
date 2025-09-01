import i from "../vendor/707040";
import { useState, useCallback } from "react";
import { E } from "../vendor/202506";
function a(e, r, n) {
  let [a, h] = useState(() => r(e));
  let d = useCallback(() => {
    let s = r(e);
    !i(a, s) && (h(s), n && n());
  }, [a, e, n]);
  E(d);
  return [a, d];
}
function h(e, r, n) {
  let [i, s] = a(e, r, n);
  E(function () {
    let r = e.getHandlerId();
    if (null != r) return e.subscribeToStateChange(s, {
      handlerIds: [r]
    });
  }, [e, s]);
  return i;
}
export function $$d0(e, r, n) {
  return h(r, e || (() => ({})), () => n.reconnect());
}
export const j = $$d0;
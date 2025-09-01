import { useMemo } from "react";
import { _X } from "../figma_app/62612";
import { x } from "../figma_app/943271";
export function $$s0() {
  let e = x({
    subscribeToUpdates_EXPENSIVE: !0
  });
  let t = _X({
    subscribeToUpdates_expensive: !0
  });
  return useMemo(() => !!(e && e.y >= t.y && e.x >= t.x && e.x <= t.x + t.width), [e, t]);
}
export const K = $$s0;
import { useMemo } from "react";
import { Point } from "../905/736624";
import { _X, $g } from "../figma_app/62612";
export function $$a0(e, t, n, a, l) {
  let s = _X({
    subscribeToUpdates_expensive: !n
  });
  return useMemo(() => {
    if (n) return l(e, t);
    {
      let n = $g(s, new Point(e, t));
      return new Point(n.x - a / 2, n.y + 30);
    }
  }, [n, l, e, t, s, a]);
}
export const I = $$a0;
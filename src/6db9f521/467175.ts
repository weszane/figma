import { useEffect } from "react";
import { HY, g2, Mz } from "../vendor/231521";
import { DF } from "../vendor/463802";
import { Pi, vJ, I2, ff, d } from "../vendor/408361";
export function $$a0({
  maxDepth: e
}) {
  let [t] = DF();
  useEffect(() => t.registerCommand(Pi, () => !function (e) {
    let t = vJ();
    if (!I2(t)) return !1;
    let i = function (e) {
      let t = e.getNodes();
      return new Set(0 === t.length ? [e.anchor.getNode().getParentOrThrow(), e.focus.getNode().getParentOrThrow()] : t.map(e => ff(e) ? e : e.getParentOrThrow()));
    }(t);
    let n = 0;
    for (let e of i) if (HY(e)) n = Math.max(g2(e) + 1, n);else {
      if (!Mz(e)) return !1;
      let t = e.getParent();
      if (!HY(t)) throw Error("LimitIndentLevelPlugin: A ListItemNode must have a ListNode for a parent.");
      n = Math.max(g2(t) + 1, n);
    }
    return n <= e;
  }(e ?? 7), d), [t, e]);
  return null;
}
export const A = $$a0;
import { useCallback, useState, useEffect } from "react";
import { traverseUpAndDown } from "../figma_app/387100";
import { Tv } from "../figma_app/311375";
import { Z } from "../905/116724";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { cq } from "../905/794154";
function d(e, t, i) {
  if (!e.get(i)) return !1;
  let n = !1;
  traverseUpAndDown(e, i, e => {
    if (t.includes(e.guid)) {
      n = !0;
      return "stop";
    }
  });
  return n;
}
export function $$c0({
  ref: e,
  targets: t,
  onClose: i,
  disabled: r
}) {
  let {
    autoClose
  } = cq();
  let u = useCallback(() => {
    i && i();
    autoClose();
  }, [autoClose, i]);
  let p = Z(u);
  let m = Tv();
  let h = useDeepEqualSceneValue((e, t, i) => t.some(t => d(e, i, t)) || i.some(i => d(e, t, i)), t, m);
  let [g, f] = useState(!1);
  useEffect(() => {
    let t = e.current;
    if (!t || r) return;
    let i = () => {
      f(!1);
    };
    let n = () => {
      f(!0);
    };
    t.addEventListener("mouseout", i);
    t.addEventListener("mouseover", n);
    return () => {
      t.removeEventListener("mouseout", i);
      t.removeEventListener("mouseover", n);
    };
  }, [r, e]);
  useEffect(() => {
    (g || h || r) && p.isActive ? p.cancel() : g || h || r || p.isActive || p.start(5e3);
  }, [p, r, g, h]);
}
export const x = $$c0;
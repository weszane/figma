import { useState, useMemo } from "react";
import { d4 } from "../vendor/514228";
import { Yh } from "../figma_app/357047";
var $$$$s1 = (e => (e[e.NEEDS_INITIAL_SELECTION = 0] = "NEEDS_INITIAL_SELECTION", e[e.SELECTION_LOST = 1] = "SELECTION_LOST", e[e.SELECTION_OK = 2] = "SELECTION_OK", e))($$$$s1 || {});
export function $$o0(e) {
  let t = d4(t => Yh(t.mirror.appModel, e));
  let [i, s] = useState(t);
  let o = 0;
  t && i ? o = 2 : i && !t && (o = 1, s(!1));
  return useMemo(() => ({
    state: o,
    confirmInitialSelection: () => s(!0)
  }), [o]);
}
export const s = $$o0;
export const w = $$$$s1;
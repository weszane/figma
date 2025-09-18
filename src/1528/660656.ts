import { useMemo } from "react";
import { LU, kG } from "../figma_app/327588";
import { W } from "../905/72930";
import { gI, Pc, dS } from "../figma_app/396464";
import { useSceneGraphSelector } from "../figma_app/722362";
export function $$o0() {
  let e = useSceneGraphSelector();
  let t = gI();
  let n = Pc();
  let o = dS();
  let d = LU();
  let c = kG();
  return useMemo(() => (0 === t.length && 0 === o.length ? c ? [d] : n : o.length > 0 ? W(t, o, n, e) : t).sort((e, t) => n.indexOf(e) - n.indexOf(t)), [t, o, c, d, n, e]);
}
export const $ = $$o0;
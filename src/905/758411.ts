import { useEffect } from "react";
import { md } from "../figma_app/27355";
import { useSprigWithSampling } from "../905/99656";
import { hO } from "../figma_app/545293";
import { JT } from "../figma_app/632248";
import { WP } from "../905/198599";
import { _M } from "../905/487011";
import { dM, F9 } from "../905/278499";
import { k } from "../905/167644";
export function $$p0() {
  let {
    currentSearch
  } = md(WP);
  let t = md(hO.currentSearchAtom);
  let i = md(hO.currentCommunitySearchAtom);
  let {
    Sprig
  } = useSprigWithSampling();
  let m = _M({
    action: JT.FIND_INSPIRATION,
    clientLifecycleId: void 0
  });
  useEffect(() => {
    if ([currentSearch?.input.type, t?.input.type, i?.input.type].includes("input-text")) return;
    let n = [currentSearch?.result.status, t?.result.status, i?.result.status];
    !n.includes("loading") && (n.includes("loaded") ? k(Sprig, m.action, m, dM.COMPLETED, F9.SUCCESS) : n.includes("errors") && k(Sprig, m.action, m, dM.FAILED, F9.ERROR));
  }, [currentSearch, t, i, Sprig, m]);
}
export const C = $$p0;
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { eU, zl } from "../figma_app/27355";
export let $$s0 = eU(void 0);
export function $$o1() {
  if (!getFeatureFlags().anticipation_trigger_shadow) return;
  let e = getSingletonSceneGraph().getDirectlySelectedNodes();
  let t = e.length > 1 ? void 0 : e[0]?.guid;
  zl.set($$s0, t);
}
export const W = $$s0;
export const r = $$o1;
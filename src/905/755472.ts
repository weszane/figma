import { getFeatureFlags } from "../905/601108";
import { t_, zl } from "../figma_app/27355";
import { _ } from "../905/810750";
export let $$s0 = t_(() => new _());
export function $$o1(e, t) {
  getFeatureFlags().internal_only_debug_tools && zl.set($$s0, i => (i.add(e, t), i));
}
export const L = $$s0;
export const l = $$o1;
import { getFeatureFlags } from "../905/601108";
import { FPlanNameType } from "../figma_app/191312";
let $$a0 = 3e3;
let $$s2 = 3500;
export function $$o1() {
  return getFeatureFlags().internal_low_code_chat_prompt_limits ? {
    [FPlanNameType.PRO]: 8,
    [FPlanNameType.ORG]: 9,
    [FPlanNameType.ENTERPRISE]: 10
  } : {
    [FPlanNameType.PRO]: 60,
    [FPlanNameType.ORG]: 70,
    [FPlanNameType.ENTERPRISE]: 85
  };
}
export const EK = $$a0;
export const Tf = $$o1;
export const tg = $$s2;
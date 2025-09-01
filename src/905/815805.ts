import { G } from "../905/142901";
import { FPlanNameType } from "../figma_app/191312";
import { Ju, IX } from "../905/712921";
export function $$s0(e) {
  let t = G({
    currency: e,
    tier: Ju.PRO,
    renewalTerm: IX.YEAR,
    showCents: !1
  });
  let i = G({
    currency: e,
    tier: Ju.PRO,
    renewalTerm: IX.MONTH,
    showCents: !1
  });
  let s = G({
    currency: e,
    tier: Ju.ORG,
    renewalTerm: IX.YEAR,
    showCents: !1
  });
  return "loading" === t.status || "loading" === i.status || "loading" === s.status ? {
    [FPlanNameType.STARTER]: null,
    [FPlanNameType.STUDENT]: null,
    [FPlanNameType.PRO]: null,
    [FPlanNameType.ORG]: null
  } : {
    [FPlanNameType.STARTER]: null,
    [FPlanNameType.STUDENT]: null,
    [FPlanNameType.PRO]: {
      monthly: i.data,
      annual: t.data
    },
    [FPlanNameType.ORG]: {
      monthly: null,
      annual: s.data
    }
  };
}
export const U = $$s0;
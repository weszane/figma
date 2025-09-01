import { b } from "../905/275748";
import { then } from "../ead0c34b/698412";
import { Ij, Ju } from "../905/102752";
let n;
let s;
let r = new b({
  name: "billing_purchase_ai_credits",
  description: "Code related to purchasing AI credits and managing your current AI credit subscription",
  exports: {
    "./modals": "./modals.tsx"
  },
  sideEffects: !1
});
function l() {
  return n ??= r.createLazyComponent(() => then(e => e.PurchaseAiCreditsModal), Ij("PurchaseAiCreditsModal"));
}
export function $$o0() {
  return s ??= Ju(l(), "PurchaseAiCreditsModal");
}
export function $$d1() {
  l().preload();
}
export const e = $$o0;
export const C = $$d1;
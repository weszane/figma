import { b } from "../905/275748";
import _require from "../7021/149615";
import { Ju, Ij } from "../905/102752";
let a;
let r = new b({
  name: "billing_remodel_terms",
  description: "Code related to informing customers about the billing remodel and new terms that they may need to accept",
  dependencies: [],
  exports: {
    "./components": "./components.ts",
    "./hooks": "./hooks.ts",
    "./modals": "./modals.ts",
    "./overlays": "./overlays.ts"
  },
  sideEffects: !1,
  routeHints: ["file_browser"]
});
export function $$o0() {
  return a ??= Ju(r.createLazyComponent(() => Promise.resolve().then(_require).then(e => e.SeatBillingTermsModal), Ij("SeatBillingTermsModal")));
}
export const w = $$o0;
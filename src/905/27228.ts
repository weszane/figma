import { atom, Xr, useAtomWithSubscription } from "../figma_app/27355";
import { h } from "../905/207101";
import { g } from "../905/880308";
let s = atom(void 0);
export function $$o0() {
  let e = Xr(s);
  h(() => (e(g()), () => e(void 0)));
}
export function $$l1() {
  return useAtomWithSubscription(s);
}
export const T = $$o0;
export const X = $$l1;
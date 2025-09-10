import { setupRemovableAtomFamily } from "../figma_app/615482";
import { useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { n6 } from "../905/234821";
let o = setupRemovableAtomFamily(() => atom(0));
export function $$l0() {
  let e = n6();
  let [t, i] = useAtomValueAndSetter(o);
  useEffect(() => {
    e !== t && i(e);
  }, [e, t, i]);
}
export let $$d1 = getFeatureFlags().figjam_toolbelt_in_page_view ? n6 : function () {
  return useAtomWithSubscription(o);
};
export const B = $$l0;
export const a = $$d1;
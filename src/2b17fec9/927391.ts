import { Wh } from "../figma_app/615482";
import { useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { eU, fp, md } from "../figma_app/27355";
import { n6 } from "../905/234821";
let o = Wh(() => eU(0));
export function $$l0() {
  let e = n6();
  let [t, i] = fp(o);
  useEffect(() => {
    e !== t && i(e);
  }, [e, t, i]);
}
export let $$d1 = getFeatureFlags().figjam_toolbelt_in_page_view ? n6 : function () {
  return md(o);
};
export const B = $$l0;
export const a = $$d1;
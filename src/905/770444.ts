import { useCallback } from "react";
import { d4 } from "../vendor/514228";
import { glU } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { Y5 } from "../figma_app/455680";
import { tJ } from "../figma_app/741237";
import { Xt } from "../figma_app/889655";
import { K3 } from "../figma_app/678300";
export function $$u0(e) {
  let t = d4(Xt);
  return useCallback(async i => {
    t && !K3(t, i) && (e ? glU.goToSymbolOrStateGroupById(i, !1) : await getSingletonSceneGraph().setCurrentPageFromNodeAsync(i), tJ([i]), Y5.commit());
  }, [e, t]);
}
export const K = $$u0;
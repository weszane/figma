import { useCallback } from "react";
import { useSelector } from "../vendor/514228";
import { Fullscreen } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { fullscreenValue } from "../figma_app/455680";
import { tJ } from "../figma_app/741237";
import { Xt } from "../figma_app/889655";
import { K3 } from "../figma_app/678300";
export function $$u0(e) {
  let t = useSelector(Xt);
  return useCallback(async i => {
    t && !K3(t, i) && (e ? Fullscreen.goToSymbolOrStateGroupById(i, !1) : await getSingletonSceneGraph().setCurrentPageFromNodeAsync(i), tJ([i]), fullscreenValue.commit());
  }, [e, t]);
}
export const K = $$u0;
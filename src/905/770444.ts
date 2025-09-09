import { useCallback } from "react";
import { useSelector } from "react-redux";
import { Fullscreen } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { fullscreenValue } from "../figma_app/455680";
import { replaceSelection } from "../figma_app/741237";
import { Xt } from "../figma_app/889655";
import { K3 } from "../figma_app/678300";
export function $$u0(e) {
  let t = useSelector(Xt);
  return useCallback(async i => {
    t && !K3(t, i) && (e ? Fullscreen.goToSymbolOrStateGroupById(i, !1) : await getSingletonSceneGraph().setCurrentPageFromNodeAsync(i), replaceSelection([i]), fullscreenValue.commit());
  }, [e, t]);
}
export const K = $$u0;

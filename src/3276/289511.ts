import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { Fullscreen } from "../figma_app/763686";
import { YQ } from "../905/502364";
import { jD } from "../905/765855";
import { KE, En } from "../905/116101";
import { Cu } from "../figma_app/314264";
import { fK, tV } from "../figma_app/300024";
export function $$m0(e, t) {
  let n = useDispatch();
  return useCallback(() => {
    YQ({
      id: "figjam-saves"
    });
    e ? (n(KE()), Fullscreen?.triggerActionInUserEditScope("set-tool-default", {
      source: fK
    })) : (Fullscreen?.triggerActionInUserEditScope("clear-tool", {
      source: fK
    }), n(jD()), n(En({
      initialX: 0,
      initialY: 0,
      initialTab: t
    })), Cu({
      source: fK
    }, tV));
  }, [e, t, n]);
}
export const r = $$m0;
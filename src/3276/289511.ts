import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Fullscreen } from "../figma_app/763686";
import { handleAtomEvent } from "../905/502364";
import { hideTooltip } from "../905/765855";
import { closeUniversalInsertModal, setUniversalInsertModalOpen } from "../905/116101";
import { logAndTrackCTA } from "../figma_app/314264";
import { fK, tV } from "../figma_app/300024";
export function $$m0(e, t) {
  let n = useDispatch<AppDispatch>();
  return useCallback(() => {
    handleAtomEvent({
      id: "figjam-saves"
    });
    e ? (n(closeUniversalInsertModal()), Fullscreen?.triggerActionInUserEditScope("set-tool-default", {
      source: fK
    })) : (Fullscreen?.triggerActionInUserEditScope("clear-tool", {
      source: fK
    }), n(hideTooltip()), n(setUniversalInsertModalOpen({
      initialX: 0,
      initialY: 0,
      initialTab: t
    })), logAndTrackCTA({
      source: fK
    }, tV));
  }, [e, t, n]);
}
export const r = $$m0;

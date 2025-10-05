import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideTooltip } from "../905/765855";
import { LR } from "../figma_app/120210";
import { PinningState } from "../905/192333";
export function $$l0(e) {
  let t = useSelector(e => e.universalInsertModal);
  let i = LR();
  let l = useDispatch();
  return useCallback(() => {
    t.pinned === PinningState.NOT_PINNED && (i(), e?.hideTooltips && l(hideTooltip()));
  }, [t, i, e, l]);
}
export const b = $$l0;
import { useMemo } from "react";
import { Ez5 } from "../figma_app/763686";
import { _X, Yb } from "../figma_app/62612";
import { ut } from "../figma_app/84367";
export function $$o0(e) {
  let t = _X({
    subscribeToUpdates_expensive: e
  });
  let i = ut(Ez5?.canvasViewState().selectionBoundingRect, {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  return useMemo(() => Yb(t, i), [t, i]);
}
export const j = $$o0;
import { useMemo } from "react";
import { AppStateTsApi } from "../figma_app/763686";
import { getViewportInfo, scaleRect } from "../figma_app/62612";
import { getObservableValue } from "../figma_app/84367";
export function $$o0(e) {
  let t = getViewportInfo({
    subscribeToUpdates_expensive: e
  });
  let l = getObservableValue(AppStateTsApi?.canvasViewState().selectionBoundingRect, {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  return useMemo(() => scaleRect(t, l), [t, l]);
}
export const j = $$o0;
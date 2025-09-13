import { useMemo } from 'react';
import { getViewportInfo, scaleRect } from '../figma_app/62612';
import { getObservableValue } from '../figma_app/84367';
import { AppStateTsApi } from '../figma_app/763686';
export function $$o0(e) {
  let t = getViewportInfo({
    subscribeToUpdates_expensive: e
  });
  let i = getObservableValue(AppStateTsApi?.canvasViewState().selectionBoundingRect, {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  return useMemo(() => scaleRect(t, i), [t, i]);
}
export const j = $$o0;
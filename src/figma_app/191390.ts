import { AppStateTsApi } from "../figma_app/763686";
import { getObservableValue } from "../figma_app/84367";
export function $$a1() {
  return getObservableValue(AppStateTsApi?.slideLikeNodeObserverState().slideLikeNodeIdsOnCanvas, new Set([]));
}
export function $$s0() {
  return getObservableValue(AppStateTsApi?.slideLikeNodeObserverState().slideLikeNodesAdded, 0);
}
export const $ = $$s0;
export const N = $$a1;
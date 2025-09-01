import { d4 } from "../vendor/514228";
import { tG } from "../figma_app/757723";
export function $$a2() {
  return !!d4(e => e.mirror.selectionProperties.whiteboardStickyAIControlsShown);
}
export function $$s1() {
  return !!d4(e => e.mirror.selectionProperties.whiteboardMindmapAIControlsShown);
}
export function $$o3() {
  return !!d4(e => e.mirror.selectionProperties.whiteboardSelectionCanSummarize);
}
export function $$l4() {
  return !!d4(e => e.mirror.selectionProperties.whiteboardSelectionCanCluster);
}
export function $$d0() {
  let e = d4(e => e.mirror.selectionProperties.whiteboardSelectionCanShowAiOnboardingBadge);
  let t = tG();
  return !!(e && t);
}
export const CI = $$d0;
export const QP = $$s1;
export const V = $$a2;
export const cF = $$o3;
export const v1 = $$l4;
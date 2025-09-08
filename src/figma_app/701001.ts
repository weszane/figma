import { AppStateTsApi, SelectionPanelType } from "../figma_app/763686";
import { getObservableValue } from "../figma_app/84367";
export function $$a3() {
  return getObservableValue(AppStateTsApi?.uiState().showCanvasSearch, !1);
}
export function $$s1() {
  return getObservableValue(AppStateTsApi?.uiState().focusModeState, SelectionPanelType.INACTIVE);
}
export function $$o8() {
  return getObservableValue(AppStateTsApi?.uiState().showInFileMemoryPercentage, !1);
}
export function $$l9() {
  return getObservableValue(AppStateTsApi?.uiState().showAnnotationsInDevMode, !0);
}
export function $$d0() {
  return getObservableValue(AppStateTsApi?.uiState().alwaysExpandAnnotations, !1);
}
export function $$c2() {
  return getObservableValue(AppStateTsApi?.uiState().showMemoryUsage, !1);
}
export function $$u4() {
  return getObservableValue(AppStateTsApi?.uiState().renderResourceUse, !1);
}
export function $$p10() {
  return getObservableValue(AppStateTsApi?.uiState().showPropertiesPanel, !0);
}
export function $$_11() {
  return getObservableValue(AppStateTsApi?.uiState().inProductHelpSidePanelWidth, 0);
}
export function $$h6() {
  return getObservableValue(AppStateTsApi?.uiState().isRecovery, !1);
}
export function $$m7() {
  return getObservableValue(AppStateTsApi?.uiState().editorBannerHeight, 0);
}
export function $$g5() {
  return getObservableValue(AppStateTsApi?.uiState().hideMultiplayerCursors, !1);
}
export const DH = $$d0;
export const GW = $$s1;
export const Ht = $$c2;
export const L3 = $$a3;
export const NF = $$u4;
export const RF = $$g5;
export const TY = $$h6;
export const _o = $$m7;
export const no = $$o8;
export const oQ = $$l9;
export const s_ = $$p10;
export const yO = $$_11;
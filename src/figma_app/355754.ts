import { AppStateTsApi, KeyboardLayout } from "../figma_app/763686";
import { getObservableValue } from "../figma_app/84367";
export function $$a5() {
  return getObservableValue(AppStateTsApi?.editorState().inPlaygroundMode, !1);
}
export function $$s2() {
  return getObservableValue(AppStateTsApi?.editorState().focusedAnnotationId, null);
}
export function $$o1() {
  return getObservableValue(AppStateTsApi?.editorState().selectedMeasurementId, null);
}
export function $$l4() {
  return getObservableValue(AppStateTsApi?.editorState().useNumbersForOpacity, !1);
}
export function $$d3() {
  return getObservableValue(AppStateTsApi?.editorState().keyboardLayoutPreference, KeyboardLayout.UNKNOWN);
}
export function $$c0() {
  return getObservableValue(AppStateTsApi?.editorState().selectionEmpty, !0);
}
export function $$u6() {
  return getObservableValue(AppStateTsApi?.editorState().pencilStraightLine, !1);
}
export const D4 = $$c0;
export const E_ = $$o1;
export const NW = $$s2;
export const S5 = $$d3;
export const Zj = $$l4;
export const hg = $$a5;
export const xI = $$u6;
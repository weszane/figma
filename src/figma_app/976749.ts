import { useSelector } from "react-redux";
import { createReduxSubscriptionAtomWithState } from "src/905/270322";
import { FFileType } from "src/figma_app/191312";
import { mapEditorTypeToFileType, FEditorType } from "src/figma_app/53721";
export function $$o8() {
  return useSelector(e => {
    var t;
    return (t = e.selectedView) && "fullscreen" === t.view ? mapEditorTypeToFileType(t.editorType) : FFileType.DESIGN;
  });
}
export function $$l5(e) {
  return e && "fullscreen" === e.view ? e.editorType : FEditorType.Design;
}
export function $$d3() {
  return useSelector(e => "prototype" === e.selectedView.view);
}
export function $$c7() {
  return useSelector(e => "fullscreen" === e.selectedView.view);
}
export function $$u11() {
  return $$o8() === FFileType.WHITEBOARD;
}
export function $$p2() {
  let e = $$u11();
  let t = useSelector(e => !!e.openFile?.isTryFile);
  return e && t;
}
export function $$_1() {
  return $$o8() === FFileType.DESIGN;
}
export function $$h6() {
  return $$o8() === FFileType.SITES;
}
export function $$m9() {
  return $$f0() === FEditorType.DevHandoff;
}
export function $$g14() {
  return $$f0() === FEditorType.Illustration;
}
export function $$f0() {
  return useSelector($$E12);
}
export function $$E12(e) {
  let t = e.selectedView;
  return "fullscreen" !== t.view ? FEditorType.Design : t.editorType;
}
export function $$y10() {
  return useSelector(e => $$b4(e.selectedView));
}
export function $$b4(e) {
  return "fullscreen" !== e.view ? null : e.editorType;
}
export let $$T13 = createReduxSubscriptionAtomWithState(e => $$b4(e.selectedView));
export const E3 = $$f0;
export const Em = $$_1;
export const Fn = $$p2;
export const HW = $$d3;
export const JV = $$b4;
export const XE = $$l5;
export const cJ = $$h6;
export const iq = $$c7;
export const lg = $$o8;
export const m0 = $$m9;
export const my = $$y10;
export const ow = $$u11;
export const pQ = $$E12;
export const u8 = $$T13;
export const vn = $$g14;

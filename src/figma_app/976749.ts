import { useSelector } from "../vendor/514228";
import { bt } from "../905/270322";
import { FFileType } from "../figma_app/191312";
import { oD, nT } from "../figma_app/53721";
export function $$o8() {
  return useSelector(e => {
    var t;
    return (t = e.selectedView) && "fullscreen" === t.view ? oD(t.editorType) : FFileType.DESIGN;
  });
}
export function $$l5(e) {
  return e && "fullscreen" === e.view ? e.editorType : nT.Design;
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
  return $$f0() === nT.DevHandoff;
}
export function $$g14() {
  return $$f0() === nT.Illustration;
}
export function $$f0() {
  return useSelector($$E12);
}
export function $$E12(e) {
  let t = e.selectedView;
  return "fullscreen" !== t.view ? nT.Design : t.editorType;
}
export function $$y10() {
  return useSelector(e => $$b4(e.selectedView));
}
export function $$b4(e) {
  return "fullscreen" !== e.view ? null : e.editorType;
}
export let $$T13 = bt(e => $$b4(e.selectedView));
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
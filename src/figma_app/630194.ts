import { jsx } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import a from "classnames";
import { generateRecordingKey } from "../figma_app/878298";
import { isCommunityHomeShelfEnabled } from "../figma_app/591738";
import { isInvalidValue } from "../905/216495";
import { wv, uM, g5, Iz } from "../905/888175";
import { yF, r6 } from "../figma_app/731560";
var s = a;
let $$p2 = 1500;
let $$_3 = "delightfulToolbarDrawingSubmenu";
export function $$h5(e) {
  return generateRecordingKey("delightfulToolbar", e);
}
export function $$m0(e) {
  return generateRecordingKey($$_3, e);
}
export function $$g1(e, t) {
  if (isInvalidValue(e)) return e;
  if ("VECTOR" === t || "CONNECTOR" === t) {
    if (e === wv) return "THIN";
    if (e === uM) return "THICK";
  } else if ("HIGHLIGHT" === t) {
    if (e === g5) return "THIN";
    if (e === Iz) return "THICK";
  }
  return "CUSTOM";
}
export function $$f4({
  className: e
}) {
  return jsx("div", {
    className: s()(yF, e)
  });
}
export function $$E7({
  children: e
}) {
  return jsx("div", {
    className: r6,
    children: e
  });
}
export function $$y6() {
  let e = useSelector(e => e.isMakeSomethingV2Active);
  let t = isCommunityHomeShelfEnabled();
  return e && !t;
}
export const ME = $$m0;
export const Ru = $$g1;
export const YB = $$p2;
export const aQ = $$_3;
export const cG = $$f4;
export const hx = $$h5;
export const lq = $$y6;
export const wn = $$E7;
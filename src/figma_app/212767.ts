import { useEffect } from "react";
import { Ez5 } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { eU, md } from "../figma_app/27355";
import { parsePxNumber } from "../figma_app/783094";
import { UX, UK } from "../figma_app/740163";
import { QBm } from "../figma_app/27776";
let c = parsePxNumber(QBm);
let u = 300 + c;
let p = 640 + c;
let $$_0 = eU(!1);
export function $$h1(e) {
  return Math.max(u, Math.min(p, e || 0));
}
export function $$m2() {
  return $$h1(UX());
}
let g = 320 + c;
export function $$f4() {
  let e = $$m2();
  let t = md($$_0);
  useEffect(() => {
    t || (g = e);
  }, [t]);
  return t ? g : e;
}
export function $$E5() {
  return $$h1(Ez5?.editorPreferences().devHandoffInspectSplitPosition.getCopy() ?? 0);
}
export function $$y6(e) {
  getFeatureFlags().properties_panel_resize_lag_fix && document.documentElement.style.setProperty("--dev-handoff-panel-width", `${e}px`);
  UK().devHandoffInspectSplitPosition.set(e);
}
export function $$b3() {
  let e = UX();
  useEffect(() => {
    let t = $$h1(e);
    t !== e && $$y6(t);
  }, [e]);
}
export const XI = $$_0;
export const gY = $$h1;
export const lz = $$m2;
export const qn = $$b3;
export const rL = $$f4;
export const sX = $$E5;
export const xT = $$y6;
import { useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { xae } from "../figma_app/763686";
import { md } from "../figma_app/27355";
import { x4 } from "../905/657224";
import { FP } from "../figma_app/91703";
import { Em } from "../figma_app/976749";
import { UQ } from "../figma_app/864723";
import { d4 } from "../figma_app/202626";
import { D } from "../905/347702";
import { I7 } from "../figma_app/630951";
import { q5 } from "../figma_app/516028";
import { Ai, jO } from "../figma_app/242339";
export function $$g0(e) {
  let t = [e];
  for (; 0 !== t.length;) {
    let e = t.shift();
    if (!1 !== e.visible) {
      if ("TEXT" === e.type) return !0;
      t.push(...e.childrenNodes);
    }
  }
  return !1;
}
let f = "last-used-left-panel-tab";
let E = "ASSETS_TAB";
export function $$y1(e) {
  x4 && x4.setItem(f, e === xae.ASSETS ? E : "LAYERS_TAB");
}
let b = D(() => {
  if (x4) {
    let e = x4.getItem(f);
    if (e) return e === E ? xae.ASSETS : xae.LAYERS;
  }
  return null;
});
export function $$T2() {
  let e = useDispatch();
  let t = Ai([d4]);
  let r = jO();
  let {
    hasAnyUiKit
  } = I7();
  let p = md(UQ);
  let g = Em();
  let f = q5()?.canEdit;
  useEffect(() => {
    if (g && f && r && !t) {
      let t = b();
      e(FP({
        tab: t,
        persist: !0
      }));
    }
  }, [e, f, g, r, t, hasAnyUiKit, p]);
}
export const C$ = $$g0;
export const Cp = $$y1;
export const a4 = $$T2;
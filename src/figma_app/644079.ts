import { useCallback, useState, useEffect } from "react";
import { d4 } from "../vendor/514228";
import { Ez5 } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { eU, md } from "../figma_app/27355";
import { parsePxInt, parsePxNumber } from "../figma_app/783094";
import { zm } from "../figma_app/384673";
import { P4 } from "../905/18800";
import { r as _$$r } from "../figma_app/375550";
import { e as _$$e } from "../figma_app/433958";
import { hA } from "../figma_app/88239";
import { ow, m0 } from "../figma_app/976749";
import { UX } from "../figma_app/740163";
import { TZ } from "../figma_app/62612";
import { T as _$$T } from "../905/858738";
import { kd } from "../figma_app/546509";
import { ut } from "../figma_app/84367";
import { O as _$$O } from "../905/51985";
import { N as _$$N } from "../figma_app/910954";
import { lq } from "../figma_app/630194";
import { gT } from "../figma_app/822177";
import { L } from "../905/453756";
import { G } from "../figma_app/481531";
import { _ as _$$_ } from "../figma_app/91620";
import { A as _$$A } from "../905/638715";
import { xEX, yNw, ea4, M$q, j4N, F6W, IuL, jl4, P4e } from "../figma_app/27776";
let w = parsePxInt(xEX);
let O = eU(0);
export function $$R4() {
  let e = d4(e => e.downtime.status === _$$A.Ongoing || e.downtime.status === _$$A.Imminent || e.showingDowntimeBanner);
  let t = TZ({
    subscribeToUpdates_expensive: !0
  });
  e && (t += w);
  return t;
}
export function $$L2() {
  let e = kd();
  return useCallback(async () => e?.toastBottomInset ? await e.toastBottomInset() : Promise.reject(), [e]);
}
export function $$P0() {
  let e = ow();
  let t = md(P4);
  let r = md(O);
  let n = ut(Ez5?.editorPreferences()?.showFigmaScope, !1);
  let d = UX();
  let u = d4(e => e.mirror.appModel.showKeyboardShortcuts);
  let p = lq();
  let g = md(_$$O);
  let E = !!hA();
  let T = 0;
  u && (T = parsePxNumber(yNw));
  T += (n ? g : 0) + r;
  e && (T += t, p && (T -= parsePxNumber(ea4)));
  E && (T += 2 * parsePxNumber(M$q) - parsePxNumber(j4N));
  _$$T() && getFeatureFlags().dt_vscode_ready_for_dev && (T += d);
  return T;
}
export function $$D3() {
  let e = _$$N();
  let t = _$$e();
  let r = m0();
  let n = d4(e => !!e.prototype?.isFooterVisible);
  let a = zm() && !r ? parsePxNumber(F6W) : 0;
  let s = d4(e => e.mirror?.appModel.showUi);
  let c = 64 + e + a;
  let _ = ow();
  let m = L();
  let g = _$$_();
  let f = G();
  let E = md(gT);
  let y = md(_$$r);
  return _ && !m ? g && f ? parsePxNumber(IuL) + parsePxNumber(jl4) : g && E ? c : g ? parsePxNumber(IuL) : 0 : t ? c + (y ? 40 : 0) : n ? parsePxNumber(P4e) : s ? c : 0;
}
export function $$k1(e) {
  let [t, r] = useState(null);
  useEffect(() => {
    function t() {
      let t = document.querySelector(e);
      r(t?.getBoundingClientRect() ?? null);
    }
    t();
    let n = setInterval(() => t(), 500);
    return () => clearInterval(n);
  }, [e]);
  return t;
}
export const xn = $$P0;
export const hX = $$k1;
export const uo = $$L2;
export const Yk = $$D3;
export const Ii = $$R4;
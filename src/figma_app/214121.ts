import { useRef, useEffect } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { G } from "../905/289770";
import { ColorStateTsApi } from "../figma_app/763686";
import { b2 } from "../vendor/284505";
import { A } from "../vendor/382731";
import { A as _$$A } from "../vendor/862057";
import { A as _$$A2 } from "../vendor/257034";
import { A as _$$A3 } from "../vendor/782559";
import { A as _$$A4 } from "../vendor/947527";
import { reportError, captureMessage } from "../905/11";
import { camelToKebab } from "../figma_app/930338";
import { getSelectedEditorType } from "../figma_app/976749";
import { fullscreenValue } from "../figma_app/455680";
import { g as _$$g } from "../figma_app/115586";
let n;
export function $$y0() {
  let e = _$$g();
  let {
    addThemeListener
  } = G();
  let r = getSelectedEditorType();
  let n = useRef(r);
  useEffect(() => {
    n.current = r;
  }, [r]);
  useEffect(() => {
    e && ColorStateTsApi && $$b1.updateColorsInFullscreen(ColorStateTsApi.colorTokensState());
  }, [e, r]);
  useEffect(() => addThemeListener(() => {
    fullscreenValue.isReady() && ColorStateTsApi && $$b1.updateColorsInFullscreen(ColorStateTsApi.colorTokensState());
  }), [addThemeListener]);
}
export let $$b1 = {
  getTokenValue: T,
  updateColorsInFullscreen: function (e) {
    let t = {};
    let r = getComputedStyle(document.body);
    let i = e.currentTokens.getCopy();
    for (let s in n || (n = function () {
      let e;
      let t = document.head.querySelector('link[href*="figma_app"][href*="css"]');
      try {
        t instanceof HTMLLinkElement && (e = t.sheet?.cssRules);
      } catch {}
      return !!(e && e.length > 0);
    }()), i) {
      let i = T(r, s);
      let o = function (e) {
        if (!e) return;
        let t = I(e);
        if (!t) return;
        let {
          r,
          g,
          b,
          alpha
        } = t;
        return ((void 0 === alpha ? 255 : Math.round(255 * alpha)) << 24 | Math.round(255 * b) << 16 | Math.round(255 * g) << 8 | Math.round(255 * r)) >>> 0;
      }(i);
      if (void 0 !== o) t[s] = o;else if (n) reportError(_$$e.FPL, Error(`Failed to find valid value for color token ${s}, found ${i}`));else {
        captureMessage("Cannot fetch color tokens from CSS, CSS was not loaded");
        e.hasRunTokenSync.set(!0);
        return;
      }
    }
    e.currentTokens.set(t);
    e.hasRunTokenSync.set(!0);
  }
};
function T(e, t) {
  let r;
  if (t.startsWith("fs")) r = "color-" + t;else {
    let e = "color" + t.charAt(0).toUpperCase() + t.slice(1);
    r = camelToKebab(e).replace("desktop-backgrounded", "desktopBackgrounded").replace("desktop-foreground", "desktopForeground").replace("desktop-fullscreen", "desktopFullscreen");
  }
  return e.getPropertyValue(`--${r}`)?.trim() || void 0;
}
b2(A);
b2(_$$A);
b2(_$$A2);
b2(_$$A3);
let I = _$$A4("rgb");
export const _ = $$y0;
export const ky = $$b1;
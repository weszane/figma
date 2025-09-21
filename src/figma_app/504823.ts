import { jsx, Fragment } from "react/jsx-runtime";
import { useEffect, createContext, useContext, useMemo, useState, useCallback } from "react";
import { ColorSpaceEnum, ColorProfileEnum, colorManagementStateJs, webGPUBindings } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomValueAndSetter, AtomProvider } from "../figma_app/27355";
import { ap, WQ } from "../figma_app/149304";
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from "../905/751457";
import { fullscreenValue } from "../figma_app/455680";
import { l as _$$l } from "../figma_app/773170";
import { y4 } from "../figma_app/298277";
import { getObservableValue } from "../figma_app/84367";
import { dX } from "../figma_app/837840";
import { H } from "../905/769882";
import { j } from "../905/51490";
import { q } from "../figma_app/458300";
import { jK } from "../figma_app/829197";
let E = atom(!1);
function y(e) {
  let [t, r] = useAtomValueAndSetter(E);
  useEffect(() => {
    t && r(!1);
  }, [t, r]);
  return t ? null : jsx(Fragment, {
    children: e.children
  });
}
let T = createContext({
  canvasColorProfile: ColorSpaceEnum.SRGB,
  documentColorProfile: ColorProfileEnum.LEGACY,
  documentExportColorProfile: ColorSpaceEnum.SRGB
});
export function $$I3() {
  return useContext(T).canvasColorProfile;
}
export function $$S4() {
  return useContext(T).documentColorProfile;
}
export let $$v0 = T.Consumer;
function A(e) {
  let {
    children,
    colorManagementStateJs
  } = e;
  let s = getObservableValue(colorManagementStateJs?.documentColorProfile(), ColorProfileEnum.LEGACY);
  let o = H(s);
  let {
    colorProfilePreference
  } = jK();
  let d = useMemo(() => ({
    documentColorProfile: s,
    documentExportColorProfile: j(s, colorProfilePreference),
    canvasColorProfile: o
  }), [colorProfilePreference, s, o]);
  return jsx(T.Provider, {
    value: d,
    children
  });
}
export function $$x1(e) {
  jK();
  return jsx(A, {
    colorManagementStateJs: colorManagementStateJs,
    children: e.children
  });
}
function N({
  target: e,
  viewer: t
}) {
  let [r, n] = useState(null);
  let o = useCallback(() => {
    if (getFeatureFlags()?.fullscreen_use_threaded_rendering) return !1;
    if (r) return !0;
    if (webGPUBindings?.usingWebGPU()) return !1;
    let t = dX(e);
    if (t) {
      let r = null;
      switch (e) {
        case "fullscreen":
        case "mobile-viewer":
          r = ap() ? t.getContext("webgl2") : t.getContext("webgl");
          break;
        case "prototype":
        case "mirror":
          r = WQ() ? t.getContext("webgl2") : t.getContext("webgl");
      }
      n(r);
      return !0;
    }
    return !1;
  }, [e, r]);
  useEffect(() => {
    if (!o()) switch (e) {
      case "fullscreen":
      case "mobile-viewer":
        fullscreenValue.onReady().then(() => {
          o();
        });
        break;
      case "prototype":
      case "mirror":
        t && t.on("documentIsLoaded", () => {
          o();
        });
    }
  }, [o, e, t]);
  let d = $$I3();
  useEffect(() => {
    if (webGPUBindings?.usingWebGPU()) {
      _$$l.setCanvasColorProfile(d);
      return;
    }
    r && q.queueSwitchWebglColorSpace(r, d, e, t);
  }, [d, e, r, t]);
  return null;
}
function C({
  viewer: e,
  target: t
}) {
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: "color-management",
    fallback: errorBoundaryFallbackTypes.DEFAULT_FULL_PAGE,
    hasCustomWASMBuild: y4,
    children: jsx(AtomProvider, {
      children: jsx(y, {
        children: jsx($$x1, {
          children: jsx(N, {
            target: t,
            viewer: e
          })
        })
      })
    })
  });
}
export function $$w2() {
  return jsx(C, {
    target: "fullscreen"
  });
}
export const ZH = $$v0;
export const wG = $$x1;
export const ED = $$w2;
export const Ep = $$I3;
export const R6 = $$S4;
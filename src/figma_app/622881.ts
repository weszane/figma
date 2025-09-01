import { useState, useEffect, useMemo } from "react";
import { RYP } from "../figma_app/763686";
import { eD } from "../figma_app/876459";
import { n as _$$n } from "../905/347702";
export function $$o2(e) {
  switch (e) {
    case RYP.SRGB:
      return "srgb";
    case RYP.DISPLAY_P3:
      return "display-p3";
    default:
      throw Error(`unrecognized color profile: ${e}`);
  }
}
let l = e => {
  try {
    if (e === RYP.SRGB) return !0;
    let t = document.createElement("canvas").getContext("webgl");
    if (!t) throw Error("failed to create webgl canvas context to determine support");
    if (!("drawingBufferColorSpace" in t)) throw Error("webgl context does not contain drawingBufferColorSpace attribute");
    let r = $$o2(e);
    if (t.drawingBufferColorSpace = r, t.drawingBufferColorSpace !== r) throw Error(`webgl context does not support color space: ${r}`);
    return !0;
  } catch (e) {
    return !1;
  }
};
let d = new Map();
let c = _$$n(e => {
  if (d.has(e)) return d.get(e);
  let t = l(e);
  d.set(e, t);
  return t;
});
let u = _$$n(e => {
  try {
    if (e === RYP.SRGB) return !0;
    let t = document.createElement("canvas");
    let r = $$o2(e);
    let n = t.getContext("2d", {
      colorSpace: r
    });
    if (n) {
      if ("getContextAttributes" in n) {
        if (n.getContextAttributes().colorSpace !== r) throw Error("2d canvas context does not match the desired color space");
      } else throw Error("2d canvas context does not support getContextAttributes");
    } else throw Error("failed to create 2d canvas context to determine support");
    if ($$h3()) {
      let e = new ImageData(new Uint8ClampedArray([0, 0, 0, 0]), 1, 1, {
        colorSpace: r
      });
      if (!("colorSpace" in e) || e.colorSpace !== r) throw Error(`image does not support color space: ${r}`);
    }
    return !0;
  } catch (e) {
    return !1;
  }
});
let $$p1 = () => "undefined" != typeof CSS && "function" == typeof CSS.supports && CSS.supports("color", "color(display-p3 1 1 1)");
let _ = () => window.matchMedia("(color-gamut: p3)").matches;
let $$h3 = () => !$$p1();
async function m() {
  if (!eD) return;
  let e = await eD.getActiveNSScreens();
  if (e) {
    for (let t of e) if (!t.isCurrentWindow && t.canRepresentDisplayGamutP3) return t.localizedName;
  }
}
export function $$g4(e) {
  switch (e.status) {
    case "SupportedNatively":
    case "SupportedWithPolyfill":
      return !0;
    case "MonitorNotSupported":
    case "ClientNotSupported":
      return !1;
  }
}
let f = () => {
  let [e, t] = useState();
  useEffect(() => {
    m().then(t);
  }, []);
  return e;
};
let E = () => {
  let [e, t] = useState(_());
  useEffect(() => {
    let e = setInterval(() => {
      t(_());
    }, 5e3);
    return () => {
      clearInterval(e);
    };
  }, []);
  return e;
};
let y = () => eD && "unmanaged" === eD.getColorSpace();
export function $$b0() {
  let e = useMemo(() => c(RYP.DISPLAY_P3), []);
  let t = useMemo(() => u(RYP.DISPLAY_P3), []);
  let r = useMemo(() => $$p1(), []);
  let s = y();
  let o = f();
  let l = E();
  return e && t ? s ? {
    status: "ClientNotSupported",
    diagnostics: {
      client: "desktop-app",
      shouldRestartDesktopAppInManagedColorSpace: !0
    }
  } : l ? r ? {
    status: "SupportedNatively",
    diagnostics: null
  } : {
    status: "SupportedWithPolyfill",
    diagnostics: null
  } : {
    status: "MonitorNotSupported",
    diagnostics: {
      alternativeMonitorName: o
    }
  } : {
    status: "ClientNotSupported",
    diagnostics: {
      client: eD ? "desktop-app" : "browser"
    }
  };
}
export const Av = $$b0;
export const Pv = $$p1;
export const VG = $$o2;
export const p3 = $$h3;
export const tK = $$g4;
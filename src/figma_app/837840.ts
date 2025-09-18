import { getFeatureFlags } from "../905/601108";
import { logInfo } from "../905/714362";
import { shouldUsePolyfill } from "../figma_app/622881";
var s = (e => (e[e.Unknown = 0] = "Unknown", e[e.No = 1] = "No", e[e.Yes = 2] = "Yes", e))(s || {});
let o = 0;
export function $$l0(e, t) {
  if ("srgb" === t) return e.getContext("2d");
  {
    let r = shouldUsePolyfill();
    return e.getContext("2d", {
      colorSpace: r ? "srgb" : t
    });
  }
}
let d = document.createElement("canvas").getContext("2d", {
  colorSpace: "srgb",
  willReadFrequently: !0
})?.canvas;
export function $$c1({
  canvas: e,
  canvasWidth: t,
  canvasHeight: r,
  renderCanvas: l,
  value: c,
  colorSpace: u,
  initializeCanvasColorSpace: p = !1
}) {
  if (p && e.getContext("2d", {
    colorSpace: u
  }), (getFeatureFlags().ee_color_management_force_canvas || shouldUsePolyfill()) && 1 !== o) {
    if (d) {
      d.width = t;
      d.height = r;
      l(d, c);
      let u = d.getContext("2d");
      let p = e.getContext("2d");
      if (u && p) try {
        !function (e, t) {
          if (e.canvas.width !== t.canvas.width || e.canvas.height !== t.canvas.height) throw Error("source ctx and target ctx dimensions don't match");
          if ("getContextAttributes" in e && "srgb" !== e.getContextAttributes().colorSpace) throw Error("source ctx is not srgb");
          if ("getContextAttributes" in t && "display-p3" !== t.getContextAttributes().colorSpace && !(getFeatureFlags().ee_color_management_force_canvas && "srgb" === t.getContextAttributes().colorSpace)) throw Error("target ctx is not display-p3");
          let [r, i] = [t.canvas.width, t.canvas.height];
          let a = e.getImageData(0, 0, r, i);
          let s = new ImageData(a.data, a.width, a.height, {
            colorSpace: "getContextAttributes" in e ? t.getContextAttributes().colorSpace : "srgb"
          });
          t.clearRect(0, 0, r, i);
          t.putImageData(s, 0, 0);
        }(u, p);
        0 === o && (o = 2);
      } catch {
        logInfo("color management", "polyfill failed", {
          ee_color_management_force_canvas: getFeatureFlags().ee_color_management_force_canvas,
          shouldUseCssColorLevel4Polyfill: shouldUsePolyfill(),
          is2dCanvasPolyfillSupportedByBrowser: s[o]
        });
        l(e, c);
        o = 1;
      }
    }
  } else l(e, c);
}
export function $$u2(e) {
  switch (e) {
    case "fullscreen":
    case "mobile-viewer":
      return document.querySelector("#fullscreen-root canvas");
    case "prototype":
      return document.querySelector("#viewerContainer canvas");
    case "mirror":
      return document.querySelector("#mobileAppView canvas");
  }
}
export const Eh = $$l0;
export const dM = $$c1;
export const dX = $$u2;
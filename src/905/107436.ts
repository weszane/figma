import { useMemo, useState, useRef } from "react";
import { NVY } from "../figma_app/763686";
import { oB, qN } from "../figma_app/273493";
import { useLocalStorageSync } from "../905/657224";
import { sN } from "../figma_app/191804";
import { parsePxNumber } from "../figma_app/783094";
import { f as _$$f } from "../905/24905";
import { Fk } from "../figma_app/167249";
import { j$, cZ, xm } from "../905/936278";
import { MX, L$, NT, mi } from "../905/989106";
import { X7 } from "../905/713167";
import { ZT, $7 } from "../905/306220";
import { LfD, cSS } from "../figma_app/27776";
let f = parsePxNumber(LfD);
let _ = parsePxNumber(cSS);
var $$A4 = (e => (e.AA = "AA", e.AAA = "AAA", e))($$A4 || {});
var $$y5 = (e => (e.largeText = "largeText", e.normalText = "normalText", e.graphics = "graphics", e.mixed = "mixed", e))($$y5 || {});
var $$b3 = (e => (e.auto = "auto", e))($$b3 || {});
let v = {
  normalText: {
    AA: 4.5,
    AAA: 7
  },
  largeText: {
    AA: 3,
    AAA: 4.5
  },
  graphics: {
    AA: 3,
    AAA: null
  },
  mixed: {
    AA: 3,
    AAA: 4.5
  }
};
function I(e) {
  let {
    r: _r,
    g,
    b,
    a
  } = e ?? {};
  return useMemo(() => {
    if (void 0 !== _r && void 0 !== g && void 0 !== b && void 0 !== a) return {
      r: Math.round(255 * _r) / 255,
      g: Math.round(255 * g) / 255,
      b: Math.round(255 * b) / 255,
      a: Math.round(255 * a) / 255
    };
  }, [_r, g, b, a]);
}
export function $$E6(e, t, i, o) {
  let l = Fk(e => e.getDirectlySelectedNodes().map(e => e.guid));
  let d = o ?? l;
  let [g, A] = useState(void 0);
  let [y, b] = useState(void 0);
  let [v, E] = useState(j$.LOADING);
  let [C, T] = useState(!1);
  let k = !!e;
  let R = X7() && k;
  let N = function (e) {
    let [t, i] = useLocalStorageSync("color_picker_show_color_contrast", !1);
    let [r, a] = useLocalStorageSync("color_picker_color_contrast_level", "AA");
    let [o, l] = useState("auto");
    let d = function (e) {
      let {
        nodeTypes,
        styledTextSegments
      } = Fk((e, t) => t ? {
        nodeTypes: t.map(t => e.get(t)?.type),
        styledTextSegments: t.map(t => {
          let i = e.get(t);
          if (i?.type === "TEXT") return i.getStyledTextSegments(["fontSize", "fontWeight"]);
        })
      } : {}, e);
      if (1 === e.length) {
        let e = nodeTypes?.[0];
        let n = styledTextSegments?.[0];
        return new Set(e ? [$$S1(e, n)] : ["graphics"]);
      }
      return new Set(nodeTypes ? nodeTypes.map((e, t) => $$S1(e, styledTextSegments?.[t])) : ["graphics"]);
    }(e);
    let u = 1 === d.size ? d.values().next().value : "mixed";
    let p = $$x2(o, d);
    let m = "graphics" === o || "auto" === o && "graphics" === u;
    let h = m ? "AA" : r;
    return useMemo(() => ({
      contrastInfoShown: t,
      setIsColorContrastInfoShown: i,
      contrastLevelSelected: r,
      contrastLevelForCategory: h,
      setContrastLevelSelected: a,
      categorySelected: o,
      setCategorySelected: l,
      layerType: u,
      contrastRatios: p,
      isGraphics: m
    }), [t, m, i, r, h, a, o, u, p]);
  }(d);
  let P = function (e, t) {
    let i = Fk((e, t) => {
      if (t) return t.map(t => e.get(t)?.blendMode).filter(e => void 0 !== e);
    }, t);
    return i?.some(e => "NORMAL" !== e && "PASS_THROUGH" !== e) || e?.blendMode !== "NORMAL";
  }(e, d);
  let {
    foregroundColor,
    backgroundColor,
    backgroundPaint,
    preciseForegroundColor,
    preciseBackgroundColor,
    unavailableReason
  } = function (e, t, i, r, a) {
    let s = useMemo(() => {
      if (e) return {
        r: e.color.r,
        g: e.color.g,
        b: e.color.b,
        a: e.opacity * e.color.a
      };
    }, [e]);
    let {
      blendedBackground,
      unavailableReason: _unavailableReason
    } = cZ(t, i, r, a);
    let d = I(s);
    let c = I(blendedBackground);
    let p = useMemo(() => {
      if (c) return {
        type: "SOLID",
        color: c,
        opacity: c.a
      };
    }, [c]);
    return useMemo(() => ({
      foregroundColor: s,
      backgroundColor: blendedBackground,
      preciseForegroundColor: d,
      preciseBackgroundColor: c,
      backgroundPaint: p,
      unavailableReason: _unavailableReason
    }), [s, blendedBackground, d, c, p, _unavailableReason]);
  }(e, k, d, E, C);
  let U = P ? xm.BlendModeInForeground : void 0 === N.contrastRatios ? xm.MixedStandards : void 0;
  let B = unavailableReason ?? U;
  let {
    contrast,
    aaPass,
    aaaPass
  } = $$w0(preciseForegroundColor, preciseBackgroundColor, N.contrastRatios?.AA, N.contrastRatios?.AAA);
  let H = useRef(null);
  let W = void 0 !== aaPass && void 0 !== aaaPass && !!("AA" === N.contrastLevelForCategory && aaPass || "AAA" === N.contrastLevelForCategory && aaaPass);
  let K = MX(t, t, N.contrastRatios?.AA ?? 0, g, y, preciseBackgroundColor, i);
  let Y = MX(t, t, N.contrastRatios?.AAA ?? 0, g, y, preciseBackgroundColor, i);
  let [q, $] = useState(!1);
  let [Z, X] = useState(!1);
  let Q = useMemo(() => {
    if (!k) return null;
    let e = N.contrastRatios?.[N.contrastLevelForCategory] ?? null;
    return !W && foregroundColor && backgroundColor && null !== e && void 0 !== g && void 0 !== y ? L$({
      contrastRatio: e,
      fgHue: g,
      fgAlpha: y,
      fgColor: foregroundColor,
      bgColor: backgroundColor
    }) : null;
  }, [N.contrastRatios, N.contrastLevelForCategory, W, foregroundColor, backgroundColor, g, y, k]);
  let J = useMemo(() => {
    if (!Q || !foregroundColor) return {
      top: 0,
      left: 0,
      originalTop: 0,
      originalLeft: 0
    };
    let e = i === NVY.HSL ? oB(Q) : qN(Q);
    let n = e.s;
    let s = i === NVY.HSL ? e.l : e.v;
    let o = i === NVY.HSL ? oB(foregroundColor) : qN(foregroundColor);
    let l = o.s;
    let d = i === NVY.HSL ? o.l : o.v;
    let c = f / 2 + _;
    let u = ZT / 2 - $7;
    return {
      top: NT(s, t) - c,
      left: mi(n, t) - c,
      originalTop: NT(d, t) - u,
      originalLeft: mi(l, t) - u
    };
  }, [Q, i, t, foregroundColor]);
  let ee = contrast?.toFixed(2);
  let et = !N.contrastRatios || !preciseForegroundColor || !preciseBackgroundColor || !ee || P;
  return useMemo(() => ({
    colorContrastInfo: {
      foregroundColor: preciseForegroundColor,
      backgroundColor: preciseBackgroundColor,
      backgroundPaint,
      autoCorrectCandidate: Q,
      autoCorrectCandidatePosition: J,
      showColorSwatchInfoFlyout: q,
      setShowColorSwatchInfoFlyout: $,
      showAutocorrectPreview: Z,
      setShowAutocorrectPreview: X,
      contrast,
      contrastDisplayValue: ee,
      contrastRowRef: H,
      aaPass,
      aaaPass,
      standardMet: W,
      contrastLines: {
        AA: K,
        AAA: Y
      },
      setFgHue: A,
      setFgAlpha: b
    },
    settings: N,
    showColorContrast: R,
    pickerSize: t,
    isUnavailable: et,
    toolStatus: v,
    unavailableReason: B,
    setIgnoreTimeout: T
  }), [preciseForegroundColor, preciseBackgroundColor, backgroundPaint, Q, J, q, $, Z, X, contrast, ee, aaPass, aaaPass, W, K, Y, N, R, t, et, v, B, T]);
}
export function $$x2(e, t) {
  return "auto" !== e ? v[e] : 1 === t.size ? v[t.values().next().value] : t.has("normalText") ? void 0 : v.mixed;
}
export function $$S1(e, t) {
  return "TEXT" === e ? t && t.length > 0 && t.every(e => (e.fontSize ?? 0) >= 24 || (e.fontSize ?? 0) >= 19 && (e.fontWeight ?? 0) >= 700) ? "largeText" : "normalText" : "graphics";
}
export function $$w0(e, t, i, n) {
  if (!e || !t || void 0 === i || void 0 === n) return {};
  let r = sN(t, e);
  let a = parseFloat(_$$f(r, t).toFixed(2));
  return {
    contrast: a,
    aaPass: a >= i,
    aaaPass: n ? a >= n : null
  };
}
export const Ef = $$w0;
export const J3 = $$S1;
export const JJ = $$x2;
export const Zf = $$b3;
export const bm = $$A4;
export const mb = $$y5;
export const s2 = $$E6;
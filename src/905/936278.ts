import { useMemo, useState, useRef, useCallback, useEffect } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { getSingletonSceneGraph } from "../905/700578";
import { AW, sN } from "../figma_app/191804";
import { hC } from "../figma_app/901889";
import { $D } from "../905/11";
import { Lg } from "../figma_app/257275";
import { sb, bn } from "../figma_app/385874";
import { Fk } from "../figma_app/167249";
import { X7 } from "../905/713167";
var $$m2 = (e => (e.LOADING = "LOADING", e.LOADED = "LOADED", e.TIMED_OUT = "TIMED_OUT", e))($$m2 || {});
var $$h3 = (e => (e.TextInBackground = "TextInBackground", e.VideoInBackground = "VideoInBackground", e.ImageInBackground = "ImageInBackground", e.GradientInBackground = "GradientInBackground", e.BlendModeInBackground = "BlendModeInBackground", e.BlendModeInForeground = "BlendModeInForeground", e.MixedBackgrounds = "MixedBackgrounds", e.MixedStandards = "MixedStandards", e.Unavailable = "Unavailable", e))($$h3 || {});
function g(e) {
  return {
    x: e.x,
    y: e.y,
    xWidth: e.x + e.w,
    yHeight: e.y + e.h
  };
}
function f(e, t) {
  let {
    x,
    xWidth,
    y,
    yHeight
  } = g(e);
  let {
    x: _x,
    xWidth: _xWidth,
    y: _y,
    yHeight: _yHeight
  } = g(t);
  return !(x >= _xWidth) && !(xWidth <= _x) && !(y >= _yHeight) && !(yHeight <= _y);
}
export function $$_4(e, t, i) {
  if (!t || !i || !e) return [];
  let {
    nodes
  } = function e(t, i, n) {
    let r = [];
    let s = !1;
    let o = getSingletonSceneGraph().get(t);
    if (!o) return {
      nodes: r,
      stopSearching: !0
    };
    for (let t of ("CANVAS" === o.type && r.push(o), o.childrenNodes)) {
      if (t.guid === n) return {
        nodes: r,
        stopSearching: !0
      };
      if (!f(i, t.absoluteBoundingBox) || !t.visible || 0 === t.opacity) continue;
      r.push(t);
      let {
        nodes: _nodes,
        stopSearching
      } = e(t.guid, i, n);
      for (let e of _nodes) r.push(e);
      if (stopSearching) {
        s = stopSearching;
        break;
      }
    }
    return {
      nodes: r,
      stopSearching: s
    };
  }(e, t, i);
  return nodes;
}
export function $$A0(e, t, i, r) {
  return function (e, t, i) {
    let r = X7();
    let a = hC();
    return useMemo(() => {
      let n;
      let s;
      if (void 0 === e) return {
        blendedBackground: void 0,
        unavailableReason: void 0
      };
      if (!r || !t || 0 === e.length) {
        i(e => "TIMED_OUT" === e ? e : "LOADED");
        return {
          blendedBackground: void 0,
          unavailableReason: "Unavailable"
        };
      }
      let o = performance.now();
      for (let t of e) {
        let {
          blendedBackground,
          unavailableReason
        } = $$y1(t);
        if (s = s ?? unavailableReason, blendedBackground && void 0 === n) n = blendedBackground;else if (blendedBackground && void 0 !== n && n.r === blendedBackground.r && n.g === blendedBackground.g && n.b === blendedBackground.b && n.a === blendedBackground.a) continue;else {
          a("color_contrast.background_blend_performance", {
            duration: performance.now() - o
          });
          i("LOADED");
          return {
            blendedBackground: void 0,
            unavailableReason: s ?? "MixedBackgrounds"
          };
        }
      }
      a("color_contrast.background_blend_performance", {
        duration: performance.now() - o
      });
      i("LOADED");
      return {
        blendedBackground: n,
        unavailableReason: s
      };
    }, [r, t, e, a, i]);
  }(function (e, t, i, r) {
    let a = Fk((e, t) => t.map(t => e.get(t)?.absoluteBoundingBox), e);
    let s = Fk(e => e.getCurrentPage()?.guid);
    let l = hC();
    let c = !Lg() && e.length > 1;
    let p = useMemo(() => {
      if (!c) {
        if (!s || !t || a.length > 1 && !Lg()) return [];
        let i = performance.now();
        let n = a.map((t, i) => $$_4(s, t, e[i]));
        l("color_contrast.background_calculation_performance", {
          duration: performance.now() - i,
          isAsync: !1
        });
        return n;
      }
    }, [s, a, e, t, l, c]);
    let [m, h] = useState(void 0);
    let g = useRef(!1);
    let f = useRef(0);
    let A = useCallback((t, n) => new Promise(o => {
      if (!a.length) {
        h([]);
        o();
        return;
      }
      requestAnimationFrame(() => {
        let d = performance.now() - f.current;
        let c = !r && d > 3e3;
        if (c || g.current) {
          h([]);
          c && (l("color_contrast.background_calculation_timeout", {
            numberOfNodes: e.length
          }), i("TIMED_OUT"));
          o();
          return;
        }
        let u = $$_4(s, a[t], e[t]);
        n.push(u);
        let p = t + 1;
        if (p < a.length) A(p, n).then(o);else {
          if (g.current) h([]);else {
            h(n);
            let e = performance.now();
            0 !== f.current && l("color_contrast.background_calculation_performance", {
              duration: e - f.current,
              isAsync: !0
            });
          }
          o();
        }
      });
    }), [a, e, s, l, r, i]);
    useEffect(() => {
      if (c && t) {
        g.current = !1;
        f.current = performance.now();
        i("LOADING");
        A(0, []);
        return () => {
          g.current = !0;
        };
      }
    }, [c, t, A, i]);
    useEffect(() => {
      t || (h(void 0), i("LOADING"), g.current = !0);
    }, [t, i]);
    return p ?? m;
  }(t, e, i, r), e, i);
}
export function $$y1(e) {
  let t;
  let i = e.reverse();
  let n = [];
  for (let e of i) {
    if ("CANVAS" === e.type) {
      n.push(e.backgroundPaints.data);
      break;
    }
    let i = function (e) {
      let t;
      let i = !1;
      let n = !0;
      let r = !0;
      let a = !1;
      if (!e) return null;
      let s = "PASS_THROUGH" !== e.blendMode && "NORMAL" !== e.blendMode;
      for (let s = e.fills.length - 1; s >= 0; s--) {
        let d = e.fills[s];
        let u = sb(d?.type);
        let p = d?.opacity === 1 && d?.color?.a === 1;
        if (d?.visible && d?.opacity !== 0) {
          if (u && "NORMAL" === d.blendMode) {
            if (i = !0, n = !1, r = r && (d?.opacity !== 1 || d?.color?.a !== 1), p) break;
          } else {
            var o;
            var l;
            a = !0;
            i = !1;
            n = !1;
            r = !1;
            o = d.type;
            l = d.blendMode;
            t = "VIDEO" === o ? "VideoInBackground" : "IMAGE" === o ? "ImageInBackground" : bn(o) ? "GradientInBackground" : l && "NORMAL" !== l && "PASS_THROUGH" !== l ? "BlendModeInBackground" : "Unavailable";
            break;
          }
        }
      }
      return {
        hasSolidColor: i,
        isTransparent: n || !e.visible || 0 === e.opacity,
        isTranslucent: r || 1 !== e.opacity,
        isComplex: a || s,
        complexReason: t ?? (s ? "BlendModeInBackground" : void 0)
      };
    }(e);
    if (i?.isComplex || "TEXT" === e.type) return {
      unavailableReason: "TEXT" === e.type ? "TextInBackground" : i?.complexReason
    };
    if (i?.hasSolidColor && !i.isTransparent) {
      if (!(!t || f(t, e.absoluteBoundingBox))) continue;
      if (n.push(e.fills), t) {
        let i = Math.max(t.x, e.absoluteBoundingBox.x);
        let n = Math.max(t.y, e.absoluteBoundingBox.y);
        let a = Math.min(t.x + t.w, e.absoluteBoundingBox.x + e.absoluteBoundingBox.w);
        let s = Math.min(t.y + t.h, e.absoluteBoundingBox.y + e.absoluteBoundingBox.h);
        let o = a - i;
        let d = s - n;
        o > 0 && d > 0 ? t = {
          x: i,
          y: n,
          w: o,
          h: d
        } : $D(_$$e.EDITOR_USABILITY, Error("Background nodes do not overlap"));
      } else t = e.absoluteBoundingBox;
    }
    if (!i?.isTransparent && !i?.isTranslucent) break;
  }
  return {
    blendedBackground: function (e) {
      let t = e.map(e => {
        let t = e.filter(e => sb(e.type)).filter(e => e.visible).map(e => e.opacity && e.color ? {
          ...e,
          color: {
            ...e.color,
            a: e.opacity
          }
        } : e);
        return AW(t);
      }).filter(e => void 0 !== e).reverse();
      if (0 !== t.length) return sN(...t);
    }(n)
  };
}
export const cZ = $$A0;
export const f3 = $$y1;
export const j$ = $$m2;
export const xm = $$h3;
export const xv = $$_4;
import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useContext, useMemo } from "react";
import { useSelector } from "react-redux";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import l from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { Point } from "../905/736624";
import { UK } from "../figma_app/740163";
import { normalizeValue } from "../905/216495";
import { kl } from "../905/275640";
import { _X, Z0 } from "../figma_app/62612";
import { getObservableOrFallback } from "../figma_app/84367";
import { viewportNavigatorContext } from "../figma_app/298911";
import { symbolUsageEnum } from "../figma_app/198712";
import { p as _$$p } from "../figma_app/372802";
import { y9S } from "../figma_app/27776";
var d = l;
let _ = "offscreen_indicators--indicatorGraphicBlue---nYr-";
let T = "offscreen_indicators--indicatorGraphicPurple--FAz-M";
let k = parsePxNumber(y9S);
export function $$E0() {
  let e = [];
  let t = kl("selectionRegions");
  let s = normalizeValue(t);
  s && (e = s);
  let r = useSelector(e => e.mirror.appModel.hoveredNode);
  if (r && getFeatureFlags().ce_offscreen_indicators_for_hovered_nodes) {
    let t = getSingletonSceneGraph().get(r);
    if (t) {
      let s = t.absoluteBoundingBox;
      e = [...e, {
        bounds: {
          height: s.h,
          width: s.w,
          x: s.x,
          y: s.y
        },
        regionType: t.isPrimaryInstance || t.isInstanceSublayer || t.isComponentish || t.isSymbolSublayer ? symbolUsageEnum.SYMBOLS_ONLY : symbolUsageEnum.MIXED_OR_NO_SYMBOLS
      }];
    }
  }
  let l = !!e && e.length >= 1;
  let d = _X({
    subscribeToUpdates_expensive: l
  });
  return d && e ? jsx(S, {
    viewportInfo: d,
    regions: e
  }) : null;
}
function S({
  viewportInfo: e,
  regions: t
}) {
  let s = useContext(viewportNavigatorContext);
  let i = useMemo(() => s.getCommentsWrapperOffset(e), [s, e]);
  let o = i.x;
  let l = i.y;
  let d = {
    transform: `translate(${o}px, ${l}px)`
  };
  let c = useSelector(e => e.mirror?.appModel.showUi);
  let u = getObservableOrFallback(UK().renderRulers) && c ? k : 0;
  let p = {
    x: -3.5 + u,
    y: -3.5 + u,
    width: e.width - -7 - u,
    height: e.height - -7 - u
  };
  let g = {
    x: -3.5 + u,
    y: -3.5 + u,
    width: e.width - -7 - u,
    height: e.height - -7 - u
  };
  return jsx(Fragment, {
    children: jsx(_$$p, {
      children: jsx("div", {
        "aria-hidden": !0,
        "data-forward-events-to-fullscreen": !0,
        className: "offscreen_indicators--overlay--pNOlw",
        style: d,
        children: !!t?.length && jsx("div", {
          children: t.map((t, s) => {
            let r = Z0(e, {
              x: t.bounds.x,
              y: t.bounds.y
            });
            let a = Z0(e, {
              x: t.bounds.x + t.bounds.width,
              y: t.bounds.y + t.bounds.height
            });
            let i = {
              x: r.x,
              y: r.y,
              width: a.x - r.x,
              height: a.y - r.y
            };
            return i.x < p.x + p.width && i.x + i.width > p.x && i.y + i.height > p.y && i.y < p.y + p.height ? null : jsx(w, {
              viewportBounds: g,
              viewportInfo: e,
              indicatorViewportBounds: i,
              selectionBoundsScaledWidth: function (e, t) {
                let s = Math.max(e.x, t.x);
                return Math.max(Math.min(e.x + e.width, t.x + t.width) - s, 10);
              }(i, g),
              selectionBoundsScaledHeight: function (e, t) {
                let s = Math.max(e.y, t.y);
                return Math.max(Math.min(e.y + e.height, t.y + t.height) - s, 10);
              }(i, g),
              selectionRegionType: t.regionType
            }, s);
          })
        })
      })
    })
  });
}
function w({
  viewportBounds: e,
  viewportInfo: t,
  indicatorViewportBounds: s,
  selectionBoundsScaledWidth: r,
  selectionBoundsScaledHeight: i,
  selectionRegionType: o
}) {
  let l = function (e, t) {
    let s = 0 - t.x;
    let n = 0 + e.width - t.x;
    let r = 0 - t.y;
    let a = 0 + e.height - t.y;
    let i = Math.abs(s) < n ? s : n;
    let o = Math.abs(r) < a ? r : a;
    let l = s < 0 != n < 0;
    let d = r < 0 != a < 0;
    return l && d ? Math.abs(i) < Math.abs(o) ? {
      x: t.x + i,
      y: t.y
    } : {
      x: t.x,
      y: t.y + o
    } : !l && d ? {
      x: t.x + i,
      y: t.y
    } : l && !d ? {
      x: t.x,
      y: t.y + o
    } : {
      x: t.x + i,
      y: t.y + o
    };
  }(t, {
    x: s.x + s.width / 2,
    y: s.y + s.height / 2
  });
  l.x -= r / 2;
  l.y -= i / 2;
  let c = useSelector(e => e.mirror?.appModel.showUi);
  let p = getObservableOrFallback(UK().renderRulers) && c ? k : 0;
  let g = 1 + p;
  let y = Math.max(g, t.width - 1 - r);
  let f = 1 + p;
  let x = Math.max(f, t.height - 1 - i - 1);
  let v = Point.bound(l, {
    min: {
      x: g,
      y: f
    },
    max: {
      x: y,
      y: x
    }
  });
  let E = s.y + s.height < e.y;
  let S = s.y > e.y + e.height;
  let w = s.x + s.width < e.x;
  let N = s.x > e.x + e.width;
  v.x += t.x;
  v.y += t.y;
  let I = Math.min(t.width - 2, r);
  let C = Math.min(t.height - 2, i);
  return jsxs("div", {
    className: "offscreen_indicators--indicator---T9xk",
    style: {
      transform: `translate3D(${v.x}px, ${v.y}px, 0)`
    },
    children: [(E || S) && jsx("div", {
      style: {
        position: "absolute",
        height: 1.5,
        width: I,
        marginTop: S ? C - 1.5 : 0
      },
      className: d()({
        [_]: o === symbolUsageEnum.MIXED_OR_NO_SYMBOLS,
        [T]: o === symbolUsageEnum.SYMBOLS_ONLY
      })
    }), (w || N) && jsx("div", {
      style: {
        position: "absolute",
        left: 0,
        height: C,
        width: 1.5,
        marginLeft: N ? I - 1.5 : 0
      },
      className: d()({
        [_]: o === symbolUsageEnum.MIXED_OR_NO_SYMBOLS,
        [T]: o === symbolUsageEnum.SYMBOLS_ONLY
      })
    })]
  });
}
export const Z = $$E0;

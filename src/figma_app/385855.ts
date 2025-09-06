import { jsx } from "react/jsx-runtime";
import { useState, useCallback, useLayoutEffect } from "react";
import { C } from "../905/222694";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import o from "classnames";
import { A as _$$A } from "../905/920142";
import { B } from "../905/907815";
import { oW } from "../905/675859";
import { A as _$$A2 } from "../905/222027";
import { q } from "../905/600041";
import { F, y as _$$y } from "../905/171275";
import { s as _$$s } from "../cssbuilder/589278";
import { J } from "../905/337735";
import { Kf, _k, gc, pQ } from "../905/188961";
var l = o;
let E = atom({});
export function $$y0({
  thumbnailUrl: e,
  thumbnailType: t,
  lastTouchedAt: r,
  clientMeta: o,
  size: y,
  borderRadius: b,
  noBorder: T,
  addtlStyles: I,
  draggable: S,
  disableSmartBackground: v,
  hideUntilLoaded: A = !0
}) {
  let x = !v && t !== F.DEFAULT_DESIGN && t !== F.DEFAULT_WHITEBOARD && t !== F.SLIDES && t !== F.COOPER;
  let {
    latestThumbnailUrl,
    smartBackgroundColor
  } = function ({
    touchedAt: e,
    thumbnailUrl: t,
    needsSmartBackground: r
  }) {
    let [n, a] = useAtomValueAndSetter(E);
    let o = !e || _$$A(e).isBefore(_$$A().subtract(4, "seconds"));
    let l = !r || t && !!n[t];
    let [c, u] = useState(o && t && l ? t : null);
    let p = useCallback(e => {
      if (!r || n[e]) u(e);else {
        let t = new Image();
        t.crossOrigin = "anonymous";
        t.className = _$$s.fixed.hidden.$;
        t.onload = () => {
          let r = J(t);
          r && a(t => ({
            ...t,
            [e]: r
          }));
          u(e);
          t.remove();
        };
        t.src = e;
        document.body.appendChild(t);
      }
    }, [u, r, n, a]);
    useLayoutEffect(() => {
      if (t) {
        if (e) {
          let r = _$$A(e).diff(_$$A().subtract(4, "seconds"));
          if (r <= 0) {
            p(t);
            return;
          }
          {
            let e = setTimeout(() => {
              p(t);
            }, r);
            return () => clearTimeout(e);
          }
        }
        p(t);
      } else u(null);
    }, [e, t, p]);
    let _ = r && c ? n[c] : void 0;
    return {
      latestThumbnailUrl: c,
      smartBackgroundColor: _
    };
  }({
    thumbnailUrl: e,
    touchedAt: r,
    needsSmartBackground: x
  });
  if (t === F.OFFLINE) return jsx(_$$A2, {
    size: y,
    borderRadius: b,
    noBorder: T
  });
  let w = t !== F.SLIDES ? C(o) : void 0;
  let O = t === F.DEFAULT_DESIGN || t === F.DEFAULT_WHITEBOARD || t === F.COOPER;
  return jsx(q, {
    borderRadius: b,
    backgroundClassName: l()({
      [Kf]: t === F.WHITEBOARD || t === F.DEFAULT_WHITEBOARD,
      [_k]: t === F.DEFAULT_DESIGN && (!w || "transparent" === w),
      [gc]: t === F.PROTOTYPE || t === F.SLIDES || t === F.SITES && !(x && smartBackgroundColor) && (!w || "transparent" === w)
    }),
    noBorder: T,
    backgroundColor: x ? smartBackgroundColor : w,
    children: null !== latestThumbnailUrl && jsx(B, {
      enabled: A,
      children: jsx(oW, {
        src: latestThumbnailUrl,
        alt: "",
        draggable: !!S,
        className: l()(_$$s.hFull.wFull.$, pQ, {
          [_$$s.p10.$]: O && y !== _$$y.SMALL,
          [_$$s.p4.$]: O && y === _$$y.SMALL,
          [_$$s.py12.$]: O && t === F.COOPER,
          [_$$s.px6.$]: O && t === F.COOPER
        }),
        ...(v ? {} : {
          crossOrigin: "anonymous"
        }),
        additionalTrackingProperties: {
          thumbnailFileType: t
        },
        style: I
      })
    })
  });
}
export const V = $$y0;
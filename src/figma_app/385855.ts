import { jsx } from "react/jsx-runtime";
import { useState, useCallback, useLayoutEffect } from "react";
import { convertToRgba } from "../905/222694";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import o from "classnames";
import { dayjs } from "../905/920142";
import { ImageLoadManager } from "../905/907815";
import { WAFImage } from "../905/675859";
import { A as _$$A2 } from "../905/222027";
import { ThumbnailContainer } from "../905/600041";
import { DesignsList, SizeOption } from "../905/171275";
import { cssBuilderInstance } from "../cssbuilder/589278";
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
  let x = !v && t !== DesignsList.DEFAULT_DESIGN && t !== DesignsList.DEFAULT_WHITEBOARD && t !== DesignsList.SLIDES && t !== DesignsList.COOPER;
  let {
    latestThumbnailUrl,
    smartBackgroundColor
  } = function ({
    touchedAt: e,
    thumbnailUrl: t,
    needsSmartBackground: r
  }) {
    let [n, a] = useAtomValueAndSetter(E);
    let o = !e || dayjs(e).isBefore(dayjs().subtract(4, "seconds"));
    let l = !r || t && !!n[t];
    let [c, u] = useState(o && t && l ? t : null);
    let p = useCallback(e => {
      if (!r || n[e]) u(e);else {
        let t = new Image();
        t.crossOrigin = "anonymous";
        t.className = cssBuilderInstance.fixed.hidden.$;
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
          let r = dayjs(e).diff(dayjs().subtract(4, "seconds"));
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
  if (t === DesignsList.OFFLINE) return jsx(_$$A2, {
    size: y,
    borderRadius: b,
    noBorder: T
  });
  let w = t !== DesignsList.SLIDES ? convertToRgba(o) : void 0;
  let O = t === DesignsList.DEFAULT_DESIGN || t === DesignsList.DEFAULT_WHITEBOARD || t === DesignsList.COOPER;
  return jsx(ThumbnailContainer, {
    borderRadius: b,
    backgroundClassName: l()({
      [Kf]: t === DesignsList.WHITEBOARD || t === DesignsList.DEFAULT_WHITEBOARD,
      [_k]: t === DesignsList.DEFAULT_DESIGN && (!w || "transparent" === w),
      [gc]: t === DesignsList.PROTOTYPE || t === DesignsList.SLIDES || t === DesignsList.SITES && !(x && smartBackgroundColor) && (!w || "transparent" === w)
    }),
    noBorder: T,
    backgroundColor: x ? smartBackgroundColor : w,
    children: null !== latestThumbnailUrl && jsx(ImageLoadManager, {
      enabled: A,
      children: jsx(WAFImage, {
        src: latestThumbnailUrl,
        alt: "",
        draggable: !!S,
        className: l()(cssBuilderInstance.hFull.wFull.$, pQ, {
          [cssBuilderInstance.p10.$]: O && y !== SizeOption.SMALL,
          [cssBuilderInstance.p4.$]: O && y === SizeOption.SMALL,
          [cssBuilderInstance.py12.$]: O && t === DesignsList.COOPER,
          [cssBuilderInstance.px6.$]: O && t === DesignsList.COOPER
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
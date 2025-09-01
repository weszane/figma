import { useContext, useRef, useCallback } from "react";
import { yQ } from "../905/236856";
import { A } from "../vendor/90566";
import { am } from "../figma_app/901889";
import { viewportNavigatorContext } from "../figma_app/298911";
export function $$l0(e) {
  let t = useContext(viewportNavigatorContext);
  let i = useRef();
  let l = useRef();
  let d = useRef(0);
  let c = am();
  let u = useCallback(e => {
    let i = t.getViewportInfo();
    return !!(5 > Math.abs(i.offsetX - e.centerX) && 5 > Math.abs(i.offsetY - e.centerY) && .1 > Math.abs(i.zoomScale - e.scale));
  }, [t]);
  let p = useCallback(async (n, a = {}) => {
    i.current?.abort();
    let s = t => {
      e && c(e, {
        ...t,
        ...a.additionalTrackEventParams
      });
    };
    if (n instanceof Promise && (n = await n, await yQ()), !n || !a.alwaysNavToSimilarViewport && u(n)) {
      s();
      i.current = void 0;
      return;
    }
    let o = l.current;
    if (a.jumpOnAbort && o && d.current > 0) {
      let e = {
        x: o.centerX,
        y: o.centerY
      };
      t.setZoomScale(t.getViewportInfo().zoomScale, o.scale);
      t.setCanvasSpaceCenter(e, t.getViewportInfo(), o.scale);
    }
    i.current = new AbortController();
    let p = {
      x: n.centerX,
      y: n.centerY
    };
    l.current = n;
    d.current += 1;
    await t.navigateTo(p, n.scale, {
      duration: a.jump ? 0 : 400,
      signal: i.current.signal,
      delay: a.delay,
      metricsCallback: s
    }).then(() => {
      d.current -= 1;
    });
  }, [u, e, c, t]);
  return A(p, 50, {
    leading: !0
  });
}
export const Z = $$l0;
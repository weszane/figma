import { useState, useEffect } from "react";
import { BackgroundPattern, ImageExportType } from "../figma_app/763686";
import a from "../vendor/879378";
import { Point } from "../905/736624";
import { fullscreenValue } from "../figma_app/455680";
import { getImageManager } from "../figma_app/624361";
import { _G, Pv } from "../905/619652";
var s = a;
export function $$u0({
  nodeId: e,
  width: t,
  height: i,
  shouldSkip: a,
  updateOnSceneGraphChange: d = !1,
  transparentBackground: u = !1
}) {
  let [p, h] = useState(null);
  useEffect(() => {
    if (a) {
      h(null);
      return;
    }
    let r = null;
    let p = () => {
      r && (r.abort(), r = null);
    };
    let m = () => {
      let r = _G(new Point(t, i), e, !0, u ? BackgroundPattern.TRANSPARENT : void 0);
      r && r.pixels && r.pixelSize && r.displaySize && h({
        src: Pv(r.pixels, r.pixelSize),
        displaySize: r.displaySize
      });
    };
    h(null);
    let f = () => {
      p();
      r = new TaskController({
        priority: "user-visible"
      });
      scheduler.postTask(m, {
        signal: r.signal
      });
    };
    let g = s()(f, 200, {
      trailing: !0,
      leading: !1
    });
    f();
    d && fullscreenValue.fromFullscreen.on("sceneGraphMirrorUpdate", g);
    return () => {
      p();
      g.cancel();
      d && fullscreenValue.fromFullscreen.removeListener("sceneGraphMirrorUpdate", g);
    };
  }, [e, t, i, a, d, u]);
  return p;
}
let p = {};
export function $$h1({
  nodeId: e,
  width: t,
  height: i,
  version: a,
  reason: s,
  shouldSkip: l,
  regenerateAfterImagesLoaded: u,
  isDevModeBlendedSection: h = !1,
  fileKey: m,
  shouldCache: f = !0
}) {
  let [g, _] = useState(!1);
  let [x, y] = useState(null);
  let [b, C] = useState(0);
  let v = function ({
    fileKey: e,
    nodeId: t,
    width: i,
    height: r
  }) {
    return e ? `${e}-${t}-${i}x${r}` : `${t}-${i}x${r}`;
  }({
    fileKey: m,
    nodeId: e,
    width: t,
    height: i
  });
  let E = p[v]?.hasUnresolvedImages || !1;
  useEffect(() => {
    if (l) return;
    let t = !0;
    u && !g && E && getImageManager().waitForImagesUnder([e], ImageExportType.LOW_RES_ONLY, s).then(() => {
      t && _(!0);
    });
    return () => {
      t = !1;
    };
  }, [g, v, e, s, E, u, l]);
  useEffect(() => {
    if (l) return;
    let r = null;
    !p[v] || p[v].version !== a || !p[v].imagesLoaded && g && p[v].hasUnresolvedImages ? (r && (r.abort(), r = null), r = new TaskController({
      priority: "user-visible"
    }), scheduler.postTask(() => {
      let r = !!u && getImageManager().unresolvedImagesUnder([e], ImageExportType.LOW_RES_ONLY).length > 0;
      let s = _G(new Point(t, i), e, !0, BackgroundPattern.TRANSPARENT, h);
      if (s && s.pixels && s.pixelSize && s.displaySize) {
        let e = {
          thumbnail: {
            src: Pv(s.pixels, s.pixelSize),
            displaySize: s.displaySize
          },
          imagesLoaded: g,
          hasUnresolvedImages: r,
          version: a
        };
        y(e.thumbnail);
        f && (p[v] = e);
        C(e => e + 1);
      }
    }, {
      signal: r.signal
    })) : y(p[v].thumbnail);
  }, [e, t, i, v, a, l, f, g, u, h]);
  return x ?? null;
}
export const ai = $$u0;
export const yh = $$h1;
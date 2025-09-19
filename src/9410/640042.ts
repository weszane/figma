import { useState, useEffect } from "react";
import { retryAsync } from "../figma_app/562352";
import { logger } from "../905/651849";
import { m as _$$m, y as _$$y } from "../9410/643761";
import { PN } from "../figma_app/897289";
import { Fe, uz } from "../905/284552";
import { fullscreenValue } from "../figma_app/455680";
import { getVisibleArea, getViewportInfo } from "../figma_app/62612";
import { useStrictDeepEqualSceneValue } from "../figma_app/167249";
import { fileApiHandler } from "../figma_app/787550";
var r;
let m = _$$m(g, (r = _$$y(6e4), (e, t) => !t.deferred.result && r(e, t)));
export function $$f1(e) {
  return m.useValue(e);
}
async function g(e) {
  return await retryAsync(() => _(e), 20, 1e3);
}
async function _(e) {
  let t = await x(e);
  if (!t) throw Error("Couldn't resolve video URL from server");
  return t;
}
async function x(e) {
  let t = await fullscreenValue.openFilePromise();
  if ("figFile" !== t.type) throw Error("Unsupported file");
  try {
    let i = await fileApiHandler.getVideosDownload({
      fileKey: t.fileKey,
      hexHash: e
    });
    if (200 !== i.status || i.data.error) throw Error("api error while resolving video");
    return i.data.meta.signed_url;
  } catch (t) {
    console.warn(`Couldn't download video with hash ${e}`);
    return t;
  }
}
let y = 1 / 15;
export function $$b2(e) {
  let [t, i] = useState(!0);
  let r = v(e);
  let a = getVisibleArea(getViewportInfo({
    subscribeToUpdates_expensive: !1
  }));
  useEffect(() => {
    let e = 0;
    r && (e = r.x * r.y);
    i(e / (a.height * a.width) < y);
  }, [r, a.height, a.width]);
  return t;
}
export function $$C0(e, {
  mediaPlayBadgeRadius: t = 24
} = {}) {
  let [i, r] = useState(!0);
  let a = v(e);
  let s = getViewportInfo({
    subscribeToUpdates_expensive: !1
  });
  useEffect(() => {
    a && r(a.x * s.zoomScale < 4 * t || a.y * s.zoomScale < 4 * t);
  }, [t, a, s.zoomScale]);
  return i;
}
function v(e) {
  return useStrictDeepEqualSceneValue((e, t) => {
    let i = e.get(t);
    return i ? i.size : null;
  }, e);
}
export async function $$E3(e, t, i) {
  if (window.VIDEOJS_NO_DYNAMIC_STYLE = !0, e) return e;
  t.style.height = "100%";
  t.style.width = "100%";
  t.style.display = "flex";
  t.style.justifyContent = "center";
  t.style.alignItems = "center";
  let r = void 0 !== t.volume ? t.volume : 1;
  let n = await Fe();
  return new Promise(e => {
    let a = n.videoJs(t, {
      muted: t.muted ?? !1,
      controls: !1,
      controlBar: !1,
      bigPlayButton: !1,
      loadingSpinner: !1,
      errorDisplay: !1,
      textTrackSettings: !1,
      textTrackDisplay: !1,
      nativeTextTracks: !1
    }, async () => {
      if (PN()) {
        a.src({
          type: "video/mp4",
          src: `https://static.figma.com/uploads/${i}`
        });
        e(a);
        return;
      }
      try {
        a.on("ready", () => {
          a.volume(r);
        });
        let t = await fullscreenValue.openFilePromise();
        if ("figFile" !== t.type) throw Error("Unsupported file");
        let n = `/api/files/${t.fileKey}/videos/${i}/manifest`;
        await uz(n, !0, a);
        e(a);
      } catch {
        try {
          let t = await _(i);
          logger.warn("Reverting to fallback video source");
          await uz(t, !1, a);
          e(a);
        } catch {
          e(null);
        }
      }
    });
  });
}
export const DD = $$C0;
export const RJ = $$f1;
export const ZU = $$b2;
export const mc = $$E3;
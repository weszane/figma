import { setupRemovableAtomFamily } from "../figma_app/615482";
import { Thumbnail, ImageExportType } from "../figma_app/763686";
import { atom, createRemovableAtomFamily, useAtomWithSubscription, atomStoreManager } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { uint8ArrayToBase64 } from "../figma_app/930338";
import { fullscreenValue } from "../figma_app/455680";
import { getImageManager } from "../figma_app/624361";
import { wK } from "../figma_app/546509";
let c = setupRemovableAtomFamily(() => atom({}));
let u = createRemovableAtomFamily(e => atom(t => t(c)[e] ?? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAABmCAYAAACN+dAoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABeSURBVHgB7cAxAQAAAMKg9U9tDQ8oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4NyDtAAG2m4HvAAAAAElFTkSuQmCC", (t, r, n) => {
  let i = t(c);
  r(c, {
    ...i,
    [e]: n
  });
}));
export function $$p2(e) {
  let t = u(e);
  return useAtomWithSubscription(t);
}
export function $$_3(e) {
  return !!atomStoreManager.get(c)[e];
}
function h(e, t, r, i, a, d, c = 20, u = {}) {
  let p = !0;
  let _ = t => {
    setTimeout(() => {
      if (!fullscreenValue.isReady() || !p) return;
      p = !t;
      let l = Thumbnail?.generateThumbnailForNode(e, i, a, c, u);
      if (l && l[0]) {
        let [t, r] = l;
        let n = uint8ArrayToBase64(r);
        let i = u.type ?? "PNG";
        let a = "image/png";
        "JPEG" === i ? a = "image/jpeg" : "PNG" === i && (a = "image/png");
        let o = `data:${a};base64,${n}`;
        d.onSuccess({
          metadata: t,
          thumbnailData: r,
          base64: n,
          dataUrl: o,
          guid: e
        });
      } else d.onFailure({
        guid: e,
        fileKey: r,
        reason: "generateThumbnailForNode returned null metadata"
      });
    });
  };
  (t ? getImageManager().loadAllImagesUnder([e], ImageExportType.LOW_RES_ONLY, "node.thumbnail") : getImageManager().waitForImagesUnder([e], ImageExportType.LOW_RES_ONLY, "node.thumbnail")).then(({
    totalImages: e
  }) => {
    e > 0 && _(!0);
  });
  _(!1);
}
export function $$m1(e, t, r, n, i, a = 20, s = {}) {
  return new Promise((o, l) => {
    h(e, t, r, n, i, {
      onSuccess: o,
      onFailure: l
    }, a, s);
  });
}
export function $$g0(e, t, r, n, s, o = 20, l = {}) {
  h(e, t, r, n, s, {
    onSuccess: t => {
      let r = wK();
      r?.updateSlideThumbnail ? r.updateSlideThumbnail(e, t.base64) : atomStoreManager.set(u(e), t.dataUrl);
    },
    onFailure: e => {
      trackEventAnalytics("Failed to generate thumbnail in editor for node", {
        fileKey: e.fileKey,
        guid: e.guid
      }, {
        forwardToDatadog: !0
      });
    }
  }, o, l);
}
export const I6 = $$g0;
export const Q = $$m1;
export const ic = $$p2;
export const lp = $$_3;
import { jsx } from "react/jsx-runtime";
import { lQ } from "../905/934246";
import n from "classnames";
import { logError, logWarning } from "../905/714362";
import { oW } from "../905/675859";
import { YI, $3 } from "../figma_app/427318";
import { Ek } from "../905/483217";
import { Sl } from "../figma_app/578832";
import { mH, zn, G8 } from "../5430/770886";
if (443 == require.j) {}
var o = n;
export function $$_2(e) {
  return ["video" === e.type ? e.thumbnail_url : e.url, "image" === e.type && "resized_thumbnail_urls" in e ? e.resized_thumbnail_urls : void 0];
}
export function $$p0({
  thumbnailUrl: e,
  resizedThumbnailUrls: t,
  resourceId: r,
  altText: n,
  thumbnailContext: c,
  isMobileCarousel: _
}) {
  let p;
  e && t ? p = jsx(Sl, {
    className: o()(mH, {
      [zn]: _
    }),
    image: e,
    onLoad: lQ,
    hubFileId: r,
    alt: n,
    thumbnailContext: c,
    resizedThumbnailUrls: t
  }) : e ? p = jsx(oW, {
    className: o()(mH, {
      [zn]: _
    }),
    src: e,
    loading: "lazy",
    alt: n,
    draggable: !1,
    onError: () => {
      logError("community", "Failed to load hero image on resource detail page", {
        resourceId: r,
        image: e
      });
    }
  }) : (logWarning("community", "Missing hero image on resource detail page", {
    resourceId: r
  }), p = jsx(Ek, {}));
  return jsx("div", {
    className: G8,
    children: p
  });
}
export function $$h3({
  thumbnailUrl: e,
  altText: t,
  resourceId: r
}) {
  return jsx(oW, {
    className: mH,
    src: e,
    loading: "lazy",
    alt: t,
    draggable: !1,
    onError: () => {
      logError("community", "Failed to load hero image closeup on resource detail page", {
        thumbnailUrl: e,
        resourceId: r
      });
    }
  });
}
export function $$x1(e, t) {
  return YI(t) ? `/api/plugins/${t.id}/videos/${e.video_file_uuid}/manifest` : $3(t) ? `/api/widgets/${t.id}/videos/${e.video_file_uuid}/manifest` : null;
}
export const F5 = $$p0;
export const Mf = $$x1;
export const P = $$_2;
export const ru = $$h3;
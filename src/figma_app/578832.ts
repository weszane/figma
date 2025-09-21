import { jsx, Fragment } from "react/jsx-runtime";
import { c } from "../905/320067";
import { y } from "../905/978641";
import { communityHubFileThumbnailSettings, communityHubFileThumbnailSizes } from "../905/458036";
var $$o0 = (e => (e.DETAIL = "detail", e.UNIVERSAL_INSERT = "universal_insert", e))($$o0 || {});
export function $$l2(e) {
  let t = {
    onLoad: e.onLoad,
    loading: "lazy",
    draggable: e.draggable
  };
  return jsx(c, {
    sizes: function (e) {
      switch (e) {
        case "universal_insert":
          return;
        case "detail":
          t = communityHubFileThumbnailSettings.COMMUNITY_HUB_FILE_THUMBNAIL_DETAIL;
          break;
        default:
          t = communityHubFileThumbnailSettings.COMMUNITY_HUB_FILE_THUMBNAIL_DEFAULT;
      }
      var t;
      var r = Object.entries(t).map(([e, t], r) => `(min-width: ${e}px) ${t}vw`);
      r.push("100vw");
      return r.join(", ");
    }(e.thumbnailContext),
    srcSet: function (e, t, r, n) {
      let i;
      if (!e || !t) return "";
      let a = Object.entries(r || {});
      if (!r) {
        let r = function (e) {
          if (!e) return;
          let t = e.lastIndexOf("/");
          let r = e.indexOf(".", t);
          return e.substring(t + 1, r);
        }(t);
        a = Object.keys(communityHubFileThumbnailSizes.COMMUNITY_HUB_FILE_THUMBNAIL).map(t => [t, `/community/file/${e}/thumbnail/${t}?signature=${r}`]);
      }
      return (a.push(["1600", t]), "universal_insert" === n ? a.map(([e, t]) => {
        let r = Math.round(parseInt(e) / 80 * 10) / 10;
        return `${t} ${r}x`;
      }) : a.map(([e, t]) => `${t} ${e}w`)).join(", ");
    }(e.hubFileId, e.image, e.resizedThumbnailUrls, e.thumbnailContext),
    src: e.image,
    image_type: y.COMMUNITY_HUB_FILE_THUMBNAIL,
    alt: e.alt,
    className: e.className,
    imageProps: t
  });
}
export function $$d1(e) {
  return e.hubFileId ? jsx($$l2, {
    ...e
  }) : jsx(Fragment, {});
}
export const O7 = $$o0;
export const Sl = $$d1;
export const Xy = $$l2;
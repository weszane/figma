import { Thumbnail } from "../figma_app/763686";
import { getTrackingSessionId } from "../905/471229";
import { D } from "../905/347702";
import { c as _$$c } from "../905/289751";
import { PJ, Oq } from "../905/588985";
export function $$l2(e, t) {
  let r = new XMLHttpRequest();
  r.open("GET", `/api/hub_files/cover_image?file_key=${e}`, !0);
  r.setRequestHeader("X-Figma-User-ID", t.id);
  r.setRequestHeader("X-Csrf-Bypass", "yes");
  r.setRequestHeader("tsid", getTrackingSessionId());
  r.responseType = "blob";
  return new Promise((e, t) => {
    r.onreadystatechange = function () {
      if (r.readyState !== XMLHttpRequest.DONE) return;
      if (r.status < 200 || r.status >= 400) {
        t(Error(`Failed to fetch thumbnail: ${r.statusText}`));
        return;
      }
      let n = new Image();
      n.src = URL.createObjectURL(r.response);
      n.onload = async () => {
        let t = document.createElement("canvas");
        t.width = PJ;
        t.height = Oq;
        let r = t.width;
        let i = n.height * (t.width / n.width);
        let a = 0;
        let l = t.height / 2 - i / 2;
        i < t.height && (i = t.height, r = n.width * (t.height / n.height), a = t.width / 2 - r / 2, l = 0);
        t.getContext("2d").drawImage(n, a, l, r, i);
        let d = await new Promise(e => t.toBlob(e));
        let [c] = await Promise.all([_$$c(d)]);
        e({
          url: URL.createObjectURL(new Blob([c || ""])),
          buffer: new Uint8Array(c)
        });
      };
    };
    r.send(null);
  });
}
export async function $$d1(...e) {
  try {
    return await $$l2(...e);
  } catch (e) {
    return null;
  }
}
let c = D(e => {
  if (!Thumbnail) return null;
  let [t, r] = Thumbnail.generateThumbnailForNode(e, PJ, Oq, 2, {});
  return r;
});
export function $$u0(e, t) {
  var r;
  let n;
  r = e?.thumbnailGuid;
  n = null;
  return (r && (n = c(r)), (!n || 0 === n.length) && t && (n = c(t)), n && 0 !== n.length) ? {
    url: URL.createObjectURL(new Blob([n])),
    buffer: n
  } : null;
}
export const $T = $$u0;
export const Sz = $$d1;
export const sf = $$l2;
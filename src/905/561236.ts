import { cM, aT } from "../905/530837";
export function $$r0(e, t) {
  let i = e.find(e => e.type === cM.NODE);
  let r = i?.mediumImageUrl || i?.preview_image_url || i?.image_url;
  if (r) return {
    thumbnail: r,
    padImage: !i.preview_image_url,
    thumbnailBackground: $$a1(i, t)
  };
  let s = e.find(e => e.type === cM.PROTOTYPE);
  let o = s?.imageUrl;
  if (o) return {
    thumbnail: o,
    padImage: !1,
    thumbnailBackground: $$a1(s, t)
  };
  let l = e.find(e => e.type === cM.IMAGE);
  let d = l?.mediumImageUrl || l?.preview_image_url || l?.url;
  if (d) return {
    thumbnail: d,
    padImage: !l?.preview_image_url,
    thumbnailBackground: $$a1(l, t)
  };
  let c = e.find(e => e.type === cM.VIDEO);
  let u = c?.coverImage;
  return u ? {
    thumbnail: u,
    padImage: !1,
    thumbnailBackground: $$a1(c, t)
  } : {
    thumbnail: "",
    padImage: !1,
    thumbnailBackground: $$a1(null, t)
  };
}
export function $$a1(e, t) {
  return e ? aT(e) ? "backgroundColor" in e && e.backgroundColor || t : "black" : "var(--color-bg-secondary)";
}
export const i = $$r0;
export const m = $$a1;
import { VH } from "../figma_app/178419";
import { Et } from "../905/125019";
import { Vzr } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { sf } from "../figma_app/12535";
export async function $$l0(e, t) {
  try {
    let i = await d();
    if (i?.thumbnailMedium != null) return {
      url: i.thumbnailMedium.url,
      buffer: i.thumbnailMedium.buffer
    };
    let n = await $$c2(e, t);
    if (n && n.thumbnailMedium) return {
      url: n.thumbnailMedium.url,
      buffer: n.thumbnailMedium.buffer
    };
    return null;
  } catch (e) {
    return null;
  }
}
async function d() {
  try {
    let e = VH(getSingletonSceneGraph());
    if (!e) return;
    let t = await $$u1(e.guid, {
      fixedWidth: 1920,
      fixedHeight: 1080,
      thumbnailScalingStrategy: "FILL_SPACE"
    });
    if (!t) return;
    return {
      allMedia: [t],
      thumbnailMedium: t
    };
  } catch (e) {}
}
export async function $$c2(e, t) {
  try {
    let i = await sf(e.key, t);
    return {
      thumbnailMedium: {
        ...i,
        type: "image",
        sha1: Et(i.buffer)
      },
      isSetByUser: !!e.thumbnail_guid
    };
  } catch {
    return null;
  }
}
export async function $$u1(e, t = {}) {
  return await scheduler.postTask(() => {
    if (!Vzr) return;
    let [i, n] = Vzr.generateThumbnailForNode(e, t.fixedWidth ?? 0, t.fixedHeight ?? 0, 10, {
      useAbsoluteBounds: !0,
      thumbnailScalingStrategy: t.thumbnailScalingStrategy
    });
    return {
      url: URL.createObjectURL(new Blob([n || ""])),
      buffer: n,
      sha1: Et(n),
      type: "image"
    };
  });
}
export const DM = $$l0;
export const Se = $$u1;
export const eV = $$c2;
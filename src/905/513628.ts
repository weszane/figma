import { throwTypeError } from "../figma_app/465776";
import { deepEqual } from "../905/382883";
import a from "../vendor/223926";
import o from "../vendor/149674";
import { buildCarouselMedia, fetchImageWithSha1 } from "../figma_app/471982";
import { unsetSymbol } from "../905/17894";
import { en, DM } from "../905/759470";
import { FTemplateCategoryType } from "../figma_app/191312";
var s = a;
var l = o;
function m(e, t) {
  if (e === t) return !0;
  if (!e || !t || "buffer" in e != "buffer" in t) return !1;
  if ("buffer" in e && "buffer" in t) {
    if (e.type !== t.type) return !1;
    if ("image" === e.type) return "image" === t.type && e.url === t.url && e.sha1 === t.sha1 && e.buffer.length === t.buffer.length;
    if ("video" === e.type) return "video" === t.type && e.url === t.url && e.sha1 === t.sha1 && e.buffer.length === t.buffer.length && e.thumbnail_url === t.thumbnail_url && e.thumbnail_sha1 === t.thumbnail_sha1 && e.thumbnail_buffer.length === t.thumbnail_buffer.length;
    throwTypeError(e);
  }
  return deepEqual(e, t);
}
export async function $$h0(e, t) {
  let i = await e;
  return i && (i.isSetByUser || t === FTemplateCategoryType.PROTOTYPE) ? i.thumbnailMedium : null;
}
export let $$g1 = {
  displayName: "CarouselMediaField",
  fetchInitialValue: async ({
    existingResourceContent: e,
    generateInitialValue: t
  }) => {
    if (t?.preferOverExistingValue === !0) {
      let e = await t.generate();
      if (e) return e;
    }
    if (e && "carousel_media_urls" in e) {
      let t = buildCarouselMedia(e);
      let i = (() => {
        if (t.length > 0) return "cover_image_carousel_media_id" in e && e.cover_image_carousel_media_id ? t.find(t => t.id === e.cover_image_carousel_media_id) : t[0];
      })();
      return {
        allMedia: t,
        thumbnailMedium: i
      };
    }
    if (e && "thumbnailUrl" in e) {
      let t = await fetchImageWithSha1(e.thumbnailUrl);
      if (t) return {
        allMedia: [t],
        thumbnailMedium: t
      };
    }
    if (t?.preferOverExistingValue === !1) {
      let e = await t.generate();
      if (e) return e;
    }
    return {
      allMedia: [],
      thumbnailMedium: void 0
    };
  },
  canSet: ({
    viewerModeField: e,
    createNewVersionOnSubmit: t,
    generateInitialValue: i
  }) => !i?.disallowManualUpdate && e?.currentValue !== unsetSymbol && (t || e?.currentValue !== FTemplateCategoryType.PROTOTYPE),
  validate: ({
    allowVideos: e,
    disallowExtraMedia: t,
    viewerModeField: i,
    generateInitialValue: n
  }, {
    thumbnailMedium: r,
    allMedia: a
  }) => {
    let o = [];
    if (r ? a.length > 0 && !a.some(e => m(e, r)) && o.push({
      key: "THUMBNAIL_NOT_IN_ALL_MEDIA",
      data: {
        thumbnailMedium: r,
        allMedia: a
      }
    }) : o.push({
      key: "THUMBNAIL_MEDIUM_MISSING",
      data: {}
    }), 0 === a.length) o.push({
      key: "CAROUSEL_MEDIA_EMPTY",
      data: {
        allowVideos: e
      }
    });else {
      if (!n) {
        let e = l()(s()(a, e => e.sha1), e => e.length > 1);
        Object.keys(e).length > 0 && o.push({
          key: "DUPLICATE_CAROUSEL_MEDIA",
          data: {
            duplicateMediaBySha1: e
          }
        });
      }
      (i?.currentValue === FTemplateCategoryType.PROTOTYPE || t) && a.length > 1 ? o.push({
        key: "EXTRA_MEDIA_NOT_ALLOWED",
        data: {}
      }) : a.length > en && o.push({
        key: "HAS_TOO_MANY_CAROUSEL_MEDIA",
        data: {
          allowVideos: e,
          maxNumOfCarouselMedia: en
        }
      });
      let r = a.filter(e => "video" === e.type).length;
      !e && r > 0 ? o.push({
        key: "VIDEOS_NOT_ALLOWED",
        data: {}
      }) : r > DM && o.push({
        key: "HAS_TOO_MANY_VIDEOS",
        data: {
          maxNumOfVideos: DM
        }
      });
    }
    return o;
  },
  isEqual: (e, t) => e.allMedia.length === t.allMedia.length && e.allMedia.every((e, i) => m(e, t.allMedia[i])) && m(e.thumbnailMedium, t.thumbnailMedium)
};
export const V = $$h0;
export const v = $$g1;
import { reportError } from '../905/11';
import { sha1Hex } from '../905/125019';
import { ServiceCategories } from '../905/165054';
import { fileCommentAttachmentAPI } from '../905/348437';
import { feedCommentAttachmentAPI } from '../905/375499';
import { isFeedPostComposer } from '../905/380385';
import { UploadError, uploadToPresignedPost } from '../905/623179';
import { DEFAULT_UPLOAD_CONFIG } from '../905/966582';
import { imageProcessor } from '../figma_app/291892';
export let $$p5 = 5;
export async function $$m1(e, t, i, p, m, h, g, f, A) {
  let y = await fetch(m).then(e => e.arrayBuffer()).then(e => new Uint8Array(e));
  let b = sha1Hex(y);
  let {
    thumbnailByteArray,
    dimensionData
  } = await new Promise((e, t) => {
    let i = new Image();
    i.crossOrigin = 'anonymous';
    i.onerror = e => t(e.message);
    i.onload = () => e(i);
    i.src = m;
    setTimeout(() => {
      t('Image load timeout during thumbnail generation');
    }, 5e3);
  }).then(e => {
    if (h === 'image/gif' || e.height <= 900 && e.width <= 900) {
      return Promise.resolve({
        dimensionData: {
          dimensions: {
            height: e.height,
            width: e.width
          },
          thumbnail_dimensions: {
            height: e.height,
            width: e.width
          }
        }
      });
    }
    let t = document.createElement('canvas');
    let i = t.getContext('2d');
    if (!i) {
      return Promise.resolve({
        dimensionData: {
          dimensions: {
            height: e.height,
            width: e.width
          },
          thumbnail_dimensions: {
            height: e.height,
            width: e.width
          }
        }
      });
    }
    let {
      width,
      height
    } = $$_0(e.width, e.height);
    let a = {
      dimensions: {
        height: e.height,
        width: e.width
      },
      thumbnail_dimensions: {
        height,
        width
      }
    };
    t.width = width;
    t.height = height;
    i.drawImage(e, 0, 0, width, height);
    let s = new Uint8Array(i.getImageData(0, 0, t.width, t.height).data);
    return {
      dimensionData: a,
      thumbnailByteArray: imageProcessor.encodeInPlace(t.width, t.height, s, h === 'image/jpeg', 60, !1)
    };
  });
  let E = {
    ...dimensionData,
    file_name: A
  };
  let x = sha1Hex(thumbnailByteArray ?? y);
  let S = isFeedPostComposer(e) ? feedCommentAttachmentAPI.post(h, b, x, f, E) : fileCommentAttachmentAPI.post(g, h, b, x, f, E);
  let w = isFeedPostComposer(e) ? ServiceCategories.WAYFINDING : ServiceCategories.FEEDBACK;
  return S.then(n => {
    if (n.status !== 200) {
      p(DEFAULT_UPLOAD_CONFIG);
      return;
    }
    let r = n.data.meta.uuid;
    let d = {
      id: r,
      mediaType: h,
      imageUrl: m,
      thumbnailUrl: m,
      uploadedAt: f,
      metadata: E,
      altText: null,
      isUploading: !0
    };
    t(d);
    let c = isFeedPostComposer(e) ? 'uploadImageFeedCommentAttachment' : 'uploadImageFileCommentAttachment';
    let u = Promise.all([uploadToPresignedPost(w, `${c}.image`, n.data.meta.image_presigned_post.upload_url, n.data.meta.image_presigned_post.fields, y, h), uploadToPresignedPost(w, `${c}.thumbnail`, n.data.meta.thumbnail_presigned_post.upload_url, n.data.meta.thumbnail_presigned_post.fields, thumbnailByteArray ?? y, h)]);
    i(e => ({
      ...e,
      [r]: u
    }));
    u.then(() => t({
      ...d,
      isUploading: !1
    })).catch(e => {
      reportError(w, e);
      p(DEFAULT_UPLOAD_CONFIG, d);
    });
  }).catch(e => {
    reportError(w, e);
    p(e instanceof UploadError ? e : DEFAULT_UPLOAD_CONFIG);
  });
}
export function $$h4(e, t, i) {
  return {
    ...e,
    fileCommentId: i,
    fileKey: t,
    createdAt: e.uploadedAt,
    deletedAt: null,
    type: e.mediaType.split('/')[0],
    imageSha1: '',
    thumbnailSha1: '',
    locality: ''
  };
}
export function $$g3(e, t, i) {
  return e.length ? e.reduce((e, n) => (e[n.id] = $$h4(n, t, i), e), {}) : null;
}
export function $$f2(e) {
  return e.length ? e.reduce((e, t) => (e[t] = null, e), {}) : null;
}
export function $$_0(e, t, i = 900) {
  let n = i;
  let r = i;
  e > t ? r = t / e * i : n = e / t * i;
  return {
    width: Math.round(n),
    height: Math.round(r)
  };
}
export const $K = $$_0;
export const JZ = $$m1;
export const LO = $$f2;
export const Mu = $$g3;
export const QG = $$h4;
export const xS = $$p5;
import { Wn, VY, yi, xp, id, Vx, PD } from "../905/966582";
import { EC } from "../figma_app/291892";
export function $$a0(e, t, i, r, s, o = []) {
  if (e.length > i) {
    s({
      type: Wn.MAX_UPLOADS_EXCEEDED,
      params: {
        maxNum: i
      }
    });
    return [];
  }
  let l = [];
  let d = e.filter(e => !o.some(t => t && t.name === e.name && t.lastModified === e.lastModified) || (l.push(e.name), !1));
  if (t + d.length > i) {
    s({
      type: Wn.MAX_UPLOADS_EXCEEDED,
      params: {
        maxNum: i
      }
    });
    return [];
  }
  let c = !1;
  let u = !1;
  let p = !1;
  let m = d.filter(e => r.includes(e.type) ? VY.includes(e.type) ? !(e.size > yi) || (c = !0, !1) : xp.includes(e.type) ? !(e.size > id) || (u = !0, !1) : (p = !0, !1) : (p = !0, !1));
  l.length > 0 && s({
    type: Wn.DUPLICATE_FILE_UPLOAD,
    params: {
      numFiles: l.length,
      fileNames: l.join(", ")
    }
  });
  p && s({
    type: Wn.INVALID_FILE_TYPE
  });
  c && s({
    type: Wn.MAX_VIDEO_SIZE_EXCEEDED,
    params: {
      maxFileSizeMB: Vx
    }
  });
  u && s({
    type: Wn.MAX_IMAGE_SIZE_EXCEEDED,
    params: {
      maxFileSizeMB: PD
    }
  });
  return m;
}
export function $$s1(e) {
  return new Promise((t, i) => {
    let n = document.createElement("video");
    n.preload = "auto";
    n.addEventListener("error", e => {
      i(e.message);
    });
    n.addEventListener("loadeddata", () => {
      setTimeout(() => t(n), 1e3);
    });
    n.src = e;
    n.currentTime = 0;
    n.load();
    setTimeout(() => {
      i("Video load timeout during thumbnail generation");
    }, 1e4);
  }).catch(() => function() {
    let e = document.createElement("canvas");
    e.width = 1600;
    e.height = 900;
    let t = e.getContext("2d");
    t && (t.fillStyle = "black", t.fillRect(0, 0, e.width, e.height));
    return Promise.resolve(e);
  }()).then(e => {
    let t = document.createElement("canvas").getContext("2d");
    if (!t) return Promise.resolve(new Uint8Array());
    let i = t.canvas;
    i.width = e instanceof HTMLCanvasElement ? e.width : e.videoWidth;
    i.height = e instanceof HTMLCanvasElement ? e.height : e.videoHeight;
    t.drawImage(e, 0, 0, i.width, i.height);
    let n = new Uint8Array(t.getImageData(0, 0, i.width, i.height).data.buffer);
    return EC.encodeInPlace(i.width, i.height, n, !1, 100, !1);
  });
}
export const K = $$a0;
export const j = $$s1; 

import { decodeBase64 } from "../905/561685";
import { RYP, UF0 } from "../figma_app/763686";
import { iL } from "../figma_app/762706";
import { f as _$$f, a as _$$a } from "../905/580661";
import { Ay } from "../figma_app/778880";
import { x1 } from "../905/714362";
import { XHR } from "../905/910117";
import { Y } from "../905/270066";
import { Ll, yy, fB } from "../905/515659";
import { o as _$$o } from "../905/22729";
import { X, e as _$$e } from "../905/271299";
let n;
let m = document.createElement("canvas");
let $$g6 = 4096;
let f = m.getContext("2d");
let E = document.createElement("canvas");
let y = function () {
  try {
    return E.getContext("2d", {
      colorSpace: "display-p3"
    });
  } catch {
    return null;
  }
}();
async function b(e, t, r, n) {
  let i = RYP.SRGB;
  if ("image/png" === t) {
    let t = Ll(e);
    if (e = t.withoutColorSpace, t.iccProfileRawData) try {
      i = Y(t.iccProfileRawData);
    } catch (e) {}
  }
  let s = null;
  if ("image/jpeg" === t) {
    try {
      let t = yy(e);
      t && (i = Y(t) ?? RYP.SRGB);
    } catch (e) {}
    s = _$$f.getOrientation(e);
    w && (s = null);
  }
  let l = !1;
  "image/gif" === t && (l = fB(e));
  let d = URL.createObjectURL(new Blob([e], {
    type: t
  }));
  try {
    let e = await $$F7({
      url: d,
      height: null,
      width: null
    });
    return {
      ...T(e, r, n, s, l),
      colorProfile: i
    };
  } finally {
    URL.revokeObjectURL(d);
  }
}
function T(e, t, r, n, i) {
  let {
    width,
    height,
    originalWidth,
    originalHeight,
    isRotated
  } = function (e, t, r, n, i) {
    let a = _$$f.angleFromOrientation(i);
    let s = _$$f.orientationIsFlipped(i);
    let l = e;
    let d = t;
    let c = e;
    let u = t;
    if (90 === a || 270 === a) {
      let r = t;
      t = e;
      e = r;
      r = u;
      u = c;
      c = r;
    }
    r > 0 && n > 0 && (e > r && (t = Math.round(t * r / e), e = r), t > n && (e = Math.round(e * n / t), t = n), e = Math.max(1, e), t = Math.max(1, t));
    m.width = e;
    m.height = t;
    f.translate(e / 2, t / 2);
    f.scale(e / c, t / u);
    s && f.scale(-1, 1);
    f.rotate(Math.PI / 180 * a);
    f.translate(-l / 2, -d / 2);
    return {
      originalHeight: u,
      originalWidth: c,
      width: e,
      height: t,
      isRotated: 0 !== a
    };
  }(e.width, e.height, t, r, n);
  f.drawImage(e, 0, 0);
  return {
    width,
    height,
    originalWidth,
    originalHeight,
    isMultiFrameGIF: i,
    isRotated,
    bitmap: null,
    rgba: new Uint8Array(f.getImageData(0, 0, width, height).data.buffer)
  };
}
function I(e) {
  return Uint8Array.from(atob(e), e => e.charCodeAt(0));
}
async function S() {
  let e = "/9j/4AAQSkZJRgABAgEASABIAAD/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAMAAAITAAMAAAABAAEAAAAAAAAAAAAcAAAAAQAAABwAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAQAAgDAREAAhEBAxEB/8QASwABAQAAAAAAAAAAAAAAAAAAAAsQAQAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ/4AP/Z";
  if (!C.works) return 16 == (await $$F7({
    url: `data:image/jpeg;base64,${e}`,
    height: null,
    width: null
  })).width;
  {
    let t = new Blob([I(e)], {
      type: "image/jpeg"
    });
    return 16 == (await createImageBitmap(t)).width;
  }
}
async function v() {
  if (!C.works) return !1;
  let e = document.createElement("canvas");
  e.width = 16;
  e.height = 8;
  let t = e.getContext("2d");
  let r = new Blob([Uint8Array.from(atob("/9j/4AAQSkZJRgABAgEASABIAAD/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAMAAAITAAMAAAABAAEAAAAAAAAAAAAcAAAAAQAAABwAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAQAAgDAREAAhEBAxEB/8QASwABAQAAAAAAAAAAAAAAAAAAAAsQAQAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ/4AP/Z"), e => e.charCodeAt(0))], {
    type: "image/jpeg"
  });
  t.drawImage(await createImageBitmap(r), 0, 0);
  let n = t.getImageData(0, 0, 16, 8);
  t.clearRect(0, 0, e.width, e.height);
  let i = URL.createObjectURL(r);
  let a = new Image();
  await new Promise(e => {
    a.onload = e;
    a.src = i;
  });
  t.drawImage(await createImageBitmap(a), 0, 0);
  let s = t.getImageData(0, 0, 16, 8);
  if (n.data.length !== s.data.length) return !1;
  for (var o = 0; o < n.data.length; ++o) if (n.data[o] !== s.data[o]) return !1;
  return !0;
}
async function A(e, t) {
  if (!e) return !1;
  try {
    let n = await createImageBitmap(t);
    let i = n.width;
    let a = n.height;
    let s = !1;
    let o = e.getParameter(e.ACTIVE_TEXTURE);
    e.activeTexture(e.TEXTURE0);
    let l = e.getParameter(e.FRAMEBUFFER_BINDING);
    let d = e.getParameter(e.TEXTURE_BINDING_2D);
    let c = null;
    let u = null;
    try {
      if (u = e.createTexture(), e.bindTexture(e.TEXTURE_2D, u), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, n), e.bindTexture(e.TEXTURE_2D, null), c = e.createFramebuffer(), e.bindFramebuffer(e.FRAMEBUFFER, c), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, u, 0), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, null), e.checkFramebufferStatus(e.FRAMEBUFFER) === e.FRAMEBUFFER_COMPLETE) {
        var r = new Uint8Array(4 * i * a);
        e.readPixels(0, 0, i, a, e.RGBA, e.UNSIGNED_BYTE, r);
        255 === r[0] && (s = !0);
      }
    } catch {}
    e.bindFramebuffer(e.FRAMEBUFFER, l);
    e.bindTexture(e.TEXTURE_2D, d);
    e.deleteTexture(u);
    e.deleteFramebuffer(c);
    e.activeTexture(o);
    return s;
  } catch {
    return !1;
  }
}
async function x() {
  w = await S();
  Ay.webkit && (await v());
}
async function N(e) {
  let t = new Blob([decodeBase64("iVBORw0KGgoAAAANSUhEUgAAAAEAAAAQBAMAAAAlsQiEAAAALVBMVEX///////////////////////////////////////////////////////8AAACgbBYXAAAAD3RSTlPx5NXDsJ2Ic19LOCgYDQAksqQSAAAAJklEQVQI12MAAQEGBQYDBgeGAIYEhgKGBoYJDAsYNjAcYHjAcAEAP7AGkQT7krEAAAAASUVORK5CYII=")], {
    type: "image/png"
  });
  try {
    try {
      await createImageBitmap(t, {
        premultiplyAlpha: "none"
      });
      return {
        works: !0,
        allowsOptions: !0
      };
    } catch (r) {
      return {
        works: await A(e, t),
        allowsOptions: !1
      };
    }
  } catch {
    return {
      works: !1,
      allowsOptions: !1
    };
  }
}
let C = {
  works: !1,
  allowsOptions: !1
};
let w = !1;
let O = !1;
let R = null;
let L = null;
let $$P3 = {
  init(e) {
    L = (async () => {
      if (e === UF0.YES) C = {
        works: !0,
        allowsOptions: !0
      };else {
        let e = (n || (n = iL()), n).ctx;
        if (!e) throw Error("Cannot find GL context");
        C = await N(e);
      }
      await x();
    })();
  },
  reset() {
    null !== R && R.forgetCallbacks();
  },
  prepareDataForEncodeInPlace(e, t, r, n, i = !1) {
    let a = e * t * 4;
    n && X(r, a);
    i && _$$e(r, a);
  },
  encodeInPlace(e, t, r, n, s, o, l = RYP.SRGB, d = !1) {
    let c;
    let u = m;
    let p = f;
    l === RYP.DISPLAY_P3 && E && y && (u = E, p = y);
    $$P3.prepareDataForEncodeInPlace(e, t, r, o, d);
    let _ = new ImageData(new Uint8ClampedArray(r.buffer), e, t);
    u.width = e;
    u.height = t;
    p.putImageData(_, 0, 0);
    c = n ? u.toDataURL("image/jpeg", s) : u.toDataURL();
    let h = ";base64,";
    return decodeBase64(c.slice(c.indexOf(h) + h.length));
  },
  encode: (e, t, r, n, i, s, o = RYP.SRGB, l = !1) => (r = new Uint8Array(r), $$P3.encodeInPlace(e, t, r, n, i, s, o, l)),
  async decodeAsync(e, t, r, n, i) {
    if (await L, !C.works) return await b(e, t, r, n);
    if (R ??= new _$$o(), "image/jpeg" === t && O) {
      let i = _$$f.getOrientation(e);
      if (null != i && i !== _$$a.ROTATE_0) return await b(e, t, r, n);
    }
    let a = null;
    let {
      bitmap,
      isMultiFrameGIF,
      colorProfile
    } = await k(t, e);
    if (!bitmap) {
      console.warn("Something wrong in createImageBitmap thread.  Bitmap is null ... falling back to decode using image");
      return await b(e, t, r, n);
    }
    let u = !1;
    "image/jpeg" === t && (u = a !== _$$a.ROTATE_0, null !== a && a !== _$$a.ROTATE_0 && w && Ay.chrome && 0 > Ay.compareVersions([Ay.version.toString(), "86"]) && (i = !1), w && (a = null));
    let p = bitmap.width;
    let h = bitmap.height;
    return i && (null === a || a === _$$a.ROTATE_0) && (0 === r || p <= r) && (0 === n || h <= n) ? {
      width: p,
      height: h,
      originalWidth: p,
      originalHeight: h,
      isMultiFrameGIF,
      isRotated: u,
      bitmap,
      colorProfile
    } : {
      ...T(bitmap, r, n, a, isMultiFrameGIF),
      colorProfile
    };
  },
  thumbnailSize(e, t) {
    let r = Math.max(e, t);
    let n = 0;
    for (; r > 512;) {
      n++;
      r = Math.floor((r + 1) / 2);
    }
    let i = $$P3.dropMips(e, t, n);
    return {
      w: i[0],
      h: i[1],
      mipsToDrop: n
    };
  },
  dropMips(e, t, r) {
    if (0 === e || 0 === t) {
      x1("images", "Width and height should not be zero");
      return [e, t];
    }
    for (let n = 0; n < r; ++n) {
      e = Math.floor((e + 1) / 2);
      t = Math.floor((t + 1) / 2);
    }
    return [e, t];
  },
  scaleImageBitmap(e, t, r, n) {
    m.width = t;
    m.height = r;
    f.translate(0, 0);
    f.scale(1, 1);
    f.rotate(0);
    f.drawImage(e, 0, 0, t, r);
    let i = m.toDataURL(n);
    let a = i.indexOf(",");
    return I(i.slice(a + 1));
  },
  async createCanvasAndDrawImage(e, t, r, n) {
    let i;
    let a;
    "undefined" != typeof OffscreenCanvas ? i = new OffscreenCanvas(e, t) : i = $$j2(e, t);
    let s = i.getContext("2d");
    if (!s) throw Error("Failed to get 2D context");
    r(s);
    i instanceof OffscreenCanvas ? a = await i.convertToBlob({
      type: n
    }) : a = await new Promise((e, t) => i.toBlob(r => {
      r ? e(r) : t(Error("Failed to create blob from canvas"));
    }, n));
    return {
      canvas: i,
      blob: a
    };
  },
  async generateThumbnail(e, t, r) {
    if (e.bitmap) {
      let {
        canvas,
        blob
      } = await this.createCanvasAndDrawImage(t, r, n => {
        n.drawImage(e.bitmap, 0, 0, t, r);
      }, e.mimeType);
      let a = await blob.arrayBuffer();
      let s = await createImageBitmap(canvas);
      return {
        compressedData: new Uint8Array(a),
        bitmap: s
      };
    }
    {
      let n = e.rgba;
      if (!n) throw Error("Failed to decode image");
      let i = new ImageData(new Uint8ClampedArray(n), e.width, e.height);
      let {
        canvas
      } = await this.createCanvasAndDrawImage(e.width, e.height, n => {
        n.putImageData(i, 0, 0);
        n.drawImage(n.canvas, 0, 0, e.width, e.height, 0, 0, t, r);
      }, e.mimeType);
      let s = canvas.getContext("2d");
      if (!s) throw Error("Failed to get context");
      let o = new Uint8Array(s.getImageData(0, 0, t, r).data);
      return {
        compressedData: this.encodeInPlace(t, r, o, "image/jpeg" === e.mimeType, 60, !1),
        decompressedData: o
      };
    }
  }
};
let $$D1 = 128;
async function k(e, t) {
  if ("image/heic" === e) try {
    let e = await XHR.post("/api/upnode/heic_convert", t, {
      retryCount: 3,
      headers: {
        ...XHR.requiredHeaders,
        "Content-Type": "image/heic"
      },
      rawBody: !0,
      responseType: "arraybuffer"
    });
    let r = new Uint8Array(e.data);
    let n = new Blob([r], {
      type: "image/jpeg"
    });
    let i = C.allowsOptions ? {
      premultiplyAlpha: "none"
    } : void 0;
    return {
      bitmap: await createImageBitmap(n, i),
      isMultiFrameGIF: !1,
      colorProfile: RYP.SRGB
    };
  } catch (e) {
    x1("image_io", "HEIC conversion via Upnode failed", {
      error: e.message,
      reportAsSentryError: !0
    });
    return {
      bitmap: null,
      isMultiFrameGIF: !1,
      colorProfile: RYP.SRGB
    };
  } else {
    if (!R) throw Error("Worker not initialized");
    return await R.sendMessage({
      type: e,
      array: t,
      supportsCreateBitmapOptions: C.allowsOptions
    });
  }
}
export async function $$M4(e) {
  return new Uint8Array((await XHR.crossOriginGet(e, void 0, {
    responseType: "arraybuffer",
    retryCount: 3
  })).data);
}
export function $$F7(e) {
  return new Promise((t, r) => {
    let n = new Image();
    e.height && (n.height = e.height);
    e.width && (n.width = e.width);
    n.crossOrigin = "";
    let i = Error();
    n.onerror = e => {
      e.cause = i;
      r(e);
    };
    n.onload = () => t(n);
    n.src = e.url;
  });
}
export function $$j2(e, t) {
  let r = document.createElement("canvas");
  r.width = e;
  r.height = t;
  return r;
}
export function $$U0(e) {
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(e)))}`;
}
export let $$B5 = {
  decodeImage: (e, t, r, n, i) => $$P3.decodeAsync(e, t, r, n, i),
  encodeImage: (e, t, r, n, i, a, s, o) => $$P3.encode(e, t, r, n, i, a, s, o),
  scaleImage: (e, t, r, n) => $$P3.scaleImageBitmap(e, t, r, n),
  cancelCurrentImageWorkers() {
    $$P3.reset();
  },
  init(e) {
    $$P3.init(e);
    O = e === UF0.YES;
  }
};
export const B0 = $$U0;
export const DK = $$D1;
export const Dl = $$j2;
export const EC = $$P3;
export const Nd = $$M4;
export const YN = $$B5;
export const d$ = $$g6;
export const w6 = $$F7;
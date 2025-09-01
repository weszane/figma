import { debounce } from "../905/915765";
import { ServiceCategories as _$$e } from "../905/165054";
import { c as _$$c } from "../905/499575";
import { Bko, AlE, d8m, MoD } from "../figma_app/763686";
import { createDeferredPromise } from "../905/874553";
import { getFeatureFlags } from "../905/601108";
import { LF4 } from "../vendor/678915";
import { sx } from "../905/449184";
import { buildStaticUrl } from "../figma_app/169182";
import { Jj } from "../figma_app/553184";
import { $D } from "../905/11";
import { x1, Lo, xi } from "../905/714362";
import { XHR, XHRError } from "../905/910117";
import { EC, d$ } from "../figma_app/291892";
import { Y5 } from "../figma_app/455680";
let E = new Uint8Array([171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10]).toString();
var y = (e => (e.FILE_KEY = "fileKey", e.LIBRARY_KEY = "libraryKey", e))(y || {});
export async function $$b1(e, t, r, n) {
  let i = "figFile" === t.type ? `/file/${t.fileKey}/image/batch` : `/community/file/${t.hubFileId}/image/batch`;
  try {
    let t = await XHR.post(i, {
      sha1s: e,
      max_size: r,
      needs_compressed_textures: n
    }, {
      retryCount: 1 / 0
    });
    if (200 !== t.status || t.data.error) throw Error("api error while resolving images");
    return {
      s3_urls: t.data.meta.s3_urls,
      compressed_texture_s3_urls: t.data.meta.compressed_texture_s3_urls
    };
  } catch (t) {
    console.warn(`Couldn't download image(s) with hashes ${e}`);
    return t;
  }
}
class T extends Error {
  constructor(e = "IMAGE_MISSING") {
    super(e);
    Object.setPrototypeOf(this, T.prototype);
  }
}
class I extends Error {
  constructor(e = "FILE_KEY_MISSING") {
    super(e);
    Object.setPrototypeOf(this, I.prototype);
  }
}
class S extends Error {
  constructor(e = "IMAGE_EXPIRED") {
    super(e);
    Object.setPrototypeOf(this, S.prototype);
  }
}
var v = (e => (e[e.AWAITING_SINATRA_LOOKUP = 0] = "AWAITING_SINATRA_LOOKUP", e[e.LOOKUP = 1] = "LOOKUP", e[e.AWAITING_COMPRESSED_TEXTURE_AVAILABILITY_LOOKUP = 2] = "AWAITING_COMPRESSED_TEXTURE_AVAILABILITY_LOOKUP", e[e.LOOKING_UPCOMPRESSED_TEXTURE_AVAILABILITY = 3] = "LOOKING_UPCOMPRESSED_TEXTURE_AVAILABILITY", e[e.UPLOADING = 4] = "UPLOADING", e[e.READY = 5] = "READY", e[e.MISSING = 6] = "MISSING", e[e.FAILED = 7] = "FAILED", e[e.PRESENT = 8] = "PRESENT", e))(v || {});
let A = class e {
  constructor(e, t) {
    this.hash = e;
    this._priority = t;
    this.compressedTextureS3Path = null;
    this.shouldDownloadCompressedTexture = null;
    this.retries = 0;
    this.state = 0;
    this._downloadPromise = null;
    this._imageIsReady = () => { };
    this._readyPromise = new Promise(e => {
      this._imageIsReady = e;
    });
  }
  set priority(t) {
    this._priority !== e.MAX_PRIORITY && (this._priority = t);
  }
  get priority() {
    return this._priority;
  }
  imageIsReady() {
    this._imageIsReady();
  }
  readyPromise() {
    return this._readyPromise;
  }
  isExpired() {
    let e = null;
    try {
      if (!(e = new URL(this.s3Path).searchParams.get("Expires"))) return !1;
      e = parseInt(e, 10);
    } catch {
      return !1;
    }
    return e < Date.now() / 1e3;
  }
  downloadFromS3() {
    if (!this.shouldDownloadCompressedTexture && null == this.s3Path) throw Error("Called downloadFromS3 without s3Path");
    if (this.shouldDownloadCompressedTexture && null == this.compressedTextureS3Path) throw Error("Called downloadFromS3 without compressedTextureS3Path when downloading compressed texture");
    return XHR.crossOriginGetAny(this.shouldDownloadCompressedTexture ? this.compressedTextureS3Path : this.s3Path, null, {
      responseType: "arraybuffer"
    }).then(e => e.data).catch(e => {
      if (this.isExpired()) throw new S();
      if (0 !== e.status && e.status < 500) {
        let t = this.s3Path?.includes("resize") ? "Can't load image! Make sure Pixie service is running locally" : "Image is missing from S3!";
        x1("image", t, {
          hash: this.hash,
          status: e.status
        });
        $D(_$$e.SCENEGRAPH_AND_SYNC, Error("Image missing from S3"));
      }
      throw e;
    });
  }
  download(e) {
    if (!this._downloadPromise) {
      let e = this.downloadFromS3();
      e.$$finally(() => {
        this._downloadPromise = null;
      }).catch(e => { });
      this._downloadPromise = e;
    }
    return this._downloadPromise;
  }
};
A.MAX_PRIORITY = Number.MAX_SAFE_INTEGER;
class x {
  constructor() {
    this.queue = [];
    this.byHash = new Map();
    this.needsSort = !1;
  }
  get length() {
    return this.queue.length;
  }
  ensureSorted() {
    this.needsSort && (this.queue.sort((e, t) => t.priority - e.priority), this.needsSort = !1);
  }
  numEligible(e) {
    this.ensureSorted();
    let t = this.queue.findIndex(t => t.priority < e);
    return t < 0 ? this.queue.length : t;
  }
  push(...e) {
    for (let t of (this.queue.push(...e), e)) this.byHash.set(t.hash, t);
    this.needsSort = !0;
  }
  updatePriority(e, t) {
    let r = this.byHash.get(e);
    return null != r && (r.priority = t, this.needsSort = !0, !0);
  }
  pop(e) {
    if (this.ensureSorted(), 0 === this.queue.length || this.queue[0].priority < e) return null;
    let t = Date.now();
    let r = 1 / 0;
    for (let e = 0; e < this.queue.length; e++) {
      let n = this.queue[e].retryTime;
      if (null == n || t >= n) {
        let [t] = this.queue.splice(e, 1);
        this.byHash.$$delete(t.hash);
        return {
          found: !0,
          image: t
        };
      }
      r = n < r ? n : r;
    }
    return {
      found: !1,
      retryDelay: r - t
    };
  }
  find(e) {
    return this.byHash.get(e) ?? null;
  }
  erase(e) {
    let t = this.byHash.get(e);
    if (t) {
      this.byHash.$$delete(e);
      let r = this.queue.findIndex(e => e === t);
      r >= 0 && this.queue.splice(r, 1);
    }
  }
  debugString() {
    return this.queue.map(e => `${e.hash}(${e.priority})`).join(",");
  }
}
function N() {
  return Y5.openFilePromise();
}
class C extends Error {
  constructor(e, t) {
    super(e);
    this.lookupImages = t;
  }
}
let w = class e {
  constructor() {
    this.pendingPasteRequests = {};
    this.pendingImagesToRecord = {};
    this.pendingRecordImagesTasks = {};
    this.pendingImagesToRecordByLibraryKey = {};
    this.pendingRecordImagesTasksByLibraryKey = {};
    this.imagesNeedingDirectUpload = new Set();
    this.imageTimingLog = new Map();
    this.MAX_REQUESTS = 3;
    this.SINATRA_BATCH_SIZE = 100;
    this.verbose = getFeatureFlags().image_verbose;
    this.incomingImages = new Map();
    this.pendingLookupCallback = null;
    this.downloadQueue = new x();
    this.minPriority = 0;
    this.downloadsPaused = !1;
    this.allImages = new Map();
    this.pendingDecodes = new Set();
    this.pendingDownloads = new Set();
    this.cancelDownloads = new Set();
    this.alreadyDownloaded = new Set();
    this.pendingUploads = new Set();
    this.uploadedImagesNeedingUrl = new Set();
    this.pendingImagesCallback = null;
    this.imageQueueEmpty = null;
    this.incomingImagesLookedUp = null;
    this.allImagesUploaded = null;
    this.progressCallbacks = [];
    this.imageMaxSize = void 0;
    this.compressedTextureLookupQueue = [];
    this.compressedTextureRetryCount = new Map();
    this.LOGGING_RATE = .1;
    this.flushPendingRecordImages = debounce(async (t = !1) => {
      let r = this.pendingImagesToRecord;
      let n = this.pendingRecordImagesTasks;
      let i = this.pendingImagesToRecordByLibraryKey;
      let a = this.pendingRecordImagesTasksByLibraryKey;
      let o = Object.keys(r);
      let l = Object.keys(i);
      let d = o.map(e => ({
        fileKey: e,
        type: "fileKey"
      })).concat(l.map(e => ({
        libraryKey: e,
        type: "libraryKey"
      })));
      this.pendingImagesToRecord = {};
      this.pendingRecordImagesTasks = {};
      this.pendingImagesToRecordByLibraryKey = {};
      this.pendingRecordImagesTasksByLibraryKey = {};
      let u = await this.getEditingFileKey();
      d.forEach(async o => {
        if ("fileKey" === o.type && u === o.fileKey) {
          n[o.fileKey].resolve();
          return;
        }
        if ("fileKey" === o.type && !o.fileKey) {
          n[o.fileKey].reject("Invalid originFileKey");
          return;
        }
        let l = 1;
        let d = "fileKey" === o.type ? r[o.fileKey] : i[o.libraryKey];
        for (; ;) {
          try {
            let r = await XHR.put(`/api/files/${u}`, {
              image_sha1s: [...new Set(d)],
              image_origin_file_key: "fileKey" === o.type ? o.fileKey : void 0,
              image_origin_library_key: "libraryKey" === o.type ? o.libraryKey : void 0,
              is_playground: t
            });
            let {
              success,
              failed
            } = e.parseFileUpdateResponseForImages(d, r);
            for (let e of (Bko.imagePermissionsCopied(success), failed)) this.markImageMissing(e);
            for (let e of (failed.length > 0 && sx("image_permission_copy_failed", {
              shas: failed.join(",")
            }), d)) delete this.pendingPasteRequests[e];
            "fileKey" === o.type ? n[o.fileKey].resolve() : a[o.libraryKey].resolve();
            return;
          } catch (e) {
            if (e.status >= 400 && e.status < 500) {
              for (let e of (Jj(), sx("image_permission_copy_failed", {
                shas: d.join(",")
              }), d)) {
                this.markImageMissing(e);
                delete this.pendingPasteRequests[e];
              }
              ("fileKey" === o.type ? n[o.fileKey] : a[o.libraryKey]).reject(`4xx error when pasting images ${e}`);
              return;
            }
          }
          let r = 1e3 * l * Math.random();
          await new Promise(e => setTimeout(e, r));
          l = Math.min(2 * l, 64);
        }
      });
    }, 100);
  }
  static shouldUseCompressedTextures() {
    return e._shouldUseCompressedTextures;
  }
  getEditingFileKey() {
    return Y5.openFileKeyPromise();
  }
  getOrCreateImageLogData(e) {
    let t = this.imageTimingLog.get(e);
    t || (t = {}, this.imageTimingLog.set(e, t));
    return t;
  }
  recordImagesFromLibraryKey(e, t, r = !1) {
    if (0 === t.length) return Promise.resolve();
    if (!e) return Promise.reject(Error("No originLibraryKey specified"));
    if (this.pendingImagesToRecordByLibraryKey[e] ??= [], this.pendingImagesToRecordByLibraryKey[e].push(...t), !this.pendingRecordImagesTasksByLibraryKey[e]) {
      let t;
      let r;
      let n = new Promise((e, n) => {
        t = e;
        r = n;
      });
      this.pendingRecordImagesTasksByLibraryKey[e] = {
        promise: n,
        resolve: t,
        reject: r
      };
    }
    for (let r of t) this.pendingPasteRequests[r] = this.pendingRecordImagesTasksByLibraryKey[e].promise;
    let n = this.pendingRecordImagesTasksByLibraryKey[e].promise;
    this.flushPendingRecordImages(r);
    return n;
  }
  recordImages(e, t) {
    if (0 === t.length) return Promise.resolve();
    if (!e) return Promise.reject(Error("No originFileKey specified"));
    if (this.pendingImagesToRecord[e] = this.pendingImagesToRecord[e] || [], this.pendingImagesToRecord[e].push(...t), !this.pendingRecordImagesTasks[e]) {
      let t;
      let r;
      let n = new Promise((e, n) => {
        t = e;
        r = n;
      });
      this.pendingRecordImagesTasks[e] = {
        promise: n,
        resolve: t,
        reject: r
      };
    }
    for (let r of t) this.pendingPasteRequests[r] = this.pendingRecordImagesTasks[e].promise;
    let r = this.pendingRecordImagesTasks[e].promise;
    this.flushPendingRecordImages();
    return r;
  }
  static parseFileUpdateResponseForImages(e, t) {
    try {
      if (t?.data?.meta?.missing_shas) {
        let r = new Set(t.data.meta.missing_shas);
        return {
          success: e.filter(e => !r.has(e)),
          failed: Array.from(r)
        };
      }
    } catch { }
    return {
      success: e,
      failed: []
    };
  }
  async resolveImageUrls(t) {
    let r = await N();
    let n = await $$b1(t, r, this.imageMaxSize, e.shouldUseCompressedTextures());
    let i = t.filter(e => !(e in n.s3_urls));
    if (i.length > 0) {
      let t = await Y5.sourceFileKeyPromise();
      if (t) {
        let r = await $$b1(i, {
          type: "figFile",
          fileKey: t
        }, void 0, e.shouldUseCompressedTextures());
        return {
          s3_urls: {
            ...n.s3_urls,
            ...r.s3_urls
          },
          compressed_texture_s3_urls: {
            ...n.compressed_texture_s3_urls,
            ...r.compressed_texture_s3_urls
          }
        };
      }
    }
    return {
      s3_urls: n.s3_urls,
      compressed_texture_s3_urls: n.compressed_texture_s3_urls
    };
  }
  queueImageForLookup(e) {
    let t = e.hash;
    this.verbose && Lo("image", "incoming", {
      hash: t
    });
    e.state = 0;
    this.incomingImages.set(t, e);
    null == this.pendingLookupCallback && (this.pendingLookupCallback = setTimeout(() => {
      this.pendingLookupCallback = null;
      this.lookupImages().catch(e => $D(_$$e.SCENEGRAPH_AND_SYNC, e));
    }, 0));
  }
  setExternalSource(e, t) {
    let r = new A(e, A.MAX_PRIORITY);
    r.s3Path = t;
    this.allImages.set(e, r);
    this.downloadQueue.push(r);
    this.imagesNeedingDirectUpload.add(e);
    this.maybeDownloadMoreImages();
  }
  triggerCompressedTextureAvailabilityLookup(e, t) {
    let r = this.allImages.get(e);
    r && 2 === r.state && new Promise((e, r) => {
      let n = this.compressedTextureLookupQueue.splice(0, this.SINATRA_BATCH_SIZE);
      if (0 === n.length) return null;
      for (let e of n) this.markImageLookingUpCompressedTextureAvailability(e);
      try {
        XHR.post(`/file/${t}/compressed_texture_available/batch`, {
          sha1s: n
        }).then(t => {
          e(t);
        }).catch(e => {
          r(new C(e.message, n));
        });
      } catch (e) {
        r(new C(e.message, n));
      }
    }).then(e => {
      if (!e) return;
      let r = e.data.meta.results;
      for (let e of Object.keys(r)) this.resolveCompressedTextureAvailabilityLookup(e, t, r[e]);
    }).catch(e => {
      for (let r of e.lookupImages) this.resolveCompressedTextureAvailabilityLookup(r, t, null);
    });
  }
  resolveCompressedTextureAvailabilityLookup(e, t, r) {
    let n = this.allImages.get(e);
    let i = this.compressedTextureRetryCount.get(e) || 0;
    if ("generating" === r && i < 20) {
      let r = 500 * (1 << Math.min(i, 4));
      this.compressedTextureLookupQueue.push(e);
      this.markImageNeedsCompressedTextureAvailabilityLookup(e);
      this.compressedTextureRetryCount.set(e, i + 1);
      setTimeout(() => this.enqueueImageToCheckCompressedTextureAvailability(e, t), r);
    } else {
      this.markImagePresent(e);
      this.downloadQueue.push(n);
      let t = this.getOrCreateImageLogData(e);
      switch (t.compressedTextureRetryCount = i, t.compressedTextureResult = r, r) {
        case "generated":
          n.shouldDownloadCompressedTexture = !0;
          break;
        case "failed":
        case null:
        case "generating":
          this.compressedTextureRetryCount.$$delete(e);
          n.shouldDownloadCompressedTexture = !1;
      }
      this.maybeDownloadMoreImages();
    }
  }
  enqueueImageToCheckCompressedTextureAvailability(e, t) {
    setTimeout(() => {
      this.triggerCompressedTextureAvailabilityLookup(e, t);
    }, 0);
  }
  setImageDownloadPriority(e, t) {
    let r = this.getOrCreateImageLogData(e);
    if (r.downloadPriority = t, r.downloadPriorityTimestamp = performance.now(), !e) {
      xi("setImageDownloadPriority", "invalid hash");
      return;
    }
    let n = this.allImages.get(e);
    if (null == n) {
      n = new A(e, t);
      this.allImages.set(e, n);
      this.queueImageForLookup(n);
      return;
    }
    4 === n.state && x1("image", "Got download request for currently uploading image", {
      hash: e
    }, {
      reportAsSentryError: !0
    });
    n.priority = t;
    this.downloadQueue.updatePriority(e, t) && this.maybeDownloadMoreImages();
  }
  setMinimumImagePriority(e) {
    this.minPriority = e;
    this.maybeDownloadMoreImages();
  }
  pauseImageDownloads() {
    this.downloadsPaused = !0;
  }
  resumeImageDownloads() {
    this.downloadsPaused = !1;
    this.maybeDownloadMoreImages();
  }
  maybeDownloadMoreImages() {
    for (; this.pendingDownloads.size < this.MAX_REQUESTS && this.downloadQueue.length > 0 && !this.downloadsPaused;) {
      let t = this.downloadQueue.pop(this.minPriority);
      if (null == t) break;
      if (!t.found) {
        let e = t.retryDelay;
        !Number.isFinite(e) || e <= 0 ? $D(_$$e.SCENEGRAPH_AND_SYNC, Error("Logic error in download queue, cannot compute next retry")) : setTimeout(() => this.maybeDownloadMoreImages(), e);
        break;
      }
      let r = t.image;
      let n = this.getOrCreateImageLogData(r.hash);
      if (r.hash) {
        this.verbose && Lo("image", "download start", {
          hash: r.hash,
          ok: !this.pendingDownloads.has(r.hash)
        });
        let e = performance.now();
        n.downloadStartedTimestamp = e;
        this.pendingDownloads.add(r.hash);
      }
      r.download(this.imageMaxSize).then(t => {
        if (this.cancelDownloads.$$delete(r.hash)) return;
        this.verbose && (Lo("image", "download done", {
          hash: r.hash,
          ok: !this.alreadyDownloaded.has(r.hash)
        }), this.getOrCreateImageLogData(r.hash).downloadFinishedTimestamp = performance.now());
        this.alreadyDownloaded.add(r.hash);
        let n = null;
        if (this.imagesNeedingDirectUpload.has(r.hash)) {
          Bko.imageDownloadedForPaste(r.hash, t);
          this.imagesNeedingDirectUpload.$$delete(r.hash);
        } else {
          let i = t;
          if (e.shouldUseCompressedTextures() && t.slice(0, 12).toString() === E) {
            let e = LF4(t);
            n = {
              width: e.pixelWidth,
              height: e.pixelHeight
            };
            Bko.setCompressedTextureMetadata(r.hash, n);
            i = e.levels[0].levelData;
            this.clearImageDecodePending(r.hash, !0);
          }
          Bko.imageDownloaded(r.hash, i);
        }
        n || this.pendingDecodes.has(r.hash) || (xi("ImageManager", "missing pending decode after download", {
          hash: r.hash
        }), $D(_$$e.SCENEGRAPH_AND_SYNC, Error("missing pending decode after image marked as downloaded")), r.imageIsReady());
      }, e => {
        if (this.pendingDecodes.$$delete(r.hash) && this.maybeResolveImageQueueEmptyAndPendingImages(), this.cancelDownloads.$$delete(r.hash)) return;
        if (e instanceof T) this.markImageMissing(r.hash); else if (e instanceof I) {
          $D(_$$e.SCENEGRAPH_AND_SYNC, e);
          this.markImageFailed(r.hash);
        } else if (e instanceof S) this.queueImageForLookup(r); else {
          if (e instanceof XHRError && 403 === e.status) {
            this.markImageFailed(r.hash);
            return;
          }
          let t = 5e3 * (1 << Math.min(r.retries, 4));
          t += t * Math.random();
          r.retries += 1;
          (429 === e.status || 503 === e.status) && (t *= 4);
          r.retryTime = Date.now() + t;
          this.downloadQueue.push(r);
        }
        let t = this.getOrCreateImageLogData(r.hash);
        let n = this.allImages.get(r.hash);
        n && (t.decodedImageState = n.state);
        t.errorOccurredTimestamp = performance.now();
      }).$$finally(() => {
        this.pendingDownloads.$$delete(r.hash);
        this.maybeDownloadMoreImages();
      });
    }
    this.pendingImagesCallback?.(this.pendingImages);
    this.maybeResolveImageQueueEmptyAndPendingImages();
  }
  forceDownloadImage(e) {
    this.setImageDownloadPriority(e, A.MAX_PRIORITY);
  }
  setImageDecodePending(e) {
    this.verbose && Lo("image", "decode start", {
      hash: e,
      ok: !this.pendingDecodes.has(e)
    });
    this.getOrCreateImageLogData(e).downloadFinishedTimestamp = performance.now();
    this.pendingDecodes.add(e);
  }
  getSignedUrls(e) {
    let t = new Map();
    for (let r of e) {
      let e = this.allImages.get(r);
      e && e.s3Path && t.set(r, e.s3Path);
    }
    return t;
  }
  clearImageDecodePending(e, t) {
    this.verbose && Lo("image", "decode done", {
      hash: e,
      ok: this.pendingDecodes.has(e)
    });
    let r = this.getOrCreateImageLogData(e);
    r.decodeFinishedTimestamp = performance.now();
    this.pendingDecodes.$$delete(e) && this.maybeResolveImageQueueEmptyAndPendingImages();
    t ? (this.markImageReady(e), r.decodedImageState = 5) : (this.markImageFailed(e), r.decodedImageState = 7);
    getFeatureFlags().image_log_timing && Math.random() < this.LOGGING_RATE && sx("image_log_timing", {
      hash: e,
      ...r
    });
  }
  markImagePresent(e) {
    let t = this.allImages.get(e);
    t && (t.state = 8, Bko.imageIsPresent(e));
  }
  markImageMissing(e) {
    let t = this.allImages.get(e);
    t && (t.state = 6, Bko.imageIsMissing(e), t.imageIsReady());
  }
  markImageFailed(e) {
    let t = this.allImages.get(e);
    t && (t.state = 7, t.imageIsReady());
  }
  markImageReady(e) {
    let t = this.allImages.get(e);
    t && (t.state = 5, t.imageIsReady());
  }
  markImageNeedsCompressedTextureAvailabilityLookup(e) {
    let t = this.allImages.get(e);
    t && (t.state = 2, this.lookupCompressedTextureAvailabilities(e));
  }
  markImageLookingUpCompressedTextureAvailability(e) {
    let t = this.allImages.get(e);
    t && (t.state = 3);
  }
  async lookupImages() {
    let t = [];
    for (let e of this.incomingImages.values()) 0 === e.state && (t.push(e), e.state = 1, this.verbose && Lo("image", "lookup", {
      hash: e.hash
    }));
    try {
      for (; t.length > 0;) {
        let r = t.splice(0, this.SINATRA_BATCH_SIZE);
        for (let e of r) {
          let t = this.pendingPasteRequests[e.hash];
          if (t) try {
            await t;
          } catch (t) {
            x1("lookupImages", "pastePromise failed", {
              hash: e.hash
            });
          }
        }
        let n = await this.resolveImageUrls(r.map(e => e.hash));
        for (let t of r) {
          let r = n.s3_urls[t.hash];
          let i = null;
          e.shouldUseCompressedTextures() && (i = n.compressed_texture_s3_urls[t.hash]);
          r ? (t.s3Path = r, i ? (t.compressedTextureS3Path = i, this.compressedTextureLookupQueue.push(t.hash), this.markImageNeedsCompressedTextureAvailabilityLookup(t.hash), this.lookupCompressedTextureAvailabilities(t.hash)) : (this.markImagePresent(t.hash), this.downloadQueue.push(t)), this.verbose && Lo("image", "enqueued-batch", {
            hash: t.hash
          })) : (this.markImageMissing(t.hash), this.verbose && Lo("image", "missing", {
            hash: t.hash
          }));
          this.incomingImages.$$delete(t.hash);
        }
      }
    } finally {
      for (let e of t) this.incomingImages.$$delete(e.hash) && xi("image", "incoming fallback delete", {
        hash: e.hash
      });
      null != this.incomingImagesLookedUp && this.incomingImagesLookedUp.resolve();
    }
    e.shouldUseCompressedTextures() || this.maybeDownloadMoreImages();
  }
  lookupCompressedTextureAvailabilities(e) {
    N().then(t => {
      "figFile" === t.type && this.enqueueImageToCheckCompressedTextureAvailability(e, t.fileKey);
    });
  }
  forgetImage(e) {
    if (this.imagesNeedingDirectUpload.has(e)) return;
    this.verbose && Lo("image", "forget", {
      hash: e
    });
    this.incomingImages.$$delete(e);
    this.downloadQueue.erase(e);
    this.pendingDownloads.has(e) && this.cancelDownloads.add(e);
    this.alreadyDownloaded.$$delete(e);
    this.pendingDecodes.$$delete(e);
    this.imageTimingLog.$$delete(e);
    this.maybeResolveImageQueueEmptyAndPendingImages();
    this.maybeResolveImagesLookedUp();
    let t = this.allImages.get(e);
    t && (this.allImages.$$delete(e), 5 !== t.state && t.imageIsReady());
  }
  getNumEligibleForDownload() {
    return this.downloadQueue.numEligible(this.minPriority);
  }
  get pendingImages() {
    let e = this.getNumEligibleForDownload();
    this.verbose && Lo("image", "pendingImages", {
      incoming: this.incomingImages.size,
      eligible: e,
      downloads: this.pendingDownloads.size,
      decode: this.pendingDecodes.size
    });
    return this.incomingImages.size + e + this.pendingDownloads.size + this.pendingDecodes.size;
  }
  setPendingImagesCallback(e) {
    this.pendingImagesCallback = e;
  }
  imageQueueEmptyPromise() {
    if (!this.imageQueueEmpty) {
      let e = performance.now();
      this.imageQueueEmpty = createDeferredPromise();
      this.verbose && Lo("image", "queue empty defer installed", {
        start: e
      });
      this.imageQueueEmpty.promise.$$finally(() => {
        this.imageQueueEmpty = null;
        let t = performance.now() - e;
        this.verbose ? Lo("image", "queue empty defer cleared", {
          start: e,
          elapsed: t
        }) : t > 1e4 && xi("image", "queue empty finished after a long time", {
          start: e,
          elapsed: t
        });
      });
      this.emptyQueueCheck(this.imageQueueEmpty, e, 3e4);
    }
    let e = this.imageQueueEmpty.promise;
    this.maybeResolveImageQueueEmptyAndPendingImages();
    return e;
  }
  imageLookupPromise() {
    this.incomingImagesLookedUp || (this.incomingImagesLookedUp = createDeferredPromise(), this.incomingImagesLookedUp.promise.$$finally(() => {
      this.incomingImagesLookedUp = null;
    }));
    let e = this.incomingImagesLookedUp.promise;
    this.maybeResolveImagesLookedUp();
    return e;
  }
  emptyQueueCheck(e, t, r) {
    setTimeout(() => {
      if (e === this.imageQueueEmpty) {
        let n = Math.round(.001 * (performance.now() - t));
        xi("image", "queue empty is taking a long time", {
          elapsedSec: n,
          pending: this.pendingImages,
          downloads: this.pendingDownloads.size,
          decodes: this.pendingDecodes.size
        });
        this.verbose && Lo("image", "slow", {
          downloads: this.pendingDownloads,
          decodes: this.pendingDecodes
        });
        let i = Math.min(2 * r, 9e5);
        this.emptyQueueCheck(e, t, i);
      }
    }, r);
  }
  maybeResolveImageQueueEmptyAndPendingImages() {
    let e = this.pendingImages;
    for (let t of this.progressCallbacks) t(e);
    this.imageQueueEmpty && 0 === e && (this.verbose && Lo("image", "resolve queue empty!"), this.imageQueueEmpty.resolve(), this.progressCallbacks = []);
    this.maybeResolveImagesLookedUp();
  }
  maybeResolveImagesLookedUp() {
    0 === this.incomingImages.size && this.incomingImagesLookedUp?.resolve();
  }
  unresolvedImagesUnder(e, t, r) {
    let n = r ?? AlE?.getMutableActiveDocument();
    if (!n) return [];
    let i = Bko?.findImagesUnder(n, e, t);
    return i ? i.map(e => this.allImages.get(e)).filter(e => void 0 !== e && 5 !== e.state && 4 !== e.state) : [];
  }
  loadAllImagesUnder(e, t, r, n = null, i) {
    return this.loadAllImages(e, t, r, n, !0, i);
  }
  waitForImagesUnder(e, t, r, n = null, i) {
    return this.loadAllImages(e, t, r, n, !1, i);
  }
  imageIsPendingDecode(e) {
    return this.pendingDecodes.has(e);
  }
  async loadAllImages(e, t, r, n = null, i, a) {
    let s = performance.now();
    this.verbose && Lo("image", "loadAllImagesUnder", {
      reason: r,
      guids: e,
      start: s
    });
    e.includes("0:0") && "playground.initialLoad" !== r && x1("image", "loadAllImagesUnder called with full document", {
      reason: r
    });
    let o = 0;
    let l = new Promise(r => {
      let s = this.unresolvedImagesUnder(e, t, a);
      if (0 === (o = s.length)) r({
        totalImages: o
      }); else {
        var l;
        let e = o;
        for (let t of (l = e, n && n(l, o), s)) {
          i && this.setImageDownloadPriority(t.hash, A.MAX_PRIORITY);
          t.readyPromise().$$finally(() => {
            var t;
            t = --e;
            n && n(t, o);
            0 === e && r({
              totalImages: o
            });
          });
        }
      }
    });
    return await l;
  }
  async loadImageByHash(e) {
    this.verbose && Lo("image", "loadImageByHash", {
      hash: e
    });
    let t = this.allImages.get(e);
    if (t) switch (t.state) {
      case 4:
      case 5:
      case 6:
      case 7:
        return;
    }
    this.setImageDownloadPriority(e, A.MAX_PRIORITY);
    await this.imageQueueEmptyPromise();
  }
  setImageMaxSize(e) {
    this.imageMaxSize = e;
  }
  setShouldUseCompressedTextures(t) {
    e._shouldUseCompressedTextures = t;
  }
  markImageUploading(e) {
    this.pendingUploads.add(e);
  }
  markImageUploaded(e) {
    this.pendingUploads.has(e) || xi("image", "markImageUploaded called for unknown image", {
      imageHash: e
    });
    this.pendingUploads.$$delete(e);
    this.uploadedImagesNeedingUrl.add(e);
    this.maybeResolveImagesUploaded();
  }
  startUploadingImage(e, t, r, n) {
    if (this.pendingUploads.has(n)) return;
    this.pendingUploads.add(n);
    let i = new A(n, 0);
    i.state = 4;
    this.allImages.set(n, i);
    let a = `/api/upnode/image?purpose=canvas&sha1=${n}&fileKey=${e}`;
    let o = 0;
    XHR.post(a, t, {
      retryCount: 1 / 0,
      headers: {
        ...XHR.defaults.headers,
        "Content-Type": r
      },
      rawBody: !0,
      uploadEvents: {
        loadstart: () => {
          i.retries = o;
          o += 1;
        }
      }
    }).then(e => {
      if (200 !== e.status) {
        x1("image", "unexpected status code from image upload", {
          hash: n,
          status: e.status
        }, {
          reportAsSentryError: !0
        });
        return;
      }
      Lo("image", "uploaded new image", {
        hash: n
      });
      this.pendingUploads.$$delete(n);
      Bko.imageUploadFinished(n, d8m.SUCCESS);
      i.state = 5;
      this.uploadedImagesNeedingUrl.add(n);
      this.maybeResolveImagesUploaded();
    }, e => {
      let t;
      415 === e.status ? (x1("image", "image upload failed, removing invalid image", {
        hash: n
      }), t = d8m.UNSUPPORTED_MEDIA) : t = d8m.OTHER_FAILURE;
      this.pendingUploads.$$delete(n);
      Bko.imageUploadFinished(n, t);
      this.maybeResolveImagesUploaded();
    });
  }
  pendingUploadStats() {
    let e = new Set();
    for (let t of this.pendingUploads) {
      let r = this.allImages.get(t);
      r && r.retries > 0 && e.add(t);
    }
    return [this.pendingUploads, e];
  }
  async maybeResolveImagesUploaded() {
    if (0 === this.pendingUploads.size) {
      let e = Array.from(this.uploadedImagesNeedingUrl);
      this.uploadedImagesNeedingUrl.clear();
      for (let t = 0; t < e.length; t += this.SINATRA_BATCH_SIZE) {
        let r = e.slice(t, t + this.SINATRA_BATCH_SIZE);
        let n = await this.resolveImageUrls(r);
        for (let e of r) {
          let t = n.s3_urls[e];
          if (t) {
            let r = this.allImages.get(e);
            if (r) r.s3Path = t; else {
              let r = new A(e, 0);
              r.s3Path = t;
              r.state = 5;
              this.allImages.set(e, r);
            }
          }
        }
      }
      this.allImagesUploaded?.resolve();
    }
  }
  imageUploadPromise() {
    this.allImagesUploaded || (this.allImagesUploaded = createDeferredPromise(), this.allImagesUploaded.promise.$$finally(() => {
      this.allImagesUploaded = null;
    }));
    let e = this.allImagesUploaded.promise;
    this.maybeResolveImagesUploaded();
    return e;
  }
  logDebugInfo(e) {
    for (let t of e) {
      let e = this.allImages.get(t);
      let r = new Set();
      for (let e of Object.values(this.pendingImagesToRecord)) for (let t of e) r.add(t);
      Lo("ImageManager", "Blocking image info", {
        hash: t,
        state: e ? e.state : "NO IMAGE",
        inIncoming: t in this.incomingImages,
        inQueue: null != this.downloadQueue.find(t),
        inPending: t in this.pendingDownloads,
        inFinished: t in this.alreadyDownloaded,
        inPendingRecord: t in r
      });
    }
    let [t, r] = this.pendingUploadStats();
    let n = Array.from(this.incomingImages.values()).map(e => e.hash).join(",");
    let i = Array.from(this.pendingDownloads).join(",");
    let a = Array.from(this.alreadyDownloaded).join(",");
    let s = this.downloadQueue.debugString();
    let o = Array.from(t).join(",");
    let l = Array.from(r).join(",");
    Lo("ImageManager", "ImageManager debug info", {
      incomingImages: n,
      downloadQueue: s,
      pendingDownloads: i,
      alreadyDownloaded: a,
      pendingUploads: o,
      uploadBackoffs: l,
      pendingImagesToRecord: this.pendingImagesToRecord
    });
  }
  getDebugState() {
    let e = Bko.getImageResourceDebugInfo();
    let t = new Map();
    e.forEach(e => {
      t.set(e.hash, {
        ...e,
        tsState: this.allImages.get(e.hash)?.state
      });
    });
    this.allImages.forEach((e, r) => {
      t.has(r) || t.set(r, {
        hash: r,
        tsState: e.state
      });
    });
    return t;
  }
  static includeOutsideContents(e) {
    return e.some(e => !1 === e.contentsOnly);
  }
};
w._shouldUseCompressedTextures = !1;
let $$O4 = w;
let $$R3 = new class {
  constructor() {
    this.imageManager = new $$O4();
  }
  copyImagePermissions(e, t) {
    return this.imageManager.recordImages(e, t);
  }
  copyImagePermissionsFromLibraryKey(e, t, r) {
    return this.imageManager.recordImagesFromLibraryKey(e, t, r);
  }
  setImageDownloadPriority(e, t) {
    this.imageManager.setImageDownloadPriority(e, t);
  }
  forceDownloadImage(e) {
    this.imageManager.forceDownloadImage(e);
  }
  setMinimumImagePriority(e) {
    this.imageManager.setMinimumImagePriority(e);
  }
  forgetImage(e) {
    this.imageManager.forgetImage(e);
  }
  setImageDecodePending(e) {
    this.imageManager.setImageDecodePending(e);
  }
  clearImageDecodePending(e, t) {
    this.imageManager.clearImageDecodePending(e, t);
  }
  async downloadEmoji(e) {
    return (await XHR.crossOriginGetAny(e, null, {
      responseType: "arraybuffer"
    })).data;
  }
  markImageUploading(e) {
    this.imageManager.markImageUploading(e);
  }
  markImageUploaded(e) {
    this.imageManager.markImageUploaded(e);
  }
  startUploadingImage(e, t, r, n) {
    this.imageManager.startUploadingImage(e, t, r, n);
  }
  pendingUploadStats() {
    return this.imageManager.pendingUploadStats();
  }
  logDebugInfo(e) {
    this.imageManager.logDebugInfo(e);
  }
  pauseImageDownloads() {
    this.imageManager.pauseImageDownloads();
  }
  resumeImageDownloads() {
    this.imageManager.resumeImageDownloads();
  }
  getSignedUrls(e) {
    return this.imageManager.getSignedUrls(e);
  }
  getImageHostDomain() {
    return window.location.hostname;
  }
  setExternalSource(e, t) {
    this.imageManager.setExternalSource(e, t);
  }
  staticAssetWithPath(e) {
    return buildStaticUrl(e);
  }
}();
export function $$L0() {
  return $$R3.imageManager;
}
export async function $$P2(e, t, r) {
  if (!Bko.imageTypeDecodeSupported(t)) throw Error(`Image type ${t} is not supported and cannot be decoded`);
  let n = await EC.decodeAsync(e, t, d$, d$, !0);
  let i = await crypto.subtle.digest("SHA-1", e);
  let a = {
    width: n.width,
    height: n.height,
    compressedData: e,
    hash: new Uint8Array(i),
    bitmap: n.bitmap ? n.bitmap : void 0,
    mimeType: t,
    rgba: n.rgba ? n.rgba : new Uint8Array(),
    name: r
  };
  let o = EC.thumbnailSize(n.width, n.height);
  let l = await EC.generateThumbnail(a, o.w, o.h);
  let d = await crypto.subtle.digest("SHA-1", l.compressedData);
  return {
    fullResolution: a,
    thumbnail: {
      width: o.w,
      height: o.h,
      compressedData: l.compressedData,
      hash: new Uint8Array(d),
      bitmap: l.bitmap,
      mimeType: t,
      rgba: l.decompressedData,
      name: r
    }
  };
}
async function D(e, t) {
  let r = !!$$O4.includeOutsideContents(t);
  await $$L0().loadAllImagesUnder([r ? e.containingCanvas || "-1:-1" : e.guid], MoD.NON_ANIMATED_ONLY, "plugins.loadImagesAndExport");
}
_$$c(D);
export const Jr = $$L0;
export const Mj = $$b1;
export const UD = $$P2;
export const j5 = $$R3;
export const xY = $$O4; 

import { debounce } from "../905/915765";
import { VideoCppBindings } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { XHR } from "../905/910117";
import { C } from "../905/991119";
import { S } from "../figma_app/787550";
import { fullscreenValue } from "../figma_app/455680";
import { xY } from "../figma_app/624361";
import { thumbnailGenerator } from "../905/435722";
var p = (e => (e.FILE_KEY = "fileKey", e.LIBRARY_KEY = "libraryKey", e))(p || {});
class _ {
  constructor() {
    this.pendingPasteRequests = {};
    this.pendingVideosToRecordByFileKey = {};
    this.pendingVideosToRecordByLibraryKey = {};
    this.pendingRecordVideosTasksByFileKey = {};
    this.pendingRecordVideosTasksByLibraryKey = {};
    this.allVideos = {};
    this.flushPendingRecordVideos = debounce(async () => {
      let e = this.pendingVideosToRecordByFileKey;
      let t = this.pendingVideosToRecordByLibraryKey;
      let r = this.pendingRecordVideosTasksByFileKey;
      let n = this.pendingRecordVideosTasksByLibraryKey;
      let a = Object.keys(e).map(e => ({
        fileKey: e,
        type: "fileKey"
      })).concat(Object.keys(t).map(e => ({
        libraryKey: e,
        type: "libraryKey"
      })));
      this.pendingVideosToRecordByFileKey = {};
      this.pendingRecordVideosTasksByFileKey = {};
      this.pendingVideosToRecordByLibraryKey = {};
      this.pendingRecordVideosTasksByLibraryKey = {};
      let o = await this.getEditingFileKey();
      a.forEach(async a => {
        if ("fileKey" === a.type && a.fileKey === o) {
          r[a.fileKey].resolve();
          return;
        }
        if ("fileKey" === a.type && !a.fileKey) {
          r[a.fileKey].reject("Invalid originFileKey");
          return;
        }
        let l = 1;
        let d = "fileKey" === a.type ? e[a.fileKey] : t[a.libraryKey];
        for (;;) {
          try {
            let e = await XHR.put(`/api/files/${o}`, {
              video_sha1s: [...new Set(d)],
              image_origin_file_key: "fileKey" === a.type ? a.fileKey : void 0,
              image_origin_library_key: "libraryKey" === a.type ? a.libraryKey : void 0
            });
            let {
              success,
              failed
            } = xY.parseFileUpdateResponseForImages(d, e);
            for (let e of (VideoCppBindings.markVideoPermissionsCopied(success), failed)) VideoCppBindings.videoIsMissing(e);
            for (let e of d) delete this.pendingPasteRequests[e];
            "fileKey" === a.type ? r[a.fileKey].resolve() : n[a.libraryKey].resolve();
            this.getAllVideoUrls();
            return;
          } catch (e) {
            if (e.status >= 400 && e.status < 500) {
              for (let e of d) {
                VideoCppBindings.videoIsMissing(e);
                delete this.pendingPasteRequests[e];
              }
              "fileKey" === a.type ? r[a.fileKey].resolve() : n[a.libraryKey].resolve();
              return;
            }
          }
          let e = 1e3 * l * Math.random();
          await new Promise(t => setTimeout(t, e));
          l = Math.min(2 * l, 64);
        }
      });
    }, 100);
    this.contextLostCallbacks = new Map();
    this.nextContextLostCallbackId = 0;
  }
  async getAllVideoUrls() {
    if (!getFeatureFlags().cross_env_paste) return;
    let e = await S.getVideos({
      fileKey: await this.getEditingFileKey()
    });
    this.allVideos = e.data.meta.videos;
  }
  getSignedUrls(e) {
    let t = new Map();
    for (let r of e) t.set(r, this.allVideos[r]);
    return t;
  }
  recordVideos(e, t) {
    if (0 === t.length) return Promise.resolve();
    if (!e) throw Error("No originFileKey specified");
    if (this.pendingVideosToRecordByFileKey[e] = this.pendingVideosToRecordByFileKey[e] || [], this.pendingVideosToRecordByFileKey[e].push(...t), !this.pendingRecordVideosTasksByFileKey[e]) {
      let t;
      let r;
      let n = new Promise((e, n) => {
        t = e;
        r = n;
      });
      this.pendingRecordVideosTasksByFileKey[e] = {
        promise: n,
        resolve: t,
        reject: r
      };
    }
    for (let r of t) this.pendingPasteRequests[r] = this.pendingRecordVideosTasksByFileKey[e].promise;
    let r = this.pendingRecordVideosTasksByFileKey[e].promise;
    this.flushPendingRecordVideos();
    return r;
  }
  recordVideosFromLibraryKey(e, t) {
    if (0 === t.length) return Promise.resolve();
    if (!e) throw Error("No sourceLibraryKey specified");
    if (this.pendingVideosToRecordByLibraryKey[e] ??= [], this.pendingVideosToRecordByLibraryKey[e].push(...t), !this.pendingRecordVideosTasksByLibraryKey[e]) {
      let t;
      let r;
      let n = new Promise((e, n) => {
        t = e;
        r = n;
      });
      this.pendingRecordVideosTasksByLibraryKey[e] = {
        promise: n,
        resolve: t,
        reject: r
      };
    }
    for (let r of t) this.pendingPasteRequests[r] = this.pendingRecordVideosTasksByLibraryKey[e].promise;
    let r = this.pendingRecordVideosTasksByLibraryKey[e].promise;
    this.flushPendingRecordVideos();
    return r;
  }
  getEditingFileKey() {
    return fullscreenValue.openFileKeyPromise();
  }
  contextLost() {
    for (let e of this.contextLostCallbacks.values()) e();
  }
  subscribeToContextLost(e) {
    let t = this.nextContextLostCallbackId++;
    this.contextLostCallbacks.set(t, e);
    return () => {
      this.contextLostCallbacks.$$delete(t);
    };
  }
}
export let $$h0 = new class {
  constructor() {
    this.videoManager = new _();
    this.thumbnailGenerator = thumbnailGenerator;
  }
  copyVideoPermissions(e, t) {
    return this.videoManager.recordVideos(e, t);
  }
  copyVideoPermissionsFromLibraryKey(e, t) {
    return this.videoManager.recordVideosFromLibraryKey(e, t);
  }
  createVideo() {
    return this.thumbnailGenerator.createVideo();
  }
  deleteVideo(e) {
    this.thumbnailGenerator.deleteVideo(e);
  }
  getWidth(e) {
    return this.thumbnailGenerator.getWidth(e);
  }
  getHeight(e) {
    return this.thumbnailGenerator.getHeight(e);
  }
  getCoverImage(e) {
    return this.thumbnailGenerator.getCoverImage(e);
  }
  loadVideo(e, t, r) {
    return this.thumbnailGenerator.loadVideo(e, t, r);
  }
  getSignedUrls(e) {
    return this.videoManager.getSignedUrls(e);
  }
  async setExternalSource(e, t) {
    let r = await fetch(t);
    let n = new Uint8Array(await r.arrayBuffer());
    let i = await fullscreenValue.openFileKeyPromise();
    C([{
      sha1: e,
      bytes: n
    }], i);
  }
  loadAllVideos() {
    return this.videoManager.getAllVideoUrls();
  }
  contextLost() {
    this.videoManager.contextLost();
  }
}();
export function $$m1() {
  return $$h0.videoManager;
}
export const fm = $$h0;
export const tG = $$m1;
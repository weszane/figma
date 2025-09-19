import { assert } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { ImageExportType, SitesBindingsCpp } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { getInitialOptions } from "../figma_app/169182";
import { captureException, reportError } from "../905/11";
import { getImageManager } from "../figma_app/624361";
import { z } from "../905/931953";
import { F } from "../905/672930";
let p = "sts_asset_cache_";
class _ {
  constructor({
    initialMemoryCache: e = new Map()
  } = {}) {
    this.getAssetDataForInstruction = f;
    this.cache = e;
  }
  async getAssetData(e) {
    let t = e.filename;
    if (this.cache.has(t)) return {
      data: this.cache.get(t) || null,
      fromCache: !0
    };
    let r = await this.getAssetDataForInstruction(e);
    r && this.cache.set(t, r);
    return {
      data: r,
      fromCache: !1
    };
  }
}
class h {
  createResponse = e => new Response(e, {
    headers: {
      Expires: this.getAssetExpiresDate()
    }
  });
  constructor({
    cacheStorageVersion: e,
    cachesOverride: t
  } = {}) {
    this.caches = window.caches;
    this.getAssetDataForInstruction = f;
    if (!e) throw Error("Cache storage version is required.");
    this.cacheStorageName = `${p}${e}`;
    t && (this.caches = t);
    this.cleanUpCaches();
  }
  async getAssetData(e) {
    if (!this.cacheStorageName) throw Error("Cache storage name is not set. Unable to use cache storage.");
    let t = e.filename;
    let r = await this.caches.open(this.cacheStorageName);
    let n = await r.match(t);
    if (n) {
      let e = n.headers.get("Expires");
      if (e && !this.isAssetExpired(e)) return {
        data: await n.blob(),
        fromCache: !0
      };
    }
    let i = await this.getAssetDataForInstruction(e);
    i && r.put(t, this.createResponse(i));
    return {
      data: i,
      fromCache: !1
    };
  }
  getAssetExpiresDate() {
    return new Date(new Date().getTime() + 6048e5).toUTCString();
  }
  isAssetExpired(e) {
    return new Date() >= new Date(e);
  }
  async cleanUpCaches() {
    if (this.cacheStorageName) try {
      (await this.caches.keys()).forEach(async e => {
        e.startsWith(p) && e !== this.cacheStorageName && (await this.caches.$$delete(e));
      });
    } catch (e) {
      captureException(e);
    }
  }
}
let m = class {
  constructor({
    useCacheStorage: e,
    cacheStorageVersion: t
  } = {}) {
    e && t && window.caches ? this.cache = new h({
      cacheStorageVersion: t
    }) : this.cache = new _();
  }
  async getAssetData(e) {
    return await this.cache.getAssetData(e);
  }
};
m.instance = new m({
  useCacheStorage: getFeatureFlags().sts_asset_cache_storage,
  cacheStorageVersion: getInitialOptions().sts_assets_version
});
export let $$g2 = m;
async function f(e) {
  switch (e.type) {
    case "VIDEO_ASSET":
      return null;
    case "PAINT_ASSET":
      return await E(e);
    case "PAINT_FILL_ASSET":
    case "GENERATED_ASSET":
      return await y(e);
    default:
      assert(!1, "Unknown asset type: " + e.type);
  }
}
async function E(e) {
  let t;
  let r = F().getImageByHash(e.hash);
  if (!r) return null;
  try {
    t = await r.getBytesAsync();
  } catch (e) {
    console.error("sites getPaintAssetData: Unable to find image resource.");
    return null;
  }
  return new Blob([t], {
    type: "image/png"
  });
}
async function y(e) {
  let t;
  "GENERATED_ASSET" === e.type ? await getImageManager().loadAllImagesUnder([e.nodeId], ImageExportType.ALL, "sites.assetGeneration") : "PAINT_FILL_ASSET" === e.type && "IMAGE" === e.fill.type && (await getImageManager().loadImageByHash(e.fill.imageRef));
  let r = (SitesBindingsCpp?.generateSitesAssets({
    assets: [e]
  }) || {
    assetsJson: {},
    files: []
  }).files[0];
  if (!r) return null;
  let i = r.url.endsWith(".svg");
  if (i) t = "image/svg+xml";else {
    let e = r.url.split(".");
    let i = e[e.length - 1];
    assert(!!i, "Unable to find file extension for filename: " + r.url);
    t = `image/${i.toLowerCase()}`;
  }
  return new Blob([i ? function (e, t = {
    isMask: !1
  }) {
    let {
      isMask = !1
    } = t;
    if (!isMask) return e;
    try {
      let t = new TextDecoder("utf-8").decode(e);
      let r = new DOMParser().parseFromString(t, "image/svg+xml");
      let n = r.querySelector("svg");
      let i = r.querySelector("parsererror");
      if (!n || i) throw Error(`Unable to load SVG: ${i}`);
      n.setAttribute("preserveAspectRatio", "none");
      n.setAttribute("width", "100%");
      n.setAttribute("height", "100%");
      let a = new XMLSerializer().serializeToString(n);
      return new TextEncoder().encode(a);
    } catch (t) {
      return e;
    }
  }(r.file) : r.file], {
    type: t
  });
}
let b = class {
  constructor() {
    this.cache = {};
  }
  hasURLsForHashes(e) {
    return e.every(e => !!this.cache[e]);
  }
  setURLs(e) {
    this.cache = {
      ...this.cache,
      ...e
    };
  }
  getURLForHash(e) {
    return this.cache[e];
  }
};
b.instance = new b();
let $$T0 = b;
let I = class {
  constructor() {
    this.cache = new Map();
  }
  async fetchAndCacheMetadata(e, t) {
    try {
      if (this.cache.has(t)) return;
      let r = (await z.getFileVideoMetadata({
        fileKey: e,
        sha1: t
      })).data.meta.metadata;
      let n = {
        mime: r.mime,
        bytes: r.bytes ? parseInt(r.bytes) : 0
      };
      this.cache.set(t, n);
    } catch (e) {
      reportError(_$$e.SITES_WEB_RUNTIME, Error(`Failed to fetch video metadata for ${t}`));
    }
  }
  async populateCacheForHashes(e, t) {
    await Promise.allSettled(t.map(t => this.fetchAndCacheMetadata(e, t)));
  }
  getMetadataForHash(e) {
    return this.cache.get(e);
  }
};
I.instance = new I();
export let $$S1 = I;
export const MV = $$T0;
export const dk = $$S1;
export const po = $$g2;